/**
 * Voice Command Module for Bible Navigation
 * Supports English and Tamil voice commands for navigating to books, chapters, and verses
 */

class VoiceCommandManager {
    constructor(bibleBooks) {
        this.bibleBooks = bibleBooks;
        this.recognition = null;
        this.isListening = false;
        this.onCommandParsed = null; // Callback for when command is successfully parsed
        this.onError = null; // Callback for errors
        this.onListeningChange = null; // Callback for listening state changes
        this.onInterimResult = null; // Callback for interim results (real-time feedback)
        this.silenceTimer = null; // Timer for detecting end of speech
        this.lastTranscript = ''; // Store last transcript for timer-based processing

        this.initializeSpeechRecognition();
        this.buildBookNameMappings();
    }

    /**
     * Initialize Web Speech API
     */
    initializeSpeechRecognition() {
        console.log('🔧 Initializing Speech Recognition...');
        
        // Check if browser supports Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error('❌ Speech Recognition not supported in this browser');
            return;
        }
        
        console.log('✅ SpeechRecognition API found:', SpeechRecognition);

        this.recognition = new SpeechRecognition();
        console.log('✅ Recognition object created:', this.recognition);
        this.recognition.continuous = true; // Allow continuous listening for slow speech
        this.recognition.interimResults = true; // Enable interim results for faster response
        this.recognition.maxAlternatives = 10; // Get more alternatives for better matching

        // Use only English recognition - it will recognize Tanglish naturally
        this.recognition.lang = 'en-US';
        this.currentRecognitionLang = 'en-US';

        // Event handlers
        this.recognition.onstart = () => {
            this.isListening = true;
            console.log(`🎤 Started listening in ${this.currentRecognitionLang}`);
            if (this.onListeningChange) {
                this.onListeningChange(true);
            }
        };

        this.recognition.onend = () => {
            this.isListening = false;
            console.log(`🛑 Stopped listening`);

            if (this.onListeningChange) {
                this.onListeningChange(false);
            }

            // Reset for next command
            this.commandParsedSuccessfully = false;
        };

        this.recognition.onresult = (event) => {
            // Clear any existing silence timer
            if (this.silenceTimer) {
                clearTimeout(this.silenceTimer);
                this.silenceTimer = null;
            }

            // Handle both interim and final results
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            const isFinal = event.results[current].isFinal;

            console.log(`📝 ${isFinal ? 'Final' : 'Interim'}: "${transcript}"`);
            this.lastTranscript = transcript;

            if (isFinal) {
                // Process final result immediately
                this.handleSpeechResult(event);
                // Auto-stop after processing
                setTimeout(() => {
                    if (this.isListening) {
                        this.stopListening();
                    }
                }, 500);
            } else {
                // Show interim result to user
                if (this.onInterimResult) {
                    this.onInterimResult(transcript);
                }
                
                // Set a timer to auto-stop after 2 seconds of silence
                // This gives users time to pause while speaking slowly
                this.silenceTimer = setTimeout(() => {
                    console.log('⏱️ Silence timeout - stopping recognition');
                    if (this.isListening) {
                        this.stopListening();
                    }
                }, 2000); // 2 second silence timeout
            }
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            
            // Handle specific errors
            if (event.error === 'no-speech') {
                console.warn('⚠️ No speech detected - speak louder or check microphone');
                if (this.onError) {
                    this.onError('No speech detected. Please speak louder or check your microphone.');
                }
            } else if (event.error === 'audio-capture') {
                console.error('❌ Microphone access error');
                if (this.onError) {
                    this.onError('Cannot access microphone. Please check your microphone permissions.');
                }
            } else if (event.error !== 'aborted') {
                // Only show other errors that are user-facing
                if (this.onError) {
                    this.onError(this.getErrorMessage(event.error));
                }
            }
        };

        // Don't auto-stop on speech end - wait for natural pauses
        // This allows users to speak slowly without being cut off
        this.recognition.onspeechend = () => {
            console.log('🔇 Speech ended (natural pause detected)');
            // Set a timer to stop after 1.5 seconds of complete silence
            // This gives continuous mode time to capture slow speech
            if (this.silenceTimer) {
                clearTimeout(this.silenceTimer);
            }
            this.silenceTimer = setTimeout(() => {
                console.log('⏱️ Extended silence - stopping recognition');
                if (this.isListening) {
                    this.stopListening();
                }
            }, 1500); // 1.5 second silence after speech ends
        };
    }

    /**
     * Build comprehensive book name mappings (English and Tamil)
     */
    buildBookNameMappings() {
        this.bookMappings = {};

        this.bibleBooks.forEach(book => {
            const key = book.name.toLowerCase();

            // Store book data with all possible name variations
            this.bookMappings[key] = book;

            // Add short name mapping
            this.bookMappings[book.shortName.toLowerCase()] = book;

            // Add additional English variations
            this.addEnglishVariations(book);

            // Add common aliases and misspellings
            this.addBookAliases(book);
            
            // Add automatic Tanglish variations as backup
            this.addTanglishVariations(book);
        });
    }

    /**
     * Add common English variations for book names
     */
    addEnglishVariations(book) {
        const name = book.name.toLowerCase();

        // Handle numbered books (I, II, III -> 1, 2, 3)
        if (name.startsWith('i ')) {
            const baseName = name.substring(2);
            this.bookMappings['1 ' + baseName] = book;
            this.bookMappings['first ' + baseName] = book;
            this.bookMappings['1st ' + baseName] = book;
            this.bookMappings['one ' + baseName] = book;
        } else if (name.startsWith('ii ')) {
            const baseName = name.substring(3);
            this.bookMappings['2 ' + baseName] = book;
            this.bookMappings['second ' + baseName] = book;
            this.bookMappings['2nd ' + baseName] = book;
            this.bookMappings['two ' + baseName] = book;
        } else if (name.startsWith('iii ')) {
            const baseName = name.substring(4);
            this.bookMappings['3 ' + baseName] = book;
            this.bookMappings['third ' + baseName] = book;
            this.bookMappings['3rd ' + baseName] = book;
            this.bookMappings['three ' + baseName] = book;
        }

        // Special cases
        if (name === 'song of solomon') {
            this.bookMappings['song of songs'] = book;
            this.bookMappings['songs'] = book;
        } else if (name === 'psalms') {
            this.bookMappings['psalm'] = book;
        }

        // Add Tamil Unicode book names
        if (book.tamilName) {
            this.bookMappings[book.tamilName.toLowerCase()] = book;
        }

        // Add Tanglish (romanized Tamil) variations
        this.addTanglishVariations(book);
    }

    /**
     * Add Tanglish (romanized Tamil) variations for common books
     */
    addTanglishVariations(book) {
        const tanglishMap = {
            'Genesis': ['aadiyagamam', 'aadiyagam', 'aathiyagamam', 'adiyagamam', 'aadigayam', 'adhiyagamam', 'aathiyagam', 'athiyagamam'],
            'Exodus': ['yaathiragamam', 'yathiragamam', 'yaathiraagamam', 'yaathiragam', 'yathragamam', 'yaatiragamam'],
            'Leviticus': ['levitikas', 'leviyaragam', 'leviyagamam', 'leviagamam'],
            'Numbers': ['ennagaram', 'ennagam', 'enaagaram', 'enakaaram', 'ennaragam'],
            'Deuteronomy': ['upaagamam', 'upagamam', 'upaakamam', 'uthpathakamam'],
            'Joshua': ['yosuvaa', 'yosuva', 'yosua', 'yoshua'],
            'Judges': ['niyayadhibathigal', 'niyayadhibathi', 'niyayadipathi', 'niyayadhipathi'],
            'Ruth': ['rooth', 'rooth', 'rutu'],
            'I Samuel': ['1 samuvelu', '1 samuel', 'first samuvelu', 'onraam samuvelu'],
            'II Samuel': ['2 samuvelu', '2 samuel', 'second samuvelu', 'irandaam samuvelu'],
            'I Kings': ['1 rajaakkal', '1 kings', 'first rajaakkal', 'onraam rajaakkal'],
            'II Kings': ['2 rajaakkal', '2 kings', 'second rajaakkal', 'irandaam rajaakkal'],
            'I Chronicles': ['1 naalaagamam', '1 chronicles', 'first naalaagamam', 'onraam naalaagamam'],
            'II Chronicles': ['2 naalaagamam', '2 chronicles', 'second naalaagamam', 'irandaam naalaagamam'],
            'Ezra': ['esra', 'ejra', 'esraa'],
            'Nehemiah': ['nehemiya', 'nehamiya', 'nekemiya'],
            'Esther': ['estar', 'esther', 'esthar'],
            'Job': ['yoobu', 'yobu', 'yov'],
            'Psalms': ['sangeetham', 'sangitham', 'sangeetam', 'sankirthanam'],
            'Proverbs': ['neethimozigal', 'neethimoli', 'nithimozigal', 'needhimozigal'],
            'Ecclesiastes': ['prasangi', 'prasanki', 'pirasangi', 'pirasangki'],
            'Song of Solomon': ['unnathappaattu', 'unnathappattu', 'unnathapaatu', 'solomonin paattu'],
            'Isaiah': ['esaiya', 'isaiya', 'esaya', 'isaya'],
            'Jeremiah': ['yeramiya', 'jeramiya', 'eramiya', 'yeremiya'],
            'Lamentations': ['pulambal', 'pulampalgal', 'vilapam'],
            'Ezekiel': ['ezekiel', 'esekiyal', 'yezekiyal', 'ezekiyal'],
            'Daniel': ['daniel', 'thaniyel', 'daniyel'],
            'Hosea': ['osiya', 'hoseya', 'oseya', 'hosea'],
            'Joel': ['yoovelu', 'yoel', 'joel', 'yovel'],
            'Amos': ['aamoos', 'amos', 'aamos'],
            'Obadiah': ['obadhiya', 'obadiya', 'ovadiya'],
            'Jonah': ['yonaa', 'yona', 'jonah', 'jona'],
            'Micah': ['meekaa', 'mika', 'micah', 'mikha'],
            'Nahum': ['naahum', 'nahum', 'naaum'],
            'Habakkuk': ['abaakook', 'habakkuk', 'aabakuk'],
            'Zephaniah': ['sepaniya', 'zephaniya', 'jephaniya'],
            'Haggai': ['aakaai', 'hagai', 'aagai', 'haggai'],
            'Zechariah': ['sakariya', 'zachariya', 'zechariya', 'sechariya'],
            'Malachi': ['malaaki', 'malachi', 'malaki'],
            'Matthew': [
                // Comprehensive Matthew/மத்தேயு variants for Tamil/Tanglish/STT variations
                'mathayu', 'matthayu', 'matteyu', 'matte you', 'matheyu', 'mathe you', 'matha yu',
                'matha you', 'mathayoo', 'mathay u', 'matthaiu', 'matthai yu', 'matthai you',
                'mattaiu', 'mattai you', 'matthai yo', 'matthayoo', 'matthay u', 'matthay you',
                'mattheyu', 'matthe you', 'matthe u', 'matte u', 'matte oo', 'matte o', 'matteyo',
                'matte yo', 'matteyou', 'matteyouu', 'matteyouo', 'matteyoo', 'mattey u',
                // Broken STT-style spaced forms
                'matha au', 'matha u', 'matta au', 'matta u', 'matt he yu', 'matt he you',
                'mat the you', 'mat the u', 'mat the yu', 'ma the yu', 'ma the you', 'ma tte you',
                'ma tte yu', 'ma tte u', 'ma tte ao', 'ma t he yo', 'm a t t h e y u', 'm a t h a y u',
                'm a t h a u',
                // Vowel swaps and duplicates
                'maathayu', 'maathheyu', 'maathaiu', 'maathai you', 'maathai yu', 'maathaiyo',
                'maathayo', 'maatthayu', 'maatheyu', 'maathey oo', 'maakthayu', 'mathayo',
                'mathayoo', 'mathayou', 'mathaiyo', 'mathiyu', 'mathiyo', 'mathiu',
                // Common mishearings
                'matthewu', 'mathew', 'mathewu', 'mathew you', 'mathew yo', 'mathew y',
                'matthew you', 'matew', 'mathe w', 'matheu', 'mathe u', 'matthe w', 'mattyu',
                'matty you', 'mattew', 'matte w',
                // With puthagam/book
                'mathayu puthagam', 'mattheu puthagam', 'matheyu book', 'matha you book',
                'matta you book', 'mattayu book', 'mattayu puthagam',
                // More phonetic mistakes
                'matheyu', 'matheayu', 'mathaeu', 'mathaiyu', 'mathai you', 'mathey you',
                'matheyoo', 'mattiyu', 'mattiyo', 'mattiyoo', 'matayu', 'matayo', 'mattayo',
                'mattaiyo', 'matthiyo', 'matthiyoo', 'matthi u', 'matthi you',
                // Extra noisy
                'mat th e yu', 'mat th e you', 'm a t h e y u', 'ma t he yu', 'ma th a yu',
                'ma th a you', 'mat he you',
                // Creative STT outputs
                'mathieu', 'mathyo', 'matheu', 'mattiu', 'matteyo', 'matio', 'mathu', 'matthu',
                'matthoo', 'matthey', 'mathheu', 'mathhey', 'matteiu',
                // With chapter/verse
                'mathayu chapter', 'matthayu chapter', 'matthew chapter',
                // Extremely noisy
                'mathaau', 'mattaau', 'mathaauu', 'mathau', 'mathauu', 'mattha u', 'matthaou',
                'mattha yoo', 'matha yuu', 'matha yu'
            ],
            'Mark': ['marku', 'mark', 'marrku'],
            'Luke': ['lukaa', 'luka', 'lukas'],
            'John': ['yovaan', 'yohaan', 'yovan', 'johan'],
            'Acts': ['apposthalargalin nadapadigal', 'aposthalar', 'apposthalar nadapadigal', 'nadapadigal'],
            'Romans': ['roomar', 'romar', 'romans', 'romiyar'],
            'I Corinthians': ['1 korinthiyar', '1 korinthiyas', 'first korinthiyar', 'onraam korinthiyar'],
            'II Corinthians': ['2 korinthiyar', '2 korinthiyas', 'second korinthiyar', 'irandaam korinthiyar'],
            'Galatians': ['galatiyar', 'galathi', 'galathiyar'],
            'Ephesians': ['ephesiyar', 'ephesius', 'efesiyar'],
            'Philippians': ['philippiyar', 'philippi', 'pilippiyar'],
            'Colossians': ['kolosiyar', 'kolosai', 'colossiyar'],
            'I Thessalonians': ['1 thessalonikar', '1 thesaloniyar', 'first thessalonikar'],
            'II Thessalonians': ['2 thessalonikar', '2 thesaloniyar', 'second thessalonikar'],
            'I Timothy': ['1 thimothiyar', '1 timothy', 'first thimothiyar'],
            'II Timothy': ['2 thimothiyar', '2 timothy', 'second thimothiyar'],
            'Titus': ['theethu', 'titus', 'tithas'],
            'Philemon': ['philemonu', 'filemon', 'pilemon'],
            'Hebrews': ['ebreyar', 'hebrews', 'ibriyar'],
            'James': ['yaakkobu', 'james', 'yaakov'],
            'I Peter': ['1 pethuru', '1 peter', 'first pethuru', 'onraam pethuru'],
            'II Peter': ['2 pethuru', '2 peter', 'second pethuru', 'irandaam pethuru'],
            'I John': ['1 yovaan', '1 john', 'first yovaan', 'onraam yovaan'],
            'II John': ['2 yovaan', '2 john', 'second yovaan', 'irandaam yovaan'],
            'III John': ['3 yovaan', '3 john', 'third yovaan', 'moondraam yovaan'],
            'Jude': ['yootha', 'jude', 'yudha'],
            'Revelation': ['velippaduthel', 'velipaduthal', 'revelation', 'velipaduththal']
        };

        const variants = tanglishMap[book.name];
        if (variants) {
            variants.forEach(variant => {
                this.bookMappings[variant.toLowerCase()] = book;
            });
        }
    }

    /**
     * Add Tamil variations and handle common speech recognition errors
     */
    addTamilVariations(book) {
        // Tamil book names are already added in buildBookNameMappings
        // This can be extended for common speech-to-text variations
    }

    /**
     * Add comprehensive aliases for common mispronunciations and speech recognition errors
     * Now using Tanglish (romanized Tamil) instead of Tamil Unicode
     */
    addBookAliases(book) {
        const bookAliases = {
            Genesis: [
                'kenesis', 'jenesis', 'ggenesis', 'enesis', 'ganesis', 'genesis', 'ginesis', 'gonesis',
                'gunesis', 'geenesis', 'gnesis', 'gennesis', 'geesis', 'genasis', 'genisis', 'genosis',
                'genusis', 'geneesis', 'gensis', 'genezis', 'genesi', 'genesos', 'geneses', 'genesas',
                'genesiis', 'genesiss'
            ],

            Exodus: [
                'axodus', 'exodus', 'ixodus', 'oxodus', 'uxodus', 'eexodus', 'xodus', 'eksodus',
                'ezodus', 'exxodus', 'eodus', 'exadus', 'exedus', 'exidus', 'exudus', 'exoodus',
                'exdus', 'exotus', 'exoddus', 'exous', 'exoduus', 'exoduz', 'exodos', 'exoduss',
                'exodu', 'exodis'
            ],

            Leviticus: [
                'lleviticus', 'eviticus', 'laviticus', 'leviticus', 'liviticus', 'loviticus', 'luviticus',
                'leeviticus', 'lviticus', 'lefiticus', 'lebiticus', 'levviticus', 'leiticus', 'levaticus',
                'leveticus', 'levoticus', 'levuticus', 'leviiticus', 'levticus', 'levidicus', 'leviticush',
                'leviticuz', 'leviticis', 'levitics', 'levitikus', 'levitticus', 'leviticcus', 'leviicus',
                'levitucus', 'levitiicus'
            ],

            Numbers: [
                'nnumbers', 'umbers', 'nambers', 'nembers', 'nimbers', 'nombers', 'numbers', 'nuumbers',
                'nmbers', 'nummbers', 'nubers', 'numbbers', 'numers', 'numbars', 'numbirs', 'numbors',
                'numburs', 'numbeers', 'numbrs', 'numberrs', 'number', 'numberss', 'numbersh', 'numbes'
            ],

            Deuteronomy: [
                'teuteronomy', 'ddeuteronomy', 'euteronomy', 'dauteronomy', 'deuteronomy', 'diuteronomy',
                'douteronomy', 'duuteronomy', 'deeuteronomy', 'duteronomy', 'deateronomy', 'deeteronomy',
                'deiteronomy', 'deoteronomy', 'deuuteronomy', 'deteronomy', 'deuderonomy', 'deutteronomy',
                'deueronomy', 'deutaronomy', 'deutoronomy', 'deuteronemy', 'deuteronomyy', 'deuternomy',
                'deuteronumy', 'deuteronimy', 'deuteronommy', 'deuteronmy', 'deutironomy', 'deuterunomy',
                'deutronomy', 'duet', 'dueto', 'duetro', 'duetero', 'duit', 'doit', 'doet'
            ],

            Joshua: [
                'goshua', 'yoshua', 'jjoshua', 'oshua', 'jashua', 'jeshua', 'jishua', 'joshua', 'jushua',
                'jooshua', 'jshua', 'jozhua', 'joshhua', 'josshua', 'johua', 'josua', 'joshaa', 'joshea',
                'joshia', 'joshoa', 'joshue', 'joshuua', 'joshuaa', 'josha', 'joshuu', 'joshu'
            ],

            Judges: [
                'gudges', 'yudges', 'jjudges', 'udges', 'jadges', 'jedges', 'jidges', 'jodges', 'judges',
                'juudges', 'jdges', 'jutges', 'juddges', 'juges', 'judkes', 'judjes', 'judgges', 'judes',
                'judgas', 'judgis', 'judgez', 'judgees', 'judgess', 'judgesh', 'judgs'
            ],

            Ruth: [
                'rruth', 'uth', 'rath', 'reth', 'rith', 'roth', 'ruth', 'ruuth', 'rth', 'rudh', 'rutth', 'ruh', 'rut', 'ruthh'
            ],

            "I Samuel": [
                'asamuel', 'esamuel', 'isamuel', 'osamuel', 'usamuel', 'iisamuel', 'samuel', 'izamuel',
                'ishamuel', 'issamuel', 'iamuel', 'isemuel', 'isimuel', 'isomuel', 'isumuel', 'isaamuel',
                'ismuel', 'isammuel', 'isauel', 'isamael', 'i samuel', '1samual', '1sammuel', '1samuol',
                '1ssamuel', '1sumuel', '1samuel', '1saamuel', '1samueel', '1shamuel', '1samul', '1smuel',
                '1samuuel', '11samuel', '1samel', '1zamuel', '1sameel', '1samuul', '1samiel', '1samue', '1samoel'
            ],

            "II Samuel": [
                'aisamuel', 'eisamuel', 'iisamuel', 'oisamuel', 'uisamuel', 'iiisamuel', 'isamuel',
                'iasamuel', 'iesamuel', 'iosamuel', 'iusamuel', 'iizamuel', 'iishamuel', 'iissamuel',
                'iiamuel', 'iisemuel', 'iisimuel', 'iisomuel', 'iisumuel', 'iisaamuel', 'ii samuel',
                '2shamuel', '2somuel', '2semuel', '2samiel', '2sameel', '2smuel', '2samue', '2samael',
                '2samuil', '2zamuel', '2samuul', '2sumuel', '2samul', '2sauel', '2samel', '2simuel',
                '2samuel', '2saamuel', '2sammuel', '2samoel'
            ],

            "I Kings": [
                'akings', 'ekings', 'ikings', 'okings', 'ukings', 'iikings', 'kings', 'igings', 'icings',
                'ikkings', 'iings', 'ikangs', 'ikengs', 'ikongs', 'ikungs', 'ikiings', 'ikngs', 'ikinngs',
                'ikigs', 'ikinks', 'i kings', '1kiings', '1kingz', '1gings', '1kungs', '1kinjs', '1kinngs',
                '1kkings', '1cings', '1kinggs', '1kinks', '1kngs', '1kigs', '1kongs', '1kengs', '11kings',
                '1kings', '1king', '1kingsh', '1kins'
            ],

            "II Kings": [
                'aikings', 'eikings', 'iikings', 'oikings', 'uikings', 'iiikings', 'ikings', 'iakings',
                'iekings', 'iokings', 'iukings', 'iigings', 'iicings', 'iikkings', 'iiings', 'iikangs',
                'iikengs', 'iikongs', 'iikungs', 'iikiings', 'ii kings', '2kinngs', '22kings', '2kings',
                '2kingsh', '2cings', '2kigs', '2gings', '2kkings', '2kangs', '2kongs', '2kingz', '2kinggs',
                '2kngs', '2kinjs', '2kinks', '2kiings', '2king', 'kings', '2kungs', '2kins'
            ],

            Ezra: [
                'azra', 'ezra', 'izra', 'ozra', 'uzra', 'eezra', 'zra', 'esra', 'ezzra', 'era', 'ezrra',
                'eza', 'ezre', 'ezri', 'ezro', 'ezru', 'ezraa', 'ezr'
            ],

            Nehemiah: [
                'nnehemiah', 'ehemiah', 'nahemiah', 'nehemiah', 'nihemiah', 'nohemiah', 'nuhemiah',
                'neehemiah', 'nhemiah', 'neemiah', 'nehhemiah', 'nehamiah', 'nehimiah', 'nehomiah',
                'nehumiah', 'neheemiah', 'nehmiah', 'nehemmiah', 'neheiah', 'nehemaah', 'nehemiih',
                'nehemuah', 'nehemiiah', 'nehemia', 'nehemiuh', 'nehemah'
            ],

            Esther: [
                'asther', 'esther', 'isther', 'osther', 'usther', 'eesther', 'sther', 'ezther',
                'eshther', 'essther', 'ether', 'esdher', 'estther', 'esher', 'ester', 'esthher',
                'esthar', 'esthir', 'esthor', 'esthur', 'esthr', 'estheer', 'esthe'
            ],

            Job: [
                'gob', 'yob', 'jjob', 'jab', 'jeb', 'jib', 'job', 'jub', 'joob', 'jobb', 'ob', 'jo', 'jb'
            ],

            Psalms: [
                'bsalms', 'fsalms', 'ppsalms', 'salms', 'pzalms', 'pshalms', 'pssalms', 'palms',
                'psalms', 'pselms', 'psilms', 'psolms', 'psulms', 'psaalms', 'pslms', 'psallms',
                'psams', 'psalmms', 'psals', 'psalmz', 'psalmsh', 'psalm', 'psalmss', 'scam',
                'scams', 'pam', 'pams', 'ram', 'rams', 'palm', 'sam', 'sams', 'psaln', 'psalns',
                'salom', 'saloms', 'salm', 'salms'
            ],

            Proverbs: [
                'broverbs', 'froverbs', 'pproverbs', 'roverbs', 'prroverbs', 'poverbs', 'praverbs',
                'preverbs', 'priverbs', 'proverbs', 'pruverbs', 'prooverbs', 'prverbs', 'proferbs',
                'proberbs', 'provverbs', 'proerbs', 'provarbs', 'provirbs', 'provorbs', 'proverb',
                'provers', 'provrbs', 'provurbs', 'proveerbs', 'proverbz'
            ],

            Ecclesiastes: [
                'acclesiastes', 'ecclesiastes', 'icclesiastes', 'occlesiastes', 'ucclesiastes',
                'eecclesiastes', 'cclesiastes', 'ekclesiastes', 'esclesiastes', 'eccclesiastes',
                'eclesiastes', 'ecklesiastes', 'ecslesiastes', 'eccllesiastes', 'eccesiastes',
                'ecclasiastes', 'ecclisiastes', 'ecclosiastes', 'ecclusiastes', 'eccleesiastes',
                'ecclesiustes', 'ecclsiastes', 'ecclesistes', 'ecclesiiastes', 'ecclesiasstes',
                'ecclesiaztes', 'ecclesiastez', 'ecclesiastess', 'ecclesiasts', 'ecclesiasttes',
                'eccleziastes', 'eccleseastes', 'ecclesiastis'
            ],

            "Song of Solomon": [
                'zongofsolomon', 'shongofsolomon', 'ssongofsolomon', 'ongofsolomon',
                'sangofsolomon', 'sengofsolomon', 'singofsolomon', 'songofsolomon',
                'sungofsolomon', 'soongofsolomon', 'sngofsolomon', 'sonngofsolomon',
                'sogofsolomon', 'sonkofsolomon', 'sonjofsolomon', 'songgofsolomon',
                'sonofsolomon', 'songafsolomon', 'songefsolomon', 'songifsolomon',
                'song of solomon', 'songofsolomin', 'songofsolomun', 'songufsolomon',
                'songofzolomon', 'songofsolomn', 'songofsolumon', 'songofsolomo',
                'songofsilomon', 'songofssolomon', 'songofsulomon', 'songofsolomen',
                'songosolomon'
            ],

            Isaiah: [
                'asaiah', 'esaiah', 'isaiah', 'osaiah', 'usaiah', 'iisaiah', 'saiah', 'izaiah',
                'ishaiah', 'issaiah', 'iaiah', 'iseiah', 'isiiah', 'isoiah', 'isuiah',
                'isaaiah', 'isiah', 'isaaah', 'isaeah', 'isaoah', 'isaah', 'isaia', 'isaioh',
                'isaieh', 'isaiuh', 'isaiaah', 'isaiiah', 'yes i have', 'yesihave',
                'yes i hav', 'yesihav', 'yes eye have', 'yeseyehave', 'yeah i have', 'yeahihave'
            ],

            Jeremiah: [
                'geremiah', 'yeremiah', 'jjeremiah', 'eremiah', 'jaremiah', 'jeremiah',
                'jiremiah', 'joremiah', 'juremiah', 'jeeremiah', 'jremiah', 'jerremiah',
                'jeemiah', 'jeramiah', 'jerimiah', 'jeromiah', 'jerumiah', 'jereemiah',
                'jermiah', 'jeremmiah', 'jeremiih', 'jeremiiah', 'jeremioh', 'jeremia',
                'jeremoah', 'jereiah', 'jeremeah', 'jeremuah', 'jeremih', 'jeremaah',
                'jeremiaah', 'jeremieh'
            ],

            Lamentations: [
                'llamentations', 'amentations', 'lamentations', 'lementations', 'limentations',
                'lomentations', 'lumentations', 'laamentations', 'lmentations', 'lammentations',
                'laentations', 'lamantations', 'lamintations', 'lamontations', 'lamuntations',
                'lameentations', 'lamntations', 'lamenntations', 'lametations', 'lamendations',
                'lamentation', 'lamentatoons', 'lamenttations', 'lamentutions', 'lamentattions',
                'lamentationss', 'lamentatuons', 'lamentatioons', 'lamentatiions', 'lamentaions',
                'lamentitions'
            ],

            Ezekiel: [
                'azekiel', 'ezekiel', 'izekiel', 'ozekiel', 'uzekiel', 'eezekiel', 'zekiel',
                'esekiel', 'ezzekiel', 'eekiel', 'ezakiel', 'ezikiel', 'ezokiel', 'ezukiel',
                'ezeekiel', 'ezkiel', 'ezegiel', 'ezeciel', 'ezekkiel', 'ezeiel', 'ezekiell',
                'ezekiul', 'ezekel', 'ezekael', 'ezekeel', 'ezekuel', 'ezekiiel'
            ],

            Daniel: [
                'taniel', 'ddaniel', 'aniel', 'daniel', 'deniel', 'diniel', 'doniel', 'duniel',
                'daaniel', 'dniel', 'danniel', 'daiel', 'danael', 'daneel', 'danoel', 'danuel',
                'daniiel', 'danel', 'danial', 'daniil', 'daniell', 'danie', 'danil', 'daniul',
                'daniol'
            ],

            Hosea: [
                'osea', 'hhosea', 'hasea', 'hesea', 'hisea', 'hosea', 'husea', 'hoosea', 'hsea',
                'hozea', 'hoshea', 'hossea', 'hoea', 'hosaa', 'hosia', 'hosoa', 'hosua', 'hoseea',
                'hosa', 'hosee', 'hose', 'hosei', 'hoseaa', 'hoseu', 'hoseo'
            ],

            Joel: [
                'goel', 'yoel', 'jjoel', 'oel', 'jael', 'jeel', 'jiel', 'joel', 'juel', 'jooel', 'jel',
                'joal', 'joil', 'jool', 'joul', 'joeel', 'jol', 'joell', 'joe'
            ],

            Amos: [
                'amos', 'emos', 'imos', 'omos', 'umos', 'aamos', 'mos', 'ammos', 'aos', 'amas', 'ames',
                'amis', 'amus', 'amoos', 'ams', 'amoz', 'amosh', 'amoss', 'amo'
            ],

            Obadiah: [
                'abadiah', 'ebadiah', 'ibadiah', 'obadiah', 'ubadiah', 'oobadiah', 'badiah', 'obbadiah',
                'oadiah', 'obediah', 'obidiah', 'obodiah', 'obudiah', 'obaadiah', 'obdiah', 'obatiah',
                'obaddiah', 'obaiah', 'obadaah', 'obadeah', 'obadiuh', 'obadieh', 'obaduah', 'obadia',
                'obadiiah', 'obadah', 'obadiahh', 'obadiih'
            ],

            Jonah: [
                'gonah', 'yonah', 'jjonah', 'onah', 'janah', 'jenah', 'jinah', 'jonah', 'junah', 'joonah',
                'jnah', 'jonnah', 'joah', 'joneh', 'jonih', 'jonoh', 'jonuh', 'jonaah', 'jonh', 'jona',
                'jonahh'
            ],

            Micah: [
                'mmicah', 'icah', 'macah', 'mecah', 'micah', 'mocah', 'mucah', 'miicah', 'mcah', 'mikah',
                'misah', 'miccah', 'miah', 'miceh', 'micih', 'micoh', 'micuh', 'micaah', 'mich', 'mica',
                'micahh'
            ],

            Nahum: [
                'nnahum', 'ahum', 'nahum', 'nehum', 'nihum', 'nohum', 'nuhum', 'naahum', 'nhum', 'naum',
                'nahhum', 'naham', 'nahem', 'nahim', 'nahom', 'nahuum', 'nahm', 'nahumm', 'nahu', 'nahums'
            ],

            Habakkuk: [
                'abakkuk', 'hhabakkuk', 'habakkuk', 'hebakkuk', 'hibakkuk', 'hobakkuk', 'hubakkuk',
                'haabakkuk', 'hbakkuk', 'habbakkuk', 'haakkuk', 'habekkuk', 'habikkuk', 'habokkuk',
                'habukkuk', 'habaakkuk', 'habkkuk', 'habagkuk', 'habackuk', 'habakkkuk', 'habakkak',
                'habakkuuk', 'habakguk', 'habakku', 'habakkuc', 'habakkk', 'habakkug', 'habakkek',
                'habakkik', 'habakkukk', 'habakuk'
            ],

            Zephaniah: [
                'sephaniah', 'zzephaniah', 'ephaniah', 'zaphaniah', 'zephaniah', 'ziphaniah',
                'zophaniah', 'zuphaniah', 'zeephaniah', 'zphaniah', 'zebhaniah', 'zefhaniah',
                'zepphaniah', 'zehaniah', 'zepaniah', 'zephhaniah', 'zepheniah', 'zephiniah',
                'zephoniah', 'zephuniah', 'zephaniuh', 'zephniah', 'zephanih', 'zephaiah',
                'zephaniahh', 'zephanaah', 'zephaneah', 'zephanah', 'zephanuah', 'zephanieh'
            ],

            Haggai: [
                'aggai', 'hhaggai', 'haggai', 'heggai', 'higgai', 'hoggai', 'huggai', 'haaggai',
                'hggai', 'hakgai', 'hajgai', 'hagggai', 'hagai', 'hagkai', 'hagjai', 'haggei',
                'haggii', 'haggoi', 'haggui', 'haggaai', 'haggi', 'haggae', 'hagga', 'haggaii',
                'haggau', 'a guy', 'aguy', 'agai', 'a gay', 'agay', 'hakaai', 'agaai', 'hag i',
                'hagi', 'hag eye', 'hageye', 'hack eye', 'hackeye', 'aga', 'aga ya', 'agaya',
                'agaa', 'haggay', 'hagey', 'a kaai', 'akaai', 'a gai', 'agai', 'ah guy', 'ahguy',
                'akai', 'a key', 'akey'
            ],

            Zechariah: [
                'sechariah', 'zzechariah', 'echariah', 'zachariah', 'zechariah', 'zichariah',
                'zochariah', 'zuchariah', 'zeechariah', 'zchariah', 'zekhariah', 'zeshariah',
                'zecchariah', 'zehariah', 'zecariah', 'zechhariah', 'zecheriah', 'zechiriah',
                'zechoriah', 'zechuriah', 'zechaiah', 'zechriah', 'zecharih', 'zecharieh',
                'zecharoah'
            ],

            Malachi: [
                'mmalachi', 'alachi', 'malachi', 'melachi', 'milachi', 'molachi', 'mulachi',
                'maalachi', 'mlachi', 'mallachi', 'maachi', 'malechi', 'malichi', 'malochi',
                'maluchi', 'malaachi', 'malchi', 'malakhi', 'malashi', 'malacchi', 'malache',
                'malachu', 'malacha', 'malaci', 'malachii', 'malacho', 'malachhi'
            ],

            Matthew: [
                'mmatthew', 'atthew', 'matthew', 'metthew', 'mitthew', 'motthew', 'mutthew',
                'maatthew', 'mtthew', 'madthew', 'mattthew', 'mathew', 'matdhew', 'mattew',
                'matthhew', 'matthaw', 'matthiw', 'matthow', 'matthuw', 'mattheew', 'matthw',
                'matthe', 'mattheww', 
                // Tamil Unicode variants and common STT mistakes
                'மேத்யூ', 'மத்திய', 'மேத்தியூ', 'மத்தியூ', 'மத்திய யு', 'மத்தேயூ', 'ஏயு பத்தா யு',
                'தி வியூ', 'தெரியு', 'டேய்', 'மத்தியயோ', 'தையோ', 'மத்த யு', 'த்தையும்'
            ],

            Mark: [
                'mmark', 'ark', 'mark', 'merk', 'mirk', 'mork', 'murk', 'maark', 'mrk', 'marrk',
                'mak', 'marg', 'marc', 'markk', 'mar'
            ],

            Luke: [
                'lluke', 'uke', 'lake', 'leke', 'like', 'loke', 'luke', 'luuke', 'lke', 'luge',
                'luce', 'lukke', 'lue', 'luka', 'luki', 'luko', 'luku', 'lukee', 'luk'
            ],

            John: [
                'gohn', 'yohn', 'jjohn', 'ohn', 'jahn', 'jehn', 'jihn', 'john', 'juhn', 'joohn',
                'jhn', 'jon', 'johhn', 'johnn', 'joh'
            ],

            Acts: [
                'acts', 'ects', 'icts', 'octs', 'ucts', 'aacts', 'cts', 'akts', 'asts', 'accts',
                'ats', 'acds', 'actts', 'acs', 'actz', 'actsh', 'actss', 'act', 'x'
            ],

            Romans: [
                'rromans', 'omans', 'ramans', 'remans', 'rimans', 'romans', 'rumans', 'roomans',
                'rmans', 'rommans', 'roans', 'romens', 'romins', 'romons', 'romuns', 'romaans',
                'romns', 'romanns', 'romas', 'romanz', 'romanss', 'romansh', 'roman'
            ],

            "I Corinthians": [
                'acorinthians', 'ecorinthians', 'icorinthians', 'ocorinthians', 'ucorinthians',
                'iicorinthians', 'corinthians', 'ikorinthians', 'isorinthians', 'iccorinthians',
                'iorinthians', 'icarinthians', 'icerinthians', 'icirinthians', 'icurinthians',
                'icoorinthians', 'icrinthians', 'icorrinthians', 'icointhians', 'icoranthians',
                'i corinthians', '1corinthuans', '1corinthoans', '1corinthiaans', '1cornthians',
                '1crinthians', '1carinthians', '1cointhians', '1corinthions', '1corinthiuns',
                '1korinthians', '1corindhians', '1corenthians', '1corinthiins', '1cirinthians',
                '1corinnthians', '1corinthianns', '1corinhians', '1coronthians', '1corintthians',
                '11corinthians'
            ],

            "II Corinthians": [
                'aicorinthians', 'eicorinthians', 'iicorinthians', 'oicorinthians',
                'uicorinthians', 'iiicorinthians', 'icorinthians', 'iacorinthians',
                'iecorinthians', 'iocorinthians', 'iucorinthians', 'iikorinthians',
                'iisorinthians', 'iiccorinthians', 'iiorinthians', 'iicarinthians',
                'iicerinthians', 'iicirinthians', 'iicurinthians', 'iicoorinthians',
                'ii corinthians', '2coorinthians', '2corinthian', '2corinthianss',
                '2corinthoans', '2corintheans', '2corinthianz', '22corinthians',
                '2corinthianns', '2corinthaans', '2corinnthians', '2corinthins',
                '2curinthians', '2corinthuans', '2ccorinthians', '2cointhians',
                '2coranthians', '2corintthians', '2corinthiuns', '2sorinthians',
                '2corinthiins'
            ],

            Galatians: [
                'kalatians', 'jalatians', 'ggalatians', 'alatians', 'galatians', 'gelatians',
                'gilatians', 'golatians', 'gulatians', 'gaalatians', 'glatians', 'gallatians',
                'gaatians', 'galetians', 'galitians', 'galotians', 'galutians', 'galaatians',
                'galtians', 'galadians', 'galatiians', 'galatoans', 'galatian', 'galatuans',
                'galatiaans', 'galateans', 'galatins', 'galattians', 'galations', 'galatiens',
                'galatiuns'
            ],

            Ephesians: [
                'aphesians', 'ephesians', 'iphesians', 'ophesians', 'uphesians', 'eephesians',
                'phesians', 'ebhesians', 'efhesians', 'epphesians', 'ehesians', 'epesians',
                'ephhesians', 'ephasians', 'ephisians', 'ephosians', 'ephusians', 'epheesians',
                'ephsians', 'ephezians', 'epheseans', 'ephesins', 'ephesiins', 'ephessians',
                'ephesiansh', 'ephesiens', 'epheshians', 'ephesiaans', 'ephesianz', 'ephesian',
                'ephesianns'
            ],

            Philippians: [
                'bhilippians', 'fhilippians', 'pphilippians', 'hilippians', 'pilippians',
                'phhilippians', 'phalippians', 'phelippians', 'philippians', 'pholippians',
                'phulippians', 'phiilippians', 'phlippians', 'phillippians', 'phiippians',
                'philappians', 'phileppians', 'philoppians', 'philuppians', 'philiippians',
                'philipppians', 'philippiians', 'philifpians', 'philippiuns', 'philippiaans',
                'philippuans', 'philippianz', 'philippans', 'philipfians', 'philippaans',
                'philippoans', 'philippianns', 'philibpians', 'philippiens'
            ],

            Colossians: [
                'kolossians', 'solossians', 'ccolossians', 'olossians', 'calossians',
                'celossians', 'cilossians', 'colossians', 'culossians', 'coolossians',
                'clossians', 'collossians', 'coossians', 'colassians', 'colessians',
                'colissians', 'colussians', 'coloossians', 'colssians', 'colozsians',
                'coloshsians', 'colossiansh', 'colossiaans', 'colossuans', 'colosians',
                'colossiens', 'colossian', 'colossiins', 'colossans', 'colosseans',
                'colossins', 'colossoans', 'colossions'
            ],

            "I Thessalonians": [
                'athessalonians', 'ethessalonians', 'ithessalonians', 'othessalonians',
                'uthessalonians', 'iithessalonians', 'thessalonians', 'idhessalonians',
                'itthessalonians', 'ihessalonians', 'itessalonians', 'ithhessalonians',
                'ithassalonians', 'ithissalonians', 'ithossalonians', 'ithussalonians',
                'itheessalonians', 'ithssalonians', 'ithezsalonians', 'itheshsalonians',
                'i thessalonians', '1theshsalonians', '1thessilonians', '1thessalenians',
                '1hessalonians', '1theessalonians', '1thessalonoans', '1thessaloniians',
                '1thessaloniuns', '1thessalonias', '1theszalonians', '1thessaonians',
                '1thessaloians', '1thesalonians', '1thesselonians', '1thessalonions',
                '1thussalonians', '1thessaloniaans', '1thessaloneans', '1thessalonins',
                '1thessalonianz'
            ],

            "II Thessalonians": [
                'aithessalonians', 'eithessalonians', 'iithessalonians', 'oithessalonians',
                'uithessalonians', 'iiithessalonians', 'ithessalonians', 'iathessalonians',
                'iethessalonians', 'iothessalonians', 'iuthessalonians', 'iidhessalonians',
                'iitthessalonians', 'iihessalonians', 'iitessalonians', 'iithhessalonians',
                'iithassalonians', 'iithissalonians', 'iithossalonians', 'iithussalonians',
                'ii thessalonians', '2thessalonoans', '2thessalanians', '2thesslonians',
                '2theshsalonians', '2thesshalonians', '2thessalunians', '2thessalonias',
                '2thessalonian', '2theessalonians', '2thessaloians', '2thesalonians',
                '2thussalonians', '2thessaloniansh', '2thessaalonians', '2thssalonians',
                '2thossalonians', '2thessaloniens', '2thessaloniaans', '2thessaloniins',
                '2thessalonianss'
            ],

            "I Timothy": [
                'atimothy', 'etimothy', 'itimothy', 'otimothy', 'utimothy', 'iitimothy', 'timothy',
                'idimothy', 'ittimothy', 'iimothy', 'itamothy', 'itemothy', 'itomothy', 'itumothy',
                'itiimothy', 'itmothy', 'itimmothy', 'itiothy', 'itimathy', 'itimethy', 'i timothy',
                '1temothy', '1timohy', '1timoothy', '1timuthy', '11timothy', '1tomothy', '1tiimothy',
                '1tiothy', '1timothhy', '1timethy', '1timothy', '1timotthy', '1timothyy', '1timoth',
                '1timathy', '1timthy', '1tumothy', '1imothy', '1dimothy'
            ],

            "II Timothy": [
                'aitimothy', 'eitimothy', 'iitimothy', 'oitimothy', 'uitimothy', 'iiitimothy',
                'itimothy', 'iatimothy', 'ietimothy', 'iotimothy', 'iutimothy', 'iidimothy',
                'iittimothy', 'iiimothy', 'iitamothy', 'iitemothy', 'iitomothy', 'iitumothy',
                'iitiimothy', 'iitmothy', 'ii timothy', '22timothy', '2tiimothy', '2timthy',
                '2ttimothy', 'timothy', '2timithy', '2timuthy', '2temothy', '2timothhy',
                '2timothyy', '2tumothy', '2tiothy', '2dimothy', '2timodhy', '2timotthy',
                '2timoty', '2tomothy', '2timohy', '2timoothy', '2tamothy'
            ],

            Titus: [
                'ditus', 'ttitus', 'itus', 'tatus', 'tetus', 'titus', 'totus', 'tutus', 'tiitus',
                'ttus', 'tidus', 'tittus', 'tius', 'titas', 'tites', 'titis', 'titos', 'tituus',
                'tits', 'tituz', 'tituss', 'titush', 'titu'
            ],

            Philemon: [
                'bhilemon', 'fhilemon', 'pphilemon', 'hilemon', 'pilemon', 'phhilemon', 'phalemon',
                'phelemon', 'philemon', 'pholemon', 'phulemon', 'phiilemon', 'phlemon', 'phillemon',
                'phiemon', 'philamon', 'philimon', 'philomon', 'philumon', 'phileemon', 'philemun',
                'philemmon', 'philemin', 'philemn', 'philemonn', 'philmon'
            ],

            Hebrews: [
                'ebrews', 'hhebrews', 'habrews', 'hebrews', 'hibrews', 'hobrews', 'hubrews',
                'heebrews', 'hbrews', 'hebbrews', 'herews', 'hebrrews', 'hebews', 'hebraws',
                'hebriws', 'hebrows', 'hebruws', 'hebreews', 'hebrws', 'hebrevs', 'hebrewss',
                'hebrew', 'hebres', 'hebrewsh', 'hebrewws'
            ],

            James: [
                'games', 'yames', 'jjames', 'ames', 'james', 'jemes', 'jimes', 'jomes', 'jumes',
                'jaames', 'jmes', 'jammes', 'jaes', 'jamas', 'jamis', 'jamos', 'jamus', 'jamees',
                'jams', 'jamez', 'jame', 'jamess', 'jamesh'
            ],

            "I Peter": [
                'apeter', 'epeter', 'ipeter', 'opeter', 'upeter', 'iipeter', 'peter', 'ibeter',
                'ifeter', 'ippeter', 'ieter', 'ipater', 'ipiter', 'ipoter', 'iputer', 'ipeeter',
                'ipter', 'ipeder', 'ipetter', 'ipeer', 'i peter', '1petir', '1peder', '1peer',
                '1petter', '1beter', '1peeter', '1petr', '1pter', '1peterr', '1peter', '1piter',
                '1ppeter', '1poter', '1feter', '1peteer', '1puter', '11peter', '1eter', '1pete'
            ],

            "II Peter": [
                'aipeter', 'eipeter', 'iipeter', 'oipeter', 'uipeter', 'iiipeter', 'ipeter',
                'iapeter', 'iepeter', 'iopeter', 'iupeter', 'iibeter', 'iifeter', 'iippeter',
                'iieter', 'iipater', 'iipiter', 'iipoter', 'iiputer', 'iipeeter', 'ii peter',
                '2petor', '2peder', '2peter', '2puter', '22peter', '2pter', '2peterr', 'peter',
                '2pater', '2feter', '2beter', '2peteer', '2petar', '2piter', '2poter', '2ppeter',
                '2petur', '2eter', '2pete', '2peeter'
            ],

            "I John": [
                'ajohn', 'ejohn', 'ijohn', 'ojohn', 'ujohn', 'iijohn', 'john', 'igohn', 'iyohn',
                'ijjohn', 'iohn', 'ijahn', 'ijehn', 'ijihn', 'ijuhn', 'ijoohn', 'ijhn', 'ijon',
                'ijohhn', 'ijohnn', 'i john', '1jahn', '1juhn', '1jihn', '1jon', '1ohn', '1gohn',
                '1jjohn', '1jehn', '1joohn', '1jhn', '1johhn', '1johnn', '1yohn', '1john', '1joh',
                '11john'
            ],

            "II John": [
                'aijohn', 'eijohn', 'iijohn', 'oijohn', 'uijohn', 'iiijohn', 'ijohn', 'iajohn',
                'iejohn', 'iojohn', 'iujohn', 'iigohn', 'iiyohn', 'iijjohn', 'iiohn', 'iijahn',
                'iijehn', 'iijihn', 'iijuhn', 'iijoohn', 'ii john', '22john', 'john', '2gohn',
                '2jon', '2ohn', '2joohn', '2johhn', '2yohn', '2john', '2jihn', '2johnn', '2jehn',
                '2jjohn', '2jahn', '2joh', '2jhn', '2juhn'
            ],

            "III John": [
                'aiijohn', 'eiijohn', 'iiijohn', 'oiijohn', 'uiijohn', 'iiiijohn', 'iijohn',
                'iaijohn', 'ieijohn', 'ioijohn', 'iuijohn', 'iiajohn', 'iiejohn', 'iiojohn',
                'iiujohn', 'iiigohn', 'iiiyohn', 'iiijjohn', 'iiiohn', 'iiijahn', 'iii john',
                '3yohn', 'john', '3jjohn', '3johhn', '3jahn', '3gohn', '3joh', '3ohn', '3jehn',
                '3john', '3juhn', '3jhn', '33john', '3jihn', '3jon', '3joohn', '3johnn'
            ],

            Jude: [
                'gude', 'yude', 'jjude', 'ude', 'jade', 'jede', 'jide', 'jode', 'jude', 'juude', 'jde',
                'jute', 'judde', 'jue', 'juda', 'judi', 'judo', 'judu', 'judee', 'jud'
            ],

            Revelation: [
                'rrevelation', 'evelation', 'ravelation', 'revelation', 'rivelation', 'rovelation',
                'ruvelation', 'reevelation', 'rvelation', 'refelation', 'rebelation', 'revvelation',
                'reelation', 'revalation', 'revilation', 'revolation', 'revulation', 'reveelation',
                'revlation', 'revellation', 'revelataon', 'reveletion', 'revelatien', 'revelatoon',
                'revelaton', 'revelaion', 'revelatin', 'reveltion', 'revelotion', 'revelattion',
                'revelatiion'
            ]
        };


        const aliases = bookAliases[book.name];
        if (aliases) {
            aliases.forEach(alias => {
                this.bookMappings[alias.toLowerCase()] = book;
            });
        }
    }

    /**
     * Start listening for voice commands
     * IMPORTANT: Supports both Tamil and English recognition regardless of UI language
     * @param {string} language - 'en' for English only, 'ta' for Tamil only, 'both' for dual-language (default)
     *                           Note: 'both' means try English first, then Tamil if parsing fails
     */
    startListening(language = 'both') {
        console.log('🔍 startListening called with language:', language);
        
        if (!this.recognition) {
            console.error('❌ Recognition object not available');
            if (this.onError) {
                this.onError('Speech recognition not supported in your browser');
            }
            return;
        }

        // Reset state for new command
        this.commandParsedSuccessfully = false;

        // Use Tamil recognition for better Tanglish phonetic capture
        // Tamil recognition preserves Tanglish pronunciation better than English
        // (e.g., "yobu" stays as "yobu" instead of being corrected to "job")
        if (language === 'ta' || language === 'both') {
            this.recognition.lang = 'ta-IN';
            this.currentRecognitionLang = 'ta-IN';
        } else {
            // English mode for pure English commands
            this.recognition.lang = 'en-US';
            this.currentRecognitionLang = 'en-US';
        }

        try {
            console.log(`🎙️ Starting voice recognition (${language} mode, lang: ${this.recognition.lang})`);
            console.log('Recognition object:', this.recognition);
            this.recognition.start();
            console.log('✅ recognition.start() called successfully');
        } catch (error) {
            console.error('❌ Error starting recognition:', error);
            if (this.onError) {
                this.onError('Could not start voice recognition: ' + error.message);
            }
        }
    }

    /**
     * Stop listening
     */
    stopListening() {
        // Clear any pending silence timers
        if (this.silenceTimer) {
            clearTimeout(this.silenceTimer);
            this.silenceTimer = null;
        }
        
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }

    /**
     * Handle speech recognition results
     */
    handleSpeechResult(event) {
        // Get the final result index
        const finalResultIndex = event.results.length - 1;
        const alternatives = [];

        // Collect all alternatives from the final result
        for (let i = 0; i < event.results[finalResultIndex].length; i++) {
            alternatives.push(event.results[finalResultIndex][i].transcript);
        }

        console.log(`Speech recognized alternatives (${this.currentRecognitionLang}):`, alternatives);

        // Try to parse each alternative until one succeeds
        for (const transcript of alternatives) {
            const result = this.parseVoiceCommand(transcript);
            if (result) {
                console.log('✅ Parsed command successfully:', result);
                this.commandParsedSuccessfully = true; // Mark as successful
                if (this.onCommandParsed) {
                    this.onCommandParsed(result);
                }
                return;
            }
        }

        // If no alternative worked and we should retry with Tamil, don't show error yet
        if (this.retryWithTamil && this.currentRecognitionLang === 'en-US') {
            console.log('⚠️ English recognition failed, will retry with Tamil...');
            // The retry will be triggered in onend handler
            return;
        }

        // If no alternative worked and we've tried both languages, show error
        console.log('❌ Failed to parse command in all attempts');
        if (this.onError) {
            this.onError(`Could not understand: "${alternatives[0]}". Please try again.`);
        }
    }

    /**
     * Parse voice command from text
     * @param {string} text - The speech-to-text result
     * @returns {Object|null} - Parsed command or null if parsing failed
     */
    parseVoiceCommand(text) {
        if (!text) return null;

        const normalized = text.toLowerCase().trim();
        console.log('🎤 Original text:', text);
        console.log('📝 Normalized:', normalized);

        // Convert word numbers to digits (one, two, three -> 1, 2, 3)
        let processedText = this.convertWordNumbersToDigits(normalized);

        // Remove common filler words
        let cleaned = this.removeFillerWords(processedText);
        console.log('🧹 After removing fillers:', cleaned);

        // Check if text contains Tamil keywords - if so, try Tamil parsing first
        const hasTamilKeywords = /அதிகாரம்|வசனம்|அசாம்/.test(cleaned);
        
        if (hasTamilKeywords) {
            // Try Tamil parsing first if Tamil keywords detected
            let result = this.parseTamilCommand(cleaned);
            if (result) {
                console.log('✅ Parsed as Tamil:', result);
                return result;
            }
        }

        // Try English parsing
        let result = this.parseEnglishCommand(cleaned);
        if (result) {
            console.log('✅ Parsed as English:', result);
            return result;
        }

        // Try Tamil parsing (if not already tried)
        if (!hasTamilKeywords) {
            result = this.parseTamilCommand(cleaned);
            if (result) {
                console.log('✅ Parsed as Tamil:', result);
                return result;
            }
        }

        // Try mixed parsing (Tamil book name with English keywords)
        result = this.parseMixedCommand(cleaned);
        if (result) {
            console.log('✅ Parsed as Mixed:', result);
            return result;
        }

        console.log('❌ Could not parse command');
        return null;
    }

    /**
     * Remove common filler words from command
     */
    removeFillerWords(text) {
        // English filler words
        const englishFillers = [
            'open', 'show', 'go to', 'goto', 'read', 'display',
            'navigate to', 'navigate', 'find', 'search', 'look up',
            'the book of', 'book of', 'the', 'please', 'can you'
        ];

        // Tamil filler words in Tanglish (romanized)
        const tamilFillers = [
            'thira', 'kaattu', 'po', 'padi', 'thedu'
        ];

        let cleaned = text;

        // Remove English fillers (order matters - longer phrases first)
        for (const filler of englishFillers) {
            // Try at start of string
            const startRegex = new RegExp(`^${filler.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i');
            cleaned = cleaned.replace(startRegex, '');
            // Also try after punctuation
            const midRegex = new RegExp(`([.!?,])\\s*${filler.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'gi');
            cleaned = cleaned.replace(midRegex, '$1 ');
        }

        // Remove Tamil fillers
        for (const filler of tamilFillers) {
            const startRegex = new RegExp(`^${filler}\\s+`, 'i');
            cleaned = cleaned.replace(startRegex, '');
        }

        return cleaned.trim();
    }

    /**
     * Parse English voice command
     * Examples: "matthew chapter 24 verse 3", "john 3 16", "genesis 5"
     */
    parseEnglishCommand(text) {
        // Remove periods, clean up punctuation, and normalize slashes
        const cleaned = text.replace(/\.$/, '')
            .replace(/,\s*/g, ' ')
            .replace(/\//g, ':')  // Convert slashes to colons
            .replace(/\s+/g, ' ')  // Normalize multiple spaces
            .trim();
        console.log('🔧 Cleaned for parsing:', cleaned);

        // Pattern 1: "BookName chapter X verse Y" (handles commas, periods, multiple spaces)
        let match = cleaned.match(/^(.+?)\s+chapter\s+(\d+)\s+verse\s+(\d+)$/i);
        if (match) {
            console.log('🔧 Pattern 1 matched:', match);
            console.log('🔧 Book:', match[1], 'Chapter:', match[2], 'Verse:', match[3]);
            const result = this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
            if (result) {
                console.log('🔧 Pattern 1 result:', result);
                return result;
            }
        }

        // Pattern 2: "BookName chapter X" (handles commas, periods)
        match = cleaned.match(/^(.+?)\s+chapter\s+(\d+)$/i);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), null);
        }

        // Pattern 3: "BookName X verse Y" (without chapter keyword)
        match = cleaned.match(/^(.+?)\s+(\d+)\s+verse\s+(\d+)$/i);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
        }

        // Pattern 4: "BookName X Y" (two separate numbers for chapter and verse)
        match = cleaned.match(/^(.+?)\s+(\d+)\s+(\d+)$/);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
        }

        // Pattern 5: "BookName X:Y" (with colon)
        match = cleaned.match(/^(.+?)\s+(\d+):(\d+)$/);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
        }

        // Pattern 6: "BookName XXYY" where XXYY is a multi-digit number (smart split into chapter:verse)
        match = cleaned.match(/^(.+?)\s+(\d{2,})$/);
        if (match) {
            const num = match[2];
            const bookName = match[1];
            
            // Try to intelligently split the number based on book's chapter count
            const book = this.findBook(bookName);
            if (book && num.length >= 2) {
                // Try different split positions
                // For "2814": try 28:14, then 2:814
                // For "514": try 5:14, then 51:4
                for (let splitPos = 1; splitPos < num.length; splitPos++) {
                    const chapterStr = num.substring(0, splitPos);
                    const verseStr = num.substring(splitPos);
                    const chapter = parseInt(chapterStr);
                    const verse = parseInt(verseStr);
                    
                    // Check if this split makes sense for this book
                    if (chapter > 0 && chapter <= book.chapters && verse >= 0) {
                        console.log(`🔄 English: Smart split ${num} into chapter ${chapter} verse ${verse} for ${book.name}`);
                        return this.buildCommandResult(bookName, chapter, verse);
                    }
                }
                
                // If no valid split found, try basic 2-digit split (XY → X:Y)
                if (num.length === 2) {
                    const chapter = parseInt(num[0]);
                    const verse = parseInt(num[1]);
                    if (chapter > 0 && verse >= 0) {
                        console.log(`🔄 English: Basic split ${num} into chapter ${chapter} verse ${verse}`);
                        return this.buildCommandResult(bookName, chapter, verse);
                    }
                }
            }
        }

        // Pattern 7: "BookName X" (just chapter - single number)
        match = cleaned.match(/^(.+?)\s+(\d+)$/);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), null);
        }

        // Pattern 8: Just book name (only as last resort fallback)
        // Only match if there are NO digits at all in the text
        if (!cleaned.match(/\d/)) {
            const bookResult = this.buildCommandResult(cleaned, 1, null);
            if (bookResult) {
                console.log(`🔄 English: Found book only (no chapter/verse specified): "${cleaned}" -> ${bookResult.book}`);
                return bookResult;
            }
        }

        return null;
    }

    /**
     * Convert Tamil number words to digits (Tanglish and Tamil Unicode)
     * Handles complex forms like "noothi irubathi moondraam" (123), "நூறு இருபது மூன்றாம்" (123)
     */
    convertTamilNumberWords(text) {
        // Define number mappings (Tanglish and Tamil Unicode)
        const units = {
            // Tanglish
            'oru': 1, 'ondru': 1, 'onraam': 1, 'onnu': 1,
            'irandu': 2, 'rendu': 2, 'irandaam': 2,
            'moondru': 3, 'munu': 3, 'moondraam': 3,
            'naangu': 4, 'naalu': 4, 'naangaam': 4, 'nalaam': 4, 'naangu': 4,
            'ainthu': 5, 'anju': 5, 'ainthaam': 5, 'anjaam': 5,
            'aaru': 6, 'aaraam': 6,
            'ezhu': 7, 'ezhaam': 7, 'yezhaam': 7,
            'ettu': 8, 'ettaam': 8,
            'onbadhu': 9, 'ombadhu': 9, 'onbadhaam': 9,
            // Tamil Unicode
            'ஒன்று': 1, 'ஒன்றாம்': 1, 'ஒருவது': 1,
            'இரண்டு': 2, 'இரண்டாம்': 2,
            'மூன்று': 3, 'மூன்றாம்': 3,
            'நான்கு': 4, 'நான்காம்': 4,
            'ஐந்து': 5, 'ஐந்தாம்': 5,
            'ஆறு': 6, 'ஆறாம்': 6,
            'ஏழு': 7, 'ஏழாம்': 7,
            'எட்டு': 8, 'எட்டாம்': 8,
            'ஒன்பது': 9, 'ஒன்பதாம்': 9
        };
        
        const tens = {
            // Tanglish
            'paththu': 10, 'pathu': 10, 'paththaam': 10, 'pathaam': 10, 'patthu': 10,
            'irupadhu': 20, 'irubathi': 20, 'irupathi': 20, 'irupadhaam': 20, 'irubathu': 20, 'irupathaam': 20,
            'muppadhu': 30, 'muppathi': 30, 'muppadhaam': 30, 'muppathaam': 30, 'mupathu': 30,
            'narupadhu': 40, 'narupathi': 40, 'narpathi': 40, 'narupadhaam': 40, 'narpathaam': 40, 'narpathu': 40, 'nalubathu': 40, 'nalupathaam': 40,
            'aimpadhu': 50, 'aimpathi': 50, 'aimpadhaam': 50, 'aimpathaam': 50, 'aimpathu': 50, 'ambadhu': 50, 'ambathaam': 50,
            'arupadhu': 60, 'arupathi': 60, 'arupadhaam': 60, 'arupathaam': 60, 'arupathu': 60, 'arubathu': 60,
            'ezhupadhu': 70, 'ezhubathi': 70, 'elubathi': 70, 'ezhupadhaam': 70, 'ezhupathaam': 70, 'ezhupathu': 70, 'elubathaam': 70, 'elupathu': 70,
            'enpadhu': 80, 'embathi': 80, 'enbathi': 80, 'enpadhaam': 80, 'enpathaam': 80, 'enpathu': 80, 'embathaam': 80,
            'thonnooru': 90, 'thonnooraam': 90, 'thonnuru': 90, 'tonnuru': 90, 'thonnuthu': 90, 'tonnuthaam': 90,
            // Tamil Unicode
            'பத்து': 10, 'பத்தாம்': 10,
            'இருபது': 20, 'இருபதாம்': 20,
            'முப்பது': 30, 'முப்பதாம்': 30,
            'நாற்பது': 40, 'நாற்பதாம்': 40,
            'ஐம்பது': 50, 'ஐம்பதாம்': 50,
            'அறுபது': 60, 'அறுபதாம்': 60,
            'எழுபது': 70, 'எழுபதாம்': 70,
            'எண்பது': 80, 'எண்பதாம்': 80,
            'தொண்ணூறு': 90, 'தொண்ணூறாம்': 90
        };
        
        const hundreds = {
            // Tanglish
            'nooru': 100, 'noothu': 100, 'nootri': 100, 'noothi': 100, 'nooraam': 100,
            // Tamil Unicode
            'நூறு': 100, 'நூறாம்': 100
        };

        // First, replace simple Tamil Unicode and Tanglish number words with digits
        // Create combined mapping
        const allNumbers = { ...units, ...tens, ...hundreds };
        
        console.log('🔧 Before Tamil number conversion:', text);
        console.log('🔧 Total number words in dictionary:', Object.keys(allNumbers).length);
        
        // Sort by length (longest first) to avoid partial matches
        const sortedKeys = Object.keys(allNumbers).sort((a, b) => b.length - a.length);
        
        for (const word of sortedKeys) {
            // Use word boundaries for English/Tanglish, but not for Tamil Unicode
            const isTamil = /[\u0B80-\u0BFF]/.test(word);
            if (isTamil) {
                // For Tamil Unicode, match the word with surrounding spaces or start/end of string
                const regex = new RegExp('(^|\\s)' + word + '($|\\s)', 'gi');
                const matches = text.match(regex);
                if (matches) {
                    console.log('🔧 Found Tamil word:', word, '→', allNumbers[word], 'Matches:', matches);
                }
                text = text.replace(regex, (match, before, after) => {
                    console.log('🔧 Replacing Tamil:', match, '→', allNumbers[word]);
                    return before + allNumbers[word].toString() + after;
                });
            } else {
                // For English/Tanglish, use word boundaries
                const regex = new RegExp('\\b' + word + '\\b', 'gi');
                text = text.replace(regex, allNumbers[word].toString());
            }
        }

        console.log('🔧 After number word conversion:', text);

        // Convert complex number phrases (Tanglish only) - for compound numbers
        // Pattern: (hundred)? (tens)? (units)?
        const numberPattern = /(nooru|noothu|nootri|noothi|nooraam)?\s*(thonnooru|thonnooraam|thonnuru|tonnuru|thonnuthu|tonnuthaam|irupadhu|irubathi|irupathi|irubathu|irupathaam|muppadhu|muppathi|muppadhaam|muppathaam|mupathu|narupadhu|narupathi|narpathi|narupadhaam|narpathaam|narpathu|nalubathu|nalupathaam|aimpadhu|aimpathi|aimpadhaam|aimpathaam|aimpathu|ambadhu|ambathaam|arupadhu|arupathi|arupadhaam|arupathaam|arupathu|arubathu|ezhupadhu|ezhubathi|elubathi|ezhupadhaam|ezhupathaam|ezhupathu|elubathaam|elupathu|enpadhu|embathi|enbathi|enpadhaam|enpathaam|enpathu|embathaam|paththu|pathu|patthu|pathaam|paththaam)?\s*(oru|ondru|onraam|onnu|irandu|rendu|irandaam|moondru|munu|moondraam|naangu|naalu|naangaam|nalaam|ainthu|anju|ainthaam|anjaam|aaru|aaraam|ezhu|ezhaam|yezhaam|ettu|ettaam|onbadhu|ombadhu|onbadhaam)?/gi;

        text = text.replace(numberPattern, (match, hundred, ten, unit) => {
            let total = 0;
            if (hundred) total += hundreds[hundred.toLowerCase()] || 0;
            if (ten) total += tens[ten.toLowerCase()] || 0;
            if (unit) total += units[unit.toLowerCase()] || 0;
            
            // If we found any number components, replace with the total
            if (total > 0) {
                return total.toString();
            }
            return match; // Return original if no match
        });

        console.log('🔧 After compound number conversion:', text);
        return text;
    }

    /**
     * Parse Tamil voice command (Tanglish version)
     * Examples: "matthew athigaram 24 vasanam 3", "john 3 16", "genesis 5"
     */
    parseTamilCommand(text) {
        // Convert Tamil numerals to Arabic numerals
        text = this.convertTamilNumerals(text);
        
        // Convert complex Tamil number phrases to digits (e.g., "noothi irubathi moondraam" = 123)
        text = this.convertTamilNumberWords(text);

        // Remove periods and clean up punctuation
        const cleaned = text.replace(/\.$/, '').replace(/,\s*/g, ' ').trim();
        console.log('🔧 Tamil cleaned for parsing:', cleaned);

        // Pattern 1a: "BookName X அதிகாரம் Y வசனம்" (number BEFORE keyword - converted from Tamil ordinals)
        let match = cleaned.match(/^(.+?)\s+(\d+)\s+(அதிகாரம்|athigaram|adhigaram|athikaram|adhikaram)\s+(\d+)\s+(வசனம்|அசாம்|vasanam|vasnam|vesanam|asaam)$/i);
        if (match) {
            console.log('🔧 Tamil Pattern 1a matched (number before keyword):', match);
            const result = this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[4]));
            if (result) {
                console.log('🔧 Tamil Pattern 1a result:', result);
                return result;
            }
        }

        // Pattern 1b: "BookName அதிகாரம் X வசனம் Y" (keyword BEFORE number - original pattern)
        match = cleaned.match(/^(.+?)\s+(அதிகாரம்|athigaram|adhigaram|athikaram|adhikaram)\s+(\d+)\s+(வசனம்|அசாம்|vasanam|vasnam|vesanam|asaam)\s+(\d+)$/i);
        if (match) {
            console.log('🔧 Tamil Pattern 1b matched (keyword before number):', match);
            const result = this.buildCommandResult(match[1], parseInt(match[3]), parseInt(match[5]));
            if (result) {
                console.log('🔧 Tamil Pattern 1b result:', result);
                return result;
            }
        }

        // Pattern 2a: "BookName X அதிகாரம்" (number BEFORE keyword)
        match = cleaned.match(/^(.+?)\s+(\d+)\s+(அதிகாரம்|athigaram|adhigaram|athikaram|adhikaram)$/i);
        if (match) {
            console.log('🔧 Tamil Pattern 2a matched (number before keyword):', match);
            const result = this.buildCommandResult(match[1], parseInt(match[2]), null);
            if (result) {
                console.log('🔧 Tamil Pattern 2a result:', result);
                return result;
            }
        }

        // Pattern 2b: "BookName அதிகாரம் X" (keyword BEFORE number)
        match = cleaned.match(/^(.+?)\s+(அதிகாரம்|athigaram|adhigaram|athikaram|adhikaram)\s+(\d+)$/i);
        if (match) {
            console.log('🔧 Tamil Pattern 2b matched (keyword before number):', match);
            const result = this.buildCommandResult(match[1], parseInt(match[3]), null);
            if (result) {
                console.log('🔧 Tamil Pattern 2b result:', result);
                return result;
            }
        }

        // Pattern 3: "BookName X வசனம்/vasanam Y" (Tamil Unicode and Tanglish)
        match = cleaned.match(/^(.+?)\s+(\d+)\s+(வசனம்|அசாம்|vasanam|vasnam|vesanam|asaam)\s+(\d+)$/i);
        if (match) {
            console.log('🔧 Tamil Pattern 3 matched:', match);
            const result = this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[4]));
            if (result) {
                console.log('🔧 Tamil Pattern 3 result:', result);
                return result;
            }
        }

        // Pattern 4: "BookName X Y" (numbers without keywords)
        match = cleaned.match(/^(.+?)\s+(\d+)\s+(\d+)$/);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
        }

        // Pattern 5: "BookName XXYY" where XXYY is a multi-digit number (smart split into chapter:verse)
        match = cleaned.match(/^(.+?)\s+(\d{2,})$/);
        if (match) {
            const num = match[2];
            const bookName = match[1];
            
            // Try to intelligently split the number based on book's chapter count
            const book = this.findBook(bookName);
            if (book && num.length >= 2) {
                // Try different split positions
                // For "2814": try 28:14, then 2:814
                // For "514": try 5:14, then 51:4
                for (let splitPos = 1; splitPos < num.length; splitPos++) {
                    const chapterStr = num.substring(0, splitPos);
                    const verseStr = num.substring(splitPos);
                    const chapter = parseInt(chapterStr);
                    const verse = parseInt(verseStr);
                    
                    // Check if this split makes sense for this book
                    if (chapter > 0 && chapter <= book.chapters && verse >= 0) {
                        console.log(`🔄 Tamil: Smart split ${num} into chapter ${chapter} verse ${verse} for ${book.name}`);
                        return this.buildCommandResult(bookName, chapter, verse);
                    }
                }
                
                // If no valid split found, try basic 2-digit split (XY → X:Y)
                if (num.length === 2) {
                    const chapter = parseInt(num[0]);
                    const verse = parseInt(num[1]);
                    if (chapter > 0 && verse >= 0) {
                        console.log(`🔄 Tamil: Basic split ${num} into chapter ${chapter} verse ${verse}`);
                        return this.buildCommandResult(bookName, chapter, verse);
                    }
                }
            }
        }

        // Pattern 6: "BookName X" (just chapter)
        match = cleaned.match(/^(.+?)\s+(\d+)$/);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), null);
        }

        // Pattern 7: Just book name (only as last resort fallback)
        // Only match if there are NO digits at all in the text
        if (!cleaned.match(/\d/)) {
            const bookResult = this.buildCommandResult(cleaned, 1, null);
            if (bookResult) {
                console.log(`🔄 Tamil: Found book only (no chapter/verse specified): "${cleaned}" -> ${bookResult.book}`);
                return bookResult;
            }
        }

        return null;
    }

    /**
     * Parse mixed language commands (Tamil book names with English keywords)
     */
    parseMixedCommand(text) {
        // Try parsing with English keywords but Tamil book names
        // This handles cases where speech recognition mixes languages

        // Remove periods and clean up punctuation
        const cleaned = text.replace(/\.$/, '').replace(/,\s*/g, ' ').trim();

        // Pattern: "TamilBookName chapter X verse Y"
        let match = cleaned.match(/^(.+?)\s+chapter\s+(\d+)\s+verse\s+(\d+)$/i);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), parseInt(match[3]));
        }

        // Pattern: "TamilBookName chapter X"
        match = cleaned.match(/^(.+?)\s+chapter\s+(\d+)$/i);
        if (match) {
            return this.buildCommandResult(match[1], parseInt(match[2]), null);
        }

        return null;
    }

    /**
     * Convert Tamil numerals to Arabic numerals
     */
    convertTamilNumerals(text) {
        const tamilNumerals = {
            '௧': '1', '௨': '2', '௩': '3', '௪': '4', '௫': '5',
            '௬': '6', '௭': '7', '௮': '8', '௯': '9', '௦': '0'
        };

        let converted = text;
        for (const [tamil, arabic] of Object.entries(tamilNumerals)) {
            converted = converted.replace(new RegExp(tamil, 'g'), arabic);
        }

        return converted;
    }

    /**
     * Convert word numbers to digits
     */
    convertWordNumbersToDigits(text) {
        const wordNumbers = {
            'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
            'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9',
            'ten': '10', 'eleven': '11', 'twelve': '12', 'thirteen': '13',
            'fourteen': '14', 'fifteen': '15', 'sixteen': '16', 'seventeen': '17',
            'eighteen': '18', 'nineteen': '19', 'twenty': '20', 'thirty': '30',
            'forty': '40', 'fifty': '50', 'sixty': '60', 'seventy': '70',
            'eighty': '80', 'ninety': '90', 'hundred': '100',
            // Common speech variations
            'won': '1', 'too': '2', 'to': '2', 'for': '4', 'fore': '4',
            'ate': '8', 'tree': '3'
        };

        let converted = text;

        // Handle compound numbers like "twenty one" -> "21"
        converted = converted.replace(/(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\s+(one|two|three|four|five|six|seven|eight|nine)/gi,
            (match, tens, ones) => {
                const tensVal = wordNumbers[tens.toLowerCase()] || tens;
                const onesVal = wordNumbers[ones.toLowerCase()] || ones;
                return (parseInt(tensVal) + parseInt(onesVal)).toString();
            });

        // Handle "X hundred and Y" -> "XY"
        converted = converted.replace(/(\d+)\s*hundred\s+(?:and\s+)?(\d+)/gi, (match, hundreds, ones) => {
            return (parseInt(hundreds) * 100 + parseInt(ones)).toString();
        });

        // Replace individual word numbers (case insensitive)
        for (const [word, digit] of Object.entries(wordNumbers)) {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            converted = converted.replace(regex, digit);
        }

        return converted;
    }

    /**
     * Build command result object
     */
    buildCommandResult(bookNameText, chapter, verse) {
        const book = this.findBook(bookNameText);

        if (!book) {
            console.log('Book not found for:', bookNameText);
            return null;
        }

        return {
            // Return the book object so caller can choose which name to display
            book: book.name,
            bookObject: book, // Full book object with name, tamilName, etc.
            bookIndex: this.bibleBooks.indexOf(book),
            chapter: chapter,
            verse: verse,
            originalText: bookNameText
        };
    }

    /**
     * Calculate Levenshtein distance between two strings
     */
    levenshteinDistance(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        const matrix = [];

        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }

        return matrix[len1][len2];
    }

    /**
     * Generate Soundex code for phonetic matching
     */
    soundex(str) {
        const s = str.toUpperCase().replace(/[^A-Z]/g, '');
        if (!s) return '0000';

        const firstLetter = s[0];
        const codes = {
            'B': '1', 'F': '1', 'P': '1', 'V': '1',
            'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
            'D': '3', 'T': '3',
            'L': '4',
            'M': '5', 'N': '5',
            'R': '6'
        };

        let code = firstLetter;
        let prevCode = codes[firstLetter] || '0';

        for (let i = 1; i < s.length && code.length < 4; i++) {
            const currentCode = codes[s[i]] || '0';
            if (currentCode !== '0' && currentCode !== prevCode) {
                code += currentCode;
            }
            if (currentCode !== '0') {
                prevCode = currentCode;
            }
        }

        return (code + '0000').substring(0, 4);
    }

    /**
     * Generate simplified Metaphone code for phonetic matching
     */
    metaphone(str) {
        const s = str.toUpperCase().replace(/[^A-Z]/g, '');
        if (!s) return '';

        let metaph = '';

        // Transform string based on phonetic rules
        let word = s;

        // Drop duplicate adjacent letters
        word = word.replace(/([A-Z])\1+/g, '$1');

        // Drop vowels unless they're at the beginning
        let result = word[0];
        for (let i = 1; i < word.length; i++) {
            if (!'AEIOU'.includes(word[i])) {
                result += word[i];
            }
        }

        // Apply phonetic transformations
        result = result.replace(/PH/g, 'F');
        result = result.replace(/TH/g, 'T');
        result = result.replace(/CH/g, 'K');
        result = result.replace(/SH/g, 'S');
        result = result.replace(/C([EIY])/g, 'S$1');
        result = result.replace(/C/g, 'K');
        result = result.replace(/G([EIY])/g, 'J$1');
        result = result.replace(/Z/g, 'S');

        return result.substring(0, 6);
    }

    /**
     * Find book by name using comprehensive fuzzy matching
     * Uses: Levenshtein distance, Soundex, Metaphone, and partial matching
     */
    findBook(nameText) {
        const normalized = nameText.toLowerCase().trim().replace(/[^\w\s\u0B80-\u0BFF]/g, '');

        console.log('🔍 Searching for book:', normalized);

        // Step 1: Direct lookup
        if (this.bookMappings[normalized]) {
            console.log('✅ Exact match found:', this.bookMappings[normalized].name);
            return this.bookMappings[normalized];
        }

        // Step 2: Try removing common prefixes
        const cleaned = normalized.replace(/^(the |book of |go to |open )/i, '').trim();
        if (this.bookMappings[cleaned]) {
            console.log('✅ Match after removing prefix:', this.bookMappings[cleaned].name);
            return this.bookMappings[cleaned];
        }

        // Step 3: Comprehensive fuzzy matching
        let bestMatch = null;
        let bestScore = 0;
        let matchMethod = '';
        const searchText = cleaned || normalized;

        // Generate phonetic codes for the search text
        const searchSoundex = this.soundex(searchText);
        const searchMetaphone = this.metaphone(searchText);

        for (const [key, book] of Object.entries(this.bookMappings)) {
            // Skip duplicates
            if (bestMatch && bestMatch.name === book.name && key !== book.name.toLowerCase()) {
                continue;
            }

            let score = 0;
            let method = '';

            // Method 1: Exact match (highest priority)
            if (key === searchText) {
                console.log('✅ Exact match:', book.name);
                return book;
            }

            // Method 2: Levenshtein distance <= 2 (very high priority)
            const distance = this.levenshteinDistance(searchText, key);
            if (distance <= 2) {
                // Prioritize longer matches to avoid short word conflicts (e.g., "sos" vs "hosea")
                const lengthBonus = Math.min(key.length, searchText.length) >= 4 ? 0.05 : 0;
                score = 1.0 - (distance / 10) + lengthBonus; // 0.8-1.05 range
                method = `Levenshtein(${distance})`;
            }

            // Method 3: Soundex match (phonetic equivalence)
            const keySoundex = this.soundex(key);
            if (searchSoundex === keySoundex && searchSoundex !== '0000') {
                const soundexScore = 0.85;
                if (soundexScore > score) {
                    score = soundexScore;
                    method = `Soundex(${searchSoundex})`;
                }
            }

            // Method 4: Metaphone match (phonetic equivalence)
            const keyMetaphone = this.metaphone(key);
            if (searchMetaphone === keyMetaphone && searchMetaphone !== '') {
                const metaphoneScore = 0.85;
                if (metaphoneScore > score) {
                    score = metaphoneScore;
                    method = `Metaphone(${searchMetaphone})`;
                }
            }

            // Method 5: StartsWith (high priority for partial matches)
            if (key.startsWith(searchText) || searchText.startsWith(key)) {
                const startsScore = 0.80 * (Math.min(key.length, searchText.length) / Math.max(key.length, searchText.length));
                if (startsScore > score) {
                    score = startsScore;
                    method = 'StartsWith';
                }
            }

            // Method 6: Contains (medium priority)
            if (key.includes(searchText) || searchText.includes(key)) {
                const containsScore = 0.70 * (Math.min(key.length, searchText.length) / Math.max(key.length, searchText.length));
                if (containsScore > score) {
                    score = containsScore;
                    method = 'Contains';
                }
            }

            // Method 7: Similarity score (fallback with 70% threshold)
            if (score === 0) {
                const maxLen = Math.max(searchText.length, key.length);
                const similarity = 1 - (distance / maxLen);
                if (similarity >= 0.7) {
                    score = similarity * 0.65; // Lower priority
                    method = `Similarity(${(similarity * 100).toFixed(0)}%)`;
                }
            }

            // Update best match
            if (score > bestScore) {
                bestScore = score;
                bestMatch = book;
                matchMethod = method;
            }
        }

        if (bestMatch) {
            console.log(`✅ Fuzzy match: "${normalized}" → "${bestMatch.name}" (${matchMethod}, score: ${(bestScore * 100).toFixed(0)}%)`);
        } else {
            console.log(`❌ No match found for: "${normalized}"`);
        }

        return bestMatch;
    }

    /**
     * Get user-friendly error message
     */
    getErrorMessage(errorCode) {
        const messages = {
            'no-speech': 'No speech detected. Please try again.',
            'audio-capture': 'No microphone found. Please check your device.',
            'not-allowed': 'Microphone access denied. Please allow microphone access.',
            'network': 'Network error. Please check your connection.',
            'aborted': 'Speech recognition aborted.',
            'language-not-supported': 'Language not supported.'
        };

        return messages[errorCode] || 'Voice recognition error. Please try again.';
    }

    /**
     * Validate command against Bible data
     * @param {Object} command - Parsed command object
     * @param {Array} bibleBooks - Array of Bible books
     * @returns {Object} - Validation result with {valid: boolean, error: string}
     */
    validateCommand(command) {
        if (!command) {
            return { valid: false, error: 'Invalid command' };
        }

        const book = this.bibleBooks[command.bookIndex];

        if (!book) {
            return { valid: false, error: `Book "${command.book}" not found` };
        }

        let corrected = false;

        // Auto-correct invalid chapter - default to chapter 1
        if (command.chapter < 1 || command.chapter > book.chapters) {
            console.log(`⚠️ Invalid chapter ${command.chapter} for ${book.name} (max: ${book.chapters}). Auto-correcting to chapter 1.`);
            command.chapter = 1;
            command.verse = null; // Clear verse if chapter was invalid
            corrected = true;
        }

        // Note: Verse validation requires chapter data, so we'll handle it during navigation
        // Invalid verses will simply not scroll/highlight

        return { valid: true, corrected: corrected };
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VoiceCommandManager;
}
