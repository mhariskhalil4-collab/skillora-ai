import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { SparklesIcon } from '@heroicons/react/24/solid';
import {
  HomeIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  MapIcon as MapIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  ChartBarSquareIcon as ChartBarSquareIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/react/24/solid';

export interface NavItem {
  path: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: HomeIcon, activeIcon: HomeIconSolid },
  { path: '/roadmap', label: 'Roadmap', icon: MapIcon, activeIcon: MapIconSolid },
  { path: '/study-buddy', label: 'Study Buddy', icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleLeftRightIconSolid },
  { path: '/career-gps', label: 'Career GPS', icon: ChartBarSquareIcon, activeIcon: ChartBarSquareIconSolid },
  { path: '/profile', label: 'Profile', icon: UserCircleIcon, activeIcon: UserCircleIconSolid },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:flex-shrink-0 h-screen sticky top-0 border-r border-border bg-[color:var(--color-bg-card)]">
      {/* Brand */}
      <div className="flex items-center gap-2 px-6 h-20 border-b border-border">
        <SparklesIcon className="w-6 h-6 text-brand" />
        <span className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
          Skillora <span className="text-brand">AI</span>
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-medium text-sm transition-colors',
                isActive
                  ? 'bg-brand/10 text-brand border border-brand/20'
                  : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
              )
            }
          >
            {({ isActive }) => {
              const Icon = isActive ? item.activeIcon : item.icon;
              return (
                <>
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </>
              );
            }}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
