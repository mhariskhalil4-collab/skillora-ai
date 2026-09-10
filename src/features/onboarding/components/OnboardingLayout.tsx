import React from 'react';
import { ProgressBar } from '@/components/data-display/ProgressBar';

export interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children, currentStep, totalSteps, onBack }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--color-bg-base)]">
      <header className="w-full p-4 sm:p-6 flex items-center justify-between max-w-4xl mx-auto">
        {onBack && currentStep < totalSteps ? (
          <button 
            onClick={onBack} 
            className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] font-medium transition-colors"
          >
            ← Back
          </button>
        ) : <div className="w-12" />}

        <div className="w-1/2 max-w-xs">
          <ProgressBar progress={progress} />
        </div>

        <div className="w-12 text-right font-mono text-xs text-[color:var(--text-secondary)]">
          {currentStep}/{totalSteps}
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};
