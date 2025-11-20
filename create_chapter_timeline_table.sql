-- Create chapter_timeline table if it doesn't exist or needs to be recreated
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS chapter_timeline (
    id SERIAL PRIMARY KEY,
    book_file VARCHAR(50) NOT NULL,
    chapter INTEGER NOT NULL,
    event_description TEXT NOT NULL,
    verse_reference VARCHAR(100) DEFAULT '',
    testament VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chapter_timeline_book_chapter ON chapter_timeline(book_file, chapter);
CREATE INDEX IF NOT EXISTS idx_chapter_timeline_testament ON chapter_timeline(testament);

-- Enable Row Level Security
ALTER TABLE chapter_timeline ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Enable read access for authenticated users" ON chapter_timeline
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" ON chapter_timeline
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" ON chapter_timeline
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users" ON chapter_timeline
    FOR DELETE USING (auth.role() = 'authenticated');

-- For public access (optional, remove if you want authenticated only)
CREATE POLICY "Enable read access for all users" ON chapter_timeline
    FOR SELECT USING (true);