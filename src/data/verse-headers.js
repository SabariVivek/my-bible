// Verse headers/section titles that appear before specific verses
// Format: "Book Chapter:Verse": "Header Title"
const verseHeaders = {
    // ===========================
    // OLD TESTAMENT
    // ===========================
    
    // Genesis Chapter 1
    "Genesis 1:1": "The Creation of the Heavens and the Earth",
    "Genesis 1:3": "Day 1 — Light",
    "Genesis 1:6": "Day 2 — Sky and Waters",
    "Genesis 1:9": "Day 3 — Land, Seas, and Vegetation",
    "Genesis 1:14": "Day 4 — Sun, Moon, and Stars",
    "Genesis 1:20": "Day 5 — Sea Creatures and Birds",
    "Genesis 1:24": "Day 6 — Land Animals and Mankind",
    "Genesis 1:26": "Man Created in God's Image",
    "Genesis 1:31": "God Saw All He Made Was Very Good",
    
    // Genesis Chapter 2
    "Genesis 2:1": "Day 7 — God Rested",
    "Genesis 2:4": "The Garden of Eden",
    "Genesis 2:7": "The LORD God Forms Man",
    "Genesis 2:15": "Man Placed in the Garden",
    "Genesis 2:18": "Creation of Woman",
    "Genesis 2:23": "This Is Now Bone of My Bones",
    "Genesis 2:25": "They Were Both Naked and Not Ashamed",
    
    // Genesis Chapter 3
    "Genesis 3:1": "The Temptation and Fall",
    "Genesis 3:6": "The First Sin",
    "Genesis 3:8": "God Confronts Adam and Eve",
    "Genesis 3:14": "Curses Pronounced",
    "Genesis 3:15": "Promise of the Seed",
    "Genesis 3:20": "Adam Names His Wife Eve",
    "Genesis 3:22": "Expelled from Eden",
    
    // Genesis Chapter 4
    "Genesis 4:1": "Cain and Abel",
    "Genesis 4:8": "Cain Murders Abel",
    "Genesis 4:9": "Am I My Brother's Keeper?",
    "Genesis 4:13": "Cain's Punishment",
    "Genesis 4:17": "The Descendants of Cain",
    "Genesis 4:25": "Seth Is Born",
    
    // Genesis Chapter 5
    "Genesis 5:1": "The Genealogy from Adam to Noah",
    "Genesis 5:21": "Enoch Walked with God",
    "Genesis 5:28": "The Birth of Noah",
    
    // Genesis Chapter 6
    "Genesis 6:1": "Wickedness on Earth",
    "Genesis 6:5": "The LORD's Grief Over Man's Sin",
    "Genesis 6:8": "Noah Found Favor",
    "Genesis 6:9": "Noah's Righteousness",
    "Genesis 6:13": "God Commands Noah to Build the Ark",
    
    // Genesis Chapter 7
    "Genesis 7:1": "Entering the Ark",
    "Genesis 7:6": "The Flood Begins",
    "Genesis 7:11": "The Waters Prevail",
    "Genesis 7:17": "The Flood Covers the Earth",
    
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
    "Matthew 1:1": "The Record of Jesus Christ's Genealogy",
    "Matthew 1:2": "The Line from Abraham to David",
    "Matthew 1:7": "The Line from David to the Babylonian Exile",
    "Matthew 1:12": "The Line from the Exile to Jesus Christ",
    "Matthew 1:17": "Summary of the Three Generations",
    "Matthew 1:18": "The Birth of Jesus Christ Begins",
    "Matthew 1:19": "Joseph's Dilemma and His Character",
    "Matthew 1:20": "The Angel's Message: The Child Will Save His People",
    "Matthew 1:22": "Isaiah's Prophecy Fulfilled: Emmanuel",
    "Matthew 1:24": "Joseph Obeys and Names the Child Jesus",
    
    // Matthew Chapter 2
    "Matthew 2:1": "Wise Men Search for the Newborn King",
    "Matthew 2:3": "Herod Troubled & Prophecy of Bethlehem",
    "Matthew 2:7": "Herod's Secret Meeting with the Wise Men",
    "Matthew 2:9": "The Star Leads Them to Jesus — Worship & Gifts",
    "Matthew 2:12": "Warning in a Dream",
    "Matthew 2:13": "Flight to Egypt & Prophecy Fulfilled",
    "Matthew 2:16": "Herod's Massacre of the Children",
    "Matthew 2:19": "Return from Egypt & Settlement in Nazareth",
    
    // Matthew Chapter 3
    "Matthew 3:1": "John the Baptist Begins His Ministry",
    "Matthew 3:3": "Isaiah's Prophecy About John",
    "Matthew 3:4": "John's Appearance & Baptizing Ministry",
    "Matthew 3:7": "John Confronts Religious Leaders",
    "Matthew 3:11": "The Mighty One Who Will Come",
    "Matthew 3:13": "Jesus Comes to Be Baptized",
    "Matthew 3:16": "The Father's Voice & Jesus' Anointing",
    
    // Matthew Chapter 4
    "Matthew 4:1": "Jesus Led into the Wilderness",
    "Matthew 4:3": "First Temptation — Stones to Bread",
    "Matthew 4:5": "Second Temptation — Jump from the Temple",
    "Matthew 4:8": "Third Temptation — Worship for Kingdoms",
    "Matthew 4:12": "Jesus Begins His Ministry",
    "Matthew 4:18": "Calling of the First Disciples",
    "Matthew 4:23": "Teaching, Healing, and Growing Crowds",
    
    // Matthew Chapter 5
    "Matthew 5:1": "Jesus Begins to Teach",
    "Matthew 5:3": "The Beatitudes",
    "Matthew 5:13": "Salt of the Earth",
    "Matthew 5:14": "Light of the World",
    "Matthew 5:17": "Jesus Fulfills the Law",
    "Matthew 5:21": "Teaching on Anger",
    "Matthew 5:27": "Teaching on Adultery",
    "Matthew 5:31": "Teaching on Divorce",
    "Matthew 5:33": "Teaching on Oaths",
    "Matthew 5:38": "Teaching on Retaliation",
    "Matthew 5:43": "Teaching on Loving Enemies",
    
    // Matthew Chapter 6
    "Matthew 6:1": "Giving in Secret",
    "Matthew 6:5": "True Prayer and Sincerity",
    "Matthew 6:9": "The Lord's Prayer",
    "Matthew 6:14": "Forgiveness",
    "Matthew 6:16": "Fasting in Secret",
    "Matthew 6:19": "Treasure in Heaven",
    "Matthew 6:22": "The Lamp of the Body",
    "Matthew 6:24": "No One Can Serve Two Masters",
    "Matthew 6:25": "Do Not Worry — God Provides",
    
    // Matthew Chapter 7
    "Matthew 7:1": "Do Not Judge Hypocritically",
    "Matthew 7:6": "Do Not Give What Is Holy to Dogs",
    "Matthew 7:7": "Ask, Seek, Knock",
    "Matthew 7:12": "The Golden Rule",
    "Matthew 7:13": "Narrow and Wide Gates",
    "Matthew 7:15": "False Prophets Known by Fruit",
    "Matthew 7:21": "Not Everyone Who Says 'Lord'",
    "Matthew 7:24": "Wise and Foolish Builders",
    "Matthew 7:28": "Crowds Amazed at His Authority",
    
    // Matthew Chapter 8
    "Matthew 8:1": "Healing a Leper",
    "Matthew 8:5": "Healing the Centurion's Servant",
    "Matthew 8:14": "Healing Peter's Mother-in-Law",
    "Matthew 8:18": "The Cost of Discipleship",
    "Matthew 8:23": "Jesus Calms the Storm",
    "Matthew 8:28": "Demons Driven into Pigs",
    
    // Matthew Chapter 9
    "Matthew 9:1": "Healing the Paralytic",
    "Matthew 9:9": "Calling of Matthew",
    "Matthew 9:14": "Question About Fasting",
    "Matthew 9:18": "Healing the Woman & Raising the Girl",
    "Matthew 9:27": "Two Blind Men Healed",
    "Matthew 9:32": "Mute Demon Cast Out",
    "Matthew 9:35": "The Harvest Is Plentiful",
    
    // Matthew Chapter 10
    "Matthew 10:1": "The Twelve Apostles Listed",
    "Matthew 10:5": "Instructions for Their Mission",
    "Matthew 10:16": "Warnings of Persecution",
    "Matthew 10:24": "Fear God, Not Men",
    "Matthew 10:32": "Confessing Christ & Taking the Cross",
    "Matthew 10:40": "Rewards for Receiving Disciples",
    
    // Matthew Chapter 11
    "Matthew 11:1": "Jesus Answers John's Question",
    "Matthew 11:7": "Jesus' Testimony About John",
    "Matthew 11:16": "This Generation's Unbelief",
    "Matthew 11:20": "Woes on Unrepentant Cities",
    "Matthew 11:25": "Jesus Reveals the Father",
    "Matthew 11:28": "Come to Me — My Yoke Is Easy",
    
    // Matthew Chapter 12
    "Matthew 12:1": "Lord of the Sabbath",
    "Matthew 12:9": "Healing the Withered Hand",
    "Matthew 12:15": "Gentleness of God's Servant",
    "Matthew 12:22": "Blasphemy Against the Spirit",
    "Matthew 12:33": "Tree and Its Fruit",
    "Matthew 12:38": "The Sign of Jonah",
    "Matthew 12:43": "Return of an Unclean Spirit",
    "Matthew 12:46": "Jesus' True Family",
    
    // Matthew Chapter 13
    "Matthew 13:1": "Parable of the Sower",
    "Matthew 13:10": "Purpose of Parables",
    "Matthew 13:18": "Explanation of the Sower",
    "Matthew 13:24": "Parable of the Tares",
    "Matthew 13:31": "Mustard Seed & Leaven",
    "Matthew 13:34": "Prophecy About Parables",
    "Matthew 13:36": "Explanation of the Tares",
    "Matthew 13:44": "Hidden Treasure",
    "Matthew 13:45": "Pearl of Great Price",
    "Matthew 13:47": "Parable of the Net",
    "Matthew 13:51": "Scribes Trained for the Kingdom",
    "Matthew 13:53": "Rejection at Nazareth",
    
    // Matthew Chapter 14
    "Matthew 14:1": "Death of John the Baptist",
    "Matthew 14:13": "Feeding the Five Thousand",
    "Matthew 14:22": "Jesus Walks on Water",
    "Matthew 14:34": "Healings at Gennesaret",
    
    // Matthew Chapter 15
    "Matthew 15:1": "Tradition vs God's Commandments",
    "Matthew 15:10": "What Defiles a Person",
    "Matthew 15:21": "Faith of the Canaanite Woman",
    "Matthew 15:29": "Healing Many",
    "Matthew 15:32": "Feeding the Four Thousand",
    
    // Matthew Chapter 16
    "Matthew 16:1": "Demand for a Sign",
    "Matthew 16:5": "Leaven of the Pharisees",
    "Matthew 16:13": "Peter's Confession",
    "Matthew 16:21": "Jesus Predicts His Death",
    "Matthew 16:24": "Take Up Your Cross",
    
    // Matthew Chapter 17
    "Matthew 17:1": "The Transfiguration",
    "Matthew 17:14": "Healing the Demon-Possessed Boy",
    "Matthew 17:22": "Second Prediction of His Death",
    "Matthew 17:24": "The Temple Tax",
    
    // Matthew Chapter 18
    "Matthew 18:1": "Greatest in the Kingdom",
    "Matthew 18:6": "Woes Against Stumbling",
    "Matthew 18:10": "The Lost Sheep",
    "Matthew 18:15": "Correcting a Brother",
    "Matthew 18:21": "Parable of the Unforgiving Servant",
    
    // Matthew Chapter 19
    "Matthew 19:1": "Teaching on Marriage and Divorce",
    "Matthew 19:13": "Jesus Blesses Children",
    "Matthew 19:16": "The Rich Young Ruler",
    "Matthew 19:23": "The Difficulty of Riches",
    
    // Matthew Chapter 20
    "Matthew 20:1": "Workers in the Vineyard",
    "Matthew 20:17": "Prediction of His Death",
    "Matthew 20:20": "Request of James and John's Mother",
    "Matthew 20:29": "Two Blind Men Healed",
    
    // Matthew Chapter 21
    "Matthew 21:1": "Triumphal Entry",
    "Matthew 21:12": "Cleansing the Temple",
    "Matthew 21:18": "Cursing the Fig Tree",
    "Matthew 21:23": "Jesus' Authority Questioned",
    "Matthew 21:28": "Parable of the Two Sons",
    "Matthew 21:33": "Parable of the Tenants",
    
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
    "Mark 1:1": "The Beginning of the Gospel of Jesus Christ",
    "Mark 1:2": "John the Baptist Prepares the Way",
    "Mark 1:9": "Baptism of Jesus",
    "Mark 1:12": "Temptation in the Wilderness",
    "Mark 1:14": "Calling of the First Disciples",
    "Mark 1:21": "Jesus Casts Out an Unclean Spirit",
    "Mark 1:29": "Healing Peter's Mother-in-Law and Many Others",
    "Mark 1:35": "Jesus Prays and Preaches in Galilee",
    "Mark 1:40": "Healing a Leper",
    
    // Mark Chapter 2
    "Mark 2:1": "Healing the Paralytic Through the Roof",
    "Mark 2:13": "Calling of Levi and Question About Eating with Sinners",
    "Mark 2:18": "Question About Fasting",
    "Mark 2:23": "Lord of the Sabbath",
    
    // Mark Chapter 3
    "Mark 3:1": "Healing the Man with the Withered Hand",
    "Mark 3:7": "Great Crowds Follow Jesus",
    "Mark 3:13": "Appointment of the Twelve Apostles",
    "Mark 3:20": "Accusation of Working by Beelzebul",
    "Mark 3:31": "Jesus' True Family",
    
    // Mark Chapter 4
    "Mark 4:1": "Parable of the Sower",
    "Mark 4:10": "Purpose of Parables and Explanation of the Sower",
    "Mark 4:21": "Lamp on a Stand",
    "Mark 4:26": "Parable of the Growing Seed",
    "Mark 4:30": "Parable of the Mustard Seed",
    "Mark 4:33": "Jesus Teaches with Parables",
    "Mark 4:35": "Jesus Calms the Storm",
    
    // Mark Chapter 5
    "Mark 5:1": "Healing the Demon-Possessed Man (Legion)",
    "Mark 5:21": "Healing the Woman with the Issue of Blood",
    "Mark 5:35": "Raising Jairus' Daughter",
    
    // Mark Chapter 6
    "Mark 6:1": "Rejection at Nazareth",
    "Mark 6:7": "The Twelve Sent Out",
    "Mark 6:14": "Death of John the Baptist",
    "Mark 6:30": "Feeding the Five Thousand",
    "Mark 6:45": "Jesus Walks on Water",
    "Mark 6:53": "Healings at Gennesaret",
    
    // Mark Chapter 7
    "Mark 7:1": "Traditions of Men vs God's Commandments",
    "Mark 7:14": "What Defiles a Person",
    "Mark 7:24": "Faith of the Syrophoenician Woman",
    "Mark 7:31": "Healing a Deaf and Mute Man",
    
    // Mark Chapter 8
    "Mark 8:1": "Feeding the Four Thousand",
    "Mark 8:11": "Pharisees Demand a Sign",
    "Mark 8:14": "Warning About the Leaven of Pharisees and Herod",
    "Mark 8:22": "Healing the Blind Man at Bethsaida",
    "Mark 8:27": "Peter's Confession of Christ",
    "Mark 8:31": "Jesus Predicts His Death",
    "Mark 8:34": "Take Up Your Cross",
    
    // Mark Chapter 9
    "Mark 9:1": "Some Will Not Taste Death Until They See the Kingdom",
    "Mark 9:2": "The Transfiguration",
    "Mark 9:14": "Healing the Demon-Possessed Boy",
    "Mark 9:30": "Jesus Predicts His Death Again",
    "Mark 9:33": "Who Is Greatest?",
    "Mark 9:38": "Whoever Is Not Against Us Is for Us",
    "Mark 9:42": "Warnings Against Causing Others to Stumble",
    
    // Mark Chapter 10
    "Mark 10:1": "Teaching on Divorce",
    "Mark 10:13": "Jesus Blesses Little Children",
    "Mark 10:17": "Rich Young Ruler",
    "Mark 10:32": "Jesus Predicts His Death a Third Time",
    "Mark 10:35": "Request of James and John",
    "Mark 10:46": "Healing Blind Bartimaeus",
    
    // Mark Chapter 11
    "Mark 11:1": "Triumphal Entry into Jerusalem",
    "Mark 11:12": "Cursing the Fig Tree",
    "Mark 11:15": "Cleansing the Temple",
    "Mark 11:20": "Lesson from the Withered Fig Tree",
    "Mark 11:27": "Question About Jesus' Authority",
    
    // Mark Chapter 12
    "Mark 12:1": "Parable of the Wicked Tenants",
    "Mark 12:13": "Taxes to Caesar",
    "Mark 12:18": "Question About the Resurrection",
    "Mark 12:28": "The Greatest Commandment",
    "Mark 12:35": "David Calls the Messiah Lord",
    "Mark 12:38": "Warning About the Scribes",
    "Mark 12:41": "The Widow's Offering",
    
    // Mark Chapter 13
    "Mark 13:1": "Prediction of the Temple's Destruction",
    "Mark 13:3": "Signs of the End",
    "Mark 13:14": "The Great Tribulation",
    "Mark 13:24": "The Coming of the Son of Man",
    "Mark 13:28": "The Lesson of the Fig Tree",
    "Mark 13:32": "Stay Awake — No One Knows the Hour",
    
    // Mark Chapter 14
    "Mark 14:1": "Plot to Kill Jesus",
    "Mark 14:3": "Anointing at Bethany",
    "Mark 14:10": "Judas Agrees to Betray Jesus",
    "Mark 14:12": "The Last Supper",
    "Mark 14:22": "Institution of the Lord's Supper",
    "Mark 14:27": "Prediction of Peter's Denial",
    "Mark 14:32": "Gethsemane Prayer",
    "Mark 14:43": "Arrest of Jesus",
    "Mark 14:53": "Jesus Before the Sanhedrin",
    "Mark 14:66": "Peter Denies Jesus",
    
    // Mark Chapter 15
    "Mark 15:1": "Jesus Before Pilate",
    "Mark 15:16": "Mocked by the Soldiers",
    "Mark 15:21": "Crucifixion",
    "Mark 15:33": "Death of Jesus",
    "Mark 15:42": "Burial of Jesus",
    
    // Mark Chapter 16
    "Mark 16:1": "The Resurrection",
    "Mark 16:9": "Appearance to Mary Magdalene",
    "Mark 16:12": "Appearance to Two on the Road",
    "Mark 16:14": "Jesus Appears to the Eleven",
    "Mark 16:15": "The Great Commission in Mark",
    "Mark 16:19": "Ascension of Jesus",
    
    // John Chapter 1
    "John 1:1": "The Word in the Beginning",
    "John 1:6": "John the Baptist's Witness",
    "John 1:14": "The Word Became Flesh",
    "John 1:19": "John Denies Being the Messiah",
    "John 1:29": "Behold the Lamb of God",
    "John 1:35": "First Disciples Follow Jesus",
    "John 1:43": "Calling of Philip and Nathanael",
    
    // John Chapter 2
    "John 2:1": "Wedding at Cana — Water to Wine",
    "John 2:13": "Cleansing of the Temple",
    "John 2:23": "Jesus Knows What Is in Man",
    
    // John Chapter 3
    "John 3:1": "Jesus and Nicodemus",
    "John 3:16": "God's Love for the World",
    "John 3:22": "John the Baptist Exalts Christ",
    "John 3:31": "He Who Comes from Above",
    
    // John Chapter 4
    "John 4:1": "Jesus Travels Through Samaria",
    "John 4:7": "Conversation with the Samaritan Woman",
    "John 4:27": "The Disciples Return — Fields Are White",
    "John 4:39": "Samaritans Believe",
    "John 4:43": "Return to Galilee",
    "John 4:46": "Healing the Official's Son",
    
    // John Chapter 5
    "John 5:1": "Healing at the Pool of Bethesda",
    "John 5:16": "Authority of the Son",
    "John 5:24": "The Son Gives Life",
    "John 5:31": "Witnesses to Jesus",
    
    // John Chapter 6
    "John 6:1": "Feeding the Five Thousand",
    "John 6:16": "Jesus Walks on Water",
    "John 6:22": "The Bread of Life",
    "John 6:41": "Jews Complain About Him",
    "John 6:60": "Many Disciples Turn Back",
    
    // John Chapter 7
    "John 7:1": "Jesus Goes Secretly to the Feast",
    "John 7:14": "Teaching in the Temple",
    "John 7:25": "Is This the Christ?",
    "John 7:32": "Officers Sent to Arrest Jesus",
    "John 7:37": "Rivers of Living Water",
    "John 7:40": "Division Among the People",
    "John 7:53": "Everyone Goes Home",
    
    // John Chapter 8
    "John 8:1": "Woman Caught in Adultery",
    "John 8:12": "I Am the Light of the World",
    "John 8:21": "Where I Go You Cannot Come",
    "John 8:31": "Truth Will Set You Free",
    "John 8:48": "Before Abraham Was, I AM",
    
    // John Chapter 9
    "John 9:1": "Healing of the Man Born Blind",
    "John 9:13": "Investigation by the Pharisees",
    "John 9:35": "Spiritual Blindness",
    
    // John Chapter 10
    "John 10:1": "The Sheep and the Shepherd",
    "John 10:7": "I Am the Good Shepherd",
    "John 10:22": "At the Feast of Dedication",
    "John 10:31": "They Try to Stone Jesus Again",
    
    // John Chapter 11
    "John 11:1": "Death of Lazarus",
    "John 11:17": "Jesus Arrives in Bethany",
    "John 11:38": "Lazarus Raised from the Dead",
    "John 11:45": "Plot to Kill Jesus",
    
    // John Chapter 12
    "John 12:1": "Mary Anoints Jesus",
    "John 12:12": "Triumphal Entry",
    "John 12:20": "Jesus Predicts His Death",
    "John 12:37": "Unbelief of the People",
    "John 12:44": "Jesus' Final Public Appeal",
    
    // John Chapter 13
    "John 13:1": "Jesus Washes the Disciples' Feet",
    "John 13:18": "Prediction of Judas' Betrayal",
    "John 13:31": "A New Commandment",
    "John 13:36": "Prediction of Peter's Denial",
    
    // John Chapter 14
    "John 14:1": "I Am the Way, the Truth, and the Life",
    "John 14:8": "He Who Has Seen Me Has Seen the Father",
    "John 14:15": "Promise of the Holy Spirit",
    "John 14:19": "Because I Live, You Will Live",
    "John 14:25": "Peace I Leave with You",
    
    // John Chapter 15
    "John 15:1": "I Am the True Vine",
    "John 15:18": "World's Hatred of Disciples",
    "John 15:26": "The Spirit Will Testify",
    
    // John Chapter 16
    "John 16:1": "Work of the Holy Spirit",
    "John 16:16": "Your Grief Will Turn to Joy",
    "John 16:25": "Take Heart — I Have Overcome the World",
    
    // John Chapter 17
    "John 17:1": "Glorify Your Son",
    "John 17:6": "Jesus Prays for His Disciples",
    "John 17:20": "Jesus Prays for All Believers",
    
    // John Chapter 18
    "John 18:1": "Betrayal and Arrest",
    "John 18:13": "Jesus Before Annas",
    "John 18:25": "Peter Denies Jesus",
    "John 18:28": "Jesus Before Pilate",
    
    // John Chapter 19
    "John 19:1": "Jesus Presented to the People",
    "John 19:17": "Crucifixion",
    "John 19:28": "It Is Finished",
    "John 19:31": "Side Pierced",
    "John 19:38": "Burial",
    
    // John Chapter 20
    "John 20:1": "The Empty Tomb",
    "John 20:11": "Jesus Appears to Mary Magdalene",
    "John 20:19": "Jesus Appears to the Disciples",
    "John 20:24": "Thomas Believes",
    "John 20:30": "Purpose of This Gospel",
    
    // John Chapter 21
    "John 21:1": "Jesus Appears at the Sea of Galilee",
    "John 21:15": "Jesus Restores Peter",
    "John 21:20": "Final Testimony and Conclusion",
    
    // Luke Chapter 1
    "Luke 1:1": "Purpose of Luke's Gospel",
    "Luke 1:5": "Announcement of John the Baptist's Birth",
    "Luke 1:26": "Announcement of Jesus' Birth",
    "Luke 1:39": "Mary Visits Elizabeth",
    "Luke 1:46": "Mary's Song (The Magnificat)",
    "Luke 1:57": "Birth of John the Baptist",
    "Luke 1:67": "Zechariah's Prophecy (Benedictus)",
    "Luke 1:80": "John Grows and Becomes Strong",
    
    // Luke Chapter 2
    "Luke 2:1": "Birth of Jesus",
    "Luke 2:8": "Angels Announce to the Shepherds",
    "Luke 2:21": "Jesus Circumcised and Named",
    "Luke 2:22": "Presentation at the Temple",
    "Luke 2:25": "Simeon's Prophecy",
    "Luke 2:36": "Anna the Prophetess",
    "Luke 2:39": "Return to Nazareth",
    "Luke 2:41": "Boy Jesus in the Temple",
    "Luke 2:51": "Jesus Grows in Wisdom and Favor",
    
    // Luke Chapter 3
    "Luke 3:1": "John the Baptist's Ministry Begins",
    "Luke 3:7": "John's Call to Repentance",
    "Luke 3:15": "People Wonder About the Messiah",
    "Luke 3:19": "John Imprisoned",
    "Luke 3:21": "Baptism of Jesus",
    "Luke 3:23": "Genealogy of Jesus",
    
    // Luke Chapter 4
    "Luke 4:1": "Temptation of Jesus",
    "Luke 4:14": "Jesus Begins His Galilean Ministry",
    "Luke 4:16": "Rejected at Nazareth",
    "Luke 4:31": "Jesus Casts Out an Unclean Spirit",
    "Luke 4:38": "Healings at Simon's House",
    "Luke 4:42": "Jesus Preaches in Synagogues",
    
    // Luke Chapter 5
    "Luke 5:1": "Calling of Peter, James, and John",
    "Luke 5:12": "Healing a Leper",
    "Luke 5:17": "Healing the Paralytic",
    "Luke 5:27": "Calling of Levi and Teaching on Repentance",
    "Luke 5:33": "Question About Fasting",
    
    // Luke Chapter 6
    "Luke 6:1": "Lord of the Sabbath",
    "Luke 6:6": "Healing the Withered Hand",
    "Luke 6:12": "Choosing of the Twelve Apostles",
    "Luke 6:17": "Crowds Seek Jesus",
    "Luke 6:20": "Beatitudes and Woes",
    "Luke 6:27": "Love Your Enemies",
    "Luke 6:37": "Do Not Judge; Remove the Beam",
    "Luke 6:43": "Tree and Its Fruit",
    "Luke 6:46": "Wise and Foolish Builders",
    
    // Luke Chapter 7
    "Luke 7:1": "Healing the Centurion's Servant",
    "Luke 7:11": "Raising the Widow's Son",
    "Luke 7:18": "John the Baptist's Question",
    "Luke 7:24": "Jesus' Testimony About John",
    "Luke 7:36": "A Sinful Woman Anoints Jesus",
    
    // Luke Chapter 8
    "Luke 8:1": "Women Who Followed and Supported Jesus",
    "Luke 8:4": "Parable of the Sower",
    "Luke 8:9": "Explanation of the Sower",
    "Luke 8:16": "Lamp on a Stand",
    "Luke 8:19": "Jesus' True Family",
    "Luke 8:22": "Jesus Calms the Storm",
    "Luke 8:26": "Healing the Demon-Possessed Man",
    "Luke 8:40": "Healing the Woman & Raising Jairus' Daughter",
    
    // Luke Chapter 9
    "Luke 9:1": "The Twelve Sent Out",
    "Luke 9:7": "Herod's Perplexity",
    "Luke 9:10": "Feeding the Five Thousand",
    "Luke 9:18": "Peter's Confession of Christ",
    "Luke 9:21": "Jesus Predicts His Death",
    "Luke 9:23": "Take Up Your Cross",
    "Luke 9:28": "The Transfiguration",
    "Luke 9:37": "Healing the Demon-Possessed Boy",
    "Luke 9:44": "Second Prediction of His Death",
    "Luke 9:46": "Who Is Greatest?",
    "Luke 9:49": "Whoever Is Not Against You Is for You",
    "Luke 9:51": "A Samaritan Village Rejects Jesus",
    "Luke 9:57": "The Cost of Following Jesus",
    
    // Luke Chapter 10
    "Luke 10:1": "Sending of the Seventy-Two",
    "Luke 10:13": "Woes to the Unrepentant Towns",
    "Luke 10:17": "Return of the Seventy-Two & Jesus' Joy",
    "Luke 10:25": "Parable of the Good Samaritan",
    "Luke 10:38": "Mary and Martha",
    
    // Luke Chapter 11
    "Luke 11:1": "The Lord's Prayer",
    "Luke 11:5": "Ask, Seek, Knock",
    "Luke 11:14": "Divided Kingdom — Unclean Spirits",
    "Luke 11:27": "True Blessedness",
    "Luke 11:29": "The Sign of Jonah",
    "Luke 11:33": "Lamp of the Body",
    "Luke 11:37": "Woes to the Pharisees",
    "Luke 11:45": "Woes to the Lawyers",
    
    // Luke Chapter 12
    "Luke 12:1": "Beware of Hypocrisy and Fear God",
    "Luke 12:13": "Parable of the Rich Fool",
    "Luke 12:22": "Do Not Be Anxious",
    "Luke 12:35": "Watchful Servants",
    "Luke 12:49": "Jesus Brings Division",
    "Luke 12:54": "Discern the Times",
    
    // Luke Chapter 13
    "Luke 13:1": "Repent or Perish — Parable of the Barren Fig Tree",
    "Luke 13:10": "Healing a Crippled Woman",
    "Luke 13:18": "Mustard Seed & Leaven",
    "Luke 13:22": "The Narrow Door",
    "Luke 13:31": "Lament Over Jerusalem",
    
    // Luke Chapter 14
    "Luke 14:1": "Healing on the Sabbath",
    "Luke 14:7": "Teaching on Humility & Hospitality",
    "Luke 14:15": "Parable of the Great Banquet",
    "Luke 14:25": "Cost of Discipleship",
    "Luke 14:34": "Salt Without Flavor",
    
    // Luke Chapter 15
    "Luke 15:1": "Parable of the Lost Sheep",
    "Luke 15:8": "Parable of the Lost Coin",
    "Luke 15:11": "Parable of the Prodigal Son",
    
    // Luke Chapter 16
    "Luke 16:1": "Parable of the Unjust Steward",
    "Luke 16:14": "Warnings to the Pharisees",
    "Luke 16:19": "Rich Man and Lazarus",
    
    // Luke Chapter 17
    "Luke 17:1": "Forgiveness, Faith, and Duty",
    "Luke 17:11": "Healing of the Ten Lepers",
    "Luke 17:20": "The Coming of the Kingdom of God",
    
    // Luke Chapter 18
    "Luke 18:1": "Parable of the Persistent Widow",
    "Luke 18:9": "Parable of the Pharisee and the Tax Collector",
    "Luke 18:15": "Jesus Blesses Little Children",
    "Luke 18:18": "Rich Young Ruler",
    "Luke 18:31": "Jesus Predicts His Death",
    "Luke 18:35": "Healing Blind Bartimaeus",
    
    // Luke Chapter 19
    "Luke 19:1": "Zacchaeus",
    "Luke 19:11": "Parable of the Ten Minas",
    "Luke 19:28": "Triumphal Entry",
    "Luke 19:41": "Jesus Weeps Over Jerusalem",
    "Luke 19:45": "Cleansing the Temple",
    
    // Luke Chapter 20
    "Luke 20:1": "Authority of Jesus Questioned",
    "Luke 20:9": "Parable of the Wicked Tenants",
    "Luke 20:20": "Taxes to Caesar",
    "Luke 20:27": "Question About the Resurrection",
    "Luke 20:41": "David Calls the Messiah Lord",
    "Luke 20:45": "Warning About the Scribes",
    
    // Luke Chapter 21
    "Luke 21:1": "The Widow's Offering",
    "Luke 21:5": "Prediction of the Temple's Destruction",
    "Luke 21:10": "Persecution and Endurance",
    "Luke 21:20": "Destruction of Jerusalem",
    "Luke 21:25": "The Coming of the Son of Man",
    "Luke 21:29": "Lesson of the Fig Tree",
    "Luke 21:34": "Be Watchful",
    
    // Luke Chapter 22
    "Luke 22:1": "Plot to Kill Jesus — Judas Agrees to Betray",
    "Luke 22:7": "Preparation for Passover",
    "Luke 22:14": "The Last Supper",
    "Luke 22:24": "Who Is the Greatest?",
    "Luke 22:31": "Prediction of Peter's Denial",
    "Luke 22:35": "Teaching About the Future",
    "Luke 22:39": "Gethsemane Prayer",
    "Luke 22:47": "Arrest of Jesus",
    "Luke 22:54": "Peter Denies Jesus",
    "Luke 22:63": "Jesus Mocked",
    "Luke 22:66": "Jesus Before the Council",
    
    // Luke Chapter 23
    "Luke 23:1": "Jesus Before Pilate",
    "Luke 23:6": "Jesus Before Herod",
    "Luke 23:13": "Pilate Hands Jesus Over",
    "Luke 23:26": "On the Way to the Cross",
    "Luke 23:32": "Crucifixion",
    "Luke 23:44": "Death of Jesus",
    "Luke 23:50": "Burial of Jesus",
    
    // Luke Chapter 24
    "Luke 24:1": "The Empty Tomb — Resurrection",
    "Luke 24:13": "The Road to Emmaus",
    "Luke 24:36": "Jesus Appears to His Disciples",
    "Luke 24:44": "Jesus Opens Their Understanding",
    "Luke 24:50": "The Ascension of Jesus",
    
    // Acts Chapter 1
    "Acts 1:1": "Introduction — The Risen Christ",
    "Acts 1:4": "Promise of the Holy Spirit & Ascension",
    "Acts 1:12": "Return to Jerusalem",
    "Acts 1:15": "Matthias Chosen to Replace Judas",
    
    // Acts Chapter 2
    "Acts 2:1": "Pentecost — The Holy Spirit Comes",
    "Acts 2:14": "Peter Explains the Event",
    "Acts 2:22": "Peter Declares Jesus as Lord and Messiah",
    "Acts 2:37": "Three Thousand Added",
    "Acts 2:42": "Life of the Early Church",
    
    // Acts Chapter 3
    "Acts 3:1": "Healing the Lame Beggar",
    "Acts 3:11": "Peter Attributes the Miracle to Jesus",
    "Acts 3:17": "Call to Repentance",
    
    // Acts Chapter 4
    "Acts 4:1": "Peter and John Arrested — Jesus the Cornerstone",
    "Acts 4:13": "Commanded Not to Speak in Jesus' Name",
    "Acts 4:23": "Prayer for Boldness",
    "Acts 4:32": "Believers Share All Things",
    
    // Acts Chapter 5
    "Acts 5:1": "Ananias and Sapphira",
    "Acts 5:12": "Signs and Wonders",
    "Acts 5:17": "Apostles Arrested and Freed",
    "Acts 5:33": "Gamaliel's Advice and Release",
    
    // Acts Chapter 6
    "Acts 6:1": "Seven Chosen to Serve",
    "Acts 6:8": "Stephen Seized",
    
    // Acts Chapter 7
    "Acts 7:1": "Stephen's Sermon — Israel's History",
    "Acts 7:54": "The Stoning of Stephen",
    
    // Acts Chapter 8
    "Acts 8:1": "Saul Persecutes the Church",
    "Acts 8:4": "Philip in Samaria",
    "Acts 8:26": "Philip and the Ethiopian Eunuch",
    
    // Acts Chapter 9
    "Acts 9:1": "Saul's Encounter with Jesus",
    "Acts 9:10": "Saul's Conversion and Baptism",
    "Acts 9:20": "Saul Preaches in Damascus and Jerusalem",
    "Acts 9:32": "Peter Heals Aeneas",
    "Acts 9:36": "Peter Raises Tabitha (Dorcas)",
    
    // Acts Chapter 10
    "Acts 10:1": "Cornelius Receives a Vision",
    "Acts 10:9": "Peter's Vision",
    "Acts 10:24": "Peter Meets Cornelius",
    "Acts 10:34": "Peter's Gospel Message",
    "Acts 10:44": "Gentiles Receive the Holy Spirit",
    
    // Acts Chapter 11
    "Acts 11:1": "Peter Reports to Jerusalem",
    "Acts 11:19": "The Church in Antioch",
    "Acts 11:27": "Prophecy of Famine",
    
    // Acts Chapter 12
    "Acts 12:1": "James Killed and Peter Imprisoned",
    "Acts 12:6": "Peter Rescued from Prison",
    "Acts 12:20": "Herod's Death",
    "Acts 12:24": "The Word Continues to Spread",
    
    // Acts Chapter 13
    "Acts 13:1": "Barnabas and Saul Sent Out",
    "Acts 13:4": "Preaching in Cyprus",
    "Acts 13:13": "Paul's Sermon in Pisidian Antioch",
    "Acts 13:42": "Gentiles Believe; Jews Oppose",
    
    // Acts Chapter 14
    "Acts 14:1": "Ministry in Iconium",
    "Acts 14:8": "Healing in Lystra and Persecution",
    "Acts 14:21": "Strengthening Churches and Returning to Antioch",
    
    // Acts Chapter 15
    "Acts 15:1": "The Jerusalem Council",
    "Acts 15:22": "Letter to Gentile Believers",
    "Acts 15:36": "Paul and Barnabas Part Ways",
    
    // Acts Chapter 16
    "Acts 16:1": "Timothy Joins Paul",
    "Acts 16:6": "The Macedonian Call",
    "Acts 16:11": "Conversion of Lydia",
    "Acts 16:16": "Paul and Silas Imprisoned — Earthquake",
    "Acts 16:35": "Release from Prison",
    
    // Acts Chapter 17
    "Acts 17:1": "Thessalonica — Message Rejected",
    "Acts 17:10": "Berea — Message Examined",
    "Acts 17:16": "Paul in Athens",
    "Acts 17:22": "Paul's Sermon at the Areopagus",
    
    // Acts Chapter 18
    "Acts 18:1": "Paul Meets Aquila and Priscilla",
    "Acts 18:5": "Opposition and Encouragement in Corinth",
    "Acts 18:12": "Trial Before Gallio",
    "Acts 18:18": "Return to Antioch",
    "Acts 18:24": "Apollos Preaches Boldly",
    
    // Acts Chapter 19
    "Acts 19:1": "Disciples Receive the Holy Spirit",
    "Acts 19:8": "Ministry in Ephesus",
    "Acts 19:21": "Riot in Ephesus",
    
    // Acts Chapter 20
    "Acts 20:1": "Journey Through Macedonia and Greece",
    "Acts 20:7": "Eutychus Raised from Death",
    "Acts 20:13": "Travel to Miletus",
    "Acts 20:17": "Farewell to Ephesian Elders",
    
    // Acts Chapter 21
    "Acts 21:1": "Journey to Jerusalem",
    "Acts 21:17": "Paul Visits James in Jerusalem",
    "Acts 21:27": "Paul Seized in the Temple",
    "Acts 21:37": "Paul Speaks to the Crowd",
    
    // Acts Chapter 22
    "Acts 22:1": "Paul's Defense — His Testimony",
    "Acts 22:22": "Paul's Roman Citizenship Revealed",
    "Acts 22:30": "Before the Sanhedrin",
    
    // Acts Chapter 23
    "Acts 23:1": "Paul Before the Council",
    "Acts 23:11": "The Lord Encourages Paul",
    "Acts 23:12": "Plot to Kill Paul",
    "Acts 23:23": "Paul Taken to Felix",
    
    // Acts Chapter 24
    "Acts 24:1": "Accusations Before Felix",
    "Acts 24:10": "Paul's Defense Before Felix",
    "Acts 24:24": "Paul Kept in Custody",
    
    // Acts Chapter 25
    "Acts 25:1": "Paul Appeals to Caesar",
    "Acts 25:13": "King Agrippa Hears the Case",
    "Acts 25:23": "Paul Brought Before Agrippa",
    
    // Acts Chapter 26
    "Acts 26:1": "Paul's Early Life and Persecution",
    "Acts 26:12": "Paul's Encounter with Christ",
    "Acts 26:19": "Paul Obeys the Vision",
    "Acts 26:24": "Agrippa Almost Persuaded",
    
    // Acts Chapter 27
    "Acts 27:1": "Setting Sail for Rome",
    "Acts 27:13": "Storm at Sea",
    "Acts 27:21": "Paul's Encouragement",
    "Acts 27:27": "Shipwreck",
    
    // Acts Chapter 28
    "Acts 28:1": "Paul Survives a Snakebite",
    "Acts 28:7": "Healing on Malta",
    "Acts 28:11": "Arrival in Rome",
    "Acts 28:17": "Paul Preaches to Jews in Rome",
    "Acts 28:30": "Paul's Ministry While Under Guard",
    
    // Romans Chapter 1
    "Romans 1:1": "Greeting — Called to Belong to Jesus Christ",
    "Romans 1:8": "Paul's Desire to Visit Rome",
    "Romans 1:16": "The Righteous Shall Live by Faith",
    "Romans 1:18": "God's Wrath Against Ungodliness",
    "Romans 1:24": "Consequences of Rejecting God",
    
    // Romans Chapter 2
    "Romans 2:1": "God's Righteous Judgment",
    "Romans 2:12": "Judgment According to the Gospel",
    "Romans 2:17": "Jews and the Law",
    "Romans 2:25": "True Circumcision Is of the Heart",
    
    // Romans Chapter 3
    "Romans 3:1": "God's Faithfulness Despite Human Unbelief",
    "Romans 3:9": "No One Is Righteous",
    "Romans 3:21": "Righteousness Through Faith",
    "Romans 3:27": "Justified by Faith, Not Works",
    
    // Romans Chapter 4
    "Romans 4:1": "Abraham Justified by Faith",
    "Romans 4:13": "Promise Comes by Faith",
    "Romans 4:18": "Abraham's Example for Believers",
    
    // Romans Chapter 5
    "Romans 5:1": "Peace and Hope Through Faith",
    "Romans 5:6": "Christ Died for the Ungodly",
    "Romans 5:12": "Adam and Christ Contrasted",
    
    // Romans Chapter 6
    "Romans 6:1": "Dead to Sin, Alive to God",
    "Romans 6:15": "Slaves to Righteousness, Not Sin",
    
    // Romans Chapter 7
    "Romans 7:1": "Released from the Law",
    "Romans 7:7": "The Law Reveals Sin",
    "Romans 7:13": "The Struggle with Sin Nature",
    
    // Romans Chapter 8
    "Romans 8:1": "Life in the Spirit",
    "Romans 8:18": "Future Glory and Spirit's Help",
    "Romans 8:28": "God Works All Things for Good",
    "Romans 8:31": "Nothing Can Separate Us from Christ",
    
    // Romans Chapter 9
    "Romans 9:1": "Paul's Sorrow for Israel",
    "Romans 9:6": "Children of the Promise",
    "Romans 9:14": "God's Sovereign Choice",
    "Romans 9:30": "Israel's Unbelief",
    
    // Romans Chapter 10
    "Romans 10:1": "Israel's Misplaced Zeal",
    "Romans 10:5": "Righteousness by Faith",
    "Romans 10:14": "Israel Hears but Rejects",
    
    // Romans Chapter 11
    "Romans 11:1": "God Has Not Rejected Israel",
    "Romans 11:11": "Gentiles Grafted In",
    "Romans 11:25": "All Israel Will Be Saved",
    "Romans 11:33": "Doxology — Depth of God's Wisdom",
    
    // Romans Chapter 12
    "Romans 12:1": "Living Sacrifice",
    "Romans 12:3": "Gifts of Grace",
    "Romans 12:9": "Marks of a True Christian",
    
    // Romans Chapter 13
    "Romans 13:1": "Submission to Authorities",
    "Romans 13:8": "Love Fulfills the Law",
    "Romans 13:11": "Put On Christ",
    
    // Romans Chapter 14
    "Romans 14:1": "Do Not Judge One Another",
    "Romans 14:13": "Do Not Cause Others to Stumble",
    
    // Romans Chapter 15
    "Romans 15:1": "Bear with the Weak",
    "Romans 15:8": "Christ the Hope of Jews and Gentiles",
    "Romans 15:14": "Paul's Ministry to the Gentiles",
    "Romans 15:22": "Paul's Travel Plans and Prayer Request",
    
    // Romans Chapter 16
    "Romans 16:1": "Greetings to Many Workers",
    "Romans 16:17": "Warning Against Divisive People",
    "Romans 16:21": "Greetings from Paul's Companions",
    "Romans 16:25": "Doxology — Glory to God",
    
    // 1 Corinthians Chapter 1
    "1 Corinthians 1:1": "Greeting",
    "1 Corinthians 1:4": "Thanksgiving for the Grace of God",
    "1 Corinthians 1:10": "Appeal Against Divisions",
    "1 Corinthians 1:18": "Christ the Power and Wisdom of God",
    "1 Corinthians 1:26": "God Chooses the Lowly",
    
    // 1 Corinthians Chapter 2
    "1 Corinthians 2:1": "Paul's Message: Christ Crucified",
    "1 Corinthians 2:6": "Revealed by the Spirit",
    "1 Corinthians 2:14": "The Spiritual Person",
    
    // 1 Corinthians Chapter 3
    "1 Corinthians 3:1": "Servants Working Together",
    "1 Corinthians 3:10": "Building on the Foundation",
    "1 Corinthians 3:16": "You Are God's Temple",
    
    // 1 Corinthians Chapter 4
    "1 Corinthians 4:1": "Servants of Christ",
    "1 Corinthians 4:6": "Apostles Suffer for Christ",
    "1 Corinthians 4:14": "Paul's Fatherly Appeal",
    
    // 1 Corinthians Chapter 5
    "1 Corinthians 5:1": "Immorality in the Church",
    "1 Corinthians 5:9": "Do Not Associate with Immorality",
    
    // 1 Corinthians Chapter 6
    "1 Corinthians 6:1": "Lawsuits Among Believers",
    "1 Corinthians 6:12": "Flee Sexual Immorality — Body Is God's Temple",
    
    // 1 Corinthians Chapter 7
    "1 Corinthians 7:1": "Principles for Marriage",
    "1 Corinthians 7:8": "Marriage to Unbelievers",
    "1 Corinthians 7:17": "Remain in the Calling",
    "1 Corinthians 7:25": "Advice to the Unmarried and Widows",
    
    // 1 Corinthians Chapter 8
    "1 Corinthians 8:1": "Food Offered to Idols — Knowledge and Love",
    
    // 1 Corinthians Chapter 9
    "1 Corinthians 9:1": "Paul's Rights as an Apostle",
    "1 Corinthians 9:19": "Becoming All Things to All People",
    "1 Corinthians 9:24": "Run to Win the Prize",
    
    // 1 Corinthians Chapter 10
    "1 Corinthians 10:1": "Warnings from Israel's History",
    "1 Corinthians 10:14": "Flee Idolatry",
    "1 Corinthians 10:23": "Do All to the Glory of God",
    
    // 1 Corinthians Chapter 11
    "1 Corinthians 11:1": "Head Coverings and Order",
    "1 Corinthians 11:17": "The Lord's Supper — Correction",
    
    // 1 Corinthians Chapter 12
    "1 Corinthians 12:1": "Varieties of Spiritual Gifts",
    "1 Corinthians 12:12": "One Body, Many Members",
    
    // 1 Corinthians Chapter 13
    "1 Corinthians 13:1": "The Way of Love (Love Chapter)",
    
    // 1 Corinthians Chapter 14
    "1 Corinthians 14:1": "Prophecy and Tongues — Edifying the Church",
    "1 Corinthians 14:20": "Order in Worship",
    "1 Corinthians 14:34": "Instructions for Conduct in Church",
    
    // 1 Corinthians Chapter 15
    "1 Corinthians 15:1": "The Gospel and the Resurrection of Christ",
    "1 Corinthians 15:12": "Implications of the Resurrection",
    "1 Corinthians 15:35": "The Resurrection Body",
    "1 Corinthians 15:50": "Victory Through Christ",
    
    // 1 Corinthians Chapter 16
    "1 Corinthians 16:1": "Collection for the Saints",
    "1 Corinthians 16:5": "Paul's Travel Plans",
    "1 Corinthians 16:13": "Final Exhortations",
    "1 Corinthians 16:19": "Greetings and Benediction",
    
    // 2 Corinthians Chapter 1
    "2 Corinthians 1:1": "Greeting",
    "2 Corinthians 1:3": "The God of All Comfort",
    "2 Corinthians 1:8": "Sharing in Suffering",
    "2 Corinthians 1:12": "Paul's Change of Travel Plans",
    
    // 2 Corinthians Chapter 2
    "2 Corinthians 2:1": "Paul's Painful Visit and Letter",
    "2 Corinthians 2:5": "Forgive the Offender",
    "2 Corinthians 2:12": "Triumph in Christ — Aroma of Life",
    
    // 2 Corinthians Chapter 3
    "2 Corinthians 3:1": "Ministers of the New Covenant",
    "2 Corinthians 3:7": "Glory of the New Covenant",
    "2 Corinthians 3:12": "Unveiled Faces — Transformed by the Spirit",
    
    // 2 Corinthians Chapter 4
    "2 Corinthians 4:1": "Light of the Gospel in Earthen Vessels",
    "2 Corinthians 4:7": "Treasure in Jars of Clay",
    "2 Corinthians 4:13": "Eternal Weight of Glory",
    
    // 2 Corinthians Chapter 5
    "2 Corinthians 5:1": "Our Heavenly Dwelling",
    "2 Corinthians 5:11": "The Ministry of Reconciliation Begins",
    "2 Corinthians 5:16": "New Creation — Ambassadors for Christ",
    
    // 2 Corinthians Chapter 6
    "2 Corinthians 6:1": "Paul's Suffering and Appeal",
    "2 Corinthians 6:14": "Do Not Be Unequally Yoked",
    
    // 2 Corinthians Chapter 7
    "2 Corinthians 7:1": "Call to Holiness",
    "2 Corinthians 7:5": "Godly Sorrow Produces Repentance",
    
    // 2 Corinthians Chapter 8
    "2 Corinthians 8:1": "Example of Macedonian Generosity",
    "2 Corinthians 8:8": "Excel in the Grace of Giving",
    "2 Corinthians 8:16": "Titus and the Collection",
    
    // 2 Corinthians Chapter 9
    "2 Corinthians 9:1": "Preparing the Gift",
    "2 Corinthians 9:6": "God Loves a Cheerful Giver",
    
    // 2 Corinthians Chapter 10
    "2 Corinthians 10:1": "Paul Defends His Authority",
    "2 Corinthians 10:7": "Criticism of Paul's Weak Appearance",
    "2 Corinthians 10:12": "Boasting Only in the Lord",
    
    // 2 Corinthians Chapter 11
    "2 Corinthians 11:1": "Warning Against False Apostles",
    "2 Corinthians 11:7": "Deceptive Workers",
    "2 Corinthians 11:16": "Paul's 'Foolish' Boasting",
    "2 Corinthians 11:22": "Paul's Sufferings",
    
    // 2 Corinthians Chapter 12
    "2 Corinthians 12:1": "Paul's Thorn in the Flesh",
    "2 Corinthians 12:11": "Defending His Ministry",
    "2 Corinthians 12:19": "Concerns About the Corinthians",
    
    // 2 Corinthians Chapter 13
    "2 Corinthians 13:1": "Final Warning",
    "2 Corinthians 13:5": "Examine Yourselves",
    "2 Corinthians 13:11": "Final Greetings and Benediction",
    
    // Galatians Chapter 1
    "Galatians 1:1": "Greeting",
    "Galatians 1:6": "No Other Gospel",
    "Galatians 1:11": "Paul's Calling and Conversion",
    
    // Galatians Chapter 2
    "Galatians 2:1": "Paul Accepted by the Apostles",
    "Galatians 2:11": "Paul Confronts Peter",
    "Galatians 2:15": "Justified by Faith, Not Works",
    
    // Galatians Chapter 3
    "Galatians 3:1": "Faith, Not Law",
    "Galatians 3:10": "Christ Redeems from the Curse",
    "Galatians 3:15": "The Promise Comes Before the Law",
    "Galatians 3:23": "Children of God Through Faith",
    
    // Galatians Chapter 4
    "Galatians 4:1": "Sons and Heirs Through Christ",
    "Galatians 4:8": "Paul's Concern for the Galatians",
    "Galatians 4:21": "Hagar and Sarah — Two Covenants",
    
    // Galatians Chapter 5
    "Galatians 5:1": "Freedom in Christ",
    "Galatians 5:13": "Walk by the Spirit",
    
    // Galatians Chapter 6
    "Galatians 6:1": "Bear One Another's Burdens",
    "Galatians 6:11": "Boast Only in the Cross",
    
    // Ephesians Chapter 1
    "Ephesians 1:1": "Greeting",
    "Ephesians 1:3": "Spiritual Blessings in Christ",
    "Ephesians 1:15": "Prayer for Wisdom and Revelation",
    
    // Ephesians Chapter 2
    "Ephesians 2:1": "Saved by Grace Through Faith",
    "Ephesians 2:11": "One New Man in Christ",
    
    // Ephesians Chapter 3
    "Ephesians 3:1": "Paul's Ministry to the Gentiles",
    "Ephesians 3:14": "Prayer for Spiritual Strength",
    
    // Ephesians Chapter 4
    "Ephesians 4:1": "Unity and Gifts in the Body",
    "Ephesians 4:17": "The New Life in Christ",
    
    // Ephesians Chapter 5
    "Ephesians 5:1": "Walk in Love and Wisdom",
    "Ephesians 5:22": "Marriage — Christ and the Church",
    
    // Ephesians Chapter 6
    "Ephesians 6:1": "Instructions for Families",
    "Ephesians 6:10": "Armor of God",
    "Ephesians 6:21": "Final Greetings",
    
    // Philippians Chapter 1
    "Philippians 1:1": "Greeting",
    "Philippians 1:3": "Thanksgiving and Prayer",
    "Philippians 1:12": "The Gospel Advances",
    "Philippians 1:19": "To Live Is Christ",
    
    // Philippians Chapter 2
    "Philippians 2:1": "Christ's Humility",
    "Philippians 2:12": "Shine as Lights",
    "Philippians 2:19": "Timothy and Epaphroditus",
    
    // Philippians Chapter 3
    "Philippians 3:1": "Righteousness Through Faith",
    "Philippians 3:12": "Press Toward the Goal",
    
    // Philippians Chapter 4
    "Philippians 4:1": "Encouragement to Stand Firm",
    "Philippians 4:10": "Contentment in Christ",
    "Philippians 4:21": "Final Greetings",
    
    // Colossians Chapter 1
    "Colossians 1:1": "Thanksgiving and Prayer",
    "Colossians 1:15": "Christ the Supreme Creator and Redeemer",
    "Colossians 1:24": "Paul's Ministry",
    
    // Colossians Chapter 2
    "Colossians 2:1": "Christ, the Mystery of God",
    "Colossians 2:6": "Alive in Christ",
    "Colossians 2:16": "Let No One Disqualify You",
    
    // Colossians Chapter 3
    "Colossians 3:1": "Put On the New Self",
    "Colossians 3:18": "Rules for Christian Households",
    
    // Colossians Chapter 4
    "Colossians 4:1": "Prayer and Conduct",
    "Colossians 4:7": "Final Greetings",
    
    // 1 Thessalonians Chapter 1
    "1 Thessalonians 1:1": "Greeting and Thanksgiving",
    
    // 1 Thessalonians Chapter 2
    "1 Thessalonians 2:1": "Paul's Ministry in Thessalonica",
    "1 Thessalonians 2:13": "Reception of the Word",
    "1 Thessalonians 2:17": "Paul's Longing to Visit",
    
    // 1 Thessalonians Chapter 3
    "1 Thessalonians 3:1": "Encouragement Amid Trial",
    
    // 1 Thessalonians Chapter 4
    "1 Thessalonians 4:1": "A Life Pleasing to God",
    "1 Thessalonians 4:13": "The Coming of the Lord",
    
    // 1 Thessalonians Chapter 5
    "1 Thessalonians 5:1": "The Day of the Lord",
    "1 Thessalonians 5:12": "Final Instructions and Blessing",
    
    // 2 Thessalonians Chapter 1
    "2 Thessalonians 1:1": "Thanksgiving",
    "2 Thessalonians 1:5": "God's Judgment and Glory",
    
    // 2 Thessalonians Chapter 2
    "2 Thessalonians 2:1": "Man of Lawlessness",
    "2 Thessalonians 2:13": "Stand Firm",
    
    // 2 Thessalonians Chapter 3
    "2 Thessalonians 3:1": "Request for Prayer",
    "2 Thessalonians 3:6": "Warning Against Idleness",
    "2 Thessalonians 3:16": "Final Blessing",
    
    // 1 Timothy Chapter 1
    "1 Timothy 1:1": "Greeting",
    "1 Timothy 1:3": "Charge Against False Teachers",
    "1 Timothy 1:12": "Christ's Mercy to Paul",
    
    // 1 Timothy Chapter 2
    "1 Timothy 2:1": "Pray for All People",
    "1 Timothy 2:8": "Order in Worship",
    
    // 1 Timothy Chapter 3
    "1 Timothy 3:1": "Qualifications for Overseers",
    "1 Timothy 3:8": "Qualifications for Deacons",
    
    // 1 Timothy Chapter 4
    "1 Timothy 4:1": "Warnings Against False Teaching",
    "1 Timothy 4:6": "Be a Good Servant of Christ",
    
    // 1 Timothy Chapter 5
    "1 Timothy 5:1": "Instructions for Widows",
    "1 Timothy 5:17": "Instructions for Elders",
    
    // 1 Timothy Chapter 6
    "1 Timothy 6:1": "Warning Against Greed",
    "1 Timothy 6:11": "Fight the Good Fight",
    
    // 2 Timothy Chapter 1
    "2 Timothy 1:1": "Encouragement to Boldness",
    "2 Timothy 1:8": "Do Not Be Ashamed",
    
    // 2 Timothy Chapter 2
    "2 Timothy 2:1": "Be Strong in Grace",
    "2 Timothy 2:14": "Rightly Handling the Word",
    
    // 2 Timothy Chapter 3
    "2 Timothy 3:1": "Godlessness in the Last Days",
    "2 Timothy 3:10": "All Scripture Is God-Breathed",
    
    // 2 Timothy Chapter 4
    "2 Timothy 4:1": "Preach the Word",
    "2 Timothy 4:9": "Final Instructions",
    
    // Titus Chapter 1
    "Titus 1:1": "Greeting",
    "Titus 1:5": "Qualifications for Elders",
    
    // Titus Chapter 2
    "Titus 2:1": "Teaching Sound Doctrine",
    
    // Titus Chapter 3
    "Titus 3:1": "Live Rightly",
    "Titus 3:12": "Final Instructions",
    
    // Philemon Chapter 1
    "Philemon 1:1": "Greeting and Thanksgiving",
    "Philemon 1:8": "Appeal for Onesimus",
    "Philemon 1:17": "Paul's Promise and Closing",
    
    // Hebrews Chapter 1
    "Hebrews 1:1": "God Speaks Through His Son",
    "Hebrews 1:5": "The Son Superior to Angels",
    
    // Hebrews Chapter 2
    "Hebrews 2:1": "Warning Against Drifting",
    "Hebrews 2:5": "Jesus Made Like His Brothers",
    
    // Hebrews Chapter 3
    "Hebrews 3:1": "Jesus Superior to Moses",
    "Hebrews 3:7": "Warning Against Unbelief",
    
    // Hebrews Chapter 4
    "Hebrews 4:1": "Rest for God's People",
    "Hebrews 4:14": "Jesus the Great High Priest",
    
    // Hebrews Chapter 5
    "Hebrews 5:1": "High Priest Like Melchizedek",
    "Hebrews 5:11": "Spiritual Immaturity",
    
    // Hebrews Chapter 6
    "Hebrews 6:1": "Warning and Encouragement",
    "Hebrews 6:13": "God's Unchanging Promise",
    
    // Hebrews Chapter 7
    "Hebrews 7:1": "Melchizedek and Christ",
    
    // Hebrews Chapter 8
    "Hebrews 8:1": "Christ Mediates a Better Covenant",
    
    // Hebrews Chapter 9
    "Hebrews 9:1": "Earthly vs Heavenly Sanctuary",
    
    // Hebrews Chapter 10
    "Hebrews 10:1": "Christ's Once-for-All Sacrifice",
    "Hebrews 10:19": "Draw Near, Hold Fast",
    
    // Hebrews Chapter 11
    "Hebrews 11:1": "Faith of the Ancients (Faith Chapter)",
    
    // Hebrews Chapter 12
    "Hebrews 12:1": "Run the Race with Endurance",
    "Hebrews 12:14": "Warning Against Refusing God",
    
    // Hebrews Chapter 13
    "Hebrews 13:1": "Sacrifices Pleasing to God",
    "Hebrews 13:20": "Benediction and Closing",
    
    // James Chapter 1
    "James 1:1": "Greeting",
    "James 1:2": "Steadfastness in Trials",
    "James 1:19": "Be Doers of the Word",
    
    // James Chapter 2
    "James 2:1": "Warning Against Partiality",
    "James 2:14": "Faith Without Works Is Dead",
    
    // James Chapter 3
    "James 3:1": "Taming the Tongue",
    "James 3:13": "Two Types of Wisdom",
    
    // James Chapter 4
    "James 4:1": "Warning Against Worldliness",
    "James 4:11": "Boasting About Tomorrow",
    
    // James Chapter 5
    "James 5:1": "Warning to the Rich",
    "James 5:7": "Patience in Suffering",
    "James 5:13": "Prayer and Restoration",
    
    // 1 Peter Chapter 1
    "1 Peter 1:1": "Living Hope Through Christ",
    "1 Peter 1:13": "Called to Be Holy",
    
    // 1 Peter Chapter 2
    "1 Peter 2:1": "Chosen People",
    "1 Peter 2:11": "Submission to Authority",
    
    // 1 Peter Chapter 3
    "1 Peter 3:1": "Instructions for Families",
    "1 Peter 3:8": "Suffering for Righteousness",
    
    // 1 Peter Chapter 4
    "1 Peter 4:1": "Living for God",
    "1 Peter 4:12": "Sharing Christ's Sufferings",
    
    // 1 Peter Chapter 5
    "1 Peter 5:1": "Shepherd the Flock",
    "1 Peter 5:12": "Final Greetings",
    
    // 2 Peter Chapter 1
    "2 Peter 1:1": "Confirm Your Calling",
    "2 Peter 1:12": "The Prophetic Word Confirmed",
    
    // 2 Peter Chapter 2
    "2 Peter 2:1": "Warning Against False Teachers",
    
    // 2 Peter Chapter 3
    "2 Peter 3:1": "The Day of the Lord",
    "2 Peter 3:14": "Final Exhortations",
    
    // 1 John Chapter 1
    "1 John 1:1": "The Word of Life",
    "1 John 1:5": "Walking in the Light",
    
    // 1 John Chapter 2
    "1 John 2:1": "Christ Our Advocate",
    "1 John 2:15": "Do Not Love the World",
    "1 John 2:18": "Warning About Antichrists",
    "1 John 2:28": "Children of God",
    
    // 1 John Chapter 3
    "1 John 3:1": "Children of God vs Children of the Devil",
    "1 John 3:11": "Love One Another",
    
    // 1 John Chapter 4
    "1 John 4:1": "Test the Spirits",
    "1 John 4:7": "God Is Love",
    
    // 1 John Chapter 5
    "1 John 5:1": "Faith in the Son of God",
    "1 John 5:13": "Confidence in Prayer",
    
    // 2 John Chapter 1
    "2 John 1:1": "Greeting",
    "2 John 1:4": "Walk in the Truth",
    "2 John 1:7": "Warning Against Deceivers",
    "2 John 1:12": "Final Greetings",
    
    // 3 John Chapter 1
    "3 John 1:1": "Gaius Commended",
    "3 John 1:9": "Diotrephes and Demetrius",
    "3 John 1:13": "Final Greetings",
    
    // Jude Chapter 1
    "Jude 1:1": "Greeting and Warning",
    "Jude 1:5": "Judgment on False Teachers",
    "Jude 1:17": "Persevere in the Faith",
    "Jude 1:24": "Doxology",
    
    // Revelation Chapter 1
    "Revelation 1:1": "Prologue — Vision of Christ",
    "Revelation 1:9": "The Son of Man Appears",
    
    // Revelation Chapter 2
    "Revelation 2:1": "Message to Ephesus",
    "Revelation 2:8": "Message to Smyrna",
    "Revelation 2:12": "Message to Pergamum",
    "Revelation 2:18": "Message to Thyatira",
    
    // Revelation Chapter 3
    "Revelation 3:1": "Message to Sardis",
    "Revelation 3:7": "Message to Philadelphia",
    "Revelation 3:14": "Message to Laodicea",
    
    // Revelation Chapter 4
    "Revelation 4:1": "Vision of God's Throne",
    
    // Revelation Chapter 5
    "Revelation 5:1": "The Lamb and the Scroll",
    
    // Revelation Chapter 6
    "Revelation 6:1": "The Six Seals",
    
    // Revelation Chapter 7
    "Revelation 7:1": "144,000 Sealed",
    "Revelation 7:9": "Great Multitude in White Robes",
    
    // Revelation Chapter 8
    "Revelation 8:1": "Seventh Seal and Silence",
    "Revelation 8:6": "Four Trumpets",
    
    // Revelation Chapter 9
    "Revelation 9:1": "Fifth Trumpet — Locusts",
    "Revelation 9:13": "Sixth Trumpet — Angels Released",
    
    // Revelation Chapter 10
    "Revelation 10:1": "The Mighty Angel and the Little Scroll",
    
    // Revelation Chapter 11
    "Revelation 11:1": "Two Witnesses",
    "Revelation 11:15": "Seventh Trumpet",
    
    // Revelation Chapter 12
    "Revelation 12:1": "Woman, Child, and Dragon",
    
    // Revelation Chapter 13
    "Revelation 13:1": "Beast from the Sea",
    "Revelation 13:11": "Beast from the Earth",
    
    // Revelation Chapter 14
    "Revelation 14:1": "The Lamb and 144,000",
    "Revelation 14:6": "Three Angels' Messages",
    "Revelation 14:14": "Harvest of the Earth",
    
    // Revelation Chapter 15
    "Revelation 15:1": "Seven Angels with Seven Plagues",
    
    // Revelation Chapter 16
    "Revelation 16:1": "Seven Bowls of Wrath",
    
    // Revelation Chapter 17
    "Revelation 17:1": "The Woman on the Scarlet Beast",
    
    // Revelation Chapter 18
    "Revelation 18:1": "Fall of Babylon",
    
    // Revelation Chapter 19
    "Revelation 19:1": "Marriage of the Lamb",
    "Revelation 19:11": "Christ the Warrior King",
    
    // Revelation Chapter 20
    "Revelation 20:1": "The Thousand Years",
    "Revelation 20:11": "Final Judgment",
    
    // Revelation Chapter 21
    "Revelation 21:1": "New Heaven and New Earth",
    "Revelation 21:9": "New Jerusalem",
    
    // Revelation Chapter 22
    "Revelation 22:1": "River of Life",
    "Revelation 22:10": "Final Warnings and Benediction",
    
    // Add more headers as needed
};

// Helper function to get header for a specific verse
function getVerseHeader(bookName, chapter, verse) {
    const key = `${bookName} ${chapter}:${verse}`;
    return verseHeaders[key] || null;
}
