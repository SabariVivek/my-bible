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
            console.warn('⚠️ Supabase library not loaded - app will work in offline-only mode');
            this.supabaseClient = null;
            return;
        }
        try {
            this.supabaseClient = supabase.createClient(
                SUPABASE_BIBLE_CONFIG.url,
                SUPABASE_BIBLE_CONFIG.anonKey
            );
            console.log('✅ Supabase client initialized');
        } catch (error) {
            console.error('❌ Failed to initialize Supabase:', error);
            this.supabaseClient = null;
        }
    }

    // Load Bible data from local JS files (bundled with app)
    // Files should export data as: window.bibleData_<bookFile>_<language> = {...}
    loadFromLocalFile(bookFile, language) {
        const varName = `bibleData_${bookFile}_${language}`;
        if (window[varName]) {
            console.log(`📁 Loaded ${bookFile} (${language}) from bundled data`);
            return window[varName];
        }
        console.log(`📁 No bundled data for ${bookFile} (${language})`);
        return null;
    }

    // Initialize IndexedDB for large data storage
    async initIndexedDB() {
        console.log('🔧 Initializing IndexedDB...');
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('MyBibleDB', 2); // Version 2 for compatibility

            request.onerror = () => {
                console.error('❌ IndexedDB initialization failed:', request.error);
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                this.dbReady = true;
                console.log('✅ IndexedDB initialized successfully');
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

    // Load entire book at once
    async loadEntireBook(bookFile, language) {
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        
        // Check if book is already cached in memory
        if (this.bookCache.has(bookCacheKey)) {
            console.log(`📖 Loaded ${bookFile} (${language}) from MEMORY cache`);
            return this.bookCache.get(bookCacheKey);
        }

        // PRIORITY 1: If online, try Supabase API first
        if (this.supabaseClient && navigator.onLine) {
            console.log(`🌐 Fetching ${bookFile} (${language}) from Supabase API...`);
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
                    console.error(`❌ API Error for ${bookFile}:`, error);
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
                    console.log(`✅ Loaded ${bookFile} (${language}) from Supabase - ${Object.keys(bookData).length} chapters`);

                    return bookData;
                }
            } catch (error) {
                // Handle timeout or network errors
                if (error.name === 'AbortError') {
                    console.error(`⏱️ Request timeout for ${bookFile} - trying offline sources`);
                } else {
                    console.error(`❌ Network error for ${bookFile}:`, error);
                }
            }
        }

        // PRIORITY 2: Try bundled local JS files (offline fallback)
        console.log(`📁 Trying bundled data for ${bookFile} (${language})...`);
        const localData = this.loadFromLocalFile(bookFile, language);
        if (localData) {
            console.log(`📁 Using bundled ${bookFile} (${language})`);
            this.bookCache.set(bookCacheKey, localData);
            
            // Also cache individual chapters
            Object.keys(localData).forEach(chapter => {
                const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
                this.cache.set(chapterKey, localData[chapter]);
            });
            
            return localData;
        }

        // PRIORITY 3: Try IndexedDB/localStorage cache as last resort
        console.log(`🔍 Checking IndexedDB cache for ${bookCacheKey}...`);
        const cachedBook = await this.loadBookFromLocalStorage(bookCacheKey);
        if (cachedBook) {
            console.log(`💾 Loaded ${bookFile} (${language}) from IndexedDB - ${Object.keys(cachedBook).length} chapters found`);
            // Cache in memory for faster access
            this.bookCache.set(bookCacheKey, cachedBook);
            
            // Also cache individual chapters
            Object.keys(cachedBook).forEach(chapter => {
                const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
                this.cache.set(chapterKey, cachedBook[chapter]);
            });
            
            return cachedBook;
        }

        console.error(`❌ No data found for ${bookFile} (${language}) - not in API, bundled files, or cache`);
        return null;
    }

    // Get chapter data (will load entire book if not cached)
    async getChapterData(bookFile, chapter, language) {
        const cacheKey = this.getCacheKey(bookFile, chapter, language);
        
        // Check chapter cache first
        if (this.cache.has(cacheKey)) {
            console.log(`📖 Loaded ${bookFile} ch.${chapter} (${language}) from MEMORY cache`);
            return this.cache.get(cacheKey);
        }

        // Check if book is cached
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        if (this.bookCache.has(bookCacheKey)) {
            const bookData = this.bookCache.get(bookCacheKey);
            const chapterData = bookData[chapter];
            if (chapterData) {
                console.log(`📖 Loaded ${bookFile} ch.${chapter} (${language}) from BOOK cache`);
                this.cache.set(cacheKey, chapterData);
                return chapterData;
            }
        }

        // Try loading from localStorage/IndexedDB before API
        const storedChapterData = this.loadFromLocalStorage(cacheKey);
        if (storedChapterData) {
            console.log(`💾 Loaded ${bookFile} ch.${chapter} (${language}) from localStorage`);
            this.cache.set(cacheKey, storedChapterData);
            return storedChapterData;
        }

        // Check if we're offline or no Supabase client
        if (!this.supabaseClient || !navigator.onLine) {
            console.warn(`⚠️ Offline mode - cannot fetch ${bookFile} ch.${chapter} (${language})`);
            return null;
        }

        console.log(`🌐 Fetching ${bookFile} ch.${chapter} (${language}) from API...`);
        try {
            // Create abort controller for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.apiTimeout);
            
            const { data, error } = await this.supabaseClient
                .from(SUPABASE_BIBLE_CONFIG.tableName)
                .select('verse, text')
                .eq('book_file', bookFile)
                .eq('chapter', chapter)
                .eq('language', language)
                .order('verse', { ascending: true })
                .abortSignal(controller.signal);

            clearTimeout(timeoutId);

            if (error) {
                console.error(`❌ API error for ${bookFile} ch.${chapter}:`, error);
                this.isOfflineMode = true;
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
            console.log(`✅ Saved ${bookFile} ch.${chapter} (${language}) to localStorage`);

            return chapterData;
        } catch (error) {
            console.error(`❌ Network error for ${bookFile} ch.${chapter}:`, error);
            // Try loading from localStorage as fallback
            const fallbackData = this.loadFromLocalStorage(cacheKey);
            if (fallbackData) {
                console.log(`💾 Loaded ${bookFile} ch.${chapter} (${language}) from localStorage (fallback)`);
            }
            return fallbackData;
        }
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
                console.warn('⚠️ IndexedDB not ready:', error);
                return null; // DB not available
            }
        }

        if (!this.db) {
            console.warn('⚠️ IndexedDB not available');
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
            console.log(`🔍 Verifying ${language} preload integrity...`);
            // Check if first and last books are actually cached
            const firstBookKey = this.getBookCacheKey(bibleBooks[0].file, language);
            const lastBookKey = this.getBookCacheKey(bibleBooks[bibleBooks.length - 1].file, language);
            
            console.log(`   Checking first book: ${firstBookKey}`);
            const firstBook = await this.loadBookFromLocalStorage(firstBookKey);
            console.log(`   First book result: ${firstBook ? 'Found' : 'Missing'}`);
            
            console.log(`   Checking last book: ${lastBookKey}`);
            const lastBook = await this.loadBookFromLocalStorage(lastBookKey);
            console.log(`   Last book result: ${lastBook ? 'Found' : 'Missing'}`);
            
            if (firstBook && lastBook) {
                console.log(`✅ ${language} preload verified - data exists`);
                if (progressCallback) progressCallback(bibleBooks.length, bibleBooks.length, true);
                return;
            } else {
                console.log(`⚠️ ${language} preload marked complete but data missing - re-downloading all books`);
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
                        console.log(`✅ [${i + 1}/${total}] Cached ${book.file} (${language})`);
                    } else {
                        failed++;
                        console.error(`❌ [${i + 1}/${total}] Failed to load ${book.file} (${language})`);
                    }
                    
                    // Update progress
                    if (progressCallback) {
                        progressCallback(i + 1, total, false);
                    }
                    
                    // Small delay to avoid API rate limits
                    await new Promise(resolve => setTimeout(resolve, 100));
                } else {
                    console.log(`✓ [${i + 1}/${total}] ${book.file} (${language}) already cached`);
                    // Book already cached, still update progress
                    if (progressCallback) {
                        progressCallback(i + 1, total, false);
                    }
                }
            } catch (error) {
                failed++;
                console.error(`❌ [${i + 1}/${total}] Error loading ${book.file}:`, error);
            }
        }

        // Only mark as complete if ALL books were successfully loaded
        if (failed === 0) {
            localStorage.setItem(preloadKey, 'true');
            console.log(`✅ Preload complete for ${language} - All ${total} books cached`);
        } else {
            console.error(`⚠️ Preload incomplete for ${language} - ${failed} books failed`);
        }
        
        if (progressCallback) {
            progressCallback(total, total, true);
        }
    }

    // Check preload status
    isPreloadComplete(language) {
        const isComplete = localStorage.getItem(`preload_complete_${language}`) === 'true';
        console.log(`🔍 Preload status for ${language}: ${isComplete ? '✅ Complete' : '❌ Incomplete'}`);
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
