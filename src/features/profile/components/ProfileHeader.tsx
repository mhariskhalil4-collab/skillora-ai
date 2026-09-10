import React, { useState } from 'react';
import { UserProfile } from '../types/profile.types';
import { Button } from '@/components/elements/Button';
import { ShareIcon, MapPinIcon, CheckIcon } from '@heroicons/react/24/outline';

export const ProfileHeader: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: `${profile.fullName} | Skillora AI Profile`,
      text: profile.headline,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: any) {
        // User ne cancel kiya ho toh clipboard copy trigger na ho
        if (err.name === 'AbortError') return;
      }
    }

    // Fallback: Clipboard API
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Legacy fallback
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy profile link:', err);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {copied && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-success text-white px-4 py-3 rounded-xl shadow-lg font-heading text-sm font-semibold animate-bounce">
          <CheckIcon className="w-5 h-5 text-white" />
          <span>Profile link copied successfully!</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between bg-[color:var(--color-bg-card)] p-6 rounded-xl border border-border shadow-glass backdrop-blur-md">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-end">
          {/* Avatar */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[color:var(--color-bg-card)] bg-gradient-to-br from-brand/20 to-ai-glow/20 flex items-center justify-center text-3xl font-heading font-bold text-brand flex-shrink-0 shadow-lg">
            {(profile.fullName || 'Learner').charAt(0).toUpperCase()}
          </div>
          
          <div className="mb-2">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[color:var(--text-primary)]">
              {profile.fullName || 'Skillora Learner'}
            </h1>
            <p className="text-sm font-medium text-brand mt-1">{profile.headline || 'AI & Tech Practitioner'}</p>

            <div className="flex items-center gap-1 text-xs text-[color:var(--text-secondary)] mt-2 font-mono">
              <MapPinIcon className="w-3 h-3" /> Available for freelance & global roles
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <Button 
            type="button"
            variant="ghost" 
            className="w-full sm:w-auto border border-border cursor-pointer hover:border-brand/40"
            onClick={handleShare}
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 mr-2 text-success" /> Copied!
              </>
            ) : (
              <>
                <ShareIcon className="w-4 h-4 mr-2" /> Share Profile
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};
