// IndexedDB Manager for Bible Data
class BibleDB {
    constructor() {
        this.dbName = 'MyBibleDB';
        this.version = 1;
        this.db = null;
    }

    // Initialize the database
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create object store for books
                if (!db.objectStoreNames.contains('books')) {
                    const bookStore = db.createObjectStore('books', { keyPath: 'id' });
                    bookStore.createIndex('language', 'language', { unique: false });
                    bookStore.createIndex('testament', 'testament', { unique: false });
                }

                // Create object store for download status
                if (!db.objectStoreNames.contains('downloadStatus')) {
                    db.createObjectStore('downloadStatus', { keyPath: 'key' });
                }
            };
        });
    }

    // Save book data to IndexedDB
    async saveBook(bookFile, language, testament, data) {
        const transaction = this.db.transaction(['books'], 'readwrite');
        const store = transaction.objectStore('books');
        
        const bookData = {
            id: `${language}-${testament}-${bookFile}`,
            bookFile,
            language,
            testament,
            data,
            timestamp: Date.now()
        };

        return new Promise((resolve, reject) => {
            const request = store.put(bookData);
            request.onsuccess = () => resolve(bookData);
            request.onerror = () => reject(request.error);
        });
    }

    // Get book data from IndexedDB
    async getBook(bookFile, language, testament) {
        const transaction = this.db.transaction(['books'], 'readonly');
        const store = transaction.objectStore('books');
        const id = `${language}-${testament}-${bookFile}`;

        return new Promise((resolve, reject) => {
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    // Check if book exists in IndexedDB
    async hasBook(bookFile, language, testament) {
        const book = await this.getBook(bookFile, language, testament);
        return !!book;
    }

    // Get all downloaded books
    async getAllBooks() {
        const transaction = this.db.transaction(['books'], 'readonly');
        const store = transaction.objectStore('books');

        return new Promise((resolve, reject) => {
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    // Delete a book
    async deleteBook(bookFile, language, testament) {
        const transaction = this.db.transaction(['books'], 'readwrite');
        const store = transaction.objectStore('books');
        const id = `${language}-${testament}-${bookFile}`;

        return new Promise((resolve, reject) => {
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    // Save download status
    async saveDownloadStatus(status) {
        const transaction = this.db.transaction(['downloadStatus'], 'readwrite');
        const store = transaction.objectStore('downloadStatus');

        return new Promise((resolve, reject) => {
            const request = store.put({ key: 'status', ...status });
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    // Get download status
    async getDownloadStatus() {
        const transaction = this.db.transaction(['downloadStatus'], 'readonly');
        const store = transaction.objectStore('downloadStatus');

        return new Promise((resolve, reject) => {
            const request = store.get('status');
            request.onsuccess = () => resolve(request.result || { downloaded: 0, total: 0 });
            request.onerror = () => reject(request.error);
        });
    }

    // Get database size estimate
    async getStorageEstimate() {
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            return await navigator.storage.estimate();
        }
        return null;
    }

    // Clear all data
    async clearAll() {
        const transaction = this.db.transaction(['books', 'downloadStatus'], 'readwrite');
        
        return Promise.all([
            new Promise((resolve, reject) => {
                const request = transaction.objectStore('books').clear();
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            }),
            new Promise((resolve, reject) => {
                const request = transaction.objectStore('downloadStatus').clear();
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            })
        ]);
    }
}

// Create global instance
const bibleDB = new BibleDB();
