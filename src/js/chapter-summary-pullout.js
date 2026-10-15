/**
 * CHAPTER-SUMMARY-PULLOUT.JS - Corner Pullout for Chapter Summaries
 * Displays chapter summaries in an application-styled pullout panel for main Bible page
 */

/**
 * Get summary for current chapter
 * @param {string} bookName - The name of the book
 * @param {number} chapter - The chapter number
 * @returns {string|null} - The summary text or null if not found
 */
function getChapterSummary(bookName, chapter) {
    const summaryKey = `${bookName} ${chapter}`;
    
    // Check if chapterSummaries (from short-summary.js) contains the summary
    if (typeof chapterSummaries !== 'undefined' && chapterSummaries[summaryKey]) {
        return chapterSummaries[summaryKey];
    }
    
    return null;
}

/**
 * Initialize and show corner pullout if summary exists
 * @param {string} bookName - The name of the book
 * @param {number} chapter - The chapter number
 */
function initializeChapterSummaryPullout(bookName, chapter) {
    const summary = getChapterSummary(bookName, chapter);
    
    // Remove existing pullout if it exists
    const existingPullout = document.getElementById('chapter-summary-pullout-container');
    if (existingPullout) {
        existingPullout.remove();
    }
    
    // Only show if summary exists
    if (!summary) {
        return;
    }
    
    const scriptureText = document.getElementById('scripture-text');
    if (!scriptureText) {
        console.error('[PULLOUT] scripture-text not found');
        return;
    }

    // Determine subtitle badge (e.g. "ஆதியாகமம் 1" or "Genesis 1")
    let referenceBadgeText = `${bookName} ${chapter}`;
    if (typeof bibleBooks !== 'undefined') {
        const bookInfo = bibleBooks.find(b => b.name === bookName || b.file === bookName || b.tamilName === bookName);
        if (bookInfo) {
            const tName = bookInfo.tamilName || bookInfo.name;
            referenceBadgeText = `${tName} ${chapter}`;
        }
    }
    
    // Create the pullout container
    const pulloutContainer = document.createElement('div');
    pulloutContainer.id = 'chapter-summary-pullout-container';
    pulloutContainer.className = 'chapter-summary-pullout-container';
    
    pulloutContainer.innerHTML = `
        <!-- Overlay -->
        <div class="chapter-summary-overlay" id="chapterSummaryOverlay"></div>
        
        <!-- Arc trigger (gold triangle) -->
        <div class="chapter-summary-arc-trigger" id="chapterSummaryTrigger" title="அதிகார சுருக்கம்">
            <div class="chapter-summary-arc-shape">
                <svg class="chapter-summary-arc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </div>
        </div>
        
        <!-- Summary Panel -->
        <div class="chapter-summary-panel" id="chapterSummaryPanel" role="dialog" aria-modal="true" aria-labelledby="chapterSummaryTitle">
            <div class="chapter-summary-drag-handle">
                <span class="chapter-summary-handle-pill"></span>
            </div>
            <div class="chapter-summary-header">
                <div class="chapter-summary-header-left">
                    <div class="chapter-summary-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            <line x1="9" y1="7" x2="15" y2="7"></line>
                            <line x1="9" y1="11" x2="15" y2="11"></line>
                        </svg>
                    </div>
                    <div class="chapter-summary-header-titles">
                        <h3 class="chapter-summary-title" id="chapterSummaryTitle">அதிகார சுருக்கம்</h3>
                        <span class="chapter-summary-subtitle">${referenceBadgeText}</span>
                    </div>
                </div>
                <button class="chapter-summary-close-btn" id="chapterSummaryCloseBtn" aria-label="Close" type="button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="chapter-summary-content" id="chapterSummaryContent">
                ${formatSummaryText(summary)}
            </div>
        </div>
    `;
    
    // Append to body so it's relative to viewport
    document.body.appendChild(pulloutContainer);
    
    // Attach event listeners
    const trigger = document.getElementById('chapterSummaryTrigger');
    const overlay = document.getElementById('chapterSummaryOverlay');
    const closeBtn = document.getElementById('chapterSummaryCloseBtn');
    
    if (trigger) {
        trigger.addEventListener('click', () => toggleChapterSummaryPanel());
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => closeChapterSummaryPanel());
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeChapterSummaryPanel();
        });
    }
}

/**
 * Format summary text into paragraphs
 * @param {string} text - The summary text
 * @returns {string} - Formatted HTML
 */
function formatSummaryText(text) {
    if (!text) return '';
    return text
        .split('\n')
        .filter(line => line.trim())
        .map(line => `<p>${line.trim()}</p>`)
        .join('');
}

/**
 * Toggle the chapter summary panel open/close
 */
function toggleChapterSummaryPanel() {
    const panel = document.getElementById('chapterSummaryPanel');
    const trigger = document.getElementById('chapterSummaryTrigger');
    const overlay = document.getElementById('chapterSummaryOverlay');
    
    if (!panel || !trigger || !overlay) return;
    
    const isOpen = panel.classList.contains('open');
    
    if (isOpen) {
        panel.classList.remove('open');
        trigger.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.classList.remove('summary-panel-open');
    } else {
        panel.classList.add('open');
        trigger.classList.add('open');
        overlay.classList.add('visible');
        document.body.classList.add('summary-panel-open');
    }
}

/**
 * Close the chapter summary panel
 */
function closeChapterSummaryPanel() {
    const panel = document.getElementById('chapterSummaryPanel');
    const trigger = document.getElementById('chapterSummaryTrigger');
    const overlay = document.getElementById('chapterSummaryOverlay');
    
    if (panel) panel.classList.remove('open');
    if (trigger) trigger.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
    document.body.classList.remove('summary-panel-open');
}

// Global ESC key listener to close summary panel when open
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const panel = document.getElementById('chapterSummaryPanel');
        if (panel && panel.classList.contains('open')) {
            closeChapterSummaryPanel();
        }
    }
});
