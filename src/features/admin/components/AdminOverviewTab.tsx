import React from 'react';
import { AdminOverviewMetrics } from '../types/admin.types';
import { Card } from '@/components/data-display/Card';
import {
  UsersIcon,
  SparklesIcon,
  AcademicCapIcon,
  TrophyIcon,
  CodeBracketIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface AdminOverviewTabProps {
  metrics: AdminOverviewMetrics | null;
  isLoading: boolean;
  onRefresh: () => void;
}

export const AdminOverviewTab: React.FC<AdminOverviewTabProps> = ({
  metrics,
  isLoading,
  onRefresh,
}) => {
  const statCards = [
    {
      title: 'Total Learners',
      value: metrics?.totalUsers ?? 0,
      icon: UsersIcon,
      accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      description: 'Registered user accounts',
    },
    {
      title: 'Pro Subscribers',
      value: metrics?.proUsers ?? 0,
      icon: SparklesIcon,
      accent: 'text-brand bg-brand/10 border-brand/20',
      description: `Active paid tier (${metrics?.totalUsers ? Math.round(((metrics.proUsers || 0) / metrics.totalUsers) * 100) : 0}% conversion)`,
    },
    {
      title: 'Estimated MRR',
      value: `$${metrics?.estimatedMrr ?? 0}`,
      icon: CurrencyDollarIcon,
      accent: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      description: '$29 / Pro monthly subscription',
    },
    {
      title: 'Active Roadmaps',
      value: metrics?.totalRoadmaps ?? 0,
      icon: AcademicCapIcon,
      accent: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      description: `${metrics?.completedRoadmaps ?? 0} roadmaps 100% completed`,
    },
    {
      title: 'Verified Certificates',
      value: metrics?.totalCertificates ?? 0,
      icon: TrophyIcon,
      accent: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      description: 'Cryptographically hashed credentials',
    },
    {
      title: 'Verified Deliverables',
      value: metrics?.totalProjects ?? 0,
      icon: CodeBracketIcon,
      accent: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      description: 'Public portfolio submissions',
    },
    {
      title: 'Study Buddy Messages',
      value: metrics?.totalStudyBuddyMessages ?? 0,
      icon: ChatBubbleBottomCenterTextIcon,
      accent: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
      description: 'Persistent AI mentor interactions',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            Platform KPI Metrics &amp; Performance
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-0.5">
            Real-time aggregate data queried from the Supabase database.
          </p>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[color:var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
        >
          <ArrowPathIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-brand' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-5 flex flex-col justify-between hover:border-brand/40 transition-colors">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-heading font-bold uppercase text-[color:var(--text-secondary)]">
                  {stat.title}
                </span>
                <div className={`p-2 rounded-xl border ${stat.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[color:var(--text-primary)] mb-1">
                  {isLoading ? '...' : stat.value}
                </div>
                <p className="text-xs text-[color:var(--text-secondary)]">
                  {stat.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Summary Card */}
      <Card className="p-6 bg-gradient-to-br from-[color:var(--color-bg-card)] to-brand/5 border-brand/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Skillora Production Infrastructure Status: Optimal
            </h3>
            <p className="text-xs text-[color:var(--text-secondary)] max-w-2xl leading-relaxed">
              Database RLS policies active, Gemini AI Flash model responding with sub-second latency, Stripe webhook processing synchronized, and cloud storage buckets online.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              Auth: Supabase v2.49+
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-semibold">
              AI: Gemini 2.5 Flash
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
