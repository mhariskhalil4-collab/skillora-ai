export type TrendDirection = 'up' | 'stable' | 'down';

export interface MarketTrend {
  id: string;
  skill: string;
  demandScore: number; // 0 to 100
  direction: TrendDirection;
  category: string;
}

export interface SkillGap {
  targetRole: string;
  matchPercentage: number;
  currentSkills: string[];
  missingSkills: string[];
}

export interface RecommendedSkill {
  id: string;
  title: string;
  reason: string;
  estimatedHours: number;
  isAdded: boolean;
}
