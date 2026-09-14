/**
 * Skillora AI — Central Access & Feature Gating Configuration
 *
 * EARLY_ACCESS_FREE:
 * - When `true`: All currently implemented user-facing features (Roadmaps, Quizzes, Study Buddy,
 *   Career GPS, AI Skill Gap Analysis, Public Portfolios, Verified Certificates, Gamification, etc.)
 *   are unlocked and free for all authenticated learners during the Early Access launch.
 * - When `false`: Normal commercial monetization is enforced, where Pro features require an active
 *   Stripe Pro subscription record in Supabase.
 *
 * This single toggle controls the application entitlement layer without scattering ad-hoc checks.
 */
export const EARLY_ACCESS_FREE = true;

export const ACCESS_CONFIG = {
  isEarlyAccess: EARLY_ACCESS_FREE,
  tierName: 'Free Early Access',
  badgeText: 'Early Access',
  statusMessage: "All features are currently available for free while we're in Early Access.",
  pricingSubtitle: 'All Skillora AI features are currently unlocked and free during our Early Access phase.',
} as const;
