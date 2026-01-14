-- Complete Quiz System Setup Script
-- Run this in Supabase SQL Editor if you're setting up from scratch
-- For existing deployments, run quiz-chapter-results-schema.sql first, then this migration script

-- ============================================================================
-- PART 1: Create the new quiz_chapter_results table
-- ============================================================================

CREATE TABLE IF NOT EXISTS quiz_chapter_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id BIGINT NOT NULL,
    quiz_date DATE NOT NULL,
    book TEXT NOT NULL,
    chapter INTEGER NOT NULL,
    score INT NOT NULL CHECK (score >= 0 AND score <= 999),
    total_questions INT NOT NULL,
    user_answers JSONB,
    completed_at TIMESTAMP DEFAULT now(),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    UNIQUE(user_id, quiz_date, book, chapter)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_id ON quiz_chapter_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_quiz_date ON quiz_chapter_results(quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_date ON quiz_chapter_results(user_id, quiz_date);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_book_chapter ON quiz_chapter_results(book, chapter);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_score ON quiz_chapter_results(score DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_chapter_results_user_date_book ON quiz_chapter_results(user_id, quiz_date, book);

-- Enable Row Level Security
ALTER TABLE quiz_chapter_results ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
DROP POLICY IF EXISTS "Allow viewing all quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow viewing all quiz results" ON quiz_chapter_results FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow inserting quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow inserting quiz results" ON quiz_chapter_results FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow updating quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow updating quiz results" ON quiz_chapter_results FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow deleting quiz results" ON quiz_chapter_results;
CREATE POLICY "Allow deleting quiz results" ON quiz_chapter_results FOR DELETE USING (true);

-- ============================================================================
-- PART 2: Migrate data from old quiz_scores table (if it exists)
-- ============================================================================

-- Check if quiz_scores table exists and has data
DO $$ 
DECLARE
    table_exists BOOLEAN;
    record_count INT;
BEGIN
    -- Check if quiz_scores table exists
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_name = 'quiz_scores'
    ) INTO table_exists;

    IF table_exists THEN
        -- Count records in quiz_scores
        SELECT COUNT(*) INTO record_count FROM quiz_scores;
        
        IF record_count > 0 THEN
            RAISE NOTICE 'Found % records in quiz_scores table. Starting migration...', record_count;
            
            -- Migrate data
            INSERT INTO quiz_chapter_results (user_id, quiz_date, book, chapter, score, total_questions, user_answers, completed_at)
            SELECT 
                qs.user_id,
                qs.quiz_date,
                book_name::text as book,
                chapter_num::int as chapter,
                (chapter_data->>'score')::int as score,
                (chapter_data->>'total_questions')::int as total_questions,
                chapter_data->'userAnswers' as user_answers,
                (chapter_data->>'completed_at')::timestamp as completed_at
            FROM quiz_scores qs,
            LATERAL jsonb_each((qs.chapters_quiz)::jsonb) AS books(book_name, book_data),
            LATERAL jsonb_each(book_data) AS chapters(chapter_num, chapter_data)
            WHERE qs.chapters_quiz IS NOT NULL
              AND chapter_data->>'score' IS NOT NULL
            ON CONFLICT (user_id, quiz_date, book, chapter) DO NOTHING;
            
            RAISE NOTICE 'Migration complete. Verify with: SELECT COUNT(*) FROM quiz_chapter_results;';
        ELSE
            RAISE NOTICE 'No records found in quiz_scores. Table appears to be empty.';
        END IF;
    ELSE
        RAISE NOTICE 'quiz_scores table does not exist. This is expected for new installations.';
    END IF;
END $$;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check new table is populated
SELECT COUNT(*) as total_chapter_results FROM quiz_chapter_results;

-- Check distribution by book
SELECT book, COUNT(*) as count FROM quiz_chapter_results GROUP BY book ORDER BY count DESC;

-- Check distribution by user
SELECT user_id, COUNT(*) as chapters_completed FROM quiz_chapter_results GROUP BY user_id ORDER BY user_id;

-- Check top scores
SELECT user_id, book, chapter, score, total_questions, quiz_date 
FROM quiz_chapter_results 
ORDER BY score DESC 
LIMIT 10;

-- ============================================================================
-- OPTIONAL: View old table structure (for reference)
-- ============================================================================

-- Uncomment to see old structure:
-- SELECT * FROM quiz_scores LIMIT 1;

-- ============================================================================
-- NOTES FOR PRODUCTION DEPLOYMENT
-- ============================================================================

/*
AFTER DEPLOYMENT:
1. Test the app for 7 days in production
2. Monitor error logs for any issues
3. Verify all quiz data is accessible
4. When confident in new system, consider removing old table:

   DROP TABLE quiz_scores;

5. Update documentation to reference only quiz_chapter_results table

ROLLBACK PROCEDURE (if needed):
1. Deploy previous version of app code
2. Both tables will continue to exist
3. Old code will work with old table
4. No data loss

PERFORMANCE NOTES:
- Indexes are automatically created
- Queries will be faster with the new schema
- Leaderboard queries no longer need JSON parsing
- Easier to scale if needed
*/
