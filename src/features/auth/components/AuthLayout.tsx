import React from 'react';
import { Card } from '@/components/data-display/Card';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex w-full bg-[color:var(--color-bg-base)]">
      {/* Left Panel - Hidden on Mobile, Visible on Desktop */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-brand via-[#5248E5] to-[#3C3489] flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15 z-0"></div>
        
        {/* Decorative AI visual element */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-glow/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/15 rounded-full blur-3xl"></div>

        <div className="z-10 text-white max-w-md text-center flex flex-col items-center">
          <div className="w-24 h-24 mb-6 rounded-3xl bg-white/10 backdrop-blur-md p-3.5 border border-white/20 shadow-2xl flex items-center justify-center">
            <img
              src="/skillora-logo.png"
              alt="Skillora AI Official Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 tracking-tight">Skillora AI</h1>
          <p className="text-base sm:text-lg opacity-90 font-body leading-relaxed text-white/90">
            Your personalized compass for the modern job market. Plan, learn, and achieve your career goals.
          </p>
        </div>
      </div>

      {/* Right Panel - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile/Tablet Brand Header */}
          <div className="mb-6 flex lg:hidden items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[color:var(--color-bg-card)] border border-border p-1.5 shadow-md flex items-center justify-center">
              <img
                src="/skillora-logo.png"
                alt="Skillora AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
              Skillora <span className="text-brand">AI</span>
            </span>
          </div>

          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">{title}</h2>
            <p className="text-[color:var(--text-secondary)] mt-2 text-sm sm:text-base">{subtitle}</p>
          </div>
          
          <Card className="p-6 sm:p-8">
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};
