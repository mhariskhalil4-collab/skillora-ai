import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile, Project } from '../types/profile.types';
import { PublicPortfolioService } from '@/features/portfolio/services/publicPortfolio.service';
import { Card } from '@/components/data-display/Card';
import { Badge } from '@/components/elements/Badge';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import { 
  DocumentArrowDownIcon, 
  ExclamationCircleIcon, 
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  CodeBracketIcon,
  XMarkIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

export const PortfolioTab: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  const [projectsList, setProjectsList] = useState<Project[]>(profile.projects || []);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingUrl, setEditingUrl] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Public Portfolio Settings state
  const [slug, setSlug] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isSavingPortfolio, setIsSavingPortfolio] = useState(false);
  const [portfolioError, setPortfolioError] = useState('');
  const [portfolioSuccess, setPortfolioSuccess] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const navigate = useNavigate();

  // Load user's portfolio settings on mount / profile change
  useEffect(() => {
    const loadSettings = async () => {
      if (!profile?.id) return;
      try {
        const settings = await PublicPortfolioService.getPortfolioSettings(profile.id);
        if (settings && settings.slug) {
          setSlug(settings.slug);
          setIsPublished(settings.isPublished);
        } else {
          // Suggest default slug derived from user full_name or id
          const defaultSlug = (profile.fullName || 'creator')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/--+/g, '-')
            .replace(/^-|-$/g, '');
          setSlug(defaultSlug || `user-${profile.id.slice(0, 6)}`);
          setIsPublished(false);
        }
      } catch (err) {
        console.warn('[PortfolioTab] Could not load portfolio settings:', err);
      }
    };

    loadSettings();
  }, [profile?.id, profile?.fullName]);

  // Sync projects list when profile prop updates
  useEffect(() => {
    setProjectsList(profile.projects || []);
  }, [profile.projects]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3500);
    return () => clearTimeout(timer);
  };

  const handleDownloadResume = () => {
    if (profile.resumeUrl && profile.resumeUrl.trim() !== '') {
      window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
    } else {
      triggerToast('No resume has been uploaded to your profile yet.');
    }
  };

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setEditingUrl(project.url || '');
    setSaveSuccess(false);
  };

  const handleDirectLinkClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      triggerToast('Please provide a valid repository URL first.');
    }
  };

  const handleSaveProjectUrl = () => {
    if (!selectedProject) return;
    const cleanUrl = editingUrl.trim();

    const updatedProjects = projectsList.map((p) => {
      if (p.id === selectedProject.id) {
        return { ...p, url: cleanUrl || undefined };
      }
      return p;
    });

    setProjectsList(updatedProjects);
    setSelectedProject({ ...selectedProject, url: cleanUrl || undefined });

    // Persist to localStorage
    try {
      localStorage.setItem('skillora_user_projects', JSON.stringify(updatedProjects));
      const cachedProfileRaw = localStorage.getItem('skillora_user_profile');
      if (cachedProfileRaw) {
        const cachedProfile = JSON.parse(cachedProfileRaw);
        cachedProfile.projects = updatedProjects;
        localStorage.setItem('skillora_user_profile', JSON.stringify(cachedProfile));
      }
    } catch (_) {}

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleSavePortfolioPublishSettings = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setPortfolioError('');
    setPortfolioSuccess('');
    setIsSavingPortfolio(true);

    const cleanSlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9-]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');

    if (!cleanSlug || cleanSlug.length < 3) {
      setPortfolioError('Please enter a valid custom slug (at least 3 characters, lowercase letters, numbers, and hyphens).');
      setIsSavingPortfolio(false);
      return;
    }

    try {
      const saved = await PublicPortfolioService.savePortfolioSettings(profile.id, {
        slug: cleanSlug,
        isPublished,
      });
      setSlug(saved.slug);
      setIsPublished(saved.isPublished);
      setPortfolioSuccess(
        saved.isPublished
          ? '🎉 Portfolio is now published and publicly accessible!'
          : 'Portfolio settings saved (portfolio is currently private).'
      );
      setTimeout(() => setPortfolioSuccess(''), 4000);
    } catch (err: any) {
      console.error('[PortfolioTab] Error saving portfolio settings:', err);
      setPortfolioError(err.message || 'Failed to save portfolio settings.');
    } finally {
      setIsSavingPortfolio(false);
    }
  };

  const shareableUrl = `${window.location.origin}/portfolio/${slug || 'your-slug'}`;

  const handleCopyShareableLink = () => {
    if (!isPublished) {
      triggerToast('Publish your portfolio first to share the live link.');
      return;
    }
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const publicProjects = projectsList.filter((p) => p.isPublic !== false);

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-brand text-white px-4 py-3 rounded-xl shadow-lg font-heading text-sm font-semibold animate-bounce">
          <ExclamationCircleIcon className="w-5 h-5 text-white flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- Public Portfolio & Sharing Configuration Card --- */}
      <Card className="relative overflow-hidden border-brand/40 bg-gradient-to-br from-[color:var(--color-bg-card)] via-[color:var(--color-bg-card)] to-brand/5 shadow-lg">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-brand/10 text-brand border border-brand/20 mt-0.5">
                <GlobeAltIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
                    Public Portfolio &amp; Shareable Link
                  </h2>
                  <span
                    className={cn(
                      'text-xs font-mono px-2.5 py-0.5 rounded-full border font-semibold flex items-center gap-1',
                      isPublished
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                        : 'bg-zinc-500/10 text-[color:var(--text-secondary)] border-border'
                    )}
                  >
                    <span
                      className={cn(
                        'w-1.5 h-1.5 rounded-full',
                        isPublished ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'
                      )}
                    />
                    {isPublished ? 'Live & Published' : 'Private Draft'}
                  </span>
                </div>
                <p className="text-xs text-[color:var(--text-secondary)] mt-0.5">
                  Publish a verified public profile showcasing your roadmaps, code deliverables, and credentials for recruiters.
                </p>
              </div>
            </div>

            {/* Save Action */}
            <Button
              type="button"
              variant="primary"
              size="sm"
              isLoading={isSavingPortfolio}
              onClick={() => handleSavePortfolioPublishSettings()}
              className="self-start sm:self-auto flex items-center gap-1.5 shadow-ai-glow cursor-pointer"
            >
              <SparklesIcon className="w-4 h-4" /> Save Settings
            </Button>
          </div>

          {/* Feedback messages */}
          {portfolioError && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium flex items-center gap-2">
              <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0" />
              <span>{portfolioError}</span>
            </div>
          )}
          {portfolioSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
              <span>{portfolioSuccess}</span>
            </div>
          )}

          {/* Form Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-border">
            {/* Slug Configuration */}
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold text-[color:var(--text-primary)] uppercase flex items-center justify-between">
                <span>Custom Portfolio Slug (URL)</span>
                <span className="text-[11px] text-[color:var(--text-secondary)] font-mono normal-case">
                  /portfolio/{slug || '...'}
                </span>
              </label>
              <div className="flex items-center rounded-xl border border-border bg-[color:var(--color-bg-base)] overflow-hidden focus-within:border-brand transition-colors">
                <span className="pl-3 pr-1 text-xs font-mono text-[color:var(--text-secondary)] select-none">
                  {window.location.host}/portfolio/
                </span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    const formatted = e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9-]/g, '');
                    setSlug(formatted);
                  }}
                  placeholder="your-name"
                  className="flex-1 bg-transparent py-2.5 pr-3 text-xs sm:text-sm font-mono text-[color:var(--text-primary)] focus:outline-none"
                />
              </div>
              <p className="text-[11px] text-[color:var(--text-secondary)]">
                Allowed: lowercase letters, numbers, and hyphens (3–50 chars).
              </p>
            </div>

            {/* Publishing Toggle */}
            <div className="space-y-3 flex flex-col justify-between">
              <div>
                <label className="text-xs font-heading font-bold text-[color:var(--text-primary)] uppercase">
                  Visibility &amp; Publishing
                </label>
                <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-[color:var(--color-bg-base)] mt-2">
                  <div className="space-y-0.5">
                    <span className="text-sm font-heading font-semibold text-[color:var(--text-primary)]">
                      Publish my portfolio
                    </span>
                    <p className="text-xs text-[color:var(--text-secondary)]">
                      Make this portfolio accessible to anyone with the link.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPublished(!isPublished)}
                    className={cn(
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
                      isPublished ? 'bg-brand shadow-ai-glow' : 'bg-zinc-700'
                    )}
                  >
                    <span
                      className={cn(
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        isPublished ? 'translate-x-5' : 'translate-x-0'
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shareable Link Box */}
          <div className="pt-2 border-t border-border">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-[color:var(--color-bg-base)] border border-border">
              <div className="flex items-center gap-2 overflow-hidden flex-1">
                <LinkIcon className="w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-[color:var(--text-primary)] truncate select-all">
                  {shareableUrl}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCopyShareableLink}
                  className="flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <ClipboardDocumentCheckIcon className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <ClipboardDocumentIcon className="w-4 h-4" />
                      <span>Copy Link</span>
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  disabled={!isPublished}
                  onClick={() => window.open(shareableUrl, '_blank', 'noopener,noreferrer')}
                  className="flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span>View Public Portfolio</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* --- Main Gallery & Sidebar --- */}
      <div className="relative flex flex-col lg:flex-row gap-8">
        {/* Main Content: Projects Gallery */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
                Featured Projects &amp; Deliverables
              </h2>
              <p className="text-xs text-[color:var(--text-secondary)] mt-0.5">
                Click any project to view architecture, preview, or update the live repository link.
              </p>
            </div>
            {publicProjects.length > 0 && (
              <span className="text-xs font-mono text-[color:var(--text-secondary)] bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-border">
                {publicProjects.length} {publicProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            )}
          </div>

          {publicProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publicProjects.map((project) => (
                <Card 
                  key={project.id} 
                  onClick={() => handleOpenProjectModal(project)}
                  className="flex flex-col hover:border-brand/50 transition-all group cursor-pointer hover:shadow-ai-glow relative"
                >
                  <div className="h-32 bg-black/5 dark:bg-white/5 rounded-lg mb-4 flex items-center justify-center border border-border overflow-hidden relative">
                    <span className="text-[color:var(--text-secondary)] text-xs font-mono opacity-60 flex items-center gap-1.5">
                      <CodeBracketIcon className="w-4 h-4" /> Deliverable Preview
                    </span>
                    {project.url && (
                      <button
                        type="button"
                        onClick={(e) => handleDirectLinkClick(e, project.url)}
                        title="Open repository in new tab"
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-[color:var(--color-bg-card)] border border-border opacity-80 group-hover:opacity-100 transition-opacity text-brand hover:bg-brand/10 cursor-pointer"
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] group-hover:text-brand transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-sm text-[color:var(--text-secondary)] mt-2 mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {(project.tags || []).map((tag) => (
                      <Badge key={tag} label={tag} type="skill" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12 px-6 flex flex-col items-center justify-center space-y-4 border-dashed">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                <CodeBracketIcon className="w-7 h-7" />
              </div>
              <div className="max-w-md">
                <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
                  No Featured Projects Yet
                </h3>
                <p className="text-sm text-[color:var(--text-secondary)] mt-1">
                  Complete capstone deliverables and roadmap project submissions to showcase your verified code and live applications here.
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/roadmap')}
                className="mt-2"
              >
                <SparklesIcon className="w-4 h-4 mr-2 text-brand" /> View Active Roadmap
              </Button>
            </Card>
          )}
        </div>

        {/* Sidebar: Resume & Skills */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <Card>
            <h3 className="font-heading font-bold text-[color:var(--text-primary)] mb-4">About &amp; Bio</h3>
            <p className="text-sm text-[color:var(--text-secondary)] mb-6 leading-relaxed">
              {profile.bio || 'Add a summary in Settings to tell collaborators about your learning journey.'}
            </p>
            
            {profile.resumeUrl && profile.resumeUrl.trim() !== '' ? (
              <button 
                type="button"
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm font-medium text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <DocumentArrowDownIcon className="w-4 h-4 text-brand" /> Download Resume
              </button>
            ) : (
              <div className="space-y-2">
                <button 
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-border/60 rounded-lg text-sm font-medium text-[color:var(--text-secondary)] opacity-50 cursor-not-allowed bg-black/5 dark:bg-white/5"
                >
                  <DocumentArrowDownIcon className="w-4 h-4" /> Download Resume
                </button>
                <p className="text-xs text-[color:var(--text-secondary)] text-center">
                  Upload your resume in Settings to enable this
                </p>
              </div>
            )}
          </Card>

          <Card>
            <h3 className="font-heading font-bold text-[color:var(--text-primary)] mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills && profile.skills.length > 0 ? (
                profile.skills.map((skill) => (
                  <Badge key={skill} label={skill} type="skill" />
                ))
              ) : (
                <span className="text-xs text-[color:var(--text-secondary)]">No skills added yet.</span>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Interactive Project Details & Repository Link Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand/10 text-brand">
                  <CodeBracketIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-brand uppercase font-semibold">
                    Verified Deliverable
                  </span>
                  <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full p-2 text-[color:var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-heading font-bold uppercase text-[color:var(--text-secondary)] mb-1">
                  Project Description &amp; Architecture
                </h4>
                <p className="text-sm text-[color:var(--text-primary)] leading-relaxed bg-[color:var(--color-bg-base)] p-3 rounded-xl border border-border">
                  {selectedProject.description || 'No description provided.'}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-heading font-bold uppercase text-[color:var(--text-secondary)] mb-2">
                  Skills &amp; Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.tags || []).map((tag) => (
                    <Badge key={tag} label={tag} type="skill" />
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-border">
                <label className="text-xs font-heading font-bold uppercase text-[color:var(--text-secondary)] flex items-center justify-between">
                  <span>GitHub / Live Repository URL</span>
                  <span className="text-[10px] text-brand font-mono font-normal flex items-center gap-1">
                    <PencilSquareIcon className="w-3.5 h-3.5" /> Editable
                  </span>
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="https://github.com/your-username/your-repo"
                    value={editingUrl}
                    onChange={(e) => setEditingUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={handleSaveProjectUrl}
                    className="flex-shrink-0"
                  >
                    Save URL
                  </Button>
                </div>
                {saveSuccess && (
                  <p className="text-xs text-success flex items-center gap-1 mt-1 font-medium">
                    <CheckCircleIcon className="w-4 h-4" /> Project URL saved successfully!
                  </p>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
              
              {selectedProject.url ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => window.open(selectedProject.url, '_blank', 'noopener,noreferrer')}
                  className="flex items-center gap-2"
                >
                  <GlobeAltIcon className="w-4 h-4" /> Open Repository <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-0.5" />
                </Button>
              ) : (
                <span className="text-xs text-[color:var(--text-secondary)] font-mono">
                  Enter repository URL above to enable preview
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
