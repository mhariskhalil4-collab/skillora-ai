import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, BottomNav, TopHeader } from '@/components/navigation';

export const AppShell: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader />
        <main className="flex-1 pb-20 lg:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
};
