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
async function markChapterAsRead(userId, bookName, chapterNumber) {
    const { data, error } = await supabase
        .from('reading_progress')
        .upsert([{
            user_id: userId,
            book_name: bookName,
            chapter_number: chapterNumber,
            status: 'read',
            marked_at: new Date().toISOString()
        }], {
            onConflict: 'user_id,book_name,chapter_number'
        })
        .select();
    if (error) throw error;
    return data;
}

// Batch mark multiple chapters as read (more efficient)
async function markChaptersAsReadBatch(userId, chapters) {
    const records = chapters.map(ch => ({
        user_id: userId,
        book_name: ch.book,
        chapter_number: ch.chapter,
        status: 'read',
        marked_at: new Date().toISOString()
    }));
    
    const { data, error } = await supabase
        .from('reading_progress')
        .upsert(records, {
            onConflict: 'user_id,book_name,chapter_number'
        })
        .select();
    if (error) throw error;
    return data;
}
async function getUserProgress(userId) {
    // Fetch all records using pagination (Supabase default limit is 1000)
    let allData = [];
    let from = 0;
    const pageSize = 1000;
    let hasMore = true;
    
    while (hasMore) {
        const { data, error } = await supabase
            .from('reading_progress')
            .select('*')
            .eq('user_id', userId)
            .eq('status', 'read')
            .range(from, from + pageSize - 1)
            .order('id', { ascending: true });
        
        if (error) throw error;
        
        if (data && data.length > 0) {
            allData = allData.concat(data);
            from += pageSize;
            hasMore = data.length === pageSize; // Continue if we got a full page
        } else {
            hasMore = false;
        }
    }
    
    return allData;
}
async function clearChapterProgress(userId, bookName, chapterNumber) {
    const { error } = await supabase
        .from('reading_progress')
        .delete()
        .eq('user_id', userId)
        .eq('book_name', bookName)
        .eq('chapter_number', chapterNumber);
    if (error) throw error;
}
// Daily Portions
async function markPortionAsCompleted(userId, date, portionIndex) {
    const dateStr = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const { data, error } = await supabase
        .from('daily_portions')
        .upsert([{
            user_id: userId,
            reading_date: dateStr,
            portion_index: portionIndex,
            completed: true,
            completed_at: new Date().toISOString()
        }], {
            onConflict: 'user_id,reading_date,portion_index'
        })
        .select()
        .single();
    if (error) throw error;
    return data;
}

async function unmarkPortionAsCompleted(userId, date, portionIndex) {
    const dateStr = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const { error } = await supabase
        .from('daily_portions')
        .delete()
        .eq('user_id', userId)
        .eq('reading_date', dateStr)
        .eq('portion_index', portionIndex);
    if (error) throw error;
}

async function getCompletedPortions(userId, date) {
    const dateStr = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const { data, error } = await supabase
        .from('daily_portions')
        .select('portion_index')
        .eq('user_id', userId)
        .eq('reading_date', dateStr)
        .eq('completed', true);
    if (error) throw error;
    return data.map(d => d.portion_index);
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
        .select();
    if (error) throw error;
    return data;
}

// Batch mark multiple dates as completed (more efficient)
async function markDatesAsCompletedBatch(userId, dates) {
    const records = dates.map(date => ({
        user_id: userId,
        completed_date: date instanceof Date ? date.toISOString().split('T')[0] : date
    }));
    
    const { data, error } = await supabase
        .from('completed_dates')
        .upsert(records, {
            onConflict: 'user_id,completed_date'
        })
        .select();
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
                    // Parse the key (e.g., "GENESIS-1")
                    const parts = key.split('-');
                    const bookName = parts[0];
                    const chapterNumber = parseInt(parts[1]);
                    await markChapterAsRead(newUser.id, bookName, chapterNumber);
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
    markChaptersAsReadBatch,
    getUserProgress,
    clearChapterProgress,
    // Daily Portions
    markPortionAsCompleted,
    unmarkPortionAsCompleted,
    getCompletedPortions,
    // Completed Dates
    markDateAsCompleted,
    markDatesAsCompletedBatch,
    getCompletedDates,
    // Summary
    getUserProgressSummary,
    getAllUsersProgressSummary,
    // Sync
    syncLocalDataToSupabase
};
