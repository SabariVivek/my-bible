// Supabase Configuration for Bible Reading Tracker
// Using shared credentials from main Bible app

const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database API Functions

// Users
async function createUser(name) {
    const { data, error } = await supabase
        .from('users')
        .insert([{ name, joined_date: new Date().toISOString() }])
        .select()
        .single();
    
    if (error) throw error;
    return data;
}

async function getAllUsers() {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('joined_date', { ascending: true });
    
    if (error) throw error;
    return data;
}

async function getUserById(userId) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
    
    if (error) throw error;
    return data;
}

async function deleteUser(userId) {
    const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);
    
    if (error) throw error;
}

// Reading Progress
async function markChapterAsRead(userId, bookName, chapterNumber, readingCycle = null) {
    const { data, error } = await supabase
        .from('reading_progress')
        .upsert([{
            user_id: userId,
            book_name: bookName,
            chapter_number: chapterNumber,
            reading_cycle: readingCycle,
            status: 'read',
            marked_at: new Date().toISOString()
        }], {
            onConflict: 'user_id,book_name,chapter_number,reading_cycle'
        })
        .select()
        .single();
    
    if (error) throw error;
    return data;
}

async function getUserProgress(userId) {
    // Fetch all records - no limit (default Supabase limit is 1000, we need up to 1449)
    const { data, error } = await supabase
        .from('reading_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'read')
        .limit(2000);  // Set explicit high limit to ensure all chapters are fetched
    
    if (error) throw error;
    return data;
}

async function clearChapterProgress(userId, bookName, chapterNumber, readingCycle = null) {
    let query = supabase
        .from('reading_progress')
        .delete()
        .eq('user_id', userId)
        .eq('book_name', bookName)
        .eq('chapter_number', chapterNumber);
    
    if (readingCycle) {
        query = query.eq('reading_cycle', readingCycle);
    } else {
        query = query.is('reading_cycle', null);
    }
    
    const { error } = await query;
    if (error) throw error;
}

// Completed Dates
async function markDateAsCompleted(userId, date) {
    const dateStr = date instanceof Date ? date.toISOString().split('T')[0] : date;
    
    const { data, error } = await supabase
        .from('completed_dates')
        .upsert([{
            user_id: userId,
            completed_date: dateStr
        }], {
            onConflict: 'user_id,completed_date'
        })
        .select()
        .single();
    
    if (error) throw error;
    return data;
}

async function getCompletedDates(userId) {
    const { data, error } = await supabase
        .from('completed_dates')
        .select('completed_date')
        .eq('user_id', userId)
        .order('completed_date', { ascending: false })
        .limit(366);  // Max 366 days in a year (including leap year)
    
    if (error) throw error;
    return data.map(d => d.completed_date);
}

// User Progress Summary
async function getUserProgressSummary(userId) {
    const { data, error } = await supabase
        .from('user_progress_summary')
        .select('*')
        .eq('id', userId)
        .single();
    
    if (error) throw error;
    return data;
}

async function getAllUsersProgressSummary() {
    const { data, error } = await supabase
        .from('user_progress_summary')
        .select('*')
        .order('chapters_read', { ascending: false });
    
    if (error) throw error;
    return data;
}

// Sync local data to Supabase
async function syncLocalDataToSupabase() {
    try {
        // Get local data
        const localData = JSON.parse(localStorage.getItem('bibleReadingData') || '{"users":[]}');
        
        if (!localData.users || localData.users.length === 0) {
            console.log('No local data to sync');
            return { success: true, message: 'No data to sync' };
        }
        
        const syncedUsers = [];
        
        for (const localUser of localData.users) {
            // Create user in Supabase
            const newUser = await createUser(localUser.name);
            
            // Sync progress
            const progressEntries = Object.entries(localUser.progress || {});
            for (const [key, status] of progressEntries) {
                if (status === 'read') {
                    // Parse the key (e.g., "GENESIS-1" or "MATTHEW-1-1st")
                    const parts = key.split('-');
                    const bookName = parts[0];
                    const chapterNumber = parseInt(parts[1]);
                    const readingCycle = parts[2] || null; // '1st' or '2nd' for NT
                    
                    await markChapterAsRead(newUser.id, bookName, chapterNumber, readingCycle);
                }
            }
            
            // Sync completed dates
            const completedDates = Object.keys(localUser.completedDates || {});
            for (const dateKey of completedDates) {
                // Parse date from format "YYYY-M-D"
                const [year, month, day] = dateKey.split('-');
                const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                await markDateAsCompleted(newUser.id, date);
            }
            
            syncedUsers.push(newUser);
        }
        
        return {
            success: true,
            message: `Synced ${syncedUsers.length} users`,
            users: syncedUsers
        };
    } catch (error) {
        console.error('Sync error:', error);
        return { success: false, error: error.message };
    }
}

// Export functions
window.BibleReadingDB = {
    // Users
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    
    // Progress
    markChapterAsRead,
    getUserProgress,
    clearChapterProgress,
    
    // Completed Dates
    markDateAsCompleted,
    getCompletedDates,
    
    // Summary
    getUserProgressSummary,
    getAllUsersProgressSummary,
    
    // Sync
    syncLocalDataToSupabase
};
