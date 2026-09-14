import { supabase } from '@/lib/supabase';
import { MarketTrend, SkillGap, RecommendedSkill, AiSkillGapAnalysisResult, NextBestAction } from '../types/gps.types';
import { RoadmapService } from '@/features/roadmap/services/roadmap.service';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { Roadmap, Task, Resource } from '@/features/roadmap/types/roadmap.types';

// Benchmark skills map tailored to user's targeted career goal
const DOMAIN_SKILL_BENCHMARKS: Array<{
  matcher: RegExp;
  benchmarkSkills: string[];
  trends: Array<{ skill: string; demandScore: number; direction: 'up' | 'stable' | 'down'; category: string }>;
}> = [
  {
    matcher: /shopify|e-commerce|ecommerce|liquid|storefront/i,
    benchmarkSkills: [
      'Shopify Liquid',
      'Storefront GraphQL API',
      'Hydrogen & Oxygen (Headless)',
      'Meta Ads & Pixel Tracking',
      'Theme App Extensions',
      'Webhooks & Shopify Flow'
    ],
    trends: [
      { skill: 'Shopify Headless (Hydrogen)', demandScore: 94, direction: 'up', category: 'E-commerce' },
      { skill: 'Generative AI Catalog Workflows', demandScore: 89, direction: 'up', category: 'Automation' },
      { skill: 'Custom Liquid Storefronts', demandScore: 78, direction: 'stable', category: 'E-commerce' },
      { skill: 'Legacy PHP Plugins', demandScore: 38, direction: 'down', category: 'Backend' }
    ]
  },
  {
    matcher: /python|ai|machine learning|data|nlp|llm/i,
    benchmarkSkills: [
      'Python Fundamentals',
      'Prompt Engineering & LLM APIs',
      'LangChain & AI Agents',
      'Vector Databases & Embeddings',
      'FastAPI Microservices',
      'Model Fine-Tuning & Evaluation'
    ],
    trends: [
      { skill: 'Autonomous AI Agents', demandScore: 96, direction: 'up', category: 'AI & Automation' },
      { skill: 'Prompt Optimization & Eval', demandScore: 91, direction: 'up', category: 'GenAI' },
      { skill: 'FastAPI Microservices', demandScore: 85, direction: 'stable', category: 'Backend' },
      { skill: 'Manual Data Labeling', demandScore: 32, direction: 'down', category: 'Data' }
    ]
  },
  {
    matcher: /full-stack|frontend|react|web|javascript|typescript/i,
    benchmarkSkills: [
      'TypeScript & Modern JavaScript',
      'React & Next.js Architecture',
      'REST & GraphQL APIs',
      'Tailwind CSS & Design Systems',
      'PostgreSQL & Supabase',
      'CI/CD & Cloud Deployment'
    ],
    trends: [
      { skill: 'Full-Stack TypeScript', demandScore: 93, direction: 'up', category: 'Web' },
      { skill: 'Serverless Edge Functions', demandScore: 88, direction: 'up', category: 'Cloud' },
      { skill: 'Tailwind Design Systems', demandScore: 82, direction: 'stable', category: 'Frontend' },
      { skill: 'jQuery Legacy Maintenance', demandScore: 25, direction: 'down', category: 'Frontend' }
    ]
  }
];

const DEFAULT_BENCHMARK = {
  benchmarkSkills: [
    'Artificial Intelligence Tools',
    'Modern Workflow Automation',
    'Full-Stack Architecture',
    'Cloud Data & APIs',
    'Production Deployment'
  ],
  trends: [
    { skill: 'AI-Powered Workflow Automation', demandScore: 92, direction: 'up', category: 'Automation' },
    { skill: 'Full-Stack Cloud Architecture', demandScore: 87, direction: 'up', category: 'Engineering' },
    { skill: 'Modern API Design', demandScore: 80, direction: 'stable', category: 'Backend' },
    { skill: 'Monolithic Architecture', demandScore: 40, direction: 'down', category: 'Architecture' }
  ]
};

export const CareerGpsService = {
  /**
   * Loads user profile skills, active roadmap goal, and computes dynamic SkillGap,
   * Recommendations, and Market Trends from Supabase.
   */
  fetchCareerGpsData: async (userId?: string): Promise<{
    skillGap: SkillGap;
    recommendations: RecommendedSkill[];
    trends: MarketTrend[];
  }> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[CareerGpsService] fetchCareerGpsData for user:', effectiveUserId || 'Guest');

    // 1. Fetch User Profile (profiles: id, skills)
    let userSkills: string[] = [];
    if (effectiveUserId) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('skills')
        .eq('id', effectiveUserId)
        .maybeSingle();

      if (profile?.skills && Array.isArray(profile.skills)) {
        userSkills = profile.skills;
      }
    }

    // 2. Fetch Active Roadmap and Tasks
    const activeRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);
    const targetRole = activeRoadmap?.title || 'Full-Stack AI & Software Engineer';
    const existingTaskTitles = activeRoadmap?.tasks.map(t => t.title.toLowerCase()) || [];

    // 3. Find Matching Domain Benchmark
    const matchedBenchmark = DOMAIN_SKILL_BENCHMARKS.find(b => b.matcher.test(targetRole)) || DEFAULT_BENCHMARK;
    const benchmarkSkills = matchedBenchmark.benchmarkSkills;

    // 4. Calculate Dynamic Skill Gap
    // User current skills that match or are acquired
    const currentSkills = userSkills.length > 0 
      ? userSkills 
      : benchmarkSkills.slice(0, 2); // default starting baseline if user hasn't selected any yet

    // Missing skills: benchmark skills not yet in currentSkills
    const missingSkills = benchmarkSkills.filter(
      bSkill => !currentSkills.some(uSkill => uSkill.toLowerCase().includes(bSkill.toLowerCase()) || bSkill.toLowerCase().includes(uSkill.toLowerCase()))
    );

    // Dynamic match calculation
    const totalRequired = currentSkills.length + missingSkills.length;
    const matchPercentage = totalRequired > 0 
      ? Math.min(100, Math.max(35, Math.round((currentSkills.length / totalRequired) * 100))) 
      : 65;

    const skillGap: SkillGap = {
      targetRole,
      matchPercentage,
      currentSkills,
      missingSkills: missingSkills.length > 0 ? missingSkills : ['Advanced Architecture & Scaling', 'AI Security & Guardrails'],
    };

    // 5. Generate Dynamic Recommendations to bridge the gap
    const skillsToRecommend = missingSkills.length > 0 
      ? missingSkills.slice(0, 3) 
      : ['Advanced Architecture & Scaling', 'AI Security & Guardrails'];

    const recommendations: RecommendedSkill[] = skillsToRecommend.map((skill, index) => {
      const isAlreadyInRoadmap = existingTaskTitles.some(title => title.includes(skill.toLowerCase()));
      return {
        id: `rec_${index + 1}_${skill.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
        title: skill,
        reason: `Required by 85%+ of high-ticket ${targetRole} job postings and client contracts.`,
        estimatedHours: 10 + (index * 5),
        isAdded: isAlreadyInRoadmap,
      };
    });

    // 6. Fetch Live Market Trends from Supabase table or domain fallback
    let trends: MarketTrend[] = [];
    try {
      const { data: dbTrends, error: trendsError } = await supabase
        .from('market_trends')
        .select('*')
        .order('demand_score', { ascending: false });

      if (!trendsError && dbTrends && dbTrends.length > 0) {
        trends = dbTrends.map((t) => ({
          id: String(t.id),
          skill: t.skill,
          demandScore: Number(t.demand_score || 80),
          direction: (t.direction as MarketTrend['direction']) || 'up',
          category: t.category || 'Technology',
        }));
      }
    } catch (e) {
      console.warn('[CareerGpsService] market_trends table query note:', e);
    }

    if (trends.length === 0) {
      trends = matchedBenchmark.trends.map((t, idx) => ({
        id: `trend_${idx + 1}`,
        skill: t.skill,
        demandScore: t.demandScore,
        direction: t.direction as MarketTrend['direction'],
        category: t.category,
      }));
    }


    return {
      skillGap,
      recommendations,
      trends,
    };
  },

  /**
   * Adds a recommended skill into the user's active roadmap as a real task in Supabase.
   */
  addSkillToRoadmap: async (userId: string | undefined, skill: RecommendedSkill): Promise<boolean> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    console.log('[CareerGpsService] addSkillToRoadmap called for skill:', skill.title, 'User:', effectiveUserId);

    // 1. Fetch user's active roadmap (which auto-migrates guest roadmaps if effectiveUserId exists)
    let activeRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);
    
    // If user has no active roadmap, initialize a starter one
    if (!activeRoadmap) {
      console.log('[CareerGpsService] No active roadmap found. Initializing new roadmap for skill:', skill.title);
      if (effectiveUserId) {
        activeRoadmap = await RoadmapService.createStarterRoadmap(effectiveUserId, {
          userType: 'freelancer',
          targetGoal: skill.title,
          currentSkills: [skill.title],
          skillLevel: 'beginner',
        });
      } else {
        activeRoadmap = RoadmapService.createGuestStarterRoadmap({
          userType: 'freelancer',
          targetGoal: skill.title,
          currentSkills: [skill.title],
          skillLevel: 'beginner',
        });
      }
    }

    if (!activeRoadmap) {
      console.warn('[CareerGpsService] Failed to find or create active roadmap.');
      return false;
    }

    // 2. Determine sequential order index and initial status
    const nextOrderIndex = (activeRoadmap.tasks.length || 0) + 1;
    const hasAnyInProgress = activeRoadmap.tasks.some((t) => t.status === 'in_progress');
    const hasAnyPending = activeRoadmap.tasks.some((t) => t.status !== 'completed');
    // If no module is currently in progress, unlock this newly added module immediately
    const initialStatus: Task['status'] = (!hasAnyInProgress || !hasAnyPending) ? 'in_progress' : 'locked';

    // 3. Insert task into Supabase tasks table if authenticated and roadmap is persisted in Supabase (tasks: roadmap_id, order_index, title, description, status, requires_quiz, xp_reward - NO user_id)
    if (effectiveUserId && !activeRoadmap.id.startsWith('rmp_guest_')) {
      const { data: newTask, error: taskError } = await supabase
        .from('tasks')
        .insert({
          roadmap_id: activeRoadmap.id,
          order_index: nextOrderIndex,
          title: `Mastery: ${skill.title}`,
          description: `${skill.reason} Focused deep dive with verified code examples and hands-on exercises (~${skill.estimatedHours}h).`,
          status: initialStatus,
          requires_quiz: true,
          xp_reward: 100,
        })
        .select('id, order_index, title, description, status, requires_quiz, xp_reward')
        .single();

      if (taskError || !newTask) {
        console.error('[CareerGpsService] Failed to insert roadmap task in Supabase:', taskError);
        throw taskError;
      }

      console.log('[CareerGpsService] Inserted new task in Supabase with UUID:', newTask.id, 'Status:', initialStatus);

      // Seed resources for the new module (resources: task_id, title, type, url, duration - NO user_id)
      const resourcesPayload = [
        {
          task_id: newTask.id,
          title: `${skill.title} Architecture & Standards`,
          type: 'documentation',
          url: 'https://developer.mozilla.org',
          duration: `${skill.estimatedHours}h curriculum`,
        },
        {
          task_id: newTask.id,
          title: `Practical Application Walkthrough`,
          type: 'video',
          url: 'https://youtube.com',
          duration: '20m',
        }
      ];

      const { data: insertedResources, error: resError } = await supabase
        .from('resources')
        .insert(resourcesPayload)
        .select('id, title, type, url, duration');

      if (resError) {
        console.warn('[CareerGpsService] Warning inserting resources for new task:', resError.message);
      }

      // Keep local storage cache synchronized with real Supabase UUIDs
      try {
        const formattedNewTask: Task = {
          id: newTask.id,
          orderIndex: newTask.order_index,
          title: newTask.title,
          description: newTask.description || '',
          status: newTask.status as Task['status'],
          requiresQuiz: Boolean(newTask.requires_quiz),
          xpReward: newTask.xp_reward || 100,
          resources: (insertedResources || []).map((r) => ({
            id: r.id,
            title: r.title,
            type: r.type as Resource['type'],
            url: r.url,
            duration: r.duration || undefined,
          })),
        };

        const updatedTasks = [...activeRoadmap.tasks, formattedNewTask];
        const completedCount = updatedTasks.filter((t) => t.status === 'completed').length;
        const progressPercentage = Math.round((completedCount / updatedTasks.length) * 100);

        const updatedRoadmap: Roadmap = {
          ...activeRoadmap,
          progressPercentage,
          tasks: updatedTasks,
        };
        localStorage.setItem('skillora_active_roadmap', JSON.stringify(updatedRoadmap));
      } catch (_) {}
    } else {
      // Offline/Guest local storage fallback — ONLY for truly unauthenticated visitors
      const guestRoadmap = activeRoadmap;
      guestRoadmap.tasks.push({
        id: `tsk_guest_${Date.now()}`,
        orderIndex: nextOrderIndex,
        title: `Mastery: ${skill.title}`,
        description: `${skill.reason} Focused deep dive with verified code examples and hands-on exercises (~${skill.estimatedHours}h).`,
        status: initialStatus,
        requiresQuiz: true,
        xpReward: 100,
        resources: [
          {
            id: `res_${Date.now()}`,
            title: `${skill.title} Architecture Guide`,
            type: 'documentation',
            url: 'https://developer.mozilla.org',
            duration: `${skill.estimatedHours}h`,
          }
        ],
      });

      const completedCount = guestRoadmap.tasks.filter((t) => t.status === 'completed').length;
      guestRoadmap.progressPercentage = Math.round((completedCount / guestRoadmap.tasks.length) * 100);

      try {
        localStorage.setItem('skillora_active_roadmap', JSON.stringify(guestRoadmap));
      } catch (_) {}
    }

    return true;
  },

  /**
   * Invokes the server-side Gemini Edge Function to perform in-depth AI Skill Gap Analysis
   */
  triggerAiSkillGapAnalysis: async (userId?: string): Promise<AiSkillGapAnalysisResult> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    let userSkills: string[] = [];
    if (effectiveUserId) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('skills')
        .eq('id', effectiveUserId)
        .maybeSingle();

      if (profile?.skills && Array.isArray(profile.skills)) {
        userSkills = profile.skills;
      }
    }

    const activeRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);
    const targetRole = activeRoadmap?.title || 'Full-Stack AI & Software Engineer';
    const totalMilestones = activeRoadmap?.tasks?.length || 5;
    const completedMilestones = activeRoadmap?.tasks?.filter(t => t.status === 'completed').length || 0;

    const payload = {
      careerGoal: targetRole,
      targetRole,
      currentSkills: userSkills,
      completedMilestones,
      totalMilestones,
      quizScoreAverage: 90,
      experienceLevel: 'Intermediate',
    };

    try {
      const { data, error } = await supabase.functions.invoke('ai-skill-gap', {
        body: payload,
      });

      if (error) {
        console.warn('[CareerGpsService] Edge Function ai-skill-gap notice:', error);
      }

      if (data && data.strengths) {
        // Unlock career-ready achievement if user is authenticated
        if (effectiveUserId) {
          try {
            await supabase.rpc('unlock_achievement', { p_achievement_id: 'career-ready' });
          } catch (_) {}
        }
        return data as AiSkillGapAnalysisResult;
      }
    } catch (err) {
      console.error('[CareerGpsService] Error triggering AI skill gap:', err);
    }

    // Deterministic fallback if offline/edge failure
    return {
      overallMatchScore: Math.min(95, Math.max(40, Math.round((completedMilestones / Math.max(1, totalMilestones)) * 50 + 45))),
      summary: `Strategic career assessment for ${targetRole}. You have completed ${completedMilestones} milestones. Prioritizing system design and automated testing will accelerate job readiness.`,
      strengths: userSkills.length > 0 ? userSkills : ['Core Programming Fundamentals', 'Active Learning Discipline'],
      missingSkills: ['System Design & Scalability', 'CI/CD & Cloud Infrastructure', 'Automated Testing Patterns'],
      prioritySkills: [
        {
          skill: 'System Architecture & Design',
          importance: 'High',
          reason: `High priority for ${targetRole} positions to build production-scale web applications.`
        },
        {
          skill: 'CI/CD & Automated Testing',
          importance: 'High',
          reason: 'Critical for enterprise quality standards and deployment pipelines.'
        },
        {
          skill: 'Cloud Infrastructure & Serverless',
          importance: 'Medium',
          reason: 'Expands deployment flexibility and distributed backend capabilities.'
        }
      ],
      suggestedProjects: [
        {
          title: 'Production-Ready Enterprise Microservice',
          description: 'Build a containerized API microservice with comprehensive automated tests and CI/CD pipelines.',
          keySkills: ['TypeScript', 'Testing', 'Docker', 'PostgreSQL']
        },
        {
          title: 'Full-Stack Scalable SaaS Platform',
          description: 'Develop a modern multi-tenant application with authentication, Stripe billing, and dashboard analytics.',
          keySkills: ['React', 'Supabase', 'Stripe', 'Tailwind']
        }
      ],
      estimatedLearningSequence: [
        'Master End-to-End Testing & Mocking',
        'Implement Cloud Database & Edge Functions',
        'Deploy Portfolio Capstone Project to Production',
        'Conduct Mock Technical Interviews & Portfolio Review'
      ]
    };
  },

  /**
   * Computes the "Next Best Action" for the user based on real database state.
   */
  computeNextBestAction: async (userId?: string): Promise<NextBestAction> => {
    let effectiveUserId = userId;
    if (!effectiveUserId) {
      const { data: authData } = await supabase.auth.getUser();
      effectiveUserId = authData.user?.id || useAuthStore.getState().user?.id;
    }

    const activeRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);

    if (activeRoadmap && activeRoadmap.tasks && activeRoadmap.tasks.length > 0) {
      // 1. In-progress task
      const inProgressTask = activeRoadmap.tasks.find((t) => t.status === 'in_progress');
      if (inProgressTask) {
        if (inProgressTask.requiresQuiz) {
          return {
            type: 'quiz',
            title: `Take Quiz: ${inProgressTask.title}`,
            description: `Test your mastery on "${inProgressTask.title}" to complete this milestone and earn +${inProgressTask.xpReward} XP.`,
            badge: 'Milestone Assessment',
            actionLabel: 'Take Quiz Now',
            actionUrl: `/roadmap/lesson/${inProgressTask.id}`,
            xpReward: inProgressTask.xpReward,
          };
        }
        return {
          type: 'lesson',
          title: `Continue: ${inProgressTask.title}`,
          description: `Resume your active milestone. Master hands-on code examples and complete the requirements.`,
          badge: 'In Progress',
          actionLabel: 'Continue Lesson',
          actionUrl: `/roadmap/lesson/${inProgressTask.id}`,
          xpReward: inProgressTask.xpReward,
        };
      }

      // 2. Next locked task if available
      const lockedTask = activeRoadmap.tasks.find((t) => t.status === 'locked');
      if (lockedTask) {
        return {
          type: 'lesson',
          title: `Unlock Next: ${lockedTask.title}`,
          description: `You're ready to proceed to the next module in your ${activeRoadmap.title} roadmap.`,
          badge: 'Next Milestone',
          actionLabel: 'View Roadmap',
          actionUrl: '/roadmap',
          xpReward: lockedTask.xpReward,
        };
      }

      // 3. If all completed, capstone project
      const allCompleted = activeRoadmap.tasks.every((t) => t.status === 'completed');
      if (allCompleted) {
        return {
          type: 'project',
          title: 'Submit Capstone Project',
          description: 'Congratulations on completing your roadmap milestones! Submit your capstone project to earn your verified Certificate.',
          badge: 'Certification Ready',
          actionLabel: 'Submit Project',
          actionUrl: '/profile',
          xpReward: 300,
        };
      }
    }

    // Default recommendation
    return {
      type: 'skill_gap',
      title: 'Analyze Skill Gaps with Career GPS',
      description: 'Run our server-side AI evaluation to match your skills with real-time job market requirements.',
      badge: 'Career Strategy',
      actionLabel: 'Open Career GPS',
      actionUrl: '/career-gps',
      xpReward: 200,
    };
  },
};

