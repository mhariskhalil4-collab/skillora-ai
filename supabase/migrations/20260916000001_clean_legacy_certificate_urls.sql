-- ==============================================================================
-- SKILLORA AI: Clean Legacy Certificate URLs Migration
-- Normalizes all certificate records to use https://skillora-ai-eta.vercel.app/verify-certificate/:id
-- ==============================================================================

UPDATE public.certificates
SET certificate_url = 'https://skillora-ai-eta.vercel.app/verify-certificate/' || id
WHERE certificate_url IS NULL 
   OR certificate_url LIKE '%localhost%' 
   OR certificate_url LIKE '%127.0.0.1%' 
   OR certificate_url LIKE '%skillora.ai%'
   OR certificate_url NOT LIKE 'https://skillora-ai-eta.vercel.app/verify-certificate/%';
