import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Task, CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { ThreeDAnimationCourseService } from '../services/threeDAnimationCourse.service';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { CourseLevelSwitcher } from './CourseLevelSwitcher';
import { PrerequisiteModal } from './PrerequisiteModal';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CertificateService } from '@/features/certificate/certificate.service';
import {
  CubeTransparentIcon,
  SparklesIcon,
  TrophyIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  FilmIcon,
} from '@heroicons/react/24/outline';

export const ThreeDAnimationCourseScreen: React.FC = () => {
  const [courseState, setCourseState] = useState<CourseProgressState>(() => ThreeDAnimationCourseService.getCourseState());
  const [activeLevel, setActiveLevel] = useState<CourseLevel>('beginner');
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [lockedToast, setLockedToast] = useState<string | null>(null);
  const [prereqModalOpen, setPrereqModalOpen] = useState(false);
  const [prereqTargetLevel, setPrereqTargetLevel] = useState<CourseLevel | null>(null);
  const [prereqMessage, setPrereqMessage] = useState('');
  const [isClaimingCert, setIsClaimingCert] = useState(false);
  const [certClaimedToast, setCertClaimedToast] = useState<string | null>(null);

  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const loadState = useCallback(() => {
    const state = ThreeDAnimationCourseService.getCourseState();
    setCourseState(state);

    const levelParam = searchParams.get('level') as CourseLevel | null;
    if (levelParam && ['beginner', 'intermediate', 'advanced'].includes(levelParam)) {
      const check = ThreeDAnimationCourseService.checkLevelPrerequisites(levelParam, state);
      if (!check.canUnlock) {
        setPrereqTargetLevel(levelParam);
        setPrereqMessage(check.reason || 'Complete the prerequisite level assessment and all required modules first.');
        setPrereqModalOpen(true);
        setActiveLevel('beginner');
      } else {
        setActiveLevel(levelParam);
      }
    } else {
      setActiveLevel(state.currentLevel);
    }

    const taskParam = searchParams.get('task');
    if (taskParam) {
      // Validate that task is unlocked
      const allTasks = [
        ...state.levels.beginner.tasks,
        ...state.levels.intermediate.tasks,
        ...state.levels.advanced.tasks
      ];
      const target = allTasks.find(t => t.id === taskParam);
      if (target && target.status !== 'locked') {
        setSelectedTaskId(taskParam);
      } else if (target) {
        setLockedToast(`Task ${target.orderIndex} is currently locked. Complete prerequisites first.`);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  const currentLevelData = courseState.levels[activeLevel] || courseState.levels.beginner;
  const currentTasks: Task[] = currentLevelData?.tasks || [];
  const selectedTask = currentTasks.find((t) => t.id === selectedTaskId) || null;

  const certEligibility = ThreeDAnimationCourseService.isEligibleForMasterCertificate(courseState);

  const handleLockedTaskClick = (task: Task) => {
    const activeStep = currentTasks.find((t) => t.status === 'in_progress')?.orderIndex || 1;
    setLockedToast(`Step ${task.orderIndex} is locked. Complete Step ${activeStep} first to unlock this module!`);
    setTimeout(() => {
      setLockedToast(null);
    }, 3500);
  };

  const handleLevelSelect = (level: CourseLevel) => {
    const res = ThreeDAnimationCourseService.switchLevel(level);
    if (res.success) {
      setCourseState(res.state);
      setActiveLevel(level);
    } else {
      setPrereqTargetLevel(level);
      setPrereqMessage(res.reason || 'Complete the prerequisite level assessment and all required modules first.');
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
    const updatedState = ThreeDAnimationCourseService.completeTask(activeLevel, taskId);
    setCourseState(updatedState);

    // Auto-check if completed master level to issue credential
    if (user?.id) {
      const eligibility = ThreeDAnimationCourseService.isEligibleForMasterCertificate(updatedState);
      if (eligibility.isEligible) {
        try {
          await CertificateService.getOrCreateCertificate(
            user.id,
            '3D Animation Masterclass',
            '3d-gold'
          );
        } catch (e) {
          console.warn('Certificate auto-check note:', e);
        }
      }
    }
  };

  const handleClaimCertificate = async () => {
    if (!certEligibility.isEligible) return;
    setIsClaimingCert(true);
    try {
      if (user?.id) {
        await CertificateService.getOrCreateCertificate(
          user.id,
          '3D Animation Masterclass',
          '3d-gold'
        );
      }
      setCertClaimedToast('🎉 Master 3D Animator Certificate successfully generated and added to your verified profile!');
      setTimeout(() => {
        navigate('/profile?tab=certificates');
      }, 1500);
    } catch (err) {
      console.error('Failed to claim certificate:', err);
      navigate('/profile?tab=certificates');
    } finally {
      setIsClaimingCert(false);
    }
  };

  const getLevelBadgeText = (lvl: CourseLevel) => {
    switch (lvl) {
      case 'beginner':
        return 'Level 1: Beginner • 12 Modules + Bouncing Ball Project + Assessment (20 MCQs)';
      case 'intermediate':
        return 'Level 2: Intermediate • 14 Modules + Walk Cycle Project + Assessment (30 MCQs)';
      case 'advanced':
        return 'Level 3: Advanced • 14 Modules + 2 Capstone Projects + Master Assessment (40 MCQs)';
    }
  };

  return (
    <div data-testid="threed-course-screen" className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 overflow-hidden">
      {/* Toast Alert for Locked Step */}
      {lockedToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[color:var(--color-bg-card)] border border-brand/40 text-[color:var(--text-primary)] px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-lg">🔒</span>
          <span>{lockedToast}</span>
        </div>
      )}

      {/* Toast for Certificate Claimed */}
      {certClaimedToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-success text-white px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{certClaimedToast}</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[color:var(--text-secondary)] hover:text-brand transition-colors cursor-pointer"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" /> Back to All Courses
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/roadmap')}
              className="text-xs font-mono text-brand hover:underline cursor-pointer flex items-center gap-1"
            >
              <SparklesIcon className="w-3.5 h-3.5" /> View My Personalized Roadmap
            </button>
          </div>
        </div>

        {/* Master Certificate Unlocked Hero Banner */}
        {certEligibility.isEligible && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 border-2 border-purple-400/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-700 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <TrophyIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-400/20 text-purple-300 border border-purple-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                  <CheckBadgeIcon className="w-3.5 h-3.5" /> Master 3D Animator Certified
                </span>
                <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                  3D Animation Masterclass Completed!
                </h2>
                <p className="text-xs sm:text-sm text-[color:var(--text-secondary)]">
                  You scored {certEligibility.advScore}/40 on the Master Assessment with 100% course completion across all 3 levels.
                </p>
              </div>
            </div>

            <Button
              variant="primary"
              data-testid="claim-certificate-btn"
              onClick={handleClaimCertificate}
              isLoading={isClaimingCert}
              className="w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold cursor-pointer shadow-lg shadow-purple-500/20"
            >
              <TrophyIcon className="w-4 h-4" /> View &amp; Claim Master Certificate
            </Button>
          </div>
        )}

        {/* Course Header */}
        <header className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <CubeTransparentIcon className="w-4 h-4" /> 3D Design &amp; Animation Track
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
                3D Animation Masterclass
              </h1>
              <p className="text-sm sm:text-base text-[color:var(--text-secondary)] font-body mt-2 leading-relaxed max-w-2xl">
                A complete production-ready masterclass taking you from 3D fundamentals and Blender navigation to advanced character rigging, FACS facial performance, body mechanics, physics simulations, multi-pass compositing, and complete animated short film production.
              </p>
            </div>

            {/* Overall Course Progress Badge */}
            <div className="flex-shrink-0 bg-[color:var(--color-bg-card)] border border-border p-4 rounded-2xl shadow-sm text-center min-w-[140px]">
              <span className="text-xs font-mono text-[color:var(--text-secondary)] uppercase tracking-wider block mb-1">
                Course Progress
              </span>
              <span data-testid="overall-progress-percentage" className="text-2xl sm:text-3xl font-heading font-bold text-brand block">
                {courseState.overallProgress}%
              </span>
              <div className="w-full mt-2" data-testid="overall-progress-bar">
                <ProgressBar progress={courseState.overallProgress} />
              </div>
            </div>
          </div>

          {/* Level Switcher Component */}
          <div className="pt-2">
            <CourseLevelSwitcher
              courseState={courseState}
              activeLevel={activeLevel}
              onSelectLevel={handleLevelSelect}
              onLockedLevelClick={handleLockedLevelClick}
            />
          </div>
        </header>

        {/* Level Stats Bar */}
        <div className="mb-6 p-4 rounded-xl bg-[color:var(--color-bg-card)] border border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-body">
          <div className="flex items-center gap-2 font-mono text-brand font-semibold">
            <FilmIcon className="w-4 h-4" />
            <span>{getLevelBadgeText(activeLevel)}</span>
          </div>
          
          <div className="flex items-center gap-4 text-[color:var(--text-secondary)] font-mono text-xs">
            <span>
              Progress: <strong className="text-[color:var(--text-primary)]">{currentLevelData.completedTasks}/{currentLevelData.totalTasks} Tasks</strong> ({currentLevelData.progressPercentage}%)
            </span>
            {currentLevelData.assessmentPassed && (
              <span className="inline-flex items-center gap-1 text-success font-bold">
                <CheckCircleIcon className="w-4 h-4" /> Exam Passed ({currentLevelData.assessmentScore}/{currentLevelData.totalQuestions})
              </span>
            )}
          </div>
        </div>

        {/* Timeline of Tasks */}
        <main className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-4 sm:p-6 shadow-sm">
          <RoadmapTimeline
            tasks={currentTasks}
            onSelectTask={(task: Task) => setSelectedTaskId(task.id)}
            onLockedTaskClick={handleLockedTaskClick}
          />
        </main>
      </div>

      {/* Task / Lesson Drawer */}
      {selectedTask && (
        <TaskDetailDrawer
          task={selectedTask}
          isOpen={!!selectedTask}
          onClose={() => setSelectedTaskId(null)}
          onTaskCompleted={handleTaskCompleted}
        />
      )}

      {/* Prerequisite Alert Modal */}
      <PrerequisiteModal
        isOpen={prereqModalOpen}
        targetLevel={prereqTargetLevel}
        courseName="3D Animation"
        requirementMessage={prereqMessage}
        onClose={() => setPrereqModalOpen(false)}
        onGoToPrerequisite={handleGoToPrerequisite}
      />
    </div>
  );
};
