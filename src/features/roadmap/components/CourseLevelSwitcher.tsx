import React from 'react';
import { CourseLevel, CourseProgressState } from '../types/roadmap.types';
import { LockClosedIcon, CheckCircleIcon, SparklesIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

interface CourseLevelSwitcherProps {
  courseState: CourseProgressState;
  activeLevel: CourseLevel;
  onSelectLevel: (level: CourseLevel) => void;
  onLockedLevelClick: (level: CourseLevel, message: string) => void;
}

export const CourseLevelSwitcher: React.FC<CourseLevelSwitcherProps> = ({
  courseState,
  activeLevel,
  onSelectLevel,
  onLockedLevelClick
}) => {
  const levels: { key: CourseLevel; label: string; tag: string; req: string }[] = [
    { 
      key: 'beginner', 
      label: 'Level 1: Beginner', 
      tag: '14 Modules + LMS Project', 
      req: 'Pass Final Assessment (15/20) to unlock Intermediate' 
    },
    { 
      key: 'intermediate', 
      label: 'Level 2: Intermediate', 
      tag: 'OOP, DB, Async & 4 Projects', 
      req: 'Requires Beginner score >= 15/20 (75%)' 
    },
    { 
      key: 'advanced', 
      label: 'Level 3: Advanced', 
      tag: 'Metaprogramming, FastAPI, AI & 5 Projects', 
      req: 'Requires Intermediate score >= 25/30 (83.33%)' 
    }
  ];

  return (
    <div className="mb-8 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AcademicCapIcon className="w-5 h-5 text-brand" />
          <span className="text-xs font-mono uppercase tracking-wider text-brand font-bold">
            Curriculum Progression Levels
          </span>
        </div>
        <span className="text-xs font-mono text-[color:var(--text-secondary)]">
          Total Course Progress: <strong className="text-brand">{courseState.overallProgress}%</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {levels.map((lvl) => {
          const levelData = courseState.levels[lvl.key];
          const isSelected = activeLevel === lvl.key;
          const isLocked = levelData?.status === 'locked';
          const isCompleted = levelData?.status === 'completed';
          const progress = levelData?.progressPercentage || 0;

          const handleClick = () => {
            if (isLocked) {
              onLockedLevelClick(lvl.key, lvl.req);
            } else {
              onSelectLevel(lvl.key);
            }
          };

          return (
            <button
              key={lvl.key}
              type="button"
              onClick={handleClick}
              className={cn(
                "p-4 rounded-2xl border transition-all cursor-pointer select-none relative overflow-hidden flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand",
                isSelected && "border-brand bg-brand/10 ring-2 ring-brand/30 shadow-ai-glow scale-[1.02]",
                !isSelected && !isLocked && "border-border bg-[color:var(--color-bg-card)] hover:border-brand/40 hover:bg-black/5 dark:hover:bg-white/5",
                isLocked && "border-border/50 bg-[color:var(--color-bg-card)]/40 opacity-60 hover:opacity-85"
              )}
            >
              {/* Progress bar line along top */}
              <div 
                className="absolute top-0 left-0 h-1 bg-brand transition-all duration-500"
                style={{ width: `${progress}%` }}
              />

              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                    {lvl.key}
                  </span>
                  <div className="flex items-center gap-1">
                    {isCompleted && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-mono font-bold text-success bg-success/15 border border-success/30 px-2 py-0.5 rounded-full">
                        <CheckCircleIcon className="w-3 h-3" /> Cleared
                      </span>
                    )}
                    {isLocked && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-mono text-[color:var(--text-secondary)] bg-black/20 border border-border px-2 py-0.5 rounded-full">
                        <LockClosedIcon className="w-3 h-3" /> Locked
                      </span>
                    )}
                    {!isLocked && !isCompleted && isSelected && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-mono text-brand bg-brand/15 border border-brand/30 px-2 py-0.5 rounded-full font-bold">
                        <SparklesIcon className="w-3 h-3" /> Active
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-[color:var(--text-primary)]">
                  {lvl.label}
                </h3>
                <p className="text-xs text-[color:var(--text-secondary)] mt-0.5 line-clamp-1">
                  {lvl.tag}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs w-full">
                <span className="font-mono text-[color:var(--text-secondary)]">
                  {levelData?.completedTasks || 0} / {levelData?.totalTasks || 0} tasks
                </span>
                <span className="font-mono font-bold text-brand">
                  {progress}%
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
