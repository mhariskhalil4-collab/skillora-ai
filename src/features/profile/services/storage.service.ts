import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/features/auth/store/auth.store';

const ALLOWED_MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export interface UploadResult {
  url: string;
  path: string;
}

export const StorageService = {
  /**
   * Validates file format and size limits.
   */
  validateImageFile: (file: File): { valid: boolean; error?: string } => {
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return {
        valid: false,
        error: 'Invalid file type. Please upload a PNG, JPEG, WebP, or GIF image.',
      };
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return {
        valid: false,
        error: 'File is too large. Maximum allowed file size is 5MB.',
      };
    }

    return { valid: true };
  },

  /**
   * Uploads an avatar image for the authenticated user to the 'avatars' bucket.
   */
  uploadAvatar: async (file: File, userId?: string): Promise<UploadResult> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    if (!effectiveUserId || effectiveUserId === 'guest_user') {
      throw new Error('You must be signed in to upload an avatar.');
    }

    const validation = StorageService.validateImageFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = `${effectiveUserId}/${Date.now()}_${sanitizedName}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      console.error('[StorageService] Avatar upload error:', uploadError);
      throw new Error(uploadError.message || 'Failed to upload avatar image.');
    }

    const { data: publicUrlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    return {
      url: publicUrlData.publicUrl,
      path: filePath,
    };
  },

  /**
   * Uploads a project deliverable thumbnail image to the 'portfolio-images' bucket.
   */
  uploadPortfolioImage: async (
    file: File,
    userId?: string,
    projectId?: string
  ): Promise<UploadResult> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    if (!effectiveUserId || effectiveUserId === 'guest_user') {
      throw new Error('You must be signed in to upload project screenshots.');
    }

    const validation = StorageService.validateImageFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const projectPrefix = projectId ? `${projectId.replace(/[^a-zA-Z0-9_-]/g, '')}_` : '';
    const filePath = `${effectiveUserId}/${projectPrefix}${Date.now()}_${sanitizedName}`;

    const { error: uploadError } = await supabase.storage
      .from('portfolio-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      console.error('[StorageService] Project image upload error:', uploadError);
      throw new Error(uploadError.message || 'Failed to upload project image.');
    }

    const { data: publicUrlData } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(filePath);

    return {
      url: publicUrlData.publicUrl,
      path: filePath,
    };
  },
};
