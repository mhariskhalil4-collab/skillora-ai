-- ==============================================================================
-- SKILLORA AI: Subscriptions Schema Migration (Stripe Integration)
-- Table: public.subscriptions
-- ==============================================================================

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade unique,
  provider text not null default 'stripe',
  provider_customer_id text,
  provider_subscription_id text,
  plan text not null default 'free' check (plan in ('free', 'pro')),
  status text not null default 'active' check (status in ('active', 'trialing', 'past_due', 'canceled', 'incomplete', 'incomplete_expired', 'unpaid', 'paused')),
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  cancel_at_period_end boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Performance Indexes
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_customer_id on public.subscriptions(provider_customer_id);
create index if not exists idx_subscriptions_subscription_id on public.subscriptions(provider_subscription_id);

-- Auto-update updated_at trigger
drop trigger if exists set_subscriptions_updated_at on public.subscriptions;
create trigger set_subscriptions_updated_at
  before update on public.subscriptions
  for each row
  execute function public.handle_updated_at();

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- CRITICAL SECURITY RULE: Users can only READ their own subscription row.
-- Clients cannot INSERT, UPDATE, or DELETE subscription rows directly.
-- All mutations must come from trusted backend / Stripe webhook with service role.
-- ==============================================================================

alter table public.subscriptions enable row level security;

drop policy if exists "Users can view own subscription" on public.subscriptions;
create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Reload PostgREST schema cache
notify pgrst, 'reload schema';
