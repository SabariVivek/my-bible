-- Bible Reading Tracker Database Schema for Supabase

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    joined_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set the starting value for user IDs to 1001
ALTER SEQUENCE users_id_seq RESTART WITH 1001;

-- Reading progress table
CREATE TABLE reading_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    book_name TEXT NOT NULL,
    chapter_number INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread', -- 'read', 'unread', 'today', 'overdue'
    marked_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, book_name, chapter_number)
);

-- Completed dates table (tracks which days a user marked as complete)
CREATE TABLE completed_dates (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    completed_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, completed_date)
);

-- Indexes for better query performance
CREATE INDEX idx_reading_progress_user_id ON reading_progress(user_id);
CREATE INDEX idx_reading_progress_status ON reading_progress(status);
CREATE INDEX idx_reading_progress_user_book ON reading_progress(user_id, book_name);
CREATE INDEX idx_completed_dates_user_id ON completed_dates(user_id);
CREATE INDEX idx_completed_dates_date ON completed_dates(completed_date);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to auto-update updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reading_progress_updated_at
    BEFORE UPDATE ON reading_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_dates ENABLE ROW LEVEL SECURITY;

-- Allow public access for now (you can restrict this later with auth)
CREATE POLICY "Allow public read access on users" ON users
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on users" ON users
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on users" ON users
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on users" ON users
    FOR DELETE USING (true);

CREATE POLICY "Allow public read access on reading_progress" ON reading_progress
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on reading_progress" ON reading_progress
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on reading_progress" ON reading_progress
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on reading_progress" ON reading_progress
    FOR DELETE USING (true);

CREATE POLICY "Allow public read access on completed_dates" ON completed_dates
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on completed_dates" ON completed_dates
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on completed_dates" ON completed_dates
    FOR UPDATE USING (true);

CREATE POLICY "Allow public delete on completed_dates" ON completed_dates
    FOR DELETE USING (true);

-- Views for common queries
CREATE VIEW user_progress_summary AS
SELECT 
    u.id,
    u.name,
    u.joined_date,
    COUNT(DISTINCT rp.id) FILTER (WHERE rp.status = 'read') as chapters_read,
    COUNT(DISTINCT cd.completed_date) as days_completed,
    ROUND(
        (COUNT(DISTINCT rp.id) FILTER (WHERE rp.status = 'read')::NUMERIC / 1189) * 100, 
        2
    ) as progress_percentage
FROM users u
LEFT JOIN reading_progress rp ON u.id = rp.user_id
LEFT JOIN completed_dates cd ON u.id = cd.user_id
GROUP BY u.id, u.name, u.joined_date;

-- Comments
COMMENT ON TABLE users IS 'Stores user profiles for Bible reading tracker';
COMMENT ON TABLE reading_progress IS 'Tracks individual chapter reading progress for each user';
COMMENT ON TABLE completed_dates IS 'Records dates when users completed their daily reading';
