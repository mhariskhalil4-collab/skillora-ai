import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task, CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { ShopifyCourseService } from '../services/shopifyCourse.service';
import { RoadmapTimeline } from './RoadmapTimeline';
import { TaskDetailDrawer } from './TaskDetailDrawer';
import { CourseLevelSwitcher } from './CourseLevelSwitcher';
import { PrerequisiteModal } from './PrerequisiteModal';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CertificateService } from '@/features/certificate/certificate.service';
import {
  AcademicCapIcon,
  SparklesIcon,
  TrophyIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export const ShopifyCourseScreen: React.FC = () => {
  const [courseState, setCourseState] = useState<CourseProgressState>(() => ShopifyCourseService.getCourseState());
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

  const loadState = useCallback(() => {
    const state = ShopifyCourseService.getCourseState();
    setCourseState(state);
    setActiveLevel(state.currentLevel);
  }, []);

  useEffect(() => {
    loadState();
  }, [loadState]);

  const currentLevelData = courseState.levels[activeLevel] || courseState.levels.beginner;
  const currentTasks: Task[] = currentLevelData?.tasks || [];
  const selectedTask = currentTasks.find((t) => t.id === selectedTaskId) || null;

  const certEligibility = ShopifyCourseService.isEligibleForMasterCertificate(courseState);

  const handleLockedTaskClick = (task: Task) => {
    const activeStep = currentTasks.find((t) => t.status === 'in_progress')?.orderIndex || 1;
    setLockedToast(`Step ${task.orderIndex} is locked. Complete Step ${activeStep} first to unlock this module!`);
    setTimeout(() => {
      setLockedToast(null);
    }, 3500);
  };

  const handleLevelSelect = (level: CourseLevel) => {
    const res = ShopifyCourseService.switchLevel(level);
    if (res.success) {
      setCourseState(res.state);
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
    const updatedState = ShopifyCourseService.completeTask(activeLevel, taskId);
    setCourseState(updatedState);

    // Auto-check if completed master level to issue credential
    if (user?.id) {
      const eligibility = ShopifyCourseService.isEligibleForMasterCertificate(updatedState);
      if (eligibility.isEligible) {
        try {
          await CertificateService.getOrCreateCertificate(
            user.id,
            'Shopify Liquid — Complete Professional Development Course',
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
          'Shopify Liquid — Complete Professional Development Course',
          '3d-gold'
        );
      }
      setCertClaimedToast('🎉 Shopify Liquid Master Certificate successfully generated and added to your verified profile!');
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
        return 'Level 1: Beginner • 12 Modules + Project + Assessment (20 MCQs)';
      case 'intermediate':
        return 'Level 2: Intermediate • 14 Modules + Project + Assessment (30 MCQs)';
      case 'advanced':
        return 'Level 3: Advanced • 14 Modules + Capstone + Master Assessment (40 MCQs)';
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
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-brand/20 to-teal-500/20 border-2 border-emerald-400/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <TrophyIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                  <CheckBadgeIcon className="w-3.5 h-3.5" /> Certified Shopify Developer
                </span>
                <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                  Shopify Liquid Course Completed!
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
              className="w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold cursor-pointer shadow-lg shadow-emerald-500/20"
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
                <AcademicCapIcon className="w-4 h-4" /> Ecommerce Theme Track
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
                Shopify Liquid — Complete Professional Development Course
              </h1>
              <p className="text-sm sm:text-base text-[color:var(--text-secondary)] mt-1.5 leading-relaxed">
                Learn Shopify Liquid from beginner to advanced through structured theory, practical code walkthroughs, OS 2.0 theme architecture, JSON templates, metafields, performance, and capstone projects.
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
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Total Modules &amp; Projects</span>
              <p className="text-base font-heading font-bold text-[color:var(--text-primary)]">43 Modules</p>
            </div>
            <div className="p-3 rounded-xl bg-[color:var(--color-bg-card)] border border-border">
              <span className="text-[10px] font-mono text-[color:var(--text-secondary)] uppercase">Formal Assessments</span>
              <p className="text-base font-heading font-bold text-[color:var(--text-primary)]">3 Official Exams</p>
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
        courseName="Shopify Liquid"
        requirementMessage={prereqMessage}
        onClose={() => setPrereqModalOpen(false)}
        onGoToPrerequisite={handleGoToPrerequisite}
      />
    </div>
  );
};
