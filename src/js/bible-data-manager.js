// Supabase Configuration (used ONLY by non-verse features like notes/bookmarks/sermons)
const SUPABASE_BIBLE_CONFIG = {
    url: 'https://encjogfdbrfcatvytpir.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck',
    tableName: 'bible_verses'
};

// Bible Data Manager - 100% Local Verse Reading (Zero Supabase network requests for verses)
class BibleDataManager {
    constructor() {
        this.cache = new Map();       // In-memory chapter cache
        this.bookCache = new Map();   // In-memory book cache
        this.supabaseClient = null;   // For notes/bookmarks/sermons ONLY
        this.db = null;
        this.dbReady = false;
        this.dbInitPromise = null;
        this.initSupabase();
        this.dbInitPromise = this.initIndexedDB();
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

    // Initialize IndexedDB for large book storage
    async initIndexedDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('MyBibleDB', 2);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                this.dbReady = true;
                resolve(this.db);
            };
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('books')) {
                    const store = db.createObjectStore('books', { keyPath: 'key' });
                    store.createIndex('language', 'language', { unique: false });
                }
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }
            };
        });
    }

    getCacheKey(bookFile, chapter, language) {
        return `${bookFile}_${chapter}_${language}`;
    }

    getBookCacheKey(bookFile, language) {
        return `${bookFile}_${language}_full`;
    }

    isBookCached(bookFile, language) {
        return this.bookCache.has(this.getBookCacheKey(bookFile, language));
    }

    // Load Bible data from local JS files (data/bible/english/ or data/bible/tamil/)
    async loadFromLocalFile(bookFile, language) {
        const varName = `bibleData_${bookFile}_${language}`;

        // Check if already loaded globally
        if (window[varName]) {
            return window[varName];
        }

        // Determine candidate filenames and subfolders
        const candidateNames = [
            `${bookFile}.js`,
            `${bookFile.replace(/^i_/, '1-').replace(/^ii_/, '2-').replace(/^iii_/, '3-').replace(/_/g, '-')}.js`,
            `${bookFile.replace(/^i_/, '1_').replace(/^ii_/, '2_').replace(/^iii_/, '3_')}.js`
        ];
        if (bookFile === 'psalms') candidateNames.push('psalm.js');
        if (bookFile === 'song_of_solomon') candidateNames.push('song-of-solomon.js', 'song-of-songs.js');

        const subfolders = ['old-testament', 'new-testament', ''];

        for (const subfolder of subfolders) {
            for (const fileName of candidateNames) {
                const relativePath = subfolder 
                    ? `./data/bible/${language}/${subfolder}/${fileName}`
                    : `./data/bible/${language}/${fileName}`;

                try {
                    // Shim CommonJS module.exports for browser execution
                    window.module = { exports: {} };

                    const loaded = await new Promise((resolve) => {
                        const script = document.createElement('script');
                        script.src = relativePath;
                        script.onload = () => resolve(true);
                        script.onerror = () => resolve(false);
                        document.head.appendChild(script);
                        setTimeout(() => resolve(false), 3000);
                    });

                    if (loaded) {
                        const rawData = (window.module && window.module.exports && Object.keys(window.module.exports).length > 0)
                            ? window.module.exports
                            : window[varName];

                        if (rawData && typeof rawData === 'object') {
                            const formattedBookData = {};
                            for (const chKey in rawData) {
                                const chNum = chKey.replace('chapter_', '');
                                formattedBookData[chNum] = {};
                                const chVal = rawData[chKey];

                                if (Array.isArray(chVal)) {
                                    chVal.forEach(v => {
                                        formattedBookData[chNum][`verse_${v.verse}`] = v.text;
                                    });
                                } else if (typeof chVal === 'object') {
                                    for (const vKey in chVal) {
                                        const vNum = vKey.replace('verse_', '');
                                        formattedBookData[chNum][`verse_${vNum}`] = chVal[vKey];
                                    }
                                }
                            }

                            // Store globally for quick re-use
                            window[varName] = formattedBookData;
                            return formattedBookData;
                        }
                    }
                } catch (_) {
                    // Try next candidate path
                }
            }
        }

        return null;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Load entire book 100% locally
    // Priority: 1. In-memory  2. IndexedDB / localStorage  3. Bundled JS file
    // ─────────────────────────────────────────────────────────────────────────
    async loadEntireBook(bookFile, language) {
        const bookCacheKey = this.getBookCacheKey(bookFile, language);

        // 1. In-memory
        if (this.bookCache.has(bookCacheKey)) {
            return this.bookCache.get(bookCacheKey);
        }

        // 2. IndexedDB / localStorage
        const cachedBook = await this.loadBookFromLocalStorage(bookCacheKey);
        if (cachedBook) {
            this._cacheBook(bookCacheKey, bookFile, language, cachedBook);
            return cachedBook;
        }

        // 3. Bundled local JS file
        const localData = await this.loadFromLocalFile(bookFile, language);
        if (localData) {
            this._cacheBook(bookCacheKey, bookFile, language, localData);
            await this.saveBookToLocalStorage(bookCacheKey, localData);
            return localData;
        }

        return null;
    }

    // Helper: store book into memory + per-chapter caches
    _cacheBook(bookCacheKey, bookFile, language, bookData) {
        this.bookCache.set(bookCacheKey, bookData);
        Object.keys(bookData).forEach(chapter => {
            const chapterKey = this.getCacheKey(bookFile, parseInt(chapter), language);
            this.cache.set(chapterKey, bookData[chapter]);
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Get a single chapter 100% locally
    // ─────────────────────────────────────────────────────────────────────────
    async getChapterData(bookFile, chapter, language) {
        const cacheKey = this.getCacheKey(bookFile, chapter, language);

        // 1. In-memory chapter
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // 2. In-memory book
        const bookCacheKey = this.getBookCacheKey(bookFile, language);
        if (this.bookCache.has(bookCacheKey)) {
            const chapterData = this.bookCache.get(bookCacheKey)[chapter];
            if (chapterData) {
                this.cache.set(cacheKey, chapterData);
                return chapterData;
            }
        }

        // 3. Per-chapter localStorage entry
        const storedChapter = this.loadFromLocalStorage(cacheKey);
        if (storedChapter) {
            this.cache.set(cacheKey, storedChapter);
            return storedChapter;
        }

        // 4. Load full book locally
        const bookData = await this.loadEntireBook(bookFile, language);
        if (bookData) {
            const chapterData = bookData[chapter];
            if (chapterData) {
                this.cache.set(cacheKey, chapterData);
                return chapterData;
            }
        }

        return null;
    }

    // Pre-load adjacent chapters in background for smooth navigation
    async preloadAdjacentChapters(bookFile, currentChapter, language, totalChapters) {
        const toPreload = [];
        for (let i = -2; i <= 2; i++) {
            if (i === 0) continue;
            const ch = currentChapter + i;
            if (ch >= 1 && ch <= totalChapters) toPreload.push(ch);
        }
        Promise.all(toPreload.map(ch => this.getChapterData(bookFile, ch, language))).catch(() => {});
    }

    // ─────────────────────────────────────────────────────────────────────────
    // localStorage & IndexedDB helpers
    // ─────────────────────────────────────────────────────────────────────────
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data));
        } catch (e) {
            this.clearOldCache();
            try { localStorage.setItem(`bible_cache_${key}`, JSON.stringify(data)); } catch (_) {}
        }
    }

    loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(`bible_cache_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (_) {
            return null;
        }
    }

    async saveBookToIndexedDB(key, bookData, language) {
        if (!this.dbReady && this.dbInitPromise) {
            try { await this.dbInitPromise; } catch (_) { return; }
        }
        if (!this.db) return;
        return new Promise((resolve) => {
            try {
                const tx = this.db.transaction(['books'], 'readwrite');
                tx.objectStore('books').put({ key, language, bookData, timestamp: Date.now() });
                tx.oncomplete = resolve;
                tx.onerror = resolve;
            } catch (_) { resolve(); }
        });
    }

    async loadBookFromIndexedDB(key) {
        if (!this.dbReady && this.dbInitPromise) {
            try { await this.dbInitPromise; } catch (_) { return null; }
        }
        if (!this.db) return null;
        return new Promise((resolve) => {
            try {
                const tx = this.db.transaction(['books'], 'readonly');
                const req = tx.objectStore('books').get(key);
                req.onsuccess = () => resolve(req.result ? req.result.bookData : null);
                req.onerror = () => resolve(null);
            } catch (_) { resolve(null); }
        });
    }

    async saveBookToLocalStorage(key, bookData) {
        const language = key.includes('tamil') ? 'tamil' : 'english';
        try { await this.saveBookToIndexedDB(key, bookData, language); } catch (_) {}
    }

    async loadBookFromLocalStorage(key) {
        try {
            const data = await this.loadBookFromIndexedDB(key);
            if (data) return data;
            const raw = localStorage.getItem(`bible_book_${key}`);
            if (raw) {
                const bookData = JSON.parse(raw);
                const language = key.includes('tamil') ? 'tamil' : 'english';
                await this.saveBookToIndexedDB(key, bookData, language);
                localStorage.removeItem(`bible_book_${key}`);
                return bookData;
            }
            return null;
        } catch (_) { return null; }
    }

    clearOldCache() {}

    async clearCache() {
        this.cache.clear();
        this.bookCache.clear();
        Object.keys(localStorage)
            .filter(k => k.startsWith('bible_cache_') || k.startsWith('bible_book_') || k.startsWith('preload_complete_'))
            .forEach(k => localStorage.removeItem(k));
        if (this.dbReady) {
            const tx = this.db.transaction(['books', 'settings'], 'readwrite');
            await tx.objectStore('books').clear();
            await tx.objectStore('settings').clear();
        }
    }

    async preloadAllBooks(bibleBooks, language, progressCallback = null) {
        const preloadKey = `preload_complete_${language}`;
        const shouldVerify = localStorage.getItem(preloadKey) === 'true';
        if (shouldVerify) {
            const firstKey = this.getBookCacheKey(bibleBooks[0].file, language);
            const lastKey  = this.getBookCacheKey(bibleBooks[bibleBooks.length - 1].file, language);
            const first = await this.loadBookFromLocalStorage(firstKey);
            const last  = await this.loadBookFromLocalStorage(lastKey);
            if (first && last) {
                if (progressCallback) progressCallback(bibleBooks.length, bibleBooks.length, true);
                return;
            }
            localStorage.removeItem(preloadKey);
        }

        let loaded = 0, failed = 0;
        const total = bibleBooks.length;

        for (let i = 0; i < bibleBooks.length; i++) {
            try {
                const bookCacheKey = this.getBookCacheKey(bibleBooks[i].file, language);
                const cached = await this.loadBookFromLocalStorage(bookCacheKey);
                if (!cached) {
                    const bookData = await this.loadEntireBook(bibleBooks[i].file, language);
                    bookData ? loaded++ : failed++;
                    await new Promise(r => setTimeout(r, 20));
                }
                if (progressCallback) progressCallback(i + 1, total, false);
            } catch (_) { failed++; }
        }

        if (failed === 0) localStorage.setItem(preloadKey, 'true');
        if (progressCallback) progressCallback(total, total, true);
    }

    isPreloadComplete(language) {
        return localStorage.getItem(`preload_complete_${language}`) === 'true';
    }

    resetPreloadFlag(language = null) {
        if (language) {
            localStorage.removeItem(`preload_complete_${language}`);
        } else {
            Object.keys(localStorage)
                .filter(k => k.startsWith('preload_complete_'))
                .forEach(k => localStorage.removeItem(k));
        }
    }
}

// Initialize global data manager
const bibleDataManager = new BibleDataManager();
