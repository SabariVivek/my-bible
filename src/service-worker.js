// Service worker for PWA with Supabase API caching
// IMPORTANT: Cache version is automatically updated with build timestamp
const BUILD_TIMESTAMP = '20251130134929';
const CACHE_VERSION = `v6-${BUILD_TIMESTAMP}`;
const CACHE_NAME = `my-bible-${CACHE_VERSION}`;
const API_CACHE_NAME = `my-bible-api-${CACHE_VERSION}`;
const STATIC_CACHE_NAME = `my-bible-static-${CACHE_VERSION}`;
// Persistent API cache that survives updates
const PERSISTENT_API_CACHE = 'my-bible-api-persistent';
// Static assets to cache
const STATIC_ASSETS = [
  './',
  './index.html',
  './src/styles.css',
  './src/script.js',
  './src/bible-reading.html',
  './config/config.js',
  './src/bible-data-manager.js',
  './src/lib/supabase.js',
  './src/voice-command.js',
  './manifest.json',
  './resources/icons/bible.png',
  './data/bible/bible-data-loader.js'
];
// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        return cache.addAll(STATIC_ASSETS).catch(err => {
          // Failed to cache some assets, continue anyway
        });
      })
      .then(() => self.skipWaiting())
  );
});
// Activate event - clean up old caches BUT keep persistent API cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // Keep current caches AND persistent API cache
          const shouldKeep = cache === CACHE_NAME || 
                           cache === API_CACHE_NAME || 
                           cache === STATIC_CACHE_NAME ||
                           cache === PERSISTENT_API_CACHE;
          if (!shouldKeep) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
// Fetch event - network first for Supabase API, cache first for static assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Handle Supabase API requests (cache-first with timeout for offline)
  if (url.origin.includes('supabase.co')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // If we have cache, return it immediately
        if (cachedResponse) {
          // Update cache in background (don't wait)
          fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(PERSISTENT_API_CACHE).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
          }).catch(() => {}); // Fail silently if offline
          return cachedResponse;
        }
        // No cache - try network with timeout
        return Promise.race([
          fetch(event.request).then(response => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(PERSISTENT_API_CACHE).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          }),
          // Timeout after 5 seconds
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Network timeout')), 5000)
          )
        ]).catch(error => {
          return new Response(JSON.stringify({ error: 'Offline and no cached data' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 503
          });
        });
      })
    );
    return;
  }
  // Handle static assets (cache first)
  if (event.request.destination === 'document' || 
      event.request.destination === 'script' || 
      event.request.destination === 'style' ||
      event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(response => {
          // Don't cache if not a success response
          if (!response || response.status !== 200) {
            return response;
          }
          const responseClone = response.clone();
          caches.open(STATIC_CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        });
      }).catch(() => {
        // If both cache and network fail, show offline page
        if (event.request.mode === 'navigate') {
          return new Response(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>No Internet Connection</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              }
              .container {
                text-align: center;
                padding: 40px 20px;
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                max-width: 400px;
                margin: 20px;
              }
              .icon {
                font-size: 80px;
                margin-bottom: 20px;
              }
              h1 {
                color: #333;
                font-size: 24px;
                margin: 0 0 10px 0;
              }
              p {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
                margin: 0 0 30px 0;
              }
              button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 15px 40px;
                font-size: 16px;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                transition: transform 0.2s;
              }
              button:active {
                transform: scale(0.95);
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="icon">📡</div>
              <h1>No Internet Connection</h1>
              <p>This app requires an internet connection to work. Please connect to a network and try again.</p>
              <button onclick="location.reload()">Retry</button>
            </div>
          </body>
          </html>
        `, {
          headers: { 'Content-Type': 'text/html' }
        });
        }
        return new Response('Network error', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' }
        });
      })
    );
  }
});
