import React, { useState, useRef } from 'react';
import { StorageService } from '../services/storage.service';
import { CameraIcon, TrashIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/elements/Button';

interface AvatarUploadProps {
  currentAvatarUrl?: string;
  fullName?: string;
  onAvatarChange: (newUrl: string | undefined) => void;
  userId?: string;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  currentAvatarUrl,
  fullName = 'User',
  onAvatarChange,
  userId,
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'U';

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const result = await StorageService.uploadAvatar(file, userId);
      onAvatarChange(result.url);
    } catch (err: any) {
      console.error('[AvatarUpload] Error:', err);
      setError(err.message || 'Failed to upload avatar image.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    setError(null);
    onAvatarChange(undefined);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-[color:var(--color-bg-base)] border border-border">
      {/* Avatar Display */}
      <div className="relative group flex-shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand/30 bg-brand/10 flex items-center justify-center text-brand font-heading font-bold text-xl shadow-md">
          {currentAvatarUrl ? (
            <img
              src={currentAvatarUrl}
              alt={fullName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {isUploading && (
          <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center text-white">
            <ArrowPathIcon className="w-6 h-6 animate-spin text-brand" />
          </div>
        )}
      </div>

      {/* Upload Controls */}
      <div className="flex-1 text-center sm:text-left space-y-2">
        <h4 className="text-sm font-heading font-bold text-[color:var(--text-primary)]">
          Profile Photo
        </h4>
        <p className="text-xs text-[color:var(--text-secondary)]">
          Upload a clear photo in PNG, JPG, or WebP format (max 5MB).
        </p>

        {error && (
          <p className="text-xs font-medium text-red-500 bg-red-500/10 p-2 rounded-lg border border-red-500/20">
            {error}
          </p>
        )}

        <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={handleFileSelect}
            className="hidden"
            id="avatar-file-input"
          />

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="cursor-pointer text-xs"
          >
            <CameraIcon className="w-4 h-4 mr-1.5" />
            {currentAvatarUrl ? 'Change Photo' : 'Upload Photo'}
          </Button>

          {currentAvatarUrl && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleRemove}
              disabled={isUploading}
              className="cursor-pointer text-xs text-red-500 hover:text-red-600 hover:border-red-500/30"
            >
              <TrashIcon className="w-4 h-4 mr-1.5" />
              Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
