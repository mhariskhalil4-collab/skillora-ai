import { supabase } from '@/lib/supabase';

export interface Certificate {
  id: string;
  user_id: string;
  title: string;
  issuer: string;
  date: string;
  badge_type: 'standard' | '3d-gold' | '3d-silver';
  certificate_url: string | null;
  created_at: string;
}

const VERIFY_BASE_URL = `${window.location.origin}/verify`;
export const CertificateService = {
  /**
   * Call this after a roadmap hits 100% progress.
   * Creates a certificate row if one doesn't already exist for this
   * user + roadmap title, and returns the certificate record either way.
   */
  getOrCreateCertificate: async (
    userId: string,
    roadmapTitle: string,
    badgeType: Certificate['badge_type'] = 'standard'
  ): Promise<Certificate> => {
    // 1. Check if a certificate already exists for this user + title
    const { data: existing, error: fetchError } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', userId)
      .eq('title', roadmapTitle)
      .maybeSingle();

    if (fetchError) {
      console.error('[CertificateService] Error checking existing certificate:', fetchError);
      throw fetchError;
    }

    if (existing) {
      return existing as Certificate;
    }

    // 2. Create a new certificate row
    const { data: created, error: insertError } = await supabase
      .from('certificates')
      .insert({
        user_id: userId,
        title: roadmapTitle,
        issuer: 'Skillora AI',
        date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
        badge_type: badgeType,
      })
      .select('*')
      .single();

    if (insertError || !created) {
      console.error('[CertificateService] Error creating certificate:', insertError);
      throw insertError;
    }

    // 3. Build and store the verification URL using the certificate's own id
    const verifyUrl = `${VERIFY_BASE_URL}/${created.id}`;
    const { data: updated, error: updateError } = await supabase
      .from('certificates')
      .update({ certificate_url: verifyUrl })
      .eq('id', created.id)
      .select('*')
      .single();

    if (updateError || !updated) {
      console.error('[CertificateService] Error setting certificate_url:', updateError);
      return created as Certificate; // still usable even if this step failed
    }

    return updated as Certificate;
  },

  /** Fetch a single certificate by its id (used by the public /verify/:id page) */
  getCertificateById: async (certificateId: string): Promise<Certificate | null> => {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', certificateId)
      .maybeSingle();

    if (error) {
      console.error('[CertificateService] Error fetching certificate:', error);
      throw error;
    }

    return data as Certificate | null;
  },

  /** Fetch all certificates earned by a user (for a "My certificates" list) */
  getCertificatesForUser: async (userId: string): Promise<Certificate[]> => {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[CertificateService] Error fetching user certificates:', error);
      throw error;
    }

    return (data as Certificate[]) || [];
  },
};
