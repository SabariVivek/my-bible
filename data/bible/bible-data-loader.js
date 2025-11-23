// Bible data loader - loads files on demand instead of all at once
// This improves initial load time and reliability in mobile APKs

(function() {
    console.log('📚 Bible data loader initialized - files will load on demand');
    
    // Mark that bundled data system is ready
    window.bibleDataReady = true;
})();
