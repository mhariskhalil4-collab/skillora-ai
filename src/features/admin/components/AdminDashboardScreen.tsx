import React from 'react';
import { useAdmin } from '../hooks/useAdmin';
import { AdminOverviewTab } from './AdminOverviewTab';
import { AdminUsersTab } from './AdminUsersTab';
import { AdminAnalyticsTab } from './AdminAnalyticsTab';
import { AdminModerationTab } from './AdminModerationTab';
import {
  ShieldCheckIcon,
  Squares2X2Icon,
  UsersIcon,
  ChartBarIcon,
  ShieldExclamationIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

export const AdminDashboardScreen: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    metrics,
    isLoadingMetrics,
    loadMetrics,
    users,
    isLoadingUsers,
    userFilters,
    setUserFilters,
    loadUsers,
    moderationItems,
    isLoadingModeration,
    loadModeration,
    analytics,
    isLoadingAnalytics,
    loadAnalytics,
    toggleSuspension,
    setUserRole,
    toggleContentVisibility,
    actionError,
    actionSuccess,
  } = useAdmin();

  interface AdminTabItem {
    id: 'overview' | 'users' | 'analytics' | 'moderation';
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    badge?: number;
  }

  const tabs: AdminTabItem[] = [
    {
      id: 'overview',
      label: 'Overview & KPIs',
      icon: Squares2X2Icon,
    },
    {
      id: 'users',
      label: 'User Management',
      icon: UsersIcon,
      badge: users.length > 0 ? users.length : undefined,
    },
    {
      id: 'analytics',
      label: 'Learning Analytics',
      icon: ChartBarIcon,
    },
    {
      id: 'moderation',
      label: 'Content Moderation',
      icon: ShieldExclamationIcon,
      badge: moderationItems.length > 0 ? moderationItems.length : undefined,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Admin Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand/10 text-brand border border-brand/20">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[color:var(--text-primary)]">
              Admin &amp; Operations Center
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-brand text-white shadow-sm">
              SUPERADMIN
            </span>
          </div>
          <p className="text-sm text-[color:var(--text-secondary)]">
            Manage global learning trajectories, audit user credentials, review analytics, and enforce moderation.
          </p>
        </div>
      </div>

      {/* Action Feedback Notifications */}
      {actionSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium flex items-center gap-2.5 animate-in fade-in duration-200">
          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {actionError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium flex items-center gap-2.5 animate-in fade-in duration-200">
          <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-border overflow-x-auto no-scrollbar pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-heading text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'border-brand text-brand'
                  : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive
                      ? 'bg-brand/20 text-brand'
                      : 'bg-black/5 dark:bg-white/5 text-[color:var(--text-secondary)]'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="pt-2">
        {activeTab === 'overview' && (
          <AdminOverviewTab
            metrics={metrics}
            isLoading={isLoadingMetrics}
            onRefresh={loadMetrics}
          />
        )}

        {activeTab === 'users' && (
          <AdminUsersTab
            users={users}
            isLoading={isLoadingUsers}
            filters={userFilters}
            onFilterChange={(f) => {
              setUserFilters(f);
              loadUsers(f);
            }}
            onRefresh={() => loadUsers()}
            onToggleSuspension={toggleSuspension}
            onSetRole={setUserRole}
          />
        )}

        {activeTab === 'analytics' && (
          <AdminAnalyticsTab
            analytics={analytics}
            isLoading={isLoadingAnalytics}
            onRefresh={loadAnalytics}
          />
        )}

        {activeTab === 'moderation' && (
          <AdminModerationTab
            items={moderationItems}
            isLoading={isLoadingModeration}
            onRefresh={loadModeration}
            onToggleVisibility={toggleContentVisibility}
          />
        )}
      </div>
    </div>
  );
};
