import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface SearchTriggerProps {
  onClick: () => void;
  className?: string;
  isMobileCompact?: boolean;
}

export const SearchTrigger: React.FC<SearchTriggerProps> = ({
  onClick,
  className,
  isMobileCompact = false,
}) => {
  if (isMobileCompact) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Open global search"
        className={cn(
          'p-2 rounded-full text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer',
          className
        )}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-[color:var(--color-bg-base)] text-xs text-[color:var(--text-secondary)] hover:border-brand/40 hover:text-[color:var(--text-primary)] transition-all cursor-pointer shadow-sm',
        className
      )}
    >
      <MagnifyingGlassIcon className="w-4 h-4 text-[color:var(--text-secondary)]" />
      <span className="font-body">Search curriculum, skills...</span>
      <kbd className="ml-auto hidden sm:inline-block px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-[color:var(--text-secondary)]">
        Ctrl K
      </kbd>
    </button>
  );
};
