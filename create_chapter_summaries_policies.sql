-- Add RLS policies for chapter_summaries table
-- This allows authenticated users to insert and update summaries

-- Enable RLS if not already enabled
ALTER TABLE chapter_summaries ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public read access to chapter summaries" ON chapter_summaries;
DROP POLICY IF EXISTS "Allow authenticated users to insert summaries" ON chapter_summaries;
DROP POLICY IF EXISTS "Allow authenticated users to update summaries" ON chapter_summaries;
DROP POLICY IF EXISTS "Allow authenticated users to delete summaries" ON chapter_summaries;

-- Create policy to allow all users to read summaries (public data)
CREATE POLICY "Allow public read access to chapter summaries" 
    ON chapter_summaries 
    FOR SELECT 
    TO public 
    USING (true);

-- Create policy to allow anyone (anonymous + authenticated) to insert summaries
CREATE POLICY "Allow anyone to insert summaries" 
    ON chapter_summaries 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

-- Create policy to allow anyone to update summaries
CREATE POLICY "Allow anyone to update summaries" 
    ON chapter_summaries 
    FOR UPDATE 
    TO anon, authenticated 
    USING (true)
    WITH CHECK (true);

-- Create policy to allow anyone to delete summaries
CREATE POLICY "Allow anyone to delete summaries" 
    ON chapter_summaries 
    FOR DELETE 
    TO anon, authenticated 
    USING (true);
