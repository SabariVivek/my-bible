// ─────────────────────────────────────────────────────────────────────────────
// Bible Teaching Recordings — Track List
//
// To add a new recording:
//   1. Drop the audio file into this folder with the SAME NAME as the title
//      (e.g., title "Psalm 23" → file "Psalm 23.m4a" or "Psalm 23.mp3")
//   2. Add a new entry below following the same format
//
// duration: total seconds (e.g. 3720 = 1h 2m 0s). Set null to auto-detect.
// The system will automatically find the audio file (.m4a preferred, .mp3 fallback).
// ─────────────────────────────────────────────────────────────────────────────

const BIBLE_TRACKS = [
  {
    day: 1,
    title: "Psalm 23",
    duration: "71:25 min",
    verse: "Psalm 23",
    desc: "The Lord as shepherd — comfort, provision, and eternal dwelling.",
    cardBg: "resources/images/grass.png",
    category: "Psalms"
  },
  {
    day: 2,
    title: "Why 400 years wait?",
    file: "Why 400 years wait",
    duration: "40:58 min",
    verse: "Galatians 4:4",
    desc: "The 400 years of prophetic silence and God's perfect timing to send His Son.",
    category: "Do You Know?",
    timestamps: [
      { time: "01:13", label: "Introduction", seconds: 73 },
      { time: "03:15", label: "Language", seconds: 195 },
      { time: "18:47", label: "Cross Death", seconds: 1127 },
      { time: "26:12", label: "Adoption as Son", seconds: 1572 },
      { time: "31:34", label: "Transportation", seconds: 1894 },
      { time: "40:05", label: "End", seconds: 2405 }
    ]
  },
  {
    day: 3,
    title: "Judges 19",
    duration: "84:15 min",
    verse: "Judges 19",
    desc: "A dark chapter revealing Israel's moral collapse without a king.",
    category: "Do You Know?"
  },
  {
    day: 4,
    title: "Parable of Samaritan",
    duration: "70:16 min",
    verse: "Luke 10:30-37",
    desc: "What true neighbourly love looks like across every boundary.",
    category: "Christophany, Parables"
  },
  {
    day: 5,
    title: "Rahab",
    duration: "88:15 min",
    verse: "Joshua 2",
    desc: "A Canaanite woman's faith that placed her in the messianic line.",
    cardBg: "resources/images/ribbon.png",
    category: "Characters"
  },
  {
    day: 6,
    title: "Mephibosheth",
    duration: "82:21 min",
    verse: "2 Samuel 9:7",
    desc: "A picture of grace — restored to the king's table despite weakness.",
    category: "Characters"
  },
  {
    day: 7,
    title: "Daniel - Chapter 1",
    duration: "67:02 min",
    verse: "Daniel 1",
    desc: "Daniel's faithfulness and God's provision in a foreign land.",
    category: "Prophets"
  },
  {
    day: 8,
    title: "Burnt Offering",
    duration: "74:27 min",
    verse: "Leviticus 1",
    desc: "The significance of sacrificial offerings in the Old Testament.",
    cardBg: "resources/images/fire.png",
    category: "Leviticus"
  },
  {
    day: 9,
    title: "Jonah",
    duration: "84:24 min",
    verse: "Jonah 1-4",
    desc: "God's mercy and the prophet's struggle with obedience and compassion.",
    category: "Characters"
  },
  {
    day: 10,
    title: "Who is Antichrist?",
    file: "Who is Antichrist",
    duration: "35:04 min",
    verse: "1 John 4:1-3",
    desc: "Understanding the false teachings in the last days.",
    cardBg: "resources/images/antichrist.png",
    category: "False Teaching"
  },
  {
    day: 11,
    title: "Passover",
    duration: "63:05 min",
    verse: "Exodus 12",
    desc: "The significance of the Passover in God's plan of redemption.",
    category: "Festivals"
  },
  {
    day: 12,
    title: "The Bronze Serpent",
    duration: "63:08 min",
    verse: "Numbers 21:4-9",
    desc: "A foreshadowing of Christ's crucifixion and the power of faith.",
    category: "Christophany"
  },
  {
    day: 13,
    title: "Why 1<sup>st</sup> king not from Judah?",
    file: "Why first king not from Judah",
    duration: "40:36 min",
    verse: "Matthew 1",
    desc: "Why Israel's first king wasn't from Judah.",
    category: "Melkishedhek"
  },
  {
    day: 14,
    title: "The Spirit & The Bride",
    duration: "48:06 min",
    verse: "Revelation 22:17",
    desc: "The Spirit and the Bride invite all to eternal life.",
    cardBg: "resources/images/water.png",
    category: "False Teaching"
  },
  {
    day: 15,
    title: "How Levi Tribe was Chosen?",
    file: "How Levi Tribe was Chosen",
    duration: "64:58 min",
    verse: "Numbers 3:5-13",
    desc: "The selection of the Levites and their role in serving God.",
    category: "Melkishedhek"
  },
  {
    day: 16,
    title: "The 7,000-Year Plan of Christ",
    duration: "49:55 min",
    verse: "Num 19; 1 Thes 4:13-18",
    desc: "How the 7,000-year pattern points to Christ's return.",
    category: "Do You Know?"
  },
  {
    day: 17,
    title: "Yom Kippur",
    duration: "58:28 min",
    verse: "Leviticus 16",
    desc: "The Day of Atonement in the Old and New Testaments.",
    cardBg: "resources/images/blood.png",
    category: "Melkishedhek, Festivals, Leviticus"
  },
  {
    day: 18,
    title: "Who is Melkishedhek?",
    file: "Who is Melkishedhek",
    duration: "47:16 min",
    verse: "Genesis 14:18-20",
    desc: "Melkishedhek's role and significance in the Bible.",
    category: "Melkishedhek, Characters"
  },
  {
    day: 19,
    title: "God Covenant with Abraham",
    duration: "37:05 min",
    verse: "Genesis 15",
    desc: "God's covenant with Abraham and its implications for believers.",
    category: "Do You Know?"
  },
  {
    day: 20,
    title: "Family-Redeemer",
    duration: "45:53 min",
    verse: "Deuteronomy 25:5-10",
    desc: "The concept of the family redeemer and its fulfillment in Christ.",
    category: "Christophany"
  },
  {
    day: 21,
    title: "The Seven Tabernacles",
    duration: "72:21 min",
    verse: "Multiple",
    desc: "Explore the seven tabernacles found throughout the Bible",
    category: "7's"
  },
  {
    day: 22,
    title: "Grain Offering",
    duration: "57:43 min",
    verse: "Leviticus 2",
    desc: "The significance of the grain offering in the Old Testament.",
    cardBg: "resources/images/grain.png",
    category: "Leviticus"
  },
  {
    day: 23,
    title: "Who are Jannes & Jambres?",
    file: "Who are Jannes & Jambres",
    duration: "39:52 min",
    verse: "2 Timothy 3:8",
    desc: "Jannes and Jambres, the magicians who opposed Moses, and their role in biblical history.",
    category: "Characters"
  },
  {
    day: 24,
    title: "Peace Offering",
    duration: "32:03 min",
    verse: "Leviticus 3",
    desc: "The significance of the peace offering in the Old Testament.",
    category: "Leviticus"
  },
  {
    day: 25,
    title: "Baptism",
    duration: "61:23 min",
    verse: "Rom 6:3-11; Gal 2:20",
    desc: "The baptism of Jesus and its significance for believers.",
    cardBg: "resources/images/baptism.png",
    category: "Foundation"
  },
  {
    day: 26,
    title: "Rapture",
    duration: "70:02 min",
    verse: "1 Thessalonians 4:16-17",
    desc: "The rapture of the church and its significance for believers.",
    category: "Foundation"
  },
  {
    day: 27,
    title: "Why Jesus born in Bethlehem?",
    file: "Why Jesus born in Bethlehem",
    duration: "30:18 min",
    verse: "Micah 5:2",
    desc: "The prophecy of the Messiah's birthplace and its fulfillment in Jesus.",
    category: "Do You Know?"
  },
  {
    day: 28,
    title: "The City of Refuge",
    duration: "38:31 min",
    verse: "Deut 19; Joshua 20",
    desc: "The cities of refuge in the Old Testament and their significance for believers.",
    category: "Christophany"
  },
  {
    day: 29,
    title: "John the Baptist",
    duration: "63:20 min",
    verse: "Matthew 3:1-12",
    desc: "The life and ministry of John the Baptist.",
    category: "Characters"
  },
  {
    day: 30,
    title: "Pharisees, Sadducees & Scribes",
    duration: "78:13 min",
    verse: "Acts 23:6-10",
    desc: "The religious leaders of Jesus' time and their opposition to Him.",
    category: "Characters"
  },
  {
    day: 31,
    title: "What is Gospel?",
    file: "What is Gospel",
    duration: "42:19 min",
    verse: "1 Corinthians 15:1-4",
    desc: "An explanation of the gospel message and its importance for believers.",
    category: "Foundation"
  },
  {
    day: 32,
    title: "Can dead people return as spirits?",
    file: "Can dead people return as spirits",
    duration: "62:46 min",
    verse: "1 Samuel 28:3-25",
    desc: "A biblical perspective on the question of whether dead people can return as spirits.",
    category: "Foundation "
  },
  {
    day: 33,
    title: "The Coin in the Fish's Mouth",
    duration: "52:02 min",
    verse: "Matthew 17:24-27",
    desc: "The story of how a fish paid Jesus' tax and its significance for believers.",
    category: "Do You Know?"
  },
  {
    day: 34,
    title: "Contradiction in Jesus' Genealogy?",
    file: "Contradiction in Jesus' Genealogy",
    duration: "36:15 min",
    verse: "Mat 1:1-17; Luke 3:23-38",
    desc: "An examination of the apparent differences in the genealogies of Jesus in Matthew and Luke.",
    category: "Do You Know?"
  },
  {
    day: 35,
    title: "Joseph - Mary's Husband",
    duration: "55:31 min",
    verse: "Matthew 1:18-25",
    desc: "The life and role of Joseph, the husband of Mary, in the story of Jesus' birth.",
    category: "Characters"
  },
  {
    day: 36,
    title: "Mary - Mother of Jesus",
    duration: "34:14 min",
    verse: "Luke 1:26-38",
    desc: "The life and role of Mary, the mother of Jesus, in the story of His birth.",
    category: "Characters"
  },
  {
    day: 37,
    title: "Simeon & Anna",
    duration: "60:00 min",
    verse: "Luke 2:25-38",
    desc: "The story of Simeon and Anna, who waited for the Messiah.",
    category: "Characters"
  },
  {
    day: 38,
    title: "What is Sin?",
    file: "What is Sin",
    duration: "53:16 min",
    verse: "Multiple",
    desc: "An explanation of the concept of sin and its significance for believers.",
    category: "Foundation"
  },
  {
    day: 39,
    title: "Blood of Jesus - Part 1",
    duration: "54:19 min",
    verse: "Heb 9:22",
    desc: "The significance of the blood of Jesus in the Christian faith.",
    category: "Foundation"
  },
  {
    day: 40,
    title: "Blood of Jesus - Part 2",
    duration: "58:44 min",
    verse: "Mark 15:33-34",
    desc: "The significance of the blood of Jesus in the Christian faith.",
    category: "Foundation"
  },
  {
    day: 41,
    title: "Parable of Old Cloth & Wineskins",
    duration: "41:18 min",
    verse: "Luke 5:33-39",
    desc: "An explanation of the parable of old cloth and wineskins and its significance for believers.",
    category: "Parables"
  },
  {
    day: 42,
    title: "Why Angels Announce Jesus' Birth to Shepherds?",
    file: "Why Angels Announce Jesus' Birth to Shepherds",
    duration: "17:30 min",
    verse: "Luke 2:8-20",
    desc: "The reason why angels announced the birth of Jesus to shepherds and its significance.",
    category: "Do You Know?"
  },
  {
    day: 43,
    title: "Lot - Abraham's Nephew",
    duration: "66:02 min",
    verse: "Gen 12-14, 18-19",
    desc: "The story of Lot, Abraham's nephew, and his role in the story of Abraham.",
    category: "Characters"
  },
  {
    day: 44,
    title: "Jesus sent another 70",
    duration: "51:36 min",
    verse: "Luke 10:1-24",
    desc: "Jesus sends out seventy-two disciples to preach the gospel and heal the sick.",
    category: "Do You Know?"
  },
  {
    day: 45,
    title: "Naaman - The Syrian Leper",
    duration: "49:34 min",
    verse: "2 Kings 5",
    desc: "The story of Naaman, the Syrian leper, and his healing through the prophet Elisha.",
    category: "Characters"
  },
  {
    day: 46,
    title: "Parable of Vineyard Workers",
    duration: "51:43 min",
    verse: "Matthew 20:1-16",
    desc: "The parable of the vineyard workers and its significance for believers.",
    category: "Parables",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "01:58", label: "திராட்சைத் தோட்ட உவமை", seconds: 118 },
      { time: "04:06", label: "பேதுருவின் கேள்வி", seconds: 246 },
      { time: "06:04", label: "உவமை வாசிப்பு", seconds: 364 },
      { time: "11:46", label: "வேதாகமக் காலக் கணிப்பு", seconds: 706 },
      { time: "18:33", label: "கூலி & முறுமுறுப்பு", seconds: 1113 },
      { time: "21:03", label: "எஜமானின் நியாயம்", seconds: 1263 },
      { time: "23:40", label: "உவமையின் ஆவிக்குரிய அர்த்தம்", seconds: 1420 },
      { time: "31:00", label: "யூதர்கள் vs புறஜாதிகள்", seconds: 1860 },
      { time: "38:14", label: "பரலோகப் பொக்கிஷம்", seconds: 2294 },
      { time: "43:45", label: "இருதய சோதனை & சாட்சி", seconds: 2625 },
      { time: "47:40", label: "முந்தினோர் பிந்தினோர்", seconds: 2860 }
    ]
  },
  {
    day: 47,
    title: "Achan - The Sin Under the Tent",
    duration: "51:46 min",
    verse: "Joshua 7",
    desc: "Achan took forbidden spoils from Jericho, causing Israel's defeat and bringing God's judgment.",
    category: "Characters",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "01:19", label: "எரிகோ & சாபப்பொருட்கள்", seconds: 79 },
      { time: "04:19", label: "எரிகோ மதில் & ராகாப்", seconds: 259 },
      { time: "13:15", label: "இஸ்ரவேலின் பாவம் & ஆகான்", seconds: 795 },
      { time: "16:16", label: "ஆயி பட்டணத் தோல்வி", seconds: 976 },
      { time: "20:54", label: "யோசுவாவின் புலம்பல்", seconds: 1254 },
      { time: "23:48", label: "தோல்விக்கான காரணம்", seconds: 1428 },
      { time: "30:30", label: "குற்றவாளியைக் கண்டறிதல்", seconds: 1830 },
      { time: "35:12", label: "ஆகானின் பாவ அறிக்கை", seconds: 2112 },
      { time: "41:30", label: "திருடப்பட்ட பொருட்கள்", seconds: 2490 },
      { time: "43:10", label: "ஆகோர் பள்ளத்தாக்கு நியாயத்தீர்ப்பு", seconds: 2590 },
      { time: "44:40", label: "இச்சை & பாவத்தின் விளைவு", seconds: 2680 },
      { time: "50:30", label: "ஆவிக்குரிய பாடங்கள் & முடிவு", seconds: 3030 }
    ]
  },
  {
    day: 48,
    title: "The Seven Raptures",
    duration: "60:50 min",
    verse: "1 Thes 4:16-17",
    desc: "A study of seven biblical raptures and those who were caught up into God's presence.",
    category: "7's",
    timestamps: [
      { time: "01:19", label: "அறிமுகம்", seconds: 79 },
      { time: "05:21", label: "ஏனோக்கு", seconds: 321 },
      { time: "11:18", label: "எலியா", seconds: 678 },
      { time: "22:42", label: "இயேசு கிறிஸ்து", seconds: 1362 },
      { time: "27:14", label: "அப்போஸ்தலன் பவுல்", seconds: 1634 },
      { time: "38:03", label: "சபை", seconds: 2283 },
      { time: "40:17", label: "1,44,000 பேர்", seconds: 2417 },
      { time: "50:28", label: "இரண்டு சாட்சிகள்", seconds: 3028 },
      { time: "58:08", label: "முடிவு", seconds: 3488 }
    ]
  },
  {
    day: 49,
    title: "The Wedding at Cana",
    duration: "59:06 min",
    verse: "John 2:1-11",
    desc: "Jesus performed His first miracle by turning water into wine, revealing His glory.",
    category: "Miracles",
    timestamps: [
      { time: "02:06", label: "அறிமுகம்", seconds: 126 },
      { time: "03:03", label: "1வது வசனம்", seconds: 183 },
      { time: "17:13", label: "2வது வசனம்", seconds: 1033 },
      { time: "23:05", label: "3வது வசனம்", seconds: 1386 },
      { time: "30:13", label: "4வது வசனம்", seconds: 1813 },
      { time: "33:25", label: "5வது வசனம்", seconds: 2005 },
      { time: "37:00", label: "6வது வசனம்", seconds: 2220 },
      { time: "40:13", label: "7வது வசனம்", seconds: 2413 },
      { time: "42:09", label: "8வது வசனம்", seconds: 2529 },
      { time: "44:59", label: "9வது வசனம்", seconds: 2699 },
      { time: "46:48", label: "10வது வசனம்", seconds: 2808 },
      { time: "47:39", label: "11வது வசனம்", seconds: 2859 },
      { time: "52:55", label: "12வது வசனம்", seconds: 3175 },
      { time: "56:21", label: "முடிவு", seconds: 3381 }
    ]
  },
  {
    day: 50,
    title: "Ananias and Sapphira",
    duration: "30:08 min",
    verse: "Acts 5:1-11",
    desc: "Ananias and Sapphira lied to the Holy Spirit and died immediately.",
    category: "Characters",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "01:10", label: "ஆரம்பகால சபை", seconds: 70 },
      { time: "04:44", label: "அப்போஸ்தலர்களின் தைரியம்", seconds: 284 },
      { time: "07:26", label: "விசுவாசிகளின் பகிர்வு", seconds: 446 },
      { time: "11:50", label: "அனனியா & சப்பீராள்", seconds: 710 },
      { time: "13:24", label: "அனனியாவின் மரணம்", seconds: 804 },
      { time: "17:30", label: "சப்பீராளின் நியாயத்தீர்ப்பு", seconds: 1050 },
      { time: "19:15", label: "பாவத்தின் மூலக் காரணம்", seconds: 1155 },
      { time: "20:50", label: "உண்மைத்துவம் & போராட்டம்", seconds: 1250 },
      { time: "26:30", label: "பரிசுத்த ஆவியானவரிடம் பொய்", seconds: 1590 }
    ]
  },
  {
    day: 51,
    title: "12 Baskets vs 7 Baskets",
    duration: "38:07 min",
    verse: "Mat 14; Mat 15",
    desc: "Jesus fed 5,000 and 4,000 people, leaving 12 and 7 baskets respectively.",
    category: "Miracles",
    timestamps: [
      { time: "00:00", label: "அறிமுகம்", seconds: 0 },
      { time: "01:07", label: "5000 பேருக்கு போஷித்தல்", seconds: 67 },
      { time: "05:42", label: "4000 பேருக்கு போஷித்தல்", seconds: 342 },
      { time: "09:12", label: "சரீரம் & ஆவி", seconds: 552 },
      { time: "14:00", label: "ஆசீர்வதித்து பெருக்கும் தேவன்", seconds: 840 },
      { time: "19:05", label: "சீஷர்கள் மறதி & தேவ கிருபை", seconds: 1145 },
      { time: "21:00", label: "12 & 7 கூடைகள்", seconds: 1260 },
      { time: "23:01", label: "கிரேக்க வார்த்தை விளக்கம்", seconds: 1381 },
      { time: "27:02", label: "நிரம்பி வழியும் ஆசீர்வாதம்", seconds: 1622 },
      { time: "32:45", label: "புளித்த மாவு & நிறைவு", seconds: 1965 }
    ]
  },
  {
    day: 52,
    title: "The 10 Plagues - Part 1",
    duration: "67:01 min",
    verse: "Exodus 7-10",
    desc: "The first 5 plagues: water to blood, frogs, gnats, flies, and livestock pestilence.",
    category: "Exodus",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "01:06", label: "வரலாற்றுப் பின்னணி", seconds: 66 },
      { time: "08:16", label: "மோசேயின் அழைப்பு", seconds: 496 },
      { time: "16:15", label: "10 வாதைகளின் நோக்கம்", seconds: 975 },
      { time: "28:20", label: "1வது வாதை", seconds: 1700 },
      { time: "40:38", label: "2வது வாதை", seconds: 2438 },
      { time: "47:01", label: "3வது வாதை", seconds: 2821 },
      { time: "52:26", label: "4வது வாதை", seconds: 3146 },
      { time: "57:26", label: "5வது வாதை", seconds: 3446 },
      { time: "1:04:25", label: "முதல் 5 வாதைகள் சுருக்கம்", seconds: 3865 }
    ]
  },
  {
    day: 53,
    title: "The 10 Plagues - Part 2",
    duration: "37:09 min",
    verse: "Exodus 10-12",
    desc: "The last 5 plagues: locusts, darkness, livestock pestilence, boils, and hailstorm.",
    category: "Exodus",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "01:05", label: "முதல் 5 வாதைகள் சுருக்கம்", seconds: 65 },
      { time: "04:59", label: "6வது வாதை", seconds: 299 },
      { time: "09:27", label: "7வது வாதை", seconds: 567 },
      { time: "18:24", label: "8வது வாதை", seconds: 1104 },
      { time: "22:38", label: "9வது வாதை", seconds: 1358 },
      { time: "30:23", label: "10வது வாதை", seconds: 1823 },
      { time: "35:34", label: "முடிவுரை", seconds: 2134 }
    ]
  },
  {
    day: 54,
    title: "The Rainbow",
    duration: "22:02 min",
    verse: "Genesis 9:8-17",
    desc: "The rainbow is a symbol of God's promise to never flood the earth again.",
    cardBg: "resources/images/rainbow.png",
    category: "Do You Know?",
    timestamps: [
      { time: "00:00", label: "வானவில் அறிமுகம்", seconds: 0 },
      { time: "00:39", label: "நோவாவின் பின்னணி", seconds: 39 },
      { time: "04:34", label: "நோவாவின் உடன்படிக்கை", seconds: 274 },
      { time: "07:15", label: "பலுகிப் பெருகுதல்", seconds: 435 },
      { time: "10:07", label: "வானவில்லின் தவறான பயன்பாடு", seconds: 607 },
      { time: "16:14", label: "ஆதி 3:15 தீர்க்கதரிசனம்", seconds: 974 },
      { time: "18:28", label: "வானவில்லின் உண்மை அர்த்தம்", seconds: 1108 },
      { time: "21:23", label: "நிறைவு", seconds: 1283 }
    ]
  },
  {
    day: 55,
    title: "Psalm 1",
    duration: "15:28 min",
    verse: "Psalm 1",
    desc: "How to live a blessed life through meditation on God's law.",
    category: "Psalms",
    timestamps: [
      { time: "00:00", label: "அறிமுகம்", seconds: 0 },
      { time: "01:54", label: "நடைமுறை சிக்கல்கள்", seconds: 114 },
      { time: "04:20", label: "பவுலின் விளக்கம்", seconds: 260 },
      { time: "08:28", label: "உலகத்தில் வாழும் முறை", seconds: 508 },
      { time: "09:40", label: "இயேசுவின் முன்மாதிரி", seconds: 580 },
      { time: "11:50", label: "படகு & கடல் உவமை", seconds: 710 },
      { time: "14:36", label: "ஆசீர்வதிக்கப்பட்ட மனிதன்", seconds: 876 }
    ]
  },
  {
    day: 56,
    title: "The 10 Commandments - Part 1",
    duration: "58:12 min",
    verse: "Exodus 20:1-12",
    desc: "The first five commandments about God, idols, His name, the Sabbath, and honoring parents.",
    category: "Exodus",
    timestamps: [
      { time: "00:00", label: "ஆரம்ப ஜெபம்", seconds: 0 },
      { time: "01:23", label: "வரலாற்றுப் பின்னணி", seconds: 83 },
      { time: "07:12", label: "மோசே & கற்பலகைகள்", seconds: 432 },
      { time: "10:20", label: "10 & 2 கட்டளைகள்", seconds: 620 },
      { time: "12:04", label: "கற்பலகை அமைப்பு", seconds: 724 },
      { time: "15:12", label: "கற்பனை 1", seconds: 912 },
      { time: "18:49", label: "கற்பனை 2", seconds: 1129 },
      { time: "26:56", label: "கற்பனை 3", seconds: 1616 },
      { time: "36:20", label: "கற்பனை 4", seconds: 2180 },
      { time: "44:35", label: "6 நாள் வேலை", seconds: 2675 },
      { time: "48:14", label: "கற்பனை 5", seconds: 2894 },
      { time: "52:18", label: "கீழ்ப்படிதல் vs தேவ வார்த்தை", seconds: 3138 },
      { time: "55:57", label: "சுருக்கம் & நிறைவு", seconds: 3357 }
    ]
  },
  {
    day: 57,
    title: "The 10 Commandments - Part 2",
    duration: "54:46 min",
    verse: "Exodus 20:13-17",
    desc: "The last five commandments about murder, adultery, stealing, lying, and coveting.",
    category: "Exodus",
    timestamps: [
      { time: "00:00", label: "பின்னணி & 1-5 சுருக்கம்", seconds: 0 },
      { time: "15:15", label: "கற்பனை 6", seconds: 915 },
      { time: "25:33", label: "கற்பனை 7", seconds: 1533 },
      { time: "30:49", label: "கற்பனை 8", seconds: 1849 },
      { time: "40:46", label: "கற்பனை 9", seconds: 2446 },
      { time: "47:00", label: "கற்பனை 10", seconds: 2820 },
      { time: "52:01", label: "2 பிரதான கட்டளைகள் & நிறைவு", seconds: 3121 }
    ]
  },
  {
    day: 58,
    title: "Parable of Unjust Steward",
    duration: "14:53 min",
    verse: "Luke 16:1-13",
    desc: "The parable of the unjust steward and its significance for believers.",
    category: "Parables",
    timestamps: [
      { time: "00:00", label: "அறிமுகம்", seconds: 0 },
      { time: "00:50", label: "கணக்குக் கேட்டல்", seconds: 50 },
      { time: "02:45", label: "மேனேஜரின் திட்டம்", seconds: 165 },
      { time: "04:32", label: "கடனாளிகள் ஒப்பந்தம்", seconds: 272 },
      { time: "06:33", label: "எஜமானின் பாராட்டு", seconds: 393 },
      { time: "07:10", label: "ஆவிக்குரிய பாடங்கள்", seconds: 430 }
    ]
  },
  {
    day: 59,
    title: "Herod - the Great",
    duration: "48:34 min",
    verse: "Matthew 2:1-19",
    desc: "The reign of King Herod the Great and his confrontation with the birth of Christ.",
    category: "Characters",
    timestamps: [
      { time: "00:00", label: "ஆரம்ப ஜெபம்", seconds: 0 },
      { time: "01:39", label: "புதிய ஏற்பாடு அறிமுகம்", seconds: 99 },
      { time: "04:27", label: "4 சுவிசேஷங்கள்", seconds: 267 },
      { time: "08:06", label: "தானியேல் & வெளிப்படுத்தல்", seconds: 486 },
      { time: "13:05", label: "ஏரோது ராஜா", seconds: 785 },
      { time: "14:33", label: "ரோமப் பேரரசு & இஸ்ரவேல்", seconds: 873 },
      { time: "21:21", label: "ஏதோமியர் & ஏசா வம்சம்", seconds: 1281 },
      { time: "26:00", label: "பெட்ரா நகரம்", seconds: 1560 },
      { time: "28:28", label: "ஒபதியா தீர்க்கதரிசனம்", seconds: 1708 },
      { time: "34:07", label: "ஜூலியஸ் சீசர் & ஏரோது", seconds: 2047 },
      { time: "38:54", label: "தேவாலயம் & புலம்பல் சுவர்", seconds: 2334 },
      { time: "42:31", label: "ஏரோது & எருசலேம்", seconds: 2551 },
      { time: "45:34", label: "அழிவு, இஸ்ரவேல் & நிறைவு", seconds: 2734 }
    ]
  },
  {
    day: 60,
    title: "The Magi and the Star",
    duration: "46:22 min",
    verse: "Matthew 2:1-12",
    desc: "The journey of the wise men from the East following the star to worship the newborn King.",
    category: "Characters",
    timestamps: [
      { time: "00:00", label: "தொடக்க ஜெபம்", seconds: 0 },
      { time: "00:57", label: "ஏரோது மன்னனும் சாஸ்திரிகளும்", seconds: 57 },
      { time: "04:26", label: "யூதரின் ராஜா எங்கே? ஏரோதின் கலக்கம்", seconds: 266 },
      { time: "08:39", label: "சாஸ்திரிகள் மூவர் மட்டுமா?", seconds: 519 },
      { time: "13:04", label: "வான சாஸ்திரமும் நட்சத்திரங்களும்", seconds: 784 },
      { time: "18:37", label: "பாபிலோன் கோபுரமும் சாஸ்திரிகளும்", seconds: 1117 },
      { time: "23:08", label: "90 நாட்கள் அசையாத நட்சத்திரம்", seconds: 1388 },
      { time: "26:36", label: "தானியேலும் சாஸ்திரிகளும்", seconds: 1596 },
      { time: "30:51", label: "பொன், தூபவர்க்கம், வெள்ளைப்போளம்", seconds: 1851 },
      { time: "36:09", label: "நட்சத்திரம் மீண்டும் நகருதல்", seconds: 2169 },
      { time: "37:25", label: "மாட்டுத் தொழுவமல்ல, வீடு", seconds: 2245 },
      { time: "40:32", label: "Brephos vs Paidion", seconds: 2432 },
      { time: "45:16", label: "சாஸ்திரிகளின் வருகை: சுருக்கம்", seconds: 2716 }
    ]
  },
  {
    day: 61,
    title: "Tithe (one-tenth, or 10%)",
    file: "Tithe",
    duration: "43:01 min",
    verse: "Levi 27:30; Malachi 3:10",
    desc: "Understanding the biblical meaning, principles, and practice of tithing.",
    category: "Foundation"
  },
  {
    day: 62,
    title: "Zacchaeus",
    duration: "32:57 min",
    verse: "Luke 19:1-10",
    desc: "The encounter of Zacchaeus the tax collector with Jesus and how salvation came to his house.",
    category: "Characters"
  },
  {
    day: 63,
    title: "Gideon - Part 1",
    duration: "64:34 min",
    verse: "Judges 6, 7",
    desc: "The call of Gideon, tearing down the altar of Baal, and the sign of the fleece.",
    category: "Characters"
  },
  {
    day: 64,
    title: "Gideon - Part 2",
    duration: "40:53 min",
    verse: "Judges 8, 9",
    desc: "Gideon's foolishness in making the ephod and how it became a snare to Israel.",
    category: "Characters"
  },
  {
    day: 65,
    title: "Unleavened Bread & Firstfruits",
    duration: "45:23 min",
    verse: "Leviticus 23:6-14",
    desc: "The prophetic meaning and spiritual significance of the Feast of Unleavened Bread and Firstfruits.",
    category: "Festivals"
  },
  {
    day: 66,
    title: "Pentecost",
    duration: "39:20 min",
    verse: "Leviticus 23:15-22",
    desc: "The prophetic meaning and spiritual significance of the Feast of Pentecost.",
    category: "Festivals"
  },
  {
    day: 67,
    title: "Feast of Trumpets & Tabernacles",
    duration: "50:28 min",
    verse: "Leviticus 23:23-44",
    desc: "The prophetic meaning of the Feast of Trumpets and the Feast of Tabernacles.",
    category: "Festivals"
  },
  {
    day: 68,
    title: "Jesus Barabbas",
    duration: "24:36 min",
    verse: "Matthew 27:15-26",
    desc: "The story of Jesus Barabbas, the prisoner released instead of Jesus Christ.",
    category: "Characters"
  },
  {
    day: 69,
    title: "The Saints who rose from the Tombs",
    duration: "50:28 min",
    verse: "Matthew 27:50-53",
    desc: "The saints raised from the tombs after Jesus Christ's resurrection, revealing His victory over death.",
    category: "Characters"
  },
  {
    day: 70,
    title: "The Feast of Purim",
    duration: "45:52 min",
    verse: "Esther 9:20-32",
    desc: "Remembering God's deliverance of the Jews from Haman's evil plan through Esther and Mordecai.",
    category: "Festivals"
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Bible Folder Groups
//
// Each folder appears as a chip in the filter row at the top of the page.
// Filter types:
//   { type: "all" }                      → shows every track
//   { type: "category", value: "..." }   → filters by track.category
//   { type: "days", value: [1, 2, 3] }   → filters by specific day numbers
//
// To add a new folder: add a new entry below following the same format.
// ─────────────────────────────────────────────────────────────────────────────
const BIBLE_FOLDERS = [
  { name: "All", type: "all" },
  { name: "Foundation", type: "category", value: "Foundation" },
  { name: "Characters", type: "category", value: "Characters" },
  { name: "Do You Know?", type: "category", value: "Do You Know?" },
  { name: "Melkishedhek", type: "category", value: "Melkishedhek" },
  { name: "Festivals", type: "category", value: "Festivals" },
  { name: "Christophany", type: "category", value: "Christophany" },
  { name: "False Teaching", type: "category", value: "False Teaching" },
  { name: "Psalms", type: "category", value: "Psalms" },
  { name: "Leviticus", type: "category", value: "Leviticus" },
  { name: "Parables", type: "category", value: "Parables" },
  { name: "Prophets", type: "category", value: "Prophets" },
  { name: "7's", type: "category", value: "7's" },
  { name: "Miracles", type: "category", value: "Miracles" },
  { name: "Exodus", type: "category", value: "Exodus" }
];
