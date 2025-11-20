// Migrate Bible Characters to Supabase
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase configuration
const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzU0MzYzOSwiZXhwIjoyMDc5MTE5NjM5fQ.WGtQxBTBcJh96Y4ppTiHGQygztdJduf5O4-JNTZBP90';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Testament folders
const TESTAMENTS = ['old-testament', 'new-testament'];
const CHARACTERS_BASE_PATH = path.join(__dirname, 'resources', 'characters');

// Parse character JS file
function parseCharacterFile(filePath, bookFile, testament) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract the variable name (e.g., genesisCharacters, matthewCharacters)
        const varMatch = content.match(/window\.(\w+Characters)\s*=/);
        if (!varMatch) {
            console.log(`⚠️  No characters variable found in ${filePath}`);
            return [];
        }
        
        // Extract the object definition
        const objectMatch = content.match(/window\.\w+Characters\s*=\s*(\{[\s\S]+\});/);
        if (!objectMatch) {
            console.log(`⚠️  Could not parse characters object in ${filePath}`);
            return [];
        }
        
        // Evaluate the object safely
        const charactersObj = eval(`(${objectMatch[1]})`);
        
        // Convert to array format
        const characters = [];
        for (const [chapter, characterList] of Object.entries(charactersObj)) {
            if (Array.isArray(characterList)) {
                for (const char of characterList) {
                    characters.push({
                        book_file: bookFile,
                        chapter: parseInt(chapter),
                        name: char.name,
                        description: char.description,
                        testament: testament
                    });
                }
            }
        }
        
        return characters;
    } catch (error) {
        console.error(`❌ Error parsing ${filePath}:`, error.message);
        return [];
    }
}

// Get all character files in a testament folder
function getCharacterFiles(testament) {
    const testamentPath = path.join(CHARACTERS_BASE_PATH, testament);
    
    if (!fs.existsSync(testamentPath)) {
        console.log(`⚠️  Testament folder not found: ${testamentPath}`);
        return [];
    }
    
    const files = fs.readdirSync(testamentPath)
        .filter(file => file.endsWith('.js'))
        .map(file => ({
            fileName: file,
            bookFile: file.replace('.js', ''),
            fullPath: path.join(testamentPath, file)
        }));
    
    return files;
}

// Migrate characters for a book
async function migrateBook(bookFile, filePath, testament) {
    console.log(`📖 Processing ${testament}/${bookFile}...`);
    
    const characters = parseCharacterFile(filePath, bookFile, testament);
    
    if (characters.length === 0) {
        console.log(`   ℹ️  No characters found`);
        return { success: true, count: 0 };
    }
    
    try {
        // Insert in batches of 100
        const batchSize = 100;
        let totalInserted = 0;
        
        for (let i = 0; i < characters.length; i += batchSize) {
            const batch = characters.slice(i, i + batchSize);
            
            const { data, error } = await supabase
                .from('bible_characters')
                .insert(batch);
            
            if (error) {
                console.error(`   ❌ Error inserting batch:`, error.message);
                return { success: false, error: error.message };
            }
            
            totalInserted += batch.length;
        }
        
        console.log(`   ✅ Migrated ${totalInserted} characters`);
        return { success: true, count: totalInserted };
        
    } catch (error) {
        console.error(`   ❌ Migration error:`, error.message);
        return { success: false, error: error.message };
    }
}

// Main migration function
async function migrateAllCharacters() {
    console.log('🚀 Starting Bible Characters Migration to Supabase\n');
    console.log('=' .repeat(60));
    
    const stats = {
        totalBooks: 0,
        totalCharacters: 0,
        oldTestament: 0,
        newTestament: 0,
        errors: []
    };
    
    for (const testament of TESTAMENTS) {
        console.log(`\n📚 Processing ${testament}...\n`);
        
        const files = getCharacterFiles(testament);
        
        for (const { bookFile, fullPath } of files) {
            stats.totalBooks++;
            
            const result = await migrateBook(bookFile, fullPath, testament);
            
            if (result.success) {
                stats.totalCharacters += result.count;
                if (testament === 'old-testament') {
                    stats.oldTestament += result.count;
                } else {
                    stats.newTestament += result.count;
                }
            } else {
                stats.errors.push({ book: bookFile, error: result.error });
            }
        }
    }
    
    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary\n');
    console.log(`Total Books Processed: ${stats.totalBooks}`);
    console.log(`Total Characters Migrated: ${stats.totalCharacters}`);
    console.log(`  - Old Testament: ${stats.oldTestament}`);
    console.log(`  - New Testament: ${stats.newTestament}`);
    
    if (stats.errors.length > 0) {
        console.log(`\n⚠️  Errors encountered: ${stats.errors.length}`);
        stats.errors.forEach(({ book, error }) => {
            console.log(`   - ${book}: ${error}`);
        });
    } else {
        console.log('\n✅ Migration completed successfully!');
    }
    
    console.log('='.repeat(60));
}

// Run migration
migrateAllCharacters().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
});
