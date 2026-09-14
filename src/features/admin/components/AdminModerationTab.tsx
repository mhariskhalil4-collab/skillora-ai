import React from 'react';
import { AdminModerationItem } from '../types/admin.types';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { Badge } from '@/components/elements/Badge';
import {
  ShieldExclamationIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { sanitizeUrl } from '@/utils/url.utils';

interface AdminModerationTabProps {
  items: AdminModerationItem[];
  isLoading: boolean;
  onRefresh: () => void;
  onToggleVisibility: (projectId: string, isHidden: boolean) => Promise<void>;
}

export const AdminModerationTab: React.FC<AdminModerationTabProps> = ({
  items,
  isLoading,
  onRefresh,
  onToggleVisibility,
}) => {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            Content Moderation &amp; Public Deliverables
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-0.5">
            Audit publicly visible portfolio projects, code repositories, and user submissions.
          </p>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[color:var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
        >
          <ArrowPathIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-brand' : ''}`} />
          <span>Refresh Content</span>
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {isLoading ? (
          <Card className="py-12 text-center text-[color:var(--text-secondary)]">
            <div className="flex items-center justify-center gap-2">
              <ArrowPathIcon className="w-5 h-5 animate-spin text-brand" />
              <span>Loading public deliverables...</span>
            </div>
          </Card>
        ) : items.length === 0 ? (
          <Card className="py-12 text-center text-[color:var(--text-secondary)]">
            <ShieldExclamationIcon className="w-8 h-8 mx-auto mb-2 text-[color:var(--text-secondary)] opacity-50" />
            <p className="text-sm">No deliverables requiring review at this time.</p>
          </Card>
        ) : (
          items.map((item) => {
            const safeUrl = sanitizeUrl(item.url, ['http:', 'https:']);
            return (
              <Card
                key={item.id}
                className={`p-6 transition-all ${
                  item.isHidden
                    ? 'opacity-60 bg-red-500/5 border-red-500/20'
                    : 'hover:border-brand/40'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Info */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand/10 text-brand">
                        <CodeBracketIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-[color:var(--text-primary)] text-base">
                        {item.title}
                      </h3>
                      {item.isHidden ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30 flex items-center gap-1">
                          <EyeSlashIcon className="w-3 h-3" /> Hidden from Public
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <EyeIcon className="w-3 h-3" /> Publicly Visible
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                      {item.description || 'No description provided.'}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                        Author: <strong className="text-[color:var(--text-primary)]">{item.authorName}</strong>
                      </span>
                      <span className="text-xs text-border">•</span>
                      <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                        Submitted: {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    {(item.tags || []).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags?.map((t) => (
                          <Badge key={t} label={t} type="skill" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 self-start lg:self-center">
                    {safeUrl && (
                      <button
                        type="button"
                        onClick={() => window.open(safeUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-[color:var(--color-bg-base)] hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[color:var(--text-primary)] transition-colors cursor-pointer"
                      >
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        <span>Inspect Repo</span>
                      </button>
                    )}

                    {item.isHidden ? (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => onToggleVisibility(item.id, false)}
                        className="flex items-center gap-1.5 text-xs py-2 px-3.5"
                      >
                        <EyeIcon className="w-4 h-4" /> Unhide Project
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onToggleVisibility(item.id, true)}
                        className="flex items-center gap-1.5 text-xs py-2 px-3.5 text-red-400 border border-red-500/30 hover:bg-red-500/10"
                      >
                        <EyeSlashIcon className="w-4 h-4" /> Hide from Public
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};
