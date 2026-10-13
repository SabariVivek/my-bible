/**
 * ==========================================================================
 * Desktop Top Bar Search Bar & Quick Scripture Reference Navigator
 * ==========================================================================
 * Enables instant Bible passage navigation for desktop users from the top bar.
 * Supports patterns such as:
 *  - Gen 3 2        (Genesis 3:2)
 *  - Gen 3:2        (Genesis 3:2)
 *  - Gen 3:4-5      (Genesis 3:4 to 5)
 *  - Gen 3 4-5      (Genesis 3:4 to 5)
 *  - Gen 3          (Genesis chapter 3)
 *  - 1 Cor 13 4     (1 Corinthians 13:4)
 *  - 1Cor 13:4-8    (1 Corinthians 13:4-8)
 *  - 1 John 1:9     (1 John 1:9)
 *  - 1Jn 1 9        (1 John 1:9)
 *  - ஆதி 3 2        (Tamil: Genesis 3:2)
 *  - ஆதியாகமம் 3:2  (Tamil: Genesis 3:2)
 *  - Also falls back to keyword text search across the Bible
 */

(function initDesktopTopSearch() {
    // Wait until DOM and bibleBooks are ready
    function setupWhenReady() {
        if (typeof bibleBooks === 'undefined' || !document.getElementById('desktop-top-search-input')) {
            setTimeout(setupWhenReady, 100);
            return;
        }
        init();
    }

    // Book aliases mapping for all 66 Bible books
    const bookAliases = {
        'genesis': ['gen', 'ge', 'gn'],
        'exodus': ['exod', 'exo', 'ex'],
        'leviticus': ['lev', 'le', 'lv'],
        'numbers': ['num', 'nu', 'nm', 'nb'],
        'deuteronomy': ['deut', 'de', 'dt'],
        'joshua': ['josh', 'jos', 'jsh'],
        'judges': ['judg', 'jdg', 'jg', 'jdgs'],
        'ruth': ['ruth', 'rth', 'ru'],
        'i_samuel': ['1 sam', '1sam', '1 s', '1s', '1 sa', '1sa', '1 samuel', '1samuel', 'i samuel', 'isamuel', 'first samuel', '1சாமுவேல்', '1சாமு'],
        'ii_samuel': ['2 sam', '2sam', '2 s', '2s', '2 sa', '2sa', '2 samuel', '2samuel', 'ii samuel', 'iisamuel', 'second samuel', '2சாமுவேல்', '2சாமு'],
        'i_kings': ['1 kgs', '1kgs', '1 ki', '1ki', '1 kin', '1kin', '1 kings', '1kings', 'i kings', 'ikings', '1இராஜாக்கள்', '1இரா'],
        'ii_kings': ['2 kgs', '2kgs', '2 ki', '2ki', '2 kin', '2kin', '2 kings', '2kings', 'ii kings', 'iikings', '2இராஜாக்கள்', '2இரா'],
        'i_chronicles': ['1 chr', '1chr', '1 ch', '1ch', '1 chron', '1chron', '1 chronicles', '1chronicles', 'i chronicles', '1நாளாகமம்', '1நாளா'],
        'ii_chronicles': ['2 chr', '2chr', '2 ch', '2ch', '2 chron', '2chron', '2 chronicles', '2chronicles', 'ii chronicles', '2நாளாகமம்', '2நாளா'],
        'ezra': ['ezra', 'ezr'],
        'nehemiah': ['neh', 'ne'],
        'esther': ['esth', 'est', 'es'],
        'job': ['job', 'jb'],
        'psalms': ['ps', 'psa', 'psm', 'pss', 'psalm', 'psalms'],
        'proverbs': ['prov', 'pro', 'pr', 'prv'],
        'ecclesiastes': ['eccl', 'ecc', 'ec', 'qoh'],
        'song_of_solomon': ['song', 'songs', 'ss', 'sos', 'so', 'song of songs', 'song of solomon'],
        'isaiah': ['isa', 'is'],
        'jeremiah': ['jer', 'je', 'jr'],
        'lamentations': ['lam', 'la'],
        'ezekiel': ['ezek', 'eze', 'ezk'],
        'daniel': ['dan', 'da', 'dn'],
        'hosea': ['hos', 'ho'],
        'joel': ['joel', 'joe', 'jl'],
        'amos': ['amos', 'am'],
        'obadiah': ['obad', 'oba', 'ob'],
        'jonah': ['jonah', 'jon', 'jnh'],
        'micah': ['mic', 'mc'],
        'nahum': ['nah', 'na'],
        'habakkuk': ['hab', 'hb'],
        'zephaniah': ['zeph', 'zep', 'zp'],
        'haggai': ['hag', 'hg'],
        'zechariah': ['zech', 'zec', 'zc'],
        'malachi': ['mal', 'ml'],
        'matthew': ['matt', 'mat', 'mt'],
        'mark': ['mark', 'mar', 'mk', 'mrk'],
        'luke': ['luke', 'luk', 'lk'],
        'john': ['john', 'joh', 'jn', 'jhn'],
        'acts': ['acts', 'act', 'ac'],
        'romans': ['rom', 'ro', 'rm'],
        'i_corinthians': ['1 cor', '1cor', '1 co', '1co', '1 corinthians', '1corinthians', 'i corinthians', 'icorinthians', '1கொரிந்தியர்', '1கொரி'],
        'ii_corinthians': ['2 cor', '2cor', '2 co', '2co', '2 corinthians', '2corinthians', 'ii corinthians', 'iicorinthians', '2கொரிந்தியர்', '2கொரி'],
        'galatians': ['gal', 'ga'],
        'ephesians': ['eph', 'ep'],
        'philippians': ['phil', 'php', 'pp'],
        'colossians': ['col', 'co'],
        'i_thessalonians': ['1 thess', '1thess', '1 th', '1th', '1 thes', '1thes', '1 thessalonians', '1thessalonians', 'i thessalonians', '1தெசலோனிக்கேயர்', '1தெச'],
        'ii_thessalonians': ['2 thess', '2thess', '2 th', '2th', '2 thes', '2thes', '2 thessalonians', '2thessalonians', 'ii thessalonians', '2தெசலோனிக்கேயர்', '2தெச'],
        'i_timothy': ['1 tim', '1tim', '1 ti', '1ti', '1 timothy', '1timothy', 'i timothy', '1தீமோத்தேயு', '1தீமோ'],
        'ii_timothy': ['2 tim', '2tim', '2 ti', '2ti', '2 timothy', '2timothy', 'ii timothy', '2தீமோத்தேயு', '2தீமோ'],
        'titus': ['titus', 'tit', 'ti'],
        'philemon': ['phlm', 'phm', 'pm', 'philemon'],
        'hebrews': ['heb', 'he'],
        'james': ['jas', 'jam', 'jm'],
        'i_peter': ['1 pet', '1pet', '1 pe', '1pe', '1 pt', '1pt', '1 peter', '1peter', 'i peter', '1பேதுரு'],
        'ii_peter': ['2 pet', '2pet', '2 pe', '2pe', '2 pt', '2pt', '2 peter', '2peter', 'ii peter', '2பேதுரு'],
        'i_john': ['1 john', '1john', '1 jn', '1jn', '1 jhn', '1jhn', '1 jo', '1jo', '1 joh', '1joh', 'i john', '1யோவான்', '1யோ'],
        'ii_john': ['2 john', '2john', '2 jn', '2jn', '2 jhn', '2jhn', '2 jo', '2jo', '2 joh', '2joh', 'ii john', '2யோவான்', '2யோ'],
        'iii_john': ['3 john', '3john', '3 jn', '3jn', '3 jhn', '3jhn', '3 jo', '3jo', '3 joh', '3joh', 'iii john', '3யோவான்', '3யோ'],
        'jude': ['jude', 'jud', 'jd'],
        'revelation': ['rev', 're', 'rv', 'revelation', 'revelations']
    };

    function normalizeText(text) {
        if (!text) return '';
        return text.toLowerCase().trim()
            .replace(/^[iI]\s+/, '1 ')
            .replace(/^[iI][iI]\s+/, '2 ')
            .replace(/^[iI][iI][iI]\s+/, '3 ')
            .replace(/^first\s+/i, '1 ')
            .replace(/^second\s+/i, '2 ')
            .replace(/^third\s+/i, '3 ')
            .replace(/^1st\s+/i, '1 ')
            .replace(/^2nd\s+/i, '2 ')
            .replace(/^3rd\s+/i, '3 ')
            .replace(/^([123])([a-z\u0B80-\u0BFF])/i, '$1 $2') // '1cor' -> '1 cor'
            .replace(/[\s\-_]+/g, ' ')
            .trim();
    }

    let bookLookup = {};

    function buildLookupTable() {
        bookLookup = {};
        bibleBooks.forEach((book, index) => {
            const addKey = (k) => {
                if (!k) return;
                const norm = normalizeText(k);
                if (norm && bookLookup[norm] === undefined) bookLookup[norm] = index;
                const clean = norm.replace(/\s+/g, '');
                if (clean && bookLookup[clean] === undefined) bookLookup[clean] = index;
            };

            addKey(book.name);
            addKey(book.shortName);
            addKey(book.tamilName);
            addKey(book.tamilShortName);

            if (book.name.startsWith('I ')) {
                addKey('1 ' + book.name.substring(2));
            } else if (book.name.startsWith('II ')) {
                addKey('2 ' + book.name.substring(3));
            } else if (book.name.startsWith('III ')) {
                addKey('3 ' + book.name.substring(4));
            }

            if (bookAliases[book.file]) {
                bookAliases[book.file].forEach(alias => addKey(alias));
            }
        });
    }

    function findBookIndex(bookStr) {
        if (!bookStr) return -1;
        const norm = normalizeText(bookStr);
        if (bookLookup[norm] !== undefined) return bookLookup[norm];
        const clean = norm.replace(/\s+/g, '');
        if (bookLookup[clean] !== undefined) return bookLookup[clean];

        // Prefix search for partial typing
        for (const [key, idx] of Object.entries(bookLookup)) {
            if (key.length >= 3 && (key.startsWith(norm) || norm.startsWith(key))) {
                return idx;
            }
        }
        return -1;
    }

    /**
     * Parses Bible reference strings like:
     * - Gen 3 2
     * - Gen 3:2
     * - Gen 3:4-5
     * - Gen 3 4-5
     * - Gen 3
     * - 1 Cor 13:4-8
     * - 1Jn 1 9
     * - ஆதி 3 2
     */
    function parseBibleReference(input) {
        if (!input || typeof input !== 'string') return null;
        let s = input.trim().replace(/\s+/g, ' ');

        // Pattern 1: Book Chapter:StartVerse-EndVerse (with colon, dot, or v/verse)
        // e.g. Gen 3:2, Gen 3:4-5, Gen 3.2, 1 Cor 13:4-8, 1Cor13:4
        let m = s.match(/^(.*?)(?:(?<=[a-zA-Z\u0B80-\u0BFF])\s*|\s+)(\d+)\s*[:.]\s*(\d+)(?:\s*(?:-|–|to|,)\s*(\d+))?$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                const startVerse = parseInt(m[3]);
                const endVerse = m[4] ? parseInt(m[4]) : startVerse;
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: Math.max(startVerse, 1),
                    endVerse: Math.max(endVerse, startVerse)
                };
            }
        }

        // Pattern 2: Book Chapter StartVerse-EndVerse or Book Chapter StartVerse (space-separated)
        // e.g. Gen 3 2, Gen 3 4-5, Gen 3 4 - 5, 1 John 1 9, 1 Cor 13 4, ஆதி 3 2
        m = s.match(/^(.*?)\s+(\d+)\s+(\d+)(?:\s*(?:-|–|to|,)\s*(\d+))?$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                const startVerse = parseInt(m[3]);
                const endVerse = m[4] ? parseInt(m[4]) : startVerse;
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: Math.max(startVerse, 1),
                    endVerse: Math.max(endVerse, startVerse)
                };
            }
        }

        // Pattern 3: Book Chapter (e.g. Gen 3, 1 Cor 13, Ps 23, 1Cor13)
        m = s.match(/^(.*?)(?:(?<=[a-zA-Z\u0B80-\u0BFF])\s*|\s+)(\d+)$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: null,
                    endVerse: null
                };
            }
        }

        // Pattern 4: Just book name (e.g. Genesis, Matthew)
        const bookIdx = findBookIndex(s);
        if (bookIdx !== -1) {
            return {
                bookIndex: bookIdx,
                book: bibleBooks[bookIdx],
                chapter: 1,
                startVerse: null,
                endVerse: null,
                isBookOnly: true
            };
        }

        return null;
    }

    /**
     * Executes navigation to a scripture reference
     */
    async function openScriptureReference(ref) {
        if (!ref) return;

        // 1. Close any open search view
        const searchBar = document.getElementById('search-bar');
        if (searchBar && searchBar.style.display !== 'none') {
            const backBtn = document.getElementById('back-from-search');
            if (backBtn) backBtn.click();
        }

        // 2. Close bottom sheets or popups
        const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
        if (bottomSheet && bottomSheet.classList.contains('visible')) {
            bottomSheet.classList.remove('visible');
            document.body.classList.remove('bottom-sheet-open');
        }

        // 3. Load the book & chapter if different
        const targetBook = ref.bookIndex;
        const targetChapter = ref.chapter || 1;

        if (typeof currentBook === 'undefined' || currentBook !== targetBook || currentChapter !== targetChapter) {
            if (typeof loadBook === 'function') {
                await loadBook(targetBook, targetChapter);
            }
        }

        // 4. Handle Verse Scrolling and Highlighting
        if (ref.startVerse) {
            const sVerse = ref.startVerse;
            const eVerse = ref.endVerse || sVerse;

            setTimeout(() => {
                // A. Update verses column in left pane if present
                const versesColumn = document.querySelector('.verses-column');
                if (versesColumn) {
                    versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                    for (let v = sVerse; v <= eVerse; v++) {
                        const item = versesColumn.querySelector(`.number-item[data-verse="${v}"]`);
                        if (item) item.classList.add('active');
                    }
                    const startItem = versesColumn.querySelector(`.number-item[data-verse="${sVerse}"]`);
                    if (startItem) {
                        startItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }

                // B. Scroll smoothly to start verse
                if (typeof scrollToVerse === 'function') {
                    scrollToVerse(sVerse);
                } else {
                    const startEl = document.querySelector(`.verse-line[data-verse="${sVerse}"]`);
                    if (startEl) startEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // C. Highlight target verses matching left-pane selection style (only #303234, no border, no shadow)
                const contentArea = document.querySelector('.scripture-text') || document;
                contentArea.querySelectorAll('.verse-line').forEach(v => {
                    v.classList.remove('multi-highlighted');
                    v.classList.remove('highlighted');
                    v.classList.remove('left-pane-selected');
                    v.classList.remove('search-jump-highlight');
                    v.style.backgroundColor = '';
                });
                contentArea.querySelectorAll('.verse-container').forEach(v => {
                    v.classList.remove('multi-highlighted');
                    v.classList.remove('highlighted');
                    v.classList.remove('left-pane-selected');
                    v.classList.remove('search-jump-highlight');
                    v.style.backgroundColor = '';
                });

                for (let v = sVerse; v <= eVerse; v++) {
                    const line = contentArea.querySelector(`.verse-line[data-verse="${v}"]`);
                    if (line) {
                        line.classList.remove('multi-highlighted');
                        line.classList.remove('highlighted');
                        line.classList.add('left-pane-selected');
                        line.classList.add('search-jump-highlight');
                    }
                    const container = contentArea.querySelector(`.verse-container[data-verse="${v}"]`);
                    if (container) {
                        container.classList.remove('multi-highlighted');
                        container.classList.remove('highlighted');
                        container.classList.add('left-pane-selected');
                    }
                }

                // D. Record verse in history manager
                if (window.VerseHistoryManager && typeof window.VerseHistoryManager.recordVerse === 'function') {
                    window.VerseHistoryManager.recordVerse(targetBook, targetChapter, sVerse);
                }
            }, 320);
        } else {
            // Chapter only: scroll to top of reading area
            setTimeout(() => {
                const contentArea = document.querySelector('.content-area');
                if (contentArea) {
                    contentArea.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 200);
        }
    }

    /**
     * Executes general Bible text search
     */
    function triggerGeneralSearch(query) {
        if (!query || !query.trim()) return;
        const q = query.trim();

        // Open the search interface
        if (typeof window.openSearch === 'function') {
            window.openSearch();
        } else {
            const searchBtn = document.getElementById('search-btn');
            if (searchBtn) searchBtn.click();
        }

        const searchInput = document.getElementById('search-input');
        setTimeout(() => {
            if (searchInput) {
                searchInput.value = q;
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true });
                searchInput.dispatchEvent(enterEvent);
            }
        }, 100);
    }

    // Initialize the Desktop Search Bar
    function init() {
        buildLookupTable();

        const searchWrapper = document.getElementById('desktop-top-search-wrapper');
        const searchInput = document.getElementById('desktop-top-search-input');
        const clearBtn = document.getElementById('desktop-top-clear-btn');
        const dropdown = document.getElementById('desktop-top-search-dropdown');

        if (!searchWrapper || !searchInput || !dropdown) return;

        let selectedIndex = -1;
        let currentItems = [];

        function hideDropdown() {
            dropdown.style.display = 'none';
            dropdown.innerHTML = '';
            selectedIndex = -1;
            currentItems = [];
        }

        function showDropdown() {
            dropdown.style.display = 'block';
        }

        function updateSelection() {
            const elements = dropdown.querySelectorAll('.desktop-search-item');
            elements.forEach((el, idx) => {
                if (idx === selectedIndex) {
                    el.classList.add('selected');
                    el.scrollIntoView({ block: 'nearest' });
                } else {
                    el.classList.remove('selected');
                }
            });
        }

        function renderDropdown(value) {
            const trimmed = value.trim();
            if (!trimmed) {
                // Show popular quick jumps or recent searches
                renderDefaultSuggestions();
                return;
            }

            const ref = parseBibleReference(trimmed);
            let html = '';
            currentItems = [];

            if (ref) {
                // Detected a Bible passage
                const vRange = ref.startVerse
                    ? (ref.startVerse === ref.endVerse ? `:${ref.startVerse}` : `:${ref.startVerse}–${ref.endVerse}`)
                    : '';
                const vTextDesc = ref.startVerse
                    ? (ref.startVerse === ref.endVerse ? `Jump to verse ${ref.startVerse}` : `Jump to verses ${ref.startVerse} to ${ref.endVerse}`)
                    : `Open chapter ${ref.chapter}`;

                html += `
                    <div class="desktop-search-section-title">Passage</div>
                    <div class="desktop-search-item hero-match" data-action="passage">
                        <div class="desktop-search-item-left">
                            <div class="desktop-search-item-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <div class="desktop-search-item-details">
                                <div class="desktop-search-item-title">${ref.book.name} ${ref.chapter}${vRange}</div>
                                <div class="desktop-search-item-subtitle">${ref.book.tamilName} ${ref.chapter}${vRange} • ${vTextDesc}</div>
                            </div>
                        </div>
                        <span class="desktop-search-item-badge">↵ Jump</span>
                    </div>
                `;
                currentItems.push({ type: 'passage', data: ref });

                // If user typed book only, show quick chapter chips
                if (ref.isBookOnly) {
                    html += `
                        <div class="desktop-search-section-title">Jump to Chapter</div>
                        <div class="desktop-search-chips-container">
                    `;
                    const maxChips = Math.min(ref.book.chapters, 15);
                    for (let c = 1; c <= maxChips; c++) {
                        html += `<button type="button" class="desktop-search-chip" data-chapter="${c}">Ch ${c}</button>`;
                    }
                    if (ref.book.chapters > maxChips) {
                        html += `<span class="desktop-search-item-subtitle" style="padding: 4px 6px;">+${ref.book.chapters - maxChips} more</span>`;
                    }
                    html += `</div>`;
                }
            }

            // General search action option
            html += `
                <div class="desktop-search-section-title">Search</div>
                <div class="desktop-search-item" data-action="text-search">
                    <div class="desktop-search-item-left">
                        <div class="desktop-search-item-icon text-search">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div class="desktop-search-item-details">
                            <div class="desktop-search-item-title">Search for "${escapeHtml(trimmed)}"</div>
                            <div class="desktop-search-item-subtitle">Find verses containing "${escapeHtml(trimmed)}"</div>
                        </div>
                    </div>
                    <span class="desktop-search-item-badge">Search</span>
                </div>
            `;
            currentItems.push({ type: 'text-search', query: trimmed });

            dropdown.innerHTML = html;
            selectedIndex = 0; // Default select first item
            updateSelection();
            showDropdown();
            attachDropdownEvents(ref);
        }

        function renderDefaultSuggestions() {
            const defaults = [
                { bookName: 'John', chapter: 3, startVerse: 16, title: 'John 3:16', desc: 'God so loved the world' },
                { bookName: 'Psalms', chapter: 23, startVerse: 1, title: 'Psalm 23:1', desc: 'The Lord is my shepherd' },
                { bookName: 'Genesis', chapter: 1, startVerse: 1, title: 'Genesis 1:1', desc: 'In the beginning' },
                { bookName: 'Romans', chapter: 8, startVerse: 28, title: 'Romans 8:28', desc: 'All things work together for good' }
            ];

            let html = `
                <div class="desktop-search-section-title">Quick Passages</div>
            `;
            currentItems = [];

            defaults.forEach((d) => {
                const bIdx = bibleBooks.findIndex(b => b.name === d.bookName);
                if (bIdx !== -1) {
                    const book = bibleBooks[bIdx];

                    html += `
                        <div class="desktop-search-item" data-action="passage" data-index="${currentItems.length}">
                            <div class="desktop-search-item-left">
                                <div class="desktop-search-item-icon">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                </div>
                                <div class="desktop-search-item-details">
                                    <div class="desktop-search-item-title">${d.title}</div>
                                    <div class="desktop-search-item-subtitle">${book.tamilName} • ${d.desc}</div>
                                </div>
                            </div>
                            <span class="desktop-search-item-badge">Jump</span>
                        </div>
                    `;
                    currentItems.push({
                        type: 'passage',
                        data: {
                            bookIndex: bIdx,
                            book,
                            chapter: d.chapter,
                            startVerse: d.startVerse,
                            endVerse: d.startVerse
                        }
                    });
                }
            });

            dropdown.innerHTML = html;
            selectedIndex = -1;
            showDropdown();
            attachDropdownEvents(null);
        }

        function attachDropdownEvents(ref) {
            // Click on items
            dropdown.querySelectorAll('.desktop-search-item').forEach((itemEl, idx) => {
                itemEl.addEventListener('click', () => {
                    executeItem(currentItems[idx]);
                });
            });

            // Chapter chips
            dropdown.querySelectorAll('.desktop-search-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const ch = parseInt(chip.getAttribute('data-chapter'));
                    if (ref) {
                        openScriptureReference({
                            bookIndex: ref.bookIndex,
                            book: ref.book,
                            chapter: ch,
                            startVerse: null,
                            endVerse: null
                        });
                        hideDropdown();
                        searchInput.blur();
                    }
                });
            });
        }

        function executeItem(item) {
            if (!item) return;
            if (item.type === 'passage') {
                openScriptureReference(item.data);
                hideDropdown();
                searchInput.blur();
            } else if (item.type === 'text-search') {
                triggerGeneralSearch(item.query);
                hideDropdown();
                searchInput.blur();
            }
        }

        function escapeHtml(str) {
            return str.replace(/[&<>'"]/g, tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag));
        }

        // Input event
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
            renderDropdown(val);
        });

        // Focus event
        searchInput.addEventListener('focus', () => {
            renderDropdown(searchInput.value);
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentItems.length > 0) {
                    selectedIndex = (selectedIndex + 1) % currentItems.length;
                    updateSelection();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentItems.length > 0) {
                    selectedIndex = (selectedIndex - 1 + currentItems.length) % currentItems.length;
                    updateSelection();
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const val = searchInput.value.trim();
                if (!val) return;

                if (selectedIndex >= 0 && selectedIndex < currentItems.length) {
                    executeItem(currentItems[selectedIndex]);
                } else {
                    // Try parsing as reference
                    const ref = parseBibleReference(val);
                    if (ref) {
                        openScriptureReference(ref);
                        hideDropdown();
                        searchInput.blur();
                    } else {
                        // General search
                        triggerGeneralSearch(val);
                        hideDropdown();
                        searchInput.blur();
                    }
                }
            } else if (e.key === 'Escape') {
                hideDropdown();
                searchInput.blur();
            }
        });

        // Clear button
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            hideDropdown();
            searchInput.focus();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchWrapper.contains(e.target)) {
                hideDropdown();
            }
            if (e.target.closest('.number-item') || e.target.closest('.verse-line')) {
                document.querySelectorAll('.verse-line.search-jump-highlight').forEach(el => {
                    el.classList.remove('search-jump-highlight');
                });
            }
        });

        // Global shortcut '/' to focus search on desktop
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                // Check if desktop view (screen width > 768px)
                if (window.innerWidth > 768) {
                    e.preventDefault();
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }

    // Export helper to global for external callers if needed
    window.parseBibleReference = parseBibleReference;
    window.openScriptureReference = openScriptureReference;

    // Start setup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupWhenReady);
    } else {
        setupWhenReady();
    }
})();
