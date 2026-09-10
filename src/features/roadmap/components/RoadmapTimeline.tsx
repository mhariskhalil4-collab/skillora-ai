import React from 'react';
import { Task } from '../types/roadmap.types';
import { CheckIcon, LockClosedIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

export interface TimelineProps {
  tasks: Task[];
  onSelectTask: (task: Task) => void;
}

export const RoadmapTimeline: React.FC<TimelineProps> = ({ tasks, onSelectTask }) => {
  return (
    <div className="relative">
      {/* The continuous vertical line */}
      <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-border z-0 md:left-1/2 md:-ml-[1px]" />

      <div className="flex flex-col gap-8 w-full relative z-10">
        {tasks.map((task, index) => {
          const isCompleted = task.status === 'completed';
          const isInProgress = task.status === 'in_progress';
          const isLocked = task.status === 'locked';

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
                  "relative flex items-center justify-center w-16 h-16 rounded-full border-[3px] shadow-glass z-10 bg-[color:var(--color-bg-card)] transition-all cursor-pointer",
                  isCompleted && 'border-success text-success',
                  isInProgress && 'border-ai-glow text-ai-glow shadow-ai-glow scale-110',
                  isLocked && 'border-border text-[color:var(--text-secondary)] opacity-60'
                )}
                onClick={() => !isLocked && onSelectTask(task)}
              >
                {isCompleted ? <CheckIcon className="w-8 h-8" /> :
                 isLocked ? <LockClosedIcon className="w-6 h-6" /> :
                 <CodeBracketIcon className="w-8 h-8" />}
                 
                 {isInProgress && (
                   <span className="absolute top-0 right-0 w-3 h-3 bg-ai-glow rounded-full animate-ping" />
                 )}
              </div>

              {/* Task Content Card */}
              <div 
                className={cn(
                  "w-[calc(100%-5rem)] md:w-[45%] ml-4 md:ml-0 p-5 rounded-xl border backdrop-blur-md cursor-pointer transition-all",
                  isLocked ? 'opacity-50 grayscale bg-transparent border-transparent cursor-not-allowed' : 
                  'bg-[color:var(--color-bg-card)] border-border hover:border-brand/50 shadow-sm hover:shadow-md'
                )}
                onClick={() => !isLocked && onSelectTask(task)}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                    Step {task.orderIndex}
                  </span>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
