const CACHE_NAME = 'my-bible-v1';
const DYNAMIC_CACHE_NAME = 'my-bible-dynamic-v1';

// Core files that are essential for the app to work
const CORE_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching core assets');
                return cache.addAll(CORE_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - Network first, falling back to cache
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        // Try network first
        fetch(event.request)
            .then((response) => {
                // Clone the response
                const responseClone = response.clone();
                
                // Cache the fetched response
                caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseClone);
                });
                
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        
                        // If not in cache, return offline page or error
                        return new Response('Offline - Content not available', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});
