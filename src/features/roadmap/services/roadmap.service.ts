import { supabase } from '@/lib/supabase';
import { Roadmap, Task, Resource } from '../types/roadmap.types';
import { OnboardingData } from '@/features/onboarding/schemas/onboarding.schemas';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { CertificateService } from '@/features/certificate/certificate.service';
import {
  resolveCourseFromRoadmap,
  setActiveCourseId,
  LOCAL_STORAGE_ACTIVE_ROADMAP_ID_KEY,
  LOCAL_STORAGE_ROADMAPS_KEY,
} from './courseRegistry';

const LOCAL_STORAGE_LEGACY_ROADMAP_KEY = 'skillora_active_roadmap';
const LOCAL_STORAGE_ACTIVE_ID_KEY = LOCAL_STORAGE_ACTIVE_ROADMAP_ID_KEY;

/**
 * Helper to get all local roadmaps from localStorage, auto-migrating legacy single-roadmap key if needed.
 */
function getLocalRoadmaps(): Roadmap[] {
  try {
    const rawList = localStorage.getItem(LOCAL_STORAGE_ROADMAPS_KEY);
    if (rawList) {
      const parsed = JSON.parse(rawList);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }

    // Auto-migrate legacy single roadmap key
    const rawLegacy = localStorage.getItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY);
    if (rawLegacy) {
      const parsedLegacy = JSON.parse(rawLegacy) as Roadmap;
      if (parsedLegacy && parsedLegacy.title && Array.isArray(parsedLegacy.tasks)) {
        const migratedList = [parsedLegacy];
        localStorage.setItem(LOCAL_STORAGE_ROADMAPS_KEY, JSON.stringify(migratedList));
        if (!localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY)) {
          localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, parsedLegacy.id);
        }
        return migratedList;
      }
    }
  } catch (err) {
    console.warn('[RoadmapService] Error reading local roadmaps:', err);
  }
  return [];
}

/**
 * Helper to save roadmaps array to localStorage.
 */
function saveLocalRoadmaps(roadmaps: Roadmap[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_ROADMAPS_KEY, JSON.stringify(roadmaps));
  } catch (err) {
    console.warn('[RoadmapService] Error saving local roadmaps:', err);
  }
}

export const RoadmapService = {
  /**
   * Fetches all roadmaps belonging to the user (multi-roadmap support).
   */
  fetchAllRoadmaps: async (userId?: string): Promise<Roadmap[]> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[RoadmapService] fetchAllRoadmaps: Resolving user ID ->', effectiveUserId || 'Guest/Offline');

    const activeRoadmapId = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY) : null;

    // 1. Authenticated User flow: Query Supabase
    if (effectiveUserId) {
      const { data: roadmaps, error } = await supabase
        .from('roadmaps')
        .select(`
          id,
          title,
          description,
          progress_percentage,
          status,
          created_at,
          updated_at,
          tasks (
            id,
            order_index,
            title,
            description,
            status,
            requires_quiz,
            xp_reward,
            resources (
              id,
              title,
              type,
              url,
              duration
            )
          )
        `)
        .eq('user_id', effectiveUserId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[RoadmapService] fetchAllRoadmaps error:', error.code, error.message);
      } else if (roadmaps && roadmaps.length > 0) {
        // Auto-check completed roadmaps for certificates
        for (const r of roadmaps) {
          if ((r.status === 'completed' || (r.progress_percentage ?? 0) >= 100) && effectiveUserId) {
            try {
              await CertificateService.getOrCreateCertificate(effectiveUserId, r.title);
            } catch (certErr) {
              console.warn('[RoadmapService] Certificate auto-verification check note:', certErr);
            }
          }
        }

        const formattedRoadmaps: Roadmap[] = roadmaps.map((r) => {
          const rawTasks = (r.tasks as any[]) || [];
          rawTasks.sort((a, b) => a.order_index - b.order_index);

          const formattedTasks: Task[] = rawTasks.map((t) => ({
            id: t.id,
            orderIndex: t.order_index,
            title: t.title,
            description: t.description || '',
            status: t.status as Task['status'],
            requiresQuiz: Boolean(t.requires_quiz),
            xpReward: t.xp_reward || 50,
            resources: ((t.resources as any[]) || []).map((res) => ({
              id: res.id,
              title: res.title,
              type: res.type as Resource['type'],
              url: res.url,
              duration: res.duration || undefined,
            })),
          }));

          // Self-heal: ensure at least one task is in_progress if not completed
          const isCompleted = r.status === 'completed' || (r.progress_percentage ?? 0) >= 100;
          if (!isCompleted && formattedTasks.length > 0) {
            const hasInProgress = formattedTasks.some((t) => t.status === 'in_progress');
            const firstUncompleted = formattedTasks.find((t) => t.status !== 'completed');
            if (!hasInProgress && firstUncompleted) {
              firstUncompleted.status = 'in_progress';
              if (effectiveUserId && !firstUncompleted.id.startsWith('tsk_guest_')) {
                supabase
                  .from('tasks')
                  .update({ status: 'in_progress' })
                  .eq('id', firstUncompleted.id)
                  .then(() => {});
              }
            }
          }

          const completedCount = formattedTasks.filter((t) => t.status === 'completed').length;
          const calculatedProgress = formattedTasks.length > 0
            ? Math.round((completedCount / formattedTasks.length) * 100)
            : (r.progress_percentage || 0);

          const resolvedCourse = resolveCourseFromRoadmap({
            id: r.id,
            title: r.title,
            description: r.description || undefined,
          });

          const isActive = activeRoadmapId ? r.id === activeRoadmapId : false;

          return {
            id: r.id,
            userId: effectiveUserId,
            title: r.title,
            description: r.description || undefined,
            courseId: resolvedCourse?.id,
            courseRoute: resolvedCourse?.route,
            progressPercentage: calculatedProgress,
            status: (r.status as any) || (calculatedProgress >= 100 ? 'completed' : 'in_progress'),
            isActive,
            createdAt: r.created_at,
            updatedAt: r.updated_at,
            tasks: formattedTasks,
            totalTasksCount: formattedTasks.length,
            completedTasksCount: completedCount,
          };
        });

        // If no roadmap has active flag matching activeRoadmapId, designate the first in-progress or first item
        const hasActive = formattedRoadmaps.some((rm) => rm.isActive);
        if (!hasActive && formattedRoadmaps.length > 0) {
          const defaultActive = formattedRoadmaps.find((rm) => rm.status !== 'completed' && rm.progressPercentage < 100) || formattedRoadmaps[0];
          defaultActive.isActive = true;
          try {
            localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, defaultActive.id);
            localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(defaultActive));
            const resolved = resolveCourseFromRoadmap(defaultActive);
            if (resolved) {
              setActiveCourseId(resolved.id);
            }
          } catch (_) {}
        }

        return formattedRoadmaps;
      } else if (!error && (!roadmaps || roadmaps.length === 0)) {
        // No roadmaps in Supabase. Check if there are unmigrated guest roadmaps
        const localList = getLocalRoadmaps();
        if (localList.length > 0) {
          console.log('[RoadmapService] Found local guest roadmaps. Migrating first roadmap to Supabase...');
          try {
            const migrated = await RoadmapService.migrateGuestRoadmap(effectiveUserId, localList[0]);
            return [migrated];
          } catch (migErr) {
            console.error('[RoadmapService] Migration error:', migErr);
          }
        }
      }
    }

    // 2. Guest/Offline Fallback flow
    const localRoadmaps = getLocalRoadmaps();
    if (localRoadmaps.length > 0) {
      const activeId = activeRoadmapId || localRoadmaps[0].id;
      const formatted = localRoadmaps.map((r) => {
        const tasks = r.tasks || [];
        tasks.sort((a, b) => a.orderIndex - b.orderIndex);
        const completedCount = tasks.filter((t) => t.status === 'completed').length;
        const progressPercentage = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : (r.progressPercentage || 0);
        const resolvedCourse = resolveCourseFromRoadmap(r);

        return {
          ...r,
          courseId: resolvedCourse?.id,
          courseRoute: resolvedCourse?.route,
          progressPercentage,
          status: (r.status as any) || (progressPercentage >= 100 ? 'completed' : 'in_progress'),
          isActive: r.id === activeId,
          totalTasksCount: tasks.length,
          completedTasksCount: completedCount,
        };
      });

      // Ensure at least one is active
      if (!formatted.some((r) => r.isActive) && formatted.length > 0) {
        formatted[0].isActive = true;
      }
      return formatted;
    }

    return [];
  },

  /**
   * Fetches a specific roadmap by its ID.
   */
  fetchRoadmapById: async (roadmapId: string, userId?: string): Promise<Roadmap | null> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    // 1. If authenticated and not a guest ID, query Supabase
    if (effectiveUserId && !roadmapId.startsWith('rmp_guest_')) {
      const { data: r, error } = await supabase
        .from('roadmaps')
        .select(`
          id,
          title,
          description,
          progress_percentage,
          status,
          created_at,
          updated_at,
          tasks (
            id,
            order_index,
            title,
            description,
            status,
            requires_quiz,
            xp_reward,
            resources (
              id,
              title,
              type,
              url,
              duration
            )
          )
        `)
        .eq('id', roadmapId)
        .eq('user_id', effectiveUserId)
        .maybeSingle();

      if (error) {
        console.error('[RoadmapService] fetchRoadmapById error:', error);
      } else if (r) {
        const rawTasks = (r.tasks as any[]) || [];
        rawTasks.sort((a, b) => a.order_index - b.order_index);

        const formattedTasks: Task[] = rawTasks.map((t) => ({
          id: t.id,
          orderIndex: t.order_index,
          title: t.title,
          description: t.description || '',
          status: t.status as Task['status'],
          requiresQuiz: Boolean(t.requires_quiz),
          xpReward: t.xp_reward || 50,
          resources: ((t.resources as any[]) || []).map((res) => ({
            id: res.id,
            title: res.title,
            type: res.type as Resource['type'],
            url: res.url,
            duration: res.duration || undefined,
          })),
        }));

        const isCompleted = r.status === 'completed' || (r.progress_percentage ?? 0) >= 100;
        if (!isCompleted && formattedTasks.length > 0) {
          const hasInProgress = formattedTasks.some((t) => t.status === 'in_progress');
          const firstUncompleted = formattedTasks.find((t) => t.status !== 'completed');
          if (!hasInProgress && firstUncompleted) {
            firstUncompleted.status = 'in_progress';
          }
        }

        const completedCount = formattedTasks.filter((t) => t.status === 'completed').length;
        const calculatedProgress = formattedTasks.length > 0
          ? Math.round((completedCount / formattedTasks.length) * 100)
          : (r.progress_percentage || 0);

        const activeRoadmapId = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY) : null;
        const resolvedCourse = resolveCourseFromRoadmap({
          id: r.id,
          title: r.title,
          description: r.description || undefined,
        });

        return {
          id: r.id,
          userId: effectiveUserId,
          title: r.title,
          description: r.description || undefined,
          courseId: resolvedCourse?.id,
          courseRoute: resolvedCourse?.route,
          progressPercentage: calculatedProgress,
          status: (r.status as any) || (calculatedProgress >= 100 ? 'completed' : 'in_progress'),
          isActive: r.id === activeRoadmapId,
          createdAt: r.created_at,
          updatedAt: r.updated_at,
          tasks: formattedTasks,
          totalTasksCount: formattedTasks.length,
          completedTasksCount: completedCount,
        };
      }
    }

    // 2. Local storage search
    const localRoadmaps = getLocalRoadmaps();
    const matched = localRoadmaps.find((rm) => rm.id === roadmapId);
    if (matched) {
      const activeRoadmapId = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY) : null;
      const resolvedCourse = resolveCourseFromRoadmap(matched);
      return {
        ...matched,
        courseId: resolvedCourse?.id,
        courseRoute: resolvedCourse?.route,
        isActive: matched.id === activeRoadmapId,
      };
    }

    return null;
  },

  /**
   * Fetches the user's currently active roadmap.
   * Prioritizes the user-selected active roadmap ID, or falls back to the most recent in-progress roadmap.
   */
  fetchActiveRoadmap: async (userId?: string): Promise<Roadmap | null> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    const allRoadmaps = await RoadmapService.fetchAllRoadmaps(effectiveUserId);
    if (allRoadmaps.length === 0) {
      return null;
    }

    const activeRoadmapId = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY) : null;
    let activeRoadmap = activeRoadmapId ? allRoadmaps.find((r) => r.id === activeRoadmapId) : null;

    if (!activeRoadmap) {
      // Pick first in-progress or first item
      activeRoadmap = allRoadmaps.find((r) => r.status !== 'completed' && r.progressPercentage < 100) || allRoadmaps[0];
      if (activeRoadmap && typeof window !== 'undefined') {
        try {
          localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, activeRoadmap.id);
        } catch (_) {}
      }
    }

    if (activeRoadmap) {
      const resolved = resolveCourseFromRoadmap(activeRoadmap);
      if (resolved) {
        setActiveCourseId(resolved.id);
      }
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(activeRoadmap));
        } catch (_) {}
      }
    }

    return activeRoadmap || null;
  },

  /**
   * Sets a specific roadmap as the active roadmap for the user.
   */
  setActiveRoadmap: async (roadmapId: string, userId?: string): Promise<Roadmap | null> => {
    console.log('[RoadmapService] Setting active roadmap:', roadmapId);
    try {
      localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, roadmapId);
    } catch (_) {}

    const roadmap = await RoadmapService.fetchRoadmapById(roadmapId, userId);
    if (roadmap) {
      const resolved = resolveCourseFromRoadmap(roadmap);
      if (resolved) {
        setActiveCourseId(resolved.id);
      } else {
        setActiveCourseId('custom');
      }

      try {
        localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(roadmap));
      } catch (_) {}

      // Update active flag in local roadmaps cache
      try {
        const localList = getLocalRoadmaps();
        if (localList.length > 0) {
          const updated = localList.map((r) => ({
            ...r,
            isActive: r.id === roadmapId,
          }));
          saveLocalRoadmaps(updated);
        }
      } catch (_) {}
    }
    return roadmap;
  },

  /**
   * Renames a roadmap record in Supabase and/or localStorage.
   */
  renameRoadmap: async (roadmapId: string, newTitle: string, userId?: string): Promise<boolean> => {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return false;

    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[RoadmapService] Renaming roadmap:', roadmapId, 'to:', trimmedTitle);

    // 1. If authenticated and not guest ID, update in Supabase
    if (effectiveUserId && !roadmapId.startsWith('rmp_guest_')) {
      const { error } = await supabase
        .from('roadmaps')
        .update({ title: trimmedTitle, updated_at: new Date().toISOString() })
        .eq('id', roadmapId)
        .eq('user_id', effectiveUserId);

      if (error) {
        console.error('[RoadmapService] renameRoadmap error in Supabase:', error);
        return false;
      }
    }

    // 2. Always update local storage
    const localRoadmaps = getLocalRoadmaps();
    const updatedLocal = localRoadmaps.map((r) => {
      if (r.id === roadmapId) {
        return { ...r, title: trimmedTitle, updatedAt: new Date().toISOString() };
      }
      return r;
    });
    saveLocalRoadmaps(updatedLocal);

    // Update active cache if active
    const activeId = localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY);
    if (activeId === roadmapId) {
      const cachedActive = localStorage.getItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY);
      if (cachedActive) {
        try {
          const parsed = JSON.parse(cachedActive);
          parsed.title = trimmedTitle;
          localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(parsed));
        } catch (_) {}
      }
    }

    return true;
  },

  /**
   * Deletes a roadmap safely. Cascades to tasks and resources in Supabase.
   * If the active roadmap was deleted, switches to the next available roadmap.
   * Never deletes or touches other roadmaps or course progress.
   */
  deleteRoadmap: async (
    roadmapId: string,
    userId?: string
  ): Promise<{ success: boolean; nextActiveRoadmap: Roadmap | null }> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[RoadmapService] Deleting roadmap:', roadmapId, 'User:', effectiveUserId || 'Guest');

    // 1. Delete in Supabase if authenticated
    if (effectiveUserId && !roadmapId.startsWith('rmp_guest_')) {
      const { error } = await supabase
        .from('roadmaps')
        .delete()
        .eq('id', roadmapId)
        .eq('user_id', effectiveUserId);

      if (error) {
        console.error('[RoadmapService] deleteRoadmap Supabase error:', error);
        throw new Error(`Failed to delete roadmap: ${error.message}`);
      }
    }

    // 2. Delete from local storage
    const localRoadmaps = getLocalRoadmaps();
    const filteredLocal = localRoadmaps.filter((r) => r.id !== roadmapId);
    saveLocalRoadmaps(filteredLocal);

    // 3. Fallback active roadmap if deleted roadmap was active
    const activeId = localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY);
    let nextActiveRoadmap: Roadmap | null = null;

    if (activeId === roadmapId) {
      const remainingRoadmaps = await RoadmapService.fetchAllRoadmaps(effectiveUserId);
      if (remainingRoadmaps.length > 0) {
        nextActiveRoadmap = remainingRoadmaps[0];
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, nextActiveRoadmap.id);
        localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(nextActiveRoadmap));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_ACTIVE_ID_KEY);
        localStorage.removeItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY);
      }
    } else {
      nextActiveRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);
    }

    return { success: true, nextActiveRoadmap };
  },

  /**
   * Migrates a guest/offline roadmap from localStorage into real Supabase rows (profiles, goals, roadmaps, tasks, resources)
   * and generates certificate immediately if progress is 100%.
   */
  migrateGuestRoadmap: async (userId: string, guestRoadmap: Roadmap): Promise<Roadmap> => {
    console.log('[RoadmapService] migrateGuestRoadmap initiating for user:', userId, 'Title:', guestRoadmap.title);

    // 1. Ensure Profile record exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (!existingProfile) {
      await supabase.from('profiles').insert({ id: userId });
    }

    // 2. Create Goal record
    const { data: goalData, error: goalError } = await supabase
      .from('goals')
      .insert({
        user_id: userId,
        target_role: guestRoadmap.title,
        is_active: true,
        current_skills: [],
      })
      .select('id')
      .single();

    if (goalError) {
      console.warn('[RoadmapService] Goal migration warning:', goalError);
    }

    // 3. Create Roadmap record
    const progressPercentage = guestRoadmap.progressPercentage || 0;
    const isFullyCompleted = progressPercentage >= 100;

    const { data: roadmapData, error: roadmapError } = await supabase
      .from('roadmaps')
      .insert({
        user_id: userId,
        goal_id: goalData?.id || null,
        title: guestRoadmap.title,
        progress_percentage: progressPercentage,
        status: isFullyCompleted ? 'completed' : 'in_progress',
      })
      .select('id, title, progress_percentage, created_at, updated_at')
      .single();

    if (roadmapError || !roadmapData) {
      console.error('[RoadmapService] Migration Roadmap insert error:', roadmapError);
      throw new Error(`Failed to migrate roadmap: ${roadmapError?.message || 'Unknown database error'}`);
    }

    console.log('[RoadmapService] Migration: Roadmap record created ID:', roadmapData.id);

    // 4. Insert Tasks
    const tasksPayload = (guestRoadmap.tasks || []).map((task, idx) => ({
      roadmap_id: roadmapData.id,
      order_index: task.orderIndex || (idx + 1),
      title: task.title,
      description: task.description || '',
      status: task.status || (idx === 0 ? 'in_progress' : 'locked'),
      requires_quiz: Boolean(task.requiresQuiz),
      xp_reward: task.xpReward || 50,
    }));

    const hasAnyInProgress = tasksPayload.some((t) => t.status === 'in_progress');
    const firstPending = tasksPayload.find((t) => t.status !== 'completed');
    if (!hasAnyInProgress && firstPending) {
      firstPending.status = 'in_progress';
    }

    const { data: insertedTasks, error: tasksError } = await supabase
      .from('tasks')
      .insert(tasksPayload)
      .select('id, order_index, title, description, status, requires_quiz, xp_reward');

    if (tasksError || !insertedTasks) {
      console.error('[RoadmapService] Migration Tasks insert error:', tasksError);
      throw new Error(`Failed to migrate roadmap tasks: ${tasksError?.message || 'Unknown tasks error'}`);
    }

    // 5. Insert Resources
    const resourcesPayload: any[] = [];
    (guestRoadmap.tasks || []).forEach((task) => {
      const matchedInsertedTask = insertedTasks.find((t) => t.order_index === task.orderIndex);
      if (matchedInsertedTask && Array.isArray(task.resources) && task.resources.length > 0) {
        task.resources.forEach((r) => {
          resourcesPayload.push({
            task_id: matchedInsertedTask.id,
            title: r.title,
            type: r.type,
            url: r.url,
            duration: r.duration || null,
          });
        });
      }
    });

    if (resourcesPayload.length > 0) {
      await supabase.from('resources').insert(resourcesPayload);
    }

    // 6. If roadmap was completed, generate certificate
    if (isFullyCompleted) {
      try {
        await CertificateService.getOrCreateCertificate(userId, guestRoadmap.title);
      } catch (certErr) {
        console.warn('[RoadmapService] Migration certificate generation warning:', certErr);
      }
    }

    const completeRoadmap: Roadmap = {
      id: roadmapData.id,
      userId,
      title: roadmapData.title,
      progressPercentage,
      status: isFullyCompleted ? 'completed' : 'in_progress',
      isActive: true,
      createdAt: roadmapData.created_at,
      updatedAt: roadmapData.updated_at,
      tasks: insertedTasks.map((t) => ({
        id: t.id,
        orderIndex: t.order_index,
        title: t.title,
        description: t.description || '',
        status: t.status as Task['status'],
        requiresQuiz: Boolean(t.requires_quiz),
        xpReward: t.xp_reward || 50,
        resources: (guestRoadmap.tasks.find((gt) => gt.orderIndex === t.order_index)?.resources || []).map((r) => ({
          id: r.id,
          title: r.title,
          type: r.type,
          url: r.url,
          duration: r.duration,
        })),
      })),
      totalTasksCount: insertedTasks.length,
      completedTasksCount: insertedTasks.filter((t) => t.status === 'completed').length,
    };

    // Update active cache
    try {
      localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, completeRoadmap.id);
      localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(completeRoadmap));
    } catch (_) {}

    return completeRoadmap;
  },

  /**
   * Helper to generate personalized starter tasks and resources tailored to the user's selected persona and skills.
   */
  getPersonalizedStarterData: (onboardingData: OnboardingData) => {
    const userType = onboardingData.userType || 'university_student';
    const targetGoal = (onboardingData.targetGoal || '').trim();
    const skillsList = onboardingData.currentSkills || [];
    const skillsText = skillsList.length > 0 ? skillsList.slice(0, 3).join(', ') : '';

    const resolvedCourse = resolveCourseFromRoadmap({
      title: targetGoal,
      goal: targetGoal,
      description: skillsText,
    });

    if (resolvedCourse) {
      try {
        const courseState = resolvedCourse.service.getCourseState();
        const beginnerTasks = courseState.levels?.beginner?.tasks || [];
        if (beginnerTasks.length > 0) {
          return {
            courseId: resolvedCourse.id,
            courseRoute: resolvedCourse.route,
            title: resolvedCourse.title,
            tasks: beginnerTasks.map((t, idx) => ({
              orderIndex: t.orderIndex || (idx + 1),
              title: t.title,
              description: t.description || '',
              status: (t.status || (idx === 0 ? 'in_progress' : 'locked')) as Task['status'],
              requiresQuiz: Boolean(t.requiresQuiz),
              xpReward: t.xpReward || 50,
              resources: (t.resources || []).map((r, rIdx) => ({
                id: r.id || `res_${resolvedCourse.id}_${idx + 1}_${rIdx + 1}`,
                title: r.title,
                type: (r.type as any) || 'documentation',
                url: r.url || 'https://skillora.ai',
                duration: r.duration || '15m',
              })),
            })),
          };
        }
      } catch (err) {
        console.warn('[RoadmapService] Could not extract course beginner tasks:', err);
      }
    }

    let cleanSkill = targetGoal;
    const isPersonalNameOrGeneric =
      !cleanSkill ||
      cleanSkill.length < 3 ||
      ['amir', 'john', 'alex', 'user', 'guest', 'me', 'self'].includes(cleanSkill.toLowerCase());

    if (isPersonalNameOrGeneric) {
      cleanSkill = skillsList.length > 0 ? skillsList[0] : 'Full-Stack Web Development';
    }

    if (userType === 'freelancer') {
      return {
        courseId: undefined,
        courseRoute: undefined,
        title: `${cleanSkill} Freelance Acceleration Track`,
        tasks: [
          {
            orderIndex: 1,
            title: `Commercial Skill Mastery & Service Packaging for ${cleanSkill}`,
            description: `Develop commercial-grade proficiency in ${cleanSkill}${skillsText ? ` expanding your current toolkit in ${skillsText}` : ''} and define high-ticket client service deliverables.`,
            status: 'in_progress' as const,
            requiresQuiz: true,
            xpReward: 50,
            resources: [
              {
                id: `res_fl_1_1`,
                title: `${cleanSkill} Commercial Blueprint & Client Service Standards`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '15m',
              },
              {
                id: `res_fl_1_2`,
                title: 'Client Deliverables & Technical Specification Guide',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '20m read',
              },
            ],
          },
          {
            orderIndex: 2,
            title: `Client Case Studies & Workflow Automation for ${cleanSkill}`,
            description: `Implement client-ready workflows, rapid deployment templates, and automated testing in ${cleanSkill} to streamline project turnaround.`,
            status: 'locked' as const,
            requiresQuiz: true,
            xpReward: 100,
            resources: [
              {
                id: `res_fl_2_1`,
                title: `High-Velocity Client Project Execution & Automation in ${cleanSkill}`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '30m',
              },
              {
                id: `res_fl_2_2`,
                title: 'Client Milestone Verification & Acceptance Criteria Guide',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '15m read',
              },
            ],
          },
          {
            orderIndex: 3,
            title: `Client-Ready Production Capstone for ${cleanSkill}`,
            description: `Deliver an end-to-end commercial capstone project in ${cleanSkill}, deploy live demo, and verify project delivery.`,
            status: 'locked' as const,
            requiresQuiz: false,
            xpReward: 150,
            resources: [],
          },
        ],
      };
    }

    if (userType === 'career_changer') {
      return {
        courseId: undefined,
        courseRoute: undefined,
        title: `${cleanSkill} Career Transition Track`,
        tasks: [
          {
            orderIndex: 1,
            title: `Industry-Aligned Fundamentals & Architecture in ${cleanSkill}`,
            description: `Master core mental models, modern industry standards, and developer tooling in ${cleanSkill} tailored for rapid career transition.`,
            status: 'in_progress' as const,
            requiresQuiz: true,
            xpReward: 50,
            resources: [
              {
                id: `res_cc_1_1`,
                title: `${cleanSkill} Industry Orientation & Core Architecture`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '12m',
              },
              {
                id: `res_cc_1_2`,
                title: 'Professional Patterns & Reference Documentation',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '18m read',
              },
            ],
          },
          {
            orderIndex: 2,
            title: `Real-World System Implementation in ${cleanSkill}`,
            description: `Build scalable features and tackle real-world engineering constraints in ${cleanSkill} replicating enterprise engineering workflows.`,
            status: 'locked' as const,
            requiresQuiz: true,
            xpReward: 100,
            resources: [
              {
                id: `res_cc_2_1`,
                title: `Production System Architecture in ${cleanSkill}`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '25m',
              },
              {
                id: `res_cc_2_2`,
                title: 'System Design & Code Quality Standards',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '20m read',
              },
            ],
          },
          {
            orderIndex: 3,
            title: `Portfolio Capstone & Technical Interview Deliverable in ${cleanSkill}`,
            description: `Build and deploy a full production capstone in ${cleanSkill} designed to demonstrate senior-level competencies to hiring managers.`,
            status: 'locked' as const,
            requiresQuiz: false,
            xpReward: 150,
            resources: [],
          },
        ],
      };
    }

    // Default: University Student / General Learner
    return {
      courseId: undefined,
      courseRoute: undefined,
      title: `${cleanSkill} Structured Curriculum`,
      tasks: [
        {
          orderIndex: 1,
          title: `Core Principles & Mental Models in ${cleanSkill}`,
          description: `Build a rigorous foundation in ${cleanSkill} covering essential terminology, modern conventions, and baseline execution environments.`,
          status: 'in_progress' as const,
          requiresQuiz: true,
          xpReward: 50,
          resources: [
            {
              id: `res_uni_1_1`,
              title: `${cleanSkill} Fundamental Concepts & Execution Walkthrough`,
              type: 'video' as const,
              url: 'https://youtube.com',
              duration: '10m',
            },
            {
              id: `res_uni_1_2`,
              title: 'Academic Standards, Specifications & Syntax Guide',
              type: 'documentation' as const,
              url: 'https://developer.mozilla.org',
              duration: '15m read',
            },
          ],
        },
        {
          orderIndex: 2,
          title: `Hands-On Lab Projects & Applied Implementation in ${cleanSkill}`,
          description: `Apply core concepts in ${cleanSkill} through practical mini-projects, modular coding exercises, and version-controlled GitHub repositories.`,
          status: 'locked' as const,
          requiresQuiz: true,
          xpReward: 100,
          resources: [
            {
              id: `res_uni_2_1`,
              title: `Lab Project Walkthrough & Implementation Guide in ${cleanSkill}`,
              type: 'video' as const,
              url: 'https://youtube.com',
              duration: '25m',
            },
            {
              id: `res_uni_2_2`,
              title: 'Best Practices for Code Quality & Modular Design',
              type: 'documentation' as const,
              url: 'https://developer.mozilla.org',
              duration: '12m read',
            },
          ],
        },
        {
          orderIndex: 3,
          title: `Career Capstone & Employer-Ready Deliverable for ${cleanSkill}`,
          description: `Design, build, and deploy a production-grade capstone project in ${cleanSkill} showcasing end-to-end technical mastery, verified by public repository.`,
          status: 'locked' as const,
          requiresQuiz: false,
          xpReward: 150,
          resources: [],
        },
      ],
    };
  },

  /**
   * Creates a new starter roadmap with goal, modules, and resources based on onboarding data.
   * Preserves any existing roadmaps (multi-roadmap architecture).
   */
  createStarterRoadmap: async (userId: string, onboardingData: OnboardingData): Promise<Roadmap> => {
    console.log('[RoadmapService] createStarterRoadmap initiated for user:', userId, 'Goal:', onboardingData.targetGoal);

    // 1. Upsert profile skills
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        skills: onboardingData.currentSkills || [],
      });

    if (profileError) {
      console.warn('[RoadmapService] Profile upsert warning:', profileError.message);
    }

    // 1b. Ensure progress_tracking row exists
    const today = new Date().toISOString().slice(0, 10);
    const { data: existingProgress } = await supabase
      .from('progress_tracking')
      .select('xp_total, streak_count')
      .eq('user_id', userId)
      .maybeSingle();

    if (!existingProgress) {
      await supabase
        .from('progress_tracking')
        .insert({
          user_id: userId,
          xp_total: 0,
          streak_count: 1,
          last_active_date: today,
          updated_at: new Date().toISOString(),
        });
    }

    // 2. Create Goal record
    const { data: goalData, error: goalError } = await supabase
      .from('goals')
      .insert({
        user_id: userId,
        target_role: onboardingData.targetGoal,
        is_active: true,
        current_skills: onboardingData.currentSkills || [],
      })
      .select('id')
      .single();

    if (goalError) {
      console.error('[RoadmapService] Goal insert error:', goalError);
    }

    // 3. Create Roadmap record (does NOT delete previous roadmaps!)
    const personalizedData = RoadmapService.getPersonalizedStarterData(onboardingData);
    const roadmapTitle = personalizedData.title || onboardingData.targetGoal;

    const { data: roadmapData, error: roadmapError } = await supabase
      .from('roadmaps')
      .insert({
        user_id: userId,
        goal_id: goalData?.id || null,
        title: roadmapTitle,
        progress_percentage: 0,
        status: 'in_progress',
      })
      .select('id, title, progress_percentage, created_at, updated_at')
      .single();

    if (roadmapError || !roadmapData) {
      console.error('[RoadmapService] Roadmap insert error:', roadmapError);
      throw new Error(`Failed to create roadmap: ${roadmapError?.message || 'Unknown database error'}`);
    }

    // 4. Seed personalized sequential tasks
    const starterTasksPayload = personalizedData.tasks.map((t) => ({
      roadmap_id: roadmapData.id,
      order_index: t.orderIndex,
      title: t.title,
      description: t.description,
      status: t.status,
      requires_quiz: t.requiresQuiz,
      xp_reward: t.xpReward,
    }));

    const { data: insertedTasks, error: tasksError } = await supabase
      .from('tasks')
      .insert(starterTasksPayload)
      .select('id, order_index, title, description, status, requires_quiz, xp_reward');

    if (tasksError || !insertedTasks) {
      console.error('[RoadmapService] Tasks insert error:', tasksError);
      throw new Error(`Failed to create roadmap tasks: ${tasksError?.message || 'Unknown tasks error'}`);
    }

    // 5. Seed resources
    const resourcesPayload: any[] = [];
    personalizedData.tasks.forEach((taskData) => {
      const matchedInsertedTask = insertedTasks.find((t) => t.order_index === taskData.orderIndex);
      if (matchedInsertedTask && Array.isArray(taskData.resources) && taskData.resources.length > 0) {
        taskData.resources.forEach((r) => {
          resourcesPayload.push({
            task_id: matchedInsertedTask.id,
            title: r.title,
            type: r.type,
            url: r.url,
            duration: r.duration || null,
          });
        });
      }
    });

    if (resourcesPayload.length > 0) {
      await supabase.from('resources').insert(resourcesPayload);
    }

    // Set newly created roadmap as the active roadmap
    try {
      localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, roadmapData.id);
      if (personalizedData.courseId) {
        setActiveCourseId(personalizedData.courseId);
      } else {
        setActiveCourseId('custom');
      }
    } catch (_) {}

    const completeRoadmap = await RoadmapService.fetchRoadmapById(roadmapData.id, userId);
    if (!completeRoadmap) {
      throw new Error('Roadmap was created but could not be fetched.');
    }

    try {
      localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(completeRoadmap));
    } catch (_) {}

    console.log('[RoadmapService] createStarterRoadmap completed successfully! ID:', completeRoadmap.id);
    return completeRoadmap;
  },

  /**
   * Generates a starter roadmap in local storage for guest/offline sessions.
   * Appends to multi-roadmap storage list and sets as active.
   */
  createGuestStarterRoadmap: (onboardingData: OnboardingData): Roadmap => {
    console.log('[RoadmapService] Creating guest starter roadmap for goal:', onboardingData.targetGoal);
    const personalizedData = RoadmapService.getPersonalizedStarterData(onboardingData);
    const roadmapTitle = personalizedData.title || onboardingData.targetGoal;
    const newRoadmapId = `rmp_guest_${Date.now()}`;

    const guestRoadmap: Roadmap = {
      id: newRoadmapId,
      title: roadmapTitle,
      courseId: personalizedData.courseId,
      courseRoute: personalizedData.courseRoute,
      progressPercentage: 0,
      status: 'in_progress',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tasks: personalizedData.tasks.map((task) => ({
        id: `tsk_guest_${newRoadmapId}_${task.orderIndex}`,
        orderIndex: task.orderIndex,
        title: task.title,
        description: task.description,
        status: task.status,
        requiresQuiz: task.requiresQuiz,
        xpReward: task.xpReward,
        resources: (task.resources || []).map((r, rIdx) => ({
          id: (r as any).id || `res_guest_${newRoadmapId}_${task.orderIndex}_${rIdx + 1}`,
          title: r.title,
          type: r.type,
          url: r.url,
          duration: r.duration || undefined,
        })),
      })),
      totalTasksCount: personalizedData.tasks.length,
      completedTasksCount: 0,
    };

    // Append to local roadmaps array
    const existing = getLocalRoadmaps();
    const updatedList = [
      guestRoadmap,
      ...existing.map((r) => ({ ...r, isActive: false })),
    ];
    saveLocalRoadmaps(updatedList);

    try {
      localStorage.setItem(LOCAL_STORAGE_ACTIVE_ID_KEY, newRoadmapId);
      localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(guestRoadmap));
      if (personalizedData.courseId) {
        setActiveCourseId(personalizedData.courseId);
      } else {
        setActiveCourseId('custom');
      }
    } catch (_) {}

    return guestRoadmap;
  },

  /**
   * Marks a task as completed, unlocks the next step, updates roadmap progress, and awards XP.
   */
  completeTask: async (
    taskId: string,
    userId?: string
  ): Promise<{ success: boolean; progressPercentage: number }> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    console.log('[RoadmapService] completeTask initiated for taskId:', taskId, 'User:', effectiveUserId || 'Guest');

    // 1. If unauthenticated guest session or guest task ID, update localStorage
    if (!effectiveUserId || taskId.startsWith('tsk_guest_')) {
      const localRoadmaps = getLocalRoadmaps();
      let updatedProgress = 0;
      let matchedRoadmap: Roadmap | null = null;

      const updatedList = localRoadmaps.map((roadmap) => {
        const hasTask = (roadmap.tasks || []).some((t) => t.id === taskId);
        if (!hasTask) return roadmap;

        const sorted = [...(roadmap.tasks || [])].sort((a, b) => a.orderIndex - b.orderIndex);
        const currentIdx = sorted.findIndex((t) => t.id === taskId);

        const updatedTasks = sorted.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: 'completed' as const };
          }
          return task;
        });

        // Unlock next task
        const nextTask = updatedTasks.find((t, idx) => idx > currentIdx && t.status !== 'completed') ||
                         updatedTasks.find((t) => t.status === 'locked');
        if (nextTask) {
          nextTask.status = 'in_progress';
        }

        const completedCount = updatedTasks.filter((t) => t.status === 'completed').length;
        const progressPercentage = Math.round((completedCount / updatedTasks.length) * 100);
        updatedProgress = progressPercentage;

        matchedRoadmap = {
          ...roadmap,
          progressPercentage,
          status: progressPercentage >= 100 ? 'completed' : 'in_progress',
          tasks: updatedTasks,
          completedTasksCount: completedCount,
          totalTasksCount: updatedTasks.length,
          updatedAt: new Date().toISOString(),
        };

        return matchedRoadmap;
      });

      saveLocalRoadmaps(updatedList);

      if (matchedRoadmap) {
        try {
          const activeId = localStorage.getItem(LOCAL_STORAGE_ACTIVE_ID_KEY);
          if (activeId === (matchedRoadmap as Roadmap).id) {
            localStorage.setItem(LOCAL_STORAGE_LEGACY_ROADMAP_KEY, JSON.stringify(matchedRoadmap));
          }
        } catch (_) {}

        if (updatedProgress === 100 && effectiveUserId) {
          try {
            await CertificateService.getOrCreateCertificate(effectiveUserId, (matchedRoadmap as Roadmap).title);
          } catch (certErr) {
            console.error('[RoadmapService] Certificate generation error:', certErr);
          }
        }
      }

      return { success: true, progressPercentage: updatedProgress };
    }

    // 2. Mark task completed in Supabase
    const { data: completedTask, error: taskError } = await supabase
      .from('tasks')
      .update({ status: 'completed' })
      .eq('id', taskId)
      .select('id, roadmap_id, order_index, xp_reward')
      .single();

    if (taskError || !completedTask) {
      console.error('[RoadmapService] Error completing task:', taskError);
      throw taskError;
    }

    // 3. Fetch all tasks for this roadmap
    const { data: allTasks, error: allTasksError } = await supabase
      .from('tasks')
      .select('id, order_index, status')
      .eq('roadmap_id', completedTask.roadmap_id)
      .order('order_index', { ascending: true });

    if (allTasksError || !allTasks) {
      throw allTasksError;
    }

    // 4. Find and unlock next locked/pending task
    const nextLockedTask = allTasks.find(
      (t) => t.order_index > completedTask.order_index && t.status !== 'completed'
    ) || allTasks.find(
      (t) => t.id !== taskId && t.status === 'locked'
    );

    if (nextLockedTask) {
      await supabase
        .from('tasks')
        .update({ status: 'in_progress' })
        .eq('id', nextLockedTask.id);
    }

    // 5. Calculate updated progress percentage
    const completedCount = allTasks.filter(
      (t) => t.id === taskId || t.status === 'completed'
    ).length;
    const progressPercentage = Math.round((completedCount / allTasks.length) * 100);

    // 6. Update roadmap progress
    await supabase
      .from('roadmaps')
      .update({
        progress_percentage: progressPercentage,
        status: progressPercentage === 100 ? 'completed' : 'in_progress',
        updated_at: new Date().toISOString(),
      })
      .eq('id', completedTask.roadmap_id);

    // 7. If roadmap just hit 100%, generate certificate
    if (progressPercentage === 100 && effectiveUserId) {
      const { data: roadmapData } = await supabase
        .from('roadmaps')
        .select('title')
        .eq('id', completedTask.roadmap_id)
        .single();

      if (roadmapData?.title) {
        await CertificateService.getOrCreateCertificate(effectiveUserId, roadmapData.title);
      }
    }

    // 8. Award XP and update streak
    if (effectiveUserId) {
      const today = new Date().toISOString().slice(0, 10);
      const { data: progress } = await supabase
        .from('progress_tracking')
        .select('xp_total, streak_count, last_active_date')
        .eq('user_id', effectiveUserId)
        .maybeSingle();

      let newStreak = progress?.streak_count || 1;
      if (progress?.last_active_date) {
        const lastActive = new Date(progress.last_active_date);
        const now = new Date(today);
        const diffDays = Math.round((now.getTime() - lastActive.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          newStreak = (progress.streak_count || 0) + 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      }

      const newXp = (progress?.xp_total || 0) + (completedTask.xp_reward || 50);

      await supabase
        .from('progress_tracking')
        .upsert({
          user_id: effectiveUserId,
          xp_total: newXp,
          streak_count: newStreak,
          last_active_date: today,
          updated_at: new Date().toISOString(),
        });
    }

    return { success: true, progressPercentage };
  },

  /**
   * Persists a Capstone Project deliverable submission into Supabase (project_submissions & projects),
   * marks the roadmap task completed, awards XP, and recalculates progression.
   */
  submitProjectDeliverable: async ({
    taskId,
    title,
    repoUrl,
    notes,
    userId,
  }: {
    taskId: string;
    title: string;
    repoUrl?: string | null;
    notes?: string;
    userId?: string;
  }): Promise<{ success: boolean; progressPercentage: number }> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id;
    }

    console.log('[RoadmapService] submitProjectDeliverable initiated for Task:', taskId, 'User:', effectiveUserId);

    const projectDescription =
      notes ||
      (repoUrl
        ? `Production capstone deliverable verified at ${repoUrl}`
        : 'Production capstone deliverable verified by comprehensive description.');

    const projectItem = {
      id: `proj_${Date.now()}`,
      title: title,
      description: projectDescription,
      url: repoUrl || undefined,
      tags: ['Capstone Deliverable', 'Verified Project'],
      isPublic: true,
    };

    try {
      const existingProjectsRaw = localStorage.getItem('skillora_user_projects');
      const existingProjects = existingProjectsRaw ? JSON.parse(existingProjectsRaw) : [];
      const filtered = existingProjects.filter((p: any) =>
        repoUrl ? p.url !== repoUrl : p.title !== title
      );
      filtered.unshift(projectItem);
      localStorage.setItem('skillora_user_projects', JSON.stringify(filtered));

      const cachedProfileRaw = localStorage.getItem('skillora_user_profile');
      if (cachedProfileRaw) {
        const cachedProfile = JSON.parse(cachedProfileRaw);
        cachedProfile.projects = filtered;
        localStorage.setItem('skillora_user_profile', JSON.stringify(cachedProfile));
      }
    } catch (e) {
      console.warn('[RoadmapService] LocalStorage portfolio update note:', e);
    }

    if (effectiveUserId && !taskId.startsWith('tsk_guest_')) {
      try {
        await supabase.from('project_submissions').insert({
          user_id: effectiveUserId,
          task_id: taskId,
          title: title,
          repository_url: repoUrl || null,
          notes: notes || null,
          status: 'submitted',
          created_at: new Date().toISOString(),
        });
      } catch (err) {
        console.warn('[RoadmapService] project_submissions exception:', err);
      }

      try {
        await supabase.from('projects').insert({
          user_id: effectiveUserId,
          title: title,
          description: projectDescription,
          url: repoUrl || null,
          tags: ['Capstone Deliverable', 'Verified Project'],
          is_public: true,
          created_at: new Date().toISOString(),
        });
      } catch (err) {
        console.warn('[RoadmapService] projects table exception:', err);
      }
    }

    const result = await RoadmapService.completeTask(taskId, effectiveUserId);
    return result;
  },
};
