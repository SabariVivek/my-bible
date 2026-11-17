/**
 * Easy Versions popup
 * Long-press a verse for 5 seconds to open a popup comparing:
 *   1. the actual Bible verse (in the current reading language)
 *   2. Simple Tamil  (resources/easy-versions/<book>.js)
 *   3. Easy English  (resources/easy-versions/<book>.js)
 * with Previous / Next buttons to move through the book.
 *
 * Only books listed in EASY_VERSION_BOOKS are enabled. To add a book, drop
 * resources/easy-versions/<file>.js (same shape as romans.js, exposing a
 * global const named after the file) and add its file name here.
 */
(function () {
    const EASY_VERSION_BOOKS = ['romans'];
    const LONG_PRESS_MS = 5000;
    const MOVE_TOLERANCE_PX = 10;

    const loaded = {};      // file -> Promise<data|null>
    const state = { file: null, bookIndex: null, chapter: 1, verse: 1 };

    // ---------- data ----------
    function loadEasyVersion(file) {
        if (!loaded[file]) {
            loaded[file] = new Promise(resolve => {
                const read = () => { try { return eval(file); } catch (e) { return null; } };
                const existing = read();
                if (existing) return resolve(existing);
                const script = document.createElement('script');
                const cb = (document.querySelector('script[src*="js/script.js"]')?.src.match(/cb=(\d+)/) || [])[1];
                script.src = `resources/easy-versions/${file}.js${cb ? `?cb=${cb}` : ''}`;
                script.onload = () => resolve(read());
                script.onerror = () => { script.remove(); delete loaded[file]; resolve(null); };
                document.head.appendChild(script);
            });
        }
        return loaded[file];
    }

    function getEasyVerse(data, chapter, verse) {
        const ch = data && data.chapters.find(c => c.chapter === chapter);
        return ch ? ch.verses.find(v => v.verse === verse) || null : null;
    }

    function getChapterVerseCount(data, chapter) {
        const ch = data && data.chapters.find(c => c.chapter === chapter);
        return ch ? ch.verses.length : 0;
    }

    // Actual verse language: follows the reader's language; for "both" use Tamil,
    // since the easy versions are based on the Tamil Old Version.
    function getActualLanguage() {
        if (currentLanguage === 'english') return 'english';
        return getEffectiveTamilLanguage();
    }

    function getActualLabel(lang) {
        if (lang === 'english') return englishVersion === 'kjv' ? 'English · KJV' : 'English';
        if (lang === 'tanglish') return 'Tanglish';
        return 'தமிழ் · TAOVBSI';
    }

    async function getActualVerse(bookIndex, chapter, verse, lang) {
        const book = bibleBooks[bookIndex];
        const file = lang === 'english' ? getBookFileForLanguage(book.file, 'english') : book.file;
        try {
            const chapterData = await bibleDataManager.getChapterData(file, chapter, lang);
            return getVerseTextFromChapter(chapterData, verse);
        } catch (e) {
            return null;
        }
    }

    // ---------- popup ----------
    function esc(str) {
        return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function ensurePopup() {
        let overlay = document.getElementById('easy-versions-overlay');
        if (overlay) return overlay;
        overlay = document.createElement('div');
        overlay.id = 'easy-versions-overlay';
        overlay.className = 'easy-versions-overlay';
        overlay.innerHTML = `
            <div class="easy-versions-card" role="dialog" aria-modal="true" aria-labelledby="easy-versions-title">
                <div class="easy-versions-header">
                    <h2 class="easy-versions-title" id="easy-versions-title"></h2>
                    <button type="button" class="easy-versions-close" aria-label="Close">&times;</button>
                </div>
                <div class="easy-versions-body" id="easy-versions-body"></div>
                <div class="easy-versions-footer">
                    <button type="button" class="easy-versions-nav" data-dir="-1">&lsaquo; Previous</button>
                    <button type="button" class="easy-versions-nav" data-dir="1">Next &rsaquo;</button>
                </div>
            </div>`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', e => {
            if (e.target === overlay || e.target.closest('.easy-versions-close')) closePopup();
            const nav = e.target.closest('.easy-versions-nav');
            if (nav && !nav.disabled) step(parseInt(nav.dataset.dir, 10));
        });
        document.addEventListener('keydown', e => {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') closePopup();
            else if (e.key === 'ArrowRight') step(1);
            else if (e.key === 'ArrowLeft') step(-1);
        });
        return overlay;
    }

    function closePopup() {
        const overlay = document.getElementById('easy-versions-overlay');
        if (overlay) overlay.classList.remove('active');
    }

    async function render() {
        const overlay = ensurePopup();
        const { file, bookIndex, chapter, verse } = state;
        const data = await loadEasyVersion(file);
        const book = bibleBooks[bookIndex];
        const bookName = currentLanguage === 'english' ? book.name : book.tamilName;

        overlay.querySelector('#easy-versions-title').textContent = `${bookName} ${chapter}:${verse}`;
        const body = overlay.querySelector('#easy-versions-body');

        const lang = getActualLanguage();
        const actual = await getActualVerse(bookIndex, chapter, verse, lang);
        // Ignore stale renders if the user navigated meanwhile
        if (state.chapter !== chapter || state.verse !== verse) return;

        const easy = getEasyVerse(data, chapter, verse);
        const section = (label, text, cls) => `
            <section class="easy-versions-section ${cls}">
                <div class="easy-versions-label">${esc(label)}</div>
                <p class="easy-versions-text">${text ? esc(text) : '<span class="easy-versions-missing">Not available</span>'}</p>
            </section>`;

        body.innerHTML =
            section(getActualLabel(lang), actual, 'is-actual') +
            section('எளிய தமிழ் · Simple Tamil', easy && easy.tamil, 'is-tamil') +
            section('Easy English', easy && easy.english, 'is-english');
        body.scrollTop = 0;

        const isFirst = chapter === 1 && verse === 1;
        const lastChapter = data ? data.chapters[data.chapters.length - 1].chapter : chapter;
        const isLast = chapter === lastChapter && verse >= getChapterVerseCount(data, chapter);
        overlay.querySelector('.easy-versions-nav[data-dir="-1"]').disabled = isFirst;
        overlay.querySelector('.easy-versions-nav[data-dir="1"]').disabled = isLast;
    }

    async function step(dir) {
        const data = await loadEasyVersion(state.file);
        if (!data) return;
        let { chapter, verse } = state;
        verse += dir;
        if (verse < 1) {
            if (chapter <= 1) return;
            chapter -= 1;
            verse = getChapterVerseCount(data, chapter);
        } else if (verse > getChapterVerseCount(data, chapter)) {
            if (!data.chapters.some(c => c.chapter === chapter + 1)) return;
            chapter += 1;
            verse = 1;
        }
        state.chapter = chapter;
        state.verse = verse;
        render();
    }

    function openEasyVersions(bookIndex, chapter, verse) {
        state.file = bibleBooks[bookIndex].file;
        state.bookIndex = bookIndex;
        state.chapter = chapter;
        state.verse = verse;
        const overlay = ensurePopup();
        overlay.querySelector('#easy-versions-body').innerHTML = '<div class="easy-versions-loading">Loading…</div>';
        overlay.classList.add('active');
        render();
    }

    // ---------- 5-second long press ----------
    let pressTimer = null;
    let pressLine = null;
    let startX = 0;
    let startY = 0;
    let suppressClickUntil = 0;

    function isEnabledForCurrentBook() {
        return typeof currentBook !== 'undefined' && bibleBooks[currentBook] &&
            EASY_VERSION_BOOKS.includes(bibleBooks[currentBook].file);
    }

    function cancelPress() {
        clearTimeout(pressTimer);
        pressTimer = null;
        if (pressLine) pressLine.classList.remove('easy-versions-pressing');
        pressLine = null;
    }

    document.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !isEnabledForCurrentBook()) return;
        const line = e.target.closest('.scripture-text .verse-line');
        if (!line || e.target.closest('.cross-ref-icon')) return;
        cancelPress();
        pressLine = line;
        startX = e.clientX;
        startY = e.clientY;
        line.style.setProperty('--easy-press-ms', `${LONG_PRESS_MS}ms`);
        line.classList.add('easy-versions-pressing');
        const verseNum = parseInt(line.dataset.verse, 10);
        pressTimer = setTimeout(() => {
            cancelPress();
            suppressClickUntil = Date.now() + 1500;
            if (navigator.vibrate) navigator.vibrate(30);
            openEasyVersions(currentBook, currentChapter, verseNum);
        }, LONG_PRESS_MS);
    });

    document.addEventListener('pointermove', e => {
        if (!pressTimer) return;
        if (Math.abs(e.clientX - startX) > MOVE_TOLERANCE_PX || Math.abs(e.clientY - startY) > MOVE_TOLERANCE_PX) cancelPress();
    });
    ['pointerup', 'pointercancel'].forEach(type => document.addEventListener(type, () => {
        if (pressTimer) cancelPress();
    }));
    document.addEventListener('scroll', () => { if (pressTimer) cancelPress(); }, true);

    // Stop the native long-press menu while holding a verse
    document.addEventListener('contextmenu', e => {
        if (pressTimer && e.target.closest('.verse-line')) e.preventDefault();
    });

    // Releasing the finger after the popup opens fires a click — don't let it open the verse actions sheet
    document.addEventListener('click', e => {
        if (Date.now() < suppressClickUntil) {
            suppressClickUntil = 0;
            if (!e.target.closest('#easy-versions-overlay')) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }, true);

    window.openEasyVersions = openEasyVersions;
})();
