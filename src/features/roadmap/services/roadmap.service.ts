import { supabase } from '@/lib/supabase';
import { Roadmap, Task, Resource } from '../types/roadmap.types';
import { OnboardingData } from '@/features/onboarding/schemas/onboarding.schemas';
import { useAuthStore } from '@/features/auth/store/auth.store';

const LOCAL_STORAGE_ROADMAP_KEY = 'skillora_active_roadmap';

export const RoadmapService = {
  /**
   * Fetches the user's latest active roadmap, with tasks and nested resources.
   * If a logged-in user has 0 roadmaps in Supabase but has a guest roadmap in localStorage,
   * it automatically migrates it to Supabase and generates credentials if completed.
   */
  fetchActiveRoadmap: async (userId?: string): Promise<Roadmap | null> => {
    let effectiveUserId = userId;

    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[RoadmapService] fetchActiveRoadmap: Resolving user ID ->', effectiveUserId || 'No Supabase Auth User (Guest/Demo)');

    // If authenticated user exists, query Supabase
    if (effectiveUserId) {
      console.log('[RoadmapService] Querying Supabase for active roadmap for user:', effectiveUserId);
      const { data: roadmaps, error } = await supabase
        .from('roadmaps')
        .select(`
          id,
          title,
          progress_percentage,
          status,
          created_at,
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
        console.error('[RoadmapService] Supabase query error:', error.code, error.message, error.details);
      } else if (roadmaps && roadmaps.length > 0) {
        // 1. Ensure certificates exist in Supabase for all completed roadmaps
        for (const r of roadmaps) {
          if ((r.status === 'completed' || (r.progress_percentage ?? 0) >= 100) && effectiveUserId) {
            try {
              const { CertificateService } = await import('@/features/certificate/certificate.service');
              await CertificateService.getOrCreateCertificate(effectiveUserId, r.title);
            } catch (certErr) {
              console.warn('[RoadmapService] Certificate auto-verification check note:', certErr);
            }
          }
        }

        // 2. Select the most recently created roadmap that is NOT completed
        const activeRoadmapRow = roadmaps.find(
          (r) => r.status !== 'completed' && (r.progress_percentage ?? 0) < 100
        );

        if (activeRoadmapRow) {
          const rawTasks = (activeRoadmapRow.tasks as any[]) || [];
          rawTasks.sort((a, b) => a.order_index - b.order_index);

          const formattedTasks: Task[] = rawTasks.map((t) => ({
            id: t.id,
            orderIndex: t.order_index,
            title: t.title,
            description: t.description || '',
            status: t.status as Task['status'],
            requiresQuiz: Boolean(t.requires_quiz),
            xpReward: t.xp_reward || 50,
            resources: ((t.resources as any[]) || []).map((r) => ({
              id: r.id,
              title: r.title,
              type: r.type as Resource['type'],
              url: r.url,
              duration: r.duration || undefined,
            })),
          }));

          const activeRoadmap: Roadmap = {
            id: activeRoadmapRow.id,
            title: activeRoadmapRow.title,
            progressPercentage: activeRoadmapRow.progress_percentage || 0,
            tasks: formattedTasks,
          };

          console.log('[RoadmapService] Successfully loaded active roadmap from Supabase:', activeRoadmap.title, `(${activeRoadmap.tasks.length} tasks)`);

          // Cache latest active roadmap into localStorage
          try {
            localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(activeRoadmap));
          } catch (_) {}

          return activeRoadmap;
        }

        // If all roadmaps in Supabase are completed:
        console.log('[RoadmapService] All user roadmaps in Supabase are completed (100%). Returning null for active roadmap.');
        try {
          localStorage.removeItem(LOCAL_STORAGE_ROADMAP_KEY);
        } catch (_) {}
        return null;
      } else if (!error && (!roadmaps || roadmaps.length === 0)) {
        // Supabase returned 0 roadmaps for this logged-in user.
        // Check if there is a guest roadmap in localStorage that can be migrated to Supabase.
        try {
          const stored = localStorage.getItem(LOCAL_STORAGE_ROADMAP_KEY);
          if (stored) {
            const guestRoadmap = JSON.parse(stored) as Roadmap;
            if (guestRoadmap && guestRoadmap.title && Array.isArray(guestRoadmap.tasks) && guestRoadmap.tasks.length > 0) {
              console.log('[RoadmapService] Found un-migrated guest roadmap in localStorage for logged-in user. Migrating to Supabase:', guestRoadmap.title);
              const migratedRoadmap = await RoadmapService.migrateGuestRoadmap(effectiveUserId, guestRoadmap);
              if (guestRoadmap.progressPercentage >= 100) {
                try {
                  localStorage.removeItem(LOCAL_STORAGE_ROADMAP_KEY);
                } catch (_) {}
                return null;
              }
              return migratedRoadmap;
            }
          }
        } catch (migrationErr) {
          console.error('[RoadmapService] Error migrating guest roadmap to Supabase:', migrationErr);
        }
      }
    }

    // Fallback: Check local storage for guest/offline roadmap (truly unauthenticated visitor)
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_ROADMAP_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Roadmap;
        if ((parsed.progressPercentage ?? 0) >= 100) {
          console.log('[RoadmapService] Guest roadmap in localStorage is 100% complete. Returning null for active roadmap.');
          return null;
        }
        console.log('[RoadmapService] Loaded active roadmap from local storage:', parsed.title);
        return parsed;
      }
    } catch (e) {
      console.warn('[RoadmapService] Failed to read fallback roadmap from localStorage:', e);
    }

    console.log('[RoadmapService] No active roadmap found.');
    return null;
  },

  /**
   * Migrates a guest/offline roadmap from localStorage into real Supabase rows (profiles, goals, roadmaps, tasks, resources)
   * and generates certificate immediately if progress is 100%.
   */
  migrateGuestRoadmap: async (userId: string, guestRoadmap: Roadmap): Promise<Roadmap> => {
    console.log('[RoadmapService] migrateGuestRoadmap initiating for user:', userId, 'Title:', guestRoadmap.title);

    // 1. Ensure Profile record exists (profiles: id)
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (!existingProfile) {
      await supabase.from('profiles').insert({ id: userId });
    }

    // 2. Create Goal record (goals: user_id, target_role, is_active)
    const isFullyCompleted =
      guestRoadmap.progressPercentage === 100 ||
      (guestRoadmap.tasks.length > 0 && guestRoadmap.tasks.every((t) => t.status === 'completed'));
    const progressPercentage = isFullyCompleted ? 100 : (guestRoadmap.progressPercentage || 0);

    console.log('[RoadmapService] Migration: Creating Goal record...');
    const { data: goalData, error: goalError } = await supabase
      .from('goals')
      .insert({
        user_id: userId,
        target_role: guestRoadmap.title,
        is_active: !isFullyCompleted,
      })
      .select('id')
      .single();

    if (goalError) {
      console.warn('[RoadmapService] Migration Goal insert note:', goalError.message);
    }

    // 3. Create Roadmap record (roadmaps: user_id, goal_id, title, progress_percentage, status)
    console.log('[RoadmapService] Migration: Creating Roadmap record...');
    const { data: roadmapData, error: roadmapError } = await supabase
      .from('roadmaps')
      .insert({
        user_id: userId,
        goal_id: goalData?.id || null,
        title: guestRoadmap.title,
        progress_percentage: progressPercentage,
        status: isFullyCompleted ? 'completed' : 'in_progress',
      })
      .select('id, title, progress_percentage')
      .single();

    if (roadmapError || !roadmapData) {
      console.error('[RoadmapService] Migration Roadmap insert error:', roadmapError);
      throw new Error(`Failed to migrate roadmap: ${roadmapError?.message || 'Unknown database error'}`);
    }

    console.log('[RoadmapService] Migration: Roadmap record created ID:', roadmapData.id);

    // 4. Insert Tasks (tasks: roadmap_id, order_index, title, description, status, requires_quiz, xp_reward - NO user_id)
    console.log('[RoadmapService] Migration: Seeding Tasks...');
    const tasksPayload = guestRoadmap.tasks.map((task, idx) => ({
      roadmap_id: roadmapData.id,
      order_index: task.orderIndex || (idx + 1),
      title: task.title,
      description: task.description || '',
      status: task.status || (idx === 0 ? 'in_progress' : 'locked'),
      requires_quiz: Boolean(task.requiresQuiz),
      xp_reward: task.xpReward || 50,
    }));

    const { data: insertedTasks, error: tasksError } = await supabase
      .from('tasks')
      .insert(tasksPayload)
      .select('id, order_index, title, description, status, requires_quiz, xp_reward');

    if (tasksError || !insertedTasks) {
      console.error('[RoadmapService] Migration Tasks insert error:', tasksError);
      throw new Error(`Failed to migrate roadmap tasks: ${tasksError?.message || 'Unknown tasks error'}`);
    }

    // 5. Insert Resources (resources: task_id, title, type, url, duration - NO user_id)
    console.log('[RoadmapService] Migration: Seeding Resources...');
    const resourcesPayload: any[] = [];
    guestRoadmap.tasks.forEach((guestTask, idx) => {
      const targetOrder = guestTask.orderIndex || (idx + 1);
      const matchedInsertedTask = insertedTasks.find((t) => t.order_index === targetOrder);
      if (matchedInsertedTask && Array.isArray(guestTask.resources) && guestTask.resources.length > 0) {
        guestTask.resources.forEach((r) => {
          resourcesPayload.push({
            task_id: matchedInsertedTask.id,
            title: r.title || 'Learning Resource',
            type: r.type || 'documentation',
            url: r.url || 'https://developer.mozilla.org',
            duration: r.duration || null,
          });
        });
      }
    });

    if (resourcesPayload.length > 0) {
      const { error: resError } = await supabase.from('resources').insert(resourcesPayload);
      if (resError) {
        console.warn('[RoadmapService] Migration Resources insert note:', resError.message);
      }
    }

    // 6. Award XP and initialize streak in progress_tracking (single source of truth for XP & Streak)
    const completedTasks = guestRoadmap.tasks.filter((t) => t.status === 'completed');
    const earnedXp = completedTasks.reduce((sum, t) => sum + (t.xpReward || 50), 0);
    const today = new Date().toISOString().slice(0, 10);

    const { data: existingProgress } = await supabase
      .from('progress_tracking')
      .select('xp_total, streak_count')
      .eq('user_id', userId)
      .maybeSingle();

    const currentXp = existingProgress?.xp_total || 0;
    const currentStreak = existingProgress?.streak_count || 1;

    await supabase
      .from('progress_tracking')
      .upsert({
        user_id: userId,
        xp_total: Math.max(currentXp, earnedXp),
        streak_count: currentStreak,
        last_active_date: today,
        updated_at: new Date().toISOString(),
      });

    // 7. If roadmap reached 100%, generate certificate immediately!
    if (isFullyCompleted) {
      console.log('[RoadmapService] Migrated roadmap is 100% complete! Generating certificate immediately for:', userId, guestRoadmap.title);
      try {
        const { CertificateService } = await import('@/features/certificate/certificate.service');
        await CertificateService.getOrCreateCertificate(userId, guestRoadmap.title);
        console.log('[RoadmapService] Certificate successfully generated upon migration!');
      } catch (certErr) {
        console.error('[RoadmapService] Failed to auto-generate certificate during migration:', certErr);
      }
    }

    // 8. Format the migrated roadmap object and update localStorage
    const formattedTasks: Task[] = insertedTasks.map((t) => ({
      id: t.id,
      orderIndex: t.order_index,
      title: t.title,
      description: t.description || '',
      status: t.status as Task['status'],
      requiresQuiz: Boolean(t.requires_quiz),
      xpReward: t.xp_reward || 50,
      resources: resourcesPayload
        .filter((r) => r.task_id === t.id)
        .map((r, rIdx) => ({
          id: `res_mig_${r.task_id}_${rIdx}`,
          title: r.title,
          type: r.type,
          url: r.url,
          duration: r.duration || undefined,
        })),
    }));

    const completeRoadmap: Roadmap = {
      id: roadmapData.id,
      title: roadmapData.title,
      progressPercentage: progressPercentage,
      tasks: formattedTasks,
    };

    if (isFullyCompleted) {
      try {
        localStorage.removeItem(LOCAL_STORAGE_ROADMAP_KEY);
      } catch (_) {}
    } else {
      try {
        localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(completeRoadmap));
      } catch (_) {}
    }

    console.log('[RoadmapService] migrateGuestRoadmap completed successfully!');
    return completeRoadmap;
  },

  /**
   * Creates a starter roadmap with goal, modules, and resources based on onboarding data.
   */
  createStarterRoadmap: async (userId: string, onboardingData: OnboardingData): Promise<Roadmap> => {
    console.log('[RoadmapService] createStarterRoadmap initiated for user:', userId, 'Goal:', onboardingData.targetGoal);

    // 1. Ensure Profile row exists and update skills (profiles: id, skills)
    console.log('[RoadmapService] 1/5: Upserting profile record...');
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        skills: onboardingData.currentSkills || [],
      });

    if (profileError) {
      console.warn('[RoadmapService] Profile upsert warning:', profileError.message);
    }

    // 1b. Ensure progress_tracking row exists (preserving existing XP and streak)
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

    // 2. Create Goal record (goals: user_id, target_role, is_active, current_skills)
    console.log('[RoadmapService] 2/5: Creating Goal record...');
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
      console.error('[RoadmapService] Goal insert error:', goalError.code, goalError.message);
    } else {
      console.log('[RoadmapService] Goal record created ID:', goalData?.id);
    }

    // 3. Create Roadmap record (roadmaps: user_id, goal_id, title, progress_percentage, status)
    console.log('[RoadmapService] 3/5: Creating Roadmap record...');
    const { data: roadmapData, error: roadmapError } = await supabase
      .from('roadmaps')
      .insert({
        user_id: userId,
        goal_id: goalData?.id || null,
        title: onboardingData.targetGoal,
        progress_percentage: 0,
        status: 'in_progress',
      })
      .select('id, title, progress_percentage')
      .single();

    if (roadmapError || !roadmapData) {
      console.error('[RoadmapService] Roadmap insert error:', roadmapError?.code, roadmapError?.message);
      throw new Error(`Failed to create roadmap: ${roadmapError?.message || 'Unknown database error'}`);
    }

    console.log('[RoadmapService] Roadmap record created ID:', roadmapData.id);

    // 4. Seed initial sequential tasks (tasks: roadmap_id, order_index, title, description, status, requires_quiz, xp_reward - NO user_id)
    console.log('[RoadmapService] 4/5: Seeding Roadmap Tasks...');
    const starterTasksPayload = [
      {
        roadmap_id: roadmapData.id,
        order_index: 1,
        title: `Fundamentals of ${onboardingData.targetGoal}`,
        description: `Understand the core architecture, key terminology, and foundational design principles of ${onboardingData.targetGoal}.`,
        status: 'in_progress',
        requires_quiz: true,
        xp_reward: 50,
      },
      {
        roadmap_id: roadmapData.id,
        order_index: 2,
        title: 'Advanced Tooling & Automation',
        description: 'Master modern development workflows, automated pipelines, and component modularity.',
        status: 'locked',
        requires_quiz: true,
        xp_reward: 100,
      },
      {
        roadmap_id: roadmapData.id,
        order_index: 3,
        title: 'Production Capstone Deliverable',
        description: 'Build and deploy a complete, scalable capstone project deliverable verified by repository URL.',
        status: 'locked',
        requires_quiz: false,
        xp_reward: 150,
      },
    ];

    const { data: insertedTasks, error: tasksError } = await supabase
      .from('tasks')
      .insert(starterTasksPayload)
      .select('id, order_index, title, description, status, requires_quiz, xp_reward');

    if (tasksError || !insertedTasks) {
      console.error('[RoadmapService] Tasks insert error:', tasksError?.code, tasksError?.message);
      throw new Error(`Failed to create roadmap tasks: ${tasksError?.message || 'Unknown tasks error'}`);
    }

    console.log('[RoadmapService] Inserted tasks count:', insertedTasks.length);

    // 5. Seed initial resources for Task 1 and Task 2 (resources: task_id, title, type, url, duration - NO user_id)
    console.log('[RoadmapService] 5/5: Seeding Resources...');
    const task1 = insertedTasks.find((t) => t.order_index === 1);
    const task2 = insertedTasks.find((t) => t.order_index === 2);

    const resourcesPayload = [];
    if (task1) {
      resourcesPayload.push(
        {
          task_id: task1.id,
          title: `${onboardingData.targetGoal} Architecture 101`,
          type: 'video',
          url: 'https://youtube.com',
          duration: '10m',
        },
        {
          task_id: task1.id,
          title: 'Official Documentation & Standards',
          type: 'documentation',
          url: 'https://developer.mozilla.org',
          duration: '15m read',
        }
      );
    }
    if (task2) {
      resourcesPayload.push({
        task_id: task2.id,
        title: 'Workflow Automation Deep Dive',
        type: 'video',
        url: 'https://youtube.com',
        duration: '25m',
      });
    }

    if (resourcesPayload.length > 0) {
      const { error: resError } = await supabase.from('resources').insert(resourcesPayload);
      if (resError) {
        console.warn('[RoadmapService] Resources insert warning:', resError.message);
      }
    }

    // Retrieve the newly created roadmap from Supabase
    const completeRoadmap = await RoadmapService.fetchActiveRoadmap(userId);
    if (!completeRoadmap) {
      throw new Error('Roadmap was created but could not be fetched.');
    }

    // Save copy in localStorage as instant cache
    try {
      localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(completeRoadmap));
    } catch (_) {}

    console.log('[RoadmapService] createStarterRoadmap completed successfully!');
    return completeRoadmap;
  },

  /**
   * Generates a starter roadmap in local storage for guest/offline sessions.
   */
  createGuestStarterRoadmap: (onboardingData: OnboardingData): Roadmap => {
    console.log('[RoadmapService] Creating guest starter roadmap for goal:', onboardingData.targetGoal);
    const guestRoadmap: Roadmap = {
      id: `rmp_guest_${Date.now()}`,
      title: onboardingData.targetGoal,
      progressPercentage: 0,
      tasks: [
        {
          id: `tsk_guest_1`,
          orderIndex: 1,
          title: `Fundamentals of ${onboardingData.targetGoal}`,
          description: `Understand the core architecture, key terminology, and foundational design principles of ${onboardingData.targetGoal}.`,
          status: 'in_progress',
          requiresQuiz: true,
          xpReward: 50,
          resources: [
            {
              id: 'res_1',
              title: `${onboardingData.targetGoal} Architecture 101`,
              type: 'video',
              url: 'https://youtube.com',
              duration: '10m',
            },
            {
              id: 'res_2',
              title: 'Official Documentation & Standards',
              type: 'documentation',
              url: 'https://developer.mozilla.org',
              duration: '15m read',
            },
          ],
        },
        {
          id: `tsk_guest_2`,
          orderIndex: 2,
          title: 'Advanced Tooling & Automation',
          description: 'Master modern development workflows, automated pipelines, and component modularity.',
          status: 'locked',
          requiresQuiz: true,
          xpReward: 100,
          resources: [
            {
              id: 'res_3',
              title: 'Workflow Automation Deep Dive',
              type: 'video',
              url: 'https://youtube.com',
              duration: '25m',
            },
          ],
        },
        {
          id: `tsk_guest_3`,
          orderIndex: 3,
          title: 'Production Capstone Deliverable',
          description: 'Build and deploy a complete, scalable capstone project deliverable verified by repository URL.',
          status: 'locked',
          requiresQuiz: false,
          xpReward: 150,
          resources: [],
        },
      ],
    };

    try {
      localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(guestRoadmap));
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

    // If unauthenticated guest session, update localStorage
    if (!effectiveUserId || taskId.startsWith('tsk_guest_')) {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_ROADMAP_KEY);
        if (stored) {
          const roadmap = JSON.parse(stored) as Roadmap;
          const updatedTasks = roadmap.tasks.map((task, idx, arr) => {
            if (task.id === taskId) {
              return { ...task, status: 'completed' as const };
            }
            const prevTask = arr[idx - 1];
            if (prevTask && prevTask.id === taskId && task.status === 'locked') {
              return { ...task, status: 'in_progress' as const };
            }
            return task;
          });

          const completedCount = updatedTasks.filter((t) => t.status === 'completed').length;
          const progressPercentage = Math.round((completedCount / updatedTasks.length) * 100);

          const updatedRoadmap: Roadmap = {
            ...roadmap,
            progressPercentage,
            tasks: updatedTasks,
          };

          localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(updatedRoadmap));

          // If roadmap reached 100% and we have an authenticated user, generate a certificate
          if (progressPercentage === 100 && effectiveUserId) {
            try {
              const { CertificateService } = await import('@/features/certificate/certificate.service');
              await CertificateService.getOrCreateCertificate(effectiveUserId, roadmap.title);
            } catch (certErr) {
              console.error('[RoadmapService] Failed to generate certificate for guest/cached roadmap:', certErr);
            }
          }

          return { success: true, progressPercentage };
        }
      } catch (e) {
        console.warn('[RoadmapService] Failed to update guest task:', e);
      }
    }

    // 1. Mark task completed in Supabase (tasks has NO user_id column)
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

    // 2. Fetch all tasks for this roadmap to calculate progression
    const { data: allTasks, error: allTasksError } = await supabase
      .from('tasks')
      .select('id, order_index, status')
      .eq('roadmap_id', completedTask.roadmap_id)
      .order('order_index', { ascending: true });

    if (allTasksError || !allTasks) {
      throw allTasksError;
    }

    // 3. Find and unlock next locked task (tasks has NO user_id column)
    const nextLockedTask = allTasks.find(
      (t) => t.order_index > completedTask.order_index && t.status === 'locked'
    );

    if (nextLockedTask) {
      await supabase
        .from('tasks')
        .update({ status: 'in_progress' })
        .eq('id', nextLockedTask.id);
    }

    // 4. Calculate updated progress percentage
    const completedCount = allTasks.filter(
      (t) => t.id === taskId || t.status === 'completed'
    ).length;
    const progressPercentage = Math.round((completedCount / allTasks.length) * 100);

    // 5. Update roadmap progress
    await supabase
      .from('roadmaps')
      .update({
        progress_percentage: progressPercentage,
        status: progressPercentage === 100 ? 'completed' : 'in_progress',
      })
      .eq('id', completedTask.roadmap_id);

    // 5b. If roadmap just hit 100%, generate a certificate
    if (progressPercentage === 100 && effectiveUserId) {
      const { data: roadmapData } = await supabase
        .from('roadmaps')
        .select('title')
        .eq('id', completedTask.roadmap_id)
        .single();

      if (roadmapData?.title) {
        const { CertificateService } = await import('@/features/certificate/certificate.service');
        await CertificateService.getOrCreateCertificate(effectiveUserId, roadmapData.title);
      }
    }

    // 6. Award XP and update streak in progress_tracking (single source of truth for XP & Streak)
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

    // 1. Always cache in local projects storage for instant Portfolio reflection
    try {
      const existingProjectsRaw = localStorage.getItem('skillora_user_projects');
      const existingProjects = existingProjectsRaw ? JSON.parse(existingProjectsRaw) : [];
      // Deduplicate by URL or title
      const filtered = existingProjects.filter((p: any) =>
        repoUrl ? p.url !== repoUrl : p.title !== title
      );
      filtered.unshift(projectItem);
      localStorage.setItem('skillora_user_projects', JSON.stringify(filtered));

      // Also update cached profile if present
      const cachedProfileRaw = localStorage.getItem('skillora_user_profile');
      if (cachedProfileRaw) {
        const cachedProfile = JSON.parse(cachedProfileRaw);
        cachedProfile.projects = filtered;
        localStorage.setItem('skillora_user_profile', JSON.stringify(cachedProfile));
      }
    } catch (e) {
      console.warn('[RoadmapService] LocalStorage portfolio update note:', e);
    }

    // 2. Persist to Supabase if authenticated
    if (effectiveUserId && !taskId.startsWith('tsk_guest_')) {
      // A. Insert into project_submissions table
      try {
        const { error: subError } = await supabase.from('project_submissions').insert({
          user_id: effectiveUserId,
          task_id: taskId,
          title: title,
          repository_url: repoUrl || null,
          notes: notes || null,
          status: 'submitted',
          created_at: new Date().toISOString(),
        });
        if (subError) {
          console.warn('[RoadmapService] project_submissions insert note:', subError.message);
        }
      } catch (err) {
        console.warn('[RoadmapService] project_submissions exception:', err);
      }

      // B. Publish to Supabase projects table
      try {
        const { error: projError } = await supabase.from('projects').insert({
          user_id: effectiveUserId,
          title: title,
          description: projectDescription,
          url: repoUrl || null,
          tags: ['Capstone Deliverable', 'Verified Project'],
          is_public: true,
          created_at: new Date().toISOString(),
        });
        if (projError) {
          console.warn('[RoadmapService] projects table insert note:', projError.message);
        }
      } catch (err) {
        console.warn('[RoadmapService] projects table exception:', err);
      }
    }

    // 3. Mark the task completed, award XP, and unlock next module
    const result = await RoadmapService.completeTask(taskId, effectiveUserId);
    return result;
  },
};


