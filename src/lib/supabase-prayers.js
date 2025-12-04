// Supabase Configuration for Prayers Management
// Using shared credentials from main Bible app
const SUPABASE_URL = 'https://encjogfdbrfcatvytpir.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Prayer API Functions

/**
 * Create a new prayer
 * @param {string} prayerName - Prayer name
 * @param {string} category - Prayer category (Family, Others, World)
 * @param {string} description - Prayer description (optional)
 * @param {string} badge - Badge text (optional)
 * @param {Array} members - Family members array (optional, for Family category)
 * @returns {Promise<Object>} Created prayer record
 */
async function createPrayer(prayerName, category, description, badge, members) {
    const { data, error } = await supabase
        .from('prayers')
        .insert([{
            prayer_name: prayerName,
            category: category,
            description: description || null,
            badge: badge || null,
            members: members && members.length > 0 ? members : null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }])
        .select()
        .single();
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Get all prayers
 * @returns {Promise<Array>} Array of prayer records
 */
async function getAllPrayers() {
    const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Get prayers by category
 * @param {string} category - Prayer category (Family, Others, World)
 * @returns {Promise<Array>} Array of prayer records
 */
async function getPrayersByCategory(category) {
    const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Get a single prayer by ID
 * @param {number} prayerId - Prayer ID
 * @returns {Promise<Object>} Prayer record
 */
async function getPrayer(prayerId) {
    const { data, error } = await supabase
        .from('prayers')
        .select('*')
        .eq('id', prayerId)
        .single();
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Update a prayer
 * @param {number} prayerId - Prayer ID
 * @param {Object} updates - Object with fields to update
 * @returns {Promise<Object>} Updated prayer record
 */
async function updatePrayer(prayerId, updates) {
    const updateData = {
        ...updates,
        updated_at: new Date().toISOString()
    };
    
    const { data, error } = await supabase
        .from('prayers')
        .update(updateData)
        .eq('id', prayerId)
        .select()
        .single();
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Delete a prayer
 * @param {number} prayerId - Prayer ID
 * @returns {Promise<void>}
 */
async function deletePrayer(prayerId) {
    const { error } = await supabase
        .from('prayers')
        .delete()
        .eq('id', prayerId);
    
    if (error) {
        throw error;
    }
}

/**
 * Update members in a Family prayer
 * @param {number} prayerId - Prayer ID
 * @param {Array} members - Array of members with {name, badges[]}
 * @returns {Promise<Object>} Updated prayer record
 */
async function updatePrayerMembers(prayerId, members) {
    const { data, error } = await supabase
        .from('prayers')
        .update({
            members: members,
            updated_at: new Date().toISOString()
        })
        .eq('id', prayerId)
        .select()
        .single();
    
    if (error) {
        throw error;
    }
    return data;
}

/**
 * Add a member badge to a family prayer
 * @param {number} prayerId - Prayer ID
 * @param {number} memberIndex - Index of the member in the members array
 * @param {string} badge - Badge text
 * @returns {Promise<Object>} Updated prayer record
 */
async function addMemberBadge(prayerId, memberIndex, badge) {
    // First, get the current prayer
    const prayer = await getPrayer(prayerId);
    
    if (!prayer.members || !prayer.members[memberIndex]) {
        throw new Error('Invalid member index');
    }
    
    // Update the member's badges
    const updatedMembers = [...prayer.members];
    if (!updatedMembers[memberIndex].badges) {
        updatedMembers[memberIndex].badges = [];
    }
    if (!updatedMembers[memberIndex].badges.includes(badge)) {
        updatedMembers[memberIndex].badges.push(badge);
    }
    
    // Update the prayer
    return await updatePrayerMembers(prayerId, updatedMembers);
}

/**
 * Remove a member badge from a family prayer
 * @param {number} prayerId - Prayer ID
 * @param {number} memberIndex - Index of the member in the members array
 * @param {number} badgeIndex - Index of the badge to remove
 * @returns {Promise<Object>} Updated prayer record
 */
async function removeMemberBadge(prayerId, memberIndex, badgeIndex) {
    // First, get the current prayer
    const prayer = await getPrayer(prayerId);
    
    if (!prayer.members || !prayer.members[memberIndex]) {
        throw new Error('Invalid member index');
    }
    
    // Remove the badge
    const updatedMembers = [...prayer.members];
    if (updatedMembers[memberIndex].badges) {
        updatedMembers[memberIndex].badges.splice(badgeIndex, 1);
    }
    
    // Update the prayer
    return await updatePrayerMembers(prayerId, updatedMembers);
}

/**
 * Sync local prayers to Supabase
 * @param {Array} localPrayers - Array of local prayer objects
 * @returns {Promise<Object>} Sync result
 */
async function syncPrayersToSupabase(localPrayers) {
    try {
        const results = {
            created: 0,
            updated: 0,
            errors: []
        };
        
        for (const prayer of localPrayers) {
            try {
                // Convert local prayer format to database format
                const prayerData = {
                    prayer_name: prayer.name,
                    category: prayer.category,
                    description: prayer.description || null,
                    badge: prayer.badge || null,
                    members: prayer.members || null
                };
                
                if (prayer.id && typeof prayer.id === 'number' && prayer.id > 1700000000000) {
                    // Local ID (timestamp), create new record
                    await createPrayer(
                        prayerData.prayer_name,
                        prayerData.category,
                        prayerData.description,
                        prayerData.badge,
                        prayerData.members
                    );
                    results.created++;
                } else if (prayer.id) {
                    // Has ID, try to update
                    await updatePrayer(prayer.id, prayerData);
                    results.updated++;
                }
            } catch (error) {
                results.errors.push({
                    prayer: prayer.name,
                    error: error.message
                });
            }
        }
        
        return {
            success: true,
            ...results
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Load all prayers from Supabase to local storage
 * @returns {Promise<Array>} Array of prayers
 */
async function loadPrayersFromSupabase() {
    try {
        const prayers = await getAllPrayers();
        // Convert Supabase format to local format
        return prayers.map(p => ({
            id: p.id,
            name: p.prayer_name,
            category: p.category,
            description: p.description || '',
            badge: p.badge || '',
            members: p.members || [],
            createdAt: p.created_at
        }));
    } catch (error) {
        console.error('Error loading prayers from Supabase:', error);
        return [];
    }
}

// Export functions
window.PrayerDB = {
    createPrayer,
    getAllPrayers,
    getPrayersByCategory,
    getPrayer,
    updatePrayer,
    deletePrayer,
    updatePrayerMembers,
    addMemberBadge,
    removeMemberBadge,
    syncPrayersToSupabase,
    loadPrayersFromSupabase
};
