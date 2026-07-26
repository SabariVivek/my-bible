// ── Bible Characters Data ──
const BASE = 'https://d3owcl6pd5zkqc.cloudfront.net/images/figures/';
const FALLBACK = 'https://d3owcl6pd5zkqc.cloudfront.net/images/account_nobgrnd.png';

const sections = [
  {
    id: 'featured', label: 'Featured', labelClass: 'label-all', lineClass: 'line-all', cardClass: 'feat-card',
    characters: [
      { name: 'Jesus',    role: 'Savior of Humanity',       img: 'Jesus_1200x1200.webp',    t: 'NT' },
      { name: 'Moses',    role: 'Prophet & Lawgiver',       img: 'Moses_1200x1200.webp',    t: 'OT' },
      { name: 'David',    role: 'King & Psalmist',          img: 'David_1200x1200.webp',    t: 'OT' },
      { name: 'Mary',     role: 'Mother of Jesus',          img: 'Mary_1200x1200.webp',     t: 'NT' },
      { name: 'Abraham',  role: 'Father of Nations',        img: 'Abraham_1200x1200.webp',  t: 'OT' },
      { name: 'Paul',     role: 'Apostle to Gentiles',      img: 'Paul_1200x1200.webp',     t: 'NT' },
      { name: 'Noah',     role: 'Builder of the Ark',       img: 'Noah_1200x1200.webp',     t: 'OT' },
      { name: 'Solomon',  role: 'King of Wisdom',           img: 'Solomon_1200x1200.webp',  t: 'OT' },
    ]
  },
  {
    id: 'old-testament', label: 'Old Testament', labelClass: 'label-ot', lineClass: 'line-ot', cardClass: 'ot-card',
    characters: [
      { name: 'Adam',      role: 'First Man on Earth',         img: 'Adam_1200x1200.webp',     t: 'OT' },
      { name: 'Eve',       role: 'Mother of All Living',       img: 'Eve_1200x1200.webp',      t: 'OT' },
      { name: 'Isaac',     role: 'Son of Abraham',             img: 'Isaac_1200x1200.webp',    t: 'OT' },
      { name: 'Rebekah',   role: 'Wife of Isaac',              img: 'Rebekah_1200x1200.webp',  t: 'OT' },
      { name: 'Jacob',     role: 'Father of 12 Tribes',        img: 'Jacob_1200x1200.webp',    t: 'OT' },
      { name: 'Ishmael',   role: 'Son of Abraham',             img: 'Ishmael_1200x1200.webp',  t: 'OT' },
      { name: 'Joseph',    role: 'Interpreter of Dreams',      img: 'Joseph_1200x1200.webp',   t: 'OT' },
      { name: 'Lot',       role: 'Nephew of Abraham',          img: 'Lot_1200x1200.webp',      t: 'OT' },
      { name: 'Sarah',     role: 'Mother of Nations',          img: 'Sarah_1200x1200.webp',    t: 'OT' },
      { name: 'Rachel',    role: 'Beloved Wife of Jacob',      img: 'Rachel_1200x1200.webp',   t: 'OT' },
      { name: 'Leah',      role: 'First Wife of Jacob',        img: 'Leah_1200x1200.webp',     t: 'OT' },
      { name: 'Judah',     role: 'Tribe of Messiah',           img: 'Judah_1200x1200.webp',    t: 'OT' },
      { name: 'Benjamin',  role: 'Son of Jacob',               img: 'Benjamin_1200x1200.webp', t: 'OT' },
      { name: 'Levi',      role: 'Priestly Tribe',             img: 'Levi_1200x1200.webp',     t: 'OT' },
      { name: 'Aaron',     role: 'High Priest of Israel',      img: 'Aaron_1200x1200.webp',    t: 'OT' },
      { name: 'Joshua',    role: 'Conqueror of Canaan',        img: 'Joshua_1200x1200.webp',   t: 'OT' },
      { name: 'Caleb',     role: 'Faithful Spy',               img: 'Caleb_1200x1200.webp',    t: 'OT' },
      { name: 'Samson',    role: 'Mighty Warrior of God',      img: 'Samson_1200x1200.webp',   t: 'OT' },
      { name: 'Rahab',     role: 'Woman of Faith',             img: 'Rahab_1200x1200.webp',    t: 'OT' },
      { name: 'Jephthah',  role: 'Judge of Israel',            img: 'Jephthah_1200x1200.webp', t: 'OT' },
      { name: 'Othniel',   role: 'First Judge',                img: 'Othniel_1200x1200.webp',  t: 'OT' },
      { name: 'Ruth',      role: 'Woman of Loyalty',           img: 'Ruth_1200x1200.webp',     t: 'OT' },
      { name: 'Naomi',     role: 'Mother-in-law of Ruth',      img: 'Naomi_1200x1200.webp',    t: 'OT' },
      { name: 'Boaz',      role: 'Kinsman Redeemer',           img: 'Boaz_1200x1200.webp',     t: 'OT' },
      { name: 'Samuel',    role: 'Prophet & Judge',            img: 'Samuel_1200x1200.webp',   t: 'OT' },
      { name: 'Saul',      role: 'First King of Israel',       img: 'Saul_1200x1200.webp',     t: 'OT' },
      { name: 'Jehoshaphat', role: 'King of Judah',            img: 'Jehoshaphat_1200x1200.webp', t: 'OT' },
      { name: 'Elijah',    role: 'Prophet of Fire',            img: 'Elijah_1200x1200.webp',   t: 'OT' },
      { name: 'Elisha',    role: "God's Miracle Worker",       img: 'Elisha_1200x1200.webp',   t: 'OT' },
      { name: 'Esther',    role: 'Queen & Savior',             img: 'Esther_1200x1200.webp',   t: 'OT' },
      { name: 'Daniel',    role: 'Vision & Dream Seer',        img: 'Daniel_1200x1200.webp',   t: 'OT' },
      { name: 'Jeremiah',  role: 'Prophet of Doom & Hope',     img: 'Jeremiah_1200x1200.webp', t: 'OT' },
      { name: 'Ezekiel',   role: 'Visionary Prophet',          img: 'Ezekiel_1200x1200.webp',  t: 'OT' },
      { name: 'Hosea',     role: 'Minor Prophet',              img: 'Hosea_1200x1200.webp',    t: 'OT' },
      { name: 'Amos',      role: 'Minor Prophet',              img: 'Amos_1200x1200.webp',     t: 'OT' },
      { name: 'Micah',     role: 'Minor Prophet',              img: 'Micah_1200x1200.webp',    t: 'OT' },
      { name: 'Miriam',    role: 'Prophetess & Sister',        img: 'Miriam_1200x1200.webp',   t: 'OT' },
      { name: 'Bathsheba', role: 'Wife of King David',         img: 'Bathsheba_1200x1200.webp',t: 'OT' },
      { name: 'Jonathan',  role: 'Faithful Friend of David',   img: 'Jonathan_1200x1200.webp', t: 'OT' },
      { name: 'Ezra',      role: 'Priest and Scribe',          img: 'Ezra_1200x1200.webp',     t: 'OT' },
    ]
  },
  {
    id: 'new-testament', label: 'New Testament', labelClass: 'label-nt', lineClass: 'line-nt', cardClass: 'nt-card',
    characters: [
      { name: 'Elizabeth', role: 'Mother of John the Baptist', img: 'Elizabeth_1200x1200.webp', t: 'NT' },
      { name: 'Zechariah', role: 'Priest',                     img: 'Zechariah_1200x1200.webp', t: 'NT' },
      { name: 'Simeon',    role: 'Witness of Christ',          img: 'Simeon_1200x1200.webp',    t: 'NT' },
      { name: 'Anna',      role: 'Prophetess',                 img: 'Anna_1200x1200.webp',      t: 'NT' },
      { name: 'Peter',     role: 'Rock of the Church',         img: 'Peter_1200x1200.webp',     t: 'NT' },
      { name: 'John',      role: 'The Beloved Disciple',       img: 'John_1200x1200.webp',      t: 'NT' },
      { name: 'Mark',      role: 'Author of the Gospel',       img: 'Mark_1200x1200.webp',      t: 'NT' },
      { name: 'Andrew',    role: 'Fisherman & Disciple',       img: 'Andrew_1200x1200.webp',    t: 'NT' },
      { name: 'Philip',    role: 'One of the 12 Apostles',     img: 'Philip_1200x1200.webp',    t: 'NT' },
      { name: 'James',     role: 'Apostle & Epistle Writer',   img: 'James_1200x1200.webp',     t: 'NT' },
      { name: 'Matthias',  role: 'Apostle',                    img: 'Matthias_1200x1200.webp',  t: 'NT' },
      { name: 'Stephen',   role: 'First Martyr',               img: 'Stephen_1200x1200.webp',   t: 'NT' },
      { name: 'Titus',     role: 'Church Leader',              img: 'Titus_1200x1200.webp',     t: 'NT' },
      { name: 'Aquila',    role: 'Missionary',                 img: 'Aquila_1200x1200.webp',    t: 'NT' },
      { name: 'Cornelius', role: 'First Gentile Convert',      img: 'Cornelius_1200x1200.webp', t: 'NT' },
      { name: 'Ananias',   role: 'Disciple',                   img: 'Ananias_1200x1200.webp',   t: 'NT' },
      { name: 'Nicodemus', role: 'Pharisee',                   img: 'Nicodemus_1200x1200.webp', t: 'NT' },
      { name: 'Lazarus',   role: 'Raised by Jesus',            img: 'Lazarus_1200x1200.webp',   t: 'NT' },
      { name: 'Agabus',    role: 'Prophet',                    img: 'Agabus_1200x1200.webp',    t: 'NT' },
      { name: 'Martha',    role: 'Sister of Lazarus',          img: 'Martha_1200x1200.webp',    t: 'NT' },
      { name: 'Salome',    role: 'Follower of Jesus',          img: 'Salome_1200x1200.webp',    t: 'NT' },
      { name: 'Priscilla', role: 'Church Leader',              img: 'Priscilla_1200x1200.webp', t: 'NT' },
    ]
  }
];

// ── Character detail data ──
const characterData = {
  'Jesus': {
    bio: `Jesus of Nazareth is the central figure of Christianity, believed by Christians to be the Son of God and the promised Messiah. Born in Bethlehem to the Virgin Mary, he grew up in Nazareth and began his public ministry around age 30. He gathered twelve disciples and traveled throughout Galilee and Judea teaching, healing the sick, raising the dead, and proclaiming the Kingdom of God. His crucifixion under Pontius Pilate and subsequent resurrection form the foundation of the Christian faith.`,
    verses: [
      { text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', ref: 'John 3:16' },
      { text: 'I am the way and the truth and the life. No one comes to the Father except through me.', ref: 'John 14:6' },
    ],
    facts: { Period: 'c. 4 BC – AD 30', Born: 'Bethlehem', Tribe: 'Judah', Books: 'Matthew, Mark, Luke, John' }
  },
  'Moses': {
    bio: `Moses was the great liberator and lawgiver of Israel, chosen by God to lead the Hebrews out of Egyptian slavery. Raised in Pharaoh's court after being placed in a basket on the Nile, he encountered God in a burning bush and was commissioned to confront Pharaoh. Through ten plagues, he secured the Exodus and received the Ten Commandments on Mount Sinai. He led Israel through forty years in the wilderness, shaping them into a covenant people before his death on Mount Nebo.`,
    verses: [
      { text: 'The LORD would speak to Moses face to face, as one speaks to a friend.', ref: 'Exodus 33:11' },
      { text: 'I am who I am. This is what you are to say to the Israelites: "I AM has sent me to you."', ref: 'Exodus 3:14' },
    ],
    facts: { Period: 'c. 1391–1271 BC', Born: 'Egypt', Tribe: 'Levi', Books: 'Exodus–Deuteronomy' }
  },
  'David': {
    bio: `David, the shepherd boy who became Israel's greatest king, was anointed by the prophet Samuel while still a youth. He famously slew the Philistine giant Goliath with a sling and stone, rose through Saul's court as a warrior and musician, and eventually united the twelve tribes under one crown. He established Jerusalem as the capital and longed to build a temple for God. Though he sinned grievously with Bathsheba, his repentance and devotion to God earned him the title "a man after God's own heart."`,
    verses: [
      { text: 'The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures.', ref: 'Psalm 23:1–2' },
      { text: 'I have found David son of Jesse, a man after my own heart; he will do everything I want him to do.', ref: 'Acts 13:22' },
    ],
    facts: { Period: 'c. 1040–970 BC', Born: 'Bethlehem', Tribe: 'Judah', Books: 'Samuel, Kings, Psalms' }
  },
  'Mary': {
    bio: `Mary, the mother of Jesus, is honored throughout Christianity as the woman chosen by God to bear his Son. A young Jewish woman from Nazareth, she received the angel Gabriel's announcement that she would conceive and bear a son named Jesus. Though she experienced the trauma of her son's crucifixion, she persevered in faith, faithful to Jesus throughout his ministry. She was present at the crucifixion and remained a care for John, the beloved disciple. The Gospels present her as a contemplative believer who "treasured all these things in her heart," reflecting deeply on her son's identity and purpose.`,
    verses: [
      { text: 'May it be to me as you have said.', ref: 'Luke 1:38' },
      { text: 'His mother treasured all these things in her heart.', ref: 'Luke 2:51' },
    ],
    facts: { Period: 'c. 18 BC – AD 41', Born: 'Nazareth', Tribe: 'Judah', Books: 'Matthew, Luke, John, Acts' }
  },
  'Abraham': {
    bio: `Abraham, originally named Abram, is the patriarch of Judaism, Christianity, and Islam — "the father of nations." God called him to leave his homeland and journey to a land he would receive as an inheritance. Though he and his wife Sarah were advanced in years, God promised them descendants as numerous as the stars. Abraham's unwavering faith in God's promises, even when tested to offer his son Isaac, exemplified covenant trust. He is remembered as a mighty intercessor and friend of God, whose faith was "credited to him as righteousness."`,
    verses: [
      { text: 'The LORD had said to Abram... I will make you into a great nation, and I will bless you.', ref: 'Genesis 12:1–2' },
      { text: 'Abram believed the LORD, and he credited it to him as righteousness.', ref: 'Genesis 15:6' },
    ],
    facts: { Period: 'c. 2000–1825 BC', Born: 'Ur of the Chaldeans', Tribe: 'Patriarch', Books: 'Genesis, Romans, Galatians' }
  },
  'Paul': {
    bio: `Paul, originally named Saul of Tarsus, was a persecutor of Christians before his dramatic conversion on the Damascus road. Blinded by a heavenly light and addressed by the risen Jesus, his life was transformed. He became Christianity's greatest missionary, traveling throughout the Mediterranean, planting churches and writing epistles that form nearly a third of the New Testament. His theology of justification by faith through grace stands at the core of Christian doctrine. Though imprisoned and ultimately martyred in Rome, his legacy shaped Christianity's theological and missionary foundations.`,
    verses: [
      { text: 'For to me, to live is Christ and to die is gain.', ref: 'Philippians 1:21' },
      { text: 'I have fought the good fight, I have finished the race, I have kept the faith.', ref: '2 Timothy 4:7' },
    ],
    facts: { Period: 'c. AD 5–67', Born: 'Tarsus, Cilicia', Tribe: 'Benjamin', Books: '13 NT Epistles' }
  },
  'Noah': {
    bio: `Noah was a righteous man who found grace in God's sight when the earth became corrupt and filled with violence. God commanded him to build an ark to save his family and representatives of every living creature before a global flood destroyed all else. Noah obeyed, spending years constructing the ark and preaching righteousness to his generation. After the flood, God established a covenant with Noah and his sons, promising never again to destroy the earth by water. His faithfulness in building when others mocked, combined with his salvation of the remnant, makes him a model of faith and obedience.`,
    verses: [
      { text: 'By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family.', ref: 'Hebrews 11:7' },
      { text: 'Noah did everything just as God commanded him.', ref: 'Genesis 6:22' },
    ],
    facts: { Period: 'Antediluvian era', Born: 'Land of Eden region', Tribe: 'Pre-patriarchal', Books: 'Genesis' }
  },
  'Solomon': {
    bio: `Solomon, son of David and Bathsheba, became Israel's third and wisest king. He prayed to God not for wealth or military victory, but for wisdom to judge God's people, and the LORD was pleased. His reign was marked by unprecedented prosperity, security, and architectural achievement — most notably the magnificent Temple built in Jerusalem. He wrote proverbs, songs, and philosophical works that became Scripture. Yet his later life was shadowed by his multiplication of wives from foreign nations and his gradual turn toward idolatry, demonstrating that even great wisdom fails without faithfulness.`,
    verses: [
      { text: 'The LORD gave Solomon wisdom and very great insight, and a breadth of understanding as measureless as the sand on the seashore.', ref: '1 Kings 4:29' },
      { text: 'In the fear of the LORD is strong confidence.', ref: 'Proverbs 14:26' },
    ],
    facts: { Period: 'c. 990–931 BC', Born: 'Jerusalem', Tribe: 'Judah', Books: 'Kings, Proverbs, Ecclesiastes, Song of Songs' }
  },
  'Adam': {
    bio: `Adam is presented in Genesis as the first human, created by God in his image and given dominion over all creation. God placed him in the Garden of Eden with his wife Eve, setting one boundary: not to eat from the tree of knowledge of good and evil. When both Adam and Eve disobeyed God's command by eating the forbidden fruit, sin entered the world, bringing separation from God and ultimately death. Yet Adam's story doesn't end in despair — his disobedience is contrasted with Christ's obedience, making Jesus "the last Adam" who restores what was lost through the first.`,
    verses: [
      { text: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.', ref: 'Genesis 1:27' },
      { text: 'The LORD God took the man and put him in the Garden of Eden to work it and take care of it.', ref: 'Genesis 2:15' },
    ],
    facts: { Period: 'Primordial', Born: 'Garden of Eden', Tribe: 'First patriarch', Books: 'Genesis, Romans' }
  },
  'Eve': {
    bio: `Eve was the first woman, created as a "helper" or partner for Adam from his own rib while he slept. Together they lived in the innocence and beauty of the Garden of Eden, unashamed and at peace with God and creation. When the serpent tempted her to eat the forbidden fruit, promising she would "not certainly die," Eve took and ate, then gave some to Adam who ate as well. Though her disobedience brought consequences — pain in childbearing and difficulty in relationships — she is also honored as the mother of all the living, whose offspring ultimately includes the Savior of the world.`,
    verses: [
      { text: 'The LORD God made a woman from the rib he had taken out of the man, and he brought her to the man.', ref: 'Genesis 2:22' },
      { text: 'The serpent said to the woman, "You will not certainly die."', ref: 'Genesis 3:4' },
    ],
    facts: { Period: 'Primordial', Born: 'Garden of Eden', Tribe: 'First matriarch', Books: 'Genesis' }
  },
  'Isaac': {
    bio: `Isaac was the long-awaited son born to Abraham and Sarah in their old age, fulfilling God's covenant promise. His name means "he laughs," reflecting Sarah's laughter when she learned she would conceive. The defining moment of his youth came when Abraham, tested by God, brought Isaac to be sacrificed — yet God provided a ram as a substitute. This event prefigures Christ's sacrifice and demonstrates both Abraham's faith and God's mercy. Isaac grew to be a patriarch himself, becoming the father of Jacob and Esau, through whom God's covenant promises continued.`,
    verses: [
      { text: 'By faith Abraham, when tested, offered Isaac as a sacrifice. He who had welcomed the promises was about to sacrifice his one and only son.', ref: 'Hebrews 11:17' },
      { text: 'Your wife Sarah will bear you a son, and you will call him Isaac.', ref: 'Genesis 17:19' },
    ],
    facts: { Period: 'c. 1896–1716 BC', Born: 'Canaan', Tribe: 'Patriarch', Books: 'Genesis' }
  },
  'Rebekah': {
    bio: `Rebekah, daughter of Bethuel, became the wife of Isaac and mother of Jacob and Esau. Her story begins when Abraham's servant journeyed to Mesopotamia to find a bride for Isaac, and Rebekah's kindness at the well — offering to draw water for the dusty travelers and their camels — revealed God's perfect guidance. She bore twins whose struggle in her womb foreshadowed the division between two nations. Though she played a pivotal role in deceiving blind Isaac to secure Jacob's blessing, she remained a vital matriarch in Israel's lineage.`,
    verses: [
      { text: 'The LORD has made a way for my journey.', ref: 'Genesis 24:48' },
    ],
    facts: { Period: 'c. 1836 BC', Born: 'Paddan Aram', Tribe: 'Matriarch', Books: 'Genesis' }
  },
  'Jacob': {
    bio: `Jacob, son of Isaac and Rebekah, was a man of struggle whose very name means "he grasps the heel" or "deceiver." He deceived his brother Esau and father Isaac to obtain the birthright and blessing, then fled to Paddan Aram where he served Laban for twenty years. During his long journey, he encountered God in a dream of a ladder to heaven and later wrestled with the angel of the LORD, after which God changed his name to Israel, meaning "he struggles with God." Wounded yet blessed, Jacob fathered twelve sons whose descendants became the twelve tribes of Israel, fulfilling God's covenant promises through his lineage.`,
    verses: [
      { text: 'Your name will no longer be Jacob, but Israel, because you have struggled with God and with humans and have overcome.', ref: 'Genesis 32:28' },
    ],
    facts: { Period: 'c. 1836–1689 BC', Born: 'Canaan', Tribe: 'Patriarch', Books: 'Genesis' }
  },
  'Joseph': {
    bio: `Joseph, son of Jacob and Rachel, rose from slave and prisoner to become the vizier of Egypt, second only to Pharaoh. Hated by his jealous brothers, who sold him into slavery, Joseph was taken to Egypt where he served in Potiphar's house. When falsely accused by Potiphar's wife, he was imprisoned. Yet in every circumstance, the LORD was with Joseph, making him prosper. Interpreting Pharaoh's dreams of coming famine, Joseph was exalted to power. During the famine, his brothers came seeking grain, and Joseph, testing and ultimately forgiving them, revealed his true identity. His story demonstrates God's providence working through betrayal and suffering toward redemption.`,
    verses: [
      { text: 'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.', ref: 'Genesis 50:20' },
    ],
    facts: { Period: 'c. 1745–1635 BC', Born: 'Canaan', Tribe: 'Joseph (Ephraim/Manasseh)', Books: 'Genesis' }
  },
  'Sarah': {
    bio: `Sarah was the wife of Abraham and mother of Isaac, a key matriarch whose faith and persistence were tested and refined. Though initially barren and advanced in years, God promised her a son. When the news came, she laughed in skepticism, yet God fulfilled the promise, and she conceived and bore Isaac. The writer of Hebrews honors her faith, noting she "considered him faithful who had made the promise." Though she experienced moments of doubt and control (like giving Hagar to Abraham), her legacy as the mother of God's covenant people remains foundational to biblical history.`,
    verses: [
      { text: 'By faith Abraham, even though he was past age—and Sarah herself was barren—was enabled to become a father.', ref: 'Hebrews 11:11' },
    ],
    facts: { Period: 'c. 2037–1910 BC', Born: 'Ur of the Chaldeans', Tribe: 'Patriarch lineage', Books: 'Genesis' }
  },
  'Rachel': {
    bio: `Rachel was the beloved wife of Jacob, mother of Joseph and Benjamin, and a matriarch of Israel. Jacob fell in love with her upon first sight and served fourteen years to obtain her as his wife. Yet she remained barren for many years, causing her great anguish. She bore Joseph late in her childbearing years, and died giving birth to Benjamin on the road to Ephrath (Bethlehem), where Jacob set up a pillar over her grave. Though not as long-lived as Sarah or Rebekah, Rachel's legacy endured through her sons, particularly Joseph, whose descendants became powerful tribes.`,
    verses: [
      { text: 'Jacob was in love with Rachel and said, "I will serve you seven years for your younger daughter Rachel."', ref: 'Genesis 29:18' },
    ],
    facts: { Period: 'c. 1780 BC', Born: 'Paddan Aram', Tribe: 'Matriarch', Books: 'Genesis' }
  },
  'Leah': {
    bio: `Leah was the first wife of Jacob, mother of six sons and one daughter, whose story is often overshadowed by that of her younger sister Rachel. Jacob loved Rachel and was deceived into marrying Leah first. Through her children—Reuben, Simeon, Levi, Judah, Issachar, and Zebulun—major Israelite tribes descended, including the priestly tribe of Levi and the royal tribe of Judah. Though she began her marriage unloved, seeing herself as rejected, Leah eventually bore the fruit of her position: her sons became leaders of God's people, and through Judah came the Messiah himself.`,
    verses: [
      { text: 'When the LORD saw that Leah was not loved, he opened her womb.', ref: 'Genesis 29:31' },
    ],
    facts: { Period: 'c. 1790 BC', Born: 'Paddan Aram', Tribe: 'Matriarch', Books: 'Genesis' }
  },
  'Aaron': {
    bio: `Aaron, brother of Moses and son of Amram, became the first High Priest of Israel. Though initially reluctant about his role (it was Aaron who convinced Moses that his concerns about speaking ability were groundless), Aaron was confirmed by God to stand before the people and the altar as their priestly mediator. He performed the miraculous signs alongside Moses in Egypt and stood with Moses as the Law was given at Mount Sinai. Yet Aaron also led Israel into grievous sin when he fashioned the golden calf while Moses was receiving the tablets. Despite this failure, his priestly descendants maintained the sacred office throughout Israel's history.`,
    verses: [
      { text: 'I have chosen your brothers from all the Israelites to be priests and serve me with nothing but the priestly garments and divine decisions.', ref: 'Deuteronomy 10:8' },
    ],
    facts: { Period: 'c. 1399–1272 BC', Born: 'Egypt', Tribe: 'Levi', Books: 'Exodus, Leviticus, Numbers' }
  },
  'Joshua': {
    bio: `Joshua, son of Nun, was Moses' faithful assistant who became Israel's leader after Moses' death. As commander of the Israelite armies, he led the conquest of Canaan, beginning with the miraculous crossing of the Jordan River. Inheriting the promise of God that "no one will be able to stand against you," Joshua conquered city after city, including the famous siege of Jericho where the walls fell after Israel's priests and people marched around them while blowing trumpets. After dividing the land among the tribes, Joshua gave his final address to Israel, calling them to "choose for yourselves this day whom you will serve."`,
    verses: [
      { text: 'Be strong and courageous...the LORD your God goes with you; he will never leave you nor forsake you.', ref: 'Joshua 1:6–5' },
    ],
    facts: { Period: 'c. 1355–1245 BC', Born: 'Egypt', Tribe: 'Ephraim', Books: 'Joshua, Exodus, Numbers' }
  },
  'Samson': {
    bio: `Samson was an Israelite judge whose prodigious strength came directly from God's Spirit, enabling him to triumph over Israel's enemy, the Philistines. Born to a previously barren woman, dedicated as a Nazirite with uncut hair as the sign of his vow, Samson began his calling as a deliverer of Israel. Yet his story is marked by moral weakness: he repeatedly broke his vows through sensuality and anger, ultimately falling in love with Delilah, who betrayed him to the Philistines. Blinded and imprisoned, Samson's final act—pushing down the temple pillars—killed thousands of Philistines, more than he killed during his entire life, redeeming his legacy through sacrificial death.`,
    verses: [
      { text: 'The Spirit of the LORD came powerfully upon him as he went down to Ashkelon.', ref: 'Judges 14:19' },
    ],
    facts: { Period: 'c. 1100 BC', Born: 'Zorah, Dan', Tribe: 'Dan', Books: 'Judges' }
  },
  'James': {
    bio: `James, son of Zebedee and brother of John, was one of Jesus' innermost three disciples. With Peter and John, he witnessed the Transfiguration on the mountain and Jesus' agony in the Garden of Gethsemane. Known as "James the Greater," he was a man of fervent zeal — Jesus nicknamed him and John "Boanerges," sons of thunder. He was the first of the Twelve apostles to be martyred, executed by order of King Herod Agrippa around AD 44. His shrine in Santiago de Compostela, Spain, became one of Christendom's greatest pilgrimage destinations.`,
    verses: [
      { text: 'Lord, do you want us to call fire down from heaven to destroy them?', ref: 'Luke 9:54' },
    ],
    facts: { Period: 'c. 3 BC – AD 44', Born: 'Bethsaida / Capernaum', Tribe: 'Zebulun region', Books: 'Gospels, Acts' }
  },
  'Rebekah': {
    bio: `Rebekah, daughter of Bethuel, became the wife of Isaac and mother of Jacob and Esau. Her story begins when Abraham's servant journeyed to Mesopotamia to find a bride for Isaac, and Rebekah's kindness at the well — offering to draw water for the dusty travelers and their camels — revealed God's perfect guidance. She bore twins whose struggle in her womb foreshadowed the division between two nations. Though she played a pivotal role in deceiving blind Isaac to secure Jacob's blessing, she remained a vital matriarch in Israel's lineage.`,
    verses: [
      { text: 'The LORD has made a way for my journey.', ref: 'Genesis 24:48' },
    ],
    facts: { Period: 'c. 1836 BC', Born: 'Paddan Aram', Tribe: 'Matriarch', Books: 'Genesis' }
  },
  'Ishmael': {
    bio: `Ishmael, son of Abraham and Hagar, was born before the promised Isaac, and his story reflects the consequences of human impatience with God's timing. Though Abraham loved his firstborn son, God's covenant was to pass through Isaac. After Sarah gave birth to Isaac, tensions arose, and Hagar and Ishmael were sent away into the wilderness. God appeared to the distressed Hagar and promised her that Ishmael would become a great nation. He became the father of the Arab peoples and lived a long life in the desert, eventually reconciling with his half-brother to bury their father.`,
    verses: [
      { text: 'God heard the boy crying, and the angel of God called to Hagar from heaven.', ref: 'Genesis 21:17' },
    ],
    facts: { Period: 'c. 1897 BC', Born: 'Canaan', Tribe: 'Arab peoples', Books: 'Genesis' }
  },
  'Lot': {
    bio: `Lot, nephew of Abraham, journeyed with his uncle from Ur and witnessed God's covenant promises. When strife arose between their herdsmen over grazing land, Abraham graciously offered Lot first choice of where to settle. Lot chose the well-watered plain of Sodom, a decision that would test his faith profoundly. When two angels visited Sodom to warn of its impending destruction, Lot's righteous heart anguished over the city's wickedness. He was rescued with his daughters before the city's fiery judgment, though his wife perished in disobedience. His daughters' subsequently questionable actions bore lasting consequences for his descendants.`,
    verses: [
      { text: 'Lot looked up and saw the whole plain of the Jordan glowing like the garden of the LORD.', ref: 'Genesis 13:10' },
    ],
    facts: { Period: 'c. 1800 BC', Born: 'Ur of the Chaldeans', Tribe: 'Related to Abraham', Books: 'Genesis, 2 Peter' }
  },
  'Judah': {
    bio: `Judah, the fourth son of Jacob and Leah, was a man of both shame and redemption. His reckless liaison with Tamar, though unintentional deception on his part, revealed his conscience when confronted with evidence of his wrongdoing. Unlike his brother Reuben, Judah showed wisdom and leadership, proposing that he himself become a slave in Benjamin's place when accused of theft. His descendants became the tribe of Judah, from which the entire southern kingdom would take its name, and through which the royal line of David — and ultimately the Messiah — would come. Judah's journey from moral failure to sacrificial love transformed him into a namesake for an entire people.`,
    verses: [
      { text: 'Praise the LORD, all you Gentiles, and let all the peoples extol him.', ref: 'Romans 15:11' },
    ],
    facts: { Period: 'c. 1800 BC', Born: 'Paddan Aram', Tribe: 'Judah (royal lineage)', Books: 'Genesis, Matthew' }
  },
  'Benjamin': {
    bio: `Benjamin, the youngest son of Jacob and Rachel, held a special place in his father's heart as the only full brother of Joseph. Born in Canaan after Jacob's name change to Israel, Benjamin was the favored child of Jacob's old age. His story intertwines with Joseph's drama — he was the one over whom Joseph wept, the one tested with the hidden cup, and the one for whom Judah offered himself as a slave. Benjamin's tribe became warriors and slingers, famous for their military prowess. Though his tribe would remain relatively small, it included Israel's first king, Saul.`,
    verses: [
      { text: 'These are the tribes of Israel, and this is what their father said to them.', ref: 'Genesis 49:28' },
    ],
    facts: { Period: 'c. 1795 BC', Born: 'Canaan', Tribe: 'Benjamin', Books: 'Genesis, Judges, Samuel' }
  },
  'Levi': {
    bio: `Levi, the third son of Jacob and Leah, is most remembered for his vengeful response when his sister Dinah was violated — he and Simeon slew the entire male population of Shechem in revenge. Yet God's calling upon Levi's descendants transformed his legacy entirely. His descendants became the priests and Levites of Israel, set apart for God's service in the tabernacle and temple. They received no tribal territory but were sustained by tithes and offerings. From Levi came Moses, Aaron, and the entire priestly order. What began as a curse for violence ultimately became a role of highest spiritual significance.`,
    verses: [
      { text: 'The LORD your God has chosen the tribe of Levi to minister and to pronounce blessings.', ref: 'Deuteronomy 10:8' },
    ],
    facts: { Period: 'c. 1800 BC', Born: 'Paddan Aram', Tribe: 'Levi (priestly)', Books: 'Genesis, Exodus, Leviticus' }
  },
  'Caleb': {
    bio: `Caleb, son of Jephunneh, stands as a model of unwavering faith in the face of overwhelming odds. When Moses sent twelve spies to scout Canaan, only Caleb and Joshua returned with a report trusting God's promise. While the other ten spies spread fear about giants and fortified cities, Caleb declared, "We should go up and take possession of the land, for we can certainly do it." For his faithfulness, God promised him would enter the land, even after forty years of wilderness wandering. At eighty-five years old, he claimed the mountainous Hebron as his inheritance and defeated the Anakim giants living there. His unwavering trust earned him the epithet "wholeheartedly followed the LORD."`,
    verses: [
      { text: 'We should go up and take possession of the land, for we can certainly do it.', ref: 'Numbers 13:30' },
    ],
    facts: { Period: 'c. 1395–1310 BC', Born: 'Egypt', Tribe: 'Judah', Books: 'Numbers, Joshua' }
  },
  'Rahab': {
    bio: `Rahab was a woman of Jericho remembered not for her profession as a harlot, but for her extraordinary faith. When Joshua sent spies to scout the city before invasion, Rahab hid them and negotiated for the safety of her household in exchange. Her act was rooted not in pragmatism but in faith — she testified that she had heard how God dried up the Red Sea and the dread of Israel had fallen on Jericho. When the walls fell, Joshua preserved Rahab and her family, and she became integrated into Israel's community. Her legacy transcends her past: she married an Israelite, bore Boaz, and became an ancestor of King David and ultimately Jesus. She exemplifies how God's grace transcends cultural boundaries and past mistakes.`,
    verses: [
      { text: 'By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient.', ref: 'Hebrews 11:31' },
    ],
    facts: { Period: 'c. 1400 BC', Born: 'Jericho', Tribe: 'Canaanite (adopted through marriage)', Books: 'Joshua, Matthew, Hebrews' }
  },
  'Jephthah': {
    bio: `Jephthah was a judge of Israel born under tragic circumstances — the son of Gilead and a prostitute. Rejected by his half-brothers and cast out from his father's house, he became a leader of outcasts and adventurers who gathered around him. When the Ammonites threatened Israel, the elders of Gilead humbled themselves and asked Jephthah to lead them. He delivered Israel from oppression but is forever remembered for a rash vow he made: if God gave him victory, he would sacrifice whatever came out of his house to meet him. His daughter, his only child, came out dancing with tambourines. His grief and her willing acceptance became one of Scripture's most poignant stories of faith tested to its breaking point.`,
    verses: [
      { text: 'And Jephthah made a vow to the LORD: "If you give the Ammonites into my hands..."', ref: 'Judges 11:30' },
    ],
    facts: { Period: 'c. 1100 BC', Born: 'Gilead', Tribe: 'Manasseh / Gad region', Books: 'Judges, Hebrews' }
  },
  'Othniel': {
    bio: `Othniel, son of Kenaz, was Israel's first judge and a model of spiritual revival and deliverance. He was also Caleb's younger brother, raised in the same faith-filled household. When Israel fell into idolatry and was conquered by Cushan-Rishathaim king of Aram, the people cried out to the LORD. The Spirit of the LORD came upon Othniel, and he rose up with military prowess to deliver Israel. Under his leadership, the land had peace for forty years — Israel's first respite after Joshua's conquests. His judgeship set the pattern for those who would follow: faithfulness leads to victory, peace, and prosperity, while unfaithfulness brings oppression and the need for deliverance.`,
    verses: [
      { text: 'When the Israelites cried out to the LORD, he raised up for them a deliverer, Othniel son of Kenaz.', ref: 'Judges 3:9' },
    ],
    facts: { Period: 'c. 1380–1340 BC', Born: 'Judah', Tribe: 'Judah', Books: 'Judges' }
  },
  'Naomi': {
    bio: `Naomi was an Israelite woman whose name means "pleasantness," yet her life was marked by profound loss. She journeyed to Moab with her husband Elimelech and two sons during a famine. Death claimed her husband and both sons, leaving her alone and bereft in a foreign land. Bitter over her circumstances, she told the people, "Don't call me Naomi. Call me Mara [bitter], because the Almighty has made my life very bitter." Yet God's faithful providential hand was not absent. Her daughter-in-law Ruth's loyal devotion and the providence of Boaz transformed Naomi's mourning into joy. She became the grandmother of Obed, grandfather of Jesse, and great-grandmother of King David. Her story exemplifies how God redeems our losses through loyal love and faithful provision.`,
    verses: [
      { text: 'The LORD has brought her back empty, but the LORD has brought me back full.', ref: 'Ruth 3:11' },
    ],
    facts: { Period: 'c. 1100 BC', Born: 'Bethlehem', Tribe: 'Judah', Books: 'Ruth' }
  },
  'Boaz': {
    bio: `Boaz was a man of noble character, described as a "man of standing" — wealthy, respectable, and righteous. He was a kinsman of Elimelech, Ruth's deceased father-in-law, which qualified him as a "kinsman-redeemer" in Israel's familial law. When Ruth gleaned in his fields following Naomi's poverty, Boaz showed extraordinary kindness, ensuring she had protection and provision. He noticed her faithfulness and asked about her. Rather than taking advantage of her vulnerable status, he honored her virtuous character and redeemed her through marriage, restoring the family line. Boaz became the grandfather of King David and is referenced in Jesus' genealogy as a model of redemptive love and righteous character.`,
    verses: [
      { text: 'All the people of my town know that you are a woman of noble character.', ref: 'Ruth 3:11' },
    ],
    facts: { Period: 'c. 1100 BC', Born: 'Bethlehem', Tribe: 'Judah', Books: 'Ruth, Matthew' }
  },
  'Jehoshaphat': {
    bio: `Jehoshaphat, king of Judah and son of Asa, was a reformer who restored the worship of God and reformed the judicial system. His name means "the LORD judges," and he appointed judges throughout the land to instruct Israel in God's law. Early in his reign, he sought God's counsel, and the Almighty blessed him with wealth and power. When three armies united against him, Jehoshaphat led his people in prayer and worship. God delivered Judah by causing confusion among the enemy armies, who turned on each other. Though he made some questionable alliances later in life (with wicked Ahab and his son Ahaziah), he overall maintained faithfulness to God. His reign was marked by spiritual renewal and administrative excellence.`,
    verses: [
      { text: 'The fear of the LORD fell on all the kingdoms of the lands when they heard that the LORD had fought against the enemies of Israel.', ref: '2 Chronicles 20:29' },
    ],
    facts: { Period: 'c. 915–873 BC', Born: 'Jerusalem', Tribe: 'Judah (royal)', Books: '1 & 2 Kings, 2 Chronicles' }
  },
  'Hosea': {
    bio: `Hosea was a minor prophet called by God during the decline of the northern kingdom of Israel. His message was radical and deeply personal — God commanded him to marry Gomer, an unfaithful woman, as a living parable of Israel's unfaithfulness to God. Despite her infidelity, Hosea was instructed to love her persistently and redeem her, mirroring God's relentless love for wayward Israel. His children were given symbolic names — Jezreel (God scatters), Lo-Ruhamah (not pitied), and Lo-Ammi (not my people) — representing God's judgment. Yet Hosea's ultimate message was one of hope: God's love would not be defeated by Israel's sin. The book of Hosea is one of Scripture's most tender expressions of God's covenant love refusing to let go.`,
    verses: [
      { text: 'How can I give you up, Ephraim? How can I hand you over, Israel?', ref: 'Hosea 11:8' },
    ],
    facts: { Period: 'c. 785–725 BC', Born: 'Israel', Tribe: 'Unknown', Books: 'Hosea' }
  },
  'Amos': {
    bio: `Amos was a shepherd and dresser of sycamore figs from Tekoa who was called by God to be a prophet to the wealthy northern kingdom of Israel during a time of material prosperity and moral corruption. Unlike prophets from priestly families, Amos was a simple rural man with no prophetic training — yet God's word burned in his heart. He denounced the wealthy who oppressed the poor, the judges who perverted justice, the priests who enabled corruption, and false worship that God despised. His message was uncompromising and unwelcome: judgment was coming for Israel's sins. Yet even Amos foresaw restoration: a future when "the fallen booth of David will be restored, and I will repair its broken walls." His prophecies proved accurate when Assyria conquered Israel forty years later.`,
    verses: [
      { text: 'But let justice roll on like a river, righteousness like a never-failing stream!', ref: 'Amos 5:24' },
    ],
    facts: { Period: 'c. 760–750 BC', Born: 'Tekoa, Judah', Tribe: 'Shepherd/prophet', Books: 'Amos' }
  },
  'Micah': {
    bio: `Micah, a prophet from Moresheth in Judah, was a contemporary of Isaiah who spoke God's word to both northern Israel and southern Judah. His prophecies addressed the injustice of the powerful who ground the faces of the poor and the moral corruption that had infected every level of society. Yet Micah balanced judgment with hope, famously pronouncing: "What does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." His most celebrated prophecy foretold the birthplace of the Messiah: "From you, Bethlehem Ephrathah... will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times." This prophecy, made centuries later, was recognized when Jesus was born in Bethlehem.`,
    verses: [
      { text: 'What does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.', ref: 'Micah 6:8' },
    ],
    facts: { Period: 'c. 750–700 BC', Born: 'Moresheth, Judah', Tribe: 'Judah', Books: 'Micah' }
  },
  'Ezra': {
    bio: `Ezra was a priest and scribe who played a pivotal role in rebuilding post-exilic Judah both physically and spiritually. As a skillfully trained scribe, he was a man "devoted to the study and observance of the Law of the LORD, and to teaching its decrees and ordinances in Israel." After the seventy-year Babylonian exile, Ezra led the second wave of returnees to Jerusalem around 458 BC. His primary passion was restoring proper worship and re-establishing adherence to God's law. He confronted the grave sin of mixed marriages with foreign peoples, leading many to renounce such unions. His most memorable act was publicly reading the Law of Moses to the assembled people, resulting in a spiritual awakening and reformation. Ezra's work laid the spiritual foundation for post-exilic Judaism.`,
    verses: [
      { text: 'For Ezra had devoted himself to the study and observance of the Law of the LORD, and to teaching its decrees and ordinances in Israel.', ref: 'Ezra 7:10' },
    ],
    facts: { Period: 'c. 480–440 BC', Born: 'Babylon', Tribe: 'Levi (priestly)', Books: 'Ezra, Nehemiah' }
  },
  'Elizabeth': {
    bio: `Elizabeth was the mother of John the Baptist, a woman of righteousness who "was righteous in the sight of God, observing all the Lord's commands and decrees blamelessly." She was a descendant of Aaron the priest, and her husband Zechariah was also a priest. Though she had long been barren, bringing her shame in her culture, God miraculously granted her pregnancy in her old age. When Mary, her distant relative, visited carrying Jesus, Elizabeth's unborn child leaped in her womb, and she became the first person to recognize the significance of Mary's pregnancy. Her words — "Blessed are you among women, and blessed is the child you will bear!" — remain enshrined in the Magnificat prayer. Her faith and joy demonstrate how God's promises transcend human limitations.`,
    verses: [
      { text: 'Blessed is she who has believed that the LORD would fulfill his promises to her!', ref: 'Luke 1:45' },
    ],
    facts: { Period: 'c. 20 BC – AD 20', Born: 'Judah', Tribe: 'Levi (priestly line)', Books: 'Luke' }
  },
  'Zechariah': {
    bio: `Zechariah was a priest in the temple during the late Second Temple period, serving in the priestly division of Abijah. He was married to Elizabeth, a descendant of Aaron, and together they "were righteous before God, observing all the Lord's commandments and regulations blamelessly." Yet they remained childless for years, a source of profound grief. When Zechariah was chosen by lot to enter the sanctuary and burn incense — a privilege granted only once in a priest's lifetime — an angel appeared to him announcing the birth of John. Zechariah's initial disbelief resulted in him being made silent throughout Elizabeth's pregnancy. When John was born and his name confirmed, Zechariah's mouth was opened and he spoke, praising God in what became known as the Benedictus. His restoration of voice symbolized God's faithfulness breaking through human doubt.`,
    verses: [
      { text: 'Praise be to the Lord, the God of Israel, because he has come to his people and redeemed them.', ref: 'Luke 1:68' },
    ],
    facts: { Period: 'c. 20 BC – AD 20', Born: 'Judah', Tribe: 'Levi (priestly)', Books: 'Luke' }
  },
  'Simeon': {
    bio: `Simeon was a devout and righteous man who had been promised by the Holy Spirit that he would not die before he had seen the Lord's Messiah. He lived in expectation, sensitive to God's leading. When Jesus' parents brought the infant to the temple in Jerusalem for ritual circumcision and purification, Simeon was moved by the Spirit to be there at that precise moment. Recognizing Jesus as the promised Christ, Simeon took the child in his arms and praised God. His prayer — the Nunc Dimittis — expresses profound gratitude for God's salvation prepared before the foundation of the world. His life exemplifies patient faith, spiritual sensitivity, and the blessedness of welcoming God's purposes with joyful recognition and acceptance.`,
    verses: [
      { text: 'Sovereign Lord, as you have promised, you may now dismiss your servant in peace.', ref: 'Luke 2:29' },
    ],
    facts: { Period: 'c. 1 AD', Born: 'Jerusalem', Tribe: 'Righteous remnant', Books: 'Luke' }
  },
  'Anna': {
    bio: `Anna was an elderly prophetess in Jerusalem, described as very old, having lived with her husband seven years after marriage and then as a widow for eighty-four years — making her either 84 or over 100 years old. Despite her advanced age and the loss of her husband, she remained devoted to God, "serving night and day, fasting and praying." Like Simeon, Anna was in the temple when Jesus' parents brought him for dedication. She recognized Jesus immediately as the long-awaited Messiah and immediately began speaking about him to all who were looking forward to the redemption of Jerusalem. Though she spoke only briefly in the Gospel, Anna exemplifies how elderly devoted servants of God often recognize God's hand moving through history — a reminder that spiritual insight and usefulness continue throughout life.`,
    verses: [
      { text: 'She came up to them at that very moment and began to speak about the child to all who were looking forward to the redemption of Jerusalem.', ref: 'Luke 2:38' },
    ],
    facts: { Period: 'c. 1 AD', Born: 'Jerusalem', Tribe: 'Asher', Books: 'Luke' }
  },
  'Peter': {
    bio: `Peter, also called Simon or Cephas ("the Rock"), was the leader and most prominent apostle called by Jesus to "feed his sheep." A fisherman from Bethsaida, Peter showed both tremendous faith and frequent weakness: he walked on water yet doubted, declared Jesus as "the Messiah, the Son of the living God" yet was rebuked as Satan's instrument moments later, and promised to die with Jesus yet denied knowing him thrice after Jesus' arrest. Yet Jesus invested in Peter's transformation. After the resurrection, the resurrected Christ reinstated Peter, asking three times "Do you love me?" before commissioning him to shepherd the church. Peter became the first to proclaim the Gospel to Jews and then to Gentiles, and tradition holds he was crucified upside-down in Rome.`,
    verses: [
      { text: 'You are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.', ref: 'Matthew 16:18' },
    ],
    facts: { Period: 'c. 1 BC – AD 67', Born: 'Bethsaida', Tribe: 'Israel', Books: 'Gospels, Acts, 1 & 2 Peter' }
  },
  'John': {
    bio: `John, one of Jesus' inner circle of three disciples along with Peter and James, was known as "the disciple whom Jesus loved." He leaned against Jesus' chest at the Last Supper and was present at crucial moments—the Transfiguration, the Garden of Gethsemane, the Crucifixion, and the Resurrection. After Jesus' arrest, while Peter denied knowing Jesus, John stood at the foot of the cross with Mary. The Gospel of John, written in his old age, presents Jesus with a particular emphasis on Jesus as the incarnate Word and on personal relationship with God through Christ. John's letters (1, 2, 3 John) and the Book of Revelation round out his New Testament legacy. Tradition places him in Ephesus, where he led the church and mentored timothy`,
    verses: [
      { text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', ref: 'John 1:1' },
    ],
    facts: { Period: 'c. 27 – AD 100', Born: 'Bethsaida', Tribe: 'Zebulun', Books: 'Gospels, 1–3 John, Revelation' }
  },
  'Mark': {
    bio: `Mark, also known as John Mark, was a Palestinian Christian whose mother's home in Jerusalem served as a meeting place for the apostles during Pentecost. He traveled as a companion to Barnabas and Paul on Paul's first missionary journey but withdrew in Pamphylia for reasons unclear, causing tension between Paul and Barnabas. Yet Mark was restored to service and eventually became a trusted colleague of both Paul and Peter. The Gospel of Mark, the shortest of the four gospels, is believed to be based largely on Peter's eyewitness accounts. Mark's style is vivid and direct, emphasizing Jesus' actions and his identity as the suffering Servant. His gospel became the foundation for both Matthew and Luke.`,
    verses: [
      { text: 'The beginning of the good news about Jesus the Messiah, the Son of God.', ref: 'Mark 1:1' },
    ],
    facts: { Period: 'c. AD 5–68', Born: 'Jerusalem', Tribe: 'Unknown', Books: 'Mark, Acts' }
  },
  'Andrew': {
    bio: `Andrew, brother of Simon Peter and a native of Bethsaida, was one of John the Baptist's disciples before Jesus called him to follow. He is notable as a bridge-builder in the Gospel accounts: he brought his brother Peter to Jesus, he brought a small boy with barley loaves to Jesus when Jesus fed the five thousand, and he brought Greek believers to Jesus at the Feast of Passover near the end of Jesus' ministry. Though less prominent than Peter, James, or John, Andrew's quiet service demonstrates that faithful witness and introduction to Christ have lasting significance. Tradition suggests Andrew preached in Scythia (modern-day Argentina/Scotland region).`,
    verses: [
      { text: 'Andrew, Simon Peter\'s brother, spoke up, "Here is a boy with five small barley loaves and two small fish."', ref: 'John 6:8–9' },
    ],
    facts: { Period: 'c. 1 BC – AD 60', Born: 'Bethsaida', Tribe: 'Unknown', Books: 'Gospels, Acts' }
  },
  'Philip': {
    bio: `Philip, one of the Twelve Apostles, was from Bethsaida like Andrew and Peter. He was called directly by Jesus with the command "Follow me." In the Gospel of John, Philip appears as an apostle who questions Jesus, such as when he expressed doubt about how Jesus could feed five thousand people, and Philip's straightforward response to Nathanael ("Come and see") typifies his simple faith and evangelistic zeal. At the Last Supper, Philip asked Jesus, "Lord, show us the Father and that will be enough for us," prompting Jesus' discourse on his intimacy with the Father. After Pentecost, Philip figures prominently in Acts as one who was scattered by persecution and preached the Good News, including his encounter with the Ethiopian eunuch.`,
    verses: [
      { text: 'Jesus said to Philip, "Follow me." Philip was from Bethsaida, the town of Andrew and Peter.', ref: 'John 1:43–44' },
    ],
    facts: { Period: 'c. 1 BC – AD 54', Born: 'Bethsaida', Tribe: 'Unknown', Books: 'Gospels, Acts' }
  },
  'Matthias': {
    bio: `Matthias is notable as the apostle chosen by lot to replace Judas Iscariot after Jesus' ascension. When the eleven apostles gathered in Jerusalem to wait for the Holy Spirit, Peter proposed that the group select someone to fulfill Judas' apostolic office. Two candidates were put forward — Justus and Matthias — and after prayer, the group "cast lots" and Matthias was selected. He is mentioned only once more in Scripture, as the recipient of God's guidance through this mysterious selection process. Though little is known of his later life, tradition suggests he served as a missionary and ultimately died a martyr. His selection demonstrates the early church's reliance on prayer and divinely-guided decision-making, and shows that even those whose names are recorded only minimally in Scripture played vital roles in God's kingdom.`,
    verses: [
      { text: 'So they proposed two men: Joseph called Barsabbas (also known as Justus) and Matthias.', ref: 'Acts 1:23' },
    ],
    facts: { Period: 'c. AD 30–80', Born: 'Judea', Tribe: 'Unknown', Books: 'Acts' }
  },
  'Stephen': {
    bio: `Stephen was "a man full of God's grace and power, who performed great wonders and signs among the people." He was one of seven men chosen to distribute aid to widows in the early Jerusalem church, yet his role quickly expanded to performing miracles and debating in synagogues. When brought before the Sanhedrin on false charges of blasphemy against Moses and God, Stephen delivered a powerful defense recounting Israel's history and calling out the council's resistance to the Holy Spirit. His face "shone like the face of an angel" as he testified. Rather than acquitting him, the council dragged him outside the city and stoned him. A young man named Saul (who would become Paul) guarded the cloaks of those performing the execution. Stephen became Christianity's first martyr, his death paradoxically sowing seeds that would result in Saul's eventual conversion and becoming Christianity's greatest missionary.`,
    verses: [
      { text: 'Lord, do not hold this sin against them.', ref: 'Acts 7:60' },
    ],
    facts: { Period: 'c. AD 30–35', Born: 'Jerusalem region', Tribe: 'Unknown', Books: 'Acts' }
  },
  'Titus': {
    bio: `Titus was a convert to Christianity and a trusted companion of Paul, though he was Gentile (non-Jewish) — making him significant in the early church's expansion beyond Jewish boundaries. Paul refers to him as "my true son in the faith" and relied on him for various important missions. He went to Corinth to deliver Paul's severe letter and to collect offerings for the Jerusalem church. When Jewish Christians agitated for circumcising Gentile converts, Titus remained uncircumcised, becoming a test case for the principle that Gentile believers need not follow Jewish laws. Paul's pastoral letter to Titus (the epistle of Titus) entrusts him with oversight of churches in Crete and contains crucial instructions for church leadership and sound doctrine. Though less famous than Timothy, Titus was essential to Paul's ministry and to establishing Christian practice among Gentile churches.`,
    verses: [
      { text: 'To Titus, my true son in our common faith.', ref: 'Titus 1:4' },
    ],
    facts: { Period: 'c. AD 40–95', Born: 'Antioch', Tribe: 'Gentile', Books: 'Titus, 2 Corinthians, Galatians' }
  },
  'Aquila': {
    bio: `Aquila was a Jewish tentmaker from Pontus who, along with his wife Priscilla, became integral to Paul's missionary work. When Claudius expelled Jews from Rome around AD 49, Aquila and Priscilla relocated to Corinth, where they met Paul. Sharing the same trade, Paul lodged with them and worked alongside them making tents while preaching on the Sabbaths. Their relationship was so close that Paul mentions them by name in multiple epistles — unusual for those of lower social status. Later, they moved to Ephesus where they instructed Apollos in the way of God more accurately. Aquila exemplifies faithful service in humble occupations — tent-making provided both livelihood and opportunity for witnessing. His marriage to Priscilla was clearly a partnership in ministry, modeling marital teamwork in advancing God's kingdom.`,
    verses: [
      { text: 'Aquila and Priscilla greet you warmly in the Lord, and so does the church that meets at their house.', ref: '1 Corinthians 16:19' },
    ],
    facts: { Period: 'c. AD 20–90', Born: 'Pontus (Asia Minor)', Tribe: 'Unknown', Books: 'Acts, Romans, 1 & 2 Timothy, Titus' }
  },
  'Cornelius': {
    bio: `Cornelius was a Roman centurion stationed in Caesarea, described as "a devout and God-fearing man who, with all his family, was devout and God-fearing; he gave generously to those in need and prayed to God regularly." Though not yet a Christian believer, his piety and prayers had been noted by God. In a vision, an angel directed him to send for Peter. Simultaneously, Peter received a vision overturning Jewish dietary and purity laws, preparing him to visit a Gentile. When Peter arrived at Cornelius' house, he boldly preached Christ's death and resurrection. The Holy Spirit fell upon all listening, and they spoke in tongues and prophesied — convinced even the Jewish believers present that God had granted Gentiles repentance unto life. Cornelius' conversion marks a pivotal moment: the gospel's expansion from Jewish believers to full inclusion of Gentiles without requiring Jewish conversion first.`,
    verses: [
      { text: 'Peter was thinking about the vision when the Spirit said to him, "Simon, three men are looking for you."', ref: 'Acts 10:19' },
    ],
    facts: { Period: 'c. AD 30–50', Born: 'Roman Empire', Tribe: 'Roman', Books: 'Acts' }
  },
  'Ananias': {
    bio: `Ananias was a disciple in Damascus who becomes famous for his act of radical obedience during a dangerous time. After Saul's dramatic encounter with the risen Christ on the Damascus road left him temporarily blind and disoriented, Jesus appeared to Ananias in a vision, commanding him to go find Saul and restore his sight. Ananias objected, knowing Saul's reputation as a persecutor of Christians. But Jesus assured Ananias that Saul was "a chosen instrument of mine." Ananias overcame his fear, went to Saul, placed his hands on him, and Saul regained his sight while scales fell from his eyes. His act of obedience helped transform the church's greatest persecutor into its greatest missionary. Ananias' story teaches that obedience to God's surprising commands, even when fearful, often leads to extraordinary outcomes that we cannot foresee.`,
    verses: [
      { text: 'The Lord called to him in a vision, "Ananias!" "Yes, Lord," he answered.', ref: 'Acts 9:10' },
    ],
    facts: { Period: 'c. AD 30–50', Born: 'Damascus', Tribe: 'Unknown', Books: 'Acts' }
  },
  'Nicodemus': {
    bio: `Nicodemus was a Pharisee and a member of the Sanhedrin — the Jewish ruling council — who became increasingly convinced of Jesus' divine origin through his miracles. Despite his high position and the risk to his reputation, Nicodemus came to Jesus under cover of darkness to engage in theological discussion, telling Jesus, "Rabbi, we know that you are a teacher who has come from God; for no one can perform these signs that you do apart from the presence of God." Jesus' response redirected Nicodemus' understanding entirely: mere intellectual assent and good works were insufficient; spiritual rebirth was essential. Later, Nicodemus defended Jesus in the Sanhedrin, and after the crucifixion, he and Joseph of Arimathea boldly took Jesus' body down from the cross and buried it in Joseph's tomb. His journey from secretive, questioning believer to public defender and honor-giver to Jesus' body demonstrates the transformative power of Jesus' presence and teaching.`,
    verses: [
      { text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', ref: 'John 3:16' },
    ],
    facts: { Period: 'c. 5 BC – AD 90', Born: 'Jerusalem', Tribe: 'Judah', Books: 'John' }
  },
  'Lazarus': {
    bio: `Lazarus was a resident of Bethany and the brother of Mary and Martha, loved dearly by Jesus. When he became gravely ill, his sisters sent word to Jesus, expecting him to come quickly and heal their brother. Instead, Jesus remained where he was for two more days, and Lazarus died. By the time Jesus arrived, Lazarus had been in the tomb four days. Yet Jesus raised him from the dead with a powerful command: "Lazarus, come out!" His resurrection — the most dramatic of all Jesus' miracles — demonstrated Jesus' power over death itself and his identity as the Resurrection and the Life. The raising of Lazarus ultimately precipitated Jesus' arrest and crucifixion, as the Sanhedrin feared the uproar this miraculous sign was causing. Lazarus' story exemplifies how Jesus' redemptive work often involves allowing suffering and loss before demonstrating his ultimate victory over death.`,
    verses: [
      { text: 'Jesus wept.', ref: 'John 11:35' },
    ],
    facts: { Period: 'c. 1 AD', Born: 'Bethany', Tribe: 'Judah', Books: 'John' }
  },
  'Agabus': {
    bio: `Agabus was a prophet in the early Jerusalem church known for prophetic utterances that came true. On one occasion, he came down from Judea to Antioch and prophesied through the Holy Spirit that a severe famine would spread over the entire Roman world — a prophecy fulfilled during the reign of Claudius. His warning prompted the disciples in Antioch to send aid to the believers in Judea. Later, when Paul was journeying to Jerusalem, Agabus met him at Caesarea and, taking Paul's belt, bound his own hands and feet as a symbolic prophecy, saying, "The Holy Spirit says, 'In this way the Jewish leaders in Jerusalem will bind the owner of this belt and will hand him over to the Gentiles.'" Though the symbol was disturbing, Paul understood and accepted it as God's word about his coming suffering. Agabus exemplifies faith-filled prophetic ministry that spoke God's truth even when the message was unwelcome.`,
    verses: [
      { text: 'Through the Spirit he predicted that a severe famine would spread over the entire Roman world.', ref: 'Acts 11:28' },
    ],
    facts: { Period: 'c. AD 40–60', Born: 'Judea', Tribe: 'Unknown', Books: 'Acts' }
  },
  'Martha': {
    bio: `Martha was the sister of Mary and Lazarus in Bethany, remembered as the practical, service-oriented sibling. When Jesus visited their home, Martha was "distracted by all the preparations that had to be made," while her sister Mary sat at Jesus' feet listening to his teaching. Martha approached Jesus somewhat irritably, requesting that he tell Mary to help her. Jesus gently redirected Martha's focus: "Mary has chosen what is better," he said, affirming that listening to Jesus superseded necessary tasks. Yet Martha's story doesn't end in rebuke. Her faith deepened — when Lazarus died, she declared to Jesus, "Yes, Lord, I believe that you are the Messiah," demonstrating profound faith. The Gospel shows Martha's evolution from distracted busyness to genuine devotion, teaching that service must be balanced with attentiveness to God's presence.`,
    verses: [
      { text: 'Lord, if you had been here, my brother would not have died.', ref: 'John 11:21' },
    ],
    facts: { Period: 'c. 1 AD', Born: 'Bethany', Tribe: 'Judah', Books: 'Luke, John' }
  },
  'Salome': {
    bio: `Salome was a devoted follower of Jesus, mentioned in the Gospel accounts as one of the women who watched his crucifixion from a distance. She witnessed the crucifixion, observed where his body was laid after death, and on the morning of his resurrection, went to the tomb with other women carrying spices to anoint Jesus' body. When they found the stone rolled away and learned of Jesus' resurrection, Salome was among those who received the news with a mixture of fear and joy. Some interpreters identify her as the mother of James and John (the disciples), suggesting she was also present when she requested special positions for her sons in Jesus' kingdom — a request that prompted Jesus' teaching about true greatness coming through service and humility. Salome's faithful presence even in Jesus' darkest hour and her witnessing of the resurrection made her part of God's eternally redemptive story.`,
    verses: [
      { text: 'Some women were watching from a distance. Among them were Mary Magdalene, Mary the mother of James the younger and of Joseph, and Salome.', ref: 'Mark 15:40' },
    ],
    facts: { Period: 'c. 1 AD', Born: 'Galilee/Judea', Tribe: 'Unknown', Books: 'Matthew, Mark, Luke' }
  },
  'Priscilla': {
    bio: `Priscilla, also called Prisca, was the wife of Aquila and an influential teacher and missionary in the early church. Her name appears first when mentioned with her husband in some texts, suggesting she may have held a more prominent role than typical women of her time. She was a tentmaker by trade and worked alongside Paul in Corinth, sharing both work and ministry. When the eloquent Alexandrian preacher Apollos came to Ephesus teaching about Jesus with incomplete understanding, Priscilla (often with Aquila) took him aside and "explained to him the way of God more adequately." Her teaching corrected and matured an influential preacher's theology, demonstrating her biblical knowledge and spiritual maturity. Paul commended her and Aquila as "fellow workers" and noted that churches met in their home, suggesting their prominence in early Christian community. Priscilla exemplifies the significant yet often-overlooked spiritual contributions of women in establishing early Christianity.`,
    verses: [
      { text: 'Priscilla and Aquila greet you warmly in the Lord.', ref: '1 Corinthians 16:19' },
    ],
    facts: { Period: 'c. AD 20–95', Born: 'Rome', Tribe: 'Unknown', Books: 'Acts, Romans, 1 & 2 Timothy, Titus' }
  },
  'Miriam': {
    bio: `Miriam was the older sister of Moses and Aaron who played a vital role in Israel's early history. As a young girl, she watched baby Moses floating in a basket on the Nile and orchestrated his adoption by Pharaoh's daughter. During the Exodus, she led the women in celebration with tambourine and song after crossing the Red Sea: "Sing to the LORD, for he is highly exalted. Both horse and driver he has hurled into the sea." Later, Miriam and Aaron questioned Moses' authority when he married a Cushite woman, but God rebuked them, affirming Moses' unique position. Miriam was struck with leprosy for this presumption but was healed after seven days of isolation. She remained important in Israel's collective memory as one of the leaders of the Exodus.`,
    verses: [
      { text: 'Miriam, the prophetess, Aaron\'s sister, took a tambourine in her hand, and all the women followed her with tambourines and dancing.', ref: 'Exodus 15:20' },
    ],
    facts: { Period: 'c. 1399–1272 BC', Born: 'Egypt', Tribe: 'Levi', Books: 'Exodus, Leviticus, Numbers' }
  },
  'Bathsheba': {
    bio: `Bathsheba, daughter of Eliam and wife of Uriah the Hittite, is primarily known in Scripture for her role in David's greatest sin. While Uriah was away fighting David's battles, King David saw Bathsheba bathing and took her to bed. When she became pregnant, David attempted to cover up the affair by recalling Uriah from battle, but Uriah's integrity and loyalty to the army prevented consummation. Finally, David arranged for Uriah to be placed on the frontline where he was killed. Bathsheba mourned her husband but became David's wife, bearing him a son who died in infancy as judgment for the sin. Yet David repented, and their next son was Solomon, through whom God's covenant continued. Later in life, Bathsheba became influential in the royal court, securing her son Solomon's succession to the throne.`,
    verses: [
      { text: 'David saw a woman bathing. The woman was very beautiful, and David sent someone to find out about her.', ref: '2 Samuel 11:2–3' },
    ],
    facts: { Period: 'c. 1080–1010 BC', Born: 'Israel', Tribe: 'Judah', Books: '1 & 2 Samuel' }
  },
  'Jonathan': {
    bio: `Jonathan, son of King Saul, was a valiant warrior and the closest friend of David. Though Jonathan was heir to Israel's throne, he accepted David as God's chosen king and remained fiercely loyal to David even as his father Saul pursued David with murderous intent. Jonathan warned David of Saul's plans, risking his father's anger, and protected David's life. Their covenant friendship was so deep that 2 Samuel records, "The soul of Jonathan was knit with the soul of David, and Jonathan loved him as his own soul." Jonathan died alongside his father Saul in battle against the Philistines. When David learned of Jonathan's death, he mourned deeply, "I am distressed for you, my brother Jonathan; you were very dear to me."`,
    verses: [
      { text: 'The soul of Jonathan was knit with the soul of David, and Jonathan loved him as his own soul.', ref: '1 Samuel 18:1' },
    ],
    facts: { Period: 'c. 1100–1010 BC', Born: 'Gibeah', Tribe: 'Benjamin', Books: '1 & 2 Samuel' }
  },
};
