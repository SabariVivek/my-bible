/**
 * AI-SUMMARY.JS - AI Chapter Summary Terminal View
 * Fetches AI-generated chapter summaries from Supabase (bible_notes_pages table)
 * and displays them in a terminal-style streaming UI with skeleton loader.
 *
 * Folder structure in Supabase: AI Summary / {BookName} / Chapter - {N}
 */

console.log('[AI-SUMMARY] Script loaded');

// ── STATE ──
let aiSummaryAvailability = {}; // { "Genesis": { "1": pageId, "2": pageId }, ... }
let aiSummaryLoaded = false;
let aiSummaryStreaming = false;
let aiStreamTimer = null;
let aiProgressRAF = null;
let aiPrefetchedSections = null;

// ── CONFIG ──
const AI_SUMMARY_CONFIG = {
    url: SUPABASE_NOTES_CONFIG.url,
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzU0MzYzOSwiZXhwIjoyMDc5MTE5NjM5fQ.WGtQxBTBcJh96Y4ppTiHGQygztdJduf5O4-JNTZBP90',
    tableName: SUPABASE_NOTES_CONFIG.tableName,
    skeletonDuration: 1800 // ms to show skeleton before streaming
};


// ─────────────────────────────────────
// DATA FETCHING
// ─────────────────────────────────────

/**
 * Fetch AI summary availability from Supabase.
 */
async function fetchAISummaryAvailability() {
    if (aiSummaryLoaded) return aiSummaryAvailability;

    try {
        console.log('[AI-SUMMARY] Fetching availability from Supabase...');

        const response = await fetch(
            `${AI_SUMMARY_CONFIG.url}/rest/v1/${AI_SUMMARY_CONFIG.tableName}?select=id,title,type,parent_id`,
            {
                headers: {
                    'apikey': AI_SUMMARY_CONFIG.key,
                    'Authorization': `Bearer ${AI_SUMMARY_CONFIG.key}`
                }
            }
        );

        if (!response.ok) {
            console.warn('[AI-SUMMARY] Failed to fetch availability:', response.status);
            return {};
        }

        const rows = await response.json();
        if (!rows || rows.length === 0) return {};

        // Find the "AI Summary" root folder
        const aiFolder = rows.find(r =>
            r.title && r.title.trim() === 'AI Summary' && r.type === 'folder' && !r.parent_id
        ) || rows.find(r =>
            r.title && r.title.trim() === 'AI Summary' && r.type === 'folder'
        );

        if (!aiFolder) {
            console.log('[AI-SUMMARY] No "AI Summary" folder found');
            return {};
        }

        console.log('[AI-SUMMARY] Found AI Summary folder:', aiFolder.id);

        const bookFolders = rows.filter(r => r.parent_id === aiFolder.id && r.type === 'folder');

        const map = {};
        for (const bookFolder of bookFolders) {
            const chapters = rows.filter(r => r.parent_id === bookFolder.id);
            map[bookFolder.title] = {};
            for (const ch of chapters) {
                const match = ch.title.match(/Chapter\s*[-–]?\s*(\d+)/i);
                if (match) {
                    map[bookFolder.title][match[1]] = ch.id;
                }
            }
        }

        aiSummaryAvailability = map;
        aiSummaryLoaded = true;
        console.log('[AI-SUMMARY] Availability map:', JSON.stringify(Object.keys(map)));
        return map;
    } catch (err) {
        console.error('[AI-SUMMARY] Error fetching availability:', err);
        return {};
    }
}

function hasAISummary(bookName, chapter) {
    const chapterStr = String(chapter);
    return !!(aiSummaryAvailability[bookName] && aiSummaryAvailability[bookName][chapterStr]);
}

function getAISummaryPageId(bookName, chapter) {
    const chapterStr = String(chapter);
    if (aiSummaryAvailability[bookName]) {
        return aiSummaryAvailability[bookName][chapterStr];
    }
    return null;
}

async function fetchAISummaryContent(pageId) {
    try {
        console.log('[AI-SUMMARY] Fetching content for page:', pageId);

        const response = await fetch(
            `${AI_SUMMARY_CONFIG.url}/rest/v1/${AI_SUMMARY_CONFIG.tableName}?id=eq.${encodeURIComponent(pageId)}&select=content,title`,
            {
                headers: {
                    'apikey': AI_SUMMARY_CONFIG.key,
                    'Authorization': `Bearer ${AI_SUMMARY_CONFIG.key}`
                }
            }
        );

        if (!response.ok) {
            console.warn('[AI-SUMMARY] Failed to fetch content:', response.status);
            return null;
        }

        const data = await response.json();
        if (data && data.length > 0) {
            console.log('[AI-SUMMARY] Content loaded, length:', data[0].content?.length);
            return data[0].content;
        }
        return null;
    } catch (err) {
        console.error('[AI-SUMMARY] Error fetching content:', err);
        return null;
    }
}


// ─────────────────────────────────────
// CONTENT PARSING - HTML → Terminal Blocks
// ─────────────────────────────────────

function parseAISummaryContent(htmlContent, bookName, chapter) {
    const sections = [];
    const container = document.createElement('div');
    container.innerHTML = htmlContent;

    let tamilName = bookName;
    if (typeof bibleBooks !== 'undefined') {
        const bookInfo = bibleBooks.find(b => b.name === bookName);
        if (bookInfo) tamilName = bookInfo.tamilName;
    }

    // Heading block
    sections.push({
        type: 'heading',
        text: `${tamilName} ${chapter}`,
        sub: bookName + ' ' + chapter
    });

    let dayCounter = 0;
    let keyCounter = 0;

    const children = container.children;
    for (let i = 0; i < children.length; i++) {
        const el = children[i];
        const tag = el.tagName.toLowerCase();
        const text = el.textContent.trim();

        if (!text) continue;

        if (tag === 'h1') {
            keyCounter = 0;
            sections.push({ type: 'section-label', text: text });
        } else if (tag === 'h2' || tag === 'h3') {
            keyCounter = 0;
            sections.push({ type: 'section-label', text: text });
        } else if (tag === 'h4' || tag === 'h5' || tag === 'h6') {
            keyCounter = 0;
            sections.push({ type: 'section-label', text: text });
        } else if (tag === 'blockquote') {
            const cite = el.querySelector('cite, .ref, small');
            let ref = '';
            let quoteText = text;
            if (cite) {
                ref = cite.textContent.trim();
                quoteText = text.replace(ref, '').trim();
            } else {
                // Try patterns: (Book Chapter:Verse), — Book Chapter:Verse, - Book Chapter:Verse
                const parenMatch = text.match(/\(([^)]*\d+:\d+[^)]*)\)\s*$/);
                const dashMatch = text.match(/[-–—]\s*(.+?\d+:\d+.*)$/);
                if (parenMatch) {
                    ref = parenMatch[1].trim();
                    quoteText = text.replace(parenMatch[0], '').trim();
                } else if (dashMatch) {
                    ref = dashMatch[1].trim();
                    quoteText = text.replace(dashMatch[0], '').trim();
                }
            }
            // Strip wrapping quotes from the text
            quoteText = quoteText.replace(/^["""'']+/, '').replace(/["""'']+$/, '').trim();
            sections.push({ type: 'quote', text: quoteText, ref: ref });
        } else if (tag === 'ul' || tag === 'ol') {
            const items = el.querySelectorAll('li');
            items.forEach(li => {
                keyCounter++;
                const strong = li.querySelector('strong, b');
                let label = '';
                let itemText = li.textContent.trim();
                if (strong) {
                    label = strong.textContent.trim().replace(/:$/, '');
                    itemText = itemText.replace(strong.textContent, '').replace(/^[:\s]+/, '').trim();
                }
                sections.push({
                    type: 'key',
                    num: String(keyCounter),
                    label: label,
                    text: itemText
                });
            });
        } else if (tag === 'p') {
            const dayMatch = text.match(/^(?:Day|நாள்|வசனம்)\s*[-–]?\s*(\d+)/i);
            if (dayMatch) {
                dayCounter++;
                const num = dayMatch[1].padStart(2, '0');
                const remaining = text.replace(dayMatch[0], '').replace(/^[:\s]+/, '').trim();
                const splitMatch = remaining.match(/^([^:–-]+)[:\s–-]+(.+)$/s);
                if (splitMatch) {
                    sections.push({
                        type: 'day',
                        day: num,
                        label: splitMatch[1].trim(),
                        text: splitMatch[2].trim()
                    });
                } else {
                    sections.push({
                        type: 'day',
                        day: num,
                        label: `நாள் ${dayCounter}`,
                        text: remaining || text
                    });
                }
            } else if (i <= 2 && sections.length <= 2) {
                sections.push({ type: 'intro', text: text });
            } else {
                sections.push({ type: 'text', text: text });
            }
        } else if (tag === 'div') {
            const innerHtml = el.innerHTML;
            if (innerHtml.trim()) {
                const innerSections = parseAISummaryContent(innerHtml, bookName, chapter);
                const filtered = innerSections.filter(s => s.type !== 'heading');
                sections.push(...filtered);
            }
        } else {
            if (text.length > 5) {
                sections.push({ type: 'text', text: text });
            }
        }
    }

    return sections;
}


// ─────────────────────────────────────
// UI - TRIGGER BUTTON
// ─────────────────────────────────────

function initializeAISummaryButton(bookName, chapter) {
    console.log(`[AI-SUMMARY] Init button for: ${bookName} ${chapter}`);

    const existing = document.getElementById('ai-summary-trigger');
    if (existing) existing.remove();

    if (!hasAISummary(bookName, chapter)) {
        console.log(`[AI-SUMMARY] No summary for ${bookName} ${chapter}`);
        return;
    }

    console.log(`[AI-SUMMARY] Summary available for ${bookName} ${chapter}, showing button`);

    const trigger = document.createElement('div');
    trigger.id = 'ai-summary-trigger';
    trigger.className = 'ai-summary-trigger visible';
    trigger.title = 'AI Summary';
    trigger.innerHTML = `✨`;

    trigger.addEventListener('click', () => {
        openAISummaryTerminal(bookName, chapter);
    });

    const headerControls = document.querySelector('.header-controls');
    if (headerControls) {
        headerControls.insertBefore(trigger, headerControls.firstChild);
    } else {
        document.body.appendChild(trigger);
    }
}


// ─────────────────────────────────────
// UI - SKELETON HTML (matches genesis-terminal-new.html)
// ─────────────────────────────────────

function buildSkeletonHTML() {
    return `
        <!-- progress bar -->
        <div class="ai-sk-progress-wrap"><div class="ai-sk-progress-bar" id="ai-progress-bar"></div></div>

        <!-- heading skeleton -->
        <div class="ai-sk-heading">
            <div class="ai-sk-bar ai-sk-tag" style="animation-delay:.00s"></div>
            <div style="height:8px"></div>
            <div class="ai-sk-bar ai-sk-h1" style="animation-delay:.05s"></div>
            <div style="height:6px"></div>
            <div class="ai-sk-bar ai-sk-sub" style="animation-delay:.10s"></div>
        </div>

        <!-- intro skeleton -->
        <div class="ai-sk-intro">
            <div class="ai-sk-bar ai-sk-line-full" style="animation-delay:.15s"></div>
            <div class="ai-sk-bar ai-sk-line-long" style="animation-delay:.20s"></div>
            <div class="ai-sk-bar ai-sk-line-short" style="animation-delay:.25s"></div>
        </div>

        <!-- section label skeleton -->
        <div class="ai-sk-section">
            <div class="ai-sk-bar ai-sk-arrow" style="animation-delay:.30s"></div>
            <div class="ai-sk-bar ai-sk-slabel" style="animation-delay:.32s"></div>
            <div class="ai-sk-sline"></div>
        </div>

        <!-- 4 day skeletons -->
        <div class="ai-sk-day">
            <div class="ai-sk-bar ai-sk-daynum" style="animation-delay:.35s"></div>
            <div class="ai-sk-daybody">
                <div class="ai-sk-bar ai-sk-daylabel" style="animation-delay:.37s"></div>
                <div class="ai-sk-bar ai-sk-daytext" style="animation-delay:.39s"></div>
                <div class="ai-sk-bar ai-sk-daytext2" style="animation-delay:.41s"></div>
            </div>
        </div>
        <div class="ai-sk-day">
            <div class="ai-sk-bar ai-sk-daynum" style="animation-delay:.43s"></div>
            <div class="ai-sk-daybody">
                <div class="ai-sk-bar ai-sk-daylabel" style="animation-delay:.45s"></div>
                <div class="ai-sk-bar ai-sk-daytext" style="animation-delay:.47s"></div>
                <div class="ai-sk-bar ai-sk-daytext2" style="animation-delay:.49s"></div>
            </div>
        </div>
        <div class="ai-sk-day">
            <div class="ai-sk-bar ai-sk-daynum" style="animation-delay:.51s"></div>
            <div class="ai-sk-daybody">
                <div class="ai-sk-bar ai-sk-daylabel" style="animation-delay:.53s"></div>
                <div class="ai-sk-bar ai-sk-daytext" style="animation-delay:.55s"></div>
                <div class="ai-sk-bar ai-sk-daytext2" style="animation-delay:.57s"></div>
            </div>
        </div>
        <div class="ai-sk-day">
            <div class="ai-sk-bar ai-sk-daynum" style="animation-delay:.59s"></div>
            <div class="ai-sk-daybody">
                <div class="ai-sk-bar ai-sk-daylabel" style="animation-delay:.61s"></div>
                <div class="ai-sk-bar ai-sk-daytext" style="animation-delay:.63s"></div>
                <div class="ai-sk-bar ai-sk-daytext2" style="animation-delay:.65s"></div>
            </div>
        </div>

        <!-- quote skeleton -->
        <div class="ai-sk-quote">
            <div class="ai-sk-bar ai-sk-qline1" style="animation-delay:.70s"></div>
            <div class="ai-sk-bar ai-sk-qline2" style="animation-delay:.73s"></div>
            <div class="ai-sk-bar ai-sk-qref" style="animation-delay:.76s"></div>
        </div>
    `;
}


// ─────────────────────────────────────
// UI - TERMINAL OVERLAY
// ─────────────────────────────────────

function openAISummaryTerminal(bookName, chapter) {
    closeAISummaryTerminal();

    let tamilName = bookName;
    if (typeof bibleBooks !== 'undefined') {
        const bookInfo = bibleBooks.find(b => b.name === bookName);
        if (bookInfo) tamilName = bookInfo.tamilName;
    }

    const overlay = document.createElement('div');
    overlay.id = 'ai-terminal-overlay';
    overlay.className = 'ai-terminal-overlay open';

    overlay.innerHTML = `
        <!-- TOP BAR -->
        <div class="ai-terminal-topbar">
            <div class="ai-terminal-dot r"></div>
            <div class="ai-terminal-dot y"></div>
            <div class="ai-terminal-dot g"></div>
            <div class="ai-terminal-topbar-spacer"></div>
            <div class="ai-terminal-badge" id="ai-badge">READY</div>
            <button class="ai-terminal-close" id="ai-close-btn">✕ ESC</button>
        </div>

        <!-- VIEWPORT -->
        <div class="ai-terminal-viewport" id="ai-viewport">
            <!-- SKELETON (shown while loading) -->
            <div class="ai-skeleton" id="ai-skeleton">
                ${buildSkeletonHTML()}
            </div>

            <!-- CONTENT (hidden until data ready) -->
            <div class="ai-terminal-content" id="ai-content">
                <div id="ai-blocks"></div>
                <div class="ai-stream-cursor" id="ai-cursor"><span>█</span></div>
                <div id="ai-anchor"></div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Set Android status bar to terminal background
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        overlay._prevThemeColor = themeMeta.getAttribute('content');
        themeMeta.setAttribute('content', '#070b0f');
    }

    // Attach events
    document.getElementById('ai-close-btn').addEventListener('click', closeAISummaryTerminal);

    // ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeAISummaryTerminal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);

    // Start streaming directly
    startAIStream(bookName, chapter);
}

async function prefetchAISummaryData(bookName, chapter) {
    const pageId = getAISummaryPageId(bookName, chapter);
    if (!pageId) return;

    const content = await fetchAISummaryContent(pageId);
    if (content) {
        aiPrefetchedSections = parseAISummaryContent(content, bookName, chapter);
        console.log(`[AI-SUMMARY] Pre-fetched ${aiPrefetchedSections.length} sections`);
    }
}


// ─────────────────────────────────────
// PROGRESS BAR ANIMATION
// ─────────────────────────────────────

function animateProgress(duration, callback) {
    const progressBar = document.getElementById('ai-progress-bar');
    if (!progressBar) { if (callback) callback(); return; }

    const start = performance.now();
    aiProgressRAF = requestAnimationFrame(function tick(now) {
        const elapsed = now - start;
        const pct = Math.min((elapsed / duration) * 100, 95);
        progressBar.style.width = pct + '%';
        if (elapsed < duration) {
            aiProgressRAF = requestAnimationFrame(tick);
        } else {
            progressBar.style.width = '100%';
            setTimeout(callback, 120);
        }
    });
}


// ─────────────────────────────────────
// STREAM FLOW: SKELETON → STREAM → DONE
// ─────────────────────────────────────

async function startAIStream(bookName, chapter) {
    const skeleton = document.getElementById('ai-skeleton');
    const content = document.getElementById('ai-content');
    const cursor = document.getElementById('ai-cursor');
    const badge = document.getElementById('ai-badge');
    const blocks = document.getElementById('ai-blocks');

    // Show skeleton loader immediately
    skeleton.classList.add('active');
    badge.textContent = 'LOADING';
    badge.style.color = '#00cfff';
    badge.style.borderColor = 'rgba(0,207,255,.4)';

    // Fetch data if not pre-fetched
    let sections = aiPrefetchedSections;
    let fetchPromise = null;
    if (!sections) {
        const pageId = getAISummaryPageId(bookName, chapter);
        if (!pageId) {
            showAIError('Summary not found');
            return;
        }
        fetchPromise = fetchAISummaryContent(pageId).then(htmlContent => {
            if (htmlContent) {
                return parseAISummaryContent(htmlContent, bookName, chapter);
            }
            return null;
        });
    }

    // Animate progress bar across skeleton duration
    animateProgress(AI_SUMMARY_CONFIG.skeletonDuration, async () => {
        // Resolve fetch if still pending
        if (fetchPromise) {
            sections = await fetchPromise;
        }

        if (!sections || sections.length === 0) {
            showAIError('Failed to load summary');
            return;
        }

        aiPrefetchedSections = null;

        // Hide skeleton → show content → stream
        skeleton.classList.remove('active');
        content.classList.add('active');
        cursor.classList.add('active');
        badge.textContent = 'STREAMING';
        badge.style.color = '#00ff9d';
        badge.style.borderColor = 'rgba(0,255,157,.4)';
        aiSummaryStreaming = true;

        // Stream blocks one by one
        let count = 0;
        blocks.innerHTML = '';
        aiStreamTimer = setInterval(() => {
            if (count >= sections.length) {
                clearInterval(aiStreamTimer);
                aiStreamTimer = null;
                aiSummaryStreaming = false;
                cursor.classList.remove('active');
                badge.textContent = 'DONE';
                badge.style.color = '#ffd700';
                badge.style.borderColor = 'rgba(255,215,0,.35)';
                return;
            }
            renderAIBlock(sections[count]);
            count++;
            const anchor = document.getElementById('ai-anchor');
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 220);
    });
}


// ─────────────────────────────────────
// RENDER BLOCKS
// ─────────────────────────────────────

function renderAIBlock(section) {
    const blocks = document.getElementById('ai-blocks');
    if (!blocks) return;

    const el = document.createElement('div');
    el.className = 'ai-block';

    switch (section.type) {
        case 'heading':
            el.className += ' ai-block-heading';
            const tagBookName = sanitizeHTML(section.sub).replace(/\s*\d+$/, '').replace(/\s+/g, '_').toUpperCase();
            el.innerHTML = `
                <div class="ai-tag">[ ${tagBookName}_AI · SUMMARY ]</div>
                <h1>${sanitizeHTML(section.text)}</h1>
                <div class="ai-sub">${sanitizeHTML(section.sub)}</div>
            `;
            break;

        case 'intro':
            el.className += ' ai-block-intro';
            el.textContent = section.text;
            break;

        case 'section-label':
            el.className += ' ai-block-section';
            el.innerHTML = `
                <span class="ai-arrow">▸</span>
                <span>${sanitizeHTML(section.text).toUpperCase()}</span>
                <div class="ai-line"></div>
            `;
            break;

        case 'day':
            el.className += ' ai-block-day';
            el.innerHTML = `
                <span class="ai-day-num">[${sanitizeHTML(section.day)}]</span>
                <div>
                    <span class="ai-day-label">${sanitizeHTML(section.label)}: </span>
                    <span class="ai-day-text">${sanitizeHTML(section.text)}</span>
                </div>
            `;
            break;

        case 'quote':
            el.className += ' ai-block-quote';
            el.innerHTML = `
                <p>"${sanitizeHTML(section.text)}"</p>
                ${section.ref ? `<span class="ai-ref">// ${sanitizeHTML(section.ref)}</span>` : ''}
            `;
            break;

        case 'key':
            el.className += ' ai-block-key';
            el.innerHTML = `
                <span class="ai-kn">[#${sanitizeHTML(section.num)}]</span>
                ${section.label ? `<span class="ai-kl">${sanitizeHTML(section.label)}: </span>` : ''}
                <span class="ai-kt">${sanitizeHTML(section.text)}</span>
            `;
            break;

        case 'text':
        default:
            el.className += ' ai-block-text';
            el.textContent = section.text;
            break;
    }

    blocks.appendChild(el);
}

function sanitizeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function showAIError(message) {
    const skeleton = document.getElementById('ai-skeleton');
    const content = document.getElementById('ai-content');
    const badge = document.getElementById('ai-badge');

    if (skeleton) skeleton.classList.remove('active');
    if (content) {
        content.classList.add('active');
        const blocks = document.getElementById('ai-blocks');
        if (blocks) {
            blocks.innerHTML = `
                <div class="ai-terminal-error">
                    <div class="ai-terminal-error-icon">⚠</div>
                    <div class="ai-terminal-error-text">${sanitizeHTML(message)}</div>
                </div>
            `;
        }
    }
    if (badge) {
        badge.textContent = 'ERROR';
        badge.style.color = '#ff2d78';
        badge.style.borderColor = 'rgba(255,45,120,.35)';
    }
}


// ─────────────────────────────────────
// CLOSE
// ─────────────────────────────────────

function closeAISummaryTerminal() {
    if (aiStreamTimer) {
        clearInterval(aiStreamTimer);
        aiStreamTimer = null;
    }
    if (aiProgressRAF) {
        cancelAnimationFrame(aiProgressRAF);
        aiProgressRAF = null;
    }
    aiSummaryStreaming = false;
    aiPrefetchedSections = null;

    const overlay = document.getElementById('ai-terminal-overlay');
    if (overlay) {
        // Restore Android status bar color
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta && overlay._prevThemeColor) {
            themeMeta.setAttribute('content', overlay._prevThemeColor);
        }
        overlay.remove();
    }

    document.body.style.overflow = '';
}


// ─────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────

async function initAISummarySystem() {
    console.log('[AI-SUMMARY] Initializing system...');
    await fetchAISummaryAvailability();
    console.log('[AI-SUMMARY] System ready. Available books:',
        Object.keys(aiSummaryAvailability).join(', ') || 'none');

    // Retroactively show AI button for the currently displayed chapter
    if (typeof bibleBooks !== 'undefined' && typeof currentBook !== 'undefined' && typeof currentChapter !== 'undefined') {
        const bookName = bibleBooks[currentBook]?.name;
        if (bookName) {
            console.log(`[AI-SUMMARY] Retroactive check for: ${bookName} ${currentChapter}`);
            initializeAISummaryButton(bookName, currentChapter);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAISummarySystem);
} else {
    initAISummarySystem();
}
