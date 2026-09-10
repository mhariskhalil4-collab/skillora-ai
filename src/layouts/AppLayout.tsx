import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/navigation/Sidebar';
import { BottomNav } from '@/components/navigation/BottomNav';

export const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[color:var(--color-bg-base)]">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Scrollable Content Area */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};
