import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types/profile.types';
import { CertificateService, Certificate } from '@/features/certificate/certificate.service';
import CertificateView from '@/features/certificate/CertificateView';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { Modal } from '@/components/overlay/Modal';
import { TrophyIcon, AcademicCapIcon, SparklesIcon, EyeIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { cn } from '@/utils/cn';

interface CertificatesTabProps {
  profile?: UserProfile;
  certificates?: any[];
}

export const CertificatesTab: React.FC<CertificatesTabProps> = ({ profile, certificates: initialCertificates }) => {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);
  const [certList, setCertList] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const effectiveUserId = profile?.id || authUser?.id;
  const recipientName = profile?.fullName || authUser?.firstName || 'Skillora Learner';

  const loadCertificates = useCallback(async () => {
    if (!effectiveUserId) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const data = await CertificateService.getCertificatesForUser(effectiveUserId);
      setCertList(data);
    } catch (err) {
      console.warn('[CertificatesTab] Failed to fetch live certificates:', err);
      // Fallback to initial props if passed
      if (initialCertificates && initialCertificates.length > 0) {
        setCertList(
          initialCertificates.map((c) => ({
            id: c.id,
            user_id: effectiveUserId,
            title: c.title,
            issuer: c.issuer || 'Skillora AI',
            date: c.date || new Date().toISOString().slice(0, 10),
            badge_type: c.badgeType || c.badge_type || '3d-gold',
            certificate_url: c.certificateUrl || c.certificate_url || `https://skillora.ai/verify/${c.id}`,
            created_at: new Date().toISOString(),
          }))
        );
      }
    } finally {
      setLoading(false);
    }
  }, [effectiveUserId, initialCertificates]);

  useEffect(() => {
    loadCertificates();
  }, [loadCertificates]);

  if (loading) {
    return (
      <div className="py-12 flex flex-col items-center justify-center gap-3 text-center">
        <div className="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
        <p className="text-xs font-mono text-[color:var(--text-secondary)]">Loading your certificates...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {certList.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-heading font-bold text-[color:var(--text-primary)]">
                Earned Credentials &amp; Certifications
              </h2>
              <p className="text-xs text-[color:var(--text-secondary)]">
                Verified proof of completing AI roadmaps on Skillora AI.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-brand/10 text-brand border border-brand/20">
              <CheckBadgeIcon className="w-4 h-4" />
              {certList.length} {certList.length === 1 ? 'Certificate' : 'Certificates'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certList.map((cert) => (
              <Card key={cert.id} className="flex flex-col items-center text-center p-8 group relative overflow-hidden transition-all duration-300 hover:border-brand/50 shadow-md">
                {/* Gamified 3D Badge */}
                <div
                  className={cn(
                    'w-24 h-24 rounded-full mb-6 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2',
                    cert.badge_type === '3d-gold'
                      ? 'bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-600 shadow-[0_10px_30px_rgba(234,179,8,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2),inset_0_4px_10px_rgba(255,255,255,0.6)]'
                      : 'bg-gradient-to-br from-indigo-300 via-brand to-purple-600 shadow-[0_10px_30px_rgba(99,91,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.3),inset_0_4px_10px_rgba(255,255,255,0.8)]'
                  )}
                >
                  <TrophyIcon className="w-10 h-10 text-white drop-shadow-md" />
                </div>

                <h3 className="text-lg font-heading font-bold text-[color:var(--text-primary)] mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-[color:var(--text-secondary)] flex items-center justify-center gap-1">
                  <AcademicCapIcon className="w-4 h-4" /> {cert.issuer}
                </p>
                <span className="text-xs font-mono text-[color:var(--text-secondary)] mt-4">
                  Issued: {cert.date}
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedCert(cert)}
                  className="mt-6 w-full flex items-center justify-center gap-2"
                >
                  <EyeIcon className="w-4 h-4" /> View &amp; Download PDF
                </Button>
              </Card>
            ))}
          </div>

          {/* Certificate Modal Preview */}
          {selectedCert && (
            <Modal
              isOpen={Boolean(selectedCert)}
              onClose={() => setSelectedCert(null)}
              title={selectedCert.title}
              size="xl"
            >
              <div className="flex flex-col items-center py-4 overflow-x-auto">
                <CertificateView
                  recipientName={recipientName}
                  courseTitle={selectedCert.title}
                  issuedDate={selectedCert.date}
                  verifyUrl={selectedCert.certificate_url || `https://skillora.ai/verify/${selectedCert.id}`}
                />
              </div>
            </Modal>
          )}
        </>
      ) : (
        <Card className="text-center py-14 px-6 flex flex-col items-center justify-center space-y-4 border-dashed max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20">
            <TrophyIcon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
              No Certificates Earned Yet
            </h3>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              Complete all learning modules in your roadmap and score 70%+ on knowledge verification quizzes to unlock your verified 3D Skillora AI credentials.
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/roadmap')}
            className="mt-2"
          >
            <SparklesIcon className="w-4 h-4 mr-2" /> Continue Roadmap Progress
          </Button>
        </Card>
      )}
    </div>
  );
};
