-- ==============================================================================
-- SKILLORA AI: Certificate Verification & Recipient Name Migration
-- Ensures student_name is stored on certificate creation for zero-profile-leak public verification
-- ==============================================================================

-- 1. Add student_name and recipient_name columns if not exists
ALTER TABLE public.certificates
  ADD COLUMN IF NOT EXISTS student_name TEXT,
  ADD COLUMN IF NOT EXISTS recipient_name TEXT;

-- 2. Populate existing rows with student_name from profiles if missing
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
      AND table_name = 'profiles' 
      AND column_name = 'full_name'
  ) THEN
    UPDATE public.certificates c
    SET 
      student_name = COALESCE(c.student_name, p.full_name, 'Skillora Learner'),
      recipient_name = COALESCE(c.recipient_name, p.full_name, 'Skillora Learner')
    FROM public.profiles p
    WHERE c.user_id = p.id
      AND (c.student_name IS NULL OR c.recipient_name IS NULL);
  END IF;
END $$;

-- 3. Ensure RLS is enabled and public verification policy allows anon and authenticated reads
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public certificate verification" ON public.certificates;
CREATE POLICY "Allow public certificate verification"
  ON public.certificates
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- 4. Index on certificate id and user_id for fast lookup
CREATE INDEX IF NOT EXISTS idx_certificates_id ON public.certificates(id);
CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON public.certificates(user_id);
