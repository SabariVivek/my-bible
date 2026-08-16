-- Add songs column to sermons table
-- This migration adds the songs JSONB column to store associated song titles for each sermon

ALTER TABLE sermons ADD COLUMN IF NOT EXISTS songs JSONB DEFAULT '[]'::jsonb;

-- Add comment for documentation
COMMENT ON COLUMN sermons.songs IS 'JSON array of song titles associated with the sermon';
