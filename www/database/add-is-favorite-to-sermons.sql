-- Add is_favorite column to sermons table
-- This migration adds the is_favorite boolean column to track user's favorite sermons

ALTER TABLE sermons ADD COLUMN IF NOT EXISTS is_favorite BOOLEAN DEFAULT false;

-- Create index for faster queries on favorite sermons
CREATE INDEX IF NOT EXISTS idx_sermons_is_favorite ON sermons(is_favorite) WHERE is_favorite = true;

-- Add comment for documentation
COMMENT ON COLUMN sermons.is_favorite IS 'Boolean flag to mark sermon as favorite';
