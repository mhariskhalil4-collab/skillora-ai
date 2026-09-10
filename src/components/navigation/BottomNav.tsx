import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { NAV_ITEMS } from './Sidebar';

export const BottomNav: React.FC = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-stretch justify-around border-t border-border bg-[color:var(--color-bg-card)]/95 backdrop-blur-md pb-safe">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              'flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-heading font-semibold transition-colors',
              isActive
                ? 'text-brand'
                : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
            )
          }
        >
          {({ isActive }) => {
            const Icon = isActive ? item.activeIcon : item.icon;
            return (
              <>
                <Icon className="w-6 h-6" />
                <span>{item.label}</span>
              </>
            );
          }}
        </NavLink>
      ))}
    </nav>
  );
};
