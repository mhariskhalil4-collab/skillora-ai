import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps {
  label: string;
  type?: 'skill' | 'achievement' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, type = 'skill', className }) => {
  const styles = {
    skill: "bg-black/5 dark:bg-white/10 text-[color:var(--text-primary)] font-mono text-xs border border-border",
    achievement: "bg-success/20 text-success font-heading font-bold text-xs border border-success",
    outline: "bg-transparent text-[color:var(--text-secondary)] font-mono text-xs border border-border"
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full", styles[type], className)}>
      {label}
    </span>
  );
};
