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
      <div className="relative flex items-center justify-center w-28 h-28 mb-6">
        {/* Glowing pulse effects */}
        <div className="absolute inset-0 bg-brand rounded-3xl animate-ping opacity-20"></div>
        <div className="absolute inset-1 bg-brand rounded-3xl animate-pulse opacity-30"></div>
        <div className="relative z-10 w-20 h-20 bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-2 flex items-center justify-center shadow-ai-glow">
          <img
            src="/skillora-logo.png"
            alt="Skillora AI"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
      <h1 className="text-3xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
        Skillora <span className="text-brand">AI</span>
      </h1>
      <p className="text-sm font-mono text-[color:var(--text-secondary)] mt-4 animate-pulse">Initializing engine...</p>
    </div>
  );
};
