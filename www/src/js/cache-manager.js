/**
 * Automatic Cache Buster for Mobile
 * 
 * ✨ COMPLETELY AUTOMATIC - NO USER ACTION NEEDED ✨
 * 
 * How it works:
 * 1. On every page load, checks manifest.json for version changes
 * 2. If server version differs from stored version, clears all caches
 * 3. Reloads page silently to load fresh content
 * 4. Perfect for mobile users - just open the app!
 * 
 * No npm commands needed. No manual updates. Just deploy and users are automatically updated.
 */

class CacheManager {
  constructor() {
    this.CACHE_KEY = 'appVersion';
    this.LAST_CHECK_KEY = 'lastCacheCheck';
    this.CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes
    this.currentVersion = this.getCurrentVersion();
    this.isUpdating = false;
  }

  /**
   * Get the stored version from localStorage
   */
  getCurrentVersion() {
    return localStorage.getItem(this.CACHE_KEY) || 'initial';
  }

  /**
   * Set the app version in localStorage
   */
  setVersion(version) {
    localStorage.setItem(this.CACHE_KEY, version);
    this.currentVersion = version;
  }

  /**
   * Check for updates by fetching manifest with cache bypass
   */
  async checkForUpdates() {
    // Prevent multiple simultaneous checks
    if (this.isUpdating) return;
    
    // Skip check if running locally (file:// protocol)
    if (window.location.protocol === 'file:') {
      return;
    }
    
    // Don't check too frequently (respects 5 min interval)
    const lastCheck = localStorage.getItem(this.LAST_CHECK_KEY);
    if (lastCheck && Date.now() - parseInt(lastCheck) < this.CHECK_INTERVAL) {
      return;
    }

    try {
      // Fetch manifest with cache bypass (add timestamp to URL)
      const timestamp = Date.now();
      const response = await fetch(`manifest.json?t=${timestamp}`, {
        cache: 'no-store'
      });
      
      if (!response.ok) {
        return;
      }

      const manifest = await response.json();
      localStorage.setItem(this.LAST_CHECK_KEY, Date.now().toString());
      
      // If server version differs from stored version, update
      if (manifest.version && manifest.version !== this.currentVersion) {
        this.handleVersionChange(manifest.version);
      }
    } catch (error) {
      // Silent fail - network error, offline, etc.
    }
  }

  /**
   * Handle version change - clear caches and reload page silently
   */
  handleVersionChange(newVersion) {
    if (this.isUpdating) return;
    this.isUpdating = true;
    // Update stored version
    this.setVersion(newVersion);
    
    // Clear all service worker caches
    if ('caches' in window) {
      caches.keys()
        .then(cacheNames => Promise.all(cacheNames.map(name => caches.delete(name))))
        .then(() => {
          // Silently reload to get fresh content
          // The reload will happen before user notices
          window.location.reload(true);
        })
        .catch(() => {
          // Cache clear failed, reload anyway
          window.location.reload(true);
        });
    } else {
      // No service worker support, just reload
      window.location.reload(true);
    }
  }

  /**
   * Initialize - runs automatically on page load
   */
  init() {
    // IMMEDIATE: Check on page load
    this.checkForUpdates();
    
    // PERIODIC: Check every 5 minutes while app is open
    setInterval(() => this.checkForUpdates(), this.CHECK_INTERVAL);

    // VISIBILITY: Check when user returns to app from background
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.checkForUpdates();
      }
    });
  }

  /**
   * Manual cache clear (for debugging)
   */
  async clearAllCaches() {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      return Promise.all(cacheNames.map(name => caches.delete(name)));
    }
  }

  /**
   * Get cache info (for debugging)
   */
  async getCacheInfo() {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      const info = {};
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        info[cacheName] = {
          count: keys.length,
          urls: keys.map(req => req.url)
        };
      }
      return info;
    }
    return null;
  }
}

// Initialize cache manager automatically on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.cacheManager = new CacheManager();
    window.cacheManager.init();
  });
} else {
  window.cacheManager = new CacheManager();
  window.cacheManager.init();
}
