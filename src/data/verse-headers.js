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
