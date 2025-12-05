// Bible book configuration
const bibleBooks = [
    // Old Testament
    { name: 'Genesis', shortName: 'Gen', tamilName: 'ஆதியாகமம்', tamilShortName: 'ஆதி', file: 'genesis', testament: 'old', chapters: 50 },
    { name: 'Exodus', shortName: 'Exod', tamilName: 'யாத்திராகமம்', tamilShortName: 'யாத்', file: 'exodus', testament: 'old', chapters: 40 },
    { name: 'Leviticus', shortName: 'Lev', tamilName: 'லேவியராகமம்', tamilShortName: 'லேவி', file: 'leviticus', testament: 'old', chapters: 27 },
    { name: 'Numbers', shortName: 'Num', tamilName: 'எண்ணாகமம்', tamilShortName: 'எண்', file: 'numbers', testament: 'old', chapters: 36 },
    { name: 'Deuteronomy', shortName: 'Deut', tamilName: 'உபாகமம்', tamilShortName: 'உபா', file: 'deuteronomy', testament: 'old', chapters: 34 },
    { name: 'Joshua', shortName: 'Josh', tamilName: 'யோசுவா', tamilShortName: 'யோசு', file: 'joshua', testament: 'old', chapters: 24 },
    { name: 'Judges', shortName: 'Judg', tamilName: 'நியாயாதிபதிகள்', tamilShortName: 'நியா', file: 'judges', testament: 'old', chapters: 21 },
    { name: 'Ruth', shortName: 'Ruth', tamilName: 'ரூத்', tamilShortName: 'ரூத்', file: 'ruth', testament: 'old', chapters: 4 },
    { name: 'I Samuel', shortName: '1 Sam', tamilName: '1 சாமுவேல்', tamilShortName: '1 சாமு', file: 'i_samuel', testament: 'old', chapters: 31 },
    { name: 'II Samuel', shortName: '2 Sam', tamilName: '2 சாமுவேல்', tamilShortName: '2 சாமு', file: 'ii_samuel', testament: 'old', chapters: 24 },
    { name: 'I Kings', shortName: '1 Kgs', tamilName: '1 இராஜாக்கள்', tamilShortName: '1 இரா', file: 'i_kings', testament: 'old', chapters: 22 },
    { name: 'II Kings', shortName: '2 Kgs', tamilName: '2 இராஜாக்கள்', tamilShortName: '2 இரா', file: 'ii_kings', testament: 'old', chapters: 25 },
    { name: 'I Chronicles', shortName: '1 Chr', tamilName: '1 நாளாகமம்', tamilShortName: '1 நாளா', file: 'i_chronicles', testament: 'old', chapters: 29 },
    { name: 'II Chronicles', shortName: '2 Chr', tamilName: '2 நாளாகமம்', tamilShortName: '2 நாளா', file: 'ii_chronicles', testament: 'old', chapters: 36 },
    { name: 'Ezra', shortName: 'Ezra', tamilName: 'எஸ்றா', tamilShortName: 'எஸ்றா', file: 'ezra', testament: 'old', chapters: 10 },
    { name: 'Nehemiah', shortName: 'Neh', tamilName: 'நெகேமியா', tamilShortName: 'நெகே', file: 'nehemiah', testament: 'old', chapters: 13 },
    { name: 'Esther', shortName: 'Esth', tamilName: 'எஸ்தர்', tamilShortName: 'எஸ்தர்', file: 'esther', testament: 'old', chapters: 10 },
    { name: 'Job', shortName: 'Job', tamilName: 'யோபு', tamilShortName: 'யோபு', file: 'job', testament: 'old', chapters: 42 },
    { name: 'Psalms', shortName: 'Ps', tamilName: 'சங்கீதம்', tamilShortName: 'சங்கீ', file: 'psalms', testament: 'old', chapters: 150 },
    { name: 'Proverbs', shortName: 'Prov', tamilName: 'நீதிமொழிகள்', tamilShortName: 'நீதி', file: 'proverbs', testament: 'old', chapters: 31 },
    { name: 'Ecclesiastes', shortName: 'Eccl', tamilName: 'பிரசங்கி', tamilShortName: 'பிர', file: 'ecclesiastes', testament: 'old', chapters: 12 },
    { name: 'Song of Solomon', shortName: 'Song', tamilName: 'உன்னதப்பாட்டு', tamilShortName: 'உன்ன', file: 'song_of_solomon', testament: 'old', chapters: 8 },
    { name: 'Isaiah', shortName: 'Isa', tamilName: 'ஏசாயா', tamilShortName: 'ஏசா', file: 'isaiah', testament: 'old', chapters: 66 },
    { name: 'Jeremiah', shortName: 'Jer', tamilName: 'எரேமியா', tamilShortName: 'எரே', file: 'jeremiah', testament: 'old', chapters: 52 },
    { name: 'Lamentations', shortName: 'Lam', tamilName: 'புலம்பல்', tamilShortName: 'புல', file: 'lamentations', testament: 'old', chapters: 5 },
    { name: 'Ezekiel', shortName: 'Ezek', tamilName: 'எசேக்கியேல்', tamilShortName: 'எசே', file: 'ezekiel', testament: 'old', chapters: 48 },
    { name: 'Daniel', shortName: 'Dan', tamilName: 'தானியேல்', tamilShortName: 'தானி', file: 'daniel', testament: 'old', chapters: 12 },
    { name: 'Hosea', shortName: 'Hos', tamilName: 'ஓசியா', tamilShortName: 'ஓசி', file: 'hosea', testament: 'old', chapters: 14 },
    { name: 'Joel', shortName: 'Joel', tamilName: 'யோவேல்', tamilShortName: 'யோவே', file: 'joel', testament: 'old', chapters: 3 },
    { name: 'Amos', shortName: 'Amos', tamilName: 'ஆமோஸ்', tamilShortName: 'ஆமோ', file: 'amos', testament: 'old', chapters: 9 },
    { name: 'Obadiah', shortName: 'Obad', tamilName: 'ஒபதியா', tamilShortName: 'ஒபதி', file: 'obadiah', testament: 'old', chapters: 1 },
    { name: 'Jonah', shortName: 'Jonah', tamilName: 'யோனா', tamilShortName: 'யோனா', file: 'jonah', testament: 'old', chapters: 4 },
    { name: 'Micah', shortName: 'Mic', tamilName: 'மீகா', tamilShortName: 'மீகா', file: 'micah', testament: 'old', chapters: 7 },
    { name: 'Nahum', shortName: 'Nah', tamilName: 'நாகூம்', tamilShortName: 'நாகூ', file: 'nahum', testament: 'old', chapters: 3 },
    { name: 'Habakkuk', shortName: 'Hab', tamilName: 'ஆபகூக்', tamilShortName: 'ஆப', file: 'habakkuk', testament: 'old', chapters: 3 },
    { name: 'Zephaniah', shortName: 'Zeph', tamilName: 'செப்பனியா', tamilShortName: 'செப்', file: 'zephaniah', testament: 'old', chapters: 3 },
    { name: 'Haggai', shortName: 'Hag', tamilName: 'ஆகாய்', tamilShortName: 'ஆகாய்', file: 'haggai', testament: 'old', chapters: 2 },
    { name: 'Zechariah', shortName: 'Zech', tamilName: 'சகரியா', tamilShortName: 'சகரி', file: 'zechariah', testament: 'old', chapters: 14 },
    { name: 'Malachi', shortName: 'Mal', tamilName: 'மல்கியா', tamilShortName: 'மல்கி', file: 'malachi', testament: 'old', chapters: 4 },
    // New Testament
    { name: 'Matthew', shortName: 'Matt', tamilName: 'மத்தேயு', tamilShortName: 'மத்', file: 'matthew', testament: 'new', chapters: 28 },
    { name: 'Mark', shortName: 'Mark', tamilName: 'மாற்கு', tamilShortName: 'மாற்', file: 'mark', testament: 'new', chapters: 16 },
    { name: 'Luke', shortName: 'Luke', tamilName: 'லூக்கா', tamilShortName: 'லூக்', file: 'luke', testament: 'new', chapters: 24 },
    { name: 'John', shortName: 'John', tamilName: 'யோவான்', tamilShortName: 'யோ', file: 'john', testament: 'new', chapters: 21 },
    { name: 'Acts', shortName: 'Acts', tamilName: 'அப்போஸ்தலர்', tamilShortName: 'அப்போ', file: 'acts', testament: 'new', chapters: 28 },
    { name: 'Romans', shortName: 'Rom', tamilName: 'ரோமர்', tamilShortName: 'ரோமர்', file: 'romans', testament: 'new', chapters: 16 },
    { name: 'I Corinthians', shortName: '1 Cor', tamilName: '1 கொரிந்தியர்', tamilShortName: '1 கொரி', file: 'i_corinthians', testament: 'new', chapters: 16 },
    { name: 'II Corinthians', shortName: '2 Cor', tamilName: '2 கொரிந்தியர்', tamilShortName: '2 கொரி', file: 'ii_corinthians', testament: 'new', chapters: 13 },
    { name: 'Galatians', shortName: 'Gal', tamilName: 'கலாத்தியர்', tamilShortName: 'கலா', file: 'galatians', testament: 'new', chapters: 6 },
    { name: 'Ephesians', shortName: 'Eph', tamilName: 'எபேசியர்', tamilShortName: 'எபே', file: 'ephesians', testament: 'new', chapters: 6 },
    { name: 'Philippians', shortName: 'Phil', tamilName: 'பிலிப்பியர்', tamilShortName: 'பிலி', file: 'philippians', testament: 'new', chapters: 4 },
    { name: 'Colossians', shortName: 'Col', tamilName: 'கொலோசெயர்', tamilShortName: 'கொலோ', file: 'colossians', testament: 'new', chapters: 4 },
    { name: 'I Thessalonians', shortName: '1 Thess', tamilName: '1 தெசலோனிக்கேயர்', tamilShortName: '1 தெச', file: 'i_thessalonians', testament: 'new', chapters: 5 },
    { name: 'II Thessalonians', shortName: '2 Thess', tamilName: '2 தெசலோனிக்கேயர்', tamilShortName: '2 தெச', file: 'ii_thessalonians', testament: 'new', chapters: 3 },
    { name: 'I Timothy', shortName: '1 Tim', tamilName: '1 தீமோத்தேயு', tamilShortName: '1 தீமோ', file: 'i_timothy', testament: 'new', chapters: 6 },
    { name: 'II Timothy', shortName: '2 Tim', tamilName: '2 தீமோத்தேயு', tamilShortName: '2 தீமோ', file: 'ii_timothy', testament: 'new', chapters: 4 },
    { name: 'Titus', shortName: 'Titus', tamilName: 'தீத்து', tamilShortName: 'தீத்து', file: 'titus', testament: 'new', chapters: 3 },
    { name: 'Philemon', shortName: 'Phlm', tamilName: 'பிலேமோன்', tamilShortName: 'பிலே', file: 'philemon', testament: 'new', chapters: 1 },
    { name: 'Hebrews', shortName: 'Heb', tamilName: 'எபிரெயர்', tamilShortName: 'எபி', file: 'hebrews', testament: 'new', chapters: 13 },
    { name: 'James', shortName: 'Jas', tamilName: 'யாக்கோபு', tamilShortName: 'யாக்', file: 'james', testament: 'new', chapters: 5 },
    { name: 'I Peter', shortName: '1 Pet', tamilName: '1 பேதுரு', tamilShortName: '1 பேதுரு', file: 'i_peter', testament: 'new', chapters: 5 },
    { name: 'II Peter', shortName: '2 Pet', tamilName: '2 பேதுரு', tamilShortName: '2 பேதுரு', file: 'ii_peter', testament: 'new', chapters: 3 },
    { name: 'I John', shortName: '1 John', tamilName: '1 யோவான்', tamilShortName: '1 யோ', file: 'i_john', testament: 'new', chapters: 5 },
    { name: 'II John', shortName: '2 John', tamilName: '2 யோவான்', tamilShortName: '2 யோ', file: 'ii_john', testament: 'new', chapters: 1 },
    { name: 'III John', shortName: '3 John', tamilName: '3 யோவான்', tamilShortName: '3 யோ', file: 'iii_john', testament: 'new', chapters: 1 },
    { name: 'Jude', shortName: 'Jude', tamilName: 'யூதா', tamilShortName: 'யூதா', file: 'jude', testament: 'new', chapters: 1 },
    { name: 'Revelation', shortName: 'Rev', tamilName: 'வெளிப்படுத்தல்', tamilShortName: 'வெளி', file: 'revelation', testament: 'new', chapters: 22 }
];
// Current state
let currentBook = parseInt(localStorage.getItem('currentBook')) || 39; // Matthew (New Testament starts at index 39)
let currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;
let currentData = null;
let currentTamilData = null; // For storing Tamil data when "Both" is selected
let currentLanguage = localStorage.getItem('currentLanguage') || 'tamil'; // 'english' or 'tamil' or 'both'
let englishTextColor = localStorage.getItem('englishTextColor') || 'default'; // 'default', 'blue' or 'red'
let hasUserInteracted = localStorage.getItem('hasUserInteracted') === 'true'; // Track if user has selected a verse
// Notes storage
let verseNotes = {};
let currentNoteVerse = null;
let currentNoteColor = null;
let githubNotesLoaded = false;
let notesSha = null; // Required for updating GitHub file
// Helper function to normalize book names for comparison
function normalizeBookName(bookName) {
    if (!bookName || typeof bookName !== 'string') return '';
    // Convert roman numerals to numbers for consistency
    return bookName
        .replace(/^I\s+/, '1 ')
        .replace(/^II\s+/, '2 ')
        .replace(/^III\s+/, '3 ')
        .replace(/^Psalms$/, 'Psalm'); // Handle Psalm/Psalms difference
}
// Helper function to check if a book has any memory verses
function bookHasMemoryVerses(bookName) {
    if (typeof window.memoryVerses === 'undefined') return false;
    const normalizedBookName = normalizeBookName(bookName);
    return window.memoryVerses.some(memVerse => {
        const [book] = memVerse.split(/\s+(?=\d)/);
        const normalizedMemBook = normalizeBookName(book);
        return normalizedMemBook === normalizedBookName;
    });
}
// Helper function to check if a chapter has any memory verses
function chapterHasMemoryVerses(bookName, chapter) {
    if (typeof window.memoryVerses === 'undefined') return false;
    const normalizedBookName = normalizeBookName(bookName);
    return window.memoryVerses.some(memVerse => {
        const [book, range] = memVerse.split(/\s+(?=\d)/);
        if (!range) return false;
        const normalizedMemBook = normalizeBookName(book);
        const [chapterPart] = range.split(':');
        return normalizedMemBook === normalizedBookName && parseInt(chapterPart) === chapter;
    });
}
// Helper function to check if a specific verse is a memory verse (for verse column indicators)
function verseHasMemoryVerse(bookName, chapter, verse) {
    if (typeof window.memoryVerses === 'undefined') return false;
    const normalizedBookName = normalizeBookName(bookName);
    return window.memoryVerses.some(memVerse => {
        const [book, range] = memVerse.split(/\s+(?=\d)/);
        if (!range) return false;
        const normalizedMemBook = normalizeBookName(book);
        // Check if it's a range or single verse
        if (range.includes(':')) {
            const [chapterPart, versePart] = range.split(':');
            if (versePart.includes('–') || versePart.includes('-')) {
                // Range like "12:1-6"
                const [startVerse, endVerse] = versePart.split(/[–-]/);
                return normalizedMemBook === normalizedBookName && 
                       parseInt(chapterPart) === chapter && 
                       verse >= parseInt(startVerse) && 
                       verse <= parseInt(endVerse);
            } else {
                // Single verse like "3:16"
                return normalizedMemBook === normalizedBookName && 
                       parseInt(chapterPart) === chapter && 
                       parseInt(versePart) === verse;
            }
        }
        return false;
    });
}
// Helper function to check if a verse is a memory verse
function isMemoryVerse(bookName, chapter, verse) {
    if (typeof window.memoryVerses === 'undefined') return false;
    const normalizedBookName = normalizeBookName(bookName);
    return window.memoryVerses.some(memVerse => {
        // Handle verse ranges like "Isaiah 12:1–6" or "Ephesians 2:8–9"
        if (memVerse.includes('–') || memVerse.includes('-')) {
            const [book, range] = memVerse.split(/\s+(?=\d)/);
            const normalizedMemBook = normalizeBookName(book);
            const [chapterPart, versePart] = range.split(':');
            const verseRange = versePart.split(/[–-]/);
            const startVerse = parseInt(verseRange[0]);
            const endVerse = parseInt(verseRange[1]);
            return normalizedMemBook === normalizedBookName && parseInt(chapterPart) === chapter && verse >= startVerse && verse <= endVerse;
        }
        // Handle single verse like "John 3:16"
        const [book, range] = memVerse.split(/\s+(?=\d)/);
        if (!range) return false; // Invalid format
        const normalizedMemBook = normalizeBookName(book);
        const [chapterPart, versePart] = range.split(':');
        return normalizedMemBook === normalizedBookName && parseInt(chapterPart) === chapter && parseInt(versePart) === verse;
    });
}
// Helper function to convert book file name based on language
// Tamil uses i_samuel, english uses 1-samuel
function getBookFileForLanguage(bookFile, language) {
    if (language === 'english') {
        return bookFile
            .replace(/^i_/, '1-')
            .replace(/^ii_/, '2-')
            .replace(/^iii_/, '3-')
            .replace(/_/g, '-');
    }
    return bookFile;
}
// Initialize
// Register service worker for PWA (only on http/https, not file://)
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        // Use relative path for service worker to work both locally and on GitHub Pages
        const swPath = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'src/service-worker.js'
            : '/my-bible/src/service-worker.js';
        navigator.serviceWorker.register(swPath)
            .then(registration => {
            })
            .catch(err => {
            });
    });
}
// Network status detection (silent - no UI indicator)
let isOnline = navigator.onLine;
function updateOnlineStatus() {
    isOnline = navigator.onLine;
    if (!isOnline) {
    } else {
    }
}
// Listen for online/offline events
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
// History and back button management
let currentPage = 'bible'; // 'bible', 'search', or other pages
let isOnBiblePage = true;
function initializeHistoryManagement() {
    // Initialize with bible page state
    history.replaceState({ page: 'bible' }, '', window.location.href);
    // Handle browser back button
    window.addEventListener('popstate', (event) => {
        // Check if prayers sheet is open
        const prayersFrame = document.querySelector('iframe[src="src/prayers.html"]');
        if (prayersFrame) {
            try {
                const prayersDoc = prayersFrame.contentDocument || prayersFrame.contentWindow.document;
                const bottomSheet = prayersDoc.querySelector('.prayers-bottom-sheet');
                const sheetOverlay = prayersDoc.querySelector('.prayers-bottom-sheet-overlay');
                
                // If sheet is open, close it and prevent back navigation
                if (bottomSheet && bottomSheet.classList.contains('active')) {
                    bottomSheet.classList.remove('active');
                    sheetOverlay.classList.remove('active');
                    return;
                }
            } catch (e) {
                // Frame access denied, continue with normal navigation
            }
        }
        
        // Skip admin pages in history
        if (event.state && event.state.adminPage) {
            history.back();
            return;
        }
        if (event.state && event.state.page === 'bible') {
            // Navigate back to bible page or do nothing if already there
            if (!isOnBiblePage) {
                navigateToBiblePage();
            }
        }
    });
}
function navigateToBiblePage() {
    // Close any open modals or pages
    const searchModal = document.querySelector('.search-modal');
    const summaryDrawer = document.querySelector('.summary-drawer');
    const notesModal = document.querySelector('.notes-modal');
    if (searchModal && searchModal.classList.contains('active')) {
        searchModal.classList.remove('active');
    }
    if (summaryDrawer && summaryDrawer.classList.contains('active')) {
        summaryDrawer.classList.remove('active');
    }
    if (notesModal && notesModal.style.display === 'flex') {
        notesModal.style.display = 'none';
    }
    isOnBiblePage = true;
    currentPage = 'bible';
}
function navigateToPage(pageName) {
    if (pageName !== 'bible') {
        isOnBiblePage = false;
        currentPage = pageName;
        history.pushState({ page: pageName }, '', window.location.href);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Check online status on load (silent)
    updateOnlineStatus();
    // Request persistent storage to prevent data deletion
    if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().then(persistent => {
            if (persistent) {
            } else {
            }
        });
    }
    // Check current storage status and estimate quota
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(estimate => {
            const usedMB = (estimate.usage / (1024 * 1024)).toFixed(2);
            const quotaMB = (estimate.quota / (1024 * 1024)).toFixed(2);
            const percentUsed = ((estimate.usage / estimate.quota) * 100).toFixed(1);
        });
    }
    // Check if storage is already persistent
    if (navigator.storage && navigator.storage.persisted) {
        navigator.storage.persisted().then(isPersisted => {
            if (!isPersisted) {
            }
        });
    }
    // Force close any drawers immediately on page load
    const summaryDrawer = document.getElementById('summary-drawer');
    if (summaryDrawer) {
        summaryDrawer.classList.remove('active');
        // Remove any inline styles that might interfere
        summaryDrawer.style.right = '';
    }
    document.body.classList.remove('summary-drawer-open');
    // Reset content area margin and bottom nav positioning
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.style.marginRight = '';
    }
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        bottomNav.style.right = '';
    }
    // Initialize history management
    initializeHistoryManagement();
    initializeScrollbar();
    initializeTheme();
    initializeBookList();
    updateBookNames(); // Update book names based on saved language preference
    initializeMobileDrawer();
    initializeMobileLanguageModal(); // Initialize language modal/bottom sheet
    initializeSearch();
    initializeSiteTitle();
    initializeHomeOptions();
    initializeSummaryDrawer();
    initializeScrollbarBehavior();
    initializeNotesModal();
    loadNotesFromSupabase(); // Load shared notes from Supabase
    // Load memory verses from Supabase
    loadMemoryVersesFromSupabase();
    updateAdminUI(); // Initialize admin UI based on saved state
    // Show admin toggle and admin menu wrapper if admin mode was previously activated
    const adminToggle = document.getElementById('admin-toggle');
    const secretIcon = document.getElementById('secret-icon');
    const notesIcon = document.getElementById('notes-icon');
    const mobileAdminMenuWrapper = document.getElementById('mobile-admin-menu-wrapper');
    const desktopAdminMenuWrapper = document.getElementById('desktop-admin-menu-wrapper');
    const rightMenuBtn = document.getElementById('right-menu-btn');
    const bibleReadingOption = document.getElementById('bible-reading-option');
    const rightSermonOption = document.getElementById('right-sermon-option');
    const rightNotesOption = document.getElementById('right-notes-option');
    const rightKingsOption = document.getElementById('right-kings-option');
    const rightProphetsOption = document.getElementById('right-prophets-option');
    const rightTimelineOption = document.getElementById('right-timeline-option');
    const rightCharacterOption = document.getElementById('right-character-option');
    const rightLifeOfJesusOption = document.getElementById('right-life-of-jesus-option');
    const rightCultOption = document.getElementById('right-cult-option');
    const rightPrayersOption = document.getElementById('right-prayers-option');
    const isMobile = window.innerWidth <= 768;
    let isFadingOut = false; // Flag to prevent re-showing during fade
    
    // Always show right-menu-btn (the button that opens right sidebar)
    if (rightMenuBtn) rightMenuBtn.style.display = 'flex';
    
    // Always show public menu items (not admin-only)
    if (bibleReadingOption) bibleReadingOption.style.display = 'flex';
    if (rightSermonOption) rightSermonOption.style.display = 'flex';
    
    // Show/hide admin-only menu items based on admin status
    
    if (isAdmin()) {
        if (isMobile) {
            // On mobile, show admin menu wrapper and toggle
            if (mobileAdminMenuWrapper) mobileAdminMenuWrapper.style.setProperty('display', 'block', 'important');
            if (adminToggle) adminToggle.style.display = 'flex';
        } else {
            // On desktop, show admin menu wrapper and toggle
            if (desktopAdminMenuWrapper) desktopAdminMenuWrapper.style.setProperty('display', 'block', 'important');
            if (adminToggle) adminToggle.style.display = 'flex';
        }
        // Show admin-only menu items
        if (rightNotesOption) rightNotesOption.style.display = 'flex';
        // Kings, Prophets, Timeline are always hidden
        if (rightCharacterOption) rightCharacterOption.style.display = 'flex';
        if (rightLifeOfJesusOption) rightLifeOfJesusOption.style.display = 'flex';
        if (rightCultOption) rightCultOption.style.display = 'flex';
        if (rightPrayersOption) rightPrayersOption.style.display = 'flex';
    } else {
        // Hide admin-only menu items
        if (rightNotesOption) rightNotesOption.style.display = 'none';
        if (rightKingsOption) rightKingsOption.style.display = 'none';
        if (rightProphetsOption) rightProphetsOption.style.display = 'none';
        if (rightTimelineOption) rightTimelineOption.style.display = 'none';
        if (rightCharacterOption) rightCharacterOption.style.display = 'none';
        if (rightLifeOfJesusOption) rightLifeOfJesusOption.style.display = 'none';
        if (rightCultOption) rightCultOption.style.display = 'none';
        if (rightPrayersOption) rightPrayersOption.style.display = 'none';
    }
    // Admin toggle button click handler
    if (adminToggle) {
        adminToggle.addEventListener('click', () => {
            const currentState = isAdmin();
            const newState = !currentState;
            // Show notification
            const message = newState ? 'Admin mode activated' : 'Admin mode ended';
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                showToast(message, 'success');
            } else {
                showDesktopNotification(message);
            }
            // If turning off admin mode, hide icons with fade animation
            if (!newState) {
                // Set fading flag and update localStorage immediately
                isFadingOut = true;
                localStorage.setItem('isAdmin', 'false');
                // Fade out animations with pointer-events disabled
                if (adminToggle) {
                    adminToggle.style.pointerEvents = 'none';
                    adminToggle.style.opacity = '0';
                    adminToggle.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        adminToggle.style.display = 'none';
                        adminToggle.style.opacity = '1';
                        adminToggle.style.transition = '';
                        adminToggle.style.pointerEvents = '';
                    }, 2000);
                }
                if (notesIcon) {
                    notesIcon.style.pointerEvents = 'none';
                    notesIcon.style.opacity = '0';
                    notesIcon.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        notesIcon.style.display = 'none';
                        notesIcon.style.opacity = '1';
                        notesIcon.style.transition = '';
                        notesIcon.style.pointerEvents = '';
                    }, 2000);
                }
                if (secretIcon) {
                    secretIcon.style.pointerEvents = 'none';
                    secretIcon.style.opacity = '0';
                    secretIcon.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        secretIcon.style.display = 'none';
                        secretIcon.style.opacity = '1';
                        secretIcon.style.transition = '';
                        secretIcon.style.pointerEvents = '';
                    }, 2000);
                }
                if (mobileAdminMenuWrapper) {
                    mobileAdminMenuWrapper.style.pointerEvents = 'none';
                    mobileAdminMenuWrapper.style.opacity = '0';
                    mobileAdminMenuWrapper.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        mobileAdminMenuWrapper.style.setProperty('display', 'none', 'important');
                        mobileAdminMenuWrapper.style.opacity = '1';
                        mobileAdminMenuWrapper.style.transition = '';
                        mobileAdminMenuWrapper.style.pointerEvents = '';
                    }, 2000);
                }
                if (desktopAdminMenuWrapper) {
                    desktopAdminMenuWrapper.style.pointerEvents = 'none';
                    desktopAdminMenuWrapper.style.opacity = '0';
                    desktopAdminMenuWrapper.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        desktopAdminMenuWrapper.style.setProperty('display', 'none', 'important');
                        desktopAdminMenuWrapper.style.opacity = '1';
                        desktopAdminMenuWrapper.style.transition = '';
                        desktopAdminMenuWrapper.style.pointerEvents = '';
                    }, 2000);
                }
                // Hide admin-only menu items with fade
                if (rightNotesOption) {
                    rightNotesOption.style.pointerEvents = 'none';
                    rightNotesOption.style.opacity = '0';
                    rightNotesOption.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        rightNotesOption.style.display = 'none';
                        rightNotesOption.style.opacity = '1';
                        rightNotesOption.style.transition = '';
                        rightNotesOption.style.pointerEvents = '';
                    }, 2000);
                }
                if (rightCultOption) {
                    rightCultOption.style.pointerEvents = 'none';
                    rightCultOption.style.opacity = '0';
                    rightCultOption.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        rightCultOption.style.display = 'none';
                        rightCultOption.style.opacity = '1';
                        rightCultOption.style.transition = '';
                        rightCultOption.style.pointerEvents = '';
                    }, 2000);
                }
                if (rightPrayersOption) {
                    rightPrayersOption.style.pointerEvents = 'none';
                    rightPrayersOption.style.opacity = '0';
                    rightPrayersOption.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        rightPrayersOption.style.display = 'none';
                        rightPrayersOption.style.opacity = '1';
                        rightPrayersOption.style.transition = '';
                        rightPrayersOption.style.pointerEvents = '';
                    }, 2000);
                }
                if (rightCharacterOption) {
                    rightCharacterOption.style.pointerEvents = 'none';
                    rightCharacterOption.style.opacity = '0';
                    rightCharacterOption.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        rightCharacterOption.style.display = 'none';
                        rightCharacterOption.style.opacity = '1';
                        rightCharacterOption.style.transition = '';
                        rightCharacterOption.style.pointerEvents = '';
                    }, 2000);
                }
                if (rightLifeOfJesusOption) {
                    rightLifeOfJesusOption.style.pointerEvents = 'none';
                    rightLifeOfJesusOption.style.opacity = '0';
                    rightLifeOfJesusOption.style.transition = 'opacity 2s ease';
                    setTimeout(() => {
                        rightLifeOfJesusOption.style.display = 'none';
                        rightLifeOfJesusOption.style.opacity = '1';
                        rightLifeOfJesusOption.style.transition = '';
                        rightLifeOfJesusOption.style.pointerEvents = '';
                    }, 2000);
                }
                // Close right sidebar if open
                const rightSidebar = document.querySelector('.right-sidebar');
                if (rightSidebar && !rightSidebar.classList.contains('hidden')) {
                    rightSidebar.classList.add('hidden');
                    rightSidebar.classList.remove('drawer-open');
                }
                // Update UI and reset flag after fade completes
                setTimeout(() => {
                    updateAdminUI();
                    isFadingOut = false;
                }, 2000);
            } else {
                // If activating admin mode, show admin menu items immediately
                isFadingOut = false;
                localStorage.setItem('isAdmin', 'true');
                
                // Show admin-only menu items - clear any conflicting styles
                if (rightNotesOption) {
                    rightNotesOption.style.display = 'flex';
                    rightNotesOption.style.opacity = '';
                    rightNotesOption.style.transition = '';
                    rightNotesOption.style.pointerEvents = '';
                }
                if (rightCultOption) {
                    rightCultOption.style.display = 'flex';
                    rightCultOption.style.opacity = '';
                    rightCultOption.style.transition = '';
                    rightCultOption.style.pointerEvents = '';
                }
                if (rightPrayersOption) {
                    rightPrayersOption.style.display = 'flex';
                    rightPrayersOption.style.opacity = '';
                    rightPrayersOption.style.transition = '';
                    rightPrayersOption.style.pointerEvents = '';
                }
                if (rightCharacterOption) {
                    rightCharacterOption.style.display = 'flex';
                    rightCharacterOption.style.opacity = '';
                    rightCharacterOption.style.transition = '';
                    rightCharacterOption.style.pointerEvents = '';
                }
                if (rightLifeOfJesusOption) {
                    rightLifeOfJesusOption.style.display = 'flex';
                    rightLifeOfJesusOption.style.opacity = '';
                    rightLifeOfJesusOption.style.transition = '';
                    rightLifeOfJesusOption.style.pointerEvents = '';
                }
                
                updateAdminUI();
            }
        });
    }
    // Desktop admin menu handlers
    const desktopAdminMenuBtn = document.getElementById('desktop-admin-menu-btn');
    const desktopAdminDropdown = document.getElementById('desktop-admin-dropdown');
    const desktopCultOption = document.getElementById('desktop-cult-option');
    const desktopNotesOption = document.getElementById('desktop-notes-option');
    if (desktopAdminMenuBtn && desktopAdminDropdown) {
        desktopAdminMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopAdminDropdown.classList.toggle('active');
            desktopAdminMenuBtn.classList.toggle('active');
        });
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (desktopAdminMenuWrapper && !desktopAdminMenuWrapper.contains(e.target)) {
                desktopAdminDropdown.classList.remove('active');
                desktopAdminMenuBtn.classList.remove('active');
            }
        });
        // Handle cult option click
        if (desktopCultOption) {
            desktopCultOption.addEventListener('click', () => {
                window.location.href = 'config/secret.html';
            });
        }
        // Handle notes option click
        if (desktopNotesOption) {
            desktopNotesOption.addEventListener('click', () => {
                window.location.href = 'docs/docs.html';
            });
        }
    }
    // Initialize voice command functionality
    initializeVoiceCommand();
    // Always load Bible directly on all devices (mobile, tablet, desktop)
    loadBook(currentBook, currentChapter);
    // Start background preload after initial load (non-blocking, silent)
    setTimeout(() => {
        startBackgroundPreload();
    }, 3000); // Wait 3 seconds after page load to start preloading
});
// Initialize mobile drawer
function initializeMobileDrawer() {
    const menuBtn = document.querySelector('.mobile-only');
    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const booksSidebar = document.querySelector('.books-sidebar');
    const chaptersColumn = document.querySelector('.chapters-column');
    const versesColumn = document.querySelector('.verses-column');
    const bottomNav = document.querySelector('.bottom-nav');
    if (!menuBtn || !drawerOverlay) return;
    // Open/toggle drawer
    menuBtn.addEventListener('click', () => {
        closeBottomSheet();
        // Check if on mobile or desktop
        if (window.innerWidth <= 768) {
            // Mobile: toggle drawer overlay
            const isOpen = drawerOverlay.classList.contains('active');
            if (isOpen) {
                // Close drawer
                drawerOverlay.classList.remove('active');
                booksSidebar.classList.remove('drawer-open');
                chaptersColumn.classList.remove('drawer-open');
                versesColumn.classList.remove('drawer-open');
                hamburgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                document.body.style.overflow = '';
            } else {
                // Close summary drawer if open
                closeSummaryDrawer();
                // Open drawer
                drawerOverlay.classList.add('active');
                booksSidebar.classList.add('drawer-open');
                chaptersColumn.classList.add('drawer-open');
                versesColumn.classList.add('drawer-open');
                hamburgerIcon.style.display = 'none';
                closeIcon.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        } else {
            // Desktop: toggle sidebar visibility
            const isHidden = booksSidebar.classList.toggle('hidden');
            chaptersColumn.classList.toggle('hidden');
            versesColumn.classList.toggle('hidden');
            // Expand bottom nav when sidebars are hidden
            if (bottomNav) {
                if (isHidden) {
                    bottomNav.classList.add('expanded');
                } else {
                    bottomNav.classList.remove('expanded');
                }
            }
        }
    });
    // Close drawer
    function closeDrawer() {
        const menuBtn = document.querySelector('.mobile-only');
        const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
        const closeIcon = menuBtn.querySelector('.close-icon');
        drawerOverlay.classList.remove('active');
        booksSidebar.classList.remove('drawer-open');
        chaptersColumn.classList.remove('drawer-open');
        versesColumn.classList.remove('drawer-open');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = '';
    }
    // Close on overlay click
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }
    // Close button in drawer header (if it exists)
    const drawerCloseBtn = document.querySelector('.drawer-close');
    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeDrawer);
    }
    
    // Left swipe to open drawer (ultra smooth) - from anywhere on screen
    let touchStartX = 0;
    let touchStartY = 0;
    const swipeThreshold = 50; // Minimum swipe distance
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, false);
    
    document.addEventListener('touchmove', (e) => {
        // Only handle if drawer is not already open
        if (drawerOverlay.classList.contains('active')) {
            return;
        }
        
        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;
        const deltaX = touchCurrentX - touchStartX;
        const deltaY = Math.abs(touchCurrentY - touchStartY);
        
        // Check if it's a horizontal swipe (not vertical) from right to left
        if (Math.abs(deltaX) > deltaY && deltaX > swipeThreshold) {
            // Left swipe detected - open drawer
            if (window.innerWidth <= 768) {
                drawerOverlay.classList.add('active');
                booksSidebar.classList.add('drawer-open');
                chaptersColumn.classList.add('drawer-open');
                versesColumn.classList.add('drawer-open');
                const menuBtn = document.querySelector('.mobile-only');
                if (menuBtn) {
                    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
                    const closeIcon = menuBtn.querySelector('.close-icon');
                    if (hamburgerIcon) hamburgerIcon.style.display = 'none';
                    if (closeIcon) closeIcon.style.display = 'block';
                }
                document.body.style.overflow = 'hidden';
                // Prevent further swipe events
                touchStartX = window.innerWidth;
            }
        }
    }, false);
}
// Initialize book list with click handlers
function initializeBookList() {
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadBook(index, 1);
        });
    });
    // Add has-memory-verse class to books with memory verses
    markBooksWithMemoryVerses();
}
// Mark books that contain memory verses
function markBooksWithMemoryVerses() {
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach((item, index) => {
        const book = bibleBooks[index];
        if (book && bookHasMemoryVerses(book.name)) {
            item.classList.add('has-memory-verse');
        } else {
            item.classList.remove('has-memory-verse');
        }
    });
    // Also update chapter and verse indicators if we're in a book view
    if (typeof currentBook !== 'undefined') {
        updateChapterMemoryVerseIndicators();
        updateVerseMemoryVerseIndicators();
    }
}
// Update chapter memory verse indicators
function updateChapterMemoryVerseIndicators() {
    const chapterItems = document.querySelectorAll('.chapters-column .number-item');
    chapterItems.forEach(item => {
        const chapter = parseInt(item.dataset.chapter);
        if (chapterHasMemoryVerses(bibleBooks[currentBook].name, chapter)) {
            item.classList.add('has-memory-verse');
        } else {
            item.classList.remove('has-memory-verse');
        }
    });
}
// Update verse memory verse indicators
function updateVerseMemoryVerseIndicators() {
    const verseItems = document.querySelectorAll('.verses-column .number-item');
    const bookName = bibleBooks[currentBook].name;
    const memoryVersesInChapter = [];
    
    verseItems.forEach(item => {
        const verse = parseInt(item.dataset.verse);
        if (verseHasMemoryVerse(bookName, currentChapter, verse)) {
            item.classList.add('has-memory-verse');
            memoryVersesInChapter.push(verse);
        } else {
            item.classList.remove('has-memory-verse');
        }
    });
    
    if (memoryVersesInChapter.length > 0) {
    }
}
// Update book names based on language
function updateBookNames() {
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach((item, index) => {
        const book = bibleBooks[index];
        const bookNameSpan = item.querySelector('.book-name');
        if (bookNameSpan && book) {
            if (currentLanguage === 'tamil') {
                bookNameSpan.innerHTML = `${book.tamilName}`;
                bookNameSpan.classList.add('tamil-only');
            } else if (currentLanguage === 'english') {
                // Show only English name
                bookNameSpan.innerHTML = `${book.name}`;
                bookNameSpan.classList.remove('tamil-only');
            } else {
                // 'both' mode - Show English name with Tamil name in smaller text below
                bookNameSpan.innerHTML = `<span class="english-name">${book.name}</span><span class="tamil-name">${book.tamilName}</span>`;
                bookNameSpan.classList.remove('tamil-only');
            }
        }
    });
    // Ensure correct book selection is maintained
    updateBookSelection();
}
// Show/hide loader
let loaderStartTime = 0;
function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('active');
        loaderStartTime = Date.now();
    }
}
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('active');
    }
}
// Load a book
async function loadBook(bookIndex, chapter) {
    showLoader();
    // Restore UI elements if coming from home page
    restoreUIFromHomePage();
    currentBook = bookIndex;
    currentChapter = chapter;
    // Save to localStorage
    localStorage.setItem('currentBook', bookIndex);
    localStorage.setItem('currentChapter', chapter);
    localStorage.removeItem('isOnHomePage');
    const book = bibleBooks[bookIndex];
    try {
        if (currentLanguage === 'both') {
            // Load entire book for both languages
            const englishBookFile = getBookFileForLanguage(book.file, 'english');
            await Promise.all([
                bibleDataManager.loadEntireBook(book.file, 'tamil'),
                bibleDataManager.loadEntireBook(englishBookFile, 'english')
            ]);
            // Get current chapter data from cache
            const [tamilData, englishData] = await Promise.all([
                bibleDataManager.getChapterData(book.file, chapter, 'tamil'),
                bibleDataManager.getChapterData(englishBookFile, chapter, 'english')
            ]);
            if (tamilData && englishData) {
                currentTamilData = { [`chapter_${chapter}`]: tamilData };
                currentData = { [`chapter_${chapter}`]: englishData };
                updateUI();
            } else {
                hideLoader();
            }
        } else {
            // Single language mode - load entire book
            const language = currentLanguage === 'tamil' ? 'tamil' : 'english';
            const bookFile = getBookFileForLanguage(book.file, language);
            const bookData = await bibleDataManager.loadEntireBook(bookFile, language);
            if (!bookData) {
                hideLoader();
                return;
            }
            // Get current chapter data from cache
            const chapterData = await bibleDataManager.getChapterData(bookFile, chapter, language);
            if (chapterData) {
                currentData = { [`chapter_${chapter}`]: chapterData };
                currentTamilData = null;
                updateUI();
            } else {
                hideLoader();
            }
        }
    } catch (error) {
    } finally {
        hideLoader();
    }
}
// Update UI with loaded data
async function updateUI() {
    const book = bibleBooks[currentBook];
    // Check if we need to load new chapter data
    const needsDataLoad = !currentData || !currentData[`chapter_${currentChapter}`];
    if (needsDataLoad) {
        showLoader();
        try {
            if (currentLanguage === 'both') {
                const englishBookFile = getBookFileForLanguage(book.file, 'english');
                const [tamilData, englishData] = await Promise.all([
                    bibleDataManager.getChapterData(book.file, currentChapter, 'tamil'),
                    bibleDataManager.getChapterData(englishBookFile, currentChapter, 'english')
                ]);
                if (tamilData && englishData) {
                    currentTamilData = { [`chapter_${currentChapter}`]: tamilData };
                    currentData = { [`chapter_${currentChapter}`]: englishData };
                    // Preload adjacent chapters
                    bibleDataManager.preloadAdjacentChapters(book.file, currentChapter, 'tamil', book.chapters);
                    bibleDataManager.preloadAdjacentChapters(englishBookFile, currentChapter, 'english', book.chapters);
                }
            } else {
                const language = currentLanguage === 'tamil' ? 'tamil' : 'english';
                const bookFile = getBookFileForLanguage(book.file, language);
                const chapterData = await bibleDataManager.getChapterData(bookFile, currentChapter, language);
                if (chapterData) {
                    currentData = { [`chapter_${currentChapter}`]: chapterData };
                    currentTamilData = null;
                    // Preload adjacent chapters
                    bibleDataManager.preloadAdjacentChapters(bookFile, currentChapter, language, book.chapters);
                }
            }
        } catch (error) {
        } finally {
            hideLoader();
        }
    }
    updateBookSelection();
    updateChapters();
    updateVerses();
    displayChapter();
    applyAllNoteDisplays();
    updateDrawerContent();
}
// Update book selection
function updateBookSelection() {
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach((item, index) => {
        if (index === currentBook) {
            item.classList.add('active');
            // Scroll the active book into view
            setTimeout(() => {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        } else {
            item.classList.remove('active');
        }
    });
}
// Update chapters list
function updateChapters() {
    const chaptersColumn = document.querySelector('.chapters-column');
    const book = bibleBooks[currentBook];
    const bookName = book.name;
    let html = '';
    for (let i = 1; i <= book.chapters; i++) {
        const activeClass = i === currentChapter ? 'active' : '';
        const hasMemVerse = chapterHasMemoryVerses(bookName, i);
        const hasMemoryVerse = hasMemVerse ? ' has-memory-verse' : '';
        html += `<div class="number-item ${activeClass}${hasMemoryVerse}" data-chapter="${i}">${i}</div>`;
    }
    chaptersColumn.innerHTML = html;
    // Scroll to active chapter
    setTimeout(() => {
        const activeChapter = chaptersColumn.querySelector('.number-item.active');
        if (activeChapter) {
            activeChapter.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
    // Add click handlers
    chaptersColumn.querySelectorAll('.number-item').forEach(item => {
        item.addEventListener('click', async () => {
            // Restore UI elements if coming from home page
            restoreUIFromHomePage();
            localStorage.removeItem('isOnHomePage');
            const chapter = parseInt(item.dataset.chapter);
            currentChapter = chapter;
            localStorage.setItem('currentChapter', chapter);
            // Remove active class from all chapter items
            chaptersColumn.querySelectorAll('.number-item').forEach(c => c.classList.remove('active'));
            // Add active class to clicked chapter
            item.classList.add('active');
            // Get chapter data from cache (already loaded)
            const book = bibleBooks[currentBook];
            if (currentLanguage === 'both') {
                const englishBookFile = getBookFileForLanguage(book.file, 'english');
                const [tamilData, englishData] = await Promise.all([
                    bibleDataManager.getChapterData(book.file, chapter, 'tamil'),
                    bibleDataManager.getChapterData(englishBookFile, chapter, 'english')
                ]);
                if (tamilData && englishData) {
                    currentTamilData = { [`chapter_${chapter}`]: tamilData };
                    currentData = { [`chapter_${chapter}`]: englishData };
                }
            } else {
                const language = currentLanguage === 'tamil' ? 'tamil' : 'english';
                const bookFile = getBookFileForLanguage(book.file, language);
                const chapterData = await bibleDataManager.getChapterData(bookFile, chapter, language);
                if (chapterData) {
                    currentData = { [`chapter_${chapter}`]: chapterData };
                    currentTamilData = null;
                }
            }
            updateUI();
            // Scroll to top of content
            const contentArea = document.querySelector('.content-area');
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
            // Only scroll window on desktop (tablets and mobile have fixed headers)
            if (window.innerWidth > 1024) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}
// Update verses list
function updateVerses() {
    const versesColumn = document.querySelector('.verses-column');
    if (!versesColumn) {
        return;
    }
    // Safety check: if currentData is not loaded yet, skip update
    if (!currentData) {
        versesColumn.innerHTML = '';
        return;
    }
    const chapterKey = `chapter_${currentChapter}`;
    const chapterData = currentData[chapterKey];
    if (!chapterData) {
        versesColumn.innerHTML = '';
        return;
    }
    const verseCount = Object.keys(chapterData).length;
    const bookName = bibleBooks[currentBook].name;
    let html = '';
    for (let i = 1; i <= verseCount; i++) {
        const isMemVerse = isMemoryVerse(bookName, currentChapter, i);
        const hasMemoryVerse = isMemVerse ? ' has-memory-verse' : '';
        html += `<div class="number-item${hasMemoryVerse}" data-verse="${i}">${i}</div>`;
    }
    versesColumn.innerHTML = html;
    // Add click handlers for scrolling to verse
    versesColumn.querySelectorAll('.number-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Restore UI elements if coming from home page
            restoreUIFromHomePage();
            localStorage.removeItem('isOnHomePage');
            hasUserInteracted = true;
            localStorage.setItem('hasUserInteracted', 'true');
            const verse = parseInt(item.dataset.verse);
            
            // Check if bottom sheet is visible
            const existingBottomSheet = document.getElementById('verse-actions-bottom-sheet');
            const isBottomSheetVisible = existingBottomSheet && existingBottomSheet.classList.contains('visible');
            
            if (isBottomSheetVisible) {
                // Bottom sheet is open - close it and clear multi-highlights
                const wasSelected = item.classList.contains('active');
                const contentArea = document.querySelector('.scripture-text');
                
                // Close the bottom sheet
                existingBottomSheet.classList.remove('visible');
                document.body.classList.remove('bottom-sheet-open');
                
                // IMMEDIATELY remove or add highlight in the UI (using left-pane-selected grey color)
                if (wasSelected) {
                    // Remove highlight immediately from this verse
                    const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verse}"]`);
                    if (verseLine) {
                        verseLine.classList.remove('left-pane-selected');
                        verseLine.classList.remove('multi-highlighted');
                        verseLine.style.backgroundColor = '';
                    }
                } else {
                    // Add left-pane-selected color for newly selected verse
                    const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verse}"]`);
                    if (verseLine) {
                        verseLine.classList.add('left-pane-selected');
                        verseLine.classList.remove('multi-highlighted');
                    }
                }
                
                // Now toggle the verse selection state
                item.classList.toggle('active');
                
                // Get updated selected verses
                const updatedSelectedVerses = Array.from(versesColumn.querySelectorAll('.number-item.active')).map(v => parseInt(v.dataset.verse));
                if (wasSelected) {
                } else {
                }
                
                // Update all selected verses with left-pane-selected grey color and remove underline
                if (updatedSelectedVerses.length > 0) {
                    updatedSelectedVerses.forEach(vNum => {
                        const vLine = contentArea.querySelector(`.verse-line[data-verse="${vNum}"]`);
                        if (vLine) {
                            vLine.classList.add('left-pane-selected');
                            vLine.classList.remove('multi-highlighted');
                        }
                    });
                } else {
                    // No verses selected, remove all highlights
                    contentArea.querySelectorAll('.verse-line').forEach(v => {
                        v.classList.remove('left-pane-selected');
                        v.classList.remove('multi-highlighted');
                        v.style.backgroundColor = '';
                    });
                }
                
            } else {
                // Bottom sheet not open - just select this verse, don't open bottom sheet
                versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                item.classList.add('active');
                
                const contentArea = document.querySelector('.scripture-text');
                contentArea.querySelectorAll('.verse-line').forEach(v => {
                    v.classList.remove('left-pane-selected');
                    v.style.backgroundColor = '';
                });
                contentArea.querySelectorAll('.verse-container').forEach(v => {
                    v.classList.remove('left-pane-selected');
                    v.style.backgroundColor = '';
                });
                const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verse}"]`);
                const verseContainer = contentArea.querySelector(`.verse-container[data-verse="${verse}"]`);
                if (verseLine) {
                    verseLine.classList.add('left-pane-selected');
                }
                if (verseContainer) {
                    verseContainer.classList.add('left-pane-selected');
                }
            }
            
            // Close drawer on mobile after selecting verse
            if (window.innerWidth <= 768) {
                const drawerOverlay = document.querySelector('.drawer-overlay');
                const booksSidebar = document.querySelector('.books-sidebar');
                const chaptersColumn = document.querySelector('.chapters-column');
                const versesCol = document.querySelector('.verses-column');
                const menuBtn = document.querySelector('.mobile-only');
                if (drawerOverlay && menuBtn) {
                    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
                    const closeIcon = menuBtn.querySelector('.close-icon');
                    drawerOverlay.classList.remove('active');
                    booksSidebar.classList.remove('drawer-open');
                    chaptersColumn.classList.remove('drawer-open');
                    versesCol.classList.remove('drawer-open');
                    hamburgerIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                    document.body.style.overflow = '';
                }
            }
            // Always scroll to verse, even if already selected
            scrollToVerse(verse);
        });
    });
}
// Highlight special text
function highlightSpecialText(text, language) {
    if (language === 'english' || language === 'both-english') {
        // Highlight "Jesus Christ" and "Jesus" in soft red
        text = text.replace(/\bJesus Christ\b/g, '<span class="jesus-name">Jesus Christ</span>');
        text = text.replace(/\bJesus\b/g, '<span class="jesus-name">Jesus</span>');
    }
    return text;
}
// Display chapter content
function displayChapter() {
    const contentArea = document.querySelector('.scripture-text');
    // Update mobile chapter header
    updateMobileChapterHeader();
    // Safety check: if currentData is not loaded yet, skip display
    if (!currentData) {
        contentArea.innerHTML = '<p>Loading...</p>';
        return;
    }
    const chapterKey = `chapter_${currentChapter}`;
    const chapterData = currentData[chapterKey];
    if (!chapterData) {
        contentArea.innerHTML = '<p>Chapter not found</p>';
        return;
    }
    let html = '';
    const verses = Object.keys(chapterData).sort((a, b) => {
        const numA = parseInt(a.replace('verse_', ''));
        const numB = parseInt(b.replace('verse_', ''));
        return numA - numB;
    });
    const bookName = bibleBooks[currentBook].name;
    if (currentLanguage === 'both' && currentTamilData) {
        // Display both Tamil and English
        const tamilChapterData = currentTamilData[chapterKey];
        verses.forEach(verseKey => {
            const verseNum = verseKey.replace('verse_', '');
            let tamilText = tamilChapterData ? tamilChapterData[verseKey] : '';
            let englishText = chapterData[verseKey];
            // Apply highlighting
            tamilText = highlightSpecialText(tamilText, 'both-tamil');
            englishText = highlightSpecialText(englishText, 'both-english');
            const isMemVerse = isMemoryVerse(bookName, currentChapter, parseInt(verseNum));
            const memoryVerseClass = isMemVerse ? ' memory-verse' : '';
            const tooltip = isMemVerse ? ' title="Memory Verse"' : '';
            html += `<div class="verse-container" data-verse="${verseNum}">
                <p class="verse-line${memoryVerseClass}" data-verse="${verseNum}"${tooltip}>
                    <sup class="v-num">${verseNum}</sup><span class="tamil-text">${tamilText}</span><br>
                    <span class="english-text ${englishTextColor}">${englishText}</span>
                </p>
            </div>`;
        });
    } else {
        // Display single language
        verses.forEach(verseKey => {
            const verseNum = verseKey.replace('verse_', '');
            let verseText = chapterData[verseKey];
            // Apply highlighting based on current language
            verseText = highlightSpecialText(verseText, currentLanguage);
            const isMemVerse = isMemoryVerse(bookName, currentChapter, parseInt(verseNum));
            const memoryVerseClass = isMemVerse ? ' memory-verse' : '';
            const tooltip = isMemVerse ? ' title="Memory Verse"' : '';
            html += `<div class="verse-container" data-verse="${verseNum}">
                <p class="verse-line${memoryVerseClass}" data-verse="${verseNum}"${tooltip}><sup class="v-num">${verseNum}</sup>${verseText}</p>
            </div>`;
        });
    }
    contentArea.innerHTML = html;
    
    // Add click handlers to verse containers to show bottom sheet
    contentArea.querySelectorAll('.verse-container').forEach(container => {
        const verseLine = container.querySelector('.verse-line');
        const verseNum = parseInt(container.dataset.verse);
        
        // Handle verse line click to show bottom sheet
        let tapTimeout;
        let tapCount = 0;
        
        verseLine.addEventListener('click', (e) => {
            e.stopPropagation();
            tapCount++;
            
            if (tapCount === 1) {
                tapTimeout = setTimeout(() => {
                    // Single tap - show or update bottom sheet
                    const versesColumn = document.querySelector('.verses-column');
                    
                    // Get current selected verses BEFORE making changes
                    const selectedVerses = Array.from(versesColumn.querySelectorAll('.number-item.active')).map(item => parseInt(item.dataset.verse));
                    
                    // Check if bottom sheet already exists and is visible
                    const existingBottomSheet = document.getElementById('verse-actions-bottom-sheet');
                    const isBottomSheetVisible = existingBottomSheet && existingBottomSheet.classList.contains('visible');
                    
                    // If bottom sheet is open, handle multi-verse selection
                    if (isBottomSheetVisible) {
                        const verseItem = versesColumn.querySelector(`.number-item[data-verse="${verseNum}"]`);
                        const wasSelected = verseItem && verseItem.classList.contains('active');
                        const contentArea = document.querySelector('.scripture-text');
                        
                        // IMMEDIATELY remove or update highlighting in DOM before doing anything else
                        if (wasSelected) {
                            // Remove highlight immediately from this verse
                            const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verseNum}"]`);
                            const verseContainer = contentArea.querySelector(`.verse-container[data-verse="${verseNum}"]`);
                            if (verseLine) {
                                verseLine.classList.remove('multi-highlighted');
                                verseLine.classList.remove('left-pane-selected');
                                verseLine.style.backgroundColor = '';
                            }
                            if (verseContainer) {
                                verseContainer.classList.remove('multi-highlighted');
                                verseContainer.classList.remove('left-pane-selected');
                                verseContainer.style.backgroundColor = '';
                            }
                        }
                        
                        // Now toggle the verse selection
                        if (verseItem) {
                            verseItem.classList.toggle('active');
                        }
                        
                        // Get updated selected verses after toggle
                        const updatedSelectedVerses = Array.from(versesColumn.querySelectorAll('.number-item.active')).map(item => parseInt(item.dataset.verse));
                        
                        // Update highlighting based on selection count
                        // For manual selections in main content, use multi-highlighted class
                        if (updatedSelectedVerses.length > 0) {
                            // First, remove all highlights
                            contentArea.querySelectorAll('.verse-line').forEach(v => {
                                v.classList.remove('highlighted');
                                v.classList.remove('multi-highlighted');
                                v.classList.remove('left-pane-selected');
                            });
                            
                            // Then add multi-highlighted to all selected verses
                            updatedSelectedVerses.forEach(vNum => {
                                const verseLine = contentArea.querySelector(`.verse-line[data-verse="${vNum}"]`);
                                if (verseLine) {
                                    verseLine.classList.add('multi-highlighted');
                                }
                            });
                        } else {
                            // No verses selected: remove all highlights
                            contentArea.querySelectorAll('.verse-line').forEach(v => {
                                v.classList.remove('highlighted');
                                v.classList.remove('multi-highlighted');
                                v.classList.remove('left-pane-selected');
                                v.style.backgroundColor = '';
                            });
                        }
                        
                        // Debug: Check what verse elements exist
                        const allVerseElements = contentArea.querySelectorAll('.verse-line');
                        // Debug: Show all highlighted verses after update
                        const allHighlighted = contentArea.querySelectorAll('.verse-line.highlighted');
                        // Update the bottom sheet with current selections
                        if (updatedSelectedVerses.length > 1) {
                            // Multiple verses selected
                            const copyBtn = existingBottomSheet.querySelector('.copy-multi-verses-action');
                            if (!copyBtn) {
                                // It's a single-verse sheet, recreate as multi-verse
                                existingBottomSheet.classList.remove('visible');
                                document.body.classList.remove('bottom-sheet-open');
                                showMultiVerseActionsBottomSheet(updatedSelectedVerses);
                            } else {
                                // Already a multi-verse sheet, just update it
                                updateMultiVerseActionsBottomSheet(updatedSelectedVerses);
                            }
                        } else if (updatedSelectedVerses.length === 1) {
                            // Single verse - update the existing sheet
                            updateSingleVerseActionsBottomSheet(updatedSelectedVerses[0]);
                        } else {
                            // No verses selected, close bottom sheet
                            existingBottomSheet.classList.remove('visible');
                            document.body.classList.remove('bottom-sheet-open');
                        }
                    } else {
                        // Bottom sheet not open yet - select the first verse and show bottom sheet
                        // Remove all other active classes
                        versesColumn.querySelectorAll('.number-item').forEach(item => item.classList.remove('active'));
                        const contentArea = document.querySelector('.scripture-text');
                        contentArea.querySelectorAll('.verse-line').forEach(v => {
                            if (v.classList.contains('highlighted')) {
                                v.classList.remove('highlighted');
                                v.style.backgroundColor = '';
                            }
                        });
                        
                        // Select only the clicked verse
                        const verseItem = versesColumn.querySelector(`.number-item[data-verse="${verseNum}"]`);
                        if (verseItem) {
                            verseItem.classList.add('active');
                        }
                        
                        // Add highlight to clicked verse only
                        const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verseNum}"]`);
                        if (verseLine) {
                            verseLine.classList.add('multi-highlighted');
                        }
                        // Show bottom sheet for single verse
                        showVerseActionsBottomSheet(verseNum);
                    }
                    
                    tapCount = 0;
                }, 300);
            } else if (tapCount === 2) {
                clearTimeout(tapTimeout);
                // Double tap - show note viewer for this verse
                const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
                const note = verseNotes[noteKey];
                // Show the note viewer if note exists and has text
                if (note && note.text && note.text.trim()) {
                    showNoteViewer(verseNum, note);
                }
                tapCount = 0;
            }
        });
        
        // Note: Right-click/long-press context menu removed
    });
    
    // Apply note displays to verses
    applyAllNoteDisplays();
    // Update mobile chapter header
    updateMobileChapterHeader();
    // Update navigation text
    const currentChapterText = document.querySelector('.current-chapter');
    if (currentChapterText) {
        const book = bibleBooks[currentBook];
        let bookName;
        if (currentLanguage === 'tamil') {
            // Use short Tamil name on mobile if available
            bookName = window.innerWidth <= 768 ? (book.tamilShortName || book.tamilName) : book.tamilName;
        } else if (currentLanguage === 'both') {
            // On mobile, use short English name for space
            if (window.innerWidth <= 768) {
                bookName = book.shortName || book.name;
            } else {
                bookName = `${book.name} / ${book.tamilName}`;
            }
        } else {
            // Use short name on mobile, full name on desktop
            bookName = window.innerWidth <= 768 ? (book.shortName || book.name) : book.name;
        }
        currentChapterText.textContent = `${bookName} ${currentChapter}`;
    }
    // Note: Scroll to top is now handled by updateUI() and navigation buttons only
    // Don't scroll here to prevent jumping when interacting with verses or adding notes
}
// Update mobile chapter header
function updateMobileChapterHeader() {
    const mobileHeader = document.getElementById('mobile-chapter-header');
    if (!mobileHeader) return;
    const book = bibleBooks[currentBook];
    const titleElement = mobileHeader.querySelector('.mobile-chapter-title');
    const numberElement = mobileHeader.querySelector('.mobile-chapter-number');
    if (titleElement && numberElement) {
        // Set book name based on language
        let bookName = book.name;
        if (currentLanguage === 'tamil') {
            bookName = book.tamilName;
        } else if (currentLanguage === 'both') {
            bookName = book.name; // Use English for "both" mode
        }
        titleElement.textContent = bookName;
        numberElement.textContent = currentChapter;
    }
}

// Handle swipe gesture for verse actions
// Show color picker for bookmark selection
async function showColorPickerForBookmark(verseNum, bookmarkBtn) {
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    const buttonsContainer = bottomSheet.querySelector('.verse-actions-buttons');
    const currentColor = verseNotes[noteKey]?.color;
    
    // Get or create color picker container
    let colorPickerContainer = buttonsContainer.querySelector('.bookmark-color-picker-container');
    if (!colorPickerContainer) {
        colorPickerContainer = document.createElement('div');
        colorPickerContainer.className = 'bookmark-color-picker-container';
        colorPickerContainer.style.display = 'flex';
        colorPickerContainer.style.width = '100%';
        colorPickerContainer.style.justifyContent = 'center';
        colorPickerContainer.style.padding = '10px 0';
        colorPickerContainer.style.marginTop = '10px';
        colorPickerContainer.style.borderTop = '1px solid #e0e0e0';
        colorPickerContainer.innerHTML = `
            <div class="color-picker-scroll">
                <button class="color-option" data-color="burgundy" style="background: #78aaff !important;" title="Blue"></button>
                <button class="color-option" data-color="forest" style="background: #e6c45a !important;" title="Gold"></button>
                <button class="color-option" data-color="navy" style="background: #72e6a4 !important;" title="Mint"></button>
                <button class="color-option" data-color="amber" style="background: #ff8fc1 !important;" title="Rose"></button>
                <button class="color-option" data-color="violet" style="background: #ff9a54 !important;" title="Orange"></button>
                <button class="color-option" data-color="teal" style="background: #b38aff !important;" title="Purple"></button>
                <button class="color-option" data-color="rust" style="background: #5ed0d9 !important;" title="Teal"></button>
                <button class="color-option" data-color="olive" style="background: #ff7a7a !important;" title="Red"></button>
                <button class="color-option" data-color="indigo" style="background: #b4c76f !important;" title="Olive"></button>
                <button class="color-option" data-color="slate" style="background: #9d9d9d !important;" title="Grey"></button>
                <button class="color-option" data-color="yellow" style="background: #78aaff !important;" title="Blue"></button>
                <button class="color-option" data-color="green" style="background: #e6c45a !important;" title="Gold"></button>
            </div>
        `;
        buttonsContainer.appendChild(colorPickerContainer);
    }
    
    // Always show the color picker (don't toggle it)
    colorPickerContainer.style.display = 'flex';
    
    // Remove previous event listeners and add new ones
    const colorOptions = colorPickerContainer.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
    });
    
    // Add event listeners to color options
    colorPickerContainer.querySelectorAll('.color-option').forEach(colorBtn => {
        colorBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const selectedColor = colorBtn.dataset.color;
            
            // Remove checkmark from all color options
            colorPickerContainer.querySelectorAll('.color-checkmark').forEach(checkmark => {
                checkmark.remove();
            });
            
            // Create or update note entry with selected color
            if (!verseNotes[noteKey]) {
                verseNotes[noteKey] = {
                    text: '',
                    color: selectedColor,
                    book: bibleBooks[currentBook].name,
                    chapter: currentChapter,
                    verse: verseNum,
                    timestamp: new Date().toISOString()
                };
            } else {
                verseNotes[noteKey].color = selectedColor;
            }
            
            // Add the color highlight to the verse in the UI
            const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
            if (verseLine) {
                // Remove all color classes
                verseLine.classList.remove('note-burgundy', 'note-forest', 'note-navy', 'note-amber', 'note-violet', 'note-teal', 'note-rust', 'note-olive', 'note-indigo', 'note-slate', 'note-yellow', 'note-green', 'note-blue', 'note-pink', 'note-orange', 'note-purple');
                // Add has-note class and new color class
                verseLine.classList.add('has-note', `note-${selectedColor}`);
                // Add animation for visual feedback
                verseLine.style.animation = 'highlightPulse 0.5s ease-out';
            }
            
            // Update button state with the color
            bookmarkBtn.classList.add('bookmarked');
            bookmarkBtn.setAttribute('data-bookmark-color', selectedColor);
            const colorHex = colorBtn.style.background;
            bookmarkBtn.style.setProperty('--bookmark-color', colorHex);
            
            // Add checkmark to selected color
            const checkmark = document.createElement('div');
            checkmark.className = 'color-checkmark';
            checkmark.innerHTML = '✓';
            colorBtn.appendChild(checkmark);
            
            // Save changes
            localStorage.setItem('verseNotes', JSON.stringify(verseNotes));
            try {
                await saveNotesToSupabase();
            } catch (error) {
            }
            
            // Close the color picker after selection
            setTimeout(() => {
                colorPickerContainer.style.display = 'none';
            }, 300);
        });
    });
}

// Universal copy handler for both single and multi-verse
function handleVersesCopy(copyBtn) {
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    const contentArea = document.querySelector('.scripture-text');
    const book = bibleBooks[currentBook];
    const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
    
    // Determine if it's single or multi-verse based on button class
    const isSingleVerse = copyBtn.classList.contains('copy-verse-action');
    const isMultiVerse = copyBtn.classList.contains('copy-multi-verses-action');
    
    let copyText = '';
    let versesToCopy = [];
    
    if (isSingleVerse) {
        // Single verse - get verse number from data attribute
        const verseNum = parseInt(copyBtn.getAttribute('data-verse'));
        const verseElement = contentArea.querySelector(`.verse-line[data-verse="${verseNum}"]`);
        
        if (verseElement) {
            const verseText = verseElement.textContent || '';
            const cleanVerseText = verseText.trim().replace(/^\d+/, '').trim();
            versesToCopy.push({verseNum, text: cleanVerseText});
            copyText = `[${verseNum}] ${cleanVerseText}\n\n${bookName} ${currentChapter} : ${verseNum}`;
        }
    } else if (isMultiVerse) {
        // Multi-verse - get all multi-highlighted verses
        const highlightedVerses = Array.from(contentArea.querySelectorAll('.verse-line.multi-highlighted'));
        const verseNumbers = [];
        highlightedVerses.forEach((verseLine, index) => {
            const verseNum = verseLine.getAttribute('data-verse');
            verseNumbers.push(verseNum);
            const verseText = verseLine.textContent || '';
            const cleanVerseText = verseText.trim().replace(/^\d+/, '').trim();
            versesToCopy.push({verseNum, text: cleanVerseText});
            // Add verse reference with text and space between verses
            if (index > 0) {
                copyText += '\n'; // Space between verses
            }
            copyText += `[${verseNum}] ${cleanVerseText}\n`;
        });
        
        // Add book chapter and verse range
        const verseRange = verseNumbers.length > 1 
            ? `${verseNumbers[0]} - ${verseNumbers[verseNumbers.length - 1]}`
            : verseNumbers[0];
        copyText += `\n${bookName} ${currentChapter} : ${verseRange}`;
    }
    // Add animation
    copyBtn.style.transform = 'scale(0.9)';
    copyBtn.style.opacity = '0.7';
    
    navigator.clipboard.writeText(copyText).then(() => {
        showToast(isSingleVerse ? 'Copied...' : 'Verses copied...', 'success');
        // Restore animation
        setTimeout(() => {
            copyBtn.style.transform = 'scale(1)';
            copyBtn.style.opacity = '1';
            
            // Remove highlights from selected verses
            if (isMultiVerse) {
                const highlightedVerses = Array.from(contentArea.querySelectorAll('.verse-line.multi-highlighted'));
                highlightedVerses.forEach(verseLine => {
                    verseLine.classList.remove('multi-highlighted');
                    verseLine.style.backgroundColor = '';
                });
                
                // Clear selectedVerses array
                selectedVerses = [];
                
                // Update left pane active states
                const leftPane = document.querySelector('.verses-column');
                if (leftPane) {
                    leftPane.querySelectorAll('.verse-number.active').forEach(el => {
                        el.classList.remove('active');
                    });
                }
            }
            
            // Close bottom sheet
            if (bottomSheet) {
                bottomSheet.classList.remove('visible');
                document.body.classList.remove('bottom-sheet-open');
            }
        }, 300);
    }).catch((err) => {
        showToast(isSingleVerse ? 'Failed to copy verse' : 'Failed to copy verses', 'error');
        
        // Restore animation on error
        copyBtn.style.transform = 'scale(1)';
        copyBtn.style.opacity = '1';
    });
}


// Show verse actions in a bottom sheet modal
function showVerseActionsBottomSheet(verseNum) {
    // Create or get the bottom sheet modal
    let bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (!bottomSheet) {
        bottomSheet = document.createElement('div');
        bottomSheet.id = 'verse-actions-bottom-sheet';
        bottomSheet.className = 'verse-actions-bottom-sheet';
        document.body.appendChild(bottomSheet);
    }
    
    // Build the complete verse reference (e.g., "Matthew 1 : 1")
    const book = bibleBooks[currentBook];
    const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
    const verseReference = `${bookName} ${currentChapter} : ${verseNum}`;
    
    // Set up the bottom sheet content
    bottomSheet.innerHTML = `
        <div class="verse-actions-backdrop"></div>
        <div class="verse-actions-content">
            <div class="grab-handle"></div>
            <div class="verse-actions-header">
                <div class="verse-reference">${verseReference}</div>
                <button class="close-bottom-sheet" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="verse-actions-buttons">
                <button class="verse-bottom-action copy-verse-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <span>Copy</span>
                </button>
                ${isAdmin() ? `
                <button class="verse-bottom-action add-note-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span>Note</span>
                </button>
                ` : ''}
                ${isAdmin() ? `
                <button class="verse-bottom-action add-sermon-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Sermon</span>
                </button>
                ` : ''}
                <button class="verse-bottom-action add-favorite-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Bookmark</span>
                </button>
                <button class="verse-bottom-action add-memory-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 21H9v-2a6 6 0 0 1 6 0v2Z"></path>
                        <path d="M17 13a5 5 0 0 0-10 0"></path>
                        <path d="M12 5V2m5 3l-3.5-3.5M7 8L3.5 4.5"></path>
                    </svg>
                    <span>Memory</span>
                </button>
                <button class="verse-bottom-action share-verse-action" data-verse="${verseNum}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    <span>Share</span>
                </button>
            </div>
        </div>
    `;
    
    // Show the bottom sheet
    bottomSheet.classList.add('visible');
    document.body.classList.add('bottom-sheet-open');
    
    // Add event listeners
    const closeBtn = bottomSheet.querySelector('.close-bottom-sheet');
    const backdrop = bottomSheet.querySelector('.verse-actions-backdrop');
    
    const closeBottomSheet = () => {
        // Restore hidden buttons if color picker was active
        const buttonsContainer = bottomSheet.querySelector('.verse-actions-buttons');
        if (buttonsContainer) {
            const hiddenButtons = buttonsContainer.querySelectorAll('.verse-bottom-action[style*="opacity: 0"]');
            if (hiddenButtons.length > 0) {
                hiddenButtons.forEach(btn => {
                    btn.style.animation = '';
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'auto';
                });
            }
        }
        
        bottomSheet.classList.remove('visible');
        document.body.classList.remove('bottom-sheet-open');
        
        // Deselect all verses when closing bottom sheet
        const versesColumn = document.querySelector('.verses');
        if (versesColumn) {
            versesColumn.querySelectorAll('.number-item').forEach(item => item.classList.remove('active'));
        }
        
        const contentArea = document.querySelector('.scripture-text');
        if (contentArea) {
            contentArea.querySelectorAll('.verse-line').forEach(v => {
                v.classList.remove('multi-highlighted');
            });
        }
    };
    
    closeBtn.addEventListener('click', closeBottomSheet);
    backdrop.addEventListener('click', closeBottomSheet);
    
    // Setup scrollbar visibility for action buttons
    const setupScrollbarVisibility = () => {
        const buttonsContainer = bottomSheet.querySelector('.verse-actions-buttons');
        if (!buttonsContainer) return;
        
        let scrollbarTimeout;
        
        const showScrollbar = () => {
            buttonsContainer.classList.add('show-scrollbar');
            clearTimeout(scrollbarTimeout);
            scrollbarTimeout = setTimeout(() => {
                buttonsContainer.classList.remove('show-scrollbar');
            }, 500);
        };
        
        buttonsContainer.addEventListener('scroll', showScrollbar, { passive: true });
    };
    
    setupScrollbarVisibility();
    
    // Copy verse button
    bottomSheet.querySelector('.copy-verse-action').addEventListener('click', function() {
        handleVersesCopy(this);
        
        // Clear verse selection for single-verse copy
        const versesColumn = document.querySelector('.verses-column');
        if (versesColumn) {
            versesColumn.querySelectorAll('.number-item.active').forEach(item => item.classList.remove('active'));
        }
    });
    
    // Add note button (only if admin access enabled)
    const noteBtn = bottomSheet.querySelector('.add-note-action');
    if (noteBtn) {
        noteBtn.addEventListener('click', () => {
            openNotesModal(verseNum);
            closeBottomSheet();
        });
    }
    
    // Add sermon button (only if admin access enabled)
    const sermonBtn = bottomSheet.querySelector('.add-sermon-action');
    if (sermonBtn) {
        sermonBtn.addEventListener('click', () => {
            closeBottomSheet();
            
            // Get all selected verses from the verses column
            const versesColumn = document.querySelector('.verses-column');
            const selectedVerseElements = versesColumn.querySelectorAll('.number-item.active');
            const selectedVerses = Array.from(selectedVerseElements).map(item => {
                const verseNum = parseInt(item.dataset.verse);
                return {
                    book: bibleBooks[currentBook].name,
                    chapter: currentChapter,
                    verse: verseNum,
                    display: `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`
                };
            });
            
            // If no verses are selected, add the current verse only
            const versesToAdd = selectedVerses.length > 0 ? selectedVerses : [{
                book: bibleBooks[currentBook].name,
                chapter: currentChapter,
                verse: verseNum,
                display: `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`
            }];
            
            // Show sermon selection sheet
            showSermonSelectionSheet(versesToAdd);
        });
    }
    
    // Add bookmark button
    const bookmarkBtn = bottomSheet.querySelector('.add-favorite-action');
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    
    // Check if verse has a color and update button appearance
    if (verseNotes[noteKey] && verseNotes[noteKey].color) {
        bookmarkBtn.classList.add('bookmarked');
        const color = verseNotes[noteKey].color;
        bookmarkBtn.setAttribute('data-bookmark-color', color);
        // Set the bookmark color - will be updated when color picker is shown
        const colorMap = {
            'burgundy': '#78aaff',
            'forest': '#e6c45a',
            'navy': '#72e6a4',
            'amber': '#ff8fc1',
            'violet': '#ff9a54',
            'teal': '#b38aff',
            'rust': '#5ed0d9',
            'olive': '#ff7a7a',
            'indigo': '#b4c76f',
            'slate': '#9d9d9d',
            'yellow': '#78aaff',
            'green': '#e6c45a'
        };
        const colorHex = colorMap[color] || '#d4a04c';
        bookmarkBtn.style.setProperty('--bookmark-color', colorHex);
    } else {
        bookmarkBtn.classList.remove('bookmarked');
        bookmarkBtn.removeAttribute('data-bookmark-color');
    }
    
    bookmarkBtn.addEventListener('click', async () => {
        // If already bookmarked (has color), remove the bookmark
        if (verseNotes[noteKey] && verseNotes[noteKey].color) {
            const oldColor = verseNotes[noteKey].color;
            verseNotes[noteKey].color = null;
            
            // Remove the color highlight from the verse in the UI
            const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
            if (verseLine) {
                // Add fade out animation first
                verseLine.style.animation = 'fadeOutHighlight 0.4s ease-out forwards';
                
                // After animation, remove the classes
                setTimeout(() => {
                    verseLine.classList.remove('note-burgundy', 'note-forest', 'note-navy', 'note-amber', 'note-violet', 'note-teal', 'note-rust', 'note-olive', 'note-indigo', 'note-slate', 'note-yellow', 'note-green', 'note-blue', 'note-pink', 'note-orange', 'note-purple');
                    
                    // If no text, remove the note entirely and remove the has-note class
                    if (!verseNotes[noteKey].text) {
                        delete verseNotes[noteKey];
                        verseLine.classList.remove('has-note', 'has-text');
                    }
                    
                    // Clear animation after removal
                    verseLine.style.animation = '';
                }, 400);
            }
            
            bookmarkBtn.classList.remove('bookmarked');
            bookmarkBtn.removeAttribute('data-bookmark-color');
            bookmarkBtn.style.removeProperty('--bookmark-color');
            
            // Save changes
            localStorage.setItem('verseNotes', JSON.stringify(verseNotes));
            try {
                await saveNotesToSupabase();
            } catch (error) {
            }
        } else {
            // Show color picker for new bookmark
            showColorPickerForBookmark(verseNum, bookmarkBtn);
        }
    });
    
    // Add memory verse button
    // Add memory verse button with dynamic state
    const memoryBtn = bottomSheet.querySelector('.add-memory-action');
    
    // Function to update memory verse button appearance
    const updateMemoryButtonAppearance = (isMemory) => {
        const svgIcon = memoryBtn.querySelector('svg');
        
        if (isMemory) {
            memoryBtn.classList.add('memory-verse-active');
            // Show filled star
            if (svgIcon) {
                svgIcon.innerHTML = '<path d="M12 2l3.618 7.323L24 9.127l-6 5.845 1.418 8.268L12 20.309l-7.418 3.931L6 15.972 0 10.127l8.382-0.196L12 2z" fill="currentColor"/>';
                svgIcon.style.display = 'block';
            }
        } else {
            memoryBtn.classList.remove('memory-verse-active');
            // Show outline star
            if (svgIcon) {
                svgIcon.innerHTML = '<path d="M12 2l3.618 7.323L24 9.127l-6 5.845 1.418 8.268L12 20.309l-7.418 3.931L6 15.972 0 10.127l8.382-0.196L12 2z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="miter"/>';
                svgIcon.style.display = 'block';
            }
        }
    };
    
    // Check if this verse is a memory verse and update button appearance
    const memoryVerseRef = `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`;
    const isMemory = isMemoryVerse(bibleBooks[currentBook].name, currentChapter, verseNum);
    updateMemoryButtonAppearance(isMemory);
    
    memoryBtn.addEventListener('click', async () => {
        currentNoteVerse = verseNum;
        await toggleMemoryVerse();
        
        // Update button appearance after toggling
        const isNowMemory = isMemoryVerse(bibleBooks[currentBook].name, currentChapter, verseNum);
        updateMemoryButtonAppearance(isNowMemory);
    });
    
    // Share verse button
    bottomSheet.querySelector('.share-verse-action').addEventListener('click', () => {
        const book = bibleBooks[currentBook];
        const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
        const verseText = document.querySelector(`.verse-line[data-verse="${verseNum}"]`)?.textContent || '';
        const cleanVerseText = verseText.trim().replace(/^\d+/, '').trim();
        const shareText = `[${verseNum}] ${cleanVerseText}\n\n${bookName} ${currentChapter} : ${verseNum}`;
        
        if (navigator.share) {
            navigator.share({
                title: `${bookName} ${currentChapter} : ${verseNum}`,
                text: shareText
            }).catch(() => {
                // User cancelled share
            });
        } else {
            // Fallback: copy to clipboard if share API not available
            navigator.clipboard.writeText(shareText).then(() => {
                showToast('Verse copied to clipboard!', 'success');
                closeBottomSheet();
            }).catch(() => {
                showToast('Share not available on this device', 'error');
            });
        }
    });
}

// Show bottom sheet for multiple selected verses
function showMultiVerseActionsBottomSheet(selectedVerses) {
    // Create or get the bottom sheet modal
    let bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (!bottomSheet) {
        bottomSheet = document.createElement('div');
        bottomSheet.id = 'verse-actions-bottom-sheet';
        bottomSheet.className = 'verse-actions-bottom-sheet';
        document.body.appendChild(bottomSheet);
    }
    
    // Build the verse reference (only book and chapter for multi-verse, no verse numbers)
    const book = bibleBooks[currentBook];
    const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
    const verseReference = `${bookName} ${currentChapter}`;
    
    // Set up the bottom sheet content with all actions
    bottomSheet.innerHTML = `
        <div class="verse-actions-backdrop"></div>
        <div class="verse-actions-content">
            <div class="grab-handle"></div>
            <div class="verse-actions-header">
                <div class="verse-reference">${verseReference}</div>
                <button class="close-bottom-sheet" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="verse-actions-buttons">
                <button class="verse-bottom-action copy-multi-verses-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <span>Copy</span>
                </button>
                ${isAdmin() ? `
                <button class="verse-bottom-action add-note-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span>Note</span>
                </button>
                ` : ''}
                ${isAdmin() ? `
                <button class="verse-bottom-action add-sermon-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                    <span>Sermon</span>
                </button>
                ` : ''}
                <button class="verse-bottom-action add-favorite-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Bookmark</span>
                </button>
                <button class="verse-bottom-action add-memory-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 21H9v-2a6 6 0 0 1 6 0v2Z"></path>
                        <path d="M17 13a5 5 0 0 0-10 0"></path>
                        <path d="M12 5V2m5 3l-3.5-3.5M7 8L3.5 4.5"></path>
                    </svg>
                    <span>Memory</span>
                </button>
                <button class="verse-bottom-action share-verses-action">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    <span>Share</span>
                </button>
            </div>
        </div>
    `;
    
    // Show the bottom sheet
    bottomSheet.classList.add('visible');
    document.body.classList.add('bottom-sheet-open');
    
    // Add event listeners
    const closeBtn = bottomSheet.querySelector('.close-bottom-sheet');
    const backdrop = bottomSheet.querySelector('.verse-actions-backdrop');
    
    const closeBottomSheet = () => {
        bottomSheet.classList.remove('visible');
        document.body.classList.remove('bottom-sheet-open');
        
        // Deselect all verses when closing bottom sheet
        const versesColumn = document.querySelector('.verses');
        if (versesColumn) {
            versesColumn.querySelectorAll('.number-item').forEach(item => item.classList.remove('active'));
        }
        
        const contentArea = document.querySelector('.scripture-text');
        if (contentArea) {
            contentArea.querySelectorAll('.verse-line').forEach(v => {
                v.classList.remove('multi-highlighted');
            });
        }
    };
    
    closeBtn.addEventListener('click', closeBottomSheet);
    backdrop.addEventListener('click', closeBottomSheet);
    
    // Setup scrollbar visibility for action buttons
    const setupScrollbarVisibility = () => {
        const buttonsContainer = bottomSheet.querySelector('.verse-actions-buttons');
        if (!buttonsContainer) return;
        
        let scrollbarTimeout;
        
        const showScrollbar = () => {
            buttonsContainer.classList.add('show-scrollbar');
            clearTimeout(scrollbarTimeout);
            scrollbarTimeout = setTimeout(() => {
                buttonsContainer.classList.remove('show-scrollbar');
            }, 500);
        };
        
        buttonsContainer.addEventListener('scroll', showScrollbar, { passive: true });
    };
    
    setupScrollbarVisibility();
    
    // Copy multiple verses button
    const copyBtn = bottomSheet.querySelector('.copy-multi-verses-action');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            handleVersesCopy(this);
        });
    }
    
    // Add note button
    const noteBtn = bottomSheet.querySelector('.add-note-action');
    if (noteBtn) {
        // Disable for multi-verse
        noteBtn.disabled = true;
        noteBtn.style.opacity = '0.5';
        noteBtn.style.cursor = 'not-allowed';
        noteBtn.addEventListener('click', () => {
            // For multi-verse, open note for first verse
            currentNoteVerse = selectedVerses[0];
            openNotesModal(selectedVerses[0]);
            closeBottomSheet();
        });
    }
    
    // Add memory verse button
    const memoryBtn = bottomSheet.querySelector('.add-memory-action');
    if (memoryBtn) {
        // Disable for multi-verse - show as active/filled star
        memoryBtn.disabled = true;
        memoryBtn.style.opacity = '0.5';
        memoryBtn.style.cursor = 'not-allowed';
        
        // Update to show filled star icon (active state)
        const svgIcon = memoryBtn.querySelector('svg');
        if (svgIcon) {
            // Filled star icon
            svgIcon.innerHTML = '<path d="M12 2l3.618 7.323L24 9.127l-6 5.845 1.418 8.268L12 20.309l-7.418 3.931L6 15.972 0 10.127l8.382-0.196L12 2z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="miter"/>';
        }
        
        memoryBtn.addEventListener('click', async () => {
            // For multi-verse, toggle memory for first verse
            currentNoteVerse = selectedVerses[0];
            await toggleMemoryVerse();
            closeBottomSheet();
        });
    }
    
    // Add sermon button (only if admin access enabled)
    const multiSermonBtn = bottomSheet.querySelector('.add-sermon-action');
    if (multiSermonBtn) {
        multiSermonBtn.addEventListener('click', () => {
            closeBottomSheet();
            
            // For multi-select, use the selectedVerses array
            const versesToAdd = selectedVerses.map(verseNum => ({
                book: bibleBooks[currentBook].name,
                chapter: currentChapter,
                verse: verseNum,
                display: `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`
            }));
            
            // Show sermon selection sheet
            showSermonSelectionSheet(versesToAdd);
        });
    }
    
    // Add bookmark button (color picker for all selected verses)
    const bookmarkBtn = bottomSheet.querySelector('.add-favorite-action');
    const firstVerse = selectedVerses[0];
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${firstVerse}`;
    
    // Check if first verse has a color
    if (verseNotes[noteKey] && verseNotes[noteKey].color) {
        bookmarkBtn.classList.add('bookmarked');
    }
    
    bookmarkBtn.addEventListener('click', async () => {
        showColorPickerForMultiBookmark(selectedVerses, bookmarkBtn);
    });
    
    // Share button
    const shareBtn = bottomSheet.querySelector('.share-verses-action');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const book = bibleBooks[currentBook];
            const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
            
            // Get all highlighted verses from the text area
            const contentArea = document.querySelector('.scripture-text');
            const highlightedVerses = Array.from(contentArea.querySelectorAll('.verse-line.highlighted'));
            
            let shareText = '';
            highlightedVerses.forEach(verseLine => {
                const verseText = verseLine.textContent || '';
                const cleanVerseText = verseText.trim().replace(/^\d+/, '').trim();
                shareText += `${cleanVerseText}\n`;
            });
            shareText += `\n${bookName} ${currentChapter}`;
            
            if (navigator.share) {
                navigator.share({
                    title: `${bookName} ${currentChapter}`,
                    text: shareText
                }).catch(() => {
                    // User cancelled share
                });
            } else {
                navigator.clipboard.writeText(shareText).then(() => {
                    showToast('Verses copied to clipboard!', 'success');
                    closeBottomSheet();
                }).catch(() => {
                    showToast('Share not available on this device', 'error');
                });
            }
        });
    }
}

// Show color picker for multiple bookmark selection
async function showColorPickerForMultiBookmark(selectedVerses, bookmarkBtn) {
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    const buttonsContainer = bottomSheet.querySelector('.verse-actions-buttons');
    
    // Get or create color picker container
    let colorPickerContainer = buttonsContainer.querySelector('.bookmark-color-picker-container');
    if (!colorPickerContainer) {
        colorPickerContainer = document.createElement('div');
        colorPickerContainer.className = 'bookmark-color-picker-container';
        colorPickerContainer.style.display = 'flex';
        colorPickerContainer.style.width = '100%';
        colorPickerContainer.style.justifyContent = 'center';
        colorPickerContainer.style.padding = '10px 0';
        colorPickerContainer.style.marginTop = '10px';
        colorPickerContainer.style.borderTop = '1px solid #e0e0e0';
        colorPickerContainer.innerHTML = `
            <div class="color-picker-scroll">
                <button class="color-option" data-color="burgundy" style="background: #78aaff !important;" title="Blue"></button>
                <button class="color-option" data-color="forest" style="background: #e6c45a !important;" title="Gold"></button>
                <button class="color-option" data-color="navy" style="background: #72e6a4 !important;" title="Mint"></button>
                <button class="color-option" data-color="amber" style="background: #ff8fc1 !important;" title="Rose"></button>
                <button class="color-option" data-color="violet" style="background: #ff9a54 !important;" title="Orange"></button>
                <button class="color-option" data-color="teal" style="background: #b38aff !important;" title="Purple"></button>
                <button class="color-option" data-color="rust" style="background: #5ed0d9 !important;" title="Teal"></button>
                <button class="color-option" data-color="olive" style="background: #ff7a7a !important;" title="Red"></button>
                <button class="color-option" data-color="indigo" style="background: #b4c76f !important;" title="Olive"></button>
                <button class="color-option" data-color="slate" style="background: #9d9d9d !important;" title="Grey"></button>
                <button class="color-option" data-color="yellow" style="background: #78aaff !important;" title="Blue"></button>
                <button class="color-option" data-color="green" style="background: #e6c45a !important;" title="Gold"></button>
            </div>
        `;
        buttonsContainer.appendChild(colorPickerContainer);
    }
    
    // Toggle color picker visibility
    if (colorPickerContainer.style.display === 'none' || colorPickerContainer.style.display === '') {
        colorPickerContainer.style.display = 'flex';
    } else {
        colorPickerContainer.style.display = 'none';
        return;
    }
    
    // Handle color selection
    colorPickerContainer.querySelectorAll('.color-option').forEach(option => {
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
        
        newOption.addEventListener('click', async () => {
            const selectedColor = newOption.dataset.color;
            
            // Update all selected verses with the color
            for (const verseNum of selectedVerses) {
                const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
                
                // Create or update note entry
                if (!verseNotes[noteKey]) {
                    verseNotes[noteKey] = {
                        text: '',
                        color: selectedColor,
                        book: bibleBooks[currentBook].name,
                        chapter: currentChapter,
                        verse: verseNum,
                        timestamp: new Date().toISOString()
                    };
                } else {
                    // Update existing note with new color
                    verseNotes[noteKey].color = selectedColor;
                }
                
                // Update UI
                const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
                if (verseLine) {
                    // Remove all existing note color classes
                    const colorClasses = Array.from(verseLine.classList).filter(cls => cls.startsWith('note-'));
                    colorClasses.forEach(cls => verseLine.classList.remove(cls));
                    
                    // Add has-note and new color class
                    verseLine.classList.add('has-note', `note-${selectedColor}`);
                    
                    // Apply fade-in animation
                    verseLine.style.animation = 'fadeInHighlight 0.4s ease-out forwards';
                }
            }
            
            // Save all changes to localStorage and Supabase
            localStorage.setItem('verseNotes', JSON.stringify(verseNotes));
            try {
                await saveNotesToSupabase();
            } catch (error) {
            }
            
            // Update bookmark button appearance
            bookmarkBtn.classList.add('bookmarked');
            
            // Close color picker after selection
            setTimeout(() => {
                colorPickerContainer.style.display = 'none';
            }, 300);
        });
    });
}

// Update single verse bottom sheet in place
function updateSingleVerseActionsBottomSheet(verseNum) {
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (!bottomSheet) return;
    
    const book = bibleBooks[currentBook];
    const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
    const verseReference = `${bookName} ${currentChapter} : ${verseNum}`;
    
    // Update only the header and reference
    const headerRef = bottomSheet.querySelector('.verse-reference');
    if (headerRef) {
        headerRef.textContent = verseReference;
    }
}

// Update multi-verse bottom sheet in place
function updateMultiVerseActionsBottomSheet(selectedVerses) {
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (!bottomSheet) return;
    
    const book = bibleBooks[currentBook];
    const bookName = currentLanguage === 'tamil' ? book.tamilName : book.name;
    const verseReference = `${bookName} ${currentChapter}`;
    
    // Update only the header and reference
    const headerRef = bottomSheet.querySelector('.verse-reference');
    if (headerRef) {
        headerRef.textContent = verseReference;
    }
}

// Update verse line highlighting based on selected verses
function updateVerseHighlighting(selectedVerses) {
    // Only highlight verses if bottom sheet is open
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (!bottomSheet || !bottomSheet.classList.contains('visible')) {
        return;
    }
    
    const contentArea = document.querySelector('.scripture-text');
    if (!contentArea) return;
    
    // Remove highlighted class from all verses
    contentArea.querySelectorAll('.verse-line').forEach(v => {
        if (v.classList.contains('multi-highlighted')) {
            v.classList.remove('multi-highlighted');
            v.style.backgroundColor = '';
        }
    });
    contentArea.querySelectorAll('.verse-container').forEach(v => {
        if (v.classList.contains('multi-highlighted')) {
            v.classList.remove('multi-highlighted');
            v.style.backgroundColor = '';
        }
    });
    
    // Add multi-highlighted class to all selected verses
    selectedVerses.forEach(verseNum => {
        const verseLine = contentArea.querySelector(`.verse-line[data-verse="${verseNum}"]`);
        if (verseLine) {
            verseLine.classList.add('multi-highlighted');
        }
    });
}

// Scroll to specific verse
function scrollToVerse(verseNum) {
    const contentArea = document.querySelector('.scripture-text');
    
    // Don't add highlight here - let the click handlers manage highlighting
    // Just scroll to the verse
    
    const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
    if (verseLine) {
        // On mobile/tablet, scroll with offset to keep top nav visible
        if (window.innerWidth <= 1024) {
            const topNavHeight = 60; // height of top bar
            const versePosition = verseLine.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = versePosition - topNavHeight - 20; // 20px extra padding
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            // Desktop: use scrollIntoView on content-area
            verseLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        // Verse doesn't exist in this chapter - silently ignore
    }
}
// Navigation buttons
document.addEventListener('click', (e) => {
    // Current chapter text - open drawer on mobile
    if (e.target.closest('.current-chapter')) {
        if (window.innerWidth <= 768) {
            const drawerOverlay = document.querySelector('.drawer-overlay');
            const booksSidebar = document.querySelector('.books-sidebar');
            const chaptersColumn = document.querySelector('.chapters-column');
            const versesColumn = document.querySelector('.verses-column');
            const menuBtn = document.querySelector('.mobile-only');
            drawerOverlay.classList.add('active');
            booksSidebar.classList.add('drawer-open');
            chaptersColumn.classList.add('drawer-open');
            versesColumn.classList.add('drawer-open');
            menuBtn.classList.add('drawer-active');
            document.body.style.overflow = 'hidden';
        }
    }
    // Previous chapter
    if (e.target.closest('.nav-btn[aria-label="Previous"]')) {
        if (currentChapter > 1) {
            currentChapter--;
            localStorage.setItem('currentChapter', currentChapter);
            updateUI();
            refreshOpenSummaryDrawer();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (currentBook > 0) {
            currentBook--;
            currentChapter = bibleBooks[currentBook].chapters;
            loadBook(currentBook, currentChapter).then(() => {
                refreshOpenSummaryDrawer();
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    // Next chapter
    if (e.target.closest('.nav-btn[aria-label="Next"]')) {
        const book = bibleBooks[currentBook];
        if (currentChapter < book.chapters) {
            currentChapter++;
            localStorage.setItem('currentChapter', currentChapter);
            updateUI();
            refreshOpenSummaryDrawer();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (currentBook < bibleBooks.length - 1) {
            currentBook++;
            currentChapter = 1;
            loadBook(currentBook, currentChapter).then(() => {
                refreshOpenSummaryDrawer();
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.querySelector('.nav-btn[aria-label="Previous"]').click();
    } else if (e.key === 'ArrowRight') {
        document.querySelector('.nav-btn[aria-label="Next"]').click();
    }
});
// Auto-hide scrollbar after 1 second of inactivity
function initializeScrollbar() {
    const scrollableElements = [
        document.querySelector('.books-sidebar'),
        document.querySelector('.chapters-column'),
        document.querySelector('.verses-column'),
        document.querySelector('.content-area')
    ];
    scrollableElements.forEach(element => {
        if (element) {
            let scrollTimeout;
            element.addEventListener('scroll', function() {
                this.classList.add('scrolling');
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    this.classList.remove('scrolling');
                }, 1000);
            });
            element.addEventListener('mouseenter', function() {
                clearTimeout(scrollTimeout);
            });
            element.addEventListener('mouseleave', function() {
                scrollTimeout = setTimeout(() => {
                    this.classList.remove('scrolling');
                }, 1000);
            });
        }
    });
}

// Helper function to close bottom sheet
function closeBottomSheet() {
    const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
    if (bottomSheet && bottomSheet.classList.contains('visible')) {
        bottomSheet.classList.remove('visible');
        document.body.classList.remove('bottom-sheet-open');
    }
}

// Dark theme toggle with animation
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const drawerThemeToggle = document.querySelector('.drawer-theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    async function toggleTheme(event) {
        const clickedButton = event.currentTarget;
        // Check if View Transition API is supported and user doesn't prefer reduced motion
        if (
            !document.startViewTransition ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            // Fallback: toggle without animation
            document.body.classList.toggle('dark-theme');
            const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            // Update theme color meta tag
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
                metaThemeColor.setAttribute('content', theme === 'dark' ? '#202124' : '#ffffff');
            }
            return;
        }
        // Start view transition
        const transition = document.startViewTransition(() => {
            document.body.classList.toggle('dark-theme');
            const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            // Update theme color meta tag
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
                metaThemeColor.setAttribute('content', theme === 'dark' ? '#202124' : '#ffffff');
            }
        });
        // Wait for transition to be ready
        await transition.ready;
        // Get button position for circular reveal effect
        const { top, left, width, height } = clickedButton.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRadius = Math.hypot(
            Math.max(left, right),
            Math.max(top, bottom)
        );
        // Animate the circular reveal
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`
                ]
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)'
            }
        );
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', (event) => {
            closeBottomSheet();
            toggleTheme(event);
        });
    }
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener('click', (event) => {
            closeBottomSheet();
            toggleTheme(event);
        });
    }
}
// Initialize mobile language modal
function initializeMobileLanguageModal() {
    const langBtn = document.querySelector('.lang-btn');
    const modalOverlay = document.querySelector('.language-modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalOptions = document.querySelectorAll('.language-modal-option');
    const colorPaletteSection = document.querySelector('.color-palette-section');
    const colorOptions = document.querySelectorAll('.color-option');
    const languageBottomSheetOverlay = document.getElementById('language-bottom-sheet-overlay');
    const sheetOptions = document.querySelectorAll('.language-sheet-option');
    const sheetColorPalette = document.getElementById('language-sheet-color-palette');
    const sheetColorOptions = document.querySelectorAll('.language-sheet-color-option');
    
    if (!langBtn || !modalOverlay) return;
    
    // Ensure currentLanguage is properly initialized
    if (!currentLanguage || !['english', 'tamil', 'both'].includes(currentLanguage)) {
        currentLanguage = 'tamil';
        localStorage.setItem('currentLanguage', 'tamil');
    }
    
    // Ensure englishTextColor is properly initialized
    if (!englishTextColor || !['default', 'blue', 'red'].includes(englishTextColor)) {
        englishTextColor = 'default';
        localStorage.setItem('englishTextColor', 'default');
    }
    
    // Check if mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Update active state based on current language
    function updateModalActiveState() {
        modalOptions.forEach(option => {
            if (option.dataset.lang === currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        // Show/hide color palette based on 'both' selection
        if (currentLanguage === 'both') {
            colorPaletteSection.classList.add('visible');
        } else {
            colorPaletteSection.classList.remove('visible');
        }
    }
    
    // Update sheet active state
    function updateSheetActiveState() {
        sheetOptions.forEach(option => {
            if (option.dataset.lang === currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        // Show/hide color palette based on 'both' selection
        if (currentLanguage === 'both') {
            sheetColorPalette.style.display = 'block';
        } else {
            sheetColorPalette.style.display = 'none';
        }
    }
    
    // Update sheet color active state
    function updateSheetColorActiveState() {
        sheetColorOptions.forEach(option => {
            if (option.dataset.color === englishTextColor) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    // Update color option active state
    function updateColorActiveState() {
        colorOptions.forEach(option => {
            if (option.dataset.color === englishTextColor) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    // Open modal/sheet based on device
    langBtn.addEventListener('click', (e) => {
        closeBottomSheet();
        e.stopPropagation();
        
        if (isMobile()) {
            // Mobile: Show bottom sheet
            updateSheetActiveState();
            updateSheetColorActiveState();
            languageBottomSheetOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            // Desktop: Show modal
            updateModalActiveState();
            updateColorActiveState();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Close modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close bottom sheet
    function closeLanguageSheet() {
        languageBottomSheetOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close when clicking overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close sheet when clicking overlay
    languageBottomSheetOverlay.addEventListener('click', (e) => {
        if (e.target === languageBottomSheetOverlay) {
            closeLanguageSheet();
        }
    });
    
    // Swipe down to close sheet
    let touchStartY = 0;
    const languageBottomSheet = document.querySelector('.language-bottom-sheet');
    
    if (languageBottomSheet) {
        languageBottomSheet.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        languageBottomSheet.addEventListener('touchmove', (e) => {
            const touchCurrentY = e.touches[0].clientY;
            const diff = touchCurrentY - touchStartY;
            
            // Only close if swiping down and at top of sheet
            if (diff > 50 && languageBottomSheet.scrollTop === 0) {
                closeLanguageSheet();
            }
        });
    }
    
    // Handle language selection from modal
    modalOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            currentLanguage = selectedLang;
            localStorage.setItem('currentLanguage', selectedLang);
            // Update active state
            updateModalActiveState();
            // Close modal and reload for all language selections
            // Color palette shows but doesn't block - user can close modal anytime
            updateBookNames();
            // If 'both' is selected and color already chosen, close immediately
            if (selectedLang === 'both' && localStorage.getItem('englishTextColor')) {
                closeModal();
                loadBook(currentBook, currentChapter);
            } else if (selectedLang !== 'both') {
                closeModal();
                loadBook(currentBook, currentChapter);
            }
            // If 'both' selected but no color chosen yet, keep modal open for first-time selection
        });
    });
    
    // Handle language selection from bottom sheet (mobile)
    sheetOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            currentLanguage = selectedLang;
            localStorage.setItem('currentLanguage', selectedLang);
            
            // Update active state
            updateSheetActiveState();
            updateBookNames();
            
            // If 'both' is selected, show color palette and don't close
            if (selectedLang === 'both') {
                // Wait for animation to complete
                return;
            }
            
            // For other languages, close sheet and reload
            closeLanguageSheet();
            loadBook(currentBook, currentChapter);
        });
    });
    
    // Handle color selection in bottom sheet
    sheetColorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedColor = option.dataset.color;
            englishTextColor = selectedColor;
            localStorage.setItem('englishTextColor', selectedColor);
            
            // Update active state
            updateSheetColorActiveState();
            updateBookNames();
            
            // Close sheet and reload
            closeLanguageSheet();
            loadBook(currentBook, currentChapter);
        });
    });
    
    // Handle color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedColor = option.dataset.color;
            englishTextColor = selectedColor;
            localStorage.setItem('englishTextColor', selectedColor);
            // Update active state
            updateColorActiveState();
            // Update book names in sidebar
            updateBookNames();
            // Close modal
            closeModal();
            // Reload current book with new color
            loadBook(currentBook, currentChapter);
        });
    });
    // Initialize active states
    updateModalActiveState();
    updateColorActiveState();
}

// Language Bottom Sheet (Mobile Only)
// Search functionality
function initializeSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchBtnMobile = document.getElementById('search-btn-mobile');
    const backBtn = document.getElementById('back-from-search');
    const clearBtn = document.getElementById('clear-search');
    const filterBtn = document.getElementById('filter-btn');
    const closeFilterBtn = document.getElementById('close-filter');
    const applyFilterBtn = document.getElementById('apply-filter');
    const clearFilterBtn = document.getElementById('clear-filter');
    const searchBar = document.getElementById('search-bar');
    const advancedFilter = document.getElementById('advanced-filter');
    const filterBook = document.getElementById('filter-book');
    const filterChapter = document.getElementById('filter-chapter');
    const scriptureText = document.getElementById('scripture-text');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchResultsInfo = document.getElementById('search-results-info');
    const resultsCount = document.getElementById('results-count');
    let searchTimeout = null;
    let isSearchActive = false;
    let isFilterVisible = false;
    // Populate book dropdown
    function populateBookDropdown() {
        filterBook.innerHTML = '<option value="">All Books</option>';
        bibleBooks.forEach((book, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = book.name;
            filterBook.appendChild(option);
        });
    }
    // Toggle filter visibility
    function toggleFilter() {
        isFilterVisible = !isFilterVisible;
        advancedFilter.style.display = isFilterVisible ? 'block' : 'none';
        if (isFilterVisible && filterBook.options.length === 1) {
            populateBookDropdown();
        }
    }
    // Close filter popup
    function closeFilter() {
        isFilterVisible = false;
        advancedFilter.style.display = 'none';
    }
    // Apply filter and trigger search
    function applyFilter() {
        closeFilter();
        // Update filter button active state
        if (filterBook.value !== '' || filterChapter.value !== '') {
            filterBtn.classList.add('active');
        } else {
            filterBtn.classList.remove('active');
        }
        const query = searchInput.value.trim();
        if (query) {
            showLoadingState();
            clearTimeout(searchTimeout);
            performSearch(query);
        }
    }
    // Clear filter values
    function clearFilterValues() {
        filterBook.value = '';
        filterChapter.value = '';
        filterBtn.classList.remove('active');
        applyFilter();
    }
    // Detect if text is Tamil or English
    function isTamilText(text) {
        // Tamil Unicode range: \u0B80-\u0BFF
        const tamilRegex = /[\u0B80-\u0BFF]/;
        return tamilRegex.test(text);
    }
    // Toggle search view
    function openSearch() {
        isSearchActive = true;
        const booksSidebar = document.querySelector('.books-sidebar');
        const chaptersColumn = document.querySelector('.chapters-column');
        const versesColumn = document.querySelector('.verses-column');
        const bottomNav = document.querySelector('.bottom-nav');
        const chapterHeader = document.getElementById('mobile-chapter-header');
        // Add active class to search buttons
        if (searchBtn) searchBtn.classList.add('active');
        if (searchBtnMobile) searchBtnMobile.classList.add('active');
        // Track navigation
        navigateToPage('search');
        // Show search bar
        searchBar.style.display = 'flex';
        // Show search results area, hide only sidebars and scripture
        scriptureText.style.display = 'none';
        searchResults.style.display = 'block';
        searchResults.classList.add('active');
        booksSidebar.style.display = 'none';
        chaptersColumn.style.display = 'none';
        versesColumn.style.display = 'none';
        if (bottomNav) bottomNav.style.display = 'none';
        if (chapterHeader) chapterHeader.style.display = 'none';
        searchInput.focus();
    }
    function closeSearch() {
        isSearchActive = false;
        const booksSidebar = document.querySelector('.books-sidebar');
        const chaptersColumn = document.querySelector('.chapters-column');
        const versesColumn = document.querySelector('.verses-column');
        const bottomNav = document.querySelector('.bottom-nav');
        const chapterHeader = document.getElementById('mobile-chapter-header');
        // Remove active class from search buttons
        if (searchBtn) searchBtn.classList.remove('active');
        if (searchBtnMobile) searchBtnMobile.classList.remove('active');
        // Hide search bar
        searchBar.style.display = 'none';
        advancedFilter.style.display = 'none';
        isFilterVisible = false;
        // Hide search, show everything
        searchResults.style.display = 'none';
        searchResults.classList.remove('active');
        searchResultsInfo.style.display = 'none';
        scriptureText.style.display = 'block';
        booksSidebar.style.display = 'flex';
        chaptersColumn.style.display = 'flex';
        versesColumn.style.display = 'flex';
        if (bottomNav) bottomNav.style.display = 'flex';
        if (chapterHeader) chapterHeader.style.display = 'block';
        // Don't clear search input, filters, or results - preserve them
        // Track navigation back to bible page
        navigateToBiblePage();
        // Force refresh book names display after sidebar is visible
        setTimeout(() => {
            updateBookNames();
        }, 0);
    }
    function clearSearch() {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchResultsInfo.style.display = 'none';
        showEmptyState();
        searchInput.focus();
    }
    searchBtn.addEventListener('click', () => {
        closeBottomSheet();
        if (isSearchActive) {
            closeSearch();
        } else {
            openSearch();
        }
    });
    backBtn.addEventListener('click', closeSearch);
    clearBtn.addEventListener('click', clearSearch);
    filterBtn.addEventListener('click', toggleFilter);
    closeFilterBtn.addEventListener('click', closeFilter);
    applyFilterBtn.addEventListener('click', applyFilter);
    clearFilterBtn.addEventListener('click', clearFilterValues);
    // Close filter when clicking outside
    document.addEventListener('click', (e) => {
        if (isFilterVisible && 
            !advancedFilter.contains(e.target) && 
            !filterBtn.contains(e.target)) {
            closeFilter();
        }
    });
    // Show/hide clear button based on input
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        // Show/hide clear button
        clearBtn.style.display = value ? 'flex' : 'none';
        // Debounce search
        clearTimeout(searchTimeout);
        if (!value) {
            searchResultsInfo.style.display = 'none';
            showEmptyState();
            return;
        }
        showLoadingState();
        searchTimeout = setTimeout(() => {
            performSearch(value);
        }, 500);
    });
    // Show empty state
    function showEmptyState() {
        searchResults.innerHTML = `
            <div class="search-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <p>Search for verses in Tamil or English</p>
            </div>
        `;
    }
    // Show loading state
    function showLoadingState() {
        searchResultsInfo.style.display = 'none';
        searchResults.innerHTML = `
            <div class="search-loading">
                <div class="book-loader"></div>
                <p>Searching...</p>
            </div>
        `;
    }
    // Show no results state
    function showNoResults() {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <p>No verses found</p>
            </div>
        `;
    }
    // Perform search
    async function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = `
                <div class="search-empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>Search for verses in Tamil or English</p>
                </div>
            `;
            searchResultsInfo.style.display = 'none';
            return;
        }
        const isTamil = isTamilText(query);
        const results = [];
        // Get filter values
        const selectedBookIndex = filterBook.value;
        const selectedChapter = filterChapter.value.trim();
        try {
            // Build Supabase query
            let supabaseQuery = bibleDataManager.supabaseClient
                .from('bible_verses')
                .select('book_file, chapter, verse, text, language')
                .order('book_file')
                .order('chapter')
                .order('verse');
            // Apply language filter
            const searchLanguage = isTamil ? 'tamil' : 'english';
            supabaseQuery = supabaseQuery.eq('language', searchLanguage);
            // Apply text search
            supabaseQuery = supabaseQuery.ilike('text', `%${query}%`);
            // Apply book filter if specified
            if (selectedBookIndex !== '') {
                const selectedBook = bibleBooks[parseInt(selectedBookIndex)];
                supabaseQuery = supabaseQuery.eq('book_file', selectedBook.file);
            }
            // Apply chapter filter if specified
            if (selectedChapter !== '') {
                supabaseQuery = supabaseQuery.eq('chapter', parseInt(selectedChapter));
            }
            // Limit results to prevent overwhelming
            supabaseQuery = supabaseQuery.limit(200);
            const { data, error } = await supabaseQuery;
            if (error) {
                throw error;
            }
            // Process results
            if (data && data.length > 0) {
                data.forEach(verse => {
                    // Find the book info
                    const book = bibleBooks.find(b => b.file === verse.book_file);
                    if (!book) return;
                    const verseText = verse.text;
                    const bookName = isTamil ? book.tamilName : book.name;
                    const bookIndex = bibleBooks.indexOf(book);
                    // Create highlighted text - highlight all occurrences (case-insensitive)
                    let highlightedText = verseText;
                    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
                    highlightedText = verseText.replace(regex, '<span class="search-highlight">$1</span>');
                    results.push({
                        bookIndex,
                        bookName,
                        chapter: verse.chapter,
                        verse: verse.verse,
                        text: highlightedText,
                        originalText: verseText
                    });
                });
            }
            // Display results
            displaySearchResults(results, query);
        } catch (error) {
            searchResults.innerHTML = `
                <div class="search-empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>Error searching verses. Please try again.</p>
                </div>
            `;
            searchResultsInfo.style.display = 'none';
        }
    }
    // Display search results
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResultsInfo.style.display = 'none';
            searchResults.innerHTML = `
                <div class="search-empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>No verses found for "${query}"</p>
                </div>
            `;
            return;
        }
        // Show results count
        searchResultsInfo.style.display = 'block';
        resultsCount.textContent = results.length >= 200 ? '200+' : results.length;
        let html = '';
        results.forEach(result => {
            html += `
                <div class="search-result-item" data-book="${result.bookIndex}" data-chapter="${result.chapter}" data-verse="${result.verse}">
                    <div class="search-result-reference">${result.bookName} ${result.chapter}:${result.verse}</div>
                    <div class="search-result-text">${result.text}</div>
                </div>
            `;
        });
        searchResults.innerHTML = html;
        // Add click listeners to results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const bookIndex = parseInt(item.getAttribute('data-book'));
                const chapter = parseInt(item.getAttribute('data-chapter'));
                const verse = parseInt(item.getAttribute('data-verse'));
                // Close search and navigate to verse
                closeSearch();
                loadBook(bookIndex, chapter).then(() => {
                    // Scroll to verse after loading
                    setTimeout(() => {
                        const versesColumn = document.querySelector('.verses-column');
                        const verseItem = versesColumn ? versesColumn.querySelector(`[data-verse="${verse}"]`) : null;
                        if (verseItem) {
                            verseItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                            verseItem.classList.add('active');
                        }
                        const verseElement = document.querySelector(`.verse-line[data-verse="${verse}"]`);
                        if (verseElement) {
                            verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            document.querySelectorAll('.verse-line').forEach(v => {
                                if (v.classList.contains('highlighted')) {
                                    v.classList.remove('highlighted');
                                    v.style.backgroundColor = '';
                                }
                            });
                            document.querySelectorAll('.verse-container').forEach(v => {
                                if (v.classList.contains('multi-highlighted')) {
                                    v.classList.remove('multi-highlighted');
                                    v.style.backgroundColor = '';
                                }
                            });
                            verseElement.classList.add('multi-highlighted');
                        }
                    }, 300);
                });
            });
        });
    }
    // Helper function for escaping regex
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
// Site title hold to activate admin mode after 5 seconds
function initializeSiteTitle() {
    const siteTitle = document.querySelector('.site-title');
    const secretIcon = document.getElementById('secret-icon');
    let holdTimer = null;
    let isHolding = false;
    
    if (siteTitle) {
        // Handle mousedown/touchstart - start the hold timer
        siteTitle.addEventListener('mousedown', startHold);
        siteTitle.addEventListener('touchstart', startHold);
        
        // Handle mouseup/touchend - clear the hold timer
        siteTitle.addEventListener('mouseup', endHold);
        siteTitle.addEventListener('touchend', endHold);
        siteTitle.addEventListener('mouseleave', endHold);
        
        function startHold() {
            // Don't start hold if admin mode is already active
            if (isAdmin()) {
                return;
            }
            
            isHolding = true;
            let holdDuration = 0;
            const holdInterval = 50; // Check every 50ms
            const totalHoldTime = 5000; // 5 seconds
            
            holdTimer = setInterval(() => {
                holdDuration += holdInterval;
                
                // Check if hold time reached 5 seconds
                if (holdDuration >= totalHoldTime && isHolding) {
                    clearInterval(holdTimer);
                    activateAdminMode();
                    isHolding = false;
                }
            }, holdInterval);
        }
        
        function endHold() {
            isHolding = false;
            if (holdTimer) {
                clearInterval(holdTimer);
                holdTimer = null;
            }
        }
        
        function activateAdminMode() {
            const adminToggle = document.getElementById('admin-toggle');
            const mobileAdminMenuWrapper = document.getElementById('mobile-admin-menu-wrapper');
            const desktopAdminMenuWrapper = document.getElementById('desktop-admin-menu-wrapper');
            const isMobile = window.innerWidth <= 768;
            
            // Show appropriate admin UI based on device
            if (isMobile) {
                // On mobile, show admin menu wrapper and toggle
                if (mobileAdminMenuWrapper) mobileAdminMenuWrapper.style.setProperty('display', 'block', 'important');
                if (adminToggle) adminToggle.style.display = 'flex';
            } else {
                // On desktop, show admin menu wrapper and toggle
                if (desktopAdminMenuWrapper) desktopAdminMenuWrapper.style.setProperty('display', 'block', 'important');
                if (adminToggle) adminToggle.style.display = 'flex';
            }
            
            // Activate admin mode
            localStorage.setItem('isAdmin', 'true');
            updateAdminUI();
            showAdminNotification();
        }
    }
    
    // Add click handler for secret icon
    if (secretIcon) {
        secretIcon.addEventListener('click', () => {
            window.location.href = 'config/secret.html';
        });
    }
}
// Initialize home options card
function initializeHomeOptions() {
    const homeBtn = document.querySelector('.home-btn');
    const homeOptionsCard = document.getElementById('home-options-card');
    const homeOptions = document.querySelectorAll('.home-option');
    if (!homeBtn || !homeOptionsCard) return;
    // Toggle home options card and update available options
    homeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Show loader
        const loader = document.createElement('div');
        loader.className = 'home-options-loader';
        loader.innerHTML = '<div class="spinner"></div>';
        homeBtn.parentElement.insertBefore(loader, homeBtn);
        // Update options and show card
        updateAvailableHomeOptions().then(() => {
            // Remove loader
            if (loader && loader.parentElement) {
                loader.remove();
            }
            homeOptionsCard.classList.toggle('active');
        });
    });
    // Close card when clicking outside
    document.addEventListener('click', (e) => {
        if (!homeOptionsCard.contains(e.target) && !homeBtn.contains(e.target)) {
            homeOptionsCard.classList.remove('active');
        }
    });
    // Handle option clicks
    homeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const action = option.getAttribute('data-action');
            homeOptionsCard.classList.remove('active');
            switch(action) {
                case 'summary':
                    // Show Chapter Summary
                    showChapterSummary();
                    break;
                case 'timeline':
                    // Show Chapter Timeline
                    showChapterTimeline();
                    break;
                case 'characters':
                    // Show Chapter Characters
                    showChapterCharacters();
                    break;
            }
        });
    });
}
// Restore UI elements after leaving home page
function restoreUIFromHomePage() {
    // Show all sidebars and columns
    document.querySelector('.books-sidebar').style.display = '';
    document.querySelector('.chapters-column').style.display = '';
    document.querySelector('.verses-column').style.display = '';
    // Show language and search buttons in header
    const langBtn = document.querySelector('.lang-btn');
    const searchBtn = document.getElementById('search-btn');
    if (langBtn) langBtn.style.display = '';
    if (searchBtn) searchBtn.style.display = '';
    // Show bottom navigation
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = '';
    // Restore menu button (remove bible image if exists)
    const menuBtn = document.querySelector('.menu-btn');
    const logoContainer = document.querySelector('.logo-container');
    const existingBibleImg = logoContainer?.querySelector('.home-bible-img');
    if (existingBibleImg) existingBibleImg.remove();
    if (menuBtn) menuBtn.style.display = '';
}
// Load summary data for home preloading
async function loadSummaryData() {
    try {
        // Preload summary for current book/chapter if available
        if (currentBook && currentChapter) {
            await showChapterSummary();
        }
    } catch (error) {
    }
}
// Load timeline data for home preloading  
async function loadTimelineData() {
    try {
        // Preload timeline for current book/chapter if available
        if (currentBook && currentChapter) {
            await showChapterTimeline();
        }
    } catch (error) {
    }
}
// Load character data for home preloading
async function loadCharacterData() {
    try {
        // Preload character data if available
        if (typeof loadCharacters === 'function') {
            await loadCharacters();
        }
    } catch (error) {
    }
}
// Show home page with just the title
function showHomePage() {
    // Show loader immediately
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('active');
    // Preload all data immediately when home is first shown
    const dataLoadingPromise = !window.homeDataPreloaded 
        ? Promise.all([
            loadSummaryData(),
            loadTimelineData(), 
            loadCharacterData()
        ]).then(() => {
            window.homeDataPreloaded = true;
        }).catch(error => {
        })
        : Promise.resolve(); // If already preloaded, resolve immediately
    // Hide all sidebars and columns
    document.querySelector('.books-sidebar').style.display = 'none';
    document.querySelector('.chapters-column').style.display = 'none';
    document.querySelector('.verses-column').style.display = 'none';
    // Hide search bar if visible
    const searchBar = document.getElementById('search-bar');
    if (searchBar) searchBar.style.display = 'none';
    // Hide search results
    const searchResults = document.getElementById('search-results');
    if (searchResults) searchResults.style.display = 'none';
    const searchResultsInfo = document.getElementById('search-results-info');
    if (searchResultsInfo) searchResultsInfo.style.display = 'none';
    // Hide language and search buttons in header
    const langBtn = document.querySelector('.lang-btn');
    const searchBtn = document.getElementById('search-btn');
    if (langBtn) langBtn.style.display = 'none';
    if (searchBtn) searchBtn.style.display = 'none';
    // Hide bottom navigation
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';
    // Close any open summary drawers (Timeline, Characters, Summary)
    const summaryDrawer = document.getElementById('summary-drawer');
    if (summaryDrawer && summaryDrawer.classList.contains('active')) {
        summaryDrawer.classList.remove('active');
        document.body.classList.remove('summary-drawer-open');
    }
    // Replace menu button with bible.png
    const menuBtn = document.querySelector('.menu-btn');
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        // Force hide menu button with !important via style attribute
        if (menuBtn) {
            menuBtn.style.cssText = 'display: none !important;';
        }
        // Check if bible image already exists
        let bibleImg = logoContainer.querySelector('.home-bible-img');
        if (!bibleImg) {
            bibleImg = document.createElement('img');
            bibleImg.src = 'resources/icons/bible.png';
            bibleImg.alt = 'Bible';
            bibleImg.className = 'home-bible-img';
            bibleImg.style.cssText = 'width: 25px; height: 25px; margin-right: 4px; display: block;';
            logoContainer.insertBefore(bibleImg, logoContainer.firstChild);
        } else {
            bibleImg.style.cssText = 'width: 25px; height: 25px; margin-right: 4px; display: block;';
        }
    }
    // Load and display a random memory verse
    // Wait for both data preloading and verse loading before hiding loader
    const verseLoadingPromise = (typeof window.memoryVerses !== 'undefined' && window.memoryVerses.length > 0)
        ? Promise.resolve().then(() => loadRandomMemoryVerse())
        : loadMemoryVersesFromSupabase().then(() => {
            if (typeof window.memoryVerses !== 'undefined' && window.memoryVerses.length > 0) {
                loadRandomMemoryVerse();
            }
        });
    // Hide loader only after both data preloading and verse loading are complete
    Promise.all([dataLoadingPromise, verseLoadingPromise]).then(() => {
        if (loader) loader.classList.remove('active');
    }).catch(error => {
        if (loader) loader.classList.remove('active');
    });
    // Store home state
    localStorage.setItem('isOnHomePage', 'true');
}
// Function to get today's date as a string (YYYY-MM-DD)
function getTodayDateString() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}
// Function to get verse index for today (deterministic based on date)
function getTodayVerseIndex() {
    const today = getTodayDateString();
    const savedDate = localStorage.getItem('verseOfTheDayDate');
    const savedIndex = localStorage.getItem('verseOfTheDayIndex');
    // If it's the same day and we have a saved index, use it
    if (savedDate === today && savedIndex !== null) {
        return parseInt(savedIndex);
    }
    // Generate a consistent index based on the date
    const dateHash = today.split('-').reduce((hash, part) => hash + parseInt(part), 0);
    const verseIndex = dateHash % memoryVerses.length;
    // Save for today
    localStorage.setItem('verseOfTheDayDate', today);
    localStorage.setItem('verseOfTheDayIndex', verseIndex.toString());
    return verseIndex;
}
// Function to load and display a random memory verse
function loadRandomMemoryVerse() {
    const scriptureText = document.getElementById('scripture-text');
    if (!scriptureText) {
        return;
    }
    // Keep scripture text hidden while loading (page loader handles the loading state)
    scriptureText.style.display = 'none';
    if (typeof window.memoryVerses === 'undefined' || window.memoryVerses.length === 0) {
        scriptureText.style.display = 'block';
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 2rem; color: var(--text-secondary);">Welcome to My Bible</div>';
        return;
    }
    // Get today's verse (same verse throughout the day)
    const verseIndex = getTodayVerseIndex();
    const verseReference = window.memoryVerses[verseIndex];
    // Parse the verse reference (e.g., "John 3:16" or "Isaiah 12:1–6")
    const verseData = parseVerseReference(verseReference);
    if (!verseData) {
        scriptureText.style.display = 'block';
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Welcome to My Bible</div>';
        return;
    }
    // Find the book index - normalize book names for comparison
    const bookIndex = bibleBooks.findIndex(book => {
        const normalizedBookName = verseData.bookName.toLowerCase()
            .replace(/^1\s+/, 'i ')
            .replace(/^2\s+/, 'ii ')
            .replace(/^3\s+/, 'iii ')
            .replace(/^psalm$/, 'psalms'); // Handle Psalm -> Psalms
        const normalizedName = book.name.toLowerCase();
        const normalizedShortName = book.shortName.toLowerCase();
        return normalizedName === normalizedBookName || 
               normalizedShortName === normalizedBookName ||
               normalizedName === verseData.bookName.toLowerCase() ||
               normalizedShortName === verseData.bookName.toLowerCase() ||
               (normalizedName === 'psalms' && verseData.bookName.toLowerCase() === 'psalm');
    });
    if (bookIndex === -1) {
        scriptureText.style.display = 'block';
        scriptureText.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Book not found: ${verseData.bookName}</div>`;
        return;
    }
    const book = bibleBooks[bookIndex];
    // Load verse data from Supabase using BibleDataManager
    loadVerseFromSupabase(book, verseData, verseReference, scriptureText);
}
// Load verse from Supabase and display
async function loadVerseFromSupabase(book, verseData, verseReference, scriptureText) {
    try {
        // Get language
        const language = currentLanguage === 'tamil' ? 'tamil' : 'english';
        // Convert book file name based on language
        const bookFile = getBookFileForLanguage(book.file, language);
        // Load chapter data from BibleDataManager
        const chapterData = await bibleDataManager.getChapterData(bookFile, verseData.chapter, language);
        if (!chapterData) {
            scriptureText.style.display = 'block';
            scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Failed to load verse</div>';
            return;
        }
        // Convert to the old format expected by displayVerseContent
        const bookData = {
            [`chapter_${verseData.chapter}`]: chapterData
        };
        displayVerseContent(bookData, verseData, verseReference, scriptureText);
    } catch (error) {
        scriptureText.style.display = 'block';
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Failed to load verse</div>';
    }
}
// Helper function to display verse content
function displayVerseContent(bookData, verseData, verseReference, scriptureText) {
    // Try both formats: numeric keys and string keys with "chapter_" prefix
    const chapterKey = `chapter_${verseData.chapter}`;
    const chapterData = bookData[verseData.chapter] || bookData[chapterKey];
    if (bookData && chapterData) {
        let verseText = '';
        if (verseData.verseEnd) {
            // Range of verses
            for (let v = verseData.verseStart; v <= verseData.verseEnd; v++) {
                const verseKey = `verse_${v}`;
                const verse = chapterData[v] || chapterData[verseKey];
                if (verse) {
                    verseText += `<sup>${v}</sup> ${verse} `;
                }
            }
        } else {
            // Single verse
            const verseKey = `verse_${verseData.verseStart}`;
            const verse = chapterData[verseData.verseStart] || chapterData[verseKey];
            if (verse) {
                verseText = `<sup>${verseData.verseStart}</sup> ${verse}`;
            }
        }
        if (verseText) {
            scriptureText.style.display = 'block';
            scriptureText.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; padding: 20px; gap: 20px;">
                    <div class="verse-card" style="border-radius: 16px; padding: 32px 28px; max-width: 700px; width: 100%;">
                        <div class="verse-label" style="font-size: 0.85rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; opacity: 0.8; margin-bottom: 24px; text-align: center;">
                            Verse of the Day
                        </div>
                        <div class="verse-text" style="font-size: 1.2rem; line-height: 1.8; text-align: center; margin-bottom: 20px; position: relative; padding: 0 20px;">
                            ${verseText}
                        </div>
                        <div class="verse-reference" style="font-size: 1rem; font-weight: 600; text-align: center;">
                            — ${verseReference}
                        </div>
                    </div>
                    <button id="read-bible-btn" class="read-bible-button">
                        <span class="button-shimmer"></span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px;">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        <span>Read Bible</span>
                    </button>
                </div>
            `;
            // Add click handler for read bible button
            setTimeout(() => {
                const readBibleBtn = document.getElementById('read-bible-btn');
                if (readBibleBtn) {
                    readBibleBtn.addEventListener('click', () => {
                        loadBook(currentBook, currentChapter);
                    });
                }
            }, 0);
        } else {
            scriptureText.style.display = 'block';
            scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Verse not found</div>';
        }
    } else {
        scriptureText.style.display = 'block';
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Chapter not found</div>';
    }
}
// Helper function to parse verse reference
function parseVerseReference(reference) {
    // Handle formats like "John 3:16", "Isaiah 12:1–6", "Genesis 1:1", "1 John 3:16", "2 Timothy 1:7"
    // Match book name (can include numbers and spaces), chapter:verse or chapter:verse–verse
    const match = reference.match(/^([\d\s\w]+?)\s+(\d+):(\d+)(?:[–—-](\d+))?$/);
    if (!match) return null;
    return {
        bookName: match[1].trim(),
        chapter: parseInt(match[2]),
        verseStart: parseInt(match[3]),
        verseEnd: match[4] ? parseInt(match[4]) : null
    };
}
// Check and update available home options based on data availability
function updateAvailableHomeOptions() {
    return new Promise((mainResolve) => {
        const bookName = bibleBooks[currentBook].name;
        const chapterNum = currentChapter;
        const fileName = bookName.toLowerCase().replace(/ /g, '_');
        // Get file paths
        const summaryPath = getSummaryPath(bookName);
        const timelinePath = getTimelinePath(bookName);
        // Get option elements
        const summaryOption = document.querySelector('.home-option[data-action="summary"]');
        const timelineOption = document.querySelector('.home-option[data-action="timeline"]');
        const charactersOption = document.querySelector('.home-option[data-action="characters"]');
        // If admin mode, show all options
        if (isAdmin()) {
            if (summaryOption) summaryOption.style.display = 'flex';
            if (timelineOption) timelineOption.style.display = 'flex';
            if (charactersOption) charactersOption.style.display = 'flex';
            mainResolve();
            return;
        }
    // Check availability for each type (non-admin mode)
    const summaryVarName = `${fileName.replace(/_/g, '')}Summary`;
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    // Load scripts and check data availability
    const checkPromises = [];
    // Check summary
    if (summaryPath) {
        const promise = new Promise((resolve) => {
            if (window[summaryVarName] && window[summaryVarName][chapterNum]) {
                resolve(true);
            } else if (!document.querySelector(`script[src="${summaryPath}"]`)) {
                const script = document.createElement('script');
                script.src = summaryPath;
                script.onload = () => {
                    resolve(window[summaryVarName] && window[summaryVarName][chapterNum]);
                };
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            } else {
                resolve(window[summaryVarName] && window[summaryVarName][chapterNum]);
            }
        });
        checkPromises.push(promise.then(hasSummary => {
            if (summaryOption) summaryOption.style.display = hasSummary ? 'flex' : 'none';
        }));
    } else {
        if (summaryOption) summaryOption.style.display = 'none';
    }
    // Check timeline
    if (timelinePath) {
        const promise = new Promise((resolve) => {
            if (window[timelineVarName] && window[timelineVarName][chapterNum]) {
                resolve(true);
            } else if (!document.querySelector(`script[src="${timelinePath}"]`)) {
                const script = document.createElement('script');
                script.src = timelinePath;
                script.onload = () => {
                    resolve(window[timelineVarName] && window[timelineVarName][chapterNum]);
                };
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            } else {
                resolve(window[timelineVarName] && window[timelineVarName][chapterNum]);
            }
        });
        checkPromises.push(promise.then(hasTimeline => {
            if (timelineOption) timelineOption.style.display = hasTimeline ? 'flex' : 'none';
        }));
    } else {
        if (timelineOption) timelineOption.style.display = 'none';
    }
    // Check characters from Supabase
    const charactersPromise = (async () => {
        try {
            const { data, error, count } = await bibleDataManager.supabaseClient
                .from('bible_characters')
                .select('id', { count: 'exact', head: true })
                .eq('book_file', bibleBooks[currentBook].file)
                .eq('chapter', chapterNum);
            return !error && count > 0;
        } catch (error) {
            return false;
        }
    })();
    checkPromises.push(charactersPromise.then(hasCharacters => {
        if (charactersOption) charactersOption.style.display = hasCharacters ? 'flex' : 'none';
    }));
    // Wait for all checks to complete
    Promise.all(checkPromises).then(() => {
        mainResolve();
    });
});
}
// Show chapter summary
function showChapterSummary() {
    // Close mobile drawer if open
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const booksSidebar = document.querySelector('.books-sidebar');
    const chaptersColumn = document.querySelector('.chapters-column');
    const versesColumn = document.querySelector('.verses-column');
    if (drawerOverlay && drawerOverlay.classList.contains('active')) {
        drawerOverlay.classList.remove('active');
        booksSidebar.classList.remove('drawer-open');
        chaptersColumn.classList.remove('drawer-open');
        versesColumn.classList.remove('drawer-open');
        document.body.style.overflow = '';
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');
        if (hamburgerIcon) hamburgerIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
    }
    const bookName = bibleBooks[currentBook].name;
    const chapterNum = currentChapter;
    // Load summary from database
    loadSummaryFromSupabase(bibleBooks[currentBook].file, chapterNum);
}
// Get summary file path based on book name
function getSummaryPath(bookName) {
    // New Testament books
    const newTestamentBooks = ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', 
        'I Corinthians', 'II Corinthians', 'Galatians', 'Ephesians', 'Philippians', 
        'Colossians', 'I Thessalonians', 'II Thessalonians', 'I Timothy', 'II Timothy', 
        'Titus', 'Philemon', 'Hebrews', 'James', 'I Peter', 'II Peter', 'I John', 
        'II John', 'III John', 'Jude', 'Revelation'];
    // Old Testament books
    const oldTestamentBooks = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
        'Joshua', 'Judges', 'Ruth', 'I Samuel', 'II Samuel', 'I Kings', 'II Kings', 
        'I Chronicles', 'II Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 
        'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 
        'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 
        'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    if (newTestamentBooks.includes(bookName)) {
        return `resources/summary/new-testament/${fileName}.js`;
    } else if (oldTestamentBooks.includes(bookName)) {
        return `resources/summary/old-testament/${fileName}.js`;
    }
    return null;
}
// Load and display summary
function loadSummaryScript(path, bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const summaryVarName = `${fileName.replace(/_/g, '')}Summary`;
    // Check if summary is already loaded
    if (window[summaryVarName]) {
        displaySummary(bookName, chapterNum);
        return;
    }
    const script = document.createElement('script');
    script.src = path;
    script.onload = () => {
        displaySummary(bookName, chapterNum);
    };
    script.onerror = () => {
        alert(`Summary not available for ${bookName} ${chapterNum} yet.`);
    };
    document.body.appendChild(script);
}
// Display the summary in the drawer
function displaySummary(bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const summaryVarName = `${fileName.replace(/_/g, '')}Summary`;
    // Try to access the summary object
    const summaryData = window[summaryVarName];
    if (summaryData && summaryData[chapterNum]) {
        const summaryDrawer = document.getElementById('summary-drawer');
        const summaryDrawerContent = document.getElementById('summary-drawer-content');
        const summary = summaryData[chapterNum];
        // Format the summary with proper styling and highlight verses
        const formattedSummary = summary
            .split('\n\n')
            .map(para => {
                // Replace quoted verses with card format
                const processed = para.replace(/"([^"]+)"/g, '<span class="verse-card">$1</span>');
                return `<p class="summary-paragraph">${processed}</p>`;
            })
            .join('');
        summaryDrawerContent.innerHTML = formattedSummary;
        // Track navigation
        navigateToPage('summary');
        // Show the drawer
        summaryDrawer.classList.add('active');
        document.body.classList.add('summary-drawer-open');
    } else {
        alert(`Summary not available for ${bookName} ${chapterNum} yet.`);
    }
}
// Initialize summary drawer close handlers
function initializeSummaryDrawer() {
    const closeSummaryBtn = document.getElementById('close-summary-btn');
    if (closeSummaryBtn) {
        closeSummaryBtn.addEventListener('click', closeSummaryDrawer);
    }
}
function closeSummaryDrawer() {
    const summaryDrawer = document.getElementById('summary-drawer');
    summaryDrawer.classList.remove('active');
    document.body.classList.remove('summary-drawer-open');
    // Track navigation back to bible page
    navigateToBiblePage();
}
// Refresh the content of an open summary drawer when chapter changes
function refreshOpenSummaryDrawer() {
    const summaryDrawer = document.getElementById('summary-drawer');
    if (!summaryDrawer || !summaryDrawer.classList.contains('active')) {
        return; // Drawer not open, nothing to refresh
    }
    // Check which type of drawer is open by examining the title
    const drawerTitle = document.querySelector('.summary-drawer-title');
    if (!drawerTitle) return;
    const titleText = drawerTitle.textContent;
    // Refresh based on the exact drawer type
    if (titleText === 'Chapter Summary') {
        showChapterSummary();
    } else if (titleText === 'Chapter Timeline') {
        showChapterTimeline();
    } else if (titleText === 'Chapter Characters') {
        showChapterCharacters();
    }
}
// Update drawer content when chapter changes
function updateDrawerContent() {
    const summaryDrawer = document.getElementById('summary-drawer');
    // Only update if drawer is open
    if (!summaryDrawer.classList.contains('active')) {
        return;
    }
    const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
    const currentDrawerType = summaryDrawerTitle.textContent;
    const bookName = bibleBooks[currentBook].name;
    const chapterNum = currentChapter;
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    // Refresh content based on current drawer type
    if (currentDrawerType === 'Chapter Summary') {
        const summaryPath = getSummaryPath(bookName);
        const summaryVarName = `${fileName.replace(/_/g, '')}Summary`;
        if (summaryPath) {
            // Load script and check if data exists for this chapter
            loadSummaryScriptAndCheck(summaryPath, bookName, chapterNum, summaryVarName);
        } else {
            closeSummaryDrawer();
        }
    } else if (currentDrawerType === 'Chapter Timeline') {
        const timelinePath = getTimelinePath(bookName);
        const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
        if (timelinePath) {
            // Load script and check if data exists for this chapter
            loadTimelineScriptAndCheck(timelinePath, bookName, chapterNum, timelineVarName);
        } else {
            closeSummaryDrawer();
        }
    } else if (currentDrawerType === 'Chapter Characters') {
        const charactersPath = getCharactersPath(bookName);
        const charactersVarName = `${fileName.replace(/_/g, '')}Characters`;
        if (charactersPath) {
            // Load script and check if data exists for this chapter
            loadCharactersScriptAndCheck(charactersPath, bookName, chapterNum, charactersVarName);
        } else {
            closeSummaryDrawer();
        }
    }
}
// Load summary script and check if chapter data exists
function loadSummaryScriptAndCheck(path, bookName, chapterNum, varName) {
    if (window[varName]) {
        // Already loaded, check if chapter data exists
        if (window[varName][chapterNum]) {
            displaySummary(bookName, chapterNum);
        } else {
            closeSummaryDrawer();
        }
    } else {
        // Load the script
        const script = document.createElement('script');
        script.src = path;
        script.onload = () => {
            if (window[varName] && window[varName][chapterNum]) {
                displaySummary(bookName, chapterNum);
            } else {
                closeSummaryDrawer();
            }
        };
        script.onerror = () => {
            closeSummaryDrawer();
        };
        document.body.appendChild(script);
    }
}
// Load timeline script and check if chapter data exists
function loadTimelineScriptAndCheck(path, bookName, chapterNum, varName) {
    if (window[varName]) {
        // Already loaded, check if chapter data exists
        if (window[varName][chapterNum]) {
            displayTimeline(bookName, chapterNum);
        } else {
            closeSummaryDrawer();
        }
    } else {
        // Load the script
        const script = document.createElement('script');
        script.src = path;
        script.onload = () => {
            if (window[varName] && window[varName][chapterNum]) {
                displayTimeline(bookName, chapterNum);
            } else {
                closeSummaryDrawer();
            }
        };
        script.onerror = () => {
            closeSummaryDrawer();
        };
        document.body.appendChild(script);
    }
}
// Load characters script and check if chapter data exists
function loadCharactersScriptAndCheck(path, bookName, chapterNum, varName) {
    if (window[varName]) {
        // Already loaded, check if chapter data exists
        if (window[varName][chapterNum]) {
            displayCharacters(bookName, chapterNum);
        } else {
            closeSummaryDrawer();
        }
    } else {
        // Load the script
        const script = document.createElement('script');
        script.src = path;
        script.onload = () => {
            if (window[varName] && window[varName][chapterNum]) {
                displayCharacters(bookName, chapterNum);
            } else {
                closeSummaryDrawer();
            }
        };
        script.onerror = () => {
            closeSummaryDrawer();
        };
        document.body.appendChild(script);
    }
}
// Initialize scrollbar auto-hide behavior
function initializeScrollbarBehavior() {
    const scrollableElements = [
        document.querySelector('.books-sidebar'),
        document.querySelector('.chapters-column'),
        document.querySelector('.verses-column'),
        document.querySelector('.content-area')
    ];
    scrollableElements.forEach(element => {
        if (element) {
            let hideTimeout;
            // Handle scroll events
            element.addEventListener('scroll', function() {
                element.classList.add('scrolling');
                clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    element.classList.remove('scrolling');
                }, 1000);
            });
            // Handle mouse hover events
            element.addEventListener('mouseenter', function() {
                element.classList.add('scrolling');
                clearTimeout(hideTimeout);
            });
            element.addEventListener('mouseleave', function() {
                clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    element.classList.remove('scrolling');
                }, 1000);
            });
        }
    });
}
// Show chapter timeline
function showChapterTimeline() {
    // Close mobile drawer if open
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const booksSidebar = document.querySelector('.books-sidebar');
    const chaptersColumn = document.querySelector('.chapters-column');
    const versesColumn = document.querySelector('.verses-column');
    if (drawerOverlay && drawerOverlay.classList.contains('active')) {
        drawerOverlay.classList.remove('active');
        booksSidebar.classList.remove('drawer-open');
        chaptersColumn.classList.remove('drawer-open');
        versesColumn.classList.remove('drawer-open');
        document.body.style.overflow = '';
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');
        if (hamburgerIcon) hamburgerIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
    }
    const bookName = bibleBooks[currentBook].name;
    const chapterNum = currentChapter;
    // Try to load from existing timeline files first, then fallback to database
    const timelinePath = getTimelinePath(bookName);
    if (timelinePath) {
        // Load the timeline dynamically and check for database content
        loadTimelineScriptWithDatabase(timelinePath, bookName, chapterNum);
    } else {
        // If no timeline file, load directly from database
        loadTimelineFromSupabase(bibleBooks[currentBook].file, chapterNum);
    }
}
// Load timeline script with database integration
async function loadTimelineScriptWithDatabase(path, bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    // Load database events first
    let databaseEvents = [];
    try {
        const bookFile = bibleBooks[currentBook].file;
        // First check if table exists and test connection
        const { data, error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('id, book_file, chapter, event_description, verse_reference, testament, order_index')
            .eq('book_file', bookFile)
            .eq('chapter', chapterNum)
            .order('order_index', { ascending: true })
            .order('id', { ascending: true });
        if (error) {
            // If table doesn't exist or has permission issues, continue with file data only
        } else {
            databaseEvents = data || [];
            // Uncomment the line below to push Matthew 1 data (run once as admin)
            // pushMatthew1TimelineData();
        }
    } catch (error) {
    }
    // Check if timeline is already loaded
    if (window[timelineVarName]) {
        displayTimeline(bookName, chapterNum, databaseEvents);
        return;
    }
    // Load the timeline script
    const script = document.createElement('script');
    script.src = path;
    script.onload = () => {
        displayTimeline(bookName, chapterNum, databaseEvents);
    };
    script.onerror = () => {
        // If script fails to load, just show database events
        displayTimeline(bookName, chapterNum, databaseEvents);
    };
    document.head.appendChild(script);
}
// Get timeline file path based on book name
function getTimelinePath(bookName) {
    // New Testament books
    const newTestamentBooks = ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', 
        'I Corinthians', 'II Corinthians', 'Galatians', 'Ephesians', 'Philippians', 
        'Colossians', 'I Thessalonians', 'II Thessalonians', 'I Timothy', 'II Timothy', 
        'Titus', 'Philemon', 'Hebrews', 'James', 'I Peter', 'II Peter', 'I John', 
        'II John', 'III John', 'Jude', 'Revelation'];
    // Old Testament books
    const oldTestamentBooks = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
        'Joshua', 'Judges', 'Ruth', 'I Samuel', 'II Samuel', 'I Kings', 'II Kings', 
        'I Chronicles', 'II Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 
        'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 
        'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 
        'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    if (newTestamentBooks.includes(bookName)) {
        return `resources/timeline/new-testament/${fileName}.js`;
    } else if (oldTestamentBooks.includes(bookName)) {
        return `resources/timeline/old-testament/${fileName}.js`;
    }
    return null;
}
// Load and display timeline
function loadTimelineScript(path, bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    // Check if timeline is already loaded
    if (window[timelineVarName]) {
        displayTimeline(bookName, chapterNum);
        return;
    }
    const script = document.createElement('script');
    script.src = path;
    script.onload = () => {
        displayTimeline(bookName, chapterNum);
    };
    script.onerror = () => {
        alert(`Timeline not available for ${bookName} ${chapterNum} yet.`);
    };
    document.body.appendChild(script);
}
// Display the timeline in the drawer
function displayTimeline(bookName, chapterNum, databaseEvents = []) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    // Try to access the timeline object from JS files
    const timelineData = window[timelineVarName];
    let timelineEvents = [];
    // Combine file-based timeline with database events
    if (timelineData && timelineData[chapterNum]) {
        timelineEvents = timelineData[chapterNum].map(event => ({
            id: `file_${Math.random()}`,
            event_description: event,
            verse_reference: '',
            isFromFile: true
        }));
    }
    // Add database events
    if (databaseEvents && databaseEvents.length > 0) {
        const dbEvents = databaseEvents.map(event => ({
            ...event,
            isFromFile: false
        }));
        timelineEvents = [...dbEvents]; // Only use database events, not both
    }
    if (timelineEvents.length > 0) {
        // Normalize all events to have consistent structure
        timelineEvents = timelineEvents.map(event => ({
            id: event.id,
            description: event.event_description || event.description || event,
            verse_reference: event.verse_reference || '',
            isFromFile: event.isFromFile || false,
            order_index: event.order_index || 0
        }));
        const summaryDrawer = document.getElementById('summary-drawer');
        const summaryDrawerContent = document.getElementById('summary-drawer-content');
        const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
        // Update drawer title
        summaryDrawerTitle.textContent = 'Chapter Timeline';
        // Format the timeline with proper styling and admin controls
        const formattedTimeline = timelineEvents
            .map((event, index) => {
                const verseDisplay = event.verse_reference ? `<div class="timeline-verse">${event.verse_reference}</div>` : '';
                const eventClass = event.isFromFile ? 'timeline-event-file' : 'timeline-event-db';
                return `
                    <li class="timeline-item ${eventClass}" data-event-id="${event.id || ''}" data-is-file="${event.isFromFile}">
                        <div class="timeline-content">
                            ${verseDisplay}
                            <div class="timeline-event">${event.description}</div>
                            ${!event.isFromFile && isAdmin() ? `
                                <button class="delete-timeline-item-btn" onclick="markTimelineForDeletion('${event.id}')" title="Mark this timeline entry for deletion" style="display: none;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="3,6 5,6 21,6"></polyline>
                                        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2,2v2"></path>
                                    </svg>
                                </button>
                            ` : ''}
                        </div>
                    </li>
                `;
            })
            .join('');
        const timelineBottomButtons = isAdmin() ? `
            <div class="timeline-bottom-section">
                <div class="timeline-bottom-buttons">
                    <button class="edit-mode-btn" id="timeline-edit-btn" onclick="toggleTimelineEditMode()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 2 4 4L12 16l-4 4-4-4L14 6z"></path>
                        </svg>
                        <span class="edit-mode-text">Edit</span>
                    </button>
                    <button class="add-timeline-btn" id="timeline-add-btn" onclick="addTimelineInline()" style="display: none;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add
                    </button>
                </div>
            </div>
        ` : '';
        // Use the scrollable structure for consistency
        summaryDrawerContent.innerHTML = `
            <div class="timeline-scroll-area">
                <ul class="timeline-list">${formattedTimeline}</ul>
            </div>
            ${timelineBottomButtons}
        `;
        // Add event listeners for timeline buttons (since we're using data attributes instead of onclick)
        setTimeout(() => {
            document.querySelectorAll('.edit-timeline-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const eventId = e.currentTarget.getAttribute('data-event-id');
                    const description = e.currentTarget.getAttribute('data-description');
                    const verse = e.currentTarget.getAttribute('data-verse') || '';
                    editTimelineEvent(eventId, description, verse);
                });
            });
            document.querySelectorAll('.delete-timeline-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const eventId = e.currentTarget.getAttribute('data-event-id');
                    const description = e.currentTarget.getAttribute('data-description');
                    deleteTimelineEvent(eventId, description);
                });
            });
        }, 100);
        // Track navigation
        navigateToPage('timeline');
        // Show the drawer
        summaryDrawer.classList.add('active');
        document.body.classList.add('summary-drawer-open');
    } else {
        // Show empty state with add button for admins
        if (isAdmin()) {
            displayEmptyTimelineForAdmin(bookName, chapterNum);
        } else {
            alert(`Timeline not available for ${bookName} ${chapterNum} yet.`);
        }
    }
}
// Display empty timeline state for admin users
function displayEmptyTimelineForAdmin(bookName, chapterNum) {
    const summaryDrawer = document.getElementById('summary-drawer');
    const summaryDrawerContent = document.getElementById('summary-drawer-content');
    const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
    // Update drawer title
    summaryDrawerTitle.textContent = 'Chapter Timeline';
    // Show empty state with add button
    summaryDrawerContent.innerHTML = `
        <div class="timeline-scroll-area">
            <div class="no-timeline">
                <div class="no-timeline-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                    </svg>
                </div>
                <h3>No Timeline Events</h3>
                <p>No timeline events available for ${bookName} Chapter ${chapterNum} yet.</p>
            </div>
        </div>
        <div class="timeline-bottom-section">
            <div class="add-timeline-container">
                <button class="add-timeline-btn" onclick="showAddTimelineModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Timeline Event
                </button>
            </div>
        </div>
    `;
    // Track navigation
    navigateToPage('timeline');
    // Show the drawer
    summaryDrawer.classList.add('active');
    document.body.classList.add('summary-drawer-open');
}
// Show chapter characters
async function showChapterCharacters() {
    // Close mobile drawer if open
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const booksSidebar = document.querySelector('.books-sidebar');
    const chaptersColumn = document.querySelector('.chapters-column');
    const versesColumn = document.querySelector('.verses-column');
    if (drawerOverlay && drawerOverlay.classList.contains('active')) {
        drawerOverlay.classList.remove('active');
        booksSidebar.classList.remove('drawer-open');
        chaptersColumn.classList.remove('drawer-open');
        versesColumn.classList.remove('drawer-open');
        document.body.style.overflow = '';
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');
        if (hamburgerIcon) hamburgerIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
    }
    const book = bibleBooks[currentBook];
    const chapterNum = currentChapter;
    // Load characters from Supabase
    await loadCharactersFromSupabase(book.file, chapterNum);
}
// Load characters from Supabase
async function loadCharactersFromSupabase(bookFile, chapter) {
    try {
        const { data, error } = await bibleDataManager.supabaseClient
            .from('bible_characters')
            .select('id, name, description')
            .eq('book_file', bookFile)
            .eq('chapter', chapter)
            .order('id', { ascending: true });
        if (error) {
            showToast('Failed to load characters. Please try again.', 'error');
            return;
        }
        if (!data || data.length === 0) {
            if (isAdmin()) {
                // Show empty state with add button for admins
                displayCharacters([]);
            } else {
                showToast('Characters not available for this chapter yet.', 'info');
            }
            return;
        }
        displayCharacters(data);
    } catch (error) {
        showToast('Failed to load characters. Please try again.', 'error');
    }
}
// Display characters in the drawer
function displayCharacters(characters) {
    const summaryDrawer = document.getElementById('summary-drawer');
    const summaryDrawerContent = document.getElementById('summary-drawer-content');
    const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
    // Update drawer title
    summaryDrawerTitle.textContent = 'Chapter Characters';
    // Format the characters with proper styling and admin action buttons
    const formattedCharacters = characters
        .map((character, index) => {
            const actionButtons = isAdmin() ? `
                <div class="character-actions">
                    <button class="edit-character-btn" onclick="editCharacter(${character.id}, '${character.name.replace(/'/g, "\\'")}', '${character.description.replace(/'/g, "\\'")}')"
                        title="Edit character">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 2 4 4L12 16l-4 4-4-4L14 6z"></path>
                        </svg>
                    </button>
                    <button class="delete-character-btn" onclick="deleteCharacter(${character.id}, '${character.name.replace(/'/g, "\\'")}')"
                        title="Delete character">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3,6 5,6 21,6"></polyline>
                            <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
                        </svg>
                    </button>
                </div>
            ` : '';
            return `
                <div class="character-item">
                    <div class="character-content">
                        <div class="character-number">${index + 1}. ${character.name}</div>
                        <div class="character-description">${character.description}</div>
                    </div>
                    ${actionButtons}
                </div>
            `;
        })
        .join('');
    const addCharacterButton = isAdmin() ? `
        <div class="add-character-container">
            <button class="add-character-btn" onclick="showAddCharacterModal()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Character
            </button>
        </div>
    ` : '';
    // Restructure with scrollable content area and fixed bottom button
    summaryDrawerContent.innerHTML = `
        <div class="characters-scroll-area">
            <div class="characters-list">
                ${formattedCharacters || '<div class="no-characters">No characters available for this chapter yet.</div>'}
            </div>
        </div>
        <div class="characters-bottom-section">
            ${addCharacterButton}
        </div>
    `;
    // Track navigation
    navigateToPage('characters');
    // Show the drawer
    summaryDrawer.classList.add('active');
    document.body.classList.add('summary-drawer-open');
}
// Show modal to add new character
function showAddCharacterModal() {
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Add New Character</h3>
                <button class="close-character-modal" onclick="closeAddCharacterModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="add-character-form">
                    <div class="form-group">
                        <label for="character-name">Character Name *</label>
                        <input type="text" id="character-name" name="name" required maxlength="100" placeholder="Enter character name">
                    </div>
                    <div class="form-group">
                        <label for="character-description">Description *</label>
                        <textarea id="character-description" name="description" required maxlength="500" placeholder="Enter character description..." rows="4"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn" onclick="closeAddCharacterModal()">Cancel</button>
                        <button type="submit" class="save-btn">Save Character</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
    // Handle form submission
    document.getElementById('add-character-form').addEventListener('submit', handleAddCharacter);
    // Focus on name input
    setTimeout(() => document.getElementById('character-name').focus(), 100);
}
// Close character modal
function closeAddCharacterModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
// Edit character function
async function editCharacter(characterId, currentName, currentDescription) {
    if (!isAdmin()) {
        showToast('Admin privileges required to edit characters.', 'error');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay active';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Edit Character</h3>
                <button class="close-character-modal" onclick="closeEditCharacterModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="edit-character-form">
                    <div class="form-group">
                        <label for="edit-character-name">Character Name *</label>
                        <input type="text" id="edit-character-name" name="name" required maxlength="100" value="${currentName}" placeholder="Enter character name">
                    </div>
                    <div class="form-group">
                        <label for="edit-character-description">Character Description *</label>
                        <textarea id="edit-character-description" name="description" required maxlength="500" rows="4" placeholder="Describe the character...">${currentDescription}</textarea>
                    </div>
                    <div class="form-buttons">
                        <button type="button" onclick="closeEditCharacterModal()" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Update Character</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Handle form submission
    const form = document.getElementById('edit-character-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const description = formData.get('description').trim();
        if (!name || !description) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }
        try {
            await updateCharacterInSupabase(characterId, name, description);
            closeEditCharacterModal();
            // Reload characters
            const book = bibleBooks[currentBook];
            await loadCharactersFromSupabase(book.file, currentChapter);
            const isMobile = window.innerWidth <= 768;
            showToast(isMobile ? 'Updated!' : 'Character updated successfully!', 'success');
        } catch (error) {
            showToast('Error updating character: ' + error.message, 'error');
        }
    });
}
// Delete character function
async function deleteCharacter(characterId, characterName) {
    if (!isAdmin()) {
        showToast('Admin privileges required to delete characters.', 'error');
        return;
    }
    // Show custom delete confirmation popup
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay active';
    modal.innerHTML = `
        <div class="character-modal delete-modal">
            <div class="character-modal-header">
                <h3>Delete Character</h3>
            </div>
            <div class="character-modal-body">
                <p class="delete-message">Are you sure you want to delete "${characterName}"?</p>
                <div class="form-buttons">
                    <button type="button" onclick="closeDeleteModal()" class="cancel-btn">Cancel</button>
                    <button type="button" onclick="confirmDeleteCharacter(${characterId})" class="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Store modal reference globally for cleanup
    window.currentDeleteModal = modal;
}
// Close delete modal
function closeDeleteModal() {
    const modal = window.currentDeleteModal;
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
        window.currentDeleteModal = null;
    }
}
// Confirm delete character
async function confirmDeleteCharacter(characterId) {
    try {
        await deleteCharacterFromSupabase(characterId);
        // Close modal
        closeDeleteModal();
        // Reload characters
        const book = bibleBooks[currentBook];
        await loadCharactersFromSupabase(book.file, currentChapter);
        const isMobile = window.innerWidth <= 768;
        showToast(isMobile ? 'Deleted!' : 'Character deleted successfully!', 'success');
    } catch (error) {
        showToast('Error deleting character: ' + error.message, 'error');
    }
}
// Close edit modal
function closeEditCharacterModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
// Update character in Supabase
async function updateCharacterInSupabase(characterId, name, description) {
    const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/bible_characters?id=eq.${characterId}`, {
        method: 'PATCH',
        headers: {
            'apikey': SUPABASE_NOTES_CONFIG.anonKey,
            'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
            name: name,
            description: description
        })
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update character: ${errorText}`);
    }
}
// Delete character from Supabase
async function deleteCharacterFromSupabase(characterId) {
    const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/bible_characters?id=eq.${characterId}`, {
        method: 'DELETE',
        headers: {
            'apikey': SUPABASE_NOTES_CONFIG.anonKey,
            'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete character: ${errorText}`);
    }
}
// Handle adding new character
async function handleAddCharacter(e) {
    e.preventDefault();
    const name = document.getElementById('character-name').value.trim();
    const description = document.getElementById('character-description').value.trim();
        if (!name || !description) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }    const saveBtn = document.querySelector('.save-btn');
    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';
    try {
        const book = bibleBooks[currentBook];
        const success = await saveCharacterToSupabase(book.file, currentChapter, name, description);
        if (success) {
            closeAddCharacterModal();
            // Reload characters to show the new one
            await loadCharactersFromSupabase(book.file, currentChapter);
            // Show success message
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                showToast('Added!', 'success');
            } else {
                showDesktopNotification('Character added successfully!');
            }
        }
    } catch (error) {
        // Show specific error message for RLS issues
        if (error.message && error.message.includes('Permission denied')) {
            showToast(error.message, 'error');
        } else {
            showToast('Failed to add character. Please try again.', 'error');
        }
    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save Character';
    }
}
// Save character to Supabase
// Save character to Supabase
async function saveCharacterToSupabase(bookFile, chapter, name, description) {
    try {
        // Check if user is in admin mode
        if (!isAdmin()) {
            throw new Error('Admin privileges required to add characters.');
        }
        // Find the book to get testament information
        const book = bibleBooks.find(b => b.file === bookFile);
        if (!book) {
            throw new Error('Book not found');
        }
        // Use the testament format that matches the database constraint
        const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
        // Use direct fetch approach to create the character
        const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/bible_characters`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_NOTES_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                book_file: bookFile,
                chapter: chapter,
                name: name,
                description: description,
                testament: testament,
                created_at: new Date().toISOString()
            })
        });
        if (response.ok) {
            return true;
        } else {
            const errorText = await response.text();
            if (response.status === 401 || response.status === 403) {
                throw new Error('Permission denied. The RLS policy may not be working correctly.');
            } else if (response.status === 400 && errorText.includes('testament')) {
                throw new Error('Invalid testament value. Please check the database constraints.');
            } else {
                throw new Error(`Database error (${response.status}): ${errorText}`);
            }
        }
    } catch (error) {
        throw error;
    }
}
// GitHub Backend for Notes
async function loadNotesFromSupabase() {
    try {
        const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/${SUPABASE_NOTES_CONFIG.tableName}?id=eq.main`, {
            headers: {
                'apikey': SUPABASE_NOTES_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                verseNotes = data[0].notes || {};
                // Apply notes to current chapter if loaded
                applyAllNoteDisplays();
                return true;
            }
        }
        verseNotes = {};
        return false;
    } catch (error) {
        // Fallback to localStorage
        const localNotes = localStorage.getItem('verseNotes');
        if (localNotes) {
            verseNotes = JSON.parse(localNotes);
        } else {
            verseNotes = {};
        }
        return false;
    }
}
async function saveNotesToSupabase() {
    // Save to localStorage immediately so notes appear right away
    localStorage.setItem('verseNotes', JSON.stringify(verseNotes));
    try {
        const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/${SUPABASE_NOTES_CONFIG.tableName}?id=eq.main`, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_NOTES_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                notes: verseNotes,
                last_updated: new Date().toISOString()
            })
        });
        if (response.ok) {
            return true;
        } else {
            const error = await response.text();
            return false;
        }
    } catch (error) {
        return false;
    }
}
// Memory Verses - Load from Supabase
async function loadMemoryVersesFromSupabase() {
    // Initialize memoryVerses if undefined
    if (typeof window.memoryVerses === 'undefined') {
        window.memoryVerses = [];
    }
    
    // Load from localStorage first (instant, offline-safe)
    const localVerses = localStorage.getItem('memoryVerses');
    if (localVerses) {
        try {
            window.memoryVerses = JSON.parse(localVerses);
            markBooksWithMemoryVerses();
            updateVerseMemoryVerseIndicators();
            displayChapter(); // Refresh chapter display to show memory verse styling
        } catch (e) {
        }
    }
    
    // Async sync from Supabase (don't block UI)
    try {
        // Fetch all rows - each row contains one verse_reference
        const response = await fetch(`${SUPABASE_MEMORY_CONFIG.url}/rest/v1/${SUPABASE_MEMORY_CONFIG.tableName}?select=verse_reference&order=id.asc`, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_MEMORY_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_MEMORY_CONFIG.anonKey}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                // Extract verse_reference from each row to create array of strings
                const supabaseVerses = data.map(row => row.verse_reference).filter(ref => ref);
                // Update if Supabase has different data
                if (JSON.stringify(supabaseVerses) !== JSON.stringify(window.memoryVerses)) {
                    window.memoryVerses = supabaseVerses;
                    localStorage.setItem('memoryVerses', JSON.stringify(window.memoryVerses));
                    markBooksWithMemoryVerses();
                    updateVerseMemoryVerseIndicators();
                    displayChapter();
                } else {
                }
                return true;
            } else {
            }
        } else {
        }
        return false;
    } catch (error) {
        return false;
    }
}

// Toggle memory verse status
async function toggleMemoryVerse() {
    if (!currentNoteVerse) return;
    const verseReference = `${bibleBooks[currentBook].name} ${currentChapter}:${currentNoteVerse}`;
    
    // Initialize memoryVerses if it doesn't exist
    if (typeof window.memoryVerses === 'undefined') {
        window.memoryVerses = [];
    }
    
    // Toggle memory verse status
    const isMemoryVerse = window.memoryVerses.includes(verseReference);
    if (isMemoryVerse) {
        // Remove from memory verses
        window.memoryVerses = window.memoryVerses.filter(v => v !== verseReference);
    } else {
        // Add to memory verses
        window.memoryVerses.push(verseReference);
    }
    
    // Save to localStorage immediately (for instant UI update)
    localStorage.setItem('memoryVerses', JSON.stringify(window.memoryVerses));
    
    // Update UI indicators immediately
    markBooksWithMemoryVerses();
    updateVerseMemoryVerseIndicators();
    
    // Update the verse line class
    const verseLine = document.querySelector(`.verse-line[data-verse="${currentNoteVerse}"]`);
    if (verseLine) {
        if (isMemoryVerse) {
            verseLine.classList.remove('memory-verse');
        } else {
            verseLine.classList.add('memory-verse');
        }
    }
    
    // Async save to Supabase (non-blocking) - don't await
    saveMemoryVersesToSupabase().catch(error => {
    });
}

async function saveMemoryVersesToSupabase() {
    // Save to localStorage immediately
    localStorage.setItem('memoryVerses', JSON.stringify(window.memoryVerses));
    try {
        // Delete all existing rows first
        // Using id>=0 to match all rows (since id is auto-increment starting from 1)
        const deleteResponse = await fetch(`${SUPABASE_MEMORY_CONFIG.url}/rest/v1/${SUPABASE_MEMORY_CONFIG.tableName}?id=gte.0`, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_MEMORY_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_MEMORY_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            }
        });
        if (!deleteResponse.ok) {
            const errorText = await deleteResponse.text();
        } else {
        }
        // Only insert if we have verses to save
        if (window.memoryVerses && window.memoryVerses.length > 0) {
            // Insert all verses as individual rows
            const rows = window.memoryVerses.map(verse => ({
                verse_reference: verse
            }));
            const response = await fetch(`${SUPABASE_MEMORY_CONFIG.url}/rest/v1/${SUPABASE_MEMORY_CONFIG.tableName}`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_MEMORY_CONFIG.anonKey,
                    'Authorization': `Bearer ${SUPABASE_MEMORY_CONFIG.anonKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(rows)
            });
            if (response.ok) {
                return true;
            } else {
                const error = await response.text();
                return false;
            }
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
}
// Clean up duplicate memory verses in Supabase
async function cleanupDuplicateMemoryVerses() {
    try {
        // Fetch all rows from Supabase
        const response = await fetch(`${SUPABASE_MEMORY_CONFIG.url}/rest/v1/${SUPABASE_MEMORY_CONFIG.tableName}?select=verse_reference&order=id.asc`, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_MEMORY_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_MEMORY_CONFIG.anonKey}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            // Extract verse references and remove duplicates
            const allVerses = data.map(row => row.verse_reference).filter(ref => ref);
            const uniqueVerses = [...new Set(allVerses)];
            // Update global memoryVerses with unique list
            window.memoryVerses = uniqueVerses;
            // Save back to Supabase (this will delete all and re-insert unique ones)
            await saveMemoryVersesToSupabase();
            showToast(`Cleaned up ${allVerses.length - uniqueVerses.length} duplicate verses`, 3000);
            // Update UI
            markBooksWithMemoryVerses();
            updateVerseMemoryVerseIndicators();
            displayChapter(); // Refresh chapter display to update memory verse styling
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

// Notes functionality
function openNotesModal(verseNum = null) {
    // Check admin mode
    if (!isAdmin()) {
        return; // Silently prevent opening in non-admin mode
    }
    const modal = document.querySelector('.notes-modal-overlay');
    const textarea = document.getElementById('notes-textarea');
    const verseRef = document.getElementById('notes-verse-ref');
    const deleteBtn = document.getElementById('delete-note-btn');
    if (!modal) return;
    // If verseNum provided, use it, otherwise check for highlighted verse
    if (verseNum === null) {
        const highlightedVerse = document.querySelector('.verse-line.highlighted');
        if (highlightedVerse) {
            verseNum = parseInt(highlightedVerse.dataset.verse);
        } else {
            alert('Please select a verse first');
            return;
        }
    }
    currentNoteVerse = verseNum;
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    const existingNote = verseNotes[noteKey];
    // Set verse reference
    verseRef.textContent = `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`;
    
    // Load existing note if available
    if (existingNote && existingNote.text) {
        textarea.value = existingNote.text;
        currentNoteColor = existingNote.color || null;
        deleteBtn.style.display = 'block';
    } else {
        textarea.value = '';
        currentNoteColor = null;
        deleteBtn.style.display = 'none';
    }
    // Update active color button
    // Color buttons removed - note colors no longer available
    
    // Save current scroll position before preventing body scroll
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
    // Track navigation
    navigateToPage('notes');
    modal.style.display = 'flex';
}
function closeNotesModal() {
    const modal = document.querySelector('.notes-modal-overlay');
    // Restore scroll position
    const scrollYStyle = document.body.style.top;
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    
    if (scrollYStyle) {
        // scrollYStyle is in format like "-1234px", extract the number and negate it
        const scrollY = Math.abs(parseInt(scrollYStyle));
        window.scrollTo(0, scrollY);
    }
    
    if (modal) {
        modal.style.display = 'none';
    }
    // Track navigation back to bible page
    navigateToBiblePage();
}
// Handle bottom sheet swipe gesture for mobile
function initializeNotesBottomSheetSwipe() {
    if (window.innerWidth > 768) return; // Only for mobile
    
    const modal = document.querySelector('.notes-modal-overlay');
    const sheet = document.querySelector('.notes-modal');
    const dragHandle = document.getElementById('notes-sheet-drag-handle');
    const contentArea = document.getElementById('notes-modal-content');
    
    if (!modal || !sheet || !dragHandle || !contentArea) return;
    
    let dragStartY = 0;
    let dragStartHeight = 0;
    let sheetStartY = 0;
    
    // Drag handle to expand/collapse height
    dragHandle.addEventListener('touchstart', (e) => {
        dragStartY = e.touches[0].clientY;
        dragStartHeight = sheet.offsetHeight;
        sheet.style.transition = 'none';
    }, false);

    dragHandle.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const diff = dragStartY - currentY;
        const newHeight = dragStartHeight + diff;
        const maxHeight = window.innerHeight * 0.95;
        const minHeight = 250;

        if (newHeight >= minHeight && newHeight <= maxHeight) {
            sheet.style.maxHeight = newHeight + 'px';
        }
    }, false);

    dragHandle.addEventListener('touchend', (e) => {
        sheet.style.transition = 'max-height 0.3s ease';
        const currentHeight = sheet.offsetHeight;
        const maxHeight = window.innerHeight * 0.95;
        const threshold = maxHeight * 0.4;

        if (currentHeight < threshold) {
            closeNotesModal();
        } else {
            sheet.style.maxHeight = '85vh';
        }
    }, false);

    // Swipe down anywhere on the sheet to close
    sheet.addEventListener('touchstart', (e) => {
        // Only track if not on drag handle
        if (!e.target.closest('#notes-sheet-drag-handle')) {
            sheetStartY = e.touches[0].clientY;
        }
    }, false);

    sheet.addEventListener('touchmove', (e) => {
        if (!e.target.closest('#notes-sheet-drag-handle')) {
            const currentY = e.touches[0].clientY;
            const swipeDist = currentY - sheetStartY;
            
            // Only prevent default if swiping up AND content is at top
            if (swipeDist < -20 && contentArea && contentArea.scrollTop === 0) {
                e.preventDefault();
            }
            // Only prevent default if swiping down AND content is at top
            else if (swipeDist > 20 && contentArea && contentArea.scrollTop === 0) {
                e.preventDefault();
            }
        }
    }, false);

    sheet.addEventListener('touchend', (e) => {
        const sheetEndY = e.changedTouches[0].clientY;
        const diffY = sheetEndY - sheetStartY;
        
        // Only close if swiped down more than 50px AND content is at top
        if (diffY > 50 && contentArea && contentArea.scrollTop === 0 && !e.target.closest('#notes-sheet-drag-handle')) {
            sheet.style.transition = 'max-height 0.3s ease';
            closeNotesModal();
        }
        // Only close if trying to scroll up AND content is already at top
        else if (diffY < -20 && contentArea && contentArea.scrollTop === 0 && !e.target.closest('#notes-sheet-drag-handle')) {
            sheet.style.transition = 'max-height 0.3s ease';
            closeNotesModal();
        }
    }, false);
}
async function saveNote() {
    const textarea = document.getElementById('notes-textarea');
    const noteText = textarea.value.trim();
    const loadingEl = document.getElementById('notes-loading');
    if (!currentNoteVerse) return;
    // Show loading
    if (loadingEl) loadingEl.classList.add('active');
    try {
        const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${currentNoteVerse}`;
        // Allow saving if there's text OR a color is selected
        if (noteText || currentNoteColor) {
            verseNotes[noteKey] = {
                text: noteText,
                color: currentNoteColor,
                book: bibleBooks[currentBook].name,
                chapter: currentChapter,
                verse: currentNoteVerse,
                timestamp: new Date().toISOString()
            };
        } else {
            delete verseNotes[noteKey];
        }
        // Save to Supabase (will also save locally as fallback)
        await saveNotesToSupabase();
        updateVerseNoteDisplay(currentNoteVerse);
        closeNotesModal();
    } finally {
        // Hide loading
        if (loadingEl) loadingEl.classList.remove('active');
    }
}
async function deleteNote() {
    if (!currentNoteVerse) return;
    const loadingEl = document.getElementById('notes-loading');
    // Show loading
    if (loadingEl) loadingEl.classList.add('active');
    try {
        const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${currentNoteVerse}`;
        delete verseNotes[noteKey];
        // Save to Supabase (will also save locally as fallback)
        await saveNotesToSupabase();
        updateVerseNoteDisplay(currentNoteVerse);
        closeNotesModal();
    } finally {
        // Hide loading
        if (loadingEl) loadingEl.classList.remove('active');
    }
}
function updateVerseNoteDisplay(verseNum) {
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
    if (!verseLine) return;
    // Remove all note classes
    verseLine.classList.remove('has-note', 'has-text', 'note-burgundy', 'note-forest', 'note-navy', 'note-amber', 'note-violet', 'note-teal', 'note-rust', 'note-olive', 'note-indigo', 'note-slate');
    // Add note classes if note exists
    if (verseNotes[noteKey]) {
        verseLine.classList.add('has-note');
        // Add has-text class only if note has text content
        if (verseNotes[noteKey].text && verseNotes[noteKey].text.trim()) {
            verseLine.classList.add('has-text');
        }
        if (verseNotes[noteKey].color) {
            verseLine.classList.add(`note-${verseNotes[noteKey].color}`);
        }
    }
}
function applyAllNoteDisplays() {
    const verses = document.querySelectorAll('.verse-line');
    verses.forEach(verseLine => {
        const verseNum = parseInt(verseLine.dataset.verse);
        const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
        if (verseNotes[noteKey]) {
            verseLine.classList.add('has-note');
            // Add has-text class only if note has text content
            if (verseNotes[noteKey].text && verseNotes[noteKey].text.trim()) {
                verseLine.classList.add('has-text');
            }
            if (verseNotes[noteKey].color) {
                verseLine.classList.add(`note-${verseNotes[noteKey].color}`);
            }
        }
    });
}
// Show note viewer for a verse if it has a note
function showNoteViewerIfExists(verseNum) {
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    const note = verseNotes[noteKey];
    // Only show viewer if note exists AND has text content
    if (note && note.text && note.text.trim()) {
        showNoteViewer(verseNum, note);
    } else {
        hideNoteViewer();
    }
}
function showNoteViewer(verseNum, note) {
    const popup = document.getElementById('note-viewer-popup');
    const ref = document.getElementById('note-viewer-ref');
    const content = document.getElementById('note-viewer-content');
    const modal = document.querySelector('.note-viewer-modal');
    if (!popup) return;
    ref.textContent = `${bibleBooks[currentBook].name} ${currentChapter}:${verseNum}`;
    content.textContent = note.text;
    // Reset modal height to default
    if (modal) {
        modal.style.height = '';
        modal.style.transform = '';
    }
    // Save current scroll position before preventing body scroll
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
    popup.style.display = 'flex';
    // Update admin UI to show/hide edit button
    updateAdminUI();
    // Store current viewing verse for edit button
    popup.dataset.verse = verseNum;
}
function hideNoteViewer() {
    const popup = document.getElementById('note-viewer-popup');
    const modal = document.querySelector('.note-viewer-modal');
    // Only restore scroll position if modal was actually open
    if (document.body.classList.contains('modal-open')) {
        const scrollYStyle = document.body.style.top;
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        
        if (scrollYStyle) {
            // scrollYStyle is in format like "-1234px", extract the number and negate it
            const scrollY = Math.abs(parseInt(scrollYStyle));
            window.scrollTo(0, scrollY);
        }
    }
    if (popup) {
        popup.style.display = 'none';
    }
    if (modal) {
        modal.style.transform = '';
        modal.style.transition = '';
        modal.style.height = '';
    }
}
// Admin Mode Functions
function isAdmin() {
    // If isAdmin hasn't been set, default to false
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === null) {
        localStorage.setItem('isAdmin', 'false');
        return false;
    }
    return adminStatus === 'true';
}
function updateAdminUI() {
    const editButtons = document.querySelectorAll('.note-viewer-edit-btn');
    const isAdminMode = isAdmin();
    const adminToggle = document.getElementById('admin-toggle');
    const adminCheck = adminToggle?.querySelector('.admin-check');
    const voiceBtn = document.getElementById('voice-btn');
    const rightMenuBtn = document.getElementById('right-menu-btn');
    const rightNotesOption = document.getElementById('right-notes-option');
    const rightKingsOption = document.getElementById('right-kings-option');
    const rightProphetsOption = document.getElementById('right-prophets-option');
    const rightTimelineOption = document.getElementById('right-timeline-option');
    const rightCharacterOption = document.getElementById('right-character-option');
    const rightLifeOfJesusOption = document.getElementById('right-life-of-jesus-option');
    const rightCultOption = document.getElementById('right-cult-option');
    const rightPrayersOption = document.getElementById('right-prayers-option');
    
    editButtons.forEach(btn => {
        btn.style.display = isAdminMode ? 'flex' : 'none';
    });
    // Update voice button visibility
    if (voiceBtn) {
        voiceBtn.style.display = isAdminMode ? 'flex' : 'none';
    }
    // Right menu button should always be visible (removed admin check)
    
    // Show/hide admin-only menu items in right sidebar
    if (rightNotesOption) {
        rightNotesOption.style.display = isAdminMode ? 'flex' : 'none';
    }
    if (rightKingsOption) {
        rightKingsOption.style.display = 'none';
    }
    if (rightProphetsOption) {
        rightProphetsOption.style.display = 'none';
    }
    if (rightTimelineOption) {
        rightTimelineOption.style.display = 'none';
    }
    if (rightCharacterOption) {
        rightCharacterOption.style.display = isAdminMode ? 'flex' : 'none';
    }
    if (rightLifeOfJesusOption) {
        rightLifeOfJesusOption.style.display = isAdminMode ? 'flex' : 'none';
    }
    if (rightCultOption) {
        rightCultOption.style.display = isAdminMode ? 'flex' : 'none';
    }
    
    if (rightPrayersOption) {
        rightPrayersOption.style.display = isAdminMode ? 'flex' : 'none';
    }
    
    // Update admin toggle button state
    if (adminToggle) {
        if (isAdminMode) {
            adminToggle.classList.add('active');
            if (adminCheck) adminCheck.style.display = 'block';
        } else {
            adminToggle.classList.remove('active');
            if (adminCheck) adminCheck.style.display = 'none';
        }
    }
}
function showAdminNotification() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Show toast message on mobile
        showToast('You are admin now', 'success');
    } else {
        // Show Jira-style popup on desktop
        showDesktopNotification('You are admin now');
    }
}
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    // Remove after 2 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
function showDesktopNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'admin-notification';
    notification.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    // Remove after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}
// Initialize notes modal
function initializeNotesModal() {
    const modal = document.querySelector('.notes-modal-overlay');
    const closeBtn = document.querySelector('.notes-modal-close-btn');
    const saveBtn = document.getElementById('save-note-btn');
    const deleteBtn = document.getElementById('delete-note-btn');
    if (!modal) return;
    // Close modal handlers
    closeBtn?.addEventListener('click', closeNotesModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeNotesModal();
        }
    });
    // Save note
    saveBtn?.addEventListener('click', saveNote);
    // Delete note
    deleteBtn?.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this note?')) {
            deleteNote();
        }
    });
    
    // Add swipe-down to close for mobile bottom sheet
    initializeNotesBottomSheetSwipe();
    
    // Color selection removed - note colors no longer available
    
    // Color navigation buttons
    const colorPrev = document.querySelector('.notes-color-prev');
    const colorNext = document.querySelector('.notes-color-next');
    const colorOptions = document.querySelector('.notes-color-options');
    if (colorPrev && colorNext && colorOptions) {
        colorPrev.addEventListener('click', () => {
            colorOptions.scrollBy({ left: -200, behavior: 'smooth' });
        });
        colorNext.addEventListener('click', () => {
            colorOptions.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
    // Note viewer buttons
    const noteViewerEditBtn = document.getElementById('note-viewer-edit-btn');
    const noteViewerCloseBtn = document.getElementById('note-viewer-close-btn');
    noteViewerEditBtn?.addEventListener('click', () => {
        const popup = document.getElementById('note-viewer-popup');
        const verseNum = parseInt(popup.dataset.verse);
        if (verseNum) {
            hideNoteViewer();
            openNotesModal(verseNum);
        }
    });
    noteViewerCloseBtn?.addEventListener('click', hideNoteViewer);
    // Close note viewer when clicking on overlay background
    const noteViewerOverlay = document.getElementById('note-viewer-popup');
    noteViewerOverlay?.addEventListener('click', (e) => {
        if (e.target === noteViewerOverlay) {
            hideNoteViewer();
        }
    });
    // Mobile drag functionality - expand/collapse bottom sheet
    const noteViewerModal = document.querySelector('.note-viewer-modal');
    const noteViewerHeader = document.querySelector('.note-viewer-header');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let initialHeight = 0;
    // Reset modal height to default when opening
    function resetModalHeight() {
        if (noteViewerModal && window.innerWidth <= 768) {
            noteViewerModal.style.height = '';
            noteViewerModal.style.transform = '';
        }
    }
    if (noteViewerHeader && window.innerWidth <= 768) {
        noteViewerHeader.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            isDragging = true;
            initialHeight = noteViewerModal.offsetHeight;
            noteViewerModal.style.transition = 'none';
        });
        noteViewerHeader.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;
            // Calculate new height based on drag direction
            const newHeight = initialHeight - deltaY;
            const maxHeight = window.innerHeight * 0.95;
            const minHeight = window.innerHeight * 0.3;
            // Allow dragging in both directions within bounds
            if (newHeight >= minHeight && newHeight <= maxHeight) {
                noteViewerModal.style.height = `${newHeight}px`;
            } else if (deltaY > 0 && newHeight < minHeight) {
                // Dragging down below minimum - prepare to close
                const excess = minHeight - newHeight;
                noteViewerModal.style.transform = `translateY(${excess}px)`;
            }
        });
        noteViewerHeader.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            noteViewerModal.style.transition = 'transform 0.3s ease, height 0.2s ease';
            const deltaY = currentY - startY;
            const newHeight = initialHeight - deltaY;
            const minHeight = window.innerHeight * 0.3;
            // If dragged down significantly below minimum, close the modal
            if (newHeight < minHeight - 50) {
                noteViewerModal.classList.add('closing');
                setTimeout(() => {
                    hideNoteViewer();
                    noteViewerModal.classList.remove('closing');
                    noteViewerModal.style.transform = '';
                    noteViewerModal.style.transition = '';
                    noteViewerModal.style.height = '';
                }, 300);
            } else {
                // Snap back to valid height
                noteViewerModal.style.transform = '';
            }
        });
    }
    // Call resetModalHeight when note viewer is shown
    const originalShowNoteViewer = window.showNoteViewer;
}
// ========================= SUMMARY MANAGEMENT =========================
async function loadSummaryFromSupabase(bookFile, chapter) {
    try {
        const { data, error } = await bibleDataManager.supabaseClient
            .from('chapter_summaries')
            .select('id, content')
            .eq('book_file', bookFile)
            .eq('chapter', chapter)
            .single();
        if (error && error.code !== 'PGRST116') { // PGRST116 means no rows returned
            showToast('Failed to load summary. Please try again.', 'error');
            return;
        }
        displaySummary(data ? [data] : []);
    } catch (error) {
        showToast('Failed to load summary. Please try again.', 'error');
    }
}
function displaySummary(summaryData) {
    const summaryDrawer = document.getElementById('summary-drawer');
    const summaryDrawerContent = document.getElementById('summary-drawer-content');
    const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
    // Update drawer title
    summaryDrawerTitle.textContent = 'Chapter Summary';
    const summary = summaryData.length > 0 ? summaryData[0] : null;
    const summaryContent = summary ? `
        <div class="summary-content">
            <div class="summary-text">${summary.content}</div>
            ${isAdmin() ? `
                <div class="summary-actions">
                    <button class="edit-summary-btn" onclick="editSummary(${summary.id}, '${summary.content.replace(/'/g, "\\'")}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 2 4 4L12 16l-4 4-4-4L14 6z"></path>
                        </svg>
                        Edit
                    </button>
                </div>
            ` : ''}
        </div>
    ` : `
        <div class="no-summary">
            <div class="no-summary-message">No summary available for this chapter yet.</div>
        </div>
    `;
    const addSummaryButton = isAdmin() && !summary ? `
        <div class="summary-bottom-section">
            <div class="add-summary-container">
                <button class="add-summary-btn" onclick="showAddSummaryModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Summary
                </button>
            </div>
        </div>
    ` : '';
    // Restructure with scrollable content area and fixed bottom button
    summaryDrawerContent.innerHTML = `
        <div class="summary-scroll-area">
            ${summaryContent}
        </div>
        ${addSummaryButton}
    `;
    // Track navigation
    navigateToPage('summary');
    // Show the drawer
    summaryDrawer.classList.add('active');
    document.body.classList.add('summary-drawer-open');
}
// Summary CRUD Functions
function showAddSummaryModal() {
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Add Chapter Summary</h3>
                <button class="close-character-modal" onclick="closeAddSummaryModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="add-summary-form">
                    <div class="form-group">
                        <label for="summary-content">Summary Content *</label>
                        <textarea id="summary-content" name="content" required maxlength="2000" rows="8" placeholder="Enter chapter summary..."></textarea>
                    </div>
                    <div class="form-buttons">
                        <button type="button" onclick="closeAddSummaryModal()" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Save Summary</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
    // Handle form submission
    document.getElementById('add-summary-form').addEventListener('submit', handleAddSummary);
    // Focus on content input
    setTimeout(() => document.getElementById('summary-content').focus(), 100);
}
async function saveSummaryToSupabase(bookFile, chapter, content) {
    try {
        if (!isAdmin()) {
            throw new Error('Admin privileges required to add summary.');
        }
        const book = bibleBooks.find(b => b.file === bookFile);
        if (!book) {
            throw new Error('Book not found');
        }
        const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
        const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/chapter_summaries`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_NOTES_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                book_file: bookFile,
                chapter: chapter,
                content: content,
                testament: testament,
                created_at: new Date().toISOString()
            })
        });
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Failed to save summary: ${response.status} ${errorData}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}
function closeAddSummaryModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
async function handleAddSummary(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get('content').trim();
    if (!content) {
        showToast('Summary content is required.', 'error');
        return;
    }
    try {
        const book = bibleBooks[currentBook];
        const success = await saveSummaryToSupabase(book.file, currentChapter, content);
        if (success) {
            closeAddSummaryModal();
            await loadSummaryFromSupabase(book.file, currentChapter);
            const isMobile = window.innerWidth <= 768;
            showToast(isMobile ? 'Summary added!' : 'Summary added successfully!', 'success');
        }
    } catch (error) {
        showToast('Error adding summary: ' + error.message, 'error');
    }
}
async function editSummary(summaryId, currentContent) {
    if (!isAdmin()) {
        showToast('Admin privileges required to edit summary.', 'error');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay active';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Edit Summary</h3>
                <button class="close-character-modal" onclick="closeEditSummaryModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="edit-summary-form">
                    <div class="form-group">
                        <label for="edit-summary-content">Summary Content *</label>
                        <textarea id="edit-summary-content" name="content" required maxlength="2000" rows="8" placeholder="Enter chapter summary...">${currentContent}</textarea>
                    </div>
                    <div class="form-buttons">
                        <button type="button" onclick="closeEditSummaryModal()" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Update Summary</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Handle form submission
    document.getElementById('edit-summary-form').addEventListener('submit', async (event) => {
        await handleEditSummary(event, summaryId);
    });
    // Focus and select content
    setTimeout(() => {
        const textarea = document.getElementById('edit-summary-content');
        textarea.focus();
        textarea.select();
    }, 100);
}
function closeEditSummaryModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
async function handleEditSummary(event, summaryId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get('content').trim();
    if (!content) {
        showToast('Summary content is required.', 'error');
        return;
    }
    try {
        const success = await updateSummaryInSupabase(summaryId, content);
        if (success) {
            closeEditSummaryModal();
            const book = bibleBooks[currentBook];
            await loadSummaryFromSupabase(book.file, currentChapter);
            const isMobile = window.innerWidth <= 768;
            showToast(isMobile ? 'Summary updated!' : 'Summary updated successfully!', 'success');
        }
    } catch (error) {
        showToast('Error updating summary: ' + error.message, 'error');
    }
}
async function updateSummaryInSupabase(summaryId, content) {
    try {
        if (!isAdmin()) {
            throw new Error('Admin privileges required to update summary.');
        }
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_summaries')
            .update({ 
                content: content,
                updated_at: new Date().toISOString()
            })
            .eq('id', summaryId);
        if (error) {
            throw new Error(`Failed to update summary: ${error.message}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}
// ========================= TIMELINE CRUD FUNCTIONS =========================
function showAddTimelineModal() {
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Add Timeline Event</h3>
                <button class="close-character-modal" onclick="closeAddTimelineModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="add-timeline-form">
                    <div class="form-group">
                        <label for="timeline-verse">Verse Reference *</label>
                        <input type="text" id="timeline-verse" name="verse" required maxlength="50" placeholder="e.g., v. 1-5" />
                    </div>
                    <div class="form-group">
                        <label for="timeline-description">Event Description *</label>
                        <textarea id="timeline-description" name="description" required maxlength="500" rows="4" placeholder="Describe the timeline event..."></textarea>
                    </div>
                    <div class="form-buttons">
                        <button type="button" onclick="closeAddTimelineModal()" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Save Event</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
    // Handle form submission
    document.getElementById('add-timeline-form').addEventListener('submit', handleAddTimeline);
    // Focus on verse input
    setTimeout(() => document.getElementById('timeline-verse').focus(), 100);
}
function closeAddTimelineModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
async function handleAddTimeline(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const verse = formData.get('verse').trim();
    const description = formData.get('description').trim();
    if (!verse || !description) {
        showToast('All fields are required.', 'error');
        return;
    }
    try {
        const book = bibleBooks[currentBook];
        const success = await saveTimelineToSupabase(book.file, currentChapter, verse, description);
        if (success) {
            closeAddTimelineModal();
            await loadTimelineFromSupabase(book.file, currentChapter);
            const isMobile = window.innerWidth <= 768;
            showToast(isMobile ? 'Event added!' : 'Timeline event added successfully!', 'success');
        }
    } catch (error) {
        showToast('Error adding timeline event: ' + error.message, 'error');
    }
}
async function editTimelineEvent(eventId, currentDescription, currentVerse) {
    if (!isAdmin()) {
        showToast('Admin privileges required to edit timeline events.', 'error');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay active';
    modal.innerHTML = `
        <div class="character-modal">
            <div class="character-modal-header">
                <h3>Edit Timeline Event</h3>
                <button class="close-character-modal" onclick="closeEditTimelineModal()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="character-modal-body">
                <form id="edit-timeline-form">
                    <div class="form-group">
                        <label for="edit-timeline-verse">Verse Reference *</label>
                        <input type="text" id="edit-timeline-verse" name="verse" required maxlength="50" value="${currentVerse}" placeholder="e.g., v. 1-5" />
                    </div>
                    <div class="form-group">
                        <label for="edit-timeline-description">Event Description *</label>
                        <textarea id="edit-timeline-description" name="description" required maxlength="500" rows="4" placeholder="Describe the timeline event...">${currentDescription}</textarea>
                    </div>
                    <div class="form-buttons">
                        <button type="button" onclick="closeEditTimelineModal()" class="cancel-btn">Cancel</button>
                        <button type="submit" class="save-btn">Update Event</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Handle form submission
    document.getElementById('edit-timeline-form').addEventListener('submit', async (event) => {
        await handleEditTimeline(event, eventId);
    });
    // Focus on verse input
    setTimeout(() => {
        const input = document.getElementById('edit-timeline-verse');
        input.focus();
        input.select();
    }, 100);
}
function closeEditTimelineModal() {
    const modal = document.querySelector('.character-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}
async function handleEditTimeline(event, eventId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const verse = formData.get('verse').trim();
    const description = formData.get('description').trim();
    if (!verse || !description) {
        showToast('All fields are required.', 'error');
        return;
    }
    try {
        const success = await updateTimelineInSupabase(eventId, verse, description);
        if (success) {
            closeEditTimelineModal();
            const book = bibleBooks[currentBook];
            await loadTimelineFromSupabase(book.file, currentChapter);
            const isMobile = window.innerWidth <= 768;
            showToast(isMobile ? 'Event updated!' : 'Timeline event updated successfully!', 'success');
        }
    } catch (error) {
        showToast('Error updating timeline event: ' + error.message, 'error');
    }
}
async function deleteTimelineEvent(eventId, eventDescription) {
    if (!isAdmin()) {
        showToast('Admin privileges required to delete timeline events.', 'error');
        return;
    }
    // Show custom delete confirmation popup
    const modal = document.createElement('div');
    modal.className = 'character-modal-overlay active';
    modal.innerHTML = `
        <div class="character-modal delete-modal">
            <div class="character-modal-header">
                <h3>Delete Timeline Event</h3>
            </div>
            <div class="character-modal-body">
                <p class="delete-message">Are you sure you want to delete this timeline event?</p>
                <div class="form-buttons">
                    <button type="button" onclick="closeDeleteTimelineModal()" class="cancel-btn">Cancel</button>
                    <button type="button" onclick="confirmDeleteTimelineEvent(${eventId})" class="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Store modal reference globally for cleanup
    window.currentDeleteTimelineModal = modal;
}
function closeDeleteTimelineModal() {
    const modal = window.currentDeleteTimelineModal;
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
        window.currentDeleteTimelineModal = null;
    }
}
async function confirmDeleteTimelineEvent(eventId) {
    try {
        await deleteTimelineFromSupabase(eventId);
        // Close modal
        closeDeleteTimelineModal();
        // Reload timeline
        const book = bibleBooks[currentBook];
        await loadTimelineFromSupabase(book.file, currentChapter);
        const isMobile = window.innerWidth <= 768;
        showToast(isMobile ? 'Deleted!' : 'Timeline event deleted successfully!', 'success');
    } catch (error) {
        showToast('Error deleting timeline event: ' + error.message, 'error');
    }
}
async function saveTimelineToSupabase(bookFile, chapter, verse, description) {
    try {
        if (!isAdmin()) {
            throw new Error('Admin privileges required to add timeline events.');
        }
        const book = bibleBooks.find(b => b.file === bookFile);
        if (!book) {
            throw new Error('Book not found');
        }
        const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
        const response = await fetch(`${SUPABASE_NOTES_CONFIG.url}/rest/v1/chapter_timeline`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_NOTES_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_NOTES_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                book_file: bookFile,
                chapter: chapter,
                description: description,
                verse_reference: verse,
                testament: testament,
                created_at: new Date().toISOString()
            })
        });
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Failed to save timeline event: ${response.status} ${errorData}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}
async function updateTimelineInSupabase(eventId, verse, description) {
    try {
        if (!isAdmin()) {
            throw new Error('Admin privileges required to update timeline events.');
        }
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .update({ 
                event_description: description,
                verse_reference: verse,
                updated_at: new Date().toISOString()
            })
            .eq('id', eventId);
        if (error) {
            throw new Error(`Failed to update timeline event: ${error.message}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}
async function deleteTimelineFromSupabase(eventId) {
    try {
        if (!isAdmin()) {
            throw new Error('Admin privileges required to delete timeline events.');
        }
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .delete()
            .eq('id', eventId);
        if (error) {
            throw new Error(`Failed to delete timeline event: ${error.message}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}
function setupTimelineDragAndDrop() {
    const timelineItems = document.querySelectorAll('.draggable-timeline');
    timelineItems.forEach(item => {
        item.addEventListener('dragstart', handleTimelineDragStart);
        item.addEventListener('dragover', handleTimelineDragOver);
        item.addEventListener('drop', handleTimelineDrop);
        item.addEventListener('dragend', handleTimelineDragEnd);
    });
}
function handleTimelineDragStart(e) {
    draggedElement = e.target.closest('.timeline-item');
    draggedPosition = parseInt(draggedElement.dataset.position);
    // Add visual feedback
    draggedElement.classList.add('character-dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedElement.outerHTML);
}
function handleTimelineDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const targetElement = e.target.closest('.timeline-item');
    if (!targetElement || targetElement === draggedElement) return;
    // Add drop indicator
    targetElement.classList.add('drop-target');
    // Remove drop indicator from other elements
    document.querySelectorAll('.drop-target').forEach(el => {
        if (el !== targetElement) {
            el.classList.remove('drop-target');
        }
    });
}
function handleTimelineDrop(e) {
    e.preventDefault();
    const targetElement = e.target.closest('.timeline-item');
    if (!targetElement || targetElement === draggedElement) return;
    const targetPosition = parseInt(targetElement.dataset.position);
    const container = targetElement.parentNode;
    // Remove drop indicators
    document.querySelectorAll('.drop-target').forEach(el => el.classList.remove('drop-target'));
    // Determine drop position
    if (draggedPosition < targetPosition) {
        // Moving down - insert after target
        container.insertBefore(draggedElement, targetElement.nextSibling);
    } else {
        // Moving up - insert before target
        container.insertBefore(draggedElement, targetElement);
    }
    // Update timeline positions (using localStorage like characters)
    updateTimelinePositions();
}
function handleTimelineDragEnd(e) {
    // Clean up visual feedback
    document.querySelectorAll('.character-dragging, .drop-target').forEach(el => {
        el.classList.remove('character-dragging', 'drop-target');
    });
    draggedElement = null;
    draggedPosition = null;
}
async function updateTimelinePositions() {
    const timelineItems = document.querySelectorAll('.draggable-timeline');
    const timelineIds = [];
    // Get the new order of timeline IDs
    timelineItems.forEach((item, index) => {
        const timelineId = parseInt(item.dataset.timelineId);
        timelineIds.push(timelineId);
        // Update dataset
        item.dataset.position = index;
    });
    // Store the custom order in localStorage for this session
    const book = bibleBooks[currentBook];
    const orderKey = `timeline_order_${book.file}_${currentChapter}`;
    localStorage.setItem(orderKey, JSON.stringify(timelineIds));
    const isMobile = window.innerWidth <= 768;
    showToast(isMobile ? 'Order updated!' : 'Timeline order updated for this session!', 'success');
}
// ========================= TIMELINE MANAGEMENT =========================
async function loadTimelineFromSupabase(bookFile, chapter) {
    try {
        const { data, error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('id, book_file, chapter, event_description, verse_reference, testament, order_index')
            .eq('book_file', bookFile)
            .eq('chapter', chapter)
            .order('order_index', { ascending: true })
            .order('id', { ascending: true });
        if (error) {
            showToast('Failed to load timeline. Please try again.', 'error');
            return;
        }
        displayTimelineFromDB(data || []);
    } catch (error) {
        showToast('Failed to load timeline. Please try again.', 'error');
    }
}
function displayTimelineFromDB(timelineData) {
    const summaryDrawer = document.getElementById('summary-drawer');
    const summaryDrawerContent = document.getElementById('summary-drawer-content');
    const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
    // Update drawer title
    summaryDrawerTitle.textContent = 'Chapter Timeline';
    // Format the timeline events with proper styling and admin action buttons
    const formattedTimeline = timelineData
        .map((event, index) => {
            const actionButtons = isAdmin() ? `
                <div class="timeline-actions">
                    <button class="edit-timeline-btn" onclick="editTimelineEvent(${event.id}, '${event.description.replace(/'/g, "\\'")}', '${event.verse_reference.replace(/'/g, "\\'")}')"
                        title="Edit event">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 2 4 4L12 16l-4 4-4-4L14 6z"></path>
                        </svg>
                    </button>
                    <button class="delete-timeline-btn" onclick="deleteTimelineEvent(${event.id}, '${event.description.replace(/'/g, "\\'")}')"
                        title="Delete event">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3,6 5,6 21,6"></polyline>
                            <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2,2v2"></path>
                        </svg>
                    </button>
                </div>
            ` : '';
            const dragAttributes = isAdmin() ? `draggable="true" data-timeline-id="${event.id}" data-position="${index}"` : '';
            const dragClass = isAdmin() ? ' draggable-timeline' : '';
            return `
                <div class="timeline-item${dragClass}" ${dragAttributes}>
                    <div class="timeline-content">
                        <div class="timeline-verse">${event.verse_reference}</div>
                        <div class="timeline-description">${event.event_description}</div>
                    </div>
                    ${actionButtons}
                </div>
            `;
        })
        .join('');
    const addTimelineButton = isAdmin() ? `
        <div class="timeline-bottom-section">
            <div class="add-timeline-container">
                <button class="add-timeline-btn" onclick="showAddTimelineModal()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Timeline Event
                </button>
            </div>
        </div>
    ` : '';
    // Restructure with scrollable content area and fixed bottom button
    summaryDrawerContent.innerHTML = `
        <div class="timeline-scroll-area">
            <div class="timeline-list">
                ${formattedTimeline || '<div class="no-timeline">No timeline events available for this chapter yet.</div>'}
            </div>
        </div>
        ${addTimelineButton}
    `;
    // Add event listeners for timeline buttons (since we're using data attributes instead of onclick)
    setTimeout(() => {
        document.querySelectorAll('.edit-timeline-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const eventId = e.currentTarget.getAttribute('data-event-id');
                const description = e.currentTarget.getAttribute('data-description');
                const verse = e.currentTarget.getAttribute('data-verse') || '';
                editTimelineEvent(eventId, description, verse);
            });
        });
        document.querySelectorAll('.delete-timeline-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const eventId = e.currentTarget.getAttribute('data-event-id');
                const description = e.currentTarget.getAttribute('data-description');
                deleteTimelineEvent(eventId, description);
            });
        });
    }, 100);
    // Add drag and drop event listeners for admin users
    if (isAdmin() && timelineData.length > 0) {
        setupTimelineDragAndDrop();
    }
    // Track navigation
    navigateToPage('timeline');
    // Show the drawer
    summaryDrawer.classList.add('active');
    document.body.classList.add('summary-drawer-open');
}
// ========================= TIMELINE EDITING FUNCTIONS =========================
let timelineEditMode = false;
let deletedTimelineItems = []; // Track items marked for deletion
// Toggle timeline edit mode
function toggleTimelineEditMode() {
    timelineEditMode = !timelineEditMode;
    const editBtn = document.getElementById('timeline-edit-btn');
    const editText = editBtn.querySelector('.edit-mode-text');
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineEditMode) {
        editText.textContent = 'Save';
        editBtn.classList.add('edit-mode-active');
        editBtn.style.background = '#007bff'; // Blue for save (different from green Add)
        // Show Add button during edit mode
        const addBtn = document.getElementById('timeline-add-btn');
        if (addBtn) {
            addBtn.style.display = 'flex';
        }
        // Show delete buttons for all timeline items
        const deleteButtons = document.querySelectorAll('.delete-timeline-item-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = 'block';
        });
        // Convert ALL timeline items to editable textboxes
        timelineItems.forEach(item => {
            const eventElement = item.querySelector('.timeline-event');
            if (eventElement) {
                const currentText = eventElement.textContent.trim();
                const isFromFile = item.getAttribute('data-is-file') === 'true';
                const eventId = item.getAttribute('data-event-id');
                eventElement.innerHTML = `
                    <textarea class="timeline-edit-textarea" 
                              data-original-text="${currentText}"
                              data-event-id="${eventId || ''}"
                              data-is-file="${isFromFile}"
                              placeholder="Enter timeline event..."
                              rows="3">${currentText}</textarea>
                `;
            }
        });
    } else {
        editText.textContent = 'Edit';
        editBtn.classList.remove('edit-mode-active');
        editBtn.style.background = '#007bff'; // Blue for edit
        // Hide Add button when exiting edit mode
        const addBtn = document.getElementById('timeline-add-btn');
        if (addBtn) {
            addBtn.style.display = 'none';
        }
        // Hide delete buttons
        const deleteButtons = document.querySelectorAll('.delete-timeline-item-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = 'none';
        });
        // Save ALL changes and convert back to normal display
        const savePromises = [];
        // Process deleted items
        if (deletedTimelineItems.length > 0) {
            deletedTimelineItems.forEach(eventId => {
                savePromises.push(deleteTimelineFromDatabase(eventId));
            });
            deletedTimelineItems = []; // Clear the deletion list
        }
        // Process new timeline items
        const newItems = document.querySelectorAll('.timeline-item[data-is-new="true"]');
        newItems.forEach(item => {
            const textarea = item.querySelector('.timeline-add-textarea');
            if (textarea && textarea.value.trim() !== '') {
                const description = textarea.value.trim();
                // Add to save promises
                savePromises.push(saveNewTimelineToDatabase(description));
                // Remove the new item from DOM since it will be reloaded
                item.remove();
            } else {
                // Remove empty new items
                item.remove();
            }
        });
        timelineItems.forEach(item => {
            const textarea = item.querySelector('.timeline-edit-textarea');
            if (textarea) {
                const newText = textarea.value.trim();
                const originalText = textarea.getAttribute('data-original-text');
                const eventId = textarea.getAttribute('data-event-id');
                const isFromFile = textarea.getAttribute('data-is-file') === 'true';
                const eventElement = item.querySelector('.timeline-event');
                // Only save if text changed and it's not empty
                if (newText !== originalText && newText !== '') {
                    if (eventId && !isFromFile && eventId !== '') {
                        // Save database events
                        savePromises.push(updateTimelineEvent(eventId, newText));
                    }
                    // File-based events would need different handling
                }
                // Restore normal display
                eventElement.textContent = newText || originalText;
            }
        });
        // Wait for all saves to complete
        if (savePromises.length > 0) {
            showLoader(); // Show loading during save
            Promise.all(savePromises).then(() => {
                const deletedCount = deletedTimelineItems.length;
                const editCount = savePromises.length - deletedCount;
                if (deletedCount > 0 && editCount > 0) {
                    showToast('Timeline updated', 'success');
                } else if (deletedCount > 0) {
                    showToast('Timeline updated', 'success');
                } else if (editCount > 0) {
                    showToast('Timeline updated', 'success');
                }
                // Refresh the timeline to show updated data
                showChapterTimeline();
                hideLoader(); // Hide loading after save
            }).catch(error => {
                showToast('Save failed', 'error');
                hideLoader(); // Hide loading on error
            });
        } else {
        }
    }
}
// Update timeline event in database
async function updateTimelineEvent(eventId, newDescription) {
    try {
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .update({ event_description: newDescription })
            .eq('id', eventId);
        if (error) {
            showToast('Failed to update timeline event. Please try again.', 'error');
        } else {
            showToast('Timeline event updated successfully!', 'success');
        }
    } catch (error) {
        showToast('Failed to update timeline event. Please try again.', 'error');
    }
}
// Show add timeline modal
function showAddTimelineModal() {
    const book = bibleBooks[currentBook];
    const chapterNum = currentChapter;
    const modalHtml = `
        <div class="modal-overlay" id="add-timeline-modal">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Add Timeline Event</h3>
                    <button class="modal-close-btn" onclick="closeAddTimelineModal()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-field">
                        <label for="timeline-event-description">Timeline Event</label>
                        <textarea id="timeline-event-description" 
                                  placeholder="Describe what happened in this chapter..." 
                                  rows="4"></textarea>
                    </div>
                    <div class="form-field">
                        <label for="timeline-verse-reference">Verse Reference (Optional)</label>
                        <input type="text" 
                               id="timeline-verse-reference" 
                               placeholder="e.g., Matthew 1:1-17">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="closeAddTimelineModal()">Cancel</button>
                    <button class="btn btn-primary" onclick="addTimelineEvent()">Add Event</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.classList.add('modal-open');
    // Focus on description field
    setTimeout(() => {
        document.getElementById('timeline-event-description').focus();
    }, 100);
}
// Close add timeline modal
function closeAddTimelineModal() {
    const modal = document.getElementById('add-timeline-modal');
    if (modal) {
        modal.remove();
        document.body.classList.remove('modal-open');
    }
}
// Add timeline event to database
async function addTimelineEvent() {
    const description = document.getElementById('timeline-event-description').value.trim();
    const verseReference = document.getElementById('timeline-verse-reference').value.trim();
    if (!description) {
        showToast('Please enter a timeline event description.', 'error');
        return;
    }
    const book = bibleBooks[currentBook];
    const chapterNum = currentChapter;
    // Map testament
    const testament = currentBook < 39 ? 'old' : 'new';
    try {
        // Get the maximum order_index for this chapter to append at the end
        const { data: maxOrderData } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('order_index')
            .eq('book_file', book.file)
            .eq('chapter', chapterNum)
            .order('order_index', { ascending: false })
            .limit(1);
        const nextOrderIndex = maxOrderData && maxOrderData.length > 0 
            ? maxOrderData[0].order_index + 10 
            : 10;
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .insert([{
                book_file: book.file,
                chapter: chapterNum,
                event_description: description,
                verse_reference: verseReference,
                testament: testament,
                order_index: nextOrderIndex
            }]);
        if (error) {
            showToast('Failed to add timeline event. Please try again.', 'error');
        } else {
            showToast('Timeline event added successfully!', 'success');
            closeAddTimelineModal();
            // Refresh timeline display
            showChapterTimeline();
        }
    } catch (error) {
        showToast('Failed to add timeline event. Please try again.', 'error');
    }
}
// ========================= PUSH MATTHEW 1 TIMELINE DATA =========================
// Function to push Matthew 1 timeline data to Supabase
async function pushMatthew1TimelineData() {
    if (!isAdmin()) {
        return;
    }
    const matthew1Timeline = [
        "Matthew begins with the genealogy of Jesus, tracing His family history to show He is the promised Messiah.",
        "The lineage starts with Abraham, the man through whom God began His covenant nation.",
        "From Abraham it continues to Isaac, then to Jacob.",
        "Jacob becomes the father of Judah, beginning the royal tribe.",
        "The family line moves through generations until it reaches King David, confirming Jesus' royal right.",
        "From David, the genealogy continues through Solomon and the kings of Judah, showing the royal line God preserved.",
        "The timeline reaches the period of the Babylonian exile, marking a major turning point in Israel's history.",
        "After the exile, the line continues through several generations until it reaches Jacob, the father of Joseph.",
        "Joseph is introduced as the husband of Mary, through whom Jesus was born, completing the genealogy.",
        "Matthew then explains how the birth of Jesus took place, shifting from genealogy to the story.",
        "Mary is found to be pregnant, though she and Joseph had not come together.",
        "Her pregnancy is from the Holy Spirit, a miraculous act of God.",
        "Joseph, being righteous, does not want to make Mary a public example.",
        "He plans to quietly end the engagement, trying to protect her from shame.",
        "An angel appears to Joseph in a dream, interrupting his plan.",
        "The angel tells him not to fear taking Mary as his wife, because the child is from the Holy Spirit.",
        "Joseph is instructed to name the child \"Jesus\", because He will save His people from their sins.",
        "Matthew explains that this fulfills Isaiah's prophecy about a virgin conceiving and giving birth to a son.",
        "The prophecy states that the virgin will give birth to Immanuel, meaning \"God with us\".",
        "Joseph obeys the angel's command and takes Mary as his wife.",
        "He does not have relations with her until after Jesus is born, preserving her virginity.",
        "When Jesus is born, Joseph names Him \"Jesus\" as the angel commanded, completing the chapter."
    ];
    try {
        // First check if data already exists
        const { data: existingData, error: checkError } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('id')
            .eq('book_file', 'matthew')
            .eq('chapter', 1);
        if (checkError) {
            return;
        }
        if (existingData && existingData.length > 0) {
            showToast('Matthew 1 timeline data already exists!', 'info');
            return;
        }
        // Prepare timeline events for insertion
        const timelineEvents = matthew1Timeline.map((event, index) => ({
            book_file: 'matthew',
            chapter: 1,
            event_description: event,
            verse_reference: '', // No specific verse references in the original data
            testament: 'new',
            order_index: (index + 1) * 10 // Use increments of 10 for easy insertion
        }));
        // Insert data
        const { error: insertError } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .insert(timelineEvents);
        if (insertError) {
            showToast('Failed to push timeline data. Please try again.', 'error');
        } else {
            showToast(`Successfully added ${matthew1Timeline.length} timeline events for Matthew 1!`, 'success');
        }
    } catch (error) {
        showToast('Failed to push timeline data. Please try again.', 'error');
    }
}
// ========================= TIMELINE ORDERING FUNCTIONS =========================
// Insert timeline event at specific position
async function insertTimelineEventAt(position, description, verseReference = '') {
    if (!isAdmin()) {
        return;
    }
    try {
        const book = bibleBooks[currentBook];
        const chapterNum = parseInt(document.getElementById('chapter-selector').value);
        const testament = book.testament || 'new';
        // Get all events for this chapter ordered by order_index
        const { data: existingEvents } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('id, order_index')
            .eq('book_file', book.file)
            .eq('chapter', chapterNum)
            .order('order_index', { ascending: true });
        let newOrderIndex;
        if (position === 0) {
            // Insert at beginning
            newOrderIndex = existingEvents.length > 0 ? existingEvents[0].order_index - 10 : 10;
        } else if (position >= existingEvents.length) {
            // Insert at end
            newOrderIndex = existingEvents.length > 0 
                ? existingEvents[existingEvents.length - 1].order_index + 10 
                : 10;
        } else {
            // Insert between existing items
            const prevOrderIndex = existingEvents[position - 1].order_index;
            const nextOrderIndex = existingEvents[position].order_index;
            newOrderIndex = Math.floor((prevOrderIndex + nextOrderIndex) / 2);
            // If there's no space between orders, reindex the timeline
            if (newOrderIndex <= prevOrderIndex) {
                await reindexTimeline(book.file, chapterNum);
                // Recalculate after reindexing
                newOrderIndex = (position * 10) + 5;
            }
        }
        // Insert the new event
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .insert([{
                book_file: book.file,
                chapter: chapterNum,
                event_description: description,
                verse_reference: verseReference,
                testament: testament,
                order_index: newOrderIndex
            }]);
        if (error) {
            return false;
        }
        showToast('Timeline event inserted successfully!', 'success');
        showChapterTimeline(); // Refresh display
        return true;
    } catch (error) {
        return false;
    }
}
// Reindex timeline order_index values to create proper spacing
async function reindexTimeline(bookFile, chapter) {
    try {
        const { data: events } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('id')
            .eq('book_file', bookFile)
            .eq('chapter', chapter)
            .order('order_index', { ascending: true })
            .order('id', { ascending: true });
        if (!events || events.length === 0) return;
        // Update each event with new order_index (increments of 10)
        const updates = events.map((event, index) => 
            bibleDataManager.supabaseClient
                .from('chapter_timeline')
                .update({ order_index: (index + 1) * 10 })
                .eq('id', event.id)
        );
        await Promise.all(updates);
    } catch (error) {
    }
}
// ========================= INLINE TIMELINE FUNCTIONS =========================
// Add timeline entry inline (no modal)
function addTimelineInline() {
    if (!isAdmin()) {
        return;
    }
    // Check if there's already a new item being added
    const existingNew = document.querySelector('.timeline-item-new');
    if (existingNew) {
        showToast('Complete current addition first', 'warning');
        return;
    }
    const timelineContainer = document.querySelector('.timeline-list');
    if (!timelineContainer) return;
    // Disable the Add button during creation
    const addBtn = document.getElementById('timeline-add-btn');
    if (addBtn) {
        addBtn.disabled = true;
        addBtn.style.opacity = '0.6';
    }
    // Create new inline timeline item with textarea and normal timeline styling
    const newItemHtml = `
        <li class="timeline-item" data-is-new="true" style="border-color: #28a745;">
            <div class="timeline-content">
                <div class="timeline-event">
                    <textarea class="timeline-add-textarea" 
                              placeholder="Enter new timeline event..." 
                              rows="3"
                              oninput="checkTimelineInput(this)"></textarea>
                </div>
                <div class="timeline-add-actions">
                    <button class="timeline-cancel-btn" onclick="cancelNewTimelineItem(this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        Cancel
                    </button>
                </div>
            </div>
        </li>
    `;
    // Add to the end of timeline
    timelineContainer.insertAdjacentHTML('beforeend', newItemHtml);
    // Scroll to the new item and focus on textarea
    const newItem = timelineContainer.lastElementChild;
    newItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const textarea = newItem.querySelector('.timeline-add-textarea');
    setTimeout(() => textarea.focus(), 300); // Wait for scroll to complete
}
// Check timeline input and enable Add button when text is entered
function checkTimelineInput(textarea) {
    const addBtn = document.getElementById('timeline-add-btn');
    if (textarea.value.trim().length > 0) {
        // Re-enable add button since user has started typing
        if (addBtn) {
            addBtn.disabled = false;
            addBtn.style.opacity = '1';
        }
    } else {
        // Keep add button disabled until text is entered
        if (addBtn) {
            addBtn.disabled = true;
            addBtn.style.opacity = '0.6';
        }
    }
}
// Save new timeline item
async function saveNewTimelineItem(button) {
    const item = button.closest('.timeline-item');
    const textarea = item.querySelector('.timeline-add-textarea');
    const description = textarea.value.trim();
    if (!description) {
        showToast('Please enter a timeline event', 'error');
        return;
    }
    try {
        const book = bibleBooks[currentBook];
        const chapterNum = parseInt(document.getElementById('chapter-selector').value);
        const testament = book.testament || 'new';
        // Get the maximum order_index for this chapter to append at the end
        const { data: maxOrderData } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('order_index')
            .eq('book_file', book.file)
            .eq('chapter', chapterNum)
            .order('order_index', { ascending: false })
            .limit(1);
        const nextOrderIndex = maxOrderData && maxOrderData.length > 0 
            ? maxOrderData[0].order_index + 10 
            : 10;
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .insert([{
                book_file: book.file,
                chapter: chapterNum,
                event_description: description,
                verse_reference: '',
                testament: testament,
                order_index: nextOrderIndex
            }]);
        if (error) {
            showToast('Failed to add timeline event. Please try again.', 'error');
        } else {
            showToast('Timeline event added successfully!', 'success');
            // Re-enable the Add button
            const addBtn = document.getElementById('timeline-add-btn');
            if (addBtn) {
                addBtn.disabled = false;
                addBtn.style.opacity = '1';
            }
            // Refresh timeline display
            showChapterTimeline();
        }
    } catch (error) {
        showToast('Failed to add timeline event. Please try again.', 'error');
        // Re-enable the Add button on error
        const addBtn = document.getElementById('timeline-add-btn');
        if (addBtn) {
            addBtn.disabled = false;
            addBtn.style.opacity = '1';
        }
    }
}
// Cancel new timeline item
function cancelNewTimelineItem(button) {
    const item = button.closest('.timeline-item');
    item.remove();
    // Re-enable the Add button
    const addBtn = document.getElementById('timeline-add-btn');
    if (addBtn) {
        addBtn.disabled = false;
        addBtn.style.opacity = '1';
    }
}
// Mark timeline item for deletion with animation
function markTimelineForDeletion(eventId) {
    if (!isAdmin()) {
        return;
    }
    // Find the timeline item and mark it for deletion
    const timelineItem = document.querySelector(`[data-event-id="${eventId}"]`);
    if (!timelineItem) return;
    // Add to deleted items list
    if (!deletedTimelineItems.includes(eventId)) {
        deletedTimelineItems.push(eventId);
    }
    // Style the item like the add card but in red
    timelineItem.style.borderColor = '#dc3545'; // Red border like green add card
    timelineItem.style.transition = 'all 0.3s ease';
    // Replace the timeline content with deletion interface (similar to add interface)
    const timelineContent = timelineItem.querySelector('.timeline-content');
    const originalContent = timelineContent.innerHTML;
    timelineContent.innerHTML = `
        <div class="timeline-event">
            <div class="timeline-delete-message">This timeline event will be deleted when you save.</div>
        </div>
        <div class="timeline-add-actions">
            <button class="timeline-cancel-btn" onclick="undoTimelineDeletion('${eventId}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Undo
            </button>
        </div>
    `;
    // Store original content for restoration
    timelineItem.setAttribute('data-original-content', originalContent);
    // Disable the delete button for this item
    const deleteBtn = timelineItem.querySelector('.delete-timeline-item-btn');
    if (deleteBtn) {
        deleteBtn.style.display = 'none';
    }
}
// Undo timeline deletion
function undoTimelineDeletion(eventId) {
    if (!isAdmin()) {
        return;
    }
    // Find the timeline item
    const timelineItem = document.querySelector(`[data-event-id="${eventId}"]`);
    if (!timelineItem) return;
    // Remove from deleted items list
    const index = deletedTimelineItems.indexOf(eventId);
    if (index > -1) {
        deletedTimelineItems.splice(index, 1);
    }
    // Restore original styling
    timelineItem.style.borderColor = '';
    // Restore original content
    const originalContent = timelineItem.getAttribute('data-original-content');
    if (originalContent) {
        const timelineContent = timelineItem.querySelector('.timeline-content');
        timelineContent.innerHTML = originalContent;
        timelineItem.removeAttribute('data-original-content');
    }
    // Show the delete button again
    const deleteBtn = timelineItem.querySelector('.delete-timeline-item-btn');
    if (deleteBtn && timelineEditMode) {
        deleteBtn.style.display = 'block';
    }
}
// Actually delete timeline item from database
async function deleteTimelineFromDatabase(eventId) {
    try {
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .delete()
            .eq('id', eventId);
        if (error) {
            throw error;
        }
    } catch (error) {
        throw error;
    }
}
// Save new timeline item to database
async function saveNewTimelineToDatabase(description) {
    try {
        const book = bibleBooks[currentBook];
        const chapterNum = currentChapter;
        // Get the highest order_index for this chapter
        const { data: existingEvents } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .select('order_index')
            .eq('book_file', book.file)
            .eq('chapter', chapterNum)
            .order('order_index', { ascending: false })
            .limit(1);
        let newOrderIndex = 10; // Default starting index
        if (existingEvents && existingEvents.length > 0) {
            newOrderIndex = existingEvents[0].order_index + 10;
        }
        const { error } = await bibleDataManager.supabaseClient
            .from('chapter_timeline')
            .insert({
                book_file: book.file,
                chapter: chapterNum,
                event_description: description,
                verse_reference: '',
                testament: book.testament,
                order_index: newOrderIndex
            });
        if (error) {
            throw error;
        }
        showToast('Timeline updated', 'success');
    } catch (error) {
        throw error;
    }
}
// ========================================
// Voice Command Integration
// ========================================
let voiceCommandManager = null;
/**
 * Initialize voice command functionality
 */
function initializeVoiceCommand() {
    // Check if VoiceCommandManager is available
    if (typeof VoiceCommandManager === 'undefined') {
        return;
    }
    // Initialize the voice command manager
    voiceCommandManager = new VoiceCommandManager(bibleBooks);
    // Get UI elements
    const voiceBtn = document.getElementById('voice-btn');
    const voiceStatus = document.getElementById('voice-status');
    const voiceStatusText = voiceStatus.querySelector('.voice-status-text');
    if (!voiceBtn) {
        return;
    }
    // Hide voice button by default, show only in admin mode
    voiceBtn.style.display = isAdmin() ? 'flex' : 'none';
    // Set up callbacks
    voiceCommandManager.onListeningChange = (isListening) => {
        if (isListening) {
            voiceBtn.classList.add('listening');
            showVoiceStatus('🎤 Listening... Speak clearly and loud enough', 'listening');
        } else {
            voiceBtn.classList.remove('listening');
            hideVoiceStatus();
        }
    };
    voiceCommandManager.onInterimResult = (transcript) => {
        // Show what's being heard in real-time
        showVoiceStatus(`Hearing: "${transcript}"`, 'listening');
    };
    voiceCommandManager.onCommandParsed = async (command) => {
        // Validate and auto-correct the command
        const validation = voiceCommandManager.validateCommand(command);
        if (!validation.valid) {
            showVoiceStatus(validation.error, 'error');
            setTimeout(() => hideVoiceStatus(), 3000);
            return;
        }
        // Get the display name based on current UI language (independent of voice command language)
        let displayBookName = command.book; // Default to English
        if (command.bookObject) {
            if (currentLanguage === 'tamil') {
                displayBookName = command.bookObject.tamilName || command.book;
            } else if (currentLanguage === 'both') {
                // For 'both' mode, show both names
                displayBookName = `${command.book} / ${command.bookObject.tamilName}`;
            }
            // For 'english', use command.book (English name)
        }
        // Show success status and start navigation immediately
        showVoiceStatus(`Opening ${displayBookName} ${command.chapter}${command.verse ? ':' + command.verse : ''}...`, 'success');
        // Navigate to the book and chapter immediately
        try {
            await navigateViaVoice(command);
            // Update status to show completion
            showVoiceStatus(`✓ ${displayBookName} ${command.chapter}${command.verse ? ':' + command.verse : ''}`, 'success');
            // Hide status after successful navigation
            setTimeout(() => {
                hideVoiceStatus();
            }, 1500);
        } catch (error) {
            showVoiceStatus('Error navigating to verse', 'error');
            setTimeout(() => hideVoiceStatus(), 3000);
        }
    };
    voiceCommandManager.onError = (errorMessage) => {
        showVoiceStatus(errorMessage, 'error');
        // Hide error after 3 seconds
        setTimeout(() => {
            hideVoiceStatus();
        }, 3000);
    };
    // Voice button click handler
    voiceBtn.addEventListener('click', () => {
        if (voiceCommandManager.isListening) {
            voiceCommandManager.stopListening();
        } else {
            // Match voice recognition language to UI language setting
            // Tamil UI → Tamil voice only
            // English UI → English voice only
            // Both UI → English voice only (for now)
            let voiceLang = 'en'; // default
            if (currentLanguage === 'tamil') {
                voiceLang = 'ta';
            } else if (currentLanguage === 'english') {
                voiceLang = 'en';
            } else { // 'both'
                voiceLang = 'en'; // Use English for 'both' mode
            }
            voiceCommandManager.startListening(voiceLang);
        }
    });
}
/**
 * Navigate to book/chapter/verse based on voice command
 */
async function navigateViaVoice(command) {
    const { bookIndex, chapter, verse } = command;
    // If we're not already on the right book or chapter, load it
    if (currentBook !== bookIndex || currentChapter !== chapter) {
        await loadBook(bookIndex, chapter);
    } else {
    }
    // If verse is specified, scroll to it after a short delay to ensure rendering
    if (verse) {
        // Use shorter delay for faster response
        setTimeout(() => {
            scrollToVerse(verse);
        }, 300);
    }
}
/**
 * Show voice status notification
 */
function showVoiceStatus(message, type = 'listening') {
    const voiceStatus = document.getElementById('voice-status');
    const voiceStatusText = voiceStatus.querySelector('.voice-status-text');
    if (!voiceStatus || !voiceStatusText) return;
    // Update text
    voiceStatusText.textContent = message;
    // Remove previous type classes
    voiceStatus.classList.remove('error', 'success', 'listening');
    // Add current type class
    if (type !== 'listening') {
        voiceStatus.classList.add(type);
    }
    // Show the status
    voiceStatus.style.display = 'block';
    setTimeout(() => {
        voiceStatus.classList.add('show');
    }, 10);
}
/**
 * Hide voice status notification
 */
function hideVoiceStatus() {
    const voiceStatus = document.getElementById('voice-status');
    if (!voiceStatus) return;
    voiceStatus.classList.remove('show');
    setTimeout(() => {
        voiceStatus.style.display = 'none';
    }, 300);
}
/**
 * Start background preload of all Bible books
 * This runs silently in the background without blocking the UI
 */
async function startBackgroundPreload() {
    // Always preload BOTH Tamil and English on first load for complete offline access
    const languagesToPreload = ['tamil', 'english'];
    // Preload all books for each language
    // Always verify and re-download if needed (preloadAllBooks will check integrity)
    for (const language of languagesToPreload) {
        const isComplete = localStorage.getItem(`preload_complete_${language}`) === 'true';
        if (isComplete) {
            // Data should be available, preloadAllBooks will verify if needed
        } else if (navigator.onLine) {
            // Not complete and online - start download
            bibleDataManager.preloadAllBooks(bibleBooks, language);
        } else {
        }
    }
}
// Debug helper - expose to console for troubleshooting
window.debugBible = {
    checkPreloadStatus: () => {
    },
    forceReload: async (language = 'tamil') => {
        bibleDataManager.resetPreloadFlag(language);
        await startBackgroundPreload();
    },
    clearCache: async () => {
        await bibleDataManager.clearCache();
    },
    verifyBook: async (bookFile, language = 'tamil') => {
        const bookCacheKey = bibleDataManager.getBookCacheKey(bookFile, language);
        const data = await bibleDataManager.loadBookFromLocalStorage(bookCacheKey);
        return data;
    }
};
// Right Sidebar Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const rightMenuBtn = document.getElementById('right-menu-btn');
    const rightSidebar = document.querySelector('.right-sidebar');
    const bibleReadingPage = document.getElementById('bible-reading-page');
    const exitBibleReading = document.getElementById('exit-bible-reading');
    // Right menu options
    const bibleReadingOption = document.getElementById('bible-reading-option');
    const rightNotesOption = document.getElementById('right-notes-option');
    const rightKingsOption = document.getElementById('right-kings-option');
    const rightProphetsOption = document.getElementById('right-prophets-option');
    const rightTimelineOption = document.getElementById('right-timeline-option');
    const rightCharacterOption = document.getElementById('right-character-option');
    const rightLifeOfJesusOption = document.getElementById('right-life-of-jesus-option');
    const rightSermonOption = document.getElementById('right-sermon-option');
    const rightPrayersOption = document.getElementById('right-prayers-option');
    const rightCultOption = document.getElementById('right-cult-option');
    // Initialize right sidebar (hidden by default)
    if (rightSidebar) {
        rightSidebar.classList.add('hidden');
    }
    // Right menu button is always visible (no admin check needed)
    // Toggle right sidebar
    if (rightMenuBtn && rightSidebar) {
        rightMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeBottomSheet();
            if (window.innerWidth <= 768) {
                // Mobile: use drawer behavior
                const isOpen = rightSidebar.classList.contains('drawer-open');
                if (isOpen) {
                    rightSidebar.classList.remove('drawer-open');
                    rightSidebar.classList.add('hidden');
                } else {
                    rightSidebar.classList.remove('hidden');
                    rightSidebar.classList.add('drawer-open');
                }
            } else {
                // Desktop: simple toggle
                const isHidden = rightSidebar.classList.contains('hidden');
                rightSidebar.classList.toggle('hidden');
            }
        }, true);
    } else {
    }
    // Close right sidebar when clicking outside (both mobile and desktop)
    document.addEventListener('click', (e) => {
        if (rightSidebar && rightMenuBtn) {
            const isSidebarOpen = window.innerWidth <= 768 
                ? rightSidebar.classList.contains('drawer-open')
                : !rightSidebar.classList.contains('hidden');
            if (isSidebarOpen && 
                !rightSidebar.contains(e.target) && 
                !rightMenuBtn.contains(e.target)) {
                rightSidebar.classList.add('hidden');
                rightSidebar.classList.remove('drawer-open');
            }
        }
    });
    
    // Helper function to close right sidebar drawer
    function closeRightSidebar() {
        if (rightSidebar) {
            rightSidebar.classList.add('hidden');
            rightSidebar.classList.remove('drawer-open');
        }
    }
    
    // Bible Reading option - navigate to Bible Reading page
    if (bibleReadingOption) {
        bibleReadingOption.addEventListener('click', () => {
            closeRightSidebar();
            // Navigate to the Bible Reading HTML file with cache-busting parameter
            const cacheBuster = window.CACHE_BUSTER || new Date().getTime();
            window.location.href = `src/bible-reading.html?cb=${cacheBuster}`;
        });
    }
    // Exit Bible Reading page
    if (exitBibleReading && bibleReadingPage) {
        exitBibleReading.addEventListener('click', () => {
            // Hide Bible Reading page
            bibleReadingPage.style.display = 'none';
            // Show main content
            document.querySelector('.main-layout').style.display = 'flex';
            document.querySelector('header').style.display = 'flex';
            document.querySelector('.bottom-nav').style.display = 'flex';
        });
    }
    // Bible Notes option - navigate to docs
    if (rightNotesOption) {
        rightNotesOption.addEventListener('click', () => {
            closeRightSidebar();
            window.location.href = 'docs/docs.html';
        });
    }
    // Kings option - navigate to Bible-Study Kings page
    if (rightKingsOption) {
        rightKingsOption.addEventListener('click', () => {
            closeRightSidebar();
            window.location.href = `Bible-Study/index.html#/kings`;
        });
    }
    // Prophets option - navigate to Bible-Study Prophets page
    if (rightProphetsOption) {
        rightProphetsOption.addEventListener('click', () => {
            closeRightSidebar();
            window.location.href = `Bible-Study/index.html#/prophets`;
        });
    }
    // Timeline option - navigate to Bible-Study Timeline page
    if (rightTimelineOption) {
        rightTimelineOption.addEventListener('click', () => {
            closeRightSidebar();
            window.location.href = `Bible-Study/index.html#/timeline`;
        });
    }
    // Character Study option - navigate to Bible-Study Character Study page
    if (rightCharacterOption) {
        rightCharacterOption.addEventListener('click', () => {
            closeRightSidebar();
            // Navigate directly with hash
            window.location.href = `Bible-Study/index.html#/genealogy`;
        });
    }
    // Life of Jesus option - navigate to Bible-Study Life of Christ page
    if (rightLifeOfJesusOption) {
        rightLifeOfJesusOption.addEventListener('click', () => {
            closeRightSidebar();
            // Navigate directly with hash
            window.location.href = `Bible-Study/index.html#/life-of-christ`;
        });
    }
    // Sermon option - navigate to Sermon page
    if (rightSermonOption) {
        rightSermonOption.addEventListener('click', () => {
            closeRightSidebar();
            const cacheBuster = window.CACHE_BUSTER || new Date().getTime();
            window.location.href = `src/sermon.html?cb=${cacheBuster}`;
        });
    }
    // Prayers option - navigate to Prayers page
    if (rightPrayersOption) {
        rightPrayersOption.addEventListener('click', () => {
            closeRightSidebar();
            const cacheBuster = window.CACHE_BUSTER || new Date().getTime();
            window.location.href = `src/prayers.html?cb=${cacheBuster}`;
        });
    }
    // WMSCOG Cult option - navigate to secret page
    if (rightCultOption) {
        rightCultOption.addEventListener('click', () => {
            closeRightSidebar();
            window.location.href = 'config/secret.html';
        });
    }
    
    // Disable copy functionality on the entire document
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Disable context menu (right-click)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Disable text selection on the main scripture content
    const scriptureText = document.querySelector('.scripture-text');
    if (scriptureText) {
        scriptureText.style.userSelect = 'none';
        scriptureText.style.webkitUserSelect = 'none';
        scriptureText.style.mozUserSelect = 'none';
        scriptureText.style.msUserSelect = 'none';
    }
    
    // Disable selection on mobile with touch events
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Prevent drag and drop for copying text
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });
});

/**
 * Convert an array of verses into consolidated verse ranges
 * E.g., [1, 2, 3, 5, 6] becomes ranges: [{start: 1, end: 3}, {start: 5, end: 6}]
 * @param {Array} verses - Array of verse numbers
 * @returns {Array} Array of {start, end} objects representing ranges
 */
function getVerseRanges(verses) {
    if (!verses || verses.length === 0) return [];
    
    // Sort and deduplicate
    const uniqueVerses = [...new Set(verses)].sort((a, b) => a - b);
    
    const ranges = [];
    let rangeStart = uniqueVerses[0];
    let rangeEnd = uniqueVerses[0];
    
    for (let i = 1; i < uniqueVerses.length; i++) {
        if (uniqueVerses[i] === rangeEnd + 1) {
            // Consecutive verse, extend the range
            rangeEnd = uniqueVerses[i];
        } else {
            // Gap found, save the current range and start a new one
            ranges.push({ start: rangeStart, end: rangeEnd });
            rangeStart = uniqueVerses[i];
            rangeEnd = uniqueVerses[i];
        }
    }
    
    // Add the last range
    ranges.push({ start: rangeStart, end: rangeEnd });
    
    return ranges;
}

/**
 * Format verse ranges for display
 * E.g., ranges for verses 1-3 and 5-6 becomes "1 - 3, 5 - 6"
 * @param {Array} ranges - Array of {start, end} range objects
 * @returns {string} Formatted verse range string
 */
function formatVerseRanges(ranges) {
    return ranges.map(range => {
        if (range.start === range.end) {
            return range.start.toString();
        } else {
            return `${range.start} - ${range.end}`;
        }
    }).join(', ');
}

/**
 * Convert multiple verses into verse objects with consolidated ranges
 * Instead of {book, chapter, verse: 1}, {book, chapter, verse: 2}, {book, chapter, verse: 3}
 * Returns {book, chapter, verses: [1, 2, 3], display: "John 3:1 - 3"}
 * @param {Array} versesToAdd - Array of verse objects
 * @returns {Array} Consolidated verse objects with ranges
 */
function consolidateVerses(versesToAdd) {
    if (!versesToAdd || versesToAdd.length === 0) return [];
    
    // Group verses by book and chapter
    const grouped = {};
    
    versesToAdd.forEach(verse => {
        const key = `${verse.book}:${verse.chapter}`;
        if (!grouped[key]) {
            grouped[key] = {
                book: verse.book,
                chapter: verse.chapter,
                verses: []
            };
        }
        grouped[key].verses.push(verse.verse);
    });
    
    // Convert to consolidated format
    const consolidated = [];
    for (const key in grouped) {
        const group = grouped[key];
        const ranges = getVerseRanges(group.verses);
        const rangeStr = formatVerseRanges(ranges);
        
        consolidated.push({
            book: group.book,
            chapter: group.chapter,
            verses: group.verses,
            ranges: ranges,
            display: `${group.book} ${group.chapter} : ${rangeStr}`
        });
    }
    
    return consolidated;
}

/**
 * Fetch recently created sermons from Supabase
 * @returns {Promise<Array>} Array of recent sermons
 */
async function getRecentSermons() {
    try {
        // Check if supabase is available
        if (!window.supabase) {
            return [];
        }
        
        const supabase = window.supabase.createClient(
            'https://encjogfdbrfcatvytpir.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck'
        );
        
        const { data, error } = await supabase
            .from('sermons')
            .select('id, title, tamil_title, sermon_date, verses')
            .order('sermon_date', { ascending: false })
            .limit(10);
        
        if (error) {
            return [];
        }
        
        return data || [];
    } catch (error) {
        return [];
    }
}

/**
 * Show sermon selection bottom sheet with recently created sermons
 * @param {Array} versesToAdd - Array of verse objects to add {book, chapter, verse, display}
 */
async function showSermonSelectionSheet(versesToAdd) {
    // Create or get the sermon selection modal
    let sermonModal = document.getElementById('sermon-selection-modal');
    if (!sermonModal) {
        sermonModal = document.createElement('div');
        sermonModal.id = 'sermon-selection-modal';
        sermonModal.className = 'sermon-selection-modal';
        document.body.appendChild(sermonModal);
    }
    
    // Show loading state
    const consolidatedVerses = consolidateVerses(versesToAdd);
    const verseDisplayText = consolidatedVerses.map(v => v.display).join(', ');
    
    sermonModal.innerHTML = `
        <div class="sermon-modal-backdrop"></div>
        <div class="sermon-modal-content">
            <div class="sermon-modal-handle"></div>
            <div class="sermon-modal-header">
                <h3 class="sermon-modal-title">Select Sermon</h3>
                <button class="sermon-modal-close" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="sermon-selected-verses">
                <small>Adding: ${verseDisplayText}</small>
            </div>
            <div class="sermon-modal-body">
                <div class="sermon-loader">Loading sermons...</div>
            </div>
            <div class="sermon-modal-footer">
                <button class="sermon-modal-btn sermon-modal-cancel">Cancel</button>
                <button class="sermon-modal-btn sermon-modal-save" disabled>Add</button>
            </div>
        </div>
    `;
    
    sermonModal.classList.add('visible');
    document.body.classList.add('sermon-modal-open');
    
    // Fetch recent sermons
    const sermons = await getRecentSermons();
    
    // Render sermons
    const sermonBody = sermonModal.querySelector('.sermon-modal-body');
    if (sermons.length === 0) {
        sermonBody.innerHTML = '<div class="sermon-empty-state">No sermons found. Create one in the Sermon page first.</div>';
    } else {
        // Show only the most recent sermon by default
        const renderSermons = (sermonList, showAll = false) => {
            const displaySermons = showAll ? sermonList : [sermonList[0]];
            
            let sermonListHTML = '<div class="sermon-list">';
            displaySermons.forEach((sermon) => {
                const dateStr = new Date(sermon.sermon_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                const displayTitle = sermon.tamil_title && sermon.tamil_title.trim() 
                    ? `${sermon.title} (${sermon.tamil_title})`
                    : sermon.title;
                
                // Preselect the first sermon when showing default view
                const isPreselected = !showAll;
                
                sermonListHTML += `
                    <div class="sermon-item ${isPreselected ? 'selected' : ''}" data-sermon-id="${sermon.id}">
                        <div class="sermon-item-header">
                            <div class="sermon-item-title">${displayTitle}</div>
                            <div class="sermon-item-date">${dateStr}</div>
                        </div>
                        ${sermon.verses && sermon.verses.length > 0 ? `
                            <div class="sermon-item-verses">${sermon.verses.length} verses</div>
                        ` : ''}
                    </div>
                `;
            });
            
            // Add "Any Other Sermon?" link if not showing all
            if (!showAll && sermons.length > 1) {
                sermonListHTML += `
                    <div class="sermon-view-all-link">
                        <a href="#" class="sermon-view-all-btn">Looking for others?</a>
                    </div>
                `;
            }
            
            sermonListHTML += '</div>';
            sermonBody.innerHTML = sermonListHTML;
            
            // Enable button if showing default view (first sermon is preselected)
            if (!showAll) {
                sermonModal.querySelector('.sermon-modal-save').disabled = false;
            } else {
                sermonModal.querySelector('.sermon-modal-save').disabled = true;
            }
            
            // Add click handlers to sermon items
            sermonBody.querySelectorAll('.sermon-item').forEach(item => {
                item.addEventListener('click', () => {
                    sermonBody.querySelectorAll('.sermon-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    sermonModal.querySelector('.sermon-modal-save').disabled = false;
                });
            });
            
            // Add click handler for "Any Other Sermon?" link
            const viewAllBtn = sermonBody.querySelector('.sermon-view-all-btn');
            if (viewAllBtn) {
                viewAllBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    renderSermons(sermonList, true);
                });
            }
        };
        
        // Initial render with only the most recent sermon
        renderSermons(sermons, false);
    }
    
    // Close modal
    const closeModal = () => {
        sermonModal.classList.remove('visible');
        document.body.classList.remove('sermon-modal-open');
    };
    
    sermonModal.querySelector('.sermon-modal-close').addEventListener('click', closeModal);
    sermonModal.querySelector('.sermon-modal-backdrop').addEventListener('click', closeModal);
    sermonModal.querySelector('.sermon-modal-cancel').addEventListener('click', closeModal);
    
    // Save to sermon
    sermonModal.querySelector('.sermon-modal-save').addEventListener('click', async () => {
        const selectedSermon = sermonBody.querySelector('.sermon-item.selected');
        if (!selectedSermon) return;
        
        const sermonId = parseInt(selectedSermon.dataset.sermonId);
        
        try {
            // Find the sermon from the list
            const sermon = sermons.find(s => s.id === sermonId);
            if (!sermon) {
                showToast('Sermon not found', 'error');
                return;
            }
            
            // Consolidate verses into ranges
            const consolidatedVersesToAdd = consolidateVerses(versesToAdd);
            
            // Merge verses
            const existingVerses = sermon.verses || [];
            const newVerses = [...existingVerses];
            
            // Add new verse ranges if not already in the sermon
            consolidatedVersesToAdd.forEach(newVerseRange => {
                const verseRangeKey = `${newVerseRange.book}:${newVerseRange.chapter}:${newVerseRange.ranges.map(r => r.start === r.end ? r.start : `${r.start}-${r.end}`).join(',')}`;
                
                const alreadyExists = newVerses.some(v => {
                    if (v.book !== newVerseRange.book || v.chapter !== newVerseRange.chapter) {
                        return false;
                    }
                    
                    // Check if all verses in the new range already exist
                    const existingVersesInChapter = Array.isArray(v.verses) ? v.verses : [v.verse];
                    return newVerseRange.verses.every(verse => existingVersesInChapter.includes(verse));
                });
                
                if (!alreadyExists) {
                    newVerses.push(newVerseRange);
                }
            });
            
            // Update sermon with new verses
            await updateSermon(sermonId, { verses: newVerses });
            
            closeModal();
            showToast('Added...', 'success');
        } catch (error) {
            showToast('Failed to add verses to sermon', 'error');
        }
    });
}

/**
 * Update a sermon in Supabase
 * @param {number} sermonId - Sermon ID
 * @param {Object} updates - Object with fields to update
 * @returns {Promise<Object>} Updated sermon
 */
async function updateSermon(sermonId, updates) {
    try {
        if (!window.supabase) {
            throw new Error('Supabase not available');
        }
        
        const supabase = window.supabase.createClient(
            'https://encjogfdbrfcatvytpir.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck'
        );
        
        const { data, error } = await supabase
            .from('sermons')
            .update(updates)
            .eq('id', sermonId)
            .select()
            .single();
        
        if (error) {
            throw error;
        }
        
        return data;
    } catch (error) {
        throw error;
    }
}
