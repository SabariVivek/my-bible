-- Migration: Add daily_portions table
-- This table tracks individual portion completion within each day's reading

CREATE TABLE IF NOT EXISTS daily_portions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reading_date DATE NOT NULL,
    portion_index INTEGER NOT NULL,
    completed BOOLEAN DEFAULT true,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, reading_date, portion_index)
);

-- Indexes for better query performance
CREATE INDEX idx_daily_portions_user_id ON daily_portions(user_id);
CREATE INDEX idx_daily_portions_date ON daily_portions(reading_date);
CREATE INDEX idx_daily_portions_user_date ON daily_portions(user_id, reading_date);

-- Trigger to auto-update updated_at
CREATE TRIGGER update_daily_portions_updated_at
    BEFORE UPDATE ON daily_portions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE daily_portions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on daily_portions" ON daily_portions
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on daily_portions" ON daily_portions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on daily_portions" ON daily_portions
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on daily_portions" ON daily_portions
    FOR DELETE USING (true);

-- Comments
COMMENT ON TABLE daily_portions IS 'Tracks individual portion completion for each day''s reading assignment';
COMMENT ON COLUMN daily_portions.portion_index IS 'Zero-based index of the portion within the day''s reading (0, 1, 2, etc.)';
COMMENT ON COLUMN daily_portions.completed IS 'Whether this specific portion has been completed';
