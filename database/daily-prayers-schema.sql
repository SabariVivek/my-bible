-- Daily Prayers Table Schema
-- This table stores daily prayer content with date and Bible reference

CREATE TABLE IF NOT EXISTS daily_prayers (
    id BIGSERIAL PRIMARY KEY,
    prayer_content TEXT NOT NULL,
    prayer_date DATE NOT NULL UNIQUE,
    prayer_reference TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_daily_prayers_date
    ON daily_prayers(prayer_date DESC);

CREATE INDEX IF NOT EXISTS idx_daily_prayers_reference
    ON daily_prayers(prayer_reference);

-- Enable Row Level Security (RLS)
ALTER TABLE daily_prayers ENABLE ROW LEVEL SECURITY;

-- Create policies that allow all users to access daily prayers
CREATE POLICY "Allow all users to read daily prayers"
    ON daily_prayers
    FOR SELECT
    USING (true);

CREATE POLICY "Allow all users to create daily prayers"
    ON daily_prayers
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow all users to update daily prayers"
    ON daily_prayers
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow all users to delete daily prayers"
    ON daily_prayers
    FOR DELETE
    USING (true);
