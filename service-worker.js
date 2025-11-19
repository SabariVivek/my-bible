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
      // If offline, show a simple message
      return new Response('App requires internet connection', {
        headers: { 'Content-Type': 'text/plain' }
      });
    })
  );
});
