import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Task, CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { ShopifyDeveloperCourseService } from '../services/shopifyDeveloperCourse.service';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { CourseLevelSwitcher } from './CourseLevelSwitcher';
import { CourseSwitcherNav } from './CourseSwitcherNav';
import { PrerequisiteModal } from './PrerequisiteModal';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CertificateService } from '@/features/certificate/certificate.service';
import {
  TrophyIcon,
  CheckBadgeIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

export const ShopifyDeveloperCourseScreen: React.FC = () => {
  const [courseState, setCourseState] = useState<CourseProgressState>(() => ShopifyDeveloperCourseService.getCourseState());
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
    const state = ShopifyDeveloperCourseService.getCourseState();
    setCourseState(state);

    const levelParam = searchParams.get('level') as CourseLevel | null;
    if (levelParam && ['beginner', 'intermediate', 'advanced'].includes(levelParam)) {
      const check = ShopifyDeveloperCourseService.checkLevelPrerequisites(levelParam, state);
      if (!check.canUnlock) {
        setPrereqTargetLevel(levelParam);
        setPrereqMessage(check.reason || 'Complete the prerequisite level assessment and all required modules first.');
        setPrereqModalOpen(true);
      } else {
        setActiveLevel(levelParam);
      }
    } else {
      const activeCheck = ShopifyDeveloperCourseService.checkLevelPrerequisites(state.currentLevel, state);
      if (!activeCheck.canUnlock) {
        setActiveLevel('beginner');
      } else {
        setActiveLevel(state.currentLevel);
      }
    }

    const taskParam = searchParams.get('task');
    if (taskParam) {
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

  const certEligibility = ShopifyDeveloperCourseService.isEligibleForMasterCertificate(courseState);

  const handleLockedTaskClick = (task: Task) => {
    const activeStep = currentTasks.find((t) => t.status === 'in_progress')?.orderIndex || 1;
    setLockedToast(`Step ${task.orderIndex} is locked. Complete Step ${activeStep} first to unlock this module!`);
    setTimeout(() => {
      setLockedToast(null);
    }, 3500);
  };

  const handleLevelSelect = (level: CourseLevel) => {
    const res = ShopifyDeveloperCourseService.switchLevel(level);
    if (res.success) {
      setCourseState(res.state);
      setActiveLevel(level);
    } else {
      setPrereqTargetLevel(level);
      setPrereqMessage(res.error || res.reason || 'Complete the prerequisite level assessment and all required modules first.');
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
    setPrereqModalOpen(false);
  };

  const handleTaskCompleted = async (taskId: string) => {
    const updatedState = ShopifyDeveloperCourseService.completeTask(activeLevel, taskId);
    setCourseState(updatedState);

    // Auto-check if completed master level to issue credential
    if (user?.id) {
      const eligibility = ShopifyDeveloperCourseService.isEligibleForMasterCertificate(updatedState);
      if (eligibility.isEligible) {
        try {
          await CertificateService.getOrCreateCertificate(
            user.id,
            'Shopify Developer Masterclass — Theme & App Engineer',
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
          'Shopify Developer Masterclass — Theme & App Engineer',
          '3d-gold'
        );
      }
      setCertClaimedToast('🎉 Master Shopify Developer Certificate successfully generated and added to your verified profile!');
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
        return 'Level 1: Beginner • 12 Modules + Custom Theme Feature Project + Assessment (20 MCQs)';
      case 'intermediate':
        return 'Level 2: Intermediate • 14 Modules + Shopify Custom App Project + Assessment (30 MCQs)';
      case 'advanced':
        return 'Level 3: Advanced • 14 Modules + 2 Enterprise Capstones + Master Assessment (40 MCQs)';
    }
  };

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8 overflow-hidden">
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
        
        {/* Course Navigation & Switcher Header */}
        <CourseSwitcherNav
          currentCourseTitle="Shopify Developer Masterclass"
          currentCourseId="shopify-developer"
        />

        {/* Master Certificate Unlocked Hero Banner */}
        {certEligibility.isEligible && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 border-2 border-emerald-400/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <TrophyIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                  <CheckBadgeIcon className="w-3.5 h-3.5" /> Master Shopify Developer Certified
                </span>
                <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                  Shopify Developer Masterclass Completed!
                </h2>
                <p className="text-xs sm:text-sm text-[color:var(--text-secondary)]">
                  You scored {certEligibility.advScore}/40 on the Master Assessment with 100% course completion across all 3 levels.
                </p>
              </div>
            </div>

            <Button
              variant="primary"
              onClick={handleClaimCertificate}
              isLoading={isClaimingCert}
              className="w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <TrophyIcon className="w-4 h-4" /> View &amp; Claim Master Certificate
            </Button>
          </div>
        )}

        {/* Course Header */}
        <header className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <CommandLineIcon className="w-4 h-4" /> Shopify Platform &amp; App Engineering Track
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
                Shopify Developer Masterclass
              </h1>
              <p className="text-sm sm:text-base text-[color:var(--text-secondary)] mt-1.5 leading-relaxed">
                A complete production-ready masterclass covering modern Shopify platform engineering, Online Store 2.0 theme architecture, JSON templates, Metafields/Metaobjects, GraphQL Admin &amp; Storefront APIs, Remix app development, App Bridge 3.x, BullMQ webhook queues, Checkout Extensibility, Shopify Functions, Hydrogen/Oxygen, and production security with 3 formal assessments.
              </p>
            </div>
            
            <div className="flex sm:flex-col items-end gap-1.5 shrink-0">
              <span className="text-xs font-mono uppercase text-[color:var(--text-secondary)] font-semibold">Overall Course Progress</span>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-brand">{courseState.overallProgress}%</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[color:var(--color-bg-card)] border border-border">
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Total Levels</span>
              <p className="text-base font-heading font-bold text-[color:var(--text-primary)]">3 Levels</p>
            </div>
            <div className="p-3 rounded-xl bg-[color:var(--color-bg-card)] border border-border">
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Theory &amp; Projects</span>
              <p className="text-base font-heading font-bold text-[color:var(--text-primary)]">44 Tasks</p>
            </div>
            <div className="p-3 rounded-xl bg-[color:var(--color-bg-card)] border border-border">
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Formal Assessments</span>
              <p className="text-base font-heading font-bold text-[color:var(--text-primary)]">3 Official Exams (90 MCQs)</p>
            </div>
            <div className="p-3 rounded-xl bg-[color:var(--color-bg-card)] border border-border">
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Verified Credential</span>
              <p className="text-base font-heading font-bold text-emerald-500">Master Certificate</p>
            </div>
          </div>

          {/* 3-Level Switcher Component */}
          <div className="pt-2">
            <CourseLevelSwitcher
              courseState={courseState}
              activeLevel={activeLevel}
              onSelectLevel={handleLevelSelect}
              onLockedLevelClick={handleLockedLevelClick}
            />
          </div>

          {/* Active Level Progress Card */}
          <div className="bg-[color:var(--color-bg-card)] p-4 sm:p-5 rounded-2xl border border-border shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-brand">
                  {getLevelBadgeText(activeLevel)}
                </span>
                <h3 className="text-base font-heading font-bold text-[color:var(--text-primary)]">
                  {currentLevelData.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                  {currentLevelData.completedTasks} of {currentLevelData.totalTasks} modules complete
                </span>
                <span className="text-sm font-mono font-bold text-brand">
                  {currentLevelData.progressPercentage}%
                </span>
              </div>
            </div>
            <ProgressBar progress={currentLevelData.progressPercentage} />
          </div>
        </header>

        {/* Timeline of Modules */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)] flex items-center gap-2">
              <BookOpenIcon className="w-5 h-5 text-brand" />
              {activeLevel.toUpperCase()} Curriculum Schedule
            </h2>
            <span className="text-xs font-mono text-[color:var(--text-secondary)]">
              {currentTasks.length} Modules &amp; Assessments
            </span>
          </div>

          <RoadmapTimeline
            tasks={currentTasks}
            onSelectTask={(task: Task) => setSelectedTaskId(task.id)}
            onLockedTaskClick={handleLockedTaskClick}
          />
        </section>
      </div>

      {/* Task Detail Drawer */}
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
        courseName="Shopify Developer"
        requirementMessage={prereqMessage}
        onClose={() => setPrereqModalOpen(false)}
        onGoToPrerequisite={handleGoToPrerequisite}
      />
    </div>
  );
};
