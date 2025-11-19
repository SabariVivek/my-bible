// GitHub Configuration for Documentation Backend
const DOCS_GITHUB_CONFIG = {
    owner: 'SabariVivek',
    repo: 'my-bible',
    branch: 'main',
    docsFile: 'documentation.json',
    // Encrypted token (base64 encoded) - only accessible in admin mode
    // Replace this with your base64 encoded GitHub token: btoa('your_github_token_here')
    // IMPORTANT: Add your token locally - DO NOT commit actual tokens!
    _encryptedToken: '', // Paste your base64 encoded token here
    
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
        return `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.docsFile}?ref=${this.branch}`;
    },
    getRawUrl() {
        return `https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.branch}/${this.docsFile}`;
    }
};
