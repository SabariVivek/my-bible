// Bible book configuration
const bibleBooks = [
    // Old Testament
    { name: 'Genesis', tamilName: 'ஆதியாகமம்', file: 'genesis', testament: 'old', chapters: 50 },
    { name: 'Exodus', tamilName: 'யாத்திராகமம்', file: 'exodus', testament: 'old', chapters: 40 },
    { name: 'Leviticus', tamilName: 'லேவியராகமம்', file: 'leviticus', testament: 'old', chapters: 27 },
    { name: 'Numbers', tamilName: 'எண்ணாகமம்', file: 'numbers', testament: 'old', chapters: 36 },
    { name: 'Deuteronomy', tamilName: 'உபாகமம்', file: 'deuteronomy', testament: 'old', chapters: 34 },
    { name: 'Joshua', tamilName: 'யோசுவா', file: 'joshua', testament: 'old', chapters: 24 },
    { name: 'Judges', tamilName: 'நியாயாதிபதிகள்', file: 'judges', testament: 'old', chapters: 21 },
    { name: 'Ruth', tamilName: 'ரூத்', file: 'ruth', testament: 'old', chapters: 4 },
    { name: 'I Samuel', tamilName: '1 சாமுவேல்', file: 'i_samuel', testament: 'old', chapters: 31 },
    { name: 'II Samuel', tamilName: '2 சாமுவேல்', file: 'ii_samuel', testament: 'old', chapters: 24 },
    { name: 'I Kings', tamilName: '1 இராஜாக்கள்', file: 'i_kings', testament: 'old', chapters: 22 },
    { name: 'II Kings', tamilName: '2 இராஜாக்கள்', file: 'ii_kings', testament: 'old', chapters: 25 },
    { name: 'I Chronicles', tamilName: '1 நாளாகமம்', file: 'i_chronicles', testament: 'old', chapters: 29 },
    { name: 'II Chronicles', tamilName: '2 நாளாகமம்', file: 'ii_chronicles', testament: 'old', chapters: 36 },
    { name: 'Ezra', tamilName: 'எஸ்றா', file: 'ezra', testament: 'old', chapters: 10 },
    { name: 'Nehemiah', tamilName: 'நெகேமியா', file: 'nehemiah', testament: 'old', chapters: 13 },
    { name: 'Esther', tamilName: 'எஸ்தர்', file: 'esther', testament: 'old', chapters: 10 },
    { name: 'Job', tamilName: 'யோபு', file: 'job', testament: 'old', chapters: 42 },
    { name: 'Psalms', tamilName: 'சங்கீதம்', file: 'psalms', testament: 'old', chapters: 150 },
    { name: 'Proverbs', tamilName: 'நீதிமொழிகள்', file: 'proverbs', testament: 'old', chapters: 31 },
    { name: 'Ecclesiastes', tamilName: 'பிரசங்கி', file: 'ecclesiastes', testament: 'old', chapters: 12 },
    { name: 'Song of Solomon', tamilName: 'உன்னதப்பாட்டு', file: 'song_of_solomon', testament: 'old', chapters: 8 },
    { name: 'Isaiah', tamilName: 'ஏசாயா', file: 'isaiah', testament: 'old', chapters: 66 },
    { name: 'Jeremiah', tamilName: 'எரேமியா', file: 'jeremiah', testament: 'old', chapters: 52 },
    { name: 'Lamentations', tamilName: 'புலம்பல்', file: 'lamentations', testament: 'old', chapters: 5 },
    { name: 'Ezekiel', tamilName: 'எசேக்கியேல்', file: 'ezekiel', testament: 'old', chapters: 48 },
    { name: 'Daniel', tamilName: 'தானியேல்', file: 'daniel', testament: 'old', chapters: 12 },
    { name: 'Hosea', tamilName: 'ஓசியா', file: 'hosea', testament: 'old', chapters: 14 },
    { name: 'Joel', tamilName: 'யோவேல்', file: 'joel', testament: 'old', chapters: 3 },
    { name: 'Amos', tamilName: 'ஆமோஸ்', file: 'amos', testament: 'old', chapters: 9 },
    { name: 'Obadiah', tamilName: 'ஒபதியா', file: 'obadiah', testament: 'old', chapters: 1 },
    { name: 'Jonah', tamilName: 'யோனா', file: 'jonah', testament: 'old', chapters: 4 },
    { name: 'Micah', tamilName: 'மீகா', file: 'micah', testament: 'old', chapters: 7 },
    { name: 'Nahum', tamilName: 'நாகூம்', file: 'nahum', testament: 'old', chapters: 3 },
    { name: 'Habakkuk', tamilName: 'ஆபகூக்', file: 'habakkuk', testament: 'old', chapters: 3 },
    { name: 'Zephaniah', tamilName: 'செப்பனியா', file: 'zephaniah', testament: 'old', chapters: 3 },
    { name: 'Haggai', tamilName: 'ஆகாய்', file: 'haggai', testament: 'old', chapters: 2 },
    { name: 'Zechariah', tamilName: 'சகரியா', file: 'zechariah', testament: 'old', chapters: 14 },
    { name: 'Malachi', tamilName: 'மல்கியா', file: 'malachi', testament: 'old', chapters: 4 },
    // New Testament
    { name: 'Matthew', tamilName: 'மத்தேயு', file: 'matthew', testament: 'new', chapters: 28 },
    { name: 'Mark', tamilName: 'மாற்கு', file: 'mark', testament: 'new', chapters: 16 },
    { name: 'Luke', tamilName: 'லூக்கா', file: 'luke', testament: 'new', chapters: 24 },
    { name: 'John', tamilName: 'யோவான்', file: 'john', testament: 'new', chapters: 21 },
    { name: 'Acts', tamilName: 'அப்போஸ்தலர்', file: 'acts', testament: 'new', chapters: 28 },
    { name: 'Romans', tamilName: 'ரோமர்', file: 'romans', testament: 'new', chapters: 16 },
    { name: 'I Corinthians', tamilName: '1 கொரிந்தியர்', file: 'i_corinthians', testament: 'new', chapters: 16 },
    { name: 'II Corinthians', tamilName: '2 கொரிந்தியர்', file: 'ii_corinthians', testament: 'new', chapters: 13 },
    { name: 'Galatians', tamilName: 'கலாத்தியர்', file: 'galatians', testament: 'new', chapters: 6 },
    { name: 'Ephesians', tamilName: 'எபேசியர்', file: 'ephesians', testament: 'new', chapters: 6 },
    { name: 'Philippians', tamilName: 'பிலிப்பியர்', file: 'philippians', testament: 'new', chapters: 4 },
    { name: 'Colossians', tamilName: 'கொலோசெயர்', file: 'colossians', testament: 'new', chapters: 4 },
    { name: 'I Thessalonians', tamilName: '1 தெசலோனிக்கேயர்', file: 'i_thessalonians', testament: 'new', chapters: 5 },
    { name: 'II Thessalonians', tamilName: '2 தெசலோனிக்கேயர்', file: 'ii_thessalonians', testament: 'new', chapters: 3 },
    { name: 'I Timothy', tamilName: '1 தீமோத்தேயு', file: 'i_timothy', testament: 'new', chapters: 6 },
    { name: 'II Timothy', tamilName: '2 தீமோத்தேயு', file: 'ii_timothy', testament: 'new', chapters: 4 },
    { name: 'Titus', tamilName: 'தீத்து', file: 'titus', testament: 'new', chapters: 3 },
    { name: 'Philemon', tamilName: 'பிலேமோன்', file: 'philemon', testament: 'new', chapters: 1 },
    { name: 'Hebrews', tamilName: 'எபிரெயர்', file: 'hebrews', testament: 'new', chapters: 13 },
    { name: 'James', tamilName: 'யாக்கோபு', file: 'james', testament: 'new', chapters: 5 },
    { name: 'I Peter', tamilName: '1 பேதுரு', file: 'i_peter', testament: 'new', chapters: 5 },
    { name: 'II Peter', tamilName: '2 பேதுரு', file: 'ii_peter', testament: 'new', chapters: 3 },
    { name: 'I John', tamilName: '1 யோவான்', file: 'i_john', testament: 'new', chapters: 5 },
    { name: 'II John', tamilName: '2 யோவான்', file: 'ii_john', testament: 'new', chapters: 1 },
    { name: 'III John', tamilName: '3 யோவான்', file: 'iii_john', testament: 'new', chapters: 1 },
    { name: 'Jude', tamilName: 'யூதா', file: 'jude', testament: 'new', chapters: 1 },
    { name: 'Revelation', tamilName: 'வெளிப்படுத்தல்', file: 'revelation', testament: 'new', chapters: 22 }
];

// Current state
let currentBook = parseInt(localStorage.getItem('currentBook')) || 0; // Genesis
let currentChapter = parseInt(localStorage.getItem('currentChapter')) || 1;
let currentData = null;
let currentTamilData = null; // For storing Tamil data when "Both" is selected
let currentLanguage = localStorage.getItem('currentLanguage') || 'tamil'; // 'english' or 'tamil' or 'both'
let englishTextColor = localStorage.getItem('englishTextColor') || 'default'; // 'default', 'blue' or 'red'
let hasUserInteracted = localStorage.getItem('hasUserInteracted') === 'true'; // Track if user has selected a verse

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeScrollbar();
    initializeTheme();
    initializeBookList();
    initializeMobileDrawer();
    initializeMobileLanguageModal();
    initializeSearch();
    initializeSiteTitle();
    loadBook(currentBook, currentChapter);
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
                bookNameSpan.innerHTML = `${book.name}<span class="tamil-name">${book.tamilName}</span>`;
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
    
    currentBook = bookIndex;
    currentChapter = chapter;
    
    // Save to localStorage
    localStorage.setItem('currentBook', bookIndex);
    localStorage.setItem('currentChapter', chapter);
    
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
    
    let html = '';
    for (let i = 1; i <= book.chapters; i++) {
        const activeClass = i === currentChapter ? 'active' : '';
        html += `<div class="number-item ${activeClass}" data-chapter="${i}">${i}</div>`;
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    const chapterKey = `chapter_${currentChapter}`;
    const chapterData = currentData[chapterKey];
    
    if (!chapterData) {
        versesColumn.innerHTML = '';
        return;
    }
    
    const verseCount = Object.keys(chapterData).length;
    let html = '';
    
    for (let i = 1; i <= verseCount; i++) {
        html += `<div class="number-item" data-verse="${i}">${i}</div>`;
    }
    
    versesColumn.innerHTML = html;
    
    // Add click handlers for scrolling to verse
    versesColumn.querySelectorAll('.number-item').forEach(item => {
        item.addEventListener('click', () => {
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
            
            html += `<p class="verse-line" data-verse="${verseNum}">
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
            
            html += `<p class="verse-line" data-verse="${verseNum}"><sup class="v-num">${verseNum}</sup>${verseText}</p>`;
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
        });
    });
    
    // Update navigation text
    const currentChapterText = document.querySelector('.current-chapter');
    if (currentChapterText) {
        const book = bibleBooks[currentBook];
        let bookName;
        
        if (currentLanguage === 'tamil') {
            bookName = book.tamilName;
        } else if (currentLanguage === 'both') {
            // On mobile, show only English name for space
            if (window.innerWidth <= 768) {
                bookName = book.name;
            } else {
                bookName = `${book.name} / ${book.tamilName}`;
            }
        } else {
            bookName = book.name;
        }
        
        currentChapterText.textContent = `${bookName} ${currentChapter}`;
    }
    
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
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

// Dark theme toggle
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const drawerThemeToggle = document.querySelector('.drawer-theme-toggle');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
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
        
        // Add active class to search button
        searchBtn.classList.add('active');
        
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
        searchInput.focus();
    }
    
    function closeSearch() {
        isSearchActive = false;
        
        const booksSidebar = document.querySelector('.books-sidebar');
        const chaptersColumn = document.querySelector('.chapters-column');
        const versesColumn = document.querySelector('.verses-column');
        const bottomNav = document.querySelector('.bottom-nav');
        
        // Remove active class from search button
        searchBtn.classList.remove('active');
        
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

// Site title click to navigate to John 1:1
function initializeSiteTitle() {
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.addEventListener('click', () => {
            // Find John's index in bibleBooks array
            const johnIndex = bibleBooks.findIndex(book => book.name === 'John');
            if (johnIndex !== -1) {
                loadBook(johnIndex, 1);
            }
        });
    }
}
