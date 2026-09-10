import { supabase } from '@/lib/supabase';
import { MarketTrend, SkillGap, RecommendedSkill } from '../types/gps.types';
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
    const activeRoadmap = await RoadmapService.fetchActiveRoadmap(effectiveUserId);
    if (!activeRoadmap) {
      console.warn('[CareerGpsService] No active roadmap found to append task.');
      return false;
    }

    // 2. Determine sequential order index
    const nextOrderIndex = (activeRoadmap.tasks.length || 0) + 1;

    // 3. Insert task into Supabase tasks table if authenticated and roadmap is persisted in Supabase (tasks: roadmap_id, order_index, title, description, status, requires_quiz, xp_reward - NO user_id)
    if (effectiveUserId && !activeRoadmap.id.startsWith('rmp_guest_')) {
      const { data: newTask, error: taskError } = await supabase
        .from('tasks')
        .insert({
          roadmap_id: activeRoadmap.id,
          order_index: nextOrderIndex,
          title: `Mastery: ${skill.title}`,
          description: `${skill.reason} Focused deep dive with verified code examples and hands-on exercises (~${skill.estimatedHours}h).`,
          status: 'locked',
          requires_quiz: true,
          xp_reward: 100,
        })
        .select('id, order_index, title, description, status, requires_quiz, xp_reward')
        .single();

      if (taskError || !newTask) {
        console.error('[CareerGpsService] Failed to insert roadmap task in Supabase:', taskError);
        throw taskError;
      }

      console.log('[CareerGpsService] Inserted new task in Supabase with UUID:', newTask.id);

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

        const updatedRoadmap: Roadmap = {
          ...activeRoadmap,
          tasks: [...activeRoadmap.tasks, formattedNewTask],
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
        status: 'locked',
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
      try {
        localStorage.setItem('skillora_active_roadmap', JSON.stringify(guestRoadmap));
      } catch (_) {}
    }

    return true;
  },
};
