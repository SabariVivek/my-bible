-- Quiz Scores Table
-- Stores user quiz scores for each day
-- 1 point per correct answer

CREATE TABLE IF NOT EXISTS quiz_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    quiz_date DATE NOT NULL,
    score INT NOT NULL CHECK (score >= 0 AND score <= 999), -- Max 999 questions per day
    total_questions INT NOT NULL,
    chapters_quiz JSONB, -- Store which chapters were in the quiz and user answers
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    
    -- Ensure one quiz score per user per day
    UNIQUE(user_id, quiz_date)
);

-- Index for fast queries
CREATE INDEX IF NOT EXISTS idx_quiz_scores_user_id ON quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_quiz_date ON quiz_scores(quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_user_date ON quiz_scores(user_id, quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_scores_score ON quiz_scores(score DESC);

-- RLS Policy: Users can only view their own quiz scores
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own quiz scores"
    ON quiz_scores FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz scores"
    ON quiz_scores FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz scores"
    ON quiz_scores FOR UPDATE
    USING (auth.uid() = user_id);

-- View for leaderboard (today's scores)
CREATE OR REPLACE VIEW quiz_leaderboard_today AS
SELECT 
    u.id,
    u.raw_user_meta_data->>'name' as name,
    COALESCE(qs.score, 0) as score,
    COALESCE(qs.total_questions, 0) as total_questions,
    ROW_NUMBER() OVER (ORDER BY COALESCE(qs.score, 0) DESC) as rank
FROM auth.users u
LEFT JOIN quiz_scores qs ON u.id = qs.user_id AND qs.quiz_date = CURRENT_DATE
ORDER BY score DESC;

-- View for overall leaderboard (all time)
CREATE OR REPLACE VIEW quiz_leaderboard_all_time AS
SELECT 
    u.id,
    u.raw_user_meta_data->>'name' as name,
    SUM(COALESCE(qs.score, 0)) as total_score,
    COUNT(qs.id) as quizzes_taken,
    AVG(COALESCE(qs.score, 0))::INT as average_score,
    ROW_NUMBER() OVER (ORDER BY SUM(COALESCE(qs.score, 0)) DESC) as rank
FROM auth.users u
LEFT JOIN quiz_scores qs ON u.id = qs.user_id
GROUP BY u.id, u.raw_user_meta_data->>'name'
ORDER BY total_score DESC;
