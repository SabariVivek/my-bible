-- Bible Verses Table Schema
-- This table stores all Bible verses in both Tamil and Easy English

CREATE TABLE IF NOT EXISTS bible_verses (
    id BIGSERIAL PRIMARY KEY,
    book TEXT NOT NULL,
    book_file TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    language TEXT NOT NULL CHECK (language IN ('tamil', 'english')),
    text TEXT NOT NULL,
    testament TEXT NOT NULL CHECK (testament IN ('old', 'new')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_bible_verses_lookup 
    ON bible_verses(book_file, chapter, language);

CREATE INDEX IF NOT EXISTS idx_bible_verses_book 
    ON bible_verses(book_file);

CREATE INDEX IF NOT EXISTS idx_bible_verses_chapter 
    ON bible_verses(book_file, chapter);

CREATE INDEX IF NOT EXISTS idx_bible_verses_language 
    ON bible_verses(language);

CREATE INDEX IF NOT EXISTS idx_bible_verses_testament 
    ON bible_verses(testament);

-- Composite index for most common query pattern
CREATE INDEX IF NOT EXISTS idx_bible_verses_book_chapter_lang 
    ON bible_verses(book_file, chapter, language);

-- Enable Row Level Security (RLS)
ALTER TABLE bible_verses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to read verses (public data)
CREATE POLICY "Allow public read access to bible verses" 
    ON bible_verses 
    FOR SELECT 
    TO public 
    USING (true);

-- Create policy for inserting verses (for migration script - use service role key)
CREATE POLICY "Allow service role to insert verses" 
    ON bible_verses 
    FOR INSERT 
    TO authenticated 
    WITH CHECK (true);

-- Add comment for documentation
COMMENT ON TABLE bible_verses IS 'Stores all Bible verses in Tamil and Easy English translations';
COMMENT ON COLUMN bible_verses.book IS 'Full book name (e.g., Genesis, Matthew)';
COMMENT ON COLUMN bible_verses.book_file IS 'File name used in the app (e.g., genesis, matthew)';
COMMENT ON COLUMN bible_verses.chapter IS 'Chapter number';
COMMENT ON COLUMN bible_verses.verse IS 'Verse number within the chapter';
COMMENT ON COLUMN bible_verses.language IS 'Language: tamil or english';
COMMENT ON COLUMN bible_verses.text IS 'The actual verse text';
COMMENT ON COLUMN bible_verses.testament IS 'Testament: old or new';
