import React from 'react';
import { Task } from '../types/roadmap.types';
import { Button } from '@/components/elements/Button';
import { XMarkIcon, BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface LearningModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onProceedToAssessment: () => void;
}

export const LearningModal: React.FC<LearningModalProps> = ({
  task,
  isOpen,
  onClose,
  onProceedToAssessment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand/10 text-brand rounded-lg">
              <BookOpenIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
                Step {task.orderIndex} Module
              </span>
              <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                {task.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-sm font-heading font-bold text-[color:var(--text-secondary)] uppercase tracking-wider mb-2">
              Module Overview
            </h3>
            <p className="text-base text-[color:var(--text-primary)] leading-relaxed font-body">
              {task.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-heading font-bold text-[color:var(--text-secondary)] uppercase tracking-wider mb-3">
              Learning Objectives
            </h3>
            <ul className="space-y-3">
              {[
                `Master the fundamental syntax and concepts behind ${task.title}.`,
                'Analyze real-world e-commerce edge cases and optimization techniques.',
                'Prepare architectural patterns required to clear assessment benchmarks.',
              ].map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[color:var(--text-primary)]">
                  <CheckCircleIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-brand/5 border border-brand/20">
            <h4 className="text-sm font-heading font-bold text-brand mb-1">Study Tip</h4>
            <p className="text-xs text-[color:var(--text-secondary)] leading-normal">
              Review all documentation and reference files before launching the knowledge verification or submitting your codebase.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Back to Roadmap
          </Button>
          <Button variant="primary" onClick={onProceedToAssessment}>
            {task.requiresQuiz ? 'Continue to Quiz →' : 'Continue to Project Submission →'}
          </Button>
        </div>
      </div>
    </div>
  );
};
