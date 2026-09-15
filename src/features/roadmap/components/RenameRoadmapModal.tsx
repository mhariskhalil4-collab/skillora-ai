import React, { useState, useEffect } from 'react';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface RenameRoadmapModalProps {
  isOpen: boolean;
  currentTitle: string;
  isSaving?: boolean;
  onClose: () => void;
  onSave: (newTitle: string) => Promise<void> | void;
}

export const RenameRoadmapModal: React.FC<RenameRoadmapModalProps> = ({
  isOpen,
  currentTitle,
  isSaving = false,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(currentTitle);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTitle(currentTitle);
    setError(null);
  }, [currentTitle, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError('Please enter a valid roadmap title');
      return;
    }
    if (trimmed.length < 3) {
      setError('Title must be at least 3 characters long');
      return;
    }
    onSave(trimmed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand/10 border border-brand/20 text-brand rounded-xl flex items-center justify-center shrink-0">
            <PencilSquareIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
              Rename Roadmap
            </h2>
            <p className="text-xs text-[color:var(--text-secondary)]">
              Update the title for this learning curriculum.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[color:var(--text-secondary)] mb-1.5 uppercase font-semibold">
              Roadmap Title
            </label>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError(null);
              }}
              placeholder="e.g. Full-Stack Web Development Track"
              autoFocus
              className="bg-[color:var(--color-bg-base)] border-border"
            />
            {error && (
              <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 cursor-pointer"
              onClick={onClose}
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1 flex items-center justify-center gap-1.5 cursor-pointer shadow-ai-glow"
              isLoading={isSaving}
              disabled={!title.trim() || title.trim() === currentTitle}
            >
              Save Title
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
