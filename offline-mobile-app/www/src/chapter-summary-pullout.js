/**
 * CHAPTER-SUMMARY-PULLOUT.JS - Corner Pullout for Chapter Summaries
 * Displays chapter summaries in a bottom-right corner pullout panel for main Bible page
 */

console.log('[PULLOUT SCRIPT] Script loaded successfully');
console.log('[PULLOUT SCRIPT] chapterSummaries available:', typeof chapterSummaries !== 'undefined');

/**
 * Get summary for current chapter
 * @param {string} bookName - The name of the book
 * @param {number} chapter - The chapter number
 * @returns {string|null} - The summary text or null if not found
 */
function getChapterSummary(bookName, chapter) {
    const summaryKey = `${bookName} ${chapter}`;
    
    console.log(`[SUMMARY] Looking for summary key: "${summaryKey}"`);
    console.log(`[SUMMARY] chapterSummaries available:`, typeof chapterSummaries !== 'undefined');
    
    if (typeof chapterSummaries !== 'undefined') {
        console.log(`[SUMMARY] Available keys:`, Object.keys(chapterSummaries).slice(0, 10));
    }
    
    // Check if chapterSummaries (from short-summary.js) contains the summary
    if (typeof chapterSummaries !== 'undefined' && chapterSummaries[summaryKey]) {
        console.log(`[SUMMARY] Found summary for: ${summaryKey}`);
        return chapterSummaries[summaryKey];
    }
    
    console.log(`[SUMMARY] No summary found for: ${summaryKey}`);
    return null;
}

/**
 * Initialize and show corner pullout if summary exists
 * @param {string} bookName - The name of the book
 * @param {number} chapter - The chapter number
 */
function initializeChapterSummaryPullout(bookName, chapter) {
    console.log(`[PULLOUT] Initializing for: ${bookName} ${chapter}`);
    
    const summary = getChapterSummary(bookName, chapter);
    
    // Remove existing pullout if it exists
    const existingPullout = document.getElementById('chapter-summary-pullout-container');
    if (existingPullout) {
        existingPullout.remove();
    }
    
    // Only show if summary exists
    if (!summary) {
        console.log(`[PULLOUT] No summary exists, not showing pullout`);
        return;
    }
    
    console.log(`[PULLOUT] Summary found, creating pullout UI`);
    
    const scriptureText = document.getElementById('scripture-text');
    if (!scriptureText) {
        console.error(`[PULLOUT] scripture-text not found`);
        return;
    }
    
    // Create the pullout container
    const pulloutContainer = document.createElement('div');
    pulloutContainer.id = 'chapter-summary-pullout-container';
    pulloutContainer.className = 'chapter-summary-pullout-container';
    
    pulloutContainer.innerHTML = `
        <!-- Overlay -->
        <div class="chapter-summary-overlay" id="chapterSummaryOverlay"></div>
        
        <!-- Arc trigger (gold triangle) -->
        <div class="chapter-summary-arc-trigger" id="chapterSummaryTrigger">
            <div class="chapter-summary-arc-shape">
                <svg class="chapter-summary-arc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </div>
        </div>
        
        <!-- Summary Panel -->
        <div class="chapter-summary-panel" id="chapterSummaryPanel">
            <div class="chapter-summary-header">புத்தக சுருக்கம்</div>
            <div class="chapter-summary-content" id="chapterSummaryContent">
                ${formatSummaryText(summary)}
            </div>
        </div>
    `;
    
    // Append to body so it's relative to viewport
    document.body.appendChild(pulloutContainer);
    console.log(`[PULLOUT] Pullout container added to DOM`);
    
    // Attach event listeners
    const trigger = document.getElementById('chapterSummaryTrigger');
    const overlay = document.getElementById('chapterSummaryOverlay');
    const panel = document.getElementById('chapterSummaryPanel');
    
    console.log(`[PULLOUT] Elements found - trigger:`, !!trigger, `overlay:`, !!overlay, `panel:`, !!panel);
    
    if (trigger) {
        trigger.addEventListener('click', () => toggleChapterSummaryPanel());
        console.log(`[PULLOUT] Click listener attached to trigger`);
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => closeChapterSummaryPanel());
    }
}

/**
 * Format summary text into paragraphs
 * @param {string} text - The summary text
 * @returns {string} - Formatted HTML
 */
function formatSummaryText(text) {
    // Split by \n and create paragraphs
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
