-- ==============================================================================
-- SKILLORA AI: Foundation Database Schema Migration
-- Tables: profiles, goals, roadmaps, tasks, resources
-- ==============================================================================

-- 1. Helper Function: Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql security definer;


-- ==============================================================================
-- 2. TABLE: PROFILES
-- Directly mapped 1:1 to Supabase Auth (auth.users)
-- ==============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  headline text,
  bio text,
  user_type text check (user_type in ('university_student', 'freelancer', 'career_changer')),
  skill_level text check (skill_level in ('beginner', 'intermediate', 'advanced')),
  skills text[] default '{}'::text[],
  resume_url text,
  avatar_url text,
  streak_count integer not null default 0,
  xp_total integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Trigger: auto-update updated_at on profiles
drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.handle_updated_at();


-- ==============================================================================
-- 3. TABLE: GOALS
-- User target career goals or learning objectives
-- ==============================================================================
create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  target_date date,
  status text not null default 'active' check (status in ('active', 'completed', 'paused', 'archived')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_goals_user_id on public.goals(user_id);

-- Trigger: auto-update updated_at on goals
drop trigger if exists set_goals_updated_at on public.goals;
create trigger set_goals_updated_at
  before update on public.goals
  for each row
  execute function public.handle_updated_at();


-- ==============================================================================
-- 4. TABLE: ROADMAPS
-- Curriculum and progress tracking for a user's goal
-- ==============================================================================
create table if not exists public.roadmaps (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  goal_id uuid references public.goals(id) on delete set null,
  title text not null,
  description text,
  progress_percentage integer not null default 0 check (progress_percentage >= 0 and progress_percentage <= 100),
  status text not null default 'in_progress' check (status in ('draft', 'in_progress', 'completed', 'archived')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_roadmaps_user_id on public.roadmaps(user_id);
create index if not exists idx_roadmaps_goal_id on public.roadmaps(goal_id);

-- Trigger: auto-update updated_at on roadmaps
drop trigger if exists set_roadmaps_updated_at on public.roadmaps;
create trigger set_roadmaps_updated_at
  before update on public.roadmaps
  for each row
  execute function public.handle_updated_at();


-- ==============================================================================
-- 5. TABLE: TASKS
-- Sequential module steps inside a roadmap
-- ==============================================================================
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  order_index integer not null default 1,
  title text not null,
  description text,
  status text not null default 'locked' check (status in ('locked', 'in_progress', 'completed')),
  requires_quiz boolean not null default false,
  xp_reward integer not null default 50,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_tasks_roadmap_id on public.tasks(roadmap_id);
create index if not exists idx_tasks_user_id on public.tasks(user_id);

-- Trigger: auto-update updated_at on tasks
drop trigger if exists set_tasks_updated_at on public.tasks;
create trigger set_tasks_updated_at
  before update on public.tasks
  for each row
  execute function public.handle_updated_at();


-- ==============================================================================
-- 6. TABLE: RESOURCES
-- Educational media, docs, or links linked to individual tasks
-- ==============================================================================
create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references public.tasks(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  type text not null check (type in ('video', 'documentation', 'article', 'interactive')),
  url text not null,
  duration text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_resources_task_id on public.resources(task_id);
create index if not exists idx_resources_user_id on public.resources(user_id);


-- ==============================================================================
-- 7. TRIGGER: AUTOMATIC PROFILE CREATION ON SIGNUP
-- Listens to new registrations in auth.users and creates public.profiles row
-- ==============================================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    coalesce(new.raw_user_meta_data->>'avatar_url', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();


-- ==============================================================================
-- 8. ROW LEVEL SECURITY (RLS) & ACCESS POLICIES
-- Strict user-isolation: Each authenticated user can only access their own data
-- ==============================================================================

-- Enable RLS on all 5 tables
alter table public.profiles enable row level security;
alter table public.goals enable row level security;
alter table public.roadmaps enable row level security;
alter table public.tasks enable row level security;
alter table public.resources enable row level security;

-- Drop existing policies if re-running
drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;
drop policy if exists "Users can insert own profile" on public.profiles;
drop policy if exists "Users can manage own goals" on public.goals;
drop policy if exists "Users can manage own roadmaps" on public.roadmaps;
drop policy if exists "Users can manage own tasks" on public.tasks;
drop policy if exists "Users can manage own resources" on public.resources;

-- PROFILES Policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- GOALS Policies
create policy "Users can manage own goals"
  on public.goals for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ROADMAPS Policies
create policy "Users can manage own roadmaps"
  on public.roadmaps for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- TASKS Policies
create policy "Users can manage own tasks"
  on public.tasks for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- RESOURCES Policies
create policy "Users can manage own resources"
  on public.resources for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
