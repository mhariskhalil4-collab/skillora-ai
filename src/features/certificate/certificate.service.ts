import { supabase } from '@/lib/supabase';

export interface Certificate {
  id: string;
  user_id: string;
  student_name?: string | null;
  recipient_name?: string | null;
  title: string;
  issuer: string;
  date: string;
  badge_type: 'standard' | '3d-gold' | '3d-silver';
  certificate_url: string | null;
  created_at: string;
}

/**
 * Strict production verification URL:
 * Under no circumstances should localhost or dev URLs be embedded into certificates.
 */
export const PRODUCTION_VERIFY_BASE_URL = 'https://skillora-ai-eta.vercel.app/verify-certificate';

/**
 * Builds the canonical public verification URL for a given certificate ID.
 */
export function buildVerificationUrl(certificateId: string): string {
  const cleanId = (certificateId || '').trim();
  return `${PRODUCTION_VERIFY_BASE_URL}/${encodeURIComponent(cleanId)}`;
}

/**
 * Generates a high-entropy, human-readable unique Certificate ID.
 * Format: SKL-{YEAR}-{6 RANDOM UPPERCASE ALPHANUMERICS} e.g. SKL-2026-X8K9M2
 */
export function generateCertificateId(): string {
  const year = new Date().getFullYear();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // omits confusing I, 1, O, 0
  let rand = '';
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SKL-${year}-${rand}`;
}

export const CertificateService = {
  /**
   * Generates or retrieves a certificate for a user upon completing a roadmap or masterclass.
   * Ensures student_name is frozen into the record and canonical production verification URL is stored.
   */
  getOrCreateCertificate: async (
    userId: string,
    roadmapTitle: string,
    badgeType: Certificate['badge_type'] = 'standard',
    studentName?: string
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
      const canonicalUrl = buildVerificationUrl(existing.id);
      const existingName = existing.student_name || existing.recipient_name;
      
      // If the certificate is missing student_name or has an outdated/localhost URL, update it
      if (!existingName || existing.certificate_url !== canonicalUrl) {
        let nameToPersist = existingName;
        if (!nameToPersist) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', userId)
            .maybeSingle();
          nameToPersist = profile?.full_name || studentName || 'Skillora Learner';
        }

        try {
          const { data: updated } = await supabase
            .from('certificates')
            .update({
              certificate_url: canonicalUrl,
              student_name: nameToPersist,
              recipient_name: nameToPersist,
            })
            .eq('id', existing.id)
            .select('*')
            .single();

          if (updated) {
            return updated as Certificate;
          }
        } catch {
          // If column doesn't exist yet or update fails, return patched existing record
        }
      }

      return {
        ...existing,
        student_name: existingName || studentName || 'Skillora Learner',
        recipient_name: existingName || studentName || 'Skillora Learner',
        certificate_url: canonicalUrl,
      } as Certificate;
    }

    // 2. Resolve student name from profile if not explicitly provided
    let resolvedName = studentName;
    if (!resolvedName) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', userId)
        .maybeSingle();
      resolvedName = profile?.full_name || 'Skillora Learner';
    }

    // 3. Generate unique certificate ID and canonical URL
    const newCertId = generateCertificateId();
    const canonicalUrl = buildVerificationUrl(newCertId);
    const currentDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    // 4. Create new certificate row with student name and canonical URL
    const payload: any = {
      id: newCertId,
      user_id: userId,
      student_name: resolvedName,
      recipient_name: resolvedName,
      title: roadmapTitle,
      issuer: 'Skillora AI',
      date: currentDate,
      badge_type: badgeType,
      certificate_url: canonicalUrl,
    };

    let created: any = null;
    const { data: initialData, error: insertError } = await supabase
      .from('certificates')
      .insert(payload)
      .select('*')
      .single();
    created = initialData;

    // Fallback if schema doesn't have student_name/recipient_name columns yet
    if (insertError) {
      console.warn('[CertificateService] Retrying insert with standard columns:', insertError);
      const standardPayload = {
        id: newCertId,
        user_id: userId,
        title: roadmapTitle,
        issuer: 'Skillora AI',
        date: currentDate,
        badge_type: badgeType,
        certificate_url: canonicalUrl,
      };

      const fallbackResult = await supabase
        .from('certificates')
        .insert(standardPayload)
        .select('*')
        .single();

      if (fallbackResult.error || !fallbackResult.data) {
        console.error('[CertificateService] Error creating certificate:', fallbackResult.error);
        throw fallbackResult.error || insertError;
      }
      created = fallbackResult.data;
    }

    return {
      ...created,
      student_name: created.student_name || resolvedName,
      recipient_name: created.recipient_name || resolvedName,
      certificate_url: canonicalUrl,
    } as Certificate;
  },

  /**
   * Fetch a single certificate by its unique ID for public unauthenticated verification.
   * Normalizes the verification URL to production domain.
   */
  getCertificateById: async (certificateId: string): Promise<Certificate | null> => {
    if (!certificateId) return null;
    const cleanId = certificateId.trim();

    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .eq('id', cleanId)
      .maybeSingle();

    if (error) {
      console.error('[CertificateService] Error fetching certificate:', error);
      throw error;
    }

    if (!data) return null;

    return {
      ...data,
      student_name: data.student_name || data.recipient_name || null,
      recipient_name: data.recipient_name || data.student_name || null,
      certificate_url: buildVerificationUrl(data.id),
    } as Certificate;
  },

  /**
   * Fetch all certificates earned by a user, with canonical production verification URLs.
   */
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

    return ((data as Certificate[]) || []).map((c) => ({
      ...c,
      student_name: c.student_name || c.recipient_name || null,
      recipient_name: c.recipient_name || c.student_name || null,
      certificate_url: buildVerificationUrl(c.id),
    }));
  },
};
