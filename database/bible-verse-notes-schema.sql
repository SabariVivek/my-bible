-- Bible Verse Notes Table
-- Stores text notes for individual Bible verses
-- Separate from bookmarks (which store colors)

CREATE TABLE IF NOT EXISTS bible_verse_notes (
    id BIGSERIAL PRIMARY KEY,
    book_file TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    text TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Ensure one note per verse
    CONSTRAINT bible_verse_notes_unique_verse UNIQUE (book_file, chapter, verse)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_bible_verse_notes_book_chapter 
ON bible_verse_notes(book_file, chapter);

-- Enable RLS (Row Level Security)
ALTER TABLE bible_verse_notes ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to recreate them
DROP POLICY IF EXISTS "Allow public read" ON bible_verse_notes;
DROP POLICY IF EXISTS "Allow public insert" ON bible_verse_notes;
DROP POLICY IF EXISTS "Allow public update" ON bible_verse_notes;
DROP POLICY IF EXISTS "Allow public delete" ON bible_verse_notes;

-- Create RLS policies for public read/write
CREATE POLICY "Allow public read" ON bible_verse_notes
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON bible_verse_notes
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update" ON bible_verse_notes
    FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Allow public delete" ON bible_verse_notes
    FOR DELETE USING (true);

-- Add table comment
COMMENT ON TABLE bible_verse_notes IS 'Stores text notes for individual Bible verses. Notes are separate from bookmarks (colors).';
COMMENT ON COLUMN bible_verse_notes.book_file IS 'Book file identifier (e.g., "genesis", "ii_peter")';
COMMENT ON COLUMN bible_verse_notes.chapter IS 'Chapter number';
COMMENT ON COLUMN bible_verse_notes.verse IS 'Verse number';
COMMENT ON COLUMN bible_verse_notes.text IS 'Note text content';
COMMENT ON COLUMN bible_verse_notes.timestamp IS 'Creation timestamp';
COMMENT ON COLUMN bible_verse_notes.updated_at IS 'Last update timestamp';
