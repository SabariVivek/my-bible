-- Update RLS policies for chapter_timeline table
-- Run this in Supabase SQL Editor to allow public access

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON chapter_timeline;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON chapter_timeline;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON chapter_timeline;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON chapter_timeline;
DROP POLICY IF EXISTS "Enable read access for all users" ON chapter_timeline;

-- Create new public access policies
CREATE POLICY "Enable read access for all users" ON chapter_timeline
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON chapter_timeline
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON chapter_timeline
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON chapter_timeline
    FOR DELETE USING (true);