import React, { useEffect } from 'react';

export interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Simulate initial boot up and auth checking
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[color:var(--color-bg-base)]">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Glowing pulse effects */}
        <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-2 bg-brand rounded-full animate-pulse opacity-40"></div>
        <div className="relative z-10 w-16 h-16 bg-[color:var(--color-bg-card)] border border-border rounded-full flex items-center justify-center shadow-ai-glow text-brand font-bold text-2xl font-heading">
          S
        </div>
      </div>
      <h1 className="text-3xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">Skillora AI</h1>
      <p className="text-sm font-mono text-[color:var(--text-secondary)] mt-4 animate-pulse">Initializing engine...</p>
    </div>
  );
};
