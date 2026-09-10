import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChatMessage, ChatContext } from '../types/chat.types';
import { StudyBuddyService } from '../services/study-buddy.service';
import { RoadmapService } from '@/features/roadmap/services/roadmap.service';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { ContextBanner } from './ContextBanner';
import { ChatBubble } from './ChatBubble';
import { ChatInput } from './ChatInput';
import { 
  ExclamationTriangleIcon, 
  SparklesIcon, 
  TrashIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

export const StudyBuddyScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const urlPrompt = searchParams.get('prompt') || '';
  const urlTaskId = searchParams.get('taskId');

  const authUser = useAuthStore((state) => state.user);

  const [context, setContext] = useState<ChatContext | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasSentUrlPrompt = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // 1. Initialize context from Roadmap and load Chat History
  const initializeStudyBuddy = useCallback(async () => {
    setIsInitializing(true);
    try {
      // Fetch active roadmap to set dynamic learning context
      const roadmap = await RoadmapService.fetchActiveRoadmap(authUser?.id);
      
      let activeTask = roadmap?.tasks.find((t) => t.status === 'in_progress');
      if (urlTaskId && roadmap) {
        const matchingTask = roadmap.tasks.find((t) => t.id === urlTaskId);
        if (matchingTask) activeTask = matchingTask;
      }
      if (!activeTask && roadmap && roadmap.tasks.length > 0) {
        activeTask = roadmap.tasks[0];
      }

      const dynamicContext: ChatContext | null = roadmap ? {
        roadmapId: roadmap.id,
        taskId: activeTask?.id,
        taskTitle: activeTask?.title || roadmap.title,
        taskDescription: activeTask?.description,
        userGoal: roadmap.title,
      } : null;

      setContext(dynamicContext);

      // Fetch saved conversation history from Supabase
      const history = await StudyBuddyService.fetchChatHistory(authUser?.id, activeTask?.id);

      if (history.length > 0) {
        setMessages(history);
      } else {
        // Generate dynamic welcome greeting
        const greeting = StudyBuddyService.generateInitialGreeting(
          dynamicContext,
          authUser?.firstName
        );
        setMessages([greeting]);
      }
    } catch (err) {
      console.warn('[StudyBuddyScreen] Initialization error:', err);
      const fallbackGreeting = StudyBuddyService.generateInitialGreeting(
        null,
        authUser?.firstName
      );
      setMessages([fallbackGreeting]);
    } finally {
      setIsInitializing(false);
    }
  }, [authUser?.id, authUser?.firstName, urlTaskId]);

  useEffect(() => {
    initializeStudyBuddy();
  }, [initializeStudyBuddy]);

  // 2. Handle Message Sending to Supabase Edge Function
  const handleSendMessage = React.useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessageText = content.trim();
      const newUserMsg: ChatMessage = {
        id: `msg_u_${Date.now()}`,
        role: 'user',
        content: userMessageText,
        timestamp: new Date(),
        taskId: context?.taskId,
      };

      setMessages((prev) => [...prev, newUserMsg]);
      setIsLoading(true);
      setError(null);
      setLastFailedMessage(null);

      try {
        const reply = await StudyBuddyService.sendMessage({
          message: userMessageText,
          context,
          history: messages,
          userId: authUser?.id,
        });

        const newAiMsg: ChatMessage = {
          id: `msg_ai_${Date.now()}`,
          role: 'assistant',
          content: reply,
          timestamp: new Date(),
          taskId: context?.taskId,
        };

        setMessages((prev) => [...prev, newAiMsg]);
      } catch (err: any) {
        console.error('[StudyBuddyScreen] Send message failed:', err);
        setError('Unable to receive response from AI. Please verify your connection or click retry.');
        setLastFailedMessage(userMessageText);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, context, messages, authUser?.id]
  );

  // 3. Automatically send URL query prompt if present on mount
  useEffect(() => {
    if (urlPrompt && !hasSentUrlPrompt.current && !isInitializing) {
      hasSentUrlPrompt.current = true;
      handleSendMessage(urlPrompt);
    }
  }, [urlPrompt, isInitializing, handleSendMessage]);

  const handleClearChat = async () => {
    if (window.confirm('Clear your conversation history for this topic?')) {
      await StudyBuddyService.clearHistory(authUser?.id);
      const freshGreeting = StudyBuddyService.generateInitialGreeting(
        context,
        authUser?.firstName
      );
      setMessages([freshGreeting]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[color:var(--color-bg-base)] pb-16 lg:pb-0 overflow-hidden">
      {/* Context Banner */}
      {context && (
        <div className="flex items-center justify-between border-b border-border bg-[color:var(--color-bg-card)]/90 backdrop-blur-md">
          <div className="flex-1">
            <ContextBanner context={context} onClear={() => setContext(null)} />
          </div>
          <button
            onClick={handleClearChat}
            title="Clear Chat History"
            className="mr-4 p-2 text-[color:var(--text-secondary)] hover:text-red-500 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {isInitializing ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-3">
            <div className="w-8 h-8 rounded-full border-3 border-brand border-t-transparent animate-spin" />
            <p className="text-xs font-mono text-[color:var(--text-secondary)]">
              Connecting to your Study Buddy mentor...
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}

            {isLoading && (
              <div className="flex items-center gap-3 text-ai-glow p-4 rounded-2xl max-w-[85%] sm:max-w-md bg-[color:var(--color-bg-card)] border border-ai-glow/30 shadow-glass animate-pulse">
                <div className="w-7 h-7 rounded-full bg-ai-muted/20 flex items-center justify-center flex-shrink-0 text-ai-glow border border-ai-glow/40">
                  <SparklesIcon className="w-4 h-4 animate-spin [animation-duration:3s]" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-ai-glow rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-ai-glow rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-ai-glow rounded-full animate-bounce"></span>
                    <span className="text-xs font-mono font-medium ml-2 text-ai-glow">Thinking...</span>
                  </div>
                  <span className="text-[11px] text-[color:var(--text-secondary)]">
                    Formulating a beginner-friendly analogy & walkthrough
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Error / Retry Banner */}
      {error && (
        <div className="mx-4 mb-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-between gap-3 text-red-500">
          <div className="flex items-center gap-2 text-sm">
            <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
          {lastFailedMessage && (
            <button
              onClick={() => handleSendMessage(lastFailedMessage)}
              className="flex items-center gap-1 text-xs font-heading font-bold bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
            >
              <ArrowPathIcon className="w-3.5 h-3.5" /> Retry
            </button>
          )}
        </div>
      )}

      {/* Input Section */}
      <div className="bg-[color:var(--color-bg-card)] border-t border-border p-4 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <ChatInput onSend={handleSendMessage} disabled={isLoading || isInitializing} />
      </div>
    </div>
  );
};
