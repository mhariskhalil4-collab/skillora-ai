import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import {
  HomeIcon,
  AcademicCapIcon,
  MapIcon,
  RectangleStackIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  MapIcon as MapIconSolid,
  RectangleStackIcon as RectangleStackIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  ChartBarSquareIcon as ChartBarSquareIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
} from '@heroicons/react/24/solid';
import { useAdmin } from '@/features/admin/hooks/useAdmin';
import { EARLY_ACCESS_FREE } from '@/config/access.config';

export interface NavItem {
  path: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: HomeIcon, activeIcon: HomeIconSolid },
  { path: '/courses', label: 'Courses', icon: AcademicCapIcon, activeIcon: AcademicCapIconSolid },
  { path: '/roadmap', label: 'Roadmap', icon: MapIcon, activeIcon: MapIconSolid },
  { path: '/roadmaps', label: 'My Roadmaps', icon: RectangleStackIcon, activeIcon: RectangleStackIconSolid },
  { path: '/study-buddy', label: 'Study Buddy', icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleLeftRightIconSolid },
  { path: '/career-gps', label: 'Career GPS', icon: ChartBarSquareIcon, activeIcon: ChartBarSquareIconSolid },
  { path: '/profile', label: 'Profile', icon: UserCircleIcon, activeIcon: UserCircleIconSolid },
];

export const Sidebar: React.FC = () => {
  const { isAdmin } = useAdmin();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:flex-shrink-0 h-screen sticky top-0 border-r border-border bg-[color:var(--color-bg-card)]">
      {/* Brand */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-border">
        <NavLink to="/dashboard" className="flex items-center gap-3 group">
          <img
            src="/skillora-logo.png"
            alt="Skillora AI Logo"
            className="w-8 h-8 rounded-lg object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
            Skillora <span className="text-brand">AI</span>
          </span>
        </NavLink>
        {EARLY_ACCESS_FREE && (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand/15 text-brand border border-brand/30">
            Early Access
          </span>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
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

        {/* Admin Navigation Link (visible to administrators) */}
        {isAdmin && (
          <div className="pt-4 mt-4 border-t border-border">
            <span className="px-4 text-[10px] font-mono font-bold uppercase tracking-wider text-[color:var(--text-secondary)]">
              Administration
            </span>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                cn(
                  'mt-2 flex items-center gap-3 px-4 py-3 rounded-xl font-heading font-medium text-sm transition-colors',
                  isActive
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                )
              }
            >
              {({ isActive }) => {
                const Icon = isActive ? ShieldCheckIconSolid : ShieldCheckIcon;
                return (
                  <>
                    <Icon className="w-5 h-5 flex-shrink-0 text-purple-400" />
                    <span>Admin Center</span>
                  </>
                );
              }}
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
};
