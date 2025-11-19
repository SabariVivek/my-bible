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
let currentBook = parseInt(localStorage.getItem('currentBook')) || 0; // Genesis
let currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;
let currentData = null;
let currentTamilData = null; // For storing Tamil data when "Both" is selected
let currentLanguage = localStorage.getItem('currentLanguage') || 'tamil'; // 'english' or 'tamil' or 'both'
let englishTextColor = localStorage.getItem('englishTextColor') || 'default'; // 'default', 'blue' or 'red'
let hasUserInteracted = localStorage.getItem('hasUserInteracted') === 'true'; // Track if user has selected a verse

// Notes storage
let verseNotes = {};
let currentNoteVerse = null;
let currentNoteColor = 'burgundy';
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
    if (typeof memoryVerses === 'undefined') return false;
    
    const normalizedBookName = normalizeBookName(bookName);
    
    return memoryVerses.some(memVerse => {
        const [book] = memVerse.split(/\s+(?=\d)/);
        const normalizedMemBook = normalizeBookName(book);
        return normalizedMemBook === normalizedBookName;
    });
}

// Helper function to check if a chapter has any memory verses
function chapterHasMemoryVerses(bookName, chapter) {
    if (typeof memoryVerses === 'undefined') return false;
    
    const normalizedBookName = normalizeBookName(bookName);
    
    return memoryVerses.some(memVerse => {
        const [book, range] = memVerse.split(/\s+(?=\d)/);
        if (!range) return false;
        const normalizedMemBook = normalizeBookName(book);
        const [chapterPart] = range.split(':');
        return normalizedMemBook === normalizedBookName && parseInt(chapterPart) === chapter;
    });
}

// Helper function to check if a verse is a memory verse
function isMemoryVerse(bookName, chapter, verse) {
    if (typeof memoryVerses === 'undefined') return false;
    
    const normalizedBookName = normalizeBookName(bookName);
    
    return memoryVerses.some(memVerse => {
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeScrollbar();
    initializeTheme();
    initializeBookList();
    updateBookNames(); // Update book names based on saved language preference
    initializeMobileDrawer();
    initializeMobileLanguageModal();
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
    const isMobile = window.innerWidth <= 768;
    let isFadingOut = false; // Flag to prevent re-showing during fade
    
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
                
                // Update UI and reset flag after fade completes
                setTimeout(() => {
                    updateAdminUI();
                    isFadingOut = false;
                }, 2000);
            } else {
                // If activating admin mode, update immediately
                isFadingOut = false;
                localStorage.setItem('isAdmin', 'true');
                updateAdminUI();
            }
        });
    }
    
    // Mobile admin menu handlers
    const mobileAdminMenuBtn = document.getElementById('mobile-admin-menu-btn');
    const mobileAdminDropdown = document.getElementById('mobile-admin-dropdown');
    const mobileCultOption = document.getElementById('mobile-cult-option');
    const mobileNotesOption = document.getElementById('mobile-notes-option');
    
    if (mobileAdminMenuBtn && mobileAdminDropdown) {
        mobileAdminMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Mobile admin menu clicked, toggling dropdown');
            mobileAdminDropdown.classList.toggle('active');
            mobileAdminMenuBtn.classList.toggle('active');
            console.log('Dropdown active:', mobileAdminDropdown.classList.contains('active'));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileAdminMenuWrapper.contains(e.target)) {
                mobileAdminDropdown.classList.remove('active');
                mobileAdminMenuBtn.classList.remove('active');
            }
        });
        
        // Handle cult option click
        if (mobileCultOption) {
            mobileCultOption.addEventListener('click', () => {
                window.location.href = 'secret.html';
            });
        }
        
        // Handle notes option click
        if (mobileNotesOption) {
            mobileNotesOption.addEventListener('click', () => {
                window.location.href = 'docs.html';
            });
        }
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
                window.location.href = 'secret.html';
            });
        }
        
        // Handle notes option click
        if (desktopNotesOption) {
            desktopNotesOption.addEventListener('click', () => {
                window.location.href = 'docs.html';
            });
        }
    }
    
    // Check if user was on home page before reload, or load home page by default on first visit
    const isOnHomePage = localStorage.getItem('isOnHomePage');
    
    // On mobile, always show Bible directly. On desktop/tablet, show home page by default
    if (isMobile) {
        // Mobile: Load Bible directly
        loadBook(currentBook, currentChapter);
    } else {
        // Desktop/Tablet: Show home page by default or based on saved state
        if (isOnHomePage === null || isOnHomePage === 'true') {
            showHomePage();
            if (isOnHomePage === null) {
                localStorage.setItem('isOnHomePage', 'true');
            }
        } else {
            loadBook(currentBook, currentChapter);
        }
    }
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
        }
    });
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
        const elapsedTime = Date.now() - loaderStartTime;
        const minDisplayTime = 500; // minimum 500ms display
        
        if (elapsedTime < minDisplayTime) {
            setTimeout(() => {
                loader.classList.remove('active');
            }, minDisplayTime - elapsedTime);
        } else {
            loader.classList.remove('active');
        }
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
    const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
    
    if (currentLanguage === 'both') {
        // Load both Tamil and English
        currentTamilData = null;
        currentData = null;
        
        // Load Tamil first
        const tamilScriptPath = `Bible/tamil/${testament}/${book.file}.js`;
        const tamilScript = document.createElement('script');
        tamilScript.id = 'bible-data-script-tamil';
        tamilScript.src = tamilScriptPath;
        
        // Remove old scripts
        const oldTamilScript = document.getElementById('bible-data-script-tamil');
        if (oldTamilScript) oldTamilScript.remove();
        const oldEnglishScript = document.getElementById('bible-data-script');
        if (oldEnglishScript) oldEnglishScript.remove();
        
        tamilScript.onload = () => {
            const dataVarName = `${book.file}_data`;
            currentTamilData = window[dataVarName];
            
            // Now load English
            const englishScriptPath = `Bible/easy-english/${testament}/${book.file}.js`;
            const englishScript = document.createElement('script');
            englishScript.id = 'bible-data-script';
            englishScript.src = englishScriptPath;
            
            englishScript.onload = () => {
                currentData = window[dataVarName];
                if (currentData && currentTamilData) {
                    updateUI();
                    hideLoader();
                }
            };
            
            englishScript.onerror = () => {
                console.error(`Failed to load ${englishScriptPath}`);
                hideLoader();
            };
            
            document.body.appendChild(englishScript);
        };
        
        tamilScript.onerror = () => {
            console.error(`Failed to load ${tamilScriptPath}`);
            hideLoader();
        };
        
        document.body.appendChild(tamilScript);
        
    } else {
        // Single language mode
        let languageFolder = currentLanguage === 'tamil' ? 'tamil' : 'easy-english';
        const scriptPath = `Bible/${languageFolder}/${testament}/${book.file}.js`;
        
        // Remove previous scripts
        const oldScript = document.getElementById('bible-data-script');
        if (oldScript) oldScript.remove();
        const oldTamilScript = document.getElementById('bible-data-script-tamil');
        if (oldTamilScript) oldTamilScript.remove();
        
        // Load new script
        const script = document.createElement('script');
        script.id = 'bible-data-script';
        script.src = scriptPath;
        script.onload = () => {
            const dataVarName = `${book.file}_data`;
            currentData = window[dataVarName];
            currentTamilData = null;
            
            if (currentData) {
                updateUI();
                hideLoader();
            } else {
                console.error('Failed to load Bible data');
                hideLoader();
            }
        };
        script.onerror = () => {
            console.error(`Failed to load ${scriptPath}`);
            hideLoader();
        };
        
        document.body.appendChild(script);
    }
}

// Update UI with loaded data
function updateUI() {
    updateBookSelection();
    updateChapters();
    updateVerses();
    displayChapter();
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
        item.addEventListener('click', () => {
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
        console.error('Verses column not found');
        return;
    }
    
    // Safety check: if currentData is not loaded yet, skip update
    if (!currentData) {
        console.log('Waiting for data to load...');
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
        item.addEventListener('click', () => {
            // Restore UI elements if coming from home page
            restoreUIFromHomePage();
            localStorage.removeItem('isOnHomePage');
            
            hasUserInteracted = true;
            localStorage.setItem('hasUserInteracted', 'true');
            const verse = parseInt(item.dataset.verse);
            
            // Remove active class from all verse items
            versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
            
            // Add active class to clicked verse
            item.classList.add('active');
            
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
        console.log('Waiting for data to load...');
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
            
            html += `<p class="verse-line${memoryVerseClass}" data-verse="${verseNum}"${tooltip}>
                <sup class="v-num">${verseNum}</sup><span class="tamil-text">${tamilText}</span><br>
                <span class="english-text ${englishTextColor}">${englishText}</span>
            </p>`;
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
            
            html += `<p class="verse-line${memoryVerseClass}" data-verse="${verseNum}"${tooltip}><sup class="v-num">${verseNum}</sup>${verseText}</p>`;
        });
    }
    
    contentArea.innerHTML = html;
    
    // Add click handlers to verse lines
    contentArea.querySelectorAll('.verse-line').forEach(verseLine => {
        verseLine.addEventListener('click', () => {
            const verseNum = parseInt(verseLine.dataset.verse);
            
            // Remove highlight from all verses
            contentArea.querySelectorAll('.verse-line').forEach(v => v.classList.remove('highlighted'));
            
            // Add highlight to clicked verse
            verseLine.classList.add('highlighted');
            
            // Update verse number selection in verses column
            const versesColumn = document.querySelector('.verses-column');
            versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
            const verseItem = versesColumn.querySelector(`.number-item[data-verse="${verseNum}"]`);
            if (verseItem) {
                verseItem.classList.add('active');
            }
            
            // Show note viewer if verse has a note
            showNoteViewerIfExists(verseNum);
        });

        // Add double-click handler for desktop/tablet
        verseLine.addEventListener('dblclick', () => {
            const verseNum = parseInt(verseLine.dataset.verse);
            openNotesModal(verseNum);
        });

        // Add right-click handler for desktop/tablet
        verseLine.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const verseNum = parseInt(verseLine.dataset.verse);
            openNotesModal(verseNum);
        });

        // Add long-press handler for mobile
        let pressTimer;
        verseLine.addEventListener('touchstart', (e) => {
            const verseNum = parseInt(verseLine.dataset.verse);
            pressTimer = setTimeout(() => {
                openNotesModal(verseNum);
            }, 500); // 500ms for long press
        });

        verseLine.addEventListener('touchend', () => {
            clearTimeout(pressTimer);
        });

        verseLine.addEventListener('touchmove', () => {
            clearTimeout(pressTimer);
        });
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
    
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
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

// Scroll to specific verse
function scrollToVerse(verseNum) {
    // Remove highlight from all verses
    document.querySelectorAll('.verse-line').forEach(v => v.classList.remove('highlighted'));
    
    const verseLine = document.querySelector(`.verse-line[data-verse="${verseNum}"]`);
    if (verseLine) {
        // Add highlight to selected verse
        verseLine.classList.add('highlighted');
        
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
        } else if (currentBook > 0) {
            currentBook--;
            currentChapter = bibleBooks[currentBook].chapters;
            loadBook(currentBook, currentChapter);
        }
    }
    
    // Next chapter
    if (e.target.closest('.nav-btn[aria-label="Next"]')) {
        const book = bibleBooks[currentBook];
        if (currentChapter < book.chapters) {
            currentChapter++;
            localStorage.setItem('currentChapter', currentChapter);
            updateUI();
        } else if (currentBook < bibleBooks.length - 1) {
            currentBook++;
            currentChapter = 1;
            loadBook(currentBook, currentChapter);
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
            return;
        }
        
        // Start view transition
        const transition = document.startViewTransition(() => {
            document.body.classList.toggle('dark-theme');
            const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
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
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener('click', toggleTheme);
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
    
    // Open modal
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateModalActiveState();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close when clicking overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Handle language selection
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
        scriptureText.style.display = 'block';
        booksSidebar.style.display = 'flex';
        chaptersColumn.style.display = 'flex';
        versesColumn.style.display = 'flex';
        if (bottomNav) bottomNav.style.display = 'flex';
        if (chapterHeader) chapterHeader.style.display = 'block';
        // Don't clear search input, filters, or results - preserve them
        
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
            console.log('Starting search for:', value);
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
        console.log('performSearch called with:', query);
        const isTamil = isTamilText(query);
        console.log('Is Tamil:', isTamil);
        const results = [];
        const searchLower = query.toLowerCase();
        const batchSize = 5; // Load 5 books at a time
        
        // Get filter values
        const selectedBookIndex = filterBook.value;
        const selectedChapter = filterChapter.value.trim();
        
        // Determine which books to search
        let booksToSearch = bibleBooks;
        if (selectedBookIndex !== '') {
            booksToSearch = [bibleBooks[parseInt(selectedBookIndex)]];
        }
        
        // Process books in batches for better performance
        for (let i = 0; i < booksToSearch.length; i += batchSize) {
            const batch = booksToSearch.slice(i, i + batchSize);
            
            // Load batch of books in parallel
            await Promise.all(batch.map(async (book, batchIndex) => {
                const bookIndex = booksToSearch.indexOf(book);
                const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
                const language = isTamil ? 'tamil' : 'easy-english';
                
                try {
                    // Load book data using script tag
                    const scriptPath = `Bible/${language}/${testament}/${book.file}.js`;
                    
                    await new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = scriptPath;
                        script.id = `search-script-${bookIndex}`;
                        
                        script.onload = () => resolve();
                        script.onerror = () => reject(new Error(`Failed to load ${scriptPath}`));
                        
                        document.body.appendChild(script);
                    });
                    
                    // Get the data from window
                    const dataVarName = `${book.file}_data`;
                    const bookData = window[dataVarName];
                    
                    if (!bookData) {
                        console.error(`No data found for ${book.name}`);
                        return;
                    }
                    
                    // Search through chapters
                    for (let chapterNum = 1; chapterNum <= book.chapters; chapterNum++) {
                        // Apply chapter filter if specified
                        if (selectedChapter !== '' && chapterNum !== parseInt(selectedChapter)) {
                            continue;
                        }
                        
                        const chapterKey = `chapter_${chapterNum}`;
                        const chapterData = bookData[chapterKey];
                        
                        if (!chapterData) continue;
                        
                        // Search through verses
                        for (const verseKey in chapterData) {
                            const verseText = chapterData[verseKey];
                            const verseNum = verseKey.replace('verse_', '');
                            
                            // Check if verse contains search query
                            let isMatch = false;
                            let matchPosition = -1;
                            
                            if (isTamil) {
                                matchPosition = verseText.indexOf(query);
                                isMatch = matchPosition !== -1;
                            } else {
                                const regex = new RegExp(`\\b${escapeRegExp(query)}`, 'gi');
                                const match = verseText.match(regex);
                                if (match) {
                                    isMatch = true;
                                    matchPosition = verseText.toLowerCase().search(regex);
                                }
                            }
                            
                            if (isMatch) {
                                results.push({
                                    bookIndex,
                                    bookName: isTamil ? book.tamilName : book.name,
                                    chapter: chapterNum,
                                    verse: verseNum,
                                    text: verseText,
                                    query: query,
                                    matchPosition: matchPosition
                                });
                            }
                        }
                    }
                    
                    // Remove the script after processing
                    const scriptToRemove = document.getElementById(`search-script-${bookIndex}`);
                    if (scriptToRemove) {
                        scriptToRemove.remove();
                    }
                    
                } catch (error) {
                    console.error(`Error loading ${book.name}:`, error);
                }
            }));
            
            // Stop if we have 100 results
            if (results.length >= 100) {
                console.log('Found 100 results, stopping search');
                cleanupSearchScripts();
                displayResults(results.slice(0, 100));
                return;
            }
        }
        
        console.log('Search complete. Total results:', results.length);
        
        // Sort results: prioritize matches at the beginning
        results.sort((a, b) => {
            // First, sort by match position (earlier matches first)
            if (a.matchPosition !== b.matchPosition) {
                return a.matchPosition - b.matchPosition;
            }
            // If same position, maintain book order
            if (a.bookIndex !== b.bookIndex) {
                return a.bookIndex - b.bookIndex;
            }
            // If same book, sort by chapter
            if (a.chapter !== b.chapter) {
                return a.chapter - b.chapter;
            }
            // If same chapter, sort by verse
            return a.verse - b.verse;
        });
        
        cleanupSearchScripts();
        displayResults(results);
    }
    
    // Clean up all search scripts
    function cleanupSearchScripts() {
        const searchScripts = document.querySelectorAll('[id^="search-script-"]');
        searchScripts.forEach(script => script.remove());
    }
    
    // Display search results
    function displayResults(results) {
        if (results.length === 0) {
            searchResultsInfo.style.display = 'none';
            showNoResults();
            return;
        }
        
        // Show results count - display "100+" if 100 or more, else exact count
        searchResultsInfo.style.display = 'block';
        resultsCount.textContent = results.length >= 100 ? '100+' : results.length;
        
        let html = '';
        
        results.forEach(result => {
            // Highlight matching text
            const highlightedText = highlightMatch(result.text, result.query);
            
            html += `
                <div class="search-result-item" data-book="${result.bookIndex}" data-chapter="${result.chapter}" data-verse="${result.verse}">
                    <div class="search-result-reference">${result.bookName} ${result.chapter}:${result.verse}</div>
                    <div class="search-result-text">${highlightedText}</div>
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
                
                const booksSidebar = document.querySelector('.books-sidebar');
                const chaptersColumn = document.querySelector('.chapters-column');
                const versesColumn = document.querySelector('.verses-column');
                const bottomNav = document.querySelector('.bottom-nav');
                
                // Remove active class from search button
                searchBtn.classList.remove('active');
                
                // Hide search bar
                searchBar.style.display = 'none';
                
                // Hide search, show everything (preserve search query and results)
                searchResults.style.display = 'none';
                searchResults.classList.remove('active');
                searchResultsInfo.style.display = 'none';
                scriptureText.style.display = 'block';
                booksSidebar.style.display = 'flex';
                chaptersColumn.style.display = 'flex';
                versesColumn.style.display = 'flex';
                if (bottomNav) bottomNav.style.display = 'flex';
                isSearchActive = false;
                
                // Force refresh book names display after sidebar is visible
                setTimeout(() => {
                    updateBookNames();
                }, 0);
                
                // Navigate to verse
                loadBook(bookIndex, chapter).then(() => {
                    // Scroll to verse after loading
                    setTimeout(() => {
                        // Scroll to verse in the verse column
                        const versesColumn = document.querySelector('.verses-column');
                        const verseItem = versesColumn ? versesColumn.querySelector(`[data-verse="${verse}"]`) : null;
                        if (verseItem) {
                            verseItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // Add active class
                            versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                            verseItem.classList.add('active');
                        }
                        
                        // Scroll to verse in the content area and highlight it
                        // Remove highlight from all verses
                        document.querySelectorAll('.verse-line').forEach(v => v.classList.remove('highlighted'));
                        
                        const verseElement = document.querySelector(`.verse-line[data-verse="${verse}"]`);
                        if (verseElement) {
                            verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // Add highlight class
                            verseElement.classList.add('highlighted');
                        }
                    }, 500);
                });
            });
        });
    }
    
    // Highlight matching text
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }
    
    // Escape special regex characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // Initialize with empty state
    showEmptyState();
}

// Site title click to show secret icon after 5 clicks and activate admin mode
function initializeSiteTitle() {
    const siteTitle = document.querySelector('.site-title');
    const secretIcon = document.getElementById('secret-icon');
    let clickCount = 0;
    let clickTimer = null;
    
    if (siteTitle) {
        siteTitle.addEventListener('click', () => {
            // Don't count clicks if admin mode is already active
            if (isAdmin()) {
                return;
            }
            
            clickCount++;
            
            // Clear existing timer
            if (clickTimer) {
                clearTimeout(clickTimer);
            }
            
            // Set timer to reset counter if no click within 2 seconds
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 2000);
            
            // Check click count
            if (clickCount >= 5) {
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
                
                clickCount = 0; // Reset counter
                clearTimeout(clickTimer); // Clear timer after completion
            }
        });
    }
    
    // Add click handler for secret icon
    if (secretIcon) {
        secretIcon.addEventListener('click', () => {
            window.location.href = 'secret.html';
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
                case 'home':
                    // Navigate to home page
                    showHomePage();
                    break;
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

// Show home page with just the title
function showHomePage() {
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
    // If memory verses haven't loaded yet, wait for them
    if (typeof memoryVerses !== 'undefined' && memoryVerses.length > 0) {
        loadRandomMemoryVerse();
    } else {
        // Wait for memory verses to load then display
        loadMemoryVersesFromSupabase().then(() => {
            if (typeof memoryVerses !== 'undefined' && memoryVerses.length > 0) {
                loadRandomMemoryVerse();
            }
        });
    }
    
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
    
    // Show loading state
    scriptureText.style.display = 'block';
    scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 1.2rem; color: var(--text-secondary);">Loading verse...</div>';
    
    if (typeof memoryVerses === 'undefined' || memoryVerses.length === 0) {
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 2rem; color: var(--text-secondary);">Welcome to My Bible</div>';
        return;
    }
    
    // Get today's verse (same verse throughout the day)
    const verseIndex = getTodayVerseIndex();
    const verseReference = memoryVerses[verseIndex];
    
    // Parse the verse reference (e.g., "John 3:16" or "Isaiah 12:1–6")
    const verseData = parseVerseReference(verseReference);
    if (!verseData) {
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
        scriptureText.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Book not found: ${verseData.bookName}</div>`;
        return;
    }
    
    const book = bibleBooks[bookIndex];
    const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
    
    // Load the book data
    const languageFolder = currentLanguage === 'tamil' ? 'tamil' : 'easy-english';
    const scriptPath = `Bible/${languageFolder}/${testament}/${book.file}.js`;
    const dataVarName = `${book.file}_data`;
    
    // Check if data is already loaded
    if (window[dataVarName]) {
        displayVerseContent(window[dataVarName], verseData, verseReference, scriptureText);
        return;
    }
    
    // Remove any existing script with the same ID
    const existingScript = document.getElementById('home-verse-script');
    if (existingScript) existingScript.remove();
    
    // Create script element to load the book
    const script = document.createElement('script');
    script.id = 'home-verse-script';
    script.src = scriptPath;
    script.onload = () => {
        const bookData = window[dataVarName];
        displayVerseContent(bookData, verseData, verseReference, scriptureText);
    };
    
    script.onerror = () => {
        scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Failed to load verse</div>';
    };
    
    document.body.appendChild(script);
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
            scriptureText.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; color: var(--text-secondary);">Verse not found</div>';
        }
    } else {
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
        const charactersPath = getCharactersPath(bookName);
        
        // Get option elements
        const summaryOption = document.querySelector('.home-option[data-action="summary"]');
        const timelineOption = document.querySelector('.home-option[data-action="timeline"]');
        const charactersOption = document.querySelector('.home-option[data-action="characters"]');
    
    // Check availability for each type
    const summaryVarName = `${fileName.replace(/_/g, '')}Summary`;
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    const charactersVarName = `${fileName.replace(/_/g, '')}Characters`;
    
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
    
    // Check characters
    if (charactersPath) {
        const promise = new Promise((resolve) => {
            if (window[charactersVarName] && window[charactersVarName][chapterNum]) {
                resolve(true);
            } else if (!document.querySelector(`script[src="${charactersPath}"]`)) {
                const script = document.createElement('script');
                script.src = charactersPath;
                script.onload = () => {
                    resolve(window[charactersVarName] && window[charactersVarName][chapterNum]);
                };
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            } else {
                resolve(window[charactersVarName] && window[charactersVarName][chapterNum]);
            }
        });
        checkPromises.push(promise.then(hasCharacters => {
            if (charactersOption) charactersOption.style.display = hasCharacters ? 'flex' : 'none';
        }));
    } else {
        if (charactersOption) charactersOption.style.display = 'none';
    }
    
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
    
    // Map book names to summary file paths
    const summaryPath = getSummaryPath(bookName);
    
    if (!summaryPath) {
        alert('Summary not available for this book yet.');
        return;
    }
    
    // Load the summary dynamically
    loadSummaryScript(summaryPath, bookName, chapterNum);
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
    
    // Map book names to timeline file paths
    const timelinePath = getTimelinePath(bookName);
    
    if (!timelinePath) {
        alert('Timeline not available for this book yet.');
        return;
    }
    
    // Load the timeline dynamically
    loadTimelineScript(timelinePath, bookName, chapterNum);
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
function displayTimeline(bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const timelineVarName = `${fileName.replace(/_/g, '')}Timeline`;
    
    // Try to access the timeline object
    const timelineData = window[timelineVarName];
    
    if (timelineData && timelineData[chapterNum]) {
        const summaryDrawer = document.getElementById('summary-drawer');
        const summaryDrawerContent = document.getElementById('summary-drawer-content');
        const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
        const timeline = timelineData[chapterNum];
        
        // Update drawer title
        summaryDrawerTitle.textContent = 'Chapter Timeline';
        
        // Format the timeline with proper styling
        const formattedTimeline = timeline
            .map(event => `<li><div class="timeline-event">${event}</div></li>`)
            .join('');
        
        summaryDrawerContent.innerHTML = `<ul class="timeline-list">${formattedTimeline}</ul>`;
        
        // Show the drawer
        summaryDrawer.classList.add('active');
        document.body.classList.add('summary-drawer-open');
    } else {
        alert(`Timeline not available for ${bookName} ${chapterNum} yet.`);
    }
}

// Show chapter characters
function showChapterCharacters() {
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
    
    // Map book names to characters file paths
    const charactersPath = getCharactersPath(bookName);
    
    if (!charactersPath) {
        alert('Characters not available for this book yet.');
        return;
    }
    
    // Load the characters dynamically
    loadCharactersScript(charactersPath, bookName, chapterNum);
}

// Get characters file path based on book name
function getCharactersPath(bookName) {
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
        return `resources/characters/new-testament/${fileName}.js`;
    } else if (oldTestamentBooks.includes(bookName)) {
        return `resources/characters/old-testament/${fileName}.js`;
    }
    
    return null;
}

// Load characters script dynamically
function loadCharactersScript(path, bookName, chapterNum) {
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${path}"]`);
    
    if (existingScript) {
        // Script already loaded, display characters
        displayCharacters(bookName, chapterNum);
    } else {
        // Load the script
        const script = document.createElement('script');
        script.src = path;
        script.onload = () => {
            displayCharacters(bookName, chapterNum);
        };
        script.onerror = () => {
            alert(`Failed to load characters for ${bookName}.`);
        };
        document.body.appendChild(script);
    }
}

// Display characters in the drawer
function displayCharacters(bookName, chapterNum) {
    const fileName = bookName.toLowerCase().replace(/ /g, '_');
    const charactersVarName = `${fileName.replace(/_/g, '')}Characters`;
    
    // Try to access the characters object
    const charactersData = window[charactersVarName];
    
    if (charactersData && charactersData[chapterNum]) {
        const summaryDrawer = document.getElementById('summary-drawer');
        const summaryDrawerContent = document.getElementById('summary-drawer-content');
        const summaryDrawerTitle = document.querySelector('.summary-drawer-title');
        const characters = charactersData[chapterNum];
        
        // Update drawer title
        summaryDrawerTitle.textContent = 'Chapter Characters';
        
        // Format the characters with proper styling
        const formattedCharacters = characters
            .map((character, index) => `
                <div class="character-item">
                    <div class="character-number">${index + 1}. ${character.name}</div>
                    <div class="character-description">${character.description}</div>
                </div>
            `)
            .join('');
        
        summaryDrawerContent.innerHTML = `<div class="characters-list">${formattedCharacters}</div>`;
        
        // Show the drawer
        summaryDrawer.classList.add('active');
        document.body.classList.add('summary-drawer-open');
    } else {
        alert(`Characters not available for ${bookName} ${chapterNum} yet.`);
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
                console.log('✓ Notes loaded from Supabase:', Object.keys(verseNotes).length, 'notes');
                
                // Apply notes to current chapter if loaded
                applyAllNoteDisplays();
                return true;
            }
        }
        
        console.log('No notes found in Supabase, starting fresh');
        verseNotes = {};
        return false;
    } catch (error) {
        console.warn('Could not load notes from Supabase:', error.message);
        
        // Fallback to localStorage
        const localNotes = localStorage.getItem('verseNotes');
        if (localNotes) {
            verseNotes = JSON.parse(localNotes);
            console.log('Loaded notes from local storage as fallback');
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
            console.log('✓ Notes saved to Supabase successfully');
            return true;
        } else {
            const error = await response.text();
            console.error('Failed to save to Supabase:', error);
            return false;
        }
    } catch (error) {
        console.error('Error saving to Supabase:', error);
        return false;
    }
}

// Memory Verses - Load from Supabase
async function loadMemoryVersesFromSupabase() {
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
                window.memoryVerses = data.map(row => row.verse_reference).filter(ref => ref);
                
                if (window.memoryVerses && window.memoryVerses.length > 0) {
                    console.log('✓ Memory verses loaded from Supabase:', window.memoryVerses.length, 'verses');
                    markBooksWithMemoryVerses();
                    return true;
                }
            }
        } else {
            const errorText = await response.text();
            console.error('Failed to load memory verses from Supabase:', response.status, errorText);
        }
        
        // Fallback to localStorage
        const localVerses = localStorage.getItem('memoryVerses');
        if (localVerses) {
            window.memoryVerses = JSON.parse(localVerses);
            console.log('Loaded memory verses from local storage as fallback');
            markBooksWithMemoryVerses();
        }
        return false;
    } catch (error) {
        console.error('Error loading memory verses from Supabase:', error);
        
        // Fallback to localStorage
        const localVerses = localStorage.getItem('memoryVerses');
        if (localVerses) {
            window.memoryVerses = JSON.parse(localVerses);
            console.log('Loaded memory verses from local storage as fallback');
            markBooksWithMemoryVerses();
        }
        return false;
    }
}

async function saveMemoryVersesToSupabase() {
    // Save to localStorage immediately
    localStorage.setItem('memoryVerses', JSON.stringify(memoryVerses));
    
    try {
        // Delete all existing rows first
        await fetch(`${SUPABASE_MEMORY_CONFIG.url}/rest/v1/${SUPABASE_MEMORY_CONFIG.tableName}`, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_MEMORY_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_MEMORY_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            }
        });
        
        // Insert all verses as individual rows
        const rows = memoryVerses.map(verse => ({
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
            console.log('✓ Memory verses saved to Supabase successfully');
            return true;
        } else {
            const error = await response.text();
            console.error('Failed to save memory verses to Supabase:', error);
            return false;
        }
    } catch (error) {
        console.error('Error saving memory verses to Supabase:', error);
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
    if (existingNote) {
        textarea.value = existingNote.text;
        currentNoteColor = existingNote.color || 'burgundy';
        deleteBtn.style.display = 'block';
    } else {
        textarea.value = '';
        currentNoteColor = 'burgundy';
        deleteBtn.style.display = 'none';
    }
    
    // Update active color button
    document.querySelectorAll('.note-color-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === currentNoteColor);
    });
    
    // Prevent body scroll
    document.body.classList.add('modal-open');
    
    modal.style.display = 'flex';
}

function closeNotesModal() {
    const modal = document.querySelector('.notes-modal-overlay');
    
    // Allow body scroll
    document.body.classList.remove('modal-open');
    
    if (modal) {
        modal.style.display = 'none';
    }
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
        
        if (noteText) {
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
    verseLine.classList.remove('has-note', 'note-yellow', 'note-green', 'note-blue', 'note-pink', 'note-orange', 'note-purple');
    
    // Add note classes if note exists
    if (verseNotes[noteKey]) {
        verseLine.classList.add('has-note', `note-${verseNotes[noteKey].color}`);
    }
}

function applyAllNoteDisplays() {
    const verses = document.querySelectorAll('.verse-line');
    verses.forEach(verseLine => {
        const verseNum = parseInt(verseLine.dataset.verse);
        const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
        
        if (verseNotes[noteKey]) {
            verseLine.classList.add('has-note', `note-${verseNotes[noteKey].color}`);
        }
    });
}

// Show note viewer for a verse if it has a note
function showNoteViewerIfExists(verseNum) {
    const noteKey = `${bibleBooks[currentBook].file}_${currentChapter}_${verseNum}`;
    const note = verseNotes[noteKey];
    
    if (note) {
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
    
    // Prevent body scroll
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
    
    // Allow body scroll
    document.body.classList.remove('modal-open');
    
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
    return localStorage.getItem('isAdmin') === 'true';
}

function updateAdminUI() {
    const editButtons = document.querySelectorAll('.note-viewer-edit-btn');
    const isAdminMode = isAdmin();
    const adminToggle = document.getElementById('admin-toggle');
    const adminCheck = adminToggle?.querySelector('.admin-check');
    
    editButtons.forEach(btn => {
        btn.style.display = isAdminMode ? 'flex' : 'none';
    });
    
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
    const colorBtns = document.querySelectorAll('.note-color-btn');
    
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
    
    // Color selection
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentNoteColor = btn.dataset.color;
        });
    });
    
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
