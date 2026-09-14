export type SubscriptionPlan = 'free' | 'pro';

export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'unpaid'
  | 'paused';

export interface UserSubscription {
  id: string;
  userId: string;
  provider: string;
  providerCustomerId?: string;
  providerSubscriptionId?: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PlanFeature {
  title: string;
  includedInFree: boolean;
  includedInPro: boolean;
  proHighlight?: string;
}

export const SKILLORA_PLAN_FEATURES: PlanFeature[] = [
  {
    title: 'Core AI Learning Roadmaps & Module Progression',
    includedInFree: true,
    includedInPro: true,
  },
  {
    title: 'Pedagogical Quizzes & Milestone Unlocking',
    includedInFree: true,
    includedInPro: true,
  },
  {
    title: 'Verified Skillora Certifications & Public Verification Page',
    includedInFree: true,
    includedInPro: true,
  },
  {
    title: 'Public Verified Portfolio Showcase (/portfolio/:slug)',
    includedInFree: true,
    includedInPro: true,
  },
  {
    title: 'AI Study Buddy Mentoring',
    includedInFree: true,
    includedInPro: true,
    proHighlight: 'Unlimited Gemini Flash Prompts (Free limited to 15/day)',
  },
  {
    title: 'Career GPS Real-Time Market Alignment & Wage Analytics',
    includedInFree: false,
    includedInPro: true,
    proHighlight: 'Full Tech Role Readiness & Wage Benchmarks',
  },
  {
    title: 'Verified Pro Badge on Portfolio & Credential Certificates',
    includedInFree: false,
    includedInPro: true,
    proHighlight: 'Gold Verified Badge for Recruiters',
  },
  {
    title: 'Priority Automated Code Deliverable Evaluation',
    includedInFree: false,
    includedInPro: true,
  },
];
