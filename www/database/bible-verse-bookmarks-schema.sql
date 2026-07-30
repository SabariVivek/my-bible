-- Bible Verse Bookmarks Table Schema
-- Stores color bookmarks for individual verses
-- Notes are stored in a separate table (bible_verse_notes)

CREATE TABLE IF NOT EXISTS bible_verse_bookmarks (
    id BIGSERIAL PRIMARY KEY,
    book_file TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    color TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    
    -- Unique constraint to ensure only one bookmark per verse
    CONSTRAINT bible_verse_bookmarks_unique_verse UNIQUE(book_file, chapter, verse)
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bookmarks_book_chapter 
    ON bible_verse_bookmarks(book_file, chapter);

CREATE INDEX IF NOT EXISTS idx_bookmarks_book_file 
    ON bible_verse_bookmarks(book_file);

CREATE INDEX IF NOT EXISTS idx_bookmarks_color 
    ON bible_verse_bookmarks(color);

-- Composite index for most common query pattern
CREATE INDEX IF NOT EXISTS idx_bookmarks_lookup 
    ON bible_verse_bookmarks(book_file, chapter, verse);

-- Enable Row Level Security (RLS)
ALTER TABLE bible_verse_bookmarks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to read bookmarks (public data)
CREATE POLICY "Allow public read access to bookmarks" 
    ON bible_verse_bookmarks 
    FOR SELECT 
    TO public 
    USING (true);

-- Create policy to allow all users to insert bookmarks
CREATE POLICY "Allow all users to insert bookmarks" 
    ON bible_verse_bookmarks 
    FOR INSERT 
    TO public 
    WITH CHECK (true);

-- Create policy to allow all users to update their own bookmarks
CREATE POLICY "Allow all users to update bookmarks" 
    ON bible_verse_bookmarks 
    FOR UPDATE 
    TO public 
    USING (true);

-- Create policy to allow all users to delete bookmarks
CREATE POLICY "Allow all users to delete bookmarks" 
    ON bible_verse_bookmarks 
    FOR DELETE 
    TO public 
    USING (true);

-- Add comments for documentation
COMMENT ON TABLE bible_verse_bookmarks IS 'Stores verse bookmarks with color coding. Notes are stored separately in bible_verse_notes table.';
COMMENT ON COLUMN bible_verse_bookmarks.book_file IS 'File name used in the app (e.g., genesis, ii_peter, matthew)';
COMMENT ON COLUMN bible_verse_bookmarks.chapter IS 'Chapter number';
COMMENT ON COLUMN bible_verse_bookmarks.verse IS 'Verse number within the chapter';
COMMENT ON COLUMN bible_verse_bookmarks.color IS 'Bookmark highlight color (burgundy, forest, navy, amber, violet, teal, rust, olive, indigo, slate, yellow, green, blue, pink, orange, purple)';
COMMENT ON COLUMN bible_verse_bookmarks.timestamp IS 'When the bookmark was created or last updated';
