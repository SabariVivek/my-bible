const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzU0MzYzOSwiZXhwIjoyMDc5MTE5NjM5fQ.WGtQxBTBcJh96Y4ppTiHGQygztdJduf5O4-JNTZBP90';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Book mapping with proper display names
const bookMapping = {
  'genesis': { file: 'genesis', name: 'Genesis', testament: 'old' },
  'exodus': { file: 'exodus', name: 'Exodus', testament: 'old' },
  'leviticus': { file: 'leviticus', name: 'Leviticus', testament: 'old' },
  'numbers': { file: 'numbers', name: 'Numbers', testament: 'old' },
  'deuteronomy': { file: 'deuteronomy', name: 'Deuteronomy', testament: 'old' },
  'joshua': { file: 'joshua', name: 'Joshua', testament: 'old' },
  'judges': { file: 'judges', name: 'Judges', testament: 'old' },
  'ruth': { file: 'ruth', name: 'Ruth', testament: 'old' },
  'i_samuel': { file: 'i_samuel', name: '1 Samuel', testament: 'old' },
  'ii_samuel': { file: 'ii_samuel', name: '2 Samuel', testament: 'old' },
  'i_kings': { file: 'i_kings', name: '1 Kings', testament: 'old' },
  'ii_kings': { file: 'ii_kings', name: '2 Kings', testament: 'old' },
  'i_chronicles': { file: 'i_chronicles', name: '1 Chronicles', testament: 'old' },
  'ii_chronicles': { file: 'ii_chronicles', name: '2 Chronicles', testament: 'old' },
  'ezra': { file: 'ezra', name: 'Ezra', testament: 'old' },
  'nehemiah': { file: 'nehemiah', name: 'Nehemiah', testament: 'old' },
  'esther': { file: 'esther', name: 'Esther', testament: 'old' },
  'job': { file: 'job', name: 'Job', testament: 'old' },
  'psalms': { file: 'psalms', name: 'Psalms', testament: 'old' },
  'proverbs': { file: 'proverbs', name: 'Proverbs', testament: 'old' },
  'ecclesiastes': { file: 'ecclesiastes', name: 'Ecclesiastes', testament: 'old' },
  'song_of_solomon': { file: 'song_of_solomon', name: 'Song of Solomon', testament: 'old' },
  'isaiah': { file: 'isaiah', name: 'Isaiah', testament: 'old' },
  'jeremiah': { file: 'jeremiah', name: 'Jeremiah', testament: 'old' },
  'lamentations': { file: 'lamentations', name: 'Lamentations', testament: 'old' },
  'ezekiel': { file: 'ezekiel', name: 'Ezekiel', testament: 'old' },
  'daniel': { file: 'daniel', name: 'Daniel', testament: 'old' },
  'hosea': { file: 'hosea', name: 'Hosea', testament: 'old' },
  'joel': { file: 'joel', name: 'Joel', testament: 'old' },
  'amos': { file: 'amos', name: 'Amos', testament: 'old' },
  'obadiah': { file: 'obadiah', name: 'Obadiah', testament: 'old' },
  'jonah': { file: 'jonah', name: 'Jonah', testament: 'old' },
  'micah': { file: 'micah', name: 'Micah', testament: 'old' },
  'nahum': { file: 'nahum', name: 'Nahum', testament: 'old' },
  'habakkuk': { file: 'habakkuk', name: 'Habakkuk', testament: 'old' },
  'zephaniah': { file: 'zephaniah', name: 'Zephaniah', testament: 'old' },
  'haggai': { file: 'haggai', name: 'Haggai', testament: 'old' },
  'zechariah': { file: 'zechariah', name: 'Zechariah', testament: 'old' },
  'malachi': { file: 'malachi', name: 'Malachi', testament: 'old' },
  'matthew': { file: 'matthew', name: 'Matthew', testament: 'new' },
  'mark': { file: 'mark', name: 'Mark', testament: 'new' },
  'luke': { file: 'luke', name: 'Luke', testament: 'new' },
  'john': { file: 'john', name: 'John', testament: 'new' },
  'acts': { file: 'acts', name: 'Acts', testament: 'new' },
  'romans': { file: 'romans', name: 'Romans', testament: 'new' },
  'i_corinthians': { file: 'i_corinthians', name: '1 Corinthians', testament: 'new' },
  'ii_corinthians': { file: 'ii_corinthians', name: '2 Corinthians', testament: 'new' },
  'galatians': { file: 'galatians', name: 'Galatians', testament: 'new' },
  'ephesians': { file: 'ephesians', name: 'Ephesians', testament: 'new' },
  'philippians': { file: 'philippians', name: 'Philippians', testament: 'new' },
  'colossians': { file: 'colossians', name: 'Colossians', testament: 'new' },
  'i_thessalonians': { file: 'i_thessalonians', name: '1 Thessalonians', testament: 'new' },
  'ii_thessalonians': { file: 'ii_thessalonians', name: '2 Thessalonians', testament: 'new' },
  'i_timothy': { file: 'i_timothy', name: '1 Timothy', testament: 'new' },
  'ii_timothy': { file: 'ii_timothy', name: '2 Timothy', testament: 'new' },
  'titus': { file: 'titus', name: 'Titus', testament: 'new' },
  'philemon': { file: 'philemon', name: 'Philemon', testament: 'new' },
  'hebrews': { file: 'hebrews', name: 'Hebrews', testament: 'new' },
  'james': { file: 'james', name: 'James', testament: 'new' },
  'i_peter': { file: 'i_peter', name: '1 Peter', testament: 'new' },
  'ii_peter': { file: 'ii_peter', name: '2 Peter', testament: 'new' },
  'i_john': { file: 'i_john', name: '1 John', testament: 'new' },
  'ii_john': { file: 'ii_john', name: '2 John', testament: 'new' },
  'iii_john': { file: 'iii_john', name: '3 John', testament: 'new' },
  'jude': { file: 'jude', name: 'Jude', testament: 'new' },
  'revelation': { file: 'revelation', name: 'Revelation', testament: 'new' }
};

const biblicalOrder = [
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
  'joshua', 'judges', 'ruth', 'i_samuel', 'ii_samuel',
  'i_kings', 'ii_kings', 'i_chronicles', 'ii_chronicles',
  'ezra', 'nehemiah', 'esther', 'job', 'psalms', 'proverbs',
  'ecclesiastes', 'song_of_solomon', 'isaiah', 'jeremiah', 'lamentations', 'ezekiel',
  'daniel', 'hosea', 'joel', 'amos', 'obadiah',
  'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah',
  'haggai', 'zechariah', 'malachi',
  'matthew', 'mark', 'luke', 'john', 'acts',
  'romans', 'i_corinthians', 'ii_corinthians', 'galatians', 'ephesians',
  'philippians', 'colossians', 'i_thessalonians', 'ii_thessalonians',
  'i_timothy', 'ii_timothy', 'titus', 'philemon', 'hebrews',
  'james', 'i_peter', 'ii_peter', 'i_john', 'ii_john',
  'iii_john', 'jude', 'revelation'
];

async function uploadBook(bookName) {
  try {
    const bookInfo = bookMapping[bookName];
    if (!bookInfo) {
      console.log(`❌ No mapping for ${bookName}`);
      return 0;
    }

    const testamentPath = bookInfo.testament === 'old' ? 'old-testament' : 'new-testament';
    
    // Convert underscore format to hyphen format for file lookup
    let fileName = bookName;
    if (bookName === 'i_samuel') {
      fileName = '1-samuel';
    } else if (bookName === 'ii_samuel') {
      fileName = '2-samuel';
    } else if (bookName === 'i_kings') {
      fileName = '1-kings';
    } else if (bookName === 'ii_kings') {
      fileName = '2-kings';
    } else if (bookName === 'i_chronicles') {
      fileName = '1-chronicles';
    } else if (bookName === 'ii_chronicles') {
      fileName = '2-chronicles';
    } else if (bookName === 'i_corinthians') {
      fileName = '1-corinthians';
    } else if (bookName === 'ii_corinthians') {
      fileName = '2-corinthians';
    } else if (bookName === 'i_thessalonians') {
      fileName = '1-thessalonians';
    } else if (bookName === 'ii_thessalonians') {
      fileName = '2-thessalonians';
    } else if (bookName === 'i_timothy') {
      fileName = '1-timothy';
    } else if (bookName === 'ii_timothy') {
      fileName = '2-timothy';
    } else if (bookName === 'i_peter') {
      fileName = '1-peter';
    } else if (bookName === 'ii_peter') {
      fileName = '2-peter';
    } else if (bookName === 'i_john') {
      fileName = '1-john';
    } else if (bookName === 'ii_john') {
      fileName = '2-john';
    } else if (bookName === 'iii_john') {
      fileName = '3-john';
    } else if (bookName === 'psalms') {
      fileName = 'psalm';
    } else if (bookName === 'song_of_solomon') {
      fileName = 'song-of-songs';
    }
    
    const filePath = path.join(__dirname, 'data', 'bible', 'english', testamentPath, `${fileName}.js`);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return 0;
    }

    // Clear require cache
    const resolvedPath = require.resolve(filePath);
    if (require.cache[resolvedPath]) {
      delete require.cache[resolvedPath];
    }

    const bookData = require(filePath);
    let totalVerses = 0;
    let batch = [];
    const BATCH_SIZE = 500;

    // Process verses - English format: { "1": [{verse: "1", text: "..."}, ...], "2": [...], ... }
    for (const [chapter, versesArray] of Object.entries(bookData)) {
      if (!Array.isArray(versesArray)) continue;
      
      for (const verseObj of versesArray) {
        if (!verseObj.verse || !verseObj.text) continue;

        const record = {
          book: bookInfo.name,
          book_file: bookInfo.file,
          chapter: parseInt(chapter),
          verse: parseInt(verseObj.verse),
          text: verseObj.text,
          language: 'english',
          testament: bookInfo.testament
        };

        batch.push(record);

        // Insert when batch reaches size
        if (batch.length >= BATCH_SIZE) {
          const { error } = await supabase.from('bible_verses').insert(batch);
          
          if (error) {
            console.log(`❌ Batch insert error for ${bookInfo.name}: ${error.message}`);
            return totalVerses;
          }
          
          totalVerses += batch.length;
          batch = [];
        }
      }
    }

    // Insert remaining verses
    if (batch.length > 0) {
      const { error } = await supabase.from('bible_verses').insert(batch);
      
      if (error) {
        console.log(`❌ Final batch error for ${bookInfo.name}: ${error.message}`);
        return totalVerses;
      }
      
      totalVerses += batch.length;
    }

    console.log(`✅ ${bookInfo.name}: ${totalVerses} verses`);
    return totalVerses;
  } catch (error) {
    console.log(`❌ Error with ${bookName}: ${error.message}`);
    return 0;
  }
}

async function main() {
  console.log('🚀 Starting English Bible Upload (NEW VERSES)\n');
  console.log('⚠️  First deleting old English verses...');

  // Delete only English verses, preserving Tamil
  const { error: deleteError } = await supabase
    .from('bible_verses')
    .delete()
    .eq('language', 'english');
  
  if (deleteError) {
    console.log('❌ Error deleting old English verses:', deleteError.message);
    return;
  }
  
  console.log('✅ Old English verses deleted\n');
  console.log('📤 Uploading new English verses...\n');

  let totalVerses = 0;
  let successCount = 0;

  for (let i = 0; i < biblicalOrder.length; i++) {
    const bookName = biblicalOrder[i];
    process.stdout.write(`[${i + 1}/${biblicalOrder.length}] Processing ${bookName}... `);
    
    const inserted = await uploadBook(bookName);
    if (inserted > 0) {
      successCount++;
      totalVerses += inserted;
    }
  }

  console.log('\n========================================');
  console.log(`✅ Upload Complete!`);
  console.log(`   Books: ${successCount}/66`);
  console.log(`   Verses: ${totalVerses}`);
  console.log('========================================\n');
  console.log('✅ Tamil data preserved in database!');
}

main().catch(console.error);
