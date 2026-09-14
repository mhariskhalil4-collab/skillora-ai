import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@/hooks/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { NotificationBell } from '@/features/notifications';
import { SearchTrigger } from '@/features/search';
import { EARLY_ACCESS_FREE } from '@/config/access.config';

interface TopHeaderProps {
  onOpenSearch?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 border-b border-border bg-[color:var(--color-bg-card)]/95 backdrop-blur-md">
      {/* Mobile Brand (hidden on large screens where Sidebar shows brand) */}
      <div className="flex items-center gap-2 lg:hidden">
        <SparklesIcon className="w-5 h-5 text-brand" />
        <span className="text-base font-heading font-bold text-[color:var(--text-primary)]">
          Skillora <span className="text-brand">AI</span>
        </span>
        {EARLY_ACCESS_FREE && (
          <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-brand/15 text-brand border border-brand/30">
            Early Access
          </span>
        )}
      </div>

      {/* Desktop Search Bar Trigger (large screens) */}
      <div className="hidden lg:flex items-center flex-1 max-w-md">
        {onOpenSearch && (
          <SearchTrigger
            onClick={onOpenSearch}
            className="w-full max-w-sm"
          />
        )}
      </div>

      {/* Right Controls: Search Icon (mobile), Notification Bell, Theme Switcher */}
      <div className="flex items-center gap-2 sm:gap-3 ml-auto">
        {/* Mobile Search Trigger */}
        <div className="lg:hidden">
          {onOpenSearch && (
            <SearchTrigger
              onClick={onOpenSearch}
              isMobileCompact
            />
          )}
        </div>

        {/* Real Supabase Notification Center Bell */}
        <NotificationBell />

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};
