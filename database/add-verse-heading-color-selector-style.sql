-- Add verse_heading_color and selector_style columns to user_settings
ALTER TABLE public.user_settings
  ADD COLUMN IF NOT EXISTS verse_heading_color text NOT NULL DEFAULT 'green',
  ADD COLUMN IF NOT EXISTS selector_style text NOT NULL DEFAULT 'old';
