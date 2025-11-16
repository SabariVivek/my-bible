// Offline Download Manager
class OfflineManager {
    constructor() {
        this.isDownloading = false;
        this.downloadQueue = [];
        this.downloadedCount = 0;
        this.totalCount = 0;
        this.languages = ['tamil', 'easy-english'];
    }

    // Check if online
    isOnline() {
        return navigator.onLine;
    }

    // Load book from IndexedDB or network
    async loadBookData(bookFile, language, testament) {
        // Try loading from IndexedDB first
        const cachedBook = await bibleDB.getBook(bookFile, language, testament);
        
        if (cachedBook) {
            console.log(`Loaded ${bookFile} (${language}) from IndexedDB`);
            return cachedBook.data;
        }

        // If not in IndexedDB, try loading via script tag (works both locally and on server)
        try {
            const data = await this.loadBookViaScript(bookFile, language, testament);
            
            // Save to IndexedDB for offline use
            await bibleDB.saveBook(bookFile, language, testament, data);
            console.log(`Loaded ${bookFile} (${language}) from network and cached`);
            
            return data;
        } catch (error) {
            console.error(`Failed to load ${bookFile}:`, error);
            throw error;
        }
    }

    // Load book using script tag (works with file:// protocol)
    loadBookViaScript(bookFile, language, testament) {
        return new Promise((resolve, reject) => {
            const scriptPath = `Bible/${language}/${testament}/${bookFile}.js`;
            const tempScriptId = `temp-book-load-${Date.now()}`;
            const script = document.createElement('script');
            
            script.id = tempScriptId;
            script.src = scriptPath;
            
            script.onload = () => {
                const dataVarName = `${bookFile}_data`;
                const data = window[dataVarName];
                
                // Clean up
                script.remove();
                
                if (data) {
                    resolve(data);
                } else {
                    reject(new Error(`Data variable ${dataVarName} not found`));
                }
            };
            
            script.onerror = () => {
                script.remove();
                reject(new Error(`Failed to load script: ${scriptPath}`));
            };
            
            document.body.appendChild(script);
        });
    }

    // Download all books for offline use
    async downloadAllBooks(languages = ['tamil', 'easy-english']) {
        if (this.isDownloading) {
            console.log('Download already in progress');
            return;
        }

        if (!this.isOnline()) {
            this.showNotification('No internet connection. Please connect to download Bible data.', 'error');
            return;
        }

        this.isDownloading = true;
        this.downloadedCount = 0;
        this.totalCount = bibleBooks.length * languages.length;

        this.showDownloadModal();

        try {
            for (const language of languages) {
                for (const book of bibleBooks) {
                    const testament = book.testament === 'old' ? 'old-testament' : 'new-testament';
                    
                    try {
                        await this.downloadBook(book.file, language, testament);
                        this.downloadedCount++;
                        this.updateDownloadProgress();
                    } catch (error) {
                        console.error(`Failed to download ${book.file} (${language}):`, error);
                    }
                }
            }

            await bibleDB.saveDownloadStatus({
                downloaded: this.downloadedCount,
                total: this.totalCount,
                timestamp: Date.now()
            });

            this.showNotification('All Bible books downloaded successfully! You can now use the app offline.', 'success');
            this.hideDownloadModal();
        } catch (error) {
            console.error('Download failed:', error);
            this.showNotification('Download failed. Please try again.', 'error');
        } finally {
            this.isDownloading = false;
        }
    }

    // Download a single book
    async downloadBook(bookFile, language, testament) {
        // Use the script loading method instead of fetch
        const data = await this.loadBookViaScript(bookFile, language, testament);
        
        // Save to IndexedDB
        await bibleDB.saveBook(bookFile, language, testament, data);
    }

    // Show download modal
    showDownloadModal() {
        let modal = document.getElementById('download-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'download-modal';
            modal.className = 'download-modal';
            modal.innerHTML = `
                <div class="download-modal-content">
                    <h2>Downloading Bible Data</h2>
                    <p>Downloading books for offline use...</p>
                    <div class="progress-bar">
                        <div class="progress-fill" id="download-progress"></div>
                    </div>
                    <p class="progress-text" id="download-text">0%</p>
                    <p class="download-info">This may take a few minutes. Please keep this tab open.</p>
                </div>
            `;
            document.body.appendChild(modal);
        }
        modal.style.display = 'flex';
    }

    // Hide download modal
    hideDownloadModal() {
        const modal = document.getElementById('download-modal');
        if (modal) {
            setTimeout(() => {
                modal.style.display = 'none';
            }, 2000);
        }
    }

    // Update download progress
    updateDownloadProgress() {
        const percentage = Math.round((this.downloadedCount / this.totalCount) * 100);
        const progressBar = document.getElementById('download-progress');
        const progressText = document.getElementById('download-text');
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${percentage}% (${this.downloadedCount}/${this.totalCount})`;
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        let notification = document.getElementById('offline-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'offline-notification';
            notification.className = 'offline-notification';
            document.body.appendChild(notification);
        }

        notification.textContent = message;
        notification.className = `offline-notification ${type}`;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }

    // Get storage info
    async getStorageInfo() {
        const estimate = await bibleDB.getStorageEstimate();
        const status = await bibleDB.getDownloadStatus();
        const allBooks = await bibleDB.getAllBooks();

        return {
            usage: estimate ? (estimate.usage / (1024 * 1024)).toFixed(2) : 'N/A',
            quota: estimate ? (estimate.quota / (1024 * 1024 * 1024)).toFixed(2) : 'N/A',
            downloadedBooks: allBooks.length,
            totalBooks: bibleBooks.length * 2, // Tamil + English
            lastDownload: status.timestamp ? new Date(status.timestamp).toLocaleString() : 'Never'
        };
    }

    // Clear offline data
    async clearOfflineData() {
        if (confirm('Are you sure you want to clear all offline Bible data? You will need to download again.')) {
            await bibleDB.clearAll();
            this.showNotification('Offline data cleared successfully', 'success');
        }
    }
}

// Create global instance
const offlineManager = new OfflineManager();

// Monitor online/offline status
window.addEventListener('online', () => {
    offlineManager.showNotification('You are back online!', 'success');
});

window.addEventListener('offline', () => {
    offlineManager.showNotification('You are offline. Using cached data.', 'info');
});
