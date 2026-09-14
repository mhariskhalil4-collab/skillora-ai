import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types/profile.types';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';
import { Card } from '@/components/data-display/Card';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { AuthService } from '@/features/auth/services/auth.service';
import { SubscriptionCard } from '@/features/subscription';
import { AvatarUpload } from './AvatarUpload';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export interface SettingsTabProps {
  profile: UserProfile;
  onSave?: (updated: Partial<UserProfile>) => Promise<void> | void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ profile, onSave }) => {
  const [fullName, setFullName] = useState(profile.fullName);
  const [headline, setHeadline] = useState(profile.headline);
  const [bio, setBio] = useState(profile.bio);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(profile.avatarUrl);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  
  // Account Deletion state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setFullName(profile.fullName);
    setHeadline(profile.headline);
    setBio(profile.bio);
    setAvatarUrl(profile.avatarUrl);
  }, [profile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSave) return;

    setIsSaving(true);
    setSaveError(null);
    setShowSuccess(false);

    try {
      await onSave({ fullName, headline, bio, avatarUrl });
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3500);
      return () => clearTimeout(timer);
    } catch (err: any) {
      console.error('[SettingsTab] Error saving profile:', err);
      setSaveError(err.message || 'Failed to save changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarChange = async (newUrl?: string) => {
    setAvatarUrl(newUrl);
    if (onSave) {
      try {
        await onSave({ avatarUrl: newUrl });
      } catch (err) {
        console.error('[SettingsTab] Error saving updated avatar:', err);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/auth/login');
  };

  const handleConfirmDelete = async () => {
    if (confirmText !== 'DELETE') return;

    setIsDeleting(true);
    setDeleteError(null);

    try {
      await AuthService.deleteAccount();
      await logout();
      navigate('/auth/login', {
        state: { message: 'Your account and all associated data have been permanently deleted.' },
      });
    } catch (err: any) {
      console.error('[SettingsTab] Account deletion failed:', err);
      setDeleteError(err.message || 'Failed to delete account. Please try again later.');
      setIsDeleting(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mb-6">General Profile</h2>
        
        {showSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-success/10 border border-success/30 flex items-center gap-3 text-success animate-in fade-in duration-200">
            <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">Profile changes saved to database successfully!</span>
          </div>
        )}

        {saveError && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-500 animate-in fade-in duration-200">
            <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{saveError}</span>
          </div>
        )}

        {/* Profile Picture Upload Section */}
        <div className="mb-6 pb-6 border-b border-border">
          <AvatarUpload
            userId={profile.id}
            currentAvatarUrl={avatarUrl}
            fullName={fullName || 'Learner'}
            onAvatarChange={handleAvatarChange}
          />
        </div>

        <form className="space-y-4" onSubmit={handleSave}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input 
              label="Full Name" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required
            />
            <Input 
              label="Email Address (Authenticated)" 
              type="email" 
              value={authUser?.email || 'user@example.com'} 
              disabled 
            />
          </div>
          
          <Input 
            label="Professional Headline" 
            value={headline} 
            onChange={(e) => setHeadline(e.target.value)} 
          />
          
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-heading font-medium text-[color:var(--text-secondary)]">Bio & Summary</label>
            <textarea 
              className="w-full bg-transparent border-b border-border py-2 px-1 text-[color:var(--text-primary)] font-body placeholder-[color:var(--text-secondary)] focus:outline-none focus:border-brand min-h-[100px] resize-y"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" isLoading={isSaving}>
              Save Changes
            </Button>
          </div>
        </form>
      </Card>

      {/* Subscription & Billing Section */}
      <SubscriptionCard />

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">Log Out</h2>
            <p className="text-sm text-[color:var(--text-secondary)]">Sign out of your Skillora AI account on this device.</p>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="border border-border flex-shrink-0 cursor-pointer">
            Log Out
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)] mb-6">Danger Zone</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-red-500/30 rounded-lg bg-red-500/5">
          <div>
            <h3 className="font-heading font-semibold text-red-500">Delete Account</h3>
            <p className="text-sm text-[color:var(--text-secondary)]">Permanently delete your account, roadmap progress, and portfolio.</p>
          </div>
          <Button 
            type="button"
            variant="ghost" 
            className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
            onClick={() => {
              setConfirmText('');
              setDeleteError(null);
              setShowDeleteModal(true);
            }}
          >
            Delete
          </Button>
        </div>
      </Card>

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[color:var(--color-bg-card)] border border-border rounded-xl p-6 max-w-md w-full shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 text-red-500">
              <ExclamationTriangleIcon className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg font-heading font-bold">Permanently Delete Account?</h3>
            </div>
            
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              This action is <strong className="text-red-500">irreversible</strong>. All your roadmap milestones, certificates, project submissions, and verified portfolio settings will be permanently erased from the database.
            </p>

            {deleteError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg text-xs font-medium">
                {deleteError}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-heading font-semibold text-[color:var(--text-primary)]">
                Type <span className="font-mono font-bold text-red-500">DELETE</span> to confirm:
              </label>
              <Input
                placeholder="DELETE"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                disabled={isDeleting}
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button 
                variant="ghost" 
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                className="bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                disabled={confirmText !== 'DELETE' || isDeleting}
                isLoading={isDeleting}
                onClick={handleConfirmDelete}
              >
                Permanently Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

