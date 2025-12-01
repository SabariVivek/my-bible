// Supabase Configuration for Sermon Management
// Using shared credentials from main Bible app
const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sermon API Functions

/**
 * Create a new sermon
 * @param {number} userId - User ID
 * @param {string} title - Sermon title (English)
 * @param {string} tamilTitle - Tamil title (optional)
 * @param {string} sermonDate - Sermon date (ISO string or Date object)
 * @param {Array} verses - Array of verse objects {book, chapter, verse, display}
 * @returns {Promise<Object>} Created sermon record
 */
async function createSermon(userId, title, tamilTitle, sermonDate, verses) {
    const dateStr = sermonDate instanceof Date 
        ? sermonDate.toISOString().split('T')[0]
        : sermonDate.split('T')[0];
    
    const { data, error } = await supabase
        .from('sermons')
        .insert([{
            user_id: userId,
            title,
            tamil_title: tamilTitle || null,
            sermon_date: dateStr,
            verses: verses || [],
            created_at: new Date().toISOString()
        }])
        .select()
        .single();
    
    if (error) {
        console.error('Error creating sermon:', error);
        throw error;
    }
    return data;
}

/**
 * Get all sermons for a user
 * @param {number} userId - User ID
 * @returns {Promise<Array>} Array of sermon records
 */
async function getUserSermons(userId) {
    const { data, error } = await supabase
        .from('sermons')
        .select('*')
        .eq('user_id', userId)
        .order('sermon_date', { ascending: false });
    
    if (error) {
        console.error('Error fetching sermons:', error);
        throw error;
    }
    return data;
}

/**
 * Get a single sermon by ID
 * @param {number} sermonId - Sermon ID
 * @returns {Promise<Object>} Sermon record
 */
async function getSermon(sermonId) {
    const { data, error } = await supabase
        .from('sermons')
        .select('*')
        .eq('id', sermonId)
        .single();
    
    if (error) {
        console.error('Error fetching sermon:', error);
        throw error;
    }
    return data;
}

/**
 * Update a sermon
 * @param {number} sermonId - Sermon ID
 * @param {Object} updates - Object with fields to update
 * @returns {Promise<Object>} Updated sermon record
 */
async function updateSermon(sermonId, updates) {
    // Convert sermon date if provided
    if (updates.sermon_date) {
        updates.sermon_date = updates.sermon_date instanceof Date 
            ? updates.sermon_date.toISOString().split('T')[0]
            : updates.sermon_date.split('T')[0];
    }
    
    const { data, error } = await supabase
        .from('sermons')
        .update(updates)
        .eq('id', sermonId)
        .select()
        .single();
    
    if (error) {
        console.error('Error updating sermon:', error);
        throw error;
    }
    return data;
}

/**
 * Delete a sermon
 * @param {number} sermonId - Sermon ID
 * @returns {Promise<void>}
 */
async function deleteSermon(sermonId) {
    const { error } = await supabase
        .from('sermons')
        .delete()
        .eq('id', sermonId);
    
    if (error) {
        console.error('Error deleting sermon:', error);
        throw error;
    }
}

/**
 * Sync local sermons to Supabase
 * @param {number} userId - User ID
 * @param {Array} localSermons - Array of local sermon objects
 * @returns {Promise<Object>} Sync result
 */
async function syncSermonsToSupabase(userId, localSermons) {
    try {
        const results = {
            created: 0,
            updated: 0,
            errors: []
        };
        
        for (const sermon of localSermons) {
            try {
                if (sermon.id && typeof sermon.id === 'number' && sermon.id > 1700000000000) {
                    // Local ID (timestamp), create new record
                    await createSermon(
                        userId,
                        sermon.title,
                        sermon.tamilTitle,
                        sermon.date,
                        sermon.verses
                    );
                    results.created++;
                } else if (sermon.id) {
                    // Has ID, try to update
                    await updateSermon(sermon.id, {
                        title: sermon.title,
                        tamil_title: sermon.tamilTitle,
                        sermon_date: sermon.date,
                        verses: sermon.verses
                    });
                    results.updated++;
                }
            } catch (error) {
                results.errors.push({
                    sermon: sermon.title,
                    error: error.message
                });
            }
        }
        
        return {
            success: true,
            ...results
        };
    } catch (error) {
        console.error('Error syncing sermons:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Load sermons from Supabase to local storage
 * @param {number} userId - User ID
 * @returns {Promise<Array>} Array of sermons
 */
async function loadSermonsFromSupabase(userId) {
    try {
        const sermons = await getUserSermons(userId);
        // Convert Supabase format to local format
        return sermons.map(s => ({
            id: s.id,
            title: s.title,
            tamilTitle: s.tamil_title || '',
            date: s.sermon_date,
            verses: s.verses || [],
            content: s.content || ''
        }));
    } catch (error) {
        console.error('Error loading sermons from Supabase:', error);
        return [];
    }
}

// Export functions
window.SermonDB = {
    createSermon,
    getUserSermons,
    getSermon,
    updateSermon,
    deleteSermon,
    syncSermonsToSupabase,
    loadSermonsFromSupabase
};
