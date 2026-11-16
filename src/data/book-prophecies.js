// Old Testament quotations in each Gospel/book (loaded on demand by script.js for the "Prophecies" panel)
//
// category:
//   "prophecy" – presented as a prediction fulfilled in Jesus or still to come
//   "law"      – a commandment or legal text from the Torah
//   "teaching" – Scripture cited in an argument, rebuke, or teaching
// fulfillmentFormula: true when the writer uses the explicit
//   "this was to fulfill what was spoken by the prophet" formula.
window.bookProphecies = {
  matthew: {
    summary: {
      "directQuotations": 54,
      "withBorderlineCases": 60,
      "usedAsProphecy": 28,
      "formalFulfillmentQuotations": 10,
      "allusionsAndEchoes": "250+",
      "mostQuotedBooks": [
        {
          "book": "Isaiah",
          "approxCount": 12
        },
        {
          "book": "Psalms",
          "approxCount": 10
        },
        {
          "book": "Deuteronomy",
          "approxCount": 9
        },
        {
          "book": "Exodus",
          "approxCount": 8
        }
      ],
      "mostRepeatedVerse": {
        "reference": "Leviticus 19:18",
        "content": "Love your neighbor",
        "timesQuoted": 3,
        "locations": [
          "5:43",
          "19:19",
          "22:39"
        ]
      }
    },
    directQuotations: [
      { id: 1, matthew: "1:23", source: ["Isaiah 7:14"], content: "Virgin will conceive, Immanuel", category: "prophecy", fulfillmentFormula: true },
      { id: 2, matthew: "2:6", source: ["Micah 5:2","2 Samuel 5:2"], content: "Ruler from Bethlehem", category: "prophecy", fulfillmentFormula: false },
      { id: 3, matthew: "2:15", source: ["Hosea 11:1"], content: "Out of Egypt I called my son", category: "prophecy", fulfillmentFormula: true },
      { id: 4, matthew: "2:18", source: ["Jeremiah 31:15"], content: "Rachel weeping", category: "prophecy", fulfillmentFormula: true },
      { id: 5, matthew: "2:23", source: ["Uncertain"], content: "He shall be called a Nazarene", category: "prophecy", fulfillmentFormula: true },
      { id: 6, matthew: "3:3", source: ["Isaiah 40:3"], content: "Voice in the wilderness", category: "prophecy", fulfillmentFormula: false },
      { id: 7, matthew: "4:4", source: ["Deuteronomy 8:3"], content: "Man shall not live by bread alone", category: "teaching", fulfillmentFormula: false },
      { id: 8, matthew: "4:6", source: ["Psalm 91:11-12"], content: "Angels will bear you up", category: "teaching", fulfillmentFormula: false },
      { id: 9, matthew: "4:7", source: ["Deuteronomy 6:16"], content: "Do not test the Lord", category: "teaching", fulfillmentFormula: false },
      { id: 10, matthew: "4:10", source: ["Deuteronomy 6:13"], content: "Worship the Lord only", category: "teaching", fulfillmentFormula: false },
      { id: 11, matthew: "4:15-16", source: ["Isaiah 9:1-2"], content: "Galilee of the Gentiles, great light", category: "prophecy", fulfillmentFormula: true },
      { id: 12, matthew: "5:21", source: ["Exodus 20:13"], content: "You shall not murder", category: "law", fulfillmentFormula: false },
      { id: 13, matthew: "5:27", source: ["Exodus 20:14"], content: "You shall not commit adultery", category: "law", fulfillmentFormula: false },
      { id: 14, matthew: "5:31", source: ["Deuteronomy 24:1"], content: "Certificate of divorce", category: "law", fulfillmentFormula: false },
      { id: 15, matthew: "5:33", source: ["Leviticus 19:12","Numbers 30:2"], content: "Do not swear falsely", category: "law", fulfillmentFormula: false },
      { id: 16, matthew: "5:38", source: ["Exodus 21:24"], content: "Eye for an eye", category: "law", fulfillmentFormula: false },
      { id: 17, matthew: "5:43", source: ["Leviticus 19:18"], content: "Love your neighbor", category: "law", fulfillmentFormula: false },
      { id: 18, matthew: "8:17", source: ["Isaiah 53:4"], content: "He took our infirmities", category: "prophecy", fulfillmentFormula: true },
      { id: 19, matthew: "9:13", source: ["Hosea 6:6"], content: "I desire mercy, not sacrifice", category: "teaching", fulfillmentFormula: false },
      { id: 20, matthew: "10:35-36", source: ["Micah 7:6"], content: "Son against father", category: "prophecy", fulfillmentFormula: false },
      { id: 21, matthew: "11:5", source: ["Isaiah 35:5-6","Isaiah 61:1"], content: "Blind see, good news to the poor", category: "prophecy", fulfillmentFormula: false },
      { id: 22, matthew: "11:10", source: ["Malachi 3:1"], content: "I send my messenger", category: "prophecy", fulfillmentFormula: false },
      { id: 23, matthew: "12:7", source: ["Hosea 6:6"], content: "I desire mercy (second use)", category: "teaching", fulfillmentFormula: false },
      { id: 24, matthew: "12:18-21", source: ["Isaiah 42:1-4"], content: "Behold my servant", category: "prophecy", fulfillmentFormula: true },
      { id: 25, matthew: "12:40", source: ["Jonah 1:17"], content: "Three days and nights in the fish", category: "prophecy", fulfillmentFormula: false },
      { id: 26, matthew: "13:14-15", source: ["Isaiah 6:9-10"], content: "Hearing but not understanding", category: "prophecy", fulfillmentFormula: false },
      { id: 27, matthew: "13:35", source: ["Psalm 78:2"], content: "I will open my mouth in parables", category: "prophecy", fulfillmentFormula: true },
      { id: 28, matthew: "15:4a", source: ["Exodus 20:12"], content: "Honor your father and mother", category: "law", fulfillmentFormula: false },
      { id: 29, matthew: "15:4b", source: ["Exodus 21:17"], content: "Whoever curses father or mother", category: "law", fulfillmentFormula: false },
      { id: 30, matthew: "15:8-9", source: ["Isaiah 29:13"], content: "Honor me with their lips", category: "prophecy", fulfillmentFormula: false },
      { id: 31, matthew: "18:16", source: ["Deuteronomy 19:15"], content: "Two or three witnesses", category: "law", fulfillmentFormula: false },
      { id: 32, matthew: "19:4", source: ["Genesis 1:27"], content: "Made them male and female", category: "teaching", fulfillmentFormula: false },
      { id: 33, matthew: "19:5", source: ["Genesis 2:24"], content: "The two become one flesh", category: "teaching", fulfillmentFormula: false },
      { id: 34, matthew: "19:7", source: ["Deuteronomy 24:1"], content: "Certificate of divorce (Pharisees)", category: "law", fulfillmentFormula: false },
      { id: 35, matthew: "19:18-19a", source: ["Exodus 20:12-16"], content: "Commandments to the rich young man", category: "law", fulfillmentFormula: false },
      { id: 36, matthew: "19:19b", source: ["Leviticus 19:18"], content: "Love your neighbor (second use)", category: "law", fulfillmentFormula: false },
      { id: 37, matthew: "21:5", source: ["Isaiah 62:11","Zechariah 9:9"], content: "Your king comes on a donkey", category: "prophecy", fulfillmentFormula: true },
      { id: 38, matthew: "21:9", source: ["Psalm 118:25-26"], content: "Hosanna, blessed is he who comes", category: "prophecy", fulfillmentFormula: false },
      { id: 39, matthew: "21:13", source: ["Isaiah 56:7","Jeremiah 7:11"], content: "House of prayer, den of robbers", category: "teaching", fulfillmentFormula: false },
      { id: 40, matthew: "21:16", source: ["Psalm 8:2"], content: "Praise from infants", category: "prophecy", fulfillmentFormula: false },
      { id: 41, matthew: "21:42", source: ["Psalm 118:22-23"], content: "Rejected stone, cornerstone", category: "prophecy", fulfillmentFormula: false },
      { id: 42, matthew: "22:24", source: ["Deuteronomy 25:5"], content: "Brother shall marry the widow", category: "law", fulfillmentFormula: false },
      { id: 43, matthew: "22:32", source: ["Exodus 3:6"], content: "God of Abraham, Isaac, Jacob", category: "teaching", fulfillmentFormula: false },
      { id: 44, matthew: "22:37", source: ["Deuteronomy 6:5"], content: "Love the Lord with all your heart", category: "law", fulfillmentFormula: false },
      { id: 45, matthew: "22:39", source: ["Leviticus 19:18"], content: "Love your neighbor (third use)", category: "law", fulfillmentFormula: false },
      { id: 46, matthew: "22:44", source: ["Psalm 110:1"], content: "Sit at my right hand", category: "prophecy", fulfillmentFormula: false },
      { id: 47, matthew: "23:39", source: ["Psalm 118:26"], content: "Blessed is he who comes (second use)", category: "teaching", fulfillmentFormula: false },
      { id: 48, matthew: "24:15", source: ["Daniel 9:27","Daniel 11:31","Daniel 12:11"], content: "Abomination of desolation", category: "prophecy", fulfillmentFormula: false },
      { id: 49, matthew: "24:29", source: ["Isaiah 13:10","Isaiah 34:4"], content: "Sun darkened, stars fall", category: "prophecy", fulfillmentFormula: false },
      { id: 50, matthew: "24:30", source: ["Daniel 7:13"], content: "Son of Man on the clouds", category: "prophecy", fulfillmentFormula: false },
      { id: 51, matthew: "26:31", source: ["Zechariah 13:7"], content: "Strike the shepherd", category: "prophecy", fulfillmentFormula: false },
      { id: 52, matthew: "26:64", source: ["Psalm 110:1","Daniel 7:13"], content: "Right hand of power, coming on clouds", category: "prophecy", fulfillmentFormula: false },
      { id: 53, matthew: "27:9-10", source: ["Zechariah 11:12-13","Jeremiah (attributed)"], content: "Thirty pieces of silver", category: "prophecy", fulfillmentFormula: true },
      { id: 54, matthew: "27:46", source: ["Psalm 22:1"], content: "My God, why have you forsaken me?", category: "prophecy", fulfillmentFormula: false }
    ],
    borderlineQuotations: [
      { matthew: "9:36", source: ["Numbers 27:17"], content: "Sheep without a shepherd" },
      { matthew: "16:27", source: ["Psalm 62:12"], content: "Repay each according to his deeds" },
      { matthew: "17:11", source: ["Malachi 4:5-6"], content: "Elijah will restore all things" },
      { matthew: "21:33", source: ["Isaiah 5:1-2"], content: "Planted a vineyard, built a tower" },
      { matthew: "27:43", source: ["Psalm 22:8"], content: "He trusts in God; let God deliver him" },
      { matthew: "27:35", source: ["Psalm 22:18"], content: "They divided my garments", note: "Later manuscripts only (e.g. KJV)" }
    ]
  }
};
