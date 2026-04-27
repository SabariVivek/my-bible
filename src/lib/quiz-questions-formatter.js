// Quiz Questions Formatter
// This file handles styling for quiz questions loaded from Supabase

/**
 * Normalize book name for database queries
 * Handles variations like "1 Corinthians", "I Corinthians", "First Corinthians"
 * @param {string} book - Book name to normalize
 * @returns {string} Normalized book name
 */
function normalizeQuizBookName(book) {
    if (!book) return '';
    
    // Lowercase and remove extra spaces
    let normalized = book.toLowerCase().trim();
    
    // Convert number words to digits (if any)
    normalized = normalized
        .replace(/\bfirst\b/, '1')
        .replace(/\bsecond\b/, '2')
        .replace(/\bthird\b/, '3')
        .replace(/\bi\b(?=\s+[a-z])/g, '1')  // Roman numeral I followed by space and letter
        .replace(/\bii\b(?=\s+[a-z])/g, '2') // Roman numeral II followed by space and letter
        .replace(/\biii\b(?=\s+[a-z])/g, '3'); // Roman numeral III followed by space and letter
    
    // Normalize spaces to hyphens
    normalized = normalized.replace(/\s+/g, '-');
    
    return normalized;
}

/**
 * Get all possible book name variations for database searching
 * @param {string} book - Book name
 * @returns {string[]} Array of possible book name formats
 */
function getBookNameVariations(book) {
    const normalized = normalizeQuizBookName(book);
    const variations = [];
    
    // Start with normalized version (1-corinthians)
    variations.push(normalized);
    
    // Add space-separated lowercase (1 corinthians)
    const spaceVersion = normalized.replace(/-/g, ' ');
    variations.push(spaceVersion);
    
    // Add original lowercase (1 corinthians or I corinthians as-is)
    variations.push(book.toLowerCase());
    
    // Add camelCase version if it starts with a number
    if (/^\d/.test(book)) {
        const num = book.match(/^\d+/)[0];
        const rest = book.substring(num.length).trim();
        variations.push(num + rest.charAt(0).toUpperCase() + rest.slice(1).toLowerCase());
    }
    
    // Try without the number prefix if it exists
    if (/^\d/.test(normalized)) {
        const withoutNumber = normalized.replace(/^\d+[\s-]/, '');
        if (withoutNumber !== normalized) {
            variations.push(withoutNumber);
            variations.push(withoutNumber.replace(/-/g, ' ')); // Also with spaces
        }
    }
    
    // Add original book format as-is (might be stored exactly as provided)
    variations.push(book);
    
    // Try all lowercase for the full book name
    const allLowerNoDash = book.toLowerCase().replace(/\s+/g, '');
    if (!variations.includes(allLowerNoDash)) {
        variations.push(allLowerNoDash);
    }
    
    return [...new Set(variations)]; // Remove duplicates
}

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
 * @param {string} book - Book name (e.g., 'matthew' or '1 Corinthians')
 * @param {number} chapter - Chapter number
 * @returns {Promise<Array>} Array of formatted question objects
 */
async function loadQuizQuestionsFromSupabase(book, chapter) {
    try {
        // DB stores book names in lowercase-hyphenated format (e.g., "song-of-songs", "1-corinthians", "matthew")
        const dbBookName = normalizeQuizBookName(book);
        
        // Known aliases: UI key → DB key (when the name differs, not just format)
        const dbAliases = {
            'song-of-solomon': 'song-of-songs',
        };
        const dbAlias = dbAliases[dbBookName];
        
        // Query 1: Try the normalized hyphenated form (matches DB format directly)
        let { data, error } = await supabase
            .from('quiz_questions')
            .select('*')
            .eq('book', dbBookName)
            .eq('chapter', chapter)
            .order('question_number', { ascending: true });

        // Query 2: If there's a known alias, try that
        if ((!data || data.length === 0) && dbAlias) {
            const { data: aliasData, error: aliasError } = await supabase
                .from('quiz_questions')
                .select('*')
                .eq('book', dbAlias)
                .eq('chapter', chapter)
                .order('question_number', { ascending: true });
            
            if (aliasData?.length > 0) {
                data = aliasData;
                error = null;
            }
        }

        // Query 3: Fallback - try original UI name with case-insensitive match
        if ((!data || data.length === 0) && book !== dbBookName) {
            const { data: origData, error: origError } = await supabase
                .from('quiz_questions')
                .select('*')
                .ilike('book', book)
                .eq('chapter', chapter)
                .order('question_number', { ascending: true });
            
            if (origData?.length > 0) {
                data = origData;
                error = null;
            }
        }

        if (error) {
            console.error(`Error loading quiz questions for ${book} Chapter ${chapter}:`, error);
            return [];
        }

        if (!data || data.length === 0) {
            return [];
        }

        return data.map(formatQuestionFromSupabase);
    } catch (error) {
        console.error(`Error fetching quiz questions for ${book} Chapter ${chapter}:`, error);
        return [];
    }
}

/**
 * Load and cache quiz questions for a specific chapter (lazy-loading version)
 * Only loads the chapter when called, not all questions upfront
 * @param {string} book - Book name (e.g., 'matthew' or '1 Corinthians')
 * @param {number} chapter - Chapter number
 * @returns {Promise<Array>} Array of formatted question objects
 */
async function loadChapterQuestionsLazy(book, chapter) {
    try {
        if (typeof supabase === 'undefined') {
            return [];
        }

        // Use normalized book name for consistent cache keys
        const bookKey = normalizeQuizBookName(book);
        const chapterKey = String(chapter);
        
        // Check if already cached
        if (window.quizQuestionsCache && window.quizQuestionsCache[bookKey] && window.quizQuestionsCache[bookKey][chapterKey]) {
            return window.quizQuestionsCache[bookKey][chapterKey];
        }

        // Load from database
        const questions = await loadQuizQuestionsFromSupabase(book, chapter);
        
        // Cache the results
        if (!window.quizQuestionsCache) {
            window.quizQuestionsCache = {};
        }
        if (!window.quizQuestionsCache[bookKey]) {
            window.quizQuestionsCache[bookKey] = {};
        }
        window.quizQuestionsCache[bookKey][chapterKey] = questions;
        
        return questions;
    } catch (error) {
        console.error('Error in loadChapterQuestionsLazy:', error);
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

        // Fetch all quiz questions from Supabase using pagination
        // Supabase server caps results at 1000 rows regardless of .limit(),
        // so we paginate to ensure all books are fetched
        let allData = [];
        let from = 0;
        const pageSize = 1000;
        while (true) {
            const { data, error: pageError } = await supabase
                .from('quiz_questions')
                .select('*')
                .order('book', { ascending: true })
                .order('chapter', { ascending: true })
                .order('question_number', { ascending: true })
                .range(from, from + pageSize - 1);

            if (pageError) {
                console.error('Error loading quiz questions from Supabase:', pageError);
                return window.quizQuestions || {};
            }
            if (!data || data.length === 0) break;
            allData = allData.concat(data);
            if (data.length < pageSize) break;
            from += pageSize;
        }

        if (allData.length === 0) {
            console.warn('No quiz questions found in Supabase');
            return window.quizQuestions || {};
        }

        // Organize questions by book and chapter
        // Normalize book key to lowercase-hyphenated to match UI lookups
        // Map Supabase book name aliases to the UI-expected key
        const bookAliases = {
            'song-of-songs': 'song-of-solomon'
        };
        const quizData = {};
        allData.forEach(question => {
            let bookKey = question.book.toLowerCase().replace(/\s+/g, '-');
            bookKey = bookAliases[bookKey] || bookKey;
            if (!quizData[bookKey]) {
                quizData[bookKey] = {};
            }
            if (!quizData[bookKey][question.chapter]) {
                quizData[bookKey][question.chapter] = { questions: [] };
            }
            quizData[bookKey][question.chapter].questions.push(
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
        loadChapterQuestionsLazy,
        initializeQuizQuestions
    };
}
