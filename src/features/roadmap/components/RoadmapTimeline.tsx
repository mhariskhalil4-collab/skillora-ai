import React from 'react';
import { Task } from '../types/roadmap.types';
import { CheckIcon, LockClosedIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

export interface TimelineProps {
  tasks: Task[];
  onSelectTask: (task: Task) => void;
  onLockedTaskClick?: (task: Task) => void;
}

export const RoadmapTimeline: React.FC<TimelineProps> = ({ tasks, onSelectTask, onLockedTaskClick }) => {
  return (
    <div className="relative">
      {/* The continuous vertical line */}
      <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-border z-0 md:left-1/2 md:-ml-[1px]" />

      <div className="flex flex-col gap-8 w-full relative z-10">
        {tasks.map((task, index) => {
          const isCompleted = task.status === 'completed';
          const isInProgress = task.status === 'in_progress';
          const isLocked = task.status === 'locked';

          const handleClick = () => {
            if (isLocked) {
              onLockedTaskClick?.(task);
            } else {
              onSelectTask(task);
            }
          };

          return (
            <div 
              key={task.id} 
              className={cn(
                "flex items-center md:justify-between flex-row",
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              )}
            >
              {/* Spacer for alternating desktop layout */}
              <div className="hidden md:block w-[45%]" />

              {/* The Node Icon */}
              <div 
                className={cn(
                  "relative flex items-center justify-center w-16 h-16 rounded-full border-[3px] shadow-glass z-10 bg-[color:var(--color-bg-card)] transition-all cursor-pointer select-none",
                  isCompleted && 'border-success text-success hover:scale-105 bg-success/5 shadow-sm',
                  isInProgress && 'border-brand text-brand shadow-ai-glow scale-110 ring-4 ring-brand/20 animate-pulse-subtle',
                  isLocked && 'border-border/70 text-[color:var(--text-secondary)] opacity-60 hover:opacity-90 hover:border-brand/40'
                )}
                onClick={handleClick}
                title={isLocked ? `Step ${task.orderIndex} is locked` : `Step ${task.orderIndex}: ${task.title}`}
              >
                {isCompleted ? (
                  <CheckIcon className="w-8 h-8" />
                ) : isLocked ? (
                  <LockClosedIcon className="w-6 h-6" />
                ) : (
                  <CodeBracketIcon className="w-8 h-8" />
                )}
                 
                {isInProgress && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand rounded-full ring-2 ring-[color:var(--color-bg-base)] animate-ping" />
                )}
              </div>

              {/* Task Content Card */}
              <div 
                className={cn(
                  "w-[calc(100%-5rem)] md:w-[45%] ml-4 md:ml-0 p-5 rounded-xl border backdrop-blur-md cursor-pointer transition-all",
                  isCompleted && 'bg-[color:var(--color-bg-card)] border-success/30 hover:border-success/60 shadow-sm hover:shadow-md',
                  isInProgress && 'bg-[color:var(--color-bg-card)] border-brand shadow-ai-glow ring-1 ring-brand/30 hover:scale-[1.01]',
                  isLocked && 'opacity-60 bg-[color:var(--color-bg-card)]/50 border-border/60 hover:opacity-85 hover:border-border'
                )}
                onClick={handleClick}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                      Step {task.orderIndex}
                    </span>
                    {isInProgress && (
                      <span className="text-[10px] font-mono font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Active Step
                      </span>
                    )}
                    {isCompleted && (
                      <span className="text-[10px] font-mono font-bold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Completed
                      </span>
                    )}
                    {isLocked && (
                      <span className="text-[10px] font-mono text-[color:var(--text-secondary)] bg-white/5 border border-border px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Locked
                      </span>
                    )}
                  </div>
                  {!isLocked && (
                    <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                      +{task.xpReward} XP
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] mb-1">
                  {task.title}
                </h3>
                <p className="text-sm text-[color:var(--text-secondary)] line-clamp-2">
                  {task.description}
                </p>
                {isInProgress && (
                  <div className="mt-3 text-xs font-semibold text-brand flex items-center gap-1">
                    <span>Click to open lesson &amp; quiz</span> →
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
