import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types/profile.types';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/elements/Button';
import { Card } from '@/components/data-display/Card';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export interface SettingsTabProps {
  profile: UserProfile;
  onSave?: (updated: Partial<UserProfile>) => Promise<void> | void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ profile, onSave }) => {
  const [fullName, setFullName] = useState(profile.fullName);
  const [headline, setHeadline] = useState(profile.headline);
  const [bio, setBio] = useState(profile.bio);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setFullName(profile.fullName);
    setHeadline(profile.headline);
    setBio(profile.bio);
  }, [profile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSave) return;

    setIsSaving(true);
    setSaveError(null);
    setShowSuccess(false);

    try {
      await onSave({ fullName, headline, bio });
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

  const handleLogout = async () => {
    await logout();
    navigate('/auth/login');
  };

  const handleConfirmDelete = async () => {
    await logout();
    navigate('/auth/login');
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
            <p className="text-sm text-[color:var(--text-secondary)]">Permanently delete your data and roadmap progress.</p>
          </div>
          <Button 
            type="button"
            variant="ghost" 
            className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </Button>
        </div>
      </Card>

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[color:var(--color-bg-card)] border border-border rounded-xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-500">
              <ExclamationTriangleIcon className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg font-heading font-bold">Delete Account?</h3>
            </div>
            <p className="text-sm text-[color:var(--text-secondary)]">
              Are you sure you want to permanently delete your account? This action cannot be undone and will erase all roadmap progress and learning data.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <Button 
                variant="ghost" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="primary" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={handleConfirmDelete}
              >
                Yes, Delete My Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

