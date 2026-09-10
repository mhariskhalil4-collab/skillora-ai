import React from 'react';

export interface LoadingScreenProps {
  targetGoal: string;
  skillsCount: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ targetGoal, skillsCount }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--color-bg-base)] p-6 text-center">
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        {/* Animated AI Core Rings */}
        <div className="absolute inset-0 border-4 border-ai-glow border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-brand border-b-transparent rounded-full animate-[spin_reverse_1.5s_linear_infinite]"></div>
        <span className="text-3xl animate-pulse">✨</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-[color:var(--text-primary)]">
        Constructing your custom roadmap...
      </h2>
      
      <p className="text-[color:var(--text-secondary)] font-body max-w-md mx-auto mb-6">
        Analyzing {skillsCount} current skills and mapping the fastest route to become a <span className="text-brand font-semibold">{targetGoal}</span>.
      </p>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-bg-card)] border border-border font-mono text-xs text-[color:var(--text-secondary)] shadow-sm">
        <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
        Aligning with real-time market data
      </div>
    </div>
  );
};
