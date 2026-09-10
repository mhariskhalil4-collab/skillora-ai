import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CertificateService, Certificate } from './certificate.service';
import CertificateView from './CertificateView';
import { supabase } from '@/lib/supabase';
import { CheckBadgeIcon, ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

export const VerifyCertificateScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [recipientName, setRecipientName] = useState<string>('Learner');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertAndUser = async () => {
      if (!id) {
        setError('No certificate ID provided');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const cert = await CertificateService.getCertificateById(id);
        if (!cert) {
          setError('Certificate not found or invalid credential ID.');
          setIsLoading(false);
          return;
        }

        setCertificate(cert);

        // Fetch recipient name from profiles
        if (cert.user_id) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', cert.user_id)
            .maybeSingle();

          if (profile?.full_name) {
            setRecipientName(profile.full_name);
          }
        }
      } catch (err: any) {
        console.error('[VerifyCertificate] Error loading certificate:', err);
        setError(err.message || 'Failed to verify credential.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertAndUser();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Verifying Skillora AI credential...
          </p>
        </div>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-[color:var(--color-bg-card)] border border-red-500/30 rounded-2xl p-8 shadow-xl space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            Invalid Credential
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)]">
            {error || 'This certificate could not be verified on Skillora AI.'}
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline pt-2"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Go to Skillora AI
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Verification Success Badge */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckBadgeIcon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-lg font-heading font-bold text-emerald-400">
                Official Verified Credential
              </h1>
              <p className="text-xs font-mono text-[color:var(--text-secondary)]">
                Certificate ID: {certificate.id} &bull; Issued by {certificate.issuer}
              </p>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[color:var(--color-bg-card)] border border-border text-[color:var(--text-primary)] hover:border-brand transition-colors"
          >
            Explore Skillora AI &rarr;
          </Link>
        </div>

        {/* Certificate Rendering */}
        <div className="flex justify-center overflow-x-auto pb-6">
          <CertificateView
            recipientName={recipientName}
            courseTitle={certificate.title}
            issuedDate={certificate.date}
            verifyUrl={certificate.certificate_url || window.location.href}
          />
        </div>
      </div>
    </div>
  );
};
