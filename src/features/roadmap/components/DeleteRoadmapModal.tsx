import React from 'react';
import { Button } from '@/components/elements/Button';
import { TrashIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface DeleteRoadmapModalProps {
  isOpen: boolean;
  roadmapTitle: string;
  isDeleting?: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

export const DeleteRoadmapModal: React.FC<DeleteRoadmapModalProps> = ({
  isOpen,
  roadmapTitle,
  isDeleting = false,
  onClose,
  onConfirmDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5 text-center">
        {/* Warning Icon */}
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 text-red-500 rounded-full mx-auto flex items-center justify-center">
          <TrashIcon className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
            Confirm Deletion
          </span>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mt-1">
            Delete Roadmap?
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
            Are you sure you want to delete <strong className="text-[color:var(--text-primary)]">"{roadmapTitle}"</strong>?
          </p>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3.5 text-left flex items-start gap-2.5">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
            This action removes this specific roadmap curriculum. Your other roadmaps, certificates, and course progress will remain completely untouched.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 cursor-pointer"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="flex-1 flex items-center justify-center gap-1.5 cursor-pointer !bg-red-600 hover:!bg-red-700 text-white font-bold"
            onClick={onConfirmDelete}
            isLoading={isDeleting}
          >
            <TrashIcon className="w-4 h-4" />
            <span>Delete Roadmap</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
