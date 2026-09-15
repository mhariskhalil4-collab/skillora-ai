import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Roadmap, Task, CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { RoadmapService } from '../services/roadmap.service';
import {
  resolveCourseFromRoadmap,
  CourseMappingInfo,
} from '../services/courseRegistry';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { CourseLevelSwitcher } from './CourseLevelSwitcher';
import { PrerequisiteModal } from './PrerequisiteModal';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import {
  MapIcon,
  SparklesIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  RectangleStackIcon,
  PlusIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export const RoadmapScreen: React.FC = () => {
  const { roadmapId: routeRoadmapId } = useParams<{ roadmapId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedRoadmapId = routeRoadmapId || searchParams.get('id');

  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [allRoadmaps, setAllRoadmaps] = useState<Roadmap[]>([]);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [lockedToast, setLockedToast] = useState<string | null>(null);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Dynamic Course Integration
  const [courseInfo, setCourseInfo] = useState<CourseMappingInfo | null>(null);
  const [courseProgressState, setCourseProgressState] = useState<CourseProgressState | null>(null);
  const [activeLevel, setActiveLevel] = useState<CourseLevel>('beginner');

  // Prerequisite Modal State
  const [prereqModalOpen, setPrereqModalOpen] = useState(false);
  const [prereqTargetLevel, setPrereqTargetLevel] = useState<CourseLevel | null>(null);
  const [prereqMessage, setPrereqMessage] = useState('');

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  // Close switcher dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setIsSwitcherOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadRoadmap = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSelectedTaskId(null);

    try {
      // 1. Fetch all roadmaps to populate switcher
      const list = await RoadmapService.fetchAllRoadmaps(user?.id);
      setAllRoadmaps(list);

      // 2. Fetch target roadmap (by exact ID if specified, or active fallback)
      let data: Roadmap | null = null;
      if (requestedRoadmapId) {
        data = await RoadmapService.fetchRoadmapById(requestedRoadmapId, user?.id);
      }
      if (!data) {
        data = await RoadmapService.fetchActiveRoadmap(user?.id);
      }

      setRoadmap(data);

      if (data) {
        // Resolve mapped masterclass course dynamically (e.g. Facebook Ads, Python, SEO, Meta Ads, etc.)
        const resolvedCourse = resolveCourseFromRoadmap(data);
        setCourseInfo(resolvedCourse);

        if (resolvedCourse) {
          const cState = resolvedCourse.service.getCourseState();
          setCourseProgressState(cState);
          setActiveLevel(cState.currentLevel || 'beginner');
        } else {
          setCourseProgressState(null);
        }
      } else {
        setCourseInfo(null);
        setCourseProgressState(null);
      }
    } catch (err: any) {
      console.error('[RoadmapScreen] Failed to load roadmap:', err);
      setError(err?.message || 'Unable to retrieve your learning roadmap. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [user?.id, requestedRoadmapId]);

  useEffect(() => {
    loadRoadmap();
  }, [loadRoadmap]);

  const handleSelectRoadmap = async (targetRoadmap: Roadmap) => {
    setIsSwitcherOpen(false);
    setIsLoading(true);
    setSelectedTaskId(null);

    try {
      await RoadmapService.setActiveRoadmap(targetRoadmap.id, user?.id);
      setSearchParams({ id: targetRoadmap.id });
      setRoadmap(targetRoadmap);

      // Resolve course info for the newly selected roadmap
      const resolved = resolveCourseFromRoadmap(targetRoadmap);
      setCourseInfo(resolved);

      if (resolved) {
        const cState = resolved.service.getCourseState();
        setCourseProgressState(cState);
        setActiveLevel(cState.currentLevel || 'beginner');
      } else {
        setCourseProgressState(null);
      }

      setAllRoadmaps((prev) =>
        prev.map((r) => ({ ...r, isActive: r.id === targetRoadmap.id }))
      );

      setActiveToast(`Switched to "${targetRoadmap.title}"`);
      setTimeout(() => setActiveToast(null), 3000);
    } catch (err) {
      console.error('Failed to switch roadmap:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Current active tasks list: uses course tasks if masterclass available, else roadmap tasks
  const currentTasks: Task[] = useMemo(() => {
    if (courseInfo && courseProgressState && courseProgressState.levels[activeLevel]) {
      const lvlData = courseProgressState.levels[activeLevel];
      return lvlData.tasks || [];
    }
    return roadmap?.tasks || [];
  }, [courseInfo, courseProgressState, activeLevel, roadmap?.tasks]);

  const selectedTask = currentTasks.find((t) => t.id === selectedTaskId) || null;

  const handleLockedTaskClick = (task: Task) => {
    const activeStep = currentTasks.find((t) => t.status === 'in_progress')?.orderIndex || 1;
    setLockedToast(`Step ${task.orderIndex} is locked. Complete Step ${activeStep} first to unlock this module!`);
    setTimeout(() => {
      setLockedToast(null);
    }, 3500);
  };

  const handleLevelSelect = (level: CourseLevel) => {
    if (!courseInfo) return;

    const res = courseInfo.service.switchLevel(level);
    if (res.success) {
      setCourseProgressState(res.state);
      setActiveLevel(level);
    } else {
      setPrereqTargetLevel(level);
      setPrereqMessage(res.message || 'Complete the prerequisite level assessment and all required modules first.');
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
    if (courseInfo && courseProgressState) {
      const updatedState = courseInfo.service.completeTask(activeLevel, taskId);
      setCourseProgressState(updatedState);

      try {
        await RoadmapService.completeTask(taskId, user?.id);
      } catch (e) {
        console.warn('[RoadmapScreen] Supabase task completion sync note:', e);
      }
      return;
    }

    if (!roadmap) return;

    // Optimistic UI update for custom roadmap
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

      const nextTask =
        updatedTasks.find((t, idx) => idx > currentIdx && t.status !== 'completed') ||
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

    try {
      await RoadmapService.completeTask(taskId, user?.id);
      const syncedRoadmap = await RoadmapService.fetchRoadmapById(roadmap.id, user?.id);
      if (syncedRoadmap) {
        setRoadmap(syncedRoadmap);
      }
    } catch (err) {
      console.error('Failed to persist completed task:', err);
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

  if (!roadmap || (roadmap.tasks.length === 0 && !courseInfo)) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl mx-auto flex items-center justify-center">
            <MapIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Ready to Start a Roadmap?
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              You don't currently have an active roadmap. Generate a new custom AI curriculum to accelerate your skills.
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
              onClick={() => navigate('/courses')}
            >
              <AcademicCapIcon className="w-4 h-4" /> Browse Courses
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentLevelData = courseInfo && courseProgressState ? courseProgressState.levels[activeLevel] : null;
  const displayProgress =
    currentLevelData
      ? currentLevelData.progressPercentage
      : roadmap.progressPercentage;

  const displayTitle = courseInfo ? courseInfo.title : roadmap.title;
  const displayDescription = courseInfo ? courseInfo.description : (roadmap.description || 'Personalized AI Learning Track');

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 overflow-hidden">
      {/* Toast Alert for Locked Step */}
      {lockedToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[color:var(--color-bg-card)] border border-brand/40 text-[color:var(--text-primary)] px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-lg">🔒</span>
          <span>{lockedToast}</span>
        </div>
      )}

      {/* Toast Alert for Roadmap Switched */}
      {activeToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[color:var(--color-bg-card)] border border-brand text-[color:var(--text-primary)] px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircleIcon className="w-5 h-5 text-brand flex-shrink-0" />
          <span>{activeToast}</span>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Navigation & Multi-Roadmap Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-[color:var(--color-bg-card)] border border-border">
          {/* Quick Switcher Dropdown */}
          <div className="relative" ref={switcherRef}>
            <button
              type="button"
              onClick={() => setIsSwitcherOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[color:var(--color-bg-base)] border border-border hover:border-brand text-xs font-heading font-semibold text-[color:var(--text-primary)] transition-all cursor-pointer shadow-sm"
            >
              <RectangleStackIcon className="w-4 h-4 text-brand" />
              <span>Switch Roadmap ({allRoadmaps.length || 1})</span>
              <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${isSwitcherOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSwitcherOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-[color:var(--color-bg-card)] border border-border shadow-2xl z-40 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-200">
                <div className="px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[color:var(--text-secondary)] border-b border-border">
                  Your Saved Roadmaps
                </div>

                <div className="max-h-60 overflow-y-auto space-y-1 py-1">
                  {allRoadmaps.map((item) => {
                    const isSelected = item.id === roadmap.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectRoadmap(item)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-brand/10 text-brand font-bold border border-brand/30'
                            : 'text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className="truncate pr-2">
                          <p className="truncate font-semibold">{item.title}</p>
                          <p className="text-[10px] text-[color:var(--text-secondary)] font-mono font-normal">
                            {item.progressPercentage}% complete
                          </p>
                        </div>
                        {isSelected && <CheckCircleIcon className="w-4 h-4 text-brand shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between gap-2 px-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSwitcherOpen(false);
                      navigate('/roadmaps');
                    }}
                    className="text-xs font-mono text-brand hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Manage All Roadmaps →
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSwitcherOpen(false);
                      navigate('/onboarding');
                    }}
                    className="text-xs font-mono text-[color:var(--text-secondary)] hover:text-brand flex items-center gap-0.5 cursor-pointer"
                  >
                    <PlusIcon className="w-3.5 h-3.5" /> New
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/roadmaps')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border text-xs font-heading font-medium text-[color:var(--text-secondary)] hover:text-brand hover:border-brand/40 transition-colors cursor-pointer"
            >
              <RectangleStackIcon className="w-3.5 h-3.5" /> All Roadmaps
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/onboarding')}
              className="flex items-center gap-1 cursor-pointer shadow-ai-glow"
            >
              <SparklesIcon className="w-3.5 h-3.5" /> + New Roadmap
            </Button>
          </div>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brand/10 text-brand font-mono text-[11px] font-bold uppercase mb-2">
                <MapIcon className="w-3.5 h-3.5" />
                {roadmap.isActive ? 'Active Track' : 'Curriculum Track'}
                {courseInfo && (
                  <span className="text-[color:var(--text-secondary)] font-normal ml-1">
                    • {courseInfo.category}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
                {displayTitle}
              </h1>
              <p className="text-sm text-[color:var(--text-secondary)] mt-1.5 leading-relaxed">
                {displayDescription}
              </p>
            </div>
          </div>

          {/* Banner linking to full dedicated Masterclass if mapped */}
          {courseInfo && (
            <div className="mb-6 p-4 rounded-xl border border-brand/30 bg-gradient-to-r from-brand/10 via-[color:var(--color-bg-card)] to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <AcademicCapIcon className="w-5 h-5 text-brand shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-[color:var(--text-primary)]">{courseInfo.shortTitle} Masterclass available! </span>
                  <span className="text-[color:var(--text-secondary)]">Access interactive assessments, formal quizzes, and certifications.</span>
                </div>
              </div>
              <button
                onClick={() => navigate(courseInfo.route)}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand hover:underline shrink-0 cursor-pointer self-start sm:self-auto"
              >
                <span>Launch Full Masterclass</span>
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Level Switcher for 3-Level Masterclass Courses */}
          {courseInfo && courseProgressState && (
            <CourseLevelSwitcher
              courseState={courseProgressState}
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
                  {courseInfo ? `${activeLevel.toUpperCase()} Level Progress` : 'Overall Roadmap Progress'}
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
