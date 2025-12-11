-- Remove unused author_email column from comments table
-- This column is never populated by the application and creates unnecessary security surface
ALTER TABLE public.comments DROP COLUMN IF EXISTS author_email;