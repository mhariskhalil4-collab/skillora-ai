-- ==============================================================================
-- SKILLORA AI: Secure Account Deletion RPC Migration
-- Function: public.delete_user_account()
-- ==============================================================================

-- Create secure stored procedure for authenticated user self-deletion
create or replace function public.delete_user_account()
returns void as $$
declare
  calling_user_id uuid;
begin
  -- 1. Security Check: Only the authenticated user can delete their own account
  calling_user_id := auth.uid();
  
  if calling_user_id is null then
    raise exception 'Unauthorized: No active user session detected.';
  end if;

  -- 2. Explicit cascade cleanup across all user-owned public tables
  -- Cleanup Chat Messages
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'chat_messages') then
    delete from public.chat_messages where user_id = calling_user_id;
  end if;

  -- Cleanup Project Submissions
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'project_submissions') then
    delete from public.project_submissions where user_id = calling_user_id;
  end if;

  -- Cleanup Resources
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'resources') then
    delete from public.resources where user_id = calling_user_id;
  end if;

  -- Cleanup Tasks
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'tasks') then
    delete from public.tasks where user_id = calling_user_id;
  end if;

  -- Cleanup Roadmaps
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'roadmaps') then
    delete from public.roadmaps where user_id = calling_user_id;
  end if;

  -- Cleanup Goals
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'goals') then
    delete from public.goals where user_id = calling_user_id;
  end if;

  -- Cleanup Portfolios
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'portfolio') then
    delete from public.portfolio where user_id = calling_user_id;
  end if;

  -- Cleanup Projects
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'projects') then
    delete from public.projects where user_id = calling_user_id;
  end if;

  -- Cleanup Certificates
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'certificates') then
    delete from public.certificates where user_id = calling_user_id;
  end if;

  -- Cleanup Progress Tracking
  if exists (select 1 from information_schema.tables where table_schema = 'public' and table_name = 'progress_tracking') then
    delete from public.progress_tracking where user_id = calling_user_id;
  end if;

  -- Cleanup Profiles
  delete from public.profiles where id = calling_user_id;

  -- 3. Remove user identity from auth.users (requires security definer)
  delete from auth.users where id = calling_user_id;
end;
$$ language plpgsql security definer set search_path = public, auth;

-- Grant execution permission to authenticated users
grant execute on function public.delete_user_account() to authenticated;

-- Reload schema cache
notify pgrst, 'reload schema';
