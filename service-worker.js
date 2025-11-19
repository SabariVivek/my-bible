// Minimal service worker for PWA installation
// No offline caching - app requires internet connection

const CACHE_NAME = 'my-bible-v1';

// Install event - minimal setup
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - always fetch from network (online-only)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // If offline, return an offline page
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
});
