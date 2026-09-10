import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-[color:var(--color-bg-card)] border border-border backdrop-blur-md shadow-glass rounded-xl p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
