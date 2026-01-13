-- Fix RLS policies for quiz_scores table
-- Disable RLS temporarily to allow all operations
ALTER TABLE quiz_scores DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS with simple policies
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow viewing all quiz scores" ON quiz_scores;
DROP POLICY IF EXISTS "Allow inserting quiz scores for family members" ON quiz_scores;
DROP POLICY IF EXISTS "Allow updating quiz scores for family members" ON quiz_scores;

-- Create new simple policies that allow all operations
CREATE POLICY "Enable read access for all" ON quiz_scores
    FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all" ON quiz_scores
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update access for all" ON quiz_scores
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete access for all" ON quiz_scores
    FOR DELETE USING (true);
