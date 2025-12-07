// Supabase Configuration for Pinned Verses Management
const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck';

// Lazy-initialized Supabase client
let supabaseClient = null;

function getSupabaseClient() {
    if (!supabaseClient && window.supabase) {
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } catch (error) {
            console.error('Failed to initialize Supabase client:', error);
            return null;
        }
    }
    return supabaseClient;
}

// Pin a verse to Supabase
async function addPinnedVerseToSupabase(verse, bookIndex, chapter) {
    try {
        const client = getSupabaseClient();
        if (!client) return null;
        
        // Get book name from bibleBooks array
        const bookName = bibleBooks[bookIndex]?.name || 'Unknown';
        
        const { data, error } = await client
            .from('pinned_verses')
            .insert([{ 
                book_index: bookIndex,
                book_name: bookName,
                chapter: chapter,
                verse: verse
            }])
            .select()
            .single();
        
        if (error) throw error;
        console.log('Pinned verse synced to Supabase:', verse, bookIndex, chapter);
        return data;
    } catch (error) {
        console.warn('Failed to pin to Supabase:', error.message);
        return null;
    }
}

// Unpin a verse from Supabase
async function removePinnedVerseFromSupabase(verse, bookIndex, chapter) {
    try {
        const client = getSupabaseClient();
        if (!client) return false;
        
        const { error } = await client
            .from('pinned_verses')
            .delete()
            .eq('verse', verse)
            .eq('book_index', bookIndex)
            .eq('chapter', chapter);
        
        if (error) throw error;
        console.log('Unpinned verse from Supabase:', verse, bookIndex, chapter);
        return true;
    } catch (error) {
        console.warn('Failed to unpin from Supabase:', error.message);
        return false;
    }
}

// Get pinned verses from Supabase
async function getPinnedVersesFromSupabase() {
    try {
        const client = getSupabaseClient();
        if (!client) return [];

        const { data, error } = await client
            .from('pinned_verses')
            .select('verse, book_index, chapter')
            .order('pinned_at', { ascending: false });
        
        if (error) throw error;
        
        // Convert to our internal format
        return (data || []).map(v => ({
            verse: v.verse,
            book: v.book_index,
            chapter: v.chapter
        }));
    } catch (error) {
        console.warn('Failed to fetch pinned verses:', error.message);
        return [];
    }
}

// Load pinned verses from Supabase
async function loadPinnedVersesFromSupabase() {
    try {
        const verses = await getPinnedVersesFromSupabase();
        if (verses && verses.length > 0) {
            console.log('Loaded pinned verses from Supabase:', verses.length);
        }
        return verses;
    } catch (error) {
        console.warn('Failed to load pinned verses:', error.message);
        return [];
    }
}
