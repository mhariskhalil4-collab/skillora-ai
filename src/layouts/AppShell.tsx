import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, BottomNav, TopHeader } from '@/components/navigation';
import { GlobalSearchModal } from '@/features/search';

export const AppShell: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[color:var(--color-bg-base)]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader onOpenSearch={() => setIsSearchOpen(true)} />
        <main className="flex-1 pb-20 lg:pb-8 px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>
      </div>
      <BottomNav />
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};
