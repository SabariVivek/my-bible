// Verse headers/section titles that appear before specific verses
// Format: "Book Chapter:Verse": "Header Title"
const verseHeaders = {
    // ===========================
    // OLD TESTAMENT
    // ===========================

    // Genesis Chapter 1
    "Genesis 1:1": ["God Before Creation", "The earth was formless, and the Spirit of God hovered over the waters."],
    "Genesis 1:3": ["Day 1: Light Created", "God speaks, light appears, and He separates light from darkness."],
    "Genesis 1:6": ["Day 2: Sky Created", "God separates the waters above from the waters below."],
    "Genesis 1:9": ["Day 3: Land, Seas, and Plants", "Dry land appears; God creates vegetation and trees."],
    "Genesis 1:14": ["Day 4: Sun, Moon, and Stars", "God sets lights in the sky to mark seasons, days, and years."],
    "Genesis 1:20": ["Day 5: Birds and Sea Creatures", "God fills the waters and the skies with living creatures."],
    "Genesis 1:24": ["Day 6 (Part 1): Land Animals Created", "God creates livestock, wild animals, and creatures that move along the ground."],
    "Genesis 1:26": ["Day 6 (Part 2): Man Created in God’s Image", "God creates mankind and gives them dominion over the earth."],
    "Genesis 1:31": ["God’s Creation Is Very Good", "God looks at all He has made and declares it very good."],

    // Genesis Chapter 2
    "Genesis 2:1": ["God Rests on the Seventh Day", "God finishes His work of creation and blesses the Sabbath."],
    "Genesis 2:4": ["The Condition of the Earth Before Man", "No plants yet; God prepares the ground."],
    "Genesis 2:7": ["God Forms Man from Dust", "God creates Adam and breathes life into him."],
    "Genesis 2:8": ["The Garden of Eden", "God plants a garden and provides rivers for it."],
    "Genesis 2:15": ["Man Placed in the Garden", "Adam is to work it and obey God’s command."],
    "Genesis 2:18": ["God Sees Man Needs a Helper", "Adam names the animals, but none is suitable for him."],
    "Genesis 2:21": ["God Creates Woman", "Eve is formed from Adam’s rib."],
    "Genesis 2:24": ["Marriage Established by God", "A man and woman become one; they are naked and unashamed."],

    // Genesis Chapter 3
    "Genesis 3:1": ["The Serpent Tempts Eve", "The devil questions God’s word and deceives the woman."],
    "Genesis 3:6": ["The Fall of Man", "Adam and Eve eat the forbidden fruit and realize their nakedness."],
    "Genesis 3:8": ["God Questions Adam and Eve", "They hide from God and try to shift the blame."],
    "Genesis 3:14": ["God’s Judgment on the Serpent", "Curse on the serpent and the first promise of a Savior."],
    "Genesis 3:16": ["God’s Judgment on the Woman", "Pain in childbirth and tension in relationships."],
    "Genesis 3:17": ["God’s Judgment on the Man", "Cursed ground; painful labor until death."],
    "Genesis 3:20": ["Adam Names His Wife Eve", "She becomes the mother of all living."],
    "Genesis 3:21": ["God Clothes Adam and Eve", "God makes garments from animal skins."],
    "Genesis 3:22": ["Man Driven Out of Eden", "God removes them from the garden and guards the tree of life."],

    // Genesis Chapter 4
    "Genesis 4:1": ["Birth of Cain and Abel", "Eve gives birth to two sons; Abel keeps flocks, Cain works the soil."],
    "Genesis 4:3": ["God Accepts Abel’s Offering, Not Cain’s", "God looks with favor on Abel’s sacrifice but not on Cain’s."],
    "Genesis 4:6": ["God Warns Cain", "God tells Cain that sin is crouching at his door."],
    "Genesis 4:8": ["Cain Murders Abel", "Cain kills his brother in the field."],
    "Genesis 4:9": ["God Confronts Cain", "“Where is your brother?” — Abel’s blood cries out to God."],
    "Genesis 4:11": ["Cain Is Cursed", "The ground will no longer yield its strength to him."],
    "Genesis 4:13": ["Cain’s Punishment and God’s Protection", "Cain fears for his life; God puts a mark on him."],
    "Genesis 4:16": ["Cain Settles in Nod and Builds a City", "Cain leaves God’s presence and starts a family."],
    "Genesis 4:18": ["Descendants of Cain", "Lamech and his family; growth of skills and violence."],
    "Genesis 4:25": ["Birth of Seth and Worship of God", "God gives Adam and Eve another son; people begin to call on the Lord."],


    // Genesis Chapter 5
    "Genesis 5:1": ["The Family Line of Adam", "God created mankind in His likeness."],
    "Genesis 5:3": ["Adam’s Descendants Begin", "Adam fathers Seth; Adam’s years and death are recorded."],
    "Genesis 5:6": ["Descendants from Seth to Enosh", "The family line continues through Seth’s son Enosh."],
    "Genesis 5:9": ["Enosh to Kenan", "Enosh fathers Kenan; the family line continues."],
    "Genesis 5:12": ["Kenan to Mahalalel", "Kenan fathers Mahalalel; the genealogy continues."],
    "Genesis 5:15": ["Mahalalel to Jared", "Mahalalel fathers Jared; the family line continues."],
    "Genesis 5:18": ["Jared to Enoch", "Jared fathers Enoch; the genealogy continues."],
    "Genesis 5:21": ["Enoch Walks with God", "Enoch pleases God and is taken by Him, not seeing death."],
    "Genesis 5:25": ["Methuselah’s Long Life", "Methuselah lives the longest recorded life and fathers Lamech."],
    "Genesis 5:28": ["Lamech and His Life", "Lamech fathers Noah and speaks about comfort from the cursed ground."],
    "Genesis 5:32": ["Birth of Noah, Shem, Ham, and Japheth", "Noah becomes the father of Shem, Ham, and Japheth."],

    // Genesis Chapter 6
    "Genesis 6:1": ["Wickedness Increases on Earth", "People multiply; violence and corruption fill the world."],
    "Genesis 6:5": ["God’s Sorrow Over Human Evil", "God decides to wipe out mankind because of their wickedness."],
    "Genesis 6:8": ["Noah Finds Favor with God", "Noah receives grace in the eyes of the Lord."],
    "Genesis 6:9": ["Noah’s Righteous Character", "Noah walks faithfully with God; his three sons are named."],
    "Genesis 6:11": ["God Announces the Flood", "The earth is filled with violence; God will destroy it."],
    "Genesis 6:14": ["God’s Instructions to Build the Ark", "Detailed directions for the ark and for saving life."],
    "Genesis 6:22": ["Noah Obeys God Completely", "Noah does everything exactly as God commanded."],

    // Genesis Chapter 7
    "Genesis 7:1": ["God Commands Noah to Enter the Ark", "God tells Noah to take his family and the animals inside."],
    "Genesis 7:6": ["Noah Obeys and Enters the Ark", "Noah, his family, and the animals go in as God commanded."],
    "Genesis 7:11": ["The Flood Begins", "Rain falls, and the fountains of the deep burst open."],
    "Genesis 7:13": ["God Shuts Noah In", "All who entered the ark are sealed inside by the Lord."],
    "Genesis 7:17": ["The Waters Increase Greatly", "The flood rises and covers even the highest mountains."],
    "Genesis 7:21": ["Every Living Thing Destroyed", "All life on land perishes except those in the ark."],
    "Genesis 7:24": ["Flood Waters Remain", "The waters prevail on the earth for 150 days."],

    // Genesis Chapter 8
    "Genesis 8:1": "The Waters Recede",
    "Genesis 8:6": "Noah Sends Out a Raven and Dove",
    "Genesis 8:13": "The Earth Dries",
    "Genesis 8:15": "Leaving the Ark",
    "Genesis 8:20": "Noah's Sacrifice and God's Promise",

    // Genesis Chapter 9
    "Genesis 9:1": "God's Covenant with Noah",
    "Genesis 9:8": "The Sign of the Rainbow",
    "Genesis 9:18": "Noah's Sons",
    "Genesis 9:20": "Noah's Drunkenness and Ham's Sin",
    "Genesis 9:25": "The Curse of Canaan",

    // Genesis Chapter 10
    "Genesis 10:1": "The Table of Nations",
    "Genesis 10:6": "The Sons of Ham",
    "Genesis 10:21": "The Sons of Shem",

    // Genesis Chapter 11
    "Genesis 11:1": "The Tower of Babel",
    "Genesis 11:5": "God Confuses the Languages",
    "Genesis 11:10": "Genealogy from Shem to Abram",
    "Genesis 11:27": "Terah's Family",
    "Genesis 11:31": "Terah Leaves Ur",

    // Genesis Chapter 12
    "Genesis 12:1": "The Call of Abram",
    "Genesis 12:4": "Abram Departs from Haran",
    "Genesis 12:6": "The Promise of the Land",
    "Genesis 12:10": "Abram in Egypt",

    // Genesis Chapter 13
    "Genesis 13:1": "Abram Returns from Egypt",
    "Genesis 13:5": "Abram and Lot Separate",
    "Genesis 13:14": "God Renews His Promise to Abram",

    // Genesis Chapter 14
    "Genesis 14:1": "War of the Kings",
    "Genesis 14:12": "Lot Taken Captive",
    "Genesis 14:14": "Abram Rescues Lot",
    "Genesis 14:18": "Melchizedek Blesses Abram",

    // Genesis Chapter 15
    "Genesis 15:1": "God's Covenant with Abram",
    "Genesis 15:6": "Abram Believed and It Was Credited as Righteousness",
    "Genesis 15:12": "The Promise Confirmed",

    // Genesis Chapter 16
    "Genesis 16:1": "Hagar and Ishmael",
    "Genesis 16:7": "The Angel of the LORD Appears to Hagar",
    "Genesis 16:15": "Ishmael Is Born",

    // Genesis Chapter 17
    "Genesis 17:1": "The Covenant of Circumcision",
    "Genesis 17:5": "Abram Becomes Abraham",
    "Genesis 17:9": "The Sign of Circumcision",
    "Genesis 17:15": "Sarai Becomes Sarah",
    "Genesis 17:17": "Abraham Laughs",
    "Genesis 17:23": "Abraham Obeys God",

    // Genesis Chapter 18
    "Genesis 18:1": "The LORD Visits Abraham",
    "Genesis 18:9": "The Promise of Isaac",
    "Genesis 18:16": "Abraham Intercedes for Sodom",

    // Genesis Chapter 19
    "Genesis 19:1": "Lot Welcomes the Angels",
    "Genesis 19:4": "The Wickedness of Sodom",
    "Genesis 19:12": "Lot and His Family Urged to Flee",
    "Genesis 19:23": "Destruction of Sodom and Gomorrah",
    "Genesis 19:30": "Lot and His Daughters",

    // Genesis Chapter 20
    "Genesis 20:1": "Abraham and Abimelech",
    "Genesis 20:3": "God Warns Abimelech in a Dream",
    "Genesis 20:14": "Abraham and Sarah Restored",

    // Genesis Chapter 21
    "Genesis 21:1": "The Birth of Isaac",
    "Genesis 21:8": "Ishmael Mocks Isaac",
    "Genesis 21:9": "Hagar and Ishmael Sent Away",
    "Genesis 21:14": "God Provides for Hagar",
    "Genesis 21:22": "Abraham's Covenant with Abimelech",

    // Genesis Chapter 22
    "Genesis 22:1": "God Tests Abraham",
    "Genesis 22:3": "Abraham Obeys",
    "Genesis 22:9": "Isaac on the Altar",
    "Genesis 22:11": "The Angel Stops Abraham",
    "Genesis 22:13": "God Provides a Ram",
    "Genesis 22:15": "The LORD Reaffirms His Promise",
    "Genesis 22:20": "The Family of Nahor",

    // Genesis Chapter 23
    "Genesis 23:1": "The Death of Sarah",
    "Genesis 23:3": "Abraham Buys a Burial Site",
    "Genesis 23:19": "Sarah Is Buried",

    // Genesis Chapter 24
    "Genesis 24:1": "A Bride for Isaac",
    "Genesis 24:10": "The Servant's Journey",
    "Genesis 24:15": "Rebekah at the Well",
    "Genesis 24:29": "Laban Welcomes Abraham's Servant",
    "Genesis 24:50": "Rebekah's Family Consents",
    "Genesis 24:62": "Isaac Meets Rebekah",

    // Genesis Chapter 25
    "Genesis 25:1": "Abraham's Death",
    "Genesis 25:12": "The Descendants of Ishmael",
    "Genesis 25:19": "The Birth of Esau and Jacob",
    "Genesis 25:27": "Esau Sells His Birthright",

    // Genesis Chapter 26
    "Genesis 26:1": "Isaac and Abimelech",
    "Genesis 26:12": "Isaac Prospers",
    "Genesis 26:26": "A Covenant with Abimelech",
    "Genesis 26:34": "Esau's Wives",

    // Genesis Chapter 27
    "Genesis 27:1": "Jacob Deceives Isaac",
    "Genesis 27:30": "Esau's Lost Blessing",
    "Genesis 27:41": "Esau Plans to Kill Jacob",

    // Genesis Chapter 28
    "Genesis 28:1": "Isaac Sends Jacob Away",
    "Genesis 28:10": "Jacob's Dream at Bethel",
    "Genesis 28:16": "This Is the House of God",
    "Genesis 28:20": "Jacob's Vow",

    // Genesis Chapter 29
    "Genesis 29:1": "Jacob Meets Rachel",
    "Genesis 29:14": "Jacob Serves Laban",
    "Genesis 29:21": "Jacob Marries Leah and Rachel",
    "Genesis 29:31": "Leah's Children",

    // Genesis Chapter 30
    "Genesis 30:1": "Rachel and Bilhah",
    "Genesis 30:9": "Leah and Zilpah",
    "Genesis 30:22": "The Birth of Joseph",
    "Genesis 30:25": "Jacob Prospers",

    // Genesis Chapter 31
    "Genesis 31:1": "Jacob Flees from Laban",
    "Genesis 31:22": "Laban Pursues Jacob",
    "Genesis 31:43": "The Covenant at Mizpah",

    // Genesis Chapter 32
    "Genesis 32:1": "Jacob Prepares to Meet Esau",
    "Genesis 32:9": "Jacob's Prayer",
    "Genesis 32:22": "Jacob Wrestles with God",
    "Genesis 32:28": "Your Name Shall Be Israel",

    // Genesis Chapter 33
    "Genesis 33:1": "Jacob Meets Esau",
    "Genesis 33:18": "Jacob Settles in Shechem",

    // Genesis Chapter 34
    "Genesis 34:1": "The Defilement of Dinah",
    "Genesis 34:13": "The Deceit of Jacob's Sons",
    "Genesis 34:25": "The Revenge of Simeon and Levi",

    // Genesis Chapter 35
    "Genesis 35:1": "Jacob Returns to Bethel",
    "Genesis 35:16": "The Death of Rachel",
    "Genesis 35:27": "The Death of Isaac",

    // Genesis Chapter 36
    "Genesis 36:1": "The Descendants of Esau",

    // Genesis Chapter 37
    "Genesis 37:1": "Joseph's Dreams",
    "Genesis 37:12": "Joseph Sent to His Brothers",
    "Genesis 37:18": "The Plot Against Joseph",
    "Genesis 37:28": "Joseph Sold into Slavery",
    "Genesis 37:31": "Jacob Mourns for Joseph",

    // Genesis Chapter 38
    "Genesis 38:1": "Judah and Tamar",

    // Genesis Chapter 39
    "Genesis 39:1": "Joseph in Potiphar's House",
    "Genesis 39:6": "Joseph and Potiphar's Wife",
    "Genesis 39:19": "Joseph Imprisoned",

    // Genesis Chapter 40
    "Genesis 40:1": "Joseph Interprets Two Dreams",
    "Genesis 40:20": "The Dreams Come True",

    // Genesis Chapter 41
    "Genesis 41:1": "Pharaoh's Dreams",
    "Genesis 41:14": "Joseph Brought Before Pharaoh",
    "Genesis 41:25": "Joseph Interprets the Dreams",
    "Genesis 41:37": "Joseph Exalted",
    "Genesis 41:46": "The Seven Years of Plenty",
    "Genesis 41:50": "Joseph's Sons",

    // Genesis Chapter 42
    "Genesis 42:1": "Joseph's Brothers Go to Egypt",
    "Genesis 42:6": "Joseph Recognizes His Brothers",
    "Genesis 42:18": "Simeon Held as Hostage",
    "Genesis 42:29": "The Brothers Return to Jacob",

    // Genesis Chapter 43
    "Genesis 43:1": "The Second Journey to Egypt",
    "Genesis 43:16": "Joseph's Brothers Feast with Him",

    // Genesis Chapter 44
    "Genesis 44:1": "The Silver Cup",
    "Genesis 44:14": "Judah Pleads for Benjamin",

    // Genesis Chapter 45
    "Genesis 45:1": "Joseph Reveals Himself",
    "Genesis 45:16": "Pharaoh Invites Jacob's Family",
    "Genesis 45:25": "Jacob Is Told Joseph Lives",

    // Genesis Chapter 46
    "Genesis 46:1": "Jacob's Journey to Egypt",
    "Genesis 46:8": "Jacob's Family Listed",
    "Genesis 46:28": "Jacob Arrives in Egypt",

    // Genesis Chapter 47
    "Genesis 47:1": "Jacob's Family Settles in Goshen",
    "Genesis 47:7": "Jacob Blesses Pharaoh",
    "Genesis 47:13": "Joseph's Management During Famine",
    "Genesis 47:27": "Jacob's Final Days",

    // Genesis Chapter 48
    "Genesis 48:1": "Jacob Blesses Joseph's Sons",
    "Genesis 48:17": "Ephraim Before Manasseh",

    // Genesis Chapter 49
    "Genesis 49:1": "Jacob Blesses His Sons",
    "Genesis 49:29": "Jacob's Death",

    // Genesis Chapter 50
    "Genesis 50:1": "Jacob's Burial",
    "Genesis 50:15": "Joseph Reassures His Brothers",
    "Genesis 50:22": "The Death of Joseph",

    // Exodus Chapter 1
    "Exodus 1:1": "Israel Multiplies in Egypt",
    "Exodus 1:8": "A New Pharaoh Oppresses Israel",
    "Exodus 1:15": "The Hebrew Midwives",

    // Exodus Chapter 2
    "Exodus 2:1": "The Birth of Moses",
    "Exodus 2:5": "Pharaoh's Daughter Finds Moses",
    "Exodus 2:11": "Moses Flees to Midian",
    "Exodus 2:16": "Moses Meets Zipporah",
    "Exodus 2:23": "God Hears Israel's Cry",

    // Exodus Chapter 3
    "Exodus 3:1": "The Burning Bush",
    "Exodus 3:7": "God's Compassion for Israel",
    "Exodus 3:10": "Moses Commissioned",
    "Exodus 3:13": "I AM WHO I AM",

    // Exodus Chapter 4
    "Exodus 4:1": "Three Signs for Moses",
    "Exodus 4:10": "Moses' Objections",
    "Exodus 4:14": "Aaron to Speak for Moses",
    "Exodus 4:18": "Moses Returns to Egypt",
    "Exodus 4:24": "The Bridegroom of Blood",
    "Exodus 4:27": "Moses Meets Aaron",

    // Exodus Chapter 5
    "Exodus 5:1": "Moses and Aaron Before Pharaoh",
    "Exodus 5:6": "Israel's Burden Increased",
    "Exodus 5:19": "The Foremen Complain to Moses",

    // Exodus Chapter 6
    "Exodus 6:1": "God Promises Deliverance",
    "Exodus 6:10": "Moses Speaks to Pharaoh Again",
    "Exodus 6:14": "The Genealogy of Moses and Aaron",

    // Exodus Chapter 7
    "Exodus 7:1": "Moses and Aaron Commissioned",
    "Exodus 7:8": "Aaron's Staff Becomes a Serpent",
    "Exodus 7:14": "First Plague — Water Turned to Blood",

    // Exodus Chapter 8
    "Exodus 8:1": "Second Plague — Frogs",
    "Exodus 8:16": "Third Plague — Gnats",
    "Exodus 8:20": "Fourth Plague — Flies",

    // Exodus Chapter 9
    "Exodus 9:1": "Fifth Plague — Livestock Disease",
    "Exodus 9:8": "Sixth Plague — Boils",
    "Exodus 9:13": "Seventh Plague — Hail",

    // Exodus Chapter 10
    "Exodus 10:1": "Eighth Plague — Locusts",
    "Exodus 10:21": "Ninth Plague — Darkness",

    // Exodus Chapter 11
    "Exodus 11:1": "The Tenth Plague Announced",
    "Exodus 11:4": "Death of the Firstborn Foretold",

    // Exodus Chapter 12
    "Exodus 12:1": "The Passover Instituted",
    "Exodus 12:21": "Instructions for the Passover",
    "Exodus 12:29": "Tenth Plague — Death of the Firstborn",
    "Exodus 12:37": "The Exodus Begins",
    "Exodus 12:43": "Passover Regulations",

    // Exodus Chapter 13
    "Exodus 13:1": "The Consecration of the Firstborn",
    "Exodus 13:17": "God Leads Israel by a Pillar of Cloud and Fire",

    // Exodus Chapter 14
    "Exodus 14:1": "Pharaoh Pursues Israel",
    "Exodus 14:10": "Israel's Fear",
    "Exodus 14:13": "The LORD Will Fight for You",
    "Exodus 14:21": "The Red Sea Parted",
    "Exodus 14:26": "The Egyptians Drowned",

    // Exodus Chapter 15
    "Exodus 15:1": "The Song of Moses",
    "Exodus 15:20": "The Song of Miriam",
    "Exodus 15:22": "The Bitter Waters of Marah",
    "Exodus 15:27": "Twelve Springs at Elim",

    // Exodus Chapter 16
    "Exodus 16:1": "The Wilderness of Sin",
    "Exodus 16:4": "God Provides Manna and Quail",
    "Exodus 16:22": "The Sabbath Rest",
    "Exodus 16:31": "The Manna Described",

    // Exodus Chapter 17
    "Exodus 17:1": "Water from the Rock",
    "Exodus 17:8": "Israel Defeats Amalek",

    // Exodus Chapter 18
    "Exodus 18:1": "Jethro Visits Moses",
    "Exodus 18:13": "Jethro's Advice",

    // Exodus Chapter 19
    "Exodus 19:1": "Israel at Mount Sinai",
    "Exodus 19:3": "The LORD's Proposal",
    "Exodus 19:16": "The LORD Descends on Sinai",

    // Exodus Chapter 20
    "Exodus 20:1": "The Ten Commandments",
    "Exodus 20:18": "The People's Fear",
    "Exodus 20:22": "Instructions About Altars",

    // Exodus Chapter 21
    "Exodus 21:1": "Laws About Servants",
    "Exodus 21:12": "Laws About Personal Injury",
    "Exodus 21:28": "Laws About Property Damage",

    // Exodus Chapter 22
    "Exodus 22:1": "Laws About Restitution",
    "Exodus 22:16": "Laws About Social Responsibility",
    "Exodus 22:21": "Laws About Mercy and Justice",

    // Exodus Chapter 23
    "Exodus 23:1": "Laws About Justice",
    "Exodus 23:10": "Sabbath Laws",
    "Exodus 23:14": "Three Annual Feasts",
    "Exodus 23:20": "God's Angel to Lead Israel",

    // Exodus Chapter 24
    "Exodus 24:1": "The Covenant Confirmed",
    "Exodus 24:9": "Moses Sees God",
    "Exodus 24:12": "Moses on the Mountain",

    // Exodus Chapter 25
    "Exodus 25:1": "Offerings for the Tabernacle",
    "Exodus 25:10": "The Ark of the Covenant",
    "Exodus 25:23": "The Table of Showbread",
    "Exodus 25:31": "The Golden Lampstand",

    // Exodus Chapter 26
    "Exodus 26:1": "The Tabernacle Curtains",
    "Exodus 26:15": "The Frames and Bases",
    "Exodus 26:31": "The Veil",

    // Exodus Chapter 27
    "Exodus 27:1": "The Altar of Burnt Offering",
    "Exodus 27:9": "The Courtyard",
    "Exodus 27:20": "Oil for the Lampstand",

    // Exodus Chapter 28
    "Exodus 28:1": "The Priestly Garments",
    "Exodus 28:6": "The Ephod",
    "Exodus 28:15": "The Breastpiece",
    "Exodus 28:31": "The Robe",
    "Exodus 28:36": "The Turban",

    // Exodus Chapter 29
    "Exodus 29:1": "Consecration of the Priests",
    "Exodus 29:38": "The Daily Offerings",

    // Exodus Chapter 30
    "Exodus 30:1": "The Altar of Incense",
    "Exodus 30:11": "The Census Tax",
    "Exodus 30:17": "The Bronze Basin",
    "Exodus 30:22": "The Anointing Oil",
    "Exodus 30:34": "The Incense",

    // Exodus Chapter 31
    "Exodus 31:1": "Bezalel and Oholiab",
    "Exodus 31:12": "The Sign of the Sabbath",
    "Exodus 31:18": "The Two Tablets",

    // Exodus Chapter 32
    "Exodus 32:1": "The Golden Calf",
    "Exodus 32:7": "God's Anger",
    "Exodus 32:11": "Moses Intercedes",
    "Exodus 32:19": "Moses' Anger",
    "Exodus 32:25": "The Levites' Zeal",
    "Exodus 32:30": "Moses Returns to the Mountain",

    // Exodus Chapter 33
    "Exodus 33:1": "God Commands Israel to Leave Sinai",
    "Exodus 33:7": "The Tent of Meeting",
    "Exodus 33:12": "Moses and God's Presence",
    "Exodus 33:18": "God's Glory Passes By",

    // Exodus Chapter 34
    "Exodus 34:1": "New Stone Tablets",
    "Exodus 34:5": "The LORD Proclaims His Name",
    "Exodus 34:10": "The Covenant Renewed",
    "Exodus 34:27": "Moses Writes the Covenant",
    "Exodus 34:29": "Moses' Radiant Face",

    // Exodus Chapter 35
    "Exodus 35:1": "The Sabbath Reminder",
    "Exodus 35:4": "Offerings for the Tabernacle",
    "Exodus 35:30": "Bezalel and Oholiab Called",

    // Exodus Chapter 36
    "Exodus 36:1": "The Tabernacle Construction Begins",
    "Exodus 36:8": "The Curtains and Coverings",

    // Exodus Chapter 37
    "Exodus 37:1": "The Ark",
    "Exodus 37:10": "The Table",
    "Exodus 37:17": "The Lampstand",
    "Exodus 37:25": "The Altar of Incense",

    // Exodus Chapter 38
    "Exodus 38:1": "The Altar of Burnt Offering",
    "Exodus 38:8": "The Bronze Basin",
    "Exodus 38:9": "The Courtyard",
    "Exodus 38:21": "The Inventory",

    // Exodus Chapter 39
    "Exodus 39:1": "The Priestly Garments Completed",
    "Exodus 39:32": "Moses Inspects the Work",

    // Exodus Chapter 40
    "Exodus 40:1": "The Tabernacle Set Up",
    "Exodus 40:34": "The Glory of the LORD Fills the Tabernacle",

    // Leviticus Chapter 1
    "Leviticus 1:1": "The Burnt Offering",

    // Leviticus Chapter 2
    "Leviticus 2:1": "The Grain Offering",

    // Leviticus Chapter 3
    "Leviticus 3:1": "The Peace Offering",

    // Leviticus Chapter 4
    "Leviticus 4:1": "The Sin Offering",
    "Leviticus 4:13": "Sin Offering for the Congregation",
    "Leviticus 4:22": "Sin Offering for a Leader",
    "Leviticus 4:27": "Sin Offering for a Common Person",

    // Leviticus Chapter 5
    "Leviticus 5:1": "Cases Requiring a Sin Offering",
    "Leviticus 5:14": "The Guilt Offering",

    // Leviticus Chapter 6
    "Leviticus 6:1": "The Guilt Offering for Deception",
    "Leviticus 6:8": "Instructions for the Burnt Offering",
    "Leviticus 6:14": "Instructions for the Grain Offering",
    "Leviticus 6:24": "Instructions for the Sin Offering",

    // Leviticus Chapter 7
    "Leviticus 7:1": "Instructions for the Guilt Offering",
    "Leviticus 7:11": "Instructions for the Peace Offering",
    "Leviticus 7:22": "Prohibition Against Fat and Blood",
    "Leviticus 7:28": "The Priests' Portion",

    // Leviticus Chapter 8
    "Leviticus 8:1": "The Consecration of Aaron and His Sons",

    // Leviticus Chapter 9
    "Leviticus 9:1": "The First Offerings of Aaron",
    "Leviticus 9:23": "The Glory of the LORD Appears",

    // Leviticus Chapter 10
    "Leviticus 10:1": "Nadab and Abihu Killed",
    "Leviticus 10:8": "Restrictions for Priests",
    "Leviticus 10:16": "Moses' Anger at Aaron's Sons",

    // Leviticus Chapter 11
    "Leviticus 11:1": "Clean and Unclean Animals",
    "Leviticus 11:24": "Laws About Carcasses",
    "Leviticus 11:46": "Summary of Food Laws",

    // Leviticus Chapter 12
    "Leviticus 12:1": "Purification After Childbirth",

    // Leviticus Chapter 13
    "Leviticus 13:1": "Laws About Skin Diseases",
    "Leviticus 13:47": "Laws About Mildew",

    // Leviticus Chapter 14
    "Leviticus 14:1": "Cleansing of Skin Diseases",
    "Leviticus 14:33": "Cleansing of Mildew in Houses",

    // Leviticus Chapter 15
    "Leviticus 15:1": "Laws About Bodily Discharges",

    // Leviticus Chapter 16
    "Leviticus 16:1": "The Day of Atonement",
    "Leviticus 16:29": "An Eternal Statute",

    // Leviticus Chapter 17
    "Leviticus 17:1": "The Sanctity of Blood",

    // Leviticus Chapter 18
    "Leviticus 18:1": "Unlawful Sexual Relations",

    // Leviticus Chapter 19
    "Leviticus 19:1": "You Shall Be Holy",
    "Leviticus 19:9": "Laws About Harvest",
    "Leviticus 19:11": "Laws About Honesty",
    "Leviticus 19:18": "Love Your Neighbor as Yourself",
    "Leviticus 19:23": "Various Laws",

    // Leviticus Chapter 20
    "Leviticus 20:1": "Punishments for Disobedience",

    // Leviticus Chapter 21
    "Leviticus 21:1": "Holiness Required of Priests",

    // Leviticus Chapter 22
    "Leviticus 22:1": "Regulations for Holy Offerings",

    // Leviticus Chapter 23
    "Leviticus 23:1": "The Appointed Feasts",
    "Leviticus 23:3": "The Sabbath",
    "Leviticus 23:4": "Passover and Unleavened Bread",
    "Leviticus 23:9": "Firstfruits",
    "Leviticus 23:15": "The Feast of Weeks",
    "Leviticus 23:23": "The Feast of Trumpets",
    "Leviticus 23:26": "The Day of Atonement",
    "Leviticus 23:33": "The Feast of Tabernacles",

    // Leviticus Chapter 24
    "Leviticus 24:1": "The Oil and the Bread",
    "Leviticus 24:10": "The Punishment for Blasphemy",

    // Leviticus Chapter 25
    "Leviticus 25:1": "The Sabbath Year",
    "Leviticus 25:8": "The Year of Jubilee",
    "Leviticus 25:23": "Redemption of Property",
    "Leviticus 25:39": "Redemption of the Poor",

    // Leviticus Chapter 26
    "Leviticus 26:1": "Blessings for Obedience",
    "Leviticus 26:14": "Curses for Disobedience",
    "Leviticus 26:40": "Repentance and Restoration",

    // Leviticus Chapter 27
    "Leviticus 27:1": "Laws About Vows and Tithes",

    // Numbers Chapter 1
    "Numbers 1:1": "The Census of Israel",

    // Numbers Chapter 2
    "Numbers 2:1": "The Arrangement of the Camps",

    // Numbers Chapter 3
    "Numbers 3:1": "The Sons of Aaron",
    "Numbers 3:5": "The Duties of the Levites",
    "Numbers 3:40": "The Redemption of the Firstborn",

    // Numbers Chapter 4
    "Numbers 4:1": "The Duties of the Kohathites",
    "Numbers 4:21": "The Duties of the Gershonites",
    "Numbers 4:29": "The Duties of the Merarites",

    // Numbers Chapter 5
    "Numbers 5:1": "The Purity of the Camp",
    "Numbers 5:5": "Restitution for Wrongs",
    "Numbers 5:11": "The Test for an Unfaithful Wife",

    // Numbers Chapter 6
    "Numbers 6:1": "The Nazirite Vow",
    "Numbers 6:22": "The Priestly Blessing",

    // Numbers Chapter 7
    "Numbers 7:1": "Offerings for the Tabernacle",

    // Numbers Chapter 8
    "Numbers 8:1": "The Lampstand",
    "Numbers 8:5": "The Cleansing of the Levites",

    // Numbers Chapter 9
    "Numbers 9:1": "The Second Passover",
    "Numbers 9:15": "The Cloud Above the Tabernacle",

    // Numbers Chapter 10
    "Numbers 10:1": "The Silver Trumpets",
    "Numbers 10:11": "Israel Departs from Sinai",
    "Numbers 10:29": "Moses Invites Hobab",

    // Numbers Chapter 11
    "Numbers 11:1": "The Complaining at Taberah",
    "Numbers 11:4": "The Craving for Meat",
    "Numbers 11:16": "Seventy Elders Appointed",
    "Numbers 11:31": "The Quail Provided",

    // Numbers Chapter 12
    "Numbers 12:1": "Miriam and Aaron Oppose Moses",
    "Numbers 12:9": "Miriam Struck with Leprosy",

    // Numbers Chapter 13
    "Numbers 13:1": "The Twelve Spies Sent",
    "Numbers 13:17": "The Spies Explore Canaan",
    "Numbers 13:25": "The Report of the Spies",

    // Numbers Chapter 14
    "Numbers 14:1": "Israel Rebels",
    "Numbers 14:10": "Moses Intercedes",
    "Numbers 14:20": "God's Judgment Pronounced",
    "Numbers 14:39": "Israel's Presumptuous Attempt to Enter",

    // Numbers Chapter 15
    "Numbers 15:1": "Laws About Offerings",
    "Numbers 15:22": "Unintentional Sin",
    "Numbers 15:32": "The Sabbath Breaker Stoned",
    "Numbers 15:37": "Tassels on Garments",

    // Numbers Chapter 16
    "Numbers 16:1": "Korah's Rebellion",
    "Numbers 16:23": "God's Judgment on the Rebels",
    "Numbers 16:41": "The Plague",

    // Numbers Chapter 17
    "Numbers 17:1": "Aaron's Staff Buds",

    // Numbers Chapter 18
    "Numbers 18:1": "Duties and Privileges of Priests and Levites",

    // Numbers Chapter 19
    "Numbers 19:1": "The Water of Purification",

    // Numbers Chapter 20
    "Numbers 20:1": "Miriam's Death",
    "Numbers 20:2": "Water from the Rock",
    "Numbers 20:14": "Edom Refuses Passage",
    "Numbers 20:22": "Aaron's Death",

    // Numbers Chapter 21
    "Numbers 21:1": "Victory Over the Canaanites",
    "Numbers 21:4": "The Bronze Serpent",
    "Numbers 21:10": "Journey to Moab",
    "Numbers 21:21": "Victory Over Sihon",
    "Numbers 21:33": "Victory Over Og",

    // Numbers Chapter 22
    "Numbers 22:1": "Balak Summons Balaam",
    "Numbers 22:22": "Balaam's Donkey",

    // Numbers Chapter 23
    "Numbers 23:1": "Balaam's First Oracle",
    "Numbers 23:13": "Balaam's Second Oracle",

    // Numbers Chapter 24
    "Numbers 24:1": "Balaam's Third Oracle",
    "Numbers 24:15": "Balaam's Fourth Oracle",

    // Numbers Chapter 25
    "Numbers 25:1": "Israel's Idolatry at Peor",
    "Numbers 25:10": "Phinehas' Zeal",

    // Numbers Chapter 26
    "Numbers 26:1": "The Second Census",

    // Numbers Chapter 27
    "Numbers 27:1": "The Daughters of Zelophehad",
    "Numbers 27:12": "Joshua to Succeed Moses",

    // Numbers Chapter 28
    "Numbers 28:1": "Daily Offerings",
    "Numbers 28:9": "Sabbath Offerings",
    "Numbers 28:11": "Monthly Offerings",
    "Numbers 28:16": "Passover and Unleavened Bread",
    "Numbers 28:26": "Feast of Weeks",

    // Numbers Chapter 29
    "Numbers 29:1": "Feast of Trumpets",
    "Numbers 29:7": "Day of Atonement",
    "Numbers 29:12": "Feast of Tabernacles",

    // Numbers Chapter 30
    "Numbers 30:1": "Laws About Vows",

    // Numbers Chapter 31
    "Numbers 31:1": "Vengeance on Midian",
    "Numbers 31:25": "Division of the Spoil",

    // Numbers Chapter 32
    "Numbers 32:1": "Reuben and Gad Settle East of Jordan",

    // Numbers Chapter 33
    "Numbers 33:1": "Israel's Journey from Egypt",
    "Numbers 33:50": "Instructions for Canaan",

    // Numbers Chapter 34
    "Numbers 34:1": "The Boundaries of Canaan",
    "Numbers 34:16": "Leaders to Divide the Land",

    // Numbers Chapter 35
    "Numbers 35:1": "Cities for the Levites",
    "Numbers 35:9": "Cities of Refuge",

    // Numbers Chapter 36
    "Numbers 36:1": "Inheritance of Zelophehad's Daughters",

    // Deuteronomy Chapter 1
    "Deuteronomy 1:1": "Moses Recounts Israel's History",
    "Deuteronomy 1:6": "The Command to Leave Horeb",
    "Deuteronomy 1:9": "The Appointment of Leaders",
    "Deuteronomy 1:19": "Israel's Refusal to Enter Canaan",

    // Deuteronomy Chapter 2
    "Deuteronomy 2:1": "Wandering in the Wilderness",
    "Deuteronomy 2:24": "Victory Over Sihon",

    // Deuteronomy Chapter 3
    "Deuteronomy 3:1": "Victory Over Og",
    "Deuteronomy 3:12": "The Land Divided",
    "Deuteronomy 3:23": "Moses Forbidden to Cross Jordan",

    // Deuteronomy Chapter 4
    "Deuteronomy 4:1": "Obedience Commanded",
    "Deuteronomy 4:15": "Warning Against Idolatry",
    "Deuteronomy 4:41": "Cities of Refuge East of Jordan",

    // Deuteronomy Chapter 5
    "Deuteronomy 5:1": "The Ten Commandments Repeated",
    "Deuteronomy 5:22": "Moses the Mediator",

    // Deuteronomy Chapter 6
    "Deuteronomy 6:1": "The Greatest Commandment",
    "Deuteronomy 6:4": "Hear, O Israel: The LORD Our God Is One",
    "Deuteronomy 6:10": "Warning Against Forgetting God",
    "Deuteronomy 6:20": "Teach Your Children",

    // Deuteronomy Chapter 7
    "Deuteronomy 7:1": "Destroy the Nations",
    "Deuteronomy 7:7": "God's Love for Israel",
    "Deuteronomy 7:12": "Blessings of Obedience",

    // Deuteronomy Chapter 8
    "Deuteronomy 8:1": "Remember the LORD",
    "Deuteronomy 8:11": "Warning Against Pride",

    // Deuteronomy Chapter 9
    "Deuteronomy 9:1": "Not Because of Israel's Righteousness",
    "Deuteronomy 9:7": "The Golden Calf Remembered",
    "Deuteronomy 9:25": "Moses' Intercession",

    // Deuteronomy Chapter 10
    "Deuteronomy 10:1": "New Tablets of Stone",
    "Deuteronomy 10:12": "What Does the LORD Require?",

    // Deuteronomy Chapter 11
    "Deuteronomy 11:1": "Love and Obey the LORD",
    "Deuteronomy 11:26": "Blessing and Curse",

    // Deuteronomy Chapter 12
    "Deuteronomy 12:1": "One Place for Worship",
    "Deuteronomy 12:29": "Warning Against Idolatry",

    // Deuteronomy Chapter 13
    "Deuteronomy 13:1": "Punishment for Idolatry",

    // Deuteronomy Chapter 14
    "Deuteronomy 14:1": "Clean and Unclean Food",
    "Deuteronomy 14:22": "Tithes",

    // Deuteronomy Chapter 15
    "Deuteronomy 15:1": "The Sabbath Year",
    "Deuteronomy 15:7": "Generosity to the Poor",
    "Deuteronomy 15:12": "Release of Hebrew Servants",
    "Deuteronomy 15:19": "Firstborn Animals",

    // Deuteronomy Chapter 16
    "Deuteronomy 16:1": "Passover",
    "Deuteronomy 16:9": "Feast of Weeks",
    "Deuteronomy 16:13": "Feast of Tabernacles",
    "Deuteronomy 16:18": "Judges and Officers",

    // Deuteronomy Chapter 17
    "Deuteronomy 17:1": "Sacrifices Must Be Unblemished",
    "Deuteronomy 17:2": "Punishment for Idolatry",
    "Deuteronomy 17:8": "Difficult Cases",
    "Deuteronomy 17:14": "Instructions About a King",

    // Deuteronomy Chapter 18
    "Deuteronomy 18:1": "Provision for Priests and Levites",
    "Deuteronomy 18:9": "Detestable Practices Forbidden",
    "Deuteronomy 18:15": "A Prophet Like Moses",

    // Deuteronomy Chapter 19
    "Deuteronomy 19:1": "Cities of Refuge",
    "Deuteronomy 19:14": "Property Boundaries",
    "Deuteronomy 19:15": "Witnesses",

    // Deuteronomy Chapter 20
    "Deuteronomy 20:1": "Laws About Warfare",

    // Deuteronomy Chapter 21
    "Deuteronomy 21:1": "Atonement for Unsolved Murder",
    "Deuteronomy 21:10": "Marrying a Captive Woman",
    "Deuteronomy 21:15": "Rights of the Firstborn",
    "Deuteronomy 21:18": "A Rebellious Son",
    "Deuteronomy 21:22": "Hanging on a Tree",

    // Deuteronomy Chapter 22
    "Deuteronomy 22:1": "Various Laws",

    // Deuteronomy Chapter 23
    "Deuteronomy 23:1": "Exclusion from the Assembly",
    "Deuteronomy 23:9": "Uncleanness in the Camp",
    "Deuteronomy 23:15": "Miscellaneous Laws",

    // Deuteronomy Chapter 24
    "Deuteronomy 24:1": "Laws About Marriage and Divorce",
    "Deuteronomy 24:5": "Miscellaneous Laws",
    "Deuteronomy 24:14": "Justice for the Oppressed",

    // Deuteronomy Chapter 25
    "Deuteronomy 25:1": "Fairness in Punishment",
    "Deuteronomy 25:5": "Levirate Marriage",
    "Deuteronomy 25:13": "Honest Weights",
    "Deuteronomy 25:17": "Blot Out Amalek",

    // Deuteronomy Chapter 26
    "Deuteronomy 26:1": "Firstfruits and Tithes",
    "Deuteronomy 26:16": "You Are God's Treasured Possession",

    // Deuteronomy Chapter 27
    "Deuteronomy 27:1": "The Altar on Mount Ebal",
    "Deuteronomy 27:11": "Curses from Mount Ebal",

    // Deuteronomy Chapter 28
    "Deuteronomy 28:1": "Blessings for Obedience",
    "Deuteronomy 28:15": "Curses for Disobedience",

    // Deuteronomy Chapter 29
    "Deuteronomy 29:1": "The Covenant in Moab",
    "Deuteronomy 29:22": "Consequences of Breaking the Covenant",

    // Deuteronomy Chapter 30
    "Deuteronomy 30:1": "Restoration Promised",
    "Deuteronomy 30:11": "Choose Life",

    // Deuteronomy Chapter 31
    "Deuteronomy 31:1": "Joshua to Succeed Moses",
    "Deuteronomy 31:9": "The Reading of the Law",
    "Deuteronomy 31:14": "Moses and Joshua Commissioned",
    "Deuteronomy 31:24": "The Law Placed Beside the Ark",

    // Deuteronomy Chapter 32
    "Deuteronomy 32:1": "The Song of Moses",
    "Deuteronomy 32:48": "Moses to Die on Mount Nebo",

    // Deuteronomy Chapter 33
    "Deuteronomy 33:1": "Moses Blesses the Tribes",

    // Deuteronomy Chapter 34
    "Deuteronomy 34:1": "The Death of Moses",
    "Deuteronomy 34:9": "Joshua Filled with Wisdom",
    "Deuteronomy 34:10": "Moses' Greatness",

    // Joshua Chapter 1
    "Joshua 1:1": "God Commissions Joshua",
    "Joshua 1:10": "Preparations to Cross Jordan",

    // Joshua Chapter 2
    "Joshua 2:1": "Rahab and the Spies",
    "Joshua 2:15": "Rahab Helps the Spies Escape",
    "Joshua 2:22": "The Spies Return",

    // Joshua Chapter 3
    "Joshua 3:1": "Crossing the Jordan",
    "Joshua 3:14": "The Waters of Jordan Cut Off",

    // Joshua Chapter 4
    "Joshua 4:1": "Twelve Stones Taken from Jordan",
    "Joshua 4:14": "The LORD Exalts Joshua",
    "Joshua 4:19": "The Stones Set Up at Gilgal",

    // Joshua Chapter 5
    "Joshua 5:1": "Circumcision at Gilgal",
    "Joshua 5:10": "The First Passover in Canaan",
    "Joshua 5:13": "The Commander of the LORD's Army",

    // Joshua Chapter 6
    "Joshua 6:1": "The Fall of Jericho",
    "Joshua 6:15": "The Seventh Day",
    "Joshua 6:22": "Rahab and Her Family Spared",
    "Joshua 6:26": "The Curse on Jericho",

    // Joshua Chapter 7
    "Joshua 7:1": "Achan's Sin",
    "Joshua 7:2": "Defeat at Ai",
    "Joshua 7:6": "Joshua's Prayer",
    "Joshua 7:10": "Achan Discovered and Punished",

    // Joshua Chapter 8
    "Joshua 8:1": "The Conquest of Ai",
    "Joshua 8:30": "The Altar on Mount Ebal",

    // Joshua Chapter 9
    "Joshua 9:1": "The Gibeonite Deception",
    "Joshua 9:16": "The Deception Discovered",

    // Joshua Chapter 10
    "Joshua 10:1": "Five Kings Attack Gibeon",
    "Joshua 10:6": "Joshua Defeats the Five Kings",
    "Joshua 10:12": "The Sun Stands Still",
    "Joshua 10:16": "The Five Kings Executed",
    "Joshua 10:28": "Conquest of Southern Canaan",

    // Joshua Chapter 11
    "Joshua 11:1": "Northern Kings Defeated",
    "Joshua 11:16": "Summary of Conquests",

    // Joshua Chapter 12
    "Joshua 12:1": "Kings Defeated East of Jordan",
    "Joshua 12:7": "Kings Defeated West of Jordan",

    // Joshua Chapter 13
    "Joshua 13:1": "Land Still to Be Conquered",
    "Joshua 13:8": "The Land East of Jordan",
    "Joshua 13:15": "Reuben's Inheritance",
    "Joshua 13:24": "Gad's Inheritance",
    "Joshua 13:29": "Half-Tribe of Manasseh's Inheritance",

    // Joshua Chapter 14
    "Joshua 14:1": "The Land West of Jordan",
    "Joshua 14:6": "Caleb's Inheritance",

    // Joshua Chapter 15
    "Joshua 15:1": "Judah's Inheritance",
    "Joshua 15:13": "Caleb Conquers Hebron",
    "Joshua 15:20": "The Cities of Judah",

    // Joshua Chapter 16
    "Joshua 16:1": "Ephraim's Inheritance",

    // Joshua Chapter 17
    "Joshua 17:1": "Manasseh's Inheritance",
    "Joshua 17:14": "More Land for Joseph's Tribes",

    // Joshua Chapter 18
    "Joshua 18:1": "The Tabernacle at Shiloh",
    "Joshua 18:2": "Seven Tribes Receive Their Land",
    "Joshua 18:11": "Benjamin's Inheritance",

    // Joshua Chapter 19
    "Joshua 19:1": "Simeon's Inheritance",
    "Joshua 19:10": "Zebulun's Inheritance",
    "Joshua 19:17": "Issachar's Inheritance",
    "Joshua 19:24": "Asher's Inheritance",
    "Joshua 19:32": "Naphtali's Inheritance",
    "Joshua 19:40": "Dan's Inheritance",
    "Joshua 19:49": "Joshua's Inheritance",

    // Joshua Chapter 20
    "Joshua 20:1": "The Cities of Refuge",

    // Joshua Chapter 21
    "Joshua 21:1": "Cities for the Levites",
    "Joshua 21:43": "The LORD Gives Rest to Israel",

    // Joshua Chapter 22
    "Joshua 22:1": "Eastern Tribes Return Home",
    "Joshua 22:10": "The Altar of Witness",
    "Joshua 22:21": "The Eastern Tribes Explain",

    // Joshua Chapter 23
    "Joshua 23:1": "Joshua's Farewell to Leaders",

    // Joshua Chapter 24
    "Joshua 24:1": "The Covenant at Shechem",
    "Joshua 24:14": "Choose This Day Whom You Will Serve",
    "Joshua 24:29": "Joshua's Death",

    // Judges Chapter 1
    "Judges 1:1": "Judah and Simeon Fight the Canaanites",
    "Judges 1:22": "The House of Joseph Captures Bethel",
    "Judges 1:27": "Failure to Complete the Conquest",

    // Judges Chapter 2
    "Judges 2:1": "The Angel of the LORD at Bokim",
    "Judges 2:6": "The Death of Joshua",
    "Judges 2:10": "Israel's Disobedience",
    "Judges 2:16": "The Pattern of the Judges",

    // Judges Chapter 3
    "Judges 3:1": "Nations Left to Test Israel",
    "Judges 3:7": "Othniel",
    "Judges 3:12": "Ehud",
    "Judges 3:31": "Shamgar",

    // Judges Chapter 4
    "Judges 4:1": "Deborah and Barak",
    "Judges 4:17": "Jael Kills Sisera",

    // Judges Chapter 5
    "Judges 5:1": "The Song of Deborah",

    // Judges Chapter 6
    "Judges 6:1": "Midian Oppresses Israel",
    "Judges 6:11": "The Call of Gideon",
    "Judges 6:25": "Gideon Destroys Baal's Altar",
    "Judges 6:33": "Gideon Asks for a Sign",

    // Judges Chapter 7
    "Judges 7:1": "Gideon's Army Reduced",
    "Judges 7:9": "Gideon Reassured",
    "Judges 7:15": "Gideon's Victory Over Midian",

    // Judges Chapter 8
    "Judges 8:1": "Ephraim's Complaint",
    "Judges 8:4": "Pursuit of Zebah and Zalmunna",
    "Judges 8:22": "Gideon's Ephod",
    "Judges 8:29": "Gideon's Death",

    // Judges Chapter 9
    "Judges 9:1": "Abimelech Becomes King",
    "Judges 9:7": "Jotham's Parable",
    "Judges 9:22": "Gaal's Rebellion",
    "Judges 9:50": "Abimelech's Death",

    // Judges Chapter 10
    "Judges 10:1": "Tola and Jair",
    "Judges 10:6": "Israel Oppressed Again",

    // Judges Chapter 11
    "Judges 11:1": "Jephthah Called to Lead",
    "Judges 11:12": "Jephthah Negotiates",
    "Judges 11:29": "Jephthah's Vow",
    "Judges 11:34": "Jephthah's Daughter",

    // Judges Chapter 12
    "Judges 12:1": "Ephraim's Jealousy",
    "Judges 12:8": "Ibzan, Elon, and Abdon",

    // Judges Chapter 13
    "Judges 13:1": "The Birth of Samson",
    "Judges 13:24": "Samson's Birth",

    // Judges Chapter 14
    "Judges 14:1": "Samson's Marriage",
    "Judges 14:10": "Samson's Riddle",

    // Judges Chapter 15
    "Judges 15:1": "Samson's Revenge",
    "Judges 15:9": "Samson Defeats the Philistines",

    // Judges Chapter 16
    "Judges 16:1": "Samson at Gaza",
    "Judges 16:4": "Samson and Delilah",
    "Judges 16:23": "Samson's Death",

    // Judges Chapter 17
    "Judges 17:1": "Micah's Idols",

    // Judges Chapter 18
    "Judges 18:1": "The Danites Seek Territory",
    "Judges 18:14": "The Danites Take Micah's Idols",

    // Judges Chapter 19
    "Judges 19:1": "The Levite and His Concubine",
    "Judges 19:22": "The Crime at Gibeah",

    // Judges Chapter 20
    "Judges 20:1": "War Against Benjamin",
    "Judges 20:29": "Benjamin Defeated",

    // Judges Chapter 21
    "Judges 21:1": "Wives for the Benjamites",

    // Ruth Chapter 1
    "Ruth 1:1": "Naomi and Her Family in Moab",
    "Ruth 1:6": "Naomi Returns with Ruth",
    "Ruth 1:19": "Naomi and Ruth Arrive in Bethlehem",

    // Ruth Chapter 2
    "Ruth 2:1": "Ruth Meets Boaz",
    "Ruth 2:17": "Ruth Returns to Naomi",

    // Ruth Chapter 3
    "Ruth 3:1": "Ruth's Appeal to Boaz",
    "Ruth 3:14": "Ruth Returns to Naomi",

    // Ruth Chapter 4
    "Ruth 4:1": "Boaz Redeems Ruth",
    "Ruth 4:13": "Boaz Marries Ruth",
    "Ruth 4:18": "The Genealogy of David",

    // 1 Samuel Chapter 1
    "1 Samuel 1:1": "Elkanah and His Wives",
    "1 Samuel 1:9": "Hannah's Prayer",
    "1 Samuel 1:19": "The Birth of Samuel",

    // 1 Samuel Chapter 2
    "1 Samuel 2:1": "Hannah's Prayer of Thanksgiving",
    "1 Samuel 2:12": "Eli's Wicked Sons",
    "1 Samuel 2:18": "Samuel's Ministry",
    "1 Samuel 2:22": "Eli Rebukes His Sons",
    "1 Samuel 2:27": "A Prophecy Against Eli's House",

    // 1 Samuel Chapter 3
    "1 Samuel 3:1": "The LORD Calls Samuel",
    "1 Samuel 3:11": "The LORD's Message to Samuel",
    "1 Samuel 3:19": "Samuel Established as a Prophet",

    // 1 Samuel Chapter 4
    "1 Samuel 4:1": "The Ark Captured by the Philistines",
    "1 Samuel 4:12": "The Death of Eli",

    // 1 Samuel Chapter 5
    "1 Samuel 5:1": "The Ark in Philistine Territory",

    // 1 Samuel Chapter 6
    "1 Samuel 6:1": "The Ark Returned to Israel",
    "1 Samuel 6:19": "Judgment at Beth Shemesh",

    // 1 Samuel Chapter 7
    "1 Samuel 7:1": "The Ark at Kiriath Jearim",
    "1 Samuel 7:3": "Samuel Leads Israel to Victory",
    "1 Samuel 7:15": "Samuel as Judge",

    // 1 Samuel Chapter 8
    "1 Samuel 8:1": "Israel Demands a King",
    "1 Samuel 8:10": "Samuel Warns the People",

    // 1 Samuel Chapter 9
    "1 Samuel 9:1": "Saul Meets Samuel",
    "1 Samuel 9:15": "The LORD Reveals His Plan",

    // 1 Samuel Chapter 10
    "1 Samuel 10:1": "Samuel Anoints Saul",
    "1 Samuel 10:9": "Saul Prophesies",
    "1 Samuel 10:17": "Saul Chosen as King",

    // 1 Samuel Chapter 11
    "1 Samuel 11:1": "Saul Defeats the Ammonites",
    "1 Samuel 11:12": "Saul Confirmed as King",

    // 1 Samuel Chapter 12
    "1 Samuel 12:1": "Samuel's Farewell Speech",

    // 1 Samuel Chapter 13
    "1 Samuel 13:1": "Saul's Unlawful Sacrifice",
    "1 Samuel 13:15": "Israel Without Weapons",

    // 1 Samuel Chapter 14
    "1 Samuel 14:1": "Jonathan's Victory",
    "1 Samuel 14:24": "Saul's Rash Oath",
    "1 Samuel 14:47": "Saul's Military Victories",

    // 1 Samuel Chapter 15
    "1 Samuel 15:1": "Saul Defeats Amalek",
    "1 Samuel 15:10": "Saul Rejected as King",
    "1 Samuel 15:32": "Samuel Kills Agag",

    // 1 Samuel Chapter 16
    "1 Samuel 16:1": "David Anointed King",
    "1 Samuel 16:14": "David Serves Saul",

    // 1 Samuel Chapter 17
    "1 Samuel 17:1": "Goliath's Challenge",
    "1 Samuel 17:12": "David Accepts the Challenge",
    "1 Samuel 17:41": "David Kills Goliath",

    // 1 Samuel Chapter 18
    "1 Samuel 18:1": "Jonathan and David's Friendship",
    "1 Samuel 18:6": "Saul's Jealousy of David",
    "1 Samuel 18:17": "David Marries Michal",

    // 1 Samuel Chapter 19
    "1 Samuel 19:1": "Saul Tries to Kill David",
    "1 Samuel 19:8": "Michal Saves David",
    "1 Samuel 19:18": "David Flees to Samuel",

    // 1 Samuel Chapter 20
    "1 Samuel 20:1": "Jonathan Helps David",
    "1 Samuel 20:24": "Jonathan Confirms Saul's Intent",
    "1 Samuel 20:41": "David and Jonathan's Farewell",

    // 1 Samuel Chapter 21
    "1 Samuel 21:1": "David at Nob",
    "1 Samuel 21:10": "David at Gath",

    // 1 Samuel Chapter 22
    "1 Samuel 22:1": "David at Adullam and Mizpah",
    "1 Samuel 22:6": "Saul Kills the Priests of Nob",
    "1 Samuel 22:20": "Abiathar Escapes to David",

    // 1 Samuel Chapter 23
    "1 Samuel 23:1": "David Saves Keilah",
    "1 Samuel 23:14": "Saul Pursues David",
    "1 Samuel 23:19": "David Betrayed by the Ziphites",

    // 1 Samuel Chapter 24
    "1 Samuel 24:1": "David Spares Saul's Life",
    "1 Samuel 24:16": "Saul's Remorse",

    // 1 Samuel Chapter 25
    "1 Samuel 25:1": "The Death of Samuel",
    "1 Samuel 25:2": "David, Nabal, and Abigail",
    "1 Samuel 25:39": "David Marries Abigail",

    // 1 Samuel Chapter 26
    "1 Samuel 26:1": "David Spares Saul Again",
    "1 Samuel 26:17": "David Rebukes Saul",

    // 1 Samuel Chapter 27
    "1 Samuel 27:1": "David Lives Among the Philistines",

    // 1 Samuel Chapter 28
    "1 Samuel 28:1": "Saul and the Medium at Endor",
    "1 Samuel 28:15": "Samuel's Spirit Appears",

    // 1 Samuel Chapter 29
    "1 Samuel 29:1": "The Philistines Reject David",

    // 1 Samuel Chapter 30
    "1 Samuel 30:1": "David Defeats the Amalekites",
    "1 Samuel 30:21": "The Spoil Divided",

    // 1 Samuel Chapter 31
    "1 Samuel 31:1": "Saul's Death",
    "1 Samuel 31:11": "The Men of Jabesh Gilead Rescue Saul's Body",

    // 2 Samuel Chapter 1
    "2 Samuel 1:1": "David Learns of Saul's Death",
    "2 Samuel 1:17": "David's Lament for Saul and Jonathan",

    // 2 Samuel Chapter 2
    "2 Samuel 2:1": "David Anointed King of Judah",
    "2 Samuel 2:8": "Ish-bosheth Made King of Israel",
    "2 Samuel 2:12": "The Battle of Gibeon",
    "2 Samuel 2:18": "Asahel Killed",

    // 2 Samuel Chapter 3
    "2 Samuel 3:1": "David's Sons",
    "2 Samuel 3:6": "Abner Defects to David",
    "2 Samuel 3:22": "Joab Murders Abner",
    "2 Samuel 3:31": "David Mourns Abner",

    // 2 Samuel Chapter 4
    "2 Samuel 4:1": "Ish-bosheth Murdered",

    // 2 Samuel Chapter 5
    "2 Samuel 5:1": "David Anointed King of Israel",
    "2 Samuel 5:6": "David Conquers Jerusalem",
    "2 Samuel 5:11": "David's Palace and Family",
    "2 Samuel 5:17": "David Defeats the Philistines",

    // 2 Samuel Chapter 6
    "2 Samuel 6:1": "The Ark Brought to Jerusalem",
    "2 Samuel 6:12": "David Dances Before the LORD",
    "2 Samuel 6:20": "Michal's Contempt",

    // 2 Samuel Chapter 7
    "2 Samuel 7:1": "God's Covenant with David",
    "2 Samuel 7:18": "David's Prayer",

    // 2 Samuel Chapter 8
    "2 Samuel 8:1": "David's Military Victories",
    "2 Samuel 8:15": "David's Officials",

    // 2 Samuel Chapter 9
    "2 Samuel 9:1": "David's Kindness to Mephibosheth",

    // 2 Samuel Chapter 10
    "2 Samuel 10:1": "David Defeats Ammon and Aram",

    // 2 Samuel Chapter 11
    "2 Samuel 11:1": "David and Bathsheba",
    "2 Samuel 11:14": "David's Plot Against Uriah",
    "2 Samuel 11:26": "David Marries Bathsheba",

    // 2 Samuel Chapter 12
    "2 Samuel 12:1": "Nathan Rebukes David",
    "2 Samuel 12:13": "David's Son Dies",
    "2 Samuel 12:24": "Solomon Is Born",
    "2 Samuel 12:26": "David Captures Rabbah",

    // 2 Samuel Chapter 13
    "2 Samuel 13:1": "Amnon and Tamar",
    "2 Samuel 13:23": "Absalom Kills Amnon",

    // 2 Samuel Chapter 14
    "2 Samuel 14:1": "Absalom Returns",
    "2 Samuel 14:25": "Absalom's Appearance",
    "2 Samuel 14:28": "Absalom Reconciled to David",

    // 2 Samuel Chapter 15
    "2 Samuel 15:1": "Absalom's Conspiracy",
    "2 Samuel 15:13": "David Flees Jerusalem",

    // 2 Samuel Chapter 16
    "2 Samuel 16:1": "Ziba Deceives David",
    "2 Samuel 16:5": "Shimei Curses David",
    "2 Samuel 16:15": "Absalom Enters Jerusalem",

    // 2 Samuel Chapter 17
    "2 Samuel 17:1": "Ahithophel's Counsel",
    "2 Samuel 17:15": "Hushai Warns David",
    "2 Samuel 17:23": "Ahithophel Hangs Himself",

    // 2 Samuel Chapter 18
    "2 Samuel 18:1": "Absalom Defeated and Killed",
    "2 Samuel 18:19": "David Mourns Absalom",

    // 2 Samuel Chapter 19
    "2 Samuel 19:1": "Joab Rebukes David",
    "2 Samuel 19:9": "David Returns to Jerusalem",
    "2 Samuel 19:24": "Mephibosheth Meets David",
    "2 Samuel 19:31": "David's Kindness to Barzillai",
    "2 Samuel 19:40": "Israel and Judah Quarrel",

    // 2 Samuel Chapter 20
    "2 Samuel 20:1": "Sheba's Rebellion",
    "2 Samuel 20:14": "Sheba Beheaded",
    "2 Samuel 20:23": "David's Officials",

    // 2 Samuel Chapter 21
    "2 Samuel 21:1": "The Gibeonites Avenged",
    "2 Samuel 21:15": "Wars with the Philistines",

    // 2 Samuel Chapter 22
    "2 Samuel 22:1": "David's Song of Deliverance",

    // 2 Samuel Chapter 23
    "2 Samuel 23:1": "David's Last Words",
    "2 Samuel 23:8": "David's Mighty Men",

    // 2 Samuel Chapter 24
    "2 Samuel 24:1": "David's Census",
    "2 Samuel 24:10": "David's Repentance",
    "2 Samuel 24:18": "David Builds an Altar",

    // 1 Kings Chapter 1
    "1 Kings 1:1": "Adonijah Seeks the Throne",
    "1 Kings 1:11": "Nathan and Bathsheba's Plan",
    "1 Kings 1:28": "David Proclaims Solomon King",
    "1 Kings 1:41": "Adonijah's Submission",

    // 1 Kings Chapter 2
    "1 Kings 2:1": "David's Charge to Solomon",
    "1 Kings 2:10": "David's Death",
    "1 Kings 2:13": "Solomon Consolidates His Rule",

    // 1 Kings Chapter 3
    "1 Kings 3:1": "Solomon Marries Pharaoh's Daughter",
    "1 Kings 3:3": "Solomon Asks for Wisdom",
    "1 Kings 3:16": "Solomon's Wise Judgment",

    // 1 Kings Chapter 4
    "1 Kings 4:1": "Solomon's Officials",
    "1 Kings 4:20": "Solomon's Prosperity",
    "1 Kings 4:29": "Solomon's Wisdom",

    // 1 Kings Chapter 5
    "1 Kings 5:1": "Preparations for the Temple",

    // 1 Kings Chapter 6
    "1 Kings 6:1": "Solomon Builds the Temple",
    "1 Kings 6:11": "God's Promise to Solomon",
    "1 Kings 6:14": "The Temple Completed",

    // 1 Kings Chapter 7
    "1 Kings 7:1": "Solomon's Palace",
    "1 Kings 7:13": "The Temple Furnishings",

    // 1 Kings Chapter 8
    "1 Kings 8:1": "The Ark Brought to the Temple",
    "1 Kings 8:12": "Solomon's Prayer of Dedication",
    "1 Kings 8:62": "The Dedication Sacrifice",

    // 1 Kings Chapter 9
    "1 Kings 9:1": "God's Second Appearance to Solomon",
    "1 Kings 9:10": "Solomon's Other Activities",

    // 1 Kings Chapter 10
    "1 Kings 10:1": "The Queen of Sheba",
    "1 Kings 10:14": "Solomon's Wealth",

    // 1 Kings Chapter 11
    "1 Kings 11:1": "Solomon's Wives Turn His Heart",
    "1 Kings 11:9": "God Raises Up Adversaries",
    "1 Kings 11:26": "Jeroboam Rebels",
    "1 Kings 11:41": "Solomon's Death",

    // 1 Kings Chapter 12
    "1 Kings 12:1": "The Kingdom Divided",
    "1 Kings 12:25": "Jeroboam's Golden Calves",

    // 1 Kings Chapter 13
    "1 Kings 13:1": "A Man of God from Judah",
    "1 Kings 13:11": "The Old Prophet's Lie",
    "1 Kings 13:33": "Jeroboam's Continued Sin",

    // 1 Kings Chapter 14
    "1 Kings 14:1": "Jeroboam's Son Dies",
    "1 Kings 14:21": "Rehoboam King of Judah",

    // 1 Kings Chapter 15
    "1 Kings 15:1": "Abijam King of Judah",
    "1 Kings 15:9": "Asa King of Judah",
    "1 Kings 15:25": "Nadab King of Israel",
    "1 Kings 15:33": "Baasha King of Israel",

    // 1 Kings Chapter 16
    "1 Kings 16:1": "Prophecy Against Baasha",
    "1 Kings 16:8": "Elah King of Israel",
    "1 Kings 16:15": "Zimri King of Israel",
    "1 Kings 16:21": "Omri King of Israel",
    "1 Kings 16:29": "Ahab King of Israel",

    // 1 Kings Chapter 17
    "1 Kings 17:1": "Elijah Fed by Ravens",
    "1 Kings 17:8": "The Widow of Zarephath",
    "1 Kings 17:17": "Elijah Raises the Widow's Son",

    // 1 Kings Chapter 18
    "1 Kings 18:1": "Elijah Returns to Ahab",
    "1 Kings 18:16": "Elijah Challenges the Prophets of Baal",
    "1 Kings 18:41": "The LORD Sends Rain",

    // 1 Kings Chapter 19
    "1 Kings 19:1": "Elijah Flees from Jezebel",
    "1 Kings 19:9": "The LORD Appears to Elijah",
    "1 Kings 19:19": "The Call of Elisha",

    // 1 Kings Chapter 20
    "1 Kings 20:1": "Ben-Hadad Attacks Samaria",
    "1 Kings 20:13": "Israel Defeats Aram",
    "1 Kings 20:31": "Ahab Spares Ben-Hadad",

    // 1 Kings Chapter 21
    "1 Kings 21:1": "Naboth's Vineyard",
    "1 Kings 21:17": "Elijah Pronounces Judgment on Ahab",

    // 1 Kings Chapter 22
    "1 Kings 22:1": "Micaiah Prophesies Against Ahab",
    "1 Kings 22:29": "Ahab Killed at Ramoth Gilead",
    "1 Kings 22:41": "Jehoshaphat King of Judah",
    "1 Kings 22:51": "Ahaziah King of Israel",

    // 2 Kings Chapter 1
    "2 Kings 1:1": "Ahaziah Seeks Baal-Zebub",
    "2 Kings 1:9": "Fire from Heaven",

    // 2 Kings Chapter 2
    "2 Kings 2:1": "Elijah Taken Up to Heaven",
    "2 Kings 2:13": "Elisha's Ministry Begins",
    "2 Kings 2:19": "Elisha Purifies the Water",
    "2 Kings 2:23": "Elisha Mocked and Bears",

    // 2 Kings Chapter 3
    "2 Kings 3:1": "Joram King of Israel",
    "2 Kings 3:4": "Moab Rebels Against Israel",

    // 2 Kings Chapter 4
    "2 Kings 4:1": "The Widow's Oil",
    "2 Kings 4:8": "The Shunammite Woman's Son",
    "2 Kings 4:38": "Death in the Pot",
    "2 Kings 4:42": "Feeding of a Hundred Men",

    // 2 Kings Chapter 5
    "2 Kings 5:1": "Naaman Healed of Leprosy",
    "2 Kings 5:20": "Gehazi's Greed and Leprosy",

    // 2 Kings Chapter 6
    "2 Kings 6:1": "The Ax Head Floats",
    "2 Kings 6:8": "The Blinded Arameans",
    "2 Kings 6:24": "The Siege of Samaria",

    // 2 Kings Chapter 7
    "2 Kings 7:1": "Elisha Prophesies Deliverance",
    "2 Kings 7:3": "The Lepers Discover the Abandoned Camp",

    // 2 Kings Chapter 8
    "2 Kings 8:1": "The Shunammite's Land Restored",
    "2 Kings 8:7": "Elisha Predicts Hazael's Cruelty",
    "2 Kings 8:16": "Jehoram King of Judah",
    "2 Kings 8:25": "Ahaziah King of Judah",

    // 2 Kings Chapter 9
    "2 Kings 9:1": "Jehu Anointed King of Israel",
    "2 Kings 9:14": "Jehu Kills Joram and Ahaziah",
    "2 Kings 9:30": "Jezebel Killed",

    // 2 Kings Chapter 10
    "2 Kings 10:1": "Ahab's Family Destroyed",
    "2 Kings 10:18": "Jehu Destroys the Worshipers of Baal",
    "2 Kings 10:32": "Jehu's Death",

    // 2 Kings Chapter 11
    "2 Kings 11:1": "Athaliah Usurps the Throne",
    "2 Kings 11:4": "Joash Made King",

    // 2 Kings Chapter 12
    "2 Kings 12:1": "Joash Repairs the Temple",
    "2 Kings 12:17": "Hazael Threatens Jerusalem",
    "2 Kings 12:19": "Joash Assassinated",

    // 2 Kings Chapter 13
    "2 Kings 13:1": "Jehoahaz King of Israel",
    "2 Kings 13:10": "Jehoash King of Israel",
    "2 Kings 13:14": "Elisha's Final Prophecy",
    "2 Kings 13:20": "Elisha's Death",

    // 2 Kings Chapter 14
    "2 Kings 14:1": "Amaziah King of Judah",
    "2 Kings 14:8": "Israel Defeats Judah",
    "2 Kings 14:23": "Jeroboam II King of Israel",

    // 2 Kings Chapter 15
    "2 Kings 15:1": "Azariah (Uzziah) King of Judah",
    "2 Kings 15:8": "Zechariah King of Israel",
    "2 Kings 15:13": "Shallum King of Israel",
    "2 Kings 15:17": "Menahem King of Israel",
    "2 Kings 15:23": "Pekahiah King of Israel",
    "2 Kings 15:27": "Pekah King of Israel",
    "2 Kings 15:32": "Jotham King of Judah",

    // 2 Kings Chapter 16
    "2 Kings 16:1": "Ahaz King of Judah",
    "2 Kings 16:10": "Ahaz's Altar",

    // 2 Kings Chapter 17
    "2 Kings 17:1": "Hoshea King of Israel",
    "2 Kings 17:5": "The Fall of Samaria",
    "2 Kings 17:24": "Foreigners Resettled in Samaria",

    // 2 Kings Chapter 18
    "2 Kings 18:1": "Hezekiah King of Judah",
    "2 Kings 18:13": "Sennacherib Invades Judah",

    // 2 Kings Chapter 19
    "2 Kings 19:1": "Hezekiah Seeks Isaiah's Help",
    "2 Kings 19:14": "Hezekiah's Prayer",
    "2 Kings 19:20": "Isaiah's Prophecy",
    "2 Kings 19:35": "The Angel Destroys the Assyrian Army",

    // 2 Kings Chapter 20
    "2 Kings 20:1": "Hezekiah's Illness and Recovery",
    "2 Kings 20:12": "Envoys from Babylon",

    // 2 Kings Chapter 21
    "2 Kings 21:1": "Manasseh King of Judah",
    "2 Kings 21:19": "Amon King of Judah",

    // 2 Kings Chapter 22
    "2 Kings 22:1": "Josiah King of Judah",
    "2 Kings 22:8": "The Book of the Law Found",

    // 2 Kings Chapter 23
    "2 Kings 23:1": "Josiah's Reforms",
    "2 Kings 23:28": "Josiah's Death",
    "2 Kings 23:31": "Jehoahaz King of Judah",
    "2 Kings 23:36": "Jehoiakim King of Judah",

    // 2 Kings Chapter 24
    "2 Kings 24:1": "Jehoiakim's Rebellion",
    "2 Kings 24:8": "Jehoiachin King of Judah",
    "2 Kings 24:17": "Zedekiah King of Judah",

    // 2 Kings Chapter 25
    "2 Kings 25:1": "The Fall of Jerusalem",
    "2 Kings 25:8": "The Temple Destroyed",
    "2 Kings 25:22": "Gedaliah Governor of Judah",
    "2 Kings 25:27": "Jehoiachin Released",

    // 1 Chronicles Chapter 1
    "1 Chronicles 1:1": "From Adam to Abraham",
    "1 Chronicles 1:28": "The Sons of Abraham",
    "1 Chronicles 1:34": "The Sons of Isaac",

    // 1 Chronicles Chapter 2
    "1 Chronicles 2:1": "The Sons of Israel",
    "1 Chronicles 2:13": "The Family of Jesse",

    // 1 Chronicles Chapter 3
    "1 Chronicles 3:1": "The Sons of David",
    "1 Chronicles 3:10": "The Kings of Judah",

    // 1 Chronicles Chapter 4
    "1 Chronicles 4:1": "The Descendants of Judah",
    "1 Chronicles 4:24": "The Descendants of Simeon",

    // 1 Chronicles Chapter 5
    "1 Chronicles 5:1": "The Descendants of Reuben",
    "1 Chronicles 5:11": "The Descendants of Gad",
    "1 Chronicles 5:23": "The Half-Tribe of Manasseh",

    // 1 Chronicles Chapter 6
    "1 Chronicles 6:1": "The Descendants of Levi",
    "1 Chronicles 6:49": "The Descendants of Aaron",
    "1 Chronicles 6:54": "The Levitical Cities",

    // 1 Chronicles Chapter 7
    "1 Chronicles 7:1": "The Descendants of Issachar",
    "1 Chronicles 7:6": "The Descendants of Benjamin",
    "1 Chronicles 7:13": "The Descendants of Naphtali",
    "1 Chronicles 7:14": "The Descendants of Manasseh",
    "1 Chronicles 7:20": "The Descendants of Ephraim",
    "1 Chronicles 7:30": "The Descendants of Asher",

    // 1 Chronicles Chapter 8
    "1 Chronicles 8:1": "The Descendants of Benjamin",

    // 1 Chronicles Chapter 9
    "1 Chronicles 9:1": "The Returning Exiles",
    "1 Chronicles 9:35": "The Genealogy of Saul",

    // 1 Chronicles Chapter 10
    "1 Chronicles 10:1": "Saul's Death",
    "1 Chronicles 10:13": "Saul's Unfaithfulness",

    // 1 Chronicles Chapter 11
    "1 Chronicles 11:1": "David Becomes King",
    "1 Chronicles 11:4": "David Conquers Jerusalem",
    "1 Chronicles 11:10": "David's Mighty Men",

    // 1 Chronicles Chapter 12
    "1 Chronicles 12:1": "David's Supporters",

    // 1 Chronicles Chapter 13
    "1 Chronicles 13:1": "The Ark Brought from Kiriath Jearim",

    // 1 Chronicles Chapter 14
    "1 Chronicles 14:1": "David's Palace and Family",
    "1 Chronicles 14:8": "David Defeats the Philistines",

    // 1 Chronicles Chapter 15
    "1 Chronicles 15:1": "Preparations to Move the Ark",
    "1 Chronicles 15:25": "The Ark Brought to Jerusalem",

    // 1 Chronicles Chapter 16
    "1 Chronicles 16:1": "The Ark Placed in the Tent",
    "1 Chronicles 16:7": "David's Psalm of Thanksgiving",
    "1 Chronicles 16:37": "Worship Before the Ark",

    // 1 Chronicles Chapter 17
    "1 Chronicles 17:1": "God's Covenant with David",
    "1 Chronicles 17:16": "David's Prayer",

    // 1 Chronicles Chapter 18
    "1 Chronicles 18:1": "David's Victories",
    "1 Chronicles 18:14": "David's Officials",

    // 1 Chronicles Chapter 19
    "1 Chronicles 19:1": "David Defeats Ammon and Aram",

    // 1 Chronicles Chapter 20
    "1 Chronicles 20:1": "The Capture of Rabbah",
    "1 Chronicles 20:4": "Wars with the Philistines",

    // 1 Chronicles Chapter 21
    "1 Chronicles 21:1": "David's Census",
    "1 Chronicles 21:9": "Judgment for the Census",
    "1 Chronicles 21:18": "David Builds an Altar",

    // 1 Chronicles Chapter 22
    "1 Chronicles 22:1": "Preparations for the Temple",
    "1 Chronicles 22:6": "David Charges Solomon",

    // 1 Chronicles Chapter 23
    "1 Chronicles 23:1": "The Divisions of the Levites",

    // 1 Chronicles Chapter 24
    "1 Chronicles 24:1": "The Divisions of the Priests",

    // 1 Chronicles Chapter 25
    "1 Chronicles 25:1": "The Singers",

    // 1 Chronicles Chapter 26
    "1 Chronicles 26:1": "The Gatekeepers",
    "1 Chronicles 26:20": "The Treasurers",

    // 1 Chronicles Chapter 27
    "1 Chronicles 27:1": "The Army Divisions",
    "1 Chronicles 27:16": "The Leaders of the Tribes",
    "1 Chronicles 27:25": "David's Officials",

    // 1 Chronicles Chapter 28
    "1 Chronicles 28:1": "David's Charge to Israel",
    "1 Chronicles 28:9": "David's Charge to Solomon",
    "1 Chronicles 28:11": "Plans for the Temple",

    // 1 Chronicles Chapter 29
    "1 Chronicles 29:1": "Gifts for the Temple",
    "1 Chronicles 29:10": "David's Prayer",
    "1 Chronicles 29:20": "Solomon Anointed King",
    "1 Chronicles 29:26": "David's Death",

    // 2 Chronicles Chapter 1
    "2 Chronicles 1:1": "Solomon Asks for Wisdom",
    "2 Chronicles 1:14": "Solomon's Wealth",

    // 2 Chronicles Chapter 2
    "2 Chronicles 2:1": "Preparations for the Temple",

    // 2 Chronicles Chapter 3
    "2 Chronicles 3:1": "Solomon Builds the Temple",

    // 2 Chronicles Chapter 4
    "2 Chronicles 4:1": "The Temple Furnishings",

    // 2 Chronicles Chapter 5
    "2 Chronicles 5:1": "The Ark Brought to the Temple",

    // 2 Chronicles Chapter 6
    "2 Chronicles 6:1": "Solomon's Prayer of Dedication",

    // 2 Chronicles Chapter 7
    "2 Chronicles 7:1": "Fire from Heaven",
    "2 Chronicles 7:11": "God Appears to Solomon",

    // 2 Chronicles Chapter 8
    "2 Chronicles 8:1": "Solomon's Other Activities",

    // 2 Chronicles Chapter 9
    "2 Chronicles 9:1": "The Queen of Sheba",
    "2 Chronicles 9:13": "Solomon's Wealth",
    "2 Chronicles 9:29": "Solomon's Death",

    // 2 Chronicles Chapter 10
    "2 Chronicles 10:1": "The Kingdom Divided",

    // 2 Chronicles Chapter 11
    "2 Chronicles 11:1": "Rehoboam Forbidden to Fight",
    "2 Chronicles 11:5": "Rehoboam Fortifies Cities",
    "2 Chronicles 11:13": "Priests and Levites Move to Judah",

    // 2 Chronicles Chapter 12
    "2 Chronicles 12:1": "Shishak Attacks Jerusalem",
    "2 Chronicles 12:13": "Rehoboam's Reign",

    // 2 Chronicles Chapter 13
    "2 Chronicles 13:1": "Abijah King of Judah",
    "2 Chronicles 13:3": "War Between Abijah and Jeroboam",

    // 2 Chronicles Chapter 14
    "2 Chronicles 14:1": "Asa King of Judah",
    "2 Chronicles 14:9": "Asa Defeats the Cushites",

    // 2 Chronicles Chapter 15
    "2 Chronicles 15:1": "Asa's Religious Reforms",

    // 2 Chronicles Chapter 16
    "2 Chronicles 16:1": "Asa's Treaty with Aram",
    "2 Chronicles 16:11": "Asa's Death",

    // 2 Chronicles Chapter 17
    "2 Chronicles 17:1": "Jehoshaphat King of Judah",

    // 2 Chronicles Chapter 18
    "2 Chronicles 18:1": "Micaiah Prophesies Against Ahab",

    // 2 Chronicles Chapter 19
    "2 Chronicles 19:1": "Jehoshaphat Appoints Judges",

    // 2 Chronicles Chapter 20
    "2 Chronicles 20:1": "Jehoshaphat Defeats Moab and Ammon",
    "2 Chronicles 20:31": "Jehoshaphat's Reign Ends",

    // 2 Chronicles Chapter 21
    "2 Chronicles 21:1": "Jehoram King of Judah",
    "2 Chronicles 21:12": "Elijah's Letter to Jehoram",

    // 2 Chronicles Chapter 22
    "2 Chronicles 22:1": "Ahaziah King of Judah",
    "2 Chronicles 22:10": "Athaliah Usurps the Throne",

    // 2 Chronicles Chapter 23
    "2 Chronicles 23:1": "Joash Made King",

    // 2 Chronicles Chapter 24
    "2 Chronicles 24:1": "Joash Repairs the Temple",
    "2 Chronicles 24:17": "Joash's Apostasy",
    "2 Chronicles 24:23": "Joash Killed",

    // 2 Chronicles Chapter 25
    "2 Chronicles 25:1": "Amaziah King of Judah",
    "2 Chronicles 25:14": "Amaziah's Idolatry",

    // 2 Chronicles Chapter 26
    "2 Chronicles 26:1": "Uzziah King of Judah",
    "2 Chronicles 26:16": "Uzziah's Pride and Leprosy",

    // 2 Chronicles Chapter 27
    "2 Chronicles 27:1": "Jotham King of Judah",

    // 2 Chronicles Chapter 28
    "2 Chronicles 28:1": "Ahaz King of Judah",
    "2 Chronicles 28:16": "Ahaz's Unfaithfulness",

    // 2 Chronicles Chapter 29
    "2 Chronicles 29:1": "Hezekiah Purifies the Temple",

    // 2 Chronicles Chapter 30
    "2 Chronicles 30:1": "Hezekiah Celebrates Passover",

    // 2 Chronicles Chapter 31
    "2 Chronicles 31:1": "Hezekiah's Religious Reforms",

    // 2 Chronicles Chapter 32
    "2 Chronicles 32:1": "Sennacherib Invades Judah",
    "2 Chronicles 32:24": "Hezekiah's Illness and Pride",
    "2 Chronicles 32:32": "Hezekiah's Death",

    // 2 Chronicles Chapter 33
    "2 Chronicles 33:1": "Manasseh King of Judah",
    "2 Chronicles 33:21": "Amon King of Judah",

    // 2 Chronicles Chapter 34
    "2 Chronicles 34:1": "Josiah King of Judah",
    "2 Chronicles 34:8": "The Book of the Law Found",

    // 2 Chronicles Chapter 35
    "2 Chronicles 35:1": "Josiah Celebrates Passover",
    "2 Chronicles 35:20": "Josiah's Death",

    // 2 Chronicles Chapter 36
    "2 Chronicles 36:1": "Jehoahaz King of Judah",
    "2 Chronicles 36:5": "Jehoiakim King of Judah",
    "2 Chronicles 36:9": "Jehoiachin King of Judah",
    "2 Chronicles 36:11": "Zedekiah King of Judah",
    "2 Chronicles 36:15": "The Fall of Jerusalem",
    "2 Chronicles 36:22": "Cyrus Allows the Exiles to Return",

    // Ezra Chapter 1
    "Ezra 1:1": "Cyrus Sends the Exiles Home",
    "Ezra 1:5": "Gifts for the Temple",

    // Ezra Chapter 2
    "Ezra 2:1": "The Returning Exiles",
    "Ezra 2:68": "Offerings for the Temple",

    // Ezra Chapter 3
    "Ezra 3:1": "The Altar Rebuilt",
    "Ezra 3:7": "Temple Reconstruction Begins",
    "Ezra 3:10": "The Foundation Laid",

    // Ezra Chapter 4
    "Ezra 4:1": "Opposition to the Rebuilding",
    "Ezra 4:7": "Letters to Artaxerxes",
    "Ezra 4:17": "The King's Reply",

    // Ezra Chapter 5
    "Ezra 5:1": "The Rebuilding Resumes",
    "Ezra 5:3": "Tattenai's Letter to Darius",

    // Ezra Chapter 6
    "Ezra 6:1": "Darius Supports the Rebuilding",
    "Ezra 6:13": "The Temple Completed",
    "Ezra 6:19": "Passover Celebrated",

    // Ezra Chapter 7
    "Ezra 7:1": "Ezra Comes to Jerusalem",
    "Ezra 7:11": "Artaxerxes' Letter to Ezra",

    // Ezra Chapter 8
    "Ezra 8:1": "The Returning Exiles with Ezra",
    "Ezra 8:21": "Fasting and Prayer",
    "Ezra 8:31": "The Journey to Jerusalem",

    // Ezra Chapter 9
    "Ezra 9:1": "Ezra's Prayer About Intermarriage",

    // Ezra Chapter 10
    "Ezra 10:1": "The People's Confession",
    "Ezra 10:9": "The Assembly",
    "Ezra 10:18": "Those Guilty of Intermarriage",

    // Nehemiah Chapter 1
    "Nehemiah 1:1": "Nehemiah's Prayer",

    // Nehemiah Chapter 2
    "Nehemiah 2:1": "Nehemiah Sent to Jerusalem",
    "Nehemiah 2:11": "Nehemiah Inspects the Walls",

    // Nehemiah Chapter 3
    "Nehemiah 3:1": "The Rebuilding of the Wall",

    // Nehemiah Chapter 4
    "Nehemiah 4:1": "Opposition to the Rebuilding",
    "Nehemiah 4:15": "The Work Continues",

    // Nehemiah Chapter 5
    "Nehemiah 5:1": "Nehemiah Defends the Oppressed",

    // Nehemiah Chapter 6
    "Nehemiah 6:1": "The Wall Completed Despite Opposition",

    // Nehemiah Chapter 7
    "Nehemiah 7:1": "Guards Appointed",
    "Nehemiah 7:5": "The List of Returning Exiles",

    // Nehemiah Chapter 8
    "Nehemiah 8:1": "Ezra Reads the Law",
    "Nehemiah 8:13": "The Feast of Tabernacles",

    // Nehemiah Chapter 9
    "Nehemiah 9:1": "The Israelites Confess Their Sins",
    "Nehemiah 9:5": "The Levites' Prayer",

    // Nehemiah Chapter 10
    "Nehemiah 10:1": "The Covenant Renewed",

    // Nehemiah Chapter 11
    "Nehemiah 11:1": "The Resettlement of Jerusalem",

    // Nehemiah Chapter 12
    "Nehemiah 12:1": "Priests and Levites",
    "Nehemiah 12:27": "Dedication of the Wall",

    // Nehemiah Chapter 13
    "Nehemiah 13:1": "Nehemiah's Final Reforms",

    // Esther Chapter 1
    "Esther 1:1": "Queen Vashti Deposed",

    // Esther Chapter 2
    "Esther 2:1": "Esther Made Queen",
    "Esther 2:19": "Mordecai Uncovers a Plot",

    // Esther Chapter 3
    "Esther 3:1": "Haman's Plot to Destroy the Jews",

    // Esther Chapter 4
    "Esther 4:1": "Mordecai Asks Esther to Help",
    "Esther 4:13": "For Such a Time as This",

    // Esther Chapter 5
    "Esther 5:1": "Esther's Banquet",
    "Esther 5:9": "Haman's Rage Against Mordecai",

    // Esther Chapter 6
    "Esther 6:1": "Mordecai Honored",

    // Esther Chapter 7
    "Esther 7:1": "Haman Hanged",

    // Esther Chapter 8
    "Esther 8:1": "The King's Edict on Behalf of the Jews",

    // Esther Chapter 9
    "Esther 9:1": "The Jews Destroy Their Enemies",
    "Esther 9:20": "The Feast of Purim Instituted",

    // Esther Chapter 10
    "Esther 10:1": "Mordecai's Greatness",

    // Job Chapter 1
    "Job 1:1": "Job's Character and Wealth",
    "Job 1:6": "Satan Tests Job",
    "Job 1:13": "Job Loses His Property and Children",
    "Job 1:20": "Job's Faithful Response",

    // Job Chapter 2
    "Job 2:1": "Satan Attacks Job's Health",
    "Job 2:11": "Job's Three Friends Arrive",

    // Job Chapter 3
    "Job 3:1": "Job Curses the Day of His Birth",

    // Job Chapter 4
    "Job 4:1": "Eliphaz Speaks — The Innocent Do Not Suffer",

    // Job Chapter 5
    "Job 5:1": "Eliphaz Continues — Call Upon God",
    "Job 5:17": "God Disciplines and Restores",

    // Job Chapter 6
    "Job 6:1": "Job Replies — My Complaint Is Just",

    // Job Chapter 7
    "Job 7:1": "Job Continues — Life Is Hard",
    "Job 7:11": "Job Questions God",

    // Job Chapter 8
    "Job 8:1": "Bildad Speaks — God Is Just",

    // Job Chapter 9
    "Job 9:1": "Job Replies — How Can Man Be Just Before God?",

    // Job Chapter 10
    "Job 10:1": "Job's Complaint to God",

    // Job Chapter 11
    "Job 11:1": "Zophar Speaks — Repent and Be Restored",

    // Job Chapter 12
    "Job 12:1": "Job Replies — I Am Not Inferior to You",

    // Job Chapter 13
    "Job 13:1": "Job Continues — I Will Argue My Case Before God",

    // Job Chapter 14
    "Job 14:1": "Job Reflects on Human Mortality",

    // Job Chapter 15
    "Job 15:1": "Eliphaz's Second Speech — The Wicked Suffer",

    // Job Chapter 16
    "Job 16:1": "Job Replies — Miserable Comforters",

    // Job Chapter 17
    "Job 17:1": "Job Continues — My Spirit Is Broken",

    // Job Chapter 18
    "Job 18:1": "Bildad's Second Speech — The Fate of the Wicked",

    // Job Chapter 19
    "Job 19:1": "Job Replies — My Redeemer Lives",

    // Job Chapter 20
    "Job 20:1": "Zophar's Second Speech — The Triumph of the Wicked Is Brief",

    // Job Chapter 21
    "Job 21:1": "Job Replies — The Wicked Often Prosper",

    // Job Chapter 22
    "Job 22:1": "Eliphaz's Third Speech — Submit to God",

    // Job Chapter 23
    "Job 23:1": "Job Replies — Oh, That I Could Find God",

    // Job Chapter 24
    "Job 24:1": "Job Continues — Why Does God Allow Injustice?",

    // Job Chapter 25
    "Job 25:1": "Bildad's Third Speech — Man Cannot Be Righteous",

    // Job Chapter 26
    "Job 26:1": "Job Replies — God's Power Is Beyond Understanding",

    // Job Chapter 27
    "Job 27:1": "Job's Final Defense",

    // Job Chapter 28
    "Job 28:1": "The Place of Wisdom",

    // Job Chapter 29
    "Job 29:1": "Job's Former Blessings",

    // Job Chapter 30
    "Job 30:1": "Job's Present Misery",

    // Job Chapter 31
    "Job 31:1": "Job's Final Oath of Innocence",

    // Job Chapter 32
    "Job 32:1": "Elihu Speaks — His Anger Against Job and His Friends",

    // Job Chapter 33
    "Job 33:1": "Elihu Continues — God Speaks in Various Ways",

    // Job Chapter 34
    "Job 34:1": "Elihu Continues — God Is Just",

    // Job Chapter 35
    "Job 35:1": "Elihu Continues — God Does Not Answer Pride",

    // Job Chapter 36
    "Job 36:1": "Elihu Continues — God Is Great and Just",

    // Job Chapter 37
    "Job 37:1": "Elihu Continues — God's Majesty in the Storm",

    // Job Chapter 38
    "Job 38:1": "The LORD Answers Job — Where Were You?",
    "Job 38:22": "God Questions Job About Nature",

    // Job Chapter 39
    "Job 39:1": "God Questions Job About Animals",

    // Job Chapter 40
    "Job 40:1": "Job's Response to God",
    "Job 40:6": "The LORD's Second Speech — Behemoth",

    // Job Chapter 41
    "Job 41:1": "Can You Draw Out Leviathan?",

    // Job Chapter 42
    "Job 42:1": "Job's Repentance and Restoration",
    "Job 42:10": "The LORD Restores Job's Fortunes",

    // Psalms Chapter 1
    "Psalms 1:1": "The Two Ways",

    // Psalms Chapter 2
    "Psalms 2:1": "The LORD's Anointed King",

    // Psalms Chapter 3
    "Psalms 3:1": "A Morning Prayer for Deliverance",

    // Psalms Chapter 4
    "Psalms 4:1": "An Evening Prayer of Trust",

    // Psalms Chapter 5
    "Psalms 5:1": "A Morning Prayer for Guidance",

    // Psalms Chapter 6
    "Psalms 6:1": "Prayer in Deep Distress",

    // Psalms Chapter 7
    "Psalms 7:1": "Prayer for Vindication",

    // Psalms Chapter 8
    "Psalms 8:1": "The Majesty of God and the Dignity of Man",

    // Psalms Chapter 9
    "Psalms 9:1": "Thanksgiving for God's Justice",

    // Psalms Chapter 10
    "Psalms 10:1": "Why Do You Hide, O LORD?",

    // Psalms Chapter 11
    "Psalms 11:1": "In the LORD I Take Refuge",

    // Psalms Chapter 12
    "Psalms 12:1": "A Plea Against the Wicked",

    // Psalms Chapter 13
    "Psalms 13:1": "How Long, O LORD?",

    // Psalms Chapter 14
    "Psalms 14:1": "The Fool Says There Is No God",

    // Psalms Chapter 15
    "Psalms 15:1": "Who May Dwell in Your Sanctuary?",

    // Psalms Chapter 16
    "Psalms 16:1": "The Path of Life",

    // Psalms Chapter 17
    "Psalms 17:1": "A Prayer for Protection",

    // Psalms Chapter 18
    "Psalms 18:1": "The LORD Is My Rock and Fortress",

    // Psalms Chapter 19
    "Psalms 19:1": "The Heavens Declare God's Glory",
    "Psalms 19:7": "The Perfection of God's Law",

    // Psalms Chapter 20
    "Psalms 20:1": "Prayer for Victory",

    // Psalms Chapter 21
    "Psalms 21:1": "Thanksgiving for Victory",

    // Psalms Chapter 22
    "Psalms 22:1": "My God, My God, Why Have You Forsaken Me?",
    "Psalms 22:22": "Praise in the Assembly",

    // Psalms Chapter 23
    "Psalms 23:1": "The LORD Is My Shepherd",

    // Psalms Chapter 24
    "Psalms 24:1": "The King of Glory",

    // Psalms Chapter 25
    "Psalms 25:1": "Teach Me Your Paths",

    // Psalms Chapter 26
    "Psalms 26:1": "Vindicate Me, O LORD",

    // Psalms Chapter 27
    "Psalms 27:1": "The LORD Is My Light and Salvation",

    // Psalms Chapter 28
    "Psalms 28:1": "A Cry for Help",

    // Psalms Chapter 29
    "Psalms 29:1": "The Voice of the LORD",

    // Psalms Chapter 30
    "Psalms 30:1": "Thanksgiving for Deliverance",

    // Psalms Chapter 31
    "Psalms 31:1": "Into Your Hand I Commit My Spirit",

    // Psalms Chapter 32
    "Psalms 32:1": "Blessed Is the One Whose Sin Is Forgiven",

    // Psalms Chapter 33
    "Psalms 33:1": "Sing to the LORD a New Song",

    // Psalms Chapter 34
    "Psalms 34:1": "Taste and See That the LORD Is Good",

    // Psalms Chapter 35
    "Psalms 35:1": "Contend with Those Who Contend with Me",

    // Psalms Chapter 36
    "Psalms 36:1": "How Precious Is Your Steadfast Love",

    // Psalms Chapter 37
    "Psalms 37:1": "Trust in the LORD and Do Good",

    // Psalms Chapter 38
    "Psalms 38:1": "A Psalm of Confession and Distress",

    // Psalms Chapter 39
    "Psalms 39:1": "The Brevity of Life",

    // Psalms Chapter 40
    "Psalms 40:1": "I Waited Patiently for the LORD",

    // Psalms Chapter 41
    "Psalms 41:1": "Blessed Is the One Who Considers the Poor",

    // Psalms Chapter 42
    "Psalms 42:1": "As a Deer Pants for Water",

    // Psalms Chapter 43
    "Psalms 43:1": "Send Out Your Light and Truth",

    // Psalms Chapter 44
    "Psalms 44:1": "We Have Heard with Our Ears, O God",

    // Psalms Chapter 45
    "Psalms 45:1": "A Royal Wedding Song",

    // Psalms Chapter 46
    "Psalms 46:1": "God Is Our Refuge and Strength",

    // Psalms Chapter 47
    "Psalms 47:1": "Clap Your Hands, All Peoples",

    // Psalms Chapter 48
    "Psalms 48:1": "Great Is the LORD in Zion",

    // Psalms Chapter 49
    "Psalms 49:1": "Riches Cannot Ransom",

    // Psalms Chapter 50
    "Psalms 50:1": "The Mighty One Summons the Earth",

    // Psalms Chapter 51
    "Psalms 51:1": "Create in Me a Clean Heart, O God",

    // Psalms Chapter 52
    "Psalms 52:1": "The Fate of the Wicked",

    // Psalms Chapter 53
    "Psalms 53:1": "The Fool Says There Is No God",

    // Psalms Chapter 54
    "Psalms 54:1": "Save Me, O God, by Your Name",

    // Psalms Chapter 55
    "Psalms 55:1": "Cast Your Burden on the LORD",

    // Psalms Chapter 56
    "Psalms 56:1": "In God I Trust",

    // Psalms Chapter 57
    "Psalms 57:1": "Be Merciful to Me, O God",

    // Psalms Chapter 58
    "Psalms 58:1": "God the Righteous Judge",

    // Psalms Chapter 59
    "Psalms 59:1": "Deliver Me from My Enemies",

    // Psalms Chapter 60
    "Psalms 60:1": "A Prayer After Defeat",

    // Psalms Chapter 61
    "Psalms 61:1": "Lead Me to the Rock",

    // Psalms Chapter 62
    "Psalms 62:1": "My Soul Waits in Silence for God",

    // Psalms Chapter 63
    "Psalms 63:1": "My Soul Thirsts for You",

    // Psalms Chapter 64
    "Psalms 64:1": "Hide Me from the Wicked",

    // Psalms Chapter 65
    "Psalms 65:1": "You Crown the Year with Bounty",

    // Psalms Chapter 66
    "Psalms 66:1": "Come and See What God Has Done",

    // Psalms Chapter 67
    "Psalms 67:1": "May God Be Gracious to Us",

    // Psalms Chapter 68
    "Psalms 68:1": "God's Triumphant March",

    // Psalms Chapter 69
    "Psalms 69:1": "Save Me, O God",

    // Psalms Chapter 70
    "Psalms 70:1": "Make Haste to Help Me",

    // Psalms Chapter 71
    "Psalms 71:1": "A Prayer in Old Age",

    // Psalms Chapter 72
    "Psalms 72:1": "A Prayer for the King",

    // Psalms Chapter 73
    "Psalms 73:1": "God Is Good to the Pure in Heart",

    // Psalms Chapter 74
    "Psalms 74:1": "A Plea for God to Remember His People",

    // Psalms Chapter 75
    "Psalms 75:1": "God the Righteous Judge",

    // Psalms Chapter 76
    "Psalms 76:1": "God Is Known in Judah",

    // Psalms Chapter 77
    "Psalms 77:1": "I Will Remember the Deeds of the LORD",

    // Psalms Chapter 78
    "Psalms 78:1": "Tell the Coming Generation",

    // Psalms Chapter 79
    "Psalms 79:1": "How Long, O LORD?",

    // Psalms Chapter 80
    "Psalms 80:1": "Restore Us, O God",

    // Psalms Chapter 81
    "Psalms 81:1": "Sing Aloud to God Our Strength",

    // Psalms Chapter 82
    "Psalms 82:1": "God Presides in the Divine Council",

    // Psalms Chapter 83
    "Psalms 83:1": "O God, Do Not Keep Silence",

    // Psalms Chapter 84
    "Psalms 84:1": "How Lovely Is Your Dwelling Place",

    // Psalms Chapter 85
    "Psalms 85:1": "Restore Us Again, O God",

    // Psalms Chapter 86
    "Psalms 86:1": "Teach Me Your Way, O LORD",

    // Psalms Chapter 87
    "Psalms 87:1": "Glorious Things Are Spoken of Zion",

    // Psalms Chapter 88
    "Psalms 88:1": "A Prayer in Deep Darkness",

    // Psalms Chapter 89
    "Psalms 89:1": "I Will Sing of Your Steadfast Love Forever",

    // Psalms Chapter 90
    "Psalms 90:1": "Teach Us to Number Our Days",

    // Psalms Chapter 91
    "Psalms 91:1": "He Who Dwells in the Shelter of the Most High",

    // Psalms Chapter 92
    "Psalms 92:1": "It Is Good to Give Thanks to the LORD",

    // Psalms Chapter 93
    "Psalms 93:1": "The LORD Reigns",

    // Psalms Chapter 94
    "Psalms 94:1": "O LORD, God of Vengeance",

    // Psalms Chapter 95
    "Psalms 95:1": "Come, Let Us Worship and Bow Down",

    // Psalms Chapter 96
    "Psalms 96:1": "Sing to the LORD a New Song",

    // Psalms Chapter 97
    "Psalms 97:1": "The LORD Reigns, Let the Earth Rejoice",

    // Psalms Chapter 98
    "Psalms 98:1": "Make a Joyful Noise to the LORD",

    // Psalms Chapter 99
    "Psalms 99:1": "The LORD Is King, Holy Is He",

    // Psalms Chapter 100
    "Psalms 100:1": "Make a Joyful Noise, All the Earth",

    // Psalms Chapter 101
    "Psalms 101:1": "I Will Walk with Integrity",

    // Psalms Chapter 102
    "Psalms 102:1": "A Prayer of the Afflicted",

    // Psalms Chapter 103
    "Psalms 103:1": "Bless the LORD, O My Soul",

    // Psalms Chapter 104
    "Psalms 104:1": "O LORD, How Manifold Are Your Works",

    // Psalms Chapter 105
    "Psalms 105:1": "Give Thanks to the LORD",

    // Psalms Chapter 106
    "Psalms 106:1": "Praise the LORD for His Faithfulness",

    // Psalms Chapter 107
    "Psalms 107:1": "Give Thanks to the LORD, for He Is Good",

    // Psalms Chapter 108
    "Psalms 108:1": "My Heart Is Steadfast, O God",

    // Psalms Chapter 109
    "Psalms 109:1": "A Cry Against Enemies",

    // Psalms Chapter 110
    "Psalms 110:1": "Sit at My Right Hand",

    // Psalms Chapter 111
    "Psalms 111:1": "Great Are the Works of the LORD",

    // Psalms Chapter 112
    "Psalms 112:1": "Blessed Is the Man Who Fears the LORD",

    // Psalms Chapter 113
    "Psalms 113:1": "Who Is Like the LORD Our God?",

    // Psalms Chapter 114
    "Psalms 114:1": "When Israel Went Out from Egypt",

    // Psalms Chapter 115
    "Psalms 115:1": "Not to Us, O LORD",

    // Psalms Chapter 116
    "Psalms 116:1": "I Love the LORD",

    // Psalms Chapter 117
    "Psalms 117:1": "Praise the LORD, All Nations",

    // Psalms Chapter 118
    "Psalms 118:1": "His Steadfast Love Endures Forever",
    "Psalms 118:22": "The Stone the Builders Rejected",

    // Psalms Chapter 119
    "Psalms 119:1": "Aleph — Blessed Are Those Who Walk in the Law",
    "Psalms 119:9": "Beth — How Can a Young Man Keep His Way Pure?",
    "Psalms 119:17": "Gimel — Deal Bountifully with Your Servant",
    "Psalms 119:25": "Daleth — My Soul Clings to the Dust",
    "Psalms 119:33": "He — Teach Me, O LORD",
    "Psalms 119:41": "Waw — Let Your Steadfast Love Come to Me",
    "Psalms 119:49": "Zayin — Remember Your Word to Your Servant",
    "Psalms 119:57": "Heth — The LORD Is My Portion",
    "Psalms 119:65": "Teth — You Have Dealt Well with Your Servant",
    "Psalms 119:73": "Yodh — Your Hands Have Made Me",
    "Psalms 119:81": "Kaph — My Soul Longs for Your Salvation",
    "Psalms 119:89": "Lamedh — Forever, O LORD, Your Word Is Firm",
    "Psalms 119:97": "Mem — Oh How I Love Your Law",
    "Psalms 119:105": "Nun — Your Word Is a Lamp to My Feet",
    "Psalms 119:113": "Samekh — I Hate the Double-Minded",
    "Psalms 119:121": "Ayin — I Have Done What Is Just and Right",
    "Psalms 119:129": "Pe — Your Testimonies Are Wonderful",
    "Psalms 119:137": "Tsadhe — Righteous Are You, O LORD",
    "Psalms 119:145": "Qoph — I Cry with My Whole Heart",
    "Psalms 119:153": "Resh — Look on My Affliction",
    "Psalms 119:161": "Sin/Shin — Princes Persecute Me",
    "Psalms 119:169": "Taw — Let My Cry Come Before You",

    // Psalms Chapter 120
    "Psalms 120:1": "Deliver Me, O LORD",

    // Psalms Chapter 121
    "Psalms 121:1": "I Lift Up My Eyes to the Hills",

    // Psalms Chapter 122
    "Psalms 122:1": "Pray for the Peace of Jerusalem",

    // Psalms Chapter 123
    "Psalms 123:1": "Our Eyes Look to the LORD",

    // Psalms Chapter 124
    "Psalms 124:1": "If the LORD Had Not Been on Our Side",

    // Psalms Chapter 125
    "Psalms 125:1": "Those Who Trust in the LORD",

    // Psalms Chapter 126
    "Psalms 126:1": "Those Who Sow in Tears",

    // Psalms Chapter 127
    "Psalms 127:1": "Unless the LORD Builds the House",

    // Psalms Chapter 128
    "Psalms 128:1": "Blessed Is Everyone Who Fears the LORD",

    // Psalms Chapter 129
    "Psalms 129:1": "They Have Greatly Oppressed Me",

    // Psalms Chapter 130
    "Psalms 130:1": "Out of the Depths I Cry to You",

    // Psalms Chapter 131
    "Psalms 131:1": "My Heart Is Not Proud",

    // Psalms Chapter 132
    "Psalms 132:1": "Remember David's Hardships",

    // Psalms Chapter 133
    "Psalms 133:1": "How Good It Is When Brothers Dwell in Unity",

    // Psalms Chapter 134
    "Psalms 134:1": "Bless the LORD, All You Servants",

    // Psalms Chapter 135
    "Psalms 135:1": "Praise the LORD",

    // Psalms Chapter 136
    "Psalms 136:1": "His Steadfast Love Endures Forever",

    // Psalms Chapter 137
    "Psalms 137:1": "By the Waters of Babylon",

    // Psalms Chapter 138
    "Psalms 138:1": "I Give You Thanks with My Whole Heart",

    // Psalms Chapter 139
    "Psalms 139:1": "You Have Searched Me and Known Me",

    // Psalms Chapter 140
    "Psalms 140:1": "Deliver Me from Evil Men",

    // Psalms Chapter 141
    "Psalms 141:1": "Set a Guard Over My Mouth",

    // Psalms Chapter 142
    "Psalms 142:1": "No One Cares for My Soul",

    // Psalms Chapter 143
    "Psalms 143:1": "Hear My Prayer, O LORD",

    // Psalms Chapter 144
    "Psalms 144:1": "Blessed Be the LORD, My Rock",

    // Psalms Chapter 145
    "Psalms 145:1": "I Will Extol You, My God and King",

    // Psalms Chapter 146
    "Psalms 146:1": "Praise the LORD, O My Soul",

    // Psalms Chapter 147
    "Psalms 147:1": "How Good It Is to Sing Praises",

    // Psalms Chapter 148
    "Psalms 148:1": "Praise the LORD from the Heavens",

    // Psalms Chapter 149
    "Psalms 149:1": "Sing to the LORD a New Song",

    // Psalms Chapter 150
    "Psalms 150:1": "Praise the LORD! Let Everything Praise the LORD",

    // Proverbs Chapter 1
    "Proverbs 1:1": "The Purpose of Proverbs",
    "Proverbs 1:7": "The Fear of the LORD Is the Beginning of Knowledge",
    "Proverbs 1:8": "Warning Against Sinful Enticements",
    "Proverbs 1:20": "Wisdom Calls Out",

    // Proverbs Chapter 2
    "Proverbs 2:1": "The Value of Wisdom",

    // Proverbs Chapter 3
    "Proverbs 3:1": "Trust in the LORD with All Your Heart",
    "Proverbs 3:11": "The LORD's Discipline",
    "Proverbs 3:13": "Blessed Is the One Who Finds Wisdom",
    "Proverbs 3:21": "Do Not Let Wisdom Depart from Your Eyes",

    // Proverbs Chapter 4
    "Proverbs 4:1": "A Father's Instruction",
    "Proverbs 4:10": "The Path of the Righteous",
    "Proverbs 4:20": "Guard Your Heart",

    // Proverbs Chapter 5
    "Proverbs 5:1": "Warning Against Adultery",

    // Proverbs Chapter 6
    "Proverbs 6:1": "Practical Warnings",
    "Proverbs 6:6": "Go to the Ant, You Sluggard",
    "Proverbs 6:12": "The Worthless Person",
    "Proverbs 6:16": "Seven Things the LORD Hates",
    "Proverbs 6:20": "Warning Against Adultery",

    // Proverbs Chapter 7
    "Proverbs 7:1": "Warning Against the Adulteress",

    // Proverbs Chapter 8
    "Proverbs 8:1": "Wisdom's Call",
    "Proverbs 8:22": "Wisdom's Role in Creation",

    // Proverbs Chapter 9
    "Proverbs 9:1": "Wisdom's Invitation",
    "Proverbs 9:13": "Folly's Invitation",

    // Proverbs Chapter 10
    "Proverbs 10:1": "The Proverbs of Solomon",

    // Proverbs Chapter 11
    "Proverbs 11:1": "A False Balance Is an Abomination",

    // Proverbs Chapter 12
    "Proverbs 12:1": "Whoever Loves Discipline Loves Knowledge",

    // Proverbs Chapter 13
    "Proverbs 13:1": "A Wise Son Hears His Father's Instruction",

    // Proverbs Chapter 14
    "Proverbs 14:1": "The Wise Woman Builds Her House",

    // Proverbs Chapter 15
    "Proverbs 15:1": "A Soft Answer Turns Away Wrath",

    // Proverbs Chapter 16
    "Proverbs 16:1": "The Plans of the Heart Belong to Man",

    // Proverbs Chapter 17
    "Proverbs 17:1": "Better Is a Dry Morsel with Quiet",

    // Proverbs Chapter 18
    "Proverbs 18:1": "Whoever Isolates Himself Seeks His Own Desire",

    // Proverbs Chapter 19
    "Proverbs 19:1": "Better Is a Poor Person Who Walks in Integrity",

    // Proverbs Chapter 20
    "Proverbs 20:1": "Wine Is a Mocker",

    // Proverbs Chapter 21
    "Proverbs 21:1": "The King's Heart Is in the Hand of the LORD",

    // Proverbs Chapter 22
    "Proverbs 22:1": "A Good Name Is to Be Chosen",
    "Proverbs 22:17": "The Sayings of the Wise",

    // Proverbs Chapter 23
    "Proverbs 23:1": "When You Sit to Eat with a Ruler",
    "Proverbs 23:19": "Listen, My Son",

    // Proverbs Chapter 24
    "Proverbs 24:1": "Be Not Envious of Evil Men",
    "Proverbs 24:23": "Further Sayings of the Wise",

    // Proverbs Chapter 25
    "Proverbs 25:1": "More Proverbs of Solomon",

    // Proverbs Chapter 26
    "Proverbs 26:1": "Like Snow in Summer",

    // Proverbs Chapter 27
    "Proverbs 27:1": "Do Not Boast About Tomorrow",

    // Proverbs Chapter 28
    "Proverbs 28:1": "The Wicked Flee When No One Pursues",

    // Proverbs Chapter 29
    "Proverbs 29:1": "He Who Is Often Reproved",

    // Proverbs Chapter 30
    "Proverbs 30:1": "The Words of Agur",

    // Proverbs Chapter 31
    "Proverbs 31:1": "The Words of King Lemuel",
    "Proverbs 31:10": "The Excellent Wife",

    // Ecclesiastes Chapter 1
    "Ecclesiastes 1:1": "All Is Vanity",
    "Ecclesiastes 1:12": "The Vanity of Wisdom",

    // Ecclesiastes Chapter 2
    "Ecclesiastes 2:1": "The Vanity of Pleasure",
    "Ecclesiastes 2:12": "The Vanity of Wisdom and Folly",
    "Ecclesiastes 2:18": "The Vanity of Toil",

    // Ecclesiastes Chapter 3
    "Ecclesiastes 3:1": "A Time for Everything",
    "Ecclesiastes 3:16": "The Injustice of Life",

    // Ecclesiastes Chapter 4
    "Ecclesiastes 4:1": "Oppression, Toil, and Friendlessness",

    // Ecclesiastes Chapter 5
    "Ecclesiastes 5:1": "Fear God",
    "Ecclesiastes 5:8": "The Vanity of Wealth",

    // Ecclesiastes Chapter 6
    "Ecclesiastes 6:1": "The Vanity of Wealth and Honor",

    // Ecclesiastes Chapter 7
    "Ecclesiastes 7:1": "The Value of Wisdom",

    // Ecclesiastes Chapter 8
    "Ecclesiastes 8:1": "Obey the King",
    "Ecclesiastes 8:9": "The Wicked and the Righteous",

    // Ecclesiastes Chapter 9
    "Ecclesiastes 9:1": "Death Comes to All",
    "Ecclesiastes 9:13": "Wisdom Better Than Folly",

    // Ecclesiastes Chapter 10
    "Ecclesiastes 10:1": "Miscellaneous Observations",

    // Ecclesiastes Chapter 11
    "Ecclesiastes 11:1": "Cast Your Bread Upon the Waters",
    "Ecclesiastes 11:7": "Rejoice in Your Youth",

    // Ecclesiastes Chapter 12
    "Ecclesiastes 12:1": "Remember Your Creator",
    "Ecclesiastes 12:9": "The Conclusion",

    // Song of Solomon Chapter 1
    "Song of Solomon 1:1": "The Song of Songs",
    "Song of Solomon 1:2": "The Bride's Desire",

    // Song of Solomon Chapter 2
    "Song of Solomon 2:1": "The Bride and the Bridegroom",
    "Song of Solomon 2:8": "The Bride Hears Her Beloved",

    // Song of Solomon Chapter 3
    "Song of Solomon 3:1": "The Bride's Dream",
    "Song of Solomon 3:6": "Solomon's Wedding Procession",

    // Song of Solomon Chapter 4
    "Song of Solomon 4:1": "The Bridegroom Praises the Bride",

    // Song of Solomon Chapter 5
    "Song of Solomon 5:1": "The Bride and Bridegroom Feast",
    "Song of Solomon 5:2": "The Bride's Second Dream",

    // Song of Solomon Chapter 6
    "Song of Solomon 6:1": "Where Has Your Beloved Gone?",
    "Song of Solomon 6:4": "The Bridegroom Praises the Bride",

    // Song of Solomon Chapter 7
    "Song of Solomon 7:1": "How Beautiful Are Your Feet",

    // Song of Solomon Chapter 8
    "Song of Solomon 8:1": "The Bride's Love",
    "Song of Solomon 8:8": "We Have a Little Sister",

    // Isaiah Chapter 1
    "Isaiah 1:1": "The Vision of Isaiah",
    "Isaiah 1:2": "Israel's Rebellion",
    "Isaiah 1:10": "The Worthlessness of Israel's Worship",
    "Isaiah 1:18": "Come, Let Us Reason Together",
    "Isaiah 1:21": "The Unfaithful City",

    // Isaiah Chapter 2
    "Isaiah 2:1": "The Mountain of the LORD",
    "Isaiah 2:6": "The Day of the LORD",

    // Isaiah Chapter 3
    "Isaiah 3:1": "Judgment on Judah and Jerusalem",
    "Isaiah 3:16": "Judgment on the Daughters of Zion",

    // Isaiah Chapter 4
    "Isaiah 4:1": "Seven Women",
    "Isaiah 4:2": "The Branch of the LORD",

    // Isaiah Chapter 5
    "Isaiah 5:1": "The Song of the Vineyard",
    "Isaiah 5:8": "Woes Upon the Wicked",
    "Isaiah 5:26": "The LORD's Anger Against Israel",

    // Isaiah Chapter 6
    "Isaiah 6:1": "Isaiah's Vision of the LORD",
    "Isaiah 6:8": "Here Am I! Send Me",

    // Isaiah Chapter 7
    "Isaiah 7:1": "The Sign of Immanuel",

    // Isaiah Chapter 8
    "Isaiah 8:1": "The Coming Assyrian Invasion",
    "Isaiah 8:11": "Fear God, Wait for the LORD",

    // Isaiah Chapter 9
    "Isaiah 9:1": "For to Us a Child Is Born",
    "Isaiah 9:8": "Judgment on Israel's Arrogance",

    // Isaiah Chapter 10
    "Isaiah 10:1": "Woe to the Unjust",
    "Isaiah 10:5": "Assyria, the Rod of God's Anger",
    "Isaiah 10:20": "The Remnant of Israel Will Return",

    // Isaiah Chapter 11
    "Isaiah 11:1": "The Righteous Reign of the Branch",
    "Isaiah 11:10": "The Remnant Recovered",

    // Isaiah Chapter 12
    "Isaiah 12:1": "A Song of Thanksgiving",

    // Isaiah Chapter 13
    "Isaiah 13:1": "The Burden Against Babylon",

    // Isaiah Chapter 14
    "Isaiah 14:1": "Israel's Restoration",
    "Isaiah 14:4": "The Fall of the King of Babylon",
    "Isaiah 14:12": "How You Have Fallen from Heaven, O Lucifer",
    "Isaiah 14:24": "Assyria Will Be Destroyed",
    "Isaiah 14:28": "The Burden Against Philistia",

    // Isaiah Chapter 15
    "Isaiah 15:1": "The Burden Against Moab",

    // Isaiah Chapter 16
    "Isaiah 16:1": "Moab's Plea for Refuge",
    "Isaiah 16:13": "The Prophecy Against Moab",

    // Isaiah Chapter 17
    "Isaiah 17:1": "The Burden Against Damascus",

    // Isaiah Chapter 18
    "Isaiah 18:1": "The Burden Against Cush",

    // Isaiah Chapter 19
    "Isaiah 19:1": "The Burden Against Egypt",
    "Isaiah 19:16": "The LORD Will Strike and Heal Egypt",

    // Isaiah Chapter 20
    "Isaiah 20:1": "Isaiah Walks Naked as a Sign",

    // Isaiah Chapter 21
    "Isaiah 21:1": "The Burden Against Babylon",
    "Isaiah 21:11": "The Burden Against Edom",
    "Isaiah 21:13": "The Burden Against Arabia",

    // Isaiah Chapter 22
    "Isaiah 22:1": "The Burden Against the Valley of Vision",
    "Isaiah 22:15": "Shebna's Disgrace and Eliakim's Promotion",

    // Isaiah Chapter 23
    "Isaiah 23:1": "The Burden Against Tyre",

    // Isaiah Chapter 24
    "Isaiah 24:1": "The LORD's Judgment on the Earth",

    // Isaiah Chapter 25
    "Isaiah 25:1": "Praise for the LORD's Favor",
    "Isaiah 25:6": "A Feast for All Peoples",

    // Isaiah Chapter 26
    "Isaiah 26:1": "A Song of Salvation",

    // Isaiah Chapter 27
    "Isaiah 27:1": "The Deliverance of Israel",

    // Isaiah Chapter 28
    "Isaiah 28:1": "Woe to Ephraim",
    "Isaiah 28:14": "A Cornerstone in Zion",

    // Isaiah Chapter 29
    "Isaiah 29:1": "Woe to the City of David",
    "Isaiah 29:13": "Hypocrisy Rebuked",

    // Isaiah Chapter 30
    "Isaiah 30:1": "Woe to the Rebellious Children",
    "Isaiah 30:18": "The LORD Will Be Gracious",

    // Isaiah Chapter 31
    "Isaiah 31:1": "Woe to Those Who Trust in Egypt",

    // Isaiah Chapter 32
    "Isaiah 32:1": "A Righteous King",
    "Isaiah 32:9": "The Women of Jerusalem",

    // Isaiah Chapter 33
    "Isaiah 33:1": "Woe to the Destroyer",
    "Isaiah 33:13": "The Sinners in Zion",

    // Isaiah Chapter 34
    "Isaiah 34:1": "God's Judgment on the Nations",

    // Isaiah Chapter 35
    "Isaiah 35:1": "The Glory of Zion",

    // Isaiah Chapter 36
    "Isaiah 36:1": "Sennacherib Threatens Jerusalem",

    // Isaiah Chapter 37
    "Isaiah 37:1": "Hezekiah's Prayer",
    "Isaiah 37:21": "Isaiah's Prophecy",
    "Isaiah 37:36": "The Angel Destroys the Assyrians",

    // Isaiah Chapter 38
    "Isaiah 38:1": "Hezekiah's Illness and Recovery",
    "Isaiah 38:9": "Hezekiah's Song of Thanksgiving",

    // Isaiah Chapter 39
    "Isaiah 39:1": "Envoys from Babylon",

    // Isaiah Chapter 40
    "Isaiah 40:1": "Comfort for God's People",
    "Isaiah 40:9": "Here Is Your God",
    "Isaiah 40:12": "Who Can Be Compared to God?",
    "Isaiah 40:27": "The LORD Is the Everlasting God",

    // Isaiah Chapter 41
    "Isaiah 41:1": "God's Help to Israel",
    "Isaiah 41:21": "The Futility of Idols",

    // Isaiah Chapter 42
    "Isaiah 42:1": "The Servant of the LORD",
    "Isaiah 42:10": "A New Song of Praise",
    "Isaiah 42:18": "Israel's Blindness",

    // Isaiah Chapter 43
    "Isaiah 43:1": "Israel's Only Savior",
    "Isaiah 43:14": "Deliverance Promised",
    "Isaiah 43:22": "Israel's Unfaithfulness",

    // Isaiah Chapter 44
    "Isaiah 44:1": "The LORD Has Chosen Israel",
    "Isaiah 44:9": "The Folly of Idolatry",
    "Isaiah 44:21": "The LORD Redeems Israel",
    "Isaiah 44:24": "Jerusalem to Be Restored",

    // Isaiah Chapter 45
    "Isaiah 45:1": "Cyrus God's Instrument",
    "Isaiah 45:9": "Woe to Him Who Quarrels with His Maker",
    "Isaiah 45:14": "The LORD, the Only Savior",

    // Isaiah Chapter 46
    "Isaiah 46:1": "The Idols of Babylon",
    "Isaiah 46:5": "To Whom Will You Compare Me?",

    // Isaiah Chapter 47
    "Isaiah 47:1": "The Humiliation of Babylon",

    // Isaiah Chapter 48
    "Isaiah 48:1": "Deliverance Promised",
    "Isaiah 48:12": "The LORD's Ancient Plan",

    // Isaiah Chapter 49
    "Isaiah 49:1": "The Servant's Mission",
    "Isaiah 49:14": "Zion Restored",

    // Isaiah Chapter 50
    "Isaiah 50:1": "Israel's Sin",
    "Isaiah 50:4": "The Obedience of the Servant",

    // Isaiah Chapter 51
    "Isaiah 51:1": "Salvation for Zion",
    "Isaiah 51:17": "The Cup of the LORD's Wrath",

    // Isaiah Chapter 52
    "Isaiah 52:1": "Awake, Awake, O Zion",
    "Isaiah 52:7": "How Beautiful Are the Feet",
    "Isaiah 52:13": "The Suffering Servant",

    // Isaiah Chapter 53
    "Isaiah 53:1": "Who Has Believed Our Message?",
    "Isaiah 53:4": "He Was Pierced for Our Transgressions",
    "Isaiah 53:10": "The LORD's Good Plan",

    // Isaiah Chapter 54
    "Isaiah 54:1": "The Future Glory of Zion",

    // Isaiah Chapter 55
    "Isaiah 55:1": "The Invitation to Abundant Life",
    "Isaiah 55:6": "Seek the LORD While He May Be Found",

    // Isaiah Chapter 56
    "Isaiah 56:1": "Salvation for Foreigners",
    "Isaiah 56:9": "Israel's Blind Watchmen",

    // Isaiah Chapter 57
    "Isaiah 57:1": "The Righteous Perish",
    "Isaiah 57:14": "Healing for the Repentant",

    // Isaiah Chapter 58
    "Isaiah 58:1": "True Fasting",

    // Isaiah Chapter 59
    "Isaiah 59:1": "Sin Separates from God",
    "Isaiah 59:15": "The Redeemer Will Come to Zion",

    // Isaiah Chapter 60
    "Isaiah 60:1": "Arise, Shine, for Your Light Has Come",

    // Isaiah Chapter 61
    "Isaiah 61:1": "The Year of the LORD's Favor",
    "Isaiah 61:10": "Clothed with Salvation",

    // Isaiah Chapter 62
    "Isaiah 62:1": "Zion's New Name",

    // Isaiah Chapter 63
    "Isaiah 63:1": "God's Vengeance on the Nations",
    "Isaiah 63:7": "God's Mercy Remembered",

    // Isaiah Chapter 64
    "Isaiah 64:1": "Prayer for Mercy",

    // Isaiah Chapter 65
    "Isaiah 65:1": "Judgment and Salvation",
    "Isaiah 65:17": "New Heavens and a New Earth",

    // Isaiah Chapter 66
    "Isaiah 66:1": "Heaven Is My Throne",
    "Isaiah 66:10": "Rejoice with Jerusalem",
    "Isaiah 66:18": "All Nations Will Come",

    // Jeremiah Chapter 1
    "Jeremiah 1:1": "The Call of Jeremiah",
    "Jeremiah 1:11": "Two Visions",

    // Jeremiah Chapter 2
    "Jeremiah 2:1": "Israel's Apostasy",
    "Jeremiah 2:14": "The Results of Israel's Sin",

    // Jeremiah Chapter 3
    "Jeremiah 3:1": "Unfaithful Israel",
    "Jeremiah 3:11": "A Call to Repentance",

    // Jeremiah Chapter 4
    "Jeremiah 4:1": "A Call to Repentance",
    "Jeremiah 4:5": "Disaster from the North",

    // Jeremiah Chapter 5
    "Jeremiah 5:1": "Jerusalem's Godlessness",
    "Jeremiah 5:14": "Coming Judgment",

    // Jeremiah Chapter 6
    "Jeremiah 6:1": "The Siege of Jerusalem",
    "Jeremiah 6:16": "Stand at the Crossroads",

    // Jeremiah Chapter 7
    "Jeremiah 7:1": "Trust Not in Lying Words",
    "Jeremiah 7:21": "Obedience, Not Sacrifice",

    // Jeremiah Chapter 8
    "Jeremiah 8:1": "The Sin and Punishment of Judah",
    "Jeremiah 8:18": "Jeremiah's Grief",

    // Jeremiah Chapter 9
    "Jeremiah 9:1": "Jeremiah Weeps for the People",
    "Jeremiah 9:17": "A Lament for Zion",
    "Jeremiah 9:23": "Let Him Who Boasts Boast in the LORD",

    // Jeremiah Chapter 10
    "Jeremiah 10:1": "Idols and the True God",
    "Jeremiah 10:17": "The Coming Exile",

    // Jeremiah Chapter 11
    "Jeremiah 11:1": "The Broken Covenant",
    "Jeremiah 11:18": "The Plot Against Jeremiah",

    // Jeremiah Chapter 12
    "Jeremiah 12:1": "Jeremiah's Question",
    "Jeremiah 12:7": "The LORD's Answer",

    // Jeremiah Chapter 13
    "Jeremiah 13:1": "The Linen Belt",
    "Jeremiah 13:12": "The Wineskins",
    "Jeremiah 13:15": "The Captivity Threatened",

    // Jeremiah Chapter 14
    "Jeremiah 14:1": "The Drought",
    "Jeremiah 14:7": "Prayer for Mercy",
    "Jeremiah 14:13": "Lying Prophets",

    // Jeremiah Chapter 15
    "Jeremiah 15:1": "The LORD's Answer",
    "Jeremiah 15:10": "Jeremiah's Complaint",

    // Jeremiah Chapter 16
    "Jeremiah 16:1": "Jeremiah Forbidden to Marry",
    "Jeremiah 16:14": "Restoration Promised",

    // Jeremiah Chapter 17
    "Jeremiah 17:1": "Judah's Sin Written with an Iron Pen",
    "Jeremiah 17:5": "Trust in Man Versus Trust in God",
    "Jeremiah 17:9": "The Heart Is Deceitful",
    "Jeremiah 17:19": "Hallow the Sabbath",

    // Jeremiah Chapter 18
    "Jeremiah 18:1": "The Potter and the Clay",
    "Jeremiah 18:18": "A Plot Against Jeremiah",

    // Jeremiah Chapter 19
    "Jeremiah 19:1": "The Broken Flask",

    // Jeremiah Chapter 20
    "Jeremiah 20:1": "Jeremiah Persecuted",
    "Jeremiah 20:7": "Jeremiah's Complaint",

    // Jeremiah Chapter 21
    "Jeremiah 21:1": "Jerusalem Will Fall to Babylon",

    // Jeremiah Chapter 22
    "Jeremiah 22:1": "Message to the House of David",
    "Jeremiah 22:10": "Messages Concerning Kings",

    // Jeremiah Chapter 23
    "Jeremiah 23:1": "The Righteous Branch",
    "Jeremiah 23:9": "Lying Prophets",

    // Jeremiah Chapter 24
    "Jeremiah 24:1": "The Good and Bad Figs",

    // Jeremiah Chapter 25
    "Jeremiah 25:1": "Seventy Years of Captivity",
    "Jeremiah 25:15": "The Cup of God's Wrath",

    // Jeremiah Chapter 26
    "Jeremiah 26:1": "Jeremiah Threatened with Death",

    // Jeremiah Chapter 27
    "Jeremiah 27:1": "The Yoke of Babylon",

    // Jeremiah Chapter 28
    "Jeremiah 28:1": "Hananiah's False Prophecy",

    // Jeremiah Chapter 29
    "Jeremiah 29:1": "Letter to the Exiles",
    "Jeremiah 29:15": "False Prophets in Babylon",

    // Jeremiah Chapter 30
    "Jeremiah 30:1": "Restoration Promised",

    // Jeremiah Chapter 31
    "Jeremiah 31:1": "Israel's Restoration",
    "Jeremiah 31:15": "Rachel Weeping for Her Children",
    "Jeremiah 31:27": "A New Covenant",

    // Jeremiah Chapter 32
    "Jeremiah 32:1": "Jeremiah Buys a Field",
    "Jeremiah 32:16": "Jeremiah's Prayer",
    "Jeremiah 32:26": "The LORD's Answer",

    // Jeremiah Chapter 33
    "Jeremiah 33:1": "The LORD's Assurance",
    "Jeremiah 33:14": "The Righteous Branch",

    // Jeremiah Chapter 34
    "Jeremiah 34:1": "Zedekiah Warned",
    "Jeremiah 34:8": "The Broken Covenant with the Slaves",

    // Jeremiah Chapter 35
    "Jeremiah 35:1": "The Rechabites' Obedience",

    // Jeremiah Chapter 36
    "Jeremiah 36:1": "Jeremiah's Scroll Read",
    "Jeremiah 36:20": "The King Burns the Scroll",

    // Jeremiah Chapter 37
    "Jeremiah 37:1": "Jeremiah Warns Zedekiah",
    "Jeremiah 37:11": "Jeremiah Imprisoned",

    // Jeremiah Chapter 38
    "Jeremiah 38:1": "Jeremiah Thrown into a Cistern",
    "Jeremiah 38:14": "Zedekiah Questions Jeremiah",

    // Jeremiah Chapter 39
    "Jeremiah 39:1": "The Fall of Jerusalem",
    "Jeremiah 39:11": "Jeremiah Released",

    // Jeremiah Chapter 40
    "Jeremiah 40:1": "Jeremiah Remains in Judah",
    "Jeremiah 40:7": "Gedaliah Made Governor",

    // Jeremiah Chapter 41
    "Jeremiah 41:1": "Gedaliah Assassinated",

    // Jeremiah Chapter 42
    "Jeremiah 42:1": "The People Ask Jeremiah to Pray",
    "Jeremiah 42:7": "The LORD's Answer",

    // Jeremiah Chapter 43
    "Jeremiah 43:1": "The Flight to Egypt",
    "Jeremiah 43:8": "Jeremiah Prophesies Against Egypt",

    // Jeremiah Chapter 44
    "Jeremiah 44:1": "Judgment for Idolatry",

    // Jeremiah Chapter 45
    "Jeremiah 45:1": "A Message to Baruch",

    // Jeremiah Chapter 46
    "Jeremiah 46:1": "Prophecies Against Egypt",
    "Jeremiah 46:27": "The LORD Will Save Israel",

    // Jeremiah Chapter 47
    "Jeremiah 47:1": "Prophecy Against the Philistines",

    // Jeremiah Chapter 48
    "Jeremiah 48:1": "Prophecy Against Moab",

    // Jeremiah Chapter 49
    "Jeremiah 49:1": "Prophecy Against Ammon",
    "Jeremiah 49:7": "Prophecy Against Edom",
    "Jeremiah 49:23": "Prophecy Against Damascus",
    "Jeremiah 49:28": "Prophecy Against Kedar and Hazor",
    "Jeremiah 49:34": "Prophecy Against Elam",

    // Jeremiah Chapter 50
    "Jeremiah 50:1": "Prophecy Against Babylon",

    // Jeremiah Chapter 51
    "Jeremiah 51:1": "The Destruction of Babylon",
    "Jeremiah 51:59": "Jeremiah's Command to Seraiah",

    // Jeremiah Chapter 52
    "Jeremiah 52:1": "The Fall of Jerusalem Recounted",
    "Jeremiah 52:31": "Jehoiachin Released",

    // Lamentations Chapter 1
    "Lamentations 1:1": "How Lonely Sits the City",

    // Lamentations Chapter 2
    "Lamentations 2:1": "God's Anger Against Jerusalem",

    // Lamentations Chapter 3
    "Lamentations 3:1": "Hope in the LORD's Faithfulness",
    "Lamentations 3:22": "Great Is Your Faithfulness",

    // Lamentations Chapter 4
    "Lamentations 4:1": "The Horrors of the Siege",

    // Lamentations Chapter 5
    "Lamentations 5:1": "A Prayer for Restoration",

    // Ezekiel Chapter 1
    "Ezekiel 1:1": "Ezekiel's Vision of God's Glory",
    "Ezekiel 1:15": "The Four Wheels",

    // Ezekiel Chapter 2
    "Ezekiel 2:1": "Ezekiel's Call",

    // Ezekiel Chapter 3
    "Ezekiel 3:1": "Ezekiel Eats the Scroll",
    "Ezekiel 3:16": "Ezekiel a Watchman",

    // Ezekiel Chapter 4
    "Ezekiel 4:1": "The Siege of Jerusalem Portrayed",

    // Ezekiel Chapter 5
    "Ezekiel 5:1": "Jerusalem's Judgment",

    // Ezekiel Chapter 6
    "Ezekiel 6:1": "Prophecy Against the Mountains",

    // Ezekiel Chapter 7
    "Ezekiel 7:1": "The End Has Come",

    // Ezekiel Chapter 8
    "Ezekiel 8:1": "Idolatry in the Temple",

    // Ezekiel Chapter 9
    "Ezekiel 9:1": "The Slaughter of the Idolaters",

    // Ezekiel Chapter 10
    "Ezekiel 10:1": "God's Glory Leaves the Temple",

    // Ezekiel Chapter 11
    "Ezekiel 11:1": "Judgment on Israel's Leaders",
    "Ezekiel 11:14": "Promise of Restoration",
    "Ezekiel 11:22": "God's Glory Departs",

    // Ezekiel Chapter 12
    "Ezekiel 12:1": "The Exile Symbolized",
    "Ezekiel 12:21": "The Fulfillment Is at Hand",

    // Ezekiel Chapter 13
    "Ezekiel 13:1": "False Prophets Condemned",

    // Ezekiel Chapter 14
    "Ezekiel 14:1": "Idolaters Condemned",
    "Ezekiel 14:12": "Four Severe Judgments",

    // Ezekiel Chapter 15
    "Ezekiel 15:1": "Jerusalem a Useless Vine",

    // Ezekiel Chapter 16
    "Ezekiel 16:1": "Jerusalem's Unfaithfulness",
    "Ezekiel 16:44": "Like Mother, Like Daughter",
    "Ezekiel 16:59": "The LORD's Covenant Remembered",

    // Ezekiel Chapter 17
    "Ezekiel 17:1": "The Parable of Two Eagles",
    "Ezekiel 17:22": "A Tender Twig",

    // Ezekiel Chapter 18
    "Ezekiel 18:1": "The Soul Who Sins Shall Die",
    "Ezekiel 18:30": "Repent and Live",

    // Ezekiel Chapter 19
    "Ezekiel 19:1": "A Lament for Israel's Princes",

    // Ezekiel Chapter 20
    "Ezekiel 20:1": "Israel's History of Rebellion",
    "Ezekiel 20:45": "Prophecy Against the South",

    // Ezekiel Chapter 21
    "Ezekiel 21:1": "The Sword of the LORD",
    "Ezekiel 21:18": "The Sword of Babylon",

    // Ezekiel Chapter 22
    "Ezekiel 22:1": "Jerusalem's Sins",
    "Ezekiel 22:17": "Israel Like Dross",

    // Ezekiel Chapter 23
    "Ezekiel 23:1": "Two Adulterous Sisters",

    // Ezekiel Chapter 24
    "Ezekiel 24:1": "The Parable of the Cooking Pot",
    "Ezekiel 24:15": "Ezekiel's Wife Dies",

    // Ezekiel Chapter 25
    "Ezekiel 25:1": "Prophecies Against Ammon, Moab, Edom, and Philistia",

    // Ezekiel Chapter 26
    "Ezekiel 26:1": "Prophecy Against Tyre",

    // Ezekiel Chapter 27
    "Ezekiel 27:1": "A Lament for Tyre",

    // Ezekiel Chapter 28
    "Ezekiel 28:1": "Prophecy Against the Prince of Tyre",
    "Ezekiel 28:11": "A Lament for the King of Tyre",
    "Ezekiel 28:20": "Prophecy Against Sidon",

    // Ezekiel Chapter 29
    "Ezekiel 29:1": "Prophecy Against Egypt",

    // Ezekiel Chapter 30
    "Ezekiel 30:1": "A Lament for Egypt",

    // Ezekiel Chapter 31
    "Ezekiel 31:1": "Egypt Like a Cedar in Lebanon",

    // Ezekiel Chapter 32
    "Ezekiel 32:1": "A Lament for Pharaoh",
    "Ezekiel 32:17": "Egypt in Sheol",

    // Ezekiel Chapter 33
    "Ezekiel 33:1": "Ezekiel a Watchman",
    "Ezekiel 33:10": "Why Will You Die?",
    "Ezekiel 33:21": "Jerusalem's Fall Announced",

    // Ezekiel Chapter 34
    "Ezekiel 34:1": "Prophecy Against the Shepherds",
    "Ezekiel 34:11": "The LORD the True Shepherd",

    // Ezekiel Chapter 35
    "Ezekiel 35:1": "Prophecy Against Mount Seir",

    // Ezekiel Chapter 36
    "Ezekiel 36:1": "Prophecy to the Mountains of Israel",
    "Ezekiel 36:16": "A New Heart and Spirit",

    // Ezekiel Chapter 37
    "Ezekiel 37:1": "The Valley of Dry Bones",
    "Ezekiel 37:15": "The Two Sticks",

    // Ezekiel Chapter 38
    "Ezekiel 38:1": "Prophecy Against Gog",

    // Ezekiel Chapter 39
    "Ezekiel 39:1": "The Destruction of Gog",
    "Ezekiel 39:21": "Israel to Be Restored",

    // Ezekiel Chapter 40
    "Ezekiel 40:1": "The Vision of the New Temple",

    // Ezekiel Chapter 41
    "Ezekiel 41:1": "The Inner Temple",

    // Ezekiel Chapter 42
    "Ezekiel 42:1": "The Chambers for the Priests",

    // Ezekiel Chapter 43
    "Ezekiel 43:1": "The Glory of the LORD Returns",
    "Ezekiel 43:13": "The Altar",

    // Ezekiel Chapter 44
    "Ezekiel 44:1": "The East Gate",
    "Ezekiel 44:9": "The Levites and Priests",

    // Ezekiel Chapter 45
    "Ezekiel 45:1": "The Portion for the LORD",
    "Ezekiel 45:18": "The Feasts",

    // Ezekiel Chapter 46
    "Ezekiel 46:1": "The Prince's Offerings",
    "Ezekiel 46:19": "The Temple Kitchens",

    // Ezekiel Chapter 47
    "Ezekiel 47:1": "The River from the Temple",
    "Ezekiel 47:13": "The Boundaries of the Land",

    // Ezekiel Chapter 48
    "Ezekiel 48:1": "The Division of the Land",
    "Ezekiel 48:30": "The Gates of the City",

    // Daniel Chapter 1
    "Daniel 1:1": "Daniel Taken to Babylon",
    "Daniel 1:8": "Daniel's Faithfulness",

    // Daniel Chapter 2
    "Daniel 2:1": "Nebuchadnezzar's Dream",
    "Daniel 2:14": "Daniel Interprets the Dream",
    "Daniel 2:31": "The Dream Revealed",
    "Daniel 2:46": "Daniel Promoted",

    // Daniel Chapter 3
    "Daniel 3:1": "The Image of Gold",
    "Daniel 3:8": "The Three Hebrews Accused",
    "Daniel 3:13": "Into the Fiery Furnace",
    "Daniel 3:24": "Delivered from the Furnace",

    // Daniel Chapter 4
    "Daniel 4:1": "Nebuchadnezzar's Second Dream",
    "Daniel 4:19": "Daniel Interprets the Dream",
    "Daniel 4:28": "The Dream Fulfilled",

    // Daniel Chapter 5
    "Daniel 5:1": "Belshazzar's Feast",
    "Daniel 5:5": "The Writing on the Wall",
    "Daniel 5:13": "Daniel Interprets the Writing",

    // Daniel Chapter 6
    "Daniel 6:1": "The Plot Against Daniel",
    "Daniel 6:16": "Daniel in the Lions' Den",

    // Daniel Chapter 7
    "Daniel 7:1": "Daniel's Vision of Four Beasts",
    "Daniel 7:15": "The Interpretation of the Vision",

    // Daniel Chapter 8
    "Daniel 8:1": "Daniel's Vision of the Ram and Goat",
    "Daniel 8:15": "The Interpretation of the Vision",

    // Daniel Chapter 9
    "Daniel 9:1": "Daniel's Prayer",
    "Daniel 9:20": "The Seventy Weeks",

    // Daniel Chapter 10
    "Daniel 10:1": "Daniel's Vision of a Man",

    // Daniel Chapter 11
    "Daniel 11:1": "Kings of the South and North",

    // Daniel Chapter 12
    "Daniel 12:1": "The Time of the End",
    "Daniel 12:5": "How Long Until the End?",

    // Hosea Chapter 1
    "Hosea 1:1": "Hosea's Wife and Children",

    // Hosea Chapter 2
    "Hosea 2:1": "Israel's Unfaithfulness",
    "Hosea 2:14": "The LORD's Mercy on Israel",

    // Hosea Chapter 3
    "Hosea 3:1": "Hosea Redeems His Wife",

    // Hosea Chapter 4
    "Hosea 4:1": "The Charge Against Israel",

    // Hosea Chapter 5
    "Hosea 5:1": "Judgment on Israel and Judah",

    // Hosea Chapter 6
    "Hosea 6:1": "A Call to Repentance",
    "Hosea 6:4": "Faithless Israel",

    // Hosea Chapter 7
    "Hosea 7:1": "Israel's Corruption",

    // Hosea Chapter 8
    "Hosea 8:1": "Israel Will Reap the Whirlwind",

    // Hosea Chapter 9
    "Hosea 9:1": "Punishment for Israel",

    // Hosea Chapter 10
    "Hosea 10:1": "Israel's Sin and Captivity",

    // Hosea Chapter 11
    "Hosea 11:1": "The LORD's Love for Israel",

    // Hosea Chapter 12
    "Hosea 12:1": "The LORD's Indictment of Israel",

    // Hosea Chapter 13
    "Hosea 13:1": "The LORD's Anger Against Israel",

    // Hosea Chapter 14
    "Hosea 14:1": "A Plea to Return to the LORD",
    "Hosea 14:4": "Healing for the Repentant",

    // Joel Chapter 1
    "Joel 1:1": "The Invasion of Locusts",
    "Joel 1:13": "A Call to Repentance",

    // Joel Chapter 2
    "Joel 2:1": "The Day of the LORD",
    "Joel 2:12": "Return to the LORD",
    "Joel 2:18": "The LORD's Response",
    "Joel 2:28": "The Outpouring of the Spirit",

    // Joel Chapter 3
    "Joel 3:1": "Judgment on the Nations",
    "Joel 3:14": "The Valley of Decision",

    // Amos Chapter 1
    "Amos 1:1": "Judgment on Israel's Neighbors",

    // Amos Chapter 2
    "Amos 2:1": "Judgment on Moab",
    "Amos 2:4": "Judgment on Judah",
    "Amos 2:6": "Judgment on Israel",

    // Amos Chapter 3
    "Amos 3:1": "Witnesses Against Israel",

    // Amos Chapter 4
    "Amos 4:1": "Israel Has Not Returned to the LORD",

    // Amos Chapter 5
    "Amos 5:1": "A Lament for Israel",
    "Amos 5:18": "The Day of the LORD Is Darkness",

    // Amos Chapter 6
    "Amos 6:1": "Woe to the Complacent",

    // Amos Chapter 7
    "Amos 7:1": "Five Visions of Judgment",
    "Amos 7:10": "Amaziah Opposes Amos",

    // Amos Chapter 8
    "Amos 8:1": "The Vision of the Basket of Fruit",
    "Amos 8:4": "The Unscrupulous Merchant",

    // Amos Chapter 9
    "Amos 9:1": "The Destruction of Israel",
    "Amos 9:11": "The Restoration of Israel",

    // Obadiah Chapter 1
    "Obadiah 1:1": "Edom's Destruction",
    "Obadiah 1:15": "The Day of the LORD",

    // Jonah Chapter 1
    "Jonah 1:1": "Jonah Flees from the LORD",

    // Jonah Chapter 2
    "Jonah 2:1": "Jonah's Prayer",

    // Jonah Chapter 3
    "Jonah 3:1": "Jonah Goes to Nineveh",

    // Jonah Chapter 4
    "Jonah 4:1": "Jonah's Anger at the LORD's Compassion",

    // Micah Chapter 1
    "Micah 1:1": "Judgment on Samaria and Jerusalem",

    // Micah Chapter 2
    "Micah 2:1": "Woe to Oppressors",
    "Micah 2:12": "A Promise of Restoration",

    // Micah Chapter 3
    "Micah 3:1": "Rulers and Prophets Rebuked",

    // Micah Chapter 4
    "Micah 4:1": "The Mountain of the LORD",
    "Micah 4:9": "The LORD Will Rescue Zion",

    // Micah Chapter 5
    "Micah 5:1": "A Ruler from Bethlehem",
    "Micah 5:7": "The Remnant of Jacob",

    // Micah Chapter 6
    "Micah 6:1": "The LORD's Case Against Israel",
    "Micah 6:6": "What Does the LORD Require?",

    // Micah Chapter 7
    "Micah 7:1": "Misery Turned to Hope",
    "Micah 7:14": "God's Compassion on Israel",

    // Nahum Chapter 1
    "Nahum 1:1": "The LORD Is Slow to Anger",
    "Nahum 1:9": "The Destruction of Nineveh",

    // Nahum Chapter 2
    "Nahum 2:1": "The Destruction of Nineveh",

    // Nahum Chapter 3
    "Nahum 3:1": "Woe to Nineveh",

    // Habakkuk Chapter 1
    "Habakkuk 1:1": "Habakkuk's Complaint",
    "Habakkuk 1:5": "The LORD's Answer",
    "Habakkuk 1:12": "Habakkuk's Second Complaint",

    // Habakkuk Chapter 2
    "Habakkuk 2:1": "The LORD's Answer",
    "Habakkuk 2:6": "Woe to the Wicked",
    "Habakkuk 2:18": "The Futility of Idols",

    // Habakkuk Chapter 3
    "Habakkuk 3:1": "Habakkuk's Prayer",
    "Habakkuk 3:16": "Trust in God's Salvation",

    // Zephaniah Chapter 1
    "Zephaniah 1:1": "The Great Day of the LORD",

    // Zephaniah Chapter 2
    "Zephaniah 2:1": "A Call to Repentance",
    "Zephaniah 2:4": "Judgment on the Nations",

    // Zephaniah Chapter 3
    "Zephaniah 3:1": "Woe to Jerusalem",
    "Zephaniah 3:8": "The Purification of the Nations",
    "Zephaniah 3:14": "The Joy of Zion",

    // Haggai Chapter 1
    "Haggai 1:1": "A Call to Rebuild the Temple",

    // Haggai Chapter 2
    "Haggai 2:1": "The Coming Glory of the Temple",
    "Haggai 2:10": "Blessings for a Defiled People",
    "Haggai 2:20": "Zerubbabel the LORD's Signet Ring",

    // Zechariah Chapter 1
    "Zechariah 1:1": "A Call to Return to the LORD",
    "Zechariah 1:7": "The Vision of the Horses",
    "Zechariah 1:18": "The Vision of the Horns and Craftsmen",

    // Zechariah Chapter 2
    "Zechariah 2:1": "The Vision of the Measuring Line",

    // Zechariah Chapter 3
    "Zechariah 3:1": "The Vision of Joshua the High Priest",

    // Zechariah Chapter 4
    "Zechariah 4:1": "The Vision of the Golden Lampstand",

    // Zechariah Chapter 5
    "Zechariah 5:1": "The Vision of the Flying Scroll",
    "Zechariah 5:5": "The Vision of the Woman in a Basket",

    // Zechariah Chapter 6
    "Zechariah 6:1": "The Vision of the Four Chariots",
    "Zechariah 6:9": "The Crowning of Joshua",

    // Zechariah Chapter 7
    "Zechariah 7:1": "A Question About Fasting",

    // Zechariah Chapter 8
    "Zechariah 8:1": "The LORD Promises to Bless Jerusalem",

    // Zechariah Chapter 9
    "Zechariah 9:1": "Judgment on Israel's Enemies",
    "Zechariah 9:9": "Your King Comes to You",

    // Zechariah Chapter 10
    "Zechariah 10:1": "The Restoration of Judah and Israel",

    // Zechariah Chapter 11
    "Zechariah 11:1": "The Fall of Israel's Oppressors",
    "Zechariah 11:4": "The Two Shepherds",

    // Zechariah Chapter 12
    "Zechariah 12:1": "The Coming Deliverance of Jerusalem",

    // Zechariah Chapter 13
    "Zechariah 13:1": "A Fountain for Cleansing",
    "Zechariah 13:7": "The Shepherd Struck",

    // Zechariah Chapter 14
    "Zechariah 14:1": "The Day of the LORD",

    // Malachi Chapter 1
    "Malachi 1:1": "The LORD's Love for Israel",
    "Malachi 1:6": "Polluted Offerings",

    // Malachi Chapter 2
    "Malachi 2:1": "The Priests Rebuked",
    "Malachi 2:10": "Judah's Unfaithfulness",

    // Malachi Chapter 3
    "Malachi 3:1": "The Messenger of the Covenant",
    "Malachi 3:6": "Robbing God",
    "Malachi 3:13": "The Book of Remembrance",

    // Malachi Chapter 4
    "Malachi 4:1": "The Day of the LORD",
    "Malachi 4:4": "Behold, I Will Send Elijah",

    // ===========================
    // NEW TESTAMENT
    // ===========================

    // Matthew Chapter 1
    "Matthew 1:1": ["Genealogy of Jesus Christ", "Matthew begins by showing Jesus’ legal lineage from Abraham through David to Joseph, proving that Jesus is the promised Messiah and rightful King."],
    "Matthew 1:18": ["Birth of Jesus Christ", "Mary becomes pregnant by the Holy Spirit before marrying Joseph, showing Jesus’ divine origin."],
    "Matthew 1:19": ["Joseph’s Righteous Response", "Joseph plans to quietly divorce Mary, showing his righteousness and mercy."],
    "Matthew 1:20": ["Angel Appears to Joseph", "An angel explains that the child is conceived by the Holy Spirit and that Joseph should not fear."],
    "Matthew 1:21": ["Name Jesus — Savior", "The angel commands Joseph to name Him Jesus, meaning 'The Lord saves,' because He will save people from their sins."],
    "Matthew 1:22": ["Fulfillment of Prophecy", "Matthew explains this fulfills Isaiah’s prophecy of a virgin giving birth."],
    "Matthew 1:24": ["Joseph Obeys God", "Joseph obeys the angel, takes Mary as his wife, and accepts responsibility."],


    // Matthew Chapter 2
    "Matthew 2:1": ["Wise Men Visit Jesus", "Magi from the East follow a star to worship Jesus, recognizing Him as King."],
    "Matthew 2:3": ["Herod’s Fear and Plot", "King Herod fears losing power and secretly plans to kill the child."],
    "Matthew 2:9": ["Star Leads to Jesus", "The star leads the wise men directly to Jesus’ house."],
    "Matthew 2:11": ["Worship and Gifts", "The wise men worship Jesus and offer gold, frankincense, and myrrh, recognizing His kingship, deity, and future sacrifice."],
    "Matthew 2:13": ["Escape to Egypt", "Joseph takes Mary and Jesus to Egypt to escape Herod’s plan."],
    "Matthew 2:16": ["Herod Kills Infants", "Herod orders the killing of boys in Bethlehem, showing his cruelty."],
    "Matthew 2:19": ["Return to Israel", "After Herod’s death, Joseph brings the family back."],
    "Matthew 2:23": ["Jesus Called a Nazarene", "Jesus grows up in Nazareth, fulfilling prophecy."],


    // Matthew Chapter 3
    "Matthew 3:1": ["John the Baptist’s Ministry", "John prepares people for Jesus by preaching repentance."],
    "Matthew 3:3": ["Fulfillment of Isaiah’s Prophecy", "John fulfills prophecy as the voice preparing the way."],
    "Matthew 3:7": ["Warning to Pharisees", "John warns religious leaders to truly repent."],
    "Matthew 3:11": ["Promise of Greater One", "John says Jesus will baptize with Holy Spirit and fire."],
    "Matthew 3:13": ["Baptism of Jesus", "Jesus is baptized to fulfill righteousness."],
    "Matthew 3:16": ["Holy Spirit Descends", "Spirit descends like a dove."],
    "Matthew 3:17": ["God’s Voice from Heaven", "God declares Jesus as His beloved Son."],


    // Matthew Chapter 4
    "Matthew 4:1": ["Temptation of Jesus", "Jesus fasts and resists Satan’s temptations using Scripture."],
    "Matthew 4:12": ["Jesus Begins Ministry", "Jesus starts preaching repentance."],
    "Matthew 4:17": ["Message of the Kingdom", "Jesus proclaims that the kingdom of heaven is near."],
    "Matthew 4:18": ["Calling First Disciples", "Jesus calls fishermen to follow Him."],
    "Matthew 4:23": ["Teaching and Healing", "Jesus teaches, heals diseases, and demonstrates divine authority."],


    // Matthew Chapter 5
    "Matthew 5:1": ["Sermon on the Mount Begins", "Jesus teaches foundational principles of kingdom life."],
    "Matthew 5:3": ["Beatitudes — Blessed Are the Poor in Spirit", "Those humble before God receive His kingdom."],
    "Matthew 5:13": ["Salt of the Earth", "Believers preserve truth and righteousness."],
    "Matthew 5:14": ["Light of the World", "Believers must shine God’s truth."],
    "Matthew 5:17": ["Jesus Fulfills the Law", "Jesus fulfills and completes the law."],
    "Matthew 5:21": ["Anger and Judgment", "Anger leads to spiritual danger."],
    "Matthew 5:27": ["Adultery of the Heart", "Sin begins in the heart."],
    "Matthew 5:38": ["Love Your Enemies", "Believers must show radical love."],


    // Matthew Chapter 6
    "Matthew 6:1": ["Giving to Please God", "Do good deeds for God, not people."],
    "Matthew 6:5": ["Teaching on Prayer", "Pray sincerely."],
    "Matthew 6:9": ["The Lord’s Prayer", "Jesus provides model prayer."],
    "Matthew 6:16": ["Teaching on Fasting", "Fast sincerely."],
    "Matthew 6:19": ["Treasures in Heaven", "Store eternal treasures."],
    "Matthew 6:24": ["Cannot Serve Two Masters", "Choose God over wealth."],
    "Matthew 6:25": ["Do Not Worry", "Trust God’s provision."],
    "Matthew 6:33": ["Seek First God’s Kingdom", "Prioritize God."],


    // Matthew Chapter 7
    "Matthew 7:1": ["Do Not Judge Hypocritically", "Judge yourself first."],
    "Matthew 7:7": ["Ask, Seek, Knock", "God answers prayer."],
    "Matthew 7:13": ["Narrow and Wide Gates", "Few choose the path to life."],
    "Matthew 7:15": ["False Prophets Warning", "Recognize false teachers."],
    "Matthew 7:21": ["True Obedience Required", "True believers obey God."],
    "Matthew 7:24": ["Wise and Foolish Builders", "Obedience builds strong faith."],


    // Matthew Chapter 8
    "Matthew 8:1": ["Healing of the Leper", "Jesus heals and shows compassion."],
    "Matthew 8:5": ["Faith of the Centurion", "Jesus praises faith."],
    "Matthew 8:14": ["Healing Many", "Jesus heals diseases."],
    "Matthew 8:23": ["Jesus Calms Storm", "Jesus controls nature."],
    "Matthew 8:28": ["Healing Demon-Possessed Men", "Jesus defeats demons."],


    // Matthew Chapter 9
    "Matthew 9:1": ["Healing the Paralytic", "Jesus forgives sins and heals."],
    "Matthew 9:9": ["Calling of Matthew", "Matthew follows Jesus."],
    "Matthew 9:18": ["Raising Girl and Healing Woman", "Jesus shows power over sickness and death."],
    "Matthew 9:27": ["Healing Blind Men", "Jesus restores sight."],
    "Matthew 9:35": ["Compassion for the Crowds", "Jesus sees spiritual need."],
    "Matthew 9:37": ["Harvest Is Plentiful", "Workers needed for God’s mission."],


    // Matthew Chapter 10
    "Matthew 10:1": ["Jesus Sends Twelve Disciples", "Jesus gives authority to disciples."],
    "Matthew 10:5": ["Instructions for Ministry", "Disciples sent to preach."],
    "Matthew 10:16": ["Warning of Persecution", "Followers will face opposition."],
    "Matthew 10:26": ["Fear God, Not People", "Trust God."],
    "Matthew 10:32": ["Confess Christ Publicly", "Faith must be declared."],
    "Matthew 10:38": ["Cost of Discipleship", "Follow Jesus fully."],
    "Matthew 10:40": ["Reward for Receiving Disciples", "Serving God’s people brings reward."],

    // Matthew Chapter 11
    "Matthew 11:1": ["Jesus Answers John’s Question", "John the Baptist, while in prison, sends disciples to ask if Jesus is truly the Messiah. Jesus responds by pointing to His miracles and teachings, showing that He fulfills the prophecies about the Savior."],
    "Matthew 11:7": ["Jesus’ Testimony About John", "Jesus honors John as the greatest prophet and the messenger sent to prepare the way for Him."],
    "Matthew 11:16": ["This Generation’s Unbelief", "Jesus compares the people to children who refuse to respond properly, showing their spiritual stubbornness and unbelief."],
    "Matthew 11:20": ["Woes on Unrepentant Cities", "Jesus rebukes cities that witnessed His miracles but refused to repent, warning of coming judgment."],
    "Matthew 11:25": ["Jesus Reveals the Father", "Jesus thanks God for revealing truth to the humble rather than the proud."],
    "Matthew 11:28": ["Come to Me — My Yoke Is Easy", "Jesus invites the weary and burdened to come to Him for rest, promising peace and relief through His gentle leadership."],


    // Matthew Chapter 12
    "Matthew 12:1": ["Lord of the Sabbath", "Jesus explains that He has authority over the Sabbath and prioritizes mercy over ritual."],
    "Matthew 12:9": ["Healing the Withered Hand", "Jesus heals a man on the Sabbath, showing compassion and divine authority."],
    "Matthew 12:15": ["Gentleness of God’s Servant", "Jesus fulfills prophecy as the gentle servant who brings justice without violence."],
    "Matthew 12:22": ["Blasphemy Against the Spirit", "Jesus warns that rejecting the Holy Spirit’s work is a serious spiritual danger."],
    "Matthew 12:33": ["Tree and Its Fruit", "Jesus teaches that actions reveal the condition of the heart."],
    "Matthew 12:38": ["The Sign of Jonah", "Jesus explains that His resurrection will be the ultimate sign."],
    "Matthew 12:43": ["Return of an Unclean Spirit", "Jesus warns that spiritual emptiness without true transformation leads to worse condition."],
    "Matthew 12:46": ["Jesus’ True Family", "Jesus teaches that those who obey God are His true family."],


    // Matthew Chapter 13
    "Matthew 13:1": ["Parable of the Sower", "Jesus explains how people respond differently to God’s word."],
    "Matthew 13:10": ["Purpose of Parables", "Parables reveal truth to believers and conceal it from unbelievers."],
    "Matthew 13:18": ["Explanation of the Sower", "Jesus explains the spiritual meaning of different soils."],
    "Matthew 13:24": ["Parable of the Tares", "Good and evil coexist until final judgment."],
    "Matthew 13:31": ["Mustard Seed & Leaven", "God’s kingdom starts small but grows greatly."],
    "Matthew 13:34": ["Prophecy About Parables", "Jesus fulfills prophecy by teaching in parables."],
    "Matthew 13:36": ["Explanation of the Tares", "Jesus explains separation of righteous and wicked."],
    "Matthew 13:44": ["Hidden Treasure", "God’s kingdom is worth everything."],
    "Matthew 13:45": ["Pearl of Great Price", "Kingdom value surpasses all possessions."],
    "Matthew 13:47": ["Parable of the Net", "Final judgment separates righteous and wicked."],
    "Matthew 13:51": ["Scribes Trained for the Kingdom", "True teachers understand both old and new truths."],
    "Matthew 13:53": ["Rejection at Nazareth", "People reject Jesus due to familiarity."],


    // Matthew Chapter 14
    "Matthew 14:1": ["Death of John the Baptist", "John is executed because of Herod’s pride and corruption."],
    "Matthew 14:13": ["Feeding the Five Thousand", "Jesus miraculously feeds a large crowd, showing divine provision."],
    "Matthew 14:22": ["Jesus Walks on Water", "Jesus demonstrates authority over nature and strengthens disciples’ faith."],
    "Matthew 14:34": ["Healings at Gennesaret", "Many are healed by faith in Jesus."],


    // Matthew Chapter 15
    "Matthew 15:1": ["Tradition vs God’s Commandments", "Jesus rebukes religious leaders for valuing traditions over God’s truth."],
    "Matthew 15:10": ["What Defiles a Person", "Jesus explains that sin comes from the heart, not external things."],
    "Matthew 15:21": ["Faith of the Canaanite Woman", "Jesus honors the faith of a Gentile woman and heals her daughter."],
    "Matthew 15:29": ["Healing Many", "Jesus heals many people, showing compassion."],
    "Matthew 15:32": ["Feeding the Four Thousand", "Jesus again provides miraculously for people."],


    // Matthew Chapter 16
    "Matthew 16:1": ["Demand for a Sign", "Religious leaders demand proof but refuse to believe."],
    "Matthew 16:5": ["Leaven of the Pharisees", "Jesus warns against false teachings."],
    "Matthew 16:13": ["Peter’s Confession", "Peter declares Jesus as Messiah and Son of God."],
    "Matthew 16:21": ["Jesus Predicts His Death", "Jesus foretells His suffering and resurrection."],
    "Matthew 16:24": ["Take Up Your Cross", "True disciples must deny themselves."],


    // Matthew Chapter 17
    "Matthew 17:1": ["The Transfiguration", "Jesus reveals His divine glory to selected disciples."],
    "Matthew 17:14": ["Healing the Demon-Possessed Boy", "Jesus heals and shows power over evil."],
    "Matthew 17:22": ["Second Prediction of His Death", "Jesus again prepares disciples."],
    "Matthew 17:24": ["The Temple Tax", "Jesus shows His authority and humility."],


    // Matthew Chapter 18
    "Matthew 18:1": ["Greatest in the Kingdom", "Humility is greatest in God’s kingdom."],
    "Matthew 18:6": ["Woes Against Stumbling", "Jesus warns against causing others to sin."],
    "Matthew 18:10": ["The Lost Sheep", "God values every person."],
    "Matthew 18:15": ["Correcting a Brother", "Jesus teaches conflict resolution."],
    "Matthew 18:21": ["Parable of the Unforgiving Servant", "God expects forgiveness."],


    // Matthew Chapter 19
    "Matthew 19:1": ["Teaching on Marriage and Divorce", "Jesus explains God’s design for marriage."],
    "Matthew 19:13": ["Jesus Blesses Children", "Children represent kingdom humility."],
    "Matthew 19:16": ["The Rich Young Ruler", "Wealth can hinder spiritual commitment."],
    "Matthew 19:23": ["The Difficulty of Riches", "Salvation comes through God."],


    // Matthew Chapter 20
    "Matthew 20:1": ["Workers in the Vineyard", "God rewards based on grace."],
    "Matthew 20:17": ["Prediction of His Death", "Jesus foretells crucifixion."],
    "Matthew 20:20": ["Request of James and John’s Mother", "True greatness is service."],
    "Matthew 20:29": ["Two Blind Men Healed", "Faith brings healing."],


    // Matthew Chapter 21
    "Matthew 21:1": ["Triumphal Entry", "Jesus enters Jerusalem as King."],
    "Matthew 21:12": ["Cleansing the Temple", "Jesus restores temple holiness."],
    "Matthew 21:18": ["Cursing the Fig Tree", "Symbol of judgment."],
    "Matthew 21:23": ["Jesus’ Authority Questioned", "Leaders challenge Jesus."],
    "Matthew 21:28": ["Parable of the Two Sons", "Obedience matters."],
    "Matthew 21:33": ["Parable of the Tenants", "Warning against rejecting God."],

    // Matthew Chapter 22
    "Matthew 22:1": "Parable of the Wedding Feast",
    "Matthew 22:15": "Taxes to Caesar",
    "Matthew 22:23": "Question About Resurrection",
    "Matthew 22:34": "Greatest Commandments",
    "Matthew 22:41": "Jesus Questions the Pharisees",

    // Matthew Chapter 23
    "Matthew 23:1": "Warning Against the Scribes and Pharisees",
    "Matthew 23:4": "Heavy Burdens They Lay on People",
    "Matthew 23:5": "Their Love for Recognition",
    "Matthew 23:8": "True Greatness Is Humility",
    "Matthew 23:13": "Woes: Misleading Converts",
    "Matthew 23:16": "Woe: Blind Guides",
    "Matthew 23:23": "Woe: Neglecting Justice, Mercy, Faith",
    "Matthew 23:25": "Woe: Cleaning Outside but Not Inside",
    "Matthew 23:27": "Woe: Whitewashed Tombs",
    "Matthew 23:29": "Woe: Sons of Murderers of Prophets",
    "Matthew 23:33": "Judgment for the Righteous Blood",
    "Matthew 23:37": "Jesus' Lament Over Jerusalem",

    // Matthew Chapter 24
    "Matthew 24:1": "Prediction of the Temple's Destruction",
    "Matthew 24:3": "Signs of the End",
    "Matthew 24:15": "The Great Tribulation",
    "Matthew 24:29": "The Coming of the Son of Man",
    "Matthew 24:32": "Parable of the Fig Tree",
    "Matthew 24:36": "Stay Alert — No One Knows the Hour",

    // Matthew Chapter 25
    "Matthew 25:1": "Parable of the Ten Virgins",
    "Matthew 25:14": "Parable of the Talents",
    "Matthew 25:31": "The Final Judgment (Sheep & Goats)",

    // Matthew Chapter 26
    "Matthew 26:1": "Plot to Kill Jesus",
    "Matthew 26:6": "Anointing at Bethany",
    "Matthew 26:14": "Judas Agrees to Betray",
    "Matthew 26:17": "The Last Supper Begins",
    "Matthew 26:26": "Institution of the Lord's Supper",
    "Matthew 26:31": "Prediction of Peter's Denial",
    "Matthew 26:36": "Gethsemane Prayer",
    "Matthew 26:47": "Arrest of Jesus",
    "Matthew 26:57": "Jesus Before the Sanhedrin",
    "Matthew 26:69": "Peter Denies Jesus",

    // Matthew Chapter 27
    "Matthew 27:1": "Jesus Sent to Pilate – Judas' Remorse",
    "Matthew 27:11": "Jesus Before Pilate",
    "Matthew 27:27": "Mocked by Soldiers",
    "Matthew 27:32": "Crucifixion",
    "Matthew 27:45": "Death of Jesus",
    "Matthew 27:57": "Burial of Jesus",
    "Matthew 27:62": "Tomb Secured",

    // Matthew Chapter 28
    "Matthew 28:1": "The Resurrection",
    "Matthew 28:11": "Guards Spread False Report",
    "Matthew 28:16": "The Great Commission",

    // Mark Chapter 1
    "Mark 1:1": ["John the Baptist Prepares the Way", "John preaches repentance and baptizes in the Jordan; he points to Jesus."],
    "Mark 1:9": ["Baptism of Jesus", "Jesus is baptized; the Spirit descends and the Father speaks from heaven."],
    "Mark 1:12": ["Jesus Tempted in the Wilderness", "Jesus is tested by Satan; angels minister to Him."],
    "Mark 1:14": ["Jesus Begins His Ministry in Galilee", "The kingdom of God is near; repent and believe."],
    "Mark 1:16": ["Jesus Calls the First Disciples", "Simon, Andrew, James, and John leave their nets to follow Him."],
    "Mark 1:21": ["Jesus Teaches and Casts Out a Demon", "People are amazed at His authority."],
    "Mark 1:29": ["Jesus Heals Peter’s Mother-in-Law", "She is healed and begins to serve them."],
    "Mark 1:32": ["Many Are Healed and Delivered", "Jesus heals the sick and drives out demons."],
    "Mark 1:35": ["Jesus Prays in a Solitary Place", "He rises early to spend time with God."],
    "Mark 1:36": ["Jesus Continues His Preaching", "He travels through Galilee proclaiming the message."],
    "Mark 1:40": ["Jesus Cleanses a Leper", "Jesus heals him but tells him to show himself to the priest."],

    // Mark Chapter 2
    "Mark 2:1": ["Jesus Heals a Paralyzed Man", "Friends lower him through the roof; Jesus forgives his sins and heals him."],
    "Mark 2:13": ["Jesus Calls Levi (Matthew)", "Jesus says, Follow me, and Levi obeys."],
    "Mark 2:15": ["Jesus Eats with Sinners", "Jesus says He came to call sinners, not the righteous."],
    "Mark 2:18": ["Question About Fasting", "Jesus explains new wine needs new wineskins."],
    "Mark 2:23": ["Lord of the Sabbath", "Jesus and His disciples pluck grain; Jesus declares He is Lord of the Sabbath."],

    // Mark Chapter 3
    "Mark 3:1": ["Jesus Heals on the Sabbath", "Jesus heals a man with a withered hand; the Pharisees plot against Him."],
    "Mark 3:7": ["Great Crowds Follow Jesus", "Many come to Him; He heals and silences unclean spirits."],
    "Mark 3:13": ["Jesus Chooses the Twelve Apostles", "He appoints twelve to be with Him and to be sent out."],
    "Mark 3:20": ["Jesus’ Family Is Concerned", "They think He is out of His mind."],
    "Mark 3:22": ["Accusation of the Teachers of the Law", "They say Jesus drives out demons by Satan; Jesus explains this is impossible."],
    "Mark 3:31": ["Jesus’ True Family", "Whoever does God’s will is His brother, sister, and mother."],

    // Mark Chapter 4
    "Mark 4:1": ["Parable of the Sower", "A farmer scatters seed on different kinds of soil."],
    "Mark 4:10": ["Why Jesus Speaks in Parables", "He explains that some hear but do not understand."],
    "Mark 4:13": ["Jesus Explains the Parable", "The seed is God’s word; the soils are different hearts."],
    "Mark 4:21": ["A Lamp on a Stand", "What is hidden will be revealed; listen carefully."],
    "Mark 4:26": ["Parable of the Growing Seed", "God makes His kingdom grow in His own way."],
    "Mark 4:30": ["Parable of the Mustard Seed", "The kingdom starts small but becomes great."],
    "Mark 4:33": ["Jesus Teaches with Many Parables", "He explains privately to His disciples."],
    "Mark 4:35": ["Jesus Calms the Storm", "He rebukes the wind and sea; the disciples are amazed."],

    // Mark Chapter 5
    "Mark 5:1": ["Jesus Heals the Demon-Possessed Man", "Legion of demons is cast into a herd of pigs."],
    "Mark 5:14": ["People Are Afraid and Ask Jesus to Leave", "They are astonished and disturbed by what happened."],
    "Mark 5:18": ["The Healed Man Sent as a Witness", "Jesus tells him to testify about God’s mercy."],
    "Mark 5:21": ["Jairus Pleads for His Daughter", "Jesus goes with him to heal her."],
    "Mark 5:25": ["The Woman with the Issue of Blood", "She touches Jesus’ garment and is healed."],
    "Mark 5:35": ["Jesus Raises Jairus’ Daughter", "Jesus says, Talitha koum — Little girl, arise."],

    // Mark Chapter 6
    "Mark 6:1": ["Jesus Rejected at Nazareth", "His own people doubt Him; Jesus is amazed at their unbelief."],
    "Mark 6:7": ["Jesus Sends Out the Twelve", "He gives them authority over unclean spirits and sends them to preach repentance."],
    "Mark 6:14": ["Herod Hears About Jesus", "Herod thinks John the Baptist has risen from the dead."],
    "Mark 6:17": ["Death of John the Baptist", "Herod imprisons and later beheads John because of Herodias."],
    "Mark 6:30": ["The Apostles Report to Jesus", "They rest with Him in a quiet place."],
    "Mark 6:33": ["Jesus Feeds the Five Thousand", "Five loaves and two fish multiply to feed the crowd."],
    "Mark 6:45": ["Jesus Walks on the Water", "He comes to the disciples in the storm; they are amazed."],
    "Mark 6:53": ["Many Are Healed in Gennesaret", "People bring the sick to Jesus, and many are healed."],

    // Mark Chapter 7
    "Mark 7:1": ["Question About Traditions", "Pharisees criticize the disciples for eating with unwashed hands."],
    "Mark 7:6": ["Jesus Rebukes Human Traditions", "Jesus says they honor God with lips but not with hearts."],
    "Mark 7:14": ["What Truly Defiles a Person", "It is not what goes in, but what comes out of the heart."],
    "Mark 7:17": ["Jesus Explains the Teaching", "Evil thoughts and actions come from within."],
    "Mark 7:24": ["The Faith of a Gentile Woman", "Jesus heals her daughter because of her faith."],
    "Mark 7:31": ["Jesus Heals a Deaf and Mute Man", "He touches him and says, Be opened."],
    "Mark 7:36": ["People Are Amazed", "They proclaim that Jesus does everything well."],

    // Mark Chapter 8
    "Mark 8:1": ["Jesus Feeds the Four Thousand", "Seven loaves multiply; the crowd eats and is satisfied."],
    "Mark 8:11": ["Pharisees Ask for a Sign", "Jesus refuses to give them a miraculous sign from heaven."],
    "Mark 8:14": ["Warning About the Leaven", "Jesus cautions His disciples about the yeast of the Pharisees and Herod."],
    "Mark 8:22": ["Jesus Heals a Blind Man at Bethsaida", "Healing occurs in stages; the man sees clearly."],
    "Mark 8:27": ["Peter Confesses Jesus as the Christ", "You are the Messiah, but Jesus tells them to keep it quiet."],
    "Mark 8:31": ["Jesus Predicts His Death and Resurrection", "Peter rebukes Jesus; Jesus rebukes Peter in return."],
    "Mark 8:34": ["The Cost of Discipleship", "Take up your cross and follow Jesus; do not be ashamed of Him."],

    // Mark Chapter 9
    "Mark 9:1": ["Promise of God’s Kingdom", "Some will see God’s power before they die."],
    "Mark 9:2": ["The Transfiguration of Jesus", "Jesus is glorified; Moses and Elijah appear; God speaks from the cloud."],
    "Mark 9:9": ["Coming of Elijah Explained", "Jesus says Elijah has already come in John the Baptist."],
    "Mark 9:14": ["Jesus Heals a Demon-Possessed Boy", "The disciples fail; Jesus rebukes the spirit and teaches about prayer."],
    "Mark 9:30": ["Jesus Again Predicts His Death", "He tells the disciples He will be killed and rise again."],
    "Mark 9:33": ["Who Is the Greatest?", "Jesus teaches that true greatness is serving others."],
    "Mark 9:38": ["Whoever Is Not Against Us Is for Us", "Jesus speaks about helping in His name."],
    "Mark 9:42": ["Warning Against Causing Sin", "Serious teaching about avoiding stumbling blocks."],
    "Mark 9:49": ["Salt and Peace", "Be like salt and live in peace with one another."],

    // Mark Chapter 10
    "Mark 10:1": ["Teaching on Divorce", "Jesus teaches God’s original plan for marriage."],
    "Mark 10:13": ["Jesus Blesses Little Children", "The kingdom of God belongs to such as these."],
    "Mark 10:17": ["The Rich Young Ruler", "Jesus invites him to follow, but he goes away sad."],
    "Mark 10:23": ["Danger of Riches", "With God all things are possible."],
    "Mark 10:28": ["Reward of Following Jesus", "God will bless those who leave everything for Him."],
    "Mark 10:32": ["Jesus Predicts His Death Again", "He speaks plainly about His suffering and resurrection."],
    "Mark 10:35": ["Request of James and John", "They ask for places of honor in His glory."],
    "Mark 10:41": ["True Greatness Is Service", "The Son of Man came to serve."],
    "Mark 10:46": ["Jesus Heals Blind Bartimaeus", "He cries out, receives sight, and follows Jesus."],

    // Mark Chapter 11
    "Mark 11:1": ["Triumphal Entry into Jerusalem", "Jesus enters on a donkey; the crowds shout Hosanna."],
    "Mark 11:11": ["Jesus Looks Around the Temple", "He goes to Bethany because it is late."],
    "Mark 11:12": ["Jesus Curses the Fig Tree", "It has no fruit."],
    "Mark 11:15": ["Jesus Cleanses the Temple", "He drives out those buying and selling."],
    "Mark 11:20": ["Lesson from the Withered Fig Tree", "Teaching on faith, prayer, and forgiveness."],
    "Mark 11:27": ["Question About Jesus’ Authority", "Religious leaders challenge Him; Jesus questions them in return."],

    // Mark Chapter 12
    "Mark 12:1": ["Parable of the Wicked Tenants", "Jesus speaks of tenants who reject and kill the owner’s son."],
    "Mark 12:13": ["Question About Paying Taxes", "Give to Caesar what is Caesar’s, and to God what is God’s."],
    "Mark 12:18": ["Question About the Resurrection", "Jesus explains God is God of the living, not the dead."],
    "Mark 12:28": ["The Greatest Commandment", "Love God with all your heart and love your neighbor as yourself."],
    "Mark 12:35": ["Whose Son Is the Messiah?", "Jesus teaches about David and the Christ."],
    "Mark 12:38": ["Warning Against the Teachers of the Law", "They seek honor but exploit the vulnerable."],
    "Mark 12:41": ["The Widow’s Offering", "Jesus praises her for giving all she had."],

    // Mark Chapter 13
    "Mark 13:1": ["Jesus Predicts the Temple’s Destruction", "Not one stone will be left upon another."],
    "Mark 13:3": ["Disciples Ask About the End", "They ask when these things will happen."],
    "Mark 13:5": ["Beginning of Birth Pains", "False messiahs, wars, earthquakes, and famines."],
    "Mark 13:9": ["Persecution of Believers", "They will be betrayed, but the Holy Spirit will help them speak."],
    "Mark 13:14": ["The Great Tribulation", "Abomination of desolation; warning against false christs."],
    "Mark 13:24": ["Coming of the Son of Man", "Jesus will return with great power and glory."],
    "Mark 13:28": ["Lesson from the Fig Tree", "This generation will see these things fulfilled."],
    "Mark 13:32": ["No One Knows the Day or Hour", "Be watchful and ready; do not sleep spiritually."],

    // Mark Chapter 14
    "Mark 14:1": ["Plot to Kill Jesus", "Chief priests and teachers look for a way to arrest Him quietly."],
    "Mark 14:3": ["Woman Anoints Jesus at Bethany", "She pours costly perfume on Him; Jesus praises her act."],
    "Mark 14:10": ["Judas Agrees to Betray Jesus", "He promises to hand Jesus over for money."],
    "Mark 14:12": ["Preparation for the Passover", "Disciples prepare the meal as Jesus instructed."],
    "Mark 14:17": ["Jesus Predicts His Betrayal", "He says one of the Twelve will betray Him."],
    "Mark 14:22": ["The Lord’s Supper", "Jesus gives bread and wine as His body and blood."],
    "Mark 14:26": ["Jesus Predicts Peter’s Denial", "Peter insists he will not deny Him."],
    "Mark 14:32": ["Jesus Prays in Gethsemane", "He submits to the Father’s will; disciples fall asleep."],
    "Mark 14:43": ["Jesus Arrested", "Judas betrays Him with a kiss."],
    "Mark 14:51": ["A Young Man Flees", "He runs away leaving his garment."],
    "Mark 14:53": ["Jesus Before the High Priest", "False witnesses accuse Him; Jesus declares He is the Messiah."],
    "Mark 14:66": ["Peter Denies Jesus", "Peter denies Him three times; then remembers Jesus’ words."],

    // Mark Chapter 15
    "Mark 15:1": ["Jesus Before Pilate", "Jesus is questioned; He gives no answer."],
    "Mark 15:6": ["Jesus Sentenced to Death", "Barabbas is released; Jesus is handed over to be crucified."],
    "Mark 15:16": ["Soldiers Mock Jesus", "They dress Him in purple, crown Him with thorns, and beat Him."],
    "Mark 15:21": ["Simon of Cyrene Carries the Cross", "He is forced to help Jesus."],
    "Mark 15:22": ["Jesus Is Crucified", "They mock Him; two criminals are crucified with Him."],
    "Mark 15:33": ["Death of Jesus", "Darkness covers the land; Jesus cries out and dies; the centurion confesses Him."],
    "Mark 15:40": ["Women Watch from a Distance", "Mary Magdalene and others observe what happens."],
    "Mark 15:42": ["Burial of Jesus", "Joseph of Arimathea places Jesus in a tomb; women see where He is laid."],

    // Mark Chapter 16
    "Mark 16:1": ["Women Go to the Tomb", "They come with spices but find the stone rolled away."],
    "Mark 16:5": ["Angel Announces the Resurrection", "Jesus is not here; He has risen; they are told to inform the disciples."],
    "Mark 16:8": ["Women’s Fear and Silence", "They flee from the tomb, trembling and amazed."],
    "Mark 16:9": ["Jesus Appears to Mary Magdalene", "She tells the disciples, but they do not believe."],
    "Mark 16:12": ["Jesus Appears to Two Disciples on the Road", "They report to others, but are not believed."],
    "Mark 16:14": ["Jesus Rebukes the Disciples", "He corrects their unbelief and hardness of heart."],
    "Mark 16:15": ["The Great Commission", "Jesus sends them to preach the gospel to all creation."],
    "Mark 16:19": ["Jesus Ascends to Heaven", "He is taken up and sits at the right hand of God."],
    "Mark 16:20": ["Disciples Preach Everywhere", "The Lord works with them and confirms the message with signs."],

    // John Chapter 1
    "John 1:1": ["The Word Was God", "Jesus, the Word, existed in the beginning and is God."],
    "John 1:4": ["Life and Light of Humanity", "Jesus is the source of life and light."],
    "John 1:6": ["John the Baptist’s Witness", "John testifies about the coming Messiah."],
    "John 1:10": ["The World Did Not Recognize Him", "Jesus came but many did not recognize Him."],
    "John 1:12": ["Children of God Through Faith", "Those who believe become God’s children."],
    "John 1:14": ["The Word Became Flesh", "Jesus became human and lived among people."],
    "John 1:19": ["John the Baptist Denies Being the Messiah", "John identifies himself as the messenger."],
    "John 1:29": ["Behold the Lamb of God", "John declares Jesus as the Lamb who takes away sin."],
    "John 1:35": ["First Disciples Follow Jesus", "Andrew and another disciple follow Jesus."],
    "John 1:43": ["Jesus Calls Philip and Nathanael", "Jesus calls more disciples."],
    "John 1:49": ["Jesus Revealed as Son of God", "Nathanael recognizes Jesus as Son of God."],


    // John Chapter 2
    "John 2:1": ["Wedding at Cana", "Jesus performs His first miracle turning water into wine."],
    "John 2:11": ["First Sign Reveals His Glory", "Jesus reveals His glory and disciples believe."],
    "John 2:13": ["Jesus Cleanses the Temple", "Jesus removes those misusing the temple."],
    "John 2:18": ["Authority of Jesus Questioned", "Leaders question Jesus’ authority."],
    "John 2:19": ["Temple Refers to His Body", "Jesus speaks of His resurrection."],
    "John 2:23": ["Jesus Knows All People", "Jesus understands human hearts."],


    // John Chapter 3
    "John 3:1": ["Nicodemus Visits Jesus", "Nicodemus seeks understanding."],
    "John 3:3": ["Born Again to See God’s Kingdom", "Spiritual rebirth is required."],
    "John 3:5": ["Born of Water and Spirit", "Spiritual birth comes from Spirit."],
    "John 3:14": ["Son of Man Lifted Up", "Jesus refers to His crucifixion."],
    "John 3:16": ["God’s Love for the World", "God gave His Son for salvation."],
    "John 3:19": ["Light Came into the World", "People reject light due to sin."],
    "John 3:22": ["John the Baptist’s Final Testimony", "John confirms Jesus’ greatness."],
    "John 3:30": ["He Must Increase, I Must Decrease", "Jesus must become greater."],


    // John Chapter 4
    "John 4:1": ["Jesus and the Samaritan Woman", "Jesus speaks with Samaritan woman."],
    "John 4:10": ["Living Water Offered", "Jesus offers eternal life."],
    "John 4:19": ["True Worship Explained", "True worship is in Spirit and truth."],
    "John 4:25": ["Jesus Reveals Himself as Messiah", "Jesus confirms His identity."],
    "John 4:39": ["Many Samaritans Believe", "Many believe through testimony."],
    "John 4:46": ["Healing of Official’s Son", "Jesus heals from distance."],


    // John Chapter 5
    "John 5:1": ["Healing at Pool of Bethesda", "Jesus heals disabled man."],
    "John 5:16": ["Persecution for Healing on Sabbath", "Leaders oppose Jesus."],
    "John 5:19": ["Jesus Equal with God", "Jesus explains His authority."],
    "John 5:24": ["Promise of Eternal Life", "Believers receive eternal life."],
    "John 5:39": ["Scriptures Testify About Jesus", "Scriptures point to Jesus."],


    // John Chapter 6
    "John 6:1": ["Feeding the Five Thousand", "Jesus feeds large crowd."],
    "John 6:16": ["Jesus Walks on Water", "Jesus walks on sea."],
    "John 6:25": ["Jesus the Bread of Life", "Jesus is spiritual sustenance."],
    "John 6:35": ["Whoever Believes Will Never Hunger", "Faith satisfies spiritually."],
    "John 6:53": ["Eat Flesh and Drink Blood", "Symbolizes accepting Christ."],
    "John 6:66": ["Many Disciples Leave", "Some stop following Jesus."],
    "John 6:68": ["Peter Confesses Faith", "Peter affirms Jesus’ truth."],


    // John Chapter 7
    "John 7:1": ["Jesus at the Feast", "Jesus teaches publicly."],
    "John 7:16": ["Teaching Comes from God", "Jesus teaches God’s truth."],
    "John 7:37": ["Promise of Living Water", "Spirit given to believers."],
    "John 7:40": ["Division About Jesus", "People divided about Him."],


    // John Chapter 8
    "John 8:1": ["Woman Caught in Adultery", "Jesus shows mercy."],
    "John 8:12": ["Jesus the Light of the World", "Jesus brings spiritual light."],
    "John 8:31": ["Truth Sets You Free", "Truth brings freedom."],
    "John 8:34": ["Slavery to Sin", "Sin enslaves."],
    "John 8:51": ["Promise of Eternal Life", "Believers will never see death."],
    "John 8:58": ["Before Abraham, I Am", "Jesus declares His divinity."],


    // John Chapter 9
    "John 9:1": ["Healing of Blind Man", "Jesus heals blind man."],
    "John 9:13": ["Pharisees Investigate", "Leaders question miracle."],
    "John 9:25": ["Testimony of the Healed Man", "He confirms miracle."],
    "John 9:35": ["Spiritual Sight and Blindness", "Jesus reveals truth."],


    // John Chapter 10
    "John 10:1": ["The Good Shepherd", "Jesus cares for His sheep."],
    "John 10:7": ["Jesus the Door", "Jesus provides access to salvation."],
    "John 10:11": ["Good Shepherd Lays Down Life", "Jesus sacrifices Himself."],
    "John 10:27": ["Sheep Hear His Voice", "Believers follow Jesus."],
    "John 10:30": ["I and the Father Are One", "Jesus declares unity with God."],


    // John Chapter 11
    "John 11:1": ["Death of Lazarus", "Lazarus becomes ill and dies."],
    "John 11:21": ["Jesus Comforts Martha", "Jesus brings hope."],
    "John 11:25": ["Jesus the Resurrection and Life", "Jesus gives eternal life."],
    "John 11:35": ["Jesus Weeps", "Jesus shows compassion."],
    "John 11:43": ["Lazarus Raised from Dead", "Jesus raises Lazarus."],
    "John 11:53": ["Plot to Kill Jesus", "Leaders plan His death."],


    // John Chapter 12
    "John 12:1": ["Mary Anoints Jesus", "Mary honors Jesus."],
    "John 12:12": ["Triumphal Entry", "Jesus enters Jerusalem."],
    "John 12:23": ["Jesus Predicts Death", "Jesus explains purpose."],
    "John 12:44": ["Believe in Jesus", "Faith in Jesus is faith in God."],


    // John Chapter 13
    "John 13:1": ["Jesus Washes Disciples’ Feet", "Jesus demonstrates humility."],
    "John 13:12": ["Serve One Another", "Follow Jesus’ example."],
    "John 13:21": ["Prediction of Betrayal", "Judas will betray Jesus."],
    "John 13:34": ["New Commandment", "Love one another."],


    // John Chapter 14
    "John 14:1": ["Jesus Comforts Disciples", "Trust in Him."],
    "John 14:6": ["Jesus the Way, Truth, and Life", "Only through Jesus comes salvation."],
    "John 14:15": ["Promise of Holy Spirit", "Spirit will help believers."],
    "John 14:27": ["Peace Given by Jesus", "Jesus gives lasting peace."],


    // John Chapter 15
    "John 15:1": ["Jesus the True Vine", "Believers must remain in Him."],
    "John 15:5": ["Apart from Me You Can Do Nothing", "Depend on Jesus."],
    "John 15:9": ["Remain in His Love", "Stay in His love."],
    "John 15:18": ["World Hates Believers", "Believers may face hatred."],


    // John Chapter 16
    "John 16:1": ["Warning of Persecution", "Believers will suffer."],
    "John 16:7": ["Spirit Will Come", "Spirit will guide believers."],
    "John 16:20": ["Sorrow Will Turn to Joy", "Joy after suffering."],
    "John 16:33": ["Victory Over the World", "Jesus has overcome the world."],


    // John Chapter 17
    "John 17:1": ["Jesus Prays for Himself", "Jesus prays before crucifixion."],
    "John 17:6": ["Jesus Prays for Disciples", "Protection for disciples."],
    "John 17:20": ["Jesus Prays for All Believers", "Prayer for unity."],


    // John Chapter 18
    "John 18:1": ["Jesus Arrested", "Jesus arrested."],
    "John 18:12": ["Jesus Before High Priest", "Jesus questioned."],
    "John 18:28": ["Jesus Before Pilate", "Pilate questions Jesus."],


    // John Chapter 19
    "John 19:1": ["Jesus Sentenced", "Jesus sentenced to death."],
    "John 19:16": ["Crucifixion of Jesus", "Jesus crucified."],
    "John 19:30": ["Death of Jesus", "Jesus dies."],
    "John 19:38": ["Burial of Jesus", "Jesus buried."],


    // John Chapter 20
    "John 20:1": ["Empty Tomb", "Jesus resurrected."],
    "John 20:11": ["Jesus Appears to Mary", "Mary sees Jesus."],
    "John 20:19": ["Jesus Appears to Disciples", "Jesus appears alive."],
    "John 20:24": ["Jesus Appears to Thomas", "Thomas believes."],
    "John 20:31": ["Purpose of the Book", "Written to inspire faith."],


    // John Chapter 21
    "John 21:1": ["Jesus Appears by Sea", "Jesus appears again."],
    "John 21:15": ["Jesus Restores Peter", "Peter restored."],
    "John 21:24": ["Conclusion of John’s Gospel", "Testimony confirmed."],

    // Luke Chapter 1
    "Luke 1:1": ["Purpose of Luke’s Gospel", "Luke explains he carefully investigated everything and writes an orderly account so believers may know the certainty of the truth."],
    "Luke 1:5": ["Announcement of John the Baptist’s Birth", "Angel Gabriel appears to Zechariah and announces the birth of John, who will prepare people for the Lord."],
    "Luke 1:26": ["Announcement of Jesus’ Birth", "Gabriel appears to Mary and tells her she will give birth to Jesus, the Son of God, by the Holy Spirit."],
    "Luke 1:39": ["Mary Visits Elizabeth", "Mary visits Elizabeth, and Elizabeth confirms that Mary carries the promised Messiah."],
    "Luke 1:46": ["Mary’s Song (The Magnificat)", "Mary praises God for His mercy, power, and faithfulness in choosing her."],
    "Luke 1:57": ["Birth of John the Baptist", "John is born, and people recognize God’s hand in his life."],
    "Luke 1:67": ["Zechariah’s Prophecy (Benedictus)", "Zechariah praises God and prophesies that John will prepare the way for the Savior."],
    "Luke 1:80": ["John Grows and Becomes Strong", "John grows spiritually strong and prepares in the wilderness."],


    // Luke Chapter 2
    "Luke 2:1": ["Birth of Jesus", "Jesus is born in Bethlehem and laid in a manger because there was no room."],
    "Luke 2:8": ["Angels Announce to the Shepherds", "Angels announce the birth of the Savior to shepherds, bringing good news."],
    "Luke 2:21": ["Jesus Circumcised and Named", "Jesus is circumcised and officially given His name."],
    "Luke 2:22": ["Presentation at the Temple", "Mary and Joseph present Jesus at the temple according to the law."],
    "Luke 2:25": ["Simeon’s Prophecy", "Simeon recognizes Jesus as the salvation prepared by God."],
    "Luke 2:36": ["Anna the Prophetess", "Anna confirms Jesus as the Redeemer and praises God."],
    "Luke 2:39": ["Return to Nazareth", "Jesus’ family returns to Nazareth where He grows."],
    "Luke 2:41": ["Boy Jesus in the Temple", "At age twelve, Jesus amazes teachers with His understanding."],
    "Luke 2:51": ["Jesus Grows in Wisdom and Favor", "Jesus grows in wisdom, obedience, and favor with God and people."],


    // Luke Chapter 3
    "Luke 3:1": ["John the Baptist’s Ministry Begins", "John begins preaching repentance to prepare people for the Messiah."],
    "Luke 3:7": ["John’s Call to Repentance", "John warns people to produce fruit that shows repentance."],
    "Luke 3:15": ["People Wonder About the Messiah", "John clarifies that he is not the Messiah but prepares the way."],
    "Luke 3:19": ["John Imprisoned", "John rebukes Herod and is imprisoned."],
    "Luke 3:21": ["Baptism of Jesus", "Jesus is baptized, and the Holy Spirit descends upon Him."],
    "Luke 3:23": ["Genealogy of Jesus", "Jesus’ lineage is traced back to Adam, showing His human connection."],


    // Luke Chapter 4
    "Luke 4:1": ["Temptation of Jesus", "Jesus resists Satan’s temptations using Scripture."],
    "Luke 4:14": ["Jesus Begins His Galilean Ministry", "Jesus begins teaching with power."],
    "Luke 4:16": ["Rejected at Nazareth", "People reject Jesus in His hometown."],
    "Luke 4:31": ["Jesus Casts Out an Unclean Spirit", "Jesus shows authority over demons."],
    "Luke 4:38": ["Healings at Simon’s House", "Jesus heals Simon’s mother-in-law and others."],
    "Luke 4:42": ["Jesus Preaches in Synagogues", "Jesus continues preaching the good news."],


    // Luke Chapter 5
    "Luke 5:1": ["Calling of Peter, James, and John", "Jesus calls fishermen to follow Him."],
    "Luke 5:12": ["Healing a Leper", "Jesus heals a man with leprosy."],
    "Luke 5:17": ["Healing the Paralytic", "Jesus forgives sins and heals the paralyzed man."],
    "Luke 5:27": ["Calling of Levi and Teaching on Repentance", "Jesus calls Levi and eats with sinners."],
    "Luke 5:33": ["Question About Fasting", "Jesus explains His mission brings new spiritual reality."],


    // Luke Chapter 6
    "Luke 6:1": ["Lord of the Sabbath", "Jesus explains His authority over Sabbath."],
    "Luke 6:6": ["Healing the Withered Hand", "Jesus heals on Sabbath, showing mercy."],
    "Luke 6:12": ["Choosing of the Twelve Apostles", "Jesus appoints twelve apostles."],
    "Luke 6:17": ["Crowds Seek Jesus", "Large crowds come for healing and teaching."],
    "Luke 6:20": ["Beatitudes and Woes", "Jesus teaches blessings and warnings."],
    "Luke 6:27": ["Love Your Enemies", "Jesus commands love and mercy."],
    "Luke 6:37": ["Do Not Judge; Remove the Beam", "Examine yourself before judging others."],
    "Luke 6:43": ["Tree and Its Fruit", "Character is revealed by actions."],
    "Luke 6:46": ["Wise and Foolish Builders", "Obedience to Jesus brings strong foundation."],


    // Luke Chapter 7
    "Luke 7:1": ["Healing the Centurion’s Servant", "Jesus heals through faith."],
    "Luke 7:11": ["Raising the Widow’s Son", "Jesus raises the dead."],
    "Luke 7:18": ["John the Baptist’s Question", "Jesus confirms His identity."],
    "Luke 7:24": ["Jesus’ Testimony About John", "Jesus honors John’s role."],
    "Luke 7:36": ["A Sinful Woman Anoints Jesus", "Jesus forgives and shows grace."],


    // Luke Chapter 8
    "Luke 8:1": ["Women Who Followed and Supported Jesus", "Women faithfully support Jesus."],
    "Luke 8:4": ["Parable of the Sower", "Different responses to God’s word."],
    "Luke 8:9": ["Explanation of the Sower", "Jesus explains spiritual meaning."],
    "Luke 8:16": ["Lamp on a Stand", "Truth must be revealed."],
    "Luke 8:19": ["Jesus’ True Family", "Those who obey God are His family."],
    "Luke 8:22": ["Jesus Calms the Storm", "Jesus shows authority over nature."],
    "Luke 8:26": ["Healing the Demon-Possessed Man", "Jesus frees a man from demons."],
    "Luke 8:40": ["Healing the Woman & Raising Jairus’ Daughter", "Jesus heals and raises the dead."],


    // Luke Chapter 9
    "Luke 9:1": ["The Twelve Sent Out", "Jesus sends disciples to preach."],
    "Luke 9:7": ["Herod’s Perplexity", "Herod is confused about Jesus."],
    "Luke 9:10": ["Feeding the Five Thousand", "Jesus miraculously feeds many."],
    "Luke 9:18": ["Peter’s Confession of Christ", "Peter declares Jesus is Messiah."],
    "Luke 9:21": ["Jesus Predicts His Death", "Jesus foretells His suffering."],
    "Luke 9:23": ["Take Up Your Cross", "True disciples must follow sacrificially."],
    "Luke 9:28": ["The Transfiguration", "Jesus reveals His glory."],
    "Luke 9:37": ["Healing the Demon-Possessed Boy", "Jesus shows divine power."],
    "Luke 9:44": ["Second Prediction of His Death", "Jesus again predicts His death."],
    "Luke 9:46": ["Who Is Greatest?", "True greatness is humility."],
    "Luke 9:49": ["Whoever Is Not Against You Is for You", "God works beyond expectations."],
    "Luke 9:51": ["A Samaritan Village Rejects Jesus", "Jesus continues mission despite rejection."],
    "Luke 9:57": ["The Cost of Following Jesus", "Following Jesus requires full commitment."],


    // Luke Chapter 10
    "Luke 10:1": ["Sending of the Seventy-Two", "Jesus sends more disciples."],
    "Luke 10:13": ["Woes to the Unrepentant Towns", "Warning to unbelievers."],
    "Luke 10:17": ["Return of the Seventy-Two & Jesus’ Joy", "Disciples rejoice."],
    "Luke 10:25": ["Parable of the Good Samaritan", "Love your neighbor."],
    "Luke 10:38": ["Mary and Martha", "Prioritize spiritual things."],


    // Luke Chapter 11
    "Luke 11:1": ["The Lord’s Prayer", "Jesus teaches prayer."],
    "Luke 11:5": ["Ask, Seek, Knock", "God answers prayer."],
    "Luke 11:14": ["Divided Kingdom — Unclean Spirits", "Jesus rebukes accusations."],
    "Luke 11:27": ["True Blessedness", "Blessed are those who obey God."],
    "Luke 11:29": ["The Sign of Jonah", "Jesus foretells resurrection."],
    "Luke 11:33": ["Lamp of the Body", "Spiritual clarity important."],
    "Luke 11:37": ["Woes to the Pharisees", "Jesus rebukes hypocrisy."],
    "Luke 11:45": ["Woes to the Lawyers", "Warning against false teachers."],


    // Luke Chapter 12–24
    // (continuing same detailed format)

    "Luke 12:1": ["Beware of Hypocrisy and Fear God", "Jesus warns against hypocrisy and teaches to fear God above people."],
    "Luke 12:13": ["Parable of the Rich Fool", "Jesus warns against greed and trusting wealth instead of God."],
    "Luke 12:22": ["Do Not Be Anxious", "Jesus teaches to trust God for daily needs."],
    "Luke 12:35": ["Watchful Servants", "Believers must stay ready for the Lord’s return."],
    "Luke 12:49": ["Jesus Brings Division", "Following Jesus may bring opposition."],
    "Luke 12:54": ["Discern the Times", "People must recognize spiritual truth."],

    "Luke 13:1": ["Repent or Perish — Parable of the Barren Fig Tree", "Jesus calls people to repentance before judgment."],
    "Luke 13:10": ["Healing a Crippled Woman", "Jesus heals and shows compassion."],
    "Luke 13:18": ["Mustard Seed & Leaven", "God’s kingdom grows powerfully."],
    "Luke 13:22": ["The Narrow Door", "Only few truly follow God."],
    "Luke 13:31": ["Lament Over Jerusalem", "Jesus mourns over unbelief."],

    "Luke 14:1": ["Healing on the Sabbath", "Jesus heals and teaches mercy."],
    "Luke 14:7": ["Teaching on Humility & Hospitality", "Humility honored by God."],
    "Luke 14:15": ["Parable of the Great Banquet", "God invites all to His kingdom."],
    "Luke 14:25": ["Cost of Discipleship", "Following Jesus requires sacrifice."],
    "Luke 14:34": ["Salt Without Flavor", "Believers must remain faithful."],

    "Luke 15:1": ["Parable of the Lost Sheep", "God seeks lost sinners."],
    "Luke 15:8": ["Parable of the Lost Coin", "God rejoices when sinners repent."],
    "Luke 15:11": ["Parable of the Prodigal Son", "God forgives and restores."],

    "Luke 16:1": ["Parable of the Unjust Steward", "Use worldly resources wisely."],
    "Luke 16:14": ["Warnings to the Pharisees", "God sees true hearts."],
    "Luke 16:19": ["Rich Man and Lazarus", "Eternal consequences revealed."],

    "Luke 17:1": ["Forgiveness, Faith, and Duty", "Forgive and remain faithful."],
    "Luke 17:11": ["Healing of the Ten Lepers", "Gratitude honors God."],
    "Luke 17:20": ["The Coming of the Kingdom of God", "God’s kingdom comes spiritually."],

    "Luke 18:1": ["Parable of the Persistent Widow", "Keep praying faithfully."],
    "Luke 18:9": ["Parable of the Pharisee and the Tax Collector", "Humility brings righteousness."],
    "Luke 18:15": ["Jesus Blesses Little Children", "Childlike faith required."],
    "Luke 18:18": ["Rich Young Ruler", "Salvation requires surrender."],
    "Luke 18:31": ["Jesus Predicts His Death", "Jesus foretells crucifixion."],
    "Luke 18:35": ["Healing Blind Bartimaeus", "Faith brings healing."],

    "Luke 19:1": ["Zacchaeus", "Jesus saves Zacchaeus."],
    "Luke 19:11": ["Parable of the Ten Minas", "Faithfulness rewarded."],
    "Luke 19:28": ["Triumphal Entry", "Jesus enters Jerusalem as King."],
    "Luke 19:41": ["Jesus Weeps Over Jerusalem", "Jesus mourns unbelief."],
    "Luke 19:45": ["Cleansing the Temple", "Jesus restores true worship."],

    "Luke 20:1": ["Authority of Jesus Questioned", "Leaders challenge Jesus."],
    "Luke 20:9": ["Parable of the Wicked Tenants", "Warning of judgment."],
    "Luke 20:20": ["Taxes to Caesar", "Honor both God and authority."],
    "Luke 20:27": ["Question About the Resurrection", "Jesus teaches eternal life."],
    "Luke 20:41": ["David Calls the Messiah Lord", "Messiah greater than David."],
    "Luke 20:45": ["Warning About the Scribes", "Avoid religious pride."],

    "Luke 21:1": ["The Widow’s Offering", "God values sacrificial giving."],
    "Luke 21:5": ["Prediction of the Temple’s Destruction", "Temple will fall."],
    "Luke 21:10": ["Persecution and Endurance", "Believers will face trials."],
    "Luke 21:20": ["Destruction of Jerusalem", "Judgment foretold."],
    "Luke 21:25": ["The Coming of the Son of Man", "Jesus will return."],
    "Luke 21:29": ["Lesson of the Fig Tree", "Recognize signs."],
    "Luke 21:34": ["Be Watchful", "Stay spiritually alert."],

    "Luke 22:1": ["Plot to Kill Jesus — Judas Agrees to Betray", "Judas betrays Jesus."],
    "Luke 22:7": ["Preparation for Passover", "Passover prepared."],
    "Luke 22:14": ["The Last Supper", "Jesus institutes communion."],
    "Luke 22:24": ["Who Is the Greatest?", "Greatness through service."],
    "Luke 22:31": ["Prediction of Peter’s Denial", "Peter warned."],
    "Luke 22:35": ["Teaching About the Future", "Prepare spiritually."],
    "Luke 22:39": ["Gethsemane Prayer", "Jesus submits to God."],
    "Luke 22:47": ["Arrest of Jesus", "Jesus arrested."],
    "Luke 22:54": ["Peter Denies Jesus", "Peter denies Jesus."],
    "Luke 22:63": ["Jesus Mocked", "Jesus mocked."],
    "Luke 22:66": ["Jesus Before the Council", "Jesus judged."],

    "Luke 23:1": ["Jesus Before Pilate", "Pilate examines Jesus."],
    "Luke 23:6": ["Jesus Before Herod", "Herod questions Jesus."],
    "Luke 23:13": ["Pilate Hands Jesus Over", "Jesus sentenced."],
    "Luke 23:26": ["On the Way to the Cross", "Jesus carries cross."],
    "Luke 23:32": ["Crucifixion", "Jesus crucified."],
    "Luke 23:44": ["Death of Jesus", "Jesus dies."],
    "Luke 23:50": ["Burial of Jesus", "Jesus buried."],

    "Luke 24:1": ["The Empty Tomb — Resurrection", "Jesus rises from dead."],
    "Luke 24:13": ["The Road to Emmaus", "Jesus appears."],
    "Luke 24:36": ["Jesus Appears to His Disciples", "Jesus alive."],
    "Luke 24:44": ["Jesus Opens Their Understanding", "Scriptures fulfilled."],
    "Luke 24:50": ["The Ascension of Jesus", "Jesus ascends to heaven."],

    // Acts Chapter 1
    "Acts 1:1": ["Introduction to the Book of Acts", "Luke explains this continuation of Jesus’ work."],
    "Acts 1:3": ["Jesus Appears After Resurrection", "Jesus appears for forty days teaching about God’s kingdom."],
    "Acts 1:4": ["Promise of the Holy Spirit", "Jesus tells disciples to wait for the Holy Spirit."],
    "Acts 1:6": ["Promise of Power and Witness", "Disciples will receive power and be witnesses worldwide."],
    "Acts 1:9": ["Ascension of Jesus", "Jesus ascends into heaven."],
    "Acts 1:12": ["Disciples Pray Together", "Disciples gather in prayer."],
    "Acts 1:15": ["Matthias Chosen as Apostle", "Matthias replaces Judas."],

    // Acts Chapter 2
    "Acts 2:1": ["Coming of the Holy Spirit", "Holy Spirit fills believers at Pentecost."],
    "Acts 2:5": ["People Hear in Their Own Languages", "Crowds hear in native languages."],
    "Acts 2:14": ["Peter’s Sermon at Pentecost", "Peter explains Jesus as Messiah."],
    "Acts 2:37": ["Call to Repentance", "People told to repent and be baptized."],
    "Acts 2:41": ["Three Thousand Added", "Thousands believe and join church."],
    "Acts 2:42": ["Fellowship of Believers", "Early church shares fellowship and prayer."],

    // Acts Chapter 3
    "Acts 3:1": ["Healing of the Lame Man", "Peter heals a lame man."],
    "Acts 3:11": ["Peter’s Sermon in the Temple", "Peter preaches about Jesus."],
    "Acts 3:19": ["Call to Repent", "Repent and receive forgiveness."],

    // Acts Chapter 4
    "Acts 4:1": ["Peter and John Arrested", "Religious leaders arrest apostles."],
    "Acts 4:8": ["Peter Speaks Boldly", "Peter declares Jesus as Savior."],
    "Acts 4:12": ["Salvation Only Through Jesus", "No other name saves."],
    "Acts 4:23": ["Believers Pray for Boldness", "Church prays for courage."],
    "Acts 4:32": ["Believers Share Everything", "Church lives in unity."],

    // Acts Chapter 5
    "Acts 5:1": ["Ananias and Sapphira", "They lie and face judgment."],
    "Acts 5:12": ["Apostles Perform Miracles", "Many signs and wonders occur."],
    "Acts 5:17": ["Apostles Persecuted", "Leaders arrest apostles."],
    "Acts 5:29": ["Obey God Rather Than Men", "Peter declares obedience to God."],
    "Acts 5:41": ["Rejoicing in Suffering", "Apostles rejoice despite persecution."],

    // Acts Chapter 6
    "Acts 6:1": ["Seven Chosen to Serve", "Seven men appointed to help."],
    "Acts 6:8": ["Stephen’s Ministry", "Stephen performs miracles."],
    "Acts 6:12": ["Stephen Arrested", "Stephen falsely accused."],

    // Acts Chapter 7
    "Acts 7:1": ["Stephen’s Speech", "Stephen recounts Israel’s history."],
    "Acts 7:51": ["Accusation Against Leaders", "Stephen rebukes leaders."],
    "Acts 7:54": ["Stephen’s Martyrdom", "Stephen is stoned."],
    "Acts 7:55": ["Stephen Sees Jesus", "Stephen sees Jesus in heaven."],

    // Acts Chapter 8
    "Acts 8:1": ["Persecution Scatters Church", "Believers spread out."],
    "Acts 8:5": ["Philip in Samaria", "Philip preaches in Samaria."],
    "Acts 8:14": ["Holy Spirit Given to Samaritans", "Samaritans receive Spirit."],
    "Acts 8:26": ["Philip and Ethiopian Official", "Official believes and is baptized."],

    // Acts Chapter 9
    "Acts 9:1": ["Conversion of Saul", "Saul encounters Jesus."],
    "Acts 9:10": ["Ananias Sent to Saul", "Ananias restores Saul."],
    "Acts 9:20": ["Saul Preaches Christ", "Saul begins preaching."],
    "Acts 9:36": ["Peter Raises Tabitha", "Peter raises Tabitha."],

    // Acts Chapter 10
    "Acts 10:1": ["Cornelius’ Vision", "Cornelius receives angelic message."],
    "Acts 10:9": ["Peter’s Vision", "Peter sees vision from God."],
    "Acts 10:34": ["God Shows No Favoritism", "Salvation for all."],
    "Acts 10:44": ["Gentiles Receive Holy Spirit", "Spirit given to Gentiles."],

    // Acts Chapter 11
    "Acts 11:1": ["Peter Explains to Church", "Peter explains Gentile salvation."],
    "Acts 11:19": ["Church Spreads", "Church grows beyond Jerusalem."],
    "Acts 11:26": ["Believers Called Christians", "First called Christians in Antioch."],

    // Acts Chapter 12
    "Acts 12:1": ["Persecution by Herod", "James killed, Peter imprisoned."],
    "Acts 12:6": ["Peter Freed by Angel", "Angel frees Peter."],
    "Acts 12:20": ["Death of Herod", "Herod judged by God."],

    // Acts Chapter 13
    "Acts 13:1": ["Barnabas and Saul Sent", "Mission begins."],
    "Acts 13:6": ["Confrontation with Sorcerer", "Paul rebukes sorcerer."],
    "Acts 13:16": ["Paul’s Sermon", "Paul preaches Christ."],
    "Acts 13:48": ["Gentiles Believe", "Many Gentiles believe."],

    // Acts Chapter 14
    "Acts 14:1": ["Preaching in Iconium", "Many believe."],
    "Acts 14:8": ["Healing in Lystra", "Paul heals lame man."],
    "Acts 14:19": ["Paul Stoned", "Paul persecuted."],
    "Acts 14:21": ["Strengthening Churches", "Paul encourages believers."],

    // Acts Chapter 15
    "Acts 15:1": ["Council at Jerusalem", "Discuss Gentile salvation."],
    "Acts 15:6": ["Decision of Council", "Gentiles saved by grace."],
    "Acts 15:22": ["Letter to Gentile Believers", "Council sends letter."],
    "Acts 15:36": ["Paul and Barnabas Separate", "Mission partners separate."],

    // Acts Chapter 16
    "Acts 16:1": ["Timothy Joins Paul", "Timothy joins mission."],
    "Acts 16:6": ["Vision of Macedonia", "Paul called to Macedonia."],
    "Acts 16:14": ["Conversion of Lydia", "Lydia believes."],
    "Acts 16:25": ["Paul and Silas in Prison", "They worship in prison."],
    "Acts 16:31": ["Jailer Converted", "Jailer believes."],

    // Acts Chapter 17
    "Acts 17:1": ["Paul in Thessalonica", "Paul preaches."],
    "Acts 17:10": ["Paul in Berea", "Bereans examine Scripture."],
    "Acts 17:16": ["Paul in Athens", "Paul addresses philosophers."],
    "Acts 17:22": ["Sermon at Areopagus", "Paul explains true God."],

    // Acts Chapter 18
    "Acts 18:1": ["Paul in Corinth", "Paul ministers."],
    "Acts 18:9": ["God Encourages Paul", "God strengthens Paul."],
    "Acts 18:24": ["Apollos’ Ministry", "Apollos teaches."],

    // Acts Chapter 19
    "Acts 19:1": ["Paul in Ephesus", "Disciples receive Spirit."],
    "Acts 19:11": ["Miracles in Ephesus", "God works miracles."],
    "Acts 19:23": ["Riot in Ephesus", "Opposition arises."],

    // Acts Chapter 20
    "Acts 20:7": ["Paul Raises Eutychus", "Paul raises young man."],
    "Acts 20:17": ["Paul’s Farewell", "Paul encourages elders."],
    "Acts 20:24": ["Paul’s Commitment", "Paul faithful to mission."],

    // Acts Chapter 21
    "Acts 21:4": ["Warning to Paul", "Paul warned."],
    "Acts 21:27": ["Paul Arrested", "Paul arrested in temple."],

    // Acts Chapter 22
    "Acts 22:1": ["Paul’s Defense", "Paul shares testimony."],
    "Acts 22:6": ["Paul’s Conversion Story", "Paul explains conversion."],

    // Acts Chapter 23
    "Acts 23:1": ["Paul Before Council", "Paul defends himself."],
    "Acts 23:11": ["God Encourages Paul", "Paul must testify in Rome."],

    // Acts Chapter 24
    "Acts 24:1": ["Paul Before Felix", "Paul defends faith."],
    "Acts 24:25": ["Felix Delays Decision", "Felix delays judgment."],

    // Acts Chapter 25
    "Acts 25:1": ["Paul Before Festus", "Paul appears before Festus."],
    "Acts 25:11": ["Paul Appeals to Caesar", "Paul appeals to Caesar."],

    // Acts Chapter 26
    "Acts 26:1": ["Paul Before Agrippa", "Paul shares testimony."],
    "Acts 26:28": ["Agrippa’s Response", "Agrippa nearly convinced."],

    // Acts Chapter 27
    "Acts 27:1": ["Paul’s Journey to Rome", "Paul travels by ship."],
    "Acts 27:13": ["Storm at Sea", "Violent storm."],
    "Acts 27:22": ["God’s Promise of Safety", "Paul reassures crew."],
    "Acts 27:44": ["Shipwreck", "All survive shipwreck."],

    // Acts Chapter 28
    "Acts 28:1": ["Paul on Malta", "Paul survives snake bite."],
    "Acts 28:7": ["Paul Heals Many", "Paul heals islanders."],
    "Acts 28:16": ["Paul Arrives in Rome", "Paul reaches Rome."],
    "Acts 28:30": ["Paul Preaches Freely", "Paul continues ministry."],

    // Romans Chapter 1
    "Romans 1:1": ["Greeting and Introduction", "Paul introduces himself as servant of Christ."],
    "Romans 1:8": ["Paul’s Desire to Visit Rome", "Paul thanks God for their faith."],
    "Romans 1:16": ["Power of the Gospel", "The gospel is God’s power for salvation."],
    "Romans 1:18": ["God’s Wrath Against Sin", "God’s wrath is revealed against ungodliness."],
    "Romans 1:20": ["God Revealed Through Creation", "God’s nature is seen in creation."],
    "Romans 1:21": ["Human Rejection of God", "People rejected and dishonored God."],
    "Romans 1:24": ["God Gave Them Over to Sin", "God allowed them to follow sinful desires."],

    // Romans Chapter 2
    "Romans 2:1": ["God’s Righteous Judgment", "God judges fairly."],
    "Romans 2:4": ["God’s Kindness Leads to Repentance", "God’s kindness leads to repentance."],
    "Romans 2:6": ["God Rewards According to Deeds", "God judges based on actions."],
    "Romans 2:12": ["Law and Accountability", "All are accountable to God."],
    "Romans 2:17": ["Warning to the Jews", "Knowing law is not enough."],
    "Romans 2:28": ["True Circumcision Is Spiritual", "True identity is inward."],

    // Romans Chapter 3
    "Romans 3:1": ["Advantage of Being a Jew", "God remains faithful."],
    "Romans 3:9": ["All Are Under Sin", "Everyone is guilty of sin."],
    "Romans 3:20": ["Law Cannot Justify", "Law shows sin."],
    "Romans 3:21": ["Righteousness Through Faith", "God provides righteousness through faith."],
    "Romans 3:23": ["All Have Sinned", "Everyone falls short of God’s glory."],
    "Romans 3:24": ["Justified by Grace", "Salvation is God’s gift."],
    "Romans 3:28": ["Justified by Faith Alone", "Faith brings justification."],

    // Romans Chapter 4
    "Romans 4:1": ["Example of Abraham’s Faith", "Abraham justified by faith."],
    "Romans 4:5": ["Faith Counts as Righteousness", "Faith credited as righteousness."],
    "Romans 4:9": ["Blessing for All Believers", "Blessing extends to Gentiles."],
    "Romans 4:13": ["Promise Through Faith", "Promise comes through faith."],
    "Romans 4:18": ["Abraham’s Strong Faith", "Abraham trusted God."],

    // Romans Chapter 5
    "Romans 5:1": ["Peace with God Through Faith", "Faith brings peace with God."],
    "Romans 5:3": ["Joy in Suffering", "Suffering builds character."],
    "Romans 5:6": ["Christ Died for Sinners", "Christ died for the ungodly."],
    "Romans 5:8": ["God’s Love Demonstrated", "Christ died while we were sinners."],
    "Romans 5:12": ["Sin Entered Through Adam", "Sin entered through Adam."],
    "Romans 5:17": ["Grace Through Christ", "Grace brings life."],

    // Romans Chapter 6
    "Romans 6:1": ["Dead to Sin, Alive in Christ", "Believers must reject sin."],
    "Romans 6:3": ["United with Christ in Death and Life", "Believers share Christ’s death and life."],
    "Romans 6:6": ["Freedom from Sin’s Power", "Sin no longer controls believers."],
    "Romans 6:12": ["Do Not Let Sin Reign", "Live righteously."],
    "Romans 6:23": ["Wages of Sin and Gift of God", "Sin leads to death, God gives eternal life."],

    // Romans Chapter 7
    "Romans 7:1": ["Freedom from the Law", "Believers are free from law."],
    "Romans 7:7": ["Law Reveals Sin", "Law exposes sin."],
    "Romans 7:15": ["Struggle with Sin", "Paul describes inner conflict."],
    "Romans 7:24": ["Need for Deliverance", "Christ delivers from sin."],

    // Romans Chapter 8
    "Romans 8:1": ["No Condemnation in Christ", "Believers are free from condemnation."],
    "Romans 8:5": ["Life Through the Spirit", "Spirit leads to life."],
    "Romans 8:9": ["Spirit Lives in Believers", "Spirit belongs to believers."],
    "Romans 8:14": ["Children of God", "Believers are God’s children."],
    "Romans 8:18": ["Future Glory", "Suffering leads to glory."],
    "Romans 8:26": ["Spirit Helps in Weakness", "Spirit intercedes."],
    "Romans 8:28": ["God Works for Good", "God works all things for good."],
    "Romans 8:31": ["God Is for Us", "Nothing can defeat believers."],
    "Romans 8:38": ["Nothing Separates from God’s Love", "God’s love is eternal."],

    // Romans Chapter 9
    "Romans 9:1": ["Paul’s Sorrow for Israel", "Paul grieves for Israel."],
    "Romans 9:6": ["God’s Promise Stands", "God’s promise remains."],
    "Romans 9:14": ["God’s Sovereignty", "God shows mercy."],
    "Romans 9:22": ["God’s Justice and Mercy", "God reveals mercy and justice."],
    "Romans 9:30": ["Gentiles Receive Righteousness", "Faith brings righteousness."],

    // Romans Chapter 10
    "Romans 10:1": ["Paul’s Desire for Israel’s Salvation", "Paul desires their salvation."],
    "Romans 10:4": ["Christ Fulfills the Law", "Christ completes the law."],
    "Romans 10:9": ["Confess and Believe", "Confess Christ to be saved."],
    "Romans 10:13": ["Call on the Lord", "All who call on Him saved."],
    "Romans 10:17": ["Faith Comes by Hearing", "Faith comes through hearing."],

    // Romans Chapter 11
    "Romans 11:1": ["God Has Not Rejected Israel", "God preserves a remnant."],
    "Romans 11:11": ["Salvation to Gentiles", "Gentiles receive salvation."],
    "Romans 11:17": ["Olive Tree Illustration", "Gentiles grafted in."],
    "Romans 11:25": ["Future Restoration of Israel", "Israel will be restored."],
    "Romans 11:33": ["Praise for God’s Wisdom", "God’s wisdom is great."],

    // Romans Chapter 12
    "Romans 12:1": ["Living Sacrifices", "Offer lives to God."],
    "Romans 12:2": ["Be Transformed", "Renew your mind."],
    "Romans 12:4": ["One Body, Many Members", "Each believer has role."],
    "Romans 12:9": ["Love in Action", "Love sincerely."],
    "Romans 12:17": ["Live in Peace", "Do not repay evil."],

    // Romans Chapter 13
    "Romans 13:1": ["Submit to Authorities", "Authorities established by God."],
    "Romans 13:8": ["Love Fulfills the Law", "Love fulfills God’s law."],
    "Romans 13:11": ["Wake Up Spiritually", "Salvation is near."],
    "Romans 13:14": ["Clothe Yourself with Christ", "Live righteously."],

    // Romans Chapter 14
    "Romans 14:1": ["Accept Weak Believers", "Do not judge others."],
    "Romans 14:7": ["Belong to the Lord", "Believers belong to Christ."],
    "Romans 14:10": ["God Is the Judge", "God judges everyone."],
    "Romans 14:13": ["Do Not Cause Others to Stumble", "Help others grow."],
    "Romans 14:17": ["Kingdom of God Defined", "Kingdom is righteousness and peace."],

    // Romans Chapter 15
    "Romans 15:1": ["Support the Weak", "Help weaker believers."],
    "Romans 15:5": ["Unity and Harmony", "Live in unity."],
    "Romans 15:8": ["Christ Serves All", "Christ serves Jews and Gentiles."],
    "Romans 15:13": ["God Gives Hope", "God fills believers with hope."],
    "Romans 15:20": ["Paul’s Mission", "Paul preaches where Christ unknown."],

    // Romans Chapter 16
    "Romans 16:1": ["Commendation of Phoebe", "Phoebe commended."],
    "Romans 16:3": ["Greetings to Fellow Workers", "Greetings to believers."],
    "Romans 16:17": ["Warning Against Divisions", "Avoid false teachers."],
    "Romans 16:20": ["Victory Over Satan", "God will defeat Satan."],
    "Romans 16:25": ["Final Praise to God", "Praise God for His plan."],
    "Romans 16:27": ["Final Glory to God", "Glory to God forever."],

    // 1 Corinthians Chapter 1
    "1 Corinthians 1:1": ["Greeting to the Corinthian Church", "Paul greets the believers in Corinth."],
    "1 Corinthians 1:4": ["Thanksgiving for God’s Grace", "Paul thanks God for grace given to them."],
    "1 Corinthians 1:10": ["Appeal for Unity", "Paul urges believers to avoid divisions."],
    "1 Corinthians 1:18": ["Message of the Cross", "The cross is God’s power to believers."],
    "1 Corinthians 1:26": ["God Chooses the Weak", "God chooses the humble to shame the wise."],
    "1 Corinthians 1:30": ["Christ Our Wisdom and Righteousness", "Christ becomes wisdom and righteousness."],


    // 1 Corinthians Chapter 2
    "1 Corinthians 2:1": ["Paul’s Simple Message", "Paul preached Christ crucified."],
    "1 Corinthians 2:4": ["Power of the Spirit", "Faith depends on God’s power."],
    "1 Corinthians 2:6": ["God’s Hidden Wisdom", "God’s wisdom revealed through the Spirit."],
    "1 Corinthians 2:10": ["Spirit Reveals God’s Truth", "Spirit reveals deep truths."],
    "1 Corinthians 2:14": ["Spiritual Discernment", "Spiritual truth understood through Spirit."],


    // 1 Corinthians Chapter 3
    "1 Corinthians 3:1": ["Spiritual Immaturity", "Believers are still immature."],
    "1 Corinthians 3:5": ["Servants of God", "Leaders serve God’s purpose."],
    "1 Corinthians 3:9": ["God’s Building", "Believers are God’s building."],
    "1 Corinthians 3:11": ["Christ the Foundation", "Christ is the only foundation."],
    "1 Corinthians 3:16": ["Believers Are God’s Temple", "God’s Spirit lives in believers."],
    "1 Corinthians 3:18": ["True Wisdom Comes from God", "Worldly wisdom is foolishness."],


    // 1 Corinthians Chapter 4
    "1 Corinthians 4:1": ["Servants of Christ", "Leaders are servants of Christ."],
    "1 Corinthians 4:5": ["God Judges Hearts", "God reveals hidden motives."],
    "1 Corinthians 4:8": ["Warning Against Pride", "Do not be arrogant."],
    "1 Corinthians 4:14": ["Paul’s Fatherly Concern", "Paul cares like a father."],
    "1 Corinthians 4:20": ["Kingdom Is Power", "God’s kingdom is power."],


    // 1 Corinthians Chapter 5
    "1 Corinthians 5:1": ["Sin in the Church", "Serious sin must be addressed."],
    "1 Corinthians 5:6": ["Remove Sin from Church", "Sin spreads like yeast."],
    "1 Corinthians 5:9": ["Avoid Immoral Believers", "Separate from sinful behavior."],


    // 1 Corinthians Chapter 6
    "1 Corinthians 6:1": ["Lawsuits Among Believers", "Believers should resolve disputes peacefully."],
    "1 Corinthians 6:9": ["Warning Against Sinful Living", "Unrighteous will not inherit kingdom."],
    "1 Corinthians 6:12": ["Honor God with Your Body", "Body belongs to God."],
    "1 Corinthians 6:19": ["Body Is Temple of Holy Spirit", "Honor God with your body."],


    // 1 Corinthians Chapter 7
    "1 Corinthians 7:1": ["Marriage and Singleness", "Instructions about marriage."],
    "1 Corinthians 7:10": ["Instructions for Married People", "Marriage commitment important."],
    "1 Corinthians 7:17": ["Live as God Called You", "Remain faithful in calling."],
    "1 Corinthians 7:25": ["Advice for the Unmarried", "Singleness can serve God."],
    "1 Corinthians 7:32": ["Undivided Devotion to God", "Serve God fully."],


    // 1 Corinthians Chapter 8
    "1 Corinthians 8:1": ["Food Offered to Idols", "Knowledge must be guided by love."],
    "1 Corinthians 8:6": ["One God and One Lord", "God is the source of all."],
    "1 Corinthians 8:9": ["Do Not Cause Others to Stumble", "Protect weaker believers."],


    // 1 Corinthians Chapter 9
    "1 Corinthians 9:1": ["Paul’s Rights as Apostle", "Paul has rights but sacrifices them."],
    "1 Corinthians 9:16": ["Preach the Gospel Faithfully", "Paul must preach gospel."],
    "1 Corinthians 9:19": ["Become All Things to All People", "Serve others to save them."],
    "1 Corinthians 9:24": ["Run to Win the Race", "Discipline yourself."],


    // 1 Corinthians Chapter 10
    "1 Corinthians 10:1": ["Lessons from Israel’s Failure", "Learn from Israel’s mistakes."],
    "1 Corinthians 10:12": ["Warning Against Falling", "Stay alert against sin."],
    "1 Corinthians 10:13": ["God Provides Escape from Temptation", "God helps overcome temptation."],
    "1 Corinthians 10:14": ["Avoid Idolatry", "Flee from idol worship."],
    "1 Corinthians 10:23": ["Do Everything for God’s Glory", "Honor God in all actions."],


    // 1 Corinthians Chapter 11
    "1 Corinthians 11:2": ["Proper Worship Practices", "Honor God in worship."],
    "1 Corinthians 11:17": ["Abuse of the Lord’s Supper", "Correct improper behavior."],
    "1 Corinthians 11:23": ["Institution of the Lord’s Supper", "Jesus established communion."],
    "1 Corinthians 11:28": ["Examine Yourself", "Examine your heart before communion."],


    // 1 Corinthians Chapter 12
    "1 Corinthians 12:1": ["Spiritual Gifts Explained", "Different gifts from same Spirit."],
    "1 Corinthians 12:7": ["Purpose of Spiritual Gifts", "Gifts benefit the church."],
    "1 Corinthians 12:12": ["One Body, Many Parts", "Believers form one body."],
    "1 Corinthians 12:27": ["Believers Are Christ’s Body", "Each has important role."],


    // 1 Corinthians Chapter 13
    "1 Corinthians 13:1": ["Love Is Essential", "Without love, gifts are meaningless."],
    "1 Corinthians 13:4": ["Characteristics of Love", "Love is patient and kind."],
    "1 Corinthians 13:8": ["Love Never Fails", "Love lasts forever."],
    "1 Corinthians 13:13": ["Greatest Is Love", "Love is greatest virtue."],


    // 1 Corinthians Chapter 14
    "1 Corinthians 14:1": ["Desire Spiritual Gifts", "Seek gifts that build others."],
    "1 Corinthians 14:3": ["Prophecy Edifies Church", "Prophecy strengthens believers."],
    "1 Corinthians 14:12": ["Build Up the Church", "Use gifts to help others."],
    "1 Corinthians 14:26": ["Orderly Worship", "Worship must be orderly."],
    "1 Corinthians 14:40": ["Do Everything Properly", "Worship properly and orderly."],


    // 1 Corinthians Chapter 15
    "1 Corinthians 15:1": ["The Gospel Message", "Christ died and rose again."],
    "1 Corinthians 15:12": ["Resurrection of the Dead", "Resurrection is essential."],
    "1 Corinthians 15:20": ["Christ the Firstfruits", "Christ is first to rise."],
    "1 Corinthians 15:35": ["Resurrection Body Explained", "New spiritual body."],
    "1 Corinthians 15:51": ["Mystery of Transformation", "Believers transformed."],
    "1 Corinthians 15:54": ["Victory Over Death", "Death defeated through Christ."],
    "1 Corinthians 15:58": ["Stand Firm in Faith", "Remain faithful."],


    // 1 Corinthians Chapter 16
    "1 Corinthians 16:1": ["Collection for Believers", "Give regularly."],
    "1 Corinthians 16:5": ["Paul’s Travel Plans", "Paul plans to visit."],
    "1 Corinthians 16:13": ["Final Encouragement", "Be watchful and strong."],
    "1 Corinthians 16:19": ["Final Greetings", "Greetings from believers."],
    "1 Corinthians 16:23": ["Final Blessing", "Grace of Jesus be with you."],

    // 1 Corinthians Chapter 1
    "1 Corinthians 1:1": ["Greeting to the Corinthian Church", "Paul greets the believers in Corinth."],
    "1 Corinthians 1:4": ["Thanksgiving for God’s Grace", "Paul thanks God for grace given to them."],
    "1 Corinthians 1:10": ["Appeal for Unity", "Paul urges believers to avoid divisions."],
    "1 Corinthians 1:18": ["Message of the Cross", "The cross is God’s power to believers."],
    "1 Corinthians 1:26": ["God Chooses the Weak", "God chooses the humble to shame the wise."],
    "1 Corinthians 1:30": ["Christ Our Wisdom and Righteousness", "Christ becomes wisdom and righteousness."],


    // 1 Corinthians Chapter 2
    "1 Corinthians 2:1": ["Paul’s Simple Message", "Paul preached Christ crucified."],
    "1 Corinthians 2:4": ["Power of the Spirit", "Faith depends on God’s power."],
    "1 Corinthians 2:6": ["God’s Hidden Wisdom", "God’s wisdom revealed through the Spirit."],
    "1 Corinthians 2:10": ["Spirit Reveals God’s Truth", "Spirit reveals deep truths."],
    "1 Corinthians 2:14": ["Spiritual Discernment", "Spiritual truth understood through Spirit."],


    // 1 Corinthians Chapter 3
    "1 Corinthians 3:1": ["Spiritual Immaturity", "Believers are still immature."],
    "1 Corinthians 3:5": ["Servants of God", "Leaders serve God’s purpose."],
    "1 Corinthians 3:9": ["God’s Building", "Believers are God’s building."],
    "1 Corinthians 3:11": ["Christ the Foundation", "Christ is the only foundation."],
    "1 Corinthians 3:16": ["Believers Are God’s Temple", "God’s Spirit lives in believers."],
    "1 Corinthians 3:18": ["True Wisdom Comes from God", "Worldly wisdom is foolishness."],


    // 1 Corinthians Chapter 4
    "1 Corinthians 4:1": ["Servants of Christ", "Leaders are servants of Christ."],
    "1 Corinthians 4:5": ["God Judges Hearts", "God reveals hidden motives."],
    "1 Corinthians 4:8": ["Warning Against Pride", "Do not be arrogant."],
    "1 Corinthians 4:14": ["Paul’s Fatherly Concern", "Paul cares like a father."],
    "1 Corinthians 4:20": ["Kingdom Is Power", "God’s kingdom is power."],


    // 1 Corinthians Chapter 5
    "1 Corinthians 5:1": ["Sin in the Church", "Serious sin must be addressed."],
    "1 Corinthians 5:6": ["Remove Sin from Church", "Sin spreads like yeast."],
    "1 Corinthians 5:9": ["Avoid Immoral Believers", "Separate from sinful behavior."],


    // 1 Corinthians Chapter 6
    "1 Corinthians 6:1": ["Lawsuits Among Believers", "Believers should resolve disputes peacefully."],
    "1 Corinthians 6:9": ["Warning Against Sinful Living", "Unrighteous will not inherit kingdom."],
    "1 Corinthians 6:12": ["Honor God with Your Body", "Body belongs to God."],
    "1 Corinthians 6:19": ["Body Is Temple of Holy Spirit", "Honor God with your body."],


    // 1 Corinthians Chapter 7
    "1 Corinthians 7:1": ["Marriage and Singleness", "Instructions about marriage."],
    "1 Corinthians 7:10": ["Instructions for Married People", "Marriage commitment important."],
    "1 Corinthians 7:17": ["Live as God Called You", "Remain faithful in calling."],
    "1 Corinthians 7:25": ["Advice for the Unmarried", "Singleness can serve God."],
    "1 Corinthians 7:32": ["Undivided Devotion to God", "Serve God fully."],


    // 1 Corinthians Chapter 8
    "1 Corinthians 8:1": ["Food Offered to Idols", "Knowledge must be guided by love."],
    "1 Corinthians 8:6": ["One God and One Lord", "God is the source of all."],
    "1 Corinthians 8:9": ["Do Not Cause Others to Stumble", "Protect weaker believers."],


    // 1 Corinthians Chapter 9
    "1 Corinthians 9:1": ["Paul’s Rights as Apostle", "Paul has rights but sacrifices them."],
    "1 Corinthians 9:16": ["Preach the Gospel Faithfully", "Paul must preach gospel."],
    "1 Corinthians 9:19": ["Become All Things to All People", "Serve others to save them."],
    "1 Corinthians 9:24": ["Run to Win the Race", "Discipline yourself."],


    // 1 Corinthians Chapter 10
    "1 Corinthians 10:1": ["Lessons from Israel’s Failure", "Learn from Israel’s mistakes."],
    "1 Corinthians 10:12": ["Warning Against Falling", "Stay alert against sin."],
    "1 Corinthians 10:13": ["God Provides Escape from Temptation", "God helps overcome temptation."],
    "1 Corinthians 10:14": ["Avoid Idolatry", "Flee from idol worship."],
    "1 Corinthians 10:23": ["Do Everything for God’s Glory", "Honor God in all actions."],


    // 1 Corinthians Chapter 11
    "1 Corinthians 11:2": ["Proper Worship Practices", "Honor God in worship."],
    "1 Corinthians 11:17": ["Abuse of the Lord’s Supper", "Correct improper behavior."],
    "1 Corinthians 11:23": ["Institution of the Lord’s Supper", "Jesus established communion."],
    "1 Corinthians 11:28": ["Examine Yourself", "Examine your heart before communion."],


    // 1 Corinthians Chapter 12
    "1 Corinthians 12:1": ["Spiritual Gifts Explained", "Different gifts from same Spirit."],
    "1 Corinthians 12:7": ["Purpose of Spiritual Gifts", "Gifts benefit the church."],
    "1 Corinthians 12:12": ["One Body, Many Parts", "Believers form one body."],
    "1 Corinthians 12:27": ["Believers Are Christ’s Body", "Each has important role."],


    // 1 Corinthians Chapter 13
    "1 Corinthians 13:1": ["Love Is Essential", "Without love, gifts are meaningless."],
    "1 Corinthians 13:4": ["Characteristics of Love", "Love is patient and kind."],
    "1 Corinthians 13:8": ["Love Never Fails", "Love lasts forever."],
    "1 Corinthians 13:13": ["Greatest Is Love", "Love is greatest virtue."],


    // 1 Corinthians Chapter 14
    "1 Corinthians 14:1": ["Desire Spiritual Gifts", "Seek gifts that build others."],
    "1 Corinthians 14:3": ["Prophecy Edifies Church", "Prophecy strengthens believers."],
    "1 Corinthians 14:12": ["Build Up the Church", "Use gifts to help others."],
    "1 Corinthians 14:26": ["Orderly Worship", "Worship must be orderly."],
    "1 Corinthians 14:40": ["Do Everything Properly", "Worship properly and orderly."],


    // 1 Corinthians Chapter 15
    "1 Corinthians 15:1": ["The Gospel Message", "Christ died and rose again."],
    "1 Corinthians 15:12": ["Resurrection of the Dead", "Resurrection is essential."],
    "1 Corinthians 15:20": ["Christ the Firstfruits", "Christ is first to rise."],
    "1 Corinthians 15:35": ["Resurrection Body Explained", "New spiritual body."],
    "1 Corinthians 15:51": ["Mystery of Transformation", "Believers transformed."],
    "1 Corinthians 15:54": ["Victory Over Death", "Death defeated through Christ."],
    "1 Corinthians 15:58": ["Stand Firm in Faith", "Remain faithful."],


    // 1 Corinthians Chapter 16
    "1 Corinthians 16:1": ["Collection for Believers", "Give regularly."],
    "1 Corinthians 16:5": ["Paul’s Travel Plans", "Paul plans to visit."],
    "1 Corinthians 16:13": ["Final Encouragement", "Be watchful and strong."],
    "1 Corinthians 16:19": ["Final Greetings", "Greetings from believers."],
    "1 Corinthians 16:23": ["Final Blessing", "Grace of Jesus be with you."],

    // Galatians Chapter 1
    "Galatians 1:1": ["Greeting to the Galatian Churches", "Paul greets the believers with grace and peace."],
    "Galatians 1:3": ["Grace and Peace Through Christ", "Jesus gave Himself to rescue us from sin."],
    "Galatians 1:6": ["Warning Against a Different Gospel", "Paul warns against turning to a false gospel."],
    "Galatians 1:8": ["Curse on False Teachers", "Anyone preaching a different gospel is cursed."],
    "Galatians 1:10": ["Serving Christ, Not People", "Paul seeks to please God, not people."],
    "Galatians 1:11": ["Paul’s Gospel from God", "Paul received the gospel by revelation."],
    "Galatians 1:13": ["Paul’s Past Persecution", "Paul formerly persecuted the church."],
    "Galatians 1:15": ["God’s Calling of Paul", "God called Paul by grace."],
    "Galatians 1:18": ["Paul Visits Jerusalem", "Paul met Peter and James."],


    // Galatians Chapter 2
    "Galatians 2:1": ["Paul Accepted by Apostles", "Apostles recognized Paul’s ministry."],
    "Galatians 2:4": ["Defense of Gospel Freedom", "False believers tried to impose legalism."],
    "Galatians 2:7": ["Different Missions, Same Gospel", "Paul to Gentiles, Peter to Jews."],
    "Galatians 2:11": ["Paul Confronts Peter", "Paul rebuked Peter for hypocrisy."],
    "Galatians 2:15": ["Justified by Faith, Not Law", "People are justified by faith."],
    "Galatians 2:20": ["Christ Lives in Me", "Believers live by faith in Christ."],


    // Galatians Chapter 3
    "Galatians 3:1": ["Faith, Not Law", "Paul questions their return to legalism."],
    "Galatians 3:6": ["Example of Abraham’s Faith", "Abraham was justified by faith."],
    "Galatians 3:10": ["Curse of the Law", "Law brings curse, not salvation."],
    "Galatians 3:13": ["Christ Redeemed from Curse", "Christ became a curse for us."],
    "Galatians 3:15": ["Promise Greater Than Law", "God’s promise came before the law."],
    "Galatians 3:19": ["Purpose of the Law", "Law shows sin."],
    "Galatians 3:26": ["Children of God Through Faith", "Believers are God’s children."],
    "Galatians 3:28": ["Unity in Christ", "All believers are one in Christ."],


    // Galatians Chapter 4
    "Galatians 4:1": ["Heirs Through Christ", "Believers are no longer slaves."],
    "Galatians 4:4": ["God Sent His Son", "Jesus came to redeem believers."],
    "Galatians 4:6": ["Adopted as God’s Children", "Believers call God Father."],
    "Galatians 4:8": ["Warning Against Returning to Slavery", "Do not return to legalism."],
    "Galatians 4:12": ["Paul’s Appeal to Believers", "Paul urges them to remain faithful."],
    "Galatians 4:21": ["Example of Hagar and Sarah", "Illustration of slavery vs freedom."],


    // Galatians Chapter 5
    "Galatians 5:1": ["Freedom in Christ", "Stand firm in freedom."],
    "Galatians 5:4": ["Warning Against Legalism", "Law separates from grace."],
    "Galatians 5:6": ["Faith Expressed Through Love", "Faith works through love."],
    "Galatians 5:13": ["Serve One Another in Love", "Use freedom to serve others."],
    "Galatians 5:16": ["Walk by the Spirit", "Spirit helps overcome sinful nature."],
    "Galatians 5:19": ["Works of the Flesh", "List of sinful behaviors."],
    "Galatians 5:22": ["Fruit of the Spirit", "Love, joy, peace, and other virtues."],
    "Galatians 5:24": ["Belonging to Christ", "Crucify sinful desires."],


    // Galatians Chapter 6
    "Galatians 6:1": ["Restore with Gentleness", "Help those caught in sin."],
    "Galatians 6:2": ["Carry Each Other’s Burdens", "Support one another."],
    "Galatians 6:7": ["Law of Sowing and Reaping", "Actions bring consequences."],
    "Galatians 6:9": ["Do Not Grow Weary", "Continue doing good."],
    "Galatians 6:12": ["Warning Against False Motives", "False teachers seek approval."],
    "Galatians 6:14": ["Boast Only in the Cross", "Paul boasts in Christ alone."],
    "Galatians 6:15": ["New Creation in Christ", "What matters is new life."],
    "Galatians 6:17": ["Paul’s Suffering for Christ", "Paul bears marks for Christ."],
    "Galatians 6:18": ["Final Blessing", "Grace of Jesus be with believers."],

    // Ephesians Chapter 1
    "Ephesians 1:1": ["Greeting to the Ephesian Church", "Paul greets the believers in Ephesus."],
    "Ephesians 1:3": ["Spiritual Blessings in Christ", "God has blessed believers with every spiritual blessing."],
    "Ephesians 1:4": ["Chosen Before Creation", "God chose believers before the world began."],
    "Ephesians 1:7": ["Redemption Through Christ’s Blood", "Believers are redeemed and forgiven through Christ."],
    "Ephesians 1:9": ["Mystery of God’s Will Revealed", "God revealed His plan through Christ."],
    "Ephesians 1:11": ["Inheritance in Christ", "Believers receive inheritance in Christ."],
    "Ephesians 1:13": ["Sealed with the Holy Spirit", "Believers are sealed with the Holy Spirit."],
    "Ephesians 1:15": ["Thanksgiving and Prayer", "Paul prays for their spiritual wisdom."],
    "Ephesians 1:18": ["Prayer for Spiritual Understanding", "Paul prays they know their hope and inheritance."],
    "Ephesians 1:20": ["Christ Exalted Above All", "God raised Christ and placed Him above all."],
    "Ephesians 1:22": ["Christ Head of the Church", "Christ is head over the church."],


    // Ephesians Chapter 2
    "Ephesians 2:1": ["Made Alive in Christ", "Believers were dead in sin but made alive."],
    "Ephesians 2:4": ["Saved by God’s Mercy", "God saved believers because of His love."],
    "Ephesians 2:8": ["Saved by Grace Through Faith", "Salvation is God’s gift, not by works."],
    "Ephesians 2:10": ["Created for Good Works", "Believers are created to do good works."],
    "Ephesians 2:11": ["Unity of Jews and Gentiles", "Gentiles are brought near through Christ."],
    "Ephesians 2:14": ["Christ Brings Peace", "Christ removes division and brings peace."],
    "Ephesians 2:19": ["Members of God’s Household", "Believers belong to God’s family."],
    "Ephesians 2:20": ["Built on Christ the Cornerstone", "Christ is the foundation of the church."],


    // Ephesians Chapter 3
    "Ephesians 3:1": ["Paul’s Ministry to the Gentiles", "Paul explains his mission to Gentiles."],
    "Ephesians 3:3": ["Mystery Revealed by the Spirit", "God revealed the mystery of salvation."],
    "Ephesians 3:6": ["Gentiles Share in the Promise", "Gentiles share equally in Christ."],
    "Ephesians 3:8": ["Paul Preaches Christ’s Riches", "Paul proclaims Christ’s unsearchable riches."],
    "Ephesians 3:10": ["God’s Wisdom Revealed Through Church", "God shows His wisdom through the church."],
    "Ephesians 3:14": ["Paul’s Prayer for Strength", "Paul prays believers will be strengthened."],
    "Ephesians 3:17": ["Christ Dwells Through Faith", "Christ lives in believers’ hearts."],
    "Ephesians 3:18": ["Knowing Christ’s Love", "Believers can know Christ’s vast love."],
    "Ephesians 3:20": ["God’s Power Beyond Measure", "God can do more than we imagine."],


    // Ephesians Chapter 4
    "Ephesians 4:1": ["Walk Worthy of Your Calling", "Live worthy of God’s calling."],
    "Ephesians 4:3": ["Unity in the Spirit", "Maintain unity and peace."],
    "Ephesians 4:7": ["Gifts Given by Christ", "Christ gives spiritual gifts."],
    "Ephesians 4:11": ["Roles in the Church", "Christ appoints leaders for growth."],
    "Ephesians 4:13": ["Spiritual Maturity", "Grow into maturity in Christ."],
    "Ephesians 4:17": ["Put Off the Old Self", "Reject sinful lifestyle."],
    "Ephesians 4:22": ["Put On the New Self", "Live in righteousness and holiness."],
    "Ephesians 4:25": ["Instructions for Christian Living", "Speak truth and avoid sin."],
    "Ephesians 4:30": ["Do Not Grieve the Holy Spirit", "Live in ways that honor the Spirit."],
    "Ephesians 4:32": ["Forgive One Another", "Be kind and forgiving."],


    // Ephesians Chapter 5
    "Ephesians 5:1": ["Imitate God", "Follow God’s example in love."],
    "Ephesians 5:3": ["Avoid Immorality", "Reject sinful behaviors."],
    "Ephesians 5:8": ["Live as Children of Light", "Live in goodness and truth."],
    "Ephesians 5:15": ["Walk in Wisdom", "Use time wisely."],
    "Ephesians 5:18": ["Be Filled with the Spirit", "Live under the Spirit’s control."],
    "Ephesians 5:22": ["Instructions for Wives", "Wives respect husbands."],
    "Ephesians 5:25": ["Instructions for Husbands", "Husbands love wives like Christ loves church."],
    "Ephesians 5:31": ["Marriage Reflects Christ and Church", "Marriage reflects spiritual truth."],


    // Ephesians Chapter 6
    "Ephesians 6:1": ["Instructions for Children", "Children obey parents."],
    "Ephesians 6:4": ["Instructions for Parents", "Raise children in the Lord."],
    "Ephesians 6:5": ["Instructions for Servants", "Serve sincerely as serving Christ."],
    "Ephesians 6:9": ["Instructions for Masters", "Treat others fairly."],
    "Ephesians 6:10": ["Be Strong in the Lord", "Find strength in God."],
    "Ephesians 6:11": ["Armor of God", "Put on God’s armor."],
    "Ephesians 6:14": ["Parts of the Armor", "Truth, righteousness, faith, salvation, and God’s word."],
    "Ephesians 6:18": ["Pray Continually", "Pray always in the Spirit."],
    "Ephesians 6:21": ["Final Greetings", "Tychicus brings encouragement."],
    "Ephesians 6:23": ["Final Blessing", "Peace, love, and grace to believers."],

    // Philippians Chapter 1
    "Philippians 1:1": ["Greeting to the Philippian Church", "Paul and Timothy greet the believers in Philippi."],
    "Philippians 1:3": ["Thanksgiving and Prayer", "Paul thanks God and prays with joy for them."],
    "Philippians 1:6": ["Confidence in God’s Work", "God will complete the good work begun in believers."],
    "Philippians 1:9": ["Prayer for Love and Discernment", "Paul prays their love will grow in knowledge."],
    "Philippians 1:12": ["Paul’s Chains Advance the Gospel", "Paul’s imprisonment helps spread the gospel."],
    "Philippians 1:15": ["Different Motives for Preaching", "Some preach Christ with wrong motives, others sincerely."],
    "Philippians 1:18": ["Rejoicing in Christ Being Preached", "Paul rejoices that Christ is proclaimed."],
    "Philippians 1:20": ["Christ Honored in Life or Death", "Paul desires Christ to be honored always."],
    "Philippians 1:21": ["To Live Is Christ, To Die Is Gain", "Living serves Christ; dying brings eternal reward."],
    "Philippians 1:27": ["Live Worthy of the Gospel", "Stand firm and live worthy of Christ."],
    "Philippians 1:29": ["Privilege of Suffering for Christ", "Believers are given privilege to suffer for Christ."],


    // Philippians Chapter 2
    "Philippians 2:1": ["Unity and Humility", "Believers should be united and humble."],
    "Philippians 2:5": ["Christ’s Example of Humility", "Jesus humbled Himself and became obedient."],
    "Philippians 2:9": ["Christ Exalted by God", "God exalted Jesus above all."],
    "Philippians 2:12": ["Work Out Your Salvation", "Live obediently with reverence."],
    "Philippians 2:14": ["Shine as Lights in the World", "Live without complaining."],
    "Philippians 2:17": ["Paul’s Joy in Sacrifice", "Paul rejoices in serving believers."],
    "Philippians 2:19": ["Timothy’s Faithful Service", "Timothy genuinely cares for believers."],
    "Philippians 2:25": ["Epaphroditus’ Service", "Epaphroditus faithfully served despite illness."],


    // Philippians Chapter 3
    "Philippians 3:1": ["Warning Against False Confidence", "Do not trust human achievements."],
    "Philippians 3:4": ["Paul’s Former Achievements", "Paul lists his past religious status."],
    "Philippians 3:7": ["Counting All as Loss for Christ", "Paul values Christ above everything."],
    "Philippians 3:10": ["Knowing Christ Fully", "Paul desires to know Christ deeply."],
    "Philippians 3:12": ["Pressing Toward the Goal", "Paul strives to reach spiritual maturity."],
    "Philippians 3:17": ["Follow Godly Examples", "Imitate faithful believers."],
    "Philippians 3:20": ["Citizenship in Heaven", "Believers belong to heaven."],
    "Philippians 3:21": ["Christ Will Transform Believers", "Christ will give glorified bodies."],


    // Philippians Chapter 4
    "Philippians 4:1": ["Stand Firm in the Lord", "Remain strong in faith."],
    "Philippians 4:2": ["Call for Unity", "Encouragement for believers to agree."],
    "Philippians 4:4": ["Rejoice Always", "Always rejoice in the Lord."],
    "Philippians 4:6": ["Prayer Instead of Anxiety", "Pray and trust God instead of worrying."],
    "Philippians 4:7": ["God’s Peace Guards Hearts", "God’s peace protects believers."],
    "Philippians 4:8": ["Think on Good Things", "Focus on what is true and good."],
    "Philippians 4:10": ["Gratitude for Their Support", "Paul thanks them for helping him."],
    "Philippians 4:11": ["Contentment in All Circumstances", "Paul learned to be content."],
    "Philippians 4:13": ["Strength Through Christ", "Christ gives strength in all situations."],
    "Philippians 4:15": ["Philippians’ Generosity", "They supported Paul’s ministry."],
    "Philippians 4:19": ["God Will Supply All Needs", "God provides according to His riches."],
    "Philippians 4:21": ["Final Greetings", "Paul sends greetings and blessing."],
    "Philippians 4:23": ["Final Blessing", "Grace of the Lord Jesus Christ be with you."],

    // Colossians Chapter 1
    "Colossians 1:1": ["Greeting to the Colossian Church", "Paul greets the believers in Colossae with grace and peace."],
    "Colossians 1:3": ["Thanksgiving for Their Faith and Love", "Paul thanks God for their faith in Christ and love for believers."],
    "Colossians 1:5": ["Hope Stored in Heaven", "Their hope is kept safely in heaven."],
    "Colossians 1:9": ["Prayer for Spiritual Wisdom", "Paul prays for their spiritual wisdom and understanding."],
    "Colossians 1:13": ["Rescued into Christ’s Kingdom", "God delivered believers from darkness into Christ’s kingdom."],
    "Colossians 1:15": ["Supremacy of Christ", "Jesus is the image of the invisible God and creator of all."],
    "Colossians 1:18": ["Christ the Head of the Church", "Jesus is the head and beginning of the church."],
    "Colossians 1:19": ["Fullness of God in Christ", "God’s fullness dwells in Christ."],
    "Colossians 1:20": ["Reconciliation Through Christ", "Christ reconciles all things through His blood."],
    "Colossians 1:21": ["Believers Reconciled to God", "Believers were once enemies but now reconciled."],
    "Colossians 1:24": ["Paul’s Suffering for the Church", "Paul suffers for the benefit of believers."],
    "Colossians 1:26": ["Mystery Revealed", "God’s mystery is now revealed to believers."],
    "Colossians 1:27": ["Christ in You, the Hope of Glory", "Christ living in believers is their hope."],
    "Colossians 1:28": ["Proclaiming Christ", "Paul teaches everyone to grow mature in Christ."],


    // Colossians Chapter 2
    "Colossians 2:1": ["Paul’s Concern for the Church", "Paul desires believers to be encouraged and united."],
    "Colossians 2:3": ["Treasures in Christ", "All wisdom and knowledge are found in Christ."],
    "Colossians 2:6": ["Continue Living in Christ", "Believers must remain rooted and built up in Him."],
    "Colossians 2:8": ["Warning Against False Philosophy", "Do not be deceived by human traditions."],
    "Colossians 2:9": ["Fullness of Deity in Christ", "Christ has all the fullness of God."],
    "Colossians 2:11": ["Spiritual Circumcision", "Believers are spiritually transformed in Christ."],
    "Colossians 2:12": ["Buried and Raised with Christ", "Believers share in Christ’s death and resurrection."],
    "Colossians 2:13": ["Forgiveness Through Christ", "God forgave sins and made believers alive."],
    "Colossians 2:14": ["Victory Over the Law", "Christ canceled the record of sin."],
    "Colossians 2:15": ["Victory Over Spiritual Powers", "Christ defeated evil powers."],
    "Colossians 2:16": ["Freedom from Legalism", "Do not let others judge you on rituals."],
    "Colossians 2:18": ["Warning Against False Worship", "Avoid false humility and angel worship."],
    "Colossians 2:20": ["Freedom from Worldly Rules", "Believers are free from human regulations."],


    // Colossians Chapter 3
    "Colossians 3:1": ["Seek Things Above", "Focus on heavenly things."],
    "Colossians 3:3": ["New Life Hidden in Christ", "Believers’ true life is in Christ."],
    "Colossians 3:5": ["Put to Death Sinful Nature", "Remove sinful behaviors."],
    "Colossians 3:8": ["Put Away Evil Practices", "Avoid anger, slander, and lies."],
    "Colossians 3:10": ["Put on the New Self", "Live according to God’s image."],
    "Colossians 3:12": ["Clothe Yourself with Virtues", "Show compassion, kindness, and humility."],
    "Colossians 3:14": ["Love Binds Everything Together", "Love is the greatest virtue."],
    "Colossians 3:15": ["Let Christ’s Peace Rule", "Allow Christ’s peace to guide you."],
    "Colossians 3:16": ["Let Christ’s Word Dwell Richly", "Teach and encourage one another."],
    "Colossians 3:17": ["Do Everything for Christ", "Honor Christ in all actions."],
    "Colossians 3:18": ["Instructions for Families", "Wives, husbands, children, and parents guidance."],
    "Colossians 3:22": ["Instructions for Servants", "Serve sincerely as serving Christ."],


    // Colossians Chapter 4
    "Colossians 4:1": ["Instructions for Masters", "Masters must treat servants fairly."],
    "Colossians 4:2": ["Devote Yourselves to Prayer", "Stay alert and thankful in prayer."],
    "Colossians 4:3": ["Pray for Open Doors", "Pray for opportunities to share the gospel."],
    "Colossians 4:5": ["Act Wisely Toward Outsiders", "Make the most of every opportunity."],
    "Colossians 4:6": ["Speak with Grace", "Speak wisely and graciously."],
    "Colossians 4:7": ["Tychicus Sent to Encourage", "Tychicus brings news and encouragement."],
    "Colossians 4:10": ["Greetings from Fellow Workers", "Many believers send greetings."],
    "Colossians 4:12": ["Epaphras’ Faithful Service", "Epaphras prays earnestly for them."],
    "Colossians 4:16": ["Share This Letter", "The letter should be read by other churches."],
    "Colossians 4:18": ["Paul’s Final Greeting", "Paul closes with grace and blessing."],

    // 1 Thessalonians Chapter 1
    "1 Thessalonians 1:1": ["Greeting to the Church", "Paul, Silas, and Timothy greet the church in God the Father and the Lord Jesus Christ."],
    "1 Thessalonians 1:2": ["Thanksgiving for Their Faith", "Paul thanks God for their faith, love, and hope in Jesus."],
    "1 Thessalonians 1:4": ["Chosen by God", "Paul reminds them that they are loved and chosen by God."],
    "1 Thessalonians 1:5": ["Gospel Came with Power", "The gospel came not only in words but also with power and the Holy Spirit."],
    "1 Thessalonians 1:6": ["Imitators of Christ", "They became imitators of the Lord and received the word with joy despite suffering."],
    "1 Thessalonians 1:7": ["Examples to Other Believers", "They became an example to believers in Macedonia and Achaia."],
    "1 Thessalonians 1:8": ["Faith Known Everywhere", "Their faith in God became known everywhere."],
    "1 Thessalonians 1:9": ["Turned from Idols to God", "They turned from idols to serve the living and true God."],
    "1 Thessalonians 1:10": ["Waiting for Jesus’ Return", "They wait for God’s Son from heaven, who rescues from coming wrath."],

    // 1 Thessalonians Chapter 2
    "1 Thessalonians 2:1": ["Paul’s Ministry Was Not in Vain", "Paul reminds them his visit was meaningful and effective."],
    "1 Thessalonians 2:2": ["Boldness Despite Opposition", "Paul preached the gospel boldly even after suffering."],
    "1 Thessalonians 2:4": ["Approved by God", "Paul speaks to please God, not people."],
    "1 Thessalonians 2:7": ["Gentle Like a Nursing Mother", "Paul cared for them with gentleness and love."],
    "1 Thessalonians 2:9": ["Hard Work and Sacrifice", "Paul worked day and night to avoid being a burden."],
    "1 Thessalonians 2:11": ["Like a Father Encouraging Children", "Paul encouraged and comforted them to live worthy of God."],
    "1 Thessalonians 2:13": ["They Received God’s Word", "They accepted the message as God’s word, not human words."],
    "1 Thessalonians 2:14": ["Suffered for Their Faith", "They suffered persecution like other churches."],
    "1 Thessalonians 2:17": ["Paul Longs to See Them", "Paul deeply desires to visit them again."],
    "1 Thessalonians 2:19": ["Their Joy and Crown", "They are Paul’s hope, joy, and crown before Jesus."],

    // 1 Thessalonians Chapter 3
    "1 Thessalonians 3:1": ["Timothy Sent to Strengthen Them", "Paul sends Timothy to strengthen their faith."],
    "1 Thessalonians 3:3": ["Encouragement During Trials", "Believers are reminded that suffering is expected."],
    "1 Thessalonians 3:5": ["Concern for Their Faith", "Paul fears temptation may weaken them."],
    "1 Thessalonians 3:6": ["Timothy’s Good Report", "Timothy brings good news of their faith and love."],
    "1 Thessalonians 3:7": ["Comfort in Their Faith", "Paul is comforted by their strong faith."],
    "1 Thessalonians 3:9": ["Thankfulness to God", "Paul gives thanks for the joy they bring."],
    "1 Thessalonians 3:10": ["Prayer to See Them Again", "Paul prays to visit and strengthen them."],
    "1 Thessalonians 3:12": ["Prayer for Increasing Love", "Paul prays that their love will grow."],
    "1 Thessalonians 3:13": ["Blameless at Christ’s Coming", "Paul prays they will be holy when Jesus returns."],

    // 1 Thessalonians Chapter 4
    "1 Thessalonians 4:1": ["Living to Please God", "Paul urges them to live holy lives."],
    "1 Thessalonians 4:3": ["God’s Will Is Sanctification", "Believers must avoid sexual immorality."],
    "1 Thessalonians 4:9": ["Love One Another", "They are taught by God to love each other."],
    "1 Thessalonians 4:11": ["Live Quiet and Responsible Lives", "Work faithfully and live respectfully."],
    "1 Thessalonians 4:13": ["Hope for Believers Who Have Died", "Do not grieve without hope."],
    "1 Thessalonians 4:16": ["The Lord Will Return", "Jesus will descend from heaven with power."],
    "1 Thessalonians 4:17": ["Believers Will Meet the Lord", "Believers will be caught up to be with Jesus forever."],
    "1 Thessalonians 4:18": ["Encourage One Another", "Comfort each other with this hope."],

    // 1 Thessalonians Chapter 5
    "1 Thessalonians 5:1": ["The Day of the Lord Will Come Suddenly", "It will come unexpectedly like a thief."],
    "1 Thessalonians 5:4": ["Children of Light", "Believers must stay alert and sober."],
    "1 Thessalonians 5:8": ["Armor of Faith and Salvation", "Wear faith, love, and hope as protection."],
    "1 Thessalonians 5:9": ["Saved from Wrath", "God appointed believers for salvation through Jesus."],
    "1 Thessalonians 5:11": ["Encourage and Build Each Other", "Strengthen and support one another."],
    "1 Thessalonians 5:12": ["Respect Church Leaders", "Honor those who guide you."],
    "1 Thessalonians 5:16": ["Final Instructions for Christian Living", "Rejoice always, pray continually, give thanks."],
    "1 Thessalonians 5:19": ["Do Not Quench the Spirit", "Do not reject the work of the Holy Spirit."],
    "1 Thessalonians 5:23": ["Prayer for Sanctification", "May God sanctify you completely."],
    "1 Thessalonians 5:25": ["Final Greetings", "Paul asks for prayer and blesses them."],


    // 2 Thessalonians Chapter 1
    "2 Thessalonians 1:1": ["Greeting to the Church", "Paul, Silas, and Timothy greet the church."],
    "2 Thessalonians 1:3": ["Thanksgiving for Their Growing Faith", "Paul thanks God for their growing faith and love."],
    "2 Thessalonians 1:5": ["God’s Righteous Judgment", "Their suffering shows God’s righteous judgment."],
    "2 Thessalonians 1:6": ["God Will Repay Trouble", "God will bring justice to those who trouble believers."],
    "2 Thessalonians 1:7": ["Relief When Jesus Is Revealed", "Believers will receive relief when Jesus returns."],
    "2 Thessalonians 1:8": ["Judgment on Those Who Reject God", "Jesus will punish those who do not obey the gospel."],
    "2 Thessalonians 1:10": ["Jesus Will Be Glorified", "Jesus will be glorified among His people."],
    "2 Thessalonians 1:11": ["Prayer for Worthy Living", "Paul prays they will live worthy of God’s calling."],

    // 2 Thessalonians Chapter 2
    "2 Thessalonians 2:1": ["The Coming of the Lord Explained", "Paul explains events before Jesus’ return."],
    "2 Thessalonians 2:3": ["The Man of Lawlessness Revealed", "The rebellion and man of lawlessness must appear first."],
    "2 Thessalonians 2:6": ["Restraining Power", "Something is restraining him until the proper time."],
    "2 Thessalonians 2:8": ["Destruction of the Lawless One", "Jesus will destroy him at His coming."],
    "2 Thessalonians 2:9": ["Satan’s Deception", "The lawless one will use false signs and wonders."],
    "2 Thessalonians 2:13": ["Chosen for Salvation", "God chose believers for salvation through the Spirit."],
    "2 Thessalonians 2:15": ["Stand Firm in the Truth", "Hold firmly to the teachings given."],
    "2 Thessalonians 2:16": ["Prayer for Encouragement", "May Jesus encourage and strengthen you."],

    // 2 Thessalonians Chapter 3
    "2 Thessalonians 3:1": ["Request for Prayer", "Paul asks for prayer for the spread of the gospel."],
    "2 Thessalonians 3:3": ["God’s Faithfulness", "God will strengthen and protect believers."],
    "2 Thessalonians 3:6": ["Warning Against Idleness", "Believers must avoid lazy and undisciplined living."],
    "2 Thessalonians 3:7": ["Paul’s Example of Hard Work", "Paul worked hard to set an example."],
    "2 Thessalonians 3:10": ["Rule About Work", "Anyone unwilling to work should not eat."],
    "2 Thessalonians 3:13": ["Do Not Grow Weary", "Continue doing good."],
    "2 Thessalonians 3:14": ["Discipline for Disobedience", "Warn those who do not obey."],
    "2 Thessalonians 3:16": ["Final Blessing", "May the Lord of peace give peace always."],
    "2 Thessalonians 3:18": ["Closing Greeting", "Paul closes with grace from the Lord Jesus Christ."],

    // 1 Timothy Chapter 1
    "1 Timothy 1:1": ["Greeting to Timothy", "Paul greets Timothy as his true son in the faith."],
    "1 Timothy 1:3": ["Warning Against False Teachers", "Timothy is urged to stop those teaching false doctrines."],
    "1 Timothy 1:5": ["Purpose of the Command", "The goal is love from a pure heart, good conscience, and sincere faith."],
    "1 Timothy 1:8": ["Proper Use of the Law", "The law is good when used correctly."],
    "1 Timothy 1:12": ["Paul’s Gratitude for Mercy", "Paul thanks Christ for showing him mercy despite his past."],
    "1 Timothy 1:15": ["Christ Came to Save Sinners", "Jesus came into the world to save sinners."],
    "1 Timothy 1:18": ["Charge to Timothy", "Timothy is encouraged to fight the good fight of faith."],


    // 1 Timothy Chapter 2
    "1 Timothy 2:1": ["Instruction to Pray for Everyone", "Prayers should be made for all people, including leaders."],
    "1 Timothy 2:3": ["God Desires All to Be Saved", "God wants everyone to come to the knowledge of truth."],
    "1 Timothy 2:5": ["One Mediator Between God and Man", "Jesus Christ is the only mediator."],
    "1 Timothy 2:8": ["Instructions for Men", "Men should pray with holy hands without anger."],
    "1 Timothy 2:9": ["Instructions for Women", "Women should dress modestly and live with good works."],
    "1 Timothy 2:11": ["Quiet Learning and Submission", "Women are encouraged to learn quietly and faithfully."],


    // 1 Timothy Chapter 3
    "1 Timothy 3:1": ["Qualifications for Overseers", "Requirements for those who desire to be church leaders."],
    "1 Timothy 3:8": ["Qualifications for Deacons", "Requirements for those serving as deacons."],
    "1 Timothy 3:14": ["Purpose of Paul’s Instructions", "Paul writes so they will know how to behave in God’s house."],
    "1 Timothy 3:16": ["Mystery of Godliness", "Christ was revealed in flesh and glorified."],


    // 1 Timothy Chapter 4
    "1 Timothy 4:1": ["Warning About Apostasy", "Some will abandon the faith and follow false teachings."],
    "1 Timothy 4:6": ["Be a Good Minister of Christ", "Timothy is encouraged to teach truth faithfully."],
    "1 Timothy 4:8": ["Value of Godliness", "Godliness has value for this life and the life to come."],
    "1 Timothy 4:12": ["Be an Example", "Timothy should be an example in speech, conduct, love, faith, and purity."],
    "1 Timothy 4:13": ["Devotion to Scripture and Teaching", "Focus on reading Scripture and teaching."],
    "1 Timothy 4:16": ["Watch Your Life and Doctrine", "Persevere in faith and teaching."],


    // 1 Timothy Chapter 5
    "1 Timothy 5:1": ["Respect Within the Church", "Treat others with respect as family."],
    "1 Timothy 5:3": ["Care for Widows", "The church should honor and support true widows."],
    "1 Timothy 5:8": ["Responsibility for Family", "Those who do not care for family deny the faith."],
    "1 Timothy 5:17": ["Honor Church Leaders", "Leaders who serve well deserve honor."],
    "1 Timothy 5:19": ["Dealing with Accusations", "Do not accept accusations without witnesses."],
    "1 Timothy 5:22": ["Be Careful in Leadership Appointments", "Do not appoint leaders hastily."],
    "1 Timothy 5:23": ["Personal Advice to Timothy", "Paul gives advice for Timothy’s health."],
    "1 Timothy 5:24": ["Sins and Good Deeds Revealed", "Actions will eventually be revealed."],


    // 1 Timothy Chapter 6
    "1 Timothy 6:1": ["Honor Masters", "Servants should respect their masters."],
    "1 Timothy 6:3": ["Warning Against False Teaching and Pride", "False teachers are proud and cause conflict."],
    "1 Timothy 6:6": ["Godliness with Contentment", "Contentment with godliness is great gain."],
    "1 Timothy 6:9": ["Danger of Loving Money", "Love of money leads to destruction."],
    "1 Timothy 6:11": ["Pursue Righteousness", "Timothy should pursue godly qualities."],
    "1 Timothy 6:12": ["Fight the Good Fight of Faith", "Hold firmly to eternal life."],
    "1 Timothy 6:17": ["Instructions to the Rich", "The rich should trust God and do good."],
    "1 Timothy 6:20": ["Guard What Is Entrusted", "Protect the truth given to you."],


    // 2 Timothy Chapter 1
    "2 Timothy 1:1": ["Greeting to Timothy", "Paul greets Timothy with grace and peace."],
    "2 Timothy 1:3": ["Thanksgiving and Remembrance", "Paul remembers Timothy in prayer."],
    "2 Timothy 1:5": ["Reminder of Timothy’s Faith", "Timothy’s sincere faith is recognized."],
    "2 Timothy 1:6": ["Fan Into Flame God’s Gift", "Timothy is encouraged to use his spiritual gift."],
    "2 Timothy 1:7": ["Spirit of Power, Love, and Self-Control", "God gives courage, not fear."],
    "2 Timothy 1:8": ["Do Not Be Ashamed of the Gospel", "Be willing to suffer for the gospel."],
    "2 Timothy 1:13": ["Hold to Sound Teaching", "Follow correct teaching faithfully."],


    // 2 Timothy Chapter 2
    "2 Timothy 2:1": ["Be Strong in Grace", "Timothy is encouraged to be strong in Christ."],
    "2 Timothy 2:2": ["Teach Faithful People", "Entrust teaching to reliable people."],
    "2 Timothy 2:3": ["Endure Hardship Like a Soldier", "Endure suffering faithfully."],
    "2 Timothy 2:8": ["Remember Jesus Christ", "Keep focus on Christ’s resurrection."],
    "2 Timothy 2:14": ["Avoid Useless Arguments", "Do not engage in pointless debates."],
    "2 Timothy 2:15": ["Approved Worker of God", "Correctly handle the word of truth."],
    "2 Timothy 2:20": ["Vessels for Honor", "Be useful and pure for God’s service."],
    "2 Timothy 2:22": ["Flee Youthful Desires", "Pursue righteousness and peace."],


    // 2 Timothy Chapter 3
    "2 Timothy 3:1": ["Difficult Times in the Last Days", "People will become lovers of self and evil."],
    "2 Timothy 3:10": ["Paul’s Example", "Timothy followed Paul’s teaching and conduct."],
    "2 Timothy 3:12": ["Persecution for Believers", "All who live godly lives will face persecution."],
    "2 Timothy 3:14": ["Continue in the Scriptures", "Remain faithful to what you have learned."],
    "2 Timothy 3:16": ["All Scripture Is God-Breathed", "Scripture is useful for teaching and training."],


    // 2 Timothy Chapter 4
    "2 Timothy 4:1": ["Preach the Word", "Timothy is commanded to preach faithfully."],
    "2 Timothy 4:3": ["People Will Reject Sound Doctrine", "People will follow their own desires."],
    "2 Timothy 4:5": ["Endure Hardship and Fulfill Ministry", "Remain faithful in ministry."],
    "2 Timothy 4:6": ["Paul’s Life Near Completion", "Paul knows his death is near."],
    "2 Timothy 4:7": ["Paul’s Faithful Finish", "He fought the good fight and kept the faith."],
    "2 Timothy 4:8": ["Crown of Righteousness", "A reward awaits faithful believers."],
    "2 Timothy 4:9": ["Personal Requests", "Paul asks Timothy to come soon."],
    "2 Timothy 4:16": ["God’s Faithfulness to Paul", "God stood with Paul and strengthened him."],
    "2 Timothy 4:19": ["Final Greetings", "Paul sends greetings to fellow believers."],
    "2 Timothy 4:22": ["Final Blessing", "Grace be with you."],

    // Titus Chapter 1
    "Titus 1:1": ["Greeting to Titus", "Paul greets Titus, his true son in the faith."],
    "Titus 1:5": ["Purpose of Titus in Crete", "Titus is left in Crete to appoint elders in every town."],
    "Titus 1:6": ["Qualifications for Elders", "Elders must be blameless, faithful, and disciplined."],
    "Titus 1:10": ["Rebuke False Teachers", "Many rebellious people must be silenced."],
    "Titus 1:13": ["Correct Them Sharply", "They must be corrected to remain sound in faith."],
    "Titus 1:15": ["Pure and Corrupt Minds", "The pure see purity, but the corrupt are defiled."],
    "Titus 1:16": ["False Professors of Faith", "They claim to know God but deny Him by actions."],


    // Titus Chapter 2
    "Titus 2:1": ["Teach Sound Doctrine", "Teach what agrees with sound teaching."],
    "Titus 2:2": ["Instructions for Older Men", "They must be self-controlled and strong in faith."],
    "Titus 2:3": ["Instructions for Older Women", "They must live holy lives and teach what is good."],
    "Titus 2:4": ["Instructions for Younger Women", "They should love family and live pure lives."],
    "Titus 2:6": ["Instructions for Young Men", "Young men should be self-controlled."],
    "Titus 2:7": ["Be an Example of Good Works", "Show integrity and seriousness in teaching."],
    "Titus 2:9": ["Instructions for Servants", "Servants must be faithful and trustworthy."],
    "Titus 2:11": ["Grace Teaches Godly Living", "God’s grace teaches believers to live righteously."],
    "Titus 2:13": ["Hope of Christ’s Return", "Believers await the glorious return of Jesus."],
    "Titus 2:14": ["Christ Redeemed and Purified Us", "Jesus gave Himself to make us His people."],
    "Titus 2:15": ["Teach with Authority", "Encourage and correct with authority."],


    // Titus Chapter 3
    "Titus 3:1": ["Be Ready for Good Works", "Believers should obey authorities and do good."],
    "Titus 3:3": ["Reminder of Past Sinfulness", "Believers were once sinful and deceived."],
    "Titus 3:4": ["Salvation Through God’s Mercy", "God saved us through His mercy and grace."],
    "Titus 3:7": ["Heirs of Eternal Life", "Believers are justified and heirs of eternal life."],
    "Titus 3:8": ["Devote to Good Works", "Believers should focus on doing good."],
    "Titus 3:9": ["Avoid Foolish Arguments", "Stay away from useless controversies."],
    "Titus 3:10": ["Warn Divisive People", "Avoid those who cause division."],
    "Titus 3:12": ["Final Instructions", "Paul gives travel and ministry instructions."],
    "Titus 3:15": ["Final Greetings", "Paul closes with greetings and grace."],


    // Philemon Chapter 1
    "Philemon 1:1": ["Greeting to Philemon", "Paul greets Philemon and the church in his house."],
    "Philemon 1:4": ["Thanksgiving for Philemon’s Faith", "Paul thanks God for Philemon’s love and faith."],
    "Philemon 1:8": ["Paul’s Appeal Based on Love", "Paul appeals gently instead of commanding."],
    "Philemon 1:10": ["Appeal for Onesimus", "Paul pleads for Onesimus, his spiritual son."],
    "Philemon 1:12": ["Onesimus Sent Back", "Paul sends Onesimus back to Philemon."],
    "Philemon 1:15": ["From Slave to Brother", "Onesimus is now more than a slave, a beloved brother."],
    "Philemon 1:17": ["Receive Him as You Would Paul", "Philemon is asked to welcome Onesimus."],
    "Philemon 1:18": ["Paul Offers to Repay", "Paul promises to repay any debt."],
    "Philemon 1:20": ["Confidence in Philemon’s Obedience", "Paul trusts Philemon will do even more."],
    "Philemon 1:22": ["Hope to Visit Soon", "Paul hopes to visit after release."],
    "Philemon 1:25": ["Final Blessing", "Grace of the Lord Jesus Christ be with you."],

    // Hebrews Chapter 1
    "Hebrews 1:1": ["God Speaks Through His Son", "God now speaks through His Son, the final revelation."],
    "Hebrews 1:3": ["The Supremacy of the Son", "Jesus reflects God’s glory and sustains all things."],
    "Hebrews 1:4": ["Superior to Angels", "Jesus is greater than the angels."],
    "Hebrews 1:5": ["The Son Is Unique", "God declares Jesus as His Son."],
    "Hebrews 1:6": ["Angels Worship the Son", "All angels must worship Him."],
    "Hebrews 1:8": ["The Son’s Eternal Throne", "Jesus reigns forever with righteousness."],
    "Hebrews 1:10": ["The Son as Creator", "Jesus created heaven and earth."],
    "Hebrews 1:13": ["The Son Exalted at God’s Right Hand", "Jesus sits at God’s right hand."],


    // Hebrews Chapter 2
    "Hebrews 2:1": ["Warning Against Neglecting Salvation", "Believers must not ignore God’s salvation."],
    "Hebrews 2:5": ["Jesus Made Lower Than Angels", "Jesus became human temporarily."],
    "Hebrews 2:9": ["Jesus Suffered for Everyone", "Jesus suffered death for all people."],
    "Hebrews 2:10": ["Jesus the Pioneer of Salvation", "Jesus brings many to glory."],
    "Hebrews 2:14": ["Jesus Defeats Death and the Devil", "Jesus destroyed the devil’s power."],
    "Hebrews 2:17": ["Jesus the Merciful High Priest", "Jesus became human to help humanity."],


    // Hebrews Chapter 3
    "Hebrews 3:1": ["Jesus Greater Than Moses", "Jesus is worthy of greater honor than Moses."],
    "Hebrews 3:6": ["Christ Over God’s House", "Believers are God’s house."],
    "Hebrews 3:7": ["Warning from Israel’s Unbelief", "Do not harden your hearts."],
    "Hebrews 3:12": ["Warning Against Unbelief", "Encourage each other to remain faithful."],
    "Hebrews 3:16": ["Israel’s Failure in the Wilderness", "Unbelief kept them from entering rest."],


    // Hebrews Chapter 4
    "Hebrews 4:1": ["Promise of God’s Rest", "God’s rest is still available."],
    "Hebrews 4:3": ["Entering God’s Rest Through Faith", "Faith allows believers to enter rest."],
    "Hebrews 4:12": ["Power of God’s Word", "God’s word is living and powerful."],
    "Hebrews 4:14": ["Jesus the Great High Priest", "Jesus intercedes for believers."],
    "Hebrews 4:16": ["Approach God with Confidence", "Believers can come boldly to God."],


    // Hebrews Chapter 5
    "Hebrews 5:1": ["Role of High Priests", "High priests represent people before God."],
    "Hebrews 5:5": ["Christ Appointed by God", "Jesus was chosen as High Priest."],
    "Hebrews 5:7": ["Jesus Learned Obedience", "Jesus obeyed through suffering."],
    "Hebrews 5:9": ["Source of Eternal Salvation", "Jesus became the source of salvation."],
    "Hebrews 5:11": ["Warning Against Spiritual Immaturity", "Believers must grow in faith."],


    // Hebrews Chapter 6
    "Hebrews 6:1": ["Call to Spiritual Maturity", "Believers must grow beyond basics."],
    "Hebrews 6:4": ["Warning Against Falling Away", "Falling away brings serious danger."],
    "Hebrews 6:10": ["God Remembers Faithfulness", "God rewards faithful service."],
    "Hebrews 6:13": ["God’s Promise to Abraham", "God’s promise is unchangeable."],
    "Hebrews 6:19": ["Hope as an Anchor", "Hope in Christ is secure."],


    // Hebrews Chapter 7
    "Hebrews 7:1": ["Melchizedek the Priest-King", "Melchizedek represents eternal priesthood."],
    "Hebrews 7:11": ["Need for a New Priesthood", "Jesus brings a better priesthood."],
    "Hebrews 7:15": ["Jesus Like Melchizedek", "Jesus is eternal priest."],
    "Hebrews 7:22": ["Jesus the Guarantee of Better Covenant", "Jesus guarantees a better covenant."],
    "Hebrews 7:25": ["Jesus Intercedes Forever", "Jesus saves completely."],


    // Hebrews Chapter 8
    "Hebrews 8:1": ["Jesus Our High Priest in Heaven", "Jesus serves in the heavenly sanctuary."],
    "Hebrews 8:6": ["Mediator of Better Covenant", "Jesus mediates a better covenant."],
    "Hebrews 8:8": ["Promise of New Covenant", "God promises a new covenant."],
    "Hebrews 8:12": ["Forgiveness in New Covenant", "God forgives and remembers sins no more."],


    // Hebrews Chapter 9
    "Hebrews 9:1": ["Earthly Sanctuary Explained", "Description of tabernacle."],
    "Hebrews 9:11": ["Christ the Perfect High Priest", "Jesus entered heavenly sanctuary."],
    "Hebrews 9:12": ["Christ’s Perfect Sacrifice", "Jesus’ blood brings eternal redemption."],
    "Hebrews 9:15": ["Mediator of New Covenant", "Jesus secures eternal inheritance."],
    "Hebrews 9:27": ["Judgment After Death", "People die once and face judgment."],
    "Hebrews 9:28": ["Christ Will Return Again", "Jesus will return to save believers."],


    // Hebrews Chapter 10
    "Hebrews 10:1": ["Law Cannot Perfect", "Law was only a shadow."],
    "Hebrews 10:10": ["Christ’s Sacrifice Once for All", "Jesus’ sacrifice sanctifies believers."],
    "Hebrews 10:14": ["Perfected Forever", "Jesus perfects believers."],
    "Hebrews 10:19": ["Confidence to Enter God’s Presence", "Believers can approach God freely."],
    "Hebrews 10:23": ["Hold Firm to Hope", "Remain faithful."],
    "Hebrews 10:26": ["Warning Against Willful Sin", "Deliberate sin brings judgment."],
    "Hebrews 10:35": ["Do Not Lose Confidence", "Endurance brings reward."],


    // Hebrews Chapter 11
    "Hebrews 11:1": ["Definition of Faith", "Faith is confidence in unseen things."],
    "Hebrews 11:4": ["Faith of Abel", "Abel offered better sacrifice."],
    "Hebrews 11:5": ["Faith of Enoch", "Enoch pleased God."],
    "Hebrews 11:7": ["Faith of Noah", "Noah obeyed God."],
    "Hebrews 11:8": ["Faith of Abraham", "Abraham trusted God."],
    "Hebrews 11:11": ["Faith of Sarah", "Sarah believed God’s promise."],
    "Hebrews 11:23": ["Faith of Moses", "Moses chose God over Egypt."],
    "Hebrews 11:32": ["Faith of Other Heroes", "Many others lived by faith."],
    "Hebrews 11:39": ["Faith Awaiting Fulfillment", "They awaited God’s promise."],


    // Hebrews Chapter 12
    "Hebrews 12:1": ["Run the Race with Endurance", "Fix eyes on Jesus."],
    "Hebrews 12:3": ["Endure Hardship", "Do not lose heart."],
    "Hebrews 12:5": ["God Disciplines His Children", "Discipline shows God’s love."],
    "Hebrews 12:14": ["Pursue Holiness", "Live in peace and holiness."],
    "Hebrews 12:18": ["Mount Sinai and Mount Zion", "Believers belong to heavenly Zion."],
    "Hebrews 12:25": ["Do Not Reject God", "God’s voice must be obeyed."],
    "Hebrews 12:28": ["Serve God with Reverence", "Worship God acceptably."],


    // Hebrews Chapter 13
    "Hebrews 13:1": ["Continue in Brotherly Love", "Love one another."],
    "Hebrews 13:4": ["Honor Marriage", "Marriage must be respected."],
    "Hebrews 13:5": ["Trust God, Not Money", "God will never leave you."],
    "Hebrews 13:7": ["Remember Leaders", "Follow faithful leaders."],
    "Hebrews 13:8": ["Jesus Never Changes", "Jesus is the same forever."],
    "Hebrews 13:15": ["Offer Praise to God", "Continually praise God."],
    "Hebrews 13:17": ["Obey Leaders", "Submit to spiritual leaders."],
    "Hebrews 13:20": ["Final Blessing", "May God equip you."],
    "Hebrews 13:25": ["Final Grace", "Grace be with all believers."],

    // James Chapter 1
    "James 1:1": ["Greeting to the Twelve Tribes", "James greets the believers scattered among the nations."],
    "James 1:2": ["Joy in Trials", "Trials test faith and produce perseverance."],
    "James 1:5": ["Ask God for Wisdom", "God gives wisdom generously to those who ask in faith."],
    "James 1:9": ["Humility in Rich and Poor", "Both rich and poor should find their identity in God."],
    "James 1:12": ["Blessing for Enduring Trials", "Those who persevere will receive the crown of life."],
    "James 1:13": ["God Does Not Tempt", "Temptation comes from human desires, not God."],
    "James 1:16": ["Every Good Gift from God", "All good and perfect gifts come from God."],
    "James 1:19": ["Listening and Obeying", "Be quick to listen, slow to speak, and slow to anger."],
    "James 1:22": ["Doers of the Word", "Do not only listen, but obey God’s word."],
    "James 1:26": ["True Religion", "True religion includes controlling the tongue and caring for others."],


    // James Chapter 2
    "James 2:1": ["Warning Against Favoritism", "Do not show favoritism based on wealth or status."],
    "James 2:5": ["God Honors the Poor in Faith", "God chooses the poor to be rich in faith."],
    "James 2:8": ["The Royal Law", "Love your neighbor as yourself."],
    "James 2:10": ["Breaking One Law Breaks All", "Failing in one point makes a person guilty of all."],
    "James 2:14": ["Faith Without Works Is Dead", "Faith must be demonstrated by actions."],
    "James 2:18": ["Show Faith by Actions", "Faith and works go together."],
    "James 2:21": ["Example of Abraham", "Abraham’s faith was shown by his actions."],
    "James 2:25": ["Example of Rahab", "Rahab was justified by her actions."],
    "James 2:26": ["Faith Without Works Is Dead", "Faith without works is lifeless."],


    // James Chapter 3
    "James 3:1": ["Warning to Teachers", "Teachers will be judged more strictly."],
    "James 3:3": ["Power of the Tongue", "The tongue is small but powerful."],
    "James 3:5": ["Danger of the Tongue", "The tongue can cause great destruction."],
    "James 3:9": ["Blessing and Cursing", "The tongue should not bless and curse."],
    "James 3:13": ["Wisdom Shown by Good Conduct", "True wisdom is shown through humility."],
    "James 3:17": ["Wisdom from Above", "God’s wisdom is pure, peaceful, and merciful."],


    // James Chapter 4
    "James 4:1": ["Cause of Conflicts", "Conflicts come from selfish desires."],
    "James 4:4": ["Friendship with the World", "Friendship with the world opposes God."],
    "James 4:6": ["God Gives Grace to the Humble", "God resists the proud but gives grace to the humble."],
    "James 4:7": ["Submit to God", "Resist the devil and draw near to God."],
    "James 4:11": ["Do Not Judge Others", "Do not speak against fellow believers."],
    "James 4:13": ["Warning Against Boasting", "Do not boast about future plans."],
    "James 4:17": ["Sin of Ignoring Good", "Knowing good and not doing it is sin."],


    // James Chapter 5
    "James 5:1": ["Warning to the Rich", "Rich oppressors will face judgment."],
    "James 5:7": ["Patience Until the Lord’s Return", "Be patient like a farmer waiting for harvest."],
    "James 5:9": ["Do Not Grumble", "Avoid complaining against one another."],
    "James 5:10": ["Example of the Prophets", "Follow the example of faithful prophets."],
    "James 5:12": ["Warning About Oaths", "Speak truthfully without unnecessary oaths."],
    "James 5:13": ["Power of Prayer", "Pray in trouble and praise in joy."],
    "James 5:14": ["Prayer for the Sick", "Pray and anoint the sick."],
    "James 5:16": ["Confession and Prayer", "Confess sins and pray for healing."],
    "James 5:17": ["Example of Elijah’s Prayer", "Elijah’s prayer had powerful results."],
    "James 5:19": ["Restore Those Who Wander", "Help bring back those who stray from truth."],

    // 1 Peter Chapter 1
    "1 Peter 1:1": ["Greeting to the Chosen Believers", "Peter greets believers chosen by God and scattered."],
    "1 Peter 1:3": ["New Birth into Living Hope", "God gives new birth through Jesus’ resurrection."],
    "1 Peter 1:6": ["Joy Despite Trials", "Trials test faith and refine believers."],
    "1 Peter 1:10": ["Prophets Spoke of This Salvation", "Prophets foretold the grace now revealed."],
    "1 Peter 1:13": ["Call to Holy Living", "Prepare minds and live holy lives."],
    "1 Peter 1:17": ["Live in Reverent Fear", "Live carefully knowing God judges fairly."],
    "1 Peter 1:22": ["Love One Another Deeply", "Love sincerely from a pure heart."],
    "1 Peter 1:23": ["Born Again Through God’s Word", "Believers are born again through eternal word."],


    // 1 Peter Chapter 2
    "1 Peter 2:1": ["Desire Spiritual Growth", "Put away evil and grow spiritually."],
    "1 Peter 2:4": ["The Living Stone", "Jesus is the chosen and precious cornerstone."],
    "1 Peter 2:9": ["Chosen People and Royal Priesthood", "Believers are chosen to declare God’s praises."],
    "1 Peter 2:11": ["Live as God’s Servants", "Avoid sinful desires and live honorably."],
    "1 Peter 2:13": ["Submit to Authorities", "Submit to human authorities for God’s sake."],
    "1 Peter 2:18": ["Submission in Suffering", "Servants should endure suffering patiently."],
    "1 Peter 2:21": ["Christ’s Example of Suffering", "Jesus suffered as an example."],
    "1 Peter 2:24": ["Christ Bore Our Sins", "Jesus died to bring healing and righteousness."],


    // 1 Peter Chapter 3
    "1 Peter 3:1": ["Instructions for Wives", "Wives should live respectfully."],
    "1 Peter 3:7": ["Instructions for Husbands", "Husbands should treat wives with honor."],
    "1 Peter 3:8": ["Call to Unity and Love", "Live in harmony and compassion."],
    "1 Peter 3:13": ["Suffering for Righteousness", "Do not fear suffering for doing good."],
    "1 Peter 3:15": ["Always Be Ready to Answer", "Be prepared to explain your hope."],
    "1 Peter 3:18": ["Christ’s Suffering and Victory", "Christ suffered once for sins."],
    "1 Peter 3:21": ["Meaning of Baptism", "Baptism symbolizes salvation through Christ."],


    // 1 Peter Chapter 4
    "1 Peter 4:1": ["Living for God’s Will", "Believers should live for God, not sinful desires."],
    "1 Peter 4:7": ["Be Alert and Prayerful", "Stay alert and love deeply."],
    "1 Peter 4:9": ["Serve One Another", "Use gifts to serve faithfully."],
    "1 Peter 4:12": ["Rejoice in Suffering", "Do not be surprised by trials."],
    "1 Peter 4:16": ["Suffering as a Christian", "Honor God even in suffering."],
    "1 Peter 4:17": ["Judgment Begins with God’s House", "God judges His people first."],
    "1 Peter 4:19": ["Trust God in Suffering", "Commit yourself to faithful Creator."],


    // 1 Peter Chapter 5
    "1 Peter 5:1": ["Instructions to Elders", "Shepherd God’s people faithfully."],
    "1 Peter 5:5": ["Humility and Submission", "Clothe yourselves with humility."],
    "1 Peter 5:6": ["Humble Yourself Before God", "God will lift you up."],
    "1 Peter 5:7": ["Cast Your Cares on God", "God cares for you."],
    "1 Peter 5:8": ["Be Alert Against the Devil", "The devil seeks to devour believers."],
    "1 Peter 5:10": ["God Will Restore You", "God will strengthen after suffering."],
    "1 Peter 5:12": ["Final Encouragement", "Stand firm in God’s grace."],
    "1 Peter 5:13": ["Final Greetings", "Greetings from fellow believers."],
    "1 Peter 5:14": ["Peace to All Believers", "Peace to all in Christ."],


    // 2 Peter Chapter 1
    "2 Peter 1:1": ["Greeting to Believers", "Peter greets those who share precious faith."],
    "2 Peter 1:3": ["God’s Power Gives Everything Needed", "God provides everything for godly life."],
    "2 Peter 1:5": ["Grow in Christian Character", "Add virtue, knowledge, self-control, and love."],
    "2 Peter 1:10": ["Make Your Calling Sure", "Confirm your calling and election."],
    "2 Peter 1:12": ["Reminder of Truth", "Peter reminds believers of truth."],
    "2 Peter 1:16": ["Eyewitness of Christ’s Glory", "Peter witnessed Jesus’ majesty."],
    "2 Peter 1:19": ["Trustworthy Prophetic Word", "Scripture comes from God."],


    // 2 Peter Chapter 2
    "2 Peter 2:1": ["Warning About False Teachers", "False teachers will secretly introduce heresies."],
    "2 Peter 2:4": ["God Judges the Wicked", "God judged fallen angels and sinners."],
    "2 Peter 2:9": ["God Rescues the Righteous", "God rescues godly people from trials."],
    "2 Peter 2:10": ["Description of False Teachers", "False teachers are arrogant and corrupt."],
    "2 Peter 2:17": ["Empty Promises", "They promise freedom but bring slavery."],
    "2 Peter 2:20": ["Danger of Falling Away", "Returning to sin is worse than before."],
    "2 Peter 2:22": ["Proverbs About Apostasy", "They return to sin like animals."],


    // 2 Peter Chapter 3
    "2 Peter 3:1": ["Reminder of God’s Word", "Peter reminds believers of prophets and apostles."],
    "2 Peter 3:3": ["Scoffers in the Last Days", "People will mock Christ’s return."],
    "2 Peter 3:5": ["God’s Past Judgment by Flood", "God judged the world before."],
    "2 Peter 3:8": ["God’s Timing Is Different", "One day is like a thousand years."],
    "2 Peter 3:9": ["God’s Patience", "God delays to allow repentance."],
    "2 Peter 3:10": ["Day of the Lord Will Come", "The Lord will return suddenly."],
    "2 Peter 3:11": ["Call to Holy Living", "Live holy and godly lives."],
    "2 Peter 3:14": ["Be Found Blameless", "Live in peace and purity."],
    "2 Peter 3:17": ["Guard Against Error", "Be careful not to fall."],
    "2 Peter 3:18": ["Grow in Grace", "Grow in grace and knowledge of Christ."],

    // 1 John Chapter 1
    "1 John 1:1": ["The Word of Life Revealed", "John proclaims Jesus, the eternal life revealed."],
    "1 John 1:3": ["Fellowship with God and Believers", "Believers have fellowship with God and one another."],
    "1 John 1:5": ["God Is Light", "God is light and has no darkness."],
    "1 John 1:6": ["Walk in the Light", "Walking in light brings fellowship and truth."],
    "1 John 1:8": ["Confession of Sin", "Those who confess sins receive forgiveness."],


    // 1 John Chapter 2
    "1 John 2:1": ["Christ Our Advocate", "Jesus is our advocate and atoning sacrifice."],
    "1 John 2:3": ["Obedience Shows We Know God", "Knowing God is shown by obedience."],
    "1 John 2:7": ["Command to Love", "Love one another as God commanded."],
    "1 John 2:12": ["Encouragement to Believers", "John encourages believers at different stages."],
    "1 John 2:15": ["Do Not Love the World", "Do not love worldly things."],
    "1 John 2:18": ["Warning About Antichrists", "Many antichrists have come."],
    "1 John 2:24": ["Remain in Christ", "Continue in Christ’s teaching."],
    "1 John 2:28": ["Be Ready for Christ’s Return", "Remain in Him with confidence."],


    // 1 John Chapter 3
    "1 John 3:1": ["Children of God", "Believers are called children of God."],
    "1 John 3:4": ["Sin and Lawlessness", "Sin is rebellion against God."],
    "1 John 3:7": ["Practice Righteousness", "Those who live righteously belong to God."],
    "1 John 3:11": ["Love One Another", "Love one another as commanded."],
    "1 John 3:16": ["Love Like Christ", "Jesus showed love by laying down His life."],
    "1 John 3:19": ["Assurance Before God", "Believers can have confidence before God."],
    "1 John 3:23": ["God’s Command", "Believe in Jesus and love one another."],


    // 1 John Chapter 4
    "1 John 4:1": ["Test the Spirits", "Test teachings to see if they come from God."],
    "1 John 4:4": ["God Is Greater", "God in believers is greater than the world."],
    "1 John 4:7": ["God Is Love", "Love comes from God."],
    "1 John 4:9": ["God Showed Love Through Christ", "God sent His Son to give life."],
    "1 John 4:13": ["Assurance Through the Spirit", "God gives His Spirit as proof."],
    "1 John 4:16": ["Living in God’s Love", "Those who live in love live in God."],
    "1 John 4:18": ["Perfect Love Casts Out Fear", "God’s love removes fear."],


    // 1 John Chapter 5
    "1 John 5:1": ["Faith in Jesus as the Christ", "Those who believe are born of God."],
    "1 John 5:6": ["Testimony About Jesus", "The Spirit testifies about Jesus."],
    "1 John 5:11": ["Gift of Eternal Life", "God gives eternal life through His Son."],
    "1 John 5:13": ["Assurance of Eternal Life", "Believers can know they have eternal life."],
    "1 John 5:14": ["Confidence in Prayer", "God hears prayers according to His will."],
    "1 John 5:18": ["Protection from Sin", "Believers are protected by God."],
    "1 John 5:20": ["Jesus Is the True God", "Jesus gives understanding and eternal life."],
    "1 John 5:21": ["Final Warning", "Keep away from idols."],


    // 2 John Chapter 1
    "2 John 1:1": ["Greeting to the Chosen Lady", "John greets the chosen lady and her children."],
    "2 John 1:4": ["Walking in Truth", "John rejoices that believers walk in truth."],
    "2 John 1:5": ["Command to Love One Another", "Love one another as commanded."],
    "2 John 1:7": ["Warning Against Deceivers", "Deceivers deny Jesus Christ."],
    "2 John 1:9": ["Remain in Christ’s Teaching", "Those who remain have God."],
    "2 John 1:10": ["Do Not Support False Teachers", "Do not welcome false teachers."],
    "2 John 1:12": ["Hope to Visit", "John hopes to speak face to face."],
    "2 John 1:13": ["Final Greetings", "Greetings from fellow believers."],


    // 3 John Chapter 1
    "3 John 1:1": ["Greeting to Gaius", "John greets beloved Gaius."],
    "3 John 1:2": ["Prayer for Health and Prosperity", "John prays for Gaius’ well-being."],
    "3 John 1:3": ["Joy in Walking in Truth", "John rejoices in Gaius’ faithfulness."],
    "3 John 1:5": ["Faithfulness in Service", "Gaius shows hospitality to believers."],
    "3 John 1:9": ["Warning About Diotrephes", "Diotrephes loves power and rejects authority."],
    "3 John 1:11": ["Encouragement to Do Good", "Follow good, not evil."],
    "3 John 1:12": ["Example of Demetrius", "Demetrius has a good reputation."],
    "3 John 1:13": ["Hope to Visit", "John hopes to see them soon."],
    "3 John 1:15": ["Final Greetings", "Peace and greetings to friends."],

    // Jude Chapter 1
    "Jude 1:1": ["Greeting to the Called and Kept", "Jude greets those called, loved by God, and kept for Jesus Christ."],
    "Jude 1:3": ["Contend for the Faith", "Believers must defend the faith delivered once for all."],
    "Jude 1:4": ["Warning About False Teachers", "Certain people secretly twist grace and deny Jesus."],
    "Jude 1:5": ["Example of Israel’s Unbelief", "God judged those who did not believe."],
    "Jude 1:6": ["Judgment of Fallen Angels", "Angels who sinned are kept for judgment."],
    "Jude 1:7": ["Example of Sodom and Gomorrah", "They suffered judgment for immorality."],
    "Jude 1:8": ["Corruption of False Teachers", "False teachers reject authority and defile themselves."],
    "Jude 1:9": ["Michael and the Devil", "Michael did not accuse but trusted God’s authority."],
    "Jude 1:10": ["Ignorance of False Teachers", "They speak evil of what they do not understand."],
    "Jude 1:11": ["Examples of Cain, Balaam, and Korah", "False teachers follow paths of rebellion."],
    "Jude 1:12": ["Dangerous and Deceptive People", "They are selfish and spiritually empty."],
    "Jude 1:14": ["Prophecy of Enoch", "The Lord will come to judge everyone."],
    "Jude 1:16": ["Complaining and Boasting", "False teachers follow selfish desires."],
    "Jude 1:17": ["Remember the Apostles’ Warnings", "Apostles warned about mockers."],
    "Jude 1:20": ["Build Yourself in Faith", "Pray in the Holy Spirit and remain in God’s love."],
    "Jude 1:22": ["Show Mercy to Others", "Help those who doubt and save others carefully."],
    "Jude 1:24": ["God Keeps Believers Secure", "God is able to keep believers from falling."],
    "Jude 1:25": ["Final Praise to God", "Glory and authority belong to God forever."],

    // Revelation Chapter 1
    "Revelation 1:1": ["The Revelation of Jesus Christ", "God reveals future events through Jesus Christ to His servants."],
    "Revelation 1:4": ["Greeting and Blessing", "Grace and peace from God, the Spirit, and Jesus Christ."],
    "Revelation 1:7": ["Christ Is Coming with the Clouds", "Every eye will see Him when He returns."],
    "Revelation 1:9": ["John’s Vision on Patmos", "John receives the revelation while exiled."],
    "Revelation 1:10": ["Vision of the Son of Man", "John sees Jesus in glory among lampstands."],
    "Revelation 1:17": ["Do Not Fear", "Jesus declares He holds death and Hades’ keys."],


    // Revelation Chapter 2
    "Revelation 2:1": ["Message to Ephesus", "Return to your first love."],
    "Revelation 2:8": ["Message to Smyrna", "Be faithful even unto death."],
    "Revelation 2:12": ["Message to Pergamum", "Repent from false teaching."],
    "Revelation 2:18": ["Message to Thyatira", "Remain faithful and reject corruption."],


    // Revelation Chapter 3
    "Revelation 3:1": ["Message to Sardis", "Wake up and strengthen what remains."],
    "Revelation 3:7": ["Message to Philadelphia", "Jesus opens doors no one can shut."],
    "Revelation 3:14": ["Message to Laodicea", "Do not be lukewarm but zealous."],
    "Revelation 3:20": ["Jesus Stands at the Door", "Jesus invites believers to fellowship."],


    // Revelation Chapter 4
    "Revelation 4:1": ["Vision of Heaven’s Throne", "John sees God’s throne in heaven."],
    "Revelation 4:4": ["Twenty-Four Elders", "Elders worship around God’s throne."],
    "Revelation 4:6": ["Four Living Creatures", "Creatures continually worship God."],
    "Revelation 4:8": ["Holy, Holy, Holy", "God is praised as eternal and holy."],


    // Revelation Chapter 5
    "Revelation 5:1": ["The Scroll with Seven Seals", "No one is worthy to open it."],
    "Revelation 5:5": ["The Lion and the Lamb", "Jesus alone is worthy."],
    "Revelation 5:6": ["The Lamb Takes the Scroll", "Jesus receives authority."],
    "Revelation 5:9": ["Worship of the Lamb", "Jesus redeemed people by His blood."],


    // Revelation Chapter 6
    "Revelation 6:1": ["First Seal – White Horse", "Conquest begins."],
    "Revelation 6:3": ["Second Seal – Red Horse", "War spreads."],
    "Revelation 6:5": ["Third Seal – Black Horse", "Famine occurs."],
    "Revelation 6:7": ["Fourth Seal – Pale Horse", "Death spreads."],
    "Revelation 6:9": ["Fifth Seal – Martyrs Cry Out", "Martyrs seek justice."],
    "Revelation 6:12": ["Sixth Seal – Cosmic Disturbances", "Earthquake and heavenly signs."],


    // Revelation Chapter 7
    "Revelation 7:1": ["Sealing of 144,000", "God seals His servants."],
    "Revelation 7:9": ["Great Multitude in Heaven", "People worship God and the Lamb."],
    "Revelation 7:14": ["Victory Through the Lamb", "They are washed in His blood."],


    // Revelation Chapter 8
    "Revelation 8:1": ["Seventh Seal Opened", "Silence in heaven."],
    "Revelation 8:6": ["First Four Trumpets", "Judgments affect earth and sky."],


    // Revelation Chapter 9
    "Revelation 9:1": ["Fifth Trumpet – Locusts", "Torment from the abyss."],
    "Revelation 9:13": ["Sixth Trumpet – Army Released", "Mass destruction occurs."],
    "Revelation 9:20": ["Unrepentant Humanity", "People still refuse to repent."],


    // Revelation Chapter 10
    "Revelation 10:1": ["The Mighty Angel and Little Scroll", "John receives a small scroll."],
    "Revelation 10:9": ["John Eats the Scroll", "Sweet in mouth, bitter in stomach."],
    "Revelation 10:11": ["Command to Prophesy Again", "John must continue prophesying."],


    // Revelation Chapter 11
    "Revelation 11:1": ["Measuring the Temple", "God protects His temple."],
    "Revelation 11:3": ["Two Witnesses", "They prophesy with power."],
    "Revelation 11:7": ["Death and Resurrection of Witnesses", "They are killed and raised."],
    "Revelation 11:15": ["Seventh Trumpet", "Christ’s kingdom is proclaimed."],


    // Revelation Chapter 12
    "Revelation 12:1": ["Woman and the Dragon", "Conflict between God’s people and Satan."],
    "Revelation 12:7": ["War in Heaven", "Satan is cast down."],
    "Revelation 12:11": ["Victory Through the Lamb", "Believers overcome Satan."],


    // Revelation Chapter 13
    "Revelation 13:1": ["The Beast from the Sea", "World ruler opposes God."],
    "Revelation 13:11": ["The Beast from the Earth", "False prophet deceives people."],
    "Revelation 13:16": ["Mark of the Beast", "People receive the mark."],


    // Revelation Chapter 14
    "Revelation 14:1": ["The Lamb and 144,000", "Faithful stand with Jesus."],
    "Revelation 14:6": ["Three Angels’ Messages", "Judgment warnings given."],
    "Revelation 14:14": ["Harvest of the Earth", "Earth is harvested for judgment."],


    // Revelation Chapter 15
    "Revelation 15:1": ["Seven Angels with Plagues", "Final judgments prepared."],
    "Revelation 15:3": ["Song of Moses and the Lamb", "God is praised for justice."],


    // Revelation Chapter 16
    "Revelation 16:1": ["Seven Bowls of Wrath", "God’s wrath poured on earth."],
    "Revelation 16:12": ["Preparation for Armageddon", "Kings gather for battle."],
    "Revelation 16:17": ["Final Bowl – Earthquake", "Massive destruction occurs."],


    // Revelation Chapter 17
    "Revelation 17:1": ["The Great Prostitute", "Symbol of corrupt world system."],
    "Revelation 17:5": ["Babylon the Great", "Source of corruption."],
    "Revelation 17:14": ["Victory of the Lamb", "Jesus defeats His enemies."],


    // Revelation Chapter 18
    "Revelation 18:1": ["Fall of Babylon Announced", "Babylon is destroyed."],
    "Revelation 18:4": ["Call to Leave Babylon", "Believers must separate from sin."],
    "Revelation 18:9": ["Mourning Over Babylon", "World mourns Babylon’s fall."],


    // Revelation Chapter 19
    "Revelation 19:1": ["Rejoicing in Heaven", "Heaven celebrates God’s judgment."],
    "Revelation 19:7": ["Marriage of the Lamb", "Christ and His bride united."],
    "Revelation 19:11": ["Christ the Victorious Rider", "Jesus returns in power."],
    "Revelation 19:19": ["Defeat of the Beast", "Beast and false prophet destroyed."],


    // Revelation Chapter 20
    "Revelation 20:1": ["Satan Bound", "Satan is imprisoned."],
    "Revelation 20:4": ["Millennial Reign", "Christ reigns with believers."],
    "Revelation 20:7": ["Final Defeat of Satan", "Satan destroyed forever."],
    "Revelation 20:11": ["Final Judgment", "Dead judged before God."],


    // Revelation Chapter 21
    "Revelation 21:1": ["New Heaven and New Earth", "God creates new creation."],
    "Revelation 21:3": ["God Dwells with His People", "God lives among believers."],
    "Revelation 21:9": ["The New Jerusalem", "Holy city described."],
    "Revelation 21:22": ["God and the Lamb Are the Temple", "God’s presence fills the city."],


    // Revelation Chapter 22
    "Revelation 22:1": ["River of Life", "Life flows from God’s throne."],
    "Revelation 22:6": ["Jesus Is Coming Soon", "Promise of Christ’s return."],
    "Revelation 22:12": ["Reward with Christ’s Return", "Jesus brings reward."],
    "Revelation 22:16": ["Jesus the Bright Morning Star", "Jesus declares His identity."],
    "Revelation 22:17": ["Invitation to Eternal Life", "All invited to receive life."],
    "Revelation 22:20": ["Final Promise", "Jesus promises to come soon."],
    "Revelation 22:21": ["Final Blessing", "Grace of Jesus with believers."],

    // Add more headers as needed
};

// Helper function to get header for a specific verse
function getVerseHeader(bookName, chapter, verse) {
    // Normalize book name: Convert "I Samuel" → "1 Samuel", "II Kings" → "2 Kings", etc.
    const normalizedBookName = bookName
        .replace(/^I\s+/, '1 ')
        .replace(/^II\s+/, '2 ')
        .replace(/^III\s+/, '3 ');

    const key = `${normalizedBookName} ${chapter}:${verse}`;
    return verseHeaders[key] || null;
}
