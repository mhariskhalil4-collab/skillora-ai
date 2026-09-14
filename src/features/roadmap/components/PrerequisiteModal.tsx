import React from 'react';
import { CourseLevel } from '../types/roadmap.types';
import { Button } from '@/components/elements/Button';
import { LockClosedIcon, AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PrerequisiteModalProps {
  isOpen: boolean;
  targetLevel: CourseLevel | null;
  courseName?: string;
  requirementMessage?: string;
  onClose: () => void;
  onGoToPrerequisite: () => void;
}

export const PrerequisiteModal: React.FC<PrerequisiteModalProps> = ({
  isOpen,
  targetLevel,
  courseName,
  requirementMessage,
  onClose,
  onGoToPrerequisite
}) => {
  if (!isOpen || !targetLevel) return null;

  const prefix = courseName ? `${courseName} ` : '';
  const levelName = targetLevel === 'intermediate' 
    ? `Level 2: ${prefix}Intermediate` 
    : `Level 3: ${prefix}Advanced`;

  const prerequisiteName = targetLevel === 'intermediate'
    ? `Level 1: ${prefix}Beginner`
    : `Level 2: ${prefix}Intermediate`;

  const passingScoreText = targetLevel === 'intermediate'
    ? '15 / 20 (75%)'
    : '25 / 30 (83.33%)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-6 text-center">
        {/* Lock Icon */}
        <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-full mx-auto flex items-center justify-center">
          <LockClosedIcon className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-orange-500 uppercase tracking-wider font-semibold">
            Prerequisite Required
          </span>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mt-1">
            {levelName} is Locked
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
            {requirementMessage || 'To maintain strict certification standards on Skillora AI, you must first clear the prerequisite assessment.'}
          </p>
        </div>

        <div className="bg-[color:var(--color-bg-base)] border border-border rounded-xl p-4 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--text-primary)]">
            <AcademicCapIcon className="w-4 h-4 text-brand" />
            <span>Prerequisite Course:</span>
          </div>
          <p className="text-xs text-[color:var(--text-secondary)] pl-6">
            Complete all modules and score at least <strong className="text-brand font-mono">{passingScoreText}</strong> on the <strong>{prerequisiteName} Final Assessment</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="flex-1 flex items-center justify-center gap-1.5 cursor-pointer shadow-ai-glow"
            onClick={() => {
              onGoToPrerequisite();
              onClose();
            }}
          >
            <span>Go to Prerequisite</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
