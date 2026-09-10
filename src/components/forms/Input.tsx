import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-sm font-heading font-medium text-[color:var(--text-secondary)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-transparent border-b border-border py-2 px-1 text-[color:var(--text-primary)] font-body placeholder-[color:var(--text-secondary)] focus:outline-none focus:border-brand transition-colors",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
