import React, { useState } from 'react';
import { Task } from '../types/roadmap.types';
import { RoadmapService } from '../services/roadmap.service';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import {
  XMarkIcon,
  CheckCircleIcon,
  SparklesIcon,
  LinkIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface ProjectSubmitModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export const ProjectSubmitModal: React.FC<ProjectSubmitModalProps> = ({
  task,
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [submissionType, setSubmissionType] = useState<'link' | 'description'>('link');
  const [repoUrl, setRepoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const authUser = useAuthStore((state) => state.user);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    let cleanUrl: string | null = null;
    const cleanNotes = description.trim();

    if (submissionType === 'link') {
      const url = repoUrl.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        setError(
          'Please provide a valid repository or deployment URL starting with https:// (e.g. https://github.com/username/project)'
        );
        return;
      }
      cleanUrl = url;
    } else {
      // "I'll describe it instead" mode
      if (cleanNotes.length < 20) {
        setError(
          `Please provide a more detailed project description (minimum 20 characters required; current: ${cleanNotes.length}/20).`
        );
        return;
      }
      cleanUrl = null;
    }

    setIsSubmitting(true);

    try {
      await RoadmapService.submitProjectDeliverable({
        taskId: task.id,
        title: task.title,
        repoUrl: cleanUrl,
        notes: cleanNotes || undefined,
        userId: authUser?.id,
      });

      setIsSuccess(true);
      onSubmitSuccess();
    } catch (err: any) {
      console.error('[ProjectSubmitModal] Submission error:', err);
      setError(err.message || 'Failed to submit deliverable. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setSubmissionType('link');
    setRepoUrl('');
    setDescription('');
    setError('');
    onClose();
  };

  const descCharCount = description.trim().length;
  const isDescValid = descCharCount >= 20;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <span className="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
              Capstone Project Submission
            </span>
            <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mt-1">
              {task.title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-success/10 border border-success/30 text-success rounded-full mx-auto flex items-center justify-center">
              <CheckCircleIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
              Project Deliverable Verified!
            </h3>
            <p className="text-sm text-[color:var(--text-secondary)] max-w-sm mx-auto">
              Your submission for Step {task.orderIndex} has been persisted to your verified portfolio and roadmap progression.
            </p>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-semibold">
              <SparklesIcon className="w-4 h-4" /> +{task.xpReward || 150} XP Awarded &amp; Module Completed
            </div>
            <div className="pt-4">
              <Button variant="primary" className="w-full" onClick={handleClose}>
                Return to Roadmap
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-5">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/40 text-red-500 rounded-lg text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Segmented Control / Tab Toggle */}
              <div className="flex rounded-xl bg-[color:var(--color-bg-base)] p-1 border border-border gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionType('link');
                    setError('');
                  }}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer',
                    submissionType === 'link'
                      ? 'bg-brand text-white shadow-ai-glow'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-white/5'
                  )}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>I have a project link</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmissionType('description');
                    setError('');
                  }}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer',
                    submissionType === 'description'
                      ? 'bg-brand text-white shadow-ai-glow'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-white/5'
                  )}
                >
                  <DocumentTextIcon className="w-4 h-4" />
                  <span>I'll describe it instead</span>
                </button>
              </div>

              {/* Dynamic Form Content */}
              {submissionType === 'link' ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <Input
                    label="GitHub / Live Project URL"
                    placeholder="https://github.com/username/project"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    required
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-heading font-medium text-[color:var(--text-secondary)]">
                      Implementation Architecture &amp; Notes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Outline key architectural patterns, tech stack, or instructions to run your project deliverable..."
                      className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-xl p-3 text-sm text-[color:var(--text-primary)] font-body focus:outline-none focus:border-brand transition-colors resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-brand/5 border border-brand/20 text-xs text-[color:var(--text-secondary)]">
                    <InformationCircleIcon className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span>
                      No live URL needed. Provide a comprehensive summary of what you built, core components, and how your project functions.
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-heading font-medium text-[color:var(--text-primary)]">
                        Project &amp; Architecture Description <span className="text-red-400">*</span>
                      </label>
                      <span
                        className={cn(
                          'text-xs font-mono',
                          isDescValid ? 'text-emerald-400 font-semibold' : 'text-orange-400'
                        )}
                      >
                        {descCharCount} / 20 characters min
                      </span>
                    </div>

                    <p className="text-xs text-[color:var(--text-secondary)]">
                      Describe what you built, key features, and how it works (minimum 20 characters).
                    </p>

                    <textarea
                      rows={6}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g., Developed a full-stack custom storefront leveraging modern component architecture and serverless APIs. Built responsive UI modules, integrated cart and checkout state machines, and tested end-to-end data workflows..."
                      required
                      className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-xl p-3 text-sm text-[color:var(--text-primary)] font-body focus:outline-none focus:border-brand transition-colors resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-end gap-3">
              <Button type="button" variant="ghost" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                disabled={submissionType === 'description' && !isDescValid}
              >
                Submit Project Deliverable
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

