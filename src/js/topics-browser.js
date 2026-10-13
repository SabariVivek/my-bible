/**
 * ==========================================================================
 * Topics Browser Component
 * Interactive modal to browse, filter, and jump through the 1,447 Bible
 * topics, stories, events, miracles, parables, characters, and key verses
 * organized by book.
 * ==========================================================================
 */

(function initTopicsBrowser() {
    let modalBackdrop = null;
    let bookSelect = null;
    let prevBookBtn = null;
    let nextBookBtn = null;
    let searchInput = null;
    let clearSearchBtn = null;
    let chipsContainer = null;
    let listContainer = null;
    let countBadge = null;

    let selectedBookIndex = 0;
    let selectedTypeFilter = 'all';
    let searchQuery = '';

    const TYPE_LABELS = {
        'all': 'All',
        'story': 'Stories',
        'event': 'Events',
        'teaching': 'Teachings',
        'parable': 'Parables',
        'miracle': 'Miracles',
        'key-verse': 'Key Verses',
        'character': 'Characters',
        'prophecy': 'Prophecies',
        'poem': 'Poems / Psalms',
        'vision': 'Visions',
        'law': 'Laws',
        'genealogy': 'Genealogies',
        'wisdom': 'Wisdom'
    };

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function createModalDom() {
        if (document.getElementById('topics-browser-modal')) {
            return;
        }

        const backdrop = document.createElement('div');
        backdrop.id = 'topics-browser-modal';
        backdrop.className = 'topics-browser-backdrop';
        backdrop.setAttribute('role', 'dialog');
        backdrop.setAttribute('aria-modal', 'true');
        backdrop.setAttribute('aria-label', 'Bible Topics and Stories Browser');

        backdrop.innerHTML = `
            <div class="topics-browser-dialog" id="topics-browser-dialog">
                <!-- Header -->
                <div class="tb-header">
                    <div class="tb-header-left">
                        <div class="tb-header-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                <line x1="9" y1="7" x2="15" y2="7"></line>
                                <line x1="9" y1="11" x2="13" y2="11"></line>
                            </svg>
                        </div>
                        <div class="tb-header-title-box">
                            <div class="tb-header-title-row">
                                <h2 class="tb-header-title">Bible Topics &amp; Stories</h2>
                                <span class="tb-count-badge" id="tb-total-counter">1,447 Topics</span>
                            </div>
                            <p class="tb-header-subtitle">Explore stories, miracles, teachings &amp; events by book</p>
                        </div>
                    </div>
                    <button type="button" class="tb-close-btn" id="tb-close-btn" aria-label="Close Topics Browser" title="Close (Esc)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <!-- Toolbar -->
                <div class="tb-toolbar">
                    <div class="tb-toolbar-row1">
                        <!-- Book Picker -->
                        <div class="tb-book-picker">
                            <button type="button" class="tb-nav-book-btn" id="tb-prev-book-btn" aria-label="Previous Book" title="Previous Book">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <select id="tb-book-select" class="tb-book-select" aria-label="Select Bible Book"></select>
                            <button type="button" class="tb-nav-book-btn" id="tb-next-book-btn" aria-label="Next Book" title="Next Book">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>

                        <!-- Filter Search Input -->
                        <div class="tb-filter-search-box">
                            <svg class="tb-filter-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" id="tb-filter-search-input" class="tb-filter-search-input" placeholder="Search topics in book..." autocomplete="off" spellcheck="false" aria-label="Search topics in this book">
                            <button type="button" id="tb-search-clear-btn" class="tb-search-clear-btn" style="display: none;" aria-label="Clear filter">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Type Filter Pills -->
                    <div class="tb-toolbar-row2" id="tb-filter-chips"></div>
                </div>

                <!-- List Area -->
                <div class="tb-list-container">
                    <div class="tb-list" id="tb-topics-list"></div>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        modalBackdrop = backdrop;
        bookSelect = document.getElementById('tb-book-select');
        prevBookBtn = document.getElementById('tb-prev-book-btn');
        nextBookBtn = document.getElementById('tb-next-book-btn');
        searchInput = document.getElementById('tb-filter-search-input');
        clearSearchBtn = document.getElementById('tb-search-clear-btn');
        chipsContainer = document.getElementById('tb-filter-chips');
        listContainer = document.getElementById('tb-topics-list');
        countBadge = document.getElementById('tb-total-counter');

        setupEvents();
        populateBooks();
    }

    function populateBooks() {
        if (!bookSelect || typeof bibleBooks === 'undefined') return;

        let otHtml = '<optgroup label="Old Testament">';
        let ntHtml = '<optgroup label="New Testament">';

        bibleBooks.forEach((b, idx) => {
            const count = (window.getTopicsByBookIndex ? window.getTopicsByBookIndex(idx).length : 0);
            const opt = `<option value="${idx}">${b.name} (${b.tamilShortName || b.shortName}) [${count}]</option>`;
            if (idx < 39) otHtml += opt;
            else ntHtml += opt;
        });

        otHtml += '</optgroup>';
        ntHtml += '</optgroup>';

        bookSelect.innerHTML = otHtml + ntHtml;
    }

    function setupEvents() {
        const closeBtn = document.getElementById('tb-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', close);

        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) close();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
                close();
            }
        });

        bookSelect.addEventListener('change', (e) => {
            selectedBookIndex = parseInt(e.target.value, 10);
            selectedTypeFilter = 'all';
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            render();
        });

        prevBookBtn.addEventListener('click', () => {
            if (selectedBookIndex > 0) {
                selectedBookIndex--;
                bookSelect.value = selectedBookIndex;
                selectedTypeFilter = 'all';
                searchInput.value = '';
                searchQuery = '';
                clearSearchBtn.style.display = 'none';
                render();
            }
        });

        nextBookBtn.addEventListener('click', () => {
            if (typeof bibleBooks !== 'undefined' && selectedBookIndex < bibleBooks.length - 1) {
                selectedBookIndex++;
                bookSelect.value = selectedBookIndex;
                selectedTypeFilter = 'all';
                searchInput.value = '';
                searchQuery = '';
                clearSearchBtn.style.display = 'none';
                render();
            }
        });

        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
            renderList();
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            searchInput.focus();
            renderList();
        });
    }

    function renderFilterChips(bookTopics) {
        if (!chipsContainer) return;

        // Calculate counts per type for current book
        const typeCounts = { all: bookTopics.length };
        bookTopics.forEach(t => {
            typeCounts[t.type] = (typeCounts[t.type] || 0) + 1;
        });

        // Always show 'all', plus only types that exist in this book
        const availableTypes = ['all'];
        ['story', 'event', 'miracle', 'parable', 'teaching', 'key-verse', 'character', 'prophecy', 'poem', 'vision', 'law', 'wisdom', 'genealogy'].forEach(k => {
            if (typeCounts[k] > 0) availableTypes.push(k);
        });

        let html = '';
        availableTypes.forEach(typeKey => {
            const label = TYPE_LABELS[typeKey] || typeKey;
            const count = typeCounts[typeKey] || 0;
            const isActive = selectedTypeFilter === typeKey;
            html += `
                <button type="button" class="tb-filter-chip ${isActive ? 'active' : ''}" data-type="${typeKey}">
                    <span>${label}</span>
                    <span class="tb-chip-count">(${count})</span>
                </button>
            `;
        });

        chipsContainer.innerHTML = html;

        chipsContainer.querySelectorAll('.tb-filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                selectedTypeFilter = chip.getAttribute('data-type');
                chipsContainer.querySelectorAll('.tb-filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                renderList();
            });
        });
    }

    function renderList() {
        if (!listContainer) return;

        const allBookTopics = window.getTopicsByBookIndex ? window.getTopicsByBookIndex(selectedBookIndex) : [];
        const currentBookObj = typeof bibleBooks !== 'undefined' ? bibleBooks[selectedBookIndex] : null;

        // 1. Filter by type
        let filtered = allBookTopics;
        if (selectedTypeFilter !== 'all') {
            filtered = filtered.filter(t => t.type === selectedTypeFilter);
        }

        // 2. Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(t => {
                const titleMatch = t.title.toLowerCase().includes(searchQuery);
                const refMatch = t.ref.toLowerCase().includes(searchQuery);
                const typeMatch = (t.type || '').toLowerCase().includes(searchQuery);
                const aliasMatch = (t.aliases || []).some(a => a.toLowerCase().includes(searchQuery));
                return titleMatch || refMatch || typeMatch || aliasMatch;
            });
        }

        if (filtered.length === 0) {
            listContainer.innerHTML = `
                <div class="tb-empty-state">
                    <svg class="tb-empty-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <h3 class="tb-empty-title">No Topics Found</h3>
                    <p class="tb-empty-desc">${searchQuery ? `No topics match "${escapeHtml(searchQuery)}" in ${currentBookObj ? currentBookObj.name : 'this book'}.` : `No topics available under this filter.`}</p>
                </div>
            `;
            return;
        }

        let html = '';
        filtered.forEach(topic => {
            const isMinor = topic.level === 'minor';
            const typeLabel = TYPE_LABELS[topic.type] || topic.type;
            const badgeClass = 'tb-badge-' + (topic.type || 'topic').toLowerCase();
            const aliasesText = (topic.aliases && topic.aliases.length > 0)
                ? topic.aliases.slice(0, 3).join(' • ')
                : '';

            html += `
                <div class="tb-topic-card ${isMinor ? 'is-minor' : ''}" data-id="${topic.id}">
                    <div class="tb-topic-main">
                        <div class="tb-topic-header-row">
                            <span class="tb-topic-type-badge ${badgeClass}">${escapeHtml(typeLabel)}</span>
                            <span class="tb-ref-pill">${escapeHtml(topic.ref)}</span>
                        </div>
                        <div class="tb-topic-title">${escapeHtml(topic.title)}</div>
                        ${aliasesText ? `<div class="tb-topic-meta-row"><span class="tb-aliases-preview">${escapeHtml(aliasesText)}</span></div>` : ''}
                    </div>
                    <div class="tb-jump-action">
                        <span>Read</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            `;
        });

        listContainer.innerHTML = html;

        // Attach click jump handler to each card
        listContainer.querySelectorAll('.tb-topic-card').forEach(card => {
            card.addEventListener('click', () => {
                const topicId = card.getAttribute('data-id');
                const topic = allBookTopics.find(t => t.id === topicId) || (window.BIBLE_TOPICS && window.BIBLE_TOPICS.find(t => t.id === topicId));
                if (!topic) return;

                // Close the browser modal
                close();

                // Open scripture passage
                if (typeof window.openScriptureReference === 'function') {
                    window.openScriptureReference({
                        bookIndex: topic.bookIndex,
                        chapter: topic.startChapter,
                        startVerse: topic.startVerse,
                        endVerse: topic.endVerse || topic.startVerse,
                        isStory: true,
                        storyTitle: topic.title
                    });
                } else if (typeof loadBook === 'function') {
                    loadBook(topic.bookIndex, topic.startChapter).then(() => {
                        if (topic.startVerse && typeof scrollToVerse === 'function') {
                            scrollToVerse(topic.startVerse);
                        }
                    });
                }
            });
        });
    }

    function render() {
        if (!bookSelect) return;
        const totalInBook = (window.getTopicsByBookIndex ? window.getTopicsByBookIndex(selectedBookIndex).length : 0);
        const bookObj = typeof bibleBooks !== 'undefined' ? bibleBooks[selectedBookIndex] : null;

        if (countBadge) {
            countBadge.textContent = `${totalInBook} Topics in ${bookObj ? bookObj.name : ''}`;
        }

        prevBookBtn.disabled = selectedBookIndex <= 0;
        nextBookBtn.disabled = typeof bibleBooks !== 'undefined' && selectedBookIndex >= bibleBooks.length - 1;

        searchInput.placeholder = `Search topics in ${bookObj ? bookObj.name : 'book'}...`;

        const allBookTopics = window.getTopicsByBookIndex ? window.getTopicsByBookIndex(selectedBookIndex) : [];
        renderFilterChips(allBookTopics);
        renderList();
    }

    function open(targetBookIdx) {
        createModalDom();

        // Determine initial book: passed argument, or current reading book, or Genesis (0)
        let bIdx = 0;
        if (typeof targetBookIdx === 'number' && targetBookIdx >= 0 && targetBookIdx < 66) {
            bIdx = targetBookIdx;
        } else if (typeof currentBook !== 'undefined' && currentBook >= 0 && currentBook < 66) {
            bIdx = currentBook;
        }

        selectedBookIndex = bIdx;
        if (bookSelect) bookSelect.value = selectedBookIndex;
        selectedTypeFilter = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';

        render();

        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 120);
    }

    function close() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Attach to button beside top search bar
    function wireTopButton() {
        const btn = document.getElementById('desktop-top-topics-btn');
        if (btn) {
            btn.addEventListener('click', () => open());
        }
    }

    // Public API
    window.TopicsBrowser = {
        open,
        close,
        setBook: function(idx) {
            selectedBookIndex = idx;
            if (bookSelect) bookSelect.value = idx;
            render();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            wireTopButton();
        });
    } else {
        wireTopButton();
    }
})();
