# My Bible - Offline PWA Setup

## What's Been Added

Your Bible website now works offline! Here's what was implemented:

### New Files Created:
1. **service-worker.js** - Handles caching and offline functionality
2. **manifest.json** - Makes your app installable as a PWA
3. **generate-icon-192.html** & **generate-icon-512.html** - Helper files to create app icons

### Modified Files:
- **index.html** - Added manifest link and service worker registration

## How It Works

### Network-First Strategy
- When online: Always fetches the latest content from the server and updates the cache
- When offline: Serves content from cache
- Automatically updates when you go back online

### Features
- ✅ Works completely offline after first visit
- ✅ Automatically updates when online
- ✅ Caches all Bible books as you view them
- ✅ Installable as a standalone app on mobile/desktop
- ✅ No data loss - uses cache storage

## Setup Instructions

### 1. Generate Icons (Optional but Recommended)
Open these files in your browser and they'll automatically download the icons:
- `generate-icon-192.html` → creates `icon-192.png`
- `generate-icon-512.html` → creates `icon-512.png`

Save the downloaded icons in your project root folder.

### 2. Test Locally
You need to serve the files through a web server (not just opening the HTML file):

**Option A - Using Python:**
```bash
cd c:\Users\Dynamic_21\Desktop\my-bible
python -m http.server 8000
```

**Option B - Using Node.js (if installed):**
```bash
cd c:\Users\Dynamic_21\Desktop\my-bible
npx serve
```

**Option C - Using VS Code:**
Install "Live Server" extension and right-click on `index.html` → "Open with Live Server"

### 3. Deploy to GitHub Pages
Just push all the new files to your repository:
```bash
git add .
git commit -m "Add offline PWA support"
git push
```

### 4. Test Offline Functionality
1. Visit your GitHub Pages site when online
2. Browse a few Bible books (they'll be cached)
3. Turn off your internet or enable "Offline" mode in browser DevTools
4. The site will continue to work with cached content!

## Browser Support
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (iOS 11.3+)
- ✅ Opera

## Installing as an App
On mobile or desktop, you'll see an "Install" prompt or option in the browser menu to add the app to your home screen/desktop.

## Cache Management
The service worker automatically:
- Caches core files (HTML, CSS, JS) immediately
- Caches Bible books as you view them
- Updates cached content when online
- Cleans up old cache versions

## Troubleshooting

### Service Worker not registering?
- Make sure you're accessing via `http://` or `https://` (not `file://`)
- Check browser console for errors
- Service Workers require HTTPS in production (GitHub Pages provides this)

### Content not updating?
- The app checks for updates every minute when online
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear cache in browser settings if needed

### To unregister service worker (for testing):
Open browser DevTools → Application → Service Workers → Unregister

---

**Note:** After deploying to GitHub Pages, the app will be fully functional offline. Users will see the latest content when online and cached content when offline.
