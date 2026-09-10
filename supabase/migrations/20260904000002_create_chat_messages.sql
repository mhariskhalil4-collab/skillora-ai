-- ==============================================================================
-- SKILLORA AI: Chat Messages Persistence Schema Migration
-- Table: chat_messages (Stores Study Buddy AI conversation history)
-- ==============================================================================

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete set null,
  sender text not null check (sender in ('user', 'assistant')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Performance Indexes for chronological conversation queries
create index if not exists idx_chat_messages_user_id on public.chat_messages(user_id);
create index if not exists idx_chat_messages_task_id on public.chat_messages(task_id);
create index if not exists idx_chat_messages_created_at on public.chat_messages(created_at asc);

-- Enable Row Level Security (RLS)
alter table public.chat_messages enable row level security;

-- Drop existing policies if re-running
drop policy if exists "Users can view own chat messages" on public.chat_messages;
drop policy if exists "Users can insert own chat messages" on public.chat_messages;
drop policy if exists "Users can delete own chat messages" on public.chat_messages;

-- RLS Policies
create policy "Users can view own chat messages"
  on public.chat_messages for select
  using (auth.uid() = user_id);

create policy "Users can insert own chat messages"
  on public.chat_messages for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own chat messages"
  on public.chat_messages for delete
  using (auth.uid() = user_id);

-- Notify PostgREST cache reload
notify pgrst, 'reload schema';
