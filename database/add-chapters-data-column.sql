-- Add chapters_data column to quiz_scores table to store per-chapter quiz data
-- This allows tracking individual chapter scores and completion status

ALTER TABLE quiz_scores 
ADD COLUMN IF NOT EXISTS chapters_data JSONB DEFAULT '{}'::jsonb;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_quiz_scores_chapters_data 
ON quiz_scores USING gin(chapters_data);
