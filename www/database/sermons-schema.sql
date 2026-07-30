-- Sermons Table Schema for Supabase

-- Sermons table
CREATE TABLE sermons (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    tamil_title TEXT,
    sermon_date DATE NOT NULL,
    verses JSONB DEFAULT '[]'::jsonb,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_sermons_user_id ON sermons(user_id);
CREATE INDEX idx_sermons_date ON sermons(sermon_date DESC);
CREATE INDEX idx_sermons_user_date ON sermons(user_id, sermon_date DESC);
CREATE INDEX idx_sermons_created_at ON sermons(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_sermons_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_sermons_updated_at
    BEFORE UPDATE ON sermons
    FOR EACH ROW
    EXECUTE FUNCTION update_sermons_updated_at();

-- Row Level Security (RLS)
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;

-- Allow public access for now (you can restrict this later with auth)
CREATE POLICY "Allow public read access on sermons" ON sermons
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on sermons" ON sermons
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on sermons" ON sermons
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on sermons" ON sermons
    FOR DELETE USING (true);

-- Comments
COMMENT ON TABLE sermons IS 'Stores user sermon notes with Bible verse references';
COMMENT ON COLUMN sermons.title IS 'English title of the sermon';
COMMENT ON COLUMN sermons.tamil_title IS 'Optional Tamil title of the sermon';
COMMENT ON COLUMN sermons.sermon_date IS 'Date of the sermon';
COMMENT ON COLUMN sermons.verses IS 'JSON array of verse objects with book, chapter, verse, display properties';
COMMENT ON COLUMN sermons.content IS 'Full sermon notes/content (for future use)';
