-- Create the new prayers table without user_id
CREATE TABLE IF NOT EXISTS prayers (
    id BIGSERIAL PRIMARY KEY,
    prayer_name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Family', 'Others', 'World')),
    description TEXT,
    badge TEXT,
    members JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_prayers_category 
    ON prayers(category);

CREATE INDEX IF NOT EXISTS idx_prayers_created_at 
    ON prayers(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE prayers ENABLE ROW LEVEL SECURITY;

-- Create policies that allow all users to access prayers
CREATE POLICY "Allow all users to read prayers"
    ON prayers
    FOR SELECT
    USING (true);

CREATE POLICY "Allow all users to create prayers"
    ON prayers
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow all users to update prayers"
    ON prayers
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow all users to delete prayers"
    ON prayers
    FOR DELETE
    USING (true);