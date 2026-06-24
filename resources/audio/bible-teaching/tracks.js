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
    { day: 1,  title: "Psalm 23",              duration: "71:25 min", verse: "Psalm 23",       desc: "The Lord as shepherd — comfort, provision, and eternal dwelling." },
    { day: 2,  title: "Why 400 years wait",    duration: "40:58 min", verse: "Galatians 4:4",  desc: "The 400 years of prophetic silence and God's perfect timing to send His Son." },
    { day: 3,  title: "Judges 19",             duration: "84:15 min", verse: "Judges 19",      desc: "A dark chapter revealing Israel's moral collapse without a king." },
    { day: 4,  title: "Parable of Samaritan",  duration: "70:16 min", verse: "Luke 10:30-37",  desc: "What true neighbourly love looks like across every boundary." },
    { day: 5,  title: "Rahab",                 duration: "88:15 min", verse: "Joshua 2",       desc: "A Canaanite woman's faith that placed her in the messianic line." },
    { day: 6,  title: "Mephibosheth",          duration: "82:21 min", verse: "2 Samuel 9:7",   desc: "A picture of grace — restored to the king's table despite weakness." },
    { day: 7,  title: "Daniel - Chapter 1",    duration: "67:02 min", verse: "Daniel 1",       desc: "Daniel's faithfulness and God's provision in a foreign land." },
    { day: 8,  title: "Burnt Offering",        duration: "74:27 min", verse: "Leviticus 1",    desc: "The significance of sacrificial offerings in the Old Testament." },
    { day: 9,  title: "Jonah",                 duration: "84:24 min", verse: "Jonah 1-4",      desc: "God's mercy and the prophet's struggle with obedience and compassion." },
    { day: 10, title: "Who is Antichrist?",    file: "Who is Antichrist", duration: "35:04 min", verse: "1 John 4:1-3",   desc: "Understanding the spirit of the antichrist and its manifestation in the world." },
];

// ─────────────────────────────────────────────────────────────────────────────
// Bible Study Notes — keyed by track title (case-insensitive match)
// Add a new object here for each track that has study notes.
// ─────────────────────────────────────────────────────────────────────────────
const BIBLE_STUDY_NOTES = [
  {
    title: "Who is Antichrist?",
    tags: ["Discernment Study"],
    summary: "As Paul says in 2 Timothy 4:3-4, a time would come when people would not endure sound doctrine but would gather teachers who tell them what they want to hear. Therefore, Christians must continually return to Scripture and make Christ the center of their faith.",
    scripturePassages: [
      { reference: "Matthew 7:15-23",        summary: "Not Everyone Who Claims Christ Belongs to Christ" },
      { reference: "Matthew 24:4-5, 11, 24", summary: "False Christs and False Prophets" },
      { reference: "Acts 20:29-30",           summary: "False Teachers Can Arise from Within" },
      { reference: "2 Corinthians 11:13-15",  summary: "Satan's Deception Can Look Good" },
      { reference: "Galatians 1:8-9",         summary: "There Is Only One True Gospel" },
      { reference: "1 John 4:1-3",            summary: "Test the Spirits" },
      { reference: "2 Peter 2:1-3",           summary: "False Teachers Secretly Introduce Error" },
      { reference: "Jude 3-4",                summary: "Contend for the Faith" }
    ],
    corePrinciples: [
      "Not everyone who claims to be Christian truly follows Christ.",
      "False teachers and deceptive spirits will exist in the world.",
      "Some deception comes from outside the church, while some comes from within.",
      "Miracles, signs, titles, traditions, and religious activities are not the final test of truth.",
      "The ultimate test is whether a teaching agrees with Jesus Christ and the Scriptures.",
      "Believers are called to be discerning, test everything, and remain faithful to the true gospel."
    ]
  }
  // Add more note objects here for other tracks
];
