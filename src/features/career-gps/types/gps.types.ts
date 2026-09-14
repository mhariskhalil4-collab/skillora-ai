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

export interface AiSkillGapAnalysisResult {
  overallMatchScore: number;
  summary: string;
  strengths: string[];
  missingSkills: string[];
  prioritySkills: Array<{
    skill: string;
    importance: 'High' | 'Medium' | 'Low';
    reason: string;
  }>;
  suggestedProjects: Array<{
    title: string;
    description: string;
    keySkills: string[];
  }>;
  estimatedLearningSequence: string[];
}

export interface NextBestAction {
  type: 'lesson' | 'quiz' | 'project' | 'skill_gap' | 'streak';
  title: string;
  description: string;
  badge: string;
  actionLabel: string;
  actionUrl: string;
  xpReward?: number;
}
