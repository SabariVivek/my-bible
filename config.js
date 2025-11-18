// GitHub Configuration for Notes Backend
const GITHUB_CONFIG = {
    owner: 'SabariVivek',
    repo: 'my-bible',
    branch: 'main',
    notesFile: 'notes.json',
    // Token will be stored in browser localStorage for security
    // Never commit your token to GitHub!
    token: localStorage.getItem('github_token') || '',
    
    // API endpoints
    getFileUrl() {
        return `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.notesFile}?ref=${this.branch}`;
    },
    getRawUrl() {
        return `https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.branch}/${this.notesFile}`;
    }
};
