-- Quiz Chapter Results Table
-- NEW SCHEMA: Stores one row per user per chapter quiz result
-- This replaces the nested JSON approach in quiz_scores table

CREATE TABLE IF NOT EXISTS quiz_chapter_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id BIGINT NOT NULL,
    quiz_date DATE NOT NULL,
    book TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    score INT NOT NULL CHECK (score >= 0 AND score <= 999),
    total_questions INT NOT NULL,
    user_answers JSONB,  -- Store user's answers
    completed_at TIMESTAMP DEFAULT now(),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    
    -- Ensure one result per user per book per chapter per date
    -- This prevents duplicate entries and allows easy updates
    UNIQUE(user_id, quiz_date, book, chapter)
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_id ON quiz_chapter_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_quiz_date ON quiz_chapter_results(quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_date ON quiz_chapter_results(user_id, quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_book_chapter ON quiz_chapter_results(book, chapter);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_score ON quiz_chapter_results(score DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_date_book ON quiz_chapter_results(user_id, quiz_date, book);

-- RLS Policy: Allow all to read quiz results
DROP POLICY IF EXISTS "Allow viewing all quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow viewing all quiz results" ON quiz_chapter_results FOR SELECT USING (true);

-- RLS Policy: Allow inserting quiz results
DROP POLICY IF EXISTS "Allow inserting quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow inserting quiz results" ON quiz_chapter_results FOR INSERT WITH CHECK (true);

-- RLS Policy: Allow updating quiz results
DROP POLICY IF EXISTS "Allow updating quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow updating quiz results" ON quiz_chapter_results FOR UPDATE USING (true) WITH CHECK (true);

-- RLS Policy: Allow deleting quiz results
DROP POLICY IF EXISTS "Allow deleting quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow deleting quiz results" ON quiz_chapter_results FOR DELETE USING (true);

-- Enable RLS
ALTER TABLE quiz_chapter_results ENABLE ROW LEVEL SECURITY;
