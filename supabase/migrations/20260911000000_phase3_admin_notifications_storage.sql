-- ==============================================================================
-- SKILLORA AI: Phase 3 Database Schema Migration
-- Features: Admin Role & RLS, Notifications System, Storage Buckets & Policies
-- ==============================================================================

-- 1. PROFILES ENHANCEMENTS (Admin Role & Account Suspension)
alter table public.profiles
  add column if not exists is_admin boolean not null default false,
  add column if not exists is_suspended boolean not null default false,
  add column if not exists suspended_reason text;

-- Helper function to check if the executing user is an admin
create or replace function public.is_admin()
returns boolean as $$
declare
  admin_status boolean;
begin
  if auth.uid() is null then
    return false;
  end if;

  select is_admin into admin_status
  from public.profiles
  where id = auth.uid();

  return coalesce(admin_status, false);
end;
$$ language plpgsql security definer set search_path = public, auth;

-- Grant execution permission to all authenticated users
grant execute on function public.is_admin() to authenticated, anon;


-- ==============================================================================
-- 2. NOTIFICATIONS TABLE
-- Real-time & event notifications for user milestones, certificates, billing, etc.
-- ==============================================================================
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  message text not null,
  type text not null default 'info' check (type in ('info', 'success', 'warning', 'milestone', 'certificate', 'subscription', 'security', 'system')),
  is_read boolean not null default false,
  action_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Performance Indexes
create index if not exists idx_notifications_user_id on public.notifications(user_id);
create index if not exists idx_notifications_is_read on public.notifications(user_id, is_read);
create index if not exists idx_notifications_created_at on public.notifications(created_at desc);

-- Enable RLS
alter table public.notifications enable row level security;

-- Drop policies if re-running
drop policy if exists "Users can view own notifications" on public.notifications;
drop policy if exists "Users can update own notification read status" on public.notifications;
drop policy if exists "Users can delete own notifications" on public.notifications;
drop policy if exists "Admins can view all notifications" on public.notifications;
drop policy if exists "Admins can insert notifications" on public.notifications;

-- Notification Policies
create policy "Users can view own notifications"
  on public.notifications for select
  using (auth.uid() = user_id or public.is_admin());

create policy "Users can update own notification read status"
  on public.notifications for update
  using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id or public.is_admin());

create policy "Users can delete own notifications"
  on public.notifications for delete
  using (auth.uid() = user_id or public.is_admin());

create policy "Admins can insert notifications"
  on public.notifications for insert
  with check (auth.uid() = user_id or public.is_admin());


-- ==============================================================================
-- 3. ADMIN RLS POLICIES FOR EXISTING CORE TABLES
-- Grants verified admins full read & moderate capability across platform records
-- ==============================================================================

-- Profiles: Admins can view and update profiles (e.g. suspend / restore)
drop policy if exists "Admins can view all profiles" on public.profiles;
create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

drop policy if exists "Admins can update profiles" on public.profiles;
create policy "Admins can update profiles"
  on public.profiles for update
  using (public.is_admin())
  with check (public.is_admin());

-- Subscriptions: Admins can view all subscriptions for billing metrics
drop policy if exists "Admins can view all subscriptions" on public.subscriptions;
create policy "Admins can view all subscriptions"
  on public.subscriptions for select
  using (public.is_admin());

-- Roadmaps & Tasks: Admins can view roadmaps for learning metrics
drop policy if exists "Admins can view all roadmaps" on public.roadmaps;
create policy "Admins can view all roadmaps"
  on public.roadmaps for select
  using (public.is_admin());

drop policy if exists "Admins can view all tasks" on public.tasks;
create policy "Admins can view all tasks"
  on public.tasks for select
  using (public.is_admin());

-- Certificates: Admins can view all issued certificates
drop policy if exists "Admins can view all certificates" on public.certificates;
create policy "Admins can view all certificates"
  on public.certificates for select
  using (public.is_admin());


-- ==============================================================================
-- 4. STORAGE BUCKETS (Avatars & Portfolio Images)
-- ==============================================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars', 'avatars', true, 5242880, array['image/png', 'image/jpeg', 'image/webp', 'image/gif']),
  ('portfolio-images', 'portfolio-images', true, 5242880, array['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp', 'image/gif'];

-- Storage RLS: Avatars
drop policy if exists "Avatar images are publicly accessible" on storage.objects;
create policy "Avatar images are publicly accessible"
  on storage.objects for select
  using (bucket_id in ('avatars', 'portfolio-images'));

drop policy if exists "Authenticated users can upload own avatar" on storage.objects;
create policy "Authenticated users can upload own avatar"
  on storage.objects for insert
  with check (
    bucket_id in ('avatars', 'portfolio-images')
    and auth.role() = 'authenticated'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "Authenticated users can update own avatar" on storage.objects;
create policy "Authenticated users can update own avatar"
  on storage.objects for update
  using (
    bucket_id in ('avatars', 'portfolio-images')
    and auth.role() = 'authenticated'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "Authenticated users can delete own avatar" on storage.objects;
create policy "Authenticated users can delete own avatar"
  on storage.objects for delete
  using (
    bucket_id in ('avatars', 'portfolio-images')
    and auth.role() = 'authenticated'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- Reload PostgREST schema cache
notify pgrst, 'reload schema';
