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
        this.db = null; // IndexedDB instance
        this.dbReady = false;
        this.dbInitPromise = null;
        this.isOfflineMode = false; // Track if we're in offline mode
        this.apiTimeout = 5000; // 5 second timeout for API calls
        this.initSupabase();
        this.dbInitPromise = this.initIndexedDB();
    }
    // Check if network is available by testing if we can reach the API
    async checkNetworkConnectivity() {
        if (!this.supabaseClient || !navigator.onLine) {
            return false;
        }
        try {
            // Quick test query with timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);
            const { error } = await this.supabaseClient
                .from(SUPABASE_BIBLE_CONFIG.tableName)
                .select('chapter', { count: 'exact', head: true })
                .limit(1)
                .abortSignal(controller.signal);
            clearTimeout(timeoutId);
            return !error;
        } catch (error) {
            return false;
        }
    }
    initSupabase() {
        if (typeof supabase === 'undefined') {
            this.supabaseClient = null;
            return;
        }
        try {
            this.supabaseClient = supabase.createClient(
                SUPABASE_BIBLE_CONFIG.url,
                SUPABASE_BIBLE_CONFIG.anonKey
            );
        } catch (error) {
            this.supabaseClient = null;
        }
    }
    normalizeBookData(rawData) {
        if (!rawData || typeof rawData !== 'object') return null;
        const normalized = {};
        Object.keys(rawData).forEach(chapterKey => {
            const chapterVal = rawData[chapterKey];
            normalized[chapterKey] = {};
            if (Array.isArray(chapterVal)) {
                chapterVal.forEach(item => {
                    if (item && item.verse !== undefined && item.text !== undefined) {
                        normalized[chapterKey][`verse_${item.verse}`] = item.text;
                    }
                });
            } else if (typeof chapterVal === 'object' && chapterVal !== null) {
                Object.keys(chapterVal).forEach(vk => {
                    const verseItem = chapterVal[vk];
                    if (typeof verseItem === 'string') {
                        const cleanKey = vk.startsWith('verse_') ? vk : `verse_${vk}`;
                        normalized[chapterKey][cleanKey] = verseItem;
                    } else if (verseItem && typeof verseItem === 'object' && verseItem.text !== undefined) {
                        const vNum = verseItem.verse || vk.replace('verse_', '');
                        normalized[chapterKey][`verse_${vNum}`] = verseItem.text;
                    }
                });
            }
        });
        return normalized;
    }

    // Load Bible data from local JS files (bundled with app)
    async loadFromLocalFile(bookFile, language) {
        const varName = `bibleData_${bookFile}_${language}`;
        // Check if already loaded in memory
        if (window[varName]) {
            return window[varName];
        }

        // Determine testament folder if possible
        const bookInfo = (typeof bibleBooks !== 'undefined' && Array.isArray(bibleBooks))
            ? bibleBooks.find(b => b.file === bookFile)
            : null;
        const testamentDir = bookInfo
            ? (bookInfo.testament === 'old' ? 'old-testament' : 'new-testament')
            : null;

        const possiblePaths = [];
        if (testamentDir) {
            possiblePaths.push(`./data/bible/${language}/${testamentDir}/${bookFile}.js`);
        }
        possiblePaths.push(`./data/bible/${language}/old-testament/${bookFile}.js`);
        possiblePaths.push(`./data/bible/${language}/new-testament/${bookFile}.js`);
        possiblePaths.push(`./data/bible/${language}/${bookFile}.js`);

        for (const path of possiblePaths) {
            try {
                // Shim CommonJS module.exports for browser script tag loading
                window.module = { exports: {} };
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = path;
                    script.onload = () => resolve();
                    script.onerror = () => reject();
                    document.head.appendChild(script);
                    setTimeout(() => reject(new Error('Timeout loading ' + path)), 4000);
                });

                const loadedData = (window.module && window.module.exports && Object.keys(window.module.exports).length > 0)
                    ? window.module.exports
                    : window[varName];

                if (loadedData) {
                    const normalized = this.normalizeBookData(loadedData) || loadedData;
                    window[varName] = normalized;
                    return normalized;
                }
            } catch (error) {
                // Try next possible path
            }
        }
        return null;
    }
    // Initialize IndexedDB for large data storage
    async initIndexedDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('MyBibleDB', 2); // Version 2 for compatibility
            request.onerror = () => {
                reject(request.error);
            };
            request.onsuccess = () => {
                this.db = request.result;
                this.dbReady = true;
                resolve(this.db);
            };
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                // Create object store for books
                if (!db.objectStoreNames.contains('books')) {
                    const bookStore = db.createObjectStore('books', { keyPath: 'key' });
                    bookStore.createIndex('language', 'language', { unique: false });
                }
                // Create object store for preload status
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }
            };
        });
    }
    // Generate cache key for chapter
    getCacheKey(bookFile, chapter, language) {
        return `${bookFile}_${chapter}_${language}`;
    }
    // Generate cache key for entire book
    getBookCacheKey(bookFile, language) {
        return `${bookFile}_${language}_full`;
    }
    // Check if a book is already cached in memory
    isBookCached(bookFile, language) {
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        return this.bookCache.has(bookCacheKey);
    }
    // Load entire book at once
    async loadEntireBook(bookFile, language) {
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        // Check if book is already cached in memory
        if (this.bookCache.has(bookCacheKey)) {
            return this.bookCache.get(bookCacheKey);
        }
        // PRIORITY 1: If online, try Supabase API first
        if (this.supabaseClient && navigator.onLine) {
            try {
                // Create abort controller for timeout
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), this.apiTimeout);
                // Fetch ALL chapters of the book at once
                const { data, error } = await this.supabaseClient
                    .from(SUPABASE_BIBLE_CONFIG.tableName)
                    .select('chapter, verse, text')
                    .eq('book_file', bookFile)
                    .eq('language', language)
                    .order('chapter', { ascending: true })
                    .order('verse', { ascending: true })
                    .abortSignal(controller.signal);
                clearTimeout(timeoutId);
                if (error) {
                } else {
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
                    // Store in IndexedDB/localStorage
                    await this.saveBookToLocalStorage(bookCacheKey, bookData);
                    return bookData;
                }
            } catch (error) {
                // Handle timeout or network errors
                if (error.name === 'AbortError') {
                } else {
                }
            }
        }
        // PRIORITY 2: Try bundled local JS files (offline fallback)
        const localData = await this.loadFromLocalFile(bookFile, language);
        if (localData) {
            this.bookCache.set(bookCacheKey, localData);
            // Also cache individual chapters
            Object.keys(localData).forEach(chapter => {
                const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
                this.cache.set(chapterKey, localData[chapter]);
            });
            return localData;
        }
        // PRIORITY 3: Try IndexedDB/localStorage cache as last resort
        const cachedBook = await this.loadBookFromLocalStorage(bookCacheKey);
        if (cachedBook) {
            // Cache in memory for faster access
            this.bookCache.set(bookCacheKey, cachedBook);
            // Also cache individual chapters
            Object.keys(cachedBook).forEach(chapter => {
                const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
                this.cache.set(chapterKey, cachedBook[chapter]);
            });
            return cachedBook;
        }
        return null;
    }
    // Get chapter data (will load entire book if not cached)
    async getChapterData(bookFile, chapter, language) {
        const cacheKey = this.getCacheKey(bookFile, chapter, language);
        // Check chapter cache first
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        // Load entire book (checks memory cache and bundled local JS files)
        const bookData = await this.loadEntireBook(bookFile, language);
        if (bookData && bookData[chapter]) {
            const chapterData = bookData[chapter];
            this.cache.set(cacheKey, chapterData);
            return chapterData;
        }
        // Try loading from localStorage/IndexedDB
        const storedChapterData = this.loadFromLocalStorage(cacheKey);
        if (storedChapterData) {
            this.cache.set(cacheKey, storedChapterData);
            return storedChapterData;
        }
        return null;
    }
    // Preload adjacent chapters in background for smooth navigation
    async preloadAdjacentChapters(bookFile, currentChapter, language, totalChapters) {
        // Preload next 2 and previous 2 chapters
        const chaptersToPreload = [];
        for (let i = -2; i <= 2; i++) {
            if (i === 0) continue; // Skip current chapter
            const chapter = currentChapter + i;
            if (chapter >= 1 && chapter <= totalChapters) {
                chaptersToPreload.push(chapter);
            }
        }
        // Load chapters in background without waiting
        Promise.all(
            chaptersToPreload.map(chapter => 
                this.getChapterData(bookFile, chapter, language)
            )
        ).catch(err => {});
    }
    // Save individual chapter to localStorage (for fallback single-chapter loads)
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
        } catch (e) {
            this.clearOldCache();
            try {
                localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
            } catch (e2) {
            }
        }
    }
    // Save entire book to IndexedDB (replaces localStorage for large data)
    async saveBookToIndexedDB(key, bookData, language) {
        if (!this.dbReady && this.dbInitPromise) {
            try {
                await this.dbInitPromise;
            } catch (error) {
                return; // Fail silently if IndexedDB not available
            }
        }
        if (!this.db) {
            return; // DB not available
        }
        return new Promise((resolve, reject) => {
            try {
                const transaction = this.db.transaction(['books'], 'readwrite');
                const store = transaction.objectStore('books');
                const data = {
                    key: key,
                    language: language,
                    bookData: bookData,
                    timestamp: Date.now()
                };
                const request = store.put(data);
                request.onsuccess = () => {
                    resolve();
                };
                request.onerror = () => {
                    resolve(); // Resolve instead of reject to prevent errors
                };
            } catch (error) {
                resolve(); // Fail silently
            }
        });
    }
    // Load entire book from IndexedDB
    async loadBookFromIndexedDB(key) {
        if (!this.dbReady && this.dbInitPromise) {
            try {
                await this.dbInitPromise;
            } catch (error) {
                return null; // DB not available
            }
        }
        if (!this.db) {
            return null; // DB not available
        }
        return new Promise((resolve) => {
            try {
                const transaction = this.db.transaction(['books'], 'readonly');
                const store = transaction.objectStore('books');
                const request = store.get(key);
                request.onsuccess = () => {
                    if (request.result) {
                        resolve(request.result.bookData);
                    } else {
                        resolve(null);
                    }
                };
                request.onerror = () => {
                    resolve(null);
                };
            } catch (error) {
                resolve(null);
            }
        });
    }
    // Save entire book (use IndexedDB for better storage)
    async saveBookToLocalStorage(key, bookData) {
        const language = key.includes('tamil') ? 'tamil' : 'english';
        try {
            await this.saveBookToIndexedDB(key, bookData, language);
        } catch (e) {
            // Fail silently - app will still work with in-memory cache
        }
    }
    // Load individual chapter from localStorage (small data, still use localStorage)
    loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`bible_cache_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }
    // Load entire book (try IndexedDB first, fallback to localStorage)
    async loadBookFromLocalStorage(key) {
        try {
            // Try IndexedDB first
            const data = await this.loadBookFromIndexedDB(key);
            if (data) {
                return data;
            }
            // Fallback to localStorage for backward compatibility
            const localData = localStorage.getItem(`bible_book_${key}`);
            if (localData) {
                const bookData = JSON.parse(localData);
                // Migrate to IndexedDB
                const language = key.includes('tamil') ? 'tamil' : 'english';
                await this.saveBookToIndexedDB(key, bookData, language);
                // Remove from localStorage to free space
                localStorage.removeItem(`bible_book_${key}`);
                return bookData;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    // DISABLED: Don't auto-clear cache anymore - keep everything until manual clear
    clearOldCache() {
        // No longer auto-clearing old cache
        // Data persists until user manually clears it
    }
    // Clear all cache (memory, localStorage, and IndexedDB)
    async clearCache() {
        this.cache.clear();
        this.bookCache.clear();
        // Clear localStorage
        Object.keys(localStorage)
            .filter(k => k.startsWith('bible_cache_') || k.startsWith('bible_book_') || k.startsWith('preload_complete_'))
            .forEach(k => localStorage.removeItem(k));
        // Clear IndexedDB
        if (this.dbReady) {
            const transaction = this.db.transaction(['books', 'settings'], 'readwrite');
            await transaction.objectStore('books').clear();
            await transaction.objectStore('settings').clear();
        }
    }
    // Preload all books in background (with progress callback)
    async preloadAllBooks(bibleBooks, language, progressCallback = null) {
        const preloadKey = `preload_complete_${language}`;
        // DON'T skip if marked complete - verify actual data exists
        const shouldVerify = localStorage.getItem(preloadKey) === 'true';
        if (shouldVerify) {
            // Check if first and last books are actually cached
            const firstBookKey = this.getBookCacheKey(bibleBooks[0].file, language);
            const lastBookKey = this.getBookCacheKey(bibleBooks[bibleBooks.length - 1].file, language);
            const firstBook = await this.loadBookFromLocalStorage(firstBookKey);
            const lastBook = await this.loadBookFromLocalStorage(lastBookKey);
            if (firstBook && lastBook) {
                if (progressCallback) progressCallback(bibleBooks.length, bibleBooks.length, true);
                return;
            } else {
                localStorage.removeItem(preloadKey);
            }
        }
        // Track progress
        let loaded = 0;
        let failed = 0;
        const total = bibleBooks.length;
        // Load books one by one in background (to avoid overwhelming the API)
        for (let i = 0; i < bibleBooks.length; i++) {
            const book = bibleBooks[i];
            try {
                // Check if book already cached (use await for IndexedDB)
                const bookCacheKey = this.getBookCacheKey(book.file, language);
                const cachedBook = await this.loadBookFromLocalStorage(bookCacheKey);
                if (!cachedBook) {
                    // Load book if not cached
                    const bookData = await this.loadEntireBook(book.file, language);
                    if (bookData) {
                        loaded++;
                    } else {
                        failed++;
                    }
                    // Update progress
                    if (progressCallback) {
                        progressCallback(i + 1, total, false);
                    }
                    // Small delay to avoid API rate limits
                    await new Promise(resolve => setTimeout(resolve, 100));
                } else {
                    // Book already cached, still update progress
                    if (progressCallback) {
                        progressCallback(i + 1, total, false);
                    }
                }
            } catch (error) {
                failed++;
            }
        }
        // Only mark as complete if ALL books were successfully loaded
        if (failed === 0) {
            localStorage.setItem(preloadKey, 'true');
        } else {
        }
        if (progressCallback) {
            progressCallback(total, total, true);
        }
    }
    // Check preload status
    isPreloadComplete(language) {
        const isComplete = localStorage.getItem(`preload_complete_${language}`) === 'true';
        return isComplete;
    }
    // Reset preload flag (for manual cache clear)
    resetPreloadFlag(language = null) {
        if (language) {
            localStorage.removeItem(`preload_complete_${language}`);
        } else {
            // Clear all preload flags
            Object.keys(localStorage)
                .filter(k => k.startsWith('preload_complete_'))
                .forEach(k => localStorage.removeItem(k));
        }
    }
}
// Initialize global data manager
const bibleDataManager = new BibleDataManager();
