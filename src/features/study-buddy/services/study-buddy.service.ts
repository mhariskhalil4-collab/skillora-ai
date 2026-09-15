import { supabase } from '@/lib/supabase';
import { ChatMessage, ChatContext, StudyBuddyApiResponse, StudyBuddyHealthStatus, StudyBuddyErrorCode } from '../types/chat.types';

const REQUEST_TIMEOUT_MS = 30000; // Strict 30-second request timeout
const MAX_RETRIES = 2; // Limited retries for transient errors

function getLocalStorageKey(context?: ChatContext | null): string {
  const contextId = context?.courseId || context?.roadmapId || 'general';
  return `skillora_chat_messages_${contextId}`;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatErrorMessage(errorCode?: StudyBuddyErrorCode, serverMessage?: string): string {
  switch (errorCode) {
    case 'AI_CONFIG_ERROR':
      return 'Study Buddy is temporarily unavailable because the AI service needs configuration. Please try again later.';
    case 'AI_AUTH_ERROR':
      return 'AI service authentication failed. Please contact support or try again later.';
    case 'AI_RATE_LIMIT':
      return 'Too many requests are being processed right now. Please wait a moment and try again.';
    case 'AI_TIMEOUT':
      return 'The response took too long. Please try again.';
    case 'AI_NETWORK_ERROR':
      return 'Unable to connect to Skillora AI services. Please check your internet connection and try again.';
    case 'AI_UNAVAILABLE':
      return 'The AI service is temporarily busy. Please try again in a few moments.';
    case 'INVALID_REQUEST':
      return serverMessage || 'Invalid request. Please enter a valid question.';
    default:
      return serverMessage || 'Unable to receive response from AI. Please try again in a moment.';
  }
}

function isCorruptedMessage(content: string): boolean {
  if (!content || typeof content !== 'string') return true;
  if (content.includes('API key not valid')) return true;
  if (content.includes('Status 400:')) return true;
  if (content.includes('Please click retry in a moment!')) return true;
  if (content.includes('generativelanguage.googleapis.com')) return true;
  if (content.trim().startsWith('{') && content.includes('"error"')) return true;
  return false;
}

export const StudyBuddyService = {
  /**
   * Generates a dynamic greeting message tailored to what the student is actively studying.
   */
  generateInitialGreeting: (context?: ChatContext | null, userName?: string): ChatMessage => {
    const greetingName = userName ? ` ${userName}` : '';
    const topic = context?.taskTitle || context?.courseTitle || 'your learning goals';

    return {
      id: 'msg_welcome',
      role: 'assistant',
      content: `Hi${greetingName}! 👋 I'm your AI Study Buddy.\n\nI see you're currently working on **${topic}**. What questions do you have? You can ask me to explain a concept with an analogy, walk through a beginner code example, test your knowledge, or ask anything you need help with!`,
      timestamp: new Date(),
      taskId: context?.taskId,
      roadmapId: context?.roadmapId,
      courseId: context?.courseId,
    };
  },

  /**
   * Fetches persisted conversation history from Supabase chat_messages table,
   * falling back to local storage for guest/offline sessions.
   */
  fetchChatHistory: async (userId?: string, taskId?: string, context?: ChatContext | null): Promise<ChatMessage[]> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    if (effectiveUserId) {
      try {
        let query = supabase
          .from('chat_messages')
          .select('id, sender, content, task_id, created_at')
          .eq('user_id', effectiveUserId)
          .order('created_at', { ascending: true })
          .limit(50);

        if (taskId) {
          query = query.eq('task_id', taskId);
        }

        const { data, error } = await query;

        if (!error && data && data.length > 0) {
          return data
            .filter((item) => !isCorruptedMessage(item.content))
            .map((item) => ({
              id: item.id,
              role: item.sender === 'user' ? 'user' : 'assistant',
              content: item.content,
              timestamp: new Date(item.created_at),
              taskId: item.task_id || undefined,
              roadmapId: context?.roadmapId,
              courseId: context?.courseId,
            }));
        }
      } catch (err) {
        console.warn('[StudyBuddyService] Failed to query Supabase chat_messages, checking local cache:', err);
      }
    }

    // Fallback to local storage segregated by active context
    try {
      const storageKey = getLocalStorageKey(context);
      const cached = localStorage.getItem(storageKey) || localStorage.getItem('skillora_chat_messages');
      if (cached) {
        const parsed = JSON.parse(cached) as Array<ChatMessage & { timestamp: string }>;
        const cleaned = parsed
          .filter((m) => !isCorruptedMessage(m.content))
          .map((m) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }));
        return cleaned;
      }
    } catch (_) {}

    return [];
  },

  /**
   * Diagnostic Health Check for Study Buddy Edge Function and AI providers.
   */
  checkHealth: async (): Promise<StudyBuddyHealthStatus> => {
    try {
      const { data, error } = await supabase.functions.invoke('study-buddy', {
        body: { action: 'health' },
      });

      if (error || !data) {
        return {
          status: 'misconfigured',
          reachable: false,
          hasGeminiKey: false,
          hasOpenAiKey: false,
          activeProvider: 'none',
          model: 'none',
          lastChecked: new Date().toISOString(),
          message: error?.message || 'Edge function unreachable.',
        };
      }

      return {
        status: data.status || 'healthy',
        reachable: true,
        hasGeminiKey: Boolean(data.hasGeminiKey),
        hasOpenAiKey: Boolean(data.hasOpenAiKey),
        activeProvider: data.activeProvider || 'none',
        model: data.model || 'none',
        lastChecked: data.lastChecked || new Date().toISOString(),
        message: data.message || 'Operational',
      };
    } catch (err: any) {
      return {
        status: 'misconfigured',
        reachable: false,
        hasGeminiKey: false,
        hasOpenAiKey: false,
        activeProvider: 'none',
        model: 'none',
        lastChecked: new Date().toISOString(),
        message: err?.message || 'Health check error',
      };
    }
  },

  /**
   * Invokes the Supabase Edge Function with strict timeout, exponential backoff retries,
   * and structured error handling.
   */
  sendMessage: async ({
    message,
    context,
    history = [],
    userId,
  }: {
    message: string;
    context?: ChatContext | null;
    history?: ChatMessage[];
    userId?: string;
  }): Promise<string> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    const trimmedMsg = message.trim();
    if (!trimmedMsg) {
      throw new Error('Please enter a message.');
    }

    console.log('[StudyBuddy] 📩 Sending user prompt:', trimmedMsg);
    console.log('[StudyBuddy] 📦 Active Context:', context?.taskTitle || context?.courseTitle || 'General');

    const requestPayload = {
      action: 'chat',
      message: trimmedMsg,
      context: context
        ? {
            roadmapId: context.roadmapId,
            courseId: context.courseId,
            courseTitle: context.courseTitle,
            taskId: context.taskId,
            taskTitle: context.taskTitle,
            taskDescription: context.taskDescription,
            userGoal: context.userGoal,
            skillLevel: context.skillLevel,
          }
        : undefined,
      history: history
        .slice(-8)
        .filter((h) => !h.isError && h.content)
        .map((h) => ({
          role: h.role,
          content: h.content,
        })),
      userId: effectiveUserId,
    };

    let attempt = 0;
    let lastError: Error | null = null;
    let replyText = '';

    while (attempt <= MAX_RETRIES) {
      attempt++;
      try {
        console.log(`[StudyBuddy] 🌐 Invoking Edge Function (Attempt ${attempt}/${MAX_RETRIES + 1})...`);

        // Use Promise.race with AbortController for guaranteed strict client-side timeout
        const invokePromise = supabase.functions.invoke('study-buddy', {
          body: requestPayload,
        });

        const timeoutPromise = new Promise<{ data: null; error: any }>((_, reject) =>
          setTimeout(() => reject(new Error('AI_TIMEOUT')), REQUEST_TIMEOUT_MS)
        );

        const { data, error } = (await Promise.race([invokePromise, timeoutPromise])) as {
          data: StudyBuddyApiResponse | null;
          error: any;
        };

        if (error) {
          console.warn(`[StudyBuddy] Edge Function error on attempt ${attempt}:`, error);

          // Handle known Supabase function invocation error formats
          const status = error.status || error.context?.status;
          if (status === 400 || status === 401 || status === 403) {
            // Non-retryable configuration or credential error
            const friendlyMsg = formatErrorMessage('AI_CONFIG_ERROR');
            throw new Error(friendlyMsg);
          }

          // Check if retryable
          if (attempt <= MAX_RETRIES) {
            const backoffMs = attempt * 1000;
            console.log(`[StudyBuddy] Retrying in ${backoffMs}ms...`);
            await delay(backoffMs);
            continue;
          }

          throw new Error(formatErrorMessage('AI_UNAVAILABLE'));
        }

        if (!data) {
          throw new Error(formatErrorMessage('AI_UNAVAILABLE'));
        }

        // Handle structured error contract from Edge Function
        if (data.success === false || data.errorCode) {
          const friendly = formatErrorMessage(data.errorCode, data.message);

          if (!data.isRetryable || attempt > MAX_RETRIES) {
            throw new Error(friendly);
          }

          const backoffMs = attempt * 1000;
          console.log(`[StudyBuddy] Transient error (${data.errorCode}). Retrying in ${backoffMs}ms...`);
          await delay(backoffMs);
          continue;
        }

        if (data.reply && data.reply.trim()) {
          replyText = data.reply.trim();
          break;
        } else {
          throw new Error('AI service returned an empty response. Please retry.');
        }
      } catch (err: any) {
        lastError = err;

        if (err.message === 'AI_TIMEOUT') {
          if (attempt <= MAX_RETRIES) {
            console.log(`[StudyBuddy] Request timed out. Retrying attempt ${attempt + 1}...`);
            await delay(attempt * 1000);
            continue;
          }
          throw new Error(formatErrorMessage('AI_TIMEOUT'));
        }

        // If error message is already user-friendly, don't retry if non-retryable
        if (
          err.message.includes('needs configuration') ||
          err.message.includes('authentication failed') ||
          err.message.includes('Invalid request')
        ) {
          throw err;
        }

        if (attempt > MAX_RETRIES) {
          break;
        }

        await delay(attempt * 1000);
      }
    }

    if (!replyText) {
      throw lastError || new Error(formatErrorMessage('AI_UNAVAILABLE'));
    }

    // Persist real conversation turn to Supabase chat_messages table if authenticated
    if (effectiveUserId && replyText) {
      try {
        await supabase.from('chat_messages').insert([
          {
            user_id: effectiveUserId,
            task_id: context?.taskId || null,
            sender: 'user',
            content: trimmedMsg,
          },
          {
            user_id: effectiveUserId,
            task_id: context?.taskId || null,
            sender: 'assistant',
            content: replyText,
          },
        ]);
      } catch (dbErr) {
        console.warn('[StudyBuddyService] Warning persisting chat to Supabase:', dbErr);
      }
    }

    // Save copy to localStorage cache under context-specific key
    try {
      const storageKey = getLocalStorageKey(context);
      const currentList: ChatMessage[] = [
        ...history.filter((h) => !h.isError),
        {
          id: `u_${Date.now()}`,
          role: 'user',
          content: trimmedMsg,
          timestamp: new Date(),
          taskId: context?.taskId,
          roadmapId: context?.roadmapId,
          courseId: context?.courseId,
        },
        {
          id: `a_${Date.now() + 1}`,
          role: 'assistant',
          content: replyText,
          timestamp: new Date(),
          taskId: context?.taskId,
          roadmapId: context?.roadmapId,
          courseId: context?.courseId,
        },
      ];
      localStorage.setItem(storageKey, JSON.stringify(currentList.slice(-30)));
    } catch (_) {}

    return replyText;
  },

  /**
   * Clears the active chat history from Supabase and local cache.
   */
  clearHistory: async (userId?: string, context?: ChatContext | null): Promise<void> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    if (effectiveUserId) {
      try {
        let query = supabase.from('chat_messages').delete().eq('user_id', effectiveUserId);
        if (context?.taskId) {
          query = query.eq('task_id', context.taskId);
        }
        await query;
      } catch (err) {
        console.warn('[StudyBuddyService] Error clearing Supabase chat_messages:', err);
      }
    }

    try {
      const storageKey = getLocalStorageKey(context);
      localStorage.removeItem(storageKey);
      localStorage.removeItem('skillora_chat_messages');
    } catch (_) {}
  },
};
