// Supabase Configuration for Bible Verses
const SUPABASE_BIBLE_CONFIG = {
    url: 'https://encjogfdbrfcatvytpir.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck',
    tableName: 'bible_verses'
};

// Bible Data Manager - handles caching and API calls
class BibleDataManager {
    constructor() {
        this.cache = new Map(); // In-memory cache
        this.bookCache = new Map(); // Cache for entire books
        this.supabaseClient = null;
        this.initSupabase();
    }

    initSupabase() {
        if (typeof supabase === 'undefined') {
            console.error('Supabase library not loaded');
            return;
        }
        this.supabaseClient = supabase.createClient(
            SUPABASE_BIBLE_CONFIG.url,
            SUPABASE_BIBLE_CONFIG.anonKey
        );
    }

    // Generate cache key for chapter
    getCacheKey(bookFile, chapter, language) {
        return `${bookFile}_${chapter}_${language}`;
    }

    // Generate cache key for entire book
    getBookCacheKey(bookFile, language) {
        return `${bookFile}_${language}_full`;
    }

    // Load entire book at once
    async loadEntireBook(bookFile, language) {
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        
        // Check if book is already cached
        if (this.bookCache.has(bookCacheKey)) {
            console.log(`Book cache hit: ${bookFile} (${language})`);
            return this.bookCache.get(bookCacheKey);
        }

        console.log(`Loading entire book from API: ${bookFile} (${language})`);
        
        try {
            // Fetch ALL chapters of the book at once
            const { data, error } = await this.supabaseClient
                .from(SUPABASE_BIBLE_CONFIG.tableName)
                .select('chapter, verse, text')
                .eq('book_file', bookFile)
                .eq('language', language)
                .order('chapter', { ascending: true })
                .order('verse', { ascending: true });

            if (error) {
                console.error('Supabase error:', error);
                return null;
            }

            // Organize data by chapter
            const bookData = {};
            data.forEach(row => {
                if (!bookData[row.chapter]) {
                    bookData[row.chapter] = {};
                }
                bookData[row.chapter][`verse_${row.verse}`] = row.text;
            });

            // Cache entire book
            this.bookCache.set(bookCacheKey, bookData);
            
            // Also cache individual chapters for quick access
            Object.keys(bookData).forEach(chapter => {
                const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
                this.cache.set(chapterKey, bookData[chapter]);
            });

            // Store in localStorage
            this.saveBookToLocalStorage(bookCacheKey, bookData);

            console.log(`✅ Loaded ${Object.keys(bookData).length} chapters for ${bookFile}`);
            return bookData;
        } catch (error) {
            console.error('Error loading entire book:', error);
            return this.loadBookFromLocalStorage(bookCacheKey);
        }
    }

    // Get chapter data (will load entire book if not cached)
    async getChapterData(bookFile, chapter, language) {
        const cacheKey = this.getCacheKey(bookFile, chapter, language);
        
        // Check chapter cache first
        if (this.cache.has(cacheKey)) {
            console.log(`Cache hit: ${cacheKey}`);
            return this.cache.get(cacheKey);
        }

        // Check if book is cached
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        if (this.bookCache.has(bookCacheKey)) {
            const bookData = this.bookCache.get(bookCacheKey);
            const chapterData = bookData[chapter];
            if (chapterData) {
                this.cache.set(cacheKey, chapterData);
                return chapterData;
            }
        }

        // Load entire book (will cache all chapters)
        const bookData = await this.loadEntireBook(bookFile, language);
        if (bookData && bookData[chapter]) {
            return bookData[chapter];
        }

        // Fallback to single chapter load if book load failed
        console.log(`Fallback: Fetching single chapter from API: ${cacheKey}`);
        
        try {
            const { data, error } = await this.supabaseClient
                .from(SUPABASE_BIBLE_CONFIG.tableName)
                .select('verse, text')
                .eq('book_file', bookFile)
                .eq('chapter', chapter)
                .eq('language', language)
                .order('verse', { ascending: true });

            if (error) {
                console.error('Supabase error:', error);
                return null;
            }

            // Transform data to match existing format
            const chapterData = {};
            data.forEach(row => {
                chapterData[`verse_${row.verse}`] = row.text;
            });

            // Cache the result
            this.cache.set(cacheKey, chapterData);
            
            // Store in localStorage for persistence
            this.saveToLocalStorage(cacheKey, chapterData);

            return chapterData;
        } catch (error) {
            console.error('Error fetching chapter data:', error);
            
            // Try to load from localStorage as fallback
            return this.loadFromLocalStorage(cacheKey);
        }
    }

    // Preload adjacent chapters (less necessary now since entire book is loaded)
    // Kept for backward compatibility, but now it just ensures the book is loaded
    async preloadAdjacentChapters(bookFile, currentChapter, language, totalChapters) {
        // With book-level loading, just ensure the current book is loaded
        // All chapters will already be available
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        if (!this.bookCache.has(bookCacheKey)) {
            await this.loadEntireBook(bookFile, language);
        }
    }

    // Save individual chapter to localStorage (for fallback single-chapter loads)
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
        } catch (e) {
            // Quota exceeded - clear old cache
            console.warn('LocalStorage quota exceeded, clearing old cache');
            this.clearOldCache();
            try {
                localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
            } catch (e2) {
                console.error('Failed to save to localStorage even after clearing cache');
            }
        }
    }

    // Save entire book to localStorage
    saveBookToLocalStorage(key, bookData) {
        try {
            localStorage.setItem(`bible_book_${key}`, JSON.stringify(bookData));
            console.log(`Saved entire book to localStorage: ${key}`);
        } catch (e) {
            // Book data might be too large, clear old cache and try again
            console.warn('LocalStorage quota exceeded for book, clearing old cache');
            this.clearOldCache();
            try {
                localStorage.setItem(`bible_book_${key}`, JSON.stringify(bookData));
            } catch (e2) {
                console.error('Failed to save book to localStorage even after clearing cache');
            }
        }
    }

    // Load individual chapter from localStorage
    loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`bible_cache_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading from localStorage:', e);
            return null;
        }
    }

    // Load entire book from localStorage
    loadBookFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`bible_book_${key}`);
            if (data) {
                const bookData = JSON.parse(data);
                console.log(`Loaded entire book from localStorage: ${key}`);
                return bookData;
            }
            return null;
        } catch (e) {
            console.error('Error loading book from localStorage:', e);
            return null;
        }
    }

    // Clear old cache entries (keep only recent 5 books and 10 individual chapters)
    clearOldCache() {
        // Clear old individual chapter caches
        const chapterKeys = Object.keys(localStorage).filter(k => k.startsWith('bible_cache_'));
        if (chapterKeys.length > 10) {
            chapterKeys.slice(0, chapterKeys.length - 10).forEach(k => {
                localStorage.removeItem(k);
                console.log(`Removed old chapter cache: ${k}`);
            });
        }

        // Clear old book caches
        const bookKeys = Object.keys(localStorage).filter(k => k.startsWith('bible_book_'));
        if (bookKeys.length > 5) {
            bookKeys.slice(0, bookKeys.length - 5).forEach(k => {
                localStorage.removeItem(k);
                console.log(`Removed old book cache: ${k}`);
            });
        }
    }

    // Clear all cache (both memory and localStorage)
    clearCache() {
        this.cache.clear();
        this.bookCache.clear();
        Object.keys(localStorage)
            .filter(k => k.startsWith('bible_cache_') || k.startsWith('bible_book_'))
            .forEach(k => localStorage.removeItem(k));
        console.log('All caches cleared');
    }
}

// Initialize global data manager
const bibleDataManager = new BibleDataManager();
