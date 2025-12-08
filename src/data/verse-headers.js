// Verse headers/section titles that appear before specific verses
// Format: "Book Chapter:Verse": "Header Title"
const verseHeaders = {
    // Matthew
    "Matthew 1:1": "Genealogy of Jesus Christ",
    "Matthew 1:18": "Birth of Jesus Christ",
    "Matthew 2:1": "Visit of the Wise Men",
    "Matthew 2:13": "Flight to Egypt",
    "Matthew 2:19": "Return to Nazareth",
    "Matthew 3:1": "John the Baptist Prepares the Way",
    "Matthew 3:13": "The Baptism of Jesus",
    "Matthew 4:1": "The Temptation of Jesus",
    "Matthew 4:12": "Jesus Begins His Ministry",
    "Matthew 4:18": "Calling the First Disciples",
    "Matthew 5:1": "The Sermon on the Mount",
    "Matthew 5:3": "The Beatitudes",
    "Matthew 5:13": "Salt and Light",
    "Matthew 6:1": "Teaching About Giving to the Needy",
    "Matthew 6:5": "The Lord's Prayer",
    "Matthew 6:19": "Treasures in Heaven",
    "Matthew 6:25": "Do Not Worry",
    
    // Add more headers as needed
};

// Helper function to get header for a specific verse
function getVerseHeader(bookName, chapter, verse) {
    const key = `${bookName} ${chapter}:${verse}`;
    return verseHeaders[key] || null;
}
