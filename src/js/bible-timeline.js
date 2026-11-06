/**
 * ==========================================================================
 * Chronological Bible Timeline Component
 * Built with the Palatino / Garamond serif aesthetic, interactive left rail,
 * center-dot timeline list, search highlight, and Day-by-Day Holy Week harmony.
 * ==========================================================================
 */

(function initBibleTimeline() {
    let modalBackdrop = null;
    let listEl = null;
    let railEl = null;
    let searchInput = null;
    let countEl = null;
    let segButtons = [];

    const state = {
        mode: 'timeline', // 'timeline' | 'holy-week'
        t: 'all',          // 'all' | 'ot' | 'nt'
        q: '',             // timeline search query
        hwQ: '',           // holy week search query
        activeEraId: null,
        activeHwDayId: 'all'
    };

    const PERIOD_META = [
        { id: 'Creation & Early History', t: 'ot', name: 'Creation and early history', range: 'Before time – 2100 BC' },
        { id: 'The Patriarchs', t: 'ot', name: 'The patriarchs', range: '2091 – 1806 BC' },
        { id: 'Exodus & Wilderness', t: 'ot', name: 'Exodus and the wilderness', range: '1800 – 1406 BC' },
        { id: 'Conquest & Judges', t: 'ot', name: 'Conquest and judges', range: '1406 – 1050 BC' },
        { id: 'United Kingdom', t: 'ot', name: 'The united kingdom', range: '1043 – 931 BC' },
        { id: 'Divided Kingdom', t: 'ot', name: 'The divided kingdom', range: '931 – 586 BC' },
        { id: 'Exile & Return', t: 'ot', name: 'Exile and return', range: '586 – 430 BC' },
        { id: 'Life of Jesus', t: 'nt', name: 'The life of Jesus', range: '6 BC – AD 30' },
        { id: 'Apostles & Early Church', t: 'nt', name: 'The early church', range: 'AD 30 – 95' }
    ];

    function esc(s) {
        if (!s) return '';
        return String(s).replace(/[&<>"]/g, c => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        }[c]));
    }

    function hl(s, query) {
        const text = String(s || '');
        if (!query) return esc(text);
        const lower = text.toLowerCase();
        const qLower = query.toLowerCase();
        const idx = lower.indexOf(qLower);
        if (idx < 0) return esc(text);
        return esc(text.slice(0, idx)) + '<mark>' + esc(text.slice(idx, idx + query.length)) + '</mark>' + esc(text.slice(idx + query.length));
    }

    function getEvents() {
        return window.BIBLE_TIMELINE_EVENTS || [];
    }

    function getHolyWeekData() {
        return window.HOLY_WEEK_HARMONY_DATA || null;
    }

    /**
     * Parses Gospel scripture strings like "21:1–7", "(26:6–13)*", "18:13–14, 19–24", "16:9–11†"
     */
    function parseGospelReference(bookKey, refString) {
        if (!refString || refString === '—' || refString === '-') return null;

        const bookMap = {
            matthew: { name: 'Matthew', index: 39, file: 'matthew' },
            mark: { name: 'Mark', index: 40, file: 'mark' },
            luke: { name: 'Luke', index: 41, file: 'luke' },
            john: { name: 'John', index: 42, file: 'john' }
        };

        const bookInfo = bookMap[bookKey.toLowerCase()];
        if (!bookInfo) return null;

        const clean = refString
            .replace(/[\*\†\(\)]/g, '')
            .replace(/[\u2013\u2014]/g, '-')
            .trim();

        const match = clean.match(/^(\d+)(?::(\d+)(?:-(\d+))?)?/);
        if (!match) return null;

        const chapter = parseInt(match[1], 10);
        const startVerse = match[2] ? parseInt(match[2], 10) : 1;
        const endVerse = match[3] ? parseInt(match[3], 10) : startVerse;

        return {
            bookName: bookInfo.name,
            bookIndex: bookInfo.index,
            bookFile: bookInfo.file,
            chapter: chapter,
            startVerse: startVerse,
            endVerse: endVerse,
            display: `${bookInfo.name} ${clean}`
        };
    }

    function openHolyWeekScripture(gospel, refStr, eventTitle) {
        const parsed = parseGospelReference(gospel, refStr);
        if (!parsed) return;

        close();

        const passage = {
            bookName: parsed.bookName,
            bookIndex: parsed.bookIndex,
            bookFile: parsed.bookFile,
            chapter: parsed.chapter,
            verse: parsed.startVerse,
            display: parsed.display
        };

        navigateToPassage(passage, `${eventTitle} (${parsed.display})`);
    }

    function openFirstAvailableGospel(item) {
        const gList = ['matthew', 'mark', 'luke', 'john'];
        for (const g of gList) {
            if (item[g] && item[g] !== '—' && item[g] !== '-') {
                openHolyWeekScripture(g, item[g], item.event);
                return;
            }
        }
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
            <section class="tl" id="bible-timeline-modal-card" role="dialog" aria-modal="true" aria-labelledby="tl-title">
                <header class="tl-head" id="tl-head">
                    <button class="tl-sidebar-toggle-btn" id="tl-sidebar-toggle-btn" aria-label="Toggle sidebar" aria-expanded="true" title="Toggle Eras Sidebar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </button>
                    <h1 class="tl-title" id="tl-title">Timeline <span class="tl-count" id="count"></span></h1>
                    <div class="search" id="tl-search-box">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="m20 20-3.5-3.5"></path>
                        </svg>
                        <input id="q" type="search" placeholder="Flood, 1000 BC, Exodus 14..." aria-label="Search events, dates, or books" autocomplete="off" spellcheck="false">
                        <kbd>/</kbd>
                    </div>
                    <div class="seg" id="tl-seg" role="group" aria-label="Testament">
                        <button data-t="all" aria-pressed="true">All</button>
                        <button data-t="ot" aria-pressed="false">Old</button>
                        <button data-t="nt" aria-pressed="false">New</button>
                    </div>
                    <button class="icon-btn" id="tl-close-btn" aria-label="Close timeline" title="Close (Esc)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M6 6l12 12M18 6 6 18"></path>
                        </svg>
                    </button>
                </header>
                <nav class="rail" id="rail" aria-label="Eras"></nav>
                <div class="list" id="list"></div>
            </section>
        `;

        document.body.appendChild(modalBackdrop);

        listEl = document.getElementById('list');
        railEl = document.getElementById('rail');
        searchInput = document.getElementById('q');
        countEl = document.getElementById('count');
        segButtons = modalBackdrop.querySelectorAll('.seg button');

        // Close wiring
        document.getElementById('tl-close-btn').addEventListener('click', close);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) close();
        });

        // Sidebar toggle wiring
        const sidebarToggleBtn = document.getElementById('tl-sidebar-toggle-btn');
        if (sidebarToggleBtn) {
            sidebarToggleBtn.addEventListener('click', () => {
                const card = document.getElementById('bible-timeline-modal-card');
                if (!card) return;
                const isCollapsed = card.classList.toggle('rail-collapsed');
                sidebarToggleBtn.setAttribute('aria-expanded', !isCollapsed);
                sidebarToggleBtn.setAttribute('title', isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar');
            });
        }

        // Search input
        searchInput.addEventListener('input', (e) => {
            if (state.mode === 'holy-week') {
                state.hwQ = e.target.value.trim().toLowerCase();
                renderHolyWeek();
            } else {
                state.q = e.target.value.trim().toLowerCase();
                renderTimeline();
            }
        });

        // Segmented filter buttons (All / Old / New)
        document.getElementById('tl-seg').addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            if (btn.classList.contains('hw-back-btn') || btn.dataset.action === 'back-timeline') {
                showTimelineView();
                return;
            }

            state.t = btn.dataset.t;
            modalBackdrop.querySelectorAll('.seg button').forEach(b => {
                b.setAttribute('aria-pressed', b === btn);
            });
            renderTimeline();
            if (listEl) listEl.scrollTop = 0;
        });

        // Left rail clicks
        railEl.addEventListener('click', (e) => {
            const eraBtn = e.target.closest('.era-link');
            if (!eraBtn) return;

            // Holy Week mode rail clicks
            if (state.mode === 'holy-week') {
                const dayId = eraBtn.dataset.hwDay;
                if (!dayId) return;

                railEl.querySelectorAll('.era-link').forEach(b => b.classList.remove('active'));
                eraBtn.classList.add('active');
                state.activeHwDayId = dayId;

                const targetSec = document.getElementById(`hw-day-${dayId}`);
                if (targetSec && listEl) {
                    listEl.scrollTop = targetSec.offsetTop - listEl.offsetTop - 4;
                }
                return;
            }

            // Timeline mode Holy Week shortcut link
            if (eraBtn.dataset.action === 'holy-week') {
                showHolyWeekView();
                return;
            }

            // Timeline mode era navigation
            const eraId = eraBtn.dataset.era;
            if (!eraId) return;

            railEl.querySelectorAll('.era-link').forEach(b => b.classList.remove('active'));
            eraBtn.classList.add('active');

            const targetSec = document.getElementById(`era-${sanitizeId(eraId)}`);
            if (targetSec && listEl) {
                listEl.scrollTop = targetSec.offsetTop - listEl.offsetTop - 4;
            }
        });

        // List clicks (scripture opening, empty state clear, etc.)
        listEl.addEventListener('click', (e) => {
            // Clear search button in empty state
            if (e.target.id === 'clear') {
                if (state.mode === 'holy-week') {
                    state.hwQ = '';
                    if (searchInput) searchInput.value = '';
                    renderHolyWeek();
                } else {
                    state.q = '';
                    if (searchInput) searchInput.value = '';
                    renderTimeline();
                }
                return;
            }

            // Holy Week scripture button click
            const hwRefBtn = e.target.closest('.hw-ref-btn');
            if (hwRefBtn) {
                e.stopPropagation();
                const gospel = hwRefBtn.dataset.gospel;
                const ref = hwRefBtn.dataset.ref;
                const title = hwRefBtn.dataset.title;
                openHolyWeekScripture(gospel, ref, title);
                return;
            }

            // Holy Week event title cell click
            const hwEventCell = e.target.closest('.hw-td-event');
            if (hwEventCell) {
                const tr = hwEventCell.closest('.hw-row');
                if (tr) {
                    const dayId = tr.dataset.dayId;
                    const evIdx = parseInt(tr.dataset.eventIdx, 10);
                    const hwData = getHolyWeekData();
                    const dayObj = hwData && hwData.days.find(d => d.id === dayId);
                    if (dayObj && dayObj.events[evIdx]) {
                        openFirstAvailableGospel(dayObj.events[evIdx]);
                    }
                }
                return;
            }

            // Regular timeline event click
            const evRow = e.target.closest('.ev');
            if (evRow) {
                const evId = parseInt(evRow.dataset.id, 10);
                const allEvents = getEvents();
                const ev = allEvents.find(item => item.id === evId);
                if (!ev) return;

                if (ev.isHolyWeek) {
                    showHolyWeekView();
                    return;
                }

                if (ev.passages && ev.passages.length > 0) {
                    navigateToPassage(ev.passages[0], ev.title);
                }
            }
        });

        // Keyboard navigation on list
        listEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const evRow = e.target.closest('.ev');
                if (evRow) evRow.click();
            }
        });

        // Scroll spy to highlight active era in left rail
        listEl.addEventListener('scroll', () => {
            const top = listEl.scrollTop + listEl.offsetTop + 60;

            if (state.mode === 'holy-week') {
                let curDay = null;
                document.querySelectorAll('.hw-day-sec').forEach(s => {
                    if (s.offsetTop <= top) curDay = s.dataset.dayId;
                });
                if (curDay) {
                    railEl.querySelectorAll('.era-link').forEach(l => {
                        l.classList.toggle('active', l.dataset.hwDay === curDay);
                    });
                }
                return;
            }

            let curEra = null;
            document.querySelectorAll('.era').forEach(s => {
                if (s.offsetTop <= top) curEra = s.dataset.era;
            });
            if (curEra) {
                railEl.querySelectorAll('.era-link').forEach(l => {
                    l.classList.toggle('active', l.dataset.era === curEra);
                });
            }
        });

        // Global shortcut: '/' to focus search, Esc to close
        document.addEventListener('keydown', (e) => {
            if (modalBackdrop && modalBackdrop.classList.contains('open')) {
                if (e.key === 'Escape') {
                    close();
                } else if (e.key === '/' && document.activeElement !== searchInput) {
                    e.preventDefault();
                    if (searchInput) searchInput.focus();
                }
            }
        });

        return modalBackdrop;
    }

    function sanitizeId(str) {
        return String(str || '').replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
    }

    function getVisibleEras() {
        const allEvents = getEvents();
        const q = state.q;

        return PERIOD_META
            .filter(p => state.t === 'all' || p.t === state.t)
            .map(p => {
                const eraEvents = allEvents.filter(ev => ev.period === p.id);
                const shownEvents = eraEvents.filter(ev => {
                    if (!q) return true;
                    const inTitle = ev.title && ev.title.toLowerCase().includes(q);
                    const inDate = ev.date && ev.date.toLowerCase().includes(q);
                    const inKeywords = ev.keywords && ev.keywords.toLowerCase().includes(q);
                    const inPassages = ev.passages && ev.passages.some(pass =>
                        (pass.display && pass.display.toLowerCase().includes(q)) ||
                        (pass.bookName && pass.bookName.toLowerCase().includes(q))
                    );
                    return inTitle || inDate || inKeywords || inPassages;
                });
                return {
                    ...p,
                    events: shownEvents
                };
            })
            .filter(p => p.events.length > 0);
    }

    /**
     * Renders Timeline Mode (Eras Rail + Center-Dot Event List)
     */
    function renderTimeline() {
        if (!listEl || !railEl) return;

        const visibleEras = getVisibleEras();
        const total = visibleEras.reduce((n, e) => n + e.events.length, 0);

        if (countEl) {
            countEl.textContent = `${total} ${total === 1 ? 'event' : 'events'}`;
        }

        // 1. Render Left Rail
        let railHtml = '';
        let lastT = null;

        visibleEras.forEach((e, i) => {
            if (e.t !== lastT) {
                railHtml += `<div class="rail-group">${e.t === 'ot' ? 'Old Testament' : 'New Testament'}</div>`;
                lastT = e.t;
            }
            railHtml += `
                <button class="era-link${i === 0 ? ' active' : ''}" data-era="${esc(e.id)}">
                    <span class="era-name">${esc(e.name)}<span>${e.events.length}</span></span>
                    <span class="era-range">${esc(e.range)}</span>
                </button>
            `;
        });

        // Add prominent Holy Week shortcut in the rail
        railHtml += `
            <div class="rail-group">Holy Week</div>
            <button class="era-link era-link-holy-week" data-action="holy-week" title="Holy Week in the Four Gospels: Every Event, Day by Day">
                <span class="era-name">Jesus' Last Week<span>10 Days</span></span>
                <span class="era-range">Palm Sunday to Resurrection</span>
            </button>
        `;

        railEl.innerHTML = railHtml;

        // 2. Render Events List
        if (!visibleEras.length) {
            listEl.innerHTML = `
                <div class="empty">
                    No events match “${esc(state.q)}”.<br>
                    <button id="clear">Clear search</button>
                </div>
            `;
            return;
        }

        let listHtml = visibleEras.map(e => `
            <section class="era" id="era-${sanitizeId(e.id)}" data-era="${esc(e.id)}">
                <div class="era-band">${esc(e.name)}<small>${esc(e.range)}</small></div>
                <ol class="events">
                    ${e.events.map(ev => {
                        if (ev.isHolyWeek) {
                            return `
                                <li class="ev ev-holy-week" tabindex="0" data-id="${ev.id}" title="Click to view Holy Week Day by Day">
                                    <span class="ev-date">${hl(ev.date, state.q)}</span>
                                    <span class="dot dot-holy-week"></span>
                                    <span class="ev-title">
                                        <strong>${hl("Jesus' Last Week (Holy Week)", state.q)}</strong> — Every Event, Day by Day
                                        <span class="hw-pill-badge">Four Gospels</span>
                                    </span>
                                    <span class="ev-ref">Explore Day by Day →</span>
                                </li>
                            `;
                        }

                        const refDisplay = (ev.passages && ev.passages.length > 0)
                            ? ev.passages.map(p => p.display).join(', ')
                            : '';

                        return `
                            <li class="ev" tabindex="0" data-id="${ev.id}">
                                <span class="ev-date">${hl(ev.date, state.q)}</span>
                                <span class="dot"></span>
                                <span class="ev-title">${hl(ev.title, state.q)}</span>
                                <span class="ev-ref">${hl(refDisplay, state.q)}</span>
                            </li>
                        `;
                    }).join('')}
                </ol>
            </section>
        `).join('');

        listEl.innerHTML = listHtml;
    }

    /**
     * Shows Timeline Mode
     */
    function showTimelineView() {
        state.mode = 'timeline';
        const modalDom = createModalDom();

        const titleEl = document.getElementById('tl-title');
        if (titleEl) {
            titleEl.innerHTML = `Timeline <span class="tl-count" id="count"></span>`;
            countEl = document.getElementById('count');
        }

        const searchWrapper = document.getElementById('tl-search-box');
        if (searchWrapper) {
            searchWrapper.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                </svg>
                <input id="q" type="search" placeholder="Flood, 1000 BC, Exodus 14..." aria-label="Search events, dates, or books" autocomplete="off" spellcheck="false" value="${esc(state.q)}">
                <kbd>/</kbd>
            `;
            searchInput = document.getElementById('q');
            searchInput.addEventListener('input', (e) => {
                state.q = e.target.value.trim().toLowerCase();
                renderTimeline();
            });
        }

        const segWrapper = document.getElementById('tl-seg');
        if (segWrapper) {
            segWrapper.innerHTML = `
                <button data-t="all" aria-pressed="${state.t === 'all'}">All</button>
                <button data-t="ot" aria-pressed="${state.t === 'ot'}">Old</button>
                <button data-t="nt" aria-pressed="${state.t === 'nt'}">New</button>
            `;
        }

        const sidebarToggleBtn = document.getElementById('tl-sidebar-toggle-btn');
        if (sidebarToggleBtn) {
            const card = document.getElementById('bible-timeline-modal-card');
            const isCollapsed = card && card.classList.contains('rail-collapsed');
            sidebarToggleBtn.setAttribute('title', isCollapsed ? 'Expand Eras Sidebar' : 'Collapse Eras Sidebar');
        }

        renderTimeline();
    }

    /**
     * Shows Holy Week Harmony Mode
     */
    function showHolyWeekView(targetDayId) {
        state.mode = 'holy-week';
        createModalDom();

        const titleEl = document.getElementById('tl-title');
        if (titleEl) {
            titleEl.innerHTML = `Holy Week <span class="tl-count" id="count">10 Days • 121 Events</span>`;
            countEl = document.getElementById('count');
        }

        const searchWrapper = document.getElementById('tl-search-box');
        if (searchWrapper) {
            searchWrapper.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                </svg>
                <input id="q" type="search" placeholder="Search trials, sayings, parables, 21:1..." aria-label="Filter Holy Week events" autocomplete="off" spellcheck="false" value="${esc(state.hwQ)}">
                <kbd>/</kbd>
            `;
            searchInput = document.getElementById('q');
            searchInput.addEventListener('input', (e) => {
                state.hwQ = e.target.value.trim().toLowerCase();
                renderHolyWeek();
            });
        }

        const segWrapper = document.getElementById('tl-seg');
        if (segWrapper) {
            segWrapper.innerHTML = `
                <button class="hw-back-btn" data-action="back-timeline" aria-pressed="true" title="Return to Chronological Timeline">
                    ← Timeline
                </button>
            `;
        }

        const sidebarToggleBtn = document.getElementById('tl-sidebar-toggle-btn');
        if (sidebarToggleBtn) {
            const card = document.getElementById('bible-timeline-modal-card');
            const isCollapsed = card && card.classList.contains('rail-collapsed');
            sidebarToggleBtn.setAttribute('title', isCollapsed ? 'Expand Days Sidebar' : 'Collapse Days Sidebar');
        }

        renderHolyWeek();

        if (targetDayId && targetDayId !== 'all') {
            setTimeout(() => {
                const targetSec = document.getElementById(`hw-day-${targetDayId}`);
                if (targetSec && listEl) {
                    listEl.scrollTop = targetSec.offsetTop - listEl.offsetTop - 4;
                }
            }, 50);
        }
    }

    function renderRefCell(gospel, refStr, eventTitle) {
        if (!refStr || refStr === '—' || refStr === '-') {
            return '<span class="hw-dash" aria-hidden="true">—</span>';
        }
        return `
            <button type="button" class="hw-ref-btn" 
                    data-gospel="${esc(gospel)}" 
                    data-ref="${esc(refStr)}"
                    data-title="${esc(eventTitle)}"
                    title="Read ${esc(gospel.charAt(0).toUpperCase() + gospel.slice(1))} ${esc(refStr)}">
                ${hl(refStr, state.hwQ)}
            </button>
        `;
    }

    /**
     * Renders Holy Week Mode
     */
    function renderHolyWeek() {
        if (!listEl || !railEl) return;

        const hwData = getHolyWeekData();
        if (!hwData || !hwData.days) {
            listEl.innerHTML = '<div class="empty">Holy Week dataset not loaded.</div>';
            return;
        }

        const query = state.hwQ;

        // Filter events by search
        let matchedDays = [];
        let totalEvents = 0;

        hwData.days.forEach(day => {
            let events = day.events;
            if (query) {
                events = day.events.filter(item => {
                    const inEvent = item.event && item.event.toLowerCase().includes(query);
                    const inMatt = item.matthew && item.matthew.toLowerCase().includes(query);
                    const inMark = item.mark && item.mark.toLowerCase().includes(query);
                    const inLuke = item.luke && item.luke.toLowerCase().includes(query);
                    const inJohn = item.john && item.john.toLowerCase().includes(query);
                    const inDay = day.dayName && day.dayName.toLowerCase().includes(query);
                    return inEvent || inMatt || inMark || inLuke || inJohn || inDay;
                });
            }

            if (events.length > 0) {
                totalEvents += events.length;
                matchedDays.push({
                    day,
                    events
                });
            }
        });

        if (countEl) {
            countEl.textContent = query
                ? `${totalEvents} events found`
                : `10 Days • ${totalEvents} Events`;
        }

        // 1. Render Left Rail (Holy Week Days)
        let railHtml = `<div class="rail-group">Holy Week</div>`;
        railHtml += `
            <button class="era-link active" data-hw-day="all">
                <span class="era-name">All Days<span>${totalEvents}</span></span>
                <span class="era-range">Palm Sunday to Resurrection</span>
            </button>
        `;

        matchedDays.forEach(group => {
            const d = group.day;
            railHtml += `
                <button class="era-link" data-hw-day="${esc(d.id)}">
                    <span class="era-name">${esc(d.shortName)}<span>${group.events.length}</span></span>
                    <span class="era-range">${esc(d.dateLabel || d.dayName)}</span>
                </button>
            `;
        });

        if (!query) {
            railHtml += `
                <button class="era-link" data-hw-day="differences">
                    <span class="era-name">Differences<span>3</span></span>
                    <span class="era-range">Synoptics vs John timing</span>
                </button>
            `;
        }

        railEl.innerHTML = railHtml;

        // 2. Render Main Body (Tables)
        if (!matchedDays.length) {
            listEl.innerHTML = `
                <div class="empty">
                    No Holy Week events match “${esc(query)}”.<br>
                    <button id="clear">Clear search</button>
                </div>
            `;
            return;
        }

        let listHtml = '';

        matchedDays.forEach(group => {
            const d = group.day;
            listHtml += `
                <section class="era hw-day-sec" id="hw-day-${esc(d.id)}" data-day-id="${esc(d.id)}">
                    <div class="era-band">${esc(d.dayName)}<small>${esc(d.dateLabel || '')}</small></div>
                    <div class="hw-table-wrapper">
                        <table class="hw-table">
                            <thead>
                                <tr>
                                    <th class="hw-th-event">Event</th>
                                    <th class="hw-th-gospel">Matthew</th>
                                    <th class="hw-th-gospel">Mark</th>
                                    <th class="hw-th-gospel">Luke</th>
                                    <th class="hw-th-gospel">John</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${group.events.map((item, idx) => `
                                    <tr class="hw-row" data-day-id="${esc(d.id)}" data-event-idx="${idx}">
                                        <td class="hw-td-event" title="Click to read passage in Bible">
                                            ${hl(item.event, query)}
                                        </td>
                                        <td class="hw-td-gospel">${renderRefCell('matthew', item.matthew, item.event)}</td>
                                        <td class="hw-td-gospel">${renderRefCell('mark', item.mark, item.event)}</td>
                                        <td class="hw-td-gospel">${renderRefCell('luke', item.luke, item.event)}</td>
                                        <td class="hw-td-gospel">${renderRefCell('john', item.john, item.event)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    ${d.footnote ? `
                        <div class="hw-footnote">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span>${esc(d.footnote)}</span>
                        </div>
                    ` : ''}
                </section>
            `;
        });

        // "A Few Points on the Differences" Card
        if (!query && hwData.differences && hwData.differences.length > 0) {
            listHtml += `
                <section class="era hw-day-sec" id="hw-day-differences" data-day-id="differences">
                    <div class="era-band">A Few Points on the Differences<small>Overview</small></div>
                    <div class="hw-diff-card">
                        ${hwData.differences.map((diff, i) => `
                            <div class="hw-diff-item">
                                <span class="hw-diff-num">${i + 1}</span>
                                <p>${diff}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        listEl.innerHTML = listHtml;
    }

    /**
     * Navigates directly into the Bible app
     */
    function navigateToPassage(passage, eventTitle) {
        if (!passage) return;

        close();

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

        const topSearchInput = document.getElementById('desktop-top-search-input');
        const topClearBtn = document.getElementById('desktop-top-clear-btn');
        const topSearchBox = document.getElementById('desktop-top-search-box');
        if (topSearchInput) {
            topSearchInput.value = `${eventTitle || passage.display} (${passage.display})`;
            if (topClearBtn) topClearBtn.style.display = 'flex';
            if (topSearchBox) topSearchBox.classList.add('story-mode-active');
        }

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
        createModalDom();

        if (options && (options.view === 'holy-week' || options.holyWeek)) {
            showHolyWeekView(options.dayId);
        } else {
            showTimelineView();
        }

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
    window.openHolyWeekHarmony = function(dayId) {
        open({ view: 'holy-week', dayId: dayId });
    };

    function bindUiTriggers() {
        const topNavBtn = document.getElementById('timeline-nav-btn');
        if (topNavBtn && !topNavBtn._timelineBound) {
            topNavBtn._timelineBound = true;
            topNavBtn.addEventListener('click', (e) => {
                e.preventDefault();
                open();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindUiTriggers);
    } else {
        bindUiTriggers();
    }
})();
