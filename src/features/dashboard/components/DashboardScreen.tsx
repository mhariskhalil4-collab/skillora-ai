import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Input } from '@/components/forms/Input';
import { Badge } from '@/components/elements/Badge';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { DashboardService, DashboardData } from '../services/dashboard.service';
import { 
  FireIcon, 
  SparklesIcon, 
  ArrowRightIcon, 
  ChartBarIcon, 
  BoltIcon,
  MapIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  CheckCircleIcon as OutlineCheck 
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as SolidCheck } from '@heroicons/react/24/solid';

export const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quickPrompt, setQuickPrompt] = useState("");

  const loadDashboard = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await DashboardService.fetchDashboardData(authUser?.id);
      setData(result);
    } catch (err: any) {
      console.error('[DashboardScreen] Failed to load dashboard data:', err);
      setError(err?.message || 'Unable to connect to dashboard services. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const handleAIAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPrompt.trim()) return;
    navigate(`/study-buddy?prompt=${encodeURIComponent(quickPrompt)}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Loading your personalized dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Dashboard Connection Error
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              {error}
            </p>
          </div>
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
            onClick={() => loadDashboard()}
          >
            <ArrowPathIcon className="w-4 h-4" /> Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="max-w-md text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-4">
          <MapIcon className="w-12 h-12 text-brand mx-auto" />
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            Ready to Begin?
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)]">
            Launch onboarding to build your personalized learning track.
          </p>
          <Button variant="primary" className="w-full" onClick={() => navigate('/onboarding')}>
            Start Onboarding
          </Button>
        </div>
      </div>
    );
  }

  const hasActiveRoadmap = Boolean(data.roadmap.hasRoadmap);

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8">
      {/* Container constraints for ultra-wide monitors */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* --- HEADER (Welcome, Streak & XP Badges) --- */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
              {hasActiveRoadmap ? `Welcome back, ${data.user.firstName}.` : `Welcome, ${data.user.firstName}.`}
            </h1>
            <p className="text-[color:var(--text-secondary)] mt-1 font-body">
              {hasActiveRoadmap
                ? "Let's pick up where you left off."
                : (data.user.xpTotal > 0
                    ? "Ready to take on your next skill milestone?"
                    : "Your intelligent career acceleration & AI-guided learning platform.")}
            </p>
          </div>
          
          {/* Gamified Stats (Streak + Total XP) */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Streak Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full w-fit">
              <FireIcon className="w-5 h-5 text-orange-500" />
              <span className="font-heading font-bold text-orange-600 dark:text-orange-400 text-sm">
                {data.user.streak} Day Streak
              </span>
            </div>

            {/* Total XP Badge */}
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-4 py-2 rounded-full w-fit">
              <BoltIcon className="w-5 h-5 text-brand" />
              <span className="font-heading font-bold text-brand text-sm">
                {data.user.xpTotal} XP
              </span>
            </div>
          </div>
        </header>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Core Learning Loop / New Roadmap Prompt */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            
            {hasActiveRoadmap ? (
              <>
                {/* 1. Hero Card: Current Goal */}
                <Card className="relative overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand to-ai-glow opacity-10 group-hover:opacity-20 transition-opacity blur-xl rounded-xl z-0 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                          Current Target
                        </span>
                        <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)] mt-1">
                          {data.roadmap.goal}
                        </h2>
                      </div>
                      {data.roadmap.totalModules > 0 && (
                        <Badge 
                          type="skill" 
                          label={`Module ${data.roadmap.currentModuleIndex}/${data.roadmap.totalModules}`} 
                        />
                      )}
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <p className="text-sm font-medium text-[color:var(--text-secondary)]">
                          {data.roadmap.currentModule}
                        </p>
                        <span className="text-sm font-mono text-brand font-bold">{data.roadmap.progress}%</span>
                      </div>
                      <ProgressBar progress={data.roadmap.progress} />
                    </div>

                    <Button 
                      variant="primary" 
                      className="w-full sm:w-auto self-start group-hover:shadow-ai-glow transition-shadow cursor-pointer"
                      onClick={() => navigate('/roadmap')}
                    >
                      Resume Learning <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>

                {/* 2. Daily Tasks (Linear Style) */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
                      <OutlineCheck className="w-5 h-5 text-brand" />
                      Daily Objectives
                    </h3>
                    <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                      {data.tasks.filter((t) => t.completed).length}/{data.tasks.length} Completed
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {data.tasks.map((task) => (
                      <div 
                        key={task.id} 
                        onClick={() => navigate('/roadmap')}
                        className={`flex items-center justify-between gap-3 p-4 rounded-lg border backdrop-blur-sm transition-all cursor-pointer ${
                          task.completed 
                            ? 'bg-[color:var(--color-bg-base)] border-transparent opacity-60' 
                            : task.status === 'in_progress'
                            ? 'bg-[color:var(--color-bg-card)] border-brand shadow-sm ring-1 ring-brand/20'
                            : 'bg-[color:var(--color-bg-card)] border-border hover:border-brand/50 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {task.completed ? (
                            <SolidCheck className="w-6 h-6 text-success flex-shrink-0" />
                          ) : (
                            <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                              task.status === 'in_progress' ? 'border-brand' : 'border-border'
                            }`} />
                          )}
                          <span className={`font-body text-sm sm:text-base ${
                            task.completed ? 'text-[color:var(--text-secondary)] line-through' : 'text-[color:var(--text-primary)]'
                          }`}>
                            {task.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-mono text-brand font-medium">
                            +{task.xpReward} XP
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              /* Ready to start a new roadmap state */
              <div className="flex flex-col gap-6">
                <Card className="relative overflow-hidden group border-brand/40 bg-gradient-to-br from-[color:var(--color-bg-card)] via-[color:var(--color-bg-card)] to-brand/5">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand to-ai-glow opacity-15 group-hover:opacity-25 transition-opacity blur-xl rounded-xl z-0 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-6 p-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                          <SparklesIcon className="w-3.5 h-3.5" />
                          {data.user.xpTotal > 0 ? 'Milestone Complete' : 'AI Career GPS'}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
                          {data.user.xpTotal > 0
                            ? 'Ready to start a new roadmap?'
                            : 'Generate Your Custom AI Roadmap'}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed max-w-2xl">
                      {data.user.xpTotal > 0
                        ? "You've successfully completed your previous curriculum and unlocked your credentials! Choose your next target technology or job role to generate a fresh, personalized AI learning path."
                        : "Take our 2-minute diagnostic onboarding to generate your personalized AI curriculum and track daily learning goals."}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        variant="primary"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
                        onClick={() => navigate('/onboarding')}
                      >
                        <SparklesIcon className="w-4 h-4" /> Start New Roadmap
                      </Button>

                      {data.user.xpTotal > 0 && (
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto cursor-pointer"
                          onClick={() => navigate('/profile')}
                        >
                          View Earned Certificates
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>

                {/* Recommended Career Tracks Snippet */}
                <Card className="border-border">
                  <h3 className="text-base font-heading font-semibold text-[color:var(--text-primary)] mb-3">
                    Explore Trending Specializations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { role: 'Full-Stack AI Engineer', desc: 'Next.js, Python, Vector DBs, LLM APIs' },
                      { role: 'Shopify Headless Architect', desc: 'Liquid, Hydrogen, Remix, GraphQL' },
                      { role: 'Autonomous Agents Specialist', desc: 'LangChain, Multi-Agent Systems, Tool Use' },
                      { role: 'Senior Cloud & Data Engineer', desc: 'BigQuery, Data Pipelines, Serverless' },
                    ].map((track) => (
                      <div
                        key={track.role}
                        onClick={() => navigate('/onboarding')}
                        className="p-3.5 rounded-xl border border-border bg-[color:var(--color-bg-base)] hover:border-brand/60 hover:shadow-sm transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-heading font-semibold text-[color:var(--text-primary)] group-hover:text-brand transition-colors">
                            {track.role}
                          </span>
                          <ArrowRightIcon className="w-3.5 h-3.5 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-[color:var(--text-secondary)] mt-1">
                          {track.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: AI & Market Integration */}
          <div className="w-full lg:w-96 flex flex-col gap-6 lg:gap-8">
            
            {/* 3. Quick AI Prompt */}
            <Card className="border-ai-glow/30 bg-gradient-to-br from-[color:var(--color-bg-card)] to-ai-muted/10">
              <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2 mb-2">
                <SparklesIcon className="w-5 h-5 text-ai-glow" />
                Study Buddy
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)] mb-4">
                Stuck on a concept? Ask your AI mentor for an analogy or walkthrough.
              </p>
              <form onSubmit={handleAIAsk} className="flex flex-col gap-3">
                <Input 
                  placeholder={`Ask a question about ${data.roadmap.currentModule}...`} 
                  value={quickPrompt}
                  onChange={(e) => setQuickPrompt(e.target.value)}
                  className="bg-[color:var(--color-bg-base)] border-border"
                />
                <Button type="submit" variant="ai-action" className="w-full cursor-pointer" disabled={!quickPrompt.trim()}>
                  Ask AI
                </Button>
              </form>
            </Card>

            {/* 4. Market Insights Snippet */}
            <section>
              <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] mb-4 flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5 text-[color:var(--text-secondary)]" />
                Market Radar
              </h3>
              <div className="flex flex-col gap-3">
                {data.marketInsights.map((insight) => (
                  <div key={insight.id} className="flex justify-between items-center p-3 rounded-lg border border-border bg-[color:var(--color-bg-card)]">
                    <span className="font-mono text-xs font-semibold text-brand">
                      {insight.trend}
                    </span>
                    <span className="text-sm font-body text-[color:var(--text-primary)]">
                      {insight.skill}
                    </span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate('/career-gps')}
                className="text-sm font-medium text-brand hover:underline mt-4 w-full text-left transition-colors cursor-pointer"
              >
                View full gap analysis →
              </button>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
