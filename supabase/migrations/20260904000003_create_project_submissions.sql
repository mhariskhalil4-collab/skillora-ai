-- ==============================================================================
-- SKILLORA AI: Project Submissions Schema Migration
-- Table: project_submissions
-- ==============================================================================

create table if not exists public.project_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete set null,
  roadmap_id uuid references public.roadmaps(id) on delete set null,
  title text not null,
  repository_url text not null,
  notes text,
  status text not null default 'submitted' check (status in ('submitted', 'approved', 'needs_revision')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_project_submissions_user_id on public.project_submissions(user_id);
create index if not exists idx_project_submissions_task_id on public.project_submissions(task_id);

-- Enable Row Level Security (RLS)
alter table public.project_submissions enable row level security;

-- Policy: Users can view their own submissions
create policy "Users can view own project submissions"
  on public.project_submissions for select
  using (auth.uid() = user_id);

-- Policy: Users can insert their own project submissions
create policy "Users can insert own project submissions"
  on public.project_submissions for insert
  with check (auth.uid() = user_id);

-- Policy: Users can update their own project submissions
create policy "Users can update own project submissions"
  on public.project_submissions for update
  using (auth.uid() = user_id);
