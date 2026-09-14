import { supabase } from '@/lib/supabase';
import type { Achievement, UserAchievement, EvaluationContext } from './achievement.types';

export const achievementService = {
  /**
   * Fetch all registered achievements in the catalog
   */
  async fetchAchievementsCatalog(): Promise<Achievement[]> {
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('xp_reward', { ascending: true });

    if (error) {
      console.error('[AchievementService] Error fetching catalog:', error);
      return [];
    }

    return (data || []) as Achievement[];
  },

  /**
   * Fetch user's unlocked achievements
   */
  async fetchUserAchievements(userId: string): Promise<UserAchievement[]> {
    if (!userId) return [];

    const { data, error } = await supabase
      .from('user_achievements')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('[AchievementService] Error fetching user achievements:', error);
      return [];
    }

    return (data || []) as UserAchievement[];
  },

  /**
   * Trigger the secure database RPC to unlock an achievement and grant XP idempotently
   */
  async unlockAchievement(achievementId: string): Promise<boolean> {
    try {
      const { data, error } = await supabase.rpc('unlock_achievement', {
        p_achievement_id: achievementId,
      });

      if (error) {
        console.error(`[AchievementService] RPC unlock_achievement failed for ${achievementId}:`, error);
        return false;
      }

      return !!data;
    } catch (err) {
      console.error(`[AchievementService] Unexpected error unlocking ${achievementId}:`, err);
      return false;
    }
  },

  /**
   * Automatically evaluates learning metrics and unlocks eligible achievements
   */
  async evaluateAndUnlockAchievements(
    userId: string,
    context: EvaluationContext,
    catalog: Achievement[],
    unlockedIds: Set<string>
  ): Promise<string[]> {
    if (!userId) return [];

    const newlyUnlocked: string[] = [];

    for (const achievement of catalog) {
      if (unlockedIds.has(achievement.id)) continue;

      let isEligible = false;

      switch (achievement.requirement_type) {
        case 'tasks_completed':
          isEligible = (context.tasksCompleted || 0) >= achievement.requirement_value;
          break;

        case 'streak_days':
          isEligible = (context.streakDays || 0) >= achievement.requirement_value;
          break;

        case 'quiz_score':
          // Check if any quiz score matches or exceeds requirement
          isEligible = (context.quizScores || []).some((score) => score >= achievement.requirement_value);
          break;

        case 'skills_count':
          isEligible = (context.skillsCount || 0) >= achievement.requirement_value;
          break;

        case 'projects_completed':
          isEligible = (context.projectsCount || 0) >= achievement.requirement_value;
          break;

        case 'gps_analyzed':
          isEligible = !!context.gpsAnalyzed;
          break;

        default:
          isEligible = false;
      }

      if (isEligible) {
        const success = await this.unlockAchievement(achievement.id);
        if (success) {
          newlyUnlocked.push(achievement.id);
        }
      }
    }

    return newlyUnlocked;
  },
};
