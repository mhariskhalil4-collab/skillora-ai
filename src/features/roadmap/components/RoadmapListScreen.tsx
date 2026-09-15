import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roadmap } from '../types/roadmap.types';
import { RoadmapService } from '../services/roadmap.service';
import { DeleteRoadmapModal } from './DeleteRoadmapModal';
import { RenameRoadmapModal } from './RenameRoadmapModal';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { ProgressBar } from '@/components/data-display/ProgressBar';
import { useAuthStore } from '@/features/auth/store/auth.store';
import {
  MapIcon,
  SparklesIcon,
  CheckCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as SolidCheck } from '@heroicons/react/24/solid';

export const RoadmapListScreen: React.FC = () => {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);

  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_progress' | 'completed'>('all');

  // Modal States
  const [deleteTarget, setDeleteTarget] = useState<Roadmap | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [renameTarget, setRenameTarget] = useState<Roadmap | null>(null);
  const [isRenaming, setIsRenaming] = useState(false);

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const loadRoadmaps = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await RoadmapService.fetchAllRoadmaps(authUser?.id);
      setRoadmaps(data);
    } catch (err: any) {
      console.error('[RoadmapListScreen] Error loading roadmaps:', err);
      setError(err?.message || 'Failed to load your roadmaps. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadRoadmaps();
  }, [loadRoadmaps]);

  const handleSetActive = async (roadmap: Roadmap, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await RoadmapService.setActiveRoadmap(roadmap.id, authUser?.id);
      setRoadmaps((prev) =>
        prev.map((r) => ({
          ...r,
          isActive: r.id === roadmap.id,
        }))
      );
      showToast(`"${roadmap.title}" is now your active roadmap!`);
    } catch (err) {
      console.error('Failed to set active roadmap:', err);
    }
  };

  const handleOpenRoadmap = async (roadmap: Roadmap) => {
    await RoadmapService.setActiveRoadmap(roadmap.id, authUser?.id);
    navigate(`/roadmap?id=${roadmap.id}`);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const { nextActiveRoadmap } = await RoadmapService.deleteRoadmap(deleteTarget.id, authUser?.id);
      setRoadmaps((prev) => {
        const filtered = prev.filter((r) => r.id !== deleteTarget.id);
        if (nextActiveRoadmap) {
          return filtered.map((r) => ({
            ...r,
            isActive: r.id === nextActiveRoadmap.id,
          }));
        }
        return filtered;
      });
      showToast(`Roadmap "${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
    } catch (err: any) {
      console.error('Failed to delete roadmap:', err);
      alert(err?.message || 'Failed to delete roadmap.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSaveRename = async (newTitle: string) => {
    if (!renameTarget) return;
    setIsRenaming(true);
    try {
      const success = await RoadmapService.renameRoadmap(renameTarget.id, newTitle, authUser?.id);
      if (success) {
        setRoadmaps((prev) =>
          prev.map((r) => (r.id === renameTarget.id ? { ...r, title: newTitle } : r))
        );
        showToast(`Roadmap renamed to "${newTitle}".`);
        setRenameTarget(null);
      }
    } catch (err) {
      console.error('Failed to rename roadmap:', err);
    } finally {
      setIsRenaming(false);
    }
  };

  // Filter & Search Logic
  const filteredRoadmaps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return roadmaps.filter((rm) => {
      const matchesSearch =
        q === '' ||
        rm.title.toLowerCase().includes(q) ||
        (rm.description && rm.description.toLowerCase().includes(q));

      const isComp = rm.status === 'completed' || rm.progressPercentage >= 100;
      const matchesFilter =
        filterStatus === 'all' ||
        (filterStatus === 'completed' && isComp) ||
        (filterStatus === 'in_progress' && !isComp);

      return matchesSearch && matchesFilter;
    });
  }, [roadmaps, searchQuery, filterStatus]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Loading your learning roadmaps...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Failed to Load Roadmaps
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              {error}
            </p>
          </div>
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
            onClick={() => loadRoadmaps()}
          >
            <ArrowPathIcon className="w-4 h-4" /> Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-[color:var(--color-bg-card)] border border-brand/40 text-[color:var(--text-primary)] px-5 py-3.5 rounded-xl shadow-2xl font-heading text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircleIcon className="w-5 h-5 text-brand flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <MapIcon className="w-4 h-4" /> Curriculum Manager
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[color:var(--text-primary)] tracking-tight">
              My AI Roadmaps
            </h1>
            <p className="text-sm sm:text-base text-[color:var(--text-secondary)] mt-1.5 leading-relaxed">
              Create, switch between, and manage multiple personalized AI curriculums. All progress is preserved independently.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/courses')}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              <AcademicCapIcon className="w-4 h-4 text-brand" /> Browse Masterclasses
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/onboarding')}
              className="flex items-center gap-1.5 cursor-pointer shadow-ai-glow"
            >
              <SparklesIcon className="w-4 h-4" /> + Generate New Roadmap
            </Button>
          </div>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[color:var(--color-bg-card)] p-3 rounded-2xl border border-border">
          <div className="relative w-full sm:w-80">
            <MagnifyingGlassIcon className="w-4 h-4 text-[color:var(--text-secondary)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search saved roadmaps..."
              className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)] focus:outline-none focus:border-brand transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All (${roadmaps.length})` },
              {
                id: 'in_progress',
                label: `In Progress (${roadmaps.filter((r) => r.status !== 'completed' && r.progressPercentage < 100).length})`,
              },
              {
                id: 'completed',
                label: `Completed (${roadmaps.filter((r) => r.status === 'completed' || r.progressPercentage >= 100).length})`,
              },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterStatus(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === f.id
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmaps Grid */}
        {filteredRoadmaps.length === 0 ? (
          <Card className="text-center py-16 px-6 border-dashed border-2 border-border">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl mx-auto flex items-center justify-center mb-4">
              <MapIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
              {roadmaps.length === 0
                ? 'No Roadmaps Generated Yet'
                : 'No Roadmaps Match Your Filter'}
            </h3>
            <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] max-w-md mx-auto mt-1.5 leading-relaxed">
              {roadmaps.length === 0
                ? 'Take our fast 2-minute diagnostic onboarding to generate your first tailored AI curriculum.'
                : 'Try adjusting your search query or filter to find what you are looking for.'}
            </p>
            {roadmaps.length === 0 && (
              <Button
                variant="primary"
                className="mt-6 inline-flex items-center gap-2 cursor-pointer shadow-ai-glow"
                onClick={() => navigate('/onboarding')}
              >
                <SparklesIcon className="w-4 h-4" /> Generate First Roadmap
              </Button>
            )}
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredRoadmaps.map((rm) => {
              const isCompleted = rm.status === 'completed' || rm.progressPercentage >= 100;
              const totalTasks = rm.totalTasksCount || rm.tasks?.length || 0;
              const completedTasks =
                rm.completedTasksCount ||
                rm.tasks?.filter((t) => t.status === 'completed').length ||
                0;

              return (
                <Card
                  key={rm.id}
                  className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 group ${
                    rm.isActive
                      ? 'border-brand bg-gradient-to-br from-brand/5 via-[color:var(--color-bg-card)] to-brand/10 shadow-ai-glow ring-1 ring-brand/50'
                      : 'border-border hover:border-brand/50 hover:shadow-glass hover:-translate-y-0.5'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Active & Status Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {rm.isActive && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Active Track
                          </span>
                        )}
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold">
                            <SolidCheck className="w-3.5 h-3.5" /> Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 font-mono text-[11px] font-bold">
                            In Progress
                          </span>
                        )}
                      </div>

                      {/* Action Menu (Rename / Delete) */}
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setRenameTarget(rm);
                          }}
                          className="p-1.5 rounded-lg text-[color:var(--text-secondary)] hover:text-brand hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                          title="Rename roadmap"
                        >
                          <PencilSquareIcon className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteTarget(rm);
                          }}
                          className="p-1.5 rounded-lg text-[color:var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Delete roadmap"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-heading font-bold text-[color:var(--text-primary)] group-hover:text-brand transition-colors">
                        {rm.title}
                      </h3>
                      {rm.description && (
                        <p className="text-xs text-[color:var(--text-secondary)] mt-1 line-clamp-2 leading-relaxed">
                          {rm.description}
                        </p>
                      )}
                    </div>

                    {/* Progress Bar & Stats */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[color:var(--text-secondary)]">
                          {completedTasks} of {totalTasks} steps completed
                        </span>
                        <span className="font-bold text-brand">
                          {rm.progressPercentage}%
                        </span>
                      </div>
                      <ProgressBar progress={rm.progressPercentage} />
                    </div>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="flex items-center gap-2 pt-6 mt-4 border-t border-border/60">
                    <Button
                      variant={rm.isActive ? 'primary' : 'outline'}
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1.5 cursor-pointer"
                      onClick={() => handleOpenRoadmap(rm)}
                    >
                      <span>Open Roadmap</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Button>

                    {!rm.isActive && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer text-xs font-heading text-[color:var(--text-secondary)] hover:text-brand"
                        onClick={(e) => handleSetActive(rm, e)}
                      >
                        Set as Active
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Delete Modal */}
      <DeleteRoadmapModal
        isOpen={Boolean(deleteTarget)}
        roadmapTitle={deleteTarget?.title || ''}
        isDeleting={isDeleting}
        onClose={() => setDeleteTarget(null)}
        onConfirmDelete={handleConfirmDelete}
      />

      {/* Rename Modal */}
      <RenameRoadmapModal
        isOpen={Boolean(renameTarget)}
        currentTitle={renameTarget?.title || ''}
        isSaving={isRenaming}
        onClose={() => setRenameTarget(null)}
        onSave={handleSaveRename}
      />
    </div>
  );
};
