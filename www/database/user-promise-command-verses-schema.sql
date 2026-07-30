-- User-Specific Promise and Command Verses Table Schema for Supabase

-- Table to store promise and command verses specific to each user
CREATE TABLE user_promise_command_verses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    verse_text TEXT NOT NULL,
    reference TEXT NOT NULL,  -- e.g., "Isaiah 54:10", "Psalms 18:10"
    verse_type TEXT NOT NULL,  -- 'promise' or 'command'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, reference, verse_type)
);

-- Create indexes for better query performance
CREATE INDEX idx_user_promise_command_verses_user_id ON user_promise_command_verses(user_id);
CREATE INDEX idx_user_promise_command_verses_type ON user_promise_command_verses(verse_type);
CREATE INDEX idx_user_promise_command_verses_user_type ON user_promise_command_verses(user_id, verse_type);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_promise_command_verses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER user_promise_command_verses_update_timestamp
BEFORE UPDATE ON user_promise_command_verses
FOR EACH ROW
EXECUTE FUNCTION update_user_promise_command_verses_updated_at();

-- Sample data for testing
INSERT INTO user_promise_command_verses (user_id, verse_text, reference, verse_type)
VALUES 
    (1011, 'Call to me and I will answer you and tell you great and unsearchable things you do not know.', 'Jeremiah 33:3', 'promise'),
    (1011, 'Love the Lord your God with all your heart and with all your soul and with all your mind.', 'Matthew 22:37', 'command');
