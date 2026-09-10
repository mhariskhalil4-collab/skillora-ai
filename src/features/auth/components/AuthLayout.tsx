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
      <div className="hidden lg:flex w-1/2 bg-brand flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        
        {/* Decorative AI visual element */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-glow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="z-10 text-white max-w-md text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 tracking-tight">Skillora AI</h1>
          <p className="text-lg opacity-90 font-body leading-relaxed">
            Your personalized compass for the modern job market. Plan, learn, and achieve your career goals.
          </p>
        </div>
      </div>

      {/* Right Panel - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-heading font-bold text-[color:var(--text-primary)]">{title}</h2>
            <p className="text-[color:var(--text-secondary)] mt-2">{subtitle}</p>
          </div>
          
          <Card className="p-6 sm:p-8">
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};
