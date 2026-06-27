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
  { day: 1, title: "Psalm 23", duration: "71:25 min", verse: "Psalm 23", desc: "The Lord as shepherd — comfort, provision, and eternal dwelling." },
  { day: 2, title: "Why 400 years wait", duration: "40:58 min", verse: "Galatians 4:4", desc: "The 400 years of prophetic silence and God's perfect timing to send His Son." },
  { day: 3, title: "Judges 19", duration: "84:15 min", verse: "Judges 19", desc: "A dark chapter revealing Israel's moral collapse without a king." },
  { day: 4, title: "Parable of Samaritan", duration: "70:16 min", verse: "Luke 10:30-37", desc: "What true neighbourly love looks like across every boundary." },
  { day: 5, title: "Rahab", duration: "88:15 min", verse: "Joshua 2", desc: "A Canaanite woman's faith that placed her in the messianic line." },
  { day: 6, title: "Mephibosheth", duration: "82:21 min", verse: "2 Samuel 9:7", desc: "A picture of grace — restored to the king's table despite weakness." },
  { day: 7, title: "Daniel - Chapter 1", duration: "67:02 min", verse: "Daniel 1", desc: "Daniel's faithfulness and God's provision in a foreign land." },
  { day: 8, title: "Burnt Offering", duration: "74:27 min", verse: "Leviticus 1", desc: "The significance of sacrificial offerings in the Old Testament." },
  { day: 9, title: "Jonah", duration: "84:24 min", verse: "Jonah 1-4", desc: "God's mercy and the prophet's struggle with obedience and compassion." },
  { day: 10, title: "Who is Antichrist?", file: "Who is Antichrist", duration: "35:04 min", verse: "1 John 4:1-3", desc: "Understanding the spirit of the antichrist and its manifestation in the world." },
  { day: 11, title: "Passover", duration: "63:05 min", verse: "Exodus 12", desc: "The significance of the Passover in God's plan of redemption." },
  { day: 12, title: "The Bronze Serpent", duration: "63:08 min", verse: "Numbers 21:4-9", desc: "A foreshadowing of Christ's crucifixion and the power of faith." },
  { day: 13, title: "Why 1<sup>st</sup> king not from Judah?", file: "Why first king not from Judah", duration: "40:36 min", verse: "Matthew 1", desc: "Exploring the reasons behind the selection of the first king outside of Judah." },
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
  }
];
