import { supabase } from '@/lib/supabase';
import { Roadmap, Task, Resource } from '../types/roadmap.types';
import { OnboardingData } from '@/features/onboarding/schemas/onboarding.schemas';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { PYTHON_BEGINNER_TASKS } from '../data/python';
import { CertificateService } from '@/features/certificate/certificate.service';

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

          // SELF-HEALING: If no task is 'in_progress' and not all tasks are completed,
          // unlock the first uncompleted task!
          const hasInProgress = formattedTasks.some((t) => t.status === 'in_progress');
          const firstUncompleted = formattedTasks.find((t) => t.status !== 'completed');
          if (!hasInProgress && firstUncompleted) {
            firstUncompleted.status = 'in_progress';
            if (effectiveUserId && !firstUncompleted.id.startsWith('tsk_guest_')) {
              supabase
                .from('tasks')
                .update({ status: 'in_progress' })
                .eq('id', firstUncompleted.id)
                .then(({ error: patchErr }) => {
                  if (patchErr) {
                    console.warn('[RoadmapService] Self-healing task unlock warning:', patchErr);
                  } else {
                    console.log('[RoadmapService] Self-healed locked task to in_progress:', firstUncompleted.id, firstUncompleted.title);
                  }
                });
            }
          }

          // Calculate correct progress_percentage based on completed tasks count
          const completedCount = formattedTasks.filter((t) => t.status === 'completed').length;
          const calculatedProgress = formattedTasks.length > 0 
            ? Math.round((completedCount / formattedTasks.length) * 100)
            : 0;

          const activeRoadmap: Roadmap = {
            id: activeRoadmapRow.id,
            title: activeRoadmapRow.title,
            progressPercentage: calculatedProgress,
            tasks: formattedTasks,
          };

          console.log('[RoadmapService] Successfully loaded active roadmap from Supabase:', activeRoadmap.title, `(${activeRoadmap.tasks.length} tasks, ${activeRoadmap.progressPercentage}% progress)`);

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
              return migratedRoadmap || guestRoadmap;
            }
          }
        } catch (migrationErr) {
          console.error('[RoadmapService] Error migrating guest roadmap to Supabase:', migrationErr);
          const stored = localStorage.getItem(LOCAL_STORAGE_ROADMAP_KEY);
          if (stored) {
            try {
              return JSON.parse(stored);
            } catch (_) {}
          }
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

        if (Array.isArray(parsed.tasks) && parsed.tasks.length > 0) {
          parsed.tasks.sort((a, b) => a.orderIndex - b.orderIndex);
          const hasInProgress = parsed.tasks.some((t) => t.status === 'in_progress');
          const firstUncompleted = parsed.tasks.find((t) => t.status !== 'completed');
          if (!hasInProgress && firstUncompleted) {
            firstUncompleted.status = 'in_progress';
            localStorage.setItem(LOCAL_STORAGE_ROADMAP_KEY, JSON.stringify(parsed));
          }
          const completedCount = parsed.tasks.filter((t) => t.status === 'completed').length;
          parsed.progressPercentage = Math.round((completedCount / parsed.tasks.length) * 100);
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

    // 2. Create Goal record (goals: user_id, target_role, is_active, current_skills)
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

    // 3. Create Roadmap record (roadmaps: user_id, goal_id, title, progress_percentage, status)
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

    // Ensure at least one task is in_progress if roadmap is not fully completed
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

    console.log('[RoadmapService] Migration: Inserted tasks count:', insertedTasks.length);

    // 5. Insert Resources (resources: task_id, title, type, url, duration - NO user_id)
    const resourcesPayload: any[] = [];
    guestRoadmap.tasks.forEach((task) => {
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
      title: roadmapData.title,
      progressPercentage,
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
   * Helper to generate personalized starter tasks and resources tailored to the user's selected persona and skills.
   */
  getPersonalizedStarterData: (onboardingData: OnboardingData) => {
    const userType = onboardingData.userType || 'university_student';
    const targetGoal = (onboardingData.targetGoal || '').trim();
    const skillsList = onboardingData.currentSkills || [];
    const skillsText = skillsList.length > 0 ? skillsList.slice(0, 3).join(', ') : '';

    // Check if the user is studying Python
    const isPythonSelected = 
      skillsList.some((s) => s.toLowerCase().includes('python')) ||
      targetGoal.toLowerCase().includes('python');

    if (isPythonSelected) {
      return {
        isPython: true,
        title: 'Python Masterclass (Beginner to Advanced)',
        tasks: PYTHON_BEGINNER_TASKS.map((t, idx) => ({
          orderIndex: t.orderIndex || (idx + 1),
          title: t.title,
          description: t.description,
          status: t.status,
          requiresQuiz: t.requiresQuiz,
          xpReward: t.xpReward,
          resources: (t.resources || []).map((r) => ({
            title: r.title,
            type: (r.type as any) || 'documentation',
            url: r.url || 'https://docs.python.org/3/',
            duration: r.duration || '20m',
          })),
        })),
      };
    }

    // Resolve clean domain/skill name without personal names
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
        isPython: false,
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
                title: `${cleanSkill} Commercial Blueprint & Client Service Standards`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '15m',
              },
              {
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
                title: `High-Velocity Client Project Execution & Automation in ${cleanSkill}`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '30m',
              },
              {
                title: 'Standard Operating Procedures & Client Hand-Off Guide',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '15m read',
              },
            ],
          },
          {
            orderIndex: 3,
            title: `High-Ticket Client Portfolio Deliverable for ${cleanSkill}`,
            description: `Construct a live, verified client-grade deliverable in ${cleanSkill} demonstrating measurable results, performance optimization, and polished commercial delivery.`,
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
        isPython: false,
        title: `${cleanSkill} Career Transition Track`,
        tasks: [
          {
            orderIndex: 1,
            title: `Transferable Skills Mapping & Core ${cleanSkill} Competencies`,
            description: `Bridge your previous background${skillsText ? ` and experience in ${skillsText}` : ''} to rapidly acquire the essential foundations of ${cleanSkill}.`,
            status: 'in_progress' as const,
            requiresQuiz: true,
            xpReward: 50,
            resources: [
              {
                title: `Career Transition Roadmap: Fast-Tracking ${cleanSkill}`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '12m',
              },
              {
                title: 'Core Competencies & Industry Landscape Overview',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '15m read',
              },
            ],
          },
          {
            orderIndex: 2,
            title: `Industry Toolchains & Applied ${cleanSkill} Practice`,
            description: `Adopt industry-standard development workflows, collaborative tools, and practical problem-solving methodologies in ${cleanSkill}.`,
            status: 'locked' as const,
            requiresQuiz: true,
            xpReward: 100,
            resources: [
              {
                title: `Professional Tooling & Team Workflows in ${cleanSkill}`,
                type: 'video' as const,
                url: 'https://youtube.com',
                duration: '25m',
              },
              {
                title: 'Industry Patterns, Architecture & Coding Standards',
                type: 'documentation' as const,
                url: 'https://developer.mozilla.org',
                duration: '18m read',
              },
            ],
          },
          {
            orderIndex: 3,
            title: `Industry-Transition Capstone & Verified Portfolio Project for ${cleanSkill}`,
            description: `Build and launch a comprehensive capstone deliverable in ${cleanSkill} proving production readiness and domain competence to hiring managers.`,
            status: 'locked' as const,
            requiresQuiz: false,
            xpReward: 150,
            resources: [],
          },
        ],
      };
    }

    // Default: University Student
    return {
      isPython: false,
      title: `${cleanSkill} Academic & Industry Foundation Track`,
      tasks: [
        {
          orderIndex: 1,
          title: `Core Foundations & Architecture of ${cleanSkill}`,
          description: `Master the fundamental architectural principles, theoretical models, and core syntax of ${cleanSkill}${skillsText ? ` while building on your foundation in ${skillsText}` : ''}.`,
          status: 'in_progress' as const,
          requiresQuiz: true,
          xpReward: 50,
          resources: [
            {
              title: `${cleanSkill} Core Architecture & Fundamentals`,
              type: 'video' as const,
              url: 'https://youtube.com',
              duration: '10m',
            },
            {
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
              title: `Lab Project Walkthrough & Implementation Guide in ${cleanSkill}`,
              type: 'video' as const,
              url: 'https://youtube.com',
              duration: '25m',
            },
            {
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
   * Creates a starter roadmap with goal, modules, and resources based on onboarding data.
   */
  createStarterRoadmap: async (userId: string, onboardingData: OnboardingData): Promise<Roadmap> => {
    console.log('[RoadmapService] createStarterRoadmap initiated for user:', userId, 'Goal:', onboardingData.targetGoal, 'UserType:', onboardingData.userType);

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

    console.log('[RoadmapService] 3/5: Creating Roadmap record...');
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
      .select('id, title, progress_percentage')
      .single();

    if (roadmapError || !roadmapData) {
      console.error('[RoadmapService] Roadmap insert error:', roadmapError?.code, roadmapError?.message);
      throw new Error(`Failed to create roadmap: ${roadmapError?.message || 'Unknown database error'}`);
    }

    console.log('[RoadmapService] Roadmap record created ID:', roadmapData.id);

    // 4. Seed personalized sequential tasks (tasks: roadmap_id, order_index, title, description, status, requires_quiz, xp_reward - NO user_id)
    console.log('[RoadmapService] 4/5: Seeding Personalized Roadmap Tasks for UserType:', onboardingData.userType);

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
      console.error('[RoadmapService] Tasks insert error:', tasksError?.code, tasksError?.message);
      throw new Error(`Failed to create roadmap tasks: ${tasksError?.message || 'Unknown tasks error'}`);
    }

    console.log('[RoadmapService] Inserted tasks count:', insertedTasks.length);

    // 5. Seed personalized resources for tasks (resources: task_id, title, type, url, duration - NO user_id)
    console.log('[RoadmapService] 5/5: Seeding Personalized Resources...');
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
    console.log('[RoadmapService] Creating guest starter roadmap for goal:', onboardingData.targetGoal, 'UserType:', onboardingData.userType);
    const personalizedData = RoadmapService.getPersonalizedStarterData(onboardingData);
    const roadmapTitle = personalizedData.title || onboardingData.targetGoal;

    const guestRoadmap: Roadmap = {
      id: `rmp_guest_${Date.now()}`,
      title: roadmapTitle,
      progressPercentage: 0,
      tasks: personalizedData.tasks.map((task) => ({
        id: `tsk_guest_${task.orderIndex}`,
        orderIndex: task.orderIndex,
        title: task.title,
        description: task.description,
        status: task.status,
        requiresQuiz: task.requiresQuiz,
        xpReward: task.xpReward,
        resources: task.resources.map((r, rIdx) => ({
          id: `res_guest_${task.orderIndex}_${rIdx + 1}`,
          title: r.title,
          type: r.type,
          url: r.url,
          duration: r.duration || undefined,
        })),
      })),
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
          const sorted = [...(roadmap.tasks || [])].sort((a, b) => a.orderIndex - b.orderIndex);
          const currentIdx = sorted.findIndex((t) => t.id === taskId);

          const updatedTasks = sorted.map((task) => {
            if (task.id === taskId) {
              return { ...task, status: 'completed' as const };
            }
            return task;
          });

          // Unlock next locked or pending task
          const nextTask = updatedTasks.find((t, idx) => idx > currentIdx && t.status !== 'completed') ||
                           updatedTasks.find((t) => t.status === 'locked');
          if (nextTask) {
            nextTask.status = 'in_progress';
          }

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

    // 3. Find and unlock next locked/pending task (tasks has NO user_id column)
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


