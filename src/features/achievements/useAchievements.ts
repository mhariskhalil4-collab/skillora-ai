import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAuthStore } from '@/features/auth/store/auth.store';
import { achievementService } from './achievement.service';
import type { Achievement, UserAchievement, AchievementWithStatus, EvaluationContext } from './achievement.types';

export function useAchievements() {
  const authUser = useAuthStore((state) => state.user);
  const [catalog, setCatalog] = useState<Achievement[]>([]);
  const [userAchievements, setUserAchievements] = useState<UserAchievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const catalogData = await achievementService.fetchAchievementsCatalog();
      setCatalog(catalogData);

      if (authUser?.id) {
        const userUnlocked = await achievementService.fetchUserAchievements(authUser.id);
        setUserAchievements(userUnlocked);
      } else {
        setUserAchievements([]);
      }
    } catch (err: any) {
      console.error('[useAchievements] Failed to load achievements:', err);
      setError(err.message || 'Failed to load achievements');
    } finally {
      setIsLoading(false);
    }
  }, [authUser?.id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const unlockedMap = useMemo(() => {
    const map = new Map<string, UserAchievement>();
    for (const item of userAchievements) {
      map.set(item.achievement_id, item);
    }
    return map;
  }, [userAchievements]);

  const achievementsWithStatus = useMemo<AchievementWithStatus[]>(() => {
    return catalog.map((ach) => {
      const userRecord = unlockedMap.get(ach.id);
      const isUnlocked = !!userRecord;

      return {
        ...ach,
        isUnlocked,
        unlockedAt: userRecord?.unlocked_at,
        currentProgress: isUnlocked ? ach.requirement_value : 0,
        progressPercentage: isUnlocked ? 100 : 0,
      };
    });
  }, [catalog, unlockedMap]);

  const unlockedCount = useMemo(() => {
    return userAchievements.length;
  }, [userAchievements]);

  const totalCount = useMemo(() => {
    return catalog.length;
  }, [catalog]);

  const totalXpEarned = useMemo(() => {
    return achievementsWithStatus
      .filter((a) => a.isUnlocked)
      .reduce((sum, a) => sum + (a.xp_reward || 0), 0);
  }, [achievementsWithStatus]);

  const unlock = useCallback(
    async (achievementId: string) => {
      if (!authUser?.id) return false;
      const success = await achievementService.unlockAchievement(achievementId);
      if (success) {
        await loadData();
      }
      return success;
    },
    [authUser?.id, loadData]
  );

  const checkMilestones = useCallback(
    async (context: EvaluationContext) => {
      if (!authUser?.id || catalog.length === 0) return [];
      const unlockedIds = new Set(userAchievements.map((ua) => ua.achievement_id));
      const newlyUnlocked = await achievementService.evaluateAndUnlockAchievements(
        authUser.id,
        context,
        catalog,
        unlockedIds
      );

      if (newlyUnlocked.length > 0) {
        await loadData();
      }
      return newlyUnlocked;
    },
    [authUser?.id, catalog, userAchievements, loadData]
  );

  return {
    achievements: achievementsWithStatus,
    unlockedCount,
    totalCount,
    totalXpEarned,
    isLoading,
    error,
    unlock,
    checkMilestones,
    refetch: loadData,
  };
}
