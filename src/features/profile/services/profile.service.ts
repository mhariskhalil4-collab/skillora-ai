import { supabase } from '@/lib/supabase';
import { UserProfile, Project, Certificate } from '../types/profile.types';
import { useAuthStore } from '@/features/auth/store/auth.store';

const LOCAL_STORAGE_PROFILE_KEY = 'skillora_user_profile';

export const ProfileService = {
  /**
   * Fetches the complete profile of the active user from Supabase (profiles, projects, certificates).
   */
  fetchUserProfile: async (userId?: string): Promise<UserProfile> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[ProfileService] fetchUserProfile: Resolving user ID ->', effectiveUserId || 'Guest/Offline');

    // 1. Fetch live Profile from Supabase
    if (effectiveUserId) {
      try {
        const { data: profileRow, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', effectiveUserId)
          .maybeSingle();

        if (profileError) {
          console.warn('[ProfileService] Profile fetch warning:', profileError.message);
        }

        // Fetch user metadata for fallback name if profiles row was just initialized
        const { data: authUser } = await supabase.auth.getUser();
        const metadata = authUser.user?.user_metadata || {};
        const fallbackName = metadata.full_name || metadata.firstName || metadata.name || 'Learner';

        // 2. Fetch Projects from Supabase and merge with local submissions
        let userProjects: Project[] = [];
        try {
          const { data: projectRows, error: projectError } = await supabase
            .from('projects')
            .select('*')
            .eq('user_id', effectiveUserId)
            .order('created_at', { ascending: false });

          if (!projectError && projectRows && projectRows.length > 0) {
            userProjects = projectRows.map((p) => ({
              id: p.id,
              title: p.title,
              description: p.description || '',
              tags: p.tags || [],
              url: p.url || undefined,
              imageUrl: p.image_url || undefined,
              isPublic: p.is_public !== false,
            }));
          }
        } catch (e) {
          console.warn('[ProfileService] Projects fetch error:', e);
        }

        // Merge locally submitted deliverables (e.g. Capstone projects from roadmap)
        try {
          const localProjectsRaw = localStorage.getItem('skillora_user_projects');
          if (localProjectsRaw) {
            const localProjects: Project[] = JSON.parse(localProjectsRaw);
            for (const lp of localProjects) {
              const exists = userProjects.some(
                (up) => (lp.url && up.url === lp.url) || (lp.id && up.id === lp.id) || (lp.title && up.title === lp.title)
              );
              if (!exists) {
                userProjects.push(lp);
              }
            }
          }
        } catch (_) {}

        // Check active roadmap in localStorage for completed capstone deliverables
        try {
          const roadmapRaw = localStorage.getItem('skillora_active_roadmap');
          if (roadmapRaw) {
            const roadmap = JSON.parse(roadmapRaw);
            const capstoneTask = (roadmap.tasks || []).find(
              (t: any) =>
                t.status === 'completed' &&
                (!t.requiresQuiz || (t.title && t.title.toLowerCase().includes('capstone')) || t.orderIndex === 3)
            );
            if (capstoneTask) {
              const capstoneProject: Project = {
                id: `proj_${capstoneTask.id || 'capstone'}`,
                title: capstoneTask.title || 'Production Capstone Deliverable',
                description:
                  capstoneTask.description ||
                  'Complete production-ready capstone deliverable verified with repository code.',
                tags: ['Capstone Deliverable', 'Verified Project', 'Production Ready'],
                url: undefined,
                isPublic: true,
              };
              const exists = userProjects.some(
                (up) =>
                  (up.title && up.title === capstoneProject.title) ||
                  (up.id && up.id === capstoneProject.id)
              );
              if (!exists) {
                userProjects.unshift(capstoneProject);
              }
            }
          }
        } catch (_) {}

        // 3. Fetch Certificates if certificates table exists
        let userCertificates: Certificate[] = [];
        try {
          const { data: certRows, error: certError } = await supabase
            .from('certificates')
            .select('*')
            .eq('user_id', effectiveUserId)
            .order('created_at', { ascending: false });

          if (!certError && certRows && certRows.length > 0) {
            userCertificates = certRows.map((c) => ({
              id: c.id,
              title: c.title,
              issuer: c.issuer || 'Skillora AI',
              date: c.date || c.issued_date || new Date(c.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
              badgeType: c.badge_type || '3d-gold',
              certificateUrl: c.certificate_url || '#',
            }));
          }
        } catch (e) {
          console.warn('[ProfileService] Certificates fetch error:', e);
        }

        const liveProfile: UserProfile = {
          id: effectiveUserId,
          fullName: profileRow?.full_name || fallbackName,
          headline: profileRow?.headline || 'AI & Tech Upskilling Practitioner',
          bio: profileRow?.bio || 'Passionate about accelerating career growth, mastering cutting-edge technology, and building real-world projects with Skillora AI.',
          skills: profileRow?.skills && profileRow.skills.length > 0 ? profileRow.skills : ['Artificial Intelligence', 'Continuous Learning'],
          resumeUrl: profileRow?.resume_url || undefined,
          projects: userProjects,
          certificates: userCertificates,
        };

        // Cache in localStorage
        try {
          localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(liveProfile));
        } catch (_) {}

        return liveProfile;
      } catch (err) {
        console.error('[ProfileService] Unexpected error querying Supabase profile:', err);
      }
    }

    // 4. Fallback: LocalStorage / Guest Profile
    let fallbackProjects: Project[] = [];
    try {
      const localProjectsRaw = localStorage.getItem('skillora_user_projects');
      if (localProjectsRaw) {
        fallbackProjects = JSON.parse(localProjectsRaw);
      }
    } catch (_) {}

    // Check active roadmap in localStorage for completed capstone deliverables
    try {
      const roadmapRaw = localStorage.getItem('skillora_active_roadmap');
      if (roadmapRaw) {
        const roadmap = JSON.parse(roadmapRaw);
        const capstoneTask = (roadmap.tasks || []).find(
          (t: any) =>
            t.status === 'completed' &&
            (!t.requiresQuiz || (t.title && t.title.toLowerCase().includes('capstone')) || t.orderIndex === 3)
        );
        if (capstoneTask) {
          const capstoneProject: Project = {
            id: `proj_${capstoneTask.id || 'capstone'}`,
            title: capstoneTask.title || 'Production Capstone Deliverable',
            description:
              capstoneTask.description ||
              'Complete production-ready capstone deliverable verified with repository code.',
            tags: ['Capstone Deliverable', 'Verified Project', 'Production Ready'],
            url: undefined,
            isPublic: true,
          };
          const exists = fallbackProjects.some(
            (fp) =>
              (fp.title && fp.title === capstoneProject.title) ||
              (fp.id && fp.id === capstoneProject.id)
          );
          if (!exists) {
            fallbackProjects.unshift(capstoneProject);
          }
        }
      }
    } catch (_) {}

    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_PROFILE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as UserProfile;
        const existingUrls = new Set((parsed.projects || []).map((p) => p.url).filter(Boolean));
        const combined = [...(parsed.projects || [])];
        for (const fp of fallbackProjects) {
          if (!existingUrls.has(fp.url)) {
            combined.unshift(fp);
          }
        }
        parsed.projects = combined;
        return parsed;
      }
    } catch (_) {}

    return {
      id: 'guest_user',
      fullName: 'Skillora Learner',
      headline: 'Aspiring AI Specialist',
      bio: 'Exploring personalized learning roadmaps and AI mentoring.',
      skills: ['Artificial Intelligence', 'Prompt Engineering'],
      projects: fallbackProjects,
      certificates: [],
    };
  },

  /**
   * Persists updated profile fields (full_name, headline, bio, resume_url, skills) to Supabase.
   */
  updateUserProfile: async (
    userId?: string,
    updates: Partial<UserProfile> = {}
  ): Promise<UserProfile> => {
    let effectiveUserId: string | undefined = userId;

    if (!effectiveUserId || effectiveUserId === 'guest_user') {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[ProfileService] updateUserProfile initiated for user:', effectiveUserId, 'Updates:', updates);


    // Prepare payload mapped to Supabase column names
    const dbPayload: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (updates.fullName !== undefined) dbPayload.full_name = updates.fullName;
    if (updates.headline !== undefined) dbPayload.headline = updates.headline;
    if (updates.bio !== undefined) dbPayload.bio = updates.bio;
    if (updates.resumeUrl !== undefined) dbPayload.resume_url = updates.resumeUrl;
    if (updates.skills !== undefined) dbPayload.skills = updates.skills;

    if (effectiveUserId && effectiveUserId !== 'guest_user') {
      const { data, error } = await supabase
        .from('profiles')
        .update(dbPayload)
        .eq('id', effectiveUserId)
        .select()
        .single();

      if (error) {
        console.error('[ProfileService] Failed to update profile in Supabase:', error);
        throw new Error(error.message || 'Failed to update profile.');
      }

      console.log('[ProfileService] Successfully updated profile in Supabase:', data);

      // Sync Zustand Auth Store firstName if full_name was updated
      if (updates.fullName) {
        const currentUser = useAuthStore.getState().user;
        if (currentUser) {
          useAuthStore.setState({
            user: {
              ...currentUser,
              firstName: updates.fullName.trim().split(' ')[0] || updates.fullName,
            },
          });
        }
      }
    }

    // Refetch and return the unified latest profile
    return ProfileService.fetchUserProfile(effectiveUserId);
  },
};
