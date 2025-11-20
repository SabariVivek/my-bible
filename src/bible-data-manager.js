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

    // Generate cache key
    getCacheKey(bookFile, chapter, language) {
        return `${bookFile}_${chapter}_${language}`;
    }

    // Get chapter data from cache or API
    async getChapterData(bookFile, chapter, language) {
        const cacheKey = this.getCacheKey(bookFile, chapter, language);
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            console.log(`Cache hit: ${cacheKey}`);
            return this.cache.get(cacheKey);
        }

        console.log(`Fetching from API: ${cacheKey}`);
        
        try {
            // Fetch from Supabase
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

    // Preload adjacent chapters for better UX
    async preloadAdjacentChapters(bookFile, currentChapter, language, totalChapters) {
        const chaptersToPreload = [];
        
        // Preload previous chapter
        if (currentChapter > 1) {
            chaptersToPreload.push(currentChapter - 1);
        }
        
        // Preload next chapter
        if (currentChapter < totalChapters) {
            chaptersToPreload.push(currentChapter + 1);
        }

        // Preload in background without waiting
        chaptersToPreload.forEach(chapter => {
            this.getChapterData(bookFile, chapter, language).catch(err => {
                console.log(`Preload failed for chapter ${chapter}`);
            });
        });
    }

    // Save to localStorage
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
        } catch (e) {
            // Quota exceeded - clear old cache
            this.clearOldCache();
        }
    }

    // Load from localStorage
    loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`bible_cache_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }

    // Clear old cache entries (keep only recent 20 chapters)
    clearOldCache() {
        const keys = Object.keys(localStorage).filter(k => k.startsWith('bible_cache_'));
        if (keys.length > 20) {
            keys.slice(0, keys.length - 20).forEach(k => localStorage.removeItem(k));
        }
    }

    // Clear all cache
    clearCache() {
        this.cache.clear();
        Object.keys(localStorage)
            .filter(k => k.startsWith('bible_cache_'))
            .forEach(k => localStorage.removeItem(k));
    }
}

// Initialize global data manager
const bibleDataManager = new BibleDataManager();
