/**
 * ==========================================================================
 * Desktop Top Bar Search Bar & Quick Scripture Reference Navigator
 * ==========================================================================
 * Enables instant Bible passage navigation for desktop users from the top bar.
 * Supports patterns such as:
 *  - Gen 3 2        (Genesis 3:2)
 *  - Gen 3:2        (Genesis 3:2)
 *  - Gen 3:4-5      (Genesis 3:4 to 5)
 *  - Gen 3 4-5      (Genesis 3:4 to 5)
 *  - Gen 3          (Genesis chapter 3)
 *  - 1 Cor 13 4     (1 Corinthians 13:4)
 *  - 1Cor 13:4-8    (1 Corinthians 13:4-8)
 *  - 1 John 1:9     (1 John 1:9)
 *  - 1Jn 1 9        (1 John 1:9)
 *  - ஆதி 3 2        (Tamil: Genesis 3:2)
 *  - ஆதியாகமம் 3:2  (Tamil: Genesis 3:2)
 *  - Also falls back to keyword text search across the Bible
 */

(function initDesktopTopSearch() {
    // Wait until DOM and bibleBooks are ready
    function setupWhenReady() {
        if (typeof bibleBooks === 'undefined' || !document.getElementById('desktop-top-search-input')) {
            setTimeout(setupWhenReady, 100);
            return;
        }
        init();
    }

    // Book aliases mapping for all 66 Bible books
    const bookAliases = {
        'genesis': ['gen', 'ge', 'gn'],
        'exodus': ['exod', 'exo', 'ex'],
        'leviticus': ['lev', 'le', 'lv'],
        'numbers': ['num', 'nu', 'nm', 'nb'],
        'deuteronomy': ['deut', 'de', 'dt'],
        'joshua': ['josh', 'jos', 'jsh'],
        'judges': ['judg', 'jdg', 'jg', 'jdgs'],
        'ruth': ['ruth', 'rth', 'ru'],
        'i_samuel': ['1 sam', '1sam', '1 s', '1s', '1 sa', '1sa', '1 samuel', '1samuel', 'i samuel', 'isamuel', 'first samuel', '1சாமுவேல்', '1சாமு'],
        'ii_samuel': ['2 sam', '2sam', '2 s', '2s', '2 sa', '2sa', '2 samuel', '2samuel', 'ii samuel', 'iisamuel', 'second samuel', '2சாமுவேல்', '2சாமு'],
        'i_kings': ['1 kgs', '1kgs', '1 ki', '1ki', '1 kin', '1kin', '1 kings', '1kings', 'i kings', 'ikings', '1இராஜாக்கள்', '1இரா'],
        'ii_kings': ['2 kgs', '2kgs', '2 ki', '2ki', '2 kin', '2kin', '2 kings', '2kings', 'ii kings', 'iikings', '2இராஜாக்கள்', '2இரா'],
        'i_chronicles': ['1 chr', '1chr', '1 ch', '1ch', '1 chron', '1chron', '1 chronicles', '1chronicles', 'i chronicles', '1நாளாகமம்', '1நாளா'],
        'ii_chronicles': ['2 chr', '2chr', '2 ch', '2ch', '2 chron', '2chron', '2 chronicles', '2chronicles', 'ii chronicles', '2நாளாகமம்', '2நாளா'],
        'ezra': ['ezra', 'ezr'],
        'nehemiah': ['neh', 'ne'],
        'esther': ['esth', 'est', 'es'],
        'job': ['job', 'jb'],
        'psalms': ['ps', 'psa', 'psm', 'pss', 'psalm', 'psalms'],
        'proverbs': ['prov', 'pro', 'pr', 'prv'],
        'ecclesiastes': ['eccl', 'ecc', 'ec', 'qoh'],
        'song_of_solomon': ['song', 'songs', 'ss', 'sos', 'so', 'song of songs', 'song of solomon'],
        'isaiah': ['isa', 'is'],
        'jeremiah': ['jer', 'je', 'jr'],
        'lamentations': ['lam', 'la'],
        'ezekiel': ['ezek', 'eze', 'ezk'],
        'daniel': ['dan', 'da', 'dn'],
        'hosea': ['hos', 'ho'],
        'joel': ['joel', 'joe', 'jl'],
        'amos': ['amos', 'am'],
        'obadiah': ['obad', 'oba', 'ob'],
        'jonah': ['jonah', 'jon', 'jnh'],
        'micah': ['mic', 'mc'],
        'nahum': ['nah', 'na'],
        'habakkuk': ['hab', 'hb'],
        'zephaniah': ['zeph', 'zep', 'zp'],
        'haggai': ['hag', 'hg'],
        'zechariah': ['zech', 'zec', 'zc'],
        'malachi': ['mal', 'ml'],
        'matthew': ['matt', 'mat', 'mt'],
        'mark': ['mark', 'mar', 'mk', 'mrk'],
        'luke': ['luke', 'luk', 'lk'],
        'john': ['john', 'joh', 'jn', 'jhn'],
        'acts': ['acts', 'act', 'ac'],
        'romans': ['rom', 'ro', 'rm'],
        'i_corinthians': ['1 cor', '1cor', '1 co', '1co', '1 corinthians', '1corinthians', 'i corinthians', 'icorinthians', '1கொரிந்தியர்', '1கொரி'],
        'ii_corinthians': ['2 cor', '2cor', '2 co', '2co', '2 corinthians', '2corinthians', 'ii corinthians', 'iicorinthians', '2கொரிந்தியர்', '2கொரி'],
        'galatians': ['gal', 'ga'],
        'ephesians': ['eph', 'ep'],
        'philippians': ['phil', 'php', 'pp'],
        'colossians': ['col', 'co'],
        'i_thessalonians': ['1 thess', '1thess', '1 th', '1th', '1 thes', '1thes', '1 thessalonians', '1thessalonians', 'i thessalonians', '1தெசலோனிக்கேயர்', '1தெச'],
        'ii_thessalonians': ['2 thess', '2thess', '2 th', '2th', '2 thes', '2thes', '2 thessalonians', '2thessalonians', 'ii thessalonians', '2தெசலோனிக்கேயர்', '2தெச'],
        'i_timothy': ['1 tim', '1tim', '1 ti', '1ti', '1 timothy', '1timothy', 'i timothy', '1தீமோத்தேயு', '1தீமோ'],
        'ii_timothy': ['2 tim', '2tim', '2 ti', '2ti', '2 timothy', '2timothy', 'ii timothy', '2தீமோத்தேயு', '2தீமோ'],
        'titus': ['titus', 'tit', 'ti'],
        'philemon': ['phlm', 'phm', 'pm', 'philemon'],
        'hebrews': ['heb', 'he'],
        'james': ['jas', 'jam', 'jm'],
        'i_peter': ['1 pet', '1pet', '1 pe', '1pe', '1 pt', '1pt', '1 peter', '1peter', 'i peter', '1பேதுரு'],
        'ii_peter': ['2 pet', '2pet', '2 pe', '2pe', '2 pt', '2pt', '2 peter', '2peter', 'ii peter', '2பேதுரு'],
        'i_john': ['1 john', '1john', '1 jn', '1jn', '1 jhn', '1jhn', '1 jo', '1jo', '1 joh', '1joh', 'i john', '1யோவான்', '1யோ'],
        'ii_john': ['2 john', '2john', '2 jn', '2jn', '2 jhn', '2jhn', '2 jo', '2jo', '2 joh', '2joh', 'ii john', '2யோவான்', '2யோ'],
        'iii_john': ['3 john', '3john', '3 jn', '3jn', '3 jhn', '3jhn', '3 jo', '3jo', '3 joh', '3joh', 'iii john', '3யோவான்', '3யோ'],
        'jude': ['jude', 'jud', 'jd'],
        'revelation': ['rev', 're', 'rv', 'revelation', 'revelations']
    };

    function normalizeText(text) {
        if (!text) return '';
        return text.toLowerCase().trim()
            .replace(/^[iI]\s+/, '1 ')
            .replace(/^[iI][iI]\s+/, '2 ')
            .replace(/^[iI][iI][iI]\s+/, '3 ')
            .replace(/^first\s+/i, '1 ')
            .replace(/^second\s+/i, '2 ')
            .replace(/^third\s+/i, '3 ')
            .replace(/^1st\s+/i, '1 ')
            .replace(/^2nd\s+/i, '2 ')
            .replace(/^3rd\s+/i, '3 ')
            .replace(/^([123])([a-z\u0B80-\u0BFF])/i, '$1 $2') // '1cor' -> '1 cor'
            .replace(/[\s\-_]+/g, ' ')
            .trim();
    }

    let bookLookup = {};

    function buildLookupTable() {
        bookLookup = {};
        bibleBooks.forEach((book, index) => {
            const addKey = (k) => {
                if (!k) return;
                const norm = normalizeText(k);
                if (norm && bookLookup[norm] === undefined) bookLookup[norm] = index;
                const clean = norm.replace(/\s+/g, '');
                if (clean && bookLookup[clean] === undefined) bookLookup[clean] = index;
            };

            addKey(book.name);
            addKey(book.shortName);
            addKey(book.tamilName);
            addKey(book.tamilShortName);
            if (book.tanglishName) addKey(book.tanglishName);
            if (book.tanglishShortName) addKey(book.tanglishShortName);

            if (book.name.startsWith('I ')) {
                addKey('1 ' + book.name.substring(2));
            } else if (book.name.startsWith('II ')) {
                addKey('2 ' + book.name.substring(3));
            } else if (book.name.startsWith('III ')) {
                addKey('3 ' + book.name.substring(4));
            }

            if (bookAliases[book.file]) {
                bookAliases[book.file].forEach(alias => addKey(alias));
            }
        });
    }

    function findBookIndex(bookStr) {
        if (!bookStr) return -1;
        const norm = normalizeText(bookStr);
        if (bookLookup[norm] !== undefined) return bookLookup[norm];
        const clean = norm.replace(/\s+/g, '');
        if (bookLookup[clean] !== undefined) return bookLookup[clean];

        // Prefix search for partial typing
        for (const [key, idx] of Object.entries(bookLookup)) {
            if (key.length >= 3 && (key.startsWith(norm) || norm.startsWith(key))) {
                return idx;
            }
        }
        return -1;
    }

    /**
     * Parses Bible reference strings like:
     * - Gen 3 2
     * - Gen 3:2
     * - Gen 3:4-5
     * - Gen 3 4-5
     * - Gen 3
     * - 1 Cor 13:4-8
     * - 1Jn 1 9
     * - ஆதி 3 2
     */
    // Comprehensive catalog of Bible stories and major biblical events
    const BIBLE_STORIES = [
    {
            "title": "Creation Day 1: Light and Darkness",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 3,
            "endVerse": 5,
            "category": "Creation",
            "keywords": [
                    "creation day 1",
                    "creation day one",
                    "day 1",
                    "day one",
                    "first day of creation",
                    "creation 1",
                    "light and darkness",
                    "let there be light",
                    "first day"
            ]
    },
    {
            "title": "Creation Day 2: The Sky and Waters Above",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 6,
            "endVerse": 8,
            "category": "Creation",
            "keywords": [
                    "creation day 2",
                    "creation day two",
                    "day 2",
                    "day two",
                    "second day of creation",
                    "creation 2",
                    "sky",
                    "expanse",
                    "firmament",
                    "waters above",
                    "vault",
                    "second day"
            ]
    },
    {
            "title": "Creation Day 3: Dry Land, Seas and Vegetation",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 9,
            "endVerse": 13,
            "category": "Creation",
            "keywords": [
                    "creation day 3",
                    "creation day three",
                    "day 3",
                    "day three",
                    "third day of creation",
                    "creation 3",
                    "dry land",
                    "seas",
                    "plants",
                    "trees",
                    "vegetation",
                    "grass",
                    "third day"
            ]
    },
    {
            "title": "Creation Day 4: Sun, Moon and Stars",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 14,
            "endVerse": 19,
            "category": "Creation",
            "keywords": [
                    "creation day 4",
                    "creation day four",
                    "day 4",
                    "day four",
                    "fourth day of creation",
                    "creation 4",
                    "sun moon and stars",
                    "lights in the expanse",
                    "greater light",
                    "lesser light",
                    "fourth day"
            ]
    },
    {
            "title": "Creation Day 5: Sea Creatures and Birds",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 20,
            "endVerse": 23,
            "category": "Creation",
            "keywords": [
                    "creation day 5",
                    "creation day five",
                    "day 5",
                    "day five",
                    "fifth day of creation",
                    "creation 5",
                    "fish",
                    "sea creatures",
                    "birds",
                    "winged creatures",
                    "fifth day"
            ]
    },
    {
            "title": "Creation Day 6: Land Animals and Humanity",
            "book": "Genesis",
            "chapter": 1,
            "startVerse": 24,
            "endVerse": 31,
            "category": "Creation",
            "keywords": [
                    "creation day 6",
                    "creation day six",
                    "day 6",
                    "day six",
                    "sixth day of creation",
                    "creation 6",
                    "land animals",
                    "creation of man",
                    "adam and eve",
                    "image of god",
                    "sixth day"
            ]
    },
    {
            "title": "Creation Day 7: God Rests (The Sabbath)",
            "book": "Genesis",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 3,
            "category": "Creation",
            "keywords": [
                    "creation day 7",
                    "creation day seven",
                    "day 7",
                    "day seven",
                    "seventh day of creation",
                    "creation 7",
                    "god rested",
                    "sabbath day",
                    "seventh day"
            ]
    },
    {
            "title": "The Garden of Eden and Creation of Woman",
            "book": "Genesis",
            "chapter": 2,
            "startVerse": 7,
            "endVerse": 25,
            "category": "Creation",
            "keywords": [
                    "garden of eden",
                    "creation of woman",
                    "rib of adam",
                    "breath of life",
                    "tree of life",
                    "tree of knowledge",
                    "adam and eve"
            ]
    },
    {
            "title": "The Fall of Man and the Serpent",
            "book": "Genesis",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 24,
            "category": "Creation",
            "keywords": [
                    "the fall of man",
                    "the fall",
                    "forbidden fruit",
                    "serpent",
                    "original sin",
                    "expelled from eden",
                    "garden of eden",
                    "clothing of skins"
            ]
    },
    {
            "title": "Cain and Abel",
            "book": "Genesis",
            "chapter": 4,
            "startVerse": 1,
            "endVerse": 16,
            "category": "Creation",
            "keywords": [
                    "cain and abel",
                    "first murder",
                    "am i my brothers keeper",
                    "offering of cain",
                    "blood cries out"
            ]
    },
    {
            "title": "Noah's Ark and the Great Flood",
            "book": "Genesis",
            "chapter": 6,
            "startVerse": 9,
            "endVerse": 22,
            "category": "Creation",
            "keywords": [
                    "noahs ark",
                    "noah ark",
                    "the flood",
                    "great flood",
                    "building the ark",
                    "two by two",
                    "righteous noah"
            ]
    },
    {
            "title": "The Flood Waters Recede and the Dove",
            "book": "Genesis",
            "chapter": 8,
            "startVerse": 6,
            "endVerse": 22,
            "category": "Creation",
            "keywords": [
                    "noah and the dove",
                    "olive leaf",
                    "raven and dove",
                    "waters recede",
                    "mount ararat",
                    "noahs altar"
            ]
    },
    {
            "title": "God's Covenant with Noah (The Rainbow)",
            "book": "Genesis",
            "chapter": 9,
            "startVerse": 8,
            "endVerse": 17,
            "category": "Creation",
            "keywords": [
                    "rainbow covenant",
                    "sign of the rainbow",
                    "gods promise to noah",
                    "covenant with noah",
                    "never again flood"
            ]
    },
    {
            "title": "The Tower of Babel",
            "book": "Genesis",
            "chapter": 11,
            "startVerse": 1,
            "endVerse": 9,
            "category": "Creation",
            "keywords": [
                    "tower of babel",
                    "confusion of languages",
                    "babel",
                    "scattered over the earth",
                    "one language"
            ]
    },
    {
            "title": "The Call of Abram (Abraham)",
            "book": "Genesis",
            "chapter": 12,
            "startVerse": 1,
            "endVerse": 9,
            "category": "Patriarchs",
            "keywords": [
                    "call of abraham",
                    "call of abram",
                    "leave your country",
                    "blessing to all nations",
                    "great nation"
            ]
    },
    {
            "title": "God's Covenant with Abraham",
            "book": "Genesis",
            "chapter": 15,
            "startVerse": 1,
            "endVerse": 21,
            "category": "Patriarchs",
            "keywords": [
                    "abrahams covenant",
                    "count the stars",
                    "credited as righteousness",
                    "smoking fire pot",
                    "promised land"
            ]
    },
    {
            "title": "Destruction of Sodom and Gomorrah",
            "book": "Genesis",
            "chapter": 19,
            "startVerse": 12,
            "endVerse": 29,
            "category": "Patriarchs",
            "keywords": [
                    "sodom and gomorrah",
                    "lots wife",
                    "pillar of salt",
                    "fire and brimstone",
                    "escape to zoar"
            ]
    },
    {
            "title": "The Sacrifice of Isaac (Mount Moriah)",
            "book": "Genesis",
            "chapter": 22,
            "startVerse": 1,
            "endVerse": 19,
            "category": "Patriarchs",
            "keywords": [
                    "sacrifice of isaac",
                    "binding of isaac",
                    "mount moriah",
                    "jehovah jireh",
                    "ram in the thicket",
                    "test of abraham"
            ]
    },
    {
            "title": "Isaac and Rebekah at the Well",
            "book": "Genesis",
            "chapter": 24,
            "startVerse": 10,
            "endVerse": 28,
            "category": "Patriarchs",
            "keywords": [
                    "isaac and rebekah",
                    "servant at the well",
                    "camels drinking",
                    "prayer for a wife",
                    "abrahams servant"
            ]
    },
    {
            "title": "Jacob and Esau: The Sold Birthright",
            "book": "Genesis",
            "chapter": 25,
            "startVerse": 27,
            "endVerse": 34,
            "category": "Patriarchs",
            "keywords": [
                    "jacob and esau",
                    "bowl of stew",
                    "birthright sold",
                    "red stew",
                    "lentils",
                    "despised his birthright"
            ]
    },
    {
            "title": "Jacob Steals Isaac's Blessing",
            "book": "Genesis",
            "chapter": 27,
            "startVerse": 1,
            "endVerse": 40,
            "category": "Patriarchs",
            "keywords": [
                    "jacob steals blessing",
                    "isaac blesses jacob",
                    "goatskin",
                    "blind isaac",
                    "esaus blessing"
            ]
    },
    {
            "title": "Jacob's Dream at Bethel (Jacob's Ladder)",
            "book": "Genesis",
            "chapter": 28,
            "startVerse": 10,
            "endVerse": 22,
            "category": "Patriarchs",
            "keywords": [
                    "jacobs ladder",
                    "jacobs dream",
                    "ladder to heaven",
                    "angels ascending",
                    "bethel",
                    "stone pillow",
                    "house of god"
            ]
    },
    {
            "title": "Jacob Wrestles with God (Peniel)",
            "book": "Genesis",
            "chapter": 32,
            "startVerse": 22,
            "endVerse": 32,
            "category": "Patriarchs",
            "keywords": [
                    "jacob wrestles with god",
                    "jacob wrestles with angel",
                    "peniel",
                    "name changed to israel",
                    "hip socket",
                    "i will not let you go"
            ]
    },
    {
            "title": "Joseph and the Coat of Many Colors",
            "book": "Genesis",
            "chapter": 37,
            "startVerse": 1,
            "endVerse": 36,
            "category": "Patriarchs",
            "keywords": [
                    "josephs coat",
                    "coat of many colors",
                    "josephs dreams",
                    "sold into egypt",
                    "brothers sell joseph",
                    "ornamented robe"
            ]
    },
    {
            "title": "Joseph Interprets Pharaoh's Dreams",
            "book": "Genesis",
            "chapter": 41,
            "startVerse": 14,
            "endVerse": 40,
            "category": "Patriarchs",
            "keywords": [
                    "pharaohs dream",
                    "joseph interprets dreams",
                    "seven fat cows",
                    "seven lean cows",
                    "seven years of famine",
                    "governor of egypt"
            ]
    },
    {
            "title": "Joseph Reconciles with His Brothers",
            "book": "Genesis",
            "chapter": 45,
            "startVerse": 1,
            "endVerse": 15,
            "category": "Patriarchs",
            "keywords": [
                    "joseph reveals himself",
                    "i am joseph",
                    "what you meant for evil god meant for good",
                    "joseph weeps",
                    "forgiveness of brothers"
            ]
    },
    {
            "title": "Birth and Rescue of Baby Moses",
            "book": "Exodus",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 10,
            "category": "Exodus",
            "keywords": [
                    "baby moses",
                    "basket in the nile",
                    "pharaohs daughter",
                    "miriam watching",
                    "drawn out of water"
            ]
    },
    {
            "title": "The Burning Bush (I AM WHO I AM)",
            "book": "Exodus",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 15,
            "category": "Exodus",
            "keywords": [
                    "burning bush",
                    "i am who i am",
                    "take off your sandals",
                    "holy ground",
                    "call of moses",
                    "mount horeb"
            ]
    },
    {
            "title": "The Ten Plagues of Egypt",
            "book": "Exodus",
            "chapter": 7,
            "startVerse": 14,
            "endVerse": 25,
            "category": "Exodus",
            "keywords": [
                    "ten plagues",
                    "plagues of egypt",
                    "water into blood",
                    "nile turned to blood",
                    "let my people go"
            ]
    },
    {
            "title": "The First Passover (Blood on Doorposts)",
            "book": "Exodus",
            "chapter": 12,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Exodus",
            "keywords": [
                    "the passover",
                    "first passover",
                    "passover lamb",
                    "blood on the doorposts",
                    "destroyer passed over"
            ]
    },
    {
            "title": "Parting of the Red Sea",
            "book": "Exodus",
            "chapter": 14,
            "startVerse": 10,
            "endVerse": 31,
            "category": "Exodus",
            "keywords": [
                    "parting of the red sea",
                    "crossing the red sea",
                    "red sea",
                    "pharaohs chariots",
                    "wall of water",
                    "dry ground",
                    "moses rod"
            ]
    },
    {
            "title": "Manna and Quail from Heaven",
            "book": "Exodus",
            "chapter": 16,
            "startVerse": 1,
            "endVerse": 35,
            "category": "Exodus",
            "keywords": [
                    "manna from heaven",
                    "bread from heaven",
                    "quail in the wilderness",
                    "daily bread",
                    "what is it"
            ]
    },
    {
            "title": "Water from the Rock at Horeb",
            "book": "Exodus",
            "chapter": 17,
            "startVerse": 1,
            "endVerse": 7,
            "category": "Exodus",
            "keywords": [
                    "water from the rock",
                    "strike the rock",
                    "massah and meribah",
                    "thirst in wilderness"
            ]
    },
    {
            "title": "The Ten Commandments (Mount Sinai)",
            "book": "Exodus",
            "chapter": 20,
            "startVerse": 1,
            "endVerse": 17,
            "category": "Exodus",
            "keywords": [
                    "ten commandments",
                    "10 commandments",
                    "mount sinai",
                    "tablets of stone",
                    "decalogue",
                    "thou shalt not"
            ]
    },
    {
            "title": "The Golden Calf",
            "book": "Exodus",
            "chapter": 32,
            "startVerse": 1,
            "endVerse": 20,
            "category": "Exodus",
            "keywords": [
                    "golden calf",
                    "aaron makes calf",
                    "moses breaks the tablets",
                    "idol of gold",
                    "anger of moses"
            ]
    },
    {
            "title": "The Twelve Spies Explore Canaan",
            "book": "Numbers",
            "chapter": 13,
            "startVerse": 17,
            "endVerse": 33,
            "category": "Exodus",
            "keywords": [
                    "twelve spies",
                    "12 spies",
                    "promised land",
                    "joshua and caleb",
                    "giants in the land",
                    "grapes of eshcol",
                    "milk and honey"
            ]
    },
    {
            "title": "The Bronze Serpent on the Pole",
            "book": "Numbers",
            "chapter": 21,
            "startVerse": 4,
            "endVerse": 9,
            "category": "Exodus",
            "keywords": [
                    "bronze serpent",
                    "snake on a pole",
                    "fiery serpents",
                    "look and live",
                    "healed from bites"
            ]
    },
    {
            "title": "Balaam's Talking Donkey",
            "book": "Numbers",
            "chapter": 22,
            "startVerse": 21,
            "endVerse": 38,
            "category": "Exodus",
            "keywords": [
                    "balaams donkey",
                    "talking donkey",
                    "donkey speaks",
                    "angel with drawn sword",
                    "balak"
            ]
    },
    {
            "title": "Rahab and the Spies in Jericho",
            "book": "Joshua",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 24,
            "category": "Joshua & Judges",
            "keywords": [
                    "rahab",
                    "spies in jericho",
                    "scarlet cord",
                    "roof of flax",
                    "faith of rahab"
            ]
    },
    {
            "title": "The Fall of Jericho (Walls Fall Down)",
            "book": "Joshua",
            "chapter": 6,
            "startVerse": 1,
            "endVerse": 20,
            "category": "Joshua & Judges",
            "keywords": [
                    "fall of jericho",
                    "walls of jericho",
                    "marching around jericho",
                    "trumpet blast",
                    "ark around city",
                    "walls fell down flat"
            ]
    },
    {
            "title": "The Sun Stands Still (Battle of Gibeon)",
            "book": "Joshua",
            "chapter": 10,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Joshua & Judges",
            "keywords": [
                    "sun stands still",
                    "sun stand still over gibeon",
                    "moon stop over aijalon",
                    "joshuas long day"
            ]
    },
    {
            "title": "Gideon's Fleece",
            "book": "Judges",
            "chapter": 6,
            "startVerse": 36,
            "endVerse": 40,
            "category": "Joshua & Judges",
            "keywords": [
                    "gideons fleece",
                    "fleece of wool",
                    "dew on fleece",
                    "sign of dew",
                    "gideons test"
            ]
    },
    {
            "title": "Gideon's 300 Men Defeat Midian",
            "book": "Judges",
            "chapter": 7,
            "startVerse": 1,
            "endVerse": 22,
            "category": "Joshua & Judges",
            "keywords": [
                    "gideons 300",
                    "gideon 300 men",
                    "lapping water",
                    "torches and jars",
                    "trumpet call",
                    "for the lord and for gideon"
            ]
    },
    {
            "title": "Samson and the Lion (Honey in the Carcass)",
            "book": "Judges",
            "chapter": 14,
            "startVerse": 5,
            "endVerse": 14,
            "category": "Joshua & Judges",
            "keywords": [
                    "samson and the lion",
                    "samsons riddle",
                    "honey from the lion",
                    "out of the eater came something to eat"
            ]
    },
    {
            "title": "Samson and Delilah",
            "book": "Judges",
            "chapter": 16,
            "startVerse": 4,
            "endVerse": 21,
            "category": "Joshua & Judges",
            "keywords": [
                    "samson and delilah",
                    "samsons hair cut",
                    "seven braids",
                    "source of strength",
                    "philistines upon you samson",
                    "blinded samson"
            ]
    },
    {
            "title": "Death of Samson in the Temple",
            "book": "Judges",
            "chapter": 16,
            "startVerse": 23,
            "endVerse": 31,
            "category": "Joshua & Judges",
            "keywords": [
                    "death of samson",
                    "pillars of the temple",
                    "strength returned to samson",
                    "temple of dagon"
            ]
    },
    {
            "title": "Ruth's Loyalty to Naomi",
            "book": "Ruth",
            "chapter": 1,
            "startVerse": 8,
            "endVerse": 18,
            "category": "Joshua & Judges",
            "keywords": [
                    "ruth and naomi",
                    "where you go i will go",
                    "your people will be my people",
                    "loyalty of ruth"
            ]
    },
    {
            "title": "The Lord Calls Boy Samuel",
            "book": "1 Samuel",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 19,
            "category": "Kings & Prophets",
            "keywords": [
                    "call of samuel",
                    "boy samuel",
                    "speak lord for your servant is listening",
                    "eli and samuel",
                    "samuel in the temple"
            ]
    },
    {
            "title": "David Anointed King by Samuel",
            "book": "1 Samuel",
            "chapter": 16,
            "startVerse": 1,
            "endVerse": 13,
            "category": "Kings & Prophets",
            "keywords": [
                    "david anointed",
                    "samuel anoints david",
                    "man looks at outward appearance",
                    "lord looks at heart",
                    "shepherd boy"
            ]
    },
    {
            "title": "David and Goliath",
            "book": "1 Samuel",
            "chapter": 17,
            "startVerse": 32,
            "endVerse": 51,
            "category": "Kings & Prophets",
            "keywords": [
                    "david and goliath",
                    "goliath",
                    "five smooth stones",
                    "sling and stone",
                    "philistine giant",
                    "valley of elah",
                    "you come with sword and spear"
            ]
    },
    {
            "title": "David Spares King Saul's Life in the Cave",
            "book": "1 Samuel",
            "chapter": 24,
            "startVerse": 1,
            "endVerse": 22,
            "category": "Kings & Prophets",
            "keywords": [
                    "david spares saul",
                    "cave of en gedi",
                    "cut corner of robe",
                    "the lords anointed"
            ]
    },
    {
            "title": "Nathan Rebukes David (You Are the Man!)",
            "book": "2 Samuel",
            "chapter": 12,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Kings & Prophets",
            "keywords": [
                    "nathan rebukes david",
                    "you are the man",
                    "parable of the ewe lamb",
                    "davids confession",
                    "davids sin with bathsheba"
            ]
    },
    {
            "title": "Solomon Asks for Wisdom",
            "book": "1 Kings",
            "chapter": 3,
            "startVerse": 3,
            "endVerse": 14,
            "category": "Kings & Prophets",
            "keywords": [
                    "solomon asks for wisdom",
                    "solomons wisdom",
                    "discerning heart",
                    "dream at gibeon",
                    "wise king"
            ]
    },
    {
            "title": "The Wisdom of Solomon (Two Mothers & The Baby)",
            "book": "1 Kings",
            "chapter": 3,
            "startVerse": 16,
            "endVerse": 28,
            "category": "Kings & Prophets",
            "keywords": [
                    "judgment of solomon",
                    "cut the baby in half",
                    "two mothers",
                    "true mother",
                    "wisdom of solomon"
            ]
    },
    {
            "title": "Elijah Fed by Ravens at Brook Cherith",
            "book": "1 Kings",
            "chapter": 17,
            "startVerse": 1,
            "endVerse": 6,
            "category": "Kings & Prophets",
            "keywords": [
                    "elijah fed by ravens",
                    "ravens bring bread and meat",
                    "brook cherith",
                    "drought in israel"
            ]
    },
    {
            "title": "Elijah and the Widow of Zarephath",
            "book": "1 Kings",
            "chapter": 17,
            "startVerse": 8,
            "endVerse": 24,
            "category": "Kings & Prophets",
            "keywords": [
                    "widow of zarephath",
                    "jar of flour and jug of oil",
                    "oil did not run dry",
                    "elijah raises widows son"
            ]
    },
    {
            "title": "Elijah on Mount Carmel (Fire from Heaven)",
            "book": "1 Kings",
            "chapter": 18,
            "startVerse": 20,
            "endVerse": 39,
            "category": "Kings & Prophets",
            "keywords": [
                    "elijah on mount carmel",
                    "prophets of baal",
                    "fire from heaven",
                    "altar drenched in water",
                    "the lord he is god"
            ]
    },
    {
            "title": "Elijah and the Still Small Voice",
            "book": "1 Kings",
            "chapter": 19,
            "startVerse": 9,
            "endVerse": 18,
            "category": "Kings & Prophets",
            "keywords": [
                    "still small voice",
                    "gentle whisper",
                    "mount horeb",
                    "cave",
                    "wind earthquake and fire",
                    "what are you doing here elijah"
            ]
    },
    {
            "title": "Elijah Taken to Heaven in a Chariot of Fire",
            "book": "2 Kings",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Kings & Prophets",
            "keywords": [
                    "elijah taken to heaven",
                    "chariot of fire",
                    "horses of fire",
                    "whirlwind",
                    "mantle of elijah",
                    "elisha receives double portion"
            ]
    },
    {
            "title": "Naaman Healed of Leprosy in the Jordan",
            "book": "2 Kings",
            "chapter": 5,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Kings & Prophets",
            "keywords": [
                    "naaman healed",
                    "wash in the jordan seven times",
                    "naaman the leper",
                    "servant girl",
                    "elisha and naaman"
            ]
    },
    {
            "title": "Elisha and the Floating Axe Head",
            "book": "2 Kings",
            "chapter": 6,
            "startVerse": 1,
            "endVerse": 7,
            "category": "Kings & Prophets",
            "keywords": [
                    "floating axe head",
                    "iron axe head floats",
                    "stick thrown in water",
                    "elisha miracle"
            ]
    },
    {
            "title": "The Valley of Dry Bones",
            "book": "Ezekiel",
            "chapter": 37,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Kings & Prophets",
            "keywords": [
                    "valley of dry bones",
                    "dry bones",
                    "prophesy to the bones",
                    "breath of life",
                    "ezekiels vision",
                    "can these bones live"
            ]
    },
    {
            "title": "The Fiery Furnace (Shadrach, Meshach & Abednego)",
            "book": "Daniel",
            "chapter": 3,
            "startVerse": 13,
            "endVerse": 28,
            "category": "Kings & Prophets",
            "keywords": [
                    "fiery furnace",
                    "shadrach meshach abednego",
                    "fourth man in the fire",
                    "king nebuchadnezzar",
                    "we will not bow"
            ]
    },
    {
            "title": "The Writing on the Wall (Mene Mene Tekel)",
            "book": "Daniel",
            "chapter": 5,
            "startVerse": 1,
            "endVerse": 30,
            "category": "Kings & Prophets",
            "keywords": [
                    "writing on the wall",
                    "handwriting on the wall",
                    "mene mene tekel upharsin",
                    "belshazzars feast",
                    "daniel interprets"
            ]
    },
    {
            "title": "Daniel in the Lions' Den",
            "book": "Daniel",
            "chapter": 6,
            "startVerse": 10,
            "endVerse": 23,
            "category": "Kings & Prophets",
            "keywords": [
                    "daniel in the lions den",
                    "lions den",
                    "king darius",
                    "angel shut the lions mouths",
                    "prayer three times a day"
            ]
    },
    {
            "title": "Jonah and the Big Fish",
            "book": "Jonah",
            "chapter": 1,
            "startVerse": 1,
            "endVerse": 17,
            "category": "Kings & Prophets",
            "keywords": [
                    "jonah and the whale",
                    "jonah and the fish",
                    "swallowed by a great fish",
                    "storm at sea",
                    "fleeing to tarshish"
            ]
    },
    {
            "title": "Jonah Preaches in Nineveh",
            "book": "Jonah",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 10,
            "category": "Kings & Prophets",
            "keywords": [
                    "nineveh repents",
                    "jonah in nineveh",
                    "forty days and nineveh overthrown",
                    "sackcloth and ashes",
                    "god relents"
            ]
    },
    {
            "title": "The Annunciation to Mary",
            "book": "Luke",
            "chapter": 1,
            "startVerse": 26,
            "endVerse": 38,
            "category": "Life of Jesus",
            "keywords": [
                    "the annunciation",
                    "angel gabriel to mary",
                    "you will conceive",
                    "virgin birth",
                    "favored one",
                    "nothing is impossible with god"
            ]
    },
    {
            "title": "The Birth of Jesus in Bethlehem",
            "book": "Luke",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 20,
            "category": "Life of Jesus",
            "keywords": [
                    "birth of jesus",
                    "christmas story",
                    "nativity",
                    "born in a manger",
                    "shepherds in the field",
                    "angels announce peace",
                    "bethlehem"
            ]
    },
    {
            "title": "The Visit of the Wise Men (Magi)",
            "book": "Matthew",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 12,
            "category": "Life of Jesus",
            "keywords": [
                    "wise men",
                    "the magi",
                    "star of bethlehem",
                    "gold frankincense and myrrh",
                    "gifts of the magi",
                    "king herod"
            ]
    },
    {
            "title": "Boy Jesus at the Temple",
            "book": "Luke",
            "chapter": 2,
            "startVerse": 41,
            "endVerse": 52,
            "category": "Life of Jesus",
            "keywords": [
                    "boy jesus at the temple",
                    "twelve year old jesus",
                    "in my fathers house",
                    "lost in jerusalem",
                    "listening to teachers"
            ]
    },
    {
            "title": "The Baptism of Jesus by John",
            "book": "Matthew",
            "chapter": 3,
            "startVerse": 13,
            "endVerse": 17,
            "category": "Life of Jesus",
            "keywords": [
                    "baptism of jesus",
                    "john the baptist baptizes jesus",
                    "river jordan",
                    "heavens opened",
                    "spirit like a dove",
                    "this is my beloved son"
            ]
    },
    {
            "title": "The Temptation of Jesus in the Wilderness",
            "book": "Matthew",
            "chapter": 4,
            "startVerse": 1,
            "endVerse": 11,
            "category": "Life of Jesus",
            "keywords": [
                    "temptation of jesus",
                    "fasted forty days",
                    "man shall not live on bread alone",
                    "devil tempts jesus",
                    "get behind me satan"
            ]
    },
    {
            "title": "Jesus Calls His First Disciples (Fishers of Men)",
            "book": "Matthew",
            "chapter": 4,
            "startVerse": 18,
            "endVerse": 22,
            "category": "Life of Jesus",
            "keywords": [
                    "calling of the disciples",
                    "fishers of men",
                    "peter and andrew",
                    "james and john",
                    "left their nets"
            ]
    },
    {
            "title": "The Wedding at Cana (Water into Wine)",
            "book": "John",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 11,
            "category": "Miracles of Jesus",
            "keywords": [
                    "wedding at cana",
                    "water into wine",
                    "first miracle of jesus",
                    "six stone water jars",
                    "best wine saved for last"
            ]
    },
    {
            "title": "Jesus Cleanses the Temple",
            "book": "John",
            "chapter": 2,
            "startVerse": 13,
            "endVerse": 22,
            "category": "Life of Jesus",
            "keywords": [
                    "cleansing the temple",
                    "money changers",
                    "overturned the tables",
                    "house of prayer",
                    "destroy this temple in three days"
            ]
    },
    {
            "title": "Jesus and Nicodemus (Born Again / John 3:16)",
            "book": "John",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 21,
            "category": "Life of Jesus",
            "keywords": [
                    "nicodemus",
                    "born again",
                    "john 3 16",
                    "god so loved the world",
                    "born of water and spirit",
                    "bronze snake in wilderness"
            ]
    },
    {
            "title": "The Samaritan Woman at the Well (Living Water)",
            "book": "John",
            "chapter": 4,
            "startVerse": 4,
            "endVerse": 26,
            "category": "Life of Jesus",
            "keywords": [
                    "woman at the well",
                    "samaritan woman",
                    "living water",
                    "jacobs well",
                    "worship in spirit and truth",
                    "i who speak to you am he"
            ]
    },
    {
            "title": "The Sermon on the Mount (The Beatitudes)",
            "book": "Matthew",
            "chapter": 5,
            "startVerse": 1,
            "endVerse": 12,
            "category": "Teachings of Jesus",
            "keywords": [
                    "sermon on the mount",
                    "the beatitudes",
                    "blessed are the poor in spirit",
                    "blessed are the meek",
                    "blessed are the peacemakers"
            ]
    },
    {
            "title": "Salt of the Earth and Light of the World",
            "book": "Matthew",
            "chapter": 5,
            "startVerse": 13,
            "endVerse": 16,
            "category": "Teachings of Jesus",
            "keywords": [
                    "salt of the earth",
                    "light of the world",
                    "city on a hill",
                    "lamp on a stand",
                    "let your light shine"
            ]
    },
    {
            "title": "The Lord's Prayer (Model Prayer)",
            "book": "Matthew",
            "chapter": 6,
            "startVerse": 9,
            "endVerse": 13,
            "category": "Teachings of Jesus",
            "keywords": [
                    "the lords prayer",
                    "our father who art in heaven",
                    "hallowed be your name",
                    "daily bread",
                    "forgive us our debts",
                    "model prayer"
            ]
    },
    {
            "title": "Do Not Worry (Birds of the Air & Lilies of the Field)",
            "book": "Matthew",
            "chapter": 6,
            "startVerse": 25,
            "endVerse": 34,
            "category": "Teachings of Jesus",
            "keywords": [
                    "do not worry",
                    "do not be anxious",
                    "birds of the air",
                    "lilies of the field",
                    "seek first the kingdom",
                    "tomorrow will worry about itself"
            ]
    },
    {
            "title": "The Wise and Foolish Builders",
            "book": "Matthew",
            "chapter": 7,
            "startVerse": 24,
            "endVerse": 27,
            "category": "Parables",
            "keywords": [
                    "wise and foolish builders",
                    "house built on the rock",
                    "house on the sand",
                    "rains fell and floods came"
            ]
    },
    {
            "title": "Jesus Calms the Storm (Peace, Be Still)",
            "book": "Mark",
            "chapter": 4,
            "startVerse": 35,
            "endVerse": 41,
            "category": "Miracles of Jesus",
            "keywords": [
                    "jesus calms the storm",
                    "peace be still",
                    "calming the sea",
                    "sleeping on a cushion",
                    "winds and waves obey him",
                    "quiet be still"
            ]
    },
    {
            "title": "Healing of the Gerasene Demoniac (Legion)",
            "book": "Mark",
            "chapter": 5,
            "startVerse": 1,
            "endVerse": 20,
            "category": "Miracles of Jesus",
            "keywords": [
                    "legion",
                    "gerasene demoniac",
                    "swine in the sea",
                    "pigs rush down the steep bank",
                    "my name is legion for we are many"
            ]
    },
    {
            "title": "Woman Healed by Touching Jesus's Cloak",
            "book": "Mark",
            "chapter": 5,
            "startVerse": 25,
            "endVerse": 34,
            "category": "Miracles of Jesus",
            "keywords": [
                    "woman with the issue of blood",
                    "touched his cloak",
                    "hem of his garment",
                    "daughter your faith has healed you",
                    "bleeding for twelve years"
            ]
    },
    {
            "title": "Jesus Raises Jairus's Daughter",
            "book": "Mark",
            "chapter": 5,
            "startVerse": 35,
            "endVerse": 43,
            "category": "Miracles of Jesus",
            "keywords": [
                    "jairus daughter",
                    "talitha koum",
                    "little girl arise",
                    "not dead but asleep"
            ]
    },
    {
            "title": "The Feeding of the 5,000",
            "book": "Matthew",
            "chapter": 14,
            "startVerse": 13,
            "endVerse": 21,
            "category": "Miracles of Jesus",
            "keywords": [
                    "feeding of the 5000",
                    "feeding 5000",
                    "five loaves and two fish",
                    "loaves and fish",
                    "twelve baskets leftover",
                    "miracle of bread"
            ]
    },
    {
            "title": "Jesus and Peter Walk on Water",
            "book": "Matthew",
            "chapter": 14,
            "startVerse": 22,
            "endVerse": 33,
            "category": "Miracles of Jesus",
            "keywords": [
                    "jesus walks on water",
                    "peter walks on water",
                    "lord save me",
                    "you of little faith why did you doubt",
                    "walking on the sea"
            ]
    },
    {
            "title": "The Transfiguration of Jesus",
            "book": "Matthew",
            "chapter": 17,
            "startVerse": 1,
            "endVerse": 9,
            "category": "Life of Jesus",
            "keywords": [
                    "the transfiguration",
                    "moses and elijah",
                    "face shone like the sun",
                    "clothes white as light",
                    "bright cloud",
                    "listen to him"
            ]
    },
    {
            "title": "Healing of the Man Born Blind at Siloam",
            "book": "John",
            "chapter": 9,
            "startVerse": 1,
            "endVerse": 11,
            "category": "Miracles of Jesus",
            "keywords": [
                    "healing blind man",
                    "pool of siloam",
                    "mud on the eyes",
                    "i was blind now i see",
                    "born blind"
            ]
    },
    {
            "title": "The Good Samaritan",
            "book": "Luke",
            "chapter": 10,
            "startVerse": 25,
            "endVerse": 37,
            "category": "Parables",
            "keywords": [
                    "the good samaritan",
                    "parable of good samaritan",
                    "who is my neighbor",
                    "beaten by robbers",
                    "priest and levite passed by",
                    "oil and wine"
            ]
    },
    {
            "title": "The Parable of the Prodigal Son",
            "book": "Luke",
            "chapter": 15,
            "startVerse": 11,
            "endVerse": 32,
            "category": "Parables",
            "keywords": [
                    "prodigal son",
                    "the lost son",
                    "loving father",
                    "ran to embrace him",
                    "feeding pigs",
                    "fatted calf",
                    "elder brother"
            ]
    },
    {
            "title": "The Parable of the Lost Sheep",
            "book": "Luke",
            "chapter": 15,
            "startVerse": 1,
            "endVerse": 7,
            "category": "Parables",
            "keywords": [
                    "lost sheep",
                    "parable of the lost sheep",
                    "ninety nine",
                    "leaves the 99",
                    "rejoices over one sheep found"
            ]
    },
    {
            "title": "The Ten Lepers Cleansed (The Grateful Samaritan)",
            "book": "Luke",
            "chapter": 17,
            "startVerse": 11,
            "endVerse": 19,
            "category": "Miracles of Jesus",
            "keywords": [
                    "ten lepers",
                    "healing ten lepers",
                    "one returned to give thanks",
                    "where are the nine",
                    "grateful samaritan"
            ]
    },
    {
            "title": "Jesus Raises Lazarus from the Dead",
            "book": "John",
            "chapter": 11,
            "startVerse": 32,
            "endVerse": 44,
            "category": "Miracles of Jesus",
            "keywords": [
                    "raising of lazarus",
                    "lazarus come forth",
                    "jesus wept",
                    "dead four days",
                    "martha and mary",
                    "i am the resurrection and the life"
            ]
    },
    {
            "title": "Blind Bartimaeus Receives His Sight",
            "book": "Mark",
            "chapter": 10,
            "startVerse": 46,
            "endVerse": 52,
            "category": "Miracles of Jesus",
            "keywords": [
                    "blind bartimaeus",
                    "son of david have mercy on me",
                    "threw his cloak aside",
                    "rabbi i want to see",
                    "healed on road to jericho"
            ]
    },
    {
            "title": "Zacchaeus the Tax Collector in the Sycamore Tree",
            "book": "Luke",
            "chapter": 19,
            "startVerse": 1,
            "endVerse": 10,
            "category": "Life of Jesus",
            "keywords": [
                    "zacchaeus",
                    "sycamore tree",
                    "wee little man",
                    "tax collector",
                    "come down zacchaeus",
                    "salvation to this house"
            ]
    },
    {
            "title": "The Triumphal Entry (Palm Sunday)",
            "book": "Matthew",
            "chapter": 21,
            "startVerse": 1,
            "endVerse": 11,
            "category": "Passion & Resurrection",
            "keywords": [
                    "palm sunday",
                    "triumphal entry",
                    "hosanna to the son of david",
                    "riding on a donkey",
                    "palm branches",
                    "blessed is he who comes"
            ]
    },
    {
            "title": "The Widow's Offering (Two Small Copper Coins)",
            "book": "Luke",
            "chapter": 21,
            "startVerse": 1,
            "endVerse": 4,
            "category": "Teachings of Jesus",
            "keywords": [
                    "widows mite",
                    "widows offering",
                    "two small copper coins",
                    "gave all she had to live on",
                    "temple treasury"
            ]
    },
    {
            "title": "The Last Supper (The Lord's Supper)",
            "book": "Matthew",
            "chapter": 26,
            "startVerse": 20,
            "endVerse": 30,
            "category": "Passion & Resurrection",
            "keywords": [
                    "the last supper",
                    "lords supper",
                    "holy communion",
                    "this is my body",
                    "blood of the new covenant",
                    "passover meal with disciples"
            ]
    },
    {
            "title": "Jesus Washes the Disciples' Feet",
            "book": "John",
            "chapter": 13,
            "startVerse": 1,
            "endVerse": 17,
            "category": "Life of Jesus",
            "keywords": [
                    "jesus washes disciples feet",
                    "washing feet",
                    "towel and basin",
                    "peter protests",
                    "servant leader",
                    "example to follow"
            ]
    },
    {
            "title": "The Agony in the Garden of Gethsemane",
            "book": "Matthew",
            "chapter": 26,
            "startVerse": 36,
            "endVerse": 46,
            "category": "Passion & Resurrection",
            "keywords": [
                    "garden of gethsemane",
                    "not my will but yours",
                    "disciples sleeping",
                    "cup be taken from me",
                    "watch and pray"
            ]
    },
    {
            "title": "Betrayal and Arrest of Jesus (Judas's Kiss)",
            "book": "Matthew",
            "chapter": 26,
            "startVerse": 47,
            "endVerse": 56,
            "category": "Passion & Resurrection",
            "keywords": [
                    "judas kiss",
                    "betrayal of jesus",
                    "arrest of jesus",
                    "thirty pieces of silver",
                    "sword in garden",
                    "peters sword cuts ear"
            ]
    },
    {
            "title": "Peter Denies Jesus Three Times",
            "book": "Matthew",
            "chapter": 26,
            "startVerse": 69,
            "endVerse": 75,
            "category": "Passion & Resurrection",
            "keywords": [
                    "peter denies jesus",
                    "three denials",
                    "rooster crows",
                    "i do not know the man",
                    "wept bitterly"
            ]
    },
    {
            "title": "The Crucifixion and Death of Jesus on the Cross",
            "book": "Luke",
            "chapter": 23,
            "startVerse": 32,
            "endVerse": 49,
            "category": "Passion & Resurrection",
            "keywords": [
                    "the crucifixion",
                    "jesus on the cross",
                    "calvary",
                    "golgotha",
                    "father forgive them",
                    "today in paradise",
                    "curtain torn in two"
            ]
    },
    {
            "title": "The Resurrection of Jesus (The Empty Tomb)",
            "book": "John",
            "chapter": 20,
            "startVerse": 1,
            "endVerse": 18,
            "category": "Passion & Resurrection",
            "keywords": [
                    "resurrection of jesus",
                    "empty tomb",
                    "he is risen",
                    "mary magdalene at tomb",
                    "stone rolled away",
                    "rabboni"
            ]
    },
    {
            "title": "The Road to Emmaus",
            "book": "Luke",
            "chapter": 24,
            "startVerse": 13,
            "endVerse": 35,
            "category": "Passion & Resurrection",
            "keywords": [
                    "road to emmaus",
                    "cleopas",
                    "hearts burning within us",
                    "breaking of the bread",
                    "stranger on the road"
            ]
    },
    {
            "title": "Jesus Appears to Doubting Thomas",
            "book": "John",
            "chapter": 20,
            "startVerse": 24,
            "endVerse": 29,
            "category": "Passion & Resurrection",
            "keywords": [
                    "doubting thomas",
                    "thomas believes",
                    "put your finger in my wounds",
                    "my lord and my god",
                    "blessed are those who have not seen"
            ]
    },
    {
            "title": "The Great Commission",
            "book": "Matthew",
            "chapter": 28,
            "startVerse": 16,
            "endVerse": 20,
            "category": "Passion & Resurrection",
            "keywords": [
                    "the great commission",
                    "go into all the world",
                    "make disciples of all nations",
                    "baptizing them",
                    "i am with you always"
            ]
    },
    {
            "title": "The Ascension of Jesus into Heaven",
            "book": "Acts",
            "chapter": 1,
            "startVerse": 6,
            "endVerse": 11,
            "category": "Early Church",
            "keywords": [
                    "ascension of jesus",
                    "taken up to heaven",
                    "cloud hid him",
                    "two men in white",
                    "will return in the same way"
            ]
    },
    {
            "title": "The Day of Pentecost (Coming of the Holy Spirit)",
            "book": "Acts",
            "chapter": 2,
            "startVerse": 1,
            "endVerse": 14,
            "category": "Early Church",
            "keywords": [
                    "day of pentecost",
                    "holy spirit poured out",
                    "tongues of fire",
                    "rushing mighty wind",
                    "speaking in tongues",
                    "upper room"
            ]
    },
    {
            "title": "Peter Heals the Lame Man at the Beautiful Gate",
            "book": "Acts",
            "chapter": 3,
            "startVerse": 1,
            "endVerse": 10,
            "category": "Early Church",
            "keywords": [
                    "lame man healed",
                    "silver and gold have i none",
                    "in the name of jesus walk",
                    "beautiful gate",
                    "walking and leaping"
            ]
    },
    {
            "title": "The Stoning of Stephen (First Martyr)",
            "book": "Acts",
            "chapter": 7,
            "startVerse": 54,
            "endVerse": 60,
            "category": "Early Church",
            "keywords": [
                    "stoning of stephen",
                    "first christian martyr",
                    "i see the heavens open",
                    "son of man standing",
                    "do not hold this sin against them"
            ]
    },
    {
            "title": "Philip and the Ethiopian Eunuch",
            "book": "Acts",
            "chapter": 8,
            "startVerse": 26,
            "endVerse": 40,
            "category": "Early Church",
            "keywords": [
                    "philip and ethiopian eunuch",
                    "reading isaiah",
                    "chariot in the desert",
                    "here is water for baptism",
                    "went on his way rejoicing"
            ]
    },
    {
            "title": "The Conversion of Saul (Road to Damascus)",
            "book": "Acts",
            "chapter": 9,
            "startVerse": 1,
            "endVerse": 19,
            "category": "Early Church",
            "keywords": [
                    "road to damascus",
                    "conversion of saul",
                    "paul converted",
                    "why do you persecute me",
                    "blinded by light",
                    "scales fell from eyes",
                    "ananias"
            ]
    },
    {
            "title": "Peter's Vision of the Sheet of Animals",
            "book": "Acts",
            "chapter": 10,
            "startVerse": 9,
            "endVerse": 23,
            "category": "Early Church",
            "keywords": [
                    "peters vision",
                    "sheet let down from heaven",
                    "unclean animals",
                    "do not call unclean what god made clean",
                    "cornelius"
            ]
    },
    {
            "title": "Peter Miraculously Rescued from Prison by an Angel",
            "book": "Acts",
            "chapter": 12,
            "startVerse": 1,
            "endVerse": 17,
            "category": "Early Church",
            "keywords": [
                    "peter rescued from prison",
                    "angel in prison",
                    "chains fell off",
                    "iron gate opened",
                    "rhoda at the door",
                    "prayers of the church"
            ]
    },
    {
            "title": "Paul and Silas in Prison (Midnight Earthquake)",
            "book": "Acts",
            "chapter": 16,
            "startVerse": 22,
            "endVerse": 34,
            "category": "Early Church",
            "keywords": [
                    "paul and silas in prison",
                    "singing hymns at midnight",
                    "earthquake in philippi",
                    "philippian jailer",
                    "what must i do to be saved"
            ]
    },
    {
            "title": "Paul's Sermon on Mars Hill in Athens (Areopagus)",
            "book": "Acts",
            "chapter": 17,
            "startVerse": 22,
            "endVerse": 31,
            "category": "Early Church",
            "keywords": [
                    "mars hill",
                    "areopagus",
                    "to an unknown god",
                    "in him we live and move",
                    "altar to the unknown god",
                    "athens sermon"
            ]
    },
    {
            "title": "The Armor of God",
            "book": "Ephesians",
            "chapter": 6,
            "startVerse": 10,
            "endVerse": 18,
            "category": "Epistles",
            "keywords": [
                    "armor of god",
                    "full armor of god",
                    "belt of truth",
                    "breastplate of righteousness",
                    "shield of faith",
                    "helmet of salvation",
                    "sword of the spirit",
                    "spiritual warfare"
            ]
    },
    {
            "title": "The Love Chapter (1 Corinthians 13)",
            "book": "1 Corinthians",
            "chapter": 13,
            "startVerse": 1,
            "endVerse": 13,
            "category": "Epistles",
            "keywords": [
                    "love chapter",
                    "1 corinthians 13",
                    "love is patient love is kind",
                    "faith hope and love",
                    "greatest of these is love",
                    "love never fails"
            ]
    },
    {
            "title": "The Hall of Faith (By Faith)",
            "book": "Hebrews",
            "chapter": 11,
            "startVerse": 1,
            "endVerse": 40,
            "category": "Epistles",
            "keywords": [
                    "hall of faith",
                    "heroes of faith",
                    "by faith",
                    "faith is confidence",
                    "cloud of witnesses",
                    "faith of abraham"
            ]
    },
    {
            "title": "The River of Life and The New Jerusalem",
            "book": "Revelation",
            "chapter": 21,
            "startVerse": 1,
            "endVerse": 7,
            "category": "Revelation",
            "keywords": [
                    "new jerusalem",
                    "new heaven and new earth",
                    "no more tears",
                    "no more death or crying",
                    "all things new",
                    "river of life"
            ]
    }
];

    /**
     * Searches for Bible stories and curated topics matching the query
     */
    function searchBibleStories(query) {
        if (!query) return [];
        const q = query.trim();
        if (q.length < 2) return [];

        // 1. First priority: Use the 1,447 curated topics search engine if loaded
        if (typeof window.topicSearch === 'function') {
            const hits = window.topicSearch(q, { limit: 5 });
            if (hits && hits.length > 0) {
                return hits.map(h => ({
                    title: h.title,
                    book: h.book,
                    bookIndex: typeof h.bookIndex === 'number' ? h.bookIndex : findBookIndex(h.book),
                    chapter: h.startChapter,
                    startVerse: h.startVerse,
                    endVerse: h.endVerse || h.startVerse,
                    type: h.type,
                    level: h.level,
                    ref: h.ref,
                    category: h.type
                }));
            }
        }

        // 2. Fallback to local BIBLE_STORIES if window.topicSearch not initialized
        const qClean = q.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
        const qWords = qClean.split(' ').filter(w => w.length > 0);
        if (qWords.length === 0) return [];

        const scored = [];

        for (const story of BIBLE_STORIES) {
            let score = 0;
            const titleClean = story.title.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();

            // Exact match with title
            if (titleClean === qClean) {
                score += 220;
            } else if (titleClean.startsWith(qClean)) {
                score += 140;
            } else if (titleClean.includes(qClean)) {
                score += 85;
            }

            // Keyword match
            for (const kw of story.keywords) {
                const kwClean = kw.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
                if (kwClean === qClean) {
                    score += 180;
                    break;
                } else if (kwClean.startsWith(qClean)) {
                    score += 110;
                    break;
                } else if (kwClean.includes(qClean)) {
                    score += 70;
                    break;
                }
            }

            // Individual word matches
            let wordMatches = 0;
            for (const word of qWords) {
                const inTitle = titleClean.includes(word);
                const inKeywords = story.keywords.some(kw => kw.toLowerCase().includes(word));
                if (inTitle || inKeywords) {
                    wordMatches++;
                }
            }

            if (wordMatches === qWords.length && qWords.length > 1) {
                score += 80;
            } else if (wordMatches > 0) {
                score += wordMatches * 15;
            }

            if (score > 35) {
                scored.push({ story, score });
            }
        }

        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, 4).map(s => s.story);
    }

    function parseBibleReference(input) {
        if (!input || typeof input !== 'string') return null;
        let s = input.trim().replace(/\s+/g, ' ');

        // Pattern 1: Book Chapter:StartVerse-EndVerse (with colon, dot, or v/verse)
        // e.g. Gen 3:2, Gen 3:4-5, Gen 3.2, 1 Cor 13:4-8, 1Cor13:4
        let m = s.match(/^(.*?)(?:(?<=[a-zA-Z\u0B80-\u0BFF])\s*|\s+)(\d+)\s*[:.]\s*(\d+)(?:\s*(?:-|–|to|,)\s*(\d+))?$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                const startVerse = parseInt(m[3]);
                const endVerse = m[4] ? parseInt(m[4]) : startVerse;
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: Math.max(startVerse, 1),
                    endVerse: Math.max(endVerse, startVerse)
                };
            }
        }

        // Pattern 2: Book Chapter StartVerse-EndVerse or Book Chapter StartVerse (space-separated)
        // e.g. Gen 3 2, Gen 3 4-5, Gen 3 4 - 5, 1 John 1 9, 1 Cor 13 4, ஆதி 3 2
        m = s.match(/^(.*?)\s+(\d+)\s+(\d+)(?:\s*(?:-|–|to|,)\s*(\d+))?$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                const startVerse = parseInt(m[3]);
                const endVerse = m[4] ? parseInt(m[4]) : startVerse;
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: Math.max(startVerse, 1),
                    endVerse: Math.max(endVerse, startVerse)
                };
            }
        }

        // Pattern 3: Book Chapter (e.g. Gen 3, 1 Cor 13, Ps 23, 1Cor13)
        m = s.match(/^(.*?)(?:(?<=[a-zA-Z\u0B80-\u0BFF])\s*|\s+)(\d+)$/);
        if (m) {
            const bookIdx = findBookIndex(m[1]);
            if (bookIdx !== -1) {
                const book = bibleBooks[bookIdx];
                const chapter = parseInt(m[2]);
                return {
                    bookIndex: bookIdx,
                    book,
                    chapter: Math.min(Math.max(chapter, 1), book.chapters),
                    startVerse: null,
                    endVerse: null
                };
            }
        }

        // Pattern 4: Just book name (e.g. Genesis, Matthew)
        const bookIdx = findBookIndex(s);
        if (bookIdx !== -1) {
            return {
                bookIndex: bookIdx,
                book: bibleBooks[bookIdx],
                chapter: 1,
                startVerse: null,
                endVerse: null,
                isBookOnly: true
            };
        }

        return null;
    }

    /**
     * Executes navigation to a scripture reference
     */
    async function openScriptureReference(ref) {
        if (!ref) return;

        // Show story name or passage reference in top search bar so user can see it and cancel/clear it
        const topSearchInput = document.getElementById('desktop-top-search-input');
        const topClearBtn = document.getElementById('desktop-top-clear-btn');
        const topSearchBox = document.getElementById('desktop-top-search-box');
        const topDropdown = document.getElementById('desktop-top-search-dropdown');

        if (topDropdown) {
            topDropdown.style.display = 'none';
            topDropdown.innerHTML = '';
        }

        if (topSearchInput) {
            const displayName = ref.storyTitle || ref.title || (ref.book ? `${ref.book.name} ${ref.chapter}${ref.startVerse ? ':' + ref.startVerse + (ref.endVerse && ref.endVerse !== ref.startVerse ? '-' + ref.endVerse : '') : ''}` : '');
            if (displayName) {
                topSearchInput.value = displayName;
                if (topClearBtn) {
                    topClearBtn.style.display = 'flex';
                }
                if (topSearchBox && (ref.isStory || ref.storyTitle)) {
                    topSearchBox.classList.add('story-mode-active');
                }
            }
            topSearchInput.blur();
        }

        // 1. Close any open search view
        const searchBar = document.getElementById('search-bar');
        if (searchBar && searchBar.style.display !== 'none') {
            const backBtn = document.getElementById('back-from-search');
            if (backBtn) backBtn.click();
        }

        // 2. Close bottom sheets or popups
        const bottomSheet = document.getElementById('verse-actions-bottom-sheet');
        if (bottomSheet && bottomSheet.classList.contains('visible')) {
            bottomSheet.classList.remove('visible');
            document.body.classList.remove('bottom-sheet-open');
        }

        // 3. Load the book & chapter if different
        const targetBook = ref.bookIndex;
        const targetChapter = ref.chapter || 1;

        if (typeof currentBook === 'undefined' || currentBook !== targetBook || currentChapter !== targetChapter) {
            if (typeof loadBook === 'function') {
                await loadBook(targetBook, targetChapter);
            }
        }

        // 4. Handle Verse Scrolling and Highlighting
        if (ref.startVerse) {
            const sVerse = ref.startVerse;
            const eVerse = ref.endVerse || sVerse;

            setTimeout(() => {
                // A. Update verses column in left pane if present
                const versesColumn = document.querySelector('.verses-column');
                if (versesColumn) {
                    versesColumn.querySelectorAll('.number-item').forEach(v => v.classList.remove('active'));
                    for (let v = sVerse; v <= eVerse; v++) {
                        const item = versesColumn.querySelector(`.number-item[data-verse="${v}"]`);
                        if (item) item.classList.add('active');
                    }
                    const startItem = versesColumn.querySelector(`.number-item[data-verse="${sVerse}"]`);
                    if (startItem) {
                        startItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }

                // B. Scroll smoothly to start verse
                if (typeof scrollToVerse === 'function') {
                    scrollToVerse(sVerse);
                } else {
                    const startEl = document.querySelector(`.verse-line[data-verse="${sVerse}"]`);
                    if (startEl) startEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // C. Highlight target verses matching left-pane selection style (only #303234, no border, no shadow)
                const contentArea = document.querySelector('.scripture-text') || document;
                contentArea.querySelectorAll('.verse-line').forEach(v => {
                    v.classList.remove('multi-highlighted');
                    v.classList.remove('highlighted');
                    v.classList.remove('left-pane-selected');
                    v.classList.remove('search-jump-highlight');
                    v.style.backgroundColor = '';
                });
                contentArea.querySelectorAll('.verse-container').forEach(v => {
                    v.classList.remove('multi-highlighted');
                    v.classList.remove('highlighted');
                    v.classList.remove('left-pane-selected');
                    v.classList.remove('search-jump-highlight');
                    v.style.backgroundColor = '';
                });

                for (let v = sVerse; v <= eVerse; v++) {
                    const line = contentArea.querySelector(`.verse-line[data-verse="${v}"]`);
                    if (line) {
                        line.classList.remove('multi-highlighted');
                        line.classList.remove('highlighted');
                        line.classList.add('left-pane-selected');
                        line.classList.add('search-jump-highlight');
                    }
                    const container = contentArea.querySelector(`.verse-container[data-verse="${v}"]`);
                    if (container) {
                        container.classList.remove('multi-highlighted');
                        container.classList.remove('highlighted');
                        container.classList.add('left-pane-selected');
                    }
                }

                // D. Record verse in history manager
                if (window.VerseHistoryManager && typeof window.VerseHistoryManager.recordVerse === 'function') {
                    window.VerseHistoryManager.recordVerse(targetBook, targetChapter, sVerse);
                }
            }, 320);
        } else {
            // Chapter only: scroll to top of reading area
            setTimeout(() => {
                const contentArea = document.querySelector('.content-area');
                if (contentArea) {
                    contentArea.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 200);
        }
    }

    /**
     * Executes general Bible text search
     */
    function triggerGeneralSearch(query) {
        if (!query || !query.trim()) return;
        const q = query.trim();

        // Open the search interface
        if (typeof window.openSearch === 'function') {
            window.openSearch();
        } else {
            const searchBtn = document.getElementById('search-btn');
            if (searchBtn) searchBtn.click();
        }

        const searchInput = document.getElementById('search-input');
        setTimeout(() => {
            if (searchInput) {
                searchInput.value = q;
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true });
                searchInput.dispatchEvent(enterEvent);
            }
        }, 100);
    }

    function clearSearchHighlights() {
        const contentArea = document.querySelector('.scripture-text') || document;
        contentArea.querySelectorAll('.verse-line.search-jump-highlight').forEach(el => {
            el.classList.remove('search-jump-highlight');
            el.classList.remove('left-pane-selected');
            el.style.backgroundColor = '';
        });
        contentArea.querySelectorAll('.verse-container.left-pane-selected').forEach(el => {
            el.classList.remove('left-pane-selected');
            el.style.backgroundColor = '';
        });
        const versesColumn = document.querySelector('.verses-column');
        if (versesColumn) {
            versesColumn.querySelectorAll('.number-item.active').forEach(v => v.classList.remove('active'));
        }
    }

    // Initialize the Desktop Search Bar
    function init() {
        buildLookupTable();

        const searchWrapper = document.getElementById('desktop-top-search-wrapper');
        const searchBox = document.getElementById('desktop-top-search-box');
        const searchInput = document.getElementById('desktop-top-search-input');
        const clearBtn = document.getElementById('desktop-top-clear-btn');
        const shortcutBtn = document.getElementById('desktop-top-search-shortcut-btn');
        const dropdown = document.getElementById('desktop-top-search-dropdown');

        if (!searchWrapper || !searchInput || !dropdown) return;

        let selectedIndex = -1;
        let currentItems = [];
        let isStoryMode = false;

        function toggleStoryMode(forceState) {
            isStoryMode = typeof forceState === 'boolean' ? forceState : !isStoryMode;
            if (shortcutBtn) {
                shortcutBtn.classList.toggle('active', isStoryMode);
                shortcutBtn.setAttribute('aria-pressed', isStoryMode ? 'true' : 'false');
                shortcutBtn.title = isStoryMode
                    ? 'Story Search is ON (Click / or press Alt+S to switch to Verse search)'
                    : 'Toggle Story Search (Click or press /)';
            }
            if (searchBox) {
                searchBox.classList.toggle('story-mode-active', isStoryMode);
            }
            if (searchInput) {
                searchInput.placeholder = isStoryMode
                    ? 'Search stories & topics (e.g. David and Goliath, Creation)...'
                    : 'Search passage or verse (e.g. Psalm 1:3, John 3:16)...';
                if (document.activeElement === searchInput || searchInput.value.trim().length > 0) {
                    renderDropdown(searchInput.value);
                }
            }
        }

        if (shortcutBtn) {
            shortcutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleStoryMode();
                if (searchInput) {
                    searchInput.focus();
                }
            });
        }

        function hideDropdown() {
            dropdown.style.display = 'none';
            dropdown.innerHTML = '';
            selectedIndex = -1;
            currentItems = [];
        }

        function showDropdown() {
            dropdown.style.display = 'block';
        }

        function updateSelection() {
            const elements = dropdown.querySelectorAll('.desktop-search-item');
            elements.forEach((el, idx) => {
                if (idx === selectedIndex) {
                    el.classList.add('selected');
                    el.scrollIntoView({ block: 'nearest' });
                } else {
                    el.classList.remove('selected');
                }
            });
        }

        function renderDropdown(value) {
            const trimmed = value.trim();
            const activeInStoryMode = isStoryMode || trimmed.startsWith('/');
            const cleanQuery = trimmed.startsWith('/') ? trimmed.replace(/^\/+/, '').trim() : trimmed;

            if (!cleanQuery) {
                renderDefaultSuggestions();
                return;
            }

            let html = '';
            currentItems = [];

            if (activeInStoryMode) {
                // STORY MODE: Search topics & stories only
                const matchingStories = searchBibleStories(cleanQuery);
                if (matchingStories && matchingStories.length > 0) {
                    html += '<div class="desktop-search-section-title">Bible Topic / Story</div>';
                    matchingStories.forEach(story => {
                        const bIdx = typeof story.bookIndex === 'number' ? story.bookIndex : findBookIndex(story.book);
                        if (bIdx === -1) return;
                        const book = bibleBooks[bIdx];
                        const vRange = story.startVerse ? (story.startVerse === story.endVerse ? `:${story.startVerse}` : `:${story.startVerse}–${story.endVerse}`) : '';
                        const storyRef = {
                            bookIndex: bIdx,
                            book: book,
                            chapter: story.chapter,
                            startVerse: story.startVerse,
                            endVerse: story.endVerse,
                            isStory: true,
                            storyTitle: story.title
                        };

                        const typeLabel = (story.type || 'Story').replace('-', ' ').toUpperCase();
                        html += `
                            <div class="desktop-search-item hero-match story-match" data-action="story" data-index="${currentItems.length}">
                                <div class="desktop-search-item-left">
                                    <div class="desktop-search-item-icon story-icon">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                    <div class="desktop-search-item-details">
                                        <div class="desktop-search-item-title">${escapeHtml(story.title)}</div>
                                        <div class="desktop-search-item-subtitle">${story.ref || `${book.name} ${story.chapter}${vRange}`}</div>
                                    </div>
                                </div>
                                <span class="desktop-search-item-badge">${escapeHtml(typeLabel)}</span>
                            </div>
                        `;
                        currentItems.push({ type: 'story', data: storyRef });
                    });
                } else {
                    html += `
                        <div class="desktop-search-section-title">No Stories Found</div>
                        <div style="padding: 10px 14px; font-size: 0.82rem; color: #71717a;">
                            No story matching "${escapeHtml(trimmed)}". Try searching characters, events, or keywords like "Creation", "David", "Exodus".
                        </div>
                    `;
                }

                // General search option in story mode
                html += `
                    <div class="desktop-search-section-title">Search Text</div>
                    <div class="desktop-search-item" data-action="text-search" data-index="${currentItems.length}">
                        <div class="desktop-search-item-left">
                            <div class="desktop-search-item-icon text-search">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <div class="desktop-search-item-details">
                                <div class="desktop-search-item-title">Search for "${escapeHtml(trimmed)}"</div>
                                <div class="desktop-search-item-subtitle">Find verses containing "${escapeHtml(trimmed)}"</div>
                            </div>
                        </div>
                        <span class="desktop-search-item-badge">Search</span>
                    </div>
                `;
                currentItems.push({ type: 'text-search', query: trimmed });

                dropdown.innerHTML = html;
                selectedIndex = 0;
                updateSelection();
                showDropdown();
                attachDropdownEvents(null);
                return;
            }

            // VERSE MODE (DEFAULT):
            // Always parse reference and search passage / text
            const ref = parseBibleReference(trimmed);

            // 1. Direct Passage Match
            if (ref) {
                const vRange = ref.startVerse
                    ? (ref.startVerse === ref.endVerse ? `:${ref.startVerse}` : `:${ref.startVerse}–${ref.endVerse}`)
                    : '';
                const vTextDesc = ref.startVerse
                    ? (ref.startVerse === ref.endVerse ? `Jump to verse ${ref.startVerse}` : `Jump to verses ${ref.startVerse} to ${ref.endVerse}`)
                    : `Open chapter ${ref.chapter}`;

                html += `
                    <div class="desktop-search-section-title">Passage</div>
                    <div class="desktop-search-item hero-match" data-action="passage" data-index="${currentItems.length}">
                        <div class="desktop-search-item-left">
                            <div class="desktop-search-item-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <div class="desktop-search-item-details">
                                <div class="desktop-search-item-title">${ref.book.name} ${ref.chapter}${vRange}</div>
                                <div class="desktop-search-item-subtitle">${vTextDesc}</div>
                            </div>
                        </div>
                        <span class="desktop-search-item-badge">↵ Jump</span>
                    </div>
                `;
                currentItems.push({ type: 'passage', data: ref });

                // If user typed book only, show quick chapter chips
                if (ref.isBookOnly) {
                    html += `
                        <div class="desktop-search-section-title">Jump to Chapter</div>
                        <div class="desktop-search-chips-container">
                    `;
                    const maxChips = Math.min(ref.book.chapters, 15);
                    for (let c = 1; c <= maxChips; c++) {
                        html += `<button type="button" class="desktop-search-chip" data-chapter="${c}">Ch ${c}</button>`;
                    }
                    if (ref.book.chapters > maxChips) {
                        html += `<span class="desktop-search-item-subtitle" style="padding: 4px 6px;">+${ref.book.chapters - maxChips} more</span>`;
                    }
                    html += `</div>`;
                }
            }

            // 2. General search action option
            html += `
                <div class="desktop-search-section-title">Search Text</div>
                <div class="desktop-search-item" data-action="text-search" data-index="${currentItems.length}">
                    <div class="desktop-search-item-left">
                        <div class="desktop-search-item-icon text-search">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div class="desktop-search-item-details">
                            <div class="desktop-search-item-title">Search for "${escapeHtml(trimmed)}"</div>
                            <div class="desktop-search-item-subtitle">Find verses containing "${escapeHtml(trimmed)}"</div>
                        </div>
                    </div>
                    <span class="desktop-search-item-badge">Search</span>
                </div>
            `;
            currentItems.push({ type: 'text-search', query: trimmed });

            dropdown.innerHTML = html;
            selectedIndex = 0; // Default select first item
            updateSelection();
            showDropdown();
            attachDropdownEvents(ref);
        }

        function renderDefaultSuggestions() {
            const defaults = isStoryMode ? [
                { bookName: 'Genesis', chapter: 1, startVerse: 6, endVerse: 8, title: 'Creation: Day 2', desc: 'The Sky & Waters Above (Gen 1:6–8)', isStory: true },
                { bookName: '1 Samuel', chapter: 17, startVerse: 32, endVerse: 51, title: 'David and Goliath', desc: 'Five smooth stones (1 Sam 17)', isStory: true },
                { bookName: 'Genesis', chapter: 6, startVerse: 9, endVerse: 22, title: "Noah's Ark", desc: 'Building the ark of refuge (Gen 6:9–22)', isStory: true },
                { bookName: 'Luke', chapter: 10, startVerse: 25, endVerse: 37, title: 'The Good Samaritan', desc: 'Who is my neighbor? (Luke 10:25–37)', isStory: true }
            ] : [
                { bookName: 'Genesis', chapter: 1, startVerse: 1, endVerse: 1, title: 'Genesis 1:1', desc: 'In the beginning God created heaven and earth', isStory: false },
                { bookName: 'Psalms', chapter: 23, startVerse: 1, endVerse: 1, title: 'Psalm 23:1', desc: 'The Lord is my shepherd', isStory: false },
                { bookName: 'John', chapter: 3, startVerse: 16, endVerse: 16, title: 'John 3:16', desc: 'God so loved the world', isStory: false },
                { bookName: 'Romans', chapter: 8, startVerse: 28, endVerse: 28, title: 'Romans 8:28', desc: 'All things work together for good', isStory: false }
            ];

            let html = `<div class="desktop-search-section-title">${isStoryMode ? 'Featured Stories & Topics' : 'Popular Passages'}</div>`;
            currentItems = [];

            defaults.forEach((d) => {
                const bIdx = findBookIndex(d.bookName);
                if (bIdx !== -1) {
                    const book = bibleBooks[bIdx];
                    const iconSvg = d.isStory
                        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>`
                        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>`;

                    html += `
                        <div class="desktop-search-item" data-action="${d.isStory ? 'story' : 'passage'}" data-index="${currentItems.length}">
                            <div class="desktop-search-item-left">
                                <div class="desktop-search-item-icon ${d.isStory ? 'story-icon' : ''}">
                                    ${iconSvg}
                                </div>
                                <div class="desktop-search-item-details">
                                    <div class="desktop-search-item-title">${d.title}</div>
                                    <div class="desktop-search-item-subtitle">${book.name} • ${d.desc}</div>
                                </div>
                            </div>
                            <span class="desktop-search-item-badge">Jump</span>
                        </div>
                    `;
                    currentItems.push({
                        type: d.isStory ? 'story' : 'passage',
                        data: {
                            bookIndex: bIdx,
                            book,
                            chapter: d.chapter,
                            startVerse: d.startVerse,
                            endVerse: d.endVerse,
                            isStory: d.isStory,
                            storyTitle: d.title
                        }
                    });
                }
            });

            dropdown.innerHTML = html;
            selectedIndex = -1;
            showDropdown();
            attachDropdownEvents(null);
        }

        function attachDropdownEvents(ref) {
            // Click on items
            dropdown.querySelectorAll('.desktop-search-item').forEach((itemEl, idx) => {
                itemEl.addEventListener('click', () => {
                    executeItem(currentItems[idx]);
                });
            });

            // Chapter chips
            dropdown.querySelectorAll('.desktop-search-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const ch = parseInt(chip.getAttribute('data-chapter'));
                    if (ref) {
                        openScriptureReference({
                            bookIndex: ref.bookIndex,
                            book: ref.book,
                            chapter: ch,
                            startVerse: null,
                            endVerse: null
                        });
                        hideDropdown();
                        searchInput.blur();
                    }
                });
            });
        }

        function executeItem(item) {
            if (!item) return;
            if (item.type === 'passage' || item.type === 'story') {
                openScriptureReference(item.data);
                hideDropdown();
                searchInput.blur();
            } else if (item.type === 'text-search') {
                triggerGeneralSearch(item.query);
                hideDropdown();
                searchInput.blur();
            }
        }

        function escapeHtml(str) {
            return str.replace(/[&<>'"]/g, tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag));
        }

        // Input event
        searchInput.addEventListener('input', (e) => {
            let val = e.target.value;
            // If user types or pastes '/' into search, automatically switch to story mode
            if (!isStoryMode && val.startsWith('/')) {
                toggleStoryMode(true);
                val = val.replace(/^\/+/, '');
                searchInput.value = val;
            }
            clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
            if (val.length === 0) {
                clearSearchHighlights();
            }
            renderDropdown(val);
        });

        // Focus event
        searchInput.addEventListener('focus', () => {
            renderDropdown(searchInput.value);
        });

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.key === 'A')) {
                searchInput.select();
                return;
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.stopPropagation();
                return;
            }
            // Automatically enable story mode when typing '/' in empty search
            if (e.key === '/' && !isStoryMode) {
                const isEmptyOrAllSelected = searchInput.value === '' ||
                    (searchInput.selectionStart === 0 && searchInput.selectionEnd === searchInput.value.length);
                if (isEmptyOrAllSelected) {
                    e.preventDefault();
                    toggleStoryMode(true);
                    searchInput.value = '';
                    clearBtn.style.display = 'none';
                    renderDropdown('');
                    return;
                }
            }
            // Pressing Backspace in empty search while in story mode returns to normal search
            if (e.key === 'Backspace' && isStoryMode && searchInput.value === '') {
                e.preventDefault();
                toggleStoryMode(false);
                renderDropdown('');
                return;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentItems.length > 0) {
                    selectedIndex = (selectedIndex + 1) % currentItems.length;
                    updateSelection();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentItems.length > 0) {
                    selectedIndex = (selectedIndex - 1 + currentItems.length) % currentItems.length;
                    updateSelection();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                hideDropdown();
                clearBtn.click();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const val = searchInput.value.trim();
                if (!val) return;

                const activeInStoryMode = isStoryMode || val.startsWith('/');
                const cleanVal = val.startsWith('/') ? val.replace(/^\/+/, '').trim() : val;

                if (selectedIndex >= 0 && selectedIndex < currentItems.length) {
                    executeItem(currentItems[selectedIndex]);
                } else if (activeInStoryMode) {
                    const stories = searchBibleStories(cleanVal);
                    if (stories.length > 0) {
                        const bIdx = findBookIndex(stories[0].book);
                        if (bIdx !== -1) {
                            openScriptureReference({
                                bookIndex: bIdx,
                                book: bibleBooks[bIdx],
                                chapter: stories[0].chapter,
                                startVerse: stories[0].startVerse,
                                endVerse: stories[0].endVerse,
                                isStory: true,
                                storyTitle: stories[0].title
                            });
                            hideDropdown();
                            searchInput.blur();
                            return;
                        }
                    }
                    triggerGeneralSearch(cleanVal);
                    hideDropdown();
                    searchInput.blur();
                } else {
                    const ref = parseBibleReference(cleanVal);
                    if (ref) {
                        openScriptureReference(ref);
                        hideDropdown();
                        searchInput.blur();
                    } else {
                        triggerGeneralSearch(cleanVal);
                        hideDropdown();
                        searchInput.blur();
                    }
                }
            } else if (e.key === 'Escape') {
                hideDropdown();
                searchInput.blur();
            }
        });

        // Clear button
        // Clear button (cancels current story or passage search and removes highlight, returns to Bible if on search page)
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchInput.value = '';
            clearBtn.style.display = 'none';
            if (searchBox) searchBox.classList.remove('story-mode-active');
            if (shortcutBtn) {
                shortcutBtn.classList.remove('active');
                shortcutBtn.setAttribute('aria-pressed', 'false');
            }
            isStoryMode = false;
            hideDropdown();
            clearSearchHighlights();

            const bibleSearchInput = document.getElementById('search-input');
            if (bibleSearchInput) {
                bibleSearchInput.value = '';
            }

            // If we are currently on the search view, exit and reload the Bible
            const searchResults = document.getElementById('search-results');
            if (searchResults && (searchResults.classList.contains('active') || searchResults.style.display !== 'none')) {
                if (typeof window.closeSearch === 'function') {
                    window.closeSearch();
                } else if (typeof closeSearch === 'function') {
                    closeSearch();
                }
                if (typeof loadBook === 'function' && typeof currentBook !== 'undefined' && typeof currentChapter !== 'undefined') {
                    loadBook(currentBook, currentChapter);
                }
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchWrapper.contains(e.target)) {
                hideDropdown();
            }
            if (e.target.closest('.number-item') || e.target.closest('.verse-line')) {
                clearSearchHighlights();
                if (searchBox && searchBox.classList.contains('story-mode-active')) {
                    searchInput.value = '';
                    clearBtn.style.display = 'none';
                    searchBox.classList.remove('story-mode-active');
                }
            }
        });

        // Global shortcuts: '/' to focus search on desktop, and 'Alt+S' to toggle Story mode
        document.addEventListener('keydown', (e) => {
            if (e.altKey && (e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                toggleStoryMode();
                if (searchInput) {
                    searchInput.focus();
                }
                return;
            }
            if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                if (window.innerWidth > 768) {
                    e.preventDefault();
                    searchInput.focus();
                    searchInput.select();
                }
            }
        });
    }

    // Export helper to global for external callers if needed
    window.parseBibleReference = parseBibleReference;
    window.openScriptureReference = openScriptureReference;
    window.clearSearchHighlights = clearSearchHighlights;

    // Start setup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupWhenReady);
    } else {
        setupWhenReady();
    }
})();
