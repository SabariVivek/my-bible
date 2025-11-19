// GitHub Configuration for Notes Backend
const GITHUB_CONFIG = {
    owner: 'SabariVivek',
    repo: 'my-bible',
    branch: 'main',
    notesFile: 'notes.json',
    // Encrypted token (base64 encoded) - only accessible in admin mode
    // Token loaded from config.local.js (not tracked by git)
    _encryptedToken: typeof LOCAL_CONFIG !== 'undefined' ? LOCAL_CONFIG.encryptedToken : '',
    
    get token() {
        // Only decrypt token if user is in admin mode
        const isAdminMode = localStorage.getItem('isAdmin') === 'true';
        if (!isAdminMode) return '';
        
        try {
            return this._encryptedToken ? atob(this._encryptedToken) : '';
        } catch (e) {
            console.error('Failed to decrypt token');
            return '';
        }
    },
    
    // API endpoints
    getFileUrl() {
        return `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.notesFile}?ref=${this.branch}`;
    },
    getRawUrl() {
        return `https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.branch}/${this.notesFile}`;
    }
};
