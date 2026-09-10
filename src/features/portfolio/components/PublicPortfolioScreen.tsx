import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PublicPortfolioService } from '../services/publicPortfolio.service';
import { PublicPortfolioData } from '../types/portfolio.types';
import {
  CheckBadgeIcon,
  BoltIcon,
  FireIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  SparklesIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  MapIcon,
} from '@heroicons/react/24/solid';
import { cn } from '@/utils/cn';

export const PublicPortfolioScreen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [portfolio, setPortfolio] = useState<PublicPortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const loadPortfolio = async () => {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await PublicPortfolioService.getPortfolioBySlug(slug);
        setPortfolio(data);
      } catch (err) {
        console.error('[PublicPortfolioScreen] Error loading portfolio:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPortfolio();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0C] flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="w-12 h-12 rounded-full border-3 border-[#635BFF] border-t-transparent animate-spin mb-4" />
        <p className="text-sm font-mono text-[#8A85B8] tracking-wider">
          Loading verified portfolio...
        </p>
      </div>
    );
  }

  // Not found or not published state
  if (!portfolio) {
    return (
      <div className="min-h-screen bg-[#0A0A0C] text-white flex flex-col justify-between p-6">
        {/* Top Header */}
        <header className="max-w-5xl mx-auto w-full flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#635BFF]/20 border border-[#635BFF]/40 flex items-center justify-center text-[#635BFF] font-heading font-bold text-base group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white">
              Skillora <span className="text-[#635BFF]">AI</span>
            </span>
          </Link>
          <Link
            to="/onboarding"
            className="text-xs font-heading font-medium px-4 py-2 rounded-xl bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20 hover:bg-[#635BFF]/20 transition-all"
          >
            Create Your Portfolio
          </Link>
        </header>

        {/* Not Found Body */}
        <div className="max-w-md mx-auto text-center space-y-6 my-auto py-12">
          <div className="w-16 h-16 rounded-2xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.2)]">
            <ExclamationCircleIcon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              Portfolio Not Found
            </h1>
            <p className="text-sm text-[#8A85B8] leading-relaxed">
              This portfolio doesn't exist or hasn't been published yet by the creator.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5248E5] text-white font-heading font-medium text-sm transition-all shadow-[0_4px_20px_rgba(99,91,255,0.4)]"
            >
              Explore Skillora AI
            </Link>
            <Link
              to="/onboarding"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-medium text-sm border border-white/10 transition-all"
            >
              Start Learning Path
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-white/5 text-xs text-[#8A85B8] font-mono">
          Powered by Skillora AI • AI-Guided Career Acceleration
        </footer>
      </div>
    );
  }

  const { profile, projects, certificates, progress, completedRoadmapsCount } = portfolio;
  const initials = profile.fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'SK';

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-[#635BFF] selection:text-white pb-20">
      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#0A0A0C]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#635BFF]/20 border border-[#635BFF]/40 flex items-center justify-center text-[#635BFF] font-heading font-bold text-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white leading-none">
                Skillora <span className="text-[#635BFF]">AI</span>
              </span>
              <span className="text-[10px] font-mono text-[#8A85B8] uppercase tracking-wider">
                Verified Portfolio
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-heading font-medium text-white transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied Link!</span>
                </>
              ) : (
                <>
                  <ShareIcon className="w-3.5 h-3.5 text-[#8A85B8]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <Link
              to="/onboarding"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#635BFF] hover:bg-[#5248E5] text-xs font-heading font-semibold text-white transition-all shadow-[0_2px_12px_rgba(99,91,255,0.3)]"
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              Build with Skillora
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-12">
        {/* --- Hero Profile Card --- */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#635BFF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 text-center md:text-left">
            {/* Avatar / Initials */}
            <div className="relative flex-shrink-0">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-[#635BFF] shadow-[0_8px_24px_rgba(99,91,255,0.3)]"
                />
              ) : (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#635BFF] to-[#3C3489] border-2 border-[#635BFF]/50 flex items-center justify-center text-white font-heading font-bold text-3xl sm:text-4xl shadow-[0_8px_24px_rgba(99,91,255,0.3)]">
                  {initials}
                </div>
              )}
              <div
                title="Verified Skillora AI Practitioner"
                className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#0A0A0C] border-2 border-[#635BFF] text-[#00F0FF] shadow-lg"
              >
                <CheckBadgeIcon className="w-5 h-5 text-[#635BFF]" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                  {profile.fullName}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#635BFF]/15 border border-[#635BFF]/30 text-[#8A85B8] text-xs font-mono">
                  <CheckBadgeIcon className="w-3.5 h-3.5 text-[#635BFF]" /> Verified Profile
                </span>
              </div>

              {profile.headline && (
                <p className="text-base sm:text-lg font-heading font-medium text-[#00F0FF]">
                  {profile.headline}
                </p>
              )}

              {profile.bio && (
                <p className="text-sm text-[#8A85B8] max-w-2xl leading-relaxed">
                  {profile.bio}
                </p>
              )}

              {profile.resumeUrl && (
                <div className="pt-2">
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-heading font-medium text-white transition-all"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4 text-[#635BFF]" />
                    View &amp; Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* --- Stats Metrics Row --- */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8A85B8] mb-1">
                <BoltIcon className="w-4 h-4 text-[#635BFF]" /> Total XP
              </div>
              <div className="text-xl sm:text-3xl font-heading font-extrabold text-white">
                {progress.xpTotal}
              </div>
            </div>

            <div className="flex flex-col items-center border-x border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8A85B8] mb-1">
                <MapIcon className="w-4 h-4 text-[#00F0FF]" /> Completed Roadmaps
              </div>
              <div className="text-xl sm:text-3xl font-heading font-extrabold text-white">
                {completedRoadmapsCount}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#8A85B8] mb-1">
                <FireIcon className="w-4 h-4 text-orange-500" /> Day Streak
              </div>
              <div className="text-xl sm:text-3xl font-heading font-extrabold text-white">
                {progress.streakCount}
              </div>
            </div>
          </div>
        </section>

        {/* --- Core Skills Section --- */}
        {profile.skills && profile.skills.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-white flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-[#635BFF]" /> Verified Skills &amp; Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#635BFF]/40 text-xs sm:text-sm font-mono text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* --- Featured Projects Grid --- */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-white">
                Featured Projects &amp; Deliverables
              </h2>
              <p className="text-xs text-[#8A85B8] mt-1">
                Live applications, repository architectures, and verified capstone deliverables.
              </p>
            </div>
            {projects.length > 0 && (
              <span className="text-xs font-mono text-[#8A85B8] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
              </span>
            )}
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#635BFF]/60 p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(99,91,255,0.15)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#635BFF] transition-colors">
                        {project.title}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open project in new tab"
                          className="p-2 rounded-lg bg-white/5 hover:bg-[#635BFF]/20 border border-white/10 hover:border-[#635BFF]/40 text-[#635BFF] transition-all flex-shrink-0"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-[#8A85B8] leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20 text-[11px] font-mono font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-[#00F0FF] hover:underline"
                      >
                        <GlobeAltIcon className="w-3.5 h-3.5" /> View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 text-[#8A85B8] space-y-2">
              <p className="text-sm">No featured projects published yet.</p>
            </div>
          )}
        </section>

        {/* --- Certificates Section --- */}
        {certificates.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-heading font-bold text-white">
                  Earned Credentials &amp; Certifications
                </h2>
                <p className="text-xs text-[#8A85B8] mt-1">
                  Verified certificates backed by completed AI learning milestones.
                </p>
              </div>
              <span className="text-xs font-mono text-[#8A85B8] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {certificates.length} {certificates.length === 1 ? 'Credential' : 'Credentials'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 hover:border-[#635BFF]/50 transition-all duration-300 shadow-lg group relative overflow-hidden"
                >
                  {/* Gamified 3D Badge */}
                  <div
                    className={cn(
                      'w-24 h-24 rounded-full mb-6 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1',
                      cert.badgeType === '3d-gold'
                        ? 'bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-600 shadow-[0_10px_30px_rgba(234,179,8,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2),inset_0_4px_10px_rgba(255,255,255,0.6)]'
                        : 'bg-gradient-to-br from-indigo-300 via-[#635BFF] to-purple-600 shadow-[0_10px_30px_rgba(99,91,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.3),inset_0_4px_10px_rgba(255,255,255,0.8)]'
                    )}
                  >
                    <TrophyIcon className="w-10 h-10 text-white drop-shadow-md" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-[#8A85B8] flex items-center justify-center gap-1">
                    <AcademicCapIcon className="w-3.5 h-3.5 text-[#635BFF]" /> {cert.issuer}
                  </p>
                  <span className="text-[11px] font-mono text-[#8A85B8] mt-3">
                    Issued: {cert.date}
                  </span>

                  <div className="mt-6 w-full pt-4 border-t border-white/5">
                    <Link
                      to={`/verify/${cert.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#635BFF]/10 hover:bg-[#635BFF]/25 border border-[#635BFF]/30 text-[#635BFF] hover:text-white font-heading text-xs font-semibold transition-all"
                    >
                      <CheckBadgeIcon className="w-4 h-4" /> Verify Credential
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Public Footer */}
      <footer className="mt-20 border-t border-white/10 pt-8 pb-12 text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#635BFF]/20 border border-[#635BFF]/40 flex items-center justify-center text-[#635BFF] font-heading font-bold text-xs">
            S
          </div>
          <span className="font-heading font-semibold text-sm text-white">
            Skillora AI
          </span>
        </div>
        <p className="text-xs text-[#8A85B8] font-mono">
          Verified Autonomous Career Acceleration &amp; Project Progression
        </p>
      </footer>
    </div>
  );
};
