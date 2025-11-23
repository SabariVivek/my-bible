// Script to export Bible data from Supabase to JS files
// Run this with Node.js after installing @supabase/supabase-js

const fs = require('fs');
const path = require('path');

// You'll need to install: npm install @supabase/supabase-js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const books = [
    // Old Testament
    { file: 'genesis', name: 'Genesis' },
    { file: 'exodus', name: 'Exodus' },
    { file: 'leviticus', name: 'Leviticus' },
    { file: 'numbers', name: 'Numbers' },
    { file: 'deuteronomy', name: 'Deuteronomy' },
    { file: 'joshua', name: 'Joshua' },
    { file: 'judges', name: 'Judges' },
    { file: 'ruth', name: 'Ruth' },
    { file: 'i_samuel', name: 'I Samuel' },
    { file: 'ii_samuel', name: 'II Samuel' },
    { file: 'i_kings', name: 'I Kings' },
    { file: 'ii_kings', name: 'II Kings' },
    { file: 'i_chronicles', name: 'I Chronicles' },
    { file: 'ii_chronicles', name: 'II Chronicles' },
    { file: 'ezra', name: 'Ezra' },
    { file: 'nehemiah', name: 'Nehemiah' },
    { file: 'esther', name: 'Esther' },
    { file: 'job', name: 'Job' },
    { file: 'psalms', name: 'Psalms' },
    { file: 'proverbs', name: 'Proverbs' },
    { file: 'ecclesiastes', name: 'Ecclesiastes' },
    { file: 'song_of_solomon', name: 'Song of Solomon' },
    { file: 'isaiah', name: 'Isaiah' },
    { file: 'jeremiah', name: 'Jeremiah' },
    { file: 'lamentations', name: 'Lamentations' },
    { file: 'ezekiel', name: 'Ezekiel' },
    { file: 'daniel', name: 'Daniel' },
    { file: 'hosea', name: 'Hosea' },
    { file: 'joel', name: 'Joel' },
    { file: 'amos', name: 'Amos' },
    { file: 'obadiah', name: 'Obadiah' },
    { file: 'jonah', name: 'Jonah' },
    { file: 'micah', name: 'Micah' },
    { file: 'nahum', name: 'Nahum' },
    { file: 'habakkuk', name: 'Habakkuk' },
    { file: 'zephaniah', name: 'Zephaniah' },
    { file: 'haggai', name: 'Haggai' },
    { file: 'zechariah', name: 'Zechariah' },
    { file: 'malachi', name: 'Malachi' },
    // New Testament
    { file: 'matthew', name: 'Matthew' },
    { file: 'mark', name: 'Mark' },
    { file: 'luke', name: 'Luke' },
    { file: 'john', name: 'John' },
    { file: 'acts', name: 'Acts' },
    { file: 'romans', name: 'Romans' },
    { file: 'i_corinthians', name: 'I Corinthians' },
    { file: 'ii_corinthians', name: 'II Corinthians' },
    { file: 'galatians', name: 'Galatians' },
    { file: 'ephesians', name: 'Ephesians' },
    { file: 'philippians', name: 'Philippians' },
    { file: 'colossians', name: 'Colossians' },
    { file: 'i_thessalonians', name: 'I Thessalonians' },
    { file: 'ii_thessalonians', name: 'II Thessalonians' },
    { file: 'i_timothy', name: 'I Timothy' },
    { file: 'ii_timothy', name: 'II Timothy' },
    { file: 'titus', name: 'Titus' },
    { file: 'philemon', name: 'Philemon' },
    { file: 'hebrews', name: 'Hebrews' },
    { file: 'james', name: 'James' },
    { file: 'i_peter', name: 'I Peter' },
    { file: 'ii_peter', name: 'II Peter' },
    { file: 'i_john', name: 'I John' },
    { file: 'ii_john', name: 'II John' },
    { file: 'iii_john', name: 'III John' },
    { file: 'jude', name: 'Jude' },
    { file: 'revelation', name: 'Revelation' }
];

async function exportBook(bookFile, language) {
    console.log(`Exporting ${bookFile} (${language})...`);
    
    const { data, error } = await supabase
        .from('bible_verses')
        .select('chapter, verse, text')
        .eq('book_file', bookFile)
        .eq('language', language)
        .order('chapter', { ascending: true })
        .order('verse', { ascending: true });

    if (error) {
        console.error(`Error fetching ${bookFile}:`, error);
        return;
    }

    // Organize data by chapter
    const bookData = {};
    data.forEach(row => {
        if (!bookData[row.chapter]) {
            bookData[row.chapter] = {};
        }
        bookData[row.chapter][`verse_${row.verse}`] = row.text;
    });

    // Generate JS file content
    const jsContent = `// ${bookFile} - ${language} Bible Data
// Auto-generated - Do not edit manually
window.bibleData_${bookFile}_${language} = ${JSON.stringify(bookData, null, 2)};
`;

    // Write to file
    const dir = path.join(__dirname, '..', 'data', 'bible', language);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    const filePath = path.join(dir, `${bookFile}.js`);
    fs.writeFileSync(filePath, jsContent, 'utf8');
    
    console.log(`✅ Exported ${bookFile} (${language})`);
}

async function exportAll() {
    for (const book of books) {
        await exportBook(book.file, 'tamil');
        await exportBook(book.file, 'english');
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    console.log('✅ All books exported!');
}

// Run if called directly
if (require.main === module) {
    exportAll().catch(console.error);
}

module.exports = { exportBook, exportAll };
