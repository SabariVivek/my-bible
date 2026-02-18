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
    {
      chapter: 'Confrontation with Pharaoh',
      events: [
        { name: 'Moses Meets Aaron', ref: 'Exodus 4:27–28' },
        { name: 'Elders of Israel Believe Moses', ref: 'Exodus 4:29–31' },
        { name: 'First Confrontation with Pharaoh', ref: 'Exodus 5:1–5' },
        { name: 'Increased Oppression of Israel', ref: 'Exodus 5:6–21' },
        { name: 'God Reassures Moses', ref: 'Exodus 6:1–13' },
      ]
    },
    {
      chapter: 'The Ten Plagues',
      events: [
        { name: 'Rod Becomes Serpent', ref: 'Exodus 7:8–13' },
        { name: 'First Plague: Water to Blood', ref: 'Exodus 7:14–25' },
        { name: 'Second Plague: Frogs', ref: 'Exodus 8:1–15' },
        { name: 'Third Plague: Gnats', ref: 'Exodus 8:16–19' },
        { name: 'Fourth Plague: Flies', ref: 'Exodus 8:20–32' },
        { name: 'Fifth Plague: Livestock', ref: 'Exodus 9:1–7' },
        { name: 'Sixth Plague: Boils', ref: 'Exodus 9:8–12' },
        { name: 'Seventh Plague: Hail', ref: 'Exodus 9:13–35' },
        { name: 'Eighth Plague: Locusts', ref: 'Exodus 10:1–20' },
        { name: 'Ninth Plague: Darkness', ref: 'Exodus 10:21–29' },
        { name: 'Tenth Plague: Death of Firstborn', ref: 'Exodus 11:1–12:30' },
      ]
    },
    {
      chapter: 'The Exodus from Egypt',
      events: [
        { name: 'Institution of the Passover', ref: 'Exodus 12:1–28' },
        { name: 'Israelites Leave Egypt', ref: 'Exodus 12:31–42' },
        { name: 'Consecration of the Firstborn', ref: 'Exodus 13:1–16' },
        { name: 'Pillar of Cloud and Fire', ref: 'Exodus 13:21–22' },
      ]
    },
    {
      chapter: 'Crossing the Red Sea',
      events: [
        { name: 'Pharaoh Pursues Israel', ref: 'Exodus 14:1–9' },
        { name: 'Moses Encourages the People', ref: 'Exodus 14:10–14' },
        { name: 'Parting of the Red Sea', ref: 'Exodus 14:15–22' },
        { name: 'Destruction of Egyptian Army', ref: 'Exodus 14:23–31' },
        { name: 'Song of Moses', ref: 'Exodus 15:1–19' },
      ]
    },
    {
      chapter: 'Wilderness Leadership (Early Period)',
      events: [
        { name: 'Bitter Water Made Sweet', ref: 'Exodus 15:22–26' },
        { name: 'Provision of Manna and Quail', ref: 'Exodus 16:1–36' },
        { name: 'Water from the Rock at Horeb', ref: 'Exodus 17:1–7' },
        { name: 'Victory over Amalek', ref: 'Exodus 17:8–16' },
        { name: "Jethro Visits Moses", ref: 'Exodus 18:1–12' },
        { name: 'Appointment of Judges', ref: 'Exodus 18:13–27' },
      ]
    },
    {
      chapter: 'Mount Sinai and Covenant',
      events: [
        { name: 'Arrival at Mount Sinai', ref: 'Exodus 19:1–2' },
        { name: 'God Appears on Mount Sinai', ref: 'Exodus 19:16–25' },
        { name: 'Receiving the Ten Commandments', ref: 'Exodus 20:1–17' },
        { name: 'Giving of the Law', ref: 'Exodus 20–23' },
        { name: 'Covenant Confirmed', ref: 'Exodus 24:1–8' },
        { name: 'Moses on Mount Sinai for 40 Days', ref: 'Exodus 24:12–18' },
      ]
    },
    {
      chapter: 'Golden Calf and Covenant Renewal',
      events: [
        { name: 'Israel Worships the Golden Calf', ref: 'Exodus 32:1–6' },
        { name: 'Moses Intercedes for Israel', ref: 'Exodus 32:7–14' },
        { name: 'Moses Breaks the Tablets', ref: 'Exodus 32:19' },
        { name: 'Punishment of Idolaters', ref: 'Exodus 32:25–29' },
        { name: 'Moses Sees God’s Glory', ref: 'Exodus 33:18–23' },
        { name: 'Covenant Renewed and Face Shines', ref: 'Exodus 34:1–35' },
      ]
    },
    {
      chapter: 'Wilderness Events (Numbers)',
      events: [
        { name: 'Census of Israel', ref: 'Numbers 1' },
        { name: 'Complaints of the People', ref: 'Numbers 11' },
        { name: 'Seventy Elders Appointed', ref: 'Numbers 11:16–30' },
        { name: 'Miriam and Aaron Oppose Moses', ref: 'Numbers 12:1–15' },
        { name: 'Twelve Spies Sent to Canaan', ref: 'Numbers 13:1–24' },
        { name: 'Israel Refuses to Enter Canaan', ref: 'Numbers 14:1–10' },
        { name: 'Judgment of 40 Years', ref: 'Numbers 14:26–35' },
        { name: 'Korah’s Rebellion', ref: 'Numbers 16:1–35' },
        { name: 'Water from the Rock (Sin of Moses)', ref: 'Numbers 20:1–13' },
        { name: 'Bronze Serpent', ref: 'Numbers 21:4–9' },
      ]
    },
    {
      chapter: 'Final Leadership and Death',
      events: [
        { name: 'Joshua Appointed as Successor', ref: 'Numbers 27:12–23' },
        { name: 'Moses Reviews the Law', ref: 'Deuteronomy 1–30' },
        { name: 'Song of Moses', ref: 'Deuteronomy 32:1–43' },
        { name: 'Moses Blesses the Tribes', ref: 'Deuteronomy 33:1–29' },
        { name: 'Moses Views the Promised Land', ref: 'Deuteronomy 34:1–4' },
        { name: 'Death and Burial of Moses', ref: 'Deuteronomy 34:5–6' },
        { name: 'Israel Mourns Moses', ref: 'Deuteronomy 34:8' },
      ]
    },
    {
      chapter: 'Post-Death References',
      events: [
        { name: 'Moses at the Transfiguration', ref: 'Matthew 17:1–3; Mark 9:2–4; Luke 9:28–31' },
        { name: 'Moses Listed Among the Faithful', ref: 'Hebrews 11:23–29' },
        { name: 'Dispute over the Body of Moses', ref: 'Jude 1:9' },
      ]
    },
  ],
  'Jesus': [
    {
      chapter: 'Before Birth (Prophecy and Promise)',
      events: [
        { name: 'Promise of the coming Savior', ref: 'Genesis 3:15' },
        { name: 'Promise to Abraham about his descendant', ref: 'Genesis 12:3; 22:18; Galatians 3:16' },
        { name: 'Promise of a prophet like Moses', ref: 'Deuteronomy 18:15, 18; Acts 3:22–23' },
        { name: 'Promise of a virgin birth', ref: 'Isaiah 7:14; Matthew 1:22–23' },
        { name: 'Child called Mighty God', ref: 'Isaiah 9:6–7' },
        { name: 'Born in Bethlehem', ref: 'Micah 5:2; Matthew 2:5–6' },
        { name: 'Messenger prepares the way', ref: 'Isaiah 40:3; Malachi 3:1; Matthew 3:1–3' },
      ]
    },

    {
      chapter: 'Birth and Early Childhood',
      events: [
        { name: 'Angel speaks to Mary', ref: 'Luke 1:26–38' },
        { name: 'Angel speaks to Joseph', ref: 'Matthew 1:18–25' },
        { name: 'Birth of Jesus', ref: 'Matthew 2:1; Luke 2:1–7' },
        { name: 'Angels announce to shepherds', ref: 'Luke 2:8–14' },
        { name: 'Shepherds visit baby Jesus', ref: 'Luke 2:15–20' },
        { name: 'Jesus circumcised', ref: 'Luke 2:21' },
        { name: 'Jesus presented in the temple', ref: 'Luke 2:22–38' },
        { name: 'Wise men visit Jesus', ref: 'Matthew 2:1–12' },
        { name: 'Family escapes to Egypt', ref: 'Matthew 2:13–15' },
        { name: 'Herod kills baby boys', ref: 'Matthew 2:16–18' },
        { name: 'Family returns to Israel', ref: 'Matthew 2:19–23; Luke 2:39' },
      ]
    },

    {
      chapter: 'Childhood and Growing Up',
      events: [
        { name: 'Jesus grows in wisdom', ref: 'Luke 2:40' },
        { name: 'Jesus at temple at age 12', ref: 'Luke 2:41–50' },
        { name: 'Jesus obeys His parents', ref: 'Luke 2:51' },
        { name: 'Jesus grows into adulthood', ref: 'Luke 2:52' },
      ]
    },

    {
      chapter: 'Preparation for Ministry',
      events: [
        { name: 'John the Baptist prepares the way', ref: 'Matthew 3:1–6; Mark 1:1–6; Luke 3:1–18; John 1:19–28' },
        { name: 'Jesus baptized by John', ref: 'Matthew 3:13–17; Mark 1:9–11; Luke 3:21–22' },
        { name: 'Holy Spirit comes on Jesus', ref: 'Matthew 3:16; Mark 1:10; Luke 3:22; John 1:32–34' },
        { name: 'God speaks from heaven', ref: 'Matthew 3:17; Mark 1:11; Luke 3:22' },
        { name: 'Jesus tempted by Satan', ref: 'Matthew 4:1–11; Mark 1:12–13; Luke 4:1–13' },
      ]
    },

    {
      chapter: 'Early Ministry',
      events: [
        { name: 'Jesus calls first disciples', ref: 'Matthew 4:18–22; Mark 1:16–20; Luke 5:1–11; John 1:35–51' },
        { name: 'First miracle: water into wine', ref: 'John 2:1–11' },
        { name: 'Jesus clears the temple', ref: 'John 2:13–22' },
        { name: 'Jesus teaches Nicodemus', ref: 'John 3:1–21' },
        { name: 'Jesus speaks with Samaritan woman', ref: 'John 4:1–42' },
        { name: 'Jesus heals official’s son', ref: 'John 4:46–54' },
      ]
    },

    {
      chapter: 'Teaching and Miracles in Galilee',
      events: [
        { name: 'Jesus teaches in synagogues', ref: 'Matthew 4:23; Mark 1:21; Luke 4:14–15' },
        { name: 'Jesus heals many sick people', ref: 'Matthew 4:24; Mark 1:32–34; Luke 4:40–41' },
        { name: 'Jesus heals a man with leprosy', ref: 'Matthew 8:1–4; Mark 1:40–45; Luke 5:12–16' },
        { name: 'Jesus heals paralyzed man', ref: 'Matthew 9:1–8; Mark 2:1–12; Luke 5:17–26' },
        { name: 'Jesus calls Matthew', ref: 'Matthew 9:9–13; Mark 2:13–17; Luke 5:27–32' },
        { name: 'Jesus heals on Sabbath', ref: 'Matthew 12:9–14; Mark 3:1–6; Luke 6:6–11' },
      ]
    },

    {
      chapter: 'Sermon and Teachings',
      events: [
        { name: 'Sermon on the Mount', ref: 'Matthew 5:1–7:29' },
        { name: 'Lord’s Prayer taught', ref: 'Matthew 6:9–13; Luke 11:1–4' },
        { name: 'Parable of the sower', ref: 'Matthew 13:1–23; Mark 4:1–20; Luke 8:4–15' },
        { name: 'Many other parables taught', ref: 'Matthew 13; Mark 4; Luke 15' },
      ]
    },

    {
      chapter: 'Major Miracles',
      events: [
        { name: 'Jesus calms the storm', ref: 'Matthew 8:23–27; Mark 4:35–41; Luke 8:22–25' },
        { name: 'Jesus casts out demons', ref: 'Matthew 8:28–34; Mark 5:1–20; Luke 8:26–39' },
        { name: 'Jesus heals bleeding woman', ref: 'Matthew 9:20–22; Mark 5:25–34; Luke 8:43–48' },
        { name: 'Jesus raises Jairus daughter', ref: 'Matthew 9:18–26; Mark 5:21–43; Luke 8:40–56' },
        { name: 'Jesus feeds 5000 people', ref: 'Matthew 14:13–21; Mark 6:30–44; Luke 9:10–17; John 6:1–14' },
        { name: 'Jesus walks on water', ref: 'Matthew 14:22–33; Mark 6:45–52; John 6:16–21' },
        { name: 'Jesus raises Lazarus', ref: 'John 11:1–44' },
      ]
    },

    {
      chapter: 'Transfiguration',
      events: [
        { name: 'Jesus shines in glory', ref: 'Matthew 17:1–8; Mark 9:2–8; Luke 9:28–36' },
        { name: 'Moses and Elijah appear', ref: 'Matthew 17:3; Mark 9:4; Luke 9:30–31' },
        { name: 'God speaks from heaven', ref: 'Matthew 17:5; Mark 9:7; Luke 9:35' },
      ]
    },

    {
      chapter: 'Final Journey to Jerusalem',
      events: [
        { name: 'Jesus enters Jerusalem on donkey', ref: 'Matthew 21:1–11; Mark 11:1–11; Luke 19:28–44; John 12:12–19' },
        { name: 'Jesus clears the temple again', ref: 'Matthew 21:12–13; Mark 11:15–18; Luke 19:45–48' },
        { name: 'Jesus teaches daily in temple', ref: 'Matthew 21–25; Mark 11–13; Luke 20–21' },
      ]
    },

    {
      chapter: 'Last Supper and Arrest',
      events: [
        { name: 'Last supper with disciples', ref: 'Matthew 26:17–30; Mark 14:12–26; Luke 22:7–20; John 13:1–30' },
        { name: 'Jesus washes disciples feet', ref: 'John 13:1–17' },
        { name: 'Jesus predicts betrayal', ref: 'Matthew 26:21–25; John 13:21–30' },
        { name: 'Jesus prays in Gethsemane', ref: 'Matthew 26:36–46; Mark 14:32–42; Luke 22:39–46' },
        { name: 'Jesus arrested', ref: 'Matthew 26:47–56; Mark 14:43–52; Luke 22:47–53; John 18:1–12' },
      ]
    },

    {
      chapter: 'Trial and Crucifixion',
      events: [
        { name: 'Jesus tried by Jewish leaders', ref: 'Matthew 26:57–68; Mark 14:53–65; Luke 22:54–71; John 18:12–24' },
        { name: 'Peter denies Jesus', ref: 'Matthew 26:69–75; Mark 14:66–72; Luke 22:54–62; John 18:15–27' },
        { name: 'Jesus tried by Pilate', ref: 'Matthew 27:11–26; Mark 15:1–15; Luke 23:1–25; John 18:28–40' },
        { name: 'Jesus mocked and beaten', ref: 'Matthew 27:27–31; Mark 15:16–20; John 19:1–3' },
        { name: 'Jesus crucified', ref: 'Matthew 27:32–44; Mark 15:21–32; Luke 23:26–43; John 19:16–27' },
        { name: 'Jesus dies on the cross', ref: 'Matthew 27:45–56; Mark 15:33–41; Luke 23:44–49; John 19:28–37' },
        { name: 'Jesus buried in tomb', ref: 'Matthew 27:57–61; Mark 15:42–47; Luke 23:50–56; John 19:38–42' },
      ]
    },

    {
      chapter: 'Resurrection',
      events: [
        { name: 'Jesus rises from the dead', ref: 'Matthew 28:1–10; Mark 16:1–8; Luke 24:1–12; John 20:1–18' },
        { name: 'Jesus appears to disciples', ref: 'Luke 24:13–49; John 20:19–29' },
        { name: 'Jesus appears to many people', ref: 'Matthew 28:16–20; John 21:1–25; 1 Corinthians 15:3–8' },
      ]
    },

    {
      chapter: 'Ascension and Glory',
      events: [
        { name: 'Jesus gives final instructions', ref: 'Matthew 28:18–20; Acts 1:1–8' },
        { name: 'Jesus goes up to heaven', ref: 'Luke 24:50–53; Acts 1:9–11' },
        { name: 'Jesus sits at God’s right hand', ref: 'Mark 16:19; Hebrews 1:3; Hebrews 10:12' },
        { name: 'Jesus will return again', ref: 'Acts 1:11; Revelation 22:12–13, 20' },
      ]
    },
  ],
  'David': [
    {
      chapter: 'Birth and Family',
      events: [
        { name: 'David born in Bethlehem', ref: '1 Samuel 16:1; 17:12' },
        { name: 'David is the youngest son of Jesse', ref: '1 Samuel 16:10–11; 17:12–14' },
        { name: 'David works as a shepherd', ref: '1 Samuel 16:11; 17:15, 34–35' },
      ]
    },

    {
      chapter: 'David Chosen by God',
      events: [
        { name: 'God rejects Saul as king', ref: '1 Samuel 15:26–28' },
        { name: 'God sends Samuel to Jesse’s house', ref: '1 Samuel 16:1–5' },
        { name: 'David anointed as future king', ref: '1 Samuel 16:12–13' },
        { name: 'Spirit of the Lord comes on David', ref: '1 Samuel 16:13' },
        { name: 'Spirit leaves Saul', ref: '1 Samuel 16:14' },
      ]
    },

    {
      chapter: 'David Serves King Saul',
      events: [
        { name: 'David plays harp for Saul', ref: '1 Samuel 16:15–23' },
        { name: 'David becomes armor bearer', ref: '1 Samuel 16:21' },
      ]
    },

    {
      chapter: 'David and Goliath',
      events: [
        { name: 'Goliath challenges Israel', ref: '1 Samuel 17:1–11' },
        { name: 'David visits the battle camp', ref: '1 Samuel 17:17–23' },
        { name: 'David speaks against Goliath', ref: '1 Samuel 17:26–32' },
        { name: 'David trusts God for victory', ref: '1 Samuel 17:34–37' },
        { name: 'David kills Goliath', ref: '1 Samuel 17:38–51' },
        { name: 'Israel defeats the Philistines', ref: '1 Samuel 17:52–53' },
      ]
    },

    {
      chapter: 'David and Jonathan',
      events: [
        { name: 'Jonathan becomes David’s close friend', ref: '1 Samuel 18:1–4' },
        { name: 'Women praise David', ref: '1 Samuel 18:6–7' },
        { name: 'Saul becomes jealous of David', ref: '1 Samuel 18:8–9' },
        { name: 'Saul tries to kill David with a spear', ref: '1 Samuel 18:10–11; 19:9–10' },
        { name: 'Jonathan protects David', ref: '1 Samuel 19:1–7; 20:1–42' },
      ]
    },

    {
      chapter: 'David Runs from Saul',
      events: [
        { name: 'David escapes from Saul', ref: '1 Samuel 19:11–18' },
        { name: 'David meets Ahimelech the priest', ref: '1 Samuel 21:1–9' },
        { name: 'David acts crazy before Achish', ref: '1 Samuel 21:10–15' },
        { name: 'David hides in the cave of Adullam', ref: '1 Samuel 22:1–2' },
        { name: 'Saul kills the priests of Nob', ref: '1 Samuel 22:16–19' },
        { name: 'David spares Saul in the cave', ref: '1 Samuel 24:1–12' },
        { name: 'David refuses to harm Saul again', ref: '1 Samuel 26:7–11' },
      ]
    },

    {
      chapter: 'David Becomes King',
      events: [
        { name: 'Saul and Jonathan die in battle', ref: '1 Samuel 31:1–6' },
        { name: 'David mourns Saul and Jonathan', ref: '2 Samuel 1:17–27' },
        { name: 'David made king over Judah', ref: '2 Samuel 2:1–4' },
        { name: 'War between Saul’s house and David’s house', ref: '2 Samuel 3:1' },
        { name: 'David made king over all Israel', ref: '2 Samuel 5:1–5; 1 Chronicles 11:1–3' },
      ]
    },

    {
      chapter: 'David Strengthens His Kingdom',
      events: [
        { name: 'David captures Jerusalem', ref: '2 Samuel 5:6–9; 1 Chronicles 11:4–9' },
        { name: 'Jerusalem called City of David', ref: '2 Samuel 5:7, 9' },
        { name: 'David defeats the Philistines', ref: '2 Samuel 5:17–25' },
        { name: 'David brings the Ark to Jerusalem', ref: '2 Samuel 6:1–15; 1 Chronicles 13:1–14; 15:1–29' },
        { name: 'Michal despises David', ref: '2 Samuel 6:16, 20–23' },
      ]
    },

    {
      chapter: 'God’s Promise to David',
      events: [
        { name: 'David wants to build a temple', ref: '2 Samuel 7:1–3; 1 Chronicles 17:1–2' },
        { name: 'God promises David an eternal kingdom', ref: '2 Samuel 7:8–16; 1 Chronicles 17:7–14' },
        { name: 'David prays and thanks God', ref: '2 Samuel 7:18–29' },
      ]
    },

    {
      chapter: 'David’s Victories',
      events: [
        { name: 'David defeats many enemies', ref: '2 Samuel 8:1–14; 1 Chronicles 18:1–13' },
        { name: 'David shows kindness to Mephibosheth', ref: '2 Samuel 9:1–13' },
      ]
    },

    {
      chapter: 'David’s Sin and Repentance',
      events: [
        { name: 'David commits sin with Bathsheba', ref: '2 Samuel 11:1–5' },
        { name: 'Uriah is killed in battle plan', ref: '2 Samuel 11:14–17' },
        { name: 'Nathan confronts David', ref: '2 Samuel 12:1–12' },
        { name: 'David repents of his sin', ref: '2 Samuel 12:13; Psalm 51' },
        { name: 'Child of Bathsheba dies', ref: '2 Samuel 12:14–23' },
        { name: 'Solomon is born', ref: '2 Samuel 12:24–25' },
      ]
    },

    {
      chapter: 'Trouble in David’s Family',
      events: [
        { name: 'Amnon sins against Tamar', ref: '2 Samuel 13:1–14' },
        { name: 'Absalom kills Amnon', ref: '2 Samuel 13:28–29' },
        { name: 'Absalom runs away', ref: '2 Samuel 13:37–38' },
        { name: 'Absalom returns to Jerusalem', ref: '2 Samuel 14:21–24' },
        { name: 'Absalom leads a rebellion', ref: '2 Samuel 15:1–12' },
        { name: 'David flees from Jerusalem', ref: '2 Samuel 15:13–30' },
        { name: 'Absalom dies in battle', ref: '2 Samuel 18:9–15' },
        { name: 'David mourns Absalom', ref: '2 Samuel 18:33' },
      ]
    },

    {
      chapter: 'Later Years',
      events: [
        { name: 'Sheba leads another rebellion', ref: '2 Samuel 20:1–22' },
        { name: 'Famine in the land', ref: '2 Samuel 21:1–14' },
        { name: 'David sings a song of praise', ref: '2 Samuel 22; Psalm 18' },
        { name: 'David’s last words', ref: '2 Samuel 23:1–7' },
        { name: 'David counts the people', ref: '2 Samuel 24:1–10; 1 Chronicles 21:1–7' },
        { name: 'Plague comes on Israel', ref: '2 Samuel 24:15–17' },
        { name: 'David builds an altar', ref: '2 Samuel 24:18–25; 1 Chronicles 21:18–30' },
      ]
    },

    {
      chapter: 'Preparation for the Temple',
      events: [
        { name: 'David gathers materials for temple', ref: '1 Chronicles 22:1–5, 14–16' },
        { name: 'David gives instructions to Solomon', ref: '1 Chronicles 22:6–13; 28:9–10' },
        { name: 'David organizes Levites and leaders', ref: '1 Chronicles 23–27' },
        { name: 'David prays and praises God publicly', ref: '1 Chronicles 29:10–20' },
      ]
    },

    {
      chapter: 'Death of David',
      events: [
        { name: 'David makes Solomon king', ref: '1 Kings 1:28–40; 1 Chronicles 29:22–25' },
        { name: 'David gives final advice to Solomon', ref: '1 Kings 2:1–9' },
        { name: 'David dies after 40 years as king', ref: '1 Kings 2:10–11; 1 Chronicles 29:26–28' },
        { name: 'David buried in the City of David', ref: '1 Kings 2:10' },
      ]
    },

    {
      chapter: 'Psalms Written by David',
      events: [
        { name: 'David writes many psalms', ref: 'Psalm 3; 23; 32; 51; 63; 103; 142 (titles)' },
      ]
    },

    {
      chapter: 'Later Bible References to David',
      events: [
        { name: 'Promise of Messiah from David’s line', ref: 'Isaiah 11:1; Jeremiah 23:5; Luke 1:32–33' },
        { name: 'Jesus called Son of David', ref: 'Matthew 1:1; 9:27; 21:9' },
        { name: 'David mentioned in early church preaching', ref: 'Acts 2:25–31; 13:22–23' },
      ]
    },
  ],
  'Mary': [
    {
      chapter: 'Family and Background',
      events: [
        { name: 'Mary lives in Nazareth', ref: 'Luke 1:26–27; 2:4' },
        { name: 'Mary is a virgin', ref: 'Luke 1:27; Matthew 1:23' },
        { name: 'Mary engaged to Joseph', ref: 'Luke 1:27; Matthew 1:18' },
        { name: 'Mary is from the house of David (through Joseph)', ref: 'Luke 1:27; Matthew 1:16, 20; Luke 3:23–31' },
      ]
    },

    {
      chapter: 'Angel Visits Mary',
      events: [
        { name: 'Angel Gabriel comes to Mary', ref: 'Luke 1:26–28' },
        { name: 'Angel greets Mary', ref: 'Luke 1:28–29' },
        { name: 'Angel tells Mary she will have a son', ref: 'Luke 1:30–33' },
        { name: 'Angel says the baby will be Son of God', ref: 'Luke 1:32, 35' },
        { name: 'Mary asks how this will happen', ref: 'Luke 1:34' },
        { name: 'Angel explains the Holy Spirit will come', ref: 'Luke 1:35–37' },
        { name: 'Mary accepts God’s plan', ref: 'Luke 1:38' },
      ]
    },

    {
      chapter: 'Mary Visits Elizabeth',
      events: [
        { name: 'Mary visits Elizabeth', ref: 'Luke 1:39–40' },
        { name: 'Elizabeth blesses Mary', ref: 'Luke 1:41–45' },
        { name: 'Mary praises God (Mary’s song)', ref: 'Luke 1:46–55' },
        { name: 'Mary stays for three months', ref: 'Luke 1:56' },
      ]
    },

    {
      chapter: 'Joseph Accepts Mary',
      events: [
        { name: 'Joseph learns Mary is pregnant', ref: 'Matthew 1:18' },
        { name: 'Angel speaks to Joseph in dream', ref: 'Matthew 1:19–21' },
        { name: 'Angel tells Joseph to take Mary as wife', ref: 'Matthew 1:20–23' },
        { name: 'Joseph obeys and takes Mary', ref: 'Matthew 1:24–25' },
      ]
    },

    {
      chapter: 'Birth of Jesus',
      events: [
        { name: 'Mary travels to Bethlehem', ref: 'Luke 2:1–5' },
        { name: 'Mary gives birth to Jesus', ref: 'Luke 2:6–7; Matthew 2:1' },
        { name: 'Mary lays baby in manger', ref: 'Luke 2:7' },
        { name: 'Shepherds visit Jesus', ref: 'Luke 2:15–20' },
        { name: 'Mary keeps these things in her heart', ref: 'Luke 2:19' },
      ]
    },

    {
      chapter: 'Early Childhood of Jesus',
      events: [
        { name: 'Jesus circumcised on eighth day', ref: 'Luke 2:21' },
        { name: 'Mary takes Jesus to temple', ref: 'Luke 2:22–24' },
        { name: 'Simeon blesses Mary and Jesus', ref: 'Luke 2:25–35' },
        { name: 'Anna speaks about Jesus', ref: 'Luke 2:36–38' },
        { name: 'Wise men visit Jesus', ref: 'Matthew 2:1–11' },
        { name: 'Mary and Joseph flee to Egypt', ref: 'Matthew 2:13–15' },
        { name: 'Mary returns to Nazareth', ref: 'Matthew 2:19–23; Luke 2:39' },
      ]
    },

    {
      chapter: 'Jesus Childhood and Youth',
      events: [
        { name: 'Mary raises Jesus in Nazareth', ref: 'Luke 2:39–40' },
        { name: 'Mary goes to Jerusalem for Passover', ref: 'Luke 2:41–42' },
        { name: 'Jesus stays in temple at age 12', ref: 'Luke 2:43–45' },
        { name: 'Mary finds Jesus in temple', ref: 'Luke 2:46–50' },
        { name: 'Mary keeps these things in heart', ref: 'Luke 2:51' },
      ]
    },

    {
      chapter: 'Mary During Jesus Ministry',
      events: [
        { name: 'Mary at wedding in Cana', ref: 'John 2:1–2' },
        { name: 'Mary tells Jesus about the need', ref: 'John 2:3' },
        { name: 'Jesus does first miracle', ref: 'John 2:5–11' },
        { name: 'Mary travels with family', ref: 'John 2:12' },
        { name: 'Mary comes to see Jesus', ref: 'Matthew 12:46–50; Mark 3:31–35; Luke 8:19–21' },
      ]
    },

    {
      chapter: 'Mary at the Cross',
      events: [
        { name: 'Mary stands near the cross', ref: 'John 19:25' },
        { name: 'Jesus speaks to Mary from cross', ref: 'John 19:26–27' },
        { name: 'Jesus gives Mary to John’s care', ref: 'John 19:27' },
      ]
    },

    {
      chapter: 'After Jesus Resurrection',
      events: [
        { name: 'Mary with disciples after resurrection', ref: 'Acts 1:14' },
        { name: 'Mary prays with believers', ref: 'Acts 1:14' },
      ]
    },

    {
      chapter: 'Later References',
      events: [
        { name: 'Mary called mother of Jesus', ref: 'Acts 1:14' },
        { name: 'Jesus born of a woman', ref: 'Galatians 4:4' },
      ]
    },
  ],
  'Abraham': [
    {
      chapter: 'Birth and Family Background',
      events: [
        { name: 'Abraham born in Ur', ref: 'Genesis 11:26–28' },
        { name: 'Father is Terah', ref: 'Genesis 11:26' },
        { name: 'Brothers are Nahor and Haran', ref: 'Genesis 11:26–27' },
        { name: 'Abraham called Abram first', ref: 'Genesis 11:26; Nehemiah 9:7' },
        { name: 'Abram marries Sarai', ref: 'Genesis 11:29' },
        { name: 'Sarai has no children', ref: 'Genesis 11:30' },
      ]
    },

    {
      chapter: 'Journey from Ur to Haran',
      events: [
        { name: 'Family leaves Ur', ref: 'Genesis 11:31' },
        { name: 'Family settles in Haran', ref: 'Genesis 11:31' },
        { name: 'Terah dies in Haran', ref: 'Genesis 11:32' },
      ]
    },

    {
      chapter: 'God Calls Abraham',
      events: [
        { name: 'God calls Abram to leave country', ref: 'Genesis 12:1' },
        { name: 'God promises to make Abram a great nation', ref: 'Genesis 12:2' },
        { name: 'God promises to bless all nations through Abram', ref: 'Genesis 12:3; Galatians 3:8' },
        { name: 'Abram obeys God and leaves Haran', ref: 'Genesis 12:4–5; Hebrews 11:8' },
        { name: 'Abram is 75 years old', ref: 'Genesis 12:4' },
      ]
    },

    {
      chapter: 'Abraham Comes to Canaan',
      events: [
        { name: 'Abram arrives in Canaan', ref: 'Genesis 12:5–6' },
        { name: 'God promises land to Abram’s seed', ref: 'Genesis 12:7' },
        { name: 'Abram builds an altar to God', ref: 'Genesis 12:7–8' },
        { name: 'Abram travels through the land', ref: 'Genesis 12:8–9' },
      ]
    },

    {
      chapter: 'Abraham in Egypt',
      events: [
        { name: 'Famine comes in Canaan', ref: 'Genesis 12:10' },
        { name: 'Abram goes to Egypt', ref: 'Genesis 12:10' },
        { name: 'Abram says Sarai is his sister', ref: 'Genesis 12:11–13' },
        { name: 'Pharaoh takes Sarai', ref: 'Genesis 12:14–16' },
        { name: 'God sends trouble to Pharaoh', ref: 'Genesis 12:17' },
        { name: 'Pharaoh sends Abram away', ref: 'Genesis 12:18–20' },
      ]
    },

    {
      chapter: 'Abraham and Lot Separate',
      events: [
        { name: 'Abram returns to Canaan', ref: 'Genesis 13:1–4' },
        { name: 'Abram and Lot become rich', ref: 'Genesis 13:2, 5–6' },
        { name: 'Servants fight over land', ref: 'Genesis 13:7' },
        { name: 'Abram and Lot separate peacefully', ref: 'Genesis 13:8–11' },
        { name: 'Lot moves to Sodom area', ref: 'Genesis 13:12–13' },
        { name: 'God promises land again to Abram', ref: 'Genesis 13:14–17' },
        { name: 'Abram builds altar at Hebron', ref: 'Genesis 13:18' },
      ]
    },

    {
      chapter: 'Abraham Rescues Lot',
      events: [
        { name: 'Lot captured in war', ref: 'Genesis 14:1–12' },
        { name: 'Abram rescues Lot', ref: 'Genesis 14:13–16' },
        { name: 'Melchizedek blesses Abram', ref: 'Genesis 14:18–20; Hebrews 7:1–7' },
        { name: 'Abram refuses reward from king of Sodom', ref: 'Genesis 14:21–24' },
      ]
    },

    {
      chapter: 'God’s Covenant with Abraham',
      events: [
        { name: 'God promises Abram a son', ref: 'Genesis 15:1–4' },
        { name: 'Abram believes God', ref: 'Genesis 15:5–6; Romans 4:3; Galatians 3:6; James 2:23' },
        { name: 'God promises land to Abram’s descendants', ref: 'Genesis 15:7–21' },
      ]
    },

    {
      chapter: 'Birth of Ishmael',
      events: [
        { name: 'Sarai gives Hagar to Abram', ref: 'Genesis 16:1–3' },
        { name: 'Hagar becomes pregnant', ref: 'Genesis 16:4' },
        { name: 'Angel speaks to Hagar', ref: 'Genesis 16:7–12' },
        { name: 'Ishmael is born', ref: 'Genesis 16:15–16' },
        { name: 'Abram is 86 years old', ref: 'Genesis 16:16' },
      ]
    },

    {
      chapter: 'Name Changed and Covenant Sign',
      events: [
        { name: 'God changes Abram name to Abraham', ref: 'Genesis 17:1–5; Nehemiah 9:7' },
        { name: 'God changes Sarai name to Sarah', ref: 'Genesis 17:15' },
        { name: 'God promises Isaac will be born', ref: 'Genesis 17:16–19' },
        { name: 'Circumcision given as covenant sign', ref: 'Genesis 17:9–14; Acts 7:8' },
        { name: 'Abraham circumcised at age 99', ref: 'Genesis 17:24' },
      ]
    },

    {
      chapter: 'Visitors and Promise of Isaac',
      events: [
        { name: 'Three men visit Abraham', ref: 'Genesis 18:1–5' },
        { name: 'God promises Isaac again', ref: 'Genesis 18:9–14' },
        { name: 'Sarah laughs at promise', ref: 'Genesis 18:12–15' },
      ]
    },

    {
      chapter: 'Abraham and Sodom',
      events: [
        { name: 'God tells Abraham about Sodom', ref: 'Genesis 18:16–21' },
        { name: 'Abraham prays for Sodom', ref: 'Genesis 18:22–33' },
        { name: 'Lot rescued from Sodom', ref: 'Genesis 19:1–29' },
      ]
    },

    {
      chapter: 'Abraham and Abimelech',
      events: [
        { name: 'Abraham says Sarah is his sister again', ref: 'Genesis 20:1–2' },
        { name: 'God warns Abimelech in dream', ref: 'Genesis 20:3–7' },
        { name: 'Abimelech returns Sarah', ref: 'Genesis 20:8–16' },
        { name: 'Abraham prays and God heals', ref: 'Genesis 20:17–18' },
      ]
    },

    {
      chapter: 'Birth of Isaac',
      events: [
        { name: 'Isaac is born', ref: 'Genesis 21:1–3' },
        { name: 'Abraham is 100 years old', ref: 'Genesis 21:5' },
        { name: 'Isaac circumcised on eighth day', ref: 'Genesis 21:4' },
        { name: 'Isaac grows and is weaned', ref: 'Genesis 21:8' },
      ]
    },

    {
      chapter: 'Hagar and Ishmael Sent Away',
      events: [
        { name: 'Sarah sends Hagar and Ishmael away', ref: 'Genesis 21:9–14' },
        { name: 'God protects Ishmael', ref: 'Genesis 21:15–21' },
      ]
    },

    {
      chapter: 'God Tests Abraham',
      events: [
        { name: 'God tests Abraham', ref: 'Genesis 22:1–2; Hebrews 11:17' },
        { name: 'Abraham takes Isaac to sacrifice', ref: 'Genesis 22:3–10' },
        { name: 'Angel stops Abraham', ref: 'Genesis 22:11–12' },
        { name: 'Ram given instead of Isaac', ref: 'Genesis 22:13' },
        { name: 'God blesses Abraham again', ref: 'Genesis 22:15–18; Hebrews 6:13–14' },
      ]
    },

    {
      chapter: 'Later Life of Abraham',
      events: [
        { name: 'Sarah dies', ref: 'Genesis 23:1–2' },
        { name: 'Abraham buys burial place', ref: 'Genesis 23:3–20' },
        { name: 'Isaac marries Rebekah', ref: 'Genesis 24:1–67' },
        { name: 'Abraham marries Keturah', ref: 'Genesis 25:1' },
        { name: 'Abraham has more sons', ref: 'Genesis 25:2–4' },
        { name: 'Abraham gives everything to Isaac', ref: 'Genesis 25:5–6' },
      ]
    },

    {
      chapter: 'Death of Abraham',
      events: [
        { name: 'Abraham dies at age 175', ref: 'Genesis 25:7' },
        { name: 'Isaac and Ishmael bury Abraham', ref: 'Genesis 25:8–10' },
        { name: 'Abraham buried in cave of Machpelah', ref: 'Genesis 25:9–10' },
      ]
    },

    {
      chapter: 'Later Bible References',
      events: [
        { name: 'Abraham called friend of God', ref: '2 Chronicles 20:7; Isaiah 41:8; James 2:23' },
        { name: 'Abraham example of faith', ref: 'Romans 4:1–25; Hebrews 11:8–19' },
        { name: 'God called God of Abraham', ref: 'Exodus 3:6; Matthew 22:32; Acts 7:32' },
        { name: 'Jesus speaks about Abraham', ref: 'John 8:39, 56–58' },
      ]
    },
  ],
  'Paul': [
    {
      chapter: 'Birth and Background',
      events: [
        { name: 'Born in Tarsus', ref: 'Acts 21:39; 22:3' },
        { name: 'Also called Saul', ref: 'Acts 7:58; 9:4; 13:9' },
        { name: 'Jew from tribe of Benjamin', ref: 'Romans 11:1; Philippians 3:5' },
        { name: 'Roman citizen by birth', ref: 'Acts 22:25–28; 16:37' },
        { name: 'Trained under Gamaliel', ref: 'Acts 22:3' },
        { name: 'Strict Pharisee', ref: 'Acts 23:6; 26:5; Philippians 3:5' },
      ]
    },

    {
      chapter: 'Paul Fights Against Christians',
      events: [
        { name: 'Present at death of Stephen', ref: 'Acts 7:58; 8:1' },
        { name: 'Approves killing of Stephen', ref: 'Acts 8:1' },
        { name: 'Persecutes the church strongly', ref: 'Acts 8:3; 9:1–2; Galatians 1:13' },
        { name: 'Tries to destroy the church', ref: 'Galatians 1:13; Philippians 3:6' },
      ]
    },

    {
      chapter: 'Paul Meets Jesus',
      events: [
        { name: 'Travels to Damascus', ref: 'Acts 9:1–2; 22:5; 26:12' },
        { name: 'Sees bright light from heaven', ref: 'Acts 9:3; 22:6; 26:13' },
        { name: 'Jesus speaks to Paul', ref: 'Acts 9:4–5; 22:7–8; 26:14–15' },
        { name: 'Paul becomes blind', ref: 'Acts 9:8–9; 22:11' },
        { name: 'Ananias sent to Paul', ref: 'Acts 9:10–17; 22:12–13' },
        { name: 'Paul regains sight and baptized', ref: 'Acts 9:18; 22:16' },
      ]
    },

    {
      chapter: 'Early Ministry',
      events: [
        { name: 'Preaches Jesus in Damascus', ref: 'Acts 9:20–22' },
        { name: 'Jews plan to kill him', ref: 'Acts 9:23–24; 2 Corinthians 11:32–33' },
        { name: 'Escapes in basket from city wall', ref: 'Acts 9:25; 2 Corinthians 11:33' },
        { name: 'Visits Jerusalem and meets apostles', ref: 'Acts 9:26–28; Galatians 1:18–19' },
        { name: 'Sent to Tarsus', ref: 'Acts 9:29–30' },
      ]
    },

    {
      chapter: 'Church in Antioch',
      events: [
        { name: 'Barnabas brings Paul to Antioch', ref: 'Acts 11:25–26' },
        { name: 'Called Christians first time', ref: 'Acts 11:26' },
        { name: 'Sent with gift to Jerusalem', ref: 'Acts 11:29–30' },
      ]
    },

    {
      chapter: 'First Mission Trip',
      events: [
        { name: 'Holy Spirit sends Paul and Barnabas', ref: 'Acts 13:1–4' },
        { name: 'Preaches in Cyprus', ref: 'Acts 13:4–12' },
        { name: 'Saul called Paul from here', ref: 'Acts 13:9' },
        { name: 'Preaches in Pisidian Antioch', ref: 'Acts 13:14–41' },
        { name: 'Many Gentiles believe', ref: 'Acts 13:42–49' },
        { name: 'Faces persecution and leaves', ref: 'Acts 13:50–51' },
        { name: 'Heals crippled man in Lystra', ref: 'Acts 14:8–10' },
        { name: 'People call him a god', ref: 'Acts 14:11–13' },
        { name: 'Paul stoned and left for dead', ref: 'Acts 14:19–20' },
        { name: 'Returns to Antioch', ref: 'Acts 14:21–28' },
      ]
    },

    {
      chapter: 'Jerusalem Meeting',
      events: [
        { name: 'Question about Gentiles and law', ref: 'Acts 15:1–5' },
        { name: 'Paul speaks at council', ref: 'Acts 15:6–12' },
        { name: 'Decision letter sent to churches', ref: 'Acts 15:22–29' },
      ]
    },

    {
      chapter: 'Second Mission Trip',
      events: [
        { name: 'Paul and Barnabas separate', ref: 'Acts 15:36–40' },
        { name: 'Timothy joins Paul', ref: 'Acts 16:1–3' },
        { name: 'Vision of man from Macedonia', ref: 'Acts 16:9–10' },
        { name: 'Lydia believes in Philippi', ref: 'Acts 16:13–15' },
        { name: 'Paul and Silas in prison', ref: 'Acts 16:22–24' },
        { name: 'Prison doors open by earthquake', ref: 'Acts 16:25–26' },
        { name: 'Jailer believes in Jesus', ref: 'Acts 16:27–34' },
        { name: 'Preaches in Thessalonica', ref: 'Acts 17:1–4' },
        { name: 'Preaches in Berea', ref: 'Acts 17:10–12' },
        { name: 'Preaches in Athens', ref: 'Acts 17:16–34' },
        { name: 'Stays long time in Corinth', ref: 'Acts 18:1–11' },
      ]
    },

    {
      chapter: 'Third Mission Trip',
      events: [
        { name: 'Teaches in Ephesus', ref: 'Acts 19:1–10' },
        { name: 'Special miracles happen', ref: 'Acts 19:11–12' },
        { name: 'Many burn magic books', ref: 'Acts 19:18–20' },
        { name: 'Big trouble in Ephesus', ref: 'Acts 19:23–41' },
        { name: 'Raises Eutychus from dead', ref: 'Acts 20:7–12' },
        { name: 'Says farewell to elders', ref: 'Acts 20:17–38' },
      ]
    },

    {
      chapter: 'Arrest and Trials',
      events: [
        { name: 'Paul arrested in Jerusalem', ref: 'Acts 21:27–33' },
        { name: 'Speaks to the crowd', ref: 'Acts 22:1–21' },
        { name: 'Claims Roman citizenship', ref: 'Acts 22:25–29' },
        { name: 'Speaks before council', ref: 'Acts 23:1–10' },
        { name: 'Plot to kill Paul', ref: 'Acts 23:12–22' },
        { name: 'Sent to Governor Felix', ref: 'Acts 23:23–35' },
        { name: 'Trial before Felix', ref: 'Acts 24:1–27' },
        { name: 'Trial before Festus', ref: 'Acts 25:1–12' },
        { name: 'Appeals to Caesar', ref: 'Acts 25:11–12' },
        { name: 'Speaks before King Agrippa', ref: 'Acts 26:1–32' },
      ]
    },

    {
      chapter: 'Journey to Rome',
      events: [
        { name: 'Sails for Rome', ref: 'Acts 27:1–2' },
        { name: 'Storm at sea', ref: 'Acts 27:13–20' },
        { name: 'Shipwreck on Malta', ref: 'Acts 27:41–44' },
        { name: 'Paul bitten by snake but unharmed', ref: 'Acts 28:3–6' },
        { name: 'Heals many on Malta', ref: 'Acts 28:7–9' },
        { name: 'Arrives in Rome', ref: 'Acts 28:16' },
        { name: 'Preaches in Rome under guard', ref: 'Acts 28:30–31' },
      ]
    },

    {
      chapter: 'Letters Written by Paul',
      events: [
        { name: 'Writes Romans', ref: 'Romans 1:1' },
        { name: 'Writes Corinthians letters', ref: '1 Corinthians 1:1; 2 Corinthians 1:1' },
        { name: 'Writes Galatians', ref: 'Galatians 1:1' },
        { name: 'Writes Ephesians', ref: 'Ephesians 1:1' },
        { name: 'Writes Philippians', ref: 'Philippians 1:1' },
        { name: 'Writes Colossians', ref: 'Colossians 1:1' },
        { name: 'Writes Thessalonians letters', ref: '1 Thessalonians 1:1; 2 Thessalonians 1:1' },
        { name: 'Writes letters to Timothy', ref: '1 Timothy 1:1; 2 Timothy 1:1' },
        { name: 'Writes Titus', ref: 'Titus 1:1' },
        { name: 'Writes Philemon', ref: 'Philemon 1:1' },
      ]
    },

    {
      chapter: 'Suffering for Jesus',
      events: [
        { name: 'Paul suffers many hardships', ref: '2 Corinthians 11:23–28' },
        { name: 'Paul has thorn in flesh', ref: '2 Corinthians 12:7–9' },
        { name: 'Paul ready to die for Christ', ref: 'Acts 21:13; Philippians 1:20–21' },
      ]
    },

    {
      chapter: 'Final Words and Death',
      events: [
        { name: 'Paul writes final letter (2 Timothy)', ref: '2 Timothy 1:1; 4:6–8' },
        { name: 'Paul says he finished the race', ref: '2 Timothy 4:7' },
        { name: 'Paul expects crown from Lord', ref: '2 Timothy 4:8' },
        { name: 'Paul likely killed in Rome', ref: '2 Timothy 4:6; Church history tradition' },
      ]
    },

    {
      chapter: 'Later Bible References',
      events: [
        { name: 'Peter mentions Paul letters', ref: '2 Peter 3:15–16' },
      ]
    },
  ],
  'Noah': [
    {
      chapter: 'Family and Background',
      events: [
        { name: 'Noah born to Lamech', ref: 'Genesis 5:28–29' },
        { name: 'Noah name explained by father', ref: 'Genesis 5:29' },
        { name: 'Noah from line of Seth', ref: 'Genesis 5:1–29; 1 Chronicles 1:4' },
        { name: 'Noah has three sons: Shem, Ham, Japheth', ref: 'Genesis 5:32; 6:10; 7:13' },
      ]
    },

    {
      chapter: 'World Becomes Very Evil',
      events: [
        { name: 'People become very sinful', ref: 'Genesis 6:5, 11–12' },
        { name: 'God sorry He made man', ref: 'Genesis 6:6–7' },
        { name: 'Noah finds favor with God', ref: 'Genesis 6:8' },
        { name: 'Noah is righteous and blameless', ref: 'Genesis 6:9; Ezekiel 14:14, 20' },
        { name: 'Noah walks with God', ref: 'Genesis 6:9' },
      ]
    },

    {
      chapter: 'God Warns Noah',
      events: [
        { name: 'God tells Noah about coming flood', ref: 'Genesis 6:13' },
        { name: 'God tells Noah to build an ark', ref: 'Genesis 6:14–16' },
        { name: 'God explains how to build the ark', ref: 'Genesis 6:14–16' },
        { name: 'God promises covenant with Noah', ref: 'Genesis 6:18' },
        { name: 'Noah told to bring family into ark', ref: 'Genesis 6:18; 7:1' },
        { name: 'Noah told to bring animals into ark', ref: 'Genesis 6:19–20; 7:2–3' },
        { name: 'Noah obeys God fully', ref: 'Genesis 6:22; 7:5; Hebrews 11:7' },
      ]
    },

    {
      chapter: 'Entering the Ark',
      events: [
        { name: 'Noah enters ark at age 600', ref: 'Genesis 7:6, 11' },
        { name: 'Noah and family enter ark', ref: 'Genesis 7:7, 13' },
        { name: 'Animals enter ark in pairs', ref: 'Genesis 7:8–9, 14–16' },
        { name: 'God shuts the door of ark', ref: 'Genesis 7:16' },
      ]
    },

    {
      chapter: 'The Flood Begins',
      events: [
        { name: 'Rain falls for 40 days and nights', ref: 'Genesis 7:11–12, 17' },
        { name: 'Waters cover the earth', ref: 'Genesis 7:18–20' },
        { name: 'All land life dies', ref: 'Genesis 7:21–23' },
        { name: 'Waters remain for 150 days', ref: 'Genesis 7:24' },
      ]
    },

    {
      chapter: 'Waters Go Down',
      events: [
        { name: 'God remembers Noah', ref: 'Genesis 8:1' },
        { name: 'Waters begin to go down', ref: 'Genesis 8:1–3' },
        { name: 'Ark rests on mountains of Ararat', ref: 'Genesis 8:4' },
        { name: 'Mountains become visible', ref: 'Genesis 8:5' },
        { name: 'Noah sends out a raven', ref: 'Genesis 8:6–7' },
        { name: 'Noah sends out a dove first time', ref: 'Genesis 8:8–9' },
        { name: 'Noah sends dove second time', ref: 'Genesis 8:10–11' },
        { name: 'Noah sends dove third time', ref: 'Genesis 8:12' },
        { name: 'Earth becomes dry', ref: 'Genesis 8:13–14' },
      ]
    },

    {
      chapter: 'Leaving the Ark',
      events: [
        { name: 'God tells Noah to leave ark', ref: 'Genesis 8:15–17' },
        { name: 'Noah and family leave ark', ref: 'Genesis 8:18–19' },
        { name: 'Noah builds altar to God', ref: 'Genesis 8:20' },
        { name: 'God pleased with offering', ref: 'Genesis 8:21' },
        { name: 'God promises not to destroy earth again by flood', ref: 'Genesis 8:21–22' },
      ]
    },

    {
      chapter: 'God Makes Covenant with Noah',
      events: [
        { name: 'God blesses Noah and sons', ref: 'Genesis 9:1' },
        { name: 'God gives command to fill the earth', ref: 'Genesis 9:1, 7' },
        { name: 'God allows people to eat meat', ref: 'Genesis 9:3–4' },
        { name: 'God speaks about value of human life', ref: 'Genesis 9:5–6' },
        { name: 'God makes covenant with Noah', ref: 'Genesis 9:8–11' },
        { name: 'Rainbow given as sign of covenant', ref: 'Genesis 9:12–17' },
      ]
    },

    {
      chapter: 'Noah Vineyard and Family Trouble',
      events: [
        { name: 'Noah plants a vineyard', ref: 'Genesis 9:20' },
        { name: 'Noah becomes drunk', ref: 'Genesis 9:21' },
        { name: 'Ham sees his father naked', ref: 'Genesis 9:22' },
        { name: 'Shem and Japheth cover their father', ref: 'Genesis 9:23' },
        { name: 'Noah speaks blessing and curse', ref: 'Genesis 9:24–27' },
      ]
    },

    {
      chapter: 'Death of Noah',
      events: [
        { name: 'Noah lives 350 years after flood', ref: 'Genesis 9:28' },
        { name: 'Noah dies at age 950', ref: 'Genesis 9:29' },
      ]
    },

    {
      chapter: 'Later Bible References to Noah',
      events: [
        { name: 'Noah example of righteousness', ref: 'Ezekiel 14:14, 20' },
        { name: 'Jesus speaks about days of Noah', ref: 'Matthew 24:37–39; Luke 17:26–27' },
        { name: 'Noah example of faith', ref: 'Hebrews 11:7' },
        { name: 'Noah called preacher of righteousness', ref: '2 Peter 2:5' },
        { name: 'Flood mentioned in Peter letter', ref: '1 Peter 3:20; 2 Peter 3:6' },
      ]
    },
  ],
  'Solomon': [
    {
      chapter: 'Birth and Family Background',
      events: [
        { name: 'Solomon born to David and Bathsheba', ref: '2 Samuel 12:24; 1 Chronicles 3:5' },
        { name: 'God loves Solomon', ref: '2 Samuel 12:24' },
        { name: 'God names him Jedidiah', ref: '2 Samuel 12:25' },
        { name: 'Solomon son of King David', ref: '1 Kings 1:28; 1 Chronicles 22:9–10' },
      ]
    },

    {
      chapter: 'Solomon Chosen as King',
      events: [
        { name: 'David promises Solomon will be king', ref: '1 Kings 1:13, 28–30' },
        { name: 'Solomon anointed as king', ref: '1 Kings 1:32–40; 1 Chronicles 29:22–25' },
        { name: 'People rejoice greatly', ref: '1 Kings 1:39–40' },
        { name: 'Solomon sits on throne of David', ref: '1 Kings 2:12; 1 Chronicles 29:23' },
      ]
    },

    {
      chapter: 'Solomon Strengthens His Kingdom',
      events: [
        { name: 'Solomon removes his enemies', ref: '1 Kings 2:13–25, 26–27, 28–34, 35–46' },
        { name: 'Kingdom firmly established', ref: '1 Kings 2:12, 46' },
      ]
    },

    {
      chapter: 'Solomon Asks for Wisdom',
      events: [
        { name: 'Solomon marries Pharaoh daughter', ref: '1 Kings 3:1' },
        { name: 'Solomon offers sacrifice to God', ref: '1 Kings 3:3–4' },
        { name: 'God appears to Solomon in dream', ref: '1 Kings 3:5; 2 Chronicles 1:7' },
        { name: 'Solomon asks for wisdom', ref: '1 Kings 3:6–9; 2 Chronicles 1:8–10' },
        { name: 'God gives wisdom to Solomon', ref: '1 Kings 3:10–12; 4:29–30; 2 Chronicles 1:11–12' },
        { name: 'God gives riches and honor also', ref: '1 Kings 3:13; 2 Chronicles 1:11–12' },
      ]
    },

    {
      chapter: 'Solomon Shows His Wisdom',
      events: [
        { name: 'Solomon judges between two women', ref: '1 Kings 3:16–28' },
        { name: 'All Israel sees his wisdom', ref: '1 Kings 3:28' },
        { name: 'Solomon becomes very famous', ref: '1 Kings 4:29–31, 34' },
        { name: 'Solomon writes many proverbs', ref: '1 Kings 4:32; Proverbs 1:1' },
        { name: 'Solomon writes songs', ref: '1 Kings 4:32; Song of Solomon 1:1' },
      ]
    },

    {
      chapter: 'Solomon Builds the Temple',
      events: [
        { name: 'Solomon plans to build temple', ref: '1 Kings 5:1–5; 1 Chronicles 22:6–10' },
        { name: 'Solomon gets help from King Hiram', ref: '1 Kings 5:6–12' },
        { name: 'Solomon begins building temple', ref: '1 Kings 6:1; 2 Chronicles 3:1' },
        { name: 'Temple building details', ref: '1 Kings 6:2–38' },
        { name: 'Temple completed after 7 years', ref: '1 Kings 6:38' },
      ]
    },

    {
      chapter: 'Solomon Builds His Palace',
      events: [
        { name: 'Solomon builds his palace', ref: '1 Kings 7:1–12' },
        { name: 'Solomon makes temple furniture', ref: '1 Kings 7:13–51; 2 Chronicles 4:1–22' },
      ]
    },

    {
      chapter: 'Temple Dedicated to God',
      events: [
        { name: 'Ark brought into temple', ref: '1 Kings 8:1–11; 2 Chronicles 5:2–14' },
        { name: 'God glory fills temple', ref: '1 Kings 8:10–11; 2 Chronicles 5:13–14' },
        { name: 'Solomon prays to God', ref: '1 Kings 8:22–53; 2 Chronicles 6:12–42' },
        { name: 'Solomon blesses the people', ref: '1 Kings 8:54–61' },
        { name: 'Solomon offers many sacrifices', ref: '1 Kings 8:62–64; 2 Chronicles 7:4–5' },
        { name: 'God appears to Solomon again', ref: '1 Kings 9:1–9; 2 Chronicles 7:11–22' },
      ]
    },

    {
      chapter: 'Solomon Wealth and Fame',
      events: [
        { name: 'Solomon becomes very rich', ref: '1 Kings 10:14–23; 2 Chronicles 9:13–22' },
        { name: 'Queen of Sheba visits Solomon', ref: '1 Kings 10:1–13; 2 Chronicles 9:1–12' },
        { name: 'Queen amazed at his wisdom', ref: '1 Kings 10:4–7; 2 Chronicles 9:3–6' },
        { name: 'Solomon becomes greatest king', ref: '1 Kings 10:23–25; 2 Chronicles 9:22–24' },
      ]
    },

    {
      chapter: 'Solomon Writings',
      events: [
        { name: 'Solomon writes Proverbs', ref: 'Proverbs 1:1; 10:1; 25:1' },
        { name: 'Solomon writes Ecclesiastes', ref: 'Ecclesiastes 1:1, 12' },
        { name: 'Solomon writes Song of Solomon', ref: 'Song of Solomon 1:1' },
      ]
    },

    {
      chapter: 'Solomon Turns Away from God',
      events: [
        { name: 'Solomon marries many foreign wives', ref: '1 Kings 11:1–3' },
        { name: 'His wives turn his heart away', ref: '1 Kings 11:3–4' },
        { name: 'Solomon worships other gods', ref: '1 Kings 11:5–8' },
        { name: 'God becomes angry with Solomon', ref: '1 Kings 11:9–10' },
        { name: 'God says kingdom will be divided', ref: '1 Kings 11:11–13' },
      ]
    },

    {
      chapter: 'Solomon Enemies Rise',
      events: [
        { name: 'God raises enemies against Solomon', ref: '1 Kings 11:14, 23, 26' },
        { name: 'Jeroboam chosen to rule later', ref: '1 Kings 11:29–40' },
      ]
    },

    {
      chapter: 'Death of Solomon',
      events: [
        { name: 'Solomon rules Israel 40 years', ref: '1 Kings 11:42; 2 Chronicles 9:30' },
        { name: 'Solomon dies', ref: '1 Kings 11:43; 2 Chronicles 9:31' },
        { name: 'Solomon buried in City of David', ref: '1 Kings 11:43; 2 Chronicles 9:31' },
        { name: 'Rehoboam becomes king after him', ref: '1 Kings 11:43; 2 Chronicles 9:31' },
      ]
    },

    {
      chapter: 'Later Bible References to Solomon',
      events: [
        { name: 'Jesus speaks about Solomon wisdom', ref: 'Matthew 12:42; Luke 11:31' },
        { name: 'Jesus speaks about Solomon glory', ref: 'Matthew 6:29; Luke 12:27' },
        { name: 'Solomon in family line of Jesus', ref: 'Matthew 1:6–7' },
      ]
    },
  ],
};
