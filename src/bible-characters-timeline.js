// Timeline data for Bible characters
// Structure: character name -> array of chapters with events and references
// Add new character timelines by following the same structure

const timelineData = {
  'Moses': [
    {
      chapter: 'Birth and Early Preservation',
      events: [
        { name: 'Birth of Moses', ref: 'Exodus 2:1–2' },
        { name: 'Hidden for Three Months', ref: 'Exodus 2:2' },
        { name: 'Placed in the Basket in the Nile', ref: 'Exodus 2:3–4' },
        { name: "Discovered by Pharaoh's Daughter", ref: 'Exodus 2:5–6' },
        { name: 'Raised by His Own Mother', ref: 'Exodus 2:7–9' },
        { name: "Adopted as Pharaoh's Daughter's Son", ref: 'Exodus 2:10' },
      ]
    },
    {
      chapter: 'Early Life in Egypt',
      events: [
        { name: 'Moses Educated in Egyptian Wisdom', ref: 'Acts 7:22' },
        { name: "Moses' Awareness of His Hebrew Identity", ref: 'Exodus 2:11' },
        { name: 'Killing the Egyptian', ref: 'Exodus 2:11–12' },
        { name: 'Moses Rebukes Fighting Hebrews', ref: 'Exodus 2:13–14' },
        { name: 'Moses Flees from Egypt', ref: 'Exodus 2:15' },
        { name: 'Pharaoh Seeks to Kill Moses', ref: 'Exodus 2:15' },
      ]
    },
    {
      chapter: 'Life in Midian',
      events: [
        { name: "Moses Defends Jethro's Daughters", ref: 'Exodus 2:16–17' },
        { name: "Moses Welcomed into Jethro's Household", ref: 'Exodus 2:18–21' },
        { name: 'Marriage to Zipporah', ref: 'Exodus 2:21' },
        { name: 'Birth of Gershom', ref: 'Exodus 2:22' },
        { name: 'Birth of Eliezer', ref: 'Exodus 18:3–4' },
        { name: 'Moses as a Shepherd in Midian', ref: 'Exodus 3:1' },
      ]
    },
    {
      chapter: 'The Divine Calling',
      events: [
        { name: 'Encounter with the Burning Bush', ref: 'Exodus 3:1–6' },
        { name: 'God Reveals His Name (I AM)', ref: 'Exodus 3:13–15' },
        { name: 'Moses Commissioned to Deliver Israel', ref: 'Exodus 3:7–10' },
        { name: "Moses' Objections to God's Call", ref: 'Exodus 3:11; 4:1; 4:10; 4:13' },
        { name: 'God Appoints Aaron as Spokesman', ref: 'Exodus 4:14–16' },
        { name: 'Moses Given Miraculous Signs', ref: 'Exodus 4:2–9' },
        { name: 'Moses Returns to Egypt', ref: 'Exodus 4:18–20' },
        { name: 'The Lord Seeks to Kill Moses', ref: 'Exodus 4:24–26' },
      ]
    },
  ]
  
  // Add more characters here - paste your timeline data in this format:
  // 'CharacterName': [
  //   {
  //     chapter: 'Chapter Title',
  //     events: [
  //       { name: 'Event name', ref: 'Book Chapter:Verse' },
  //       ...
  //     ]
  //   },
  //   ...
  // ]
};
