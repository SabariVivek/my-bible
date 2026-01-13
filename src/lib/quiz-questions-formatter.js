// Quiz Questions Formatter
// This file handles styling for quiz questions loaded from Supabase

/**
 * Apply styling to question number badge
 * @param {number} questionNumber - The question number (1-10)
 * @returns {string} Styled HTML span element
 */
function formatQuestionNumber(questionNumber) {
    const spanStyle = `display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background-color: #1a73e8; color: white; font-weight: bold; border-radius: 6px; font-size: 0.75rem; box-shadow: 0 2px 4px rgba(26, 115, 232, 0.3); margin-right: 8px;`;
    return `<span style="${spanStyle}">${questionNumber}</span>`;
}

/**
 * Format raw question from Supabase with styling
 * @param {Object} rawQuestion - Question object from Supabase
 * @returns {Object} Formatted question object with styled question text
 */
function formatQuestionFromSupabase(rawQuestion) {
    return {
        question: formatQuestionNumber(rawQuestion.question_number) + rawQuestion.question_text,
        options: [
            `A. ${rawQuestion.option_a}`,
            `B. ${rawQuestion.option_b}`,
            `C. ${rawQuestion.option_c}`,
            `D. ${rawQuestion.option_d}`
        ],
        correctAnswer: rawQuestion.correct_answer,
        verse: rawQuestion.verse_reference
    };
}

/**
 * Load quiz questions from Supabase for a specific book and chapter
 * @param {string} book - Book name (e.g., 'matthew')
 * @param {number} chapter - Chapter number
 * @returns {Promise<Array>} Array of formatted question objects
 */
async function loadQuizQuestionsFromSupabase(book, chapter) {
    try {
        const { data, error } = await supabase
            .from('quiz_questions')
            .select('*')
            .eq('book', book)
            .eq('chapter', chapter)
            .order('question_number', { ascending: true });

        if (error) {
            console.error('Error loading quiz questions from Supabase:', error);
            return [];
        }

        // Format questions with styling applied locally
        return data.map(formatQuestionFromSupabase);
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
        return [];
    }
}

/**
 * Initialize quiz questions from Supabase or fallback to local JSON
 * @returns {Promise<Object>} Quiz questions object organized by book and chapter
 */
async function initializeQuizQuestions() {
    try {
        // Check if Supabase is available
        if (typeof supabase === 'undefined') {
            console.warn('Supabase not available, using local quiz questions');
            return window.quizQuestions || {};
        }

        // Fetch all quiz questions from Supabase
        const { data, error } = await supabase
            .from('quiz_questions')
            .select('*')
            .order('book', { ascending: true })
            .order('chapter', { ascending: true })
            .order('question_number', { ascending: true });

        if (error) {
            console.error('Error loading quiz questions from Supabase:', error);
            return window.quizQuestions || {};
        }

        // Organize questions by book and chapter
        const quizData = {};
        data.forEach(question => {
            if (!quizData[question.book]) {
                quizData[question.book] = {};
            }
            if (!quizData[question.book][question.chapter]) {
                quizData[question.book][question.chapter] = { questions: [] };
            }
            quizData[question.book][question.chapter].questions.push(
                formatQuestionFromSupabase(question)
            );
        });

        return quizData;
    } catch (error) {
        console.error('Error initializing quiz questions:', error);
        return window.quizQuestions || {};
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatQuestionNumber,
        formatQuestionFromSupabase,
        loadQuizQuestionsFromSupabase,
        initializeQuizQuestions
    };
}
