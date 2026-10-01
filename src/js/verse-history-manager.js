/**
 * Verse Navigation History Manager for My Bible
 * Stores the last 30 navigated/selected verses per user in localStorage.
 * No database calls required — persists locally until app data is cleared.
 */

(function (window) {
    'use strict';

    const MAX_HISTORY = 30;

    // Standard 3-letter USFM/OSIS Bible Book Codes matching application design
    const BIBLE_BOOK_CODES = [
        // Old Testament (0 - 38)
        'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA',
        '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO',
        'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO',
        'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL',
        // New Testament (39 - 65)
        'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH',
        'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS',
        '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
    ];

    // User identification helpers
    function getCurrentUserId() {
        const id = localStorage.getItem('currentUserId');
        if (!id) return null;
        const parsed = parseInt(id, 10);
        return isNaN(parsed) ? id : parsed;
    }

    function getCurrentUserName() {
        return localStorage.getItem('currentUserName') || '';
    }

    function isGuestUser() {
        return localStorage.getItem('currentUserIsGuest') === 'true' || !getCurrentUserId();
    }

    function getStorageKey() {
        const uid = getCurrentUserId();
        return uid ? `bible_verse_history_user_${uid}` : 'bible_verse_history_guest';
    }

    // Get current active application language: 'english' | 'tamil' | 'both'
    function getAppLanguage() {
        return localStorage.getItem('currentLanguage') || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'tamil');
    }

    // Format relative timestamp matching design screenshot: "12m", "14m", "1h", "1d", "2d"
    function formatRelativeTime(timestamp) {
        if (!timestamp) return '';
        try {
            const diffMs = Date.now() - Number(timestamp);
            const diffSec = Math.floor(diffMs / 1000);
            if (diffSec < 60) return 'Just now';
            const mins = Math.floor(diffSec / 60);
            if (mins < 60) return `${mins}m`;
            const hours = Math.floor(mins / 60);
            if (hours < 24) return `${hours}h`;
            const days = Math.floor(hours / 24);
            if (days < 7) return `${days}d`;
            const weeks = Math.floor(days / 7);
            if (weeks < 5) return `${weeks}w`;
            const months = Math.floor(days / 30);
            if (months < 12) return `${months}mo`;
            return `${Math.floor(days / 365)}y`;
        } catch (e) {
            return '';
        }
    }

    // Format Book Name for reference display: e.g. "John", "Acts", "Psalm", "Romans"
    function getDisplayBookName(bookName) {
        if (!bookName) return '';
        let name = bookName.trim();
        const upper = name.toUpperCase();
        if (upper === 'PSALMS') return 'Psalm';
        if (upper === 'I SAMUEL') return '1 Samuel';
        if (upper === 'II SAMUEL') return '2 Samuel';
        if (upper === 'I KINGS') return '1 Kings';
        if (upper === 'II KINGS') return '2 Kings';
        if (upper === 'I CHRONICLES') return '1 Chronicles';
        if (upper === 'II CHRONICLES') return '2 Chronicles';
        if (upper === 'I CORINTHIANS') return '1 Corinthians';
        if (upper === 'II CORINTHIANS') return '2 Corinthians';
        if (upper === 'I THESSALONIANS') return '1 Thessalonians';
        if (upper === 'II THESSALONIANS') return '2 Thessalonians';
        if (upper === 'I TIMOTHY') return '1 Timothy';
        if (upper === 'II TIMOTHY') return '2 Timothy';
        if (upper === 'I PETER') return '1 Peter';
        if (upper === 'II PETER') return '2 Peter';
        if (upper === 'I JOHN') return '1 John';
        if (upper === 'II JOHN') return '2 John';
        if (upper === 'III JOHN') return '3 John';
        // If it was stored in all caps, convert to normal Title Case
        if (name === upper && name.length > 2) {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        }
        return name;
    }

    // Format snippet text with trailing ellipsis
    function formatSnippet(text) {
        if (!text) return '';
        let cleaned = text.trim();
        // Remove leading verse number if present
        cleaned = cleaned.replace(/^\d+[\s.:-]+/, '').trim();
        if (!cleaned) return '';
        if (cleaned.endsWith('...') || cleaned.endsWith('…')) return cleaned;
        return cleaned + '...';
    }

    // Read history from localStorage
    function getHistory() {
        try {
            const raw = localStorage.getItem(getStorageKey());
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    // Save history to localStorage
    function saveHistory(list) {
        try {
            const limited = list.slice(0, MAX_HISTORY);
            localStorage.setItem(getStorageKey(), JSON.stringify(limited));
        } catch (e) {
            console.warn('[VerseHistory] LocalStorage write error:', e);
        }
    }

    /**
     * Record a selected verse navigation
     * Captures both English and Tamil preview text
     * @param {number} bookIndex - 0-indexed book index in bibleBooks
     * @param {number} chapter - Chapter number
     * @param {number} verse - Verse number
     * @param {string} [customText] - Optional preview snippet
     */
    function recordVerse(bookIndex, chapter, verse, customText) {
        if (typeof bookIndex !== 'number' || typeof chapter !== 'number' || typeof verse !== 'number') {
            return;
        }

        const book = (typeof bibleBooks !== 'undefined' && bibleBooks[bookIndex])
            ? bibleBooks[bookIndex]
            : { name: `Book ${bookIndex + 1}`, tamilName: '' };

        let englishPreview = '';
        let tamilPreview = '';

        // 1. Try reading Tamil preview from memory
        if (typeof currentTamilData !== 'undefined' && currentTamilData && currentTamilData[`chapter_${chapter}`]) {
            tamilPreview = currentTamilData[`chapter_${chapter}`][`verse_${verse}`] || currentTamilData[`chapter_${chapter}`][verse] || '';
        }

        // 2. Try reading English preview from memory
        if (typeof currentData !== 'undefined' && currentData && currentData[`chapter_${chapter}`]) {
            englishPreview = currentData[`chapter_${chapter}`][`verse_${verse}`] || currentData[`chapter_${chapter}`][verse] || '';
        }

        // 3. Try reading from DOM elements
        const contentArea = document.querySelector('.scripture-text');
        if (contentArea) {
            const lineEl = contentArea.querySelector(`.verse-line[data-verse="${verse}"]`);
            if (lineEl) {
                const taEl = lineEl.querySelector('.tamil-text');
                const enEl = lineEl.querySelector('.english-text');
                if (taEl && !tamilPreview) {
                    tamilPreview = taEl.textContent.trim().replace(/^\d+[\s.:-]+/, '').trim();
                }
                if (enEl && !englishPreview) {
                    englishPreview = enEl.textContent.trim().replace(/^\d+[\s.:-]+/, '').trim();
                }
                if (!tamilPreview && !englishPreview) {
                    const raw = lineEl.textContent.trim().replace(/^\d+[\s.:-]+/, '').trim();
                    const curr = getAppLanguage();
                    if (curr === 'english') {
                        englishPreview = raw;
                    } else {
                        tamilPreview = raw;
                    }
                }
            }
        }

        if (customText && !englishPreview && !tamilPreview) {
            const curr = getAppLanguage();
            if (curr === 'english') englishPreview = customText;
            else tamilPreview = customText;
        }

        const item = {
            id: `${bookIndex}_${chapter}_${verse}`,
            bookIndex: bookIndex,
            bookName: book.name,
            tamilBookName: book.tamilName || '',
            chapter: chapter,
            verse: verse,
            preview: englishPreview || tamilPreview || '',
            englishPreview: englishPreview || '',
            tamilPreview: tamilPreview || '',
            timestamp: Date.now()
        };

        const history = getHistory();
        // Deduplicate: remove if verse was already recorded so it moves to the top
        const filtered = history.filter(h => !(h.bookIndex === bookIndex && h.chapter === chapter && h.verse === verse));
        const updated = [item, ...filtered].slice(0, MAX_HISTORY);
        saveHistory(updated);

        // If modal is currently open, refresh the list in real-time
        if (isModalOpen()) {
            renderHistoryList();
        }
    }

    // Delete a single history item
    function deleteItem(index) {
        const history = getHistory();
        if (index >= 0 && index < history.length) {
            history.splice(index, 1);
            saveHistory(history);
            renderHistoryList();
        }
    }

    // Custom Confirmation Dialog Controller
    let _pendingConfirmAction = null;

    function showConfirmDialog({ title, message, confirmText, onConfirm }) {
        createModalDOM();
        const confirmOverlay = document.getElementById('verse-history-confirm-overlay');
        const titleEl = document.getElementById('verse-history-confirm-title');
        const msgEl = document.getElementById('verse-history-confirm-msg');
        const okBtn = document.getElementById('verse-history-confirm-ok');
        if (!confirmOverlay) return;

        if (titleEl && title) titleEl.textContent = title;
        if (msgEl && message) msgEl.textContent = message;
        if (okBtn && confirmText) okBtn.textContent = confirmText;

        _pendingConfirmAction = onConfirm;
        confirmOverlay.classList.add('active');
        confirmOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeConfirmDialog() {
        const confirmOverlay = document.getElementById('verse-history-confirm-overlay');
        if (confirmOverlay) {
            confirmOverlay.classList.remove('active');
            confirmOverlay.setAttribute('aria-hidden', 'true');
        }
        _pendingConfirmAction = null;
    }

    function handleConfirmSubmit() {
        if (typeof _pendingConfirmAction === 'function') {
            const action = _pendingConfirmAction;
            _pendingConfirmAction = null;
            action();
        }
        closeConfirmDialog();
    }

    // Clear all history for current user using custom confirmation modal
    function clearAll() {
        showConfirmDialog({
            title: 'Clear History',
            message: `Are you sure want to clear?`,
            confirmText: 'Clear All',
            onConfirm: () => {
                saveHistory([]);
                renderHistoryList();
            }
        });
    }

    // Navigate to a verse from history
    function navigateToVerse(item) {
        closeModal();
        if (!item) return;

        const isSameBookAndChapter = (typeof currentBook !== 'undefined' && currentBook === item.bookIndex)
            && (typeof currentChapter !== 'undefined' && currentChapter === item.chapter);

        function highlightAndScroll() {
            // Select and scroll in left pane verses column
            const versesColumn = document.querySelector('.verses-column');
            if (versesColumn) {
                versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                const vItem = versesColumn.querySelector(`.number-item[data-verse="${item.verse}"]`);
                if (vItem) {
                    vItem.classList.add('active');
                    vItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            // Highlight line in scripture text
            const contentArea = document.querySelector('.scripture-text');
            if (contentArea) {
                contentArea.querySelectorAll('.verse-line').forEach(v => {
                    v.classList.remove('left-pane-selected');
                    v.style.backgroundColor = '';
                });
                const vLine = contentArea.querySelector(`.verse-line[data-verse="${item.verse}"]`);
                if (vLine) {
                    vLine.classList.add('left-pane-selected');
                }
            }

            // Scroll to the verse
            if (typeof scrollToVerse === 'function') {
                scrollToVerse(item.verse);
            }
        }

        if (isSameBookAndChapter) {
            highlightAndScroll();
        } else if (typeof loadBook === 'function') {
            const p = loadBook(item.bookIndex, item.chapter);
            if (p && typeof p.then === 'function') {
                p.then(() => {
                    setTimeout(highlightAndScroll, 250);
                });
            } else {
                setTimeout(highlightAndScroll, 350);
            }
        }
    }

    // Modal UI Controller & Active Filter
    let _modalOverlay = null;
    let _currentFilter = 'all'; // 'all' | 'ot' | 'nt'

    function isModalOpen() {
        return _modalOverlay && _modalOverlay.classList.contains('active');
    }

    function createModalDOM() {
        if (_modalOverlay) return _modalOverlay;

        const overlay = document.createElement('div');
        overlay.id = 'verse-history-modal-overlay';
        overlay.className = 'verse-history-overlay';
        overlay.innerHTML = `
            <div class="verse-history-modal" role="dialog" aria-modal="true" aria-labelledby="verse-history-title">
                <div class="verse-history-handle"></div>
                
                <!-- Header with Title "History", Clear All outside, and Close -->
                <div class="verse-history-header">
                    <h3 id="verse-history-title" class="verse-history-title">History</h3>
                    <div class="verse-history-header-actions">
                        <button id="verse-history-clear-btn" class="verse-history-clear-btn" title="Clear all history">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                            <span>Clear All</span>
                        </button>
                        <button id="verse-history-close-btn" class="verse-history-close-btn" aria-label="Close" title="Close">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Testament Filter Pills (All, Old Testament, New Testament) - No Search Bar -->
                <div class="verse-history-filters">
                    <button class="verse-history-filter-pill active" data-filter="all">All</button>
                    <button class="verse-history-filter-pill" data-filter="ot">Old Testament</button>
                    <button class="verse-history-filter-pill" data-filter="nt">New Testament</button>
                </div>

                <!-- Verse Items List -->
                <div class="verse-history-body" id="verse-history-body">
                    <ul class="verse-history-list" id="verse-history-list"></ul>
                </div>

                <!-- Custom Delete / Clear Confirmation Dialog -->
                <div class="verse-history-confirm-overlay" id="verse-history-confirm-overlay" aria-hidden="true">
                    <div class="verse-history-confirm-card" role="alertdialog" aria-labelledby="verse-history-confirm-title" aria-describedby="verse-history-confirm-msg">
                        <div class="verse-history-confirm-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        <h4 class="verse-history-confirm-title" id="verse-history-confirm-title">Clear History</h4>
                        <p class="verse-history-confirm-msg" id="verse-history-confirm-msg">Are you sure you want to clear your verse navigation history?</p>
                        <div class="verse-history-confirm-actions">
                            <button type="button" class="verse-history-confirm-btn cancel" id="verse-history-confirm-cancel">Cancel</button>
                            <button type="button" class="verse-history-confirm-btn delete" id="verse-history-confirm-ok">Clear All</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        _modalOverlay = overlay;

        // Close button
        const closeBtn = overlay.querySelector('#verse-history-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Clear all button outside in header
        const clearBtn = overlay.querySelector('#verse-history-clear-btn');
        if (clearBtn) clearBtn.addEventListener('click', clearAll);

        // Confirmation modal buttons & backdrop
        const confirmCancelBtn = overlay.querySelector('#verse-history-confirm-cancel');
        const confirmOkBtn = overlay.querySelector('#verse-history-confirm-ok');
        const confirmOverlay = overlay.querySelector('#verse-history-confirm-overlay');

        if (confirmCancelBtn) confirmCancelBtn.addEventListener('click', closeConfirmDialog);
        if (confirmOkBtn) confirmOkBtn.addEventListener('click', handleConfirmSubmit);
        if (confirmOverlay) {
            confirmOverlay.addEventListener('click', (e) => {
                if (e.target === confirmOverlay) closeConfirmDialog();
            });
        }

        // Filter pills event listeners
        overlay.querySelectorAll('.verse-history-filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                overlay.querySelectorAll('.verse-history-filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                _currentFilter = pill.getAttribute('data-filter') || 'all';
                renderHistoryList();
            });
        });

        // Click on backdrop to close modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        // ESC key listener
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const confOverlay = document.getElementById('verse-history-confirm-overlay');
                if (confOverlay && confOverlay.classList.contains('active')) {
                    closeConfirmDialog();
                    return;
                }
                if (isModalOpen()) {
                    closeModal();
                }
            }
        });

        return overlay;
    }

    // Render items in modal according to active filter and current language preference
    function renderHistoryList() {
        const bodyEl = document.getElementById('verse-history-body');
        const clearBtn = document.getElementById('verse-history-clear-btn');
        if (!bodyEl) return;

        const allItems = getHistory();
        const appLang = getAppLanguage(); // 'english' | 'tamil' | 'both'

        // Apply testament filter
        let filteredItems = allItems;
        if (_currentFilter === 'ot') {
            filteredItems = allItems.filter(item => item.bookIndex < 39);
        } else if (_currentFilter === 'nt') {
            filteredItems = allItems.filter(item => item.bookIndex >= 39);
        }

        if (clearBtn) {
            clearBtn.style.display = allItems.length > 0 ? 'inline-flex' : 'none';
        }

        if (!filteredItems || filteredItems.length === 0) {
            bodyEl.innerHTML = `
                <div class="verse-history-empty">
                    <h4>No Verse History</h4>
                </div>
            `;
            return;
        }

        let html = '<ul class="verse-history-list">';
        filteredItems.forEach((item) => {
            // Find index in master history list for deletion
            const masterIndex = allItems.findIndex(h => h.bookIndex === item.bookIndex && h.chapter === item.chapter && h.verse === item.verse);
            const timeStr = formatRelativeTime(item.timestamp);
            const bookCode = BIBLE_BOOK_CODES[item.bookIndex] || (item.bookName ? item.bookName.slice(0, 3).toUpperCase() : 'BBL');
            const isOT = item.bookIndex < 39;

            const displayBook = getDisplayBookName(item.bookName);
            const tamilBook = item.tamilBookName || (typeof bibleBooks !== 'undefined' && bibleBooks[item.bookIndex] ? bibleBooks[item.bookIndex].tamilName : '') || item.bookName;

            let refTitle = '';
            let refClass = '';
            let snippetText = '';
            let snippetClass = '';

            // Handle language modes:
            // 1. 'english': details in English (English title + English verse snippet)
            // 2. 'tamil': details in Tamil (Tamil title + Tamil verse snippet)
            // 3. 'both': current mockup style (English title + Tamil verse snippet)
            if (appLang === 'english') {
                refTitle = `${displayBook} ${item.chapter}:${item.verse}`;
                refClass = 'ref-english';
                snippetText = formatSnippet(item.englishPreview || item.preview || item.tamilPreview || '');
                snippetClass = 'snippet-english';
            } else if (appLang === 'tamil') {
                refTitle = `${tamilBook} ${item.chapter}:${item.verse}`;
                refClass = 'ref-tamil';
                snippetText = formatSnippet(item.tamilPreview || item.preview || item.englishPreview || '');
                snippetClass = 'snippet-tamil';
            } else {
                // 'both': English title + Tamil snippet
                refTitle = `${displayBook} ${item.chapter}:${item.verse}`;
                refClass = 'ref-english';
                snippetText = formatSnippet(item.tamilPreview || item.preview || item.englishPreview || '');
                snippetClass = 'snippet-tamil';
            }

            html += `
                <li class="verse-history-item" data-master-index="${masterIndex}">
                    <!-- Book Code Badge (JHN, ACT, PSA, ROM) -->
                    <div class="verse-history-item-badge ${isOT ? 'badge-ot' : 'badge-nt'}">
                        <span>${escapeHtml(bookCode)}</span>
                    </div>

                    <!-- Center: Reference Title & Verse Snippet -->
                    <div class="verse-history-item-content">
                        <div class="verse-history-item-ref ${refClass}">${escapeHtml(refTitle)}</div>
                        ${snippetText ? `<div class="verse-history-item-snippet ${snippetClass}">${escapeHtml(snippetText)}</div>` : ''}
                    </div>

                    <!-- Right: Timestamp & Subtle Remove Action -->
                    <div class="verse-history-item-right">
                        <span class="verse-history-item-time">${escapeHtml(timeStr)}</span>
                        <button class="verse-history-del-btn" title="Remove" data-master-index="${masterIndex}" aria-label="Remove">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </li>
            `;
        });
        html += '</ul>';

        bodyEl.innerHTML = html;

        // Attach click listeners to rows
        bodyEl.querySelectorAll('.verse-history-item').forEach(itemEl => {
            itemEl.addEventListener('click', (e) => {
                // If clicked on remove button, delete item only
                if (e.target.closest('.verse-history-del-btn')) {
                    e.stopPropagation();
                    const idx = parseInt(e.target.closest('.verse-history-del-btn').dataset.masterIndex, 10);
                    if (!isNaN(idx)) {
                        deleteItem(idx);
                    }
                    return;
                }
                const idx = parseInt(itemEl.dataset.masterIndex, 10);
                if (!isNaN(idx) && allItems[idx]) {
                    navigateToVerse(allItems[idx]);
                }
            });
        });
    }

    // Open Modal
    function openModal() {
        createModalDOM();

        // Highlight header icon and mobile bottom bar icon
        const headerBtn = document.getElementById('verse-history-btn');
        if (headerBtn) headerBtn.classList.add('active');
        const mobileBtn = document.getElementById('verse-history-btn-mobile');
        if (mobileBtn) mobileBtn.classList.add('active');

        // Render current history
        renderHistoryList();

        // Show modal
        _modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    // Close Modal
    function closeModal() {
        if (!_modalOverlay) return;
        closeConfirmDialog();
        _modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');

        const headerBtn = document.getElementById('verse-history-btn');
        if (headerBtn) headerBtn.classList.remove('active');
        const mobileBtn = document.getElementById('verse-history-btn-mobile');
        if (mobileBtn) mobileBtn.classList.remove('active');
    }

    function toggleModal() {
        if (isModalOpen()) {
            closeModal();
        } else {
            openModal();
        }
    }

    // Simple HTML escaping helper
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Initialize listeners when DOM is ready
    function init() {
        const btn = document.getElementById('verse-history-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleModal();
            });
        }

        const mobileBtn = document.getElementById('verse-history-btn-mobile');
        if (mobileBtn) {
            mobileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleModal();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    window.VerseHistoryManager = {
        recordVerse: recordVerse,
        getHistory: getHistory,
        deleteItem: deleteItem,
        clearAll: clearAll,
        openModal: openModal,
        closeModal: closeModal,
        toggleModal: toggleModal,
        navigateToVerse: navigateToVerse
    };

})(window);
