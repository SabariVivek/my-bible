const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzU0MzYzOSwiZXhwIjoyMDc5MTE5NjM5fQ.WGtQxBTBcJh96Y4ppTiHGQygztdJduf5O4-JNTZBP90';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const bookMapping = {
  'genesis': { file: 'genesis', testament: 'old', numeric: false },
  'exodus': { file: 'exodus', testament: 'old', numeric: false },
  'leviticus': { file: 'leviticus', testament: 'old', numeric: false },
  'numbers': { file: 'numbers', testament: 'old', numeric: false },
  'deuteronomy': { file: 'deuteronomy', testament: 'old', numeric: false },
  'joshua': { file: 'joshua', testament: 'old', numeric: false },
  'judges': { file: 'judges', testament: 'old', numeric: false },
  'ruth': { file: 'ruth', testament: 'old', numeric: false },
  'i_samuel': { file: '1-samuel', testament: 'old', numeric: true },
  'ii_samuel': { file: '2-samuel', testament: 'old', numeric: true },
  'i_kings': { file: '1-kings', testament: 'old', numeric: true },
  'ii_kings': { file: '2-kings', testament: 'old', numeric: true },
  'i_chronicles': { file: '1-chronicles', testament: 'old', numeric: true },
  'ii_chronicles': { file: '2-chronicles', testament: 'old', numeric: true },
  'ezra': { file: 'ezra', testament: 'old', numeric: false },
  'nehemiah': { file: 'nehemiah', testament: 'old', numeric: false },
  'esther': { file: 'esther', testament: 'old', numeric: false },
  'job': { file: 'job', testament: 'old', numeric: false },
  'psalms': { file: 'psalm', testament: 'old', numeric: false },
  'proverbs': { file: 'proverbs', testament: 'old', numeric: false },
  'ecclesiastes': { file: 'ecclesiastes', testament: 'old', numeric: false },
  'song_of_solomon': { file: 'song-of-songs', testament: 'old', numeric: false },
  'isaiah': { file: 'isaiah', testament: 'old', numeric: false },
  'jeremiah': { file: 'jeremiah', testament: 'old', numeric: false },
  'lamentations': { file: 'lamentations', testament: 'old', numeric: false },
  'ezekiel': { file: 'ezekiel', testament: 'old', numeric: false },
  'daniel': { file: 'daniel', testament: 'old', numeric: false },
  'hosea': { file: 'hosea', testament: 'old', numeric: false },
  'joel': { file: 'joel', testament: 'old', numeric: false },
  'amos': { file: 'amos', testament: 'old', numeric: false },
  'obadiah': { file: 'obadiah', testament: 'old', numeric: false },
  'jonah': { file: 'jonah', testament: 'old', numeric: false },
  'micah': { file: 'micah', testament: 'old', numeric: false },
  'nahum': { file: 'nahum', testament: 'old', numeric: false },
  'habakkuk': { file: 'habakkuk', testament: 'old', numeric: false },
  'zephaniah': { file: 'zephaniah', testament: 'old', numeric: false },
  'haggai': { file: 'haggai', testament: 'old', numeric: false },
  'zechariah': { file: 'zechariah', testament: 'old', numeric: false },
  'malachi': { file: 'malachi', testament: 'old', numeric: false },
  'matthew': { file: 'matthew', testament: 'new', numeric: false },
  'mark': { file: 'mark', testament: 'new', numeric: false },
  'luke': { file: 'luke', testament: 'new', numeric: false },
  'john': { file: 'john', testament: 'new', numeric: false },
  'acts': { file: 'acts', testament: 'new', numeric: false },
  'romans': { file: 'romans', testament: 'new', numeric: false },
  'i_corinthians': { file: '1-corinthians', testament: 'new', numeric: true },
  'ii_corinthians': { file: '2-corinthians', testament: 'new', numeric: true },
  'galatians': { file: 'galatians', testament: 'new', numeric: false },
  'ephesians': { file: 'ephesians', testament: 'new', numeric: false },
  'philippians': { file: 'philippians', testament: 'new', numeric: false },
  'colossians': { file: 'colossians', testament: 'new', numeric: false },
  'i_thessalonians': { file: '1-thessalonians', testament: 'new', numeric: true },
  'ii_thessalonians': { file: '2-thessalonians', testament: 'new', numeric: true },
  'i_timothy': { file: '1-timothy', testament: 'new', numeric: true },
  'ii_timothy': { file: '2-timothy', testament: 'new', numeric: true },
  'titus': { file: 'titus', testament: 'new', numeric: false },
  'philemon': { file: 'philemon', testament: 'new', numeric: false },
  'hebrews': { file: 'hebrews', testament: 'new', numeric: false },
  'james': { file: 'james', testament: 'new', numeric: false },
  'i_peter': { file: '1-peter', testament: 'new', numeric: true },
  'ii_peter': { file: '2-peter', testament: 'new', numeric: true },
  'i_john': { file: '1-john', testament: 'new', numeric: true },
  'ii_john': { file: '2-john', testament: 'new', numeric: true },
  'iii_john': { file: '3-john', testament: 'new', numeric: true },
  'jude': { file: 'jude', testament: 'new', numeric: false },
  'revelation': { file: 'revelation', testament: 'new', numeric: false }
};

async function downloadBook(bookFile, language) {
  try {
    // Get all verses for this book
    const { data, error } = await supabase
      .from('bible_verses')
      .select('chapter, verse, text')
      .eq('book_file', bookFile)
      .eq('language', language)
      .order('chapter', { ascending: true })
      .order('verse', { ascending: true });

    if (error) {
      console.log(`❌ Error fetching ${bookFile} (${language}): ${error.message}`);
      return null;
    }

    if (!data || data.length === 0) {
      console.log(`⚠️  No data found for ${bookFile} (${language})`);
      return null;
    }

    // Organize verses by chapter
    const bookData = {};
    for (const verse of data) {
      const chapter = verse.chapter.toString();
      if (!bookData[chapter]) {
        bookData[chapter] = [];
      }
      bookData[chapter].push({
        verse: verse.verse.toString(),
        text: verse.text
      });
    }

    console.log(`✅ Downloaded ${bookFile}: ${data.length} verses`);
    return bookData;
  } catch (error) {
    console.log(`❌ Error with ${bookFile}: ${error.message}`);
    return null;
  }
}

async function downloadLanguage(language) {
  const outputDir = path.join(__dirname, 'data', 'bible', language);
  
  // Create directories if they don't exist
  const oldTestamentDir = path.join(outputDir, 'old-testament');
  const newTestamentDir = path.join(outputDir, 'new-testament');
  
  if (!fs.existsSync(oldTestamentDir)) {
    fs.mkdirSync(oldTestamentDir, { recursive: true });
  }
  if (!fs.existsSync(newTestamentDir)) {
    fs.mkdirSync(newTestamentDir, { recursive: true });
  }

  console.log(`\n📥 Downloading ${language.toUpperCase()} Bible...\n`);

  let successCount = 0;
  let totalCount = 0;

  for (const [key, info] of Object.entries(bookMapping)) {
    totalCount++;
    const testamentDir = info.testament === 'old' ? oldTestamentDir : newTestamentDir;
    const filePath = path.join(testamentDir, `${info.file}.js`);

    process.stdout.write(`[${totalCount}/66] Downloading ${info.file}... `);

    const bookData = await downloadBook(key, language);
    
    if (bookData) {
      const jsContent = `module.exports = ${JSON.stringify(bookData, null, 2)};`;
      fs.writeFileSync(filePath, jsContent, 'utf8');
      successCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`✅ ${language.toUpperCase()} Download Complete!`);
  console.log(`   Books: ${successCount}/66`);
  console.log(`========================================\n`);

  return successCount === 66;
}

async function main() {
  console.log('🚀 Starting Bible Download from Supabase\n');
  
  const tamilSuccess = await downloadLanguage('tamil');
  const englishSuccess = await downloadLanguage('english');

  if (tamilSuccess && englishSuccess) {
    console.log('✅ All downloads completed successfully!');
    console.log('✅ /data/bible/tamil/ updated');
    console.log('✅ /data/bible/english/ updated');
  } else {
    console.log('⚠️  Some downloads may have failed. Check output above.');
  }
}

main().catch(console.error);
