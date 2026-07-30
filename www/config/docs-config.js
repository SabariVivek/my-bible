// Supabase Configuration for Bible Notes Backend
const SUPABASE_NOTES_CONFIG = {
    url: 'https://encjogfdbrfcatvytpir.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuY2pvZ2ZkYnJmY2F0dnl0cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDM2MzksImV4cCI6MjA3OTExOTYzOX0.X3jHo2YTwQa0j8HTjhi7fkO1wU2rb6jwngRjVKaF6ck',
    tableName: 'bible_notes_pages'
};

// Keep old name for backward compatibility
const SUPABASE_CONFIG = SUPABASE_NOTES_CONFIG;

// Export for Node.js usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SUPABASE_NOTES_CONFIG,
        SUPABASE_CONFIG
    };
}
