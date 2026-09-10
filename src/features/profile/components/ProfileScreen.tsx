import React, { useState, useEffect, useCallback } from 'react';
import { UserProfile } from '../types/profile.types';
import { ProfileService } from '../services/profile.service';
import { ProfileHeader } from './ProfileHeader';
import { PortfolioTab } from './PortfolioTab';
import { CertificatesTab } from './CertificatesTab';
import { SettingsTab } from './SettingsTab';
import { Button } from '@/components/elements/Button';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

export const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'certificates' | 'settings'>('portfolio');
  const authUser = useAuthStore((state) => state.user);

  const loadProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await ProfileService.fetchUserProfile(authUser?.id);
      setProfile(data);
    } catch (err: any) {
      console.error('[ProfileScreen] Failed to load profile:', err);
      setError(err?.message || 'Unable to load your profile and verified credentials. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleUpdateProfile = async (updated: Partial<UserProfile>): Promise<void> => {
    if (!profile) return;
    try {
      const savedProfile = await ProfileService.updateUserProfile(profile.id, updated);
      setProfile(savedProfile);
    } catch (error) {
      console.error('[ProfileScreen] Failed to persist profile updates:', error);
      throw error;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin" />
          <p className="text-sm font-mono text-[color:var(--text-secondary)]">
            Loading your profile & achievements...
          </p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-[color:var(--color-bg-base)] flex items-center justify-center p-6 pb-24 lg:pb-8">
        <div className="max-w-md w-full text-center bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
            <ExclamationTriangleIcon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[color:var(--text-primary)]">
              Failed to Load Profile
            </h2>
            <p className="text-sm text-[color:var(--text-secondary)] mt-2 leading-relaxed">
              {error || 'Unable to retrieve your profile and verified credentials. Please check your connection.'}
            </p>
          </div>
          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2 cursor-pointer shadow-ai-glow"
            onClick={() => loadProfile()}
          >
            <ArrowPathIcon className="w-4 h-4" /> Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-base)] pb-24 lg:pb-8">
      {/* Dynamic Cover Photo */}
      <div className="h-48 sm:h-64 w-full bg-gradient-to-r from-brand to-ai-glow object-cover relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <ProfileHeader profile={profile} />

        {/* Tab Navigation */}
        <div className="flex gap-6 border-b border-border mt-8 mb-8 overflow-x-auto scrollbar-hide">
          {[
            { id: 'portfolio', label: 'Portfolio & Resume' },
            { id: 'certificates', label: 'Certificates & Badges' },
            { id: 'settings', label: 'Settings' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "pb-4 text-sm font-heading font-bold whitespace-nowrap transition-colors cursor-pointer",
                activeTab === tab.id 
                  ? 'text-[color:var(--text-primary)] border-b-2 border-brand' 
                  : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'portfolio' && <PortfolioTab profile={profile} />}
          {activeTab === 'certificates' && <CertificatesTab profile={profile} />}
          {activeTab === 'settings' && <SettingsTab profile={profile} onSave={handleUpdateProfile} />}
        </div>
      </div>
    </div>
  );
};

