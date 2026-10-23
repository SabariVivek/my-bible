// Supabase Configuration (used ONLY by non-verse features like notes/bookmarks/sermons)
const SUPABASE_BIBLE_CONFIG = {
    url: 'https://encjogfdbrfcatvytpir.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck',
    tableName: 'bible_verses'
};

// Mapping book names/files to 0-based book index
const BOOK_FILE_TO_INDEX = {
    'genesis': 0, 'gen': 0,
    'exodus': 1, 'exod': 1,
    'leviticus': 2, 'lev': 2,
    'numbers': 3, 'num': 3,
    'deuteronomy': 4, 'deut': 4,
    'joshua': 5, 'josh': 5,
    'judges': 6, 'judg': 6,
    'ruth': 7,
    'i_samuel': 8, '1-samuel': 8, '1_samuel': 8, '1-sam': 8, 'i-samuel': 8, 'i samuel': 8,
    'ii_samuel': 9, '2-samuel': 9, '2_samuel': 9, '2-sam': 9, 'ii-samuel': 9, 'ii samuel': 9,
    'i_kings': 10, '1-kings': 10, '1_kings': 10, '1-kgs': 10, 'i-kings': 10, 'i kings': 10,
    'ii_kings': 11, '2-kings': 11, '2_kings': 11, '2-kgs': 11, 'ii-kings': 11, 'ii kings': 11,
    'i_chronicles': 12, '1-chronicles': 12, '1_chronicles': 12, '1-chr': 12, 'i-chronicles': 12, 'i chronicles': 12,
    'ii_chronicles': 13, '2-chronicles': 13, '2_chronicles': 13, '2-chr': 13, 'ii-chronicles': 13, 'ii chronicles': 13,
    'ezra': 14,
    'nehemiah': 15, 'neh': 15,
    'esther': 16, 'esth': 16,
    'job': 17,
    'psalms': 18, 'psalm': 18, 'ps': 18,
    'proverbs': 19, 'prov': 19,
    'ecclesiastes': 20, 'eccl': 20,
    'song_of_solomon': 21, 'song-of-solomon': 21, 'song-of-songs': 21, 'song': 21,
    'isaiah': 22, 'isa': 22,
    'jeremiah': 23, 'jer': 23,
    'lamentations': 24, 'lam': 24,
    'ezekiel': 25, 'ezek': 25,
    'daniel': 26, 'dan': 26,
    'hosea': 27, 'hos': 27,
    'joel': 28,
    'amos': 29,
    'obadiah': 30, 'obad': 30,
    'jonah': 31,
    'micah': 32, 'mic': 32,
    'nahum': 33, 'nah': 33,
    'habakkuk': 34, 'hab': 34,
    'zephaniah': 35, 'zeph': 35,
    'haggai': 36, 'hag': 36,
    'zechariah': 37, 'zech': 37,
    'malachi': 38, 'mal': 38,
    'matthew': 39, 'matt': 39,
    'mark': 40,
    'luke': 41,
    'john': 42,
    'acts': 43,
    'romans': 44, 'rom': 44,
    'i_corinthians': 45, '1-corinthians': 45, '1_corinthians': 45, '1-cor': 45, 'i-corinthians': 45, 'i corinthians': 45,
    'ii_corinthians': 46, '2-corinthians': 46, '2_corinthians': 46, '2-cor': 46, 'ii-corinthians': 46, 'ii corinthians': 46,
    'galatians': 47, 'gal': 47,
    'ephesians': 48, 'eph': 48,
    'philippians': 49, 'phil': 49,
    'colossians': 50, 'col': 50,
    'i_thessalonians': 51, '1-thessalonians': 51, '1_thessalonians': 51, '1-thess': 51, 'i-thessalonians': 51, 'i thessalonians': 51,
    'ii_thessalonians': 52, '2-thessalonians': 52, '2_thessalonians': 52, '2-thess': 52, 'ii-thessalonians': 52, 'ii thessalonians': 52,
    'i_timothy': 53, '1-timothy': 53, '1_timothy': 53, '1-tim': 53, 'i-timothy': 53, 'i timothy': 53,
    'ii_timothy': 54, '2-timothy': 54, '2_timothy': 54, '2-tim': 54, 'ii-timothy': 54, 'ii timothy': 54,
    'titus': 55,
    'philemon': 56, 'phlm': 56,
    'hebrews': 57, 'heb': 57,
    'james': 58, 'jas': 58,
    'i_peter': 59, '1-peter': 59, '1_peter': 59, '1-pet': 59, 'i-peter': 59, 'i peter': 59,
    'ii_peter': 60, '2-peter': 60, '2_peter': 60, '2-pet': 60, 'ii-peter': 60, 'ii peter': 60,
    'i_john': 61, '1-john': 61, '1_john': 61, 'i-john': 61, 'i john': 61,
    'ii_john': 62, '2-john': 62, '2_john': 62, 'ii-john': 62, 'ii john': 62,
    'iii_john': 63, '3-john': 63, '3_john': 63, 'iii-john': 63, 'iii john': 63,
    'jude': 64,
    'revelation': 65, 'rev': 65
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
        this.englishVersion = (typeof localStorage !== 'undefined' && (localStorage.getItem('settingsEnglishVersion') || localStorage.getItem('englishVersion'))) || 'easy';
        this.kjvData = null;
        this.kjvLoadingPromise = null;
        this.tanglishData = null;
        this.tanglishLoadingPromise = null;
        this.initSupabase();
        this.dbInitPromise = this.initIndexedDB();
    }

    setEnglishVersion(version) {
        if (version === 'kjv' || version === 'easy') {
            this.englishVersion = version;
        }
    }

    getEnglishVersion() {
        return this.englishVersion;
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
        if (language === 'english') {
            return `${bookFile}_${chapter}_english_${this.englishVersion}`;
        }
        return `${bookFile}_${chapter}_${language}`;
    }

    getBookCacheKey(bookFile, language) {
        if (language === 'english') {
            return `${bookFile}_english_${this.englishVersion}_full`;
        }
        return `${bookFile}_${language}_full`;
    }

    isBookCached(bookFile, language) {
        return this.bookCache.has(this.getBookCacheKey(bookFile, language));
    }

    // Helper: Normalize raw Bible book JSON / object into standard format:
    // { "1": { "verse_1": "...", "verse_2": "..." }, "2": { ... } }
    normalizeBookData(rawData) {
        if (!rawData || typeof rawData !== 'object') return null;

        const formatted = {};

        // Case 1: Array of chapters [{ chapter: 1, verses: [...] }]
        if (Array.isArray(rawData)) {
            rawData.forEach((ch, idx) => {
                const chNum = String(ch.chapter || idx + 1);
                formatted[chNum] = {};
                const verses = ch.verses || ch.Verse || [];
                if (Array.isArray(verses)) {
                    verses.forEach((v, vIdx) => {
                        const vNum = String(v.verse || v.Verse || vIdx + 1);
                        formatted[chNum][`verse_${vNum}`] = (typeof v === 'string') ? v : (v.text || v.Verse || v.content || '');
                    });
                }
            });
            return Object.keys(formatted).length > 0 ? formatted : null;
        }

        // Case 2: Object with chapter keys (e.g., "1", "chapter_1", "c1")
        for (const chKey in rawData) {
            const chNum = chKey.replace(/^chapter_?/i, '').replace(/^c/i, '');
            formatted[chNum] = {};
            const chVal = rawData[chKey];

            if (Array.isArray(chVal)) {
                chVal.forEach((v, vIdx) => {
                    if (typeof v === 'string') {
                        formatted[chNum][`verse_${vIdx + 1}`] = v;
                    } else if (v && typeof v === 'object') {
                        const vNum = String(v.verse || v.Verse || (vIdx + 1));
                        formatted[chNum][`verse_${vNum}`] = v.text || v.Verse || v.content || '';
                    }
                });
            } else if (chVal && typeof chVal === 'object') {
                for (const vKey in chVal) {
                    const vNum = vKey.replace(/^verse_?/i, '').replace(/^v/i, '');
                    const val = chVal[vKey];
                    formatted[chNum][`verse_${vNum}`] = (typeof val === 'string') ? val : (val?.text || val?.Verse || '');
                }
            }
        }

        return Object.keys(formatted).length > 0 ? formatted : null;
    }

    // Load Bible data from local files (data/bible/english/, data/bible/tamil/, or data/bible/tanglish/)
    // Supports both .json (via fetch/xhr) and .js (via CommonJS script injection)
    async loadFromLocalFile(bookFile, language) {
        const varName = `bibleData_${bookFile}_${language}`;

        // Check if already loaded globally
        if (window[varName]) {
            return window[varName];
        }

        // Determine candidate base names
        const baseNames = [
            bookFile,
            bookFile.replace(/^i_/, '1-').replace(/^ii_/, '2-').replace(/^iii_/, '3-').replace(/_/g, '-'),
            bookFile.replace(/^i_/, '1_').replace(/^ii_/, '2_').replace(/^iii_/, '3_')
        ];
        if (bookFile === 'psalms') baseNames.push('psalm');
        if (bookFile === 'song_of_solomon') baseNames.push('song-of-songs', 'song-of-solomon');

        const extensions = ['.js', '.json'];
        const subfolders = ['old-testament', 'new-testament', ''];

        for (const subfolder of subfolders) {
            for (const base of baseNames) {
                for (const ext of extensions) {
                    const fileName = `${base}${ext}`;
                    const candidatePaths = [
                        subfolder ? `./data/bible/${language}/${subfolder}/${fileName}` : `./data/bible/${language}/${fileName}`,
                        subfolder ? `data/bible/${language}/${subfolder}/${fileName}` : `data/bible/${language}/${fileName}`
                    ];

                    for (const relativePath of candidatePaths) {
                        try {
                            if (ext === '.json') {
                                // 1. Try fetch
                                if (typeof fetch === 'function') {
                                    try {
                                        const res = await fetch(relativePath);
                                        if (res.ok) {
                                            const json = await res.json();
                                            const formatted = this.normalizeBookData(json);
                                            if (formatted) {
                                                window[varName] = formatted;
                                                return formatted;
                                            }
                                        }
                                    } catch (_) {}
                                }

                                // 2. Try XMLHttpRequest fallback
                                if (typeof XMLHttpRequest !== 'undefined') {
                                    const xhrData = await new Promise((resolve) => {
                                        const xhr = new XMLHttpRequest();
                                        xhr.open('GET', relativePath, true);
                                        xhr.onload = () => {
                                            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
                                                try { resolve(JSON.parse(xhr.responseText)); } catch (_) { resolve(null); }
                                            } else {
                                                resolve(null);
                                            }
                                        };
                                        xhr.onerror = () => resolve(null);
                                        xhr.send();
                                    });

                                    if (xhrData) {
                                        const formatted = this.normalizeBookData(xhrData);
                                        if (formatted) {
                                            window[varName] = formatted;
                                            return formatted;
                                        }
                                    }
                                }
                            } else {
                                // .js CommonJS loading: Try fetch -> XHR -> script tag
                                let jsText = null;
                                if (typeof fetch === 'function') {
                                    try {
                                        const res = await fetch(relativePath);
                                        if (res.ok) jsText = await res.text();
                                    } catch (_) {}
                                }
                                if (!jsText && typeof XMLHttpRequest !== 'undefined') {
                                    jsText = await new Promise((resolve) => {
                                        const xhr = new XMLHttpRequest();
                                        xhr.open('GET', relativePath, true);
                                        xhr.onload = () => {
                                            if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
                                                resolve(xhr.responseText);
                                            } else {
                                                resolve(null);
                                            }
                                        };
                                        xhr.onerror = () => resolve(null);
                                        xhr.send();
                                    });
                                }

                                if (jsText) {
                                    try {
                                        const m = { exports: {} };
                                        const fn = new Function('module', 'exports', jsText);
                                        fn(m, m.exports);
                                        const formatted = this.normalizeBookData(m.exports);
                                        if (formatted) {
                                            window[varName] = formatted;
                                            return formatted;
                                        }
                                    } catch (evalErr) {
                                        console.warn(`[BibleDataManager] Failed to eval ${relativePath}:`, evalErr);
                                    }
                                }

                                // Fallback: script tag injection with CommonJS module.exports shim
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

                                    const formatted = this.normalizeBookData(rawData);
                                    if (formatted) {
                                        window[varName] = formatted;
                                        return formatted;
                                    }
                                }
                            }
                        } catch (_) {
                            // Try next candidate path
                        }
                    }
                }
            }
        }

        return null;
    }

    // Ensure KJV raw dataset (king-james-bible.json or king-james-bible.js) is loaded
    async ensureKjvDataLoaded() {
        if (this.kjvData && Array.isArray(this.kjvData.Book)) {
            return this.kjvData;
        }
        if (this.kjvLoadingPromise) {
            return this.kjvLoadingPromise;
        }

        this.kjvLoadingPromise = (async () => {
            // 1. Check window.kingJamesBibleData (script preloaded)
            if (typeof window !== 'undefined' && window.kingJamesBibleData && Array.isArray(window.kingJamesBibleData.Book)) {
                this.kjvData = window.kingJamesBibleData;
                return this.kjvData;
            }

            const candidatePaths = [
                './data/bible/english/king-james-bible.json',
                'data/bible/english/king-james-bible.json',
                '../../data/bible/english/king-james-bible.json',
                '../data/bible/english/king-james-bible.json',
                '/data/bible/english/king-james-bible.json',
                '/my-bible/data/bible/english/king-james-bible.json'
            ];

            // 2. Try fetch
            if (typeof fetch === 'function') {
                for (const p of candidatePaths) {
                    try {
                        const res = await fetch(p);
                        if (res.ok) {
                            const data = await res.json();
                            if (data && Array.isArray(data.Book)) {
                                this.kjvData = data;
                                return this.kjvData;
                            }
                        }
                    } catch (_) {}
                }
            }

            // 3. Try XMLHttpRequest
            if (typeof XMLHttpRequest !== 'undefined') {
                for (const p of candidatePaths) {
                    try {
                        const data = await new Promise((resolve) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('GET', p, true);
                            xhr.onload = () => {
                                if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
                                    try { resolve(JSON.parse(xhr.responseText)); } catch (_) { resolve(null); }
                                } else {
                                    resolve(null);
                                }
                            };
                            xhr.onerror = () => resolve(null);
                            xhr.send();
                        });
                        if (data && Array.isArray(data.Book)) {
                            this.kjvData = data;
                            return this.kjvData;
                        }
                    } catch (_) {}
                }
            }

            // 4. Try loading script fallback if king-james-bible.js exists
            if (typeof document !== 'undefined') {
                const jsCandidatePaths = [
                    './data/bible/english/king-james-bible.js',
                    'data/bible/english/king-james-bible.js',
                    '../../data/bible/english/king-james-bible.js'
                ];
                for (const p of jsCandidatePaths) {
                    try {
                        const loaded = await new Promise((resolve) => {
                            const script = document.createElement('script');
                            script.src = p;
                            script.onload = () => resolve(true);
                            script.onerror = () => resolve(false);
                            document.head.appendChild(script);
                            setTimeout(() => resolve(false), 4000);
                        });
                        if (loaded && window.kingJamesBibleData && Array.isArray(window.kingJamesBibleData.Book)) {
                            this.kjvData = window.kingJamesBibleData;
                            return this.kjvData;
                        }
                    } catch (_) {}
                }
            }

            return null;
        })();

        const res = await this.kjvLoadingPromise;
        this.kjvLoadingPromise = null;
        return res;
    }

    // Load and format an entire KJV book by bookFile
    async loadKjvBook(bookFile) {
        const kjv = await this.ensureKjvDataLoaded();
        if (!kjv || !Array.isArray(kjv.Book)) {
            console.warn('[BibleDataManager] KJV data could not be loaded');
            return null;
        }

        const rawFile = String(bookFile).toLowerCase().trim();
        const cleanFile = rawFile.replace(/_/g, '-');
        let bookIndex = BOOK_FILE_TO_INDEX[rawFile] ?? BOOK_FILE_TO_INDEX[cleanFile];

        if (bookIndex === undefined && typeof bibleBooks !== 'undefined') {
            bookIndex = bibleBooks.findIndex(b =>
                b.file.toLowerCase() === rawFile ||
                b.file.toLowerCase().replace(/_/g, '-') === cleanFile ||
                (typeof getBookFileForLanguage === 'function' && getBookFileForLanguage(b.file, 'english').toLowerCase() === cleanFile)
            );
        }

        if (bookIndex === undefined || bookIndex < 0 || bookIndex >= kjv.Book.length) {
            console.warn('[BibleDataManager] Book index not found for KJV:', bookFile);
            return null;
        }

        const rawBook = kjv.Book[bookIndex];
        if (!rawBook || !Array.isArray(rawBook.Chapter)) {
            return null;
        }

        const formattedBookData = {};
        rawBook.Chapter.forEach((ch, chIdx) => {
            const chNum = String(chIdx + 1);
            formattedBookData[chNum] = {};
            if (Array.isArray(ch.Verse)) {
                ch.Verse.forEach((v, vIdx) => {
                    const text = (v && typeof v.Verse === 'string') ? v.Verse : (v && v.text ? v.text : '');
                    formattedBookData[chNum][`verse_${vIdx + 1}`] = text;
                });
            }
        });

        return formattedBookData;
    }

    // Ensure consolidated Tanglish dataset (tanglish-bible.json or tanglish.json) is loaded if present
    async ensureTanglishDataLoaded() {
        if (this.tanglishData && (Array.isArray(this.tanglishData.Book) || Array.isArray(this.tanglishData.books) || typeof this.tanglishData === 'object')) {
            return this.tanglishData;
        }
        if (this.tanglishLoadingPromise) {
            return this.tanglishLoadingPromise;
        }

        this.tanglishLoadingPromise = (async () => {
            if (typeof window !== 'undefined' && window.tanglishBibleData) {
                this.tanglishData = window.tanglishBibleData;
                return this.tanglishData;
            }

            const candidatePaths = [
                './data/bible/tanglish/tanglish-bible.json',
                'data/bible/tanglish/tanglish-bible.json',
                './data/bible/tanglish/tanglish.json',
                'data/bible/tanglish/tanglish.json',
                '../../data/bible/tanglish/tanglish-bible.json',
                '../data/bible/tanglish/tanglish-bible.json'
            ];

            if (typeof fetch === 'function') {
                for (const p of candidatePaths) {
                    try {
                        const res = await fetch(p);
                        if (res.ok) {
                            const data = await res.json();
                            if (data) {
                                this.tanglishData = data;
                                return this.tanglishData;
                            }
                        }
                    } catch (_) {}
                }
            }

            if (typeof XMLHttpRequest !== 'undefined') {
                for (const p of candidatePaths) {
                    try {
                        const data = await new Promise((resolve) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('GET', p, true);
                            xhr.onload = () => {
                                if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
                                    try { resolve(JSON.parse(xhr.responseText)); } catch (_) { resolve(null); }
                                } else {
                                    resolve(null);
                                }
                            };
                            xhr.onerror = () => resolve(null);
                            xhr.send();
                        });
                        if (data) {
                            this.tanglishData = data;
                            return this.tanglishData;
                        }
                    } catch (_) {}
                }
            }

            return null;
        })();

        const res = await this.tanglishLoadingPromise;
        this.tanglishLoadingPromise = null;
        return res;
    }

    // Load and format an entire Tanglish book from consolidated data if available
    async loadTanglishBook(bookFile) {
        const fullData = await this.ensureTanglishDataLoaded();
        if (!fullData) return null;

        const rawFile = String(bookFile).toLowerCase().trim();
        const cleanFile = rawFile.replace(/_/g, '-');
        let bookIndex = BOOK_FILE_TO_INDEX[rawFile] ?? BOOK_FILE_TO_INDEX[cleanFile];

        if (bookIndex === undefined && typeof bibleBooks !== 'undefined') {
            bookIndex = bibleBooks.findIndex(b =>
                b.file.toLowerCase() === rawFile ||
                b.file.toLowerCase().replace(/_/g, '-') === cleanFile
            );
        }

        if (bookIndex === undefined || bookIndex < 0) return null;

        // If structure is { Book: [...] }
        const booksArray = fullData.Book || fullData.books || (Array.isArray(fullData) ? fullData : null);
        if (Array.isArray(booksArray) && booksArray[bookIndex]) {
            const rawBook = booksArray[bookIndex];
            const chapters = rawBook.Chapter || rawBook.chapters || rawBook;
            return this.normalizeBookData(chapters);
        }

        // If structure is object keyed by book names or numbers
        if (typeof fullData === 'object') {
            const rawBook = fullData[rawFile] || fullData[cleanFile] || fullData[String(bookIndex + 1)];
            if (rawBook) {
                return this.normalizeBookData(rawBook);
            }
        }

        return null;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Load entire book 100% locally
    // Priority: 1. In-memory  2. IndexedDB / localStorage  3. Bundled JS / KJV file
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

        // 3. Local data source (KJV, Tanglish, or Tamil/EasyEnglish bundles)
        if (language === 'english' && this.englishVersion === 'kjv') {
            const kjvData = await this.loadKjvBook(bookFile);
            if (kjvData) {
                this._cacheBook(bookCacheKey, bookFile, language, kjvData);
                await this.saveBookToLocalStorage(bookCacheKey, kjvData);
                return kjvData;
            }
        } else if (language === 'tanglish') {
            const localData = await this.loadFromLocalFile(bookFile, 'tanglish');
            if (localData) {
                this._cacheBook(bookCacheKey, bookFile, language, localData);
                await this.saveBookToLocalStorage(bookCacheKey, localData);
                return localData;
            }
            const fullData = await this.loadTanglishBook(bookFile);
            if (fullData) {
                this._cacheBook(bookCacheKey, bookFile, language, fullData);
                await this.saveBookToLocalStorage(bookCacheKey, fullData);
                return fullData;
            }
        } else {
            const localData = await this.loadFromLocalFile(bookFile, language);
            if (localData) {
                this._cacheBook(bookCacheKey, bookFile, language, localData);
                await this.saveBookToLocalStorage(bookCacheKey, localData);
                return localData;
            }
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
