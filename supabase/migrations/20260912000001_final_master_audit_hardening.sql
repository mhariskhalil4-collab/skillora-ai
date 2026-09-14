-- ==============================================================================
-- SKILLORA AI: Final Master Audit Security & Schema Hardening
-- Tables: certificates, portfolio, projects, market_trends
-- Protections: Admin privilege escalation prevention trigger, RLS, cascade cleanup
-- ==============================================================================

-- 1. TABLE: CERTIFICATES
CREATE TABLE IF NOT EXISTS public.certificates (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL DEFAULT 'Skillora AI',
  date TEXT NOT NULL,
  badge_type TEXT NOT NULL DEFAULT 'standard' CHECK (badge_type IN ('standard', '3d-gold', '3d-silver')),
  certificate_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_created_at ON public.certificates(created_at DESC);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public certificate verification" ON public.certificates;
CREATE POLICY "Allow public certificate verification"
  ON public.certificates
  FOR SELECT
  TO authenticated, anon
  USING (true);

DROP POLICY IF EXISTS "Users can insert own certificates" ON public.certificates;
CREATE POLICY "Users can insert own certificates"
  ON public.certificates
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can update own certificates" ON public.certificates;
CREATE POLICY "Users can update own certificates"
  ON public.certificates
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can delete own certificates" ON public.certificates;
CREATE POLICY "Users can delete own certificates"
  ON public.certificates
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin());


-- 2. TABLE: PORTFOLIO
CREATE TABLE IF NOT EXISTS public.portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  is_published BOOLEAN NOT NULL DEFAULT false,
  theme TEXT DEFAULT 'dark',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_portfolio_user_id ON public.portfolio(user_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_slug ON public.portfolio(slug);

ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read published portfolio" ON public.portfolio;
CREATE POLICY "Allow public read published portfolio"
  ON public.portfolio
  FOR SELECT
  TO authenticated, anon
  USING (is_published = true OR auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can manage own portfolio" ON public.portfolio;
CREATE POLICY "Users can manage own portfolio"
  ON public.portfolio
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (auth.uid() = user_id OR public.is_admin());


-- 3. TABLE: PROJECTS
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  tags TEXT[] DEFAULT '{}'::text[],
  url TEXT,
  image_url TEXT,
  is_public BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_projects_user_id ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_is_public ON public.projects(is_public);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow read public projects" ON public.projects;
CREATE POLICY "Allow read public projects"
  ON public.projects
  FOR SELECT
  TO authenticated, anon
  USING (is_public = true OR auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can manage own projects" ON public.projects;
CREATE POLICY "Users can manage own projects"
  ON public.projects
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (auth.uid() = user_id OR public.is_admin());


-- 4. TABLE: MARKET_TRENDS
CREATE TABLE IF NOT EXISTS public.market_trends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill TEXT NOT NULL,
  demand_score INTEGER NOT NULL DEFAULT 80 CHECK (demand_score >= 0 AND demand_score <= 100),
  direction TEXT NOT NULL DEFAULT 'up' CHECK (direction IN ('up', 'stable', 'down')),
  category TEXT NOT NULL DEFAULT 'Technology',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.market_trends ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow read market trends" ON public.market_trends;
CREATE POLICY "Allow read market trends"
  ON public.market_trends
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Seed initial market trends if table is empty
INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'Autonomous AI Agents', 96, 'up', 'AI & Automation'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'Autonomous AI Agents');

INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'Full-Stack TypeScript & Next.js', 94, 'up', 'Engineering'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'Full-Stack TypeScript & Next.js');

INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'Shopify Headless Architecture', 91, 'up', 'E-commerce'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'Shopify Headless Architecture');

INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'Prompt Engineering & Evaluation', 88, 'up', 'GenAI'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'Prompt Engineering & Evaluation');

INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'FastAPI Microservices', 82, 'stable', 'Backend'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'FastAPI Microservices');

INSERT INTO public.market_trends (skill, demand_score, direction, category)
SELECT 'Legacy PHP Plugins', 35, 'down', 'Legacy'
WHERE NOT EXISTS (SELECT 1 FROM public.market_trends WHERE skill = 'Legacy PHP Plugins');


-- 5. ANTI-PRIVILEGE-ESCALATION TRIGGER ON PROFILES
-- Prevents non-admin callers from modifying is_admin flag on profiles
CREATE OR REPLACE FUNCTION public.protect_profile_admin_flag()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.is_admin IS DISTINCT FROM OLD.is_admin THEN
    IF NOT public.is_admin() THEN
      NEW.is_admin := OLD.is_admin; -- Revert any unauthorized attempt to elevate to admin
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS trg_protect_profile_admin_flag ON public.profiles;
CREATE TRIGGER trg_protect_profile_admin_flag
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profile_admin_flag();

-- Reload PostgREST schema cache
NOTIFY pgrst, 'reload schema';
