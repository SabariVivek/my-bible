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
    category: "Parables"
  },
  {
    day: 47,
    title: "Achan - The Sin Under the Tent",
    duration: "51:46 min",
    verse: "Joshua 7",
    desc: "Achan took forbidden spoils from Jericho, causing Israel's defeat and bringing God's judgment.",
    category: "Characters"
  },
  {
    day: 48,
    title: "The Seven Raptures",
    duration: "60:50 min",
    verse: "1 Thes 4:16-17",
    desc: "A study of seven biblical raptures and those who were caught up into God's presence.",
    category: "7's",
    timestamps: [
      { time: "01:19", label: "Introduction", seconds: 79 },
      { time: "05:21", label: "Enoch", seconds: 321 },
      { time: "11:18", label: "Elijah", seconds: 678 },
      { time: "22:42", label: "Jesus Christ", seconds: 1362 },
      { time: "27:14", label: "Apostle Paul", seconds: 1634 },
      { time: "38:03", label: "The Church", seconds: 2283 },
      { time: "40:17", label: "The 1,44,000", seconds: 2417 },
      { time: "50:28", label: "Two Witnessess", seconds: 3028 },
      { time: "58:08", label: "End", seconds: 3488 }
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
      { time: "02:06", label: "Introduction", seconds: 126 },
      { time: "03:03", label: "1<sup>st</sup> Verse", seconds: 183 },
      { time: "17:13", label: "2<sup>nd</sup> Verse", seconds: 1033 },
      { time: "23:05", label: "3<sup>rd</sup> Verse", seconds: 1386 },
      { time: "30:13", label: "4<sup>th</sup> Verse", seconds: 1813 },
      { time: "33:25", label: "5<sup>th</sup> Verse", seconds: 2005 },
      { time: "37:00", label: "6<sup>th</sup> Verse", seconds: 2220 },
      { time: "40:13", label: "7<sup>th</sup> Verse", seconds: 2413 },
      { time: "42:09", label: "8<sup>th</sup> Verse", seconds: 2529 },
      { time: "44:59", label: "9<sup>th</sup> Verse", seconds: 2699 },
      { time: "46:48", label: "10<sup>th</sup> Verse", seconds: 2808 },
      { time: "47:39", label: "11<sup>th</sup> Verse", seconds: 2859 },
      { time: "52:55", label: "12<sup>th</sup> Verse", seconds: 3175 },
      { time: "56:21", label: "End", seconds: 3381 }
    ]
  },
  {
    day: 50,
    title: "Ananias and Sapphira",
    duration: "30:08 min",
    verse: "Acts 5:1-11",
    desc: "Ananias and Sapphira lied to the Holy Spirit and died immediately.",
    category: "Characters"
  },
  {
    day: 51,
    title: "12 Baskets vs 7 Baskets",
    duration: "38:07 min",
    verse: "Mat 14; Mat 15",
    desc: "Jesus fed 5,000 and 4,000 people, leaving 12 and 7 baskets respectively.",
    category: "Miracles"
  },
  {
    day: 52,
    title: "The 10 Plagues - Part 1",
    duration: "67:01 min",
    verse: "Exodus 7-10",
    desc: "The first 5 plagues: water to blood, frogs, gnats, flies, and livestock pestilence.",
    category: "Exodus"
  },
  {
    day: 54,
    title: "The 10 Plagues - Part 2",
    duration: "Coming Soon",
    verse: "Exodus 10-12",
    desc: "The last 5 plagues: locusts, darkness, livestock pestilence, boils, and hailstorm.",
    category: "Exodus"
  },
  {
    day: 53,
    title: "The Rainbow",
    duration: "22:02 min",
    verse: "Genesis 9:8-17",
    desc: "The rainbow is a symbol of God's promise to never flood the earth again.",
    cardBg: "resources/images/rainbow.png",
    category: "Do You Know?"
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
