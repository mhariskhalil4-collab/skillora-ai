import React from 'react';
import { ChatMessage } from '../types/chat.types';
import { SparklesIcon, UserIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

function formatMarkdown(text: string): string {
  if (!text) return '';

  let formatted = text
    // Escape HTML tags to prevent XSS
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Multi-line Code blocks: ```js ... ```
  formatted = formatted.replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
    return `<div class="my-3 rounded-lg overflow-hidden border border-border bg-black/40 text-xs font-mono"><div class="px-3 py-1 bg-black/60 text-[color:var(--text-secondary)] border-b border-border/50 text-[10px] uppercase font-mono tracking-wider">Code Snippet</div><pre class="p-3 overflow-x-auto text-[color:var(--text-primary)]"><code>${code.trim()}</code></pre></div>`;
  });

  // Blockquotes: > quote
  formatted = formatted.replace(/^&gt;\s?(.*)$/gm, '<blockquote class="border-l-2 border-ai-glow/60 pl-3 my-2 text-xs italic text-[color:var(--text-secondary)]">$1</blockquote>');

  // Headings: ### Header
  formatted = formatted.replace(/^### (.*$)/gm, '<h4 class="text-base font-heading font-bold text-[color:var(--text-primary)] mt-3 mb-1.5">$1</h4>');
  formatted = formatted.replace(/^## (.*$)/gm, '<h3 class="text-lg font-heading font-bold text-[color:var(--text-primary)] mt-3 mb-1.5">$1</h3>');

  // Bold: **text**
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[color:var(--text-primary)]">$1</strong>');

  // Inline code: `code`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded font-mono text-xs text-brand font-semibold">$1</code>');

  // Bullet items: * or -
  formatted = formatted.replace(/^\s*[-*]\s+(.*)$/gm, '<li class="ml-4 list-disc text-sm">$1</li>');

  // Numbered list: 1. item
  formatted = formatted.replace(/^\s*(\d+)\.\s+(.*)$/gm, '<li class="ml-4 list-decimal text-sm">$2</li>');

  // Line breaks
  formatted = formatted.replace(/\n/g, '<br />');

  return formatted;
}

export const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isAi = message.role === 'assistant';

  return (
    <div className={cn("flex w-full", isAi ? 'justify-start' : 'justify-end')}>
      <div className={cn("flex gap-3 max-w-[95%] sm:max-w-[80%]", isAi ? 'flex-row' : 'flex-row-reverse')}>
        
        {/* Avatar */}
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border",
          isAi 
            ? 'bg-ai-muted/10 border-ai-glow/50 text-ai-glow shadow-[0_0_10px_rgba(0,240,255,0.2)]' 
            : 'bg-brand/20 border-brand/40 text-brand'
        )}>
          {isAi ? <SparklesIcon className="w-5 h-5" /> : <UserIcon className="w-5 h-5" />}
        </div>

        {/* Message Content */}
        <div className={cn(
          "p-4 sm:p-5 rounded-2xl text-sm sm:text-base font-body leading-relaxed transition-all shadow-sm",
          isAi 
            ? 'bg-[color:var(--color-bg-card)] border border-border text-[color:var(--text-primary)] rounded-tl-sm' 
            : 'bg-brand text-white rounded-tr-sm shadow-md'
        )}>
          <div 
            className="prose dark:prose-invert max-w-none break-words text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(message.content) }} 
          />
          <div className={cn(
            "text-[10px] font-mono mt-2 text-right opacity-60",
            isAi ? 'text-[color:var(--text-secondary)]' : 'text-white/80'
          )}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};
