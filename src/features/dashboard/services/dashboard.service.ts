import { supabase } from '@/lib/supabase';
import { RoadmapService } from '@/features/roadmap/services/roadmap.service';
import { Roadmap, Task } from '@/features/roadmap/types/roadmap.types';

export interface MarketInsight {
  id: number;
  trend: string;
  skill: string;
}

export interface DashboardData {
  user: {
    firstName: string;
    fullName: string;
    streak: number;
    xpTotal: number;
  };
  roadmap: {
    id?: string;
    goal: string;
    currentModule: string;
    currentModuleIndex: number;
    totalModules: number;
    progress: number;
    hasRoadmap: boolean;
  };
  tasks: Array<{
    id: string;
    title: string;
    completed: boolean;
    status: Task['status'];
    xpReward: number;
  }>;
  marketInsights: MarketInsight[];
}

export const DashboardService = {
  /**
   * Fetches unified dashboard data from Supabase tables:
   * profiles, roadmaps, tasks, and goals.
   * Includes graceful fallback for guest/offline sessions.
   */
  fetchDashboardData: async (userId?: string): Promise<DashboardData> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    console.log('[DashboardService] Fetching dashboard data for user:', effectiveUserId || 'Guest/Offline');

    // 1. Fetch Profile Data (full_name) and Progress Tracking (streak_count, xp_total)
    let profileFullName: string | null = null;
    let authFullName: string | undefined = undefined;
    let progressData: { xp_total: number; streak_count: number } | null = null;

    if (effectiveUserId) {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', effectiveUserId)
        .maybeSingle();

      if (profileError) {
        console.warn('[DashboardService] Profile fetch warning:', profileError.message);
      } else if (profile) {
        profileFullName = profile.full_name;
      }

      // Query progress_tracking (single source of truth for XP and Streak)
      const { data: tracking, error: trackingError } = await supabase
        .from('progress_tracking')
        .select('xp_total, streak_count, last_active_date')
        .eq('user_id', effectiveUserId)
        .maybeSingle();

      if (trackingError) {
        console.warn('[DashboardService] Progress tracking fetch warning:', trackingError.message);
      } else if (tracking) {
        progressData = {
          xp_total: tracking.xp_total ?? 0,
          streak_count: tracking.streak_count ?? 1,
        };
      } else {
        // Initialize default progress_tracking row if not present
        const today = new Date().toISOString().slice(0, 10);
        try {
          await supabase
            .from('progress_tracking')
            .upsert({
              user_id: effectiveUserId,
              xp_total: 0,
              streak_count: 1,
              last_active_date: today,
              updated_at: new Date().toISOString(),
            });
          progressData = { xp_total: 0, streak_count: 1 };
        } catch (_) {}
      }

      const { data: authUser } = await supabase.auth.getUser();
      authFullName = authUser.user?.user_metadata?.full_name || authUser.user?.user_metadata?.name;
    }

    // 2. Fetch Active Roadmap & Tasks from Supabase / cache
    const activeRoadmap: Roadmap | null = await RoadmapService.fetchActiveRoadmap(effectiveUserId);

    // 3. Compute derived values
    const rawName = profileFullName || authFullName || 'Learner';
    const firstName = rawName.trim().split(' ')[0] || 'Learner';

    // Calculate XP: from progress_tracking or by summing completed task rewards
    const completedTasks = activeRoadmap?.tasks.filter((t) => t.status === 'completed') || [];
    const completedXpSum = completedTasks.reduce((sum, t) => sum + (t.xpReward || 50), 0);
    const xpTotal = progressData?.xp_total ?? completedXpSum;

    // Calculate Streak: from progress_tracking
    const streak = progressData?.streak_count || (activeRoadmap ? 1 : 0);

    // Compute active module details
    const hasRoadmap = Boolean(activeRoadmap && activeRoadmap.tasks.length > 0);
    const tasks = activeRoadmap?.tasks || [];
    const totalModules = tasks.length;

    // Current active task
    const inProgressIndex = tasks.findIndex((t) => t.status === 'in_progress');
    const currentModuleIndex = inProgressIndex !== -1 ? inProgressIndex + 1 : (completedTasks.length < totalModules ? completedTasks.length + 1 : totalModules);
    const currentModuleTitle = 
      tasks.find((t) => t.status === 'in_progress')?.title ||
      tasks.find((t) => t.status === 'locked')?.title ||
      (tasks.length > 0 ? tasks[tasks.length - 1].title : 'Complete Onboarding');

    // Dynamic Market Insights based on user target
    const goalTitle = activeRoadmap?.title || 'AI Development';
    const isPythonOrAI = /python|ai|machine learning|data/i.test(goalTitle);
    const isEcom = /shopify|e-commerce|liquid|storefront/i.test(goalTitle);

    let marketInsights: MarketInsight[] = [
      { id: 1, trend: '↑ High Demand', skill: 'Gen AI Workflows' },
      { id: 2, trend: '🔥 Trending', skill: 'Autonomous Agents' },
    ];

    if (isEcom) {
      marketInsights = [
        { id: 1, trend: '↑ High Demand', skill: 'Shopify Headless' },
        { id: 2, trend: '🔥 Trending', skill: 'Gen AI Workflows' },
      ];
    } else if (isPythonOrAI) {
      marketInsights = [
        { id: 1, trend: '↑ High Demand', skill: 'Python AI Agents' },
        { id: 2, trend: '🔥 Trending', skill: 'Prompt Optimization' },
      ];
    }

    return {
      user: {
        firstName,
        fullName: rawName,
        streak,
        xpTotal,
      },
      roadmap: {
        id: activeRoadmap?.id,
        goal: activeRoadmap?.title || 'Personalized AI Curriculum',
        currentModule: currentModuleTitle,
        currentModuleIndex: totalModules > 0 ? currentModuleIndex : 0,
        totalModules,
        progress: activeRoadmap?.progressPercentage || 0,
        hasRoadmap,
      },
      tasks: tasks.map((t) => ({
        id: t.id,
        title: t.title,
        completed: t.status === 'completed',
        status: t.status,
        xpReward: t.xpReward || 50,
      })),
      marketInsights,
    };
  },
};
