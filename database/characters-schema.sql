-- Bible Characters Table Schema
-- Stores character information for each chapter in the Bible

CREATE TABLE IF NOT EXISTS bible_characters (
    id BIGSERIAL PRIMARY KEY,
    book_file TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    testament TEXT NOT NULL CHECK (testament IN ('old-testament', 'new-testament')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_bible_characters_book_chapter 
    ON bible_characters(book_file, chapter);

CREATE INDEX IF NOT EXISTS idx_bible_characters_testament 
    ON bible_characters(testament);

CREATE INDEX IF NOT EXISTS idx_bible_characters_name 
    ON bible_characters(name);

-- Enable Row Level Security (RLS)
ALTER TABLE bible_characters ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to bible_characters"
    ON bible_characters FOR SELECT
    USING (true);

-- Create policy to allow authenticated insert (for migration)
CREATE POLICY "Allow authenticated insert to bible_characters"
    ON bible_characters FOR INSERT
    WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Add comments for documentation
COMMENT ON TABLE bible_characters IS 'Stores information about characters mentioned in each chapter of the Bible';
COMMENT ON COLUMN bible_characters.book_file IS 'Book identifier (e.g., genesis, matthew)';
COMMENT ON COLUMN bible_characters.chapter IS 'Chapter number';
COMMENT ON COLUMN bible_characters.name IS 'Character name';
COMMENT ON COLUMN bible_characters.description IS 'Brief description of the character in this chapter';
COMMENT ON COLUMN bible_characters.testament IS 'Testament: old-testament or new-testament';
