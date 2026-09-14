import React from 'react';
import { AdminAnalyticsData } from '../types/admin.types';
import { Card } from '@/components/data-display/Card';
import {
  ChartBarIcon,
  SparklesIcon,
  AcademicCapIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface AdminAnalyticsTabProps {
  analytics: AdminAnalyticsData | null;
  isLoading: boolean;
  onRefresh: () => void;
}

export const AdminAnalyticsTab: React.FC<AdminAnalyticsTabProps> = ({
  analytics,
  isLoading,
  onRefresh,
}) => {
  const maxSkillCount = Math.max(...(analytics?.topSkills || []).map((s) => s.count), 1);

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            Curriculum &amp; Learning Analytics
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-0.5">
            Real-time skill demand, roadmap completion trends, and learner progression metrics.
          </p>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[color:var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
        >
          <ArrowPathIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-brand' : ''}`} />
          <span>Refresh Analytics</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Demanded Skills */}
        <Card className="p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand/10 border border-brand/20 text-brand">
              <ChartBarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-[color:var(--text-primary)]">
                Most Popular Skills &amp; Competencies
              </h3>
              <p className="text-xs text-[color:var(--text-secondary)]">
                Aggregated from learner profile skill inventories
              </p>
            </div>
          </div>

          <div className="space-y-3.5 pt-2">
            {isLoading ? (
              <div className="py-8 text-center text-xs text-[color:var(--text-secondary)]">
                Loading skill distributions...
              </div>
            ) : (analytics?.topSkills || []).length === 0 ? (
              <div className="py-8 text-center text-xs text-[color:var(--text-secondary)]">
                No skill data available yet.
              </div>
            ) : (
              (analytics?.topSkills || []).map((skill, index) => {
                const percentage = Math.round((skill.count / maxSkillCount) * 100);
                return (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[color:var(--text-primary)] flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[color:var(--text-secondary)]">
                          #{index + 1}
                        </span>
                        {skill.name}
                      </span>
                      <span className="font-mono font-semibold text-brand">
                        {skill.count} {skill.count === 1 ? 'Learner' : 'Learners'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Card>

        {/* Popular Roadmaps & Completion Rate */}
        <Card className="p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <AcademicCapIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-[color:var(--text-primary)]">
                Roadmap Performance &amp; Completion
              </h3>
              <p className="text-xs text-[color:var(--text-secondary)]">
                Enrolled learners and milestone completion rates
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {(analytics?.popularRoadmaps || []).map((rm) => (
              <div
                key={rm.title}
                className="p-4 rounded-xl border border-border bg-[color:var(--color-bg-base)] space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-[color:var(--text-primary)] leading-tight">
                    {rm.title}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand/10 text-brand border border-brand/20 flex-shrink-0">
                    {rm.enrolledCount} Active
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[color:var(--text-secondary)]">
                    <span>Completion Rate</span>
                    <span className="font-bold text-emerald-400">{rm.completionRate}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${rm.completionRate}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI Mentorship & Pedagogy Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-brand/20 bg-gradient-to-br from-[color:var(--color-bg-card)] to-brand/5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-brand/10 border border-brand/20 text-brand mt-0.5">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-[color:var(--text-primary)]">
                AI Career GPS & Skill Gap Engine
              </h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Career GPS evaluates user milestones, quiz scores, and profile skills against real-time industry benchmarks using server-side Gemini 2.5 Flash with structured JSON output and strict schema validation.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-yellow-500/20 bg-gradient-to-br from-[color:var(--color-bg-card)] to-yellow-500/5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mt-0.5">
              <AcademicCapIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-[color:var(--text-primary)]">
                Gamification & Badges Engine
              </h3>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                Automated milestone evaluation rewards XP and verified badges across 5 core categories (learning milestones, 3/7-day streaks, 100% quiz scores, capstone projects, and career strategy).
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
