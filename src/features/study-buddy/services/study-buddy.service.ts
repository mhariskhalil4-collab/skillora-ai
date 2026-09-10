import { supabase } from '@/lib/supabase';
import { ChatMessage, ChatContext } from '../types/chat.types';

const LOCAL_STORAGE_CHAT_KEY = 'skillora_chat_messages';

export const StudyBuddyService = {
  /**
   * Generates a dynamic greeting message tailored to what the student is actively studying.
   */
  generateInitialGreeting: (context?: ChatContext | null, userName?: string): ChatMessage => {
    const greetingName = userName ? ` ${userName}` : '';
    const topic = context?.taskTitle || 'your learning goals';
    
    return {
      id: 'msg_welcome',
      role: 'assistant',
      content: `Hi${greetingName}! 👋 I'm your AI Study Buddy.\n\nI see you're currently working on **${topic}**. What questions do you have? You can ask me to explain a concept with an analogy, walk through a beginner code example, or ask anything you need help with!`,
      timestamp: new Date(),
      taskId: context?.taskId,
    };
  },

  /**
   * Fetches persisted conversation history from Supabase chat_messages table,
   * falling back to local storage for guest/offline sessions.
   */
  fetchChatHistory: async (userId?: string, taskId?: string): Promise<ChatMessage[]> => {
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
          .order('created_at', { ascending: true });

        if (taskId) {
          query = query.eq('task_id', taskId);
        }

        const { data, error } = await query;

        if (!error && data && data.length > 0) {
          return data.map((item) => ({
            id: item.id,
            role: item.sender === 'user' ? 'user' : 'assistant',
            content: item.content,
            timestamp: new Date(item.created_at),
            taskId: item.task_id || undefined,
          }));
        }
      } catch (err) {
        console.warn('[StudyBuddyService] Failed to query Supabase chat_messages, checking local cache:', err);
      }
    }

    // Fallback to local storage
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_CHAT_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as Array<ChatMessage & { timestamp: string }>;
        return parsed.map((m) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
      }
    } catch (_) {}

    return [];
  },

  /**
   * Dispatches the user prompt, topic context, and conversation history to the
   * Supabase Edge Function gateway and saves the messages.
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

    console.log('===========================================================');
    console.log('[StudyBuddy] 📩 Incoming user message:', message);
    console.log('[StudyBuddy] 📦 Active Context:', context?.taskTitle || 'General');

    let replyText = '';

    // Step 1: Attempt to invoke Supabase Edge Function
    try {
      console.log('[StudyBuddy] 🌐 Invoking Supabase Edge Function: "study-buddy"...');
      const { data, error } = await supabase.functions.invoke('study-buddy', {
        body: {
          message,
          context: context ? {
            taskId: context.taskId,
            taskTitle: context.taskTitle,
            taskDescription: context.taskDescription,
            userGoal: context.userGoal,
            skillLevel: context.skillLevel,
          } : undefined,
          history: history.map((h) => ({
            role: h.role,
            content: h.content,
          })),
        },
      });

      if (error) {
        console.warn('[StudyBuddy] ❌ Supabase Edge Function invocation failed (e.g. 404 Not Deployed):', error);
        throw error;
      }

      if (data?.reply) {
        console.log('[StudyBuddy] ✓ Edge Function returned response successfully.');
        replyText = data.reply;
      } else {
        throw new Error('Edge function response did not contain reply field.');
      }
    } catch (edgeError: any) {
      console.warn('[StudyBuddy] Edge Function unavailable:', edgeError);

      // NOTE: We intentionally do NOT fall back to calling Gemini directly from
      // the browser — that would require shipping the API key in client-side
      // code, which exposes it to anyone who inspects the page. If you see this
      // message, the Edge Function needs to be deployed/fixed instead.
      replyText = [
        '### Study Buddy is temporarily unavailable ⚡',
        '',
        `I received your question: **"${message}"**, but the AI service isn't reachable right now.`,
        '',
        'This usually means the Supabase Edge Function needs to be deployed. If you are the developer, run:',
        '```bash',
        'supabase secrets set GEMINI_API_KEY=your_key_here',
        'supabase functions deploy study-buddy',
        '```',
      ].join('\n');
    }

    console.log('===========================================================');

    // Persist to Supabase chat_messages table if authenticated
    if (effectiveUserId) {
      try {
        await supabase.from('chat_messages').insert([
          {
            user_id: effectiveUserId,
            task_id: context?.taskId || null,
            sender: 'user',
            content: message,
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

    // Save copy to localStorage cache
    try {
      const currentList: ChatMessage[] = [
        ...history,
        { id: `u_${Date.now()}`, role: 'user', content: message, timestamp: new Date(), taskId: context?.taskId },
        { id: `a_${Date.now() + 1}`, role: 'assistant', content: replyText, timestamp: new Date(), taskId: context?.taskId },
      ];
      localStorage.setItem(LOCAL_STORAGE_CHAT_KEY, JSON.stringify(currentList.slice(-20)));
    } catch (_) {}

    return replyText;
  },

  /**
   * Clears the active chat history from Supabase and local cache.
   */
  clearHistory: async (userId?: string): Promise<void> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    if (effectiveUserId) {
      try {
        await supabase.from('chat_messages').delete().eq('user_id', effectiveUserId);
      } catch (err) {
        console.warn('[StudyBuddyService] Error clearing Supabase chat_messages:', err);
      }
    }

    try {
      localStorage.removeItem(LOCAL_STORAGE_CHAT_KEY);
    } catch (_) {}
  },
};
