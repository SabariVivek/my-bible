/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Scripture Comparison Manager (Desktop Only)
 * Matches the native Bible reading design, fonts, typography, and colors
 * Features a common header language segment that updates all comparison panes
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
    'use strict';

    const state = {
        isOpen: false,
        globalLanguage: 'tamil',
        panes: []
    };

    let nextPaneId = 1;

    // Comprehensive map of book abbreviations to book index (0 - 65)
    const bookAbbrMap = {
        // Old Testament
        'gen': 0, 'genesis': 0, 'ஆதி': 0, 'ஆதியாகமம்': 0,
        'ex': 1, 'exo': 1, 'exod': 1, 'exodus': 1, 'யாத்': 1, 'யாத்திராகமம்': 1,
        'lev': 2, 'leviticus': 2, 'லேவி': 2, 'லேவியராகமம்': 2,
        'num': 3, 'numbers': 3, 'எண்': 3, 'எண்ணாகமம்': 3,
        'deut': 4, 'deu': 4, 'deuteronomy': 4, 'உபா': 4, 'உபாகமம்': 4,
        'josh': 5, 'jos': 5, 'joshua': 5, 'யோசு': 5, 'யோசுவா': 5,
        'judg': 6, 'jdg': 6, 'judges': 6, 'நியா': 6, 'நியாயாதிபதிகள்': 6,
        'ruth': 7, 'rut': 7, 'ரூத்': 7,
        '1sam': 8, '1samuel': 8, '1 sa': 8, '1sa': 8, '1சாமு': 8, '1 சாமுவேல்': 8,
        '2sam': 9, '2samuel': 9, '2 sa': 9, '2sa': 9, '2சாமு': 9, '2 சாமுவேல்': 9,
        '1kings': 10, '1kgs': 10, '1 ki': 10, '1ki': 10, '1இரா': 10, '1 இராஜாக்கள்': 10,
        '2kings': 11, '2kgs': 11, '2 ki': 11, '2ki': 11, '2இரா': 11, '2 இராஜாக்கள்': 11,
        '1chron': 12, '1chr': 12, '1 ch': 12, '1ch': 12, '1நாளா': 12, '1 நாளாகமம்': 12,
        '2chron': 13, '2chr': 13, '2 ch': 13, '2ch': 13, '2நாளா': 13, '2 நாளாகமம்': 13,
        'ezra': 14, 'ezr': 14, 'எஸ்றா': 14,
        'neh': 15, 'nehemiah': 15, 'நெகே': 15, 'நெகேமியா': 15,
        'esth': 16, 'est': 16, 'esther': 16, 'எஸ்தர்': 16,
        'job': 17, 'யோபு': 17,
        'ps': 18, 'psa': 18, 'psalm': 18, 'psalms': 18, 'சங்கீ': 18, 'சங்கீதம்': 18,
        'prov': 19, 'pro': 19, 'proverbs': 19, 'நீதி': 19, 'நீதிமொழிகள்': 19,
        'eccl': 20, 'ecc': 20, 'ecclesiastes': 20, 'பிர': 20, 'பிரசங்கி': 20,
        'song': 21, 'sng': 21, 'song of solomon': 21, 'உன்ன': 21, 'உன்னதப்பாட்டு': 21,
        'isa': 22, 'isaiah': 22, 'ஏசா': 22, 'ஏசாயா': 22,
        'jer': 23, 'jeremiah': 23, 'எரே': 23, 'எரேமியா': 23,
        'lam': 24, 'lamentations': 24, 'புல': 24, 'புலம்பல்': 24,
        'ezek': 25, 'ezk': 25, 'ezekiel': 25, 'எசே': 25, 'எசேக்கியேல்': 25,
        'dan': 26, 'daniel': 26, 'தானி': 26, 'தானியேல்': 26,
        'hos': 27, 'hosea': 27, 'ஓசி': 27, 'ஓசியா': 27,
        'joel': 28, 'jol': 28, 'யோவே': 28, 'யோவேல்': 28,
        'amos': 29, 'amo': 29, 'ஆமோ': 29, 'ஆமோஸ்': 29,
        'obad': 30, 'oba': 30, 'obadiah': 30, 'ஒப': 30, 'ஒபதியா': 30,
        'jonah': 31, 'jon': 31, 'யோனா': 31,
        'mic': 32, 'micah': 32, 'மீகா': 32,
        'nah': 33, 'nam': 33, 'nahum': 33, 'நாகூ': 33, 'நாகூம்': 33,
        'hab': 34, 'habakkuk': 34, 'ஆப': 34, 'ஆபகூக்': 34,
        'zeph': 35, 'zep': 35, 'zephaniah': 35, 'செப்ப': 35, 'செப்பனியா': 35,
        'hag': 36, 'haggai': 36, 'ஆகாய்': 36,
        'zech': 37, 'zec': 37, 'zechariah': 37, 'சக': 37, 'சகரியா': 37,
        'mal': 38, 'malachi': 38, 'மல்': 38, 'மல்கியா': 38,

        // New Testament
        'matt': 39, 'mat': 39, 'matthew': 39, 'மத்': 39, 'மத்தேயு': 39,
        'mark': 40, 'mrk': 40, 'மாற்': 40, 'மாற்கு': 40,
        'luke': 41, 'luk': 41, 'லூக்': 41, 'லூக்கா': 41,
        'john': 42, 'jhn': 42, 'யோவா': 42, 'யோவான்': 42,
        'acts': 43, 'act': 43, 'அப்': 43, 'அப்போஸ்தலர்': 43,
        'rom': 44, 'romans': 44, 'ரோமர்': 44,
        '1cor': 45, '1co': 45, '1 corinthians': 45, '1கொரி': 45, '1 கொரிந்தியர்': 45,
        '2cor': 46, '2co': 46, '2 corinthians': 46, '2கொரி': 46, '2 கொரிந்தியர்': 46,
        'gal': 47, 'galatians': 47, 'கலா': 47, 'கலாத்தியர்': 47,
        'eph': 48, 'ephesians': 48, 'எபே': 48, 'எபேசியர்': 48,
        'phil': 49, 'php': 49, 'philippians': 49, 'பிலி': 49, 'பிலிப்பியர்': 49,
        'col': 50, 'colossians': 50, 'கொலோ': 50, 'கொலோசெயர்': 50,
        '1thess': 51, '1th': 51, '1 thessalonians': 51, '1தெச': 51, '1 தெசலோனிக்கேயர்': 51,
        '2thess': 52, '2th': 52, '2 thessalonians': 52, '2தெச': 52, '2 தெசலோனிக்கேயர்': 52,
        '1tim': 53, '1ti': 53, '1 timothy': 53, '1தீமோ': 53, '1 தீமோத்தேயு': 53,
        '2tim': 54, '2ti': 54, '2 timothy': 54, '2தீமோ': 54, '2 தீமோத்தேயு': 54,
        'titus': 55, 'tit': 55, 'தீத்து': 55,
        'philem': 56, 'phm': 56, 'philemon': 56, 'பிலே': 56, 'பிலேமோன்': 56,
        'heb': 57, 'hebrews': 57, 'எபி': 57, 'எபிரெயர்': 57,
        'jas': 58, 'james': 58, 'யாக்': 58, 'யாக்கோபு': 58,
        '1pet': 59, '1pe': 59, '1 peter': 59, '1பேது': 59, '1 பேதுரு': 59,
        '2pet': 60, '2pe': 60, '2 peter': 60, '2பேது': 60, '2 பேதுரு': 60,
        '1jn': 61, '1john': 61, '1 jn': 61, '1யோவா': 61, '1 யோவான்': 61,
        '2jn': 62, '2john': 62, '2 jn': 62, '2யோவா': 62, '2 யோவான்': 62,
        '3jn': 63, '3john': 63, '3 jn': 63, '3யோவா': 63, '3 யோவான்': 63,
        'jude': 64, 'jud': 64, 'யூதா': 64,
        'rev': 65, 'revelation': 65, 'வெளி': 65, 'வெளிப்படுத்தின விசேஷம்': 65, 'வெளிப்படுத்தல்': 65
    };

    /**
     * Resolves a query string (e.g. "Gen 3:15", "Matt 24", "Rev 20", "1:5", "5")
     */
    function parsePassageQuery(query, fallbackBookIndex = 0, fallbackChapter = 1) {
        if (!query || typeof query !== 'string') return null;
        const cleaned = query.trim().replace(/\s+/g, ' ');
        if (!cleaned) return null;

        // Pattern 0a: Just verse number, e.g. "5", ":5", "v5", "v 5", "verse 5"
        const vOnly = cleaned.match(/^(?:v(?:erse)?\s*|:)?(\d+)$/i);
        if (vOnly) {
            const vs = parseInt(vOnly[1], 10);
            return { bookIndex: fallbackBookIndex, chapter: fallbackChapter, verse: vs };
        }

        // Pattern 0b: Chapter:Verse without book, e.g. "1:5", "2:14", "1.5"
        const chVs = cleaned.match(/^(\d+)[:.](\d+)$/);
        if (chVs) {
            const ch = parseInt(chVs[1], 10);
            const vs = parseInt(chVs[2], 10);
            return { bookIndex: fallbackBookIndex, chapter: ch, verse: vs };
        }

        // Pattern 1: Book + Chapter:Verse (e.g. "Genesis 3:15", "1 Cor 13:4")
        let m = cleaned.match(/^([1-3]?\s?[A-Za-z\u0B80-\u0BFF]+)\s+(\d+)[:.](.+)$/);
        if (m) {
            const bIdx = findBookIndex(m[1].trim());
            if (bIdx !== -1) {
                const ch = parseInt(m[2], 10);
                const vs = parseInt(m[3], 10) || 1;
                return { bookIndex: bIdx, chapter: ch, verse: vs };
            }
        }

        // Pattern 2: Book + Chapter + optional Verse (e.g. "Gen 3", "Matt 24 14", "Daniel 7")
        m = cleaned.match(/^([1-3]?\s?[A-Za-z\u0B80-\u0BFF]+)\s+(\d+)(?:\s+(\d+))?$/);
        if (m) {
            const bIdx = findBookIndex(m[1].trim());
            if (bIdx !== -1) {
                const ch = parseInt(m[2], 10);
                const vs = m[3] ? parseInt(m[3], 10) : 1;
                return { bookIndex: bIdx, chapter: ch, verse: vs };
            }
        }

        // Pattern 3: Just Book name (e.g. "Revelation", "தானியேல்")
        const bIdx = findBookIndex(cleaned);
        if (bIdx !== -1) {
            return { bookIndex: bIdx, chapter: 1, verse: 1 };
        }

        return null;
    }

    function findBookIndex(str) {
        if (!str) return -1;
        const lower = str.toLowerCase().replace(/[.\-_]/g, '').trim();

        if (bookAbbrMap[lower] !== undefined) {
            return bookAbbrMap[lower];
        }

        if (typeof bibleBooks !== 'undefined' && Array.isArray(bibleBooks)) {
            for (let i = 0; i < bibleBooks.length; i++) {
                const b = bibleBooks[i];
                if (b.name.toLowerCase() === lower ||
                    b.shortName.toLowerCase() === lower ||
                    (b.tamilName && b.tamilName.toLowerCase() === lower) ||
                    (b.tamilShortName && b.tamilShortName.toLowerCase() === lower)) {
                    return i;
                }
            }
            for (let i = 0; i < bibleBooks.length; i++) {
                const b = bibleBooks[i];
                if (b.name.toLowerCase().startsWith(lower) ||
                    (b.tamilName && b.tamilName.startsWith(lower))) {
                    return i;
                }
            }
        }
        return -1;
    }

    function getDefaultLanguage() {
        if (typeof currentLanguage !== 'undefined' && ['tamil', 'english', 'both'].includes(currentLanguage)) {
            return currentLanguage;
        }
        const saved = localStorage.getItem('currentLanguage');
        return (saved && ['tamil', 'english', 'both'].includes(saved)) ? saved : 'tamil';
    }

    function syncGlobalLanguageUI(lang) {
        const seg = document.getElementById('sc-global-lang-segment');
        if (!seg) return;
        seg.querySelectorAll('.settings-seg-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function initDefaultPanes() {
        const curBk = (typeof currentBook === 'number' && currentBook >= 0 && currentBook < 66) ? currentBook : 0;
        const curCh = (typeof currentChapter === 'number' && currentChapter >= 1) ? currentChapter : 1;
        state.globalLanguage = getDefaultLanguage();

        // Pane 1: Current book & chapter (or Genesis 1)
        const pane1 = {
            id: nextPaneId++,
            bookIndex: curBk,
            chapter: curCh,
            targetVerse: 1,
            language: state.globalLanguage,
            loading: false,
            verses: null
        };

        // Pane 2: Genesis <-> Matthew comparison by default
        const pane2Book = curBk < 39 ? 39 : 0;
        const pane2 = {
            id: nextPaneId++,
            bookIndex: pane2Book,
            chapter: 1,
            targetVerse: 1,
            language: state.globalLanguage,
            loading: false,
            verses: null
        };

        state.panes = [pane1, pane2];
    }

    function openModal() {
        if (state.panes.length === 0) {
            initDefaultPanes();
        }

        state.globalLanguage = getDefaultLanguage();
        syncGlobalLanguageUI(state.globalLanguage);

        const modal = document.getElementById('scripture-compare-modal');
        if (!modal) return;

        modal.style.display = 'flex';
        void modal.offsetHeight; // trigger reflow
        modal.classList.add('active');
        state.isOpen = true;
        document.body.style.overflow = 'hidden';

        renderPanes();
    }

    function closeModal() {
        closePassagePicker();
        const modal = document.getElementById('scripture-compare-modal');
        if (!modal) return;

        modal.classList.remove('active');
        state.isOpen = false;
        document.body.style.overflow = '';

        setTimeout(() => {
            if (!state.isOpen) {
                modal.style.display = 'none';
            }
        }, 200);
    }

    function addPane() {
        if (state.panes.length >= 3) return;

        const candidateBooks = [26, 65, 18, 42, 0, 39]; // Daniel, Revelation, Psalms, John, Genesis, Matthew
        const usedBooks = state.panes.map(p => p.bookIndex);
        let nextBk = candidateBooks.find(b => !usedBooks.includes(b));
        if (nextBk === undefined) nextBk = (state.panes[state.panes.length - 1].bookIndex + 1) % 66;

        const newPane = {
            id: nextPaneId++,
            bookIndex: nextBk,
            chapter: 1,
            targetVerse: 1,
            language: state.globalLanguage,
            loading: false,
            verses: null
        };

        state.panes.push(newPane);
        renderPanes();
    }

    function removePane(paneId) {
        if (state.panes.length <= 2) return;
        state.panes = state.panes.filter(p => p.id !== paneId);
        renderPanes();
    }

    function updateHeaderControls() {
        const count = state.panes.length;

        const addBtn = document.getElementById('sc-add-pane-btn');
        if (addBtn) {
            addBtn.disabled = count >= 3;
            addBtn.title = count >= 3 ? 'Maximum 3 comparisons reached' : 'Add comparison pane (Max 3)';
        }

        const container = document.getElementById('sc-panes-container');
        if (container) {
            container.setAttribute('data-pane-count', String(count));
        }

        syncGlobalLanguageUI(state.globalLanguage);
    }

    let activePopover = null;

    function formatPassageLabel(pane) {
        if (!pane) return '';
        const book = (typeof bibleBooks !== 'undefined' && bibleBooks[pane.bookIndex]) || { name: 'Genesis', tamilName: 'ஆதியாகமம்' };
        const v = (pane.targetVerse && pane.targetVerse > 1) ? `:${pane.targetVerse}` : '';
        return `${book.name} ${pane.chapter}${v}`;
    }

    function updatePassageLabel(paneId) {
        const pane = state.panes.find(p => p.id === paneId);
        if (!pane) return;
        const labelEl = document.getElementById(`sc-passage-label-${paneId}`);
        if (labelEl) {
            labelEl.textContent = formatPassageLabel(pane);
        }
    }

    function openPassagePicker(paneId) {
        const pane = state.panes.find(p => p.id === paneId);
        if (!pane) return;

        if (activePopover && activePopover.paneId === paneId) {
            closePassagePicker();
            return;
        }

        closePassagePicker();

        activePopover = {
            paneId: paneId,
            pendingBookIndex: pane.bookIndex,
            pendingChapter: pane.chapter,
            pendingVerse: pane.targetVerse || 1,
            filterText: ''
        };

        renderPickerPopover();
    }

    function closePassagePicker() {
        if (!activePopover) return;
        const popoverEl = document.getElementById('sc-active-picker-popover');
        if (popoverEl) {
            popoverEl.remove();
        }
        document.querySelectorAll('.sc-passage-btn.active').forEach(b => b.classList.remove('active'));
        activePopover = null;
    }

    function getVerseCountForBookAndChapter(bookIndex, chapter) {
        if (typeof bibleMeta !== 'undefined' && Array.isArray(bibleMeta) && bibleMeta[bookIndex]) {
            const chArray = bibleMeta[bookIndex].chapters;
            if (chArray && chArray[chapter - 1]) {
                return chArray[chapter - 1];
            }
        }
        if (typeof window.bibleMeta !== 'undefined' && Array.isArray(window.bibleMeta) && window.bibleMeta[bookIndex]) {
            const chArray = window.bibleMeta[bookIndex].chapters;
            if (chArray && chArray[chapter - 1]) {
                return chArray[chapter - 1];
            }
        }
        const b = (typeof bibleBooks !== 'undefined') ? bibleBooks[bookIndex] : null;
        if (b && typeof window.getVerses === 'function') {
            const norm = b.name.replace(/^III\s+/, '3 ').replace(/^II\s+/, '2 ').replace(/^I\s+/, '1 ');
            const vs = window.getVerses(norm, chapter);
            if (vs && vs.length) return vs.length;
            const vs2 = window.getVerses(b.name, chapter);
            if (vs2 && vs2.length) return vs2.length;
        }
        return 30;
    }

    function renderPickerPopover() {
        if (!activePopover) return;
        const { paneId, pendingBookIndex, pendingChapter, pendingVerse, filterText } = activePopover;
        const pane = state.panes.find(p => p.id === paneId);
        if (!pane) return;

        const anchor = document.getElementById(`sc-picker-anchor-${paneId}`);
        if (!anchor) return;

        const btn = anchor.querySelector('.sc-passage-btn');
        if (btn) btn.classList.add('active');

        let popoverEl = document.getElementById('sc-active-picker-popover');
        if (!popoverEl) {
            popoverEl = document.createElement('div');
            popoverEl.id = 'sc-active-picker-popover';
            popoverEl.className = 'sc-picker-popover';
            popoverEl.addEventListener('click', (e) => e.stopPropagation());
            popoverEl.addEventListener('mousedown', (e) => e.stopPropagation());
        }
        if (popoverEl.parentElement !== anchor) {
            anchor.appendChild(popoverEl);
        }

        // Prevent popover from clipping past right edge of screen
        const anchorRect = anchor.getBoundingClientRect();
        if (anchorRect.left + 490 > window.innerWidth) {
            popoverEl.style.left = 'auto';
            popoverEl.style.right = '0';
        } else {
            popoverEl.style.left = '0';
            popoverEl.style.right = 'auto';
        }

        const curBook = (typeof bibleBooks !== 'undefined' && bibleBooks[pendingBookIndex]) || { name: 'Genesis', tamilName: 'ஆதியாகமம்', chapters: 50 };
        const totalChapters = curBook.chapters || 1;
        const totalVerses = getVerseCountForBookAndChapter(pendingBookIndex, pendingChapter);

        const currentLabel = `${curBook.name} ${pendingChapter}${pendingVerse > 1 ? ':' + pendingVerse : ''}`;

        // Build Book list HTML
        const allBooks = typeof bibleBooks !== 'undefined' ? bibleBooks : [];
        let booksHtml = '';
        allBooks.forEach((b, idx) => {
            const isActive = idx === pendingBookIndex;
            booksHtml += `
                <div class="sc-c3-book-item ${isActive ? 'active' : ''}" data-b-idx="${idx}">
                    <span class="sc-c3-book-en">${b.name}</span>
                    <span class="sc-c3-book-ta">${b.tamilName || ''}</span>
                </div>
            `;
        });

        // Build Chapter buttons HTML
        let chHtml = '';
        for (let c = 1; c <= totalChapters; c++) {
            const isActive = c === pendingChapter;
            chHtml += `<button type="button" class="sc-c3-num-btn ${isActive ? 'active' : ''}" data-ch="${c}">${c}</button>`;
        }

        // Build Verse buttons HTML
        let vsHtml = '';
        for (let v = 1; v <= totalVerses; v++) {
            const isActive = v === pendingVerse;
            vsHtml += `<button type="button" class="sc-c3-num-btn ${isActive ? 'active' : ''}" data-v="${v}">${v}</button>`;
        }

        popoverEl.innerHTML = `
            <div class="sc-picker-header">
                <div class="sc-picker-title-wrap">
                    <svg class="sc-picker-book-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <span class="sc-picker-current-label">${currentLabel}</span>
                </div>
                <button type="button" class="sc-picker-close" title="Close" aria-label="Close passage picker">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="sc-c3-layout">
                <!-- Left: Book Search & List -->
                <div class="sc-c3-left">
                    <div class="sc-c3-search-box">
                        <svg class="sc-c3-search-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" class="sc-c3-search-input" placeholder="Filter books..." value="${filterText}">
                        <button type="button" class="sc-c3-search-clear" style="display: ${filterText ? 'block' : 'none'};">✕</button>
                    </div>
                    <div class="sc-c3-books-list">
                        ${booksHtml}
                        <div class="sc-c3-empty" style="display: none;">No books found</div>
                    </div>
                </div>

                <!-- Right: Stacked Grids -->
                <div class="sc-c3-right">
                    <!-- Chapter Section -->
                    <div class="sc-c3-section">
                        <div class="sc-c3-sec-header">
                            <span class="sc-c3-sec-label">Chapter</span>
                            <span class="sc-c3-badge" id="sc-c3-ch-count">${totalChapters}</span>
                        </div>
                        <div class="sc-c3-grid-6" id="sc-c3-ch-grid">
                            ${chHtml}
                        </div>
                    </div>

                    <div class="sc-c3-divider"></div>

                    <!-- Verse Section -->
                    <div class="sc-c3-section">
                        <div class="sc-c3-sec-header">
                            <div class="sc-c3-vs-title-wrap">
                                <span class="sc-c3-sec-label">Verse</span>
                                <span class="sc-c3-badge" id="sc-c3-vs-count">${totalVerses}</span>
                            </div>
                            <button type="button" class="sc-c3-all-btn ${pendingVerse === 1 ? 'active' : ''}" data-v="1" title="Read entire chapter">
                                All
                            </button>
                        </div>
                        <div class="sc-c3-grid-6" id="sc-c3-vs-grid">
                            ${vsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Filter helper to update DOM without re-rendering everything
        const filterInput = popoverEl.querySelector('.sc-c3-search-input');
        const clearBtn = popoverEl.querySelector('.sc-c3-search-clear');
        const emptyEl = popoverEl.querySelector('.sc-c3-empty');
        const bookItems = popoverEl.querySelectorAll('.sc-c3-book-item');

        const applyFilter = (q) => {
            const query = (q || '').toLowerCase().trim();
            let visible = 0;
            bookItems.forEach(item => {
                const bIdx = parseInt(item.dataset.bIdx, 10);
                const b = allBooks[bIdx];
                if (!b) return;
                const match = !query || (
                    b.name.toLowerCase().includes(query) ||
                    (b.shortName && b.shortName.toLowerCase().includes(query)) ||
                    (b.tamilName && b.tamilName.includes(query))
                );
                item.style.display = match ? 'flex' : 'none';
                if (match) visible++;
            });
            if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
            if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
        };

        if (filterText) applyFilter(filterText);

        // Auto-scroll active book into view
        const activeBookEl = popoverEl.querySelector('.sc-c3-book-item.active');
        if (activeBookEl) activeBookEl.scrollIntoView({ block: 'nearest' });
        const activeChEl = popoverEl.querySelector('.sc-c3-num-btn[data-ch].active');
        if (activeChEl) activeChEl.scrollIntoView({ block: 'nearest' });

        // Event: Close Button
        const closeBtn = popoverEl.querySelector('.sc-picker-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closePassagePicker();
            });
        }

        // Event: Filter search
        if (filterInput) {
            filterInput.addEventListener('input', (e) => {
                activePopover.filterText = e.target.value;
                applyFilter(e.target.value);
            });
            filterInput.addEventListener('click', (e) => e.stopPropagation());
            filterInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const val = filterInput.value.trim();
                    if (!val) return;
                    const parsed = parsePassageQuery(val, activePopover.pendingBookIndex, activePopover.pendingChapter);
                    if (parsed) {
                        applyPassageSelection(paneId, parsed.bookIndex, parsed.chapter, parsed.verse);
                    }
                }
            });
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                activePopover.filterText = '';
                if (filterInput) {
                    filterInput.value = '';
                    filterInput.focus();
                }
                applyFilter('');
            });
        }

        // Helper: Refresh Verse Grid for given chapter
        const refreshVerseGrid = (ch) => {
            const vsGrid = popoverEl.querySelector('#sc-c3-vs-grid');
            const vsCountBadge = popoverEl.querySelector('#sc-c3-vs-count');
            if (!vsGrid) return;

            const vCount = getVerseCountForBookAndChapter(activePopover.pendingBookIndex, ch);
            if (vsCountBadge) vsCountBadge.textContent = vCount;

            let updatedVsHtml = '';
            for (let v = 1; v <= vCount; v++) {
                const isActive = v === activePopover.pendingVerse;
                updatedVsHtml += `<button type="button" class="sc-c3-num-btn ${isActive ? 'active' : ''}" data-v="${v}">${v}</button>`;
            }
            vsGrid.innerHTML = updatedVsHtml;
            attachVerseEvents();
        };

        const attachVerseEvents = () => {
            popoverEl.querySelectorAll('.sc-c3-num-btn[data-v]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const v = parseInt(btn.dataset.v, 10);
                    applyPassageSelection(paneId, activePopover.pendingBookIndex, activePopover.pendingChapter, v);
                });
            });
        };

        // Event: Chapter Click
        popoverEl.querySelectorAll('.sc-c3-num-btn[data-ch]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const ch = parseInt(btn.dataset.ch, 10);
                activePopover.pendingChapter = ch;
                activePopover.pendingVerse = 1;

                popoverEl.querySelectorAll('.sc-c3-num-btn[data-ch]').forEach(b => {
                    b.classList.toggle('active', parseInt(b.dataset.ch, 10) === ch);
                });

                const curB = allBooks[activePopover.pendingBookIndex] || { name: 'Book' };
                const topLabel = popoverEl.querySelector('.sc-picker-current-label');
                if (topLabel) topLabel.textContent = `${curB.name} ${ch}`;

                refreshVerseGrid(ch);
            });
        });

        attachVerseEvents();

        // Event: All Verse Click
        const allBtn = popoverEl.querySelector('.sc-c3-all-btn');
        if (allBtn) {
            allBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                applyPassageSelection(paneId, activePopover.pendingBookIndex, activePopover.pendingChapter, 1);
            });
        }

        // Event: Book Click
        popoverEl.querySelectorAll('.sc-c3-book-item[data-b-idx]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const bIdx = parseInt(item.dataset.bIdx, 10);
                activePopover.pendingBookIndex = bIdx;
                activePopover.pendingChapter = 1;
                activePopover.pendingVerse = 1;
                renderPickerPopover();
            });
        });
    }

    function selectVerse(sourcePaneId, verseNum) {
        const pane = state.panes.find(p => p.id === sourcePaneId);
        if (!pane) return;

        pane.targetVerse = verseNum;
        updatePassageLabel(sourcePaneId);
        scrollToVerse(sourcePaneId, verseNum);
    }

    function applyPassageSelection(paneId, bookIndex, chapter, targetVerse) {
        const pane = state.panes.find(p => p.id === paneId);
        if (!pane) return;

        const isSamePassage = pane.bookIndex === bookIndex && pane.chapter === chapter && pane.verses;

        pane.bookIndex = bookIndex;
        pane.chapter = chapter;
        pane.targetVerse = targetVerse || 1;

        updatePassageLabel(paneId);
        closePassagePicker();

        if (isSamePassage) {
            selectVerse(paneId, pane.targetVerse);
        } else {
            loadPaneChapter(pane);
        }
    }

    async function loadPaneChapter(pane) {
        if (typeof bibleDataManager === 'undefined' || typeof bibleBooks === 'undefined') return;

        const book = bibleBooks[pane.bookIndex];
        if (!book) return;

        pane.loading = true;
        updatePaneLoading(pane.id, true);

        try {
            const lang = pane.language || state.globalLanguage;
            let tamilVerses = null;
            let englishVerses = null;

            if (lang === 'both') {
                const secLang = (typeof getEffectiveTamilLanguage === 'function')
                    ? getEffectiveTamilLanguage()
                    : 'tamil';
                const engFile = (typeof getBookFileForLanguage === 'function')
                    ? getBookFileForLanguage(book.file, 'english')
                    : book.file;

                await Promise.all([
                    bibleDataManager.loadEntireBook(book.file, secLang),
                    bibleDataManager.loadEntireBook(engFile, 'english')
                ]);

                const [tData, eData] = await Promise.all([
                    bibleDataManager.getChapterData(book.file, pane.chapter, secLang),
                    bibleDataManager.getChapterData(engFile, pane.chapter, 'english')
                ]);

                tamilVerses = tData || {};
                englishVerses = eData || {};
            } else if (lang === 'english') {
                const engFile = (typeof getBookFileForLanguage === 'function')
                    ? getBookFileForLanguage(book.file, 'english')
                    : book.file;
                await bibleDataManager.loadEntireBook(engFile, 'english');
                englishVerses = await bibleDataManager.getChapterData(engFile, pane.chapter, 'english') || {};
            } else {
                // Tamil
                const tLang = (typeof getEffectiveTamilLanguage === 'function')
                    ? getEffectiveTamilLanguage()
                    : 'tamil';
                await bibleDataManager.loadEntireBook(book.file, tLang);
                tamilVerses = await bibleDataManager.getChapterData(book.file, pane.chapter, tLang) || {};
            }

            pane.verses = {
                tamil: tamilVerses,
                english: englishVerses
            };

            renderPaneContent(pane);
        } catch (err) {
            console.error('Error loading scripture compare chapter:', err);
            renderPaneError(pane.id, 'Failed to load chapter data.');
        } finally {
            pane.loading = false;
            updatePaneLoading(pane.id, false);
        }
    }

    function updatePaneLoading(paneId, isLoading) {
        const paneEl = document.getElementById(`sc-pane-${paneId}`);
        if (!paneEl) return;
        const contentEl = paneEl.querySelector('.sc-pane-content');
        if (!contentEl) return;

        if (isLoading) {
            contentEl.innerHTML = `
                <div class="sc-loading">
                    <div class="sc-spinner"></div>
                    <span>Loading scripture...</span>
                </div>
            `;
        }
    }

    function renderPaneError(paneId, msg) {
        const paneEl = document.getElementById(`sc-pane-${paneId}`);
        if (!paneEl) return;
        const contentEl = paneEl.querySelector('.sc-pane-content');
        if (contentEl) {
            contentEl.innerHTML = `<div class="sc-empty">${msg}</div>`;
        }
    }

    /**
     * Renders verses inside a pane matching the actual Bible reading structure
     */
    function renderPaneContent(pane) {
        const paneEl = document.getElementById(`sc-pane-${pane.id}`);
        if (!paneEl) return;

        const contentEl = paneEl.querySelector('.sc-pane-content');
        if (!contentEl || !pane.verses) return;

        const book = bibleBooks[pane.bookIndex];
        const primaryData = pane.verses.tamil || pane.verses.english || {};
        const verseKeys = Object.keys(primaryData).sort((a, b) => {
            const nA = parseInt(a.replace('verse_', ''), 10);
            const nB = parseInt(b.replace('verse_', ''), 10);
            return nA - nB;
        });

        if (verseKeys.length === 0) {
            contentEl.innerHTML = `<div class="sc-empty">No verses found for this chapter.</div>`;
            return;
        }

        pane.verseCount = verseKeys.length;
        updatePassageLabel(pane.id);

        const bookName = book.name;
        const curChapter = pane.chapter;

        // English text color class
        const englishColorClass = (typeof englishTextColor !== 'undefined' && englishTextColor !== 'default')
            ? ` ${englishTextColor}`
            : '';

        let html = '';

        const curLang = pane.language || state.globalLanguage;

        // Render verses using exact native Bible HTML (.verse-container, .verse-line, sup.v-num)
        verseKeys.forEach(verseKey => {
            const verseNum = verseKey.replace('verse_', '');
            const vInt = parseInt(verseNum, 10);

            // Memory verse styling
            const isMem = (typeof isMemoryVerse === 'function')
                ? isMemoryVerse(bookName, curChapter, vInt)
                : false;
            const memoryClass = isMem ? ' memory-verse' : '';

            if (curLang === 'both') {
                let tamilText = pane.verses.tamil ? (pane.verses.tamil[verseKey] || '') : '';
                let englishText = pane.verses.english ? (pane.verses.english[verseKey] || '') : '';

                if (typeof highlightSpecialText === 'function') {
                    tamilText = highlightSpecialText(tamilText, 'both-tamil', bookName, curChapter, verseNum);
                    englishText = highlightSpecialText(englishText, 'both-english', bookName, curChapter, verseNum);
                }

                html += `
                    <div class="verse-container" data-verse="${verseNum}">
                        <p class="verse-line${memoryClass}" id="sc-v-${pane.id}-${verseNum}" data-verse="${verseNum}">
                            <sup class="v-num">${verseNum}</sup><span class="tamil-text">${tamilText}</span><br>
                            <span class="english-text${englishColorClass}">${englishText}</span>
                        </p>
                    </div>
                `;
            } else if (curLang === 'english') {
                let englishText = pane.verses.english ? (pane.verses.english[verseKey] || '') : '';
                if (typeof highlightSpecialText === 'function') {
                    englishText = highlightSpecialText(englishText, 'english', bookName, curChapter, verseNum);
                }

                html += `
                    <div class="verse-container" data-verse="${verseNum}">
                        <p class="verse-line${memoryClass}" id="sc-v-${pane.id}-${verseNum}" data-verse="${verseNum}">
                            <sup class="v-num">${verseNum}</sup>${englishText}
                        </p>
                    </div>
                `;
            } else {
                // Tamil
                let tamilText = pane.verses.tamil ? (pane.verses.tamil[verseKey] || '') : '';
                if (typeof highlightSpecialText === 'function') {
                    tamilText = highlightSpecialText(tamilText, 'tamil', bookName, curChapter, verseNum);
                }

                html += `
                    <div class="verse-container" data-verse="${verseNum}">
                        <p class="verse-line${memoryClass}" id="sc-v-${pane.id}-${verseNum}" data-verse="${verseNum}">
                            <sup class="v-num">${verseNum}</sup>${tamilText}
                        </p>
                    </div>
                `;
            }
        });

        contentEl.innerHTML = html;

        // Interactive verse selection: clicking any verse highlights and scrolls that pane
        contentEl.querySelectorAll('.verse-line').forEach(vl => {
            vl.addEventListener('click', () => {
                const vNum = parseInt(vl.dataset.verse, 10);
                if (vNum) {
                    selectVerse(pane.id, vNum);
                }
            });
        });

        if (pane.targetVerse) {
            setTimeout(() => {
                scrollToVerse(pane.id, pane.targetVerse);
            }, 80);
        }
    }

    function scrollToVerse(paneId, verseNum) {
        const paneEl = document.getElementById(`sc-pane-${paneId}`);
        if (!paneEl) return;

        const contentEl = paneEl.querySelector('.sc-pane-content');
        if (!contentEl) return;

        const vNum = parseInt(verseNum, 10) || 1;

        // Mark active selected verse in this pane
        contentEl.querySelectorAll('.verse-line.sc-selected-verse').forEach(el => {
            el.classList.remove('sc-selected-verse');
        });

        const performScroll = () => {
            const verseEl = document.getElementById(`sc-v-${paneId}-${vNum}`);
            if (!verseEl) return false;

            // Highlight selected verse
            verseEl.classList.add('sc-selected-verse');

            // Trigger gentle highlight pulse
            verseEl.classList.remove('sc-highlight-pulse');
            void verseEl.offsetWidth;
            verseEl.classList.add('sc-highlight-pulse');

            // Calculate precise scroll offset relative to scrolling container
            const contentRect = contentEl.getBoundingClientRect();
            const verseRect = verseEl.getBoundingClientRect();
            const relativeOffset = verseRect.top - contentRect.top;
            const targetScrollTop = Math.max(0, contentEl.scrollTop + relativeOffset - 24);

            contentEl.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });

            return true;
        };

        if (!performScroll()) {
            setTimeout(performScroll, 80);
            setTimeout(performScroll, 220);
        }
    }

    function renderPanes() {
        const container = document.getElementById('sc-panes-container');
        if (!container) return;

        updateHeaderControls();

        if (typeof bibleBooks === 'undefined' || !Array.isArray(bibleBooks)) {
            container.innerHTML = `<div class="sc-loading"><div class="sc-spinner"></div><span>Loading Bible books...</span></div>`;
            return;
        }

        const showRemove = state.panes.length > 2;

        closePassagePicker();

        container.innerHTML = state.panes.map(pane => {
            return `
                <div class="sc-pane" id="sc-pane-${pane.id}">
                    <div class="sc-pane-toolbar">
                        <div class="sc-pane-toolbar-row">
                            <!-- Modern Passage Picker Button (e.g. Genesis 1:1 ▾) -->
                            <div class="sc-passage-picker-anchor" id="sc-picker-anchor-${pane.id}">
                                <button type="button" class="sc-passage-btn" data-pane-id="${pane.id}" aria-label="Select Passage" title="Choose Book, Chapter, or Verse">
                                    <span class="sc-passage-label" id="sc-passage-label-${pane.id}">${formatPassageLabel(pane)}</span>
                                    <svg class="sc-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>

                            <!-- Search input -->
                            <div class="sc-search-wrap">
                                <svg class="sc-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                <input type="text" class="sc-search-input" data-pane-id="${pane.id}"
                                    placeholder="Search (e.g. Gen 3:15, Matt 24)..."
                                    autocomplete="off" spellcheck="false">
                            </div>

                            ${showRemove ? `
                                <button type="button" class="sc-remove-pane-btn" data-pane-id="${pane.id}" title="Remove this comparison">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    <!-- Scripture reading area with exact native Bible typography -->
                    <div class="sc-pane-content scripture-text">
                        <div class="sc-loading"><div class="sc-spinner"></div><span>Loading scripture...</span></div>
                    </div>
                </div>
            `;
        }).join('');

        attachPaneEventListeners();

        state.panes.forEach(pane => {
            loadPaneChapter(pane);
        });
    }

    function attachPaneEventListeners() {
        const container = document.getElementById('sc-panes-container');
        if (!container) return;

        // Passage picker buttons
        container.querySelectorAll('.sc-passage-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const paneId = parseInt(btn.dataset.paneId, 10);
                openPassagePicker(paneId);
            });
        });

        // Search inputs
        container.querySelectorAll('.sc-search-wrap').forEach(wrap => {
            const input = wrap.querySelector('.sc-search-input');
            const icon = wrap.querySelector('.sc-search-icon');
            if (!input) return;

            const paneId = parseInt(input.dataset.paneId, 10);
            const pane = state.panes.find(p => p.id === paneId);
            if (!pane) return;

            const executeSearch = () => {
                const query = input.value.trim();
                if (!query) return;
                const parsed = parsePassageQuery(query, pane.bookIndex, pane.chapter);
                if (parsed) {
                    const isSamePassage = pane.bookIndex === parsed.bookIndex && pane.chapter === parsed.chapter && pane.verses;
                    pane.bookIndex = parsed.bookIndex;
                    pane.chapter = parsed.chapter;
                    pane.targetVerse = parsed.verse || 1;

                    updatePassageLabel(paneId);
                    input.value = '';

                    if (isSamePassage) {
                        selectVerse(paneId, pane.targetVerse);
                    } else {
                        loadPaneChapter(pane);
                    }
                } else {
                    input.style.borderColor = '#d93025';
                    setTimeout(() => { input.style.borderColor = ''; }, 1200);
                }
            };

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    executeSearch();
                }
            });

            if (icon) {
                icon.style.cursor = 'pointer';
                icon.addEventListener('click', executeSearch);
            }
        });

        // Remove pane buttons
        container.querySelectorAll('.sc-remove-pane-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const paneId = parseInt(btn.dataset.paneId, 10);
                removePane(paneId);
            });
        });

        // Scrolling state for dynamic scrollbar visibility matching main Bible page
        container.querySelectorAll('.sc-pane-content').forEach(content => {
            let scrollTimer = null;
            content.addEventListener('scroll', () => {
                content.classList.add('scrolling');
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    content.classList.remove('scrolling');
                }, 800);
            }, { passive: true });
        });
    }

    function init() {
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }

        const compareBtn = document.getElementById('compare-bible-btn');
        if (compareBtn) {
            compareBtn.addEventListener('click', () => {
                if (state.isOpen) closeModal();
                else openModal();
            });
        }

        const closeBtn = document.getElementById('sc-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        const backdrop = document.getElementById('sc-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeModal);
        }

        const addBtn = document.getElementById('sc-add-pane-btn');
        if (addBtn) {
            addBtn.addEventListener('click', addPane);
        }

        // Common header language segment (changes language for all panes)
        const globalLangSegment = document.getElementById('sc-global-lang-segment');
        if (globalLangSegment) {
            globalLangSegment.querySelectorAll('.settings-seg-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const newLang = btn.dataset.lang;
                    if (!newLang || state.globalLanguage === newLang) return;
                    state.globalLanguage = newLang;
                    syncGlobalLanguageUI(newLang);
                    state.panes.forEach(pane => {
                        pane.language = newLang;
                    });
                    state.panes.forEach(pane => {
                        loadPaneChapter(pane);
                    });
                });
            });
        }

        // Close passage picker on outside click
        document.addEventListener('click', (e) => {
            if (!activePopover) return;
            const path = e.composedPath ? e.composedPath() : [];
            const isInsidePopover = path.some(el => el && (el.id === 'sc-active-picker-popover' || (el.classList && el.classList.contains('sc-picker-popover'))));
            const isInsideAnchor = path.some(el => el && el.id === `sc-picker-anchor-${activePopover.paneId}`);
            if (isInsidePopover || isInsideAnchor) {
                return;
            }
            const popoverEl = document.getElementById('sc-active-picker-popover');
            if (popoverEl && !popoverEl.contains(e.target)) {
                const anchor = document.getElementById(`sc-picker-anchor-${activePopover.paneId}`);
                if (!anchor || !anchor.contains(e.target)) {
                    closePassagePicker();
                }
            }
        });

        // Global Keydown: Escape closes popover or modal, Alt+C toggles
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (activePopover) {
                    closePassagePicker();
                } else if (state.isOpen) {
                    closeModal();
                }
            } else if (e.altKey && (e.key === 'c' || e.key === 'C')) {
                e.preventDefault();
                if (state.isOpen) closeModal();
                else openModal();
            }
        });
    }

    window.scriptureCompareManager = {
        open: openModal,
        close: closeModal,
        toggle: () => { if (state.isOpen) closeModal(); else openModal(); },
        addPane,
        removePane,
        setLanguage: (lang) => {
            if (!['tamil', 'english', 'both'].includes(lang)) return;
            state.globalLanguage = lang;
            syncGlobalLanguageUI(lang);
            state.panes.forEach(p => { p.language = lang; loadPaneChapter(p); });
        },
        getState: () => state
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
