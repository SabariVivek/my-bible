-- Reset all quiz scores
-- This will delete all records from the quiz_scores table

DELETE FROM quiz_scores;

-- Alternatively, to truncate the table (faster and resets sequences):
-- TRUNCATE TABLE quiz_scores;
