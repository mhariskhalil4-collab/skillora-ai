export type AchievementCategory = 'learning' | 'streak' | 'quiz' | 'project' | 'special';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  xp_reward: number;
  requirement_type: string;
  requirement_value: number;
  created_at?: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  unlocked_at: string;
  notified: boolean;
}

export interface AchievementWithStatus extends Achievement {
  isUnlocked: boolean;
  unlockedAt?: string;
  currentProgress: number;
  progressPercentage: number;
}

export interface EvaluationContext {
  tasksCompleted: number;
  streakDays: number;
  quizScores: number[];
  skillsCount: number;
  projectsCount: number;
  gpsAnalyzed?: boolean;
}
