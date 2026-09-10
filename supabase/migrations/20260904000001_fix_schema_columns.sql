-- ==============================================================================
-- SKILLORA AI: Fix & Synchronize Schema Columns
-- Adds all missing columns to existing profiles, goals, roadmaps, tasks, resources
-- ==============================================================================

-- 1. PROFILES TABLE FIXES
alter table public.profiles
  add column if not exists user_type text check (user_type in ('university_student', 'freelancer', 'career_changer')),
  add column if not exists skill_level text check (skill_level in ('beginner', 'intermediate', 'advanced')),
  add column if not exists streak_count integer not null default 0,
  add column if not exists xp_total integer not null default 0,
  add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- 2. GOALS TABLE FIXES
alter table public.goals
  add column if not exists title text,
  add column if not exists description text,
  add column if not exists target_date date,
  add column if not exists status text not null default 'active',
  add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- 3. ROADMAPS TABLE FIXES
alter table public.roadmaps
  add column if not exists description text,
  add column if not exists status text not null default 'in_progress',
  add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- 4. TASKS TABLE FIXES
alter table public.tasks
  add column if not exists user_id uuid references public.profiles(id) on delete cascade,
  add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- 5. RESOURCES TABLE (ensure it exists and has proper columns)
create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references public.tasks(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  type text not null check (type in ('video', 'documentation', 'article', 'interactive')),
  url text not null,
  duration text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Reload PostgREST schema cache
notify pgrst, 'reload schema';
