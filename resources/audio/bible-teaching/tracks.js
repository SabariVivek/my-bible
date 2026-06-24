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
    { day: 9,  title: "Jonah",                 duration: "84:24 min", verse: "Jonah 1–4",      desc: "God's mercy and the prophet's struggle with obedience and compassion." },
    { day: 10, title: "Who is Antichrist",     duration: "35:04 min", verse: "1 John 4:1-3",   desc: "Understanding the spirit of the antichrist and its manifestation in the world." },
];
