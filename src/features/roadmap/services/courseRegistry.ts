import { Roadmap, CourseProgressState, CourseLevel } from '../types/roadmap.types';
import { PythonCourseService } from './pythonCourse.service';
import { FacebookAdsCourseService } from './facebookAdsCourse.service';
import { MetaAdsCourseService } from './metaAdsCourse.service';
import { GoogleAdsCourseService } from './googleAdsCourse.service';
import { YouTubeAdsCourseService } from './youtubeAdsCourse.service';
import { InstagramAdsCourseService } from './instagramAdsCourse.service';
import { ShopifyCourseService } from './shopifyCourse.service';
import { ShopifyDeveloperCourseService } from './shopifyDeveloperCourse.service';
import { WebDevelopmentCourseService } from './webDevelopmentCourse.service';
import { JavaScriptCourseService } from './javascriptCourse.service';
import { HtmlCssCourseService } from './htmlCssCourse.service';
import { SeoCourseService } from './seoCourse.service';
import { PromptEngineeringCourseService } from './promptEngineeringCourse.service';
import { ThreeDAnimationCourseService } from './threeDAnimationCourse.service';
import { EnglishEmailWritingCourseService } from './englishEmailWritingCourse.service';
import { ProfessionalEnglishSpeakingCourseService } from './professionalEnglishSpeakingCourse.service';

export const LOCAL_STORAGE_ACTIVE_ROADMAP_ID_KEY = 'skillora_active_roadmap_id';
export const LOCAL_STORAGE_ACTIVE_COURSE_ID_KEY = 'skillora_active_course_id';
export const LOCAL_STORAGE_ROADMAPS_KEY = 'skillora_roadmaps';

export interface CourseServiceContract {
  getCourseState: () => CourseProgressState;
  switchLevel: (level: CourseLevel) => { success: boolean; state: CourseProgressState; message?: string };
  completeTask: (level: CourseLevel, taskId: string) => CourseProgressState;
  checkLevelPrerequisites: (level: CourseLevel, state: CourseProgressState) => { canUnlock: boolean; reason?: string };
  resetCourseState?: () => CourseProgressState;
  isEligibleForMasterCertificate?: (state: CourseProgressState) => any;
}

export interface CourseMappingInfo {
  id: string;
  title: string;
  shortTitle: string;
  route: string;
  category: string;
  description: string;
  service: CourseServiceContract;
  keywords: string[];
}

export const COURSE_REGISTRY: Record<string, CourseMappingInfo> = {
  'facebook-ads': {
    id: 'facebook-ads',
    title: 'Facebook Ads Masterclass',
    shortTitle: 'Facebook Ads',
    route: '/courses/facebook-ads',
    category: 'Digital Marketing & Growth',
    description: 'Direct response advertising, campaign architecture, dynamic creative optimization, and pixel scaling.',
    service: FacebookAdsCourseService as any,
    keywords: ['facebook', 'fb ads', 'facebook ads', 'meta marketing', 'meta media buying', 'facebook marketing'],
  },
  'meta-ads': {
    id: 'meta-ads',
    title: 'Meta Ads Masterclass',
    shortTitle: 'Meta Ads',
    route: '/courses/meta-ads',
    category: 'Digital Marketing & Growth',
    description: 'Full-funnel Meta advertising, Advantage+ shopping, audience segmentations, and enterprise ROAS scaling.',
    service: MetaAdsCourseService as any,
    keywords: ['meta ads', 'meta advertising', 'meta certified', 'advantage+', 'meta pixel', 'media buyer', 'media buying'],
  },
  'python': {
    id: 'python',
    title: 'Python Masterclass (Beginner to Advanced)',
    shortTitle: 'Python Masterclass',
    route: '/courses/python',
    category: 'Programming & Data',
    description: 'Comprehensive 3-level Python mastery covering fundamentals, OOP, APIs, automation, and backend architectures.',
    service: PythonCourseService as any,
    keywords: ['python', 'django', 'fastapi', 'backend python', 'python automation', 'data science python', 'machine learning python'],
  },
  'google-ads': {
    id: 'google-ads',
    title: 'Google Ads Masterclass',
    shortTitle: 'Google Ads',
    route: '/courses/google-ads',
    category: 'Digital Marketing & Growth',
    description: 'High-intent search ads, Performance Max campaigns, conversion tracking, bidding strategies, and quality score mastery.',
    service: GoogleAdsCourseService as any,
    keywords: ['google ads', 'google search ads', 'pmax', 'performance max', 'google ppc', 'google adwords', 'sem'],
  },
  'youtube-ads': {
    id: 'youtube-ads',
    title: 'YouTube Ads Masterclass',
    shortTitle: 'YouTube Ads',
    route: '/courses/youtube-ads',
    category: 'Digital Marketing & Growth',
    description: 'In-stream video advertising, creative hooking frameworks, Demand Gen campaigns, and video action funnels.',
    service: YouTubeAdsCourseService as any,
    keywords: ['youtube ads', 'youtube marketing', 'video ads', 'demand gen', 'in-stream ads'],
  },
  'instagram-ads': {
    id: 'instagram-ads',
    title: 'Instagram Ads Masterclass',
    shortTitle: 'Instagram Ads',
    route: '/courses/instagram-ads',
    category: 'Digital Marketing & Growth',
    description: 'Reels creative storytelling, creator partnerships, Instagram Shopping funnels, and mobile-first conversions.',
    service: InstagramAdsCourseService as any,
    keywords: ['instagram ads', 'instagram marketing', 'ig ads', 'reels ads', 'instagram shop'],
  },
  'shopify-developer': {
    id: 'shopify-developer',
    title: 'Shopify Developer Masterclass',
    shortTitle: 'Shopify Developer',
    route: '/courses/shopify-developer',
    category: 'E-Commerce Engineering',
    description: 'Theme architecture, Shopify CLI, custom section schemas, Storefront API, and headless e-commerce builds.',
    service: ShopifyDeveloperCourseService as any,
    keywords: ['shopify developer', 'shopify theme', 'storefront api', 'shopify app', 'shopify cli', 'liquid theme'],
  },
  'shopify': {
    id: 'shopify',
    title: 'Shopify Liquid Masterclass',
    shortTitle: 'Shopify Liquid',
    route: '/courses/shopify',
    category: 'E-Commerce Engineering',
    description: 'Master Liquid templating, object models, section rendering, dynamic filters, and conversion optimization.',
    service: ShopifyCourseService as any,
    keywords: ['shopify', 'shopify store', 'liquid', 'e-commerce', 'ecommerce', 'shopify liquid'],
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development Masterclass',
    shortTitle: 'Web Development',
    route: '/courses/web-development',
    category: 'Software Engineering',
    description: 'Full-stack engineering from responsive frontend foundations to full REST architectures and cloud deployment.',
    service: WebDevelopmentCourseService as any,
    keywords: ['web development', 'web developer', 'full stack', 'full-stack', 'frontend developer', 'backend developer', 'fullstack'],
  },
  'javascript': {
    id: 'javascript',
    title: 'JavaScript Masterclass',
    shortTitle: 'JavaScript Masterclass',
    route: '/courses/javascript',
    category: 'Software Engineering',
    description: 'Deep modern JavaScript from asynchronous runtime patterns and closures to event loop and DOM architectures.',
    service: JavaScriptCourseService as any,
    keywords: ['javascript', 'js', 'es6', 'typescript', 'async javascript', 'vanilla js', 'react'],
  },
  'html-css': {
    id: 'html-css',
    title: 'HTML & CSS Masterclass',
    shortTitle: 'HTML & CSS',
    route: '/courses/html-css',
    category: 'Software Engineering',
    description: 'Semantic HTML5 architecture, modern CSS grid & flexbox systems, fluid animations, and responsive layout mastery.',
    service: HtmlCssCourseService as any,
    keywords: ['html', 'css', 'html5', 'css3', 'tailwind', 'responsive design', 'flexbox', 'grid'],
  },
  'seo': {
    id: 'seo',
    title: 'SEO Masterclass',
    shortTitle: 'SEO Masterclass',
    route: '/courses/seo',
    category: 'Digital Marketing & Growth',
    description: 'Technical audit architecture, Core Web Vitals, semantic entity optimization, programmatic SEO, and link acquisition.',
    service: SeoCourseService as any,
    keywords: ['seo', 'search engine optimization', 'technical seo', 'organic search', 'backlinks', 'keyword research'],
  },
  'prompt-engineering': {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Masterclass',
    shortTitle: 'Prompt Engineering',
    route: '/courses/prompt-engineering',
    category: 'Artificial Intelligence',
    description: 'LLM reasoning patterns, few-shot prompting, structured JSON schema outputs, RAG context formatting, and AI agents.',
    service: PromptEngineeringCourseService as any,
    keywords: ['prompt engineering', 'prompt engineer', 'llm', 'genai', 'generative ai', 'ai prompts', 'ai automation'],
  },
  '3d-animation': {
    id: '3d-animation',
    title: '3D Animation Masterclass',
    shortTitle: '3D Animation',
    route: '/courses/3d-animation',
    category: 'Creative Design',
    description: '3D modeling, procedural texturing, character rigging, keyframe motion dynamics, and lighting and rendering.',
    service: ThreeDAnimationCourseService as any,
    keywords: ['3d animation', '3d', 'blender', 'animation', '3d modeling', 'rigging', 'cgi', 'motion design'],
  },
  'english-email-writing': {
    id: 'english-email-writing',
    title: 'English Email Writing Masterclass',
    shortTitle: 'Email Writing',
    route: '/courses/english-email-writing',
    category: 'Professional Communication',
    description: 'High-impact executive correspondence, cold client outreach, cross-cultural negotiations, and persuasive proposals.',
    service: EnglishEmailWritingCourseService as any,
    keywords: ['email writing', 'business email', 'english email', 'email communication', 'professional writing'],
  },
  'professional-english-speaking': {
    id: 'professional-english-speaking',
    title: 'Professional English Speaking Masterclass',
    shortTitle: 'English Speaking',
    route: '/courses/professional-english-speaking',
    category: 'Professional Communication',
    description: 'Confident verbal articulation, meeting facilitation, stakeholder presentations, and executive interview techniques.',
    service: ProfessionalEnglishSpeakingCourseService as any,
    keywords: ['english speaking', 'speaking', 'spoken english', 'public speaking', 'interview preparation', 'presentation skills'],
  },
};

/**
 * Resolves the corresponding CourseMappingInfo for a given roadmap.
 * Checks courseId first, then ID matches, then title and goal keywords.
 */
export function resolveCourseFromRoadmap(
  roadmap: Partial<Roadmap> | null | undefined
): CourseMappingInfo | null {
  if (!roadmap) return null;

  // 1. Explicit courseId
  if (roadmap.courseId && COURSE_REGISTRY[roadmap.courseId]) {
    return COURSE_REGISTRY[roadmap.courseId];
  }

  // 2. ID matching (e.g. 'rmp_facebook-ads_123' or 'facebook-ads')
  const rId = (roadmap.id || '').toLowerCase();
  for (const [courseId, courseInfo] of Object.entries(COURSE_REGISTRY)) {
    if (rId.includes(courseId)) {
      return courseInfo;
    }
  }

  // 3. Title and Goal keyword matching
  const searchCorpus = `${roadmap.title || ''} ${roadmap.goal || ''} ${roadmap.description || ''}`.toLowerCase();

  // Priority order for specific matchers
  const checkOrder = [
    'shopify-developer',
    'facebook-ads',
    'meta-ads',
    'google-ads',
    'youtube-ads',
    'instagram-ads',
    'shopify',
    'seo',
    'prompt-engineering',
    '3d-animation',
    'english-email-writing',
    'professional-english-speaking',
    'javascript',
    'html-css',
    'web-development',
    'python',
  ];

  for (const courseId of checkOrder) {
    const course = COURSE_REGISTRY[courseId];
    if (course.keywords.some((kw) => searchCorpus.includes(kw))) {
      return course;
    }
  }

  return null;
}

/**
 * Gets a CourseMappingInfo by its ID
 */
export function getCourseById(courseId: string): CourseMappingInfo | null {
  return COURSE_REGISTRY[courseId] || null;
}

/**
 * Get the currently active roadmap ID from localStorage
 */
export function getActiveRoadmapId(): string | null {
  try {
    return localStorage.getItem(LOCAL_STORAGE_ACTIVE_ROADMAP_ID_KEY);
  } catch {
    return null;
  }
}

/**
 * Set the active roadmap ID in localStorage
 */
export function setActiveRoadmapId(roadmapId: string): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_ROADMAP_ID_KEY, roadmapId);
  } catch {}
}

/**
 * Get the currently active course ID from localStorage
 */
export function getActiveCourseId(): string | null {
  try {
    return localStorage.getItem(LOCAL_STORAGE_ACTIVE_COURSE_ID_KEY);
  } catch {
    return null;
  }
}

/**
 * Set the active course ID in localStorage
 */
export function setActiveCourseId(courseId: string): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_COURSE_ID_KEY, courseId);
  } catch {}
}
