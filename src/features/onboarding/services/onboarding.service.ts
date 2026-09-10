import { supabase } from '@/lib/supabase';
import { OnboardingData } from '../schemas/onboarding.schemas';
import { RoadmapService } from '@/features/roadmap/services/roadmap.service';
import { useAuthStore } from '@/features/auth/store/auth.store';

export const OnboardingService = {
  /**
   * Persists the user's onboarding choices and generates the initial starter roadmap.
   */
  generateRoadmap: async (data: OnboardingData): Promise<{ id: string; title: string }> => {
    console.log('[OnboardingService] generateRoadmap called with data:', data);

    // 1. Get the current active user ID from Supabase Auth, Session, or Zustand Store
    const { data: authData } = await supabase.auth.getUser();
    let userId = authData.user?.id || useAuthStore.getState().user?.id;

    if (!userId) {
      const { data: sessionData } = await supabase.auth.getSession();
      userId = sessionData.session?.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[OnboardingService] Detected User ID:', userId || 'None (Guest session)');

    if (!userId) {
      console.log('[OnboardingService] Truly unauthenticated visitor. Generating guest starter roadmap in local storage.');
      const guestRoadmap = RoadmapService.createGuestStarterRoadmap(data);
      return {
        id: guestRoadmap.id,
        title: guestRoadmap.title,
      };
    }

    // 2. Create the starter roadmap in Supabase for authenticated user
    try {
      console.log('[OnboardingService] Attempt 1: Calling RoadmapService.createStarterRoadmap for user:', userId);
      const roadmap = await RoadmapService.createStarterRoadmap(userId, data);
      console.log('[OnboardingService] Starter roadmap created with ID:', roadmap.id);
      return {
        id: roadmap.id,
        title: roadmap.title,
      };
    } catch (firstError: any) {
      console.error('[OnboardingService] First attempt to create starter roadmap in Supabase failed:', firstError?.message || firstError, firstError);
      console.log('[OnboardingService] Retrying Supabase roadmap creation once before fallback...');
      
      try {
        // Wait 500ms before retry to allow transient network/auth issues to resolve
        await new Promise((resolve) => setTimeout(resolve, 500));
        const retryRoadmap = await RoadmapService.createStarterRoadmap(userId, data);
        console.log('[OnboardingService] Retry succeeded! Starter roadmap created with ID:', retryRoadmap.id);
        return {
          id: retryRoadmap.id,
          title: retryRoadmap.title,
        };
      } catch (retryError: any) {
        console.error('[OnboardingService] Retry also failed to create roadmap in Supabase for logged-in user:', retryError?.message || retryError, retryError);
        // Fallback to guest starter only as last resort so user is not blocked
        console.warn('[OnboardingService] Falling back to local storage roadmap after failed Supabase attempts.');
        const guestRoadmap = RoadmapService.createGuestStarterRoadmap(data);
        return {
          id: guestRoadmap.id,
          title: guestRoadmap.title,
        };
      }
    }
  },
};
