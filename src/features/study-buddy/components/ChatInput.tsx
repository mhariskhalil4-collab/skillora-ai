import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const QUICK_COMMANDS = [
  "/explain concept",
  "/give an analogy",
  "/test my knowledge",
  "/show code example"
];

export interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSend(inputValue);
    setInputValue("");
  };

  const handleCommandClick = (cmd: string) => {
    setInputValue(cmd.split(' ')[0] + " ");
    document.getElementById('ai-chat-input')?.focus();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Quick Command Chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommandClick(cmd)}
            disabled={disabled}
            className="flex-shrink-0 px-3 py-1.5 rounded-full border border-border bg-[color:var(--color-bg-base)] text-xs font-mono text-[color:var(--text-secondary)] hover:border-ai-glow hover:text-ai-glow transition-colors disabled:opacity-50"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          id="ai-chat-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={disabled}
          placeholder="Message Study Buddy..."
          className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-full py-3 sm:py-4 pl-5 pr-14 text-[color:var(--text-primary)] font-body placeholder-[color:var(--text-secondary)] focus:outline-none focus:border-ai-glow focus:ring-1 focus:ring-ai-glow transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || disabled}
          className="absolute right-2 p-2 sm:p-2.5 bg-brand text-white rounded-full hover:bg-brand-light transition-colors disabled:opacity-50 disabled:bg-[color:var(--color-bg-card)] disabled:text-[color:var(--text-secondary)] cursor-pointer"
        >
          <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  );
};
