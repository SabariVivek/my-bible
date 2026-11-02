/**
 * ==========================================================================
 * Chronological Bible Timeline Component
 * Simple, minimal design using the application's signature styling & colors.
 * ==========================================================================
 */

(function initBibleTimeline() {
    let modalBackdrop = null;
    let listContainer = null;
    let searchInput = null;
    let clearSearchBtn = null;
    let totalCounter = null;
    let eraSelect = null;
    let filterPills = [];

    let currentPeriod = 'all';
    let currentTestament = 'all'; // 'all' | 'old' | 'new'
    let searchQuery = '';

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getEvents() {
        return window.BIBLE_TIMELINE_EVENTS || [];
    }

    function getPeriods() {
        return window.BIBLE_TIMELINE_PERIODS || [];
    }

    function createModalDom() {
        if (modalBackdrop) return modalBackdrop;

        modalBackdrop = document.createElement('div');
        modalBackdrop.id = 'bible-timeline-modal';
        modalBackdrop.className = 'bible-timeline-backdrop';
        modalBackdrop.setAttribute('role', 'dialog');
        modalBackdrop.setAttribute('aria-modal', 'true');
        modalBackdrop.setAttribute('aria-label', 'Bible Chronological Timeline');

        modalBackdrop.innerHTML = `
            <div class="bible-timeline-modal" id="bible-timeline-modal-card">
                <!-- Header -->
                <div class="bt-header">
                    <div class="bt-header-left">
                        <h3 class="bt-header-title">Timeline</h3>
                        <span class="bt-count-badge" id="bt-total-counter">583 Events</span>
                    </div>
                    <div class="bt-header-actions">
                        <button type="button" class="bt-close-btn" id="bt-close-btn" aria-label="Close" title="Close (Esc)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Controls & Search -->
                <div class="bt-controls">
                    <div class="bt-search-wrapper">
                        <svg class="bt-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" id="bt-search-input" class="bt-search-input" placeholder="Search events, dates, or books..." autocomplete="off" spellcheck="false">
                        <button type="button" id="bt-clear-search-btn" class="bt-clear-search" aria-label="Clear Search" style="display: none;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div class="bt-filter-row">
                        <div class="bt-pills-group">
                            <button type="button" class="bt-filter-pill active" data-testament="all">All</button>
                            <button type="button" class="bt-filter-pill" data-testament="old">Old Testament</button>
                            <button type="button" class="bt-filter-pill" data-testament="new">New Testament</button>
                        </div>
                        <select class="bt-era-select" id="bt-era-select" aria-label="Filter by Era">
                            <option value="all">All Eras</option>
                        </select>
                    </div>
                </div>

                <!-- Scrollable Body -->
                <div class="bt-body" id="bt-body">
                    <ul class="bt-list" id="bt-list"></ul>
                </div>
            </div>
        `;

        document.body.appendChild(modalBackdrop);

        // Cache elements
        listContainer = document.getElementById('bt-list');
        searchInput = document.getElementById('bt-search-input');
        clearSearchBtn = document.getElementById('bt-clear-search-btn');
        totalCounter = document.getElementById('bt-total-counter');
        eraSelect = document.getElementById('bt-era-select');
        filterPills = modalBackdrop.querySelectorAll('.bt-filter-pill');

        // Events wiring
        document.getElementById('bt-close-btn').addEventListener('click', close);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) close();
        });

        // Search input
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
            }
            renderList();
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            searchInput.focus();
            renderList();
        });

        // Filter pills (Testament)
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentTestament = pill.getAttribute('data-testament') || 'all';
                populateEraOptions();
                renderList();
            });
        });

        // Era select change
        eraSelect.addEventListener('change', () => {
            currentPeriod = eraSelect.value;
            renderList();
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
                close();
            }
        });

        populateEraOptions();
        return modalBackdrop;
    }

    function populateEraOptions() {
        if (!eraSelect) return;
        const periods = getPeriods();
        const events = getEvents();

        let html = '<option value="all">All Eras</option>';
        periods.forEach(p => {
            if (p.id === 'all') return;
            const count = events.filter(e => {
                if (currentTestament !== 'all') {
                    if (currentTestament === 'new') {
                        const isNT = e.testament === 'new' || (e.passages && e.passages.some(pass => pass.bookIndex >= 39));
                        if (!isNT) return false;
                    } else if (currentTestament === 'old') {
                        const isOT = e.testament === 'old' && (!e.passages || !e.passages.some(pass => pass.bookIndex >= 39));
                        if (!isOT) return false;
                    }
                }
                return e.period === p.id;
            }).length;

            if (count > 0) {
                html += `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} (${count})</option>`;
            }
        });

        eraSelect.innerHTML = html;
        eraSelect.value = currentPeriod;
    }

    function renderList() {
        if (!listContainer) return;
        const allEvents = getEvents();

        const filtered = allEvents.filter(ev => {
            // Testament filter
            if (currentTestament !== 'all') {
                const isNT = ev.testament === 'new' || (ev.passages && ev.passages.some(p => p.bookIndex >= 39));
                if (currentTestament === 'new' && !isNT) return false;
                if (currentTestament === 'old' && isNT) return false;
            }

            // Period filter
            if (currentPeriod !== 'all' && ev.period !== currentPeriod) {
                return false;
            }

            // Search query filter
            if (searchQuery) {
                const titleMatch = ev.title.toLowerCase().includes(searchQuery);
                const dateMatch = ev.date.toLowerCase().includes(searchQuery);
                const periodMatch = ev.period.toLowerCase().includes(searchQuery);
                const passageMatch = ev.passages.some(p =>
                    p.display.toLowerCase().includes(searchQuery) ||
                    p.bookName.toLowerCase().includes(searchQuery)
                );
                if (!titleMatch && !dateMatch && !periodMatch && !passageMatch) {
                    return false;
                }
            }

            return true;
        });

        // Update counter
        if (totalCounter) {
            totalCounter.textContent = `${filtered.length} Events`;
        }

        if (filtered.length === 0) {
            listContainer.innerHTML = `
                <li class="bt-empty-state">
                    <p class="bt-empty-title">No Events Found</p>
                    <p class="bt-empty-desc">${searchQuery ? `No biblical events match "${escapeHtml(searchQuery)}".` : `No events under this selection.`}</p>
                    ${searchQuery ? `<button type="button" class="bt-reset-btn" id="bt-reset-btn">Clear Search</button>` : ''}
                </li>
            `;
            const resetBtn = document.getElementById('bt-reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    searchQuery = '';
                    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
                    renderList();
                });
            }
            return;
        }

        let html = '';
        let lastPeriod = null;

        filtered.forEach(ev => {
            // Era Header separator when browsing all eras
            if (currentPeriod === 'all' && ev.period !== lastPeriod) {
                lastPeriod = ev.period;
                const periodObj = getPeriods().find(p => p.id === ev.period);
                html += `
                    <li class="bt-era-header">
                        <span>${escapeHtml(ev.period)}</span>
                        ${periodObj && periodObj.dateRange ? `<span class="bt-era-daterange">${escapeHtml(periodObj.dateRange)}</span>` : ''}
                    </li>
                `;
            }

            // Passages HTML
            let passageHtml = '';
            ev.passages.forEach((p, idx) => {
                passageHtml += `
                    <button type="button" class="bt-passage-link" 
                            data-event-id="${ev.id}" 
                            data-passage-idx="${idx}"
                            title="Read ${escapeHtml(p.display)}">
                        ${escapeHtml(p.display)}
                    </button>
                `;
            });

            html += `
                <li class="bt-row" data-event-id="${ev.id}">
                    <div class="bt-date-col">${escapeHtml(ev.date)}</div>
                    <div class="bt-content-col">
                        <span class="bt-event-title">${escapeHtml(ev.title)}</span>
                    </div>
                    <div class="bt-passages-col">
                        ${passageHtml}
                    </div>
                </li>
            `;
        });

        listContainer.innerHTML = html;

        // Click handlers
        // 1. Passage button click
        listContainer.querySelectorAll('.bt-passage-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
                const evId = parseInt(link.getAttribute('data-event-id'), 10);
                const pIdx = parseInt(link.getAttribute('data-passage-idx'), 10);
                const ev = allEvents.find(item => item.id === evId);
                if (ev && ev.passages[pIdx]) {
                    navigateToPassage(ev.passages[pIdx], ev.title);
                }
            });
        });

        // 2. Entire row click (opens primary passage)
        listContainer.querySelectorAll('.bt-row').forEach(row => {
            row.addEventListener('click', () => {
                const evId = parseInt(row.getAttribute('data-event-id'), 10);
                const ev = allEvents.find(item => item.id === evId);
                if (ev && ev.passages.length > 0) {
                    navigateToPassage(ev.passages[0], ev.title);
                }
            });
        });
    }

    /**
     * Navigates directly into the Bible app
     */
    function navigateToPassage(passage, eventTitle) {
        if (!passage) return;

        close();

        // Resolve bookIndex
        let targetBookIndex = passage.bookIndex;
        if (typeof targetBookIndex !== 'number' || targetBookIndex < 0) {
            if (typeof bibleBooks !== 'undefined') {
                targetBookIndex = bibleBooks.findIndex(b =>
                    b.file === passage.bookFile ||
                    b.name.toLowerCase() === passage.bookName.toLowerCase()
                );
            }
        }
        if (targetBookIndex === -1 || targetBookIndex === undefined) {
            targetBookIndex = 0;
        }

        const chapter = passage.chapter || 1;
        const verse = passage.verse || null;

        // Update top search input
        const topSearchInput = document.getElementById('desktop-top-search-input');
        const topClearBtn = document.getElementById('desktop-top-clear-btn');
        const topSearchBox = document.getElementById('desktop-top-search-box');
        if (topSearchInput) {
            topSearchInput.value = `${eventTitle || passage.display} (${passage.display})`;
            if (topClearBtn) topClearBtn.style.display = 'flex';
            if (topSearchBox) topSearchBox.classList.add('story-mode-active');
        }

        // Method 1: Desktop-search openScriptureReference
        if (typeof window.openScriptureReference === 'function') {
            window.openScriptureReference({
                bookIndex: targetBookIndex,
                chapter: chapter,
                startVerse: verse || 1,
                endVerse: verse || 1,
                isStory: true,
                storyTitle: eventTitle || passage.display
            });
            return;
        }

        // Method 2: Standard loadBook
        if (typeof loadBook === 'function') {
            loadBook(targetBookIndex, chapter).then(() => {
                if (verse && typeof scrollToVerse === 'function') {
                    setTimeout(() => {
                        scrollToVerse(verse);
                    }, 250);
                }
            }).catch(() => {
                if (verse && typeof scrollToVerse === 'function') {
                    scrollToVerse(verse);
                }
            });
        }
    }

    function open(options) {
        if (window.innerWidth <= 768) return;
        createModalDom();

        if (options && options.period) {
            currentPeriod = options.period;
            if (eraSelect) eraSelect.value = currentPeriod;
        }
        if (options && options.testament) {
            currentTestament = options.testament;
            filterPills.forEach(p => {
                p.classList.toggle('active', p.getAttribute('data-testament') === currentTestament);
            });
            populateEraOptions();
        }

        renderList();

        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';

        const topNavBtn = document.getElementById('timeline-nav-btn');
        if (topNavBtn) topNavBtn.classList.add('active');

        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 120);
    }

    function close() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';

        const topNavBtn = document.getElementById('timeline-nav-btn');
        if (topNavBtn) topNavBtn.classList.remove('active');
    }

    // Expose globally
    window.openBibleTimeline = open;
    window.closeBibleTimeline = close;

    function bindUiTriggers() {
        // Top bar button
        const topNavBtn = document.getElementById('timeline-nav-btn');
        if (topNavBtn && !topNavBtn._timelineBound) {
            topNavBtn._timelineBound = true;
            topNavBtn.addEventListener('click', (e) => {
                e.preventDefault();
                open();
            });
        }

        // Desktop-only resize guard: close modal if window resizes to mobile
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                close();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindUiTriggers);
    } else {
        bindUiTriggers();
    }
})();
