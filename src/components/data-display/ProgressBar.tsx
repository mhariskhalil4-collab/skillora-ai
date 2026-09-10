import React from 'react';
import { cn } from '@/utils/cn';

export interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  // Ensure progress stays within 0-100 bounds
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={cn("w-full h-3 bg-[color:var(--color-bg-base)] rounded-full overflow-hidden border border-border shadow-inner", className)}>
      <div 
        className="h-full bg-success transition-all duration-700 ease-out rounded-full"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};
