# Bible Data Export Instructions

## Overview
This solution bundles Bible data directly in the app for instant offline access without any downloads.

## How It Works

### Priority System:
1. **Bundled JS files** (instant, no download) ← Primary
2. **IndexedDB cache** (from previous Supabase downloads) ← Fallback
3. **Supabase API** (online only, for notes/colors) ← Online features

## Setup Instructions

### Step 1: Export Bible Data from Supabase

1. Install Node.js dependencies:
```bash
cd scripts
npm install @supabase/supabase-js
```

2. Run the export script:
```bash
node export-bible-data.js
```

This will create JS files in `data/bible/tamil/` and `data/bible/english/` for all 66 books.

### Step 2: File Structure
After export, you'll have:
```
data/bible/
├── bible-data-loader.js (loads all books)
├── tamil/
│   ├── genesis.js
│   ├── exodus.js
│   └── ... (66 books)
└── english/
    ├── genesis.js
    ├── exodus.js
    └── ... (66 books)
```

### Step 3: How Data is Loaded

Each JS file exports data to window:
```javascript
// Example: genesis_tamil.js
window.bibleData_genesis_tamil = {
    1: {
        verse_1: "ஆதியிலே தேவன்...",
        verse_2: "பூமி ஒழுங்கற்று...",
        // ... all verses
    },
    2: { ... },
    // ... all chapters
};
```

## Benefits

✅ **Instant Load**: No waiting for downloads
✅ **True Offline**: Works from first load
✅ **No Storage Issues**: Data is in app files, not browser storage
✅ **Faster**: No API calls needed for Bible text
✅ **Smaller Bundle**: Compared to downloading at runtime

## File Sizes (Approximate)

- Each book JS file: 50-500KB
- Total Tamil: ~15MB
- Total English: ~10MB
- **Total bundle: ~25MB** (acceptable for PWA)

## Notes Features (Online Only)

When online, app can use Supabase for:
- ✅ Notes sync across devices
- ✅ Highlight colors
- ✅ Memory verses
- ✅ User preferences

When offline:
- ✅ Read all Bible text (from bundled files)
- ❌ Notes features disabled
- ❌ No color highlights
- ❌ No sync

## Manual Export (Alternative)

If you want to export specific books manually:

```javascript
// In browser console while online
async function exportBookToJS(bookFile, language) {
    const data = await bibleDataManager.loadEntireBook(bookFile, language);
    const js = `window.bibleData_${bookFile}_${language} = ${JSON.stringify(data, null, 2)};`;
    console.log(js);
    // Copy and save to file
}

exportBookToJS('genesis', 'tamil');
```

## Deployment

When deploying, the `data/bible/` folder will be included in the build, making all Bible text available offline immediately!
