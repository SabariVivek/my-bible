/**
 * Generate phonetic and spelling variations for Bible book names
 * Supports both Tamil and English variations
 */
// Tamil names for 66 books
const books = {
    "Genesis": "ஆதியாகமம்",
    "Exodus": "யாத்திராகமம்",
    "Leviticus": "லேவியராகமம்",
    "Numbers": "எண்ணாகமம்",
    "Deuteronomy": "உபாகமம்",
    "Joshua": "யோசுவா",
    "Judges": "நியாயாதிபதிகள்",
    "Ruth": "ரூத்",
    "I Samuel": "1 சாமுவேல்",
    "II Samuel": "2 சாமுவேல்",
    "I Kings": "1 ராஜாக்கள்",
    "II Kings": "2 ராஜாக்கள்",
    "I Chronicles": "1 நாளாகமம்",
    "II Chronicles": "2 நாளாகமம்",
    "Ezra": "எஸ்றா",
    "Nehemiah": "நெகேமியா",
    "Esther": "எஸ்தர்",
    "Job": "யோபு",
    "Psalms": "சங்கீதம்",
    "Proverbs": "நீதிமொழிகள்",
    "Ecclesiastes": "சபைஉபதேசகர்",
    "Song of Solomon": "உன்னதப்பாட்டு",
    "Isaiah": "ஏசாயா",
    "Jeremiah": "எரேமியா",
    "Lamentations": "புலம்பல்",
    "Ezekiel": "எசேக்கியேல்",
    "Daniel": "தானியேல்",
    "Hosea": "ஓசியா",
    "Joel": "யேவேல்",
    "Amos": "ஆமோஸ்",
    "Obadiah": "ஒபதியா",
    "Jonah": "யோனா",
    "Micah": "மீக்கா",
    "Nahum": "நாகூம்",
    "Habakkuk": "ஆபக்கூக்",
    "Zephaniah": "செப்பனியா",
    "Haggai": "ஆக்காய்",
    "Zechariah": "சகரியா",
    "Malachi": "மலாக்கி",
    "Matthew": "மத்தேயு",
    "Mark": "மாற்கு",
    "Luke": "லூக்கா",
    "John": "யோவான்",
    "Acts": "அப்போஸ்தலர்",
    "Romans": "ரோமர்",
    "I Corinthians": "1 கொரிந்தியர்",
    "II Corinthians": "2 கொரிந்தியர்",
    "Galatians": "கலாத்தியர்",
    "Ephesians": "எபெசியர்",
    "Philippians": "பிலிப்பியர்",
    "Colossians": "கொலோசெயர்",
    "I Thessalonians": "1 தெசலோனிக்கியர்",
    "II Thessalonians": "2 தெசலோனிக்கியர்",
    "I Timothy": "1 தீமோத்தேயு",
    "II Timothy": "2 தீமோத்தேயு",
    "Titus": "தீத்து",
    "Philemon": "பிலேமோன்",
    "Hebrews": "எபிரெயர்",
    "James": "யாக்கோபு",
    "I Peter": "1 பேதுரு",
    "II Peter": "2 பேதுரு",
    "I John": "1 யோவான்",
    "II John": "2 யோவான்",
    "III John": "3 யோவான்",
    "Jude": "யூதா",
    "Revelation": "வெளிப்படுத்தல்"
};
/**
 * Generate Tamil variations using phonetic and spelling rules
 * @param {string} word - Tamil word
 * @param {number} count - Maximum variations to generate
 * @returns {Array<string>} - Array of variations
 */
function tamilVariations(word, count = 20) {
    const vars = new Set();
    // Remove last character
    if (word.length > 1) {
        vars.add(word.slice(0, -1));
    }
    // Remove ம் if exists at end
    if (word.endsWith("ம்")) {
        vars.add(word.slice(0, -1));
    }
    // Tamil vowel marks that can be swapped
    const vowels = ["ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ"];
    // Swap vowels
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (vowels.includes(ch)) {
            for (const v of vowels) {
                const variation = word.slice(0, i) + v + word.slice(i + 1);
                vars.add(variation);
            }
        }
    }
    // Duplicate characters (common transcription error)
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const variation = word.slice(0, i) + ch + word.slice(i);
        vars.add(variation);
    }
    // Remove characters (common omission)
    for (let i = 0; i < word.length; i++) {
        const variation = word.slice(0, i) + word.slice(i + 1);
        if (variation.length > 2) {
            vars.add(variation);
        }
    }
    return Array.from(vars).slice(0, count);
}
/**
 * Generate English variations using phonetic and spelling rules
 * @param {string} word - English word
 * @param {number} count - Maximum variations to generate
 * @returns {Array<string>} - Array of variations
 */
function engVariations(word, count = 20) {
    const vowels = "aeiou";
    const consonantSwaps = {
        'g': ['k', 'j'],
        'j': ['g', 'y'],
        'c': ['k', 's'],
        'k': ['g', 'c'],
        'p': ['b', 'f'],
        't': ['d'],
        'd': ['t'],
        's': ['z', 'sh'],
        'z': ['s'],
        'f': ['ph', 'v'],
        'v': ['f', 'b'],
        'x': ['ks', 'z'],
        'h': [''],
        'w': ['v']
    };
    const variations = new Set();
    const lower = word.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        const char = lower[i];
        // Vowel substitution
        if (vowels.includes(char)) {
            for (const v of vowels) {
                variations.add(lower.slice(0, i) + v + lower.slice(i + 1));
            }
        }
        // Consonant substitution
        if (consonantSwaps[char]) {
            for (const rep of consonantSwaps[char]) {
                variations.add(lower.slice(0, i) + rep + lower.slice(i + 1));
            }
        }
        // Double character (common misspelling)
        variations.add(lower.slice(0, i) + char + char + lower.slice(i + 1));
        // Remove character (common omission)
        if (lower.length > 3) {
            variations.add(lower.slice(0, i) + lower.slice(i + 1));
        }
    }
    // Add common suffixes/prefixes variations
    if (lower.length > 4) {
        variations.add(lower + 's');
        variations.add(lower + 'h');
        variations.add(lower.slice(0, -1));
    }
    return Array.from(variations).slice(0, count);
}
/**
 * Generate all variations for all books
 * @returns {Object} - Dictionary with book names as keys and variation arrays as values
 */
function generateAllVariations() {
    const finalData = {};
    for (const [book, tamil] of Object.entries(books)) {
        const englishBase = book.toLowerCase().replace(/\s+/g, '');
        const englishVars = engVariations(englishBase, 20);
        const tamilVars = tamilVariations(tamil, 20);
        // Combine all variations and remove duplicates
        const allVariations = Array.from(new Set([
            tamil,
            ...tamilVars,
            ...englishVars,
            book.toLowerCase(),
            englishBase
        ]));
        finalData[book] = {
            tamil: tamil,
            aliases: allVariations
        };
    }
    return finalData;
}
/**
 * Generate variations and save as JSON
 */
function saveVariationsToFile() {
    const data = generateAllVariations();
    const json = JSON.stringify(data, null, 2);
    // In browser environment, create downloadable file
    if (typeof window !== 'undefined') {
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bible_alias_full_tamil_english.json';
        a.click();
        URL.revokeObjectURL(url);
    }
    return data;
}
/**
 * Log variations for testing
 */
function logVariations() {
    const data = generateAllVariations();
    // Show sample for first 3 books
    const samples = Object.entries(data).slice(0, 3);
    for (const [book, info] of samples) {
    }
    return data;
}
// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        tamilVariations,
        engVariations,
        generateAllVariations,
        saveVariationsToFile,
        logVariations,
        books
    };
}
// Auto-run if executed directly
if (typeof window === 'undefined' && require.main === module) {
    const fs = require('fs');
    const data = generateAllVariations();
    fs.writeFileSync('bible_alias_full_tamil_english.json', JSON.stringify(data, null, 2), 'utf-8');
}
