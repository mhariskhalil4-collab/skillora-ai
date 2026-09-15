import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CertificateService, Certificate, buildVerificationUrl } from './certificate.service';
import CertificateView from './CertificateView';
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  DocumentDuplicateIcon,
  CheckIcon,
  ShareIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  UserIcon,
  IdentificationIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

export const VerifyCertificateScreen: React.FC = () => {
  const params = useParams<{ certificateId?: string; id?: string }>();
  const rawId = params.certificateId || params.id;
  const navigate = useNavigate();

  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [recipientName, setRecipientName] = useState<string>('Skillora Learner');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);
  const [manualIdInput, setManualIdInput] = useState<string>('');

  const fetchCertificate = async (idToFetch: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const cert = await CertificateService.getCertificateById(idToFetch);
      if (!cert) {
        setError(`Certificate ID "${idToFetch}" is invalid or does not exist in the official Skillora AI registry.`);
        setCertificate(null);
        setIsLoading(false);
        return;
      }

      setCertificate(cert);
      const student = cert.student_name || cert.recipient_name;
      if (student) {
        setRecipientName(student);
      } else {
        setRecipientName('Skillora Learner');
      }
    } catch (err: any) {
      console.error('[VerifyCertificate] Error verifying certificate:', err);
      setError(err?.message || 'Failed to communicate with the verification server. Please try again.');
      setCertificate(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (rawId) {
      fetchCertificate(rawId);
    } else {
      setError('No certificate ID was specified in the verification URL.');
      setIsLoading(false);
    }
  }, [rawId]);

  const handleCopyId = () => {
    if (certificate?.id) {
      navigator.clipboard.writeText(certificate.id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    if (certificate?.id) {
      const url = buildVerificationUrl(certificate.id);
      navigator.clipboard.writeText(url);
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
    }
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualIdInput.trim()) {
      navigate(`/verify-certificate/${encodeURIComponent(manualIdInput.trim())}`);
    }
  };

  const canonicalUrl = certificate ? buildVerificationUrl(certificate.id) : '';

  // 1. LOADING STATE
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 selection:bg-brand selection:text-white">
        <div className="max-w-md w-full bg-[color:var(--color-bg-card)] border border-brand/20 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center space-y-5 animate-pulse">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-brand border-t-transparent animate-spin" />
            <ShieldCheckIcon className="w-7 h-7 text-brand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
              Verifying Credential...
            </h2>
            <p className="text-xs font-mono text-[color:var(--text-secondary)] mt-1.5">
              Querying Skillora AI official certificate registry &amp; digital signatures.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. INVALID OR NOT FOUND STATE
  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-lg w-full bg-[color:var(--color-bg-card)] border border-red-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto shadow-inner">
            <ExclamationTriangleIcon className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/15 text-red-400 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              STATUS: INVALID CREDENTIAL
            </div>
            <h1 className="text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Certificate Not Found
            </h1>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              {error || `The credential ID "${rawId || ''}" could not be verified in the Skillora AI registry.`}
            </p>
          </div>

          {/* Manual ID Search Form */}
          <form onSubmit={handleManualSearch} className="pt-2">
            <div className="flex items-center gap-2 bg-[color:var(--color-bg-base)] border border-border rounded-xl p-1.5 focus-within:border-brand transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5 text-[color:var(--text-secondary)] ml-2" />
              <input
                type="text"
                value={manualIdInput}
                onChange={(e) => setManualIdInput(e.target.value)}
                placeholder="Enter Certificate ID (e.g. SKL-2026-X8K9M2)"
                className="w-full bg-transparent text-xs font-mono text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)] focus:outline-none px-2 py-1.5"
              />
              <button
                type="submit"
                disabled={!manualIdInput.trim()}
                className="px-4 py-2 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand/90 disabled:opacity-50 transition-all shrink-0"
              >
                Verify
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-3">
            {rawId && (
              <button
                onClick={() => fetchCertificate(rawId)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-[color:var(--text-primary)] border border-border transition-colors w-full sm:w-auto justify-center"
              >
                <ArrowPathIcon className="w-4 h-4" /> Retry Verification
              </button>
            )}
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand text-white text-xs font-medium hover:bg-brand/90 transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeftIcon className="w-4 h-4" /> Explore Skillora AI
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. VALID VERIFIED CREDENTIAL STATE
  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] text-[color:var(--text-primary)] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Navbar / Brand Bar */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="font-heading font-extrabold text-white text-base">S</span>
            </div>
            <div>
              <span className="font-heading font-bold text-base text-[color:var(--text-primary)]">Skillora AI</span>
              <span className="block text-[10px] font-mono text-[color:var(--text-secondary)] uppercase tracking-wider">Credential Verification</span>
            </div>
          </Link>

          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[color:var(--color-bg-card)] border border-border text-[color:var(--text-secondary)] hover:text-brand hover:border-brand transition-colors"
          >
            Explore Courses &rarr;
          </Link>
        </div>

        {/* Verification Success Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10">
                <CheckBadgeIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: VALID &amp; VERIFIED
                </div>
                <h1 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
                  Official Verified Credential
                </h1>
                <p className="text-xs sm:text-sm text-[color:var(--text-secondary)]">
                  Authenticity confirmed by Skillora AI Registry.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <button
                onClick={handleCopyId}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[color:var(--color-bg-card)] border border-border text-xs font-mono font-semibold text-[color:var(--text-primary)] hover:border-brand transition-colors"
                title="Copy Certificate ID"
              >
                {isCopied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span>Copied ID!</span>
                  </>
                ) : (
                  <>
                    <DocumentDuplicateIcon className="w-4 h-4 text-[color:var(--text-secondary)]" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand/90 transition-colors shadow-md"
                title="Copy Public Verification URL"
              >
                {isLinkCopied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-white" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <ShareIcon className="w-4 h-4" />
                    <span>Share Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Key Verification Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-emerald-500/20">
            {/* Student Name */}
            <div className="bg-[color:var(--color-bg-card)]/80 border border-white/5 rounded-2xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--text-secondary)]">
                <UserIcon className="w-4 h-4 text-brand" />
                <span>STUDENT NAME</span>
              </div>
              <p className="text-sm sm:text-base font-heading font-bold text-[color:var(--text-primary)] truncate">
                {recipientName}
              </p>
            </div>

            {/* Course Title */}
            <div className="bg-[color:var(--color-bg-card)]/80 border border-white/5 rounded-2xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--text-secondary)]">
                <AcademicCapIcon className="w-4 h-4 text-brand" />
                <span>COURSE / ROADMAP</span>
              </div>
              <p className="text-sm sm:text-base font-heading font-bold text-[color:var(--text-primary)] truncate" title={certificate.title}>
                {certificate.title}
              </p>
            </div>

            {/* Issued Date */}
            <div className="bg-[color:var(--color-bg-card)]/80 border border-white/5 rounded-2xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--text-secondary)]">
                <CalendarDaysIcon className="w-4 h-4 text-brand" />
                <span>COMPLETION DATE</span>
              </div>
              <p className="text-sm sm:text-base font-mono font-bold text-[color:var(--text-primary)]">
                {certificate.date}
              </p>
            </div>

            {/* Certificate ID */}
            <div className="bg-[color:var(--color-bg-card)]/80 border border-white/5 rounded-2xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--text-secondary)]">
                <IdentificationIcon className="w-4 h-4 text-brand" />
                <span>CERTIFICATE ID</span>
              </div>
              <p className="text-xs sm:text-sm font-mono font-bold text-brand truncate" title={certificate.id}>
                {certificate.id}
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Display Card */}
        <div className="bg-[color:var(--color-bg-card)] border border-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
                Official Digital Certificate
              </h2>
              <p className="text-xs text-[color:var(--text-secondary)]">
                Cryptographically linked with real-time scannable QR Code and verifiable certificate serial.
              </p>
            </div>
            <div className="text-xs font-mono text-[color:var(--text-secondary)] bg-white/5 px-3 py-1.5 rounded-lg border border-border">
              Issuer: {certificate.issuer || 'Skillora AI'}
            </div>
          </div>

          {/* Certificate View Rendering (Horizontally Scrollable / Responsive Container) */}
          <div className="w-full flex justify-center overflow-x-auto py-2">
            <div className="min-w-[800px] lg:min-w-[1000px] flex justify-center">
              <CertificateView
                recipientName={recipientName}
                courseTitle={certificate.title}
                issuedDate={certificate.date}
                certificateId={certificate.id}
                verifyUrl={canonicalUrl}
              />
            </div>
          </div>
        </div>

        {/* Public Verification Footer & Trust Guarantees */}
        <div className="bg-[color:var(--color-bg-card)]/60 border border-border/80 rounded-2xl p-6 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[color:var(--text-secondary)]">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
            <span>Official Skillora AI Verification URL:</span>
          </div>
          <p className="text-xs sm:text-sm font-mono text-brand break-all select-all font-semibold">
            {canonicalUrl}
          </p>
          <p className="text-[11px] text-[color:var(--text-secondary)] pt-2">
            This verification link is publicly accessible to employers, recruiters, and academic institutions worldwide.
          </p>
        </div>

      </div>
    </div>
  );
};
