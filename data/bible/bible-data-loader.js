// Auto-loader for Bible data JS files
// This script dynamically loads all Bible book data files

(function() {
    const bookFiles = [
        // Old Testament
        'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy', 'joshua', 'judges', 'ruth',
        'i_samuel', 'ii_samuel', 'i_kings', 'ii_kings', 'i_chronicles', 'ii_chronicles',
        'ezra', 'nehemiah', 'esther', 'job', 'psalms', 'proverbs', 'ecclesiastes', 'song_of_solomon',
        'isaiah', 'jeremiah', 'lamentations', 'ezekiel', 'daniel', 'hosea', 'joel', 'amos',
        'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi',
        // New Testament
        'matthew', 'mark', 'luke', 'john', 'acts', 'romans', 'i_corinthians', 'ii_corinthians',
        'galatians', 'ephesians', 'philippians', 'colossians', 'i_thessalonians', 'ii_thessalonians',
        'i_timothy', 'ii_timothy', 'titus', 'philemon', 'hebrews', 'james', 'i_peter', 'ii_peter',
        'i_john', 'ii_john', 'iii_john', 'jude', 'revelation'
    ];

    const languages = ['tamil', 'english'];

    // Load all Bible data files
    function loadBibleDataFiles() {
        const fragment = document.createDocumentFragment();
        
        languages.forEach(language => {
            bookFiles.forEach(book => {
            const script = document.createElement('script');
            script.src = `data/bible/${language}/${book}.js`;
            script.async = false; // Load in order
            script.onerror = () => {
                console.log(`📁 Bible data not found: ${book} (${language})`);
            };
            fragment.appendChild(script);
        });
    });
    
        document.head.appendChild(fragment);
        console.log('📚 Loading bundled Bible data files...');
    }

    // Load immediately
    loadBibleDataFiles();
})();
