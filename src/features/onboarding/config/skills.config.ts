export type UserType = 'university_student' | 'freelancer' | 'career_changer';

export type SkillCategory = 
  | 'Technology' 
  | 'Advertising & Marketing' 
  | 'E-commerce' 
  | 'AI & Automation' 
  | 'Communication & Career' 
  | 'Creative & Design';

export interface SkillDefinition {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  badge?: string;
}

export const ALL_SKILLS: SkillDefinition[] = [
  // Technology
  {
    id: 'python',
    name: 'Python',
    category: 'Technology',
    description: 'Backend engineering, automation scripting, APIs, and data workflows.',
  },
  {
    id: 'web_dev',
    name: 'Web Development',
    category: 'Technology',
    description: 'Full-stack web applications, modern responsive interfaces, and REST APIs.',
    badge: 'High Demand',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Technology',
    description: 'Interactive client-side logic, asynchronous APIs, and modern ES6+ paradigms.',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Technology',
    description: 'Semantic markup structure, accessibility standards, and web document fundamentals.',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Technology',
    description: 'Modern styling systems, responsive Flexbox, CSS Grid, and custom animations.',
  },

  // E-commerce
  {
    id: 'shopify_dev',
    name: 'Shopify Store Development',
    category: 'E-commerce',
    description: 'Building, customizing, and launching high-converting commercial Shopify stores.',
    badge: 'Popular',
  },
  {
    id: 'shopify_liquid',
    name: 'Shopify Liquid',
    category: 'E-commerce',
    description: 'Specialized Liquid template programming for custom Shopify themes and sections.',
  },

  // Advertising & Marketing
  {
    id: 'google_ads',
    name: 'Google Ads',
    category: 'Advertising & Marketing',
    description: 'Search intent campaigns, display network ads, bidding strategies, and PPC management.',
    badge: 'High ROI',
  },
  {
    id: 'meta_ads',
    name: 'Meta Ads',
    category: 'Advertising & Marketing',
    description: 'Full-funnel paid advertising strategies across Meta ads manager and pixel setup.',
  },
  {
    id: 'facebook_ads',
    name: 'Facebook Ads',
    category: 'Advertising & Marketing',
    description: 'Laser-focused demographic targeting, custom audiences, and ad creative scaling.',
  },
  {
    id: 'instagram_ads',
    name: 'Instagram Ads',
    category: 'Advertising & Marketing',
    description: 'High-engagement Reels ads, visual storytelling, and mobile social commerce.',
  },
  {
    id: 'youtube_ads',
    name: 'YouTube Ads',
    category: 'Advertising & Marketing',
    description: 'Targeted in-stream video ads, viewer retention funnels, and video discovery.',
  },
  {
    id: 'seo',
    name: 'SEO',
    category: 'Advertising & Marketing',
    description: 'Search engine optimization, keyword research, technical audits, and organic ranking.',
  },

  // AI & Automation
  {
    id: 'prompt_engineering',
    name: 'Prompt Engineering',
    category: 'AI & Automation',
    description: 'Advanced LLM prompt design, automated AI chains, and generative workflows.',
    badge: 'Trending',
  },

  // Communication & Career
  {
    id: 'write_emails_english',
    name: 'Write Emails in English',
    category: 'Communication & Career',
    description: 'Professional business correspondence, client proposals, and clear workplace communication.',
  },
  {
    id: 'professional_speaking_english',
    name: 'Professional Speaking English',
    category: 'Communication & Career',
    description: 'Confident verbal communication for client pitches, job interviews, and standup meetings.',
    badge: 'Career Essential',
  },

  // Creative & Design
  {
    id: '3d_animation',
    name: '3D Animation',
    category: 'Creative & Design',
    description: '3D spatial modeling, product renders, digital scenes, and motion keyframing.',
  },
];

/**
 * Curated and prioritized skill IDs per user type
 */
export const SKILLS_BY_USER_TYPE: Record<UserType, string[]> = {
  university_student: [
    'python',
    'web_dev',
    'javascript',
    'html',
    'css',
    'prompt_engineering',
    'seo',
    'google_ads',
    'meta_ads',
    'facebook_ads',
    'instagram_ads',
    'youtube_ads',
    'write_emails_english',
    'professional_speaking_english',
    'shopify_dev',
    'shopify_liquid',
    '3d_animation',
  ],
  freelancer: [
    'google_ads',
    'meta_ads',
    'facebook_ads',
    'instagram_ads',
    'youtube_ads',
    'seo',
    'shopify_dev',
    'shopify_liquid',
    'web_dev',
    'html',
    'css',
    'javascript',
    'prompt_engineering',
    'write_emails_english',
    'professional_speaking_english',
    '3d_animation',
    'python',
  ],
  career_changer: [
    'web_dev',
    'python',
    'javascript',
    'html',
    'css',
    'shopify_dev',
    'shopify_liquid',
    'prompt_engineering',
    'seo',
    'google_ads',
    'meta_ads',
    'facebook_ads',
    'instagram_ads',
    'youtube_ads',
    'write_emails_english',
    'professional_speaking_english',
    '3d_animation',
  ],
};

/**
 * Returns the curated list of SkillDefinition objects for a given UserType.
 */
export function getSkillsForUserType(userType: UserType = 'university_student'): SkillDefinition[] {
  const ids = SKILLS_BY_USER_TYPE[userType] || SKILLS_BY_USER_TYPE.university_student;
  const map = new Map(ALL_SKILLS.map((s) => [s.id, s]));
  return ids.map((id) => map.get(id)!).filter(Boolean);
}

/**
 * Category metadata for filter tabs and organized group sections
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  'Technology',
  'Advertising & Marketing',
  'E-commerce',
  'AI & Automation',
  'Communication & Career',
  'Creative & Design',
];

/**
 * User type metadata describing persona & learning strategy
 */
export const USER_TYPE_METADATA: Record<UserType, { label: string; subtitle: string; desc: string; strategy: string }> = {
  university_student: {
    label: 'University Student',
    subtitle: 'Academic Foundations to Job Readiness',
    desc: 'Bridging classroom theory with modern industry tech & employability skills.',
    strategy: 'Learning → Practical Projects → Skills Verification → Career Preparation',
  },
  freelancer: {
    label: 'Freelancer',
    subtitle: 'High-Demand Client Services',
    desc: 'Mastering marketable skills for high-ticket client deliverables and contracts.',
    strategy: 'Skill Mastery → Service Offering → Portfolio Asset → Client Delivery Readiness',
  },
  career_changer: {
    label: 'Career Changer',
    subtitle: 'Strategic Industry Transition',
    desc: 'Pivoting efficiently by leveraging transferable skills and bridging core gaps.',
    strategy: 'Transferable Skills → Skill Gap Bridging → Core Competency → Industry Readiness',
  },
};
