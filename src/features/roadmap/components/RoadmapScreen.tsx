import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roadmap, Task } from '../types/roadmap.types';
import { RoadmapService } from '../services/roadmap.service';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { MapIcon, SparklesIcon, ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export const RoadmapScreen: React.FC = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const loadRoadmap = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await RoadmapService.fetchActiveRoadmap(user?.id);
      setRoadmap(data);
    } catch (err: any) {
      console.error('[RoadmapScreen] Failed to load roadmap from Supabase:', err);
      setError(err?.message || 'Unable to retrieve your learning roadmap. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    loadRoadmap();
  }, [loadRoadmap]);

  const selectedTask = roadmap?.tasks.find((t) => t.id === selectedTaskId) || null;

  const handleTaskCompleted = async (taskId: string) => {
    if (!roadmap) return;

    // 1. Optimistic UI update
    setRoadmap((prev) => {
      if (!prev) return null;
      const updatedTasks = prev.tasks.map((task, idx, arr) => {
        if (task.id === taskId) {
          return { ...task, status: 'completed' as const };
        }
        // Unlock adjacent subsequent step if locked
        const prevTask = arr[idx - 1];
        if (prevTask && prevTask.id === taskId && task.status === 'locked') {
          return { ...task, status: 'in_progress' as const };
        }
        return task;
      });

      const completedCount = updatedTasks.filter((t) => t.status === 'completed').length;
      const progressPercentage = Math.round((completedCount / updatedTasks.length) * 100);

      return {
        ...prev,
        progressPercentage,
        tasks: updatedTasks,
      };
    });

    // 2. Persist to Supabase in the background
    try {
      await RoadmapService.completeTask(taskId, user?.id);
      // Refresh to ensure exact sync with database triggers
      const syncedRoadmap = await RoadmapService.fetchActiveRoadmap(user?.id);
      if (syncedRoadmap) {
        setRoadmap(syncedRoadmap);
      }
    } catch (error) {
      console.error('Failed to persist completed task to Supabase:', error);
      // Revert/refresh on error
      await loadRoadmap();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Loading your AI learning roadmap...
          </p>
        </div>
      </div>
    );
  }

  if (error && !roadmap) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Failed to Load Roadmap
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              {error}
            </p>
          </div>
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
            onClick={() => loadRoadmap()}
          >
            <ArrowPathIcon className="w-4 h-4" /> Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  if (!roadmap || roadmap.tasks.length === 0) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl mx-auto flex items-center justify-center">
            <MapIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Ready to Start a New Roadmap?
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              You don't currently have an in-progress roadmap. Generate a new tailored AI curriculum to advance your skills.
            </p>
          </div>
          <div className="space-y-3">
            <Button
              variant="primary"
              className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
              onClick={() => navigate('/onboarding')}
            >
              <SparklesIcon className="w-4 h-4" /> Generate New Roadmap
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl font-heading font-bold text-[color:var(--text-primary)]">
              {roadmap.title}
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/onboarding')}
              className="self-start sm:self-auto cursor-pointer"
            >
              <SparklesIcon className="w-4 h-4 mr-1.5" /> + New Roadmap
            </Button>
          </div>
          <div className="flex items-center gap-4 bg-[color:var(--color-bg-card)] p-4 rounded-xl border border-border shadow-sm">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-[color:var(--text-secondary)]">
                  Overall Roadmap Progress
                </span>
                <span className="text-sm font-mono text-brand font-bold">
                  {roadmap.progressPercentage}%
                </span>
              </div>
              <ProgressBar progress={roadmap.progressPercentage} />
            </div>
          </div>
        </header>

        {/* Timeline */}
        <RoadmapTimeline
          tasks={roadmap.tasks}
          onSelectTask={(task: Task) => setSelectedTaskId(task.id)}
        />
      </div>

      {/* Drawer */}
      <TaskDetailDrawer
        task={selectedTask}
        isOpen={!!selectedTask}
        onClose={() => setSelectedTaskId(null)}
        onTaskCompleted={handleTaskCompleted}
      />
    </div>
  );
};
