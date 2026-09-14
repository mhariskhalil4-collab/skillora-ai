-- Phase 4: Gamification, Achievements & Career Intelligence

-- 1. Create Achievements catalog table
CREATE TABLE IF NOT EXISTS public.achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Award',
  category TEXT NOT NULL CHECK (category IN ('learning', 'streak', 'quiz', 'project', 'special')),
  xp_reward INTEGER NOT NULL DEFAULT 50,
  requirement_type TEXT NOT NULL,
  requirement_value INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Create User Achievements mapping table
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  notified BOOLEAN DEFAULT false NOT NULL,
  CONSTRAINT uq_user_achievement UNIQUE (user_id, achievement_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON public.user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_achievement_id ON public.user_achievements(achievement_id);

-- 3. Enable RLS
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- Achievements policies (everyone can read the catalog)
DROP POLICY IF EXISTS "Allow authenticated read achievements" ON public.achievements;
CREATE POLICY "Allow authenticated read achievements"
  ON public.achievements
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- User achievements policies (users can only see and manage their own)
DROP POLICY IF EXISTS "Users can view own achievements" ON public.user_achievements;
CREATE POLICY "Users can view own achievements"
  ON public.user_achievements
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own achievements" ON public.user_achievements;
CREATE POLICY "Users can insert own achievements"
  ON public.user_achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 4. Idempotent RPC to unlock an achievement securely
CREATE OR REPLACE FUNCTION public.unlock_achievement(p_achievement_id TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID;
  v_xp_reward INTEGER;
  v_title TEXT;
  v_already_unlocked BOOLEAN;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Check if achievement exists
  SELECT xp_reward, title INTO v_xp_reward, v_title
  FROM public.achievements
  WHERE id = p_achievement_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Achievement % not found', p_achievement_id;
  END IF;

  -- Check if already unlocked
  SELECT EXISTS (
    SELECT 1 FROM public.user_achievements
    WHERE user_id = v_user_id AND achievement_id = p_achievement_id
  ) INTO v_already_unlocked;

  IF v_already_unlocked THEN
    RETURN FALSE;
  END IF;

  -- Insert unlocked achievement
  INSERT INTO public.user_achievements (user_id, achievement_id, unlocked_at)
  VALUES (v_user_id, p_achievement_id, now());

  -- Reward XP on profile
  UPDATE public.profiles
  SET xp_total = COALESCE(xp_total, 0) + v_xp_reward,
      updated_at = now()
  WHERE id = v_user_id;

  -- Optional: Send a notification if notifications table exists
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'notifications') THEN
    INSERT INTO public.notifications (user_id, title, message, type, action_url)
    VALUES (
      v_user_id,
      'Achievement Unlocked! 🏆',
      format('You unlocked "%s" and earned +%s XP!', v_title, v_xp_reward),
      'achievement',
      '/profile'
    );
  END IF;

  RETURN TRUE;
END;
$$;

-- Grant execution to authenticated users
GRANT EXECUTE ON FUNCTION public.unlock_achievement(TEXT) TO authenticated;

-- 5. Seed standard achievements catalog
INSERT INTO public.achievements (id, title, description, icon, category, xp_reward, requirement_type, requirement_value)
VALUES
  ('first-step', 'First Step Taken', 'Completed your first learning roadmap task', 'Footprints', 'learning', 50, 'tasks_completed', 1),
  ('streak-3', 'Consistent Scholar', 'Maintained a 3-day active learning streak', 'Flame', 'streak', 100, 'streak_days', 3),
  ('streak-7', 'Unstoppable Momentum', 'Achieved a 7-day learning streak', 'Zap', 'streak', 250, 'streak_days', 7),
  ('quiz-ace', 'Quiz Master', 'Scored 100% on any milestone assessment quiz', 'Award', 'quiz', 150, 'quiz_score', 100),
  ('skill-explorer', 'Skill Collector', 'Added 5 or more technical skills to your profile', 'Compass', 'learning', 100, 'skills_count', 5),
  ('capstone-creator', 'Project Architect', 'Completed a capstone project submission', 'Sparkles', 'project', 300, 'projects_completed', 1),
  ('career-ready', 'Career Strategist', 'Completed full AI Skill Gap Analysis & Career GPS alignment', 'Target', 'special', 200, 'gps_analyzed', 1)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  xp_reward = EXCLUDED.xp_reward,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value;
