-- Yearly and Monthly Verses Table Schema for Supabase

-- Table to store verse of the year and verse of the month
CREATE TABLE yearly_monthly_verses (
    id SERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    month INTEGER,  -- NULL for yearly verses, 1-12 for monthly verses
    verse_text TEXT NOT NULL,
    book_name TEXT NOT NULL,
    chapter_number INTEGER NOT NULL,
    verse_number INTEGER,
    reference TEXT NOT NULL,  -- e.g., "Isaiah 54:10", "Psalms 18:10"
    verse_type TEXT NOT NULL,  -- 'yearly' or 'monthly'
    language TEXT NOT NULL DEFAULT 'tamil',  -- 'tamil', 'english', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by TEXT,  -- admin user who created this verse
    UNIQUE(year, month, verse_type, language)
);

-- Create indexes for better query performance
CREATE INDEX idx_yearly_monthly_verses_year ON yearly_monthly_verses(year);
CREATE INDEX idx_yearly_monthly_verses_month ON yearly_monthly_verses(month);
CREATE INDEX idx_yearly_monthly_verses_type ON yearly_monthly_verses(verse_type);
CREATE INDEX idx_yearly_monthly_verses_year_month ON yearly_monthly_verses(year, month);
CREATE INDEX idx_yearly_monthly_verses_language ON yearly_monthly_verses(language);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_yearly_monthly_verses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER yearly_monthly_verses_update_timestamp
BEFORE UPDATE ON yearly_monthly_verses
FOR EACH ROW
EXECUTE FUNCTION update_yearly_monthly_verses_updated_at();

-- Sample data for current year
INSERT INTO yearly_monthly_verses (year, month, verse_text, book_name, chapter_number, verse_number, reference, verse_type, language, created_by)
VALUES 
    (2026, NULL, 'மலைகள் விலகினாலும், பர்வதங்கள் நிலைபெயர்ந்தாலும், என் கிருபை உன்னைவிட்டு விலகாமலும், என் சமாதானத்தின் உடன்படிக்கை நிலைபெயராமலும் இருக்கும் என்று, உன்மேல் மனதுருகுகிற கர்த்தர் சொல்லுகிறார்.', 'Isaiah', 54, 10, 'Isaiah 54:10', 'yearly', 'tamil', 'admin'),
    (2026, 2, 'கர்த்தர் என் கன்மலையும், என் கோட்டையும், என் இரட்சகரும், என் தேவனும், நான் நம்பியிருக்கிற என் துருகமும், என் கேடகமும், என் இரட்சணியக் கொம்பும், என் உயர்ந்த அடைக்கலமுமாயிருக்கிறார்.', 'Psalms', 18, 10, 'Psalms 18:10', 'monthly', 'tamil', 'admin');
