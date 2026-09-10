import { supabase } from '@/lib/supabase';
import { PublicPortfolioData, PortfolioSettings } from '../types/portfolio.types';

const LOCAL_STORAGE_PORTFOLIO_SETTINGS_KEY = 'skillora_portfolio_settings';

export const PublicPortfolioService = {
  /**
   * Retrieves a public portfolio by slug if published.
   * Fetches profile, public projects, certificates, progress tracking, and completed roadmaps count.
   */
  getPortfolioBySlug: async (slug: string): Promise<PublicPortfolioData | null> => {
    const cleanSlug = slug.toLowerCase().trim();
    if (!cleanSlug) return null;

    try {
      console.log('[PublicPortfolioService] Fetching portfolio for slug:', cleanSlug);

      // 1. Look up portfolio row where slug matches and is_published is true
      const { data: portfolioRow, error: portfolioError } = await supabase
        .from('portfolio')
        .select('*')
        .eq('slug', cleanSlug)
        .eq('is_published', true)
        .maybeSingle();

      if (portfolioError) {
        console.error('[PublicPortfolioService] Error querying portfolio table:', portfolioError);
        return null;
      }

      if (!portfolioRow) {
        console.log('[PublicPortfolioService] No published portfolio found for slug:', cleanSlug);
        return null;
      }

      const userId = portfolioRow.user_id;

      // 2. Query profile, public projects, certificates, progress, and completed roadmaps in parallel
      const [
        profileRes,
        projectsRes,
        certsRes,
        progressRes,
        roadmapsRes,
      ] = await Promise.all([
        supabase
          .from('profiles')
          .select('id, full_name, headline, bio, skills, avatar_url, resume_url')
          .eq('id', userId)
          .maybeSingle(),
        supabase
          .from('projects')
          .select('id, title, description, tags, url, image_url, is_public, created_at')
          .eq('user_id', userId)
          .eq('is_public', true)
          .order('created_at', { ascending: false }),
        supabase
          .from('certificates')
          .select('id, title, issuer, date, badge_type, certificate_url, created_at')
          .eq('user_id', userId)
          .order('created_at', { ascending: false }),
        supabase
          .from('progress_tracking')
          .select('xp_total, streak_count')
          .eq('user_id', userId)
          .maybeSingle(),
        supabase
          .from('roadmaps')
          .select('id, status', { count: 'exact' })
          .eq('user_id', userId)
          .eq('status', 'completed'),
      ]);

      const profileData = profileRes.data;
      const projectsData = projectsRes.data || [];
      const certsData = certsRes.data || [];
      const progressData = progressRes.data;
      const completedRoadmapsCount = roadmapsRes.count || (roadmapsRes.data ? roadmapsRes.data.length : 0);

      // Fallback name if profiles table has empty full_name
      const fullName = profileData?.full_name?.trim() || 'Skillora Creator';

      const publicPortfolio: PublicPortfolioData = {
        userId,
        slug: portfolioRow.slug,
        isPublished: Boolean(portfolioRow.is_published),
        theme: portfolioRow.theme || 'default',
        profile: {
          id: userId,
          fullName,
          headline: profileData?.headline || 'AI & Tech Professional',
          bio: profileData?.bio || 'Building innovative AI workflows, full-stack software, and verified projects with Skillora AI.',
          skills: Array.isArray(profileData?.skills) && profileData.skills.length > 0 ? profileData.skills : ['Artificial Intelligence', 'Software Development'],
          avatarUrl: profileData?.avatar_url || undefined,
          resumeUrl: profileData?.resume_url || undefined,
        },
        projects: projectsData.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description || '',
          tags: Array.isArray(p.tags) ? p.tags : [],
          url: p.url || undefined,
          imageUrl: p.image_url || undefined,
          createdAt: p.created_at,
        })),
        certificates: certsData.map((c) => ({
          id: c.id,
          title: c.title,
          issuer: c.issuer || 'Skillora AI',
          date: c.date || (c.created_at ? new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Verified'),
          badgeType: (c.badge_type as any) || '3d-gold',
          certificateUrl: c.certificate_url || `/verify/${c.id}`,
        })),
        progress: {
          xpTotal: progressData?.xp_total ?? 0,
          streakCount: progressData?.streak_count ?? 1,
        },
        completedRoadmapsCount,
      };

      return publicPortfolio;
    } catch (err) {
      console.error('[PublicPortfolioService] Unexpected error loading portfolio:', err);
      return null;
    }
  },

  /**
   * Fetches the user's current portfolio settings (slug, is_published, theme).
   */
  getPortfolioSettings: async (userId: string): Promise<PortfolioSettings | null> => {
    if (!userId) return null;

    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('user_id, slug, is_published, theme')
        .eq('user_id', userId)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.warn('[PublicPortfolioService] Failed to load portfolio settings from Supabase:', error.message);
      }

      if (data) {
        const settings: PortfolioSettings = {
          userId: data.user_id,
          slug: data.slug || '',
          isPublished: Boolean(data.is_published),
          theme: data.theme || 'default',
        };
        try {
          localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_SETTINGS_KEY, JSON.stringify(settings));
        } catch (_) {}
        return settings;
      }

      // Check localStorage cache fallback
      try {
        const cached = localStorage.getItem(LOCAL_STORAGE_PORTFOLIO_SETTINGS_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed && parsed.userId === userId) {
            return parsed;
          }
        }
      } catch (_) {}

      return {
        userId,
        slug: '',
        isPublished: false,
        theme: 'default',
      };
    } catch (err) {
      console.error('[PublicPortfolioService] Error getting portfolio settings:', err);
      return null;
    }
  },

  /**
   * Checks whether a slug is available (not already taken by another user).
   */
  checkSlugAvailability: async (slug: string, currentUserId: string): Promise<{ available: boolean; error?: string }> => {
    const cleanSlug = slug.toLowerCase().trim();

    if (!cleanSlug) {
      return { available: false, error: 'Slug cannot be empty.' };
    }

    if (cleanSlug.length < 3) {
      return { available: false, error: 'Slug must be at least 3 characters long.' };
    }

    if (cleanSlug.length > 50) {
      return { available: false, error: 'Slug cannot exceed 50 characters.' };
    }

    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(cleanSlug)) {
      return {
        available: false,
        error: 'Slug can only contain lowercase letters, numbers, and hyphens (no consecutive or trailing hyphens).',
      };
    }

    // Reserved routes check
    const reservedSlugs = ['auth', 'login', 'register', 'dashboard', 'roadmap', 'profile', 'study-buddy', 'career-gps', 'verify', 'onboarding', 'api', 'admin', 'settings'];
    if (reservedSlugs.includes(cleanSlug)) {
      return { available: false, error: `"${cleanSlug}" is a reserved system keyword.` };
    }

    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('user_id, slug')
        .eq('slug', cleanSlug)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.warn('[PublicPortfolioService] Slug availability check warning:', error.message);
      }

      if (data && data.user_id !== currentUserId) {
        return { available: false, error: `The custom link "${cleanSlug}" is already taken.` };
      }

      return { available: true };
    } catch (err: any) {
      console.error('[PublicPortfolioService] Error verifying slug:', err);
      return { available: true }; // Allow attempt on network glitch
    }
  },

  /**
   * Saves or updates the user's portfolio settings in Supabase.
   */
  savePortfolioSettings: async (
    userId: string,
    settings: { slug: string; isPublished: boolean; theme?: string }
  ): Promise<PortfolioSettings> => {
    const cleanSlug = settings.slug.toLowerCase().trim();

    // 1. Verify availability
    const validation = await PublicPortfolioService.checkSlugAvailability(cleanSlug, userId);
    if (!validation.available) {
      throw new Error(validation.error || 'Invalid or unavailable slug.');
    }

    console.log('[PublicPortfolioService] Saving portfolio settings for user:', userId, settings);

    // 2. Upsert into Supabase portfolio table
    const { data, error } = await supabase
      .from('portfolio')
      .upsert(
        {
          user_id: userId,
          slug: cleanSlug,
          is_published: settings.isPublished,
          theme: settings.theme || 'default',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      )
      .select('user_id, slug, is_published, theme')
      .single();

    if (error || !data) {
      console.error('[PublicPortfolioService] Error persisting portfolio settings:', error);
      throw new Error(error?.message || 'Failed to save portfolio settings.');
    }

    const savedSettings: PortfolioSettings = {
      userId: data.user_id,
      slug: data.slug,
      isPublished: Boolean(data.is_published),
      theme: data.theme || 'default',
    };

    try {
      localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_SETTINGS_KEY, JSON.stringify(savedSettings));
    } catch (_) {}

    return savedSettings;
  },
};
