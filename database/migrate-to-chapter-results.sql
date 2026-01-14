-- Migration Script: Convert old quiz_scores nested JSON to new quiz_chapter_results table
-- Run this to migrate existing data from the old schema to the new one

-- First, check if quiz_chapter_results table exists and has the right structure
-- This will populate the new table from existing data in quiz_scores

BEGIN;

-- Insert all chapter data from quiz_scores into quiz_chapter_results
-- This extracts each chapter from the nested chapters_quiz JSON and creates individual rows

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

-- Verify migration
SELECT COUNT(*) as migrated_chapters FROM quiz_chapter_results;
SELECT COUNT(*) as old_quiz_records FROM quiz_scores;

COMMIT;

-- After verification, you can optionally run these cleanup commands:
-- DROP TABLE quiz_scores; -- Only after confirming all data is migrated
-- This is not recommended until you're 100% sure the migration was successful
