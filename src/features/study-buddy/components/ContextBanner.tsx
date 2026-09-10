import React from 'react';
import { ChatContext } from '../types/chat.types';
import { SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const ContextBanner: React.FC<{ context: ChatContext; onClear?: () => void }> = ({ context, onClear }) => {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[color:var(--color-bg-card)]/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-ai-muted/25 rounded-lg border border-ai-glow/30">
          <SparklesIcon className="w-5 h-5 text-ai-glow" />
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-mono text-[color:var(--text-secondary)] uppercase tracking-wider font-semibold">
            Active Study Context
          </p>
          <p className="text-sm font-heading font-bold text-[color:var(--text-primary)] truncate max-w-[200px] sm:max-w-md">
            {context.taskTitle}
          </p>
        </div>
      </div>
      <button 
        onClick={onClear}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[color:var(--text-secondary)] transition-colors"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
};
