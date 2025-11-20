-- Add order_index column to chapter_timeline table
-- Run this in Supabase SQL Editor

-- Add the order_index column
ALTER TABLE chapter_timeline 
ADD COLUMN IF NOT EXISTS order_index INTEGER DEFAULT 0;

-- Create index for better performance on ordering
CREATE INDEX IF NOT EXISTS idx_chapter_timeline_order ON chapter_timeline(book_file, chapter, order_index);

-- Update existing records to have proper order_index values
-- This will set order_index based on current id order
UPDATE chapter_timeline 
SET order_index = (
    SELECT ROW_NUMBER() OVER (
        PARTITION BY book_file, chapter 
        ORDER BY id
    ) * 10
    FROM chapter_timeline ct2 
    WHERE ct2.id = chapter_timeline.id
)
WHERE order_index = 0;