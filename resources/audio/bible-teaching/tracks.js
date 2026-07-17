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
    category: "Do You Know?"
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
    category: "Characters"
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
    category: "Melkishedhek; Characters"
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
  { name: "Melkishedhek", type: "category", value: "Melkishedhek" },
  { name: "Festivals", type: "category", value: "Festivals" },
  { name: "Do You Know?", type: "category", value: "Do You Know?" },
  { name: "Christophany", type: "category", value: "Christophany" },
  { name: "False Teaching", type: "category", value: "False Teaching" },
  { name: "Psalms", type: "category", value: "Psalms" },
  { name: "Leviticus", type: "category", value: "Leviticus" },
  { name: "Prophets", type: "category", value: "Prophets" },
  { name: "Characters", type: "category", value: "Characters" },
  { name: "7's", type: "category", value: "7's" }
];

// ─────────────────────────────────────────────────────────────────────────────
// Bible Study Notes — keyed by track title (case-insensitive match)
// Add a new object here for each track that has study notes.
// ─────────────────────────────────────────────────────────────────────────────
const BIBLE_STUDY_NOTES = [
  // Who is Antichrist?
  {
    title: "Who is Antichrist?",
    tags: ["Discernment Study"],
    summary: "As Paul says in 2 Timothy 4:3-4, a time would come when people would not endure sound doctrine but would gather teachers who tell them what they want to hear. Therefore, Christians must continually return to Scripture and make Christ the center of their faith.",
    scripturePassages: [
      { reference: "Matthew 7:15-23", summary: "Not Everyone Who Claims Christ Belongs to Christ" },
      { reference: "Matthew 24:4-5, 11, 24", summary: "False Christs and False Prophets" },
      { reference: "Acts 20:29-30", summary: "False Teachers Can Arise from Within" },
      { reference: "2 Corinthians 11:13-15", summary: "Satan's Deception Can Look Good" },
      { reference: "Galatians 1:8-9", summary: "There Is Only One True Gospel" },
      { reference: "1 John 4:1-3", summary: "Test the Spirits" },
      { reference: "2 Peter 2:1-3", summary: "False Teachers Secretly Introduce Error" },
      { reference: "Jude 3-4", summary: "Contend for the Faith" }
    ],
    corePrinciples: [
      "Not everyone who claims to be Christian truly follows Christ.",
      "False teachers and deceptive spirits will exist in the world.",
      "Some deception comes from outside the church, while some comes from within.",
      "Miracles, signs, titles, traditions, and religious activities are not the final test of truth.",
      "The ultimate test is whether a teaching agrees with Jesus Christ and the Scriptures.",
      "Believers are called to be discerning, test everything, and remain faithful to the true gospel."
    ]
  },
  // Passover...
  {
    title: "Passover",
    tags: ["Jesus in the Old Testament"],
    summary:
      "The Passover was God's appointed way of delivering Israel from judgment and slavery in Egypt. Every part of the Passover points to Jesus Christ, the true Passover Lamb, whose blood saves believers from God's judgment and brings them into a new covenant.",

    scripturePassages: [
      { reference: "Genesis 22:7-8", summary: "God Himself Will Provide the Lamb" },
      { reference: "Exodus 12:1-30", summary: "Institution of the First Passover" },
      { reference: "Exodus 12:43-51", summary: "Rules for Eating the Passover" },
      { reference: "Exodus 13:3-10", summary: "Remember the Lord's Deliverance" },
      { reference: "Leviticus 23:4-8", summary: "Passover Becomes an Annual Feast" },
      { reference: "Isaiah 53:4-7", summary: "The Promised Suffering Lamb" },
      { reference: "John 1:29", summary: "Jesus Is the Lamb of God" },
      { reference: "Luke 22:7-20", summary: "Jesus Celebrates the Final Passover" },
      { reference: "John 19:14-36", summary: "Jesus Dies as the Passover Lamb" },
      { reference: "1 Corinthians 5:7-8", summary: "Christ Our Passover Is Sacrificed" },
      { reference: "1 Peter 1:18-21", summary: "Redeemed by the Precious Blood of Christ" },
      { reference: "Revelation 5:6-14", summary: "The Lamb Is Worthy Forever" }
    ],

    sermonSections: [
      {
        title: "1. Israel Needed Deliverance",
        points: [
          "Israel lived in slavery under Pharaoh for about 400 years.",
          "God raised Moses to deliver His people.",
          "Nine plagues did not change Pharaoh's heart.",
          "The final plague was the death of every firstborn in Egypt."
        ]
      },
      {
        title: "2. God Provided One Way of Salvation",
        points: [
          "Every family had to select a spotless male lamb.",
          "The lamb was examined before sacrifice.",
          "Its blood was placed on the doorposts and lintel.",
          "God promised that when He saw the blood, judgment would pass over that house.",
          "No amount of good works could replace the blood."
        ]
      },
      {
        title: "3. The Meaning of the Passover Meal",
        points: [
          "The roasted lamb represented complete sacrifice.",
          "Unleavened bread symbolized leaving behind sin and the old life.",
          "Bitter herbs reminded Israel of their slavery in Egypt.",
          "The meal was eaten in readiness to leave immediately.",
          "God's people were delivered by faith and obedience."
        ]
      },
      {
        title: "4. How the Passover Points to Jesus",
        points: [
          "Jesus is the true Lamb provided by God.",
          "Like the Passover lamb, Jesus was without blemish or sin.",
          "Jesus was examined but found innocent.",
          "His blood protects believers from God's judgment.",
          "Not one of His bones was broken, fulfilling the Passover requirement.",
          "Jesus died during Passover.",
          "The Last Supper transformed the Passover into the New Covenant."
        ]
      },
      {
        title: "5. What the Passover Teaches Believers",
        points: [
          "Salvation comes only through the blood of Christ.",
          "Faith must be demonstrated through obedience.",
          "Believers are delivered from slavery to sin.",
          "Christians should live holy lives, removing the 'leaven' of sin.",
          "The Lord's Supper reminds believers of the true Passover Lamb."
        ]
      }
    ],

    jesusFulfillment: [
      {
        ot: "A spotless male lamb",
        fulfillment: "Jesus lived a completely sinless life."
      },
      {
        ot: "The lamb was chosen before sacrifice",
        fulfillment: "Jesus was chosen before the foundation of the world."
      },
      {
        ot: "The lamb's blood saved from judgment",
        fulfillment: "Jesus' blood saves believers from God's wrath."
      },
      {
        ot: "The lamb had no broken bones",
        fulfillment: "Jesus' bones were not broken on the cross."
      },
      {
        ot: "Judgment passed over homes marked by blood",
        fulfillment: "Those covered by Christ's blood escape eternal judgment."
      },
      {
        ot: "Israel was delivered from Egypt",
        fulfillment: "Believers are delivered from slavery to sin."
      },
      {
        ot: "The Passover meal began a new life",
        fulfillment: "The Lord's Supper celebrates the New Covenant in Christ."
      }
    ],

    corePrinciples: [
      "God always provides the way of salvation.",
      "Salvation is by God's grace through faith, not human effort.",
      "Without the shedding of blood there is no forgiveness of sins.",
      "Jesus Christ is the fulfillment of the entire Passover.",
      "The Old Testament Passover was a shadow; Jesus is the reality.",
      "Believers are called to remember Christ's sacrifice and walk in holiness.",
      "The Lamb who delivered Israel from Egypt is the same Lamb who delivers the world from sin."
    ]
  },
  // The Bronze Serpent...
  {
    title: "The Bronze Serpent",
    tags: ["Jesus in the Old Testament"],

    summary:
      "When Israel sinned against God in the wilderness, He sent fiery serpents as judgment. God then provided a bronze serpent lifted up on a pole so that everyone who looked at it in faith would live. Jesus declared that this event pointed directly to His death on the cross, where everyone who believes in Him receives eternal life.",

    scripturePassages: [
      { reference: "Numbers 21:4-9", summary: "The Bronze Serpent in the Wilderness" },
      { reference: "Deuteronomy 8:15-16", summary: "God Led Israel Through the Wilderness" },
      { reference: "2 Kings 18:4", summary: "Hezekiah Destroys the Bronze Serpent" },
      { reference: "Psalm 78:17-22", summary: "Israel's Rebellion Against God" },
      { reference: "Isaiah 45:22", summary: "Look to the Lord and Be Saved" },
      { reference: "John 3:14-18", summary: "Jesus Explains the Bronze Serpent" },
      { reference: "John 12:32-33", summary: "Jesus Would Be Lifted Up" },
      { reference: "Romans 5:8-10", summary: "Christ Died for Sinners" },
      { reference: "2 Corinthians 5:21", summary: "Christ Became Sin for Us" },
      { reference: "Galatians 3:13", summary: "Christ Bore the Curse" },
      { reference: "Hebrews 12:2", summary: "Looking to Jesus" },
      { reference: "1 Peter 2:24", summary: "He Bore Our Sins on the Tree" }
    ],

    sermonSections: [
      {
        title: "1. Israel Rebelled Against God",
        points: [
          "The Israelites became impatient during their journey.",
          "They complained against God and Moses.",
          "They despised God's provision of manna.",
          "Their unbelief revealed hearts that rejected God's goodness."
        ]
      },
      {
        title: "2. God's Judgment Came",
        points: [
          "God sent fiery serpents among the people.",
          "Many Israelites were bitten and died.",
          "The people recognized that they had sinned.",
          "They confessed their sin and asked Moses to pray for them."
        ]
      },
      {
        title: "3. God Provided One Way of Salvation",
        points: [
          "God instructed Moses to make a bronze serpent.",
          "The serpent was lifted high on a pole.",
          "Anyone who looked at it in faith would live.",
          "Healing came by trusting God's promise, not by human effort."
        ]
      },
      {
        title: "4. How the Bronze Serpent Points to Jesus",
        points: [
          "Jesus said the bronze serpent was a picture of Himself.",
          "Just as the serpent was lifted up, Jesus was lifted up on the cross.",
          "The serpent represented the judgment of sin.",
          "Jesus bore our sins and our curse in our place.",
          "Everyone who believes in Christ receives eternal life.",
          "Salvation comes through faith, not works."
        ]
      },
      {
        title: "5. What the Bronze Serpent Teaches Believers",
        points: [
          "Sin brings death.",
          "God alone provides the remedy for sin.",
          "Faith is trusting God's provision.",
          "Looking to Jesus brings eternal life.",
          "Believers should never turn God's gifts into idols."
        ]
      }
    ],

    jesusFulfillment: [
      {
        ot: "Israel sinned against God",
        fulfillment: "All people have sinned against God."
      },
      {
        ot: "Fiery serpents brought death",
        fulfillment: "Sin brings spiritual and eternal death."
      },
      {
        ot: "God provided the bronze serpent",
        fulfillment: "God provided His Son as the only Savior."
      },
      {
        ot: "The serpent was lifted up",
        fulfillment: "Jesus was lifted up on the cross."
      },
      {
        ot: "Looking at the serpent brought life",
        fulfillment: "Believing in Jesus brings eternal life."
      },
      {
        ot: "Healing was received by faith",
        fulfillment: "Salvation is received through faith in Christ."
      },
      {
        ot: "The bronze serpent later became an idol",
        fulfillment: "People must worship Christ, not religious symbols."
      }
    ],

    corePrinciples: [
      "Sin always brings death and judgment.",
      "God always provides the only way of salvation.",
      "Salvation is received by faith, not by human effort.",
      "Jesus Christ fulfilled the meaning of the bronze serpent.",
      "Everyone who looks to Christ in faith receives eternal life.",
      "God's gifts must never become objects of worship.",
      "The bronze serpent was a shadow; Jesus Christ is the reality."
    ]
  },
  // The Seven Tabernacles...
  {
    title: "The Seven Tabernacles in the Bible",
    tags: ["Jesus in the Old Testament"],
    summary:
      "Throughout Scripture, God progressively revealed His dwelling place among mankind. From the Tabernacle in the wilderness to the future heavenly dwelling, each tabernacle reveals another stage in God's redemptive plan and ultimately points to Jesus Christ, through whom believers become God's temple forever.",

    scripturePassages: [
      { reference: "Exodus 25:8-9", summary: "The Tabernacle in the Wilderness" },
      { reference: "1 Kings 6:1-38; 8:10-13", summary: "Solomon's Temple" },
      { reference: "Ezra 3:8-13; 6:14-18", summary: "Zerubbabel's Temple" },
      { reference: "John 2:20; Matthew 24:1-2", summary: "Herod's Temple" },
      { reference: "Ezekiel 40-48", summary: "Israel's Future Temple" },
      { reference: "Hebrews 8:1-5; 9:11-12, 24", summary: "The Heavenly Tabernacle" },
      { reference: "1 Corinthians 3:16; 6:19; Ephesians 2:19-22", summary: "Believers Are God's Temple" }
    ],

    sermonSections: [
      {
        title: "1. The Tabernacle in the Wilderness",
        points: [
          "Built under Moses according to God's heavenly pattern.",
          "God dwelt among Israel through the tabernacle.",
          "Every furnishing pointed to Christ and His work of redemption."
        ]
      },
      {
        title: "2. Solomon's Temple",
        points: [
          "The first permanent temple in Jerusalem.",
          "God's glory filled the house at its dedication.",
          "It became the center of Israel's worship until its destruction by Babylon."
        ]
      },
      {
        title: "3. Zerubbabel's Temple",
        points: [
          "Rebuilt after the Babylonian exile.",
          "A symbol of God's restoration and covenant faithfulness.",
          "Prepared the way for the coming Messiah."
        ]
      },
      {
        title: "4. Herod's Temple",
        points: [
          "A greatly expanded renovation of Zerubbabel's Temple.",
          "Jesus taught, healed, and cleansed this temple.",
          "Destroyed in AD 70 as Jesus foretold."
        ]
      },
      {
        title: "5. Israel's Future Temple",
        points: [
          "Described in detail by Ezekiel.",
          "Associated with God's future dealings with Israel.",
          "Demonstrates God's faithfulness to His promises."
        ]
      },
      {
        title: "6. The Heavenly Tabernacle",
        points: [
          "The true sanctuary not made with human hands.",
          "Jesus entered once for all with His own blood.",
          "It is the reality of which the earthly tabernacle was only a shadow."
        ]
      },
      {
        title: "7. Believers as God's Temple",
        points: [
          "Through the Holy Spirit, God now dwells within believers.",
          "The Church is God's spiritual temple.",
          "Believers are called to holiness because they are God's dwelling place."
        ]
      }
    ],

    corePrinciples: [
      "Every earthly tabernacle was temporary; Christ is eternal.",
      "The earthly sanctuaries were shadows of heavenly realities.",
      "Jesus is both the true Temple and the true High Priest.",
      "God's desire has always been to dwell among His people.",
      "Believers today are the temple of the Holy Spirit.",
      "The heavenly sanctuary is the fulfillment toward which every earthly temple pointed.",
      "The history of the tabernacles reveals God's complete plan of redemption."
    ]
  },
  // The Baptism...
  {
    title: "Baptism",
    tags: ["Basic Bible Doctrines"],
    summary:
      "Baptism is an outward act of obedience that publicly identifies a believer with Jesus Christ. It symbolizes the believer's union with Christ in His death, burial, and resurrection. Baptism does not save; it is the public testimony of the salvation already received by grace through faith.",

    scripturePassages: [
      { reference: "Matthew 3:13-17", summary: "Jesus Is Baptized" },
      { reference: "Matthew 28:18-20", summary: "The Great Commission" },
      { reference: "Mark 16:16", summary: "Believe and Be Baptized" },
      { reference: "Acts 2:37-41", summary: "Three Thousand Are Baptized" },
      { reference: "Acts 8:36-39", summary: "The Ethiopian Eunuch Is Baptized" },
      { reference: "Acts 10:44-48", summary: "Cornelius' Household Is Baptized" },
      { reference: "Acts 16:30-33", summary: "The Philippian Jailer Is Baptized" },
      { reference: "Acts 19:1-5", summary: "John's Baptism and Christian Baptism" },
      { reference: "Romans 6:3-6", summary: "United with Christ in His Death and Resurrection" },
      { reference: "Galatians 2:20", summary: "Crucified with Christ" },
      { reference: "Colossians 2:11-13", summary: "Buried and Raised with Christ" },
      { reference: "Ephesians 2:8-9", summary: "Salvation by Grace Through Faith" },
      { reference: "Ephesians 4:4-6", summary: "One Lord, One Faith, One Baptism" },
      { reference: "1 Peter 3:21", summary: "The Meaning of Baptism" }
    ],

    sermonSections: [
      {
        title: "1. What Is Baptism?",
        points: [
          "Baptism is an outward act of obedience to Jesus Christ.",
          "It publicly identifies a believer with Christ.",
          "It symbolizes Christ's death, burial, and resurrection.",
          "It is the testimony of a person already saved by faith."
        ]
      },
      {
        title: "2. The Meaning of Baptism",
        points: [
          "The Greek word 'baptizo' means to immerse or submerge.",
          "Going into the water pictures dying to sin.",
          "Being under the water pictures burial with Christ.",
          "Coming out of the water pictures resurrection to a new life.",
          "The believer now walks in newness of life."
        ]
      },
      {
        title: "3. Why Should We Be Baptized?",
        points: [
          "Jesus commanded every disciple to be baptized.",
          "Jesus Himself was baptized as our example.",
          "The apostles baptized every new believer.",
          "Baptism is an act of love and obedience to Christ."
        ]
      },
      {
        title: "4. Who Should Be Baptized?",
        points: [
          "Those who have heard the Gospel.",
          "Those who believe in Jesus Christ.",
          "Those who have repented of their sins.",
          "Faith always comes before baptism."
        ]
      },
      {
        title: "5. Does Baptism Save?",
        points: [
          "Salvation is by grace through faith alone.",
          "Water baptism does not remove sin.",
          "Baptism is the public confession of an inward faith.",
          "It demonstrates the salvation already received."
        ]
      },
      {
        title: "6. Why Was Jesus Baptized?",
        points: [
          "Jesus had no sin to repent of.",
          "He fulfilled all righteousness.",
          "He identified Himself with sinners.",
          "He began His public ministry.",
          "He gave believers an example to follow."
        ]
      },
      {
        title: "7. How Should Baptism Be Performed?",
        points: [
          "The New Testament pattern is baptism by immersion.",
          "Immersion best pictures death, burial, and resurrection.",
          "Jesus came up out of the water.",
          "The Ethiopian eunuch went down into the water."
        ]
      },
      {
        title: "8. Baptism in the Name of Jesus or the Trinity?",
        points: [
          "Jesus commanded baptism in the name of the Father, Son, and Holy Spirit.",
          "Acts emphasizes baptism in the name of Jesus Christ.",
          "Acts highlights Jesus' authority rather than recording the exact spoken words.",
          "Both passages complement each other and do not contradict."
        ]
      },
      {
        title: "9. What Happens Spiritually?",
        points: [
          "The old life has been crucified with Christ.",
          "The believer is united with Christ by faith.",
          "Christ now lives in the believer.",
          "Baptism declares a lifelong commitment to follow Jesus."
        ]
      },
      {
        title: "10. One Baptism",
        points: [
          "There is one Lord, one faith, and one baptism.",
          "Christian baptism is normally received once after conversion.",
          "It marks the beginning of a life of discipleship."
        ]
      }
    ],

    jesusFulfillment: [
      {
        ot: "Israel passed through the Red Sea",
        fulfillment: "Believers leave the bondage of sin and begin a new life in Christ."
      },
      {
        ot: "The priests were washed before ministry",
        fulfillment: "Jesus sanctifies believers for His service."
      },
      {
        ot: "Naaman was cleansed in the Jordan",
        fulfillment: "Christ alone provides true cleansing from sin."
      },
      {
        ot: "The ceremonial washings under the Law",
        fulfillment: "Jesus brings complete spiritual cleansing through His sacrifice."
      },
      {
        ot: "Crossing the Jordan into the Promised Land",
        fulfillment: "Believers enter a new life through faith in Christ."
      },
      {
        ot: "Noah passed safely through the flood",
        fulfillment: "Baptism symbolizes salvation through Christ, not by water itself."
      }
    ],

    corePrinciples: [
      "Baptism is commanded by Jesus Christ.",
      "Baptism follows repentance and faith.",
      "Salvation is by grace through faith, not by baptism.",
      "Baptism symbolizes Christ's death, burial, and resurrection.",
      "The believer's old life is crucified with Christ.",
      "Baptism is a public confession of faith.",
      "Christian baptism identifies believers with Jesus Christ.",
      "Matthew 28:19 gives Christ's command; Acts emphasizes Christ's authority.",
      "Every believer should obey Christ by being baptized.",
      "Baptism marks the beginning of a life of discipleship and obedience."
    ]
  },
];
