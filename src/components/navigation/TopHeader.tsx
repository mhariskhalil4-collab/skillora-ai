import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/hooks/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const TopHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border bg-[color:var(--color-bg-card)]/95 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <SparklesIcon className="w-5 h-5 text-brand" />
        <span className="text-base font-heading font-bold text-[color:var(--text-primary)]">
          Skillora <span className="text-brand">AI</span>
        </span>
      </div>

      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
      </button>
    </header>
  );
};
