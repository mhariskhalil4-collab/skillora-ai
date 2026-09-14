import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roadmap, Task, CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { RoadmapService } from '../services/roadmap.service';
import { PythonCourseService } from '../services/pythonCourse.service';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { CourseLevelSwitcher } from './CourseLevelSwitcher';
import { PrerequisiteModal } from './PrerequisiteModal';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { MapIcon, SparklesIcon, AcademicCapIcon, ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export const RoadmapScreen: React.FC = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [lockedToast, setLockedToast] = useState<string | null>(null);
  
  // Track Mode: 'python' or 'personalized'
  const [activeTrack, setActiveTrack] = useState<'python' | 'personalized'>('python');
  
  // Python Multi-Level Course State
  const [pythonCourseState, setPythonCourseState] = useState<CourseProgressState>(() => PythonCourseService.getCourseState());
  const [activeLevel, setActiveLevel] = useState<CourseLevel>('beginner');
  const [prereqModalOpen, setPrereqModalOpen] = useState(false);
  const [prereqTargetLevel, setPrereqTargetLevel] = useState<CourseLevel | null>(null);
  const [prereqMessage, setPrereqMessage] = useState('');

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const isPythonCourse = activeTrack === 'python' || Boolean(
    roadmap?.title?.toLowerCase().includes('python') || 
    roadmap?.id?.includes('python')
  );

  const loadRoadmap = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await RoadmapService.fetchActiveRoadmap(user?.id);
      setRoadmap(data);

      const pState = PythonCourseService.getCourseState();
      setPythonCourseState(pState);
      setActiveLevel(pState.currentLevel);

      // Default track based on roadmap title
      if (data && (data.title?.toLowerCase().includes('python') || data.id?.includes('python'))) {
        setActiveTrack('python');
      } else if (data) {
        // If user has a personalized non-python roadmap, default to personalized but allow instant switch
        setActiveTrack('personalized');
      }
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

  // Determine current active tasks list
  const currentTasks: Task[] = React.useMemo(() => {
    if (isPythonCourse && pythonCourseState) {
      const lvlData = pythonCourseState.levels[activeLevel];
      return lvlData?.tasks || [];
    }
    return roadmap?.tasks || [];
  }, [isPythonCourse, pythonCourseState, activeLevel, roadmap?.tasks]);

  const selectedTask = currentTasks.find((t) => t.id === selectedTaskId) || null;

  const handleLockedTaskClick = (task: Task) => {
    const activeStep = currentTasks.find((t) => t.status === 'in_progress')?.orderIndex || 1;
    setLockedToast(`Step ${task.orderIndex} is locked. Complete Step ${activeStep} first to unlock this module!`);
    setTimeout(() => {
      setLockedToast(null);
    }, 3500);
  };

  const handleLevelSelect = (level: CourseLevel) => {
    const res = PythonCourseService.switchLevel(level);
    if (res.success) {
      setPythonCourseState(res.state);
      setActiveLevel(level);
    } else {
      setPrereqTargetLevel(level);
      setPrereqMessage(res.message || 'Complete the prerequisite level assessment first.');
      setPrereqModalOpen(true);
    }
  };

  const handleLockedLevelClick = (level: CourseLevel, message: string) => {
    setPrereqTargetLevel(level);
    setPrereqMessage(message);
    setPrereqModalOpen(true);
  };

  const handleGoToPrerequisite = () => {
    if (prereqTargetLevel === 'intermediate') {
      handleLevelSelect('beginner');
    } else if (prereqTargetLevel === 'advanced') {
      handleLevelSelect('intermediate');
    }
  };

  const handleTaskCompleted = async (taskId: string) => {
    if (isPythonCourse && pythonCourseState) {
      // Complete in Python service
      const updatedState = PythonCourseService.completeTask(activeLevel, taskId);
      setPythonCourseState(updatedState);

      // Persist to Supabase if connected
      try {
        await RoadmapService.completeTask(taskId, user?.id);
      } catch (e) {
        console.warn('Note on Supabase task completion:', e);
      }
      return;
    }

    if (!roadmap) return;

    // 1. Optimistic UI update
    setRoadmap((prev) => {
      if (!prev) return null;
      const sorted = [...prev.tasks].sort((a, b) => a.orderIndex - b.orderIndex);
      const currentIdx = sorted.findIndex((t) => t.id === taskId);

      const updatedTasks = sorted.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: 'completed' as const };
        }
        return task;
      });

      // Unlock next uncompleted task
      const nextTask = updatedTasks.find((t, idx) => idx > currentIdx && t.status !== 'completed') ||
                       updatedTasks.find((t) => t.status === 'locked');
      if (nextTask) {
        nextTask.status = 'in_progress';
      }

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

  if (!roadmap || (roadmap.tasks.length === 0 && !isPythonCourse)) {
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

  const currentLevelData = isPythonCourse && pythonCourseState ? pythonCourseState.levels[activeLevel] : null;
  const displayProgress = isPythonCourse && currentLevelData 
    ? currentLevelData.progressPercentage 
    : roadmap.progressPercentage;

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 overflow-hidden">
      {/* Toast Alert for Locked Step Click */}
      {lockedToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[color:var(--color-bg-card)] border border-brand/40 text-[color:var(--text-primary)] px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-lg">🔒</span>
          <span>{lockedToast}</span>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-heading font-bold text-[color:var(--text-primary)]">
                {isPythonCourse ? 'Python Masterclass (Beginner to Advanced)' : roadmap.title}
              </h1>
              {isPythonCourse && (
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  Comprehensive 3-Level Structured Curriculum with Project Verifications and Formal Assessments
                </p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/onboarding')}
              className="self-start sm:self-auto cursor-pointer shrink-0"
            >
              <SparklesIcon className="w-4 h-4 mr-1.5" /> + New Roadmap
            </Button>
          </div>

          {/* Dual Track Switcher if user has both a custom roadmap and python */}
          {roadmap && !roadmap.title?.toLowerCase().includes('python') && (
            <div className="flex items-center gap-2 p-1.5 mb-6 rounded-xl bg-[color:var(--color-bg-card)] border border-border w-full sm:w-fit">
              <button
                type="button"
                onClick={() => setActiveTrack('python')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeTrack === 'python'
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                }`}
              >
                <AcademicCapIcon className="w-4 h-4" /> Python Masterclass
              </button>
              <button
                type="button"
                onClick={() => setActiveTrack('personalized')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeTrack === 'personalized'
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                }`}
              >
                <SparklesIcon className="w-4 h-4" /> My Personalized Track
              </button>
            </div>
          )}

          {/* Banner to open dedicated Python Course if on a personalized roadmap */}
          {!isPythonCourse && (
            <div className="mb-6 p-4 rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 via-[color:var(--color-bg-card)] to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <AcademicCapIcon className="w-5 h-5 text-brand shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-[color:var(--text-primary)]">Looking for structured language masterclasses? </span>
                  <span className="text-[color:var(--text-secondary)]">Explore the complete Python Masterclass (Beginner to Advanced).</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/courses/python')}
                className="text-xs font-mono font-bold text-brand hover:underline shrink-0 cursor-pointer self-start sm:self-auto"
              >
                Open Python Course →
              </button>
            </div>
          )}

          {/* Level Switcher for Python Course */}
          {isPythonCourse && pythonCourseState && (
            <CourseLevelSwitcher
              courseState={pythonCourseState}
              activeLevel={activeLevel}
              onSelectLevel={handleLevelSelect}
              onLockedLevelClick={handleLockedLevelClick}
            />
          )}

          {/* Progress Bar Header */}
          <div className="flex items-center gap-4 bg-[color:var(--color-bg-card)] p-4 rounded-xl border border-border shadow-sm">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-[color:var(--text-secondary)]">
                  {isPythonCourse ? `${activeLevel.toUpperCase()} Level Progress` : 'Overall Roadmap Progress'}
                </span>
                <span className="text-sm font-mono text-brand font-bold">
                  {displayProgress}%
                </span>
              </div>
              <ProgressBar progress={displayProgress} />
            </div>
          </div>
        </header>

        {/* Timeline */}
        <RoadmapTimeline
          tasks={currentTasks}
          onSelectTask={(task: Task) => setSelectedTaskId(task.id)}
          onLockedTaskClick={handleLockedTaskClick}
        />
      </div>

      {/* Drawer */}
      <TaskDetailDrawer
        task={selectedTask}
        isOpen={!!selectedTask}
        onClose={() => setSelectedTaskId(null)}
        onTaskCompleted={handleTaskCompleted}
      />

      {/* Prerequisite Modal */}
      <PrerequisiteModal
        isOpen={prereqModalOpen}
        targetLevel={prereqTargetLevel}
        requirementMessage={prereqMessage}
        onClose={() => setPrereqModalOpen(false)}
        onGoToPrerequisite={handleGoToPrerequisite}
      />
    </div>
  );
};
