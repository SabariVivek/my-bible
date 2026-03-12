// Verse headers/section titles that appear before specific verses
// Format: "Book Chapter:Verse": "Header Title"
const verseHeaders = {
    // ===========================
    // OLD TESTAMENT
    // ===========================

    // Updated...
    "Genesis 1:1": ["God Creates the Heavens and the Earth", "In the beginning God created the heavens and the earth."],
    "Genesis 1:2": ["The Earth Without Form", "The earth was formless and empty, darkness covered the deep, and the Spirit of God moved over the waters."],
    "Genesis 1:3": ["Light Created", "God said, 'Let there be light,' and light appeared."],
    "Genesis 1:6": ["The Sky Formed", "God created the expanse to separate the waters above from the waters below."],
    "Genesis 1:9": ["Land and Seas Separated", "God gathered the waters so dry land appeared and called it Earth."],
    "Genesis 1:11": ["Vegetation Created", "God created plants, seed-bearing herbs, and fruit trees on the earth."],
    "Genesis 1:14": ["Sun, Moon, and Stars", "God made lights in the sky to separate day from night and mark seasons, days, and years."],
    "Genesis 1:20": ["Creatures of Water and Sky", "God created living creatures in the sea and birds to fly in the sky."],
    "Genesis 1:24": ["Animals of the Earth", "God created livestock, wild animals, and creatures that move along the ground."],
    "Genesis 1:26": ["Creation of Humanity", "God created mankind in His own image and gave them authority over the earth."],
    "Genesis 1:29": ["Food Given to Humans and Animals", "God provided plants and fruits as food for humans and animals."],
    "Genesis 1:31": ["Creation Declared Very Good", "God saw everything He had made, and it was very good."],

    "Genesis 2:1": ["Creation Completed", "The heavens and the earth and everything in them were finished."],
    "Genesis 2:2": ["God Rests on the Seventh Day", "God finished His work and rested on the seventh day, blessing and making it holy."],
    "Genesis 2:4": ["The Beginning of Human Life", "This section describes how the Lord God made the earth and the heavens."],
    "Genesis 2:7": ["Creation of Man", "The Lord God formed man from the dust of the ground and breathed life into him."],
    "Genesis 2:8": ["The Garden of Eden", "God planted a garden in Eden and placed the man there."],
    "Genesis 2:9": ["The Trees of the Garden", "God caused every beautiful and useful tree to grow, including the tree of life and the tree of the knowledge of good and evil."],
    "Genesis 2:10": ["The River of Eden", "A river flowed out of Eden to water the garden and divided into four rivers."],
    "Genesis 2:15": ["Man's Responsibility in the Garden", "The Lord placed the man in the garden to work it and take care of it."],
    "Genesis 2:16": ["Command About the Tree", "God allowed the man to eat from every tree except the tree of the knowledge of good and evil."],
    "Genesis 2:18": ["Need for a Companion", "God declared that it was not good for man to be alone and decided to make a suitable helper."],
    "Genesis 2:19": ["Animals Brought to Adam", "God brought animals and birds to the man to see what he would name them."],
    "Genesis 2:21": ["Creation of Woman", "God formed the woman from the man's rib and brought her to him."],
    "Genesis 2:24": ["Marriage Established", "A man leaves his parents and is united with his wife, and they become one flesh."],
    "Genesis 2:25": ["Innocence Before the Fall", "The man and his wife were both naked and felt no shame."],

    "Genesis 3:1": ["The Serpent Tempts Eve", "The serpent questions God's command and tempts Eve to eat from the forbidden tree."],
    "Genesis 3:4": ["The Deception of the Serpent", "The serpent tells Eve that she will not die but will become like God knowing good and evil."],
    "Genesis 3:6": ["The First Sin", "Eve eats the fruit and gives it to Adam, and he also eats."],
    "Genesis 3:7": ["Realization of Nakedness", "Their eyes are opened and they realize they are naked, so they sew fig leaves together."],
    "Genesis 3:8": ["Hiding from God", "Adam and Eve hide from the Lord God when they hear Him walking in the garden."],
    "Genesis 3:9": ["God Questions Adam", "God calls to Adam and asks where he is."],
    "Genesis 3:11": ["The Blame for Sin", "Adam blames Eve, and Eve blames the serpent for their disobedience."],
    "Genesis 3:14": ["Curse on the Serpent", "God curses the serpent and declares that it will crawl on its belly."],
    "Genesis 3:15": ["Promise of the Redeemer", "God declares that the offspring of the woman will crush the serpent's head."],
    "Genesis 3:16": ["Judgment on the Woman", "Pain in childbirth and tension in relationships are declared as consequences."],
    "Genesis 3:17": ["Judgment on the Man", "The ground is cursed and man must work painfully for food."],
    "Genesis 3:20": ["Name of Eve", "Adam names his wife Eve because she will become the mother of all living."],
    "Genesis 3:21": ["God Clothes Adam and Eve", "The Lord makes garments of skin to clothe them."],
    "Genesis 3:23": ["Expulsion from Eden", "God sends Adam and Eve out of the Garden of Eden."],
    "Genesis 3:24": ["Guarding the Tree of Life", "Cherubim and a flaming sword guard the way to the tree of life."],

    "Genesis 4:1": ["Birth of Cain and Abel", "Adam and Eve have two sons, Cain and Abel."],
    "Genesis 4:3": ["Offerings to the Lord", "Cain brings fruit from the ground and Abel brings the firstborn of his flock as offerings to God."],
    "Genesis 4:5": ["God Rejects Cain's Offering", "The Lord accepts Abel's offering but not Cain's, making Cain very angry."],
    "Genesis 4:6": ["God Warns Cain", "God tells Cain that sin is crouching at the door and he must rule over it."],
    "Genesis 4:8": ["Cain Murders Abel", "Cain attacks and kills his brother Abel in the field."],
    "Genesis 4:9": ["God Confronts Cain", "God asks Cain about Abel, and Cain responds, 'Am I my brother's keeper?'"],
    "Genesis 4:11": ["Cain Cursed and Sent Away", "God curses Cain and sends him away from the land."],
    "Genesis 4:15": ["God Protects Cain", "The Lord places a mark on Cain to prevent others from killing him."],
    "Genesis 4:17": ["Descendants of Cain", "Cain's family grows and cities begin to be built."],
    "Genesis 4:19": ["Lamech and His Family", "Lamech takes two wives and boasts about violence."],
    "Genesis 4:25": ["Birth of Seth", "Adam and Eve have another son named Seth."],
    "Genesis 4:26": ["People Begin to Call on the Lord", "During Seth's time people begin to call on the name of the Lord."],

    "Genesis 5:1": ["The Family Line of Adam", "This chapter records the generations of Adam beginning with the creation of humanity in God's image."],
    "Genesis 5:3": ["Birth of Seth", "Adam fathers a son named Seth who continues the family line."],
    "Genesis 5:6": ["Descendants Continue", "The genealogy continues through Enosh, Kenan, Mahalalel, and Jared."],
    "Genesis 5:18": ["Birth of Enoch", "Jared fathers Enoch who later walks closely with God."],
    "Genesis 5:21": ["Enoch Walks with God", "Enoch lives in fellowship with God and does not experience death because God takes him."],
    "Genesis 5:25": ["Birth of Methuselah", "Methuselah is born and becomes the longest-living person recorded in the Bible."],
    "Genesis 5:28": ["Birth of Noah", "Lamech fathers Noah and expresses hope that he will bring relief from the cursed ground."],
    "Genesis 5:32": ["Sons of Noah", "Noah fathers three sons: Shem, Ham, and Japheth."],

    "Genesis 6:1": ["Increase of Humanity on Earth", "As people multiply on the earth, the sons of God notice the daughters of men and marry them."],
    "Genesis 6:3": ["Limit of Human Lifespan", "God declares that human lifespan will be limited because of their corruption."],
    "Genesis 6:5": ["Wickedness of Humanity", "The Lord sees that human wickedness has greatly increased on the earth."],
    "Genesis 6:6": ["God's Grief Over Sin", "God is deeply grieved that He made humanity because of their evil ways."],
    "Genesis 6:7": ["Decision to Judge the Earth", "God declares that He will wipe out humans and animals from the earth."],
    "Genesis 6:8": ["Noah Finds Favor", "Noah finds grace in the eyes of the Lord."],
    "Genesis 6:9": ["Noah's Righteous Character", "Noah is described as a righteous man who walks faithfully with God."],
    "Genesis 6:11": ["Corruption of the Earth", "The earth becomes filled with violence and corruption before God."],
    "Genesis 6:13": ["God Announces the Flood", "God tells Noah that He will destroy the earth because of its violence."],
    "Genesis 6:14": ["Instructions to Build the Ark", "God commands Noah to build an ark to preserve life."],
    "Genesis 6:19": ["Animals Brought into the Ark", "Noah is told to bring pairs of every kind of animal into the ark."],
    "Genesis 6:22": ["Noah Obeys God", "Noah does everything exactly as God commands."],

    "Genesis 7:1": ["Noah Enters the Ark", "The Lord tells Noah to enter the ark with his family because he is found righteous."],
    "Genesis 7:2": ["Animals Brought into the Ark", "God instructs Noah to take pairs of every animal, including extra pairs of clean animals."],
    "Genesis 7:4": ["The Flood Announced", "God declares that rain will fall for forty days and nights to destroy life on the earth."],
    "Genesis 7:5": ["Noah Obeys God", "Noah does everything that the Lord commands him."],
    "Genesis 7:7": ["Family Enters the Ark", "Noah, his wife, his sons, and their wives enter the ark before the flood begins."],
    "Genesis 7:11": ["The Flood Begins", "The fountains of the great deep burst forth and the windows of heaven are opened."],
    "Genesis 7:12": ["Forty Days of Rain", "Rain falls on the earth for forty days and forty nights."],
    "Genesis 7:17": ["Waters Cover the Earth", "The floodwaters rise and lift the ark above the earth."],
    "Genesis 7:19": ["Mountains Covered", "The waters rise so high that even the mountains are covered."],
    "Genesis 7:21": ["Destruction of All Living Creatures", "Every living creature on land perishes in the flood."],
    "Genesis 7:23": ["Only Noah Survives", "All life outside the ark is destroyed; only Noah and those with him remain."],
    "Genesis 7:24": ["Waters Prevail", "The floodwaters cover the earth for one hundred fifty days."],

    "Genesis 8:1": ["God Remembers Noah", "God remembers Noah and all the animals in the ark and causes the waters of the flood to begin receding."],
    "Genesis 8:3": ["Waters Recede", "The floodwaters gradually decrease from the earth."],
    "Genesis 8:4": ["Ark Rests on Ararat", "The ark comes to rest on the mountains of Ararat."],
    "Genesis 8:6": ["Noah Sends Out a Raven", "After forty days Noah opens the window and sends out a raven to check the land."],
    "Genesis 8:8": ["Noah Sends Out a Dove", "Noah sends a dove to see if the waters have receded from the ground."],
    "Genesis 8:10": ["Dove Returns with an Olive Leaf", "The dove returns with a freshly plucked olive leaf, showing the waters have receded."],
    "Genesis 8:13": ["The Earth Dries", "The waters are dried up and Noah removes the covering of the ark."],
    "Genesis 8:15": ["God Commands Them to Leave the Ark", "God tells Noah and his family to come out of the ark with all the animals."],
    "Genesis 8:20": ["Noah Builds an Altar", "Noah builds an altar to the Lord and offers burnt offerings."],
    "Genesis 8:21": ["God Promises Stability of the Earth", "The Lord promises that seasons and the cycle of the earth will continue."],

    "Genesis 9:1": ["God Blesses Noah and His Sons", "God blesses Noah and his sons and tells them to be fruitful and multiply and fill the earth."],
    "Genesis 9:2": ["Human Authority Over Animals", "Animals will fear humans and are given into their control."],
    "Genesis 9:3": ["Food Given to Humanity", "God allows humans to eat animals just as they eat plants."],
    "Genesis 9:4": ["Do Not Eat Blood", "People are forbidden to eat meat that still has blood in it."],
    "Genesis 9:5": ["Value of Human Life", "God declares that anyone who sheds human blood will be held accountable."],
    "Genesis 9:8": ["God's Covenant with Noah", "God establishes a covenant with Noah, his descendants, and every living creature."],
    "Genesis 9:12": ["The Rainbow as a Sign", "The rainbow is given as a sign of God's covenant never to destroy the earth again by flood."],
    "Genesis 9:18": ["The Sons of Noah", "Noah's sons—Shem, Ham, and Japheth—become the ancestors of the nations."],
    "Genesis 9:20": ["Noah Plants a Vineyard", "Noah becomes a farmer and plants a vineyard."],
    "Genesis 9:21": ["Noah's Drunkenness", "Noah drinks wine and becomes drunk in his tent."],
    "Genesis 9:22": ["Ham's Disrespect", "Ham sees his father's nakedness and tells his brothers."],
    "Genesis 9:23": ["Shem and Japheth Show Respect", "They cover their father respectfully without looking at him."],
    "Genesis 9:24": ["Noah's Curse and Blessings", "Noah pronounces a curse on Canaan and blessings on Shem and Japheth."],
    "Genesis 9:28": ["Noah's Remaining Years", "Noah lives many years after the flood and then dies."],

    "Genesis 10:1": ["Nations Descended from Noah", "The descendants of Noah's sons—Shem, Ham, and Japheth—begin to spread across the earth after the flood."],
    "Genesis 10:2": ["Descendants of Japheth", "Japheth's sons become the ancestors of many coastal and northern nations."],
    "Genesis 10:6": ["Descendants of Ham", "Ham's sons include Cush, Egypt, Put, and Canaan, whose families spread across different lands."],
    "Genesis 10:8": ["Nimrod the Mighty Ruler", "Nimrod becomes a powerful hunter and ruler, establishing early kingdoms."],
    "Genesis 10:10": ["Beginning of Nimrod's Kingdom", "Nimrod's kingdom begins with cities like Babel, Erech, and Akkad in the land of Shinar."],
    "Genesis 10:15": ["Descendants of Canaan", "Canaan's descendants become the peoples living in the land later promised to Israel."],
    "Genesis 10:21": ["Descendants of Shem", "Shem's family line continues, becoming the ancestors of many Semitic peoples."],
    "Genesis 10:25": ["Division of the Earth", "In the days of Peleg the earth is divided among different peoples."],
    "Genesis 10:31": ["Nations Formed by Language and Land", "The descendants of Shem spread into various nations according to their languages and lands."],
    "Genesis 10:32": ["Origin of the Nations", "These families of Noah spread out over the earth and formed the nations after the flood."],

    "Genesis 11:1": ["One Language on the Earth", "All the people of the earth speak the same language and use the same words."],
    "Genesis 11:2": ["Settlement in Shinar", "People migrate eastward and settle in the plain of Shinar."],
    "Genesis 11:3": ["Building with Bricks", "They begin making bricks and mortar to build a great city."],
    "Genesis 11:4": ["The Tower of Babel", "The people plan to build a city and a tower reaching the heavens to make a name for themselves."],
    "Genesis 11:5": ["God Observes the Tower", "The Lord comes down to see the city and the tower the people are building."],
    "Genesis 11:7": ["Confusion of Languages", "God confuses their language so they can no longer understand each other."],
    "Genesis 11:8": ["People Scattered Across the Earth", "The Lord scatters the people over the whole earth and the building stops."],
    "Genesis 11:9": ["Name of Babel", "The place is called Babel because there the Lord confused the language of the whole earth."],
    "Genesis 11:10": ["Descendants of Shem", "The genealogy of Shem is recorded, leading to the next generations."],
    "Genesis 11:24": ["Birth of Terah's Family", "The line continues through Nahor and Terah."],
    "Genesis 11:27": ["Family of Terah", "Terah becomes the father of Abram, Nahor, and Haran."],
    "Genesis 11:31": ["Journey Toward Canaan", "Terah takes Abram and the family from Ur toward Canaan but settles in Haran."],
    "Genesis 11:32": ["Death of Terah", "Terah lives 205 years and dies in Haran."],

    "Genesis 12:1": ["God Calls Abram", "The Lord tells Abram to leave his country and family and go to the land that God will show him."],
    "Genesis 12:2": ["Promise of a Great Nation", "God promises to make Abram a great nation and bless him."],
    "Genesis 12:3": ["Blessing for All Nations", "Through Abram all families of the earth will be blessed."],
    "Genesis 12:4": ["Abram Obeys the Call", "Abram leaves Haran with Sarai and Lot to go to the land of Canaan."],
    "Genesis 12:6": ["Arrival in Canaan", "Abram travels through the land to Shechem where the Lord appears to him."],
    "Genesis 12:7": ["Abram Builds an Altar", "Abram builds an altar to the Lord who promises the land to his descendants."],
    "Genesis 12:8": ["Abram Worships the Lord", "Abram moves toward Bethel and builds another altar and calls on the Lord."],
    "Genesis 12:10": ["Famine in the Land", "A famine forces Abram to go down to Egypt."],
    "Genesis 12:11": ["Abram Fears for His Life", "Abram asks Sarai to say she is his sister because he fears the Egyptians may kill him."],
    "Genesis 12:14": ["Sarai Taken into Pharaoh's House", "Sarai is taken into Pharaoh's household because of her beauty."],
    "Genesis 12:17": ["God Afflicts Pharaoh", "The Lord sends plagues on Pharaoh and his household because of Sarai."],
    "Genesis 12:19": ["Pharaoh Rebukes Abram", "Pharaoh confronts Abram and sends him away with Sarai and their possessions."],

    "Genesis 13:1": ["Abram Returns from Egypt", "Abram travels back from Egypt with Sarai and Lot, bringing all their possessions."],
    "Genesis 13:3": ["Return to Bethel", "Abram returns to the place between Bethel and Ai where he had previously built an altar."],
    "Genesis 13:5": ["Conflict Between Herdsmen", "Abram's and Lot's herdsmen begin to quarrel because the land cannot support all their livestock."],
    "Genesis 13:8": ["Abram Proposes Separation", "Abram suggests that he and Lot separate to avoid conflict between them."],
    "Genesis 13:10": ["Lot Chooses the Jordan Valley", "Lot chooses the fertile plain of the Jordan and moves toward Sodom."],
    "Genesis 13:12": ["Abram Settles in Canaan", "Abram remains in the land of Canaan while Lot lives among the cities of the plain."],
    "Genesis 13:14": ["God Reaffirms His Promise", "After Lot separates from Abram, the Lord promises Abram the land he can see."],
    "Genesis 13:16": ["Promise of Many Descendants", "God promises that Abram's descendants will be as numerous as the dust of the earth."],
    "Genesis 13:17": ["Walk Through the Land", "God tells Abram to walk through the land because He is giving it to him."],
    "Genesis 13:18": ["Abram Builds an Altar at Hebron", "Abram moves to Hebron and builds an altar to the Lord."],

    "Genesis 14:1": ["War of the Kings", "Several kings wage war against the kings of Sodom, Gomorrah, and nearby cities."],
    "Genesis 14:8": ["Battle in the Valley of Siddim", "The kings of Sodom and Gomorrah fight against the invading kings but are defeated."],
    "Genesis 14:11": ["Lot Taken Captive", "The enemy kings capture Lot and take him away with their possessions."],
    "Genesis 14:13": ["Abram Hears of Lot's Capture", "Abram learns that his nephew Lot has been taken prisoner."],
    "Genesis 14:14": ["Abram Rescues Lot", "Abram gathers trained men and pursues the enemy to rescue Lot."],
    "Genesis 14:15": ["Victory Over the Kings", "Abram defeats the kings at night and recovers the captives and goods."],
    "Genesis 14:17": ["Meeting the King of Sodom", "After the victory, the king of Sodom comes out to meet Abram."],
    "Genesis 14:18": ["Melchizedek Blesses Abram", "Melchizedek, king of Salem and priest of God, blesses Abram and brings bread and wine."],
    "Genesis 14:20": ["Abram Gives a Tenth", "Abram gives Melchizedek a tenth of everything he recovered."],
    "Genesis 14:21": ["Abram Refuses the Spoils", "Abram refuses the wealth offered by the king of Sodom so no one can claim credit for his success."],

    "Genesis 15:1": ["God's Promise to Abram", "The Lord appears to Abram in a vision and promises to be his shield and reward."],
    "Genesis 15:2": ["Abram Questions the Promise", "Abram wonders how he will have descendants since he still has no child."],
    "Genesis 15:4": ["Promise of an Heir", "God tells Abram that his own son will be his heir."],
    "Genesis 15:5": ["Descendants Like the Stars", "God shows Abram the stars and promises that his descendants will be just as numerous."],
    "Genesis 15:6": ["Abram Believes God", "Abram believes the Lord, and it is counted to him as righteousness."],
    "Genesis 15:7": ["Promise of the Land", "God reminds Abram that He brought him from Ur to give him the land of Canaan."],
    "Genesis 15:9": ["The Covenant Sacrifice", "God instructs Abram to prepare animals for a covenant ceremony."],
    "Genesis 15:12": ["Prophecy of Future Suffering", "God reveals that Abram's descendants will be strangers and oppressed in a foreign land."],
    "Genesis 15:17": ["God Makes a Covenant", "A smoking fire pot and flaming torch pass between the pieces, confirming God's covenant."],
    "Genesis 15:18": ["Boundaries of the Promised Land", "God promises the land from the river of Egypt to the Euphrates to Abram's descendants."],

    "Genesis 16:1": ["Sarai Gives Hagar to Abram", "Because Sarai has no children, she gives her servant Hagar to Abram so that he may have a child."],
    "Genesis 16:3": ["Hagar Becomes Abram's Wife", "Hagar is given to Abram, and she conceives."],
    "Genesis 16:4": ["Conflict Between Sarai and Hagar", "After becoming pregnant, Hagar looks with contempt on Sarai, causing conflict."],
    "Genesis 16:6": ["Hagar Flees", "Sarai treats Hagar harshly, and Hagar runs away into the wilderness."],
    "Genesis 16:7": ["The Angel Finds Hagar", "The angel of the Lord finds Hagar by a spring in the desert."],
    "Genesis 16:9": ["Return and Submit", "The angel tells Hagar to return to Sarai and submit to her."],
    "Genesis 16:10": ["Promise of Many Descendants", "The angel promises that Hagar's descendants will be too numerous to count."],
    "Genesis 16:11": ["Birth of Ishmael Foretold", "Hagar is told she will give birth to a son named Ishmael."],
    "Genesis 16:13": ["Hagar Names the Lord", "Hagar calls the Lord 'the God who sees me'."],
    "Genesis 16:15": ["Birth of Ishmael", "Hagar gives birth to Abram's son, and Abram names him Ishmael."],
    "Genesis 16:16": ["Abram's Age", "Abram is eighty-six years old when Ishmael is born."],

    "Genesis 17:1": ["God Appears to Abram", "When Abram is ninety-nine years old, the Lord appears and calls him to walk blamelessly before Him."],
    "Genesis 17:2": ["Covenant Confirmed", "God promises to establish His covenant and greatly multiply Abram's descendants."],
    "Genesis 17:4": ["Father of Many Nations", "God declares that Abram will become the father of many nations."],
    "Genesis 17:5": ["Abram Renamed Abraham", "God changes Abram's name to Abraham to show he will be the father of many nations."],
    "Genesis 17:7": ["Everlasting Covenant", "God establishes an everlasting covenant with Abraham and his descendants."],
    "Genesis 17:9": ["Sign of Circumcision", "God commands circumcision as the sign of the covenant between Him and Abraham's family."],
    "Genesis 17:15": ["Sarai Renamed Sarah", "God changes Sarai's name to Sarah and promises that she will bear a son."],
    "Genesis 17:17": ["Abraham Laughs", "Abraham laughs in amazement, wondering how a son could be born to him and Sarah in their old age."],
    "Genesis 17:19": ["Promise of Isaac", "God declares that Sarah will give birth to a son named Isaac and the covenant will continue through him."],
    "Genesis 17:20": ["Blessing for Ishmael", "God promises to bless Ishmael and make him the father of a great nation."],
    "Genesis 17:23": ["Abraham Obeys", "Abraham circumcises Ishmael and every male in his household as God commanded."],
    "Genesis 17:24": ["Abraham's Age", "Abraham is ninety-nine years old when he is circumcised."],
    "Genesis 17:27": ["All Males Circumcised", "Every male in Abraham's household is circumcised on that same day."],

    "Genesis 18:1": ["Three Visitors Appear to Abraham", "The Lord appears to Abraham near the oaks of Mamre as three men approach him."],
    "Genesis 18:3": ["Abraham Welcomes the Guests", "Abraham respectfully invites the visitors to rest and receive food."],
    "Genesis 18:6": ["Preparation of a Meal", "Abraham quickly prepares bread, meat, and milk for the visitors."],
    "Genesis 18:9": ["Promise of a Son", "The visitors ask about Sarah and promise that she will have a son within a year."],
    "Genesis 18:12": ["Sarah Laughs", "Sarah laughs to herself because she and Abraham are very old."],
    "Genesis 18:14": ["Nothing Is Impossible for the Lord", "The Lord reminds them that nothing is too difficult for Him."],
    "Genesis 18:16": ["Journey Toward Sodom", "The visitors prepare to leave and head toward Sodom while Abraham walks with them."],
    "Genesis 18:20": ["Outcry Against Sodom", "The Lord reveals that the sin of Sodom and Gomorrah is very great."],
    "Genesis 18:23": ["Abraham Intercedes for Sodom", "Abraham asks whether God would spare the city if righteous people are found there."],
    "Genesis 18:24": ["Negotiation Begins", "Abraham asks if the city would be spared for fifty righteous people."],
    "Genesis 18:32": ["Ten Righteous People", "Abraham continues asking until the number reaches ten righteous people."],
    "Genesis 18:33": ["The Lord Departs", "After the conversation ends, the Lord departs and Abraham returns home."],

    "Genesis 19:1": ["Two Angels Arrive at Sodom", "Two angels come to Sodom in the evening and Lot welcomes them into his house."],
    "Genesis 19:4": ["Wickedness of Sodom", "The men of Sodom surround Lot's house and demand to harm the visitors."],
    "Genesis 19:10": ["Angels Protect Lot", "The angels pull Lot inside the house and strike the men outside with blindness."],
    "Genesis 19:12": ["Warning to Escape", "The angels warn Lot to gather his family and leave the city because God will destroy it."],
    "Genesis 19:15": ["Lot Urged to Leave Quickly", "The angels urge Lot and his family to escape before the city is destroyed."],
    "Genesis 19:17": ["Command Not to Look Back", "They are told to flee to the mountains and not look back."],
    "Genesis 19:24": ["Destruction of Sodom and Gomorrah", "The Lord rains down burning sulfur and destroys the cities of the plain."],
    "Genesis 19:26": ["Lot's Wife Looks Back", "Lot's wife looks back and becomes a pillar of salt."],
    "Genesis 19:29": ["God Rescues Lot", "God remembers Abraham and saves Lot from the destruction."],
    "Genesis 19:30": ["Lot Lives in the Mountains", "Lot and his daughters live in a cave in the mountains."],
    "Genesis 19:31": ["The Daughters' Plan", "Lot's daughters fear they will have no children and make a plan to preserve their family line."],
    "Genesis 19:33": ["Lot's Daughters Become Pregnant", "Each daughter becomes pregnant by their father."],
    "Genesis 19:37": ["Birth of Moab and Ammon", "The sons born become the ancestors of the Moabites and Ammonites."],

    "Genesis 20:1": ["Abraham in Gerar", "Abraham travels to the region of Gerar and lives there for a time."],
    "Genesis 20:2": ["Sarah Called Abraham's Sister", "Abraham says that Sarah is his sister, and King Abimelech takes her into his household."],
    "Genesis 20:3": ["God Warns Abimelech", "God appears to Abimelech in a dream and warns him that Sarah is a married woman."],
    "Genesis 20:4": ["Abimelech Pleads Innocence", "Abimelech explains that he acted in innocence because he did not know Sarah was Abraham's wife."],
    "Genesis 20:6": ["God Acknowledges Abimelech's Integrity", "God tells Abimelech that He prevented him from sinning by not allowing him to touch Sarah."],
    "Genesis 20:7": ["Return Sarah to Abraham", "God instructs Abimelech to return Sarah to Abraham because Abraham is a prophet who will pray for him."],
    "Genesis 20:8": ["Abimelech Confronts Abraham", "Abimelech calls Abraham and questions him about why he deceived him."],
    "Genesis 20:11": ["Abraham Explains His Fear", "Abraham says he feared that people might kill him to take Sarah."],
    "Genesis 20:14": ["Sarah Returned with Gifts", "Abimelech returns Sarah and gives Abraham sheep, cattle, servants, and silver."],
    "Genesis 20:17": ["Abraham Prays for Abimelech", "Abraham prays to God, and God heals Abimelech and his household."],
    "Genesis 20:18": ["God Restores Abimelech's Household", "The Lord opens the wombs of the women in Abimelech's household."],

    "Genesis 21:1": ["Birth of Isaac", "The Lord visits Sarah as He promised, and she gives birth to a son for Abraham in his old age."],
    "Genesis 21:3": ["Isaac Named and Circumcised", "Abraham names the child Isaac and circumcises him on the eighth day."],
    "Genesis 21:8": ["Isaac Weaned", "When Isaac is weaned, Abraham holds a great feast."],
    "Genesis 21:9": ["Conflict Between Sarah and Hagar", "Sarah sees Ishmael mocking Isaac and becomes troubled."],
    "Genesis 21:10": ["Hagar and Ishmael Sent Away", "Sarah asks Abraham to send Hagar and Ishmael away so Isaac will receive the inheritance."],
    "Genesis 21:12": ["God Encourages Abraham", "God tells Abraham to listen to Sarah because the promise will come through Isaac."],
    "Genesis 21:14": ["Hagar in the Wilderness", "Hagar and Ishmael wander in the wilderness of Beersheba after leaving Abraham."],
    "Genesis 21:17": ["God Hears Ishmael", "God hears the boy crying and assures Hagar that Ishmael will become a great nation."],
    "Genesis 21:19": ["Water Provided in the Desert", "God opens Hagar's eyes and she sees a well of water."],
    "Genesis 21:22": ["Abraham and Abimelech Make a Treaty", "Abimelech approaches Abraham to make a peaceful agreement."],
    "Genesis 21:27": ["Covenant at Beersheba", "Abraham and Abimelech make a covenant, confirming their peace."],
    "Genesis 21:31": ["The Place Named Beersheba", "The location is called Beersheba because of the oath made there."],
    "Genesis 21:33": ["Abraham Calls on the Lord", "Abraham plants a tree at Beersheba and calls on the name of the Lord."],

    "Genesis 22:1": ["God Tests Abraham", "God tests Abraham by asking him to offer his son Isaac as a sacrifice."],
    "Genesis 22:3": ["Abraham Obeys the Command", "Early in the morning Abraham prepares and travels with Isaac to the place God showed him."],
    "Genesis 22:6": ["Journey to the Sacrifice", "Isaac carries the wood for the offering while Abraham carries the fire and knife."],
    "Genesis 22:7": ["Isaac Questions the Sacrifice", "Isaac asks where the lamb for the offering is, and Abraham says God will provide."],
    "Genesis 22:9": ["Isaac Bound on the Altar", "Abraham builds the altar, arranges the wood, and binds Isaac on the altar."],
    "Genesis 22:11": ["The Angel Stops Abraham", "The angel of the Lord calls out and stops Abraham from harming Isaac."],
    "Genesis 22:13": ["The Ram Provided", "Abraham sees a ram caught in a thicket and offers it instead of Isaac."],
    "Genesis 22:14": ["The Lord Will Provide", "Abraham names the place 'The Lord Will Provide'."],
    "Genesis 22:15": ["God Reaffirms His Promise", "The Lord confirms His blessing and promises countless descendants."],
    "Genesis 22:18": ["Blessing for All Nations", "Through Abraham's offspring all nations of the earth will be blessed."],
    "Genesis 22:19": ["Return to Beersheba", "Abraham returns with his servants and lives in Beersheba."],
    "Genesis 22:20": ["Family of Nahor", "News is given about the descendants of Abraham's brother Nahor."],

    "Genesis 23:1": ["Death of Sarah", "Sarah dies at the age of 127 in the land of Canaan."],
    "Genesis 23:2": ["Abraham Mourns for Sarah", "Abraham mourns and weeps for his wife Sarah."],
    "Genesis 23:3": ["Abraham Requests a Burial Place", "Abraham asks the Hittites for a piece of land to bury Sarah."],
    "Genesis 23:6": ["Respect from the Hittites", "The Hittites acknowledge Abraham as a respected leader among them."],
    "Genesis 23:8": ["Request for the Cave of Machpelah", "Abraham asks to purchase the cave of Machpelah from Ephron as a burial site."],
    "Genesis 23:11": ["Ephron Offers the Field", "Ephron offers the field and cave to Abraham in the presence of the people."],
    "Genesis 23:13": ["Abraham Insists on Paying", "Abraham insists on paying the full price for the land."],
    "Genesis 23:15": ["Price of the Field", "Ephron sets the price of the land at four hundred shekels of silver."],
    "Genesis 23:16": ["Abraham Pays for the Land", "Abraham pays the full amount in silver before witnesses."],
    "Genesis 23:19": ["Sarah Buried in Machpelah", "Abraham buries Sarah in the cave of Machpelah near Hebron."],
    "Genesis 23:20": ["Land Legally Secured", "The field and cave become Abraham's permanent possession for burial."],

    "Genesis 24:1": ["Abraham Seeks a Wife for Isaac", "Abraham, now old and blessed by the Lord, asks his servant to find a wife for Isaac."],
    "Genesis 24:3": ["Do Not Choose a Canaanite Wife", "Abraham instructs the servant not to choose a wife from the Canaanites but from his own relatives."],
    "Genesis 24:10": ["Servant Travels to Mesopotamia", "The servant takes gifts and travels to the city of Nahor to find a wife for Isaac."],
    "Genesis 24:12": ["Prayer for Guidance", "The servant prays that God will show kindness and guide him to the right woman."],
    "Genesis 24:15": ["Rebekah Appears at the Well", "Rebekah comes to the well with her water jar."],
    "Genesis 24:18": ["Rebekah's Kindness", "Rebekah offers water to the servant and also draws water for his camels."],
    "Genesis 24:22": ["Gifts Given to Rebekah", "The servant gives Rebekah jewelry and asks about her family."],
    "Genesis 24:27": ["Praise to God", "The servant praises the Lord for guiding him to Abraham's relatives."],
    "Genesis 24:29": ["Meeting Laban", "Rebekah's brother Laban welcomes the servant into their home."],
    "Genesis 24:34": ["Servant Explains His Mission", "The servant explains Abraham's request and God's guidance."],
    "Genesis 24:50": ["Family Agrees to the Marriage", "Rebekah's family agrees that the matter is from the Lord."],
    "Genesis 24:58": ["Rebekah Chooses to Go", "Rebekah agrees to leave with the servant and become Isaac's wife."],
    "Genesis 24:63": ["Isaac Meets Rebekah", "Isaac goes out to meditate in the field and sees the approaching caravan."],
    "Genesis 24:67": ["Isaac Marries Rebekah", "Isaac takes Rebekah as his wife and is comforted after his mother's death."],

    "Genesis 25:1": ["Abraham Marries Keturah", "After Sarah’s death, Abraham marries Keturah and has several more sons."],
    "Genesis 25:5": ["Isaac Receives the Inheritance", "Abraham gives all that he has to Isaac, the son of promise."],
    "Genesis 25:7": ["Death of Abraham", "Abraham dies at the age of 175 after a long life."],
    "Genesis 25:9": ["Abraham Buried by Isaac and Ishmael", "Isaac and Ishmael bury Abraham in the cave of Machpelah."],
    "Genesis 25:12": ["Descendants of Ishmael", "The genealogy of Ishmael and the twelve princes descended from him is recorded."],
    "Genesis 25:19": ["Beginning of Isaac's Family Line", "The account of Isaac's family begins as the promised line continues."],
    "Genesis 25:21": ["Isaac Prays for Rebekah", "Isaac prays because Rebekah is barren, and the Lord grants them children."],
    "Genesis 25:22": ["Struggle in the Womb", "The twins struggle within Rebekah, and she asks the Lord about it."],
    "Genesis 25:23": ["Prophecy About the Two Nations", "God reveals that two nations are in her womb and the older will serve the younger."],
    "Genesis 25:24": ["Birth of Esau and Jacob", "Rebekah gives birth to the twins Esau and Jacob."],
    "Genesis 25:27": ["Different Lives of the Brothers", "Esau becomes a skilled hunter while Jacob stays among the tents."],
    "Genesis 25:29": ["Esau Sells His Birthright", "Esau sells his birthright to Jacob for a bowl of stew."],
    "Genesis 25:34": ["Esau Despises the Birthright", "Esau eats and leaves, showing that he despised his birthright."],

    "Genesis 26:1": ["Isaac Goes to Gerar", "Because of a famine in the land, Isaac travels to Gerar where Abimelech is king."],
    "Genesis 26:2": ["God's Promise Reaffirmed to Isaac", "The Lord appears to Isaac and tells him to stay in the land, promising to bless him."],
    "Genesis 26:6": ["Isaac Stays in Gerar", "Isaac settles in Gerar as the Lord instructed."],
    "Genesis 26:7": ["Rebekah Called Isaac's Sister", "Isaac says that Rebekah is his sister because he fears the men of the place."],
    "Genesis 26:8": ["Abimelech Discovers the Truth", "Abimelech sees Isaac showing affection to Rebekah and realizes she is his wife."],
    "Genesis 26:12": ["Isaac Becomes Prosperous", "Isaac plants crops and receives a hundredfold harvest because the Lord blesses him."],
    "Genesis 26:15": ["Philistines Stop the Wells", "The Philistines fill the wells that Abraham's servants had dug."],
    "Genesis 26:17": ["Isaac Moves to the Valley", "Isaac leaves and settles in the valley of Gerar."],
    "Genesis 26:19": ["Disputes Over Wells", "Isaac's servants dig wells but the herdsmen of Gerar quarrel over them."],
    "Genesis 26:22": ["Room to Flourish", "Isaac digs another well and names it Rehoboth because the Lord has made room for them."],
    "Genesis 26:23": ["God Appears at Beersheba", "The Lord appears to Isaac and confirms the promise given to Abraham."],
    "Genesis 26:25": ["Isaac Builds an Altar", "Isaac builds an altar, calls on the Lord, and settles there."],
    "Genesis 26:26": ["Covenant with Abimelech", "Abimelech comes to make a peace agreement with Isaac."],
    "Genesis 26:31": ["Oath of Peace", "They swear an oath and depart peacefully."],
    "Genesis 26:34": ["Esau's Hittite Wives", "Esau marries Hittite women, bringing grief to Isaac and Rebekah."],

    "Genesis 27:1": ["Isaac Plans to Bless Esau", "When Isaac becomes old and his eyesight weakens, he calls Esau to prepare a meal so he can give him the blessing."],
    "Genesis 27:5": ["Rebekah's Plan", "Rebekah hears Isaac's plan and tells Jacob to pretend to be Esau in order to receive the blessing."],
    "Genesis 27:11": ["Jacob's Concern", "Jacob worries that Isaac will recognize him and he may receive a curse instead of a blessing."],
    "Genesis 27:15": ["Jacob Disguised as Esau", "Rebekah dresses Jacob in Esau's clothes and covers his hands and neck with goat skins."],
    "Genesis 27:18": ["Jacob Deceives Isaac", "Jacob goes to Isaac pretending to be Esau and brings the prepared food."],
    "Genesis 27:22": ["Isaac Suspicious", "Isaac notices the voice is Jacob's but the hands feel like Esau's."],
    "Genesis 27:27": ["The Blessing Given to Jacob", "Isaac blesses Jacob with prosperity and authority over nations."],
    "Genesis 27:30": ["Esau Returns Too Late", "Esau returns with food, but Isaac realizes he has already given the blessing to Jacob."],
    "Genesis 27:34": ["Esau Cries Out", "Esau cries bitterly and asks his father for a blessing."],
    "Genesis 27:39": ["Esau's Limited Blessing", "Isaac gives Esau a lesser blessing and foretells his future struggle."],
    "Genesis 27:41": ["Esau Plans Revenge", "Esau becomes angry and plans to kill Jacob after Isaac's death."],
    "Genesis 27:42": ["Jacob Sent Away", "Rebekah warns Jacob and sends him away to her brother Laban."],
    "Genesis 27:46": ["Rebekah's Concern About Marriage", "Rebekah tells Isaac she does not want Jacob to marry a Hittite woman."],

    "Genesis 28:1": ["Isaac Blesses Jacob Again", "Isaac calls Jacob, blesses him, and instructs him not to marry a Canaanite woman."],
    "Genesis 28:3": ["Blessing of Abraham Given", "Isaac prays that God Almighty will bless Jacob and give him the blessing of Abraham."],
    "Genesis 28:5": ["Jacob Sent to Paddan-Aram", "Jacob leaves to go to his uncle Laban to find a wife."],
    "Genesis 28:6": ["Esau Notices Isaac's Instructions", "Esau sees that Isaac does not approve of Canaanite wives."],
    "Genesis 28:9": ["Esau Marries into Ishmael's Family", "Esau marries a daughter of Ishmael in addition to his other wives."],
    "Genesis 28:10": ["Jacob Begins His Journey", "Jacob leaves Beersheba and travels toward Haran."],
    "Genesis 28:11": ["Jacob's Dream at Bethel", "Jacob sleeps and dreams of a ladder reaching from earth to heaven with angels ascending and descending."],
    "Genesis 28:13": ["God Reaffirms the Covenant", "The Lord promises Jacob the land and numerous descendants."],
    "Genesis 28:16": ["Jacob Awakens in Awe", "Jacob wakes and realizes the Lord is in that place."],
    "Genesis 28:18": ["The Stone Pillar at Bethel", "Jacob sets up a stone pillar and pours oil on it."],
    "Genesis 28:20": ["Jacob's Vow to God", "Jacob makes a vow that if God protects and provides for him, the Lord will be his God."],
    "Genesis 28:22": ["Bethel Declared God's House", "Jacob names the place Bethel and promises to give a tenth to God."],

    "Genesis 29:1": ["Jacob Arrives in the East", "Jacob travels to the land of the people of the east and arrives near a well."],
    "Genesis 29:4": ["Jacob Meets the Shepherds", "Jacob speaks with shepherds at the well and asks about Laban."],
    "Genesis 29:9": ["Jacob Meets Rachel", "Rachel arrives with her father's sheep, and Jacob helps roll away the stone from the well."],
    "Genesis 29:11": ["Jacob Greets Rachel", "Jacob kisses Rachel and weeps when he realizes she is his relative."],
    "Genesis 29:13": ["Jacob Welcomed by Laban", "Laban warmly receives Jacob and brings him into his home."],
    "Genesis 29:15": ["Jacob Agrees to Serve Laban", "Jacob agrees to work for Laban for seven years in order to marry Rachel."],
    "Genesis 29:20": ["Seven Years of Service", "Jacob serves seven years for Rachel, but they seem like only a few days because of his love for her."],
    "Genesis 29:23": ["Leah Given Instead of Rachel", "Laban deceives Jacob by giving Leah as his wife instead of Rachel."],
    "Genesis 29:25": ["Jacob Confronts Laban", "Jacob discovers the deception and questions Laban."],
    "Genesis 29:27": ["Jacob Marries Rachel", "After the wedding week, Jacob is also given Rachel as his wife and agrees to serve another seven years."],
    "Genesis 29:31": ["The Lord Sees Leah", "The Lord sees that Leah is unloved and allows her to have children."],
    "Genesis 29:32": ["Birth of Reuben", "Leah gives birth to her first son and names him Reuben."],
    "Genesis 29:33": ["Birth of Simeon", "Leah has another son and names him Simeon."],
    "Genesis 29:34": ["Birth of Levi", "Leah gives birth to Levi, hoping Jacob will become more attached to her."],
    "Genesis 29:35": ["Birth of Judah", "Leah gives birth to Judah and praises the Lord."],

    "Genesis 30:1": ["Rachel's Jealousy", "Rachel sees that she has no children and becomes jealous of Leah."],
    "Genesis 30:3": ["Bilhah Given to Jacob", "Rachel gives her servant Bilhah to Jacob so she may have children through her."],
    "Genesis 30:5": ["Birth of Dan", "Bilhah gives birth to a son and Rachel names him Dan."],
    "Genesis 30:7": ["Birth of Naphtali", "Bilhah gives birth to another son named Naphtali."],
    "Genesis 30:9": ["Zilpah Given to Jacob", "Leah gives her servant Zilpah to Jacob as a wife."],
    "Genesis 30:10": ["Birth of Gad", "Zilpah gives birth to a son and Leah names him Gad."],
    "Genesis 30:12": ["Birth of Asher", "Zilpah gives birth to another son named Asher."],
    "Genesis 30:14": ["Reuben Finds Mandrakes", "Reuben finds mandrakes in the field, leading to a discussion between Leah and Rachel."],
    "Genesis 30:17": ["Birth of Issachar", "God blesses Leah with another son named Issachar."],
    "Genesis 30:19": ["Birth of Zebulun", "Leah gives birth to another son and names him Zebulun."],
    "Genesis 30:21": ["Birth of Dinah", "Leah later gives birth to a daughter named Dinah."],
    "Genesis 30:22": ["God Remembers Rachel", "God remembers Rachel and enables her to conceive."],
    "Genesis 30:23": ["Birth of Joseph", "Rachel gives birth to a son and names him Joseph."],
    "Genesis 30:25": ["Jacob Seeks to Return Home", "After Joseph's birth, Jacob asks Laban to allow him to return to his homeland."],
    "Genesis 30:27": ["Laban Wants Jacob to Stay", "Laban asks Jacob to remain because he sees that the Lord has blessed him through Jacob."],
    "Genesis 30:31": ["Jacob's Wages Agreement", "Jacob proposes a plan involving speckled and spotted animals as his wages."],
    "Genesis 30:37": ["Jacob's Breeding Strategy", "Jacob uses peeled branches to influence the breeding of the livestock."],

    "Genesis 31:1": ["Jacob Notices Laban's Attitude", "Jacob hears that Laban's sons are complaining that he has taken their father's wealth."],
    "Genesis 31:3": ["God Tells Jacob to Return", "The Lord instructs Jacob to return to the land of his fathers."],
    "Genesis 31:4": ["Jacob Explains to Rachel and Leah", "Jacob calls Rachel and Leah to the field and explains that God has blessed him despite Laban's actions."],
    "Genesis 31:14": ["Rachel and Leah Agree", "Rachel and Leah support Jacob's decision to leave Laban."],
    "Genesis 31:17": ["Jacob Leaves Secretly", "Jacob gathers his family and possessions and secretly leaves Laban."],
    "Genesis 31:19": ["Rachel Takes the Household Idols", "Rachel secretly takes her father's household idols before leaving."],
    "Genesis 31:22": ["Laban Pursues Jacob", "Laban hears that Jacob has fled and pursues him."],
    "Genesis 31:24": ["God Warns Laban", "God appears to Laban in a dream and warns him not to harm Jacob."],
    "Genesis 31:26": ["Laban Confronts Jacob", "Laban meets Jacob and questions why he left secretly."],
    "Genesis 31:33": ["Search for the Idols", "Laban searches Jacob's tents for the idols but does not find them."],
    "Genesis 31:36": ["Jacob Defends Himself", "Jacob confronts Laban and explains how faithfully he served him."],
    "Genesis 31:44": ["Covenant Between Jacob and Laban", "Jacob and Laban make a covenant of peace."],
    "Genesis 31:48": ["The Heap of Witness", "They set up a heap of stones as a witness to their agreement."],
    "Genesis 31:53": ["Oath of Peace", "Jacob and Laban swear an oath before God."],
    "Genesis 31:55": ["Laban Returns Home", "Laban blesses his daughters and grandchildren and returns home."],

    "Genesis 32:1": ["Jacob Meets Angels", "As Jacob continues his journey, angels of God meet him."],
    "Genesis 32:3": ["Jacob Sends Messengers to Esau", "Jacob sends messengers ahead to his brother Esau to inform him of his return."],
    "Genesis 32:6": ["Jacob Fears Esau", "The messengers return saying Esau is coming with four hundred men, and Jacob becomes afraid."],
    "Genesis 32:9": ["Jacob Prays for Deliverance", "Jacob prays to God, asking for protection from Esau."],
    "Genesis 32:13": ["Jacob Prepares Gifts", "Jacob prepares generous gifts of livestock to send ahead to Esau."],
    "Genesis 32:22": ["Jacob Sends Family Across the River", "Jacob sends his family and possessions across the Jabbok River."],
    "Genesis 32:24": ["Jacob Wrestles with a Man", "Jacob wrestles with a man throughout the night."],
    "Genesis 32:26": ["Jacob Refuses to Let Go", "Jacob refuses to release the man until he receives a blessing."],
    "Genesis 32:28": ["Jacob Named Israel", "The man gives Jacob the name Israel because he has struggled with God and prevailed."],
    "Genesis 32:30": ["Place Named Peniel", "Jacob names the place Peniel because he saw God face to face and lived."],
    "Genesis 32:31": ["Jacob Walks with a Limp", "Jacob leaves the place limping after the encounter."],

    "Genesis 33:1": ["Jacob Sees Esau Approaching", "Jacob looks up and sees Esau coming with four hundred men."],
    "Genesis 33:3": ["Jacob Bows Before Esau", "Jacob goes ahead of his family and bows to the ground seven times before Esau."],
    "Genesis 33:4": ["Esau Embraces Jacob", "Esau runs to meet Jacob, embraces him, and they both weep."],
    "Genesis 33:5": ["Jacob Introduces His Family", "Jacob introduces his wives and children to Esau."],
    "Genesis 33:8": ["Jacob Explains the Gifts", "Jacob explains that the gifts he sent ahead were to find favor with Esau."],
    "Genesis 33:10": ["Jacob Urges Esau to Accept the Gift", "Jacob insists that Esau accept the gifts as a sign of reconciliation."],
    "Genesis 33:12": ["Esau Offers to Travel Together", "Esau suggests that they journey together."],
    "Genesis 33:13": ["Jacob Declines the Offer", "Jacob politely declines, explaining that the children and animals need a slower pace."],
    "Genesis 33:16": ["Esau Returns to Seir", "Esau returns to his home in Seir."],
    "Genesis 33:17": ["Jacob Settles at Succoth", "Jacob moves to Succoth and builds shelters for his livestock."],
    "Genesis 33:18": ["Jacob Arrives at Shechem", "Jacob arrives safely in the land of Canaan and camps near the city of Shechem."],
    "Genesis 33:19": ["Land Purchased at Shechem", "Jacob buys a piece of land from the sons of Hamor."],
    "Genesis 33:20": ["Altar Built to God", "Jacob builds an altar and calls it El-Elohe-Israel."],

    "Genesis 34:1": ["Dinah Visits the Women of the Land", "Dinah, the daughter of Leah and Jacob, goes out to visit the women of the land."],
    "Genesis 34:2": ["Dinah Violated by Shechem", "Shechem, the son of Hamor the Hivite, sees Dinah and takes her and violates her."],
    "Genesis 34:3": ["Shechem Desires Dinah", "Shechem becomes deeply attached to Dinah and asks his father to arrange marriage."],
    "Genesis 34:5": ["Jacob Hears of the Incident", "Jacob hears that Dinah has been defiled but waits until his sons return from the field."],
    "Genesis 34:8": ["Hamor Proposes Marriage", "Hamor asks Jacob's family to allow intermarriage between their peoples."],
    "Genesis 34:13": ["Jacob's Sons Deceive Them", "Jacob's sons answer deceitfully because their sister has been defiled."],
    "Genesis 34:15": ["Condition of Circumcision", "They demand that all the men of the city be circumcised before marriage can happen."],
    "Genesis 34:20": ["Hamor Persuades the City", "Hamor and Shechem convince the men of their city to accept the condition."],
    "Genesis 34:25": ["Simeon and Levi Attack", "While the men are recovering from circumcision, Simeon and Levi attack the city and kill the men."],
    "Genesis 34:27": ["City Plundered", "Jacob's sons take the wealth, livestock, women, and children from the city."],
    "Genesis 34:30": ["Jacob Rebukes His Sons", "Jacob rebukes Simeon and Levi for bringing trouble upon him."],
    "Genesis 34:31": ["Sons Defend Their Action", "They respond that their sister should not have been treated like a prostitute."],

    "Genesis 35:1": ["Jacob Returns to Bethel", "God tells Jacob to go to Bethel and build an altar there."],
    "Genesis 35:2": ["Remove Foreign Gods", "Jacob instructs his household to remove foreign gods and purify themselves."],
    "Genesis 35:4": ["Idols Buried at Shechem", "Jacob buries the foreign idols and earrings under the oak near Shechem."],
    "Genesis 35:5": ["God Protects Jacob's Family", "The terror of God falls on surrounding cities so they do not pursue Jacob."],
    "Genesis 35:6": ["Arrival at Bethel", "Jacob and his family arrive safely at Bethel."],
    "Genesis 35:7": ["Altar Built at Bethel", "Jacob builds an altar and calls the place El Bethel."],
    "Genesis 35:9": ["God Appears to Jacob Again", "God appears to Jacob again and blesses him."],
    "Genesis 35:10": ["Jacob Named Israel Again", "God confirms that Jacob's name is Israel."],
    "Genesis 35:11": ["Promise of Nations and Kings", "God promises that nations and kings will come from Jacob."],
    "Genesis 35:14": ["Jacob Sets Up a Pillar", "Jacob sets up a stone pillar and pours offerings on it."],
    "Genesis 35:16": ["Death of Rachel", "Rachel dies while giving birth near Bethlehem."],
    "Genesis 35:18": ["Birth of Benjamin", "Rachel's son is named Benjamin."],
    "Genesis 35:22": ["Reuben's Sin", "Reuben sleeps with his father's concubine Bilhah."],
    "Genesis 35:23": ["The Sons of Jacob", "The twelve sons of Jacob are listed."],
    "Genesis 35:27": ["Jacob Returns to Isaac", "Jacob comes to his father Isaac at Mamre."],
    "Genesis 35:29": ["Death of Isaac", "Isaac dies and is buried by his sons Esau and Jacob."],

    "Genesis 36:1": ["The Family Line of Esau", "This chapter records the descendants of Esau, who is also called Edom."],
    "Genesis 36:6": ["Esau Moves to Seir", "Esau moves away from Jacob and settles in the hill country of Seir."],
    "Genesis 36:9": ["Descendants of Esau in Edom", "The genealogy of Esau's family living in Edom is recorded."],
    "Genesis 36:15": ["Chiefs of Edom", "The leaders among Esau's descendants are listed as chiefs of Edom."],
    "Genesis 36:20": ["People of Seir", "The original inhabitants of the land of Seir and their families are recorded."],
    "Genesis 36:31": ["Kings Who Ruled Edom", "The kings who ruled in Edom before any king ruled over Israel are listed."],
    "Genesis 36:40": ["Chiefs by Their Territories", "The chiefs of Edom are listed according to their families and lands."],

    "Genesis 37:1": ["Joseph's Dreams", "Joseph, the son of Jacob, lives with his brothers in the land of Canaan."],
    "Genesis 37:3": ["Jacob Loves Joseph Most", "Jacob loves Joseph more than his other sons and gives him a special robe."],
    "Genesis 37:5": ["Joseph's First Dream", "Joseph dreams that his brothers' sheaves bow down to his sheaf."],
    "Genesis 37:9": ["Joseph's Second Dream", "Joseph dreams that the sun, moon, and eleven stars bow down to him."],
    "Genesis 37:12": ["Joseph Sent to His Brothers", "Jacob sends Joseph to check on his brothers who are tending the flocks."],
    "Genesis 37:18": ["Plot Against Joseph", "Joseph's brothers see him coming and plan to kill him."],
    "Genesis 37:21": ["Reuben Tries to Rescue Joseph", "Reuben persuades them not to kill Joseph but to throw him into a pit."],
    "Genesis 37:23": ["Joseph Thrown into the Pit", "The brothers strip Joseph of his robe and throw him into an empty pit."],
    "Genesis 37:26": ["Judah Suggests Selling Joseph", "Judah proposes selling Joseph instead of killing him."],
    "Genesis 37:28": ["Joseph Sold into Slavery", "Joseph is sold to Ishmaelite traders who take him to Egypt."],
    "Genesis 37:31": ["Deception of Jacob", "The brothers dip Joseph's robe in goat's blood and show it to Jacob."],
    "Genesis 37:33": ["Jacob Believes Joseph Is Dead", "Jacob believes that a wild animal has killed Joseph."],
    "Genesis 37:35": ["Jacob Mourns Joseph", "Jacob mourns deeply and refuses to be comforted."],
    "Genesis 37:36": ["Joseph Taken to Egypt", "Joseph is sold in Egypt to Potiphar, an officer of Pharaoh."],

    "Genesis 38:1": ["Judah Leaves His Brothers", "Judah separates from his brothers and lives near a man named Hirah."],
    "Genesis 38:2": ["Judah's Family Begins", "Judah marries a Canaanite woman and has three sons: Er, Onan, and Shelah."],
    "Genesis 38:6": ["Tamar Marries Er", "Judah arranges for his firstborn son Er to marry Tamar."],
    "Genesis 38:7": ["Death of Er", "Er is wicked in the Lord's sight, so the Lord puts him to death."],
    "Genesis 38:8": ["Onan's Responsibility", "Judah instructs Onan to fulfill his duty to Tamar and raise offspring for his brother."],
    "Genesis 38:9": ["Onan Refuses His Duty", "Onan prevents Tamar from conceiving because the child would not be considered his."],
    "Genesis 38:10": ["Death of Onan", "The Lord is displeased with Onan's actions and puts him to death."],
    "Genesis 38:11": ["Tamar Sent Away", "Judah tells Tamar to live as a widow until his son Shelah grows up."],
    "Genesis 38:12": ["Judah Visits Timnah", "After Judah's wife dies, he travels to Timnah to shear his sheep."],
    "Genesis 38:14": ["Tamar's Plan", "Tamar disguises herself as a prostitute and waits for Judah."],
    "Genesis 38:16": ["Judah Meets Tamar", "Judah unknowingly sleeps with Tamar and gives his seal, cord, and staff as a pledge."],
    "Genesis 38:24": ["Tamar Accused", "Judah hears Tamar is pregnant and orders that she be punished."],
    "Genesis 38:25": ["Tamar Reveals the Truth", "Tamar reveals the items Judah gave her as proof of the father."],
    "Genesis 38:26": ["Judah Admits His Fault", "Judah admits Tamar is more righteous than he is."],
    "Genesis 38:27": ["Birth of Twins", "Tamar gives birth to twin sons, Perez and Zerah."],

    "Genesis 39:1": ["Joseph in Potiphar's House", "Joseph is taken to Egypt and sold to Potiphar, an officer of Pharaoh."],
    "Genesis 39:2": ["The Lord Blesses Joseph", "The Lord is with Joseph, and he prospers in Potiphar's household."],
    "Genesis 39:4": ["Joseph Given Responsibility", "Potiphar puts Joseph in charge of his entire household."],
    "Genesis 39:6": ["Joseph's Good Character", "Joseph is described as handsome and well-built."],
    "Genesis 39:7": ["Potiphar's Wife Tempts Joseph", "Potiphar's wife repeatedly tries to persuade Joseph to sleep with her."],
    "Genesis 39:8": ["Joseph Refuses Sin", "Joseph refuses, saying it would be a sin against God."],
    "Genesis 39:11": ["Joseph Flees from Temptation", "Joseph runs away when Potiphar's wife tries to grab him."],
    "Genesis 39:13": ["False Accusation", "Potiphar's wife accuses Joseph of attempting to harm her."],
    "Genesis 39:19": ["Joseph Imprisoned", "Potiphar becomes angry and throws Joseph into prison."],
    "Genesis 39:21": ["God Favors Joseph in Prison", "The Lord remains with Joseph and gives him favor with the prison keeper."],
    "Genesis 39:22": ["Joseph Put in Charge", "Joseph is placed in charge of the other prisoners."],
    "Genesis 39:23": ["The Lord Gives Success", "Everything Joseph does prospers because the Lord is with him."],

    "Genesis 40:1": ["Pharaoh's Officials Imprisoned", "Pharaoh's cupbearer and baker offend the king and are placed in prison."],
    "Genesis 40:4": ["Joseph Serves Them in Prison", "The prison captain assigns Joseph to attend the cupbearer and the baker."],
    "Genesis 40:5": ["Two Troubling Dreams", "Both officials have dreams on the same night that trouble them."],
    "Genesis 40:8": ["Joseph Offers Interpretation", "Joseph tells them that interpretations belong to God and asks them to tell their dreams."],
    "Genesis 40:9": ["The Cupbearer's Dream", "The cupbearer describes a dream about a vine with three branches producing grapes."],
    "Genesis 40:12": ["Meaning of the Dream", "Joseph explains that the three branches represent three days until the cupbearer will be restored to his position."],
    "Genesis 40:14": ["Joseph's Request", "Joseph asks the cupbearer to remember him and speak to Pharaoh about his unjust imprisonment."],
    "Genesis 40:16": ["The Baker's Dream", "The baker shares his dream of three baskets of bread being eaten by birds."],
    "Genesis 40:18": ["Meaning of the Baker's Dream", "Joseph explains that the baker will be executed in three days."],
    "Genesis 40:20": ["Dreams Fulfilled", "On Pharaoh's birthday the cupbearer is restored and the baker is executed."],
    "Genesis 40:23": ["Joseph Forgotten", "The cupbearer forgets about Joseph and does not mention him to Pharaoh."],

    "Genesis 41:1": ["Pharaoh's Dreams", "After two years Pharaoh has troubling dreams about cows and grain."],
    "Genesis 41:8": ["Pharaoh Seeks Interpretation", "Pharaoh calls his magicians and wise men, but none can explain the dreams."],
    "Genesis 41:9": ["Cupbearer Remembers Joseph", "The cupbearer remembers Joseph and tells Pharaoh about him."],
    "Genesis 41:14": ["Joseph Brought Before Pharaoh", "Joseph is quickly brought from prison to stand before Pharaoh."],
    "Genesis 41:16": ["Joseph Gives Glory to God", "Joseph says that God will give Pharaoh the interpretation."],
    "Genesis 41:25": ["Meaning of the Dreams", "Joseph explains that the dreams mean seven years of abundance followed by seven years of famine."],
    "Genesis 41:33": ["Joseph Advises Pharaoh", "Joseph advises Pharaoh to appoint a wise man to store grain during the years of abundance."],
    "Genesis 41:39": ["Joseph Made Ruler", "Pharaoh appoints Joseph as second in command over all Egypt."],
    "Genesis 41:45": ["Joseph Given a New Name", "Pharaoh gives Joseph the name Zaphenath-Paneah and a wife named Asenath."],
    "Genesis 41:50": ["Birth of Manasseh", "Joseph's first son Manasseh is born."],
    "Genesis 41:52": ["Birth of Ephraim", "Joseph's second son Ephraim is born."],
    "Genesis 41:53": ["Years of Abundance End", "The seven years of plenty come to an end."],
    "Genesis 41:54": ["Famine Begins", "The famine spreads across the lands, but Egypt has stored grain."],
    "Genesis 41:57": ["Nations Come to Egypt", "People from many lands come to Egypt to buy grain from Joseph."],

    "Genesis 42:1": ["Jacob Sends His Sons to Egypt", "Jacob hears that there is grain in Egypt and sends his sons to buy food."],
    "Genesis 42:6": ["Joseph Meets His Brothers", "Joseph, now governor of Egypt, sees his brothers when they come to buy grain."],
    "Genesis 42:7": ["Joseph Tests His Brothers", "Joseph recognizes them but pretends to be a stranger and speaks harshly."],
    "Genesis 42:9": ["Accused of Spying", "Joseph accuses them of being spies to test them."],
    "Genesis 42:13": ["Brothers Explain Their Family", "They explain that they are twelve brothers and mention Benjamin and their father."],
    "Genesis 42:17": ["Brothers Imprisoned", "Joseph keeps them in custody for three days."],
    "Genesis 42:19": ["Simeon Held as Pledge", "Joseph keeps Simeon in prison and sends the others home with grain."],
    "Genesis 42:21": ["Brothers Feel Guilty", "The brothers admit that their trouble may be punishment for what they did to Joseph."],
    "Genesis 42:24": ["Joseph Weeps", "Joseph secretly weeps when he hears their regret."],
    "Genesis 42:25": ["Silver Returned in Their Sacks", "Joseph secretly returns their money in their grain sacks."],
    "Genesis 42:27": ["Discovery of the Silver", "One of the brothers discovers the silver in his sack on the journey."],
    "Genesis 42:29": ["Report to Jacob", "They tell their father Jacob everything that happened in Egypt."],
    "Genesis 42:36": ["Jacob's Grief", "Jacob fears losing Benjamin after already losing Joseph and Simeon."],

    "Genesis 43:1": ["The Famine Continues", "The famine becomes severe in the land and the grain from Egypt runs out."],
    "Genesis 43:3": ["Judah Speaks to Jacob", "Judah tells Jacob that they cannot return to Egypt unless Benjamin goes with them."],
    "Genesis 43:8": ["Judah Guarantees Benjamin's Safety", "Judah offers himself as a guarantee for Benjamin's safety."],
    "Genesis 43:11": ["Jacob Sends Gifts to Egypt", "Jacob sends gifts, double money, and Benjamin with his sons to Egypt."],
    "Genesis 43:15": ["The Brothers Return to Egypt", "The brothers travel back to Egypt and stand before Joseph."],
    "Genesis 43:16": ["Joseph Prepares a Meal", "Joseph orders that a meal be prepared in his house for the brothers."],
    "Genesis 43:18": ["The Brothers Fear Trouble", "The brothers become afraid because they are brought to Joseph's house."],
    "Genesis 43:23": ["Reassurance from Joseph's Steward", "Joseph's steward reassures them that God has provided for them."],
    "Genesis 43:26": ["The Brothers Bow Before Joseph", "The brothers present gifts and bow before Joseph."],
    "Genesis 43:29": ["Joseph Sees Benjamin", "Joseph sees Benjamin and is deeply moved."],
    "Genesis 43:30": ["Joseph Weeps Privately", "Joseph withdraws to weep before returning to the meal."],
    "Genesis 43:32": ["Meal at Joseph's Table", "The brothers eat separately from the Egyptians according to custom."],
    "Genesis 43:33": ["Brothers Seated by Age", "The brothers are seated according to their birth order, surprising them."],
    "Genesis 43:34": ["Benjamin Receives Extra Portion", "Benjamin receives a portion five times greater than his brothers."],

    "Genesis 44:1": ["Joseph's Final Test", "Joseph orders his steward to fill his brothers' sacks with grain and secretly place his silver cup in Benjamin's sack."],
    "Genesis 44:4": ["Brothers Pursued", "After the brothers leave the city, Joseph sends his steward to pursue them."],
    "Genesis 44:6": ["Accusation of Theft", "The steward accuses the brothers of stealing Joseph's silver cup."],
    "Genesis 44:8": ["Brothers Proclaim Innocence", "The brothers insist they would never steal and offer severe punishment if the cup is found."],
    "Genesis 44:12": ["Cup Found in Benjamin's Sack", "The steward searches their sacks and finds the cup in Benjamin's sack."],
    "Genesis 44:13": ["Brothers in Distress", "The brothers tear their clothes in grief and return to the city."],
    "Genesis 44:14": ["Before Joseph Again", "Judah and his brothers fall before Joseph."],
    "Genesis 44:16": ["Judah Accepts Responsibility", "Judah admits their guilt and offers themselves as servants."],
    "Genesis 44:18": ["Judah Pleads for Benjamin", "Judah pleads passionately with Joseph to spare Benjamin."],
    "Genesis 44:30": ["Judah Speaks of Their Father", "Judah explains that their father Jacob's life is bound to Benjamin."],
    "Genesis 44:33": ["Judah Offers Himself", "Judah offers himself as a slave instead of Benjamin so the boy can return home."],
    "Genesis 44:34": ["Judah's Final Plea", "Judah says he cannot face his father if Benjamin does not return."],

    "Genesis 45:1": ["Joseph Reveals Himself", "Joseph can no longer control his emotions and reveals his identity to his brothers."],
    "Genesis 45:3": ["Joseph Asks About His Father", "Joseph asks if his father Jacob is still alive, and his brothers are shocked."],
    "Genesis 45:4": ["Joseph Reassures His Brothers", "Joseph tells them not to be distressed because God sent him ahead to preserve life."],
    "Genesis 45:6": ["God's Plan in the Famine", "Joseph explains that the famine will continue for several more years."],
    "Genesis 45:8": ["God Raised Joseph to Power", "Joseph says that God made him a ruler in Egypt for the sake of saving lives."],
    "Genesis 45:9": ["Invite Jacob to Egypt", "Joseph tells his brothers to quickly bring their father to Egypt."],
    "Genesis 45:14": ["Joseph Embraces Benjamin", "Joseph weeps as he embraces Benjamin."],
    "Genesis 45:15": ["Joseph Reconciles with His Brothers", "Joseph kisses all his brothers and weeps with them."],
    "Genesis 45:16": ["Pharaoh Welcomes the Family", "Pharaoh hears the news and invites Joseph's family to live in Egypt."],
    "Genesis 45:19": ["Provision for the Journey", "Pharaoh provides wagons and supplies for Jacob and the family."],
    "Genesis 45:25": ["Brothers Return to Canaan", "The brothers return to Canaan and tell Jacob that Joseph is alive."],
    "Genesis 45:26": ["Jacob's Amazement", "Jacob is stunned at the news that Joseph is still alive."],
    "Genesis 45:27": ["Jacob Believes", "After seeing the wagons, Jacob believes the report."],
    "Genesis 45:28": ["Jacob Prepares to See Joseph", "Jacob rejoices and says he will go to Egypt to see Joseph before he dies."],

    "Genesis 46:1": ["Jacob Begins the Journey to Egypt", "Jacob sets out for Egypt and stops at Beersheba to offer sacrifices to God."],
    "Genesis 46:2": ["God Speaks to Jacob", "God speaks to Jacob in a vision and tells him not to fear going to Egypt."],
    "Genesis 46:3": ["Promise of a Great Nation", "God promises that Jacob's family will become a great nation in Egypt."],
    "Genesis 46:5": ["Family Travels to Egypt", "Jacob and his family travel to Egypt with all their possessions."],
    "Genesis 46:8": ["Names of Jacob's Descendants", "The descendants of Jacob who go with him to Egypt are listed."],
    "Genesis 46:26": ["Total Number of Family Members", "The number of Jacob's direct descendants who go to Egypt is counted."],
    "Genesis 46:28": ["Judah Sent Ahead", "Jacob sends Judah ahead to guide the family to the region of Goshen."],
    "Genesis 46:29": ["Joseph Meets Jacob", "Joseph meets his father Jacob and they embrace and weep together."],
    "Genesis 46:31": ["Joseph Plans to Speak to Pharaoh", "Joseph tells his brothers how to present themselves to Pharaoh."],
    "Genesis 46:34": ["Shepherds Settle in Goshen", "Joseph instructs them to say they are shepherds so they can live in the land of Goshen."],

    "Genesis 47:1": ["Joseph Presents His Brothers to Pharaoh", "Joseph introduces some of his brothers to Pharaoh and explains that they are shepherds."],
    "Genesis 47:4": ["Request to Live in Goshen", "Joseph's brothers ask Pharaoh for permission to live in the land of Goshen because of the famine."],
    "Genesis 47:5": ["Pharaoh Welcomes Jacob's Family", "Pharaoh allows Joseph's family to settle in Goshen and manage livestock."],
    "Genesis 47:7": ["Jacob Meets Pharaoh", "Joseph brings his father Jacob before Pharaoh, and Jacob blesses him."],
    "Genesis 47:11": ["Joseph Settles His Family", "Joseph gives his father and brothers land in Egypt and provides food for them."],
    "Genesis 47:13": ["Severe Famine in the Land", "The famine becomes extremely severe across Egypt and Canaan."],
    "Genesis 47:16": ["Food Exchanged for Livestock", "When the people's money is gone, Joseph accepts livestock in exchange for grain."],
    "Genesis 47:18": ["Land Given for Food", "The Egyptians give their land and themselves to Pharaoh in exchange for food."],
    "Genesis 47:23": ["Joseph's Law for the Land", "Joseph establishes a law that a fifth of the produce belongs to Pharaoh."],
    "Genesis 47:27": ["Israel Prospers in Goshen", "Jacob's family settles in Goshen and multiplies greatly."],
    "Genesis 47:28": ["Jacob's Final Years", "Jacob lives in Egypt for seventeen more years."],
    "Genesis 47:29": ["Jacob's Request to Joseph", "Jacob asks Joseph to promise that he will bury him in the land of his ancestors."],

    "Genesis 48:1": ["Joseph Visits Jacob", "Joseph is told that his father Jacob is ill, so he goes to visit him with his two sons Manasseh and Ephraim."],
    "Genesis 48:3": ["Jacob Recalls God's Promise", "Jacob reminds Joseph how God appeared to him and promised to bless his descendants."],
    "Genesis 48:5": ["Ephraim and Manasseh Adopted", "Jacob adopts Joseph's sons Ephraim and Manasseh as his own sons."],
    "Genesis 48:8": ["Jacob Recognizes Joseph's Sons", "Jacob asks who the young men are and prepares to bless them."],
    "Genesis 48:10": ["Jacob Embraces the Boys", "Because his eyesight is weak, Jacob brings the boys close and blesses them."],
    "Genesis 48:13": ["Joseph Positions His Sons", "Joseph places Manasseh at Jacob's right hand and Ephraim at his left."],
    "Genesis 48:14": ["Jacob Crosses His Hands", "Jacob crosses his hands, placing his right hand on Ephraim instead of Manasseh."],
    "Genesis 48:17": ["Joseph Questions the Blessing", "Joseph tries to correct his father because the blessing is placed on the younger son."],
    "Genesis 48:19": ["Greater Blessing for Ephraim", "Jacob insists that Ephraim will become greater than Manasseh."],
    "Genesis 48:20": ["Blessing of the Sons", "Jacob blesses Ephraim and Manasseh, declaring that Israel will use their names in blessings."],
    "Genesis 48:21": ["Promise of Return to the Land", "Jacob tells Joseph that God will bring his descendants back to the land of their fathers."],

    "Genesis 49:1": ["Jacob Calls His Sons", "Jacob gathers his sons to tell them what will happen in the days to come."],
    "Genesis 49:3": ["Blessing for Reuben", "Reuben is described as the firstborn but loses his honor because of his wrongdoing."],
    "Genesis 49:5": ["Simeon and Levi Rebuked", "Simeon and Levi are rebuked for their violence and cruelty."],
    "Genesis 49:8": ["Blessing for Judah", "Judah is praised and promised leadership among his brothers."],
    "Genesis 49:10": ["Promise of the Ruler", "The scepter will not depart from Judah until the rightful ruler comes."],
    "Genesis 49:13": ["Blessing for Zebulun", "Zebulun will live by the seashore and become a haven for ships."],
    "Genesis 49:14": ["Blessing for Issachar", "Issachar is described as a strong donkey who will work the land."],
    "Genesis 49:16": ["Blessing for Dan", "Dan will judge his people as one of the tribes of Israel."],
    "Genesis 49:19": ["Blessing for Gad", "Gad will be attacked by raiders but will overcome them."],
    "Genesis 49:20": ["Blessing for Asher", "Asher will produce rich food fit for kings."],
    "Genesis 49:21": ["Blessing for Naphtali", "Naphtali is described as a free deer that speaks beautiful words."],
    "Genesis 49:22": ["Blessing for Joseph", "Joseph is described as a fruitful branch blessed by God."],
    "Genesis 49:27": ["Blessing for Benjamin", "Benjamin is described as a fierce wolf who divides the spoil."],
    "Genesis 49:29": ["Jacob's Burial Request", "Jacob instructs his sons to bury him in the cave of Machpelah with his ancestors."],
    "Genesis 49:33": ["Death of Jacob", "Jacob finishes speaking to his sons and dies."],

    "Genesis 50:1": ["Joseph Mourns for Jacob", "Joseph falls on his father's face, weeps over him, and kisses him."],
    "Genesis 50:2": ["Jacob's Body Prepared", "Joseph commands the physicians to embalm his father."],
    "Genesis 50:4": ["Joseph Requests Permission from Pharaoh", "Joseph asks Pharaoh for permission to bury Jacob in Canaan as he promised."],
    "Genesis 50:7": ["Funeral Journey to Canaan", "Joseph, his brothers, and many officials travel to Canaan to bury Jacob."],
    "Genesis 50:10": ["Great Mourning at the Threshing Floor", "They mourn deeply for Jacob for seven days."],
    "Genesis 50:12": ["Jacob Buried in Machpelah", "Jacob's sons bury him in the cave of Machpelah as he had instructed."],
    "Genesis 50:15": ["Brothers Fear Joseph", "After Jacob's death, Joseph's brothers fear he may seek revenge."],
    "Genesis 50:16": ["Brothers Plead for Forgiveness", "They send a message asking Joseph to forgive their wrongdoing."],
    "Genesis 50:19": ["Joseph Reassures Them", "Joseph tells them not to fear because judgment belongs to God."],
    "Genesis 50:20": ["God Turned Evil into Good", "Joseph explains that what they meant for harm, God used for good to save many lives."],
    "Genesis 50:22": ["Joseph's Final Years", "Joseph lives in Egypt with his family and sees future generations."],
    "Genesis 50:24": ["Promise of God's Deliverance", "Joseph tells his brothers that God will surely bring them back to the promised land."],
    "Genesis 50:25": ["Joseph's Final Request", "Joseph asks that his bones be carried back when God leads them out of Egypt."],
    "Genesis 50:26": ["Death of Joseph", "Joseph dies at the age of 110 and is placed in a coffin in Egypt."],

    // Exodus Chapter 1
    "Exodus 1:1": "Israel Multiplies in Egypt",
    "Exodus 1:8": "A New Pharaoh Oppresses Israel",
    "Exodus 1:15": "The Hebrew Midwives",

    // Exodus Chapter 2
    "Exodus 2:1": "The Birth of Moses",
    "Exodus 2:5": "Pharaoh's Daughter Finds Moses",
    "Exodus 2:11": "Moses Flees to Midian",
    "Exodus 2:16": "Moses Meets Zipporah",
    "Exodus 2:23": "God Hears Israel's Cry",

    // Exodus Chapter 3
    "Exodus 3:1": "The Burning Bush",
    "Exodus 3:7": "God's Compassion for Israel",
    "Exodus 3:10": "Moses Commissioned",
    "Exodus 3:13": "I AM WHO I AM",

    // Exodus Chapter 4
    "Exodus 4:1": "Three Signs for Moses",
    "Exodus 4:10": "Moses' Objections",
    "Exodus 4:14": "Aaron to Speak for Moses",
    "Exodus 4:18": "Moses Returns to Egypt",
    "Exodus 4:24": "The Bridegroom of Blood",
    "Exodus 4:27": "Moses Meets Aaron",

    // Exodus Chapter 5
    "Exodus 5:1": "Moses and Aaron Before Pharaoh",
    "Exodus 5:6": "Israel's Burden Increased",
    "Exodus 5:19": "The Foremen Complain to Moses",

    // Exodus Chapter 6
    "Exodus 6:1": "God Promises Deliverance",
    "Exodus 6:10": "Moses Speaks to Pharaoh Again",
    "Exodus 6:14": "The Genealogy of Moses and Aaron",

    // Exodus Chapter 7
    "Exodus 7:1": "Moses and Aaron Commissioned",
    "Exodus 7:8": "Aaron's Staff Becomes a Serpent",
    "Exodus 7:14": "First Plague — Water Turned to Blood",

    // Exodus Chapter 8
    "Exodus 8:1": "Second Plague — Frogs",
    "Exodus 8:16": "Third Plague — Gnats",
    "Exodus 8:20": "Fourth Plague — Flies",

    // Exodus Chapter 9
    "Exodus 9:1": "Fifth Plague — Livestock Disease",
    "Exodus 9:8": "Sixth Plague — Boils",
    "Exodus 9:13": "Seventh Plague — Hail",

    // Exodus Chapter 10
    "Exodus 10:1": "Eighth Plague — Locusts",
    "Exodus 10:21": "Ninth Plague — Darkness",

    // Exodus Chapter 11
    "Exodus 11:1": "The Tenth Plague Announced",
    "Exodus 11:4": "Death of the Firstborn Foretold",

    // Exodus Chapter 12
    "Exodus 12:1": "The Passover Instituted",
    "Exodus 12:21": "Instructions for the Passover",
    "Exodus 12:29": "Tenth Plague — Death of the Firstborn",
    "Exodus 12:37": "The Exodus Begins",
    "Exodus 12:43": "Passover Regulations",

    // Exodus Chapter 13
    "Exodus 13:1": "The Consecration of the Firstborn",
    "Exodus 13:17": "God Leads Israel by a Pillar of Cloud and Fire",

    // Exodus Chapter 14
    "Exodus 14:1": "Pharaoh Pursues Israel",
    "Exodus 14:10": "Israel's Fear",
    "Exodus 14:13": "The LORD Will Fight for You",
    "Exodus 14:21": "The Red Sea Parted",
    "Exodus 14:26": "The Egyptians Drowned",

    // Exodus Chapter 15
    "Exodus 15:1": "The Song of Moses",
    "Exodus 15:20": "The Song of Miriam",
    "Exodus 15:22": "The Bitter Waters of Marah",
    "Exodus 15:27": "Twelve Springs at Elim",

    // Exodus Chapter 16
    "Exodus 16:1": "The Wilderness of Sin",
    "Exodus 16:4": "God Provides Manna and Quail",
    "Exodus 16:22": "The Sabbath Rest",
    "Exodus 16:31": "The Manna Described",

    // Exodus Chapter 17
    "Exodus 17:1": "Water from the Rock",
    "Exodus 17:8": "Israel Defeats Amalek",

    // Exodus Chapter 18
    "Exodus 18:1": "Jethro Visits Moses",
    "Exodus 18:13": "Jethro's Advice",

    // Exodus Chapter 19
    "Exodus 19:1": "Israel at Mount Sinai",
    "Exodus 19:3": "The LORD's Proposal",
    "Exodus 19:16": "The LORD Descends on Sinai",

    // Exodus Chapter 20
    "Exodus 20:1": "The Ten Commandments",
    "Exodus 20:18": "The People's Fear",
    "Exodus 20:22": "Instructions About Altars",

    // Exodus Chapter 21
    "Exodus 21:1": "Laws About Servants",
    "Exodus 21:12": "Laws About Personal Injury",
    "Exodus 21:28": "Laws About Property Damage",

    // Exodus Chapter 22
    "Exodus 22:1": "Laws About Restitution",
    "Exodus 22:16": "Laws About Social Responsibility",
    "Exodus 22:21": "Laws About Mercy and Justice",

    // Exodus Chapter 23
    "Exodus 23:1": "Laws About Justice",
    "Exodus 23:10": "Sabbath Laws",
    "Exodus 23:14": "Three Annual Feasts",
    "Exodus 23:20": "God's Angel to Lead Israel",

    // Exodus Chapter 24
    "Exodus 24:1": "The Covenant Confirmed",
    "Exodus 24:9": "Moses Sees God",
    "Exodus 24:12": "Moses on the Mountain",

    // Exodus Chapter 25
    "Exodus 25:1": "Offerings for the Tabernacle",
    "Exodus 25:10": "The Ark of the Covenant",
    "Exodus 25:23": "The Table of Showbread",
    "Exodus 25:31": "The Golden Lampstand",

    // Exodus Chapter 26
    "Exodus 26:1": "The Tabernacle Curtains",
    "Exodus 26:15": "The Frames and Bases",
    "Exodus 26:31": "The Veil",

    // Exodus Chapter 27
    "Exodus 27:1": "The Altar of Burnt Offering",
    "Exodus 27:9": "The Courtyard",
    "Exodus 27:20": "Oil for the Lampstand",

    // Exodus Chapter 28
    "Exodus 28:1": "The Priestly Garments",
    "Exodus 28:6": "The Ephod",
    "Exodus 28:15": "The Breastpiece",
    "Exodus 28:31": "The Robe",
    "Exodus 28:36": "The Turban",

    // Exodus Chapter 29
    "Exodus 29:1": "Consecration of the Priests",
    "Exodus 29:38": "The Daily Offerings",

    // Exodus Chapter 30
    "Exodus 30:1": "The Altar of Incense",
    "Exodus 30:11": "The Census Tax",
    "Exodus 30:17": "The Bronze Basin",
    "Exodus 30:22": "The Anointing Oil",
    "Exodus 30:34": "The Incense",

    // Exodus Chapter 31
    "Exodus 31:1": "Bezalel and Oholiab",
    "Exodus 31:12": "The Sign of the Sabbath",
    "Exodus 31:18": "The Two Tablets",

    // Exodus Chapter 32
    "Exodus 32:1": "The Golden Calf",
    "Exodus 32:7": "God's Anger",
    "Exodus 32:11": "Moses Intercedes",
    "Exodus 32:19": "Moses' Anger",
    "Exodus 32:25": "The Levites' Zeal",
    "Exodus 32:30": "Moses Returns to the Mountain",

    // Exodus Chapter 33
    "Exodus 33:1": "God Commands Israel to Leave Sinai",
    "Exodus 33:7": "The Tent of Meeting",
    "Exodus 33:12": "Moses and God's Presence",
    "Exodus 33:18": "God's Glory Passes By",

    // Exodus Chapter 34
    "Exodus 34:1": "New Stone Tablets",
    "Exodus 34:5": "The LORD Proclaims His Name",
    "Exodus 34:10": "The Covenant Renewed",
    "Exodus 34:27": "Moses Writes the Covenant",
    "Exodus 34:29": "Moses' Radiant Face",

    // Exodus Chapter 35
    "Exodus 35:1": "The Sabbath Reminder",
    "Exodus 35:4": "Offerings for the Tabernacle",
    "Exodus 35:30": "Bezalel and Oholiab Called",

    // Exodus Chapter 36
    "Exodus 36:1": "The Tabernacle Construction Begins",
    "Exodus 36:8": "The Curtains and Coverings",

    // Exodus Chapter 37
    "Exodus 37:1": "The Ark",
    "Exodus 37:10": "The Table",
    "Exodus 37:17": "The Lampstand",
    "Exodus 37:25": "The Altar of Incense",

    // Exodus Chapter 38
    "Exodus 38:1": "The Altar of Burnt Offering",
    "Exodus 38:8": "The Bronze Basin",
    "Exodus 38:9": "The Courtyard",
    "Exodus 38:21": "The Inventory",

    // Exodus Chapter 39
    "Exodus 39:1": "The Priestly Garments Completed",
    "Exodus 39:32": "Moses Inspects the Work",

    // Exodus Chapter 40
    "Exodus 40:1": "The Tabernacle Set Up",
    "Exodus 40:34": "The Glory of the LORD Fills the Tabernacle",

    // Leviticus Chapter 1
    "Leviticus 1:1": "The Burnt Offering",

    // Leviticus Chapter 2
    "Leviticus 2:1": "The Grain Offering",

    // Leviticus Chapter 3
    "Leviticus 3:1": "The Peace Offering",

    // Leviticus Chapter 4
    "Leviticus 4:1": "The Sin Offering",
    "Leviticus 4:13": "Sin Offering for the Congregation",
    "Leviticus 4:22": "Sin Offering for a Leader",
    "Leviticus 4:27": "Sin Offering for a Common Person",

    // Leviticus Chapter 5
    "Leviticus 5:1": "Cases Requiring a Sin Offering",
    "Leviticus 5:14": "The Guilt Offering",

    // Leviticus Chapter 6
    "Leviticus 6:1": "The Guilt Offering for Deception",
    "Leviticus 6:8": "Instructions for the Burnt Offering",
    "Leviticus 6:14": "Instructions for the Grain Offering",
    "Leviticus 6:24": "Instructions for the Sin Offering",

    // Leviticus Chapter 7
    "Leviticus 7:1": "Instructions for the Guilt Offering",
    "Leviticus 7:11": "Instructions for the Peace Offering",
    "Leviticus 7:22": "Prohibition Against Fat and Blood",
    "Leviticus 7:28": "The Priests' Portion",

    // Leviticus Chapter 8
    "Leviticus 8:1": "The Consecration of Aaron and His Sons",

    // Leviticus Chapter 9
    "Leviticus 9:1": "The First Offerings of Aaron",
    "Leviticus 9:23": "The Glory of the LORD Appears",

    // Leviticus Chapter 10
    "Leviticus 10:1": "Nadab and Abihu Killed",
    "Leviticus 10:8": "Restrictions for Priests",
    "Leviticus 10:16": "Moses' Anger at Aaron's Sons",

    // Leviticus Chapter 11
    "Leviticus 11:1": "Clean and Unclean Animals",
    "Leviticus 11:24": "Laws About Carcasses",
    "Leviticus 11:46": "Summary of Food Laws",

    // Leviticus Chapter 12
    "Leviticus 12:1": "Purification After Childbirth",

    // Leviticus Chapter 13
    "Leviticus 13:1": "Laws About Skin Diseases",
    "Leviticus 13:47": "Laws About Mildew",

    // Leviticus Chapter 14
    "Leviticus 14:1": "Cleansing of Skin Diseases",
    "Leviticus 14:33": "Cleansing of Mildew in Houses",

    // Leviticus Chapter 15
    "Leviticus 15:1": "Laws About Bodily Discharges",

    // Leviticus Chapter 16
    "Leviticus 16:1": "The Day of Atonement",
    "Leviticus 16:29": "An Eternal Statute",

    // Leviticus Chapter 17
    "Leviticus 17:1": "The Sanctity of Blood",

    // Leviticus Chapter 18
    "Leviticus 18:1": "Unlawful Sexual Relations",

    // Leviticus Chapter 19
    "Leviticus 19:1": "You Shall Be Holy",
    "Leviticus 19:9": "Laws About Harvest",
    "Leviticus 19:11": "Laws About Honesty",
    "Leviticus 19:18": "Love Your Neighbor as Yourself",
    "Leviticus 19:23": "Various Laws",

    // Leviticus Chapter 20
    "Leviticus 20:1": "Punishments for Disobedience",

    // Leviticus Chapter 21
    "Leviticus 21:1": "Holiness Required of Priests",

    // Leviticus Chapter 22
    "Leviticus 22:1": "Regulations for Holy Offerings",

    // Leviticus Chapter 23
    "Leviticus 23:1": "The Appointed Feasts",
    "Leviticus 23:3": "The Sabbath",
    "Leviticus 23:4": "Passover and Unleavened Bread",
    "Leviticus 23:9": "Firstfruits",
    "Leviticus 23:15": "The Feast of Weeks",
    "Leviticus 23:23": "The Feast of Trumpets",
    "Leviticus 23:26": "The Day of Atonement",
    "Leviticus 23:33": "The Feast of Tabernacles",

    // Leviticus Chapter 24
    "Leviticus 24:1": "The Oil and the Bread",
    "Leviticus 24:10": "The Punishment for Blasphemy",

    // Leviticus Chapter 25
    "Leviticus 25:1": "The Sabbath Year",
    "Leviticus 25:8": "The Year of Jubilee",
    "Leviticus 25:23": "Redemption of Property",
    "Leviticus 25:39": "Redemption of the Poor",

    // Leviticus Chapter 26
    "Leviticus 26:1": "Blessings for Obedience",
    "Leviticus 26:14": "Curses for Disobedience",
    "Leviticus 26:40": "Repentance and Restoration",

    // Leviticus Chapter 27
    "Leviticus 27:1": "Laws About Vows and Tithes",

    // Updated...
    "Numbers 1:1": ["The Lord Commands a Census", "God tells Moses to count the men of Israel able to go to war."],
    "Numbers 1:5": ["Leaders of the Twelve Tribes Named", "One leader from each tribe is appointed."],
    "Numbers 1:17": ["Moses and Aaron Begin the Census", "They gather the community and register them by families."],
    "Numbers 1:20": ["Number of Each Tribe Counted", "Men twenty years and older are listed tribe by tribe."],
    "Numbers 1:44": ["Total Number of Fighting Men", "603,550 men counted in Israel."],
    "Numbers 1:47": ["The Levites Excluded from the Census", "Levites are not counted among the fighting men."],
    "Numbers 1:54": ["Israel Obeys the Lord’s Command", "They do everything as the Lord commanded Moses."],

    "Numbers 2:1": ["Arrangement of the Camp Around the Tabernacle", "Each tribe camps under its own banner around the Tent of Meeting."],
    "Numbers 2:3": ["Camp on the East: Judah’s Division", "Judah, Issachar, and Zebulun."],
    "Numbers 2:10": ["Camp on the South: Reuben’s Division", "Reuben, Simeon, and Gad."],
    "Numbers 2:17": ["The Levites in the Center", "The Tabernacle in the middle of the camp."],
    "Numbers 2:18": ["Camp on the West: Ephraim’s Division", "Ephraim, Manasseh, and Benjamin."],
    "Numbers 2:25": ["Camp on the North: Dan’s Division", "Dan, Asher, and Naphtali."],
    "Numbers 2:32": ["Total and Order of March", "603,550 men; Israel camps and moves as the Lord commands."],

    "Numbers 3:1": ["Sons of Aaron Named", "Nadab, Abihu, Eleazar, and Ithamar; Nadab and Abihu died before the Lord."],
    "Numbers 3:5": ["The Levites Appointed for Service", "Levites assigned to assist Aaron and guard the Tabernacle."],
    "Numbers 3:11": ["The Levites Taken Instead of the Firstborn", "Levites belong to the Lord in place of Israel’s firstborn."],
    "Numbers 3:14": ["Census of the Levite Families", "Gershon, Kohath, and Merari."],
    "Numbers 3:21": ["Duties of the Gershonites", "Care of curtains and coverings."],
    "Numbers 3:27": ["Duties of the Kohathites", "Care of the holy furnishings."],
    "Numbers 3:33": ["Duties of the Merarites", "Care of frames, pillars, and bases."],
    "Numbers 3:38": ["Moses and Aaron Camp on the East", "Guard the sanctuary."],
    "Numbers 3:40": ["Census of the Firstborn of Israel", "All firstborn males counted."],
    "Numbers 3:44": ["Redemption of the Firstborn", "Levites taken in their place; extra firstborn redeemed with silver."],

    "Numbers 4:1": ["Census of the Kohathites", "Men aged 30–50 counted for service in the Tent of Meeting."],
    "Numbers 4:4": ["Duties of the Kohathites", "They carry the most holy items after Aaron covers them."],
    "Numbers 4:16": ["Responsibility of Eleazar", "Oversight of oil, incense, grain offering, and sacred items."],
    "Numbers 4:17": ["Warning to Protect the Kohathites", "They must not look at holy things or they will die."],
    "Numbers 4:21": ["Census of the Gershonites", "Men aged 30–50 counted for service."],
    "Numbers 4:24": ["Duties of the Gershonites", "They carry curtains, coverings, and hangings."],
    "Numbers 4:29": ["Census of the Merarites", "Men aged 30–50 counted for service."],
    "Numbers 4:31": ["Duties of the Merarites", "They carry frames, posts, bases, and equipment."],
    "Numbers 4:34": ["Total Number of Levites in Service", "All counted and assigned duties as the Lord commanded."],

    "Numbers 5:1": ["Removal of the Unclean from the Camp", "Those with defilement must stay outside the camp."],
    "Numbers 5:5": ["Confession and Restitution for Sin", "Anyone who wrongs another must confess and make full repayment."],
    "Numbers 5:11": ["Law of Jealousy Introduced", "Procedure when a husband suspects his wife of unfaithfulness."],
    "Numbers 5:16": ["The Bitter Water Test", "Priest administers the test before the Lord."],
    "Numbers 5:23": ["Outcome of the Test", "Innocence or guilt revealed by God."],
    "Numbers 5:29": ["Summary of the Jealousy Law", "The husband is free from guilt; the woman bears the result."],

    "Numbers 6:1": ["The Nazirite Vow", "A person separates himself to the Lord with special restrictions."],
    "Numbers 6:9": ["Accidental Defilement During the Vow", "If defiled, the vow period must begin again."],
    "Numbers 6:13": ["Offerings at the Completion of the Vow", "Sacrifices and rituals when the Nazirite vow ends."],
    "Numbers 6:22": ["The Lord Instructs the Priestly Blessing", "God tells Aaron how to bless the people."],
    "Numbers 6:24": ["The Priestly Blessing", "The Lord bless you and keep you."],
    "Numbers 6:27": ["God’s Name Placed on Israel", "The Lord promises to bless them."],

    "Numbers 7:1": ["Offerings for the Tabernacle Dedication", "Leaders bring carts and oxen for the service of the Levites."],
    "Numbers 7:10": ["Leaders Present Dedication Offerings", "Each tribal leader brings an offering on a separate day."],
    "Numbers 7:12": ["Day 1: Offering of Nahshon (Judah)", "Judah’s leader presents his offering for the dedication."],
    "Numbers 7:18": ["Day 2: Offering of Nethanel (Issachar)", "Issachar’s leader presents his offering."],
    "Numbers 7:24": ["Day 3: Offering of Eliab (Zebulun)", "Zebulun’s leader presents his offering."],
    "Numbers 7:30": ["Day 4: Offering of Elizur (Reuben)", "Reuben’s leader presents his offering."],
    "Numbers 7:36": ["Day 5: Offering of Shelumiel (Simeon)", "Simeon’s leader presents his offering."],
    "Numbers 7:42": ["Day 6: Offering of Eliasaph (Gad)", "Gad’s leader presents his offering."],
    "Numbers 7:48": ["Day 7: Offering of Elishama (Ephraim)", "Ephraim’s leader presents his offering."],
    "Numbers 7:54": ["Day 8: Offering of Gamaliel (Manasseh)", "Manasseh’s leader presents his offering."],
    "Numbers 7:60": ["Day 9: Offering of Abidan (Benjamin)", "Benjamin’s leader presents his offering."],
    "Numbers 7:66": ["Day 10: Offering of Ahiezer (Dan)", "Dan’s leader presents his offering."],
    "Numbers 7:72": ["Day 11: Offering of Pagiel (Asher)", "Asher’s leader presents his offering."],
    "Numbers 7:78": ["Day 12: Offering of Ahira (Naphtali)", "Naphtali’s leader presents his offering."],
    "Numbers 7:84": ["Summary of the Dedication Offerings", "Total of silver, gold, animals, and grain offerings."],
    "Numbers 7:89": ["The Lord Speaks from the Mercy Seat", "Moses hears God’s voice from above the Ark."],

    "Numbers 8:1": ["The Lampstand Arranged", "Aaron sets up the lamps to shine toward the front."],
    "Numbers 8:5": ["Cleansing of the Levites", "They are purified with water, shaving, and washing."],
    "Numbers 8:8": ["Dedication of the Levites", "The Levites are presented before the Lord in place of the firstborn."],
    "Numbers 8:15": ["Levites Given to Aaron for Service", "They serve in the Tent of Meeting and make atonement for Israel."],
    "Numbers 8:20": ["The Levites Obey the Lord’s Command", "They are cleansed and begin their service."],
    "Numbers 8:23": ["Age Limits for Levite Service", "They serve from age 25 to 50, then assist but do not carry heavy duties."],

    "Numbers 9:1": ["The Passover Observed in the Wilderness", "Israel keeps the Passover as the Lord commanded."],
    "Numbers 9:6": ["Question About the Unclean", "Some men who were unclean ask if they may keep the Passover."],
    "Numbers 9:9": ["The Second Passover Given", "Provision made for those unclean or on a journey."],
    "Numbers 9:15": ["The Cloud Covers the Tabernacle", "By day a cloud and by night fire."],
    "Numbers 9:17": ["Israel Guided by the Cloud", "They travel or camp according to the Lord’s command."],

    "Numbers 10:1": ["The Silver Trumpets", "Trumpets used to call the assembly and signal movement."],
    "Numbers 10:11": ["Israel Leaves Sinai", "The cloud lifts and the people begin their journey."],
    "Numbers 10:14": ["Order of March", "Each tribe sets out in appointed order."],
    "Numbers 10:29": ["Moses Invites Hobab", "Moses asks him to guide them through the wilderness."],
    "Numbers 10:33": ["The Ark Leads the Way", "Moses prays when they set out and when they rest."],

    "Numbers 11:1": ["Fire at Taberah", "The people complain; the Lord sends fire; Moses prays."],
    "Numbers 11:4": ["Complaints About Food", "They crave meat and despise the manna."],
    "Numbers 11:10": ["Moses’ Burden and Prayer", "Moses feels overwhelmed and cries out to God."],
    "Numbers 11:16": ["Seventy Elders Appointed", "God shares Moses’ burden with seventy leaders."],
    "Numbers 11:18": ["Promise of Meat for a Month", "God says they will eat meat until they are sick of it."],
    "Numbers 11:24": ["The Spirit Rests on the Elders", "They prophesy; even Eldad and Medad speak in the camp."],
    "Numbers 11:31": ["Quail Sent and Judgment Falls", "Quail cover the camp; a plague strikes those who complained."],

    "Numbers 12:1": ["Miriam and Aaron Oppose Moses", "They speak against Moses because of his Cushite wife."],
    "Numbers 12:4": ["The Lord Defends Moses", "God declares Moses faithful and speaks to him face to face."],
    "Numbers 12:9": ["Miriam Struck with Leprosy", "The Lord’s anger burns; Miriam becomes leprous."],
    "Numbers 12:11": ["Aaron Pleads for Mercy", "He asks Moses not to hold the sin against them."],
    "Numbers 12:13": ["Moses Prays for Miriam", "O God, please heal her."],
    "Numbers 12:14": ["Miriam Is Shut Out of the Camp", "She stays outside for seven days."],
    "Numbers 12:16": ["Israel Moves On", "After Miriam is restored, the camp travels again."],

    "Numbers 13:1": ["The Lord Commands Spies to Be Sent", "Twelve men, one from each tribe, are chosen."],
    "Numbers 13:4": ["Names of the Twelve Spies", "Joshua is named among them."],
    "Numbers 13:17": ["Instructions for Exploring the Land", "They are told to observe the land, people, cities, and fruit."],
    "Numbers 13:21": ["Spies Explore Canaan", "They travel through the land and cut a large cluster of grapes."],
    "Numbers 13:25": ["Report of the Land and Its People", "The land is fruitful, but the cities are fortified and the people strong."],
    "Numbers 13:30": ["Caleb’s Faithful Response", "We should go up and take possession of the land."],
    "Numbers 13:31": ["The Negative Report", "Ten spies spread fear; they say the people are like giants."],

    "Numbers 14:1": ["Israel Rebels and Complains", "The people weep, wish to return to Egypt, and talk of choosing a new leader."],
    "Numbers 14:5": ["Joshua and Caleb Encourage Faith", "They urge the people to trust the Lord and not fear."],
    "Numbers 14:10": ["The People Threaten to Stone Them", "The glory of the Lord appears at the Tent of Meeting."],
    "Numbers 14:11": ["The Lord Speaks of Judgment", "God speaks of striking the people for their unbelief."],
    "Numbers 14:13": ["Moses Intercedes for Israel", "Moses appeals to God’s mercy and reputation among the nations."],
    "Numbers 14:20": ["God Pardons but Declares Consequences", "The unbelieving generation will not enter the Promised Land."],
    "Numbers 14:24": ["Caleb’s Different Spirit", "Caleb will enter the land because he followed the Lord fully."],
    "Numbers 14:26": ["Judgment of Forty Years", "The people will wander in the wilderness for forty years."],
    "Numbers 14:36": ["Death of the Ten Spies", "The spies who spread fear die by plague."],
    "Numbers 14:39": ["Defeat After Presumption", "The people attempt to enter the land without God’s presence and are defeated."],

    "Numbers 15:1": ["Offerings in the Promised Land", "Instructions for grain and drink offerings with sacrifices."],
    "Numbers 15:17": ["Offering of First Dough", "A portion of the first batch is given to the Lord."],
    "Numbers 15:22": ["Atonement for Unintentional Sin", "Sacrifice required when the community sins unknowingly."],
    "Numbers 15:30": ["Judgment for Defiant Sin", "Anyone who sins deliberately must be cut off."],
    "Numbers 15:32": ["The Sabbath Breaker Stoned", "A man gathering wood on the Sabbath is punished."],
    "Numbers 15:37": ["Tassels on Garments", "Blue tassels remind Israel to obey God’s commands."],

    "Numbers 16:1": ["Korah’s Rebellion Begins", "Korah, Dathan, and Abiram challenge Moses and Aaron."],
    "Numbers 16:4": ["Moses Calls for a Test Before the Lord", "Each man is to offer incense; the Lord will show whom He has chosen."],
    "Numbers 16:8": ["Moses Rebukes the Levites", "They seek the priesthood wrongly."],
    "Numbers 16:12": ["Dathan and Abiram Refuse to Come", "They accuse Moses of leading them wrongly."],
    "Numbers 16:15": ["The Incense Test Prepared", "Rebels gather at the Tent of Meeting."],
    "Numbers 16:20": ["The Lord Warns the Assembly", "God tells the people to move away from the rebels."],
    "Numbers 16:25": ["Moses Declares God’s Judgment", "If the earth opens, it will prove God has sent him."],
    "Numbers 16:31": ["The Earth Swallows the Rebels", "Korah’s group is destroyed; fire consumes those offering incense."],
    "Numbers 16:36": ["Bronze Censers Made into a Covering", "Reminder that only chosen priests may offer incense."],
    "Numbers 16:41": ["The People Complain Again", "They accuse Moses and Aaron."],
    "Numbers 16:46": ["Plague Stopped by Intercession", "Aaron stands between the living and the dead; the plague stops."],

    "Numbers 17:1": ["Twelve Staffs Presented Before the Lord", "One staff from each tribe placed in the Tent of Meeting."],
    "Numbers 17:6": ["Staffs Laid Before the Ark", "Moses places them before the Lord."],
    "Numbers 17:8": ["Aaron’s Staff Buds and Blossoms", "It sprouts, blossoms, and produces almonds."],
    "Numbers 17:9": ["Staffs Returned to the Leaders", "Only Aaron’s staff shows God’s choice."],
    "Numbers 17:10": ["Aaron’s Staff Kept as a Sign", "Placed before the Ark as a reminder against rebellion."],
    "Numbers 17:12": ["The People’s Fear", "They fear coming near the Lord."],

    "Numbers 18:1": ["Duties of Priests and Levites", "Aaron and his sons bear responsibility for the sanctuary; Levites assist but cannot approach the altar."],
    "Numbers 18:8": ["Priests’ Portion from the Offerings", "Holy offerings, firstfruits, and dedicated gifts belong to the priests."],
    "Numbers 18:20": ["The Lord Is Aaron’s Inheritance", "Priests receive no land; God Himself is their portion."],
    "Numbers 18:21": ["Tithes Given to the Levites", "Levites receive the tenth from Israel for their service."],
    "Numbers 18:25": ["Tithe of the Tithe", "Levites must give a tenth of their tithe to the priests."],
    "Numbers 18:29": ["Offer the Best to the Lord", "They must present the best portion as holy."],

    "Numbers 19:1": ["The Law of the Red Heifer", "A red heifer without defect is required for purification."],
    "Numbers 19:3": ["Preparation of the Ashes", "The heifer is burned outside the camp; its ashes kept for cleansing water."],
    "Numbers 19:11": ["Uncleanness from Contact with the Dead", "Anyone who touches a dead body becomes unclean for seven days."],
    "Numbers 19:14": ["The Water of Purification", "Sprinkling with the water cleanses from ceremonial defilement."],
    "Numbers 19:20": ["Warning Against Neglecting Purification", "Failure to cleanse results in being cut off from the community."],

    "Numbers 20:1": ["Death of Miriam", "Miriam dies and is buried at Kadesh."],
    "Numbers 20:2": ["The People Complain About Water", "They quarrel with Moses and Aaron."],
    "Numbers 20:6": ["The Lord’s Instruction at the Rock", "God tells Moses to speak to the rock."],
    "Numbers 20:9": ["Moses Strikes the Rock", "Water flows, but Moses does not follow God’s exact command."],
    "Numbers 20:12": ["Moses and Aaron Forbidden to Enter the Land", "Because they did not honor God before the people."],
    "Numbers 20:14": ["Edom Refuses Passage", "Edom denies Israel permission to pass through."],
    "Numbers 20:22": ["Death of Aaron", "Aaron’s priestly garments passed to Eleazar on Mount Hor."],
    "Numbers 20:27": ["Israel Mourns Aaron", "The whole community mourns for thirty days."],

    "Numbers 21:1": ["Victory Over the Canaanite King of Arad", "Israel defeats Arad after making a vow to the Lord."],
    "Numbers 21:4": ["The People Complain Again", "They grow impatient and speak against God and Moses."],
    "Numbers 21:6": ["The Bronze Serpent", "Fiery serpents bite the people; Moses lifts up a bronze serpent for healing."],
    "Numbers 21:10": ["Journey Through the Wilderness", "Israel travels and camps in different places."],
    "Numbers 21:16": ["The Well at Beer", "The people sing when the Lord provides water."],
    "Numbers 21:19": ["Continued Journey Toward Moab", "They move closer to the land of Moab."],
    "Numbers 21:21": ["Defeat of King Sihon", "Israel defeats the Amorite king and takes his land."],
    "Numbers 21:26": ["Song of Victory Over the Amorites", "A poem recounts the conquest."],
    "Numbers 21:31": ["Capture of Jazer", "Israel defeats nearby settlements."],
    "Numbers 21:33": ["Defeat of King Og of Bashan", "Israel defeats Og and takes his territory."],

    "Numbers 22:1": ["Balak Fears Israel", "Moab’s king is afraid because of Israel’s victories."],
    "Numbers 22:5": ["Balak Sends for Balaam", "Messengers ask Balaam to curse Israel; God tells him not to go."],
    "Numbers 22:15": ["Second Invitation to Balaam", "Balak sends more honored officials; God permits Balaam to go with conditions."],
    "Numbers 22:22": ["The Angel and the Donkey", "The donkey sees the angel; Balaam does not."],
    "Numbers 22:28": ["The Donkey Speaks", "God opens the donkey’s mouth."],
    "Numbers 22:31": ["Balaam Sees the Angel", "The angel warns Balaam to speak only what God says."],
    "Numbers 22:36": ["Balaam Meets Balak", "Balak welcomes Balaam; sacrifices are offered."],

    "Numbers 23:1": ["Balaam Prepares to Speak", "Altars are built; Balaam seeks the Lord’s message."],
    "Numbers 23:7": ["Balaam’s First Oracle", "He blesses Israel instead of cursing them."],
    "Numbers 23:11": ["Balak’s Disappointment", "Balak protests; Balaam insists he must speak God’s words."],
    "Numbers 23:13": ["Second Attempt to Curse Israel", "Balak takes Balaam to another place."],
    "Numbers 23:18": ["Balaam’s Second Oracle", "God does not lie; Israel is blessed and victorious."],
    "Numbers 23:25": ["Balak’s Frustration", "Balak asks Balaam not to bless or curse."],
    "Numbers 23:27": ["Third Attempt from Another Location", "Balak tries once more to change the outcome."],

    "Numbers 24:1": ["Balaam Sees Israel and the Spirit Comes Upon Him", "He does not seek omens; the Spirit of God speaks through him."],
    "Numbers 24:3": ["Balaam’s Third Oracle", "Israel is blessed, prosperous, and victorious."],
    "Numbers 24:10": ["Balak’s Anger and Balaam’s Response", "Balak is furious; Balaam says he can speak only what God says."],
    "Numbers 24:15": ["Balaam’s Fourth Oracle (Star and Scepter)", "A future ruler will arise from Israel and defeat its enemies."],
    "Numbers 24:20": ["Oracle Against Amalek", "Amalek will face destruction."],
    "Numbers 24:21": ["Oracle Against the Kenites", "Though secure, they will be taken captive."],
    "Numbers 24:23": ["Oracle About Future Nations", "Prophecy concerning distant kingdoms and future conflict."],
    "Numbers 24:25": ["Balaam Departs", "Balaam and Balak return home."],

    "Numbers 25:1": ["Israel Falls into Sin at Peor", "The people commit immorality and worship Baal of Peor."],
    "Numbers 25:4": ["The Lord’s Anger Burns", "Leaders involved in sin are judged."],
    "Numbers 25:6": ["Phinehas Stops the Plague", "He acts zealously; the plague ends after many die."],
    "Numbers 25:10": ["Covenant of Peace with Phinehas", "God grants him a lasting priesthood."],
    "Numbers 25:14": ["Names of the Offenders", "The Israelite man and Midianite woman identified."],
    "Numbers 25:16": ["Command to Oppose the Midianites", "Israel is told to treat Midian as enemies."],

    "Numbers 26:1": ["The Lord Commands a Second Census", "Moses and Eleazar count the new generation after the plague."],
    "Numbers 26:5": ["Census of Reuben’s Tribe", "Includes mention of Korah’s rebellion."],
    "Numbers 26:12": ["Census of Simeon’s Tribe", "Families of Simeon counted."],
    "Numbers 26:15": ["Census of Gad’s Tribe", "Families of Gad counted."],
    "Numbers 26:19": ["Census of Judah’s Tribe", "Families of Judah counted."],
    "Numbers 26:23": ["Census of Issachar’s Tribe", "Families of Issachar counted."],
    "Numbers 26:26": ["Census of Zebulun’s Tribe", "Families of Zebulun counted."],
    "Numbers 26:28": ["Census of Joseph’s Tribe (Manasseh and Ephraim)", "Families of Joseph’s tribes counted."],
    "Numbers 26:35": ["Census of Benjamin’s Tribe", "Families of Benjamin counted."],
    "Numbers 26:38": ["Census of Dan’s Tribe", "Families of Dan counted."],
    "Numbers 26:42": ["Census of Asher’s Tribe", "Families of Asher counted."],
    "Numbers 26:44": ["Census of Naphtali’s Tribe", "Families of Naphtali counted."],
    "Numbers 26:48": ["Total Number of Fighting Men", "601,730 men counted."],
    "Numbers 26:52": ["Division of the Land by Lot", "Land to be distributed according to tribe size."],
    "Numbers 26:57": ["Census of the Levites", "Levites counted separately; they receive no land."],
    "Numbers 26:63": ["The New Generation Confirmed", "None from the first census remain except Joshua and Caleb."],

    "Numbers 27:1": ["Daughters of Zelophehad Make Their Request", "They ask for their father’s inheritance since he had no sons."],
    "Numbers 27:5": ["The Lord Approves Their Request", "God commands that they receive their father’s inheritance."],
    "Numbers 27:8": ["Law of Inheritance Established", "Rules given for inheritance when there is no son."],
    "Numbers 27:12": ["Moses Told He Will See the Promised Land", "Because of his disobedience at Meribah, he will not enter it."],
    "Numbers 27:15": ["Moses Asks for a New Leader", "He asks God to appoint someone to lead Israel."],
    "Numbers 27:18": ["Joshua Chosen as Successor", "Joshua is appointed and receives authority."],
    "Numbers 27:22": ["Joshua Commissioned Before Israel", "Moses lays hands on Joshua as the new leader."],

    "Numbers 28:1": ["Command to Present Regular Offerings", "Israel must present offerings to the Lord at the appointed times."],
    "Numbers 28:3": ["The Daily Offerings", "Two lambs offered each day, morning and evening."],
    "Numbers 28:9": ["The Sabbath Offerings", "Additional offerings presented on the Sabbath."],
    "Numbers 28:11": ["The Monthly Offerings", "Special sacrifices offered at the beginning of each month."],
    "Numbers 28:16": ["Offerings for Passover and the Feast of Unleavened Bread", "Sacrifices during the festival remembering deliverance from Egypt."],
    "Numbers 28:26": ["Offerings for the Feast of Weeks", "Special offerings during the harvest celebration."],

    "Numbers 29:1": ["Offerings for the Feast of Trumpets", "Sacrifices offered on the first day of the seventh month."],
    "Numbers 29:7": ["Offerings for the Day of Atonement", "Special sacrifices presented on the sacred day of repentance."],
    "Numbers 29:12": ["Offerings for the Feast of Tabernacles", "Daily sacrifices offered during the seven-day festival."],
    "Numbers 29:35": ["Offerings for the Eighth Day Assembly", "A sacred assembly with its own sacrifices."],
    "Numbers 29:39": ["Summary of Festival Offerings", "These offerings are in addition to regular vows and freewill offerings."],

    "Numbers 30:1": ["Importance of Keeping Vows", "A man must keep the vow he makes to the Lord."],
    "Numbers 30:3": ["Vows of an Unmarried Woman", "Her father may confirm or cancel her vow."],
    "Numbers 30:6": ["Vows of a Married Woman", "Her husband may confirm or cancel the vow."],
    "Numbers 30:9": ["Vows of a Widow or Divorced Woman", "Her vow stands and must be fulfilled."],
    "Numbers 30:10": ["Vows of a Wife in Her Husband’s House", "The husband may approve or nullify her vows."],
    "Numbers 30:16": ["Summary of the Law of Vows", "These laws were given by the Lord to Moses."],

    "Numbers 31:1": ["Israel Sent to War Against Midian", "Moses sends 12,000 men with Phinehas and the holy articles."],
    "Numbers 31:7": ["Victory Over Midian", "Israel defeats the Midianites and captures people and goods."],
    "Numbers 31:13": ["Moses Rebukes the Soldiers", "He reminds them that Midian led Israel into sin."],
    "Numbers 31:19": ["Purification After Battle", "Soldiers and captured items must be cleansed."],
    "Numbers 31:25": ["Division of the Spoils", "The plunder is divided between soldiers and the community."],
    "Numbers 31:32": ["Count and Distribution of the Plunder", "Animals, goods, and people are carefully divided."],
    "Numbers 31:48": ["Leaders Offer Gold to the Lord", "They give a thank offering because no soldiers were lost."],

    "Numbers 32:1": ["Request of Reuben and Gad", "They ask to settle east of the Jordan because the land is good for livestock."],
    "Numbers 32:6": ["Moses Warns Them", "He reminds them of the previous generation’s rebellion."],
    "Numbers 32:16": ["Promise to Help Conquer the Land", "They agree to fight with Israel before returning to their land."],
    "Numbers 32:20": ["Moses Accepts Their Agreement", "They must fulfill their promise before settling."],
    "Numbers 32:28": ["Agreement Confirmed Before Leaders", "Joshua and the leaders are instructed about the arrangement."],
    "Numbers 32:33": ["Land Given East of the Jordan", "Reuben, Gad, and half the tribe of Manasseh receive the territory."],

    "Numbers 33:1": ["Israel’s Departure from Egypt", "Moses records their journey from Egypt."],
    "Numbers 33:5": ["List of Israel’s Journeys", "The stages of travel from Egypt to the plains of Moab."],
    "Numbers 33:50": ["Command to Drive Out the Inhabitants", "Israel must remove the Canaanites and destroy their idols."],
    "Numbers 33:54": ["Division of the Land by Lot", "The land is to be distributed among the tribes."],
    "Numbers 33:55": ["Warning About Disobedience", "If the people are not driven out, they will become trouble for Israel."],

    "Numbers 34:1": ["The Lord Defines the Land of Canaan", "God gives the boundaries of the land Israel will inherit."],
    "Numbers 34:3": ["Southern Boundary of the Land", "From the wilderness of Zin to the Brook of Egypt."],
    "Numbers 34:6": ["Western Boundary", "The Great Sea (Medititerranean Sea) forms the western border."],
    "Numbers 34:7": ["Northern Boundary", "From Mount Hor through Lebo-hamath to Zedad."],
    "Numbers 34:10": ["Eastern Boundary", "From Hazar-enan down along the Jordan River to the Dead Sea."],
    "Numbers 34:13": ["Land Assigned to Nine and a Half Tribes", "Reuben, Gad, and half of Manasseh had already received land east of the Jordan."],
    "Numbers 34:16": ["Leaders Appointed to Divide the Land", "Eleazar the priest, Joshua, and tribal leaders were appointed to distribute the land."],

    "Numbers 35:1": ["Cities for the Levites", "The Levites receive cities and pasturelands from the tribes."],
    "Numbers 35:6": ["Six Cities of Refuge", "Special cities where someone who killed accidentally can flee."],
    "Numbers 35:9": ["Purpose of the Cities of Refuge", "Protection for those who caused death unintentionally."],
    "Numbers 35:16": ["Murder Punished by Death", "Intentional murder requires the death penalty."],
    "Numbers 35:22": ["Protection for Accidental Killing", "The accused must stay in the city of refuge until judgment."],
    "Numbers 35:26": ["Leaving the City of Refuge", "If the person leaves early, the avenger may kill him."],
    "Numbers 35:29": ["Laws of Justice and Protection of the Land", "Bloodshed defiles the land; justice must be upheld."],

    "Numbers 36:1": ["Concern About Inheritance Transfer", "Leaders of Manasseh worry that land may pass to other tribes through marriage."],
    "Numbers 36:5": ["God’s Command About Tribal Inheritance", "Women who inherit land must marry within their own tribe."],
    "Numbers 36:10": ["Daughters of Zelophehad Obey the Command", "They marry within the tribe of Manasseh."],
    "Numbers 36:13": ["Conclusion of the Laws Given in Moab", "These are the commands given through Moses near the Jordan."],

    // Updated...
    "Deuteronomy 1:1": ["Moses Begins His Address", "Moses speaks to all Israel in the wilderness, reminding them of the journey and the commands the Lord gave them."],
    "Deuteronomy 1:6": ["Command to Leave Mount Horeb", "The Lord tells Israel that they have stayed long enough at Horeb and should move forward to possess the land promised to their ancestors."],
    "Deuteronomy 1:9": ["Appointment of Leaders", "Moses explains that he could not bear the burden of leading alone, so leaders and judges were appointed for each tribe."],
    "Deuteronomy 1:19": ["Journey Toward the Promised Land", "Israel travels through the wilderness and reaches Kadesh-barnea near the land the Lord promised them."],
    "Deuteronomy 1:22": ["Spies Sent into Canaan", "The people ask to send men to explore the land ahead and bring back a report."],
    "Deuteronomy 1:26": ["Israel Refuses to Enter the Land", "After hearing the report, the people rebel against the Lord and refuse to go up and possess the land."],
    "Deuteronomy 1:34": ["Judgment on the Unbelieving Generation", "The Lord becomes angry and declares that the generation that left Egypt will not enter the promised land."],
    "Deuteronomy 1:37": ["Moses Also Forbidden to Enter", "Because of the people’s actions, Moses is also told that he will not enter the promised land."],
    "Deuteronomy 1:38": ["Joshua Appointed as Leader", "Joshua, who serves Moses, will enter the land and lead Israel to possess it."],
    "Deuteronomy 1:41": ["Israel’s Presumptuous Attack", "The people try to go up and fight after God’s warning, but they are defeated by their enemies."],
    "Deuteronomy 1:45": ["Israel Weeps but God Does Not Listen", "The people return and weep before the Lord, but He does not listen because of their earlier rebellion."],

    "Deuteronomy 2:1": ["Israel Turns Toward the Wilderness", "After their defeat, Israel travels back toward the wilderness and spends many years wandering around Mount Seir."],
    "Deuteronomy 2:2": ["Command to Move North", "The Lord tells Israel that they have circled the hill country long enough and must now turn north."],
    "Deuteronomy 2:4": ["Passing Through Edom", "God instructs Israel to pass through the territory of their relatives, the descendants of Esau, without provoking them."],
    "Deuteronomy 2:8": ["Journey Past Edom", "Israel travels past the land of Edom and continues their journey toward the wilderness of Moab."],
    "Deuteronomy 2:9": ["Do Not Disturb Moab", "The Lord commands Israel not to fight Moab because He has given their land to the descendants of Lot."],
    "Deuteronomy 2:13": ["Crossing the Zered Valley", "The Lord tells Israel to cross the Valley of Zered as the new generation continues the journey."],
    "Deuteronomy 2:16": ["End of the First Generation", "After the older generation dies in the wilderness, the Lord instructs Israel to move forward."],
    "Deuteronomy 2:18": ["Passing Through Moab", "Israel is told to pass near the territory of Moab without attacking them."],
    "Deuteronomy 2:24": ["Command to Fight Sihon", "God tells Israel to begin taking possession of the land by confronting Sihon king of the Amorites."],
    "Deuteronomy 2:26": ["Moses Sends a Message of Peace", "Moses sends messengers to Sihon asking for peaceful passage through his land."],
    "Deuteronomy 2:30": ["Sihon Refuses Peace", "Sihon refuses to allow Israel to pass because the Lord had hardened his spirit for judgment."],
    "Deuteronomy 2:32": ["Defeat of Sihon", "Israel fights against Sihon and defeats him, capturing his cities and land."],

    "Deuteronomy 3:1": ["Defeat of King Og of Bashan", "Israel turns toward Bashan, and the Lord delivers Og king of Bashan into their hands, giving Israel victory over him and his land."],
    "Deuteronomy 3:4": ["Capture of the Cities of Bashan", "Israel captures all the fortified cities of Og’s kingdom, taking the entire region of Bashan."],
    "Deuteronomy 3:8": ["Land East of the Jordan Taken", "The territories of Sihon and Og east of the Jordan are taken and become Israel’s possession."],
    "Deuteronomy 3:12": ["Land Given to the Eastern Tribes", "The land east of the Jordan is given to the tribes of Reuben, Gad, and half the tribe of Manasseh."],
    "Deuteronomy 3:18": ["Command for the Eastern Tribes to Help", "Moses reminds these tribes that their men must cross the Jordan and help the rest of Israel conquer the land."],
    "Deuteronomy 3:21": ["Encouragement to Joshua", "Moses tells Joshua that just as the Lord defeated the kings they have seen, He will also defeat the kingdoms ahead."],
    "Deuteronomy 3:23": ["Moses Pleads to Enter the Land", "Moses asks the Lord to allow him to cross the Jordan and see the good land promised to Israel."],
    "Deuteronomy 3:26": ["God Refuses Moses’ Request", "The Lord tells Moses that he will not cross the Jordan but will only view the land from the mountain."],
    "Deuteronomy 3:28": ["Joshua Appointed to Lead Israel", "Moses is instructed to encourage Joshua because he will lead the people into the promised land."],

    "Deuteronomy 4:1": ["Call to Obey God's Law", "Moses urges Israel to listen to the statutes and obey them so they may live and enter the land the Lord is giving them."],
    "Deuteronomy 4:9": ["Remember What God Has Done", "The people are warned not to forget what they have seen and to teach God's works to their children."],
    "Deuteronomy 4:15": ["Warning Against Idolatry", "Since Israel saw no form when God spoke at Horeb, they must not make idols or images of any kind."],
    "Deuteronomy 4:25": ["Consequences of Idolatry", "Moses warns that if Israel turns to idols, they will be scattered among the nations."],
    "Deuteronomy 4:29": ["Promise of Restoration", "If the people seek the Lord with all their heart after being scattered, they will find Him."],
    "Deuteronomy 4:32": ["The Greatness of God", "Moses reminds Israel that no other nation has experienced God's mighty acts like they have."],
    "Deuteronomy 4:41": ["Cities of Refuge East of the Jordan", "Moses sets apart three cities of refuge for those who accidentally cause death."],
    "Deuteronomy 4:44": ["Introduction to the Law", "This section introduces the law Moses sets before the people of Israel."],

    "Deuteronomy 5:1": ["Call to Hear the Covenant", "Moses gathers all Israel and calls them to hear and learn the statutes and judgments given by the Lord."],
    "Deuteronomy 5:6": ["The Ten Commandments Declared", "God reminds Israel that He brought them out of Egypt and begins declaring His commandments."],
    "Deuteronomy 5:7": ["Command Against Other Gods", "Israel is commanded to worship the Lord alone and have no other gods."],
    "Deuteronomy 5:11": ["Command About God's Name", "The people must not misuse the name of the Lord their God."],
    "Deuteronomy 5:12": ["Command to Keep the Sabbath", "Israel is instructed to observe the Sabbath day and keep it holy."],
    "Deuteronomy 5:16": ["Command to Honor Parents", "Children are commanded to honor their father and mother so that they may live long in the land."],
    "Deuteronomy 5:17": ["Commands Concerning Human Conduct", "God gives commands against murder, adultery, theft, and false testimony."],
    "Deuteronomy 5:21": ["Command Against Coveting", "The people are warned not to desire what belongs to their neighbors."],
    "Deuteronomy 5:22": ["God Speaks from the Mountain", "The Lord speaks these commandments to all Israel from the fire, cloud, and darkness."],
    "Deuteronomy 5:23": ["The People Fear God's Voice", "The leaders ask Moses to speak with God on their behalf because they fear hearing God's voice directly."],
    "Deuteronomy 5:28": ["God Commends Their Reverence", "The Lord says the people spoke well in fearing Him and desires that they would always keep His commands."],
    "Deuteronomy 5:31": ["Moses Receives the Law", "God tells Moses to remain and receive all the commands to teach Israel."],

    "Deuteronomy 6:1": ["Call to Obey the Commands", "Moses reminds Israel that these commands are given so they may fear the Lord, live long, and prosper in the land."],
    "Deuteronomy 6:4": ["The Lord Is One", "Israel is called to hear that the Lord alone is God."],
    "Deuteronomy 6:5": ["Love the Lord Fully", "The people are commanded to love the Lord their God with all their heart, soul, and strength."],
    "Deuteronomy 6:6": ["Teach God's Words Diligently", "God's commandments must remain in the heart and be taught carefully to the children."],
    "Deuteronomy 6:10": ["Warning Not to Forget the Lord", "When Israel prospers in the land, they must not forget the Lord who delivered them from Egypt."],
    "Deuteronomy 6:13": ["Fear and Serve the Lord", "The people must fear the Lord, serve Him alone, and take their oaths in His name."],
    "Deuteronomy 6:16": ["Do Not Test the Lord", "Israel must not test the Lord as they did at Massah."],
    "Deuteronomy 6:20": ["Teaching Future Generations", "When children ask about the commands, parents must explain how the Lord delivered Israel from Egypt and gave them His laws."],

    "Deuteronomy 7:1": ["Drive Out the Nations", "The Lord promises to bring Israel into the land and commands them to drive out the surrounding nations."],
    "Deuteronomy 7:2": ["Destroy Idolatry Completely", "Israel must not make covenants with the nations or show mercy, but must destroy their idols."],
    "Deuteronomy 7:3": ["Do Not Intermarry", "The people are warned not to marry the surrounding nations because it would turn their hearts away from God."],
    "Deuteronomy 7:6": ["A Chosen and Holy People", "Israel is chosen by the Lord to be His treasured possession among all nations."],
    "Deuteronomy 7:7": ["Chosen by God's Love", "God chose Israel not because they were many but because He loved them."],
    "Deuteronomy 7:9": ["God Is Faithful to His Covenant", "The Lord keeps His covenant and steadfast love with those who love Him and keep His commandments."],
    "Deuteronomy 7:12": ["Blessings for Obedience", "If Israel obeys God's commands, He will bless them and multiply them in the land."],
    "Deuteronomy 7:17": ["Do Not Fear the Nations", "Israel must not fear the stronger nations because the Lord will defeat them."],
    "Deuteronomy 7:20": ["God Sends Terror and Hornets", "The Lord will drive out the enemies with terror until they are destroyed."],
    "Deuteronomy 7:22": ["Gradual Conquest of the Land", "God will drive out the nations little by little so the land is not overwhelmed."],
    "Deuteronomy 7:25": ["Destroy Their Idols", "Israel must burn the idols of the nations and not covet the silver or gold on them."],
    "Deuteronomy 7:26": ["Avoid Abominable Things", "The people must not bring anything detestable into their homes but completely reject it."],

    "Deuteronomy 8:1": ["Remember and Obey God's Commands", "Moses urges Israel to carefully obey God's commands so they may live and possess the land the Lord promised."],
    "Deuteronomy 8:2": ["God Tested Israel in the Wilderness", "The Lord led Israel through the wilderness for forty years to humble and test them."],
    "Deuteronomy 8:3": ["God Provided Manna", "God fed them with manna to teach that people do not live by bread alone but by every word from the Lord."],
    "Deuteronomy 8:4": ["God Sustained Them", "Their clothes did not wear out and their feet did not swell during the forty years."],
    "Deuteronomy 8:5": ["God Disciplines Like a Father", "The Lord disciplines His people just as a father disciplines his child."],
    "Deuteronomy 8:7": ["The Good Land Promised", "God is bringing Israel into a good land with water, crops, and abundant resources."],
    "Deuteronomy 8:10": ["Remember to Thank God", "After eating and being satisfied, the people must praise the Lord for the good land."],
    "Deuteronomy 8:11": ["Warning Not to Forget God", "They are warned not to forget the Lord by failing to keep His commands."],
    "Deuteronomy 8:12": ["Danger of Pride in Prosperity", "When they become prosperous, they must not let their hearts become proud."],
    "Deuteronomy 8:17": ["God Gives the Power to Prosper", "The people must not say their own strength produced their wealth, because it is God who gives the ability."],
    "Deuteronomy 8:19": ["Judgment for Forgetting God", "If they forget the Lord and follow other gods, they will surely perish."],

    "Deuteronomy 9:1": ["Israel to Cross the Jordan", "Moses tells Israel that they are about to cross the Jordan to dispossess powerful nations greater than themselves."],
    "Deuteronomy 9:4": ["Not Because of Israel's Righteousness", "Israel must not think they are receiving the land because of their righteousness, but because of the wickedness of the nations."],
    "Deuteronomy 9:6": ["A Stubborn People", "Moses reminds Israel that they are a stubborn people and do not deserve the land by their own goodness."],
    "Deuteronomy 9:7": ["Remember the Rebellion", "Israel is told to remember how they repeatedly provoked the Lord in the wilderness."],
    "Deuteronomy 9:9": ["Moses on Mount Sinai", "Moses recounts how he went up the mountain to receive the tablets of the covenant and fasted forty days and nights."],
    "Deuteronomy 9:12": ["The Golden Calf Sin", "While Moses was on the mountain, the people quickly turned aside and made a molten calf."],
    "Deuteronomy 9:15": ["The Broken Tablets", "Moses came down the mountain, saw the people's sin, and threw down the tablets of the covenant."],
    "Deuteronomy 9:18": ["Moses Intercedes for Israel", "Moses fell before the Lord for forty days and nights praying for the people because of their sin."],
    "Deuteronomy 9:20": ["Aaron's Sin and Moses' Prayer", "The Lord was angry with Aaron for his part in the sin, but Moses prayed for him."],
    "Deuteronomy 9:22": ["Israel's Continued Rebellion", "Moses reminds them of other times they angered the Lord at Taberah, Massah, and Kibroth-hattaavah."],
    "Deuteronomy 9:25": ["Moses Pleads for Mercy", "Moses again interceded before the Lord asking Him not to destroy His people."],
    "Deuteronomy 9:26": ["Appeal to God's Covenant", "Moses appealed to God's promise to Abraham, Isaac, and Jacob to spare Israel."],

    "Deuteronomy 10:1": ["New Tablets of the Covenant", "The Lord tells Moses to carve two new stone tablets and come up the mountain again."],
    "Deuteronomy 10:3": ["Moses Receives the Law Again", "Moses makes the tablets and goes up the mountain where the Lord writes the commandments again."],
    "Deuteronomy 10:6": ["Death of Aaron and Priesthood Continued", "Aaron dies and Eleazar his son becomes priest in his place."],
    "Deuteronomy 10:8": ["The Tribe of Levi Set Apart", "The Lord sets apart the tribe of Levi to carry the ark and serve Him."],
    "Deuteronomy 10:10": ["The Lord Listens to Moses", "Moses remains on the mountain forty days and nights, and the Lord again chooses not to destroy Israel."],
    "Deuteronomy 10:12": ["What the Lord Requires", "Moses tells Israel that God requires them to fear Him, walk in His ways, love Him, and serve Him with all their heart."],
    "Deuteronomy 10:14": ["God Owns Heaven and Earth", "The heavens and the earth belong to the Lord, yet He chose Israel."],
    "Deuteronomy 10:16": ["Circumcise Your Hearts", "The people are urged to change their hearts and stop being stubborn."],
    "Deuteronomy 10:17": ["God Is Great and Just", "The Lord is the God of gods who shows no partiality and accepts no bribes."],
    "Deuteronomy 10:18": ["God Cares for the Vulnerable", "God defends the fatherless and the widow and loves the foreigner."],
    "Deuteronomy 10:19": ["Love the Foreigner", "Israel is commanded to love foreigners because they were foreigners in Egypt."],
    "Deuteronomy 10:20": ["Fear and Serve the Lord", "The people are called to fear the Lord, serve Him, and hold fast to Him."],

    "Deuteronomy 11:1": ["Love and Obey the Lord", "Israel is called to love the Lord and keep His commands, laws, and decrees."],
    "Deuteronomy 11:2": ["Remember God's Mighty Works", "Moses reminds them of the great acts and discipline of the Lord that they personally witnessed."],
    "Deuteronomy 11:8": ["Strength Through Obedience", "Keeping God's commands will give Israel strength to enter and possess the land."],
    "Deuteronomy 11:10": ["The Land God Gives", "The promised land is not like Egypt but a land watered by the rain from heaven."],
    "Deuteronomy 11:13": ["Blessings for Loving God", "If Israel loves and serves the Lord with all their heart, He will send rain and bless their harvest."],
    "Deuteronomy 11:16": ["Warning Against Idolatry", "The people are warned not to turn away and worship other gods."],
    "Deuteronomy 11:18": ["Keep God's Word in Heart and Life", "God's words should be kept in the heart, taught to children, and remembered daily."],
    "Deuteronomy 11:22": ["Promise of Victory", "If Israel carefully obeys the Lord, He will drive out the nations before them."],
    "Deuteronomy 11:24": ["Boundaries of the Promised Land", "Every place where Israel sets foot will belong to them, as God promised."],
    "Deuteronomy 11:26": ["Blessing and Curse Set Before Israel", "Moses presents a choice between blessing for obedience and curse for disobedience."],
    "Deuteronomy 11:29": ["Mount Gerizim and Mount Ebal", "Blessings are to be proclaimed on Mount Gerizim and curses on Mount Ebal."],

    "Deuteronomy 12:1": ["Destroy Pagan Worship Places", "Israel must completely destroy the places where the nations worship their gods."],
    "Deuteronomy 12:4": ["Worship Only Where God Chooses", "The people must not worship the Lord in the same way as the nations but at the place He chooses."],
    "Deuteronomy 12:8": ["Do Not Do What Seems Right to You", "Israel is warned not to follow their own ways but to obey God's commands."],
    "Deuteronomy 12:10": ["Rest in the Promised Land", "When the Lord gives them rest in the land, they must bring their offerings to the place He chooses."],
    "Deuteronomy 12:13": ["Offer Sacrifices at the Chosen Place", "Burnt offerings must not be made anywhere but only at the place God appoints."],
    "Deuteronomy 12:15": ["Freedom to Eat Meat", "The people may eat meat in their towns according to the Lord's blessing, whether clean or unclean."],
    "Deuteronomy 12:20": ["Expanding the Land", "When the Lord enlarges their territory, they may eat meat as they desire."],
    "Deuteronomy 12:23": ["Do Not Eat the Blood", "The people must not eat blood because the blood is the life."],
    "Deuteronomy 12:29": ["Warning Against Idolatry", "After driving out the nations, Israel must not be trapped by their religious practices."],
    "Deuteronomy 12:32": ["Do Not Add or Subtract", "Israel must carefully obey God's commands without adding to them or taking anything away."],

    "Deuteronomy 13:1": ["Warning About False Prophets", "If a prophet or dreamer performs signs but encourages worship of other gods, the people must not listen to him."],
    "Deuteronomy 13:3": ["Test of Loyalty to God", "The Lord allows such tests to see whether His people truly love Him with all their heart."],
    "Deuteronomy 13:5": ["Punishment for False Prophets", "A prophet who leads people away from the Lord must be put to death for turning Israel from God."],
    "Deuteronomy 13:6": ["Do Not Follow Family into Idolatry", "Even if a close family member secretly urges worship of other gods, they must not be followed."],
    "Deuteronomy 13:9": ["Remove Evil from Among You", "The one who leads others into idolatry must be punished to remove evil from the community."],
    "Deuteronomy 13:12": ["Cities Led into Idolatry", "If a city turns away to worship other gods, the matter must be carefully investigated."],
    "Deuteronomy 13:15": ["Judgment on the Corrupt City", "If the report is true, the city must be destroyed because it turned away from the Lord."],
    "Deuteronomy 13:17": ["God's Mercy After Judgment", "If Israel obeys the Lord and removes evil, God will show compassion and bless them."],

    "Deuteronomy 14:1": ["Israel Is God's Holy People", "Israel is reminded that they are the children of the Lord and must not follow pagan mourning practices."],
    "Deuteronomy 14:3": ["Clean and Unclean Foods", "The people are commanded not to eat anything that is detestable."],
    "Deuteronomy 14:4": ["Animals That May Be Eaten", "Certain animals such as cattle, sheep, goats, deer, and similar animals are permitted as food."],
    "Deuteronomy 14:6": ["Requirements for Clean Animals", "Animals that chew the cud and have divided hooves may be eaten."],
    "Deuteronomy 14:9": ["Clean and Unclean Water Creatures", "Creatures with fins and scales in the water may be eaten."],
    "Deuteronomy 14:11": ["Clean Birds Permitted", "Clean birds may be eaten, but specific birds are forbidden."],
    "Deuteronomy 14:21": ["Israel Set Apart from Nations", "Israel must not eat animals that died naturally but may give them to foreigners."],
    "Deuteronomy 14:22": ["The Tithe of the Produce", "The people are commanded to set aside a tenth of their produce each year."],
    "Deuteronomy 14:23": ["Purpose of the Tithe", "The tithe teaches the people to always fear the Lord their God."],
    "Deuteronomy 14:28": ["Tithe for the Needy", "Every third year the tithe is stored to support the Levites, foreigners, orphans, and widows."],

    "Deuteronomy 15:1": ["The Year of Canceling Debts", "Every seven years the Israelites must cancel debts among their people."],
    "Deuteronomy 15:3": ["Foreign Debts May Remain", "Debts owed by foreigners may remain, but debts among Israelites must be forgiven."],
    "Deuteronomy 15:4": ["No Poor Among You", "If Israel obeys the Lord, there will be no poor among them because God will bless them."],
    "Deuteronomy 15:7": ["Care for the Poor", "The people must not harden their hearts toward the poor but be generous."],
    "Deuteronomy 15:10": ["Give Generously", "They should give freely to those in need because the Lord will bless their work."],
    "Deuteronomy 15:12": ["Release of Hebrew Servants", "A Hebrew servant must be set free after serving six years."],
    "Deuteronomy 15:13": ["Provide for the Freed Servant", "When releasing a servant, the master must generously provide from his flock and harvest."],
    "Deuteronomy 15:16": ["Servant Chooses to Stay", "If a servant chooses to remain with his master out of love, his ear is pierced as a sign of permanent service."],
    "Deuteronomy 15:19": ["Firstborn Animals Belong to God", "The firstborn of livestock must be dedicated to the Lord."],
    "Deuteronomy 15:21": ["Only Unblemished Offerings", "Animals with defects must not be offered to the Lord but may be eaten."],

    "Deuteronomy 16:1": ["The Passover Observance", "Israel must celebrate the Passover to remember how the Lord brought them out of Egypt."],
    "Deuteronomy 16:9": ["The Feast of Weeks", "Seven weeks after the harvest begins, the people must celebrate the Feast of Weeks with joy before the Lord."],
    "Deuteronomy 16:13": ["The Feast of Tabernacles", "After the harvest and gathering of produce, Israel must celebrate the Feast of Tabernacles for seven days."],
    "Deuteronomy 16:16": ["Three Annual Festivals", "All Israelite men must appear before the Lord three times a year at the chosen place."],
    "Deuteronomy 16:18": ["Appoint Judges and Officials", "The people must appoint judges in every town to judge the people fairly."],
    "Deuteronomy 16:19": ["Justice Without Corruption", "Judges must not distort justice, show partiality, or accept bribes."],
    "Deuteronomy 16:21": ["Avoid Idolatrous Practices", "Israel must not set up sacred poles or idols beside the altar of the Lord."],

    "Deuteronomy 17:1": ["Proper Sacrifices to the Lord", "Animals offered to the Lord must not have defects because such offerings are detestable."],
    "Deuteronomy 17:2": ["Punishment for Idolatry", "If someone is found worshiping other gods or the sun, moon, or stars, they must be brought to judgment."],
    "Deuteronomy 17:4": ["Careful Investigation Required", "Before punishment, the matter must be thoroughly investigated."],
    "Deuteronomy 17:6": ["Two or Three Witnesses", "A person may be put to death only on the testimony of two or three witnesses."],
    "Deuteronomy 17:8": ["Difficult Cases Brought to the Priests", "Hard legal cases must be taken to the priests and judges at the place the Lord chooses."],
    "Deuteronomy 17:10": ["Obey the Court's Decision", "The people must follow the judgment given by the priests and judges."],
    "Deuteronomy 17:12": ["Punishment for Defying Authority", "Anyone who refuses to obey the priest or judge must be punished."],
    "Deuteronomy 17:14": ["Guidelines for Israel's King", "When Israel appoints a king, he must be chosen by the Lord."],
    "Deuteronomy 17:16": ["Limits on the King", "The king must not multiply horses, wives, or excessive wealth."],
    "Deuteronomy 17:18": ["The King Must Study the Law", "The king must write a copy of the law and read it all his life."],
    "Deuteronomy 17:20": ["Humble Leadership", "The king must remain humble and obey God's law so that his reign will endure."],

    "Deuteronomy 18:1": ["Provision for the Levites", "The Levites will have no land inheritance but will live from the offerings made to the Lord."],
    "Deuteronomy 18:6": ["Levites May Serve at the Chosen Place", "Any Levite may come to the place the Lord chooses and serve there."],
    "Deuteronomy 18:9": ["Forbidden Pagan Practices", "Israel must not imitate the detestable practices of the nations such as divination, sorcery, and witchcraft."],
    "Deuteronomy 18:13": ["Be Blameless Before the Lord", "The people are commanded to remain blameless and faithful to the Lord their God."],
    "Deuteronomy 18:15": ["The Prophet Like Moses", "God promises to raise up a prophet like Moses from among the people, and they must listen to him."],
    "Deuteronomy 18:18": ["God's Words in the Prophet's Mouth", "The Lord will put His words in the prophet's mouth to speak everything He commands."],
    "Deuteronomy 18:20": ["False Prophets Condemned", "Any prophet who speaks presumptuously or in the name of other gods must be put to death."],
    "Deuteronomy 18:21": ["How to Recognize a False Prophet", "If what a prophet speaks does not happen, it is not from the Lord."],

    "Deuteronomy 19:1": ["Cities of Refuge Established", "When Israel possesses the land, they must set apart cities where someone who kills unintentionally may flee."],
    "Deuteronomy 19:4": ["Protection for Accidental Killing", "A person who kills someone unintentionally may escape to a city of refuge to save his life."],
    "Deuteronomy 19:8": ["Expand the Cities of Refuge", "If the Lord enlarges Israel's territory, more cities of refuge must be added."],
    "Deuteronomy 19:11": ["Punishment for Murder", "A person who deliberately kills another must be handed over for justice."],
    "Deuteronomy 19:14": ["Respect Property Boundaries", "The people must not move their neighbor's boundary stones that mark inherited land."],
    "Deuteronomy 19:15": ["Requirement of Witnesses", "A matter must be established by the testimony of two or three witnesses."],
    "Deuteronomy 19:16": ["Dealing with False Witnesses", "If someone falsely accuses another, the case must be investigated before the judges."],
    "Deuteronomy 19:19": ["Justice for False Testimony", "The false witness must receive the punishment they intended for the accused."],
    "Deuteronomy 19:21": ["Justice Without Pity", "The principle of justice is stated: life for life, eye for eye, tooth for tooth."],

    "Deuteronomy 20:1": ["Trust God in Battle", "When Israel goes to war and sees stronger armies, they must not be afraid because the Lord who brought them from Egypt is with them."],
    "Deuteronomy 20:2": ["The Priest Encourages the Army", "Before battle, the priest reminds the soldiers to trust in the Lord for victory."],
    "Deuteronomy 20:5": ["Exemptions from Military Service", "Certain men may return home, including those who built a new house, planted a vineyard, or are newly engaged."],
    "Deuteronomy 20:8": ["The Fearful Sent Home", "Those who are afraid are allowed to leave so they do not discourage the rest of the army."],
    "Deuteronomy 20:10": ["Offer Peace to Distant Cities", "When approaching a city far away, Israel must first offer peace."],
    "Deuteronomy 20:13": ["War Against Resistant Cities", "If a city refuses peace and fights, Israel may defeat it in battle."],
    "Deuteronomy 20:16": ["Complete Destruction of Canaanite Nations", "The cities of the nations in the promised land must be completely destroyed to remove idolatry."],
    "Deuteronomy 20:19": ["Preserve Fruit Trees in War", "When besieging a city, Israel must not destroy fruit trees because they provide food."],

    "Deuteronomy 21:1": ["Atonement for an Unsolved Murder", "If a murdered person is found and the killer is unknown, the nearest town must perform a ceremony to remove guilt from the land."],
    "Deuteronomy 21:10": ["Marriage to a Captive Woman", "Rules are given for marrying a woman taken captive in war, requiring respectful treatment."],
    "Deuteronomy 21:15": ["Rights of the Firstborn Son", "The firstborn son must receive his rightful inheritance even if he is from the less loved wife."],
    "Deuteronomy 21:18": ["A Rebellious Son", "A stubborn and rebellious son who refuses discipline may be brought before the elders for judgment."],
    "Deuteronomy 21:22": ["A Body Hung on a Tree", "A person executed and hung on a tree must not remain there overnight but be buried the same day."],

    "Deuteronomy 22:1": ["Care for a Neighbor's Property", "If someone sees a neighbor's lost animal, they must return it rather than ignore it."],
    "Deuteronomy 22:5": ["Maintain Proper Distinctions", "Men and women are instructed not to wear each other's clothing."],
    "Deuteronomy 22:6": ["Kindness to Birds", "When taking eggs or young birds, the mother bird must be released."],
    "Deuteronomy 22:8": ["Safety on the Rooftop", "A railing must be built around the roof of a house to prevent accidental death."],
    "Deuteronomy 22:9": ["Avoid Mixing Different Things", "Israel must not mix seeds, animals, or fabrics in ways that violate God's instructions."],
    "Deuteronomy 22:12": ["Tassels on Garments", "Tassels must be made on the corners of garments as a reminder of God's commands."],
    "Deuteronomy 22:13": ["Accusation Against a Wife", "Rules are given for handling accusations about a bride's purity."],
    "Deuteronomy 22:22": ["Punishment for Adultery", "Both a man and a woman involved in adultery must be punished."],
    "Deuteronomy 22:25": ["Protection for the Innocent", "If a woman is attacked in the countryside, only the attacker is held responsible."],
    "Deuteronomy 22:28": ["Marriage After Seduction", "If a man seduces an unmarried woman, he must marry her and provide for her."],

    "Deuteronomy 23:1": ["Exclusion from the Assembly", "Certain individuals with specific conditions are not allowed to enter the assembly of the Lord."],
    "Deuteronomy 23:3": ["Ammonites and Moabites Excluded", "Ammonites and Moabites are forbidden from entering the assembly because they opposed Israel during the journey from Egypt."],
    "Deuteronomy 23:7": ["Do Not Hate Edomites or Egyptians", "Israel must not despise Edomites or Egyptians because of their past relationship with them."],
    "Deuteronomy 23:9": ["Keep the Camp Holy", "The army camp must remain clean and holy because the Lord walks among them."],
    "Deuteronomy 23:15": ["Protection for Escaped Slaves", "Escaped slaves must not be returned to their masters but allowed to live freely among the people."],
    "Deuteronomy 23:17": ["Prohibition of Temple Prostitution", "Israel must not allow prostitution connected with pagan worship."],
    "Deuteronomy 23:19": ["No Interest Among Israelites", "Israelites must not charge interest when lending to fellow Israelites."],
    "Deuteronomy 23:21": ["Keep Your Vows to the Lord", "Anyone who makes a vow to the Lord must fulfill it without delay."],
    "Deuteronomy 23:24": ["Respect for a Neighbor's Vineyard", "A person may eat grapes from a neighbor's vineyard but must not take any away."],
    "Deuteronomy 23:25": ["Respect for a Neighbor's Grain", "A person may pluck grain by hand from a neighbor's field but must not harvest it with a tool."],

    "Deuteronomy 24:1": ["Law Concerning Divorce", "If a man divorces his wife and she marries another, the first husband cannot take her back after she has been defiled."],
    "Deuteronomy 24:5": ["Newly Married Man Exempt from War", "A newly married man must stay home for one year to bring happiness to his wife."],
    "Deuteronomy 24:6": ["Protecting a Person's Livelihood", "A millstone must not be taken as a pledge because it would take away a person's means of living."],
    "Deuteronomy 24:7": ["Punishment for Kidnapping", "Anyone who kidnaps another Israelite and treats them as a slave must be put to death."],
    "Deuteronomy 24:8": ["Careful Obedience in Health Laws", "The people must carefully follow the instructions given by the priests concerning skin diseases."],
    "Deuteronomy 24:10": ["Respect When Collecting a Pledge", "When collecting a pledge for a loan, the lender must not enter the borrower's house."],
    "Deuteronomy 24:14": ["Fair Treatment of Workers", "Do not oppress hired workers, especially the poor and foreigners."],
    "Deuteronomy 24:16": ["Individual Responsibility", "Parents must not be put to death for their children, nor children for their parents."],
    "Deuteronomy 24:17": ["Justice for the Vulnerable", "Do not deny justice to foreigners or orphans, and do not take a widow's garment as a pledge."],
    "Deuteronomy 24:19": ["Leave Harvest for the Needy", "When harvesting, some produce should be left for the foreigner, the fatherless, and the widow."],

    "Deuteronomy 25:1": ["Justice in the Courts", "Judges must justify the innocent and condemn the guilty when disputes come before them."],
    "Deuteronomy 25:2": ["Limit on Punishment", "A guilty person may be flogged, but the number of lashes must not exceed forty."],
    "Deuteronomy 25:4": ["Do Not Muzzle the Ox", "An ox must not be muzzled while it is treading out the grain."],
    "Deuteronomy 25:5": ["Marriage for a Deceased Brother", "If a man dies without a son, his brother must marry the widow to preserve the family line."],
    "Deuteronomy 25:7": ["Refusal of the Levirate Duty", "If the brother refuses to marry the widow, a public ceremony removes his responsibility and brings shame."],
    "Deuteronomy 25:11": ["Improper Conduct in a Fight", "Rules are given concerning improper interference during a fight."],
    "Deuteronomy 25:13": ["Honest Weights and Measures", "The people must use honest weights and measures in trade."],
    "Deuteronomy 25:17": ["Remember Amalek", "Israel is commanded to remember how Amalek attacked them during their journey from Egypt."],
    "Deuteronomy 25:19": ["Blot Out Amalek", "When the Lord gives Israel rest in the land, they must completely remove Amalek's memory."],

    "Deuteronomy 26:1": ["Offering the Firstfruits", "When Israel enters the land, they must bring the firstfruits of their harvest to the place the Lord chooses."],
    "Deuteronomy 26:5": ["Confession of God's Deliverance", "The worshiper recounts how the Lord brought Israel out of Egypt and gave them the land."],
    "Deuteronomy 26:10": ["Presentation of the Firstfruits", "The firstfruits are placed before the Lord as an act of worship and thanksgiving."],
    "Deuteronomy 26:12": ["The Tithe for the Needy", "Every third year the tithe is given to the Levites, foreigners, orphans, and widows."],
    "Deuteronomy 26:13": ["Declaration of Obedience", "The people declare before the Lord that they have followed His commands regarding the tithe."],
    "Deuteronomy 26:16": ["Commitment to God's Commands", "Israel is called to carefully obey the Lord's statutes with all their heart and soul."],
    "Deuteronomy 26:17": ["Israel Declares the Lord as God", "The people affirm that the Lord is their God and that they will walk in His ways."],
    "Deuteronomy 26:18": ["Israel as God's Treasured People", "The Lord declares Israel to be His treasured possession who must keep His commands."],
    "Deuteronomy 26:19": ["Exalted Among the Nations", "God promises to set Israel high above other nations in praise, honor, and holiness."],

    "Deuteronomy 27:1": ["Command to Write the Law on Stones", "Moses and the elders command Israel to write the law on large stones after crossing the Jordan."],
    "Deuteronomy 27:4": ["Altar on Mount Ebal", "Israel must build an altar to the Lord on Mount Ebal and offer sacrifices there."],
    "Deuteronomy 27:9": ["Israel Declared God's People", "Moses tells the people that they have become the people of the Lord and must obey His voice."],
    "Deuteronomy 27:11": ["Mounts of Blessing and Curse", "The tribes are assigned to stand on Mount Gerizim for blessings and Mount Ebal for curses."],
    "Deuteronomy 27:14": ["Curses Pronounced by the Levites", "The Levites proclaim curses for those who break God's commands."],
    "Deuteronomy 27:15": ["Curse on Idolatry", "A curse is declared on anyone who makes an idol or carved image."],
    "Deuteronomy 27:16": ["Curse on Dishonoring Parents", "Those who dishonor their father or mother are placed under a curse."],
    "Deuteronomy 27:17": ["Curse on Moving Boundary Stones", "A curse is declared on anyone who moves their neighbor's boundary marker."],
    "Deuteronomy 27:18": ["Curse on Misleading the Blind", "Anyone who misleads a blind person on the road is cursed."],
    "Deuteronomy 27:19": ["Curse on Injustice", "A curse is pronounced on those who deny justice to foreigners, orphans, and widows."],
    "Deuteronomy 27:26": ["Curse for Disobeying the Law", "Anyone who does not uphold the words of the law by obeying them is under a curse."],

    "Deuteronomy 28:1": ["Blessings for Obedience", "If Israel fully obeys the Lord, He will set them high above all nations and bless them abundantly."],
    "Deuteronomy 28:3": ["Blessed in City and Field", "God promises blessings in every place, whether in the city or the countryside."],
    "Deuteronomy 28:7": ["Victory Over Enemies", "Enemies who rise against Israel will be defeated and flee in many directions."],
    "Deuteronomy 28:11": ["Prosperity in the Land", "The Lord will bless Israel with abundant crops, livestock, and prosperity."],
    "Deuteronomy 28:12": ["The Lord's Rich Blessing", "God will open the heavens to send rain and bless the work of their hands."],
    "Deuteronomy 28:15": ["Curses for Disobedience", "If Israel refuses to obey the Lord, many curses will come upon them."],
    "Deuteronomy 28:16": ["Cursed in City and Field", "Disobedience will bring hardship in every place, both in the city and the countryside."],
    "Deuteronomy 28:20": ["Confusion and Trouble", "The Lord will send confusion and frustration in everything they attempt."],
    "Deuteronomy 28:25": ["Defeat by Enemies", "Israel will be defeated by their enemies and scattered before them."],
    "Deuteronomy 28:36": ["Exile to Foreign Lands", "The Lord will drive Israel and their king to a foreign nation they have not known."],
    "Deuteronomy 28:45": ["Curses Pursue the Disobedient", "The curses will pursue and overtake Israel because they did not obey God's commands."],
    "Deuteronomy 28:64": ["Scattered Among the Nations", "Israel will be scattered among the nations and serve other gods there."],
    "Deuteronomy 28:68": ["Return to Bondage", "Disobedience will bring Israel back into slavery and suffering."],

    "Deuteronomy 29:1": ["Renewal of the Covenant in Moab", "Moses reminds Israel of the covenant the Lord made with them in the land of Moab."],
    "Deuteronomy 29:2": ["Remember God's Mighty Works", "Israel is reminded of the signs and wonders God performed in Egypt and during the wilderness journey."],
    "Deuteronomy 29:5": ["God Sustained Israel in the Wilderness", "For forty years God provided for them so their clothes and sandals did not wear out."],
    "Deuteronomy 29:10": ["All Israel Stands Before the Lord", "The entire community of Israel stands together before God to renew the covenant."],
    "Deuteronomy 29:14": ["Covenant for Present and Future Generations", "The covenant is made not only with those present but also with future generations."],
    "Deuteronomy 29:16": ["Warning Against Idolatry", "Israel is warned not to turn to the idols of the nations they passed through."],
    "Deuteronomy 29:18": ["Danger of a Rebellious Heart", "Anyone who turns away from the Lord will bring destruction upon themselves."],
    "Deuteronomy 29:22": ["Future Generations See the Judgment", "Later generations will see the devastation of the land caused by disobedience."],
    "Deuteronomy 29:24": ["Why Did This Happen", "People will ask why such destruction came upon the land."],
    "Deuteronomy 29:25": ["Because They Broke the Covenant", "The answer will be that Israel abandoned the covenant of the Lord."],
    "Deuteronomy 29:29": ["Secret Things Belong to God", "The hidden things belong to the Lord, but what He has revealed belongs to His people so they may obey."],

    "Deuteronomy 30:1": ["Promise of Restoration", "When Israel remembers God's words in exile and returns to Him, the Lord will restore them."],
    "Deuteronomy 30:3": ["God Gathers the Scattered", "The Lord will have compassion and gather His people from all the nations where they were scattered."],
    "Deuteronomy 30:6": ["Circumcision of the Heart", "God will transform the hearts of His people so they can truly love and obey Him."],
    "Deuteronomy 30:9": ["Renewed Blessing", "When Israel obeys the Lord again, He will bless them and prosper the work of their hands."],
    "Deuteronomy 30:11": ["God's Command Is Not Far Away", "The commandment of the Lord is not too difficult or distant for the people."],
    "Deuteronomy 30:15": ["Life and Good, Death and Evil", "Moses sets before the people a choice between life and prosperity or death and destruction."],
    "Deuteronomy 30:19": ["Choose Life", "He calls heaven and earth as witnesses and urges Israel to choose life by loving and obeying God."],
    "Deuteronomy 30:20": ["Love and Hold Fast to the Lord", "Life and blessing come through loving the Lord, obeying Him, and remaining faithful."],

    "Deuteronomy 31:1": ["Moses Encourages Israel", "Moses tells the people to be strong and courageous because the Lord will go with them."],
    "Deuteronomy 31:7": ["Joshua Appointed as Leader", "Moses publicly encourages Joshua to lead Israel into the promised land."],
    "Deuteronomy 31:9": ["The Law Given to the Priests", "Moses writes down the law and gives it to the priests and elders."],
    "Deuteronomy 31:10": ["Reading the Law Every Seven Years", "The law must be read to all Israel during the Feast of Tabernacles every seven years."],
    "Deuteronomy 31:14": ["Joshua Commissioned by the Lord", "The Lord appears at the tent of meeting and commissions Joshua to lead the people."],
    "Deuteronomy 31:16": ["Warning of Future Rebellion", "God tells Moses that Israel will later turn away and worship other gods."],
    "Deuteronomy 31:19": ["The Song as a Witness", "Moses is instructed to write a song that will testify against Israel when they forget God."],
    "Deuteronomy 31:24": ["The Law Placed Beside the Ark", "The book of the law is placed beside the ark of the covenant as a witness."],
    "Deuteronomy 31:27": ["Moses Warns of Israel's Rebellion", "Moses says he knows the people will be stubborn and rebel even after his death."],
    "Deuteronomy 31:30": ["Moses Teaches the Song", "Moses recites the song before the entire assembly of Israel."],

    "Deuteronomy 32:1": ["The Song of Moses Begins", "Moses calls heaven and earth to listen as he declares the words of his song."],
    "Deuteronomy 32:4": ["God's Perfect Character", "The Lord is described as the Rock whose works are perfect and whose ways are just."],
    "Deuteronomy 32:7": ["Remember God's Faithfulness", "The people are urged to remember the past and consider how God guided them."],
    "Deuteronomy 32:10": ["God's Care for Israel", "The Lord found Israel in the wilderness and cared for them like the apple of His eye."],
    "Deuteronomy 32:15": ["Israel's Rebellion", "When Israel became prosperous, they turned away from the God who made them."],
    "Deuteronomy 32:19": ["God's Anger at Their Idolatry", "The Lord becomes angry because His people turned to false gods."],
    "Deuteronomy 32:23": ["Judgment for Disobedience", "God warns that disasters and troubles will come because of their rebellion."],
    "Deuteronomy 32:34": ["God's Justice Stored Up", "The Lord declares that judgment is prepared and will come at the right time."],
    "Deuteronomy 32:39": ["The Lord Alone Is God", "God proclaims that He alone has the power over life and death."],
    "Deuteronomy 32:43": ["Rejoice with God's People", "The nations are called to rejoice because God will avenge His people."],
    "Deuteronomy 32:44": ["Moses Finishes the Song", "Moses and Joshua speak the words of the song to the people."],
    "Deuteronomy 32:48": ["Moses Told to View the Promised Land", "The Lord tells Moses to go up Mount Nebo to see the land before his death."],

    "Deuteronomy 33:1": ["Moses Blesses the Tribes", "Before his death Moses blesses the tribes of Israel."],
    "Deuteronomy 33:2": ["The Lord Comes in Majesty", "Moses describes the Lord coming from Sinai with glory and power."],
    "Deuteronomy 33:6": ["Blessing for Reuben", "Moses blesses the tribe of Reuben, asking that they live and not disappear."],
    "Deuteronomy 33:7": ["Blessing for Judah", "Moses prays that the Lord will help Judah and bring them victory over their enemies."],
    "Deuteronomy 33:8": ["Blessing for Levi", "Levi is blessed for their faithfulness in teaching God's law and serving Him."],
    "Deuteronomy 33:12": ["Blessing for Benjamin", "Benjamin is described as the beloved of the Lord who dwells safely under God's protection."],
    "Deuteronomy 33:13": ["Blessing for Joseph", "Joseph receives abundant blessings from heaven and the earth."],
    "Deuteronomy 33:18": ["Blessing for Zebulun and Issachar", "These tribes are blessed for their prosperity and joy in their work."],
    "Deuteronomy 33:20": ["Blessing for Gad", "Gad is praised for courage and strength in battle."],
    "Deuteronomy 33:22": ["Blessing for Dan", "Dan is compared to a young lion leaping from Bashan."],
    "Deuteronomy 33:23": ["Blessing for Naphtali", "Naphtali is filled with favor and blessings from the Lord."],
    "Deuteronomy 33:24": ["Blessing for Asher", "Asher is blessed with prosperity and security."],
    "Deuteronomy 33:26": ["The Eternal God Protects Israel", "Moses declares that there is no one like the God of Israel who helps His people."],
    "Deuteronomy 33:29": ["Blessed Is Israel", "Israel is called blessed because the Lord is their shield and helper."],

    "Deuteronomy 34:1": ["Moses Views the Promised Land", "The Lord brings Moses to Mount Nebo and shows him the entire land promised to Israel."],
    "Deuteronomy 34:4": ["God's Promise Fulfilled", "God tells Moses that this is the land promised to Abraham, Isaac, and Jacob, but Moses will not cross into it."],
    "Deuteronomy 34:5": ["Death of Moses", "Moses dies in the land of Moab according to the word of the Lord."],
    "Deuteronomy 34:6": ["Burial of Moses", "The Lord buries Moses in Moab, but no one knows the exact place of his grave."],
    "Deuteronomy 34:7": ["Moses' Strength at Death", "Moses dies at the age of 120, yet his eyes were not weak nor his strength gone."],
    "Deuteronomy 34:8": ["Israel Mourns Moses", "The people of Israel mourn for Moses for thirty days in the plains of Moab."],
    "Deuteronomy 34:9": ["Joshua Filled with Wisdom", "Joshua is filled with the spirit of wisdom as he begins to lead Israel."],
    "Deuteronomy 34:10": ["No Prophet Like Moses", "No prophet has arisen in Israel like Moses, whom the Lord knew face to face."],
    "Deuteronomy 34:11": ["Mighty Signs and Wonders", "Moses performed great signs and wonders in Egypt and before all Israel."],
    "Deuteronomy 34:12": ["Moses' Great Power", "Moses demonstrated mighty power and awe-inspiring deeds before all Israel."],

    // Joshua Chapter 1
    "Joshua 1:1": "God Commissions Joshua",
    "Joshua 1:10": "Preparations to Cross Jordan",

    // Joshua Chapter 2
    "Joshua 2:1": "Rahab and the Spies",
    "Joshua 2:15": "Rahab Helps the Spies Escape",
    "Joshua 2:22": "The Spies Return",

    // Joshua Chapter 3
    "Joshua 3:1": "Crossing the Jordan",
    "Joshua 3:14": "The Waters of Jordan Cut Off",

    // Joshua Chapter 4
    "Joshua 4:1": "Twelve Stones Taken from Jordan",
    "Joshua 4:14": "The LORD Exalts Joshua",
    "Joshua 4:19": "The Stones Set Up at Gilgal",

    // Joshua Chapter 5
    "Joshua 5:1": "Circumcision at Gilgal",
    "Joshua 5:10": "The First Passover in Canaan",
    "Joshua 5:13": "The Commander of the LORD's Army",

    // Joshua Chapter 6
    "Joshua 6:1": "The Fall of Jericho",
    "Joshua 6:15": "The Seventh Day",
    "Joshua 6:22": "Rahab and Her Family Spared",
    "Joshua 6:26": "The Curse on Jericho",

    // Joshua Chapter 7
    "Joshua 7:1": "Achan's Sin",
    "Joshua 7:2": "Defeat at Ai",
    "Joshua 7:6": "Joshua's Prayer",
    "Joshua 7:10": "Achan Discovered and Punished",

    // Joshua Chapter 8
    "Joshua 8:1": "The Conquest of Ai",
    "Joshua 8:30": "The Altar on Mount Ebal",

    // Joshua Chapter 9
    "Joshua 9:1": "The Gibeonite Deception",
    "Joshua 9:16": "The Deception Discovered",

    // Joshua Chapter 10
    "Joshua 10:1": "Five Kings Attack Gibeon",
    "Joshua 10:6": "Joshua Defeats the Five Kings",
    "Joshua 10:12": "The Sun Stands Still",
    "Joshua 10:16": "The Five Kings Executed",
    "Joshua 10:28": "Conquest of Southern Canaan",

    // Joshua Chapter 11
    "Joshua 11:1": "Northern Kings Defeated",
    "Joshua 11:16": "Summary of Conquests",

    // Joshua Chapter 12
    "Joshua 12:1": "Kings Defeated East of Jordan",
    "Joshua 12:7": "Kings Defeated West of Jordan",

    // Joshua Chapter 13
    "Joshua 13:1": "Land Still to Be Conquered",
    "Joshua 13:8": "The Land East of Jordan",
    "Joshua 13:15": "Reuben's Inheritance",
    "Joshua 13:24": "Gad's Inheritance",
    "Joshua 13:29": "Half-Tribe of Manasseh's Inheritance",

    // Joshua Chapter 14
    "Joshua 14:1": "The Land West of Jordan",
    "Joshua 14:6": "Caleb's Inheritance",

    // Joshua Chapter 15
    "Joshua 15:1": "Judah's Inheritance",
    "Joshua 15:13": "Caleb Conquers Hebron",
    "Joshua 15:20": "The Cities of Judah",

    // Joshua Chapter 16
    "Joshua 16:1": "Ephraim's Inheritance",

    // Joshua Chapter 17
    "Joshua 17:1": "Manasseh's Inheritance",
    "Joshua 17:14": "More Land for Joseph's Tribes",

    // Joshua Chapter 18
    "Joshua 18:1": "The Tabernacle at Shiloh",
    "Joshua 18:2": "Seven Tribes Receive Their Land",
    "Joshua 18:11": "Benjamin's Inheritance",

    // Joshua Chapter 19
    "Joshua 19:1": "Simeon's Inheritance",
    "Joshua 19:10": "Zebulun's Inheritance",
    "Joshua 19:17": "Issachar's Inheritance",
    "Joshua 19:24": "Asher's Inheritance",
    "Joshua 19:32": "Naphtali's Inheritance",
    "Joshua 19:40": "Dan's Inheritance",
    "Joshua 19:49": "Joshua's Inheritance",

    // Joshua Chapter 20
    "Joshua 20:1": "The Cities of Refuge",

    // Joshua Chapter 21
    "Joshua 21:1": "Cities for the Levites",
    "Joshua 21:43": "The LORD Gives Rest to Israel",

    // Joshua Chapter 22
    "Joshua 22:1": "Eastern Tribes Return Home",
    "Joshua 22:10": "The Altar of Witness",
    "Joshua 22:21": "The Eastern Tribes Explain",

    // Joshua Chapter 23
    "Joshua 23:1": "Joshua's Farewell to Leaders",

    // Joshua Chapter 24
    "Joshua 24:1": "The Covenant at Shechem",
    "Joshua 24:14": "Choose This Day Whom You Will Serve",
    "Joshua 24:29": "Joshua's Death",

    // Judges Chapter 1
    "Judges 1:1": "Judah and Simeon Fight the Canaanites",
    "Judges 1:22": "The House of Joseph Captures Bethel",
    "Judges 1:27": "Failure to Complete the Conquest",

    // Judges Chapter 2
    "Judges 2:1": "The Angel of the LORD at Bokim",
    "Judges 2:6": "The Death of Joshua",
    "Judges 2:10": "Israel's Disobedience",
    "Judges 2:16": "The Pattern of the Judges",

    // Judges Chapter 3
    "Judges 3:1": "Nations Left to Test Israel",
    "Judges 3:7": "Othniel",
    "Judges 3:12": "Ehud",
    "Judges 3:31": "Shamgar",

    // Judges Chapter 4
    "Judges 4:1": "Deborah and Barak",
    "Judges 4:17": "Jael Kills Sisera",

    // Judges Chapter 5
    "Judges 5:1": "The Song of Deborah",

    "Judges 6:1": ["God Sends a Prophet", "When Israel cried to the Lord, He sent a prophet reminding them how He delivered them from Egypt and commanded them not to worship other gods, but they did not obey."],
    "Judges 6:11": ["The Angel Appears to Gideon", "The angel of the Lord appears to Gideon while he is secretly threshing wheat to hide it from the Midianites and calls him a mighty warrior."],
    "Judges 6:13": ["Gideon Questions God", "Gideon wonders why Israel is suffering if the Lord is with them and asks where the miracles of the past have gone."],
    "Judges 6:14": ["God Calls Gideon", "The Lord commands Gideon to deliver Israel from Midian, assuring him that God will be with him."],
    "Judges 6:17": ["Gideon Prepares an Offering", "Gideon prepares food for the angel, and the angel touches the offering with a staff, causing fire to consume it."],
    "Judges 6:22": ["Gideon Builds an Altar", "Gideon realizes he has seen the angel of the Lord and fears death, but God tells him to have peace. Gideon builds an altar called The Lord Is Peace."],
    "Judges 6:25": ["Gideon Destroys Baal’s Altar", "God commands Gideon to tear down his father’s altar to Baal and build an altar to the Lord instead."],
    "Judges 6:28": ["Gideon Called Jerubbaal", "The townspeople want Gideon punished for destroying Baal’s altar, but his father says Baal should defend himself if he is a god."],
    "Judges 6:33": ["Gideon Gathers Israel", "The Spirit of the Lord comes upon Gideon, and he sends messages calling the tribes to join the battle against Midian."],
    "Judges 6:36": ["First Sign of the Fleece", "Gideon asks God for confirmation by placing a fleece on the ground, and God causes dew to appear only on the fleece."],
    "Judges 6:39": ["Second Sign of the Fleece", "Gideon asks again, and God makes the fleece dry while the ground around it is wet with dew."],

    "Judges 7:1": ["God Reduces Gideon’s Army", "The Lord tells Gideon that his army is too large, so many men return home, leaving only a small force so that Israel will know the victory comes from God."],
    "Judges 7:4": ["The Army Reduced to Three Hundred", "God further tests the men at the water and selects only three hundred soldiers to remain with Gideon for the battle."],
    "Judges 7:9": ["God Encourages Gideon to Go to the Camp", "The Lord tells Gideon that He has given the Midianites into his hand and encourages him to go down to the enemy camp."],
    "Judges 7:13": ["The Midianite’s Dream", "Gideon hears a Midianite soldier describe a dream about a loaf of barley bread overturning the camp, which is interpreted as Gideon defeating Midian."],
    "Judges 7:15": ["Gideon Worships and Prepares for Battle", "After hearing the dream, Gideon worships God and returns to the camp to prepare Israel for the attack."],
    "Judges 7:16": ["Gideon’s Unusual Battle Strategy", "Gideon divides the three hundred men and gives them trumpets, jars, and torches for the night attack."],
    "Judges 7:19": ["The Surprise Attack Begins", "At night Gideon and his men blow their trumpets, break the jars, and reveal the torches, shouting for the Lord and for Gideon."],
    "Judges 7:22": ["The Midianites Turn on Each Other", "The Lord causes confusion in the Midianite camp, and the soldiers begin fighting and fleeing."],
    "Judges 7:23": ["Israel Pursues the Midianites", "Men from several tribes join Gideon and chase the fleeing Midianite army."],
    "Judges 7:24": ["Ephraim Blocks the Escape", "Gideon calls the tribe of Ephraim to capture the Jordan crossings and stop the Midianites from escaping."],
    "Judges 7:25": ["Defeat of Oreb and Zeeb", "The leaders of Midian, Oreb and Zeeb, are captured and killed as Israel continues the pursuit."],

    "Judges 8:1": ["Ephraim Complains to Gideon", "The men of Ephraim question Gideon for not calling them earlier to fight Midian, but Gideon answers them gently and calms their anger."],
    "Judges 8:4": ["Gideon Pursues the Midianite Kings", "Gideon and his three hundred men cross the Jordan, exhausted but still pursuing the fleeing Midianite kings."],
    "Judges 8:5": ["Refusal of Succoth and Penuel", "The leaders of Succoth and Penuel refuse to give bread to Gideon’s men because the Midianite kings have not yet been captured."],
    "Judges 8:10": ["Capture of Zebah and Zalmunna", "Gideon attacks the remaining Midianite army and captures their two kings, Zebah and Zalmunna."],
    "Judges 8:13": ["Gideon Punishes Succoth and Penuel", "After returning from the battle, Gideon punishes the leaders of Succoth and destroys the tower of Penuel for refusing to help."],
    "Judges 8:18": ["Execution of the Midianite Kings", "Gideon questions Zebah and Zalmunna about the men they killed and then executes them."],
    "Judges 8:22": ["Israel Asks Gideon to Rule", "The people ask Gideon and his family to rule over them, but Gideon refuses, saying the Lord will rule over Israel."],
    "Judges 8:24": ["Gideon Makes an Ephod", "Gideon collects gold from the spoil and makes an ephod, which later becomes a snare to Israel."],
    "Judges 8:28": ["Peace During Gideon’s Lifetime", "Midian is subdued before Israel, and the land has peace for forty years while Gideon lives."],
    "Judges 8:29": ["Gideon’s Family and Death", "Gideon lives in his own house, has many sons, and eventually dies at a good old age."],
    "Judges 8:33": ["Israel Turns Back to Idolatry", "After Gideon’s death, the Israelites again turn to worship Baal and forget the Lord who delivered them."],

    // Judges Chapter 9
    "Judges 9:1": "Abimelech Becomes King",
    "Judges 9:7": "Jotham's Parable",
    "Judges 9:22": "Gaal's Rebellion",
    "Judges 9:50": "Abimelech's Death",

    // Judges Chapter 10
    "Judges 10:1": "Tola and Jair",
    "Judges 10:6": "Israel Oppressed Again",

    // Judges Chapter 11
    "Judges 11:1": "Jephthah Called to Lead",
    "Judges 11:12": "Jephthah Negotiates",
    "Judges 11:29": "Jephthah's Vow",
    "Judges 11:34": "Jephthah's Daughter",

    // Judges Chapter 12
    "Judges 12:1": "Ephraim's Jealousy",
    "Judges 12:8": "Ibzan, Elon, and Abdon",

    // Judges Chapter 13
    "Judges 13:1": "The Birth of Samson",
    "Judges 13:24": "Samson's Birth",

    // Judges Chapter 14
    "Judges 14:1": "Samson's Marriage",
    "Judges 14:10": "Samson's Riddle",

    // Judges Chapter 15
    "Judges 15:1": "Samson's Revenge",
    "Judges 15:9": "Samson Defeats the Philistines",

    // Judges Chapter 16
    "Judges 16:1": "Samson at Gaza",
    "Judges 16:4": "Samson and Delilah",
    "Judges 16:23": "Samson's Death",

    // Judges Chapter 17
    "Judges 17:1": "Micah's Idols",

    // Judges Chapter 18
    "Judges 18:1": "The Danites Seek Territory",
    "Judges 18:14": "The Danites Take Micah's Idols",

    // Judges Chapter 19
    "Judges 19:1": "The Levite and His Concubine",
    "Judges 19:22": "The Crime at Gibeah",

    // Judges Chapter 20
    "Judges 20:1": "War Against Benjamin",
    "Judges 20:29": "Benjamin Defeated",

    // Judges Chapter 21
    "Judges 21:1": "Wives for the Benjamites",

    // Ruth Chapter 1
    "Ruth 1:1": "Naomi and Her Family in Moab",
    "Ruth 1:6": "Naomi Returns with Ruth",
    "Ruth 1:19": "Naomi and Ruth Arrive in Bethlehem",

    // Ruth Chapter 2
    "Ruth 2:1": "Ruth Meets Boaz",
    "Ruth 2:17": "Ruth Returns to Naomi",

    // Ruth Chapter 3
    "Ruth 3:1": "Ruth's Appeal to Boaz",
    "Ruth 3:14": "Ruth Returns to Naomi",

    // Ruth Chapter 4
    "Ruth 4:1": "Boaz Redeems Ruth",
    "Ruth 4:13": "Boaz Marries Ruth",
    "Ruth 4:18": "The Genealogy of David",

    // 1 Samuel Chapter 1
    "1 Samuel 1:1": ["Elkanah and His Wives", "Elkanah has two wives; Peninnah has children, but Hannah is childless."],
    "1 Samuel 1:9": ["Hannah's Prayer", "Sorrowful Hannah prays in the temple, making a vow that if God gives her a son, she will dedicate him to the LORD for life."],
    "1 Samuel 1:19": ["The Birth of Samuel", "The LORD remembers Hannah; she becomes pregnant and gives birth to a son, whom she names Samuel."],

    // 1 Samuel Chapter 2
    "1 Samuel 2:1": ["Hannah's Prayer of Thanksgiving", "Hannah rejoices in God's salvation and strength."],
    "1 Samuel 2:12": ["Eli's Wicked Sons", "Eli's sons are wicked and do not honor God."],
    "1 Samuel 2:18": ["Samuel's Ministry", "Samuel continues serving in the temple as a young boy."],
    "1 Samuel 2:22": ["Eli Rebukes His Sons", "Eli speaks against his sons' sinful behavior."],
    "1 Samuel 2:27": ["A Prophecy Against Eli's House", "A prophet warns Eli of judgment on his family."],

    // 1 Samuel Chapter 3
    "1 Samuel 3:1": ["The LORD Calls Samuel", "The Lord reveals Himself to young Samuel in the temple."],
    "1 Samuel 3:11": ["The LORD's Message to Samuel", "God tells Samuel of judgment coming upon Eli's house."],
    "1 Samuel 3:19": ["Samuel Established as a Prophet", "Samuel is recognized by all Israel as a prophet of the Lord."],

    // 1 Samuel Chapter 4
    "1 Samuel 4:1": ["The Ark Captured by the Philistines", "Israel battles the Philistines and the Ark of the Covenant is taken."],
    "1 Samuel 4:12": ["The Death of Eli", "Eli dies when hearing news of the Ark's capture."],

    // 1 Samuel Chapter 5
    "1 Samuel 5:1": ["The Ark in Philistine Territory", "The Ark of the Covenant is placed in Philistine cities and brings judgment."],

    // 1 Samuel Chapter 6
    "1 Samuel 6:1": ["The Ark Returned to Israel", "The Philistines send the Ark back to Israel on a cart."],
    "1 Samuel 6:19": ["Judgment at Beth Shemesh", "Many are struck down for looking into the holy Ark."],

    // 1 Samuel Chapter 7
    "1 Samuel 7:1": ["The Ark at Kiriath Jearim", "The Ark is kept at Kiriath Jearim for twenty years."],
    "1 Samuel 7:3": ["Samuel Leads Israel to Victory", "Samuel calls Israel to turn to God and defeats the Philistines."],
    "1 Samuel 7:15": ["Samuel as Judge", "Samuel serves as judge over Israel throughout his life."],

    // 1 Samuel Chapter 8
    "1 Samuel 8:1": ["Israel Demands a King", "The people ask Samuel for a king to rule over them."],
    "1 Samuel 8:10": ["Samuel Warns the People", "Samuel warns of the consequences of having an earthly king."],

    // 1 Samuel Chapter 9
    "1 Samuel 9:1": ["Saul Meets Samuel", "Saul, searching for lost donkeys, meets the prophet Samuel."],
    "1 Samuel 9:15": ["The LORD Reveals His Plan", "God tells Samuel that Saul will be anointed as king."],

    // 1 Samuel Chapter 10
    "1 Samuel 10:1": ["Samuel Anoints Saul", "Samuel anoints Saul as king over Israel."],
    "1 Samuel 10:9": ["Saul Prophesies", "The Spirit of God comes upon Saul and he prophesies."],
    "1 Samuel 10:17": ["Saul Chosen as King", "Saul is chosen as king through casting of lots before all Israel."],

    // 1 Samuel Chapter 11
    "1 Samuel 11:1": ["Saul Defeats the Ammonites", "Saul rescues Jabesh-gilead from Ammonite siege."],
    "1 Samuel 11:12": ["Saul Confirmed as King", "The people gather to confirm Saul as their king."],

    // 1 Samuel Chapter 12
    "1 Samuel 12:1": ["Samuel's Farewell Speech", "Samuel addresses Israel and testifies of his integrity as judge."],

    // 1 Samuel Chapter 13
    "1 Samuel 13:1": ["Saul's Unlawful Sacrifice", "Saul makes an unlawful offering and Samuel pronounces judgment."],
    "1 Samuel 13:15": ["Israel Without Weapons", "Israel has no swords or spears except for Saul and Jonathan."],

    // 1 Samuel Chapter 14
    "1 Samuel 14:1": ["Jonathan's Victory", "Jonathan and his armor-bearer defeat a Philistine garrison."],
    "1 Samuel 14:24": ["Saul's Rash Oath", "Saul's oath causes hunger among the troops."],
    "1 Samuel 14:47": ["Saul's Military Victories", "Saul fights against Israel's enemies on every side."],

    // 1 Samuel Chapter 15
    "1 Samuel 15:1": ["Saul Defeats Amalek", "Saul defeats the Amalekites but disobeys the Lord's command."],
    "1 Samuel 15:10": ["Saul Rejected as King", "The Lord rejects Saul as king because of his disobedience."],
    "1 Samuel 15:32": ["Samuel Kills Agag", "Samuel executes the Amalekite king Agag before the Lord."],

    // 1 Samuel Chapter 16
    "1 Samuel 16:1": ["David Anointed King", "Samuel anoints David as the future king of Israel."],
    "1 Samuel 16:14": ["David Serves Saul", "David enters Saul's service to play the harp for him."],

    // 1 Samuel Chapter 17
    "1 Samuel 17:1": ["Goliath's Challenge", "The giant Goliath taunts Israel and demands single combat."],
    "1 Samuel 17:12": ["David Accepts the Challenge", "Young David volunteers to fight Goliath in the Lord's name."],
    "1 Samuel 17:41": ["David Kills Goliath", "David kills Goliath with a sling and stone."],

    // 1 Samuel Chapter 18
    "1 Samuel 18:1": ["Jonathan and David's Friendship", "Jonathan becomes deeply attached to David and they make a covenant."],
    "1 Samuel 18:6": ["Saul's Jealousy of David", "Saul becomes jealous of David when the women praise him more than Saul."],
    "1 Samuel 18:17": ["David Marries Michal", "Saul offers his daughter Michal to David in marriage, setting a deadly trap."],

    // 1 Samuel Chapter 19
    "1 Samuel 19:1": ["Saul Tries to Kill David", "Saul commands his servants to kill David, but they protect him."],
    "1 Samuel 19:8": ["Michal Saves David", "Michal helps David escape by letting him down through a window."],
    "1 Samuel 19:18": ["David Flees to Samuel", "David flees to Samuel at Ramah for refuge from Saul."],

    // 1 Samuel Chapter 20
    "1 Samuel 20:1": "Jonathan Helps David",
    "1 Samuel 20:24": "Jonathan Confirms Saul's Intent",
    "1 Samuel 20:41": "David and Jonathan's Farewell",

    // 1 Samuel Chapter 21
    "1 Samuel 21:1": "David at Nob",
    "1 Samuel 21:10": "David at Gath",

    // 1 Samuel Chapter 22
    "1 Samuel 22:1": "David at Adullam and Mizpah",
    "1 Samuel 22:6": "Saul Kills the Priests of Nob",
    "1 Samuel 22:20": "Abiathar Escapes to David",

    // 1 Samuel Chapter 23
    "1 Samuel 23:1": "David Saves Keilah",
    "1 Samuel 23:14": "Saul Pursues David",
    "1 Samuel 23:19": "David Betrayed by the Ziphites",

    // 1 Samuel Chapter 24
    "1 Samuel 24:1": "David Spares Saul's Life",
    "1 Samuel 24:16": "Saul's Remorse",

    // 1 Samuel Chapter 25
    "1 Samuel 25:1": "The Death of Samuel",
    "1 Samuel 25:2": "David, Nabal, and Abigail",
    "1 Samuel 25:39": "David Marries Abigail",

    // 1 Samuel Chapter 26
    "1 Samuel 26:1": "David Spares Saul Again",
    "1 Samuel 26:17": "David Rebukes Saul",

    // 1 Samuel Chapter 27
    "1 Samuel 27:1": "David Lives Among the Philistines",

    // 1 Samuel Chapter 28
    "1 Samuel 28:1": "Saul and the Medium at Endor",
    "1 Samuel 28:15": "Samuel's Spirit Appears",

    // 1 Samuel Chapter 29
    "1 Samuel 29:1": "The Philistines Reject David",

    // 1 Samuel Chapter 30
    "1 Samuel 30:1": "David Defeats the Amalekites",
    "1 Samuel 30:21": "The Spoil Divided",

    // 1 Samuel Chapter 31
    "1 Samuel 31:1": "Saul's Death",
    "1 Samuel 31:11": "The Men of Jabesh Gilead Rescue Saul's Body",

    // 2 Samuel Chapter 1
    "2 Samuel 1:1": "David Learns of Saul's Death",
    "2 Samuel 1:17": "David's Lament for Saul and Jonathan",

    // 2 Samuel Chapter 2
    "2 Samuel 2:1": "David Anointed King of Judah",
    "2 Samuel 2:8": "Ish-bosheth Made King of Israel",
    "2 Samuel 2:12": "The Battle of Gibeon",
    "2 Samuel 2:18": "Asahel Killed",

    // 2 Samuel Chapter 3
    "2 Samuel 3:1": "David's Sons",
    "2 Samuel 3:6": "Abner Defects to David",
    "2 Samuel 3:22": "Joab Murders Abner",
    "2 Samuel 3:31": "David Mourns Abner",

    // 2 Samuel Chapter 4
    "2 Samuel 4:1": "Ish-bosheth Murdered",

    // 2 Samuel Chapter 5
    "2 Samuel 5:1": "David Anointed King of Israel",
    "2 Samuel 5:6": "David Conquers Jerusalem",
    "2 Samuel 5:11": "David's Palace and Family",
    "2 Samuel 5:17": "David Defeats the Philistines",

    // 2 Samuel Chapter 6
    "2 Samuel 6:1": "The Ark Brought to Jerusalem",
    "2 Samuel 6:12": "David Dances Before the LORD",
    "2 Samuel 6:20": "Michal's Contempt",

    // 2 Samuel Chapter 7
    "2 Samuel 7:1": "God's Covenant with David",
    "2 Samuel 7:18": "David's Prayer",

    // 2 Samuel Chapter 8
    "2 Samuel 8:1": "David's Military Victories",
    "2 Samuel 8:15": "David's Officials",

    // 2 Samuel Chapter 9
    "2 Samuel 9:1": "David's Kindness to Mephibosheth",

    // 2 Samuel Chapter 10
    "2 Samuel 10:1": "David Defeats Ammon and Aram",

    // 2 Samuel Chapter 11
    "2 Samuel 11:1": "David and Bathsheba",
    "2 Samuel 11:14": "David's Plot Against Uriah",
    "2 Samuel 11:26": "David Marries Bathsheba",

    // 2 Samuel Chapter 12
    "2 Samuel 12:1": "Nathan Rebukes David",
    "2 Samuel 12:13": "David's Son Dies",
    "2 Samuel 12:24": "Solomon Is Born",
    "2 Samuel 12:26": "David Captures Rabbah",

    // 2 Samuel Chapter 13
    "2 Samuel 13:1": "Amnon and Tamar",
    "2 Samuel 13:23": "Absalom Kills Amnon",

    // 2 Samuel Chapter 14
    "2 Samuel 14:1": "Absalom Returns",
    "2 Samuel 14:25": "Absalom's Appearance",
    "2 Samuel 14:28": "Absalom Reconciled to David",

    // 2 Samuel Chapter 15
    "2 Samuel 15:1": "Absalom's Conspiracy",
    "2 Samuel 15:13": "David Flees Jerusalem",

    // 2 Samuel Chapter 16
    "2 Samuel 16:1": "Ziba Deceives David",
    "2 Samuel 16:5": "Shimei Curses David",
    "2 Samuel 16:15": "Absalom Enters Jerusalem",

    // 2 Samuel Chapter 17
    "2 Samuel 17:1": "Ahithophel's Counsel",
    "2 Samuel 17:15": "Hushai Warns David",
    "2 Samuel 17:23": "Ahithophel Hangs Himself",

    // 2 Samuel Chapter 18
    "2 Samuel 18:1": "Absalom Defeated and Killed",
    "2 Samuel 18:19": "David Mourns Absalom",

    // 2 Samuel Chapter 19
    "2 Samuel 19:1": "Joab Rebukes David",
    "2 Samuel 19:9": "David Returns to Jerusalem",
    "2 Samuel 19:24": "Mephibosheth Meets David",
    "2 Samuel 19:31": "David's Kindness to Barzillai",
    "2 Samuel 19:40": "Israel and Judah Quarrel",

    // 2 Samuel Chapter 20
    "2 Samuel 20:1": "Sheba's Rebellion",
    "2 Samuel 20:14": "Sheba Beheaded",
    "2 Samuel 20:23": "David's Officials",

    // 2 Samuel Chapter 21
    "2 Samuel 21:1": "The Gibeonites Avenged",
    "2 Samuel 21:15": "Wars with the Philistines",

    // 2 Samuel Chapter 22
    "2 Samuel 22:1": "David's Song of Deliverance",

    // 2 Samuel Chapter 23
    "2 Samuel 23:1": "David's Last Words",
    "2 Samuel 23:8": "David's Mighty Men",

    // 2 Samuel Chapter 24
    "2 Samuel 24:1": "David's Census",
    "2 Samuel 24:10": "David's Repentance",
    "2 Samuel 24:18": "David Builds an Altar",

    // 1 Kings Chapter 1
    "1 Kings 1:1": "Adonijah Seeks the Throne",
    "1 Kings 1:11": "Nathan and Bathsheba's Plan",
    "1 Kings 1:28": "David Proclaims Solomon King",
    "1 Kings 1:41": "Adonijah's Submission",

    // 1 Kings Chapter 2
    "1 Kings 2:1": "David's Charge to Solomon",
    "1 Kings 2:10": "David's Death",
    "1 Kings 2:13": "Solomon Consolidates His Rule",

    // 1 Kings Chapter 3
    "1 Kings 3:1": "Solomon Marries Pharaoh's Daughter",
    "1 Kings 3:3": "Solomon Asks for Wisdom",
    "1 Kings 3:16": "Solomon's Wise Judgment",

    // 1 Kings Chapter 4
    "1 Kings 4:1": "Solomon's Officials",
    "1 Kings 4:20": "Solomon's Prosperity",
    "1 Kings 4:29": "Solomon's Wisdom",

    // 1 Kings Chapter 5
    "1 Kings 5:1": "Preparations for the Temple",

    // 1 Kings Chapter 6
    "1 Kings 6:1": "Solomon Builds the Temple",
    "1 Kings 6:11": "God's Promise to Solomon",
    "1 Kings 6:14": "The Temple Completed",

    // 1 Kings Chapter 7
    "1 Kings 7:1": "Solomon's Palace",
    "1 Kings 7:13": "The Temple Furnishings",

    // 1 Kings Chapter 8
    "1 Kings 8:1": "The Ark Brought to the Temple",
    "1 Kings 8:12": "Solomon's Prayer of Dedication",
    "1 Kings 8:62": "The Dedication Sacrifice",

    // 1 Kings Chapter 9
    "1 Kings 9:1": "God's Second Appearance to Solomon",
    "1 Kings 9:10": "Solomon's Other Activities",

    // 1 Kings Chapter 10
    "1 Kings 10:1": "The Queen of Sheba",
    "1 Kings 10:14": "Solomon's Wealth",

    // 1 Kings Chapter 11
    "1 Kings 11:1": "Solomon's Wives Turn His Heart",
    "1 Kings 11:9": "God Raises Up Adversaries",
    "1 Kings 11:26": "Jeroboam Rebels",
    "1 Kings 11:41": "Solomon's Death",

    // 1 Kings Chapter 12
    "1 Kings 12:1": "The Kingdom Divided",
    "1 Kings 12:25": "Jeroboam's Golden Calves",

    // 1 Kings Chapter 13
    "1 Kings 13:1": "A Man of God from Judah",
    "1 Kings 13:11": "The Old Prophet's Lie",
    "1 Kings 13:33": "Jeroboam's Continued Sin",

    // 1 Kings Chapter 14
    "1 Kings 14:1": "Jeroboam's Son Dies",
    "1 Kings 14:21": "Rehoboam King of Judah",

    // 1 Kings Chapter 15
    "1 Kings 15:1": "Abijam King of Judah",
    "1 Kings 15:9": "Asa King of Judah",
    "1 Kings 15:25": "Nadab King of Israel",
    "1 Kings 15:33": "Baasha King of Israel",

    // 1 Kings Chapter 16
    "1 Kings 16:1": "Prophecy Against Baasha",
    "1 Kings 16:8": "Elah King of Israel",
    "1 Kings 16:15": "Zimri King of Israel",
    "1 Kings 16:21": "Omri King of Israel",
    "1 Kings 16:29": "Ahab King of Israel",

    // 1 Kings Chapter 17
    "1 Kings 17:1": "Elijah Fed by Ravens",
    "1 Kings 17:8": "The Widow of Zarephath",
    "1 Kings 17:17": "Elijah Raises the Widow's Son",

    // 1 Kings Chapter 18
    "1 Kings 18:1": "Elijah Returns to Ahab",
    "1 Kings 18:16": "Elijah Challenges the Prophets of Baal",
    "1 Kings 18:41": "The LORD Sends Rain",

    // 1 Kings Chapter 19
    "1 Kings 19:1": "Elijah Flees from Jezebel",
    "1 Kings 19:9": "The LORD Appears to Elijah",
    "1 Kings 19:19": "The Call of Elisha",

    // 1 Kings Chapter 20
    "1 Kings 20:1": "Ben-Hadad Attacks Samaria",
    "1 Kings 20:13": "Israel Defeats Aram",
    "1 Kings 20:31": "Ahab Spares Ben-Hadad",

    // 1 Kings Chapter 21
    "1 Kings 21:1": "Naboth's Vineyard",
    "1 Kings 21:17": "Elijah Pronounces Judgment on Ahab",

    // 1 Kings Chapter 22
    "1 Kings 22:1": "Micaiah Prophesies Against Ahab",
    "1 Kings 22:29": "Ahab Killed at Ramoth Gilead",
    "1 Kings 22:41": "Jehoshaphat King of Judah",
    "1 Kings 22:51": "Ahaziah King of Israel",

    // 2 Kings Chapter 1
    "2 Kings 1:1": "Ahaziah Seeks Baal-Zebub",
    "2 Kings 1:9": "Fire from Heaven",

    // 2 Kings Chapter 2
    "2 Kings 2:1": "Elijah Taken Up to Heaven",
    "2 Kings 2:13": "Elisha's Ministry Begins",
    "2 Kings 2:19": "Elisha Purifies the Water",
    "2 Kings 2:23": "Elisha Mocked and Bears",

    // 2 Kings Chapter 3
    "2 Kings 3:1": "Joram King of Israel",
    "2 Kings 3:4": "Moab Rebels Against Israel",

    // 2 Kings Chapter 4
    "2 Kings 4:1": "The Widow's Oil",
    "2 Kings 4:8": "The Shunammite Woman's Son",
    "2 Kings 4:38": "Death in the Pot",
    "2 Kings 4:42": "Feeding of a Hundred Men",

    // 2 Kings Chapter 5
    "2 Kings 5:1": "Naaman Healed of Leprosy",
    "2 Kings 5:20": "Gehazi's Greed and Leprosy",

    // 2 Kings Chapter 6
    "2 Kings 6:1": "The Ax Head Floats",
    "2 Kings 6:8": "The Blinded Arameans",
    "2 Kings 6:24": "The Siege of Samaria",

    // 2 Kings Chapter 7
    "2 Kings 7:1": "Elisha Prophesies Deliverance",
    "2 Kings 7:3": "The Lepers Discover the Abandoned Camp",

    // 2 Kings Chapter 8
    "2 Kings 8:1": "The Shunammite's Land Restored",
    "2 Kings 8:7": "Elisha Predicts Hazael's Cruelty",
    "2 Kings 8:16": "Jehoram King of Judah",
    "2 Kings 8:25": "Ahaziah King of Judah",

    // 2 Kings Chapter 9
    "2 Kings 9:1": "Jehu Anointed King of Israel",
    "2 Kings 9:14": "Jehu Kills Joram and Ahaziah",
    "2 Kings 9:30": "Jezebel Killed",

    // 2 Kings Chapter 10
    "2 Kings 10:1": "Ahab's Family Destroyed",
    "2 Kings 10:18": "Jehu Destroys the Worshipers of Baal",
    "2 Kings 10:32": "Jehu's Death",

    // 2 Kings Chapter 11
    "2 Kings 11:1": "Athaliah Usurps the Throne",
    "2 Kings 11:4": "Joash Made King",

    // 2 Kings Chapter 12
    "2 Kings 12:1": "Joash Repairs the Temple",
    "2 Kings 12:17": "Hazael Threatens Jerusalem",
    "2 Kings 12:19": "Joash Assassinated",

    // 2 Kings Chapter 13
    "2 Kings 13:1": "Jehoahaz King of Israel",
    "2 Kings 13:10": "Jehoash King of Israel",
    "2 Kings 13:14": "Elisha's Final Prophecy",
    "2 Kings 13:20": "Elisha's Death",

    // 2 Kings Chapter 14
    "2 Kings 14:1": "Amaziah King of Judah",
    "2 Kings 14:8": "Israel Defeats Judah",
    "2 Kings 14:23": "Jeroboam II King of Israel",

    // 2 Kings Chapter 15
    "2 Kings 15:1": "Azariah (Uzziah) King of Judah",
    "2 Kings 15:8": "Zechariah King of Israel",
    "2 Kings 15:13": "Shallum King of Israel",
    "2 Kings 15:17": "Menahem King of Israel",
    "2 Kings 15:23": "Pekahiah King of Israel",
    "2 Kings 15:27": "Pekah King of Israel",
    "2 Kings 15:32": "Jotham King of Judah",

    // 2 Kings Chapter 16
    "2 Kings 16:1": "Ahaz King of Judah",
    "2 Kings 16:10": "Ahaz's Altar",

    // 2 Kings Chapter 17
    "2 Kings 17:1": "Hoshea King of Israel",
    "2 Kings 17:5": "The Fall of Samaria",
    "2 Kings 17:24": "Foreigners Resettled in Samaria",

    // 2 Kings Chapter 18
    "2 Kings 18:1": "Hezekiah King of Judah",
    "2 Kings 18:13": "Sennacherib Invades Judah",

    // 2 Kings Chapter 19
    "2 Kings 19:1": "Hezekiah Seeks Isaiah's Help",
    "2 Kings 19:14": "Hezekiah's Prayer",
    "2 Kings 19:20": "Isaiah's Prophecy",
    "2 Kings 19:35": "The Angel Destroys the Assyrian Army",

    // 2 Kings Chapter 20
    "2 Kings 20:1": "Hezekiah's Illness and Recovery",
    "2 Kings 20:12": "Envoys from Babylon",

    // 2 Kings Chapter 21
    "2 Kings 21:1": "Manasseh King of Judah",
    "2 Kings 21:19": "Amon King of Judah",

    // 2 Kings Chapter 22
    "2 Kings 22:1": "Josiah King of Judah",
    "2 Kings 22:8": "The Book of the Law Found",

    // 2 Kings Chapter 23
    "2 Kings 23:1": "Josiah's Reforms",
    "2 Kings 23:28": "Josiah's Death",
    "2 Kings 23:31": "Jehoahaz King of Judah",
    "2 Kings 23:36": "Jehoiakim King of Judah",

    // 2 Kings Chapter 24
    "2 Kings 24:1": "Jehoiakim's Rebellion",
    "2 Kings 24:8": "Jehoiachin King of Judah",
    "2 Kings 24:17": "Zedekiah King of Judah",

    // 2 Kings Chapter 25
    "2 Kings 25:1": "The Fall of Jerusalem",
    "2 Kings 25:8": "The Temple Destroyed",
    "2 Kings 25:22": "Gedaliah Governor of Judah",
    "2 Kings 25:27": "Jehoiachin Released",

    // 1 Chronicles Chapter 1
    "1 Chronicles 1:1": "From Adam to Abraham",
    "1 Chronicles 1:28": "The Sons of Abraham",
    "1 Chronicles 1:34": "The Sons of Isaac",

    // 1 Chronicles Chapter 2
    "1 Chronicles 2:1": "The Sons of Israel",
    "1 Chronicles 2:13": "The Family of Jesse",

    // 1 Chronicles Chapter 3
    "1 Chronicles 3:1": "The Sons of David",
    "1 Chronicles 3:10": "The Kings of Judah",

    // 1 Chronicles Chapter 4
    "1 Chronicles 4:1": "The Descendants of Judah",
    "1 Chronicles 4:24": "The Descendants of Simeon",

    // 1 Chronicles Chapter 5
    "1 Chronicles 5:1": "The Descendants of Reuben",
    "1 Chronicles 5:11": "The Descendants of Gad",
    "1 Chronicles 5:23": "The Half-Tribe of Manasseh",

    // 1 Chronicles Chapter 6
    "1 Chronicles 6:1": "The Descendants of Levi",
    "1 Chronicles 6:49": "The Descendants of Aaron",
    "1 Chronicles 6:54": "The Levitical Cities",

    // 1 Chronicles Chapter 7
    "1 Chronicles 7:1": "The Descendants of Issachar",
    "1 Chronicles 7:6": "The Descendants of Benjamin",
    "1 Chronicles 7:13": "The Descendants of Naphtali",
    "1 Chronicles 7:14": "The Descendants of Manasseh",
    "1 Chronicles 7:20": "The Descendants of Ephraim",
    "1 Chronicles 7:30": "The Descendants of Asher",

    // 1 Chronicles Chapter 8
    "1 Chronicles 8:1": "The Descendants of Benjamin",

    // 1 Chronicles Chapter 9
    "1 Chronicles 9:1": "The Returning Exiles",
    "1 Chronicles 9:35": "The Genealogy of Saul",

    // 1 Chronicles Chapter 10
    "1 Chronicles 10:1": "Saul's Death",
    "1 Chronicles 10:13": "Saul's Unfaithfulness",

    // 1 Chronicles Chapter 11
    "1 Chronicles 11:1": "David Becomes King",
    "1 Chronicles 11:4": "David Conquers Jerusalem",
    "1 Chronicles 11:10": "David's Mighty Men",

    // 1 Chronicles Chapter 12
    "1 Chronicles 12:1": "David's Supporters",

    // 1 Chronicles Chapter 13
    "1 Chronicles 13:1": "The Ark Brought from Kiriath Jearim",

    // 1 Chronicles Chapter 14
    "1 Chronicles 14:1": "David's Palace and Family",
    "1 Chronicles 14:8": "David Defeats the Philistines",

    // 1 Chronicles Chapter 15
    "1 Chronicles 15:1": "Preparations to Move the Ark",
    "1 Chronicles 15:25": "The Ark Brought to Jerusalem",

    // 1 Chronicles Chapter 16
    "1 Chronicles 16:1": "The Ark Placed in the Tent",
    "1 Chronicles 16:7": "David's Psalm of Thanksgiving",
    "1 Chronicles 16:37": "Worship Before the Ark",

    // 1 Chronicles Chapter 17
    "1 Chronicles 17:1": "God's Covenant with David",
    "1 Chronicles 17:16": "David's Prayer",

    // 1 Chronicles Chapter 18
    "1 Chronicles 18:1": "David's Victories",
    "1 Chronicles 18:14": "David's Officials",

    // 1 Chronicles Chapter 19
    "1 Chronicles 19:1": "David Defeats Ammon and Aram",

    // 1 Chronicles Chapter 20
    "1 Chronicles 20:1": "The Capture of Rabbah",
    "1 Chronicles 20:4": "Wars with the Philistines",

    // 1 Chronicles Chapter 21
    "1 Chronicles 21:1": "David's Census",
    "1 Chronicles 21:9": "Judgment for the Census",
    "1 Chronicles 21:18": "David Builds an Altar",

    // 1 Chronicles Chapter 22
    "1 Chronicles 22:1": "Preparations for the Temple",
    "1 Chronicles 22:6": "David Charges Solomon",

    // 1 Chronicles Chapter 23
    "1 Chronicles 23:1": "The Divisions of the Levites",

    // 1 Chronicles Chapter 24
    "1 Chronicles 24:1": "The Divisions of the Priests",

    // 1 Chronicles Chapter 25
    "1 Chronicles 25:1": "The Singers",

    // 1 Chronicles Chapter 26
    "1 Chronicles 26:1": "The Gatekeepers",
    "1 Chronicles 26:20": "The Treasurers",

    // 1 Chronicles Chapter 27
    "1 Chronicles 27:1": "The Army Divisions",
    "1 Chronicles 27:16": "The Leaders of the Tribes",
    "1 Chronicles 27:25": "David's Officials",

    // 1 Chronicles Chapter 28
    "1 Chronicles 28:1": "David's Charge to Israel",
    "1 Chronicles 28:9": "David's Charge to Solomon",
    "1 Chronicles 28:11": "Plans for the Temple",

    // 1 Chronicles Chapter 29
    "1 Chronicles 29:1": "Gifts for the Temple",
    "1 Chronicles 29:10": "David's Prayer",
    "1 Chronicles 29:20": "Solomon Anointed King",
    "1 Chronicles 29:26": "David's Death",

    // 2 Chronicles Chapter 1
    "2 Chronicles 1:1": "Solomon Asks for Wisdom",
    "2 Chronicles 1:14": "Solomon's Wealth",

    // 2 Chronicles Chapter 2
    "2 Chronicles 2:1": "Preparations for the Temple",

    // 2 Chronicles Chapter 3
    "2 Chronicles 3:1": "Solomon Builds the Temple",

    // 2 Chronicles Chapter 4
    "2 Chronicles 4:1": "The Temple Furnishings",

    // 2 Chronicles Chapter 5
    "2 Chronicles 5:1": "The Ark Brought to the Temple",

    // 2 Chronicles Chapter 6
    "2 Chronicles 6:1": "Solomon's Prayer of Dedication",

    // 2 Chronicles Chapter 7
    "2 Chronicles 7:1": "Fire from Heaven",
    "2 Chronicles 7:11": "God Appears to Solomon",

    // 2 Chronicles Chapter 8
    "2 Chronicles 8:1": "Solomon's Other Activities",

    // 2 Chronicles Chapter 9
    "2 Chronicles 9:1": "The Queen of Sheba",
    "2 Chronicles 9:13": "Solomon's Wealth",
    "2 Chronicles 9:29": "Solomon's Death",

    // 2 Chronicles Chapter 10
    "2 Chronicles 10:1": "The Kingdom Divided",

    // 2 Chronicles Chapter 11
    "2 Chronicles 11:1": "Rehoboam Forbidden to Fight",
    "2 Chronicles 11:5": "Rehoboam Fortifies Cities",
    "2 Chronicles 11:13": "Priests and Levites Move to Judah",

    // 2 Chronicles Chapter 12
    "2 Chronicles 12:1": "Shishak Attacks Jerusalem",
    "2 Chronicles 12:13": "Rehoboam's Reign",

    // 2 Chronicles Chapter 13
    "2 Chronicles 13:1": "Abijah King of Judah",
    "2 Chronicles 13:3": "War Between Abijah and Jeroboam",

    // 2 Chronicles Chapter 14
    "2 Chronicles 14:1": "Asa King of Judah",
    "2 Chronicles 14:9": "Asa Defeats the Cushites",

    // 2 Chronicles Chapter 15
    "2 Chronicles 15:1": "Asa's Religious Reforms",

    // 2 Chronicles Chapter 16
    "2 Chronicles 16:1": "Asa's Treaty with Aram",
    "2 Chronicles 16:11": "Asa's Death",

    // 2 Chronicles Chapter 17
    "2 Chronicles 17:1": "Jehoshaphat King of Judah",

    // 2 Chronicles Chapter 18
    "2 Chronicles 18:1": "Micaiah Prophesies Against Ahab",

    // 2 Chronicles Chapter 19
    "2 Chronicles 19:1": "Jehoshaphat Appoints Judges",

    // 2 Chronicles Chapter 20
    "2 Chronicles 20:1": "Jehoshaphat Defeats Moab and Ammon",
    "2 Chronicles 20:31": "Jehoshaphat's Reign Ends",

    // 2 Chronicles Chapter 21
    "2 Chronicles 21:1": "Jehoram King of Judah",
    "2 Chronicles 21:12": "Elijah's Letter to Jehoram",

    // 2 Chronicles Chapter 22
    "2 Chronicles 22:1": "Ahaziah King of Judah",
    "2 Chronicles 22:10": "Athaliah Usurps the Throne",

    // 2 Chronicles Chapter 23
    "2 Chronicles 23:1": "Joash Made King",

    // 2 Chronicles Chapter 24
    "2 Chronicles 24:1": "Joash Repairs the Temple",
    "2 Chronicles 24:17": "Joash's Apostasy",
    "2 Chronicles 24:23": "Joash Killed",

    // 2 Chronicles Chapter 25
    "2 Chronicles 25:1": "Amaziah King of Judah",
    "2 Chronicles 25:14": "Amaziah's Idolatry",

    // 2 Chronicles Chapter 26
    "2 Chronicles 26:1": "Uzziah King of Judah",
    "2 Chronicles 26:16": "Uzziah's Pride and Leprosy",

    // 2 Chronicles Chapter 27
    "2 Chronicles 27:1": "Jotham King of Judah",

    // 2 Chronicles Chapter 28
    "2 Chronicles 28:1": "Ahaz King of Judah",
    "2 Chronicles 28:16": "Ahaz's Unfaithfulness",

    // 2 Chronicles Chapter 29
    "2 Chronicles 29:1": "Hezekiah Purifies the Temple",

    // 2 Chronicles Chapter 30
    "2 Chronicles 30:1": "Hezekiah Celebrates Passover",

    // 2 Chronicles Chapter 31
    "2 Chronicles 31:1": "Hezekiah's Religious Reforms",

    // 2 Chronicles Chapter 32
    "2 Chronicles 32:1": "Sennacherib Invades Judah",
    "2 Chronicles 32:24": "Hezekiah's Illness and Pride",
    "2 Chronicles 32:32": "Hezekiah's Death",

    // 2 Chronicles Chapter 33
    "2 Chronicles 33:1": "Manasseh King of Judah",
    "2 Chronicles 33:21": "Amon King of Judah",

    // 2 Chronicles Chapter 34
    "2 Chronicles 34:1": "Josiah King of Judah",
    "2 Chronicles 34:8": "The Book of the Law Found",

    // 2 Chronicles Chapter 35
    "2 Chronicles 35:1": "Josiah Celebrates Passover",
    "2 Chronicles 35:20": "Josiah's Death",

    // 2 Chronicles Chapter 36
    "2 Chronicles 36:1": "Jehoahaz King of Judah",
    "2 Chronicles 36:5": "Jehoiakim King of Judah",
    "2 Chronicles 36:9": "Jehoiachin King of Judah",
    "2 Chronicles 36:11": "Zedekiah King of Judah",
    "2 Chronicles 36:15": "The Fall of Jerusalem",
    "2 Chronicles 36:22": "Cyrus Allows the Exiles to Return",

    // Ezra Chapter 1
    "Ezra 1:1": "Cyrus Sends the Exiles Home",
    "Ezra 1:5": "Gifts for the Temple",

    // Ezra Chapter 2
    "Ezra 2:1": "The Returning Exiles",
    "Ezra 2:68": "Offerings for the Temple",

    // Ezra Chapter 3
    "Ezra 3:1": "The Altar Rebuilt",
    "Ezra 3:7": "Temple Reconstruction Begins",
    "Ezra 3:10": "The Foundation Laid",

    // Ezra Chapter 4
    "Ezra 4:1": "Opposition to the Rebuilding",
    "Ezra 4:7": "Letters to Artaxerxes",
    "Ezra 4:17": "The King's Reply",

    // Ezra Chapter 5
    "Ezra 5:1": "The Rebuilding Resumes",
    "Ezra 5:3": "Tattenai's Letter to Darius",

    // Ezra Chapter 6
    "Ezra 6:1": "Darius Supports the Rebuilding",
    "Ezra 6:13": "The Temple Completed",
    "Ezra 6:19": "Passover Celebrated",

    // Ezra Chapter 7
    "Ezra 7:1": "Ezra Comes to Jerusalem",
    "Ezra 7:11": "Artaxerxes' Letter to Ezra",

    // Ezra Chapter 8
    "Ezra 8:1": "The Returning Exiles with Ezra",
    "Ezra 8:21": "Fasting and Prayer",
    "Ezra 8:31": "The Journey to Jerusalem",

    // Ezra Chapter 9
    "Ezra 9:1": "Ezra's Prayer About Intermarriage",

    // Ezra Chapter 10
    "Ezra 10:1": "The People's Confession",
    "Ezra 10:9": "The Assembly",
    "Ezra 10:18": "Those Guilty of Intermarriage",

    // Nehemiah Chapter 1
    "Nehemiah 1:1": "Nehemiah's Prayer",

    // Nehemiah Chapter 2
    "Nehemiah 2:1": "Nehemiah Sent to Jerusalem",
    "Nehemiah 2:11": "Nehemiah Inspects the Walls",

    // Nehemiah Chapter 3
    "Nehemiah 3:1": "The Rebuilding of the Wall",

    // Nehemiah Chapter 4
    "Nehemiah 4:1": "Opposition to the Rebuilding",
    "Nehemiah 4:15": "The Work Continues",

    // Nehemiah Chapter 5
    "Nehemiah 5:1": "Nehemiah Defends the Oppressed",

    // Nehemiah Chapter 6
    "Nehemiah 6:1": "The Wall Completed Despite Opposition",

    // Nehemiah Chapter 7
    "Nehemiah 7:1": "Guards Appointed",
    "Nehemiah 7:5": "The List of Returning Exiles",

    // Nehemiah Chapter 8
    "Nehemiah 8:1": "Ezra Reads the Law",
    "Nehemiah 8:13": "The Feast of Tabernacles",

    // Nehemiah Chapter 9
    "Nehemiah 9:1": "The Israelites Confess Their Sins",
    "Nehemiah 9:5": "The Levites' Prayer",

    // Nehemiah Chapter 10
    "Nehemiah 10:1": "The Covenant Renewed",

    // Nehemiah Chapter 11
    "Nehemiah 11:1": "The Resettlement of Jerusalem",

    // Nehemiah Chapter 12
    "Nehemiah 12:1": "Priests and Levites",
    "Nehemiah 12:27": "Dedication of the Wall",

    // Nehemiah Chapter 13
    "Nehemiah 13:1": "Nehemiah's Final Reforms",

    // Esther Chapter 1
    "Esther 1:1": "Queen Vashti Deposed",

    // Esther Chapter 2
    "Esther 2:1": "Esther Made Queen",
    "Esther 2:19": "Mordecai Uncovers a Plot",

    // Esther Chapter 3
    "Esther 3:1": "Haman's Plot to Destroy the Jews",

    // Esther Chapter 4
    "Esther 4:1": "Mordecai Asks Esther to Help",
    "Esther 4:13": "For Such a Time as This",

    // Esther Chapter 5
    "Esther 5:1": "Esther's Banquet",
    "Esther 5:9": "Haman's Rage Against Mordecai",

    // Esther Chapter 6
    "Esther 6:1": "Mordecai Honored",

    // Esther Chapter 7
    "Esther 7:1": "Haman Hanged",

    // Esther Chapter 8
    "Esther 8:1": "The King's Edict on Behalf of the Jews",

    // Esther Chapter 9
    "Esther 9:1": "The Jews Destroy Their Enemies",
    "Esther 9:20": "The Feast of Purim Instituted",

    // Esther Chapter 10
    "Esther 10:1": "Mordecai's Greatness",

    // Job Chapter 1
    "Job 1:1": "Job's Character and Wealth",
    "Job 1:6": "Satan Tests Job",
    "Job 1:13": "Job Loses His Property and Children",
    "Job 1:20": "Job's Faithful Response",

    // Job Chapter 2
    "Job 2:1": "Satan Attacks Job's Health",
    "Job 2:11": "Job's Three Friends Arrive",

    // Job Chapter 3
    "Job 3:1": "Job Curses the Day of His Birth",

    // Job Chapter 4
    "Job 4:1": "Eliphaz Speaks — The Innocent Do Not Suffer",

    // Job Chapter 5
    "Job 5:1": "Eliphaz Continues — Call Upon God",
    "Job 5:17": "God Disciplines and Restores",

    // Job Chapter 6
    "Job 6:1": "Job Replies — My Complaint Is Just",

    // Job Chapter 7
    "Job 7:1": "Job Continues — Life Is Hard",
    "Job 7:11": "Job Questions God",

    // Job Chapter 8
    "Job 8:1": "Bildad Speaks — God Is Just",

    // Job Chapter 9
    "Job 9:1": "Job Replies — How Can Man Be Just Before God?",

    // Job Chapter 10
    "Job 10:1": "Job's Complaint to God",

    // Job Chapter 11
    "Job 11:1": "Zophar Speaks — Repent and Be Restored",

    // Job Chapter 12
    "Job 12:1": "Job Replies — I Am Not Inferior to You",

    // Job Chapter 13
    "Job 13:1": "Job Continues — I Will Argue My Case Before God",

    // Job Chapter 14
    "Job 14:1": "Job Reflects on Human Mortality",

    // Job Chapter 15
    "Job 15:1": "Eliphaz's Second Speech — The Wicked Suffer",

    // Job Chapter 16
    "Job 16:1": "Job Replies — Miserable Comforters",

    // Job Chapter 17
    "Job 17:1": "Job Continues — My Spirit Is Broken",

    // Job Chapter 18
    "Job 18:1": "Bildad's Second Speech — The Fate of the Wicked",

    // Job Chapter 19
    "Job 19:1": "Job Replies — My Redeemer Lives",

    // Job Chapter 20
    "Job 20:1": "Zophar's Second Speech — The Triumph of the Wicked Is Brief",

    // Job Chapter 21
    "Job 21:1": "Job Replies — The Wicked Often Prosper",

    // Job Chapter 22
    "Job 22:1": "Eliphaz's Third Speech — Submit to God",

    // Job Chapter 23
    "Job 23:1": "Job Replies — Oh, That I Could Find God",

    // Job Chapter 24
    "Job 24:1": "Job Continues — Why Does God Allow Injustice?",

    // Job Chapter 25
    "Job 25:1": "Bildad's Third Speech — Man Cannot Be Righteous",

    // Job Chapter 26
    "Job 26:1": "Job Replies — God's Power Is Beyond Understanding",

    // Job Chapter 27
    "Job 27:1": "Job's Final Defense",

    // Job Chapter 28
    "Job 28:1": "The Place of Wisdom",

    // Job Chapter 29
    "Job 29:1": "Job's Former Blessings",

    // Job Chapter 30
    "Job 30:1": "Job's Present Misery",

    // Job Chapter 31
    "Job 31:1": "Job's Final Oath of Innocence",

    // Job Chapter 32
    "Job 32:1": "Elihu Speaks — His Anger Against Job and His Friends",

    // Job Chapter 33
    "Job 33:1": "Elihu Continues — God Speaks in Various Ways",

    // Job Chapter 34
    "Job 34:1": "Elihu Continues — God Is Just",

    // Job Chapter 35
    "Job 35:1": "Elihu Continues — God Does Not Answer Pride",

    // Job Chapter 36
    "Job 36:1": "Elihu Continues — God Is Great and Just",

    // Job Chapter 37
    "Job 37:1": "Elihu Continues — God's Majesty in the Storm",

    // Job Chapter 38
    "Job 38:1": "The LORD Answers Job — Where Were You?",
    "Job 38:22": "God Questions Job About Nature",

    // Job Chapter 39
    "Job 39:1": "God Questions Job About Animals",

    // Job Chapter 40
    "Job 40:1": "Job's Response to God",
    "Job 40:6": "The LORD's Second Speech — Behemoth",

    // Job Chapter 41
    "Job 41:1": "Can You Draw Out Leviathan?",

    // Job Chapter 42
    "Job 42:1": "Job's Repentance and Restoration",
    "Job 42:10": "The LORD Restores Job's Fortunes",

    // Psalms Chapter 1
    "Psalms 1:1": "The Two Ways",

    // Psalms Chapter 2
    "Psalms 2:1": "The LORD's Anointed King",

    // Psalms Chapter 3
    "Psalms 3:1": "A Morning Prayer for Deliverance",

    // Psalms Chapter 4
    "Psalms 4:1": "An Evening Prayer of Trust",

    // Psalms Chapter 5
    "Psalms 5:1": "A Morning Prayer for Guidance",

    // Psalms Chapter 6
    "Psalms 6:1": "Prayer in Deep Distress",

    // Psalms Chapter 7
    "Psalms 7:1": "Prayer for Vindication",

    // Psalms Chapter 8
    "Psalms 8:1": "The Majesty of God and the Dignity of Man",

    // Psalms Chapter 9
    "Psalms 9:1": "Thanksgiving for God's Justice",

    // Psalms Chapter 10
    "Psalms 10:1": "Why Do You Hide, O LORD?",

    // Psalms Chapter 11
    "Psalms 11:1": "In the LORD I Take Refuge",

    // Psalms Chapter 12
    "Psalms 12:1": "A Plea Against the Wicked",

    // Psalms Chapter 13
    "Psalms 13:1": "How Long, O LORD?",

    // Psalms Chapter 14
    "Psalms 14:1": "The Fool Says There Is No God",

    // Psalms Chapter 15
    "Psalms 15:1": "Who May Dwell in Your Sanctuary?",

    // Psalms Chapter 16
    "Psalms 16:1": "The Path of Life",

    // Psalms Chapter 17
    "Psalms 17:1": "A Prayer for Protection",

    // Psalms Chapter 18
    "Psalms 18:1": "The LORD Is My Rock and Fortress",

    // Psalms Chapter 19
    "Psalms 19:1": "The Heavens Declare God's Glory",
    "Psalms 19:7": "The Perfection of God's Law",

    // Psalms Chapter 20
    "Psalms 20:1": "Prayer for Victory",

    // Psalms Chapter 21
    "Psalms 21:1": "Thanksgiving for Victory",

    // Psalms Chapter 22
    "Psalms 22:1": "My God, My God, Why Have You Forsaken Me?",
    "Psalms 22:22": "Praise in the Assembly",

    // Psalms Chapter 23
    "Psalms 23:1": "The LORD Is My Shepherd",

    // Psalms Chapter 24
    "Psalms 24:1": "The King of Glory",

    // Psalms Chapter 25
    "Psalms 25:1": "Teach Me Your Paths",

    // Psalms Chapter 26
    "Psalms 26:1": "Vindicate Me, O LORD",

    // Psalms Chapter 27
    "Psalms 27:1": "The LORD Is My Light and Salvation",

    // Psalms Chapter 28
    "Psalms 28:1": "A Cry for Help",

    // Psalms Chapter 29
    "Psalms 29:1": "The Voice of the LORD",

    // Psalms Chapter 30
    "Psalms 30:1": "Thanksgiving for Deliverance",

    // Psalms Chapter 31
    "Psalms 31:1": "Into Your Hand I Commit My Spirit",

    // Psalms Chapter 32
    "Psalms 32:1": "Blessed Is the One Whose Sin Is Forgiven",

    // Psalms Chapter 33
    "Psalms 33:1": "Sing to the LORD a New Song",

    // Psalms Chapter 34
    "Psalms 34:1": "Taste and See That the LORD Is Good",

    // Psalms Chapter 35
    "Psalms 35:1": "Contend with Those Who Contend with Me",

    // Psalms Chapter 36
    "Psalms 36:1": "How Precious Is Your Steadfast Love",

    // Psalms Chapter 37
    "Psalms 37:1": "Trust in the LORD and Do Good",

    // Psalms Chapter 38
    "Psalms 38:1": "A Psalm of Confession and Distress",

    // Psalms Chapter 39
    "Psalms 39:1": "The Brevity of Life",

    // Psalms Chapter 40
    "Psalms 40:1": "I Waited Patiently for the LORD",

    // Psalms Chapter 41
    "Psalms 41:1": "Blessed Is the One Who Considers the Poor",

    // Psalms Chapter 42
    "Psalms 42:1": "As a Deer Pants for Water",

    // Psalms Chapter 43
    "Psalms 43:1": "Send Out Your Light and Truth",

    // Psalms Chapter 44
    "Psalms 44:1": "We Have Heard with Our Ears, O God",

    // Psalms Chapter 45
    "Psalms 45:1": "A Royal Wedding Song",

    // Psalms Chapter 46
    "Psalms 46:1": "God Is Our Refuge and Strength",

    // Psalms Chapter 47
    "Psalms 47:1": "Clap Your Hands, All Peoples",

    // Psalms Chapter 48
    "Psalms 48:1": "Great Is the LORD in Zion",

    // Psalms Chapter 49
    "Psalms 49:1": "Riches Cannot Ransom",

    // Psalms Chapter 50
    "Psalms 50:1": "The Mighty One Summons the Earth",

    // Psalms Chapter 51
    "Psalms 51:1": "Create in Me a Clean Heart, O God",

    // Psalms Chapter 52
    "Psalms 52:1": "The Fate of the Wicked",

    // Psalms Chapter 53
    "Psalms 53:1": "The Fool Says There Is No God",

    // Psalms Chapter 54
    "Psalms 54:1": "Save Me, O God, by Your Name",

    // Psalms Chapter 55
    "Psalms 55:1": "Cast Your Burden on the LORD",

    // Psalms Chapter 56
    "Psalms 56:1": "In God I Trust",

    // Psalms Chapter 57
    "Psalms 57:1": "Be Merciful to Me, O God",

    // Psalms Chapter 58
    "Psalms 58:1": "God the Righteous Judge",

    // Psalms Chapter 59
    "Psalms 59:1": "Deliver Me from My Enemies",

    // Psalms Chapter 60
    "Psalms 60:1": "A Prayer After Defeat",

    // Psalms Chapter 61
    "Psalms 61:1": "Lead Me to the Rock",

    // Psalms Chapter 62
    "Psalms 62:1": "My Soul Waits in Silence for God",

    // Psalms Chapter 63
    "Psalms 63:1": "My Soul Thirsts for You",

    // Psalms Chapter 64
    "Psalms 64:1": "Hide Me from the Wicked",

    // Psalms Chapter 65
    "Psalms 65:1": "You Crown the Year with Bounty",

    // Psalms Chapter 66
    "Psalms 66:1": "Come and See What God Has Done",

    // Psalms Chapter 67
    "Psalms 67:1": "May God Be Gracious to Us",

    // Psalms Chapter 68
    "Psalms 68:1": "God's Triumphant March",

    // Psalms Chapter 69
    "Psalms 69:1": "Save Me, O God",

    // Psalms Chapter 70
    "Psalms 70:1": "Make Haste to Help Me",

    // Psalms Chapter 71
    "Psalms 71:1": "A Prayer in Old Age",

    // Psalms Chapter 72
    "Psalms 72:1": "A Prayer for the King",

    // Psalms Chapter 73
    "Psalms 73:1": "God Is Good to the Pure in Heart",

    // Psalms Chapter 74
    "Psalms 74:1": "A Plea for God to Remember His People",

    // Psalms Chapter 75
    "Psalms 75:1": "God the Righteous Judge",

    // Psalms Chapter 76
    "Psalms 76:1": "God Is Known in Judah",

    // Psalms Chapter 77
    "Psalms 77:1": "I Will Remember the Deeds of the LORD",

    // Psalms Chapter 78
    "Psalms 78:1": "Tell the Coming Generation",

    // Psalms Chapter 79
    "Psalms 79:1": "How Long, O LORD?",

    // Psalms Chapter 80
    "Psalms 80:1": "Restore Us, O God",

    // Psalms Chapter 81
    "Psalms 81:1": "Sing Aloud to God Our Strength",

    // Psalms Chapter 82
    "Psalms 82:1": "God Presides in the Divine Council",

    // Psalms Chapter 83
    "Psalms 83:1": "O God, Do Not Keep Silence",

    // Psalms Chapter 84
    "Psalms 84:1": "How Lovely Is Your Dwelling Place",

    // Psalms Chapter 85
    "Psalms 85:1": "Restore Us Again, O God",

    // Psalms Chapter 86
    "Psalms 86:1": "Teach Me Your Way, O LORD",

    // Psalms Chapter 87
    "Psalms 87:1": "Glorious Things Are Spoken of Zion",

    // Psalms Chapter 88
    "Psalms 88:1": "A Prayer in Deep Darkness",

    // Psalms Chapter 89
    "Psalms 89:1": "I Will Sing of Your Steadfast Love Forever",

    // Psalms Chapter 90
    "Psalms 90:1": "Teach Us to Number Our Days",

    // Psalms Chapter 91
    "Psalms 91:1": "He Who Dwells in the Shelter of the Most High",

    // Psalms Chapter 92
    "Psalms 92:1": "It Is Good to Give Thanks to the LORD",

    // Psalms Chapter 93
    "Psalms 93:1": "The LORD Reigns",

    // Psalms Chapter 94
    "Psalms 94:1": "O LORD, God of Vengeance",

    // Psalms Chapter 95
    "Psalms 95:1": "Come, Let Us Worship and Bow Down",

    // Psalms Chapter 96
    "Psalms 96:1": "Sing to the LORD a New Song",

    // Psalms Chapter 97
    "Psalms 97:1": "The LORD Reigns, Let the Earth Rejoice",

    // Psalms Chapter 98
    "Psalms 98:1": "Make a Joyful Noise to the LORD",

    // Psalms Chapter 99
    "Psalms 99:1": "The LORD Is King, Holy Is He",

    // Psalms Chapter 100
    "Psalms 100:1": "Make a Joyful Noise, All the Earth",

    // Psalms Chapter 101
    "Psalms 101:1": "I Will Walk with Integrity",

    // Psalms Chapter 102
    "Psalms 102:1": "A Prayer of the Afflicted",

    // Psalms Chapter 103
    "Psalms 103:1": "Bless the LORD, O My Soul",

    // Psalms Chapter 104
    "Psalms 104:1": "O LORD, How Manifold Are Your Works",

    // Psalms Chapter 105
    "Psalms 105:1": "Give Thanks to the LORD",

    // Psalms Chapter 106
    "Psalms 106:1": "Praise the LORD for His Faithfulness",

    // Psalms Chapter 107
    "Psalms 107:1": "Give Thanks to the LORD, for He Is Good",

    // Psalms Chapter 108
    "Psalms 108:1": "My Heart Is Steadfast, O God",

    // Psalms Chapter 109
    "Psalms 109:1": "A Cry Against Enemies",

    // Psalms Chapter 110
    "Psalms 110:1": "Sit at My Right Hand",

    // Psalms Chapter 111
    "Psalms 111:1": "Great Are the Works of the LORD",

    // Psalms Chapter 112
    "Psalms 112:1": "Blessed Is the Man Who Fears the LORD",

    // Psalms Chapter 113
    "Psalms 113:1": "Who Is Like the LORD Our God?",

    // Psalms Chapter 114
    "Psalms 114:1": "When Israel Went Out from Egypt",

    // Psalms Chapter 115
    "Psalms 115:1": "Not to Us, O LORD",

    // Psalms Chapter 116
    "Psalms 116:1": "I Love the LORD",

    // Psalms Chapter 117
    "Psalms 117:1": "Praise the LORD, All Nations",

    // Psalms Chapter 118
    "Psalms 118:1": "His Steadfast Love Endures Forever",
    "Psalms 118:22": "The Stone the Builders Rejected",

    // Psalms Chapter 119
    "Psalms 119:1": "Aleph — Blessed Are Those Who Walk in the Law",
    "Psalms 119:9": "Beth — How Can a Young Man Keep His Way Pure?",
    "Psalms 119:17": "Gimel — Deal Bountifully with Your Servant",
    "Psalms 119:25": "Daleth — My Soul Clings to the Dust",
    "Psalms 119:33": "He — Teach Me, O LORD",
    "Psalms 119:41": "Waw — Let Your Steadfast Love Come to Me",
    "Psalms 119:49": "Zayin — Remember Your Word to Your Servant",
    "Psalms 119:57": "Heth — The LORD Is My Portion",
    "Psalms 119:65": "Teth — You Have Dealt Well with Your Servant",
    "Psalms 119:73": "Yodh — Your Hands Have Made Me",
    "Psalms 119:81": "Kaph — My Soul Longs for Your Salvation",
    "Psalms 119:89": "Lamedh — Forever, O LORD, Your Word Is Firm",
    "Psalms 119:97": "Mem — Oh How I Love Your Law",
    "Psalms 119:105": "Nun — Your Word Is a Lamp to My Feet",
    "Psalms 119:113": "Samekh — I Hate the Double-Minded",
    "Psalms 119:121": "Ayin — I Have Done What Is Just and Right",
    "Psalms 119:129": "Pe — Your Testimonies Are Wonderful",
    "Psalms 119:137": "Tsadhe — Righteous Are You, O LORD",
    "Psalms 119:145": "Qoph — I Cry with My Whole Heart",
    "Psalms 119:153": "Resh — Look on My Affliction",
    "Psalms 119:161": "Sin/Shin — Princes Persecute Me",
    "Psalms 119:169": "Taw — Let My Cry Come Before You",

    // Psalms Chapter 120
    "Psalms 120:1": "Deliver Me, O LORD",

    // Psalms Chapter 121
    "Psalms 121:1": "I Lift Up My Eyes to the Hills",

    // Psalms Chapter 122
    "Psalms 122:1": "Pray for the Peace of Jerusalem",

    // Psalms Chapter 123
    "Psalms 123:1": "Our Eyes Look to the LORD",

    // Psalms Chapter 124
    "Psalms 124:1": "If the LORD Had Not Been on Our Side",

    // Psalms Chapter 125
    "Psalms 125:1": "Those Who Trust in the LORD",

    // Psalms Chapter 126
    "Psalms 126:1": "Those Who Sow in Tears",

    // Psalms Chapter 127
    "Psalms 127:1": "Unless the LORD Builds the House",

    // Psalms Chapter 128
    "Psalms 128:1": "Blessed Is Everyone Who Fears the LORD",

    // Psalms Chapter 129
    "Psalms 129:1": "They Have Greatly Oppressed Me",

    // Psalms Chapter 130
    "Psalms 130:1": "Out of the Depths I Cry to You",

    // Psalms Chapter 131
    "Psalms 131:1": "My Heart Is Not Proud",

    // Psalms Chapter 132
    "Psalms 132:1": "Remember David's Hardships",

    // Psalms Chapter 133
    "Psalms 133:1": "How Good It Is When Brothers Dwell in Unity",

    // Psalms Chapter 134
    "Psalms 134:1": "Bless the LORD, All You Servants",

    // Psalms Chapter 135
    "Psalms 135:1": "Praise the LORD",

    // Psalms Chapter 136
    "Psalms 136:1": "His Steadfast Love Endures Forever",

    // Psalms Chapter 137
    "Psalms 137:1": "By the Waters of Babylon",

    // Psalms Chapter 138
    "Psalms 138:1": "I Give You Thanks with My Whole Heart",

    // Psalms Chapter 139
    "Psalms 139:1": "You Have Searched Me and Known Me",

    // Psalms Chapter 140
    "Psalms 140:1": "Deliver Me from Evil Men",

    // Psalms Chapter 141
    "Psalms 141:1": "Set a Guard Over My Mouth",

    // Psalms Chapter 142
    "Psalms 142:1": "No One Cares for My Soul",

    // Psalms Chapter 143
    "Psalms 143:1": "Hear My Prayer, O LORD",

    // Psalms Chapter 144
    "Psalms 144:1": "Blessed Be the LORD, My Rock",

    // Psalms Chapter 145
    "Psalms 145:1": "I Will Extol You, My God and King",

    // Psalms Chapter 146
    "Psalms 146:1": "Praise the LORD, O My Soul",

    // Psalms Chapter 147
    "Psalms 147:1": "How Good It Is to Sing Praises",

    // Psalms Chapter 148
    "Psalms 148:1": "Praise the LORD from the Heavens",

    // Psalms Chapter 149
    "Psalms 149:1": "Sing to the LORD a New Song",

    // Psalms Chapter 150
    "Psalms 150:1": "Praise the LORD! Let Everything Praise the LORD",

    // Proverbs Chapter 1
    "Proverbs 1:1": "The Purpose of Proverbs",
    "Proverbs 1:7": "The Fear of the LORD Is the Beginning of Knowledge",
    "Proverbs 1:8": "Warning Against Sinful Enticements",
    "Proverbs 1:20": "Wisdom Calls Out",

    // Proverbs Chapter 2
    "Proverbs 2:1": "The Value of Wisdom",

    // Proverbs Chapter 3
    "Proverbs 3:1": "Trust in the LORD with All Your Heart",
    "Proverbs 3:11": "The LORD's Discipline",
    "Proverbs 3:13": "Blessed Is the One Who Finds Wisdom",
    "Proverbs 3:21": "Do Not Let Wisdom Depart from Your Eyes",

    // Proverbs Chapter 4
    "Proverbs 4:1": "A Father's Instruction",
    "Proverbs 4:10": "The Path of the Righteous",
    "Proverbs 4:20": "Guard Your Heart",

    // Proverbs Chapter 5
    "Proverbs 5:1": "Warning Against Adultery",

    // Proverbs Chapter 6
    "Proverbs 6:1": "Practical Warnings",
    "Proverbs 6:6": "Go to the Ant, You Sluggard",
    "Proverbs 6:12": "The Worthless Person",
    "Proverbs 6:16": "Seven Things the LORD Hates",
    "Proverbs 6:20": "Warning Against Adultery",

    // Proverbs Chapter 7
    "Proverbs 7:1": "Warning Against the Adulteress",

    // Proverbs Chapter 8
    "Proverbs 8:1": "Wisdom's Call",
    "Proverbs 8:22": "Wisdom's Role in Creation",

    // Proverbs Chapter 9
    "Proverbs 9:1": "Wisdom's Invitation",
    "Proverbs 9:13": "Folly's Invitation",

    // Proverbs Chapter 10
    "Proverbs 10:1": "The Proverbs of Solomon",

    // Proverbs Chapter 11
    "Proverbs 11:1": "A False Balance Is an Abomination",

    // Proverbs Chapter 12
    "Proverbs 12:1": "Whoever Loves Discipline Loves Knowledge",

    // Proverbs Chapter 13
    "Proverbs 13:1": "A Wise Son Hears His Father's Instruction",

    // Proverbs Chapter 14
    "Proverbs 14:1": "The Wise Woman Builds Her House",

    // Proverbs Chapter 15
    "Proverbs 15:1": "A Soft Answer Turns Away Wrath",

    // Proverbs Chapter 16
    "Proverbs 16:1": "The Plans of the Heart Belong to Man",

    // Proverbs Chapter 17
    "Proverbs 17:1": "Better Is a Dry Morsel with Quiet",

    // Proverbs Chapter 18
    "Proverbs 18:1": "Whoever Isolates Himself Seeks His Own Desire",

    // Proverbs Chapter 19
    "Proverbs 19:1": "Better Is a Poor Person Who Walks in Integrity",

    // Proverbs Chapter 20
    "Proverbs 20:1": "Wine Is a Mocker",

    // Proverbs Chapter 21
    "Proverbs 21:1": "The King's Heart Is in the Hand of the LORD",

    // Proverbs Chapter 22
    "Proverbs 22:1": "A Good Name Is to Be Chosen",
    "Proverbs 22:17": "The Sayings of the Wise",

    // Proverbs Chapter 23
    "Proverbs 23:1": "When You Sit to Eat with a Ruler",
    "Proverbs 23:19": "Listen, My Son",

    // Proverbs Chapter 24
    "Proverbs 24:1": "Be Not Envious of Evil Men",
    "Proverbs 24:23": "Further Sayings of the Wise",

    // Proverbs Chapter 25
    "Proverbs 25:1": "More Proverbs of Solomon",

    // Proverbs Chapter 26
    "Proverbs 26:1": "Like Snow in Summer",

    // Proverbs Chapter 27
    "Proverbs 27:1": "Do Not Boast About Tomorrow",

    // Proverbs Chapter 28
    "Proverbs 28:1": "The Wicked Flee When No One Pursues",

    // Proverbs Chapter 29
    "Proverbs 29:1": "He Who Is Often Reproved",

    // Proverbs Chapter 30
    "Proverbs 30:1": "The Words of Agur",

    // Proverbs Chapter 31
    "Proverbs 31:1": "The Words of King Lemuel",
    "Proverbs 31:10": "The Excellent Wife",

    // Ecclesiastes Chapter 1
    "Ecclesiastes 1:1": "All Is Vanity",
    "Ecclesiastes 1:12": "The Vanity of Wisdom",

    // Ecclesiastes Chapter 2
    "Ecclesiastes 2:1": "The Vanity of Pleasure",
    "Ecclesiastes 2:12": "The Vanity of Wisdom and Folly",
    "Ecclesiastes 2:18": "The Vanity of Toil",

    // Ecclesiastes Chapter 3
    "Ecclesiastes 3:1": "A Time for Everything",
    "Ecclesiastes 3:16": "The Injustice of Life",

    // Ecclesiastes Chapter 4
    "Ecclesiastes 4:1": "Oppression, Toil, and Friendlessness",

    // Ecclesiastes Chapter 5
    "Ecclesiastes 5:1": "Fear God",
    "Ecclesiastes 5:8": "The Vanity of Wealth",

    // Ecclesiastes Chapter 6
    "Ecclesiastes 6:1": "The Vanity of Wealth and Honor",

    // Ecclesiastes Chapter 7
    "Ecclesiastes 7:1": "The Value of Wisdom",

    // Ecclesiastes Chapter 8
    "Ecclesiastes 8:1": "Obey the King",
    "Ecclesiastes 8:9": "The Wicked and the Righteous",

    // Ecclesiastes Chapter 9
    "Ecclesiastes 9:1": "Death Comes to All",
    "Ecclesiastes 9:13": "Wisdom Better Than Folly",

    // Ecclesiastes Chapter 10
    "Ecclesiastes 10:1": "Miscellaneous Observations",

    // Ecclesiastes Chapter 11
    "Ecclesiastes 11:1": "Cast Your Bread Upon the Waters",
    "Ecclesiastes 11:7": "Rejoice in Your Youth",

    // Ecclesiastes Chapter 12
    "Ecclesiastes 12:1": "Remember Your Creator",
    "Ecclesiastes 12:9": "The Conclusion",

    // Song of Solomon Chapter 1
    "Song of Solomon 1:1": "The Song of Songs",
    "Song of Solomon 1:2": "The Bride's Desire",

    // Song of Solomon Chapter 2
    "Song of Solomon 2:1": "The Bride and the Bridegroom",
    "Song of Solomon 2:8": "The Bride Hears Her Beloved",

    // Song of Solomon Chapter 3
    "Song of Solomon 3:1": "The Bride's Dream",
    "Song of Solomon 3:6": "Solomon's Wedding Procession",

    // Song of Solomon Chapter 4
    "Song of Solomon 4:1": "The Bridegroom Praises the Bride",

    // Song of Solomon Chapter 5
    "Song of Solomon 5:1": "The Bride and Bridegroom Feast",
    "Song of Solomon 5:2": "The Bride's Second Dream",

    // Song of Solomon Chapter 6
    "Song of Solomon 6:1": "Where Has Your Beloved Gone?",
    "Song of Solomon 6:4": "The Bridegroom Praises the Bride",

    // Song of Solomon Chapter 7
    "Song of Solomon 7:1": "How Beautiful Are Your Feet",

    // Song of Solomon Chapter 8
    "Song of Solomon 8:1": "The Bride's Love",
    "Song of Solomon 8:8": "We Have a Little Sister",

    // Isaiah Chapter 1
    "Isaiah 1:1": "The Vision of Isaiah",
    "Isaiah 1:2": "Israel's Rebellion",
    "Isaiah 1:10": "The Worthlessness of Israel's Worship",
    "Isaiah 1:18": "Come, Let Us Reason Together",
    "Isaiah 1:21": "The Unfaithful City",

    // Isaiah Chapter 2
    "Isaiah 2:1": "The Mountain of the LORD",
    "Isaiah 2:6": "The Day of the LORD",

    // Isaiah Chapter 3
    "Isaiah 3:1": "Judgment on Judah and Jerusalem",
    "Isaiah 3:16": "Judgment on the Daughters of Zion",

    // Isaiah Chapter 4
    "Isaiah 4:1": "Seven Women",
    "Isaiah 4:2": "The Branch of the LORD",

    // Isaiah Chapter 5
    "Isaiah 5:1": "The Song of the Vineyard",
    "Isaiah 5:8": "Woes Upon the Wicked",
    "Isaiah 5:26": "The LORD's Anger Against Israel",

    // Isaiah Chapter 6
    "Isaiah 6:1": "Isaiah's Vision of the LORD",
    "Isaiah 6:8": "Here Am I! Send Me",

    // Isaiah Chapter 7
    "Isaiah 7:1": "The Sign of Immanuel",

    // Isaiah Chapter 8
    "Isaiah 8:1": "The Coming Assyrian Invasion",
    "Isaiah 8:11": "Fear God, Wait for the LORD",

    // Isaiah Chapter 9
    "Isaiah 9:1": "For to Us a Child Is Born",
    "Isaiah 9:8": "Judgment on Israel's Arrogance",

    // Isaiah Chapter 10
    "Isaiah 10:1": "Woe to the Unjust",
    "Isaiah 10:5": "Assyria, the Rod of God's Anger",
    "Isaiah 10:20": "The Remnant of Israel Will Return",

    // Isaiah Chapter 11
    "Isaiah 11:1": "The Righteous Reign of the Branch",
    "Isaiah 11:10": "The Remnant Recovered",

    // Isaiah Chapter 12
    "Isaiah 12:1": "A Song of Thanksgiving",

    // Isaiah Chapter 13
    "Isaiah 13:1": "The Burden Against Babylon",

    // Isaiah Chapter 14
    "Isaiah 14:1": "Israel's Restoration",
    "Isaiah 14:4": "The Fall of the King of Babylon",
    "Isaiah 14:12": "How You Have Fallen from Heaven, O Lucifer",
    "Isaiah 14:24": "Assyria Will Be Destroyed",
    "Isaiah 14:28": "The Burden Against Philistia",

    // Isaiah Chapter 15
    "Isaiah 15:1": "The Burden Against Moab",

    // Isaiah Chapter 16
    "Isaiah 16:1": "Moab's Plea for Refuge",
    "Isaiah 16:13": "The Prophecy Against Moab",

    // Isaiah Chapter 17
    "Isaiah 17:1": "The Burden Against Damascus",

    // Isaiah Chapter 18
    "Isaiah 18:1": "The Burden Against Cush",

    // Isaiah Chapter 19
    "Isaiah 19:1": "The Burden Against Egypt",
    "Isaiah 19:16": "The LORD Will Strike and Heal Egypt",

    // Isaiah Chapter 20
    "Isaiah 20:1": "Isaiah Walks Naked as a Sign",

    // Isaiah Chapter 21
    "Isaiah 21:1": "The Burden Against Babylon",
    "Isaiah 21:11": "The Burden Against Edom",
    "Isaiah 21:13": "The Burden Against Arabia",

    // Isaiah Chapter 22
    "Isaiah 22:1": "The Burden Against the Valley of Vision",
    "Isaiah 22:15": "Shebna's Disgrace and Eliakim's Promotion",

    // Isaiah Chapter 23
    "Isaiah 23:1": "The Burden Against Tyre",

    // Isaiah Chapter 24
    "Isaiah 24:1": "The LORD's Judgment on the Earth",

    // Isaiah Chapter 25
    "Isaiah 25:1": "Praise for the LORD's Favor",
    "Isaiah 25:6": "A Feast for All Peoples",

    // Isaiah Chapter 26
    "Isaiah 26:1": "A Song of Salvation",

    // Isaiah Chapter 27
    "Isaiah 27:1": "The Deliverance of Israel",

    // Isaiah Chapter 28
    "Isaiah 28:1": "Woe to Ephraim",
    "Isaiah 28:14": "A Cornerstone in Zion",

    // Isaiah Chapter 29
    "Isaiah 29:1": "Woe to the City of David",
    "Isaiah 29:13": "Hypocrisy Rebuked",

    // Isaiah Chapter 30
    "Isaiah 30:1": "Woe to the Rebellious Children",
    "Isaiah 30:18": "The LORD Will Be Gracious",

    // Isaiah Chapter 31
    "Isaiah 31:1": "Woe to Those Who Trust in Egypt",

    // Isaiah Chapter 32
    "Isaiah 32:1": "A Righteous King",
    "Isaiah 32:9": "The Women of Jerusalem",

    // Isaiah Chapter 33
    "Isaiah 33:1": "Woe to the Destroyer",
    "Isaiah 33:13": "The Sinners in Zion",

    // Isaiah Chapter 34
    "Isaiah 34:1": "God's Judgment on the Nations",

    // Isaiah Chapter 35
    "Isaiah 35:1": "The Glory of Zion",

    // Isaiah Chapter 36
    "Isaiah 36:1": "Sennacherib Threatens Jerusalem",

    // Isaiah Chapter 37
    "Isaiah 37:1": "Hezekiah's Prayer",
    "Isaiah 37:21": "Isaiah's Prophecy",
    "Isaiah 37:36": "The Angel Destroys the Assyrians",

    // Isaiah Chapter 38
    "Isaiah 38:1": "Hezekiah's Illness and Recovery",
    "Isaiah 38:9": "Hezekiah's Song of Thanksgiving",

    // Isaiah Chapter 39
    "Isaiah 39:1": "Envoys from Babylon",

    // Isaiah Chapter 40
    "Isaiah 40:1": "Comfort for God's People",
    "Isaiah 40:9": "Here Is Your God",
    "Isaiah 40:12": "Who Can Be Compared to God?",
    "Isaiah 40:27": "The LORD Is the Everlasting God",

    // Isaiah Chapter 41
    "Isaiah 41:1": "God's Help to Israel",
    "Isaiah 41:21": "The Futility of Idols",

    // Isaiah Chapter 42
    "Isaiah 42:1": "The Servant of the LORD",
    "Isaiah 42:10": "A New Song of Praise",
    "Isaiah 42:18": "Israel's Blindness",

    // Isaiah Chapter 43
    "Isaiah 43:1": "Israel's Only Savior",
    "Isaiah 43:14": "Deliverance Promised",
    "Isaiah 43:22": "Israel's Unfaithfulness",

    // Isaiah Chapter 44
    "Isaiah 44:1": "The LORD Has Chosen Israel",
    "Isaiah 44:9": "The Folly of Idolatry",
    "Isaiah 44:21": "The LORD Redeems Israel",
    "Isaiah 44:24": "Jerusalem to Be Restored",

    // Isaiah Chapter 45
    "Isaiah 45:1": "Cyrus God's Instrument",
    "Isaiah 45:9": "Woe to Him Who Quarrels with His Maker",
    "Isaiah 45:14": "The LORD, the Only Savior",

    // Isaiah Chapter 46
    "Isaiah 46:1": "The Idols of Babylon",
    "Isaiah 46:5": "To Whom Will You Compare Me?",

    // Isaiah Chapter 47
    "Isaiah 47:1": "The Humiliation of Babylon",

    // Isaiah Chapter 48
    "Isaiah 48:1": "Deliverance Promised",
    "Isaiah 48:12": "The LORD's Ancient Plan",

    // Isaiah Chapter 49
    "Isaiah 49:1": "The Servant's Mission",
    "Isaiah 49:14": "Zion Restored",

    // Isaiah Chapter 50
    "Isaiah 50:1": "Israel's Sin",
    "Isaiah 50:4": "The Obedience of the Servant",

    // Isaiah Chapter 51
    "Isaiah 51:1": "Salvation for Zion",
    "Isaiah 51:17": "The Cup of the LORD's Wrath",

    // Isaiah Chapter 52
    "Isaiah 52:1": "Awake, Awake, O Zion",
    "Isaiah 52:7": "How Beautiful Are the Feet",
    "Isaiah 52:13": "The Suffering Servant",

    // Isaiah Chapter 53
    "Isaiah 53:1": "Who Has Believed Our Message?",
    "Isaiah 53:4": "He Was Pierced for Our Transgressions",
    "Isaiah 53:10": "The LORD's Good Plan",

    // Isaiah Chapter 54
    "Isaiah 54:1": "The Future Glory of Zion",

    // Isaiah Chapter 55
    "Isaiah 55:1": "The Invitation to Abundant Life",
    "Isaiah 55:6": "Seek the LORD While He May Be Found",

    // Isaiah Chapter 56
    "Isaiah 56:1": "Salvation for Foreigners",
    "Isaiah 56:9": "Israel's Blind Watchmen",

    // Isaiah Chapter 57
    "Isaiah 57:1": "The Righteous Perish",
    "Isaiah 57:14": "Healing for the Repentant",

    // Isaiah Chapter 58
    "Isaiah 58:1": "True Fasting",

    // Isaiah Chapter 59
    "Isaiah 59:1": "Sin Separates from God",
    "Isaiah 59:15": "The Redeemer Will Come to Zion",

    // Isaiah Chapter 60
    "Isaiah 60:1": "Arise, Shine, for Your Light Has Come",

    // Isaiah Chapter 61
    "Isaiah 61:1": "The Year of the LORD's Favor",
    "Isaiah 61:10": "Clothed with Salvation",

    // Isaiah Chapter 62
    "Isaiah 62:1": "Zion's New Name",

    // Isaiah Chapter 63
    "Isaiah 63:1": "God's Vengeance on the Nations",
    "Isaiah 63:7": "God's Mercy Remembered",

    // Isaiah Chapter 64
    "Isaiah 64:1": "Prayer for Mercy",

    // Isaiah Chapter 65
    "Isaiah 65:1": "Judgment and Salvation",
    "Isaiah 65:17": "New Heavens and a New Earth",

    // Isaiah Chapter 66
    "Isaiah 66:1": "Heaven Is My Throne",
    "Isaiah 66:10": "Rejoice with Jerusalem",
    "Isaiah 66:18": "All Nations Will Come",

    // Jeremiah Chapter 1
    "Jeremiah 1:1": "The Call of Jeremiah",
    "Jeremiah 1:11": "Two Visions",

    // Jeremiah Chapter 2
    "Jeremiah 2:1": "Israel's Apostasy",
    "Jeremiah 2:14": "The Results of Israel's Sin",

    // Jeremiah Chapter 3
    "Jeremiah 3:1": "Unfaithful Israel",
    "Jeremiah 3:11": "A Call to Repentance",

    // Jeremiah Chapter 4
    "Jeremiah 4:1": "A Call to Repentance",
    "Jeremiah 4:5": "Disaster from the North",

    // Jeremiah Chapter 5
    "Jeremiah 5:1": "Jerusalem's Godlessness",
    "Jeremiah 5:14": "Coming Judgment",

    // Jeremiah Chapter 6
    "Jeremiah 6:1": "The Siege of Jerusalem",
    "Jeremiah 6:16": "Stand at the Crossroads",

    // Jeremiah Chapter 7
    "Jeremiah 7:1": "Trust Not in Lying Words",
    "Jeremiah 7:21": "Obedience, Not Sacrifice",

    // Jeremiah Chapter 8
    "Jeremiah 8:1": "The Sin and Punishment of Judah",
    "Jeremiah 8:18": "Jeremiah's Grief",

    // Jeremiah Chapter 9
    "Jeremiah 9:1": "Jeremiah Weeps for the People",
    "Jeremiah 9:17": "A Lament for Zion",
    "Jeremiah 9:23": "Let Him Who Boasts Boast in the LORD",

    // Jeremiah Chapter 10
    "Jeremiah 10:1": "Idols and the True God",
    "Jeremiah 10:17": "The Coming Exile",

    // Jeremiah Chapter 11
    "Jeremiah 11:1": "The Broken Covenant",
    "Jeremiah 11:18": "The Plot Against Jeremiah",

    // Jeremiah Chapter 12
    "Jeremiah 12:1": "Jeremiah's Question",
    "Jeremiah 12:7": "The LORD's Answer",

    // Jeremiah Chapter 13
    "Jeremiah 13:1": "The Linen Belt",
    "Jeremiah 13:12": "The Wineskins",
    "Jeremiah 13:15": "The Captivity Threatened",

    // Jeremiah Chapter 14
    "Jeremiah 14:1": "The Drought",
    "Jeremiah 14:7": "Prayer for Mercy",
    "Jeremiah 14:13": "Lying Prophets",

    // Jeremiah Chapter 15
    "Jeremiah 15:1": "The LORD's Answer",
    "Jeremiah 15:10": "Jeremiah's Complaint",

    // Jeremiah Chapter 16
    "Jeremiah 16:1": "Jeremiah Forbidden to Marry",
    "Jeremiah 16:14": "Restoration Promised",

    // Jeremiah Chapter 17
    "Jeremiah 17:1": "Judah's Sin Written with an Iron Pen",
    "Jeremiah 17:5": "Trust in Man Versus Trust in God",
    "Jeremiah 17:9": "The Heart Is Deceitful",
    "Jeremiah 17:19": "Hallow the Sabbath",

    // Jeremiah Chapter 18
    "Jeremiah 18:1": "The Potter and the Clay",
    "Jeremiah 18:18": "A Plot Against Jeremiah",

    // Jeremiah Chapter 19
    "Jeremiah 19:1": "The Broken Flask",

    // Jeremiah Chapter 20
    "Jeremiah 20:1": "Jeremiah Persecuted",
    "Jeremiah 20:7": "Jeremiah's Complaint",

    // Jeremiah Chapter 21
    "Jeremiah 21:1": "Jerusalem Will Fall to Babylon",

    // Jeremiah Chapter 22
    "Jeremiah 22:1": "Message to the House of David",
    "Jeremiah 22:10": "Messages Concerning Kings",

    // Jeremiah Chapter 23
    "Jeremiah 23:1": "The Righteous Branch",
    "Jeremiah 23:9": "Lying Prophets",

    // Jeremiah Chapter 24
    "Jeremiah 24:1": "The Good and Bad Figs",

    // Jeremiah Chapter 25
    "Jeremiah 25:1": "Seventy Years of Captivity",
    "Jeremiah 25:15": "The Cup of God's Wrath",

    // Jeremiah Chapter 26
    "Jeremiah 26:1": "Jeremiah Threatened with Death",

    // Jeremiah Chapter 27
    "Jeremiah 27:1": "The Yoke of Babylon",

    // Jeremiah Chapter 28
    "Jeremiah 28:1": "Hananiah's False Prophecy",

    // Jeremiah Chapter 29
    "Jeremiah 29:1": "Letter to the Exiles",
    "Jeremiah 29:15": "False Prophets in Babylon",

    // Jeremiah Chapter 30
    "Jeremiah 30:1": "Restoration Promised",

    // Jeremiah Chapter 31
    "Jeremiah 31:1": "Israel's Restoration",
    "Jeremiah 31:15": "Rachel Weeping for Her Children",
    "Jeremiah 31:27": "A New Covenant",

    // Jeremiah Chapter 32
    "Jeremiah 32:1": "Jeremiah Buys a Field",
    "Jeremiah 32:16": "Jeremiah's Prayer",
    "Jeremiah 32:26": "The LORD's Answer",

    // Jeremiah Chapter 33
    "Jeremiah 33:1": "The LORD's Assurance",
    "Jeremiah 33:14": "The Righteous Branch",

    // Jeremiah Chapter 34
    "Jeremiah 34:1": "Zedekiah Warned",
    "Jeremiah 34:8": "The Broken Covenant with the Slaves",

    // Jeremiah Chapter 35
    "Jeremiah 35:1": "The Rechabites' Obedience",

    // Jeremiah Chapter 36
    "Jeremiah 36:1": "Jeremiah's Scroll Read",
    "Jeremiah 36:20": "The King Burns the Scroll",

    // Jeremiah Chapter 37
    "Jeremiah 37:1": "Jeremiah Warns Zedekiah",
    "Jeremiah 37:11": "Jeremiah Imprisoned",

    // Jeremiah Chapter 38
    "Jeremiah 38:1": "Jeremiah Thrown into a Cistern",
    "Jeremiah 38:14": "Zedekiah Questions Jeremiah",

    // Jeremiah Chapter 39
    "Jeremiah 39:1": "The Fall of Jerusalem",
    "Jeremiah 39:11": "Jeremiah Released",

    // Jeremiah Chapter 40
    "Jeremiah 40:1": "Jeremiah Remains in Judah",
    "Jeremiah 40:7": "Gedaliah Made Governor",

    // Jeremiah Chapter 41
    "Jeremiah 41:1": "Gedaliah Assassinated",

    // Jeremiah Chapter 42
    "Jeremiah 42:1": "The People Ask Jeremiah to Pray",
    "Jeremiah 42:7": "The LORD's Answer",

    // Jeremiah Chapter 43
    "Jeremiah 43:1": "The Flight to Egypt",
    "Jeremiah 43:8": "Jeremiah Prophesies Against Egypt",

    // Jeremiah Chapter 44
    "Jeremiah 44:1": "Judgment for Idolatry",

    // Jeremiah Chapter 45
    "Jeremiah 45:1": "A Message to Baruch",

    // Jeremiah Chapter 46
    "Jeremiah 46:1": "Prophecies Against Egypt",
    "Jeremiah 46:27": "The LORD Will Save Israel",

    // Jeremiah Chapter 47
    "Jeremiah 47:1": "Prophecy Against the Philistines",

    // Jeremiah Chapter 48
    "Jeremiah 48:1": "Prophecy Against Moab",

    // Jeremiah Chapter 49
    "Jeremiah 49:1": "Prophecy Against Ammon",
    "Jeremiah 49:7": "Prophecy Against Edom",
    "Jeremiah 49:23": "Prophecy Against Damascus",
    "Jeremiah 49:28": "Prophecy Against Kedar and Hazor",
    "Jeremiah 49:34": "Prophecy Against Elam",

    // Jeremiah Chapter 50
    "Jeremiah 50:1": "Prophecy Against Babylon",

    // Jeremiah Chapter 51
    "Jeremiah 51:1": "The Destruction of Babylon",
    "Jeremiah 51:59": "Jeremiah's Command to Seraiah",

    // Jeremiah Chapter 52
    "Jeremiah 52:1": "The Fall of Jerusalem Recounted",
    "Jeremiah 52:31": "Jehoiachin Released",

    // Lamentations Chapter 1
    "Lamentations 1:1": "How Lonely Sits the City",

    // Lamentations Chapter 2
    "Lamentations 2:1": "God's Anger Against Jerusalem",

    // Lamentations Chapter 3
    "Lamentations 3:1": "Hope in the LORD's Faithfulness",
    "Lamentations 3:22": "Great Is Your Faithfulness",

    // Lamentations Chapter 4
    "Lamentations 4:1": "The Horrors of the Siege",

    // Lamentations Chapter 5
    "Lamentations 5:1": "A Prayer for Restoration",

    // Ezekiel Chapter 1
    "Ezekiel 1:1": "Ezekiel's Vision of God's Glory",
    "Ezekiel 1:15": "The Four Wheels",

    // Ezekiel Chapter 2
    "Ezekiel 2:1": "Ezekiel's Call",

    // Ezekiel Chapter 3
    "Ezekiel 3:1": "Ezekiel Eats the Scroll",
    "Ezekiel 3:16": "Ezekiel a Watchman",

    // Ezekiel Chapter 4
    "Ezekiel 4:1": "The Siege of Jerusalem Portrayed",

    // Ezekiel Chapter 5
    "Ezekiel 5:1": "Jerusalem's Judgment",

    // Ezekiel Chapter 6
    "Ezekiel 6:1": "Prophecy Against the Mountains",

    // Ezekiel Chapter 7
    "Ezekiel 7:1": "The End Has Come",

    // Ezekiel Chapter 8
    "Ezekiel 8:1": "Idolatry in the Temple",

    // Ezekiel Chapter 9
    "Ezekiel 9:1": "The Slaughter of the Idolaters",

    // Ezekiel Chapter 10
    "Ezekiel 10:1": "God's Glory Leaves the Temple",

    // Ezekiel Chapter 11
    "Ezekiel 11:1": "Judgment on Israel's Leaders",
    "Ezekiel 11:14": "Promise of Restoration",
    "Ezekiel 11:22": "God's Glory Departs",

    // Ezekiel Chapter 12
    "Ezekiel 12:1": "The Exile Symbolized",
    "Ezekiel 12:21": "The Fulfillment Is at Hand",

    // Ezekiel Chapter 13
    "Ezekiel 13:1": "False Prophets Condemned",

    // Ezekiel Chapter 14
    "Ezekiel 14:1": "Idolaters Condemned",
    "Ezekiel 14:12": "Four Severe Judgments",

    // Ezekiel Chapter 15
    "Ezekiel 15:1": "Jerusalem a Useless Vine",

    // Ezekiel Chapter 16
    "Ezekiel 16:1": "Jerusalem's Unfaithfulness",
    "Ezekiel 16:44": "Like Mother, Like Daughter",
    "Ezekiel 16:59": "The LORD's Covenant Remembered",

    // Ezekiel Chapter 17
    "Ezekiel 17:1": "The Parable of Two Eagles",
    "Ezekiel 17:22": "A Tender Twig",

    // Ezekiel Chapter 18
    "Ezekiel 18:1": "The Soul Who Sins Shall Die",
    "Ezekiel 18:30": "Repent and Live",

    // Ezekiel Chapter 19
    "Ezekiel 19:1": "A Lament for Israel's Princes",

    // Ezekiel Chapter 20
    "Ezekiel 20:1": "Israel's History of Rebellion",
    "Ezekiel 20:45": "Prophecy Against the South",

    // Ezekiel Chapter 21
    "Ezekiel 21:1": "The Sword of the LORD",
    "Ezekiel 21:18": "The Sword of Babylon",

    // Ezekiel Chapter 22
    "Ezekiel 22:1": "Jerusalem's Sins",
    "Ezekiel 22:17": "Israel Like Dross",

    // Ezekiel Chapter 23
    "Ezekiel 23:1": "Two Adulterous Sisters",

    // Ezekiel Chapter 24
    "Ezekiel 24:1": "The Parable of the Cooking Pot",
    "Ezekiel 24:15": "Ezekiel's Wife Dies",

    // Ezekiel Chapter 25
    "Ezekiel 25:1": "Prophecies Against Ammon, Moab, Edom, and Philistia",

    // Ezekiel Chapter 26
    "Ezekiel 26:1": "Prophecy Against Tyre",

    // Ezekiel Chapter 27
    "Ezekiel 27:1": "A Lament for Tyre",

    // Ezekiel Chapter 28
    "Ezekiel 28:1": "Prophecy Against the Prince of Tyre",
    "Ezekiel 28:11": "A Lament for the King of Tyre",
    "Ezekiel 28:20": "Prophecy Against Sidon",

    // Ezekiel Chapter 29
    "Ezekiel 29:1": "Prophecy Against Egypt",

    // Ezekiel Chapter 30
    "Ezekiel 30:1": "A Lament for Egypt",

    // Ezekiel Chapter 31
    "Ezekiel 31:1": "Egypt Like a Cedar in Lebanon",

    // Ezekiel Chapter 32
    "Ezekiel 32:1": "A Lament for Pharaoh",
    "Ezekiel 32:17": "Egypt in Sheol",

    // Ezekiel Chapter 33
    "Ezekiel 33:1": "Ezekiel a Watchman",
    "Ezekiel 33:10": "Why Will You Die?",
    "Ezekiel 33:21": "Jerusalem's Fall Announced",

    // Ezekiel Chapter 34
    "Ezekiel 34:1": "Prophecy Against the Shepherds",
    "Ezekiel 34:11": "The LORD the True Shepherd",

    // Ezekiel Chapter 35
    "Ezekiel 35:1": "Prophecy Against Mount Seir",

    // Ezekiel Chapter 36
    "Ezekiel 36:1": "Prophecy to the Mountains of Israel",
    "Ezekiel 36:16": "A New Heart and Spirit",

    // Ezekiel Chapter 37
    "Ezekiel 37:1": "The Valley of Dry Bones",
    "Ezekiel 37:15": "The Two Sticks",

    // Ezekiel Chapter 38
    "Ezekiel 38:1": "Prophecy Against Gog",

    // Ezekiel Chapter 39
    "Ezekiel 39:1": "The Destruction of Gog",
    "Ezekiel 39:21": "Israel to Be Restored",

    // Ezekiel Chapter 40
    "Ezekiel 40:1": "The Vision of the New Temple",

    // Ezekiel Chapter 41
    "Ezekiel 41:1": "The Inner Temple",

    // Ezekiel Chapter 42
    "Ezekiel 42:1": "The Chambers for the Priests",

    // Ezekiel Chapter 43
    "Ezekiel 43:1": "The Glory of the LORD Returns",
    "Ezekiel 43:13": "The Altar",

    // Ezekiel Chapter 44
    "Ezekiel 44:1": "The East Gate",
    "Ezekiel 44:9": "The Levites and Priests",

    // Ezekiel Chapter 45
    "Ezekiel 45:1": "The Portion for the LORD",
    "Ezekiel 45:18": "The Feasts",

    // Ezekiel Chapter 46
    "Ezekiel 46:1": "The Prince's Offerings",
    "Ezekiel 46:19": "The Temple Kitchens",

    // Ezekiel Chapter 47
    "Ezekiel 47:1": "The River from the Temple",
    "Ezekiel 47:13": "The Boundaries of the Land",

    // Ezekiel Chapter 48
    "Ezekiel 48:1": "The Division of the Land",
    "Ezekiel 48:30": "The Gates of the City",

    // Daniel Chapter 1
    "Daniel 1:1": "Daniel Taken to Babylon",
    "Daniel 1:8": "Daniel's Faithfulness",

    // Daniel Chapter 2
    "Daniel 2:1": "Nebuchadnezzar's Dream",
    "Daniel 2:14": "Daniel Interprets the Dream",
    "Daniel 2:31": "The Dream Revealed",
    "Daniel 2:46": "Daniel Promoted",

    // Daniel Chapter 3
    "Daniel 3:1": "The Image of Gold",
    "Daniel 3:8": "The Three Hebrews Accused",
    "Daniel 3:13": "Into the Fiery Furnace",
    "Daniel 3:24": "Delivered from the Furnace",

    // Daniel Chapter 4
    "Daniel 4:1": "Nebuchadnezzar's Second Dream",
    "Daniel 4:19": "Daniel Interprets the Dream",
    "Daniel 4:28": "The Dream Fulfilled",

    // Daniel Chapter 5
    "Daniel 5:1": "Belshazzar's Feast",
    "Daniel 5:5": "The Writing on the Wall",
    "Daniel 5:13": "Daniel Interprets the Writing",

    // Daniel Chapter 6
    "Daniel 6:1": "The Plot Against Daniel",
    "Daniel 6:16": "Daniel in the Lions' Den",

    // Daniel Chapter 7
    "Daniel 7:1": "Daniel's Vision of Four Beasts",
    "Daniel 7:15": "The Interpretation of the Vision",

    // Daniel Chapter 8
    "Daniel 8:1": "Daniel's Vision of the Ram and Goat",
    "Daniel 8:15": "The Interpretation of the Vision",

    // Daniel Chapter 9
    "Daniel 9:1": "Daniel's Prayer",
    "Daniel 9:20": "The Seventy Weeks",

    // Daniel Chapter 10
    "Daniel 10:1": "Daniel's Vision of a Man",

    // Daniel Chapter 11
    "Daniel 11:1": "Kings of the South and North",

    // Daniel Chapter 12
    "Daniel 12:1": "The Time of the End",
    "Daniel 12:5": "How Long Until the End?",

    // Hosea Chapter 1
    "Hosea 1:1": "Hosea's Wife and Children",

    // Hosea Chapter 2
    "Hosea 2:1": "Israel's Unfaithfulness",
    "Hosea 2:14": "The LORD's Mercy on Israel",

    // Hosea Chapter 3
    "Hosea 3:1": "Hosea Redeems His Wife",

    // Hosea Chapter 4
    "Hosea 4:1": "The Charge Against Israel",

    // Hosea Chapter 5
    "Hosea 5:1": "Judgment on Israel and Judah",

    // Hosea Chapter 6
    "Hosea 6:1": "A Call to Repentance",
    "Hosea 6:4": "Faithless Israel",

    // Hosea Chapter 7
    "Hosea 7:1": "Israel's Corruption",

    // Hosea Chapter 8
    "Hosea 8:1": "Israel Will Reap the Whirlwind",

    // Hosea Chapter 9
    "Hosea 9:1": "Punishment for Israel",

    // Hosea Chapter 10
    "Hosea 10:1": "Israel's Sin and Captivity",

    // Hosea Chapter 11
    "Hosea 11:1": "The LORD's Love for Israel",

    // Hosea Chapter 12
    "Hosea 12:1": "The LORD's Indictment of Israel",

    // Hosea Chapter 13
    "Hosea 13:1": "The LORD's Anger Against Israel",

    // Hosea Chapter 14
    "Hosea 14:1": "A Plea to Return to the LORD",
    "Hosea 14:4": "Healing for the Repentant",

    // Joel Chapter 1
    "Joel 1:1": "The Invasion of Locusts",
    "Joel 1:13": "A Call to Repentance",

    // Joel Chapter 2
    "Joel 2:1": "The Day of the LORD",
    "Joel 2:12": "Return to the LORD",
    "Joel 2:18": "The LORD's Response",
    "Joel 2:28": "The Outpouring of the Spirit",

    // Joel Chapter 3
    "Joel 3:1": "Judgment on the Nations",
    "Joel 3:14": "The Valley of Decision",

    // Amos Chapter 1
    "Amos 1:1": "Judgment on Israel's Neighbors",

    // Amos Chapter 2
    "Amos 2:1": "Judgment on Moab",
    "Amos 2:4": "Judgment on Judah",
    "Amos 2:6": "Judgment on Israel",

    // Amos Chapter 3
    "Amos 3:1": "Witnesses Against Israel",

    // Amos Chapter 4
    "Amos 4:1": "Israel Has Not Returned to the LORD",

    // Amos Chapter 5
    "Amos 5:1": "A Lament for Israel",
    "Amos 5:18": "The Day of the LORD Is Darkness",

    // Amos Chapter 6
    "Amos 6:1": "Woe to the Complacent",

    // Amos Chapter 7
    "Amos 7:1": "Five Visions of Judgment",
    "Amos 7:10": "Amaziah Opposes Amos",

    // Amos Chapter 8
    "Amos 8:1": "The Vision of the Basket of Fruit",
    "Amos 8:4": "The Unscrupulous Merchant",

    // Amos Chapter 9
    "Amos 9:1": "The Destruction of Israel",
    "Amos 9:11": "The Restoration of Israel",

    // Obadiah Chapter 1
    "Obadiah 1:1": "Edom's Destruction",
    "Obadiah 1:15": "The Day of the LORD",

    // Jonah Chapter 1
    "Jonah 1:1": "Jonah Flees from the LORD",

    // Jonah Chapter 2
    "Jonah 2:1": "Jonah's Prayer",

    // Jonah Chapter 3
    "Jonah 3:1": "Jonah Goes to Nineveh",

    // Jonah Chapter 4
    "Jonah 4:1": "Jonah's Anger at the LORD's Compassion",

    // Micah Chapter 1
    "Micah 1:1": "Judgment on Samaria and Jerusalem",

    // Micah Chapter 2
    "Micah 2:1": "Woe to Oppressors",
    "Micah 2:12": "A Promise of Restoration",

    // Micah Chapter 3
    "Micah 3:1": "Rulers and Prophets Rebuked",

    // Micah Chapter 4
    "Micah 4:1": "The Mountain of the LORD",
    "Micah 4:9": "The LORD Will Rescue Zion",

    // Micah Chapter 5
    "Micah 5:1": "A Ruler from Bethlehem",
    "Micah 5:7": "The Remnant of Jacob",

    // Micah Chapter 6
    "Micah 6:1": "The LORD's Case Against Israel",
    "Micah 6:6": "What Does the LORD Require?",

    // Micah Chapter 7
    "Micah 7:1": "Misery Turned to Hope",
    "Micah 7:14": "God's Compassion on Israel",

    // Nahum Chapter 1
    "Nahum 1:1": "The LORD Is Slow to Anger",
    "Nahum 1:9": "The Destruction of Nineveh",

    // Nahum Chapter 2
    "Nahum 2:1": "The Destruction of Nineveh",

    // Nahum Chapter 3
    "Nahum 3:1": "Woe to Nineveh",

    // Habakkuk Chapter 1
    "Habakkuk 1:1": "Habakkuk's Complaint",
    "Habakkuk 1:5": "The LORD's Answer",
    "Habakkuk 1:12": "Habakkuk's Second Complaint",

    // Habakkuk Chapter 2
    "Habakkuk 2:1": "The LORD's Answer",
    "Habakkuk 2:6": "Woe to the Wicked",
    "Habakkuk 2:18": "The Futility of Idols",

    // Habakkuk Chapter 3
    "Habakkuk 3:1": "Habakkuk's Prayer",
    "Habakkuk 3:16": "Trust in God's Salvation",

    // Zephaniah Chapter 1
    "Zephaniah 1:1": "The Great Day of the LORD",

    // Zephaniah Chapter 2
    "Zephaniah 2:1": "A Call to Repentance",
    "Zephaniah 2:4": "Judgment on the Nations",

    // Zephaniah Chapter 3
    "Zephaniah 3:1": "Woe to Jerusalem",
    "Zephaniah 3:8": "The Purification of the Nations",
    "Zephaniah 3:14": "The Joy of Zion",

    // Haggai Chapter 1
    "Haggai 1:1": "A Call to Rebuild the Temple",

    // Haggai Chapter 2
    "Haggai 2:1": "The Coming Glory of the Temple",
    "Haggai 2:10": "Blessings for a Defiled People",
    "Haggai 2:20": "Zerubbabel the LORD's Signet Ring",

    // Zechariah Chapter 1
    "Zechariah 1:1": "A Call to Return to the LORD",
    "Zechariah 1:7": "The Vision of the Horses",
    "Zechariah 1:18": "The Vision of the Horns and Craftsmen",

    // Zechariah Chapter 2
    "Zechariah 2:1": "The Vision of the Measuring Line",

    // Zechariah Chapter 3
    "Zechariah 3:1": "The Vision of Joshua the High Priest",

    // Zechariah Chapter 4
    "Zechariah 4:1": "The Vision of the Golden Lampstand",

    // Zechariah Chapter 5
    "Zechariah 5:1": "The Vision of the Flying Scroll",
    "Zechariah 5:5": "The Vision of the Woman in a Basket",

    // Zechariah Chapter 6
    "Zechariah 6:1": "The Vision of the Four Chariots",
    "Zechariah 6:9": "The Crowning of Joshua",

    // Zechariah Chapter 7
    "Zechariah 7:1": "A Question About Fasting",

    // Zechariah Chapter 8
    "Zechariah 8:1": "The LORD Promises to Bless Jerusalem",

    // Zechariah Chapter 9
    "Zechariah 9:1": "Judgment on Israel's Enemies",
    "Zechariah 9:9": "Your King Comes to You",

    // Zechariah Chapter 10
    "Zechariah 10:1": "The Restoration of Judah and Israel",

    // Zechariah Chapter 11
    "Zechariah 11:1": "The Fall of Israel's Oppressors",
    "Zechariah 11:4": "The Two Shepherds",

    // Zechariah Chapter 12
    "Zechariah 12:1": "The Coming Deliverance of Jerusalem",

    // Zechariah Chapter 13
    "Zechariah 13:1": "A Fountain for Cleansing",
    "Zechariah 13:7": "The Shepherd Struck",

    // Zechariah Chapter 14
    "Zechariah 14:1": "The Day of the LORD",

    // Malachi Chapter 1
    "Malachi 1:1": "The LORD's Love for Israel",
    "Malachi 1:6": "Polluted Offerings",

    // Malachi Chapter 2
    "Malachi 2:1": "The Priests Rebuked",
    "Malachi 2:10": "Judah's Unfaithfulness",

    // Malachi Chapter 3
    "Malachi 3:1": "The Messenger of the Covenant",
    "Malachi 3:6": "Robbing God",
    "Malachi 3:13": "The Book of Remembrance",

    // Malachi Chapter 4
    "Malachi 4:1": "The Day of the LORD",
    "Malachi 4:4": "Behold, I Will Send Elijah",

    // ===========================
    // NEW TESTAMENT
    // ===========================

    "Matthew 1:1": ["The Genealogy of Jesus Christ", "Matthew introduces the genealogy of Jesus, showing His royal and covenant lineage from Abraham and David."],
    "Matthew 1:2": ["Genealogy from Abraham to David", "The family line begins with Abraham and continues through Isaac, Jacob, Judah, and the generations leading to King David."],
    "Matthew 1:6": ["David to the Babylonian Exile", "The genealogy continues through the kings of Judah from David to the time of the Babylonian exile."],
    "Matthew 1:12": ["From the Exile to Jesus", "After the exile, the lineage continues through several generations until Joseph, the husband of Mary."],
    "Matthew 1:17": ["Summary of the Generations", "Matthew summarizes the genealogy into three groups of fourteen generations: Abraham to David, David to the exile, and the exile to Christ."],
    "Matthew 1:18": ["The Birth of Jesus Christ", "Matthew begins the account of Jesus' birth, explaining that Mary conceived through the Holy Spirit."],
    "Matthew 1:20": ["Angel Appears to Joseph", "An angel appears to Joseph in a dream, assuring him that Mary's child is from the Holy Spirit."],
    "Matthew 1:21": ["The Name Jesus", "The angel tells Joseph to name the child Jesus because He will save His people from their sins."],
    "Matthew 1:22": ["Prophecy of Immanuel Fulfilled", "Matthew explains that Jesus' birth fulfills the prophecy that a virgin will conceive and bear a son called Immanuel."],
    "Matthew 1:24": ["Joseph Obeys the Angel", "Joseph obeys the angel's instruction and takes Mary as his wife."],


    "Matthew 2:1": ["Wise Men Visit Jesus", "After Jesus is born in Bethlehem, wise men from the east come to Jerusalem seeking the newborn King of the Jews."],
    "Matthew 2:3": ["Herod Disturbed", "King Herod and all Jerusalem are troubled when they hear about the birth of the King of the Jews."],
    "Matthew 2:4": ["Prophecy of Bethlehem", "The chief priests and scribes explain from prophecy that the Messiah is to be born in Bethlehem."],
    "Matthew 2:7": ["Herod Questions the Wise Men", "Herod secretly asks the wise men about the time the star appeared and sends them to Bethlehem."],
    "Matthew 2:9": ["The Star Leads the Wise Men", "The star guides the wise men to the place where the child Jesus is."],
    "Matthew 2:11": ["Gifts Presented to Jesus", "The wise men worship Jesus and present gifts of gold, frankincense, and myrrh."],
    "Matthew 2:12": ["Wise Men Warned in a Dream", "The wise men are warned in a dream not to return to Herod and leave for their country another way."],
    "Matthew 2:13": ["Escape to Egypt", "An angel warns Joseph in a dream to flee to Egypt because Herod plans to kill the child."],
    "Matthew 2:16": ["Herod Kills the Children", "Herod orders the killing of all boys two years old and under in Bethlehem."],
    "Matthew 2:19": ["Return from Egypt", "After Herod dies, an angel tells Joseph in a dream that it is safe to return to Israel."],
    "Matthew 2:22": ["Jesus Settles in Nazareth", "Joseph goes to Galilee and settles in Nazareth, fulfilling the prophecy that Jesus would be called a Nazarene."],

    "Matthew 3:1": ["John the Baptist Begins Ministry", "John the Baptist begins preaching in the wilderness of Judea, calling people to repent because the kingdom of heaven is near."],
    "Matthew 3:4": ["John's Lifestyle", "John wears clothing made of camel’s hair, eats locusts and wild honey, and lives simply in the wilderness."],
    "Matthew 3:5": ["People Come to Be Baptized", "People from Jerusalem, Judea, and the Jordan region come to John, confessing their sins and being baptized."],
    "Matthew 3:7": ["Warning to the Pharisees and Sadducees", "John rebukes the religious leaders and warns them to produce fruit worthy of repentance."],
    "Matthew 3:10": ["The Coming Judgment", "John warns that every tree that does not bear good fruit will be cut down and thrown into the fire."],
    "Matthew 3:11": ["The One Greater Than John", "John declares that someone greater is coming who will baptize with the Holy Spirit and fire."],
    "Matthew 3:13": ["Jesus Comes to Be Baptized", "Jesus comes from Galilee to the Jordan to be baptized by John."],
    "Matthew 3:14": ["John Hesitates", "John initially tries to prevent Jesus, saying that he himself needs to be baptized by Him."],
    "Matthew 3:15": ["Jesus Insists", "Jesus tells John that it is necessary to fulfill all righteousness."],
    "Matthew 3:16": ["The Heavens Open", "After Jesus is baptized, the heavens open and the Spirit of God descends like a dove."],
    "Matthew 3:17": ["The Father's Voice", "A voice from heaven declares, 'This is My beloved Son, in whom I am well pleased.'"],

    "Matthew 4:1": ["Jesus Tempted in the Wilderness", "Jesus is led by the Spirit into the wilderness where He fasts for forty days and is tempted by the devil."],
    "Matthew 4:5": ["Second Temptation", "The devil takes Jesus to the highest point of the temple and challenges Him to throw Himself down."],
    "Matthew 4:8": ["Third Temptation", "The devil shows Jesus all the kingdoms of the world and offers them if Jesus will worship him."],
    "Matthew 4:11": ["Angels Minister to Jesus", "After Jesus resists the temptations, the devil leaves and angels come to serve Him."],
    "Matthew 4:12": ["Jesus Begins Ministry in Galilee", "After hearing that John has been imprisoned, Jesus begins His ministry in Galilee."],
    "Matthew 4:13": ["Jesus Lives in Capernaum", "Jesus leaves Nazareth and settles in Capernaum, fulfilling the prophecy about light in Galilee."],
    "Matthew 4:17": ["Message of Repentance", "Jesus begins preaching, saying, 'Repent, for the kingdom of heaven is at hand.'"],
    "Matthew 4:18": ["Calling the First Disciples", "Jesus calls Peter and Andrew while they are fishing, inviting them to become fishers of men."],
    "Matthew 4:21": ["More Disciples Called", "Jesus calls James and John, the sons of Zebedee, and they immediately follow Him."],
    "Matthew 4:23": ["Jesus Heals the Multitudes", "Jesus travels through Galilee teaching, preaching the kingdom, and healing every disease."],
    "Matthew 4:24": ["Fame Spreads Everywhere", "News about Jesus spreads across Syria, and many sick and oppressed people are brought to Him for healing."],
    "Matthew 4:25": ["Large Crowds Follow Jesus", "Great crowds from Galilee, Decapolis, Jerusalem, Judea, and beyond the Jordan follow Him."],

    "Matthew 5:1": ["The Sermon on the Mount Begins", "Jesus sees the crowds, goes up on a mountain, and begins teaching His disciples."],
    "Matthew 5:3": ["The Beatitudes", "Jesus blesses the poor in spirit, those who mourn, the meek, and others who seek righteousness."],
    "Matthew 5:13": ["Salt of the Earth", "Jesus tells His followers that they are the salt of the earth."],
    "Matthew 5:14": ["Light of the World", "Jesus teaches that His followers are the light of the world and should shine before others."],
    "Matthew 5:17": ["Jesus Fulfills the Law", "Jesus explains that He has not come to abolish the Law or the Prophets but to fulfill them."],
    "Matthew 5:21": ["Teaching About Anger", "Jesus teaches that anger toward others is serious and calls for reconciliation."],
    "Matthew 5:27": ["Teaching About Adultery", "Jesus teaches that even looking at someone with lust is committing adultery in the heart."],
    "Matthew 5:31": ["Teaching About Divorce", "Jesus gives teaching regarding divorce and faithfulness in marriage."],
    "Matthew 5:33": ["Teaching About Oaths", "Jesus instructs people to speak truthfully without needing to swear oaths."],
    "Matthew 5:38": ["Eye for an Eye", "Jesus teaches not to resist an evil person but to respond with humility and patience."],
    "Matthew 5:43": ["Love Your Enemies", "Jesus teaches His followers to love their enemies and pray for those who persecute them."],
    "Matthew 5:48": ["Be Perfect", "Jesus calls His followers to be perfect as their heavenly Father is perfect."],

    "Matthew 6:1": ["Giving to the Needy", "Jesus teaches that acts of righteousness should not be done to be seen by others but for God."],
    "Matthew 6:5": ["Teaching About Prayer", "Jesus instructs that prayer should not be done for show like the hypocrites."],
    "Matthew 6:9": ["The Lord's Prayer", "Jesus gives a model prayer beginning with 'Our Father in heaven.'"],
    "Matthew 6:16": ["Teaching About Fasting", "Jesus teaches that fasting should be done sincerely, not to gain attention from others."],
    "Matthew 6:19": ["Treasures in Heaven", "Jesus teaches not to store up treasures on earth but treasures in heaven."],
    "Matthew 6:22": ["The Lamp of the Body", "Jesus explains that the eye is the lamp of the body and spiritual vision affects the whole life."],
    "Matthew 6:24": ["God and Money", "Jesus teaches that no one can serve two masters, God and money."],
    "Matthew 6:25": ["Do Not Worry", "Jesus tells His followers not to worry about life, food, drink, or clothing."],
    "Matthew 6:33": ["Seek First the Kingdom", "Jesus teaches to seek first the kingdom of God and His righteousness."],
    "Matthew 6:34": ["Do Not Worry About Tomorrow", "Jesus reminds that each day has enough trouble of its own."],

    "Matthew 7:1": ["Do Not Judge", "Jesus teaches not to judge others hypocritically, reminding that the same measure will be used in return."],
    "Matthew 7:6": ["Do Not Cast Pearls Before Swine", "Jesus warns not to give what is holy to those who will reject or trample it."],
    "Matthew 7:7": ["Ask, Seek, Knock", "Jesus encourages persistence in prayer: ask, seek, and knock, and God will respond."],
    "Matthew 7:12": ["The Golden Rule", "Jesus summarizes the Law and the Prophets: treat others as you want them to treat you."],
    "Matthew 7:13": ["The Narrow Gate", "Jesus teaches that the path to life is narrow and few find it, while the broad road leads to destruction."],
    "Matthew 7:15": ["False Prophets", "Jesus warns about false prophets who appear harmless but inwardly are dangerous."],
    "Matthew 7:21": ["True and False Disciples", "Not everyone who calls Jesus 'Lord' will enter the kingdom, but those who do the Father's will."],
    "Matthew 7:24": ["The Wise and Foolish Builders", "Jesus compares those who obey His words to a wise man building on rock."],
    "Matthew 7:28": ["Authority of Jesus' Teaching", "The crowds are amazed because Jesus teaches with authority unlike the scribes."],

    "Matthew 8:1": ["Jesus Heals a Leper", "After coming down from the mountain, Jesus heals a man with leprosy who asks to be made clean."],
    "Matthew 8:5": ["Faith of the Centurion", "A Roman centurion asks Jesus to heal his servant, showing great faith in Jesus' authority."],
    "Matthew 8:10": ["Great Faith Recognized", "Jesus marvels at the centurion’s faith and says many from the nations will enter the kingdom."],
    "Matthew 8:14": ["Jesus Heals Many", "Jesus heals Peter’s mother-in-law and many others who are sick or possessed."],
    "Matthew 8:18": ["The Cost of Following Jesus", "Jesus speaks about the commitment required to truly follow Him."],
    "Matthew 8:23": ["Jesus Calms the Storm", "While crossing the sea, Jesus rebukes the wind and waves, bringing complete calm."],
    "Matthew 8:28": ["Jesus Heals Two Demon-Possessed Men", "Jesus casts demons out of two men in the region of the Gadarenes, sending them into a herd of pigs."],
    "Matthew 8:34": ["People Ask Jesus to Leave", "The townspeople are afraid after the miracle and ask Jesus to leave their region."],

    "Matthew 9:1": ["Jesus Heals a Paralytic", "Jesus heals a paralyzed man and forgives his sins, demonstrating His authority on earth to forgive sins."],
    "Matthew 9:9": ["The Calling of Matthew", "Jesus calls Matthew, a tax collector, to follow Him, and Matthew immediately becomes His disciple."],
    "Matthew 9:10": ["Jesus Eats with Sinners", "Jesus dines with tax collectors and sinners, explaining that He came to call sinners to repentance."],
    "Matthew 9:14": ["Question About Fasting", "John’s disciples ask Jesus why His disciples do not fast, and Jesus explains about the bridegroom."],
    "Matthew 9:18": ["A Ruler’s Daughter and a Sick Woman", "Jesus raises a ruler’s daughter and heals a woman who had been bleeding for twelve years."],
    "Matthew 9:27": ["Jesus Heals Two Blind Men", "Two blind men follow Jesus and are healed because of their faith."],
    "Matthew 9:32": ["Jesus Heals a Demon-Possessed Man", "Jesus casts out a demon from a man who was unable to speak."],
    "Matthew 9:35": ["Jesus Ministers to the Crowds", "Jesus travels through towns teaching, preaching the kingdom, and healing diseases."],
    "Matthew 9:37": ["The Harvest Is Plentiful", "Jesus tells His disciples that the harvest is plentiful but the workers are few."],

    "Matthew 10:1": ["The Twelve Apostles Chosen", "Jesus gives His twelve disciples authority over unclean spirits and to heal every disease and sickness."],
    "Matthew 10:2": ["Names of the Twelve Apostles", "Matthew lists the names of the twelve apostles chosen by Jesus."],
    "Matthew 10:5": ["The Twelve Sent Out", "Jesus sends the twelve disciples to preach to the lost sheep of Israel."],
    "Matthew 10:7": ["Message of the Kingdom", "The disciples are instructed to proclaim that the kingdom of heaven is near."],
    "Matthew 10:9": ["Instructions for the Mission", "Jesus tells them not to carry extra provisions but to rely on God's provision."],
    "Matthew 10:14": ["Rejection of the Message", "If any town rejects them, they are to shake the dust from their feet."],
    "Matthew 10:16": ["Wise and Innocent", "Jesus warns them they will be like sheep among wolves and must be wise as serpents and innocent as doves."],
    "Matthew 10:21": ["Persecution Foretold", "Jesus warns that His followers will face persecution and betrayal."],
    "Matthew 10:26": ["Fear God, Not Man", "Jesus encourages His disciples not to fear people but to trust in God."],
    "Matthew 10:32": ["Acknowledging Christ", "Those who acknowledge Jesus before others will be acknowledged before the Father."],
    "Matthew 10:34": ["Not Peace but a Sword", "Jesus explains that following Him may bring division even within families."],
    "Matthew 10:37": ["Cost of Discipleship", "Jesus teaches that anyone who loves family more than Him is not worthy of Him."],
    "Matthew 10:40": ["Rewards for Receiving Disciples", "Those who receive Jesus' disciples receive Him and will be rewarded."],

    "Matthew 11:1": ["Jesus Continues His Ministry", "After instructing His disciples, Jesus goes on to teach and preach in the towns of Galilee."],
    "Matthew 11:2": ["John the Baptist Sends a Question", "John the Baptist, from prison, sends his disciples to ask Jesus if He is the expected Messiah."],
    "Matthew 11:4": ["Jesus Answers John", "Jesus points to His miracles and works as evidence that the Messiah has come."],
    "Matthew 11:7": ["Jesus Testifies About John", "Jesus speaks to the crowd about John the Baptist and his role as the promised messenger."],
    "Matthew 11:11": ["Greatness of John the Baptist", "Jesus says John is the greatest born of women, yet the least in the kingdom is greater than he."],
    "Matthew 11:16": ["This Generation Compared", "Jesus compares the people of that generation to children who refuse to be satisfied."],
    "Matthew 11:20": ["Woe to Unrepentant Cities", "Jesus rebukes cities that witnessed His miracles but did not repent."],
    "Matthew 11:25": ["Jesus Praises the Father", "Jesus thanks the Father for revealing truth to the humble rather than the wise."],
    "Matthew 11:28": ["Come to Me for Rest", "Jesus invites the weary and burdened to come to Him and find rest for their souls."],

    "Matthew 12:1": ["Lord of the Sabbath", "Jesus' disciples pick grain on the Sabbath, and Jesus teaches that He is Lord of the Sabbath."],
    "Matthew 12:9": ["Man with a Withered Hand", "Jesus heals a man with a withered hand on the Sabbath, showing mercy over ritual law."],
    "Matthew 12:14": ["Pharisees Plot Against Jesus", "The Pharisees begin planning how they might destroy Jesus."],
    "Matthew 12:15": ["God’s Chosen Servant", "Jesus withdraws as crowds follow Him, fulfilling the prophecy about the gentle servant of God."],
    "Matthew 12:22": ["Jesus Heals a Demon-Possessed Man", "Jesus heals a blind and mute man possessed by a demon, amazing the crowd."],
    "Matthew 12:24": ["Accused of Working by Satan", "The Pharisees accuse Jesus of casting out demons by the power of Beelzebul."],
    "Matthew 12:25": ["A House Divided", "Jesus explains that a kingdom divided against itself cannot stand."],
    "Matthew 12:31": ["Blasphemy Against the Holy Spirit", "Jesus warns that blasphemy against the Holy Spirit will not be forgiven."],
    "Matthew 12:33": ["A Tree and Its Fruit", "Jesus teaches that a tree is known by its fruit, revealing the true nature of the heart."],
    "Matthew 12:38": ["The Sign of Jonah", "Religious leaders ask for a sign, and Jesus speaks about the sign of Jonah."],
    "Matthew 12:43": ["Return of an Unclean Spirit", "Jesus explains how an unclean spirit may return worse than before."],
    "Matthew 12:46": ["Jesus’ True Family", "Jesus teaches that those who do the will of His Father are His true family."],

    "Matthew 13:1": ["Parable of the Sower", "Jesus teaches the crowd by the sea using the parable of a sower who scatters seed on different kinds of soil."],
    "Matthew 13:10": ["Purpose of Parables", "Jesus explains to His disciples why He teaches the crowds using parables."],
    "Matthew 13:18": ["Explanation of the Parable of the Sower", "Jesus explains the meaning of the different soils representing people's responses to God's word."],
    "Matthew 13:24": ["Parable of the Weeds", "Jesus tells a parable about weeds growing among wheat until the harvest."],
    "Matthew 13:31": ["Parable of the Mustard Seed", "Jesus compares the kingdom of heaven to a mustard seed that grows into a large tree."],
    "Matthew 13:33": ["Parable of the Yeast", "The kingdom of heaven is compared to yeast that spreads through the dough."],
    "Matthew 13:36": ["Explanation of the Parable of the Weeds", "Jesus explains the meaning of the wheat and weeds to His disciples."],
    "Matthew 13:44": ["Parable of the Hidden Treasure", "The kingdom of heaven is like treasure hidden in a field."],
    "Matthew 13:45": ["Parable of the Pearl of Great Value", "The kingdom of heaven is compared to a merchant seeking a valuable pearl."],
    "Matthew 13:47": ["Parable of the Net", "The kingdom of heaven is like a net that gathers fish of every kind."],
    "Matthew 13:53": ["Jesus Rejected at Nazareth", "Jesus returns to His hometown but is rejected by the people."],

    "Matthew 14:1": ["Herod Hears About Jesus", "Herod the tetrarch hears about the fame of Jesus and wonders who He is."],
    "Matthew 14:3": ["Herod Imprisons John the Baptist", "Herod had John arrested because John had rebuked him for marrying Herodias, his brother’s wife."],
    "Matthew 14:5": ["Fear of the People", "Herod wanted to kill John, but feared the crowd who regarded John as a prophet."],
    "Matthew 14:6": ["Herod’s Birthday Banquet", "On Herod’s birthday, Herodias’ daughter dances before the guests, pleasing Herod."],
    "Matthew 14:8": ["John Beheaded", "At the request of her mother, Herod orders John the Baptist to be beheaded in prison."],
    "Matthew 14:13": ["Jesus Withdraws", "Jesus withdraws by boat to a solitary place after hearing about John’s death, and crowds follow Him on foot."],
    "Matthew 14:14": ["Jesus Heals the Sick", "Seeing the crowd, Jesus has compassion and heals the sick among them."],
    "Matthew 14:15": ["Feeding the Five Thousand", "Evening comes, and the disciples suggest sending the crowd away to buy food, but Jesus has them sit."],
    "Matthew 14:17": ["Only Five Loaves and Two Fish", "The disciples have only five loaves and two fish to feed the multitude."],
    "Matthew 14:19": ["Jesus Blesses the Food", "Jesus takes the loaves and fish, looks up to heaven, blesses, breaks, and gives them to the disciples to distribute."],
    "Matthew 14:20": ["All Are Fed", "Everyone eats and is satisfied; the disciples gather twelve baskets of leftovers."],
    "Matthew 14:22": ["Jesus Walks on Water", "Jesus makes the disciples get into a boat while He dismisses the crowd, then goes up a mountainside to pray alone."],
    "Matthew 14:25": ["Jesus Approaches the Boat", "During the fourth watch of the night, Jesus walks on the water toward the disciples in the boat."],
    "Matthew 14:28": ["Peter Walks on Water", "Peter asks Jesus to command him to come on the water, and he begins to walk toward Jesus but becomes afraid and starts to sink."],
    "Matthew 14:31": ["Jesus Saves Peter", "Jesus immediately reaches out His hand, catches Peter, and rebukes him for his doubt."],
    "Matthew 14:33": ["Disciples Worship Jesus", "When Jesus and Peter get into the boat, the wind dies down, and those in the boat worship Him, saying, 'Truly you are the Son of God.'"],
    "Matthew 14:34": ["Arrival at Gennesaret", "The boat reaches the shore at Gennesaret, where people recognize Jesus and bring all sick people to Him."],
    "Matthew 14:36": ["Healing of Many", "All who touch the edge of His cloak are healed."],

    "Matthew 15:1": ["Pharisees Question Jesus", "Some Pharisees and teachers of the law come from Jerusalem to question Jesus about His disciples breaking the tradition of the elders."],
    "Matthew 15:2": ["Tradition vs. Commandment", "They ask why the disciples break the ceremonial traditions, such as handwashing before eating."],
    "Matthew 15:3": ["Jesus Rebukes Them", "Jesus replies that they break God’s commandment for the sake of their tradition."],
    "Matthew 15:6": ["Corban Explanation", "Jesus explains that declaring something 'Corban' (devoted to God) allows people to neglect honoring their parents."],
    "Matthew 15:8": ["Isaiah Quoted", "Jesus quotes Isaiah, 'These people honor me with their lips, but their hearts are far from me.'"],
    "Matthew 15:10": ["Teaching the Crowd", "Jesus calls the crowd and teaches that what comes out of the mouth defiles a person, not what goes in."],
    "Matthew 15:12": ["Disciples Concerned", "The disciples ask Jesus to explain the parable to them."],
    "Matthew 15:17": ["Heart Produces Evil", "Jesus explains that food does not defile, but evil thoughts, murder, adultery, sexual immorality, theft, false testimony, and slander defile a person."],
    "Matthew 15:21": ["Jesus Travels to Tyre and Sidon", "Jesus withdraws to the region of Tyre and Sidon."],
    "Matthew 15:22": ["Canaanite Woman’s Request", "A woman from Canaan cries out, asking Jesus to heal her demon-possessed daughter."],
    "Matthew 15:25": ["Woman’s Faith", "Jesus initially does not answer, and the disciples urge Him to send her away, but she persists."],
    "Matthew 15:28": ["Healing Granted", "Jesus commends her faith and her daughter is healed at that moment."],
    "Matthew 15:29": ["Jesus Heals Many", "Jesus goes up a mountainside, sits down, and large crowds bring the lame, blind, crippled, mute, and many are healed."],
    "Matthew 15:32": ["Feeding the Four Thousand", "Jesus, moved with compassion, feeds four thousand men, plus women and children, with seven loaves and a few small fish."],
    "Matthew 15:38": ["Seven Baskets Left Over", "After everyone is fed, the disciples collect seven baskets of leftovers."],

    "Matthew 16:1": ["Pharisees and Sadducees Test Jesus", "The Pharisees and Sadducees come to Jesus and ask Him to show them a sign from heaven."],
    "Matthew 16:2": ["Jesus Refuses Their Sign", "He replies that they can interpret the sky but cannot interpret the signs of the times."],
    "Matthew 16:4": ["No Sign Will Be Given", "Jesus says no sign will be given except the sign of Jonah, and He leaves them."],
    "Matthew 16:5": ["The Yeast of the Pharisees", "The disciples forget to bring bread and Jesus warns them to beware of the yeast of the Pharisees and Sadducees."],
    "Matthew 16:8": ["Disciples Misunderstand", "The disciples think Jesus is speaking about literal bread, not understanding His warning about teaching."],
    "Matthew 16:13": ["Peter Confesses Christ", "Jesus asks who the people say He is, and who they say He is; Peter declares, 'You are the Christ, the Son of the living God.'"],
    "Matthew 16:17": ["Blessed Revelation", "Jesus blesses Peter, revealing that this truth was revealed to him by God, not by human knowledge."],
    "Matthew 16:18": ["Church Built on Peter", "Jesus says that on this rock He will build His church, and the gates of Hades will not overcome it."],
    "Matthew 16:19": ["Keys of the Kingdom", "Jesus gives Peter the keys of the kingdom of heaven, with authority to bind and loose on earth as in heaven."],
    "Matthew 16:21": ["Jesus Predicts His Death", "From that time, Jesus begins to show His disciples that He must go to Jerusalem, suffer, be killed, and raised on the third day."],
    "Matthew 16:23": ["Peter Rebuked", "Peter rebukes Jesus, but Jesus says, 'Get behind me, Satan! You are a stumbling block.'"],
    "Matthew 16:24": ["Take Up Your Cross", "Jesus tells His disciples that anyone who wants to follow Him must deny themselves, take up their cross, and follow Him."],
    "Matthew 16:26": ["Gain the World vs. Soul", "What will it profit a person to gain the whole world but lose their soul? Or what can they give in exchange for their soul?"],
    "Matthew 16:27": ["Return in Glory", "The Son of Man will come in His Father’s glory with angels and reward each according to their deeds."],

    "Matthew 17:1": ["The Transfiguration", "Jesus takes Peter, James, and John up a high mountain, and is transfigured before them; His face shines like the sun, and His clothes become white as light."],
    "Matthew 17:3": ["Moses and Elijah Appear", "Moses and Elijah appear and talk with Jesus."],
    "Matthew 17:5": ["God’s Voice from the Cloud", "A bright cloud envelops them, and a voice says, 'This is my beloved Son, with whom I am well pleased; listen to Him.'"],
    "Matthew 17:6": ["Disciples Overcome", "The disciples fall on their faces in fear."],
    "Matthew 17:7": ["Jesus Comforts Them", "Jesus touches them and tells them to rise, saying, 'Do not be afraid.'"],
    "Matthew 17:9": ["Do Not Tell Until After Resurrection", "As they come down the mountain, Jesus instructs them not to tell anyone about the vision until after He has risen from the dead."],
    "Matthew 17:14": ["Healing of a Demon-Possessed Boy", "A man brings his son, possessed by a demon, to Jesus while the other disciples could not heal him."],
    "Matthew 17:17": ["Faithlessness of the People", "Jesus rebukes the unbelief of the people and the generation, and commands the demon to come out of the boy."],
    "Matthew 17:19": ["Disciples Ask About Their Failure", "The disciples privately ask Jesus why they could not cast out the demon."],
    "Matthew 17:20": ["Faith Can Move Mountains", "Jesus tells them it is because of little faith; if you have faith as small as a mustard seed, nothing will be impossible."],
    "Matthew 17:22": ["Jesus Predicts His Death Again", "While in Galilee, Jesus tells His disciples He will be delivered to the chief priests and scribes, condemned, killed, and raised on the third day."],
    "Matthew 17:24": ["Temple Tax", "Peter is asked if Jesus pays the temple tax; Jesus teaches about freedom of the Son of God but provides a way to pay the tax miraculously."],

    "Matthew 18:1": ["Who Is the Greatest?", "The disciples ask Jesus who is the greatest in the kingdom of heaven."],
    "Matthew 18:2": ["Jesus Calls a Child", "Jesus calls a little child to Him and sets the child among them."],
    "Matthew 18:3": ["Become Like Children", "Jesus tells them that unless they change and become like children, they will never enter the kingdom of heaven."],
    "Matthew 18:4": ["Humility Is Greatness", "Whoever humbles themselves like this child is the greatest in the kingdom of heaven."],
    "Matthew 18:5": ["Welcoming a Child", "Whoever welcomes a child in Jesus’ name welcomes Him."],
    "Matthew 18:6": ["Warning Against Causing Sin", "If anyone causes a child to sin, it is better for them to have a large millstone hung around their neck and be drowned in the sea."],
    "Matthew 18:9": ["Avoid Causing Sin", "It is better to enter life maimed than to be thrown into hell with all your parts intact."],
    "Matthew 18:10": ["Angels of Children", "See that you do not despise one of these little ones; their angels always see the face of God."],
    "Matthew 18:12": ["The Lost Sheep", "Jesus tells a parable of a shepherd who leaves ninety-nine sheep to find one lost sheep."],
    "Matthew 18:15": ["Restoring a Brother", "If your brother sins, go and show him his fault privately; if he listens, you have gained your brother."],
    "Matthew 18:16": ["Two or Three Witnesses", "If he does not listen, take one or two others with you, so every matter may be established by the testimony of two or three witnesses."],
    "Matthew 18:17": ["Church Involvement", "If he refuses to listen, tell it to the church; if he refuses even to listen to the church, treat him as a pagan or tax collector."],
    "Matthew 18:18": ["Binding and Loosing", "Whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven."],
    "Matthew 18:21": ["Forgiveness", "Peter asks Jesus how many times he should forgive his brother; Jesus says seventy-seven times."],
    "Matthew 18:23": ["Parable of the Unforgiving Servant", "Jesus tells a parable of a king who forgives a servant an enormous debt, but the servant refuses to forgive a small debt owed to him."],
    "Matthew 18:32": ["Lesson on Forgiveness", "The king condemns the unforgiving servant for not showing mercy as he had received mercy."],

    "Matthew 19:1": ["Jesus Leaves Galilee", "Jesus departs from Galilee and goes to the region of Judea beyond the Jordan, and large crowds follow Him."],
    "Matthew 19:3": ["Question About Divorce", "Some Pharisees approach Jesus, asking if it is lawful for a man to divorce his wife for any reason."],
    "Matthew 19:4": ["God Created Male and Female", "Jesus replies that God made them male and female and that a man shall leave his father and mother and be joined to his wife."],
    "Matthew 19:6": ["Marriage Is One Flesh", "So they are no longer two, but one flesh; what God has joined together, let no one separate."],
    "Matthew 19:7": ["Pharisees Challenge Him", "They ask why Moses allowed divorce, and Jesus explains it was because of hardness of heart."],
    "Matthew 19:9": ["Exception Clause", "Jesus teaches that except for sexual immorality, divorcing and remarrying is adultery."],
    "Matthew 19:13": ["Children Brought to Jesus", "People bring little children to Jesus for Him to bless them, but the disciples rebuke them."],
    "Matthew 19:14": ["Jesus Welcomes Children", "Jesus says, 'Let the little children come to me and do not hinder them, for the kingdom of heaven belongs to such as these.'"],
    "Matthew 19:16": ["The Rich Young Man", "A man asks Jesus what good deed he must do to have eternal life."],
    "Matthew 19:18": ["Keep the Commandments", "Jesus lists commandments: do not murder, commit adultery, steal, give false testimony, honor father and mother, love your neighbor as yourself."],
    "Matthew 19:21": ["Sell Possessions and Follow Me", "Jesus tells him, 'If you want to be perfect, sell your possessions, give to the poor, and follow me.'"],
    "Matthew 19:23": ["Difficulty for the Rich", "Jesus says it is hard for a rich person to enter the kingdom of heaven."],
    "Matthew 19:26": ["With God All Things Are Possible", "Jesus reminds that with man this is impossible, but with God all things are possible."],

    "Matthew 20:1": ["Parable of the Workers in the Vineyard", "Jesus tells a parable about a landowner who hires workers at different times of the day for the vineyard."],
    "Matthew 20:4": ["Agreement on Wages", "The landowner agrees to pay a denarius to those hired first and also promises the same to those hired later."],
    "Matthew 20:6": ["Workers Hired Later", "The landowner continues to hire laborers at the third, sixth, ninth, and eleventh hours."],
    "Matthew 20:8": ["Paying the Workers", "At the end of the day, the landowner instructs the steward to pay all workers beginning with the last hired."],
    "Matthew 20:10": ["Equal Wages", "Those hired first receive the same denarius as those hired last, causing grumbling."],
    "Matthew 20:12": ["Landowner Explains", "The landowner responds that he is not being unfair; he paid them what was agreed and he has the right to be generous."],
    "Matthew 20:16": ["Many Are First, Many Are Last", "Jesus concludes, 'So the last will be first, and the first will be last.'"],
    "Matthew 20:20": ["Request of James and John’s Mother", "The mother of Zebedee’s sons asks Jesus to grant her sons places of honor in His kingdom."],
    "Matthew 20:23": ["Jesus Explains the Cup", "Jesus says that sitting at His right or left is not His to grant, but for those for whom it is prepared by the Father."],
    "Matthew 20:25": ["Servant Leadership", "Jesus teaches that rulers exercise authority over others, but it should not be so among His followers."],
    "Matthew 20:28": ["Son of Man Came to Serve", "Even the Son of Man did not come to be served, but to serve and give His life as a ransom for many."],

    "Matthew 21:1": ["Triumphal Entry", "Jesus instructs His disciples to go to the village ahead, where they will find a donkey tied on which no one has ever sat."],
    "Matthew 21:5": ["Prophecy Fulfilled", "This fulfills what was spoken through the prophet: 'Say to the Daughter of Zion, See, your king comes to you, gentle and riding on a donkey.'"],
    "Matthew 21:7": ["Disciples Obey", "The disciples place Jesus on the donkey, and He rides into Jerusalem."],
    "Matthew 21:8": ["Crowd Praises Jesus", "Many people spread cloaks and branches on the road, shouting, 'Hosanna to the Son of David! Blessed is He who comes in the name of the Lord!'"],
    "Matthew 21:12": ["Cleansing of the Temple", "Jesus enters the temple and drives out all who are buying and selling, overturning the tables of the money changers."],
    "Matthew 21:13": ["Temple a House of Prayer", "Jesus says, 'It is written, My house shall be called a house of prayer, but you make it a den of robbers.'"],
    "Matthew 21:18": ["Fig Tree Withered", "The next morning, Jesus sees a fig tree with no fruit and curses it, and it withers immediately."],
    "Matthew 21:21": ["Faith Can Move Mountains", "Jesus tells His disciples that if they have faith and do not doubt, they can do what was done to the fig tree and even more."],
    "Matthew 21:23": ["Authority Questioned", "Chief priests and elders ask Jesus by what authority He does these things."],
    "Matthew 21:28": ["Parable of Two Sons", "Jesus tells a parable of a man with two sons; one initially refuses to work in the vineyard but later goes, while the other agrees but does not go."],
    "Matthew 21:33": ["Parable of the Tenants", "A landowner plants a vineyard and rents it to tenants. When he sends servants, they are mistreated and some killed."],
    "Matthew 21:42": ["The Stone the Builders Rejected", "Jesus quotes Psalm 118, declaring that the stone the builders rejected has become the cornerstone."],

    "Matthew 22:1": ["Parable of the Wedding Banquet", "Jesus tells a parable about a king who prepares a wedding banquet for his son."],
    "Matthew 22:3": ["Initial Guests Refuse", "The king sends servants to call the invited guests, but they refuse to come."],
    "Matthew 22:6": ["Punishment of the Wicked", "The king sends his army, destroys the murderers, and burns their city."],
    "Matthew 22:8": ["Call Others to the Banquet", "The king tells his servants to invite anyone they find on the streets, both good and bad, to fill the wedding hall."],
    "Matthew 22:11": ["Man Without Wedding Garment", "The king sees a man not wearing wedding clothes and questions him."],
    "Matthew 22:13": ["Man Cast Out", "The man is bound and thrown outside into the darkness, where there is weeping and gnashing of teeth."],
    "Matthew 22:15": ["Pharisees Test Jesus", "The Pharisees plot to trap Jesus with a question about paying taxes to Caesar."],
    "Matthew 22:18": ["Jesus’ Wisdom", "Jesus, aware of their evil intent, asks for a coin and inquires whose image is on it."],
    "Matthew 22:21": ["Render to Caesar", "Jesus tells them, 'Give to Caesar what is Caesar’s, and to God what is God’s.'"],
    "Matthew 22:23": ["Sadducees Question Resurrection", "The Sadducees, who deny resurrection, ask Jesus about marriage in the resurrection."],
    "Matthew 22:29": ["Jesus Corrects Them", "Jesus tells them they are in error, not knowing the Scriptures or the power of God."],
    "Matthew 22:32": ["God of the Living", "Jesus declares that God is the God of Abraham, Isaac, and Jacob—not of the dead but of the living."],
    "Matthew 22:37": ["Greatest Commandment", "Jesus says to love the Lord your God with all your heart, soul, and mind."],
    "Matthew 22:39": ["Second Commandment", "Love your neighbor as yourself."],
    "Matthew 22:41": ["Question About the Messiah", "Jesus asks the Pharisees whose son the Christ is, and they answer 'David’s son.'"],
    "Matthew 22:44": ["Messiah as Lord", "Jesus quotes Psalm 110, showing that David calls the Messiah 'Lord.'"],

    "Matthew 23:1": ["Jesus Speaks to the Crowd", "Jesus addresses the people and His disciples, teaching about the scribes and Pharisees."],
    "Matthew 23:2": ["Authority of the Scribes and Pharisees", "The scribes and Pharisees sit in Moses’ seat; therefore, do and observe all they tell you."],
    "Matthew 23:3": ["Do Not Follow Their Example", "Do not practice what they do, for they do not practice what they preach."],
    "Matthew 23:4": ["Burden on Others", "They tie up heavy loads, difficult to bear, and lay them on others’ shoulders."],
    "Matthew 23:5": ["Do Everything to Be Seen", "They do all their deeds to be seen by others, widening phylacteries and lengthening tassels."],
    "Matthew 23:7": ["Love Places of Honor", "They love places of honor at banquets, greetings in marketplaces, and to be called Rabbi."],
    "Matthew 23:8": ["You Are All Brothers", "But you are not to be called Rabbi, for you have one Teacher, and you are all brothers."],
    "Matthew 23:13": ["Woe to the Scribes and Pharisees", "Jesus pronounces woes on the scribes and Pharisees for shutting the kingdom of heaven in people’s faces."],
    "Matthew 23:15": ["Traveling to Make Disciples", "They travel sea and land to win one proselyte, yet make them twice as much a child of hell as themselves."],
    "Matthew 23:23": ["Neglecting Justice and Faithfulness", "They tithe mint, dill, and cumin but neglect the weightier matters of the law: justice, mercy, and faithfulness."],
    "Matthew 23:25": ["Clean the Outside, Not the Inside", "They clean the outside of the cup and dish, but inside they are full of greed and self-indulgence."],
    "Matthew 23:27": ["Whitewashed Tombs", "They appear righteous outwardly but inside are full of dead men’s bones and all uncleanness."],
    "Matthew 23:29": ["Woe to the Scribes and Pharisees Again", "Jesus says they build tombs for the prophets and decorate the graves of the righteous, yet they would have killed the prophets."],
    "Matthew 23:36": ["Accountability", "Truly, all these things will come upon this generation."],

    "Matthew 24:1": ["Jesus Predicts the Temple’s Destruction", "Jesus leaves the temple, and His disciples point out the buildings, but He predicts not one stone will be left upon another."],
    "Matthew 24:3": ["Questions About the End Times", "The disciples ask Jesus privately when these things will happen and what will be the sign of His coming and the end of the age."],
    "Matthew 24:4": ["Warning Against Deception", "Jesus warns them not to be deceived, for many will come in His name claiming to be the Christ."],
    "Matthew 24:6": ["Wars and Rumors of Wars", "Jesus speaks of wars, rumors of wars, famines, and earthquakes as the beginning of birth pains."],
    "Matthew 24:9": ["Persecution of Believers", "They will deliver you to be persecuted and killed, and you will be hated by all nations for His name’s sake."],
    "Matthew 24:12": ["Increase of Lawlessness", "Because lawlessness will increase, the love of many will grow cold."],
    "Matthew 24:14": ["Gospel to All Nations", "The gospel of the kingdom will be preached in the whole world as a testimony to all nations, and then the end will come."],
    "Matthew 24:15": ["Abomination of Desolation", "Jesus speaks of the abomination of desolation standing in the holy place, a sign for those in Judea to flee to the mountains."],
    "Matthew 24:21": ["Great Tribulation", "There will be great tribulation, unlike anything from the beginning of the world until now."],
    "Matthew 24:24": ["False Christs and Prophets", "False Christs and false prophets will arise and perform great signs and wonders to deceive, if possible, even the elect."],
    "Matthew 24:29": ["Coming of the Son of Man", "Immediately after the tribulation, the sun will be darkened, the moon will not give light, stars will fall, and the powers of heaven will be shaken."],
    "Matthew 24:30": ["Visible Return", "The Son of Man will appear in the sky with power and great glory, and all peoples will mourn when they see Him."],
    "Matthew 24:32": ["Parable of the Fig Tree", "Jesus tells the parable of the fig tree: when its branches become tender and leaves sprout, you know summer is near, similarly recognize the signs of His coming."],
    "Matthew 24:36": ["Day and Hour Unknown", "No one knows the day or hour, not the angels in heaven, nor the Son, but only the Father."],
    "Matthew 24:42": ["Be Watchful", "Therefore, stay awake, for you do not know on what day your Lord is coming."],
    "Matthew 24:44": ["Be Ready", "The Son of Man will come at an hour you do not expect, so be ready."],

    "Matthew 25:1": ["Parable of the Ten Virgins", "Jesus tells of ten virgins who took their lamps and went out to meet the bridegroom."],
    "Matthew 25:3": ["Wise and Foolish Virgins", "Five were wise and took oil in jars with their lamps, and five were foolish and took no extra oil."],
    "Matthew 25:6": ["The Bridegroom Comes", "At midnight the cry is heard that the bridegroom is coming, and they all rise to trim their lamps."],
    "Matthew 25:7": ["Foolish Virgins Run Out of Oil", "The foolish virgins ask the wise for oil, but they refuse, saying there may not be enough for both."],
    "Matthew 25:10": ["The Door Is Shut", "The bridegroom arrives; those ready go in with him to the wedding banquet, and the door is shut."],
    "Matthew 25:12": ["Lesson on Readiness", "Jesus warns, 'Truly, I say to you, I do not know you' to those who were unprepared."],
    "Matthew 25:14": ["Parable of the Talents", "A man going on a journey entrusts his property to his servants, each according to his ability."],
    "Matthew 25:16": ["Servants Invest the Talents", "The servant who received five talents trades with them and gains five more; the one with two talents gains two more."],
    "Matthew 25:18": ["Servant Hides Talent", "The servant with one talent buries it in the ground, doing nothing."],
    "Matthew 25:20": ["Master Returns", "The master returns and asks for an account of what they have done with the talents."],
    "Matthew 25:23": ["Faithful Servants Rewarded", "The master praises the faithful servants, 'Well done, good and faithful servant! You have been faithful over a little; I will set you over much.'"],
    "Matthew 25:28": ["Unfaithful Servant Punished", "The servant who hid his talent is rebuked and cast into outer darkness."],
    "Matthew 25:31": ["The Sheep and the Goats", "The Son of Man comes in His glory with angels, and all nations are gathered before Him."],
    "Matthew 25:33": ["Separation of People", "He separates the people as a shepherd separates sheep from goats."],
    "Matthew 25:35": ["The Sheep’s Reward", "The righteous are welcomed for feeding the hungry, giving drink to the thirsty, welcoming strangers, clothing the naked, caring for the sick, and visiting prisoners."],
    "Matthew 25:41": ["The Goats’ Judgment", "The unrighteous are sent away into eternal fire prepared for the devil and his angels for failing to serve others."],

    "Matthew 26:1": ["Jesus Predicts His Death", "Jesus tells His disciples that after two days the Passover is coming and the Son of Man will be delivered to be crucified."],
    "Matthew 26:6": ["Anointing at Bethany", "Jesus is at the house of Simon the leper, where a woman anoints Him with expensive perfume."],
    "Matthew 26:8": ["Disciples Rebuke the Woman", "The disciples complain about the waste, asking why such expensive perfume is used."],
    "Matthew 26:10": ["Jesus Defends Her", "Jesus says she has done a beautiful thing, preparing Him for burial, and her deed will be remembered wherever the gospel is preached."],
    "Matthew 26:14": ["Judas Agrees to Betray Jesus", "Judas Iscariot goes to the chief priests and agrees to betray Jesus for thirty pieces of silver."],
    "Matthew 26:17": ["Preparation for Passover", "The disciples ask Jesus where to prepare for the Passover meal."],
    "Matthew 26:26": ["Institution of the Lord’s Supper", "During the meal, Jesus takes bread, blesses it, breaks it, and gives it to the disciples, saying it is His body."],
    "Matthew 26:27": ["Cup of the New Covenant", "He takes the cup, gives thanks, and tells them it is the new covenant in His blood, poured out for many for the forgiveness of sins."],
    "Matthew 26:31": ["Jesus Predicts Peter’s Denial", "Jesus tells them all that they will fall away that night, quoting Scripture, and Peter declares he will never fall."],
    "Matthew 26:36": ["Prayer in Gethsemane", "Jesus goes with His disciples to Gethsemane and prays, asking God if possible to let the cup pass from Him, yet submits to the Father’s will."],
    "Matthew 26:40": ["Disciples Sleep", "He finds the disciples sleeping and tells them to watch and pray to avoid temptation."],
    "Matthew 26:47": ["Jesus Arrested", "Judas arrives with a crowd, armed with swords and clubs, and betrays Jesus with a kiss."],
    "Matthew 26:57": ["Jesus Taken to the High Priest", "Jesus is led to Caiaphas the high priest, where the scribes and elders are gathered."],
    "Matthew 26:69": ["Peter Denies Jesus", "Peter follows at a distance, and when confronted, he denies knowing Jesus three times before the rooster crows."],
    "Matthew 26:75": ["Peter Remembers Jesus’ Words", "After the rooster crows, Peter remembers Jesus’ prediction and weeps bitterly."],

    "Matthew 27:1": ["Jesus Brought Before Pilate", "Early in the morning, the chief priests and elders conspire, binding Jesus and delivering Him to Pilate."],
    "Matthew 27:3": ["Judas Repents", "Judas, who betrayed Jesus, feels remorse and returns the thirty pieces of silver to the chief priests and elders."],
    "Matthew 27:6": ["Chief Priests Refuse the Money", "They say it is not lawful to put the silver into the treasury, since it is blood money."],
    "Matthew 27:11": ["Jesus Before Pilate", "Jesus stands before Pilate, who asks if He is the King of the Jews, and Jesus answers, 'You say so.'"],
    "Matthew 27:15": ["Custom of Releasing a Prisoner", "It is the governor’s custom at the feast to release one prisoner, and the crowd chooses Barabbas over Jesus."],
    "Matthew 27:19": ["Pilate’s Wife Warns Him", "Pilate’s wife sends a message urging him to have nothing to do with Jesus, because she suffered in a dream because of Him."],
    "Matthew 27:22": ["The Crowd Chooses Barabbas", "Pilate asks the crowd what to do with Jesus, and they shout, 'Crucify Him!'"],
    "Matthew 27:26": ["Jesus Is Sentenced", "Pilate releases Barabbas and has Jesus flogged and handed over to be crucified."],
    "Matthew 27:27": ["The Soldiers Mock Jesus", "The soldiers take Jesus into the Praetorium, strip Him, put a scarlet robe on Him, crown Him with thorns, and mock Him."],
    "Matthew 27:32": ["Simon of Cyrene", "Simon is compelled to carry Jesus’ cross to Golgotha."],
    "Matthew 27:33": ["Crucifixion", "They bring Jesus to Golgotha and offer Him wine mixed with gall, which He refuses."],
    "Matthew 27:37": ["Inscription Above the Cross", "Pilate writes the charge: 'This is Jesus, the King of the Jews.' It is written in Hebrew, Latin, and Greek."],
    "Matthew 27:46": ["Jesus Cries Out", "Jesus cries, 'My God, my God, why have you forsaken me?'"],
    "Matthew 27:50": ["Death of Jesus", "Jesus cries again with a loud voice and yields up His spirit."],
    "Matthew 27:51": ["Temple Veil Torn", "The veil of the temple is torn in two from top to bottom, the earth shakes, rocks split, and tombs open."],
    "Matthew 27:57": ["Jesus Is Buried", "Joseph of Arimathea asks Pilate for Jesus’ body, wraps it in a clean linen cloth, and lays it in his own new tomb."],

    "Matthew 28:1": ["The Resurrection Morning", "After the Sabbath, Mary Magdalene and the other Mary go to see the tomb."],
    "Matthew 28:2": ["Angel Rolls Away the Stone", "A violent earthquake occurs as an angel of the Lord descends from heaven, rolls back the stone, and sits on it."],
    "Matthew 28:5": ["Angel Speaks to the Women", "The angel tells the women not to be afraid and announces that Jesus, who was crucified, has risen."],
    "Matthew 28:7": ["Go Tell the Disciples", "The angel instructs the women to go quickly and tell the disciples that Jesus is going ahead of them into Galilee."],
    "Matthew 28:9": ["Jesus Appears to the Women", "Jesus meets them as they go to tell the disciples, and they worship Him; He tells them not to fear and to inform the disciples."],
    "Matthew 28:11": ["Guards Report to the Chief Priests", "Some of the guards go into the city and report all that has happened to the chief priests."],
    "Matthew 28:12": ["Bribing the Soldiers", "The chief priests and elders give the soldiers money, instructing them to say that the disciples stole Jesus’ body while they slept."],
    "Matthew 28:16": ["Disciples Go to Galilee", "The eleven disciples go to Galilee, to the mountain Jesus had designated for them."],
    "Matthew 28:18": ["Jesus Speaks with Authority", "Jesus approaches them and says that all authority in heaven and on earth has been given to Him."],
    "Matthew 28:19": ["Great Commission", "Jesus commands them to go and make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit."],
    "Matthew 28:20": ["Teaching and Presence", "Jesus instructs them to teach all that He commanded and assures them of His presence always, to the end of the age."],

    "Mark 1:1": ["The Beginning of the Gospel", "Mark begins the account of the good news about Jesus Christ, the Son of God."],
    "Mark 1:2": ["John the Baptist Prepares the Way", "Prophecies about a messenger preparing the way for the Lord are introduced."],
    "Mark 1:4": ["John the Baptist's Ministry", "John appears in the wilderness preaching repentance and baptizing people."],
    "Mark 1:9": ["The Baptism of Jesus", "Jesus is baptized by John in the Jordan, and the heavens open with the Father's voice declaring Him as His beloved Son."],
    "Mark 1:12": ["The Temptation of Jesus", "The Spirit drives Jesus into the wilderness where He is tempted by Satan for forty days."],
    "Mark 1:14": ["Jesus Begins His Ministry", "After John is arrested, Jesus begins preaching in Galilee about the kingdom of God."],
    "Mark 1:16": ["Calling the First Disciples", "Jesus calls Simon, Andrew, James, and John to follow Him."],
    "Mark 1:21": ["Jesus Teaches with Authority", "In Capernaum, Jesus teaches in the synagogue and amazes the people with His authority."],
    "Mark 1:23": ["Jesus Casts Out an Unclean Spirit", "Jesus rebukes an unclean spirit and frees a man in the synagogue."],
    "Mark 1:29": ["Jesus Heals Many", "Jesus heals Simon’s mother-in-law and many sick and demon-possessed people."],
    "Mark 1:35": ["Jesus Prays in a Solitary Place", "Early in the morning Jesus goes to a quiet place to pray."],
    "Mark 1:40": ["Jesus Heals a Leper", "A man with leprosy comes to Jesus in faith and is healed."],

    "Mark 2:1": ["Jesus Heals a Paralytic", "A paralyzed man is lowered through the roof, and Jesus forgives his sins and heals him."],
    "Mark 2:13": ["The Calling of Levi", "Jesus calls Levi the tax collector to follow Him, and Levi leaves everything to become His disciple."],
    "Mark 2:15": ["Jesus Eats with Sinners", "Jesus dines with tax collectors and sinners, explaining that He came to call sinners, not the righteous."],
    "Mark 2:18": ["Question About Fasting", "People ask why Jesus' disciples do not fast, and He answers using the example of a bridegroom."],
    "Mark 2:21": ["New Cloth and New Wine", "Jesus teaches that new cloth is not patched on old garments and new wine is not put into old wineskins."],
    "Mark 2:23": ["Lord of the Sabbath", "Jesus explains that the Sabbath was made for man and declares that the Son of Man is Lord even of the Sabbath."],

    "Mark 3:1": ["Man with a Withered Hand Healed", "In the synagogue Jesus heals a man with a withered hand on the Sabbath while the Pharisees watch closely."],
    "Mark 3:6": ["Plot Against Jesus", "The Pharisees join with the Herodians and begin planning how they might destroy Jesus."],
    "Mark 3:7": ["Crowds Follow Jesus", "Large crowds from many regions come to Jesus as He continues healing the sick and casting out demons."],
    "Mark 3:13": ["The Twelve Apostles Appointed", "Jesus appoints twelve disciples to be with Him and to be sent out to preach and have authority over demons."],
    "Mark 3:20": ["Jesus and Beelzebul", "Some accuse Jesus of casting out demons by the power of Beelzebul."],
    "Mark 3:23": ["A House Divided Cannot Stand", "Jesus explains that Satan cannot cast out Satan and teaches about a kingdom divided against itself."],
    "Mark 3:28": ["Blasphemy Against the Holy Spirit", "Jesus warns that blasphemy against the Holy Spirit will not be forgiven."],
    "Mark 3:31": ["Jesus' True Family", "Jesus teaches that those who do God's will are His true family."],

    "Mark 4:1": ["Parable of the Sower", "Jesus teaches a large crowd by the sea using the parable of a farmer scattering seed on different types of soil."],
    "Mark 4:10": ["Purpose of Parables", "Jesus explains to His disciples why He teaches the crowds in parables."],
    "Mark 4:13": ["Explanation of the Parable of the Sower", "Jesus explains how the different soils represent different responses to the word of God."],
    "Mark 4:21": ["The Lamp on a Stand", "Jesus teaches that a lamp is meant to be placed on a stand so its light can be seen."],
    "Mark 4:26": ["Parable of the Growing Seed", "Jesus compares the kingdom of God to seed that grows secretly until the harvest."],
    "Mark 4:30": ["Parable of the Mustard Seed", "Jesus explains that the kingdom of God begins small like a mustard seed but grows very large."],
    "Mark 4:35": ["Jesus Calms the Storm", "While crossing the sea with His disciples, Jesus rebukes the wind and waves and brings calm."],

    "Mark 5:1": ["Jesus Heals the Demon-Possessed Man", "Jesus arrives in the region of the Gerasenes where a man possessed by many demons lives among the tombs. The demons recognize Jesus and beg not to be sent away. Jesus casts them into a herd of pigs, which rush into the sea, and the man is restored."],
    "Mark 5:14": ["People Fear and Ask Jesus to Leave", "Those who witnessed the event report it in the town, and the people come and see the formerly possessed man sitting clothed and in his right mind. Filled with fear, they ask Jesus to leave their region."],
    "Mark 5:18": ["The Healed Man Sent to Testify", "The man who had been possessed asks to follow Jesus, but Jesus sends him home to tell others what the Lord has done for him."],
    "Mark 5:21": ["Jairus Seeks Help from Jesus", "When Jesus returns across the lake, a synagogue leader named Jairus pleads with Him to heal his dying daughter."],
    "Mark 5:25": ["Healing of the Woman with the Issue of Blood", "A woman who had suffered from bleeding for twelve years touches Jesus' garment in faith and is instantly healed."],
    "Mark 5:30": ["Jesus Acknowledges Her Faith", "Jesus stops and asks who touched Him, and the woman comes forward trembling. Jesus assures her that her faith has made her well."],
    "Mark 5:35": ["News of Jairus' Daughter's Death", "Messengers arrive saying that Jairus' daughter has died, but Jesus encourages Jairus to believe."],
    "Mark 5:38": ["Jesus Raises Jairus' Daughter", "Jesus enters the house, tells the mourners that the child is only sleeping, and raises the girl back to life."],
    "Mark 5:43": ["Amazement at the Miracle", "The girl's parents and those present are astonished, and Jesus instructs them to give her something to eat and not spread the news."],

    "Mark 6:1": ["Jesus Rejected at Nazareth", "Jesus returns to His hometown of Nazareth and teaches in the synagogue, but the people doubt Him because they know His family and background."],
    "Mark 6:6": ["Unbelief in Nazareth", "Jesus is amazed at their lack of faith and performs only a few miracles there before continuing to teach in nearby villages."],
    "Mark 6:7": ["The Twelve Sent Out", "Jesus sends the twelve disciples out in pairs, giving them authority over unclean spirits and instructing them to preach repentance."],
    "Mark 6:14": ["Herod Hears About Jesus", "King Herod hears about Jesus' growing fame and thinks that John the Baptist has been raised from the dead."],
    "Mark 6:17": ["John the Baptist Imprisoned", "John had been imprisoned by Herod because he rebuked Herod for marrying Herodias, his brother's wife."],
    "Mark 6:21": ["John the Baptist Beheaded", "During Herod’s birthday feast, Herodias' daughter dances and Herod promises to grant her request, leading to John the Baptist being executed."],
    "Mark 6:30": ["The Apostles Return", "The apostles return to Jesus and report everything they had done and taught during their mission."],
    "Mark 6:34": ["Jesus Has Compassion on the Crowd", "Seeing a large crowd, Jesus has compassion on them because they are like sheep without a shepherd."],
    "Mark 6:35": ["Feeding the Five Thousand", "Jesus multiplies five loaves and two fish to feed five thousand men besides women and children."],
    "Mark 6:45": ["Jesus Walks on Water", "Jesus sends the disciples ahead by boat and later walks on the sea to meet them during a storm."],
    "Mark 6:53": ["Jesus Heals the Sick", "When Jesus arrives at Gennesaret, many sick people are brought to Him and are healed."],

    "Mark 7:1": ["Traditions of the Elders", "Pharisees and scribes question Jesus because His disciples eat without following the ritual handwashing traditions."],
    "Mark 7:6": ["Jesus Rebukes Hypocrisy", "Jesus rebukes the religious leaders for honoring God with their lips while their hearts are far from Him."],
    "Mark 7:9": ["Tradition vs God's Command", "Jesus explains how human traditions can sometimes replace and nullify God's commands."],
    "Mark 7:14": ["What Truly Defiles a Person", "Jesus teaches that a person is not defiled by what enters the body but by what comes from the heart."],
    "Mark 7:24": ["Faith of the Syrophoenician Woman", "A Gentile woman pleads with Jesus to cast a demon out of her daughter, and her persistent faith is rewarded."],
    "Mark 7:31": ["Jesus Heals a Deaf and Mute Man", "In the region of Decapolis, Jesus heals a man who is deaf and has a speech impediment."],
    "Mark 7:36": ["People Amazed at Jesus", "The crowd is amazed at the miracle and declares that Jesus does everything well."],

    "Mark 8:1": ["Jesus Feeds the Four Thousand", "A large crowd has been with Jesus for three days with little food. Jesus has compassion on them and miraculously feeds four thousand people with seven loaves and a few fish."],
    "Mark 8:10": ["Pharisees Demand a Sign", "After the miracle, the Pharisees come and argue with Jesus, demanding a sign from heaven to test Him."],
    "Mark 8:14": ["Warning About the Yeast of the Pharisees", "Jesus warns His disciples to beware of the yeast of the Pharisees and Herod, referring to their corrupt teaching."],
    "Mark 8:22": ["Jesus Heals a Blind Man at Bethsaida", "Jesus heals a blind man in stages, first restoring partial sight and then full vision."],
    "Mark 8:27": ["Peter Declares Jesus the Messiah", "Jesus asks His disciples who they think He is, and Peter declares that He is the Christ."],
    "Mark 8:31": ["Jesus Predicts His Death", "Jesus begins teaching that the Son of Man must suffer, be rejected, killed, and rise again."],
    "Mark 8:34": ["The Cost of Following Jesus", "Jesus teaches that anyone who wants to follow Him must deny themselves, take up their cross, and follow Him."],

    "Mark 9:1": ["The Coming Kingdom Foretold", "Jesus tells His disciples that some standing there will not taste death until they see the kingdom of God come with power."],
    "Mark 9:2": ["The Transfiguration", "Jesus takes Peter, James, and John up a high mountain where He is transfigured before them and His glory is revealed."],
    "Mark 9:9": ["The Vision Kept Secret", "As they come down the mountain, Jesus tells the disciples not to tell anyone what they saw until the Son of Man rises from the dead."],
    "Mark 9:14": ["Jesus Heals a Boy with an Unclean Spirit", "A father brings his son who is possessed by a spirit that causes seizures, and Jesus rebukes the spirit and heals the boy."],
    "Mark 9:30": ["Jesus Predicts His Death Again", "Jesus tells His disciples that the Son of Man will be betrayed, killed, and rise again after three days."],
    "Mark 9:33": ["Who Is the Greatest", "Jesus teaches the disciples that true greatness comes from humility and serving others."],
    "Mark 9:38": ["Anyone Not Against Us Is for Us", "Jesus tells His disciples not to stop someone casting out demons in His name."],
    "Mark 9:42": ["Warning Against Causing Others to Sin", "Jesus warns about the seriousness of leading others into sin."],
    "Mark 9:49": ["Salt and Peace", "Jesus teaches about being seasoned with salt and living in peace with one another."],

    "Mark 10:1": ["Teaching About Divorce", "Jesus travels to the region of Judea beyond the Jordan, where the Pharisees question Him about divorce, and He teaches about God's design for marriage."],
    "Mark 10:13": ["Jesus Blesses the Children", "People bring little children to Jesus, and He teaches that the kingdom of God belongs to those who receive it like a child."],
    "Mark 10:17": ["The Rich Young Ruler", "A rich man asks Jesus what he must do to inherit eternal life, and Jesus challenges him to give up his possessions and follow Him."],
    "Mark 10:23": ["The Danger of Riches", "Jesus explains to His disciples how difficult it is for the rich to enter the kingdom of God."],
    "Mark 10:32": ["Jesus Predicts His Death a Third Time", "On the way to Jerusalem, Jesus again explains that He will be mocked, killed, and will rise again."],
    "Mark 10:35": ["A Request for Honor", "James and John ask Jesus for places of honor in His glory, leading to a lesson about servant leadership."],
    "Mark 10:46": ["Blind Bartimaeus Healed", "Near Jericho, Bartimaeus calls out to Jesus in faith and receives his sight."],

    "Mark 11:1": ["The Triumphal Entry", "Jesus enters Jerusalem riding on a colt, and the crowds welcome Him with shouts of 'Hosanna'."],
    "Mark 11:12": ["Jesus Curses the Fig Tree", "Seeing a fig tree with no fruit, Jesus curses it as a lesson about spiritual fruitfulness."],
    "Mark 11:15": ["Jesus Cleanses the Temple", "Jesus drives out the merchants and money changers from the temple, declaring it a house of prayer."],
    "Mark 11:20": ["The Fig Tree Withered", "The disciples notice that the fig tree Jesus cursed has withered from the roots."],
    "Mark 11:22": ["Teaching on Faith and Prayer", "Jesus teaches about faith in God and the power of believing prayer."],
    "Mark 11:27": ["Authority of Jesus Questioned", "The chief priests, scribes, and elders question Jesus about the authority by which He does these things."],

    "Mark 12:1": ["Parable of the Wicked Tenants", "Jesus tells a parable about tenants who beat the servants and kill the owner's son, showing how God's messengers and His Son are rejected."],
    "Mark 12:13": ["Paying Taxes to Caesar", "Religious leaders try to trap Jesus with a question about paying taxes, and He answers to give to Caesar what belongs to Caesar and to God what belongs to God."],
    "Mark 12:18": ["Question About the Resurrection", "The Sadducees question Jesus about marriage in the resurrection, and He explains the truth about life after the resurrection."],
    "Mark 12:28": ["The Greatest Commandment", "Jesus teaches that the greatest commandment is to love God with all your heart and to love your neighbor as yourself."],
    "Mark 12:35": ["The Messiah, David's Lord", "Jesus questions how the Messiah can be both David's son and David's Lord."],
    "Mark 12:38": ["Warning Against the Teachers of the Law", "Jesus warns the people about the pride and hypocrisy of the scribes."],
    "Mark 12:41": ["The Widow's Offering", "Jesus observes a poor widow giving two small coins and praises her sacrificial giving."],

    "Mark 13:1": ["Jesus Predicts the Destruction of the Temple", "As Jesus leaves the temple, He tells His disciples that not one stone will be left upon another."],
    "Mark 13:3": ["Signs of the End of the Age", "The disciples ask Jesus privately about the timing and signs of these events."],
    "Mark 13:5": ["Warnings About Deception", "Jesus warns that many will come claiming to be the Christ and will deceive many."],
    "Mark 13:7": ["Wars and Troubles", "Jesus speaks of wars, earthquakes, and famines as the beginning of birth pains."],
    "Mark 13:9": ["Persecution of Believers", "Jesus tells His followers they will be handed over to councils and persecuted for His name."],
    "Mark 13:14": ["The Abomination of Desolation", "Jesus refers to the prophecy of the abomination standing where it should not be."],
    "Mark 13:21": ["False Christs and Prophets", "Jesus warns again that false messiahs and prophets will attempt to deceive people."],
    "Mark 13:24": ["The Coming of the Son of Man", "Cosmic signs will appear and the Son of Man will come with power and glory."],
    "Mark 13:28": ["The Lesson of the Fig Tree", "Jesus teaches that just as a fig tree signals the change of season, the signs will show when the time is near."],
    "Mark 13:32": ["No One Knows the Day or Hour", "Jesus says no one knows the exact time of these events except the Father."],
    "Mark 13:33": ["Be Watchful", "Jesus urges His followers to stay alert and ready."],

    "Mark 14:1": ["Plot to Kill Jesus", "The chief priests and scribes look for a way to arrest Jesus secretly and put Him to death."],
    "Mark 14:3": ["Jesus Anointed at Bethany", "While Jesus is in Bethany, a woman pours expensive perfume on His head, preparing Him for burial."],
    "Mark 14:10": ["Judas Agrees to Betray Jesus", "Judas Iscariot goes to the chief priests and agrees to betray Jesus."],
    "Mark 14:12": ["Preparation for the Passover", "Jesus instructs His disciples to prepare the Passover meal."],
    "Mark 14:17": ["Jesus Predicts His Betrayal", "During the meal, Jesus tells His disciples that one of them will betray Him."],
    "Mark 14:22": ["The Lord's Supper", "Jesus institutes the Lord’s Supper, giving bread and wine as symbols of His body and blood."],
    "Mark 14:27": ["Jesus Predicts Peter's Denial", "Jesus tells His disciples they will fall away and predicts Peter will deny Him three times."],
    "Mark 14:32": ["Jesus Prays in Gethsemane", "In the garden of Gethsemane, Jesus prays in deep anguish before His arrest."],
    "Mark 14:43": ["Jesus Arrested", "Judas arrives with a crowd and betrays Jesus with a kiss, leading to His arrest."],
    "Mark 14:53": ["Jesus Before the Council", "Jesus is brought before the high priest and the council where false witnesses accuse Him."],
    "Mark 14:66": ["Peter Denies Jesus", "Peter denies knowing Jesus three times before the rooster crows."],

    "Mark 15:1": ["Jesus Before Pilate", "Early in the morning the chief priests deliver Jesus to the Roman governor Pilate and accuse Him."],
    "Mark 15:6": ["Barabbas Released", "Pilate offers to release a prisoner, but the crowd demands that Barabbas be released instead of Jesus."],
    "Mark 15:16": ["Jesus Mocked by Soldiers", "Roman soldiers mock Jesus, place a crown of thorns on His head, and strike Him."],
    "Mark 15:21": ["Jesus Led to Crucifixion", "Simon of Cyrene is forced to carry Jesus' cross as they lead Him to Golgotha."],
    "Mark 15:24": ["The Crucifixion", "Jesus is crucified and soldiers divide His garments by casting lots."],
    "Mark 15:33": ["The Death of Jesus", "Darkness covers the land and Jesus cries out before giving up His life."],
    "Mark 15:38": ["Temple Curtain Torn", "The curtain of the temple is torn in two from top to bottom."],
    "Mark 15:42": ["The Burial of Jesus", "Joseph of Arimathea courageously asks Pilate for Jesus' body and places it in a tomb."],

    "Mark 16:1": ["The Resurrection of Jesus", "Early on the first day of the week, Mary Magdalene, Mary the mother of James, and Salome go to the tomb and find the stone rolled away."],
    "Mark 16:5": ["The Angel's Message", "A young man in white tells them that Jesus has risen and instructs them to tell the disciples."],
    "Mark 16:9": ["Jesus Appears to Mary Magdalene", "Jesus appears first to Mary Magdalene, from whom He had cast out seven demons."],
    "Mark 16:12": ["Jesus Appears to Two Disciples", "Jesus appears in another form to two disciples as they walk in the countryside."],
    "Mark 16:14": ["Jesus Appears to the Eleven", "Jesus appears to the eleven disciples and rebukes them for their unbelief."],
    "Mark 16:15": ["The Great Commission", "Jesus commands His disciples to go into all the world and preach the gospel to every creature."],
    "Mark 16:19": ["The Ascension of Jesus", "After speaking to them, Jesus is taken up into heaven and sits at the right hand of God."],
    "Mark 16:20": ["The Disciples Preach Everywhere", "The disciples go out and preach everywhere, and the Lord confirms the message with signs."],

    "Luke 1:1": ["Introduction to Luke's Gospel", "Luke explains that many have written accounts about Jesus and that he carefully investigated everything to write an orderly account for Theophilus."],
    "Luke 1:5": ["Announcement of John the Baptist's Birth", "The angel Gabriel appears to Zechariah in the temple and announces that his wife Elizabeth will bear a son who will prepare the way for the Lord."],
    "Luke 1:18": ["Zechariah Doubts the Angel", "Zechariah questions how this can happen because he and Elizabeth are old, and he becomes unable to speak until the promise is fulfilled."],
    "Luke 1:26": ["Announcement of Jesus' Birth", "The angel Gabriel appears to Mary in Nazareth and tells her that she will conceive by the Holy Spirit and give birth to Jesus, the Son of the Most High."],
    "Luke 1:39": ["Mary Visits Elizabeth", "Mary visits Elizabeth, and Elizabeth's baby leaps in her womb as she is filled with the Holy Spirit."],
    "Luke 1:46": ["Mary's Song of Praise", "Mary praises God in a song often called the Magnificat, rejoicing in God's mercy and faithfulness."],
    "Luke 1:57": ["Birth of John the Baptist", "Elizabeth gives birth to a son, and the neighbors rejoice with her."],
    "Luke 1:67": ["Zechariah's Prophecy", "Zechariah is filled with the Holy Spirit and prophesies about God's salvation and the role of his son John in preparing the way."],
    "Luke 1:80": ["John Grows and Prepares", "John grows strong in spirit and lives in the wilderness until the time of his public ministry."],

    "Luke 2:1": ["The Birth of Jesus", "A decree from Caesar Augustus requires a census, and Joseph travels with Mary to Bethlehem where Jesus is born."],
    "Luke 2:8": ["Shepherds and the Angels", "Angels appear to shepherds in the fields announcing the birth of the Savior, Christ the Lord."],
    "Luke 2:15": ["Shepherds Visit Jesus", "The shepherds hurry to Bethlehem and find Mary, Joseph, and the baby lying in a manger."],
    "Luke 2:21": ["Jesus Named and Circumcised", "On the eighth day the child is circumcised and given the name Jesus as the angel had instructed."],
    "Luke 2:22": ["Jesus Presented in the Temple", "Mary and Joseph bring Jesus to the temple where Simeon and Anna recognize Him as the promised Messiah."],
    "Luke 2:39": ["Return to Nazareth", "After completing everything required by the law, the family returns to Nazareth in Galilee."],
    "Luke 2:41": ["The Boy Jesus in the Temple", "At twelve years old, Jesus stays behind in the temple discussing with the teachers while His parents search for Him."],
    "Luke 2:49": ["Jesus Speaks About His Father's House", "Jesus explains to His parents that He must be in His Father's house."],
    "Luke 2:52": ["Jesus Grows in Wisdom", "Jesus continues to grow in wisdom, stature, and favor with God and people."],

    "Luke 3:1": ["John the Baptist Prepares the Way", "During the fifteenth year of Tiberius Caesar, John the Baptist begins preaching in the wilderness of Judea, calling for repentance."],
    "Luke 3:7": ["John’s Warning to the Crowd", "John warns the crowds to produce fruits in keeping with repentance and not rely on ancestry."],
    "Luke 3:10": ["Practical Instructions for Repentance", "John gives guidance to the people, tax collectors, and soldiers on living righteously and honestly."],
    "Luke 3:16": ["Baptism with the Holy Spirit", "John explains that he baptizes with water, but one more powerful than he will baptize with the Holy Spirit and fire."],
    "Luke 3:21": ["Baptism of Jesus", "Jesus is baptized, and the Holy Spirit descends on Him like a dove while a voice from heaven declares Him the beloved Son."],
    "Luke 3:23": ["Genealogy of Jesus", "Luke notes that Jesus was about thirty years old when He began His ministry, being the son of Joseph."],
    "Luke 3:31": ["Lineage of Jesus", "Luke traces Jesus’ lineage back through David, Abraham, and ultimately to Adam, emphasizing His connection to all humanity."],

    "Luke 4:1": ["Jesus Tempted in the Wilderness", "Jesus, full of the Holy Spirit, is led into the wilderness where He fasts for forty days and is tempted by the devil."],
    "Luke 4:14": ["Jesus Begins His Ministry", "Jesus returns to Galilee in the power of the Spirit, and news about Him spreads throughout the region."],
    "Luke 4:16": ["Jesus Reads in the Synagogue", "Jesus attends the synagogue in Nazareth, reads from Isaiah, and declares that the scripture is fulfilled in Him."],
    "Luke 4:28": ["Rejection at Nazareth", "The people of Nazareth are initially amazed but become angry when Jesus challenges them, and they try to drive Him out."],
    "Luke 4:31": ["Teaching in Capernaum", "Jesus teaches in Capernaum with authority, astonishing the people."],
    "Luke 4:33": ["Jesus Casts Out an Unclean Spirit", "A man possessed by an unclean spirit is healed by Jesus' authority."],
    "Luke 4:38": ["Healing Simon's Mother-in-Law", "Jesus heals Simon Peter's mother-in-law who is sick with a fever."],
    "Luke 4:40": ["Jesus Heals Many", "At sunset, people bring the sick and demon-possessed to Jesus, and He heals them all."],

    "Luke 5:1": ["Jesus Calls His First Disciples", "Jesus teaches by the lake, gets into Simon Peter's boat, and tells him to put out into deep water. After a miraculous catch of fish, Peter, James, and John are called to follow Jesus."],
    "Luke 5:12": ["Jesus Heals a Leper", "A man with leprosy approaches Jesus, and through faith, he is cleansed."],
    "Luke 5:17": ["Jesus Heals a Paralytic", "A paralytic is lowered through the roof, and Jesus forgives his sins before healing him, demonstrating His authority to forgive."],
    "Luke 5:27": ["Calling of Levi (Matthew)", "Jesus calls Levi the tax collector to follow Him, and Levi immediately leaves everything to follow."],
    "Luke 5:33": ["Question About Fasting", "People ask why Jesus’ disciples do not fast, and He teaches about the newness of His kingdom compared to old traditions."],
    "Luke 5:36": ["New Cloth on an Old Garment", "Jesus explains that new teaching cannot simply be patched onto old religious traditions."],
    "Luke 5:39": ["New Wine in Old Wineskins", "Jesus teaches that His message brings new life and cannot be contained in old structures."],

    "Luke 6:1": ["Jesus and the Sabbath", "Jesus’ disciples pick grain on the Sabbath, and the Pharisees question Him, leading Jesus to teach about mercy over ritual."],
    "Luke 6:6": ["Healing on the Sabbath", "Jesus heals a man with a withered hand in the synagogue, showing the value of doing good over strict ritual."],
    "Luke 6:12": ["Jesus Chooses the Twelve Apostles", "Jesus spends the night in prayer on a mountain before selecting His twelve apostles."],
    "Luke 6:17": ["Jesus Teaches the Multitudes", "Jesus comes down from the mountain, stands on level ground, and teaches a large crowd including His disciples."],
    "Luke 6:20": ["The Beatitudes", "Jesus blesses the poor, the hungry, and those who mourn, teaching the principles of the kingdom of God."],
    "Luke 6:27": ["Love Your Enemies", "Jesus commands to love enemies, do good to those who hate, bless those who curse, and pray for persecutors."],
    "Luke 6:37": ["Do Not Judge", "Jesus teaches not to judge others, not to condemn, and that forgiving leads to being forgiven."],
    "Luke 6:38": ["Give and It Will Be Given", "Jesus explains the principle of generous giving, promising blessings in return."],

    "Luke 7:1": ["The Faith of the Centurion", "A Roman centurion asks Jesus to heal his servant, demonstrating remarkable faith, and Jesus commends his faith."],
    "Luke 7:11": ["Jesus Raises a Widow’s Son", "Jesus encounters a funeral procession in Nain and raises the widow’s only son, showing His compassion and power over death."],
    "Luke 7:18": ["John the Baptist Sends Messengers", "John, in prison, sends disciples to ask Jesus if He is the one to come, confirming His identity through His works."],
    "Luke 7:22": ["Jesus’ Response to John’s Disciples", "Jesus tells John’s disciples to report what they see: the blind receive sight, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised, and the poor have good news preached."],
    "Luke 7:36": ["A Sinful Woman Anoints Jesus", "A woman known for her sins anoints Jesus’ feet with ointment and tears, demonstrating repentance and love."],
    "Luke 7:47": ["Forgiveness and Love", "Jesus teaches that those forgiven much love much, contrasting the woman’s love with the host’s lack of hospitality."],
    "Luke 7:50": ["Faith Brings Forgiveness", "Jesus tells the woman that her faith has saved her, granting her forgiveness."],

    "Luke 8:1": ["Jesus Travels and Teaches", "Jesus travels through towns and villages, proclaiming the good news of the kingdom of God, accompanied by the twelve and some women who support His ministry."],
    "Luke 8:4": ["Parable of the Sower", "Jesus tells the parable of a sower scattering seed on different types of soil, illustrating how people receive God's word."],
    "Luke 8:12": ["Explanation of the Parable", "Jesus explains that the seed on the path represents those who hear but the devil takes away the message from their hearts."],
    "Luke 8:16": ["The Lamp on a Stand", "Jesus teaches that no one lights a lamp and hides it; the word of God is meant to be revealed."],
    "Luke 8:19": ["Jesus’ True Family", "When told His mother and brothers want to see Him, Jesus says His true family are those who hear and do God’s word."],
    "Luke 8:22": ["Jesus Calms the Storm", "Jesus and His disciples cross the lake, and He rebukes the wind and waves, demonstrating His authority over nature."],
    "Luke 8:26": ["Jesus Heals a Demon-Possessed Man", "In the region of the Gerasenes, Jesus casts demons out of a man and restores him to sanity."],
    "Luke 8:40": ["Jesus Heals Many", "Jesus returns to Galilee, and people bring their sick for healing, and He lays hands on them and heals them."],

    "Luke 9:1": ["Jesus Sends Out the Twelve", "Jesus gives His twelve disciples power and authority over all demons and to heal diseases, sending them to proclaim the kingdom of God."],
    "Luke 9:10": ["Feeding the Five Thousand", "A large crowd follows Jesus to a remote place, and He miraculously feeds five thousand men with five loaves and two fish."],
    "Luke 9:18": ["Peter Declares Jesus the Christ", "Jesus asks His disciples who the crowds say He is, and Peter declares that He is the Messiah of God."],
    "Luke 9:21": ["Jesus Predicts His Death", "Jesus begins to tell the disciples that the Son of Man must suffer, be rejected, killed, and rise again."],
    "Luke 9:28": ["The Transfiguration", "Jesus takes Peter, James, and John up a mountain where He is transfigured, with Moses and Elijah appearing and God’s voice declaring Jesus as His Son."],
    "Luke 9:37": ["Jesus Heals a Boy with an Unclean Spirit", "A man brings his son possessed by a spirit, and Jesus rebukes the spirit and heals the boy."],
    "Luke 9:51": ["Jesus Resolutely Sets Out for Jerusalem", "Jesus knows His time has come and resolutely heads toward Jerusalem to fulfill His mission."],

    "Luke 10:1": ["Jesus Sends Out the Seventy-Two", "Jesus appoints seventy-two others and sends them two by two ahead of Him to every town and place He will visit."],
    "Luke 10:2": ["Pray for Workers", "Jesus tells them the harvest is plentiful but the workers are few; pray for more laborers."],
    "Luke 10:3": ["Go Without Fear", "Jesus instructs them to go as lambs among wolves, relying on God and not fearing opposition."],
    "Luke 10:4": ["Travel Light", "Jesus advises them to take no money, bag, or extra sandals and to greet no one along the road unnecessarily."],
    "Luke 10:5": ["Peace to the House", "Enter a house and say, ‘Peace to this house,’ and stay there until leaving the town."],
    "Luke 10:7": ["Accept Hospitality", "Eat and drink what is offered, for the worker deserves his wages; do not move from house to house."],
    "Luke 10:9": ["Heal the Sick", "Heal the sick in the towns and proclaim that the kingdom of God has come near."],
    "Luke 10:10": ["Rejection Warned", "If a town does not welcome you, shake off the dust from your feet as a testimony against them."],
    "Luke 10:16": ["Heed the Messenger", "Jesus tells them that anyone who listens to you listens to Him, and anyone who rejects you rejects Him."],
    "Luke 10:17": ["The Seventy-Two Return", "The seventy-two return with joy, reporting that even demons submit to them in Jesus’ name."],
    "Luke 10:19": ["Authority Over the Enemy", "Jesus reminds them that He has given them authority to overcome the power of the enemy."],
    "Luke 10:21": ["Jesus Rejoices in the Spirit", "Jesus praises the Father for revealing truths to the humble and hiding them from the wise and learned."],
    "Luke 10:25": ["The Lawyer’s Question", "A lawyer asks Jesus how to inherit eternal life, prompting a discussion of the Law."],
    "Luke 10:27": ["Love God and Neighbor", "Jesus summarizes the Law: love God with all your heart, soul, strength, and mind, and love your neighbor as yourself."],
    "Luke 10:29": ["Who Is My Neighbor?", "The lawyer asks who counts as a neighbor, leading to a story from Jesus."],
    "Luke 10:30": ["Parable of the Good Samaritan", "A man is beaten by robbers; a priest and Levite pass by, but a Samaritan shows compassion and cares for him."],
    "Luke 10:37": ["Lesson of the Good Samaritan", "Jesus asks which of the three acted as a neighbor; the lawyer answers, ‘The one who showed mercy,’ and Jesus tells him to do likewise."],

    "Luke 11:1": ["Jesus Teaches About Prayer", "A disciple asks Jesus to teach them to pray, as John taught his disciples."],
    "Luke 11:2": ["The Lord’s Prayer Introduction", "Jesus begins teaching the model prayer, addressing God as Father."],
    "Luke 11:2b": ["Hallowed Be Your Name", "Jesus instructs to honor God's name and pray for His kingdom to come."],
    "Luke 11:3": ["Daily Needs", "Pray for daily bread and for forgiveness of sins, showing dependence on God."],
    "Luke 11:4": ["Forgiveness and Deliverance", "Ask for forgiveness and to be delivered from temptation and evil."],
    "Luke 11:5": ["Parable of the Friend at Midnight", "Jesus tells a parable about persistence in prayer using the example of a friend asking for bread at midnight."],
    "Luke 11:9": ["Ask, Seek, Knock", "Jesus encourages persistence, promising that those who ask will receive, those who seek will find, and those who knock will have the door opened."],
    "Luke 11:14": ["Jesus Casts Out a Demon", "A man who is mute is delivered from a demon, and he begins to speak, amazing the crowds."],
    "Luke 11:15": ["Accused of Beelzebul", "Some accuse Jesus of casting out demons by the power of Beelzebul, the prince of demons."],
    "Luke 11:20": ["By the Finger of God", "Jesus explains that He casts out demons by the power of God, showing the kingdom of God has come."],
    "Luke 11:24": ["A Clean Spirit Returns", "Jesus teaches about an unclean spirit leaving a person but returning to find the house empty, highlighting spiritual vigilance."],
    "Luke 11:27": ["Blessed Are Those Who Hear God", "A woman praises Jesus’ mother, but He says those who hear God’s word and obey it are truly blessed."],
    "Luke 11:29": ["Sign of Jonah", "The crowds demand a sign; Jesus says the only sign given will be the sign of Jonah."],
    "Luke 11:33": ["Light of the Body", "Jesus teaches that the eye is the lamp of the body and one must live in the light to have full vision."],
    "Luke 11:37": ["Jesus and the Pharisee", "Jesus dines at a Pharisee’s house and exposes their focus on outward appearance rather than inner righteousness."],

    "Luke 12:1": ["Warning Against Hypocrisy", "Jesus warns the crowds to beware of the yeast of the Pharisees, which represents hypocrisy."],
    "Luke 12:2": ["Nothing Concealed", "Jesus teaches that nothing concealed will remain hidden and everything will be revealed."],
    "Luke 12:4": ["Fear God, Not Man", "Jesus tells His disciples not to fear those who can kill the body but cannot touch the soul."],
    "Luke 12:8": ["Confess Me Before Men", "Jesus promises that whoever acknowledges Him before others will be acknowledged before God."],
    "Luke 12:13": ["Warning About Covetousness", "Someone asks Jesus to tell his brother to divide the inheritance, and Jesus warns against greed."],
    "Luke 12:15": ["Parable of the Rich Fool Begins", "Jesus teaches that life does not consist in the abundance of possessions."],
    "Luke 12:16": ["The Rich Fool’s Plan", "A rich man stores up wealth for himself, thinking he can rest and enjoy life."],
    "Luke 12:20": ["God Says to the Fool", "God calls the man a fool, saying his life will be demanded that very night."],
    "Luke 12:22": ["Do Not Worry", "Jesus instructs His disciples not to worry about life, food, or clothing."],
    "Luke 12:27": ["Consider the Lilies", "Jesus points to the lilies of the field, showing God’s care and provision for His creation."],
    "Luke 12:32": ["Fear Not, Little Flock", "Jesus encourages His disciples, assuring them that the Father is pleased to give them the kingdom."],
    "Luke 12:35": ["Be Ready and Watchful", "Jesus instructs to be like servants waiting for the master to return, with lamps burning and ready."],
    "Luke 12:42": ["The Faithful Servant", "Jesus speaks of a servant put in charge who is faithful and wise, serving until the master returns."],
    "Luke 12:49": ["Jesus Brings Division", "Jesus explains that He came to bring division and that His message will set people against each other."],
    "Luke 12:54": ["Interpreting the Times", "Jesus rebukes the crowd for understanding the weather but not the present time."],
    "Luke 12:57": ["Judge for Yourselves", "Jesus encourages people to discern what is right and make wise decisions based on His teaching."],

    "Luke 13:1": ["Some People Killed by Pilate", "Jesus responds to news of Galileans killed by Pilate, teaching that all must repent or perish."],
    "Luke 13:3": ["Call to Repentance", "Jesus emphasizes the need for repentance, warning that unless people repent, they will all likewise perish."],
    "Luke 13:4": ["Parable of the Tower of Siloam", "Jesus reminds that disasters are not always punishment for sin, but all must repent."],
    "Luke 13:6": ["Parable of the Barren Fig Tree", "A man has a fig tree planted in his vineyard that bears no fruit, symbolizing unfruitfulness in life."],
    "Luke 13:7": ["The Vinedresser Intercedes", "The vinedresser asks for one more year to cultivate the tree before cutting it down."],
    "Luke 13:10": ["Jesus Heals a Crippled Woman", "On the Sabbath, Jesus heals a woman bent over for eighteen years, demonstrating His authority and compassion."],
    "Luke 13:14": ["Criticism by the Synagogue Leader", "The synagogue leader is indignant that Jesus healed on the Sabbath, and Jesus rebukes him."],
    "Luke 13:18": ["Parable of the Mustard Seed", "Jesus compares the kingdom of God to a mustard seed, starting small but growing large."],
    "Luke 13:20": ["Parable of the Yeast", "Jesus likens the kingdom of God to yeast that permeates and transforms the dough."],
    "Luke 13:22": ["Jesus Teaches on the Way to Jerusalem", "Jesus continues His journey, teaching about the narrow door and the importance of striving to enter it."],
    "Luke 13:31": ["Warning Against Herod", "Some Pharisees warn Jesus about Herod’s plan, but Jesus continues His mission undeterred."],
    "Luke 13:34": ["Lament Over Jerusalem", "Jesus laments Jerusalem’s resistance to God’s messengers and expresses His desire to gather them like a hen gathers her chicks."],

    "Luke 14:1": ["Jesus Heals on the Sabbath", "Jesus heals a man suffering from dropsy in the house of a prominent Pharisee on the Sabbath."],
    "Luke 14:3": ["Question About Healing", "The Pharisees watch closely to see if Jesus will heal on the Sabbath, hoping to accuse Him."],
    "Luke 14:7": ["Parable of the Wedding Feast", "Jesus notices how guests choose places of honor and teaches humility by telling them to take the lowest place."],
    "Luke 14:11": ["The Humble Will Be Exalted", "Jesus explains that those who exalt themselves will be humbled, and those who humble themselves will be exalted."],
    "Luke 14:12": ["Love Your Neighbors and the Poor", "Jesus teaches to invite the poor, crippled, lame, and blind rather than friends or family for a feast."],
    "Luke 14:14": ["Blessings for Giving", "Jesus promises that those who give without expecting repayment will be repaid at the resurrection of the righteous."],
    "Luke 14:15": ["The Great Supper Parable", "A man prepares a great dinner and invites many guests; Jesus uses this to teach about the kingdom of God."],
    "Luke 14:21": ["The Excuses of the Guests", "The invited guests make excuses and refuse to come, illustrating rejection of God’s invitation."],
    "Luke 14:23": ["Invite Everyone", "The master tells his servant to invite the poor, crippled, blind, and lame, showing God’s inclusive invitation."],
    "Luke 14:25": ["The Cost of Discipleship", "Jesus teaches that following Him requires putting Him above family and personal comfort."],
    "Luke 14:28": ["Counting the Cost", "Jesus illustrates the need to consider the cost of discipleship, comparing it to building a tower."],
    "Luke 14:33": ["Renounce All to Follow Jesus", "Jesus emphasizes that one must give up everything to be His disciple."],

    "Luke 15:1": ["Tax Collectors and Sinners Come to Jesus", "Tax collectors and sinners gather around Jesus to hear Him teach, which displeases the Pharisees and scribes."],
    "Luke 15:2": ["Criticism by Religious Leaders", "The Pharisees and scribes complain that Jesus welcomes sinners and eats with them."],
    "Luke 15:3": ["Parable of the Lost Sheep", "Jesus tells a parable about a shepherd leaving ninety-nine sheep to search for one lost sheep."],
    "Luke 15:7": ["Rejoicing Over One Sinner", "Jesus explains that there is joy in heaven over one sinner who repents more than over ninety-nine righteous people who do not need repentance."],
    "Luke 15:8": ["Parable of the Lost Coin", "A woman loses one coin out of ten, searches diligently, and rejoices when it is found."],
    "Luke 15:10": ["Heaven Rejoices Over Repentance", "Jesus teaches that there is rejoicing among the angels of God over one sinner who repents."],
    "Luke 15:11": ["Parable of the Prodigal Son Begins", "A man has two sons, and the younger asks for his inheritance, leaving home to squander it in reckless living."],
    "Luke 15:17": ["The Younger Son Repents", "After spending everything, the younger son realizes his mistake and decides to return to his father."],
    "Luke 15:20": ["The Father Welcomes the Son", "The father sees his son from afar, runs to him, embraces him, and orders a celebration for his return."],
    "Luke 15:25": ["The Older Son Is Angry", "The older son becomes angry upon seeing the celebration for his younger brother."],
    "Luke 15:28": ["The Father’s Explanation", "The father tells the older son that they must celebrate because the lost brother was dead and is alive again; he was lost and is found."],

    "Luke 16:1": ["Parable of the Unjust Steward", "Jesus tells a parable about a rich man and his dishonest manager who is about to be dismissed for wasting his master's possessions."],
    "Luke 16:5": ["The Steward’s Plan", "The manager calls each of his master's debtors and reduces their debts to secure favor for himself after losing his job."],
    "Luke 16:8": ["Commendation for Shrewdness", "The master commends the dishonest manager for acting shrewdly, teaching about using worldly wealth wisely."],
    "Luke 16:9": ["Use Wealth for Eternal Friends", "Jesus instructs to use worldly wealth to gain friends who will welcome you into eternal dwellings."],
    "Luke 16:10": ["Faithfulness in Little and Much", "Whoever is faithful in small matters will be faithful in large matters; who is dishonest in small matters will be dishonest in large matters."],
    "Luke 16:13": ["Cannot Serve Two Masters", "No one can serve both God and money; loyalty must be undivided."],
    "Luke 16:14": ["Pharisees’ Reaction", "The Pharisees, who loved money, scoff at Jesus’ teaching."],
    "Luke 16:15": ["God Knows the Heart", "Jesus tells them that what is highly valued among men is detestable in God’s sight."],
    "Luke 16:16": ["Law and the Kingdom", "The Law and the Prophets were until John; from then, the good news of the kingdom of God is preached, and everyone presses into it."],
    "Luke 16:19": ["Parable of the Rich Man and Lazarus Begins", "A rich man lives in luxury, and a poor man named Lazarus suffers at his gate, longing for scraps."],
    "Luke 16:22": ["Death and Afterlife", "Lazarus dies and is carried by angels to Abraham’s side, while the rich man also dies and is in torment."],
    "Luke 16:24": ["The Rich Man Pleads", "The rich man calls out for mercy, asking Abraham to send Lazarus to cool his tongue with water."],
    "Luke 16:27": ["Abraham Explains", "Abraham tells the rich man that a great chasm prevents anyone from crossing between the place of torment and comfort."],
    "Luke 16:31": ["Listen to Moses and the Prophets", "Abraham explains that if they do not listen to Moses and the Prophets, they will not be convinced even if someone rises from the dead."],

    "Luke 17:1": ["Jesus Warns About Sin", "Jesus teaches that temptation to sin will occur, but woe to the one through whom it happens."],
    "Luke 17:3": ["Forgive Others", "Jesus instructs to rebuke a brother who sins and forgive him if he repents."],
    "Luke 17:5": ["Increase Our Faith", "The apostles ask Jesus to increase their faith."],
    "Luke 17:6": ["Faith Can Move Mountains", "Jesus explains that even faith as small as a mustard seed can accomplish great things."],
    "Luke 17:7": ["Parable of the Servant", "Jesus teaches about a servant who works in the field and expects nothing for obeying the master."],
    "Luke 17:11": ["Jesus Heals Ten Lepers", "On the way to Jerusalem, Jesus meets ten men with leprosy who cry out for mercy."],
    "Luke 17:15": ["The One Who Returned", "Only one of the ten lepers returns to thank Jesus, a Samaritan, showing gratitude and faith."],
    "Luke 17:20": ["The Kingdom of God Is Within You", "Jesus tells the Pharisees that the kingdom of God does not come with observation but is in the hearts of believers."],
    "Luke 17:22": ["The Days of the Son of Man", "Jesus warns His disciples about future days when they will long to see the Son of Man, and they must be ready."],
    "Luke 17:28": ["As in the Days of Lot", "Jesus compares the coming judgment to the days of Lot when people ate, drank, and married until sudden destruction came."],
    "Luke 17:34": ["Be Ready", "Jesus teaches that at His coming, two will be in bed, one taken and one left; two grinding grain, one taken and one left."],

    "Luke 18:1": ["Parable of the Persistent Widow", "Jesus teaches His disciples to always pray and not lose heart, using the example of a widow seeking justice from an unjust judge."],
    "Luke 18:9": ["Warning to the Self-Righteous", "Jesus tells a parable about a Pharisee and a tax collector to teach humility in prayer."],
    "Luke 18:11": ["The Pharisee’s Prayer", "The Pharisee thanks God that he is not like other people and boasts about fasting and tithing."],
    "Luke 18:13": ["The Tax Collector’s Prayer", "The tax collector humbly asks God for mercy, recognizing his sinfulness."],
    "Luke 18:14": ["Lesson on Humility", "Jesus explains that those who exalt themselves will be humbled, and those who humble themselves will be exalted."],
    "Luke 18:15": ["Jesus Blesses Little Children", "People bring infants to Jesus, and He blesses them, teaching that the kingdom belongs to those like them."],
    "Luke 18:18": ["The Rich Young Ruler", "A ruler asks Jesus what he must do to inherit eternal life, and Jesus challenges him to keep the commandments and give up possessions."],
    "Luke 18:25": ["Difficult for the Rich to Enter the Kingdom", "Jesus teaches that it is hard for the rich to enter the kingdom of God, but all things are possible with God."],
    "Luke 18:28": ["Rewards for Following Jesus", "Peter points out that the disciples have left everything to follow Jesus, and Jesus promises they will receive blessings."],
    "Luke 18:31": ["Jesus Predicts His Death", "Jesus tells the twelve that He will be delivered, mocked, insulted, killed, and rise on the third day."],
    "Luke 18:35": ["Jesus Heals a Blind Beggar", "Near Jericho, a blind man calls out to Jesus for mercy and is healed because of his faith."],

    "Luke 19:1": ["Zacchaeus the Tax Collector", "Jesus enters Jericho and meets Zacchaeus, a short tax collector who climbs a sycamore tree to see Him."],
    "Luke 19:5": ["Jesus Calls Zacchaeus", "Jesus looks up and tells Zacchaeus to come down because He must stay at his house today."],
    "Luke 19:8": ["Zacchaeus Repents", "Zacchaeus joyfully pledges to give half of his possessions to the poor and repay anyone he has cheated four times the amount."],
    "Luke 19:9": ["Salvation Comes to Zacchaeus’ House", "Jesus declares that salvation has come to this house because Zacchaeus is a son of Abraham."],
    "Luke 19:11": ["Parable of the Ten Minas", "Jesus tells a parable about a nobleman who goes to a distant country to receive a kingdom and entrusts money to his servants."],
    "Luke 19:15": ["Servants Rewarded", "Upon his return, the nobleman rewards his servants according to their faithfulness in using the money."],
    "Luke 19:27": ["Judgment on Enemies", "Jesus warns that those who reject His rule will face judgment."],
    "Luke 19:28": ["Triumphal Entry Preparation", "Jesus approaches Jerusalem, instructs two disciples to fetch a colt for His entry into the city."],
    "Luke 19:37": ["Crowds Praise Jesus", "As Jesus rides the colt, the people spread cloaks and branches, shouting praises and acknowledging Him as king."],

    "Luke 20:1": ["Jesus Questioned in the Temple", "The chief priests, scribes, and elders ask Jesus by what authority He teaches and performs miracles."],
    "Luke 20:3": ["Jesus Asks a Question", "Jesus responds by asking them about John the Baptist’s authority, whether it was from heaven or men."],
    "Luke 20:6": ["Their Dilemma", "The religious leaders debate among themselves, realizing that if they say 'from heaven,' John will accuse them of unbelief; if 'from men,' the crowd may turn against them."],
    "Luke 20:9": ["Parable of the Tenants", "Jesus tells a parable about tenants who reject and kill the servants and son of a vineyard owner."],
    "Luke 20:16": ["Lesson of the Parable", "Jesus explains that the vineyard will be given to others, revealing rejection of God’s messengers."],
    "Luke 20:20": ["Plot to Trap Jesus", "The religious leaders send spies to catch Jesus in His words."],
    "Luke 20:27": ["Question About Resurrection", "The Sadducees ask Jesus about marriage in the resurrection to challenge Him."],
    "Luke 20:33": ["Jesus Answers About the Resurrection", "Jesus explains that in the resurrection, people neither marry nor are given in marriage but are like angels in heaven."],
    "Luke 20:41": ["Whose Son Is the Christ?", "Jesus questions the scribes about how David calls the Messiah ‘Lord’ if He is David’s son."],
    "Luke 20:45": ["Beware of the Teachers of the Law", "Jesus warns the crowds to beware of the scribes who seek honor and exploit widows."],
    "Luke 20:47": ["Condemnation of the Scribes", "Jesus pronounces woes on the scribes because of their pride, greed, and hypocrisy."],

    "Luke 21:1": ["The Widow’s Offering", "Jesus observes a poor widow putting two small coins into the temple treasury and notes her sacrificial giving."],
    "Luke 21:5": ["Jesus Predicts the Temple’s Destruction", "Jesus tells His disciples that the temple will be destroyed, with not one stone left on another."],
    "Luke 21:7": ["Disciples Ask About the End", "The disciples ask when these things will happen and what will be the sign of their fulfillment."],
    "Luke 21:8": ["Warnings About Deception", "Jesus warns them not to be deceived by people claiming to be the Christ."],
    "Luke 21:9": ["Wars and Uprisings", "Jesus speaks of wars, uprisings, and disturbances, cautioning them not to be alarmed."],
    "Luke 21:11": ["Signs of Nature", "There will be earthquakes, famines, pestilences, and fearful sights from heaven."],
    "Luke 21:12": ["Persecution of Believers", "Jesus tells them that His followers will be delivered up to councils, beaten in synagogues, and stand before kings and governors."],
    "Luke 21:20": ["Destruction of Jerusalem", "Jesus prophesies the coming siege of Jerusalem and warns those in Judea to flee."],
    "Luke 21:25": ["Cosmic Signs", "Jesus describes signs in the sun, moon, and stars, and distress among nations."],
    "Luke 21:28": ["Stand and Lift Your Heads", "Jesus encourages believers to remain hopeful, for their redemption is near."],
    "Luke 21:34": ["Be Watchful", "Jesus warns to be careful and not let hearts be weighed down with carousing, drunkenness, and anxieties."],
    "Luke 21:36": ["Pray Always", "Jesus instructs to pray for strength to escape trials and stand before the Son of Man."],

    "Luke 22:1": ["Plot to Kill Jesus", "The chief priests and scribes seek a way to kill Jesus, and the festival of Unleavened Bread approaches."],
    "Luke 22:3": ["Satan Enters Judas", "Satan enters Judas Iscariot, who goes to the chief priests to betray Jesus."],
    "Luke 22:7": ["Preparation for the Passover", "Jesus sends Peter and John to prepare the Passover meal in a specified room."],
    "Luke 22:14": ["Jesus Shares the Passover Meal", "Jesus sits at the table with the twelve apostles to celebrate the Passover."],
    "Luke 22:17": ["Jesus Gives the Cup", "Jesus takes a cup, gives thanks, and tells them to drink, signifying the new covenant in His blood."],
    "Luke 22:19": ["Institution of the Lord’s Supper", "Jesus takes bread, gives thanks, breaks it, and tells them to do this in remembrance of Him."],
    "Luke 22:21": ["Prediction of Betrayal", "Jesus reveals that one of the twelve will betray Him, causing sorrow among the disciples."],
    "Luke 22:31": ["Peter’s Testing", "Jesus tells Peter that Satan has asked to sift him like wheat but promises to pray for him."],
    "Luke 22:39": ["Jesus Prays on the Mount of Olives", "Jesus goes to the Mount of Olives, prays earnestly, and instructs the disciples to pray as well."],
    "Luke 22:47": ["Jesus Arrested", "Judas comes with a crowd and betrays Jesus with a kiss, leading to His arrest."],
    "Luke 22:54": ["Peter Denies Jesus", "Peter follows at a distance, enters the high priest’s courtyard, and denies knowing Jesus three times before the rooster crows."],
    "Luke 22:63": ["Jesus Mocked", "The men who hold Jesus mock Him, blindfold Him, strike Him, and ask Him to prophesy who hit Him."],

    "Luke 23:1": ["Jesus Brought Before Pilate", "The whole assembly brings Jesus before Pilate, accusing Him of many charges."],
    "Luke 23:4": ["Pilate Questions Jesus", "Pilate asks Jesus if He is the King of the Jews, and Jesus replies about His kingdom not being of this world."],
    "Luke 23:7": ["Jesus Sent to Herod", "Hearing Jesus is a Galilean, Pilate sends Him to Herod, who is in Jerusalem at the time."],
    "Luke 23:11": ["Herod Mocks Jesus", "Herod and his soldiers mock Jesus, dressing Him in splendid clothes, and then send Him back to Pilate."],
    "Luke 23:13": ["Pilate Delivers Jesus to Be Crucified", "Pilate calls together the chief priests and rulers and delivers Jesus to be crucified, despite not finding guilt in Him."],
    "Luke 23:26": ["Simon of Cyrene Bears the Cross", "Jesus is led away, and Simon of Cyrene is compelled to carry His cross."],
    "Luke 23:33": ["The Crucifixion", "Jesus is crucified between two criminals, and the soldiers divide His garments."],
    "Luke 23:34": ["Jesus Prays for His Executioners", "Jesus asks God to forgive those who are crucifying Him, showing mercy even in suffering."],
    "Luke 23:39": ["The Penitent Criminal", "One criminal asks Jesus to remember him, and Jesus promises him paradise."],
    "Luke 23:44": ["Darkness Over the Land", "From noon to three in the afternoon, darkness covers the land; Jesus cries out before giving up His spirit."],
    "Luke 23:46": ["Jesus Commends His Spirit", "Jesus prays to the Father as He dies, committing His spirit into God’s hands."],
    "Luke 23:50": ["Jesus Buried by Joseph of Arimathea", "A good and righteous man, Joseph, requests Jesus’ body and lays it in a new tomb, wrapping Him in linen."],

    "Luke 24:1": ["The Women Visit the Tomb", "Early on the first day of the week, women go to the tomb with spices to anoint Jesus’ body."],
    "Luke 24:2": ["The Stone Rolled Away", "They find the stone rolled away from the tomb, but Jesus’ body is not there."],
    "Luke 24:4": ["Angels Speak", "Two men in dazzling clothes appear and tell the women that Jesus has risen."],
    "Luke 24:6": ["The Resurrection Announced", "The angels remind the women that Jesus predicted His resurrection."],
    "Luke 24:9": ["The Women Report", "The women return and tell the eleven apostles and others what they have witnessed."],
    "Luke 24:12": ["Peter Investigates the Tomb", "Peter runs to the tomb, finds only the linen wrappings, and marvels at what has happened."],
    "Luke 24:13": ["The Road to Emmaus", "Two disciples travel to Emmaus, discussing the events of Jesus’ death and resurrection."],
    "Luke 24:15": ["Jesus Joins Them", "Jesus joins the disciples on the road, but they are kept from recognizing Him."],
    "Luke 24:17": ["Jesus Questions Them", "Jesus asks what they are discussing, and the disciples explain their sorrow and confusion."],
    "Luke 24:25": ["Jesus Explains the Scriptures", "Jesus rebukes their lack of understanding and explains how the scriptures point to His suffering and glory."],
    "Luke 24:30": ["Jesus Breaks Bread", "When they reach Emmaus, Jesus breaks bread with them, and their eyes are opened to recognize Him."],
    "Luke 24:36": ["Jesus Appears to the Disciples", "Jesus stands among the disciples, shows His hands and feet, and they are terrified yet overjoyed."],
    "Luke 24:39": ["Proof He Is Alive", "Jesus invites them to touch Him and see that He has flesh and bones, not a spirit."],
    "Luke 24:44": ["Jesus Explains the Scriptures", "Jesus reminds them that everything written about Him in the Law, Prophets, and Psalms must be fulfilled."],
    "Luke 24:50": ["The Ascension", "Jesus leads the disciples to Bethany, blesses them, and is carried up into heaven."],
    "Luke 24:53": ["Disciples Worship and Serve", "The disciples return to Jerusalem with great joy, continually praising and serving God."],

    "John 1:1": ["The Word Was God", "In the beginning was the Word, and the Word was with God, and the Word was God."],
    "John 1:3": ["All Things Made Through Him", "All things were made through the Word; nothing was made that was not created by Him."],
    "John 1:4": ["Life and Light", "In Him was life, and that life was the light of all people."],
    "John 1:5": ["Light Shines in the Darkness", "The light shines in the darkness, and the darkness has not overcome it."],
    "John 1:6": ["John the Baptist Sent", "There was a man named John sent from God to bear witness to the light."],
    "John 1:7": ["John Came as Witness", "He came to testify concerning the light so that through him all might believe."],
    "John 1:9": ["The True Light", "The true light that gives light to everyone was coming into the world."],
    "John 1:10": ["World Did Not Recognize Him", "He was in the world, the world was made through Him, yet the world did not recognize Him."],
    "John 1:11": ["Rejected by His Own", "He came to His own, and His own people did not receive Him."],
    "John 1:12": ["Children of God", "To all who receive Him, He gives the right to become children of God, believing in His name."],
    "John 1:14": ["The Word Became Flesh", "The Word became flesh and dwelt among us, full of grace and truth, and we have seen His glory."],
    "John 1:15": ["John Testifies About Him", "John the Baptist testifies, declaring that Jesus ranks above him because He existed before him."],
    "John 1:16": ["Grace Upon Grace", "From Jesus' fullness, we have all received grace upon grace."],
    "John 1:18": ["God Revealed in the Son", "No one has seen God, but the one and only Son, who is at the Father’s side, has made Him known."],
    "John 1:19": ["John’s Testimony to the Priests", "John is questioned by the priests and Levites about who he is."],
    "John 1:23": ["John’s Humble Declaration", "John declares he is 'the voice of one calling in the wilderness, make straight the way for the Lord.'"],
    "John 1:29": ["Behold the Lamb of God", "John sees Jesus and declares Him as the Lamb of God who takes away the sin of the world."],
    "John 1:35": ["John Points to Jesus", "The next day, John stands with two of his disciples and points them to Jesus, saying 'Behold the Lamb of God.'"],
    "John 1:39": ["The Disciples Follow Jesus", "The two disciples follow Jesus, who invites them to come and see where He is staying."],
    "John 1:41": ["Andrew Brings Simon Peter", "Andrew finds his brother Simon and tells him they have found the Messiah."],
    "John 1:43": ["Jesus Calls Philip", "Jesus decides to go to Galilee and calls Philip to follow Him."],
    "John 1:45": ["Philip Tells Nathanael", "Philip tells Nathanael about Jesus of Nazareth, whom he calls the one Moses and the prophets wrote about."],
    "John 1:47": ["Nathanael Meets Jesus", "Jesus sees Nathanael coming and comments on his honesty and integrity."],
    "John 1:50": ["Greater Things to Come", "Jesus tells Nathanael that he will see greater things, including heaven open and angels ascending and descending on the Son of Man."],

    "John 2:1": ["The Wedding at Cana", "Jesus, His mother, and His disciples attend a wedding in Cana of Galilee."],
    "John 2:3": ["The Wine Runs Out", "Mary tells Jesus that the hosts have run out of wine, prompting Him to act."],
    "John 2:4": ["Jesus Responds to His Mother", "Jesus says His time has not yet come, yet He listens to her request."],
    "John 2:6": ["The Water Jars", "There are six stone water jars, used for Jewish purification rituals, each holding twenty to thirty gallons."],
    "John 2:7": ["Fill the Jars with Water", "Jesus instructs the servants to fill the jars to the brim with water."],
    "John 2:8": ["Draw Some Out", "Jesus tells them to draw some water and take it to the master of the banquet."],
    "John 2:9": ["The Water Becomes Wine", "The master of the banquet tastes the water, now wine, and marvels at its quality."],
    "John 2:11": ["First Miracle Revealed", "This act of Jesus’ power reveals His glory, and His disciples believe in Him."],
    "John 2:13": ["Jesus Cleanses the Temple", "Jesus goes to Jerusalem for the Passover and drives out those selling and buying in the temple."],
    "John 2:15": ["Overturning Tables", "Jesus makes a whip of cords, drives out the merchants, and overturns the tables of the money changers."],
    "John 2:17": ["Fulfillment of Scripture", "Jesus’ actions fulfill the prophecy, 'Zeal for your house will consume me.'"],
    "John 2:18": ["Jews Question His Authority", "The Jews ask Jesus for a sign to show His authority for cleansing the temple."],
    "John 2:19": ["Jesus Speaks of His Body", "Jesus answers that if they destroy this temple, He will raise it in three days, referring to His body."],
    "John 2:21": ["Disciples Understand", "After His resurrection, the disciples remember His words and believe the scripture and His words."],
    "John 2:22": ["Faith in the Resurrection", "The disciples come to understand the promise and believe in Jesus through His resurrection."],
    "John 2:23": ["Many Believe in His Name", "During the Passover, many see the signs Jesus does and believe in His name."],
    "John 2:24": ["Jesus Knows Their Hearts", "Jesus does not entrust Himself to them because He knows all people."],
    "John 2:25": ["No Need for Testimony", "He knows what is in each person and does not need anyone to testify about them."],

    "John 3:1": ["Nicodemus Comes to Jesus", "A Pharisee and ruler of the Jews named Nicodemus comes to Jesus at night to ask questions."],
    "John 3:2": ["Acknowledging Jesus’ Signs", "Nicodemus recognizes that Jesus has come from God because of the signs He performs."],
    "John 3:3": ["Born Again", "Jesus tells Nicodemus that no one can see the kingdom of God unless they are born again."],
    "John 3:5": ["Born of Water and Spirit", "Jesus explains that one must be born of water and the Spirit to enter the kingdom of God."],
    "John 3:7": ["Do Not Marvel", "Jesus tells Nicodemus not to marvel at being born again."],
    "John 3:8": ["The Wind and the Spirit", "Jesus compares the Spirit’s work to the wind, which blows where it pleases and cannot be controlled."],
    "John 3:10": ["Teacher of Israel", "Nicodemus expresses confusion, and Jesus asks how he, as a teacher of Israel, does not understand."],
    "John 3:14": ["The Son of Man Lifted Up", "Jesus speaks about being lifted up like Moses lifted the serpent in the wilderness."],
    "John 3:16": ["God’s Love and Eternal Life", "For God so loved the world that He gave His only Son, so that whoever believes in Him shall not perish but have eternal life."],
    "John 3:17": ["Jesus Sent to Save, Not Condemn", "God did not send His Son to condemn the world, but to save the world through Him."],
    "John 3:18": ["Belief Brings Salvation", "Whoever believes in Jesus is not condemned, but whoever does not believe is condemned already."],
    "John 3:19": ["Light and Darkness", "The light has come into the world, but people loved darkness rather than light because their deeds were evil."],
    "John 3:21": ["Living by the Truth", "Those who do what is true come to the light so that their deeds may be seen as done in God."],

    "John 4:1": ["Jesus Learns of Pharisees’ Opposition", "Jesus learns that the Pharisees heard He was gaining and baptizing more disciples than John."],
    "John 4:3": ["Jesus Departs to Galilee", "Jesus leaves Judea and goes to Galilee, traveling through Samaria."],
    "John 4:4": ["Jesus Travels Through Samaria", "He must pass through Samaria on His journey, encountering the Samaritan woman at Jacob’s well."],
    "John 4:6": ["Jesus at Jacob’s Well", "Jesus stops at Jacob’s well, tired from the journey, and sits while His disciples go into the town."],
    "John 4:7": ["The Samaritan Woman Comes to Draw Water", "A Samaritan woman comes to the well, and Jesus asks her for a drink."],
    "John 4:10": ["Living Water Offered", "Jesus tells her that whoever drinks the water He gives will never thirst again."],
    "John 4:13": ["Jesus Explains Spiritual Thirst", "Jesus contrasts ordinary water with the living water He provides, which brings eternal life."],
    "John 4:16": ["Jesus Reveals Her Life", "Jesus tells the woman to call her husband and acknowledge that she has had five husbands and the one she has now is not her husband."],
    "John 4:19": ["The Woman Recognizes a Prophet", "The woman perceives that Jesus is a prophet and engages Him in conversation about worship."],
    "John 4:21": ["True Worship", "Jesus explains that true worshipers will worship the Father in spirit and truth, not just in a specific location."],
    "John 4:25": ["The Messiah Revealed", "Jesus reveals that He is the Messiah, the one speaking to her."],
    "John 4:28": ["The Woman Shares the News", "The woman leaves her water jar and tells the town, 'Come, see a man who told me everything I ever did! Could this be the Messiah?'"],
    "John 4:39": ["Many Samaritans Believe", "Because of her testimony, many Samaritans believe in Jesus."],
    "John 4:41": ["Jesus Stays Two Days", "Many more believe because of Jesus’ own words and testimony."],
    "John 4:43": ["Jesus Returns to Galilee", "After two days, Jesus departs for Galilee, where He performs miracles and strengthens belief."],

    "John 5:1": ["Jesus at the Pool of Bethesda", "After a Jewish festival, Jesus goes to Jerusalem and finds a pool called Bethesda, with a multitude of sick people."],
    "John 5:3": ["The Lame, Blind, and Paralyzed", "People at the pool are waiting for the moving of the water, believing that healing comes when the water is stirred."],
    "John 5:5": ["A Man Lying There Thirty-Eight Years", "Jesus notices a man who has been ill for thirty-eight years."],
    "John 5:6": ["Jesus Asks About Healing", "Jesus asks the man if he wants to get well."],
    "John 5:8": ["Command to Rise", "Jesus tells him to get up, take his mat, and walk."],
    "John 5:9": ["The Man Is Healed", "Immediately the man is cured, picks up his mat, and walks."],
    "John 5:10": ["Conflict with the Jews", "This happens on the Sabbath, and the Jews confront the man about carrying his mat."],
    "John 5:14": ["Jesus Teaches About Sin and Healing", "Jesus finds the man later and warns him to sin no more, so that nothing worse may happen to him."],
    "John 5:16": ["Jews Persecute Jesus", "The Jews begin persecuting Jesus because He healed on the Sabbath."],
    "John 5:17": ["Jesus’ Work with the Father", "Jesus says that His Father is always at work, so He too is working."],
    "John 5:19": ["Dependence on the Father", "Jesus explains that He can do nothing by Himself but only what He sees the Father doing."],
    "John 5:21": ["Power to Give Life", "The Father raises the dead and gives them life, and the Son gives life to whom He will."],
    "John 5:22": ["Judgment Given to the Son", "The Father judges no one but has entrusted all judgment to the Son."],
    "John 5:24": ["Belief Brings Eternal Life", "Those who hear Jesus’ word and believe have eternal life and will not be condemned but pass from death to life."],

    "John 6:1": ["Jesus Feeds the Five Thousand", "Jesus crosses to the other side of the Sea of Galilee, and a large crowd follows Him because of His miracles."],
    "John 6:5": ["Jesus Tests Philip", "Jesus asks Philip where they could buy bread for the crowd to eat."],
    "John 6:7": ["Philip’s Doubt", "Philip responds that it would take more than half a year’s wages to feed all the people."],
    "John 6:8": ["Andrew Brings the Boy", "Andrew, Simon Peter’s brother, mentions a boy with five barley loaves and two fish."],
    "John 6:11": ["Jesus Gives Thanks", "Jesus takes the loaves and fish, gives thanks, breaks them, and distributes them to the crowd."],
    "John 6:12": ["Everyone Eats and Is Satisfied", "All the people eat and are satisfied, and the disciples collect twelve baskets of leftovers."],
    "John 6:15": ["Crowd Wants to Make Him King", "After seeing the miracle, the people intend to take Jesus by force and make Him king, but He withdraws."],
    "John 6:19": ["Jesus Walks on Water", "The disciples are in a boat on the sea when Jesus comes to them, walking on the water."],
    "John 6:21": ["They Receive Him", "The disciples receive Jesus into the boat, and immediately they reach the shore."],
    "John 6:25": ["People Seek Jesus", "The next day, the crowd finds Jesus on the other side of the sea and asks Him when He came there."],
    "John 6:27": ["Work for Eternal Food", "Jesus tells them to work not for food that perishes but for food that endures to eternal life."],
    "John 6:32": ["Jesus Explains the True Bread", "Jesus tells them that the Father gives the true bread from heaven, which gives life to the world."],
    "John 6:35": ["I Am the Bread of Life", "Jesus declares that whoever comes to Him will never hunger, and whoever believes in Him will never thirst."],
    "John 6:40": ["Belief Brings Eternal Life", "Jesus says that everyone who sees the Son and believes has eternal life, and He will raise them on the last day."],

    "John 7:1": ["Jesus Avoids Judea", "After these things, Jesus goes around Galilee, avoiding Judea because the Jews were seeking to kill Him."],
    "John 7:2": ["The Feast of Tabernacles", "The Jewish Feast of Tabernacles is near, and Jesus’ brothers urge Him to go to Judea."],
    "John 7:6": ["Jesus’ Timing", "Jesus tells His brothers that His time has not yet come, so He does not go up publicly."],
    "John 7:10": ["Jesus Goes in Secret", "After His brothers leave, Jesus goes to the feast, not openly but secretly."],
    "John 7:14": ["Teaching in the Temple", "Jesus begins teaching in the temple, astonishing the Jews with His knowledge despite not having formal training."],
    "John 7:16": ["Jesus’ Authority", "Jesus explains that His teaching comes from God, not from Himself."],
    "John 7:25": ["Some Seek to Arrest Him", "The people question whether the authorities will arrest Jesus, wondering if He is the Christ."],
    "John 7:28": ["Jesus Speaks Openly", "Jesus teaches in the temple courts, declaring that He knows Him who sent Him and that the people do not know Him."],
    "John 7:37": ["Jesus Offers Living Water", "On the last and greatest day of the feast, Jesus stands and calls for anyone who is thirsty to come to Him for living water."],
    "John 7:44": ["Division Among the People", "The crowd is divided in opinion about Jesus; some say He is the Prophet, others the Christ, while some oppose Him."],
    "John 7:50": ["Nicodemus Defends Jesus", "Nicodemus speaks up for Jesus, questioning whether it is right to condemn a man without hearing him."],
    "John 7:52": ["The Pharisees Rebuke Nicodemus", "The Pharisees dismiss Nicodemus, asserting that no prophet arises from Galilee."],

    "John 8:1": ["Jesus Returns to the Mount of Olives", "Jesus goes to the Mount of Olives early in the morning and returns to the temple courts, where He begins to teach the people."],
    "John 8:3": ["The Woman Caught in Adultery", "The teachers of the law and Pharisees bring a woman caught in adultery to Jesus, testing Him."],
    "John 8:6": ["Jesus Writes on the Ground", "Jesus bends down and writes on the ground with His finger, ignoring the accusers for a moment."],
    "John 8:7": ["He Who Is Without Sin", "Jesus tells them, 'Let any one of you who is without sin be the first to throw a stone at her.'"],
    "John 8:8": ["Accusers Leave", "One by one, beginning with the oldest, they leave, convicted by their conscience."],
    "John 8:10": ["Jesus and the Woman", "Jesus straightens up and asks the woman where her accusers are; she replies that no one is left."],
    "John 8:11": ["Jesus Forgives the Woman", "Jesus tells her that He does not condemn her and instructs her to go and sin no more."],
    "John 8:12": ["Jesus, the Light of the World", "Jesus declares, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'"],
    "John 8:13": ["Pharisees Challenge Jesus", "The Pharisees question His testimony, saying it is not valid because He testifies about Himself."],
    "John 8:17": ["Testimony of the Father", "Jesus explains that His testimony is valid because it aligns with the testimony of the Father who sent Him."],
    "John 8:21": ["Warning of Judgment", "Jesus tells the Jews that He is going away and they will die in their sins unless they believe He is the Son of God."],
    "John 8:23": ["Jesus and the World", "Jesus explains that He is from above, while they are from the world, and that is why they do not understand Him."],
    "John 8:31": ["Truth Sets Free", "Jesus teaches that if they hold to His word, they will know the truth, and the truth will set them free."],
    "John 8:36": ["Freedom in the Son", "Jesus declares that if the Son sets them free, they will be truly free."],
    "John 8:44": ["Children of the Devil", "Jesus tells them that anyone who continues in sin is of the devil, who is a liar and the father of lies."],
    "John 8:51": ["Promise of Eternal Life", "Jesus says that anyone who obeys His word will never see death."],
    "John 8:58": ["Before Abraham Was, I Am", "Jesus declares, 'Before Abraham was, I am,' revealing His eternal existence and identity."],

    "John 9:1": ["Jesus Heals a Man Born Blind", "As Jesus and His disciples pass by, they see a man blind from birth and the disciples ask whose sin caused it."],
    "John 9:3": ["Purpose of His Condition", "Jesus explains that neither the man nor his parents sinned, but that the works of God might be displayed in him."],
    "John 9:6": ["Jesus Applies Mud to His Eyes", "Jesus spits on the ground, makes mud with the saliva, and puts it on the man’s eyes."],
    "John 9:7": ["Healing by Washing in Siloam", "Jesus instructs the man to wash in the Pool of Siloam, and he goes and comes back seeing."],
    "John 9:8": ["Neighbors Astonished", "The neighbors are amazed and question whether this is the same man who was blind."],
    "John 9:13": ["Pharisees Question Him", "The healed man is brought to the Pharisees, and they ask how he received his sight."],
    "John 9:16": ["Division Among the Pharisees", "Some Pharisees say Jesus is not from God because He healed on the Sabbath, while others wonder how a sinner could do such signs."],
    "John 9:18": ["The Man Testifies", "The Pharisees interrogate the man repeatedly, but he consistently testifies that Jesus healed him."],
    "John 9:24": ["Pharisees Demand Blasphemy", "The Pharisees threaten to cast him out if he does not give the glory to God, insisting that Jesus must be a sinner."],
    "John 9:25": ["I Was Blind, Now I See", "The man boldly replies that he was blind but now sees, attributing the miracle to Jesus."],
    "John 9:28": ["Pharisees Argue Again", "The Pharisees question the man again, pressing him to denounce Jesus."],
    "John 9:30": ["The Man Stands Firm", "The man insists that Jesus is from God and that he has never seen anyone heal a man born blind as Jesus did."],
    "John 9:34": ["Pharisees Expel Him", "The Pharisees accuse him of being born in sin and cast him out of the synagogue."],
    "John 9:35": ["Jesus Finds Him", "Jesus asks the man if he believes in the Son of Man."],
    "John 9:38": ["The Man Believes", "The man responds, 'Lord, I believe,' and worships Jesus."],
    "John 9:39": ["Spiritual Blindness Revealed", "Jesus declares that He came so that the blind may see, and those who see may become blind spiritually."],

    "John 10:1": ["Jesus the Good Shepherd", "Jesus begins teaching about the sheepfold, contrasting Himself with thieves and robbers who enter by another way."],
    "John 10:2": ["The Shepherd Enters the Gate", "The one who enters by the gate is the shepherd of the sheep."],
    "John 10:3": ["Sheep Hear His Voice", "The shepherd calls his own sheep by name, and they follow him."],
    "John 10:4": ["The Shepherd Leads Them Out", "The shepherd goes ahead of the sheep, and they follow because they know his voice."],
    "John 10:5": ["Strangers Are Not Followed", "The sheep will not follow a stranger but will run away from someone they do not know."],
    "John 10:7": ["Jesus Is the Gate", "Jesus explains that He is the gate for the sheep; anyone who enters through Him will be saved."],
    "John 10:10": ["Life Abundantly", "The thief comes only to steal, kill, and destroy, but Jesus came so that His sheep may have life and have it abundantly."],
    "John 10:11": ["The Good Shepherd", "Jesus declares, 'I am the good shepherd. The good shepherd lays down his life for the sheep.'"],
    "John 10:14": ["Jesus Knows His Sheep", "Jesus says He knows His sheep and His sheep know Him."],
    "John 10:16": ["Other Sheep Too", "Jesus mentions that He has other sheep not of this fold, and they too will listen to His voice and become one flock with one shepherd."],
    "John 10:17": ["Jesus’ Sacrifice", "Jesus explains that He lays down His life voluntarily and has authority to take it up again."],
    "John 10:22": ["Feast of Dedication in Jerusalem", "Jesus walks in the temple courts during the Feast of Dedication."],
    "John 10:24": ["Jews Demand a Clear Statement", "The Jews ask Him to plainly tell them if He is the Messiah."],
    "John 10:27": ["Sheep Listen to His Voice", "Jesus says His sheep hear His voice, He knows them, and they follow Him."],
    "John 10:30": ["Unity with the Father", "Jesus declares, 'I and the Father are one,' which causes the Jews to attempt to stone Him."],
    "John 10:39": ["Jesus Escapes Their Hands", "Jesus withdraws again across the Jordan to a place where John had been baptizing, and many come to Him."],

    "John 11:1": ["Lazarus Is Sick", "Jesus receives news that Lazarus of Bethany is ill, the brother of Mary and Martha."],
    "John 11:3": ["Message to Jesus", "The sisters send word to Jesus, asking Him to come and heal Lazarus."],
    "John 11:6": ["Jesus Delays", "Jesus stays where He is for two more days before going to Judea, explaining that this will glorify God."],
    "John 11:11": ["Jesus Speaks of Death", "Jesus tells His disciples that Lazarus has fallen asleep, meaning he is dead."],
    "John 11:17": ["Jesus Arrives in Bethany", "Upon arrival, Jesus finds that Lazarus has been in the tomb four days."],
    "John 11:20": ["Martha Meets Jesus", "Martha goes out to meet Jesus, expressing faith that if He had been there, her brother would not have died."],
    "John 11:25": ["I Am the Resurrection and the Life", "Jesus declares to Martha that whoever believes in Him will live, even though they die."],
    "John 11:32": ["Mary Meets Jesus", "Mary falls at Jesus’ feet, mourning, and the Jews follow, wondering why He is so moved."],
    "John 11:33": ["Jesus Weeps", "Jesus is deeply moved and weeps, showing His compassion."],
    "John 11:38": ["Jesus at the Tomb", "Jesus arrives at the tomb, asks for the stone to be removed, and prays."],
    "John 11:43": ["Jesus Calls Lazarus", "Jesus calls in a loud voice, 'Lazarus, come out!'"],
    "John 11:44": ["Lazarus Is Raised", "Lazarus comes out, still bound in grave clothes, and Jesus instructs them to unwrap him."],
    "John 11:45": ["Many Believe", "Many of the Jews who witnessed this miracle believe in Jesus."],
    "John 11:47": ["Plot to Kill Jesus", "The chief priests and Pharisees plot to kill Jesus because many believe in Him and follow Him."],

    "John 12:1": ["Jesus Anointed at Bethany", "Six days before the Passover, Jesus visits Bethany where Lazarus is, and Mary anoints His feet with expensive perfume."],
    "John 12:3": ["Mary’s Act of Devotion", "Mary wipes Jesus’ feet with her hair, and the house is filled with the fragrance of the perfume."],
    "John 12:4": ["Judas Complains", "Judas Iscariot objects, saying the perfume could have been sold and the money given to the poor."],
    "John 12:6": ["Judas’ Motive", "Judas does not care for the poor but is a thief and carries the money bag."],
    "John 12:7": ["Jesus Defends Mary", "Jesus tells them to leave her alone, explaining she is preparing Him for burial."],
    "John 12:12": ["Triumphal Entry", "The next day, a large crowd comes to Jerusalem for the Passover, waving palm branches and shouting 'Hosanna!'"],
    "John 12:13": ["People Praise Jesus", "They acclaim Him as the King of Israel."],
    "John 12:16": ["Disciples Did Not Understand", "At first, the disciples did not understand these events, but later they remembered the prophecy."],
    "John 12:20": ["Greeks Seek Jesus", "Some Greeks who had come to worship at the feast approach Philip, asking to see Jesus."],
    "John 12:23": ["The Hour Has Come", "Jesus responds that the hour has come for the Son of Man to be glorified."],
    "John 12:24": ["Unless a Grain Dies", "Jesus teaches that unless a grain of wheat falls into the ground and dies, it remains alone, but if it dies, it produces much fruit."],
    "John 12:27": ["Jesus Troubled in Spirit", "Jesus expresses His anguish and prays to the Father, asking if the hour can pass, yet submits to God’s will."],
    "John 12:32": ["Lifted Up", "Jesus promises that when He is lifted up, He will draw all people to Himself."],
    "John 12:35": ["Walk in the Light", "Jesus urges the people to walk in the light while they have it, so darkness does not overtake them."],
    "John 12:44": ["Believe in the Light", "Jesus declares that belief in Him is belief in the One who sent Him."],
    "John 12:47": ["I Did Not Come to Condemn", "Jesus says He came not to condemn the world but to save it."],

    "John 13:1": ["Jesus Washes the Disciples’ Feet", "Before the Passover festival, Jesus knows His hour has come to depart from the world, and He shows love by washing His disciples’ feet."],
    "John 13:4": ["Jesus Takes a Towel", "Jesus rises from the meal, takes off His outer garment, and wraps a towel around His waist."],
    "John 13:5": ["He Washes Their Feet", "Jesus pours water into a basin and begins to wash the disciples’ feet, drying them with the towel."],
    "John 13:8": ["Peter Objects", "Peter protests, saying Jesus should not wash his feet, but Jesus explains it is necessary for fellowship."],
    "John 13:12": ["Lesson on Humility", "After washing their feet, Jesus explains that He has set an example, and they should wash one another’s feet."],
    "John 13:13": ["Jesus the Teacher and Lord", "Jesus reminds them that although He is Teacher and Lord, He serves humbly."],
    "John 13:16": ["Blessed for Following", "Jesus tells them that those who do as He has done will be blessed."],
    "John 13:18": ["Scripture Fulfilled", "Jesus refers to Scripture, saying He will be betrayed, even as written in the law."],
    "John 13:21": ["Jesus Predicts His Betrayal", "Jesus is troubled in spirit and announces that one of His disciples will betray Him."],
    "John 13:23": ["The Disciple Jesus Loved", "Jesus identifies the betrayer to John, the disciple reclining next to Him."],
    "John 13:26": ["Jesus Gives the Piece of Bread", "Jesus gives a morsel of bread to Judas Iscariot, signaling him as the betrayer."],
    "John 13:27": ["Satan Enters Judas", "After receiving the bread, Satan enters Judas, prompting him to leave and carry out the betrayal."],

    "John 14:1": ["Jesus Comforts His Disciples", "Jesus tells His disciples not to let their hearts be troubled, assuring them to trust in God and in Him."],
    "John 14:2": ["Many Rooms in the Father’s House", "Jesus explains that in His Father’s house are many rooms, and He goes to prepare a place for them."],
    "John 14:3": ["Promise to Return", "Jesus promises that He will come again and take His followers to be with Him."],
    "John 14:5": ["Thomas Questions Jesus", "Thomas asks how they can know the way to where Jesus is going."],
    "John 14:6": ["I Am the Way, the Truth, and the Life", "Jesus declares that He is the way to the Father, the truth, and the life, and no one comes to the Father except through Him."],
    "John 14:7": ["Knowing Jesus Means Knowing the Father", "Jesus explains that knowing Him is knowing the Father, and seeing Him is seeing the Father."],
    "John 14:9": ["Philip’s Question", "Philip asks Jesus to show them the Father, and Jesus replies that anyone who has seen Him has seen the Father."],
    "John 14:12": ["Greater Works to Come", "Jesus tells them that whoever believes in Him will do the works He does and even greater works because He goes to the Father."],
    "John 14:15": ["Keep My Commands", "Jesus promises that the Father will send another Advocate, the Holy Spirit, to help those who love Him and obey His commands."],
    "John 14:18": ["I Will Not Leave You Comfortless", "Jesus assures that He will not leave His followers as orphans; He will come to them."],
    "John 14:20": ["Union with the Father", "Jesus explains that in that day, His followers will know He is in the Father and they are in Him."],
    "John 14:23": ["Love and Obedience", "Jesus says that anyone who loves Him will obey His teaching, and the Father will love them and make His home with them."],
    "John 14:26": ["The Holy Spirit Will Teach", "The Advocate, the Holy Spirit, will teach the disciples all things and remind them of everything Jesus has said."],

    "John 15:1": ["The True Vine", "Jesus tells His disciples that He is the true vine, and His Father is the gardener."],
    "John 15:2": ["Branches and Fruit", "Every branch that bears no fruit is taken away, and every branch that bears fruit is pruned to bear more fruit."],
    "John 15:4": ["Abide in Me", "Jesus instructs them to remain in Him, for apart from Him they can do nothing."],
    "John 15:5": ["I Am the Vine", "Jesus declares that whoever abides in Him will bear much fruit, but apart from Him they can do nothing."],
    "John 15:6": ["The Branch Cut Off", "A branch that does not remain in Jesus is like a branch thrown away and withers."],
    "John 15:7": ["Abide and Ask", "If they remain in Jesus and His words remain in them, they can ask whatever they wish and it will be done."],
    "John 15:9": ["Abide in My Love", "Jesus tells them to remain in His love just as He has remained in the Father’s love."],
    "John 15:12": ["Love One Another", "Jesus commands His disciples to love each other as He has loved them."],
    "John 15:13": ["Greater Love", "There is no greater love than to lay down one’s life for friends."],
    "John 15:15": ["Jesus Calls Them Friends", "Jesus calls His disciples friends rather than servants, revealing all He has learned from the Father."],
    "John 15:18": ["The World Hates You", "Jesus warns that if the world hates them, they should remember it hated Him first."],
    "John 15:20": ["Persecution Comes", "If they persecute Jesus, they will persecute His followers as well."],
    "John 15:26": ["The Advocate Comes", "Jesus promises the Holy Spirit, the Advocate, who will testify about Him."],
    "John 15:27": ["You Will Testify", "The disciples are also called to testify because they have been with Jesus from the beginning."],

    "John 16:1": ["Jesus Warns the Disciples", "Jesus tells His disciples to believe in Him so that they are not led astray."],
    "John 16:2": ["Persecution Foretold", "They will be expelled from synagogues, and those who kill them will think they are offering service to God."],
    "John 16:4": ["Jesus Explains Future Events", "Jesus explains that He tells them these things beforehand so that when they happen, they may believe."],
    "John 16:5": ["Jesus Speaks About Going to the Father", "Jesus says He goes to the One who sent Him, and the disciples would no longer see Him."],
    "John 16:7": ["The Advocate Will Come", "Jesus promises that it is to their advantage that He goes away, so the Advocate, the Holy Spirit, may come."],
    "John 16:8": ["The Spirit Convicts the World", "The Holy Spirit will convict the world concerning sin, righteousness, and judgment."],
    "John 16:13": ["The Spirit Guides", "The Spirit of truth will guide them into all truth and speak what He hears, glorifying Jesus."],
    "John 16:16": ["A Little While", "Jesus tells them that in a little while they will see Him, then in a little while they will not, speaking of His death and resurrection."],
    "John 16:20": ["Your Grief Will Turn to Joy", "Jesus explains that they will weep and mourn, but their sorrow will turn to joy, which no one can take from them."],
    "John 16:23": ["Ask in Jesus’ Name", "Jesus teaches that whatever they ask the Father in His name, He will give them."],
    "John 16:24": ["Joy Fulfilled", "They may have joy and their joy may be complete through answered prayer in Jesus’ name."],
    "John 16:33": ["Overcoming the World", "Jesus tells them that in the world they will have tribulation, but He has overcome the world, giving them peace."],

    "John 17:1": ["Jesus Prays for Himself", "Jesus lifts up His eyes to heaven and prays, asking the Father to glorify Him so He may glorify the Father."],
    "John 17:2": ["Authority Over All People", "Jesus mentions that He has been given authority over all flesh to give eternal life to those the Father has given Him."],
    "John 17:3": ["Eternal Life Defined", "Jesus explains that eternal life is knowing the only true God and Jesus Christ, whom God sent."],
    "John 17:6": ["Jesus Prays for His Disciples", "Jesus has revealed the Father to those given to Him and protected them while in the world."],
    "John 17:9": ["Prayer of Intercession", "Jesus does not pray for the world but for those whom the Father has given Him, asking for their protection."],
    "John 17:11": ["Unity Among Believers", "Jesus asks the Father to keep His disciples in unity as He and the Father are one."],
    "John 17:15": ["Protection from Evil", "Jesus asks the Father not to take them out of the world, but to protect them from the evil one."],
    "John 17:17": ["Sanctification in Truth", "Jesus prays that His disciples be sanctified through the truth of God’s word."],
    "John 17:20": ["Prayer for Future Believers", "Jesus prays not only for His disciples but also for all who will believe in Him through their message."],
    "John 17:21": ["Unity in Christ", "Jesus prays that all believers may be one, just as He and the Father are one, so the world may believe."],
    "John 17:23": ["Complete Unity", "Jesus asks that believers experience the same glory and unity that He shares with the Father."],
    "John 17:26": ["Love Revealed", "Jesus concludes by asking that the love of the Father be in believers, making them one with Him."],

    "John 18:1": ["Jesus Arrested in Gethsemane", "Jesus crosses the Kidron Valley with His disciples to a garden where He is later arrested."],
    "John 18:3": ["The Arresting Party", "A detachment of soldiers and officials from the chief priests and Pharisees comes with lanterns, torches, and weapons."],
    "John 18:4": ["Jesus Steps Forward", "Jesus, knowing all that would happen to Him, steps forward and asks whom they are seeking."],
    "John 18:6": ["They Fall to the Ground", "When Jesus says 'I am He,' those who came to arrest Him draw back and fall to the ground."],
    "John 18:10": ["Peter Strikes the Servant", "Simon Peter draws a sword and strikes the high priest's servant, cutting off his right ear."],
    "John 18:11": ["Jesus Rebukes Peter", "Jesus tells Peter to put away the sword, stating that He must drink the cup the Father has given Him."],
    "John 18:12": ["Jesus Taken to Annas", "The detachment arrests Jesus and brings Him first to Annas, the father-in-law of Caiaphas, the high priest that year."],
    "John 18:15": ["Peter Follows at a Distance", "Simon Peter and another disciple follow Jesus and enter the high priest’s courtyard, while the other disciple is known to the high priest."],
    "John 18:17": ["Peter Denies Jesus", "A servant girl questions Peter, and he denies knowing Jesus."],
    "John 18:19": ["Jesus Questioned by the High Priest", "The high priest asks Jesus about His disciples and His teaching."],
    "John 18:23": ["Jesus Replies", "Jesus answers firmly that He has spoken publicly, and asks why He is being struck for speaking the truth."],
    "John 18:28": ["Jesus Brought Before Pilate", "The Jewish leaders take Jesus to the Roman governor Pilate early in the morning without entering the judgment hall to avoid ceremonial defilement."],
    "John 18:33": ["Pilate Questions Jesus", "Pilate asks Jesus if He is the king of the Jews."],
    "John 18:37": ["Jesus Explains His Kingdom", "Jesus tells Pilate that He is a king, but His kingdom is not of this world; He came to testify to the truth."],

    "John 19:1": ["Jesus Sentenced to Beaten", "Pilate orders Jesus to be flogged, and the soldiers strip Him and whip Him."],
    "John 19:2": ["Jesus Mocked", "The soldiers weave a crown of thorns, place it on His head, and dress Him in a purple robe to mock Him."],
    "John 19:5": ["Jesus Presented to the Crowd", "Pilate brings Jesus out wearing the crown and robe, saying, 'Here is the man!'"],
    "John 19:6": ["The Crowd Demands Crucifixion", "When the chief priests and officials see Jesus, they shout for Him to be crucified, and Pilate asks again if He should be crucified."],
    "John 19:12": ["Pilate Under Pressure", "The Jewish leaders insist Jesus must die, fulfilling the word of God."],
    "John 19:14": ["Jesus Delivered to Be Crucified", "It is the day of Preparation for Passover, about the sixth hour; Pilate delivers Jesus to be crucified."],
    "John 19:16": ["Jesus Carries the Cross", "Jesus is led away and crucified at Golgotha."],
    "John 19:18": ["Crucifixion with Two Others", "Jesus is crucified alongside two others, one on each side, fulfilling prophecy."],
    "John 19:19": ["The Inscription of the Charge", "Pilate writes the title of Jesus’ charge: 'Jesus of Nazareth, the King of the Jews.'"],
    "John 19:23": ["Soldiers Divide His Garments", "The soldiers take His garments, dividing them into four parts, casting lots for His tunic."],
    "John 19:26": ["Jesus and His Mother", "Jesus sees His mother and the disciple He loved and entrusts His mother to him."],
    "John 19:28": ["Jesus’ Last Words", "Jesus, knowing all is finished, says, 'I thirst.'"],
    "John 19:30": ["Jesus Gives Up His Spirit", "Jesus declares 'It is finished' and bows His head to give up His spirit."],
    "John 19:31": ["The Bodies Not Left on the Cross", "The Jews request that the bodies not remain on the cross during the Sabbath; the soldiers break the legs of the others, but not Jesus."],
    "John 19:33": ["Jesus Is Already Dead", "One soldier pierces His side with a spear, and blood and water come out, confirming His death."],
    "John 19:38": ["Jesus Buried by Joseph of Arimathea", "Joseph of Arimathea, with Nicodemus, takes Jesus’ body and wraps it in linen with spices."],
    "John 19:41": ["Jesus Laid in a New Tomb", "They lay Him in a new tomb in a nearby garden, where no one had yet been laid."],

    "John 20:1": ["The Tomb Found Empty", "Early on the first day of the week, Mary Magdalene goes to the tomb and finds the stone removed."],
    "John 20:2": ["Mary Runs to Peter and John", "She tells them, 'They have taken the Lord out of the tomb, and we do not know where they have put Him.'"],
    "John 20:3": ["Peter and John Run to the Tomb", "Peter and the other disciple run to see what has happened."],
    "John 20:5": ["John Arrives First", "The other disciple reaches the tomb first, looks in, and sees the linen cloths but does not enter."],
    "John 20:6": ["Peter Enters", "Simon Peter arrives, goes into the tomb, and sees the linen wrappings."],
    "John 20:7": ["The Cloth on His Head", "The cloth that had been on Jesus’ head is folded up and lying apart."],
    "John 20:8": ["The Other Disciple Believes", "The disciple sees and believes, though they did not yet understand Scripture that He must rise from the dead."],
    "John 20:11": ["Mary Stands Outside the Tomb", "Mary weeps outside the tomb and looks into it."],
    "John 20:13": ["Mary Sees Two Angels", "Angels in white sit where Jesus’ body had been, asking her why she is weeping."],
    "John 20:14": ["Mary Turns Around", "She turns and sees Jesus standing there but does not recognize Him."],
    "John 20:16": ["Jesus Revealed to Mary", "Jesus says her name, and she recognizes Him and calls Him 'Rabboni!'"],
    "John 20:17": ["Jesus Sends Mary to the Disciples", "Jesus tells her not to hold on to Him but to go to His brothers and tell them He is ascending to the Father."],
    "John 20:19": ["Jesus Appears to the Disciples", "On the evening of that day, Jesus appears among the disciples with the doors locked and says, 'Peace be with you.'"],
    "John 20:21": ["Peace and Commission", "Jesus says again, 'Peace be with you,' and commissions them as the Father sent Him."],
    "John 20:22": ["Jesus Breathes on Them", "Jesus breathes on the disciples, saying, 'Receive the Holy Spirit.'"],
    "John 20:23": ["Authority to Forgive Sins", "Jesus tells them that if they forgive anyone’s sins, they are forgiven; if they retain them, they are retained."],
    "John 20:24": ["Thomas Doubts", "Thomas, called Didymus, is not with them when Jesus comes and doubts their report."],
    "John 20:26": ["Jesus Appears to Thomas", "Eight days later, Jesus appears again, showing Thomas His hands and side."],
    "John 20:28": ["Thomas Believes", "Thomas responds, 'My Lord and my God!' acknowledging Jesus’ divinity."],
    "John 20:30": ["Purpose of the Signs", "Jesus performs many signs that are not written in this book."],
    "John 20:31": ["Written That You May Believe", "These are written so that people may believe that Jesus is the Christ, the Son of God, and by believing, have life in His name."],

    "John 21:1": ["Jesus Appears by the Sea of Tiberias", "After His resurrection, Jesus shows Himself to seven disciples by the Sea of Tiberias."],
    "John 21:3": ["The Disciples Go Fishing", "Simon Peter, Thomas, Nathanael, James, John, and two others go fishing but catch nothing that night."],
    "John 21:4": ["Jesus on the Shore", "Early in the morning, Jesus stands on the shore, though the disciples do not realize it is Him."],
    "John 21:5": ["Jesus Calls Out", "Jesus asks them if they have any fish, and they reply no."],
    "John 21:6": ["The Miraculous Catch", "Jesus tells them to cast the net on the right side, and they catch so many fish that they cannot haul it in."],
    "John 21:7": ["John Recognizes Jesus", "The disciple whom Jesus loved recognizes Him and tells Peter, 'It is the Lord!'"],
    "John 21:8": ["Peter Jumps Into the Water", "Simon Peter jumps into the sea and swims to Jesus."],
    "John 21:9": ["The Fire of Coals and Fish", "Jesus has prepared a fire with fish and bread on the shore for them to eat."],
    "John 21:12": ["Jesus Invites Them to Eat", "Jesus invites the disciples to come and have breakfast."],
    "John 21:15": ["Jesus Reinstates Peter", "Jesus asks Simon Peter three times if he loves Him and instructs him to feed His sheep."],
    "John 21:18": ["Peter’s Future", "Jesus tells Peter that when he grows old, he will stretch out his hands, referring to his future martyrdom."],
    "John 21:20": ["The Beloved Disciple", "Peter asks about the future of the disciple Jesus loved, and Jesus tells him not to concern himself with another’s path."],
    "John 21:22": ["Follow Me", "Jesus tells Peter to follow Him, emphasizing obedience to His calling."],
    "John 21:25": ["The Many Other Deeds", "Jesus did many other things not recorded, and the world could not contain the books if they were written."],

    "Acts 1:1": ["Introduction", "Luke addresses Theophilus, referring to his former book about all that Jesus began to do and teach."],
    "Acts 1:2": ["Jesus’ Instructions", "After His suffering, Jesus gives commands to the apostles through the Holy Spirit."],
    "Acts 1:3": ["Appearances After Resurrection", "Jesus presents Himself alive to the apostles over forty days, speaking about the kingdom of God."],
    "Acts 1:4": ["Wait in Jerusalem", "Jesus instructs them not to leave Jerusalem but to wait for the Father’s promise of the Holy Spirit."],
    "Acts 1:5": ["Baptism with the Holy Spirit", "Jesus reminds them that John baptized with water, but they will be baptized with the Holy Spirit not many days from now."],
    "Acts 1:6": ["Question About the Kingdom", "The apostles ask if Jesus will restore the kingdom to Israel at that time."],
    "Acts 1:7": ["Timing Is God’s", "Jesus responds that it is not for them to know the times or dates the Father has set."],
    "Acts 1:8": ["Power from the Holy Spirit", "Jesus tells them they will receive power when the Holy Spirit comes upon them and they will be His witnesses to the ends of the earth."],
    "Acts 1:9": ["The Ascension", "Jesus is taken up before their eyes, a cloud hides Him from their sight."],
    "Acts 1:10": ["Two Angels Speak", "Two men in white appear and tell the apostles that Jesus will return in the same way He was taken into heaven."],
    "Acts 1:12": ["Return to Jerusalem", "The apostles return to Jerusalem from the Mount of Olives, a Sabbath day’s walk away."],
    "Acts 1:13": ["Gathering in the Upper Room", "They go to the room where they were staying, including Peter, John, James, Andrew, Philip, Thomas, Bartholomew, Matthew, James son of Alphaeus, Simon the Zealot, and Judas son of James."],
    "Acts 1:14": ["Prayer with One Accord", "The disciples, including women and Mary the mother of Jesus, join together constantly in prayer."],
    "Acts 1:15": ["Peter Addresses the Crowd", "Peter stands among the believers, about 120 in number, and speaks about the need to replace Judas."],
    "Acts 1:16": ["Prophecy About Judas", "Peter refers to Scripture, predicting the betrayal by Judas."],
    "Acts 1:20": ["Requirement for a Replacement", "Peter says the replacement must have been with them from John’s baptism to the ascension of Jesus."],
    "Acts 1:21": ["Nomination of Candidates", "Two men are proposed: Joseph called Barsabbas (Justus) and Matthias."],
    "Acts 1:26": ["Matthias Chosen", "The believers pray and cast lots, and Matthias is numbered with the eleven apostles."],

    "Acts 2:1": ["The Day of Pentecost", "The believers are all together in one place when the Holy Spirit comes upon them with a sound like a violent wind."],
    "Acts 2:2": ["Tongues of Fire", "Divided tongues as of fire appear and rest on each of them, and they are filled with the Holy Spirit."],
    "Acts 2:4": ["Speaking in Other Tongues", "They begin to speak in other languages as the Spirit enables them."],
    "Acts 2:5": ["Devout Jews Gather", "Jews from every nation are staying in Jerusalem, amazed to hear their own languages spoken."],
    "Acts 2:8": ["Crowd Amazed", "Each person hears the disciples speaking in their native tongues and is astonished."],
    "Acts 2:11": ["Some Mock", "Some mock them, saying they are drunk, while others are amazed and perplexed."],
    "Acts 2:14": ["Peter Addresses the Crowd", "Peter stands with the eleven, raises his voice, and explains the event, addressing the crowd."],
    "Acts 2:16": ["Fulfillment of Joel’s Prophecy", "Peter cites the prophet Joel, explaining that God will pour out His Spirit on all people."],
    "Acts 2:22": ["Jesus’ Miracles and Crucifixion", "Peter testifies about Jesus of Nazareth, attested by God through miracles, crucified according to God’s plan."],
    "Acts 2:24": ["God Raised Jesus", "God raised Jesus from the dead, freeing Him from the agony of death, as none could hold Him."],
    "Acts 2:29": ["David Prophesied the Resurrection", "Peter explains that David foresaw the resurrection of the Messiah."],
    "Acts 2:36": ["Jesus Made Lord and Christ", "Peter declares that God has made Jesus, whom they crucified, both Lord and Christ."],
    "Acts 2:37": ["Crowd Convicted", "Hearing this, the people are cut to the heart and ask what they must do."],
    "Acts 2:38": ["Peter’s Call to Repentance", "Peter tells them to repent, be baptized in the name of Jesus Christ for the forgiveness of sins, and receive the Holy Spirit."],
    "Acts 2:41": ["Many Baptized", "About three thousand accept the message and are baptized that day."],
    "Acts 2:42": ["Life Among Believers", "They devote themselves to the apostles’ teaching, fellowship, breaking of bread, and prayer."],
    "Acts 2:46": ["Community Life", "They meet together daily in the temple courts, break bread in their homes, and eat with glad and sincere hearts."],
    "Acts 2:47": ["Growth of the Church", "Praising God and enjoying the favor of all people, the Lord adds to their number daily those being saved."],

    "Acts 3:1": ["Peter and John Go to the Temple", "Peter and John go to the temple at the time of prayer, the ninth hour."],
    "Acts 3:2": ["A Man Lame from Birth", "A man lame from birth is carried to the temple gate called Beautiful to beg for alms."],
    "Acts 3:4": ["Peter Looks at Him", "Peter and John look straight at the man, and Peter says, 'Look at us!'"],
    "Acts 3:6": ["Healing in the Name of Jesus", "Peter says, 'Silver or gold I do not have, but what I do have I give you: In the name of Jesus Christ of Nazareth, walk.'"],
    "Acts 3:7": ["The Man Walks", "Peter takes him by the right hand and helps him up; immediately his feet and ankles are strengthened."],
    "Acts 3:8": ["The Man Leaps and Walks", "The man jumps to his feet, walks, enters the temple with them, walking, leaping, and praising God."],
    "Acts 3:10": ["People Amazed", "All the people see him walking and praising God and recognize him as the man who used to sit begging at the Beautiful Gate."],
    "Acts 3:11": ["The Crowd Gathers", "People are filled with wonder and amazement at what has happened."],
    "Acts 3:12": ["Peter Speaks to the Crowd", "Peter addresses the people, explaining that the man was healed by faith in the name of Jesus, not by their own power."],
    "Acts 3:16": ["Faith in Jesus' Name", "Peter emphasizes that faith in Jesus' name has given the man perfect health."],
    "Acts 3:17": ["Peter Reminds Them", "Peter tells them they acted in ignorance, as did their leaders, and they need to repent."],
    "Acts 3:19": ["Call to Repentance", "Peter urges them to repent and turn to God, so that their sins may be wiped out."],
    "Acts 3:21": ["Promise of Christ’s Return", "Peter speaks of Jesus being sent before to bless Israel by turning them from their sins."],
    "Acts 3:22": ["Moses’ Prophecy", "Peter quotes Moses, saying that God will raise up a prophet like him from among their own people."],
    "Acts 3:26": ["Blessing to All", "God sends Jesus to bless them, turning each of them from their wicked ways."],

    "Acts 4:1": ["Peter and John Arrested", "The priests, captain of the temple, and Sadducees confront Peter and John for teaching the people and proclaiming the resurrection of Jesus."],
    "Acts 4:3": ["They Are Put in Custody", "Because it was evening, they are put in custody until the next day."],
    "Acts 4:5": ["The Sanhedrin Convenes", "The next day, Peter and John are brought before the rulers, elders, and scribes in Jerusalem."],
    "Acts 4:7": ["Peter Speaks Boldly", "Peter, filled with the Holy Spirit, declares that salvation is found in no one else but Jesus Christ."],
    "Acts 4:10": ["The Name of Jesus", "Peter emphasizes that it is by the name of Jesus, whom they crucified, that the man is healed and stands before them."],
    "Acts 4:13": ["The Authorities Amazed", "The rulers and elders are astonished at Peter and John’s boldness, knowing they are uneducated and ordinary men."],
    "Acts 4:16": ["Decision of the Sanhedrin", "They recognize the man was healed and have nothing to say, but command them not to speak in Jesus’ name anymore."],
    "Acts 4:18": ["Peter and John Released", "They threaten Peter and John but release them because the people are praising God for the miracle."],
    "Acts 4:23": ["The Believers Pray", "Upon release, Peter and John return to the other believers and pray for boldness to speak God’s word."],
    "Acts 4:29": ["Prayer for Courage", "They ask God to enable them to speak the word of God with boldness despite threats."],
    "Acts 4:31": ["Filled with the Holy Spirit", "After prayer, the place is shaken, and they are all filled with the Holy Spirit and continue speaking God’s word boldly."],
    "Acts 4:32": ["Believers Share Everything", "All the believers are one in heart and mind, sharing everything they have with one another."],
    "Acts 4:34": ["No One in Need", "There is no needy person among them, as those who owned lands or houses sold them and brought the proceeds to the apostles."],
    "Acts 4:36": ["Barnabas, the Son of Encouragement", "Joseph, a Levite from Cyprus, sells a field, brings the money, and is called Barnabas by the apostles."],

    "Acts 5:1": ["Ananias and Sapphira Lie", "Ananias and Sapphira sell a piece of property and secretly keep part of the money while pretending to give all to the apostles."],
    "Acts 5:3": ["Peter Confronts Ananias", "Peter asks why Satan has filled his heart to lie to the Holy Spirit and keep back part of the money."],
    "Acts 5:4": ["Consequences of Lying", "Peter explains that while it was not lying to men, it was lying to God, and Ananias falls down and dies."],
    "Acts 5:7": ["Sapphira Follows", "About three hours later, Sapphira comes in, unaware of what happened to her husband."],
    "Acts 5:9": ["Peter Confronts Sapphira", "Peter asks her why she has agreed to test the Spirit and keep back part of the money."],
    "Acts 5:10": ["Sapphira Dies", "She falls down at Peter’s feet and dies, and the young men carry her out and bury her."],
    "Acts 5:12": ["Signs and Wonders", "Through the apostles, many signs and wonders are performed, and people are added to the believers."],
    "Acts 5:15": ["People Bring the Sick", "People bring the sick into the streets so that Peter’s shadow might fall on them as he passes by, and they are healed."],
    "Acts 5:17": ["The Apostles Arrested", "The high priest and Sadducees are filled with jealousy, arrest the apostles, and put them in the public jail."],
    "Acts 5:19": ["Angel Frees the Apostles", "During the night, an angel of the Lord opens the doors and brings them out, telling them to go to the temple and preach."],
    "Acts 5:21": ["The Apostles in the Temple", "The next morning, they enter the temple courts and teach the people, causing the leaders to be amazed."],
    "Acts 5:27": ["Apostles Brought Before the Sanhedrin", "The apostles are brought before the council, and the high priest questions them about disobeying orders."],
    "Acts 5:29": ["Peter Replies", "Peter and the apostles answer, 'We must obey God rather than men.'"],
    "Acts 5:32": ["Witness of the Holy Spirit", "Peter testifies that God gives the Holy Spirit to those who obey Him."],
    "Acts 5:40": ["The Apostles Beaten", "The council flogged the apostles, warned them, and released them, rejoicing that they were counted worthy to suffer for the name of Jesus."],
    "Acts 5:42": ["Daily Teaching", "The apostles continue to teach and preach in the temple daily and in every house, spreading the gospel."],

    "Acts 6:1": ["The Hellenistic Jews Complain", "The Hellenistic Jews complain that their widows are being neglected in the daily distribution of food."],
    "Acts 6:2": ["Apostles Assign Helpers", "The twelve apostles call the disciples together and decide not to neglect the ministry of the word to serve tables."],
    "Acts 6:3": ["Selection of Seven Men", "They choose seven men full of the Spirit and wisdom to oversee the distribution, including Stephen, Philip, Procorus, Nicanor, Timon, Parmenas, and Nicolaus."],
    "Acts 6:5": ["Approval by the People", "The proposal pleases the whole group, and they present the chosen men to the apostles, who pray and lay hands on them."],
    "Acts 6:8": ["Stephen Full of Grace", "Stephen, full of grace and power, performs great wonders and signs among the people."],
    "Acts 6:9": ["Opposition Arises", "Members of certain synagogues dispute with Stephen, but they cannot stand up against his wisdom and the Spirit by which he speaks."],
    "Acts 6:11": ["False Accusations", "They secretly persuade men to falsely accuse Stephen of speaking blasphemous words against Moses and God."],
    "Acts 6:13": ["Stephen Brought Before the Council", "They drag Stephen before the Sanhedrin and present false witnesses saying, 'This man never stops speaking against this holy place and the law.'"],
    "Acts 6:15": ["Stephen Sees Heaven Open", "All who sit in the Sanhedrin gaze at Stephen, and they see his face like the face of an angel."],

    "Acts 7:1": ["Stephen’s Defense", "The high priest asks Stephen if the charges against him are true."],
    "Acts 7:2": ["God Appears to Abraham", "Stephen begins recounting Israel’s history, starting with God appearing to Abraham in Mesopotamia."],
    "Acts 7:5": ["God’s Promise", "God promises Abraham that his descendants will inherit the land, though he has no child yet."],
    "Acts 7:8": ["Descendants Multiply", "God tells Abraham that his descendants will be strangers in a foreign land, enslaved for four hundred years."],
    "Acts 7:13": ["Joseph in Egypt", "Stephen recounts Joseph being sold into Egypt by his brothers and God being with him."],
    "Acts 7:20": ["Moses’ Early Life", "Stephen describes Moses’ birth during a time when the king of Egypt decreed all male Hebrew children be killed."],
    "Acts 7:23": ["Moses Flees to Midian", "Moses grows up, sees the oppression of his people, kills an Egyptian, and flees to Midian."],
    "Acts 7:30": ["God Speaks at the Burning Bush", "Stephen recounts God appearing to Moses in a flame of fire in the bush on Mount Sinai."],
    "Acts 7:34": ["God’s Commission", "God tells Moses He has seen the oppression and will deliver His people, commissioning Moses to lead them."],
    "Acts 7:42": ["Idolatry of Israel", "Stephen explains how Israel repeatedly turned to idols and disobeyed God."],
    "Acts 7:51": ["Stephen Rebukes the Sanhedrin", "Stephen accuses the Jewish leaders of resisting the Holy Spirit and betraying and murdering the Righteous One."],
    "Acts 7:55": ["Stephen Sees Heaven Open", "Stephen, full of the Holy Spirit, gazes into heaven and sees the glory of God and Jesus standing at the right hand of God."],
    "Acts 7:59": ["Stephen Prays for His Persecutors", "As they stoned him, Stephen prays, 'Lord Jesus, receive my spirit,' and asks forgiveness for those stoning him."],

    "Acts 8:1": ["Persecution Scatters the Church", "After Stephen is stoned, a great persecution breaks out against the church in Jerusalem, scattering believers throughout Judea and Samaria."],
    "Acts 8:4": ["Believers Preach Everywhere", "Those who are scattered go about preaching the word wherever they go."],
    "Acts 8:5": ["Philip Preaches in Samaria", "Philip goes to a city in Samaria and proclaims Christ to the people there."],
    "Acts 8:6": ["Signs and Miracles", "Crowds pay attention because of the signs Philip performs, such as healing the sick and casting out unclean spirits."],
    "Acts 8:8": ["Great Joy in the City", "Many people in Samaria believe and are baptized, rejoicing greatly."],
    "Acts 8:9": ["Simon the Sorcerer", "A man named Simon, who previously practiced sorcery and amazed the people of Samaria, believes and is baptized."],
    "Acts 8:14": ["Peter and John Sent", "When the apostles in Jerusalem hear that Samaria has received the word of God, they send Peter and John to them."],
    "Acts 8:17": ["Receiving the Holy Spirit", "Peter and John lay hands on the new believers, and they receive the Holy Spirit."],
    "Acts 8:18": ["Simon Offers Money", "Simon sees that the Spirit is given through the laying on of hands and offers money to buy this power."],
    "Acts 8:20": ["Peter Rebukes Simon", "Peter tells Simon that his money perish with him, as he thought God’s gift could be bought."],
    "Acts 8:26": ["Angel Sends Philip", "An angel of the Lord tells Philip to go south to the road that goes from Jerusalem to Gaza."],
    "Acts 8:27": ["Philip Meets the Ethiopian Eunuch", "Philip meets an Ethiopian eunuch, an important official in charge of the treasury of Candace, queen of the Ethiopians."],
    "Acts 8:30": ["Philip Explains Scripture", "Philip runs alongside the chariot and hears the eunuch reading Isaiah; Philip asks if he understands what he is reading."],
    "Acts 8:35": ["Philip Preaches Jesus", "Philip begins with the Scripture and tells the eunuch the good news about Jesus."],
    "Acts 8:36": ["The Eunuch is Baptized", "The eunuch sees water, asks to be baptized, and Philip baptizes him."],
    "Acts 8:39": ["Philip Taken Away", "After the baptism, the Spirit of the Lord suddenly takes Philip away, and the eunuch goes on his way rejoicing."],

    "Acts 9:1": ["Saul Persecutes the Church", "Saul breathes out threats against the disciples of the Lord and goes to Damascus to arrest them."],
    "Acts 9:3": ["Saul Sees a Light", "On the way, a light from heaven suddenly shines around him."],
    "Acts 9:4": ["Jesus Speaks to Saul", "Saul falls to the ground and hears a voice saying, 'Saul, Saul, why are you persecuting Me?'"],
    "Acts 9:6": ["Saul Obeys", "Saul asks what he should do, and Jesus instructs him to go into the city and wait to be told what to do."],
    "Acts 9:8": ["Saul Is Blind", "Saul rises from the ground, opens his eyes but sees nothing; he is led by the hand into Damascus."],
    "Acts 9:10": ["Ananias Sent by God", "A disciple named Ananias receives a vision from the Lord, telling him to visit Saul."],
    "Acts 9:13": ["Ananias Hesitates", "Ananias is reluctant because he has heard of Saul’s persecution of Christians."],
    "Acts 9:15": ["God’s Purpose for Saul", "The Lord tells Ananias that Saul is chosen to carry His name before the Gentiles, kings, and Israel."],
    "Acts 9:17": ["Saul Receives Sight", "Ananias lays hands on Saul, he receives his sight, and is filled with the Holy Spirit."],
    "Acts 9:19": ["Saul Baptized", "Saul immediately begins to preach in the synagogues that Jesus is the Son of God."],
    "Acts 9:20": ["Saul Proclaims Jesus", "Saul confounds the Jews in Damascus, proving that Jesus is the Christ."],
    "Acts 9:23": ["Saul’s Life Threatened", "After many days, the Jews plot to kill Saul, but he learns of their plan."],
    "Acts 9:25": ["Saul Escapes", "His followers lower him in a basket through an opening in the city wall to escape."],
    "Acts 9:26": ["Saul in Jerusalem", "Saul tries to join the disciples, but they fear him, not believing he is a disciple."],
    "Acts 9:27": ["Barnabas Introduces Saul", "Barnabas takes Saul and explains how he boldly preached in Damascus."],
    "Acts 9:31": ["Peace and Growth of the Church", "The church throughout Judea, Galilee, and Samaria has peace, is built up, and grows in numbers, walking in the fear of the Lord and the comfort of the Holy Spirit."],

    "Acts 10:1": ["Cornelius, a God-Fearing Centurion", "Cornelius, a centurion in Caesarea, is devout and gives alms generously to the Jewish people and prays to God always."],
    "Acts 10:3": ["Cornelius Receives a Vision", "Around the ninth hour, an angel of God appears to Cornelius and tells him his prayers and alms have gone up as a memorial before God."],
    "Acts 10:4": ["The Angel’s Instruction", "The angel tells Cornelius to send men to Joppa to bring Simon Peter."],
    "Acts 10:7": ["Men Sent to Joppa", "Cornelius immediately sends two of his servants and a devout soldier to Joppa."],
    "Acts 10:9": ["Peter’s Vision", "Peter goes up on the roof to pray about the sixth hour and becomes hungry; he falls into a trance and sees a vision."],
    "Acts 10:11": ["The Sheet Descends", "Peter sees heaven opened and a sheet filled with all kinds of animals descending to him."],
    "Acts 10:14": ["Peter Objects", "Peter says he has never eaten anything common or unclean."],
    "Acts 10:15": ["Voice from Heaven", "A voice tells Peter, 'What God has made clean, do not call common.'"],
    "Acts 10:20": ["Spirit Commands Peter", "The Spirit tells Peter that three men are looking for him and to go with them without hesitation."],
    "Acts 10:23": ["Peter Goes to Caesarea", "Peter goes down and accompanies the men to Cornelius’ house, entering and greeting him."],
    "Acts 10:34": ["God Shows No Partiality", "Peter begins to speak, explaining that God shows no favoritism but accepts those who fear Him and do what is right."],
    "Acts 10:36": ["Jesus Christ Proclaimed", "Peter tells how God sent His word to the Israelites, preaching peace through Jesus Christ, who is Lord of all."],
    "Acts 10:44": ["Holy Spirit Falls on the Gentiles", "While Peter is speaking, the Holy Spirit falls on all who hear the message."],
    "Acts 10:46": ["Speaking in Tongues", "The believers speak in tongues and praise God, amazed that the gift of the Holy Spirit is poured out even on the Gentiles."],
    "Acts 10:48": ["Gentiles Baptized", "Peter commands them to be baptized in the name of Jesus Christ, and they pray and glorify God."],

    "Acts 11:1": ["Peter Explains to the Jerusalem Church", "The apostles and believers in Judea hear that Gentiles also received the word of God and criticize Peter."],
    "Acts 11:3": ["Peter Recalls the Vision", "They ask Peter why he went to uncircumcised men and ate with them."],
    "Acts 11:4": ["Peter Tells God’s Guidance", "Peter recounts that he was in Joppa praying when he saw a vision of a sheet with all kinds of animals."],
    "Acts 11:6": ["Voice from Heaven", "A voice tells Peter to kill and eat, but he objects, having never eaten anything impure or unclean."],
    "Acts 11:9": ["God Shows No Distinction", "The voice tells Peter, 'Do not call anything impure that God has made clean,' revealing that Gentiles are acceptable."],
    "Acts 11:12": ["Spirit Guides Peter to Caesarea", "The Spirit tells Peter to go with the men sent by Cornelius without hesitation, leading to the Gentiles receiving the Holy Spirit."],
    "Acts 11:15": ["Holy Spirit Falls on the Gentiles", "As Peter begins speaking, the Holy Spirit falls on all who hear the message, showing God’s acceptance of them."],
    "Acts 11:17": ["Peter Explains God’s Choice", "Peter explains that God gave the Gentiles the same gift as to the Jews, purifying their hearts by faith."],
    "Acts 11:18": ["The People Praise God", "The believers in Jerusalem rejoice that God has granted repentance leading to life even to the Gentiles."],

    "Acts 12:1": ["Herod Persecutes the Church", "King Herod begins to persecute the church, arresting some of the believers."],
    "Acts 12:2": ["James, the Brother of John, Killed", "Herod has James put to death by the sword."],
    "Acts 12:3": ["Peter Arrested", "Seeing that it pleases the Jews, Herod arrests Peter during the Festival of Unleavened Bread."],
    "Acts 12:5": ["Church Prays for Peter", "The church prays earnestly to God for Peter while he is kept in prison."],
    "Acts 12:6": ["Peter Bound with Chains", "Peter is sleeping between two soldiers, bound with two chains, while guards stand at the door."],
    "Acts 12:7": ["Angel Frees Peter", "An angel of the Lord appears, a light shines, and Peter is struck on the side to wake him and his chains fall off."],
    "Acts 12:9": ["Peter Follows the Angel", "The angel instructs Peter to put on his clothes and sandals and follow; Peter thinks it is a vision."],
    "Acts 12:12": ["Peter Arrives at Mary’s House", "Peter goes to the house of Mary, mother of John Mark, where many are gathered in prayer."],
    "Acts 12:14": ["Rhoda Recognizes Peter", "Rhoda, a servant girl, answers the door and is so overjoyed that she leaves Peter standing outside."],
    "Acts 12:16": ["Peter Persuades Them", "Peter knocks, and they open the door; he motions them to be quiet and tells them how the Lord brought him out of prison."],
    "Acts 12:17": ["Peter Leaves", "Peter sends them to tell James and the brothers, then leaves for another place."],
    "Acts 12:19": ["Herod Dies", "Herod orders guards to be killed; the next day, Herod is struck down by an angel and dies, eaten by worms because he did not give glory to God."],

    "Acts 13:1": ["Teachers and Prophets in Antioch", "In the church at Antioch, there were prophets and teachers, including Barnabas, Simeon called Niger, Lucius of Cyrene, Manaen, and Saul."],
    "Acts 13:2": ["The Holy Spirit Speaks", "While they are ministering to the Lord and fasting, the Holy Spirit says, 'Set apart for me Barnabas and Saul for the work to which I have called them.'"],
    "Acts 13:3": ["Fasting and Laying on of Hands", "After fasting and praying, they lay hands on Barnabas and Saul and send them off."],
    "Acts 13:4": ["Sent by the Holy Spirit", "Barnabas and Saul, sent by the Holy Spirit, go down to Seleucia, and from there they sail to Cyprus."],
    "Acts 13:5": ["Preaching in Salamis", "They preach the word of God in the synagogues of Salamis, and John serves as their attendant."],
    "Acts 13:6": ["Elymas the Sorcerer", "They encounter a false prophet and magician named Elymas (Bar-Jesus) who opposes them and seeks to turn the proconsul from the faith."],
    "Acts 13:9": ["Saul, Filled with the Spirit", "Saul, also called Paul, filled with the Holy Spirit, looks intently at Elymas."],
    "Acts 13:11": ["Elymas Struck Blind", "Paul declares that Elymas will be temporarily blind, and immediately a mist and darkness fall on him."],
    "Acts 13:13": ["Paul and Barnabas Sail to Perga", "Leaving Paphos, they sail to Perga in Pamphylia, where John leaves them and returns to Jerusalem."],
    "Acts 13:14": ["They Preach in Antioch of Pisidia", "They travel on to Antioch, enter the synagogue on the Sabbath, and sit down to teach."],
    "Acts 13:16": ["Paul Speaks to the People", "Paul stands, motions with his hand, and addresses the people, recounting Israel’s history and God’s faithfulness."],
    "Acts 13:23": ["God Raised Jesus", "Paul declares that God fulfilled His promise by raising up Jesus as Savior to Israel."],
    "Acts 13:26": ["Jesus Sent for Blessing", "Paul tells the audience that they are the children of the prophets and the covenant, and Jesus was sent to bless them by turning them from their wickedness."],
    "Acts 13:38": ["Forgiveness Through Jesus", "Paul proclaims forgiveness of sins through Jesus, whom God has set forth as Savior."],
    "Acts 13:41": ["Warning from the Prophets", "Paul quotes Habakkuk, warning the people not to turn away from God’s message, or judgment will come suddenly."],

    "Acts 14:1": ["Paul and Barnabas Preach in Iconium", "Paul and Barnabas enter the synagogue and speak so effectively that a great number of Jews and Greeks believe."],
    "Acts 14:2": ["Division Among the People", "Some of the Jews who do not believe stir up Gentiles against the apostles, creating division in the city."],
    "Acts 14:3": ["Signs and Wonders Confirm the Word", "Paul and Barnabas continue to speak boldly, and God confirms their message through signs and wonders."],
    "Acts 14:5": ["Plot to Persecute", "Unbelieving Jews and Gentiles plot to mistreat and stone Paul and Barnabas."],
    "Acts 14:6": ["Flee to Lystra and Derbe", "Paul and Barnabas learn of the plot and flee to Lystra and then to Derbe, cities of Lycaonia."],
    "Acts 14:8": ["Healing of a Lame Man", "In Lystra, Paul heals a man lame from birth, who had never walked, astounding the crowd."],
    "Acts 14:11": ["People Call Them Gods", "The crowd sees the miracle and calls Barnabas Zeus and Paul Hermes, thinking they are gods."],
    "Acts 14:14": ["Paul and Barnabas Correct the Crowd", "They tear their clothes in protest, tell the people they are humans, and urge them to turn from idols to the living God."],
    "Acts 14:19": ["Paul Stoned", "Some Jews from Antioch and Iconium persuade the crowd to stone Paul, dragging him out of the city thinking he is dead."],
    "Acts 14:20": ["Paul Survives and Continues Preaching", "Paul rises, returns to the city, and the next day goes to Derbe with Barnabas to preach."],
    "Acts 14:21": ["Strengthening the Disciples", "They preach the gospel in Derbe, make many disciples, and then return to Lystra, Iconium, and Antioch."],
    "Acts 14:22": ["Encouragement in Persecution", "They strengthen the souls of the disciples, exhort them to continue in the faith, and warn them of persecution."],
    "Acts 14:23": ["Appointing Elders", "Paul and Barnabas appoint elders in every church, with prayer and fasting, committing them to the Lord."],
    "Acts 14:27": ["Return to Antioch in Syria", "After completing their mission, they report all that God had done with them and how He opened the door of faith to the Gentiles."],

    "Acts 15:1": ["Some Teach Circumcision", "Certain men from Judea teach that Gentile believers must be circumcised according to the Law of Moses to be saved."],
    "Acts 15:2": ["Paul and Barnabas Go to Jerusalem", "Paul and Barnabas are appointed to go to Jerusalem to consult the apostles and elders about this question."],
    "Acts 15:4": ["The Church Receives Them", "The church in Jerusalem receives Paul and Barnabas and listens to the report of all that God has done through them."],
    "Acts 15:6": ["The Apostles and Elders Meet", "The apostles and elders gather to consider the matter concerning circumcision."],
    "Acts 15:7": ["Peter Speaks", "Peter stands and reminds them how God chose him to preach to the Gentiles, giving them the Holy Spirit just as He did to the Jews."],
    "Acts 15:10": ["Peter’s Argument", "Peter asks why they are testing God by putting a yoke on the disciples’ necks that neither their ancestors nor they could bear."],
    "Acts 15:12": ["Barnabas and Paul Tell Their Story", "Barnabas and Paul recount the signs and wonders God did among the Gentiles through them."],
    "Acts 15:13": ["James Speaks", "James speaks, quoting Scripture, and declares that God has also called the Gentiles to Himself."],
    "Acts 15:19": ["Decision of the Council", "James concludes that they should not trouble the Gentiles who turn to God but write to them to abstain from certain things."],
    "Acts 15:22": ["Letter Sent to Gentile Believers", "The apostles, elders, and brothers select men to deliver the letter to Antioch, including Judas (Barsabbas) and Silas."],
    "Acts 15:28": ["The Holy Spirit Guides the Decision", "The letter is written with the guidance of the Holy Spirit, instructing Gentiles to avoid idolatry, sexual immorality, things strangled, and blood."],
    "Acts 15:30": ["The Delegation Arrives", "The men chosen deliver the letter to Antioch, and the Gentile believers rejoice at the encouragement."],
    "Acts 15:35": ["Paul and Barnabas Continue Teaching", "Paul and Barnabas remain in Antioch, teaching and strengthening the believers."],

    "Acts 16:1": ["Timothy Joins Paul and Silas", "Paul comes to Derbe and Lystra, and a disciple named Timothy, well spoken of by the believers, joins them."],
    "Acts 16:3": ["Timothy Circumcised", "Paul circumcises Timothy because of the Jews in those regions, knowing it would help their ministry."],
    "Acts 16:6": ["Guidance by the Holy Spirit", "Paul and his companions are guided by the Spirit, prohibited from preaching in Asia and Bithynia."],
    "Acts 16:8": ["Come to Macedonia", "The Spirit leads them to Troas, and Paul has a vision of a man from Macedonia asking for help."],
    "Acts 16:10": ["Macedonia Open", "They immediately conclude that God has called them to preach in Macedonia."],
    "Acts 16:13": ["Philippi Prayer Meeting", "On the Sabbath, they go outside the city to a river where they expect a place of prayer and speak to the women gathered."],
    "Acts 16:14": ["Lydia Believes", "A woman named Lydia, a seller of purple cloth from Thyatira, listens and the Lord opens her heart to believe."],
    "Acts 16:15": ["Lydia and Household Baptized", "She and her household are baptized, and she invites Paul and his companions to stay at her home."],
    "Acts 16:16": ["The Slave Girl with a Spirit", "A slave girl possessed by a spirit of divination follows Paul and the group, proclaiming that they are servants of the Most High God."],
    "Acts 16:18": ["Paul Frees Her", "Paul commands the spirit to come out of her in the name of Jesus Christ, and it leaves her immediately."],
    "Acts 16:19": ["Owners Angry", "Her owners, seeing their hope of profit is gone, seize Paul and Silas and drag them to the authorities."],
    "Acts 16:22": ["Paul and Silas Beaten", "The crowd joins in, and the magistrates order them to be stripped and beaten."],
    "Acts 16:25": ["Prayer and Singing in Prison", "Around midnight, Paul and Silas pray and sing hymns, and the other prisoners listen."],
    "Acts 16:26": ["Earthquake Opens Prison", "A violent earthquake shakes the prison, opening the doors and loosening everyone’s chains."],
    "Acts 16:29": ["Jailer Prepares to Kill Himself", "The jailer, fearing the prisoners escaped, draws his sword to kill himself, but Paul stops him."],
    "Acts 16:31": ["Believe in the Lord Jesus", "Paul and Silas tell the jailer to believe in the Lord Jesus to be saved, along with his household."],
    "Acts 16:33": ["Jailer and Household Baptized", "The jailer washes their wounds and is baptized with his family, rejoicing greatly."],
    "Acts 16:34": ["Jailer Rejoices", "The jailer and all his household rejoice greatly, having come to faith in God."],

    "Acts 17:1": ["Paul and Silas in Thessalonica", "They pass through Amphipolis and Apollonia and come to Thessalonica, where there is a synagogue of the Jews."],
    "Acts 17:2": ["Reasoning from the Scriptures", "Paul goes into the synagogue, as was his custom, and for three Sabbath days reasons with them from the Scriptures."],
    "Acts 17:3": ["Jesus is the Messiah", "He explains and proves that the Messiah had to suffer and rise from the dead, saying 'This Jesus I am proclaiming to you is the Messiah.'"],
    "Acts 17:5": ["Opposition Arises", "Some Jews are persuaded, but others form a mob and set the city in an uproar, attacking the house of Jason."],
    "Acts 17:7": ["Accusations Against Jason", "They accuse Jason and others of defying Caesar’s decrees, claiming another king named Jesus has been proclaimed."],
    "Acts 17:10": ["Paul and Silas Sent to Berea", "The believers immediately send Paul and Silas by night to Berea, where they enter the synagogue."],
    "Acts 17:11": ["Berea Jews Are Noble", "The Bereans are more noble, receiving the word eagerly and examining the Scriptures daily to see if what Paul said is true."],
    "Acts 17:12": ["Many Believe in Berea", "Many Jews believe, and also a number of Greeks, including prominent women."],
    "Acts 17:13": ["Thessalonians Stir Up Trouble", "The Jews from Thessalonica come to Berea, agitating the crowds and causing Paul to be sent to the coast."],
    "Acts 17:16": ["Paul in Athens", "While waiting for Silas and Timothy in Athens, Paul is distressed by the idolatry he sees around him."],
    "Acts 17:17": ["Paul Reasons in the Synagogue", "He reasons with Jews and God-fearing Gentiles in the synagogue, and daily in the marketplace with those who happen to be there."],
    "Acts 17:22": ["Paul Addresses the Areopagus", "Paul, standing in the Areopagus, speaks to the Athenians, acknowledging their religiosity and altar to an unknown god."],
    "Acts 17:23": ["God Made the World", "Paul explains that God made the world and everything in it, not dwelling in temples made by human hands."],
    "Acts 17:28": ["In God We Live and Move", "Paul quotes poets, saying that in God we live and move and have our being, and we are His offspring."],
    "Acts 17:30": ["Call to Repentance", "Paul tells them that God overlooked past ignorance but now commands all people everywhere to repent."],
    "Acts 17:32": ["Reaction to Resurrection", "When Paul mentions resurrection of the dead, some mock, while others say they will hear him again."],

    "Acts 18:1": ["Paul in Corinth", "After leaving Athens, Paul travels to Corinth, a city in Achaia, where he meets a Jew named Aquila and his wife Priscilla."],
    "Acts 18:2": ["Aquila and Priscilla", "They had recently come from Italy because Claudius had ordered all Jews to leave Rome."],
    "Acts 18:3": ["Paul Works with Them", "Paul stays and works with them, making tents, for they share the same trade."],
    "Acts 18:4": ["Reasoning in the Synagogue", "Every Sabbath, Paul reasons with Jews and God-fearing Greeks in the synagogue."],
    "Acts 18:5": ["Encouragement from Silas and Timothy", "When Silas and Timothy arrive from Macedonia, Paul devotes himself fully to preaching."],
    "Acts 18:6": ["Paul Faces Opposition", "Paul shakes out his garments, saying to the Jews that he is innocent of their blood and will go to the Gentiles."],
    "Acts 18:7": ["Crispus Believes", "Paul leaves the synagogue and stays with a man named Crispus, leader of the synagogue, who believes in the Lord."],
    "Acts 18:8": ["Many in Corinth Believe", "Crispus and his household are baptized, and many Corinthians hear Paul, believe, and are baptized."],
    "Acts 18:9": ["The Lord Encourages Paul", "The Lord appears to Paul in a vision at night, telling him not to be silent but to keep speaking."],
    "Acts 18:11": ["Paul Stays in Corinth", "Paul stays in Corinth for a year and six months, teaching the word of God among them."],
    "Acts 18:18": ["Paul Departs for Syria", "Paul cuts his hair in Cenchreae because of a vow, sails for Syria, and Priscilla and Aquila accompany him; they stop at Ephesus."],
    "Acts 18:24": ["Apollos in Ephesus", "A Jew named Apollos, an eloquent speaker from Alexandria, comes to Ephesus, well-versed in the Scriptures."],
    "Acts 18:26": ["Priscilla and Aquila Teach Apollos", "They hear him and explain the way of God more accurately to him."],
    "Acts 18:27": ["Apollos Goes to Achaia", "Apollos desires to go to Achaia, and the brethren encourage him; he vigorously refutes the Jews in public debates."],
    "Acts 18:28": ["Apollos’ Effect", "Apollos proves from the Scriptures that Jesus is the Christ, greatly helping those who had believed through grace."],

    "Acts 19:1": ["Paul Meets Disciples in Ephesus", "Paul encounters some disciples in Ephesus and asks if they received the Holy Spirit when they believed."],
    "Acts 19:2": ["Disciples Receive Baptism Again", "They reply that they have not even heard of the Holy Spirit; Paul baptizes them in the name of Jesus."],
    "Acts 19:3": ["Laying on of Hands", "Paul lays hands on them, and they receive the Holy Spirit, speaking in tongues and prophesying."],
    "Acts 19:8": ["Paul Teaches in the Synagogue", "Paul enters the synagogue and reasons boldly, persuading some and hardening others in unbelief."],
    "Acts 19:10": ["All Asia Hears the Word", "Paul teaches daily in the lecture hall of Tyrannus for two years, so all in Asia hear the word of the Lord."],
    "Acts 19:11": ["Extraordinary Miracles", "God does extraordinary miracles through Paul, so that handkerchiefs or aprons brought from his body heal the sick and drive out evil spirits."],
    "Acts 19:13": ["Seven Sons of Sceva", "Some itinerant Jews attempt to cast out demons using the name of Jesus, saying 'I command you by Jesus whom Paul preaches.'"],
    "Acts 19:15": ["Demon Resists", "The evil spirit replies, 'Jesus I know, and Paul I know; but who are you?' and attacks them."],
    "Acts 19:18": ["Confessions and Burning of Magic Arts", "Many who had practiced magic publicly confess and burn their books, amounting to fifty thousand pieces of silver."],
    "Acts 19:23": ["Riot in Ephesus", "A silversmith named Demetrius instigates a riot against Paul, fearing the loss of business from idols of Artemis."],
    "Acts 19:28": ["The Crowd in an Uproar", "The whole city is filled with confusion, and they seize Gaius and Aristarchus, Paul’s traveling companions."],
    "Acts 19:32": ["Town Clerk Calms the Crowd", "The town clerk quiets the assembly, explaining the law and urging the people to not commit unlawful acts."],
    "Acts 19:41": ["Riot Dispersed", "The assembly is dismissed peacefully, and the uproar ends without bloodshed."],

    "Acts 20:1": ["Paul Travels Through Macedonia", "After the uproar in Ephesus, Paul travels through Macedonia, encouraging the believers."],
    "Acts 20:3": ["Paul Spends Three Months in Greece", "He stays there for three months and faces a plot against him by the Jews, so he returns through Macedonia."],
    "Acts 20:6": ["Sailing to Troas", "Paul sails from Philippi after the Feast of Unleavened Bread and arrives in Troas, staying seven days."],
    "Acts 20:7": ["Breaking Bread on the First Day", "On the first day of the week, the disciples gather to break bread; Paul preaches to them, continuing until midnight."],
    "Acts 20:9": ["Eutychus Falls Asleep", "A young man named Eutychus sits in a window, falls asleep during Paul’s long sermon, and falls from the third story."],
    "Acts 20:10": ["Paul Revives Eutychus", "Paul embraces the young man, assures everyone he is alive, and continues speaking until dawn."],
    "Acts 20:13": ["Paul Sails to Assos", "Paul and the group sail to Assos to meet Paul, then proceed to Mitylene, Chios, and Samos."],
    "Acts 20:17": ["Paul Calls the Ephesian Elders", "Paul sends for the elders of the church at Ephesus to meet him at Miletus."],
    "Acts 20:19": ["Paul’s Ministry", "Paul reminds them of his humble service, serving the Lord with all humility, trials, and tears."],
    "Acts 20:24": ["Paul’s Mission", "Paul declares that he considers his life of no value, striving to finish the task given by the Lord Jesus—to testify to the gospel of God’s grace."],
    "Acts 20:28": ["Care for the Church", "Paul exhorts the elders to shepherd the church of God, protecting it from false teachers and dangers."],
    "Acts 20:32": ["God’s Grace to Build Up", "Paul commends the believers to God and His word, which can build them up and give an inheritance among the sanctified."],
    "Acts 20:35": ["Remember the Words of Jesus", "Paul reminds them of Jesus’ words, 'It is more blessed to give than to receive.'"],

    "Acts 21:1": ["Paul Travels to Cos, Rhodes, and Patara", "Paul and his companions sail from Troas and travel along the coast, eventually arriving at Tyre."],
    "Acts 21:4": ["Prophets Warn in Tyre", "The disciples in Tyre, through the Spirit, warn Paul not to go to Jerusalem."],
    "Acts 21:8": ["Philip the Evangelist", "They arrive at Ptolemais and stay with Philip the evangelist, one of the seven."],
    "Acts 21:10": ["Agabus Prophecy", "A prophet named Agabus predicts Paul’s arrest in Jerusalem by binding his own hands and feet with Paul’s belt."],
    "Acts 21:14": ["Paul Resolves to Go", "Despite the warnings, Paul insists on going to Jerusalem, saying the Lord’s will must be done."],
    "Acts 21:17": ["Arrival in Jerusalem", "Paul and his companions arrive in Jerusalem, greeted warmly by the brothers."],
    "Acts 21:20": ["The Leaders of the Church", "James and the elders hear Paul’s report and rejoice, acknowledging God’s work among the Gentiles."],
    "Acts 21:23": ["Paul Purification Ritual", "James instructs Paul to join in a purification ritual with four men to show he observes the law."],
    "Acts 21:27": ["Jews Stir Up the Crowd", "Some Jews from Asia incite the crowd, accusing Paul of defiling the temple and bringing Gentiles in."],
    "Acts 21:30": ["Paul Seized", "The people seize Paul and drag him out of the temple, intending to kill him."],
    "Acts 21:32": ["Roman Soldiers Intervene", "The Roman commander and soldiers arrest Paul and rescue him from the mob."],
    "Acts 21:34": ["Paul Speaks to the Crowd", "Paul is about to be scourged, but he asks the centurion if he can address the people, speaking in Aramaic to the crowd."],

    "Acts 22:1": ["Paul Speaks to the Crowd", "Paul raises his hand and begins speaking in Aramaic to the crowd gathered in Jerusalem."],
    "Acts 22:3": ["Paul’s Background", "He tells them he was born in Tarsus, educated under Gamaliel, and strictly followed the law of the fathers."],
    "Acts 22:4": ["Persecuting the Church", "Paul describes how he persecuted the followers of Jesus, binding and delivering both men and women to prison."],
    "Acts 22:6": ["Encounter with Jesus", "Paul recounts being on the road to Damascus when a bright light from heaven suddenly shone around him."],
    "Acts 22:8": ["Jesus Speaks", "Paul hears a voice saying, 'Saul, Saul, why are you persecuting Me?' and asks who is speaking."],
    "Acts 22:10": ["Paul’s Commission", "Jesus instructs Paul to get up, go into the city, and wait for further instructions."],
    "Acts 22:12": ["Ananias Sent", "The Lord sends Ananias to restore Paul’s sight and fill him with the Holy Spirit."],
    "Acts 22:14": ["Paul Receives the Mission", "Ananias tells Paul that God has chosen him to know His will, see the Righteous One, and hear His voice."],
    "Acts 22:15": ["Paul’s Witness to All", "Paul is appointed to be a witness for everyone of what he has seen and heard."],
    "Acts 22:17": ["Paul Prays in the Temple", "Paul recalls praying in the temple and experiencing a vision calling him to the Gentiles."],
    "Acts 22:22": ["The Crowd Reacts", "The Jews listening shout, 'Away with such a fellow from the earth! He is not fit to live.'"],
    "Acts 22:25": ["Paul Avoids Scourging", "When they attempt to flog him, Paul asserts his Roman citizenship, preventing the punishment."],
    "Acts 22:30": ["Paul Granted a Hearing", "The commander, learning that Paul is a Roman citizen, releases him from bonds and sets a day to examine him before the council."],

    "Acts 23:1": ["Paul Before the Sanhedrin", "Paul, standing before the council, boldly declares that he has lived his life with a clear conscience before God."],
    "Acts 23:2": ["Ananias Commands Paul Beaten", "The high priest orders those standing near Paul to strike him on the mouth."],
    "Acts 23:4": ["Paul Rebukes the High Priest", "Paul says it is wrong to speak against God’s law, calling him a whitewashed wall."],
    "Acts 23:6": ["Paul Declares He Is a Pharisee", "Paul perceives some Sadducees and some Pharisees, so he declares he is a Pharisee, hoping to create division."],
    "Acts 23:8": ["The Sadducees and Pharisees Divided", "The Sadducees say there is no resurrection, while the Pharisees affirm resurrection, angels, and spirits, causing a dispute."],
    "Acts 23:11": ["The Lord Encourages Paul", "The Lord stands by Paul that night, telling him he must testify in Rome as he did in Jerusalem."],
    "Acts 23:12": ["Plot Against Paul", "More than forty Jews form a conspiracy, vowing not to eat or drink until they kill Paul."],
    "Acts 23:16": ["Nephew Warns Paul", "Paul’s sister’s son hears of the plot and warns Paul in the barracks."],
    "Acts 23:23": ["Paul Sent to Caesarea", "The commander sends Paul under heavy guard to Felix, governor of Judea, to protect him from the plot."],
    "Acts 23:30": ["Paul Arrives Safely", "Paul arrives in Caesarea and is handed over to the governor, with the letter detailing the accusations of the Jews."],

    "Acts 24:1": ["Paul Stands Before Felix", "After five days, the governor Felix hears the case of Paul, who is brought before him by the Jews."],
    "Acts 24:2": ["The Jews Present Charges", "Tertullus, an orator, accuses Paul of being a troublemaker and a ringleader of the sect of the Nazarenes."],
    "Acts 24:10": ["Paul Defends Himself", "Paul, filled with the Holy Spirit, responds, addressing Felix respectfully and defending his innocence."],
    "Acts 24:14": ["Paul Explains His Beliefs", "Paul states that he worships God in accordance with the Law and the hope of the resurrection, which the Jews call a sect."],
    "Acts 24:16": ["Conscience Clear Before God", "Paul emphasizes that he strives to maintain a clear conscience before God and all people."],
    "Acts 24:18": ["Accusations Weak", "Paul notes that he was not found fighting in the temple or causing a riot in the city, and no one can prove the charges."],
    "Acts 24:22": ["Felix Delays Judgment", "Felix, familiar with the Way, decides to adjourn the hearing, stating that Paul will be kept in custody but granted some freedom."],
    "Acts 24:24": ["Felix Hears About Faith in Christ", "After some days, Felix comes with his wife Drusilla and listens to Paul speak about faith in Christ Jesus."],
    "Acts 24:25": ["Felix Trembles", "Paul speaks about righteousness, self-control, and the coming judgment; Felix becomes afraid and defers making a decision."],
    "Acts 24:27": ["Paul Remains in Custody", "Felix leaves Paul in prison for two years, hoping for a bribe, after which Porcius Festus succeeds him as governor."],

    "Acts 25:1": ["Festus Becomes Governor", "After Felix is succeeded by Porcius Festus, he visits Jerusalem and meets with the Jewish leaders to hear accusations against Paul."],
    "Acts 25:4": ["Festus Asks for Paul to Be Sent", "The Jewish leaders request that Paul be brought to Jerusalem, plotting to ambush and kill him on the way."],
    "Acts 25:6": ["Festus Decides", "Festus tells them that Paul will be kept in Caesarea and that he himself will go there shortly."],
    "Acts 25:8": ["Paul Defends Himself", "When the accusers come, Paul makes no defense against the accusations about wrongdoing against the Jewish law or the temple."],
    "Acts 25:11": ["Paul Appeals to Caesar", "Paul declares that if he has done anything deserving death, he is not trying to escape, but he appeals to Caesar for a fair hearing."],
    "Acts 25:12": ["Festus Consults with King Agrippa", "Festus discusses with King Agrippa the question about Paul, noting that he has appealed to Caesar."],
    "Acts 25:13": ["Agrippa Visits Caesarea", "King Agrippa and Bernice arrive to visit Festus, and Festus explains the case of Paul."],
    "Acts 25:19": ["Accusations Against Paul", "Festus tells Agrippa about the accusations: Paul has done nothing deserving death or imprisonment, but the Jews object because of his faith in Jesus."],
    "Acts 25:20": ["Festus’ Dilemma", "Festus expresses uncertainty about how to proceed, as the charges relate to questions of Jewish law, which are not his expertise."],
    "Acts 25:21": ["Paul’s Appeal", "Festus explains that Paul has appealed to Caesar, so he must be sent to Rome, and Agrippa has the opportunity to hear him."],

    "Acts 26:1": ["Paul Speaks Before King Agrippa", "Festus tells King Agrippa that Paul has the opportunity to defend himself, and Agrippa invites him to speak."],
    "Acts 26:2": ["Paul Begins His Defense", "Paul begins by expressing gratitude for the opportunity to speak before the king and those present."],
    "Acts 26:4": ["Paul’s Background", "He recounts how he lived as a Pharisee, according to strict Judaism, and persecuted the followers of Jesus."],
    "Acts 26:8": ["Question About Resurrection", "Paul explains that he is being judged because of the hope in the resurrection of the dead, which some reject."],
    "Acts 26:12": ["Conversion on the Road to Damascus", "Paul describes how, traveling to Damascus to persecute Christians, a light from heaven suddenly surrounds him."],
    "Acts 26:14": ["Jesus Speaks to Paul", "He hears the voice of Jesus asking why he persecutes Him and instructing him to stand up and testify."],
    "Acts 26:16": ["Paul’s Mission", "Jesus appoints Paul to be a servant and witness, to open the eyes of the Gentiles and bring them from darkness to light."],
    "Acts 26:19": ["Paul Obeys", "Paul explains that he did not disobey the vision but preached first in Damascus and then Jerusalem and throughout Judea."],
    "Acts 26:22": ["Testifying About Christ", "Paul testifies that God calls all to repentance and faith, including the Jews and Gentiles."],
    "Acts 26:28": ["Agrippa Responds", "King Agrippa tells Paul, 'Do you think that in such a short time you can persuade me to be a Christian?'"],
    "Acts 26:29": ["Paul’s Hope", "Paul expresses that he wishes everyone could have the same hope he has, except for chains."],
    "Acts 26:32": ["Reaction of the Assembly", "They listen to Paul’s defense, and some begin to side with him, but others dismiss it."],

    "Acts 27:1": ["Paul Sails to Rome", "Paul is handed over to a centurion named Julius to be taken by ship to Italy."],
    "Acts 27:3": ["Paul Warns of Danger", "Sailing slowly, they arrive at Sidon, where Julius treats Paul kindly and allows him to visit friends."],
    "Acts 27:5": ["Journey Along the Coast", "They set sail from Sidon, passing along the coast of Asia, and arrive at Myra in Lycia."],
    "Acts 27:7": ["Ship Heads to Crete", "After many days, they sail slowly with difficulty, and a dangerous storm arises, making progress difficult."],
    "Acts 27:13": ["The Storm Intensifies", "A violent wind, called Euraquilo, drives the ship, and they struggle to make headway, fearing shipwreck."],
    "Acts 27:20": ["Despair Among the Crew", "After many days without sight of sun or stars and no small tempest, all aboard give up hope of survival."],
    "Acts 27:21": ["Paul Encourages", "Paul stands and encourages them, saying they must keep courage as no lives will be lost, only the ship."],
    "Acts 27:23": ["Angel’s Assurance", "Paul tells them he has been visited by an angel of God, who assured him that he must stand before Caesar and God has granted safety to all aboard."],
    "Acts 27:27": ["Ship Driven onto the Island", "When it was day, sailors try to escape using lifeboats but Paul warns them not to, so everyone stays on board."],
    "Acts 27:33": ["Paul Advises to Eat", "Paul encourages them to take some food for health, assuring them that not a hair on anyone’s head will be lost."],
    "Acts 27:39": ["Shipwreck Occurs", "They strike a sandbar near Malta, the ship runs aground, and the stern breaks apart, but all escape safely to shore."],
    "Acts 27:44": ["All Survive", "The soldiers plan to kill the prisoners, but the centurion prevents it, and all escape safely to land."],

    "Acts 28:1": ["Paul Shipwrecked on Malta", "After drifting for fourteen days, the ship runs aground on the island of Malta, and all on board survive."],
    "Acts 28:2": ["Kindness of the Islanders", "The islanders show unusual kindness, lighting a fire and welcoming them because of the rain and cold."],
    "Acts 28:3": ["Paul Bitten by a Viper", "Paul gathers a bundle of sticks; a viper fastens onto his hand, alarming the people who expect him to swell or fall dead."],
    "Acts 28:5": ["Paul Unharmed", "Paul shakes the snake into the fire and suffers no harm, astonishing the islanders."],
    "Acts 28:7": ["Healing on Malta", "Publius, the chief of the island, welcomes them; Paul heals his father, who was sick with fever and dysentery."],
    "Acts 28:8": ["Many Others Healed", "Others on the island with diseases are brought to Paul, and he prays and heals them."],
    "Acts 28:11": ["Paul Sails to Rome", "After three months, they board an Alexandrian ship to Italy, wintering in Syracuse before sailing on to Rhegium."],
    "Acts 28:13": ["Journey Continues", "They sail along the coast and reach Puteoli, where they find believers and stay seven days."],
    "Acts 28:16": ["Arrival in Rome", "Paul and companions arrive in Rome, and Paul is allowed to live by himself with a soldier to guard him."],
    "Acts 28:17": ["Paul Meets the Jewish Leaders", "After three days, Paul calls the Jewish leaders, explains his situation, and states he is bound with hope in God."],
    "Acts 28:20": ["Paul Testifies About the Kingdom", "Paul explains that he has not rebelled against Jewish law or the temple but testifies about the hope of Israel."],
    "Acts 28:23": ["Paul Teaches Boldly", "They arrange to meet again, and Paul explains and testifies concerning Jesus, from morning till evening, trying to persuade them."],
    "Acts 28:28": ["Gentiles Receive the Message", "Paul declares that God has sent him to the Gentiles, and they will listen; some believe, some do not."],
    "Acts 28:30": ["Paul Preaches in Rome", "Paul lives in Rome for two years, welcoming all who come to him and preaching the kingdom of God and teaching about the Lord Jesus Christ without hindrance."],

    "Romans 1:1": ["Paul, Servant of Christ", "Paul introduces himself as a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God."],
    "Romans 1:3": ["Jesus, Descendant of David", "Paul explains that the gospel concerns God’s Son, Jesus Christ, who according to the flesh is a descendant of David."],
    "Romans 1:4": ["Declared Son of God", "Jesus is declared the Son of God with power by His resurrection from the dead."],
    "Romans 1:5": ["Grace and Apostleship", "Through Jesus, Paul received grace and apostleship to call all nations to obedience and faith."],
    "Romans 1:7": ["Greetings to the Romans", "Paul greets all in Rome who are loved by God and called to be saints, extending grace and peace."],
    "Romans 1:8": ["Thanksgiving for Faith", "Paul thanks God for the faith of the Romans, which is proclaimed throughout the world."],
    "Romans 1:9": ["Paul’s Constant Prayer", "Paul continually prays for them, asking to meet them and impart some spiritual gift to strengthen them."],
    "Romans 1:16": ["Power of the Gospel", "Paul is not ashamed of the gospel because it is the power of God for salvation to everyone who believes, first to the Jew, then to the Gentile."],
    "Romans 1:17": ["Righteousness Revealed", "In the gospel, the righteousness of God is revealed from faith for faith, as it is written, 'The righteous shall live by faith.'"],
    "Romans 1:18": ["God’s Wrath on Ungodliness", "The wrath of God is revealed against all ungodliness and unrighteousness of men who suppress the truth."],
    "Romans 1:20": ["God’s Invisible Qualities", "God’s eternal power and divine nature have been clearly seen in creation, leaving people without excuse."],
    "Romans 1:21": ["People Do Not Honor God", "Though they knew God, they neither glorified Him as God nor gave thanks, and their thinking became futile."],
    "Romans 1:24": ["God Gives Them Over", "God allows them to follow their sinful desires, leading to impurity and dishonoring of their bodies."],
    "Romans 1:26": ["God Gives Them Over to Shameful Passions", "Women and men exchanged natural relations for unnatural ones, receiving the due penalty for their error."],
    "Romans 1:28": ["God Gives Them Over to a Depraved Mind", "Those who do not approve of God are given over to a depraved mind, doing things that ought not to be done."],

    "Romans 2:1": ["God’s Judgment on the Self-Righteous", "Paul warns that those who judge others without practicing the same things are without excuse, for God’s judgment is according to truth."],
    "Romans 2:4": ["God’s Kindness Leads to Repentance", "God’s kindness, patience, and tolerance are meant to lead people to repentance, not to take for granted."],
    "Romans 2:6": ["God’s Righteous Judgment", "God will repay each person according to their deeds: eternal life to those who seek glory, honor, and immortality, and wrath and anger to those who are self-seeking."],
    "Romans 2:10": ["Glory, Honor, and Peace", "To those who do good, glory, honor, and peace are given; to those who do evil, there is wrath and fury."],
    "Romans 2:12": ["Judgment Without the Law", "All who have sinned apart from the law will perish apart from the law, and all who have sinned under the law will be judged by the law."],
    "Romans 2:14": ["Gentiles Who Obey the Law", "Gentiles who do not have the law but instinctively do what the law requires demonstrate that the law is written on their hearts."],
    "Romans 2:17": ["The Jew and the Law", "Those who call themselves Jews and rely on the law boast in God but dishonor Him by breaking the law."],
    "Romans 2:21": ["Hypocrisy of the Law-Teacher", "Teaching others to do good while failing to follow the same commands brings shame to God."],
    "Romans 2:25": ["Circumcision and the Law", "Circumcision has value if the law is obeyed; otherwise, even uncircumcised people who obey the law are considered righteous."],
    "Romans 2:28": ["True Circumcision is of the Heart", "A person is a true Jew inwardly, not merely outwardly, and true circumcision is a matter of the heart by the Spirit, not by the letter of the law."],

    "Romans 3:1": ["Advantages of Being a Jew", "Paul asks what advantage there is to being a Jew, or what value circumcision has."],
    "Romans 3:2": ["Trustworthiness of the Jews", "Much in every way: the oracles of God have been entrusted to them."],
    "Romans 3:4": ["God’s Faithfulness", "Even if every man is a liar, God remains true and His word is proven."],
    "Romans 3:9": ["All Are Under Sin", "Both Jews and Gentiles are under the power of sin; none is righteous on their own."],
    "Romans 3:10": ["No One Is Righteous", "As it is written: 'There is no one righteous, not even one.'"],
    "Romans 3:20": ["No One Justified by the Law", "Through the law comes knowledge of sin, but no one is justified by it before God."],
    "Romans 3:21": ["Righteousness Through Faith", "Now the righteousness of God has been manifested apart from the law, testified by the Law and the Prophets."],
    "Romans 3:22": ["Faith in Jesus Christ", "Righteousness from God comes through faith in Jesus Christ to all who believe, without distinction."],
    "Romans 3:23": ["All Have Sinned", "All have sinned and fall short of the glory of God."],
    "Romans 3:24": ["Justified Freely", "They are justified freely by God’s grace through the redemption that is in Christ Jesus."],
    "Romans 3:25": ["Propitiation Through Jesus", "God presented Jesus as a sacrifice of atonement through faith in His blood, to demonstrate His righteousness."],
    "Romans 3:28": ["Justified by Faith", "A person is justified by faith apart from works of the law."],
    "Romans 3:30": ["God Accepts All Who Believe", "God is the God of both Jews and Gentiles, justifying all who have faith."],
    "Romans 3:31": ["Faith Upholds the Law", "Do we nullify the law by faith? Not at all; rather, we uphold the law."],

    "Romans 4:1": ["Abraham Justified by Faith", "Paul begins explaining that Abraham was justified by faith, not by works."],
    "Romans 4:3": ["Scripture Confirms Faith", "It is written, 'Abraham believed God, and it was credited to him as righteousness.'"],
    "Romans 4:4": ["Works vs. Grace", "When someone works, wages are not credited as a gift but as something owed; faith is counted as righteousness apart from works."],
    "Romans 4:9": ["Faith of Abraham Counted for Gentiles", "Righteousness is credited to Abraham not only for Jews but also for those who share his faith."],
    "Romans 4:13": ["Promise Comes Through Faith", "Abraham’s heirs receive the promise through faith, not law, so it is by faith to inherit the world."],
    "Romans 4:16": ["Faith Guarantees God’s Promise", "Faith is the basis of grace, so the promise depends on faith, making it sure to all Abraham’s descendants."],
    "Romans 4:18": ["Abraham Hopes Against Hope", "Against all human expectation, Abraham hoped in God’s promise and believed it would be fulfilled."],
    "Romans 4:20": ["Unwavering Faith", "Abraham did not waver in unbelief at God’s promise but grew strong in faith, giving glory to God."],
    "Romans 4:22": ["Faith Credited as Righteousness", "Therefore, 'It was credited to him as righteousness' and sets an example for us."],
    "Romans 4:25": ["Jesus Delivered for Our Sins", "He was delivered over to death for our sins and raised to life for our justification."],

    "Romans 5:1": ["Justified by Faith", "Since we are justified by faith, we have peace with God through our Lord Jesus Christ."],
    "Romans 5:2": ["Access to Grace", "Through Jesus, we have access to God’s grace and rejoice in hope of His glory."],
    "Romans 5:3": ["Rejoice in Suffering", "We glory in our sufferings, knowing that suffering produces perseverance."],
    "Romans 5:4": ["Perseverance Produces Character", "Perseverance leads to character, and character leads to hope."],
    "Romans 5:5": ["Hope Does Not Disappoint", "God’s love has been poured into our hearts through the Holy Spirit, who has been given to us."],
    "Romans 5:6": ["Christ Died for the Ungodly", "While we were still powerless, at the right time Christ died for the ungodly."],
    "Romans 5:8": ["God Shows Love in Christ", "God demonstrates His love for us in that while we were sinners, Christ died for us."],
    "Romans 5:9": ["Saved from God’s Wrath", "Since we have been justified by His blood, we will be saved from God’s wrath through Him."],
    "Romans 5:10": ["Reconciled to God", "While we were enemies, we were reconciled to God through the death of His Son."],
    "Romans 5:12": ["Sin Entered the World", "Through one man, Adam, sin entered the world, and death through sin, so death spread to all men."],
    "Romans 5:15": ["Grace Abounds", "The gift of God’s grace and the gift of righteousness through Jesus Christ far outweigh the trespass of Adam."],
    "Romans 5:17": ["Reign of Righteousness", "Those who receive God’s gift of righteousness will reign in life through the one Jesus Christ."],
    "Romans 5:20": ["Law and Grace", "The law was introduced so that trespass might increase, but where sin increased, grace increased all the more."],

    "Romans 6:1": ["Dead to Sin, Alive in Christ", "Paul asks if we should continue sinning so that grace may increase, and answers that we should not."],
    "Romans 6:3": ["Baptized into Christ", "All who are baptized into Christ Jesus are baptized into His death."],
    "Romans 6:4": ["Buried with Christ", "Through baptism, we are buried with Him and raised to walk in newness of life."],
    "Romans 6:6": ["Old Self Crucified", "Our old self was crucified with Christ so that the body of sin might be done away with."],
    "Romans 6:7": ["Dead to Sin, Alive to God", "Anyone dead to sin is freed from its power."],
    "Romans 6:8": ["Alive with Christ", "If we have died with Christ, we believe we will also live with Him."],
    "Romans 6:11": ["Consider Yourselves Dead to Sin", "Count yourselves dead to sin but alive to God in Christ Jesus."],
    "Romans 6:12": ["Do Not Let Sin Reign", "Do not let sin reign in your mortal body to obey its desires."],
    "Romans 6:13": ["Offer Yourselves to God", "Do not offer parts of your body to sin, but offer yourselves to God as instruments of righteousness."],
    "Romans 6:14": ["Sin Will Not Master You", "Sin shall not have dominion over you because you are under grace."],
    "Romans 6:15": ["Do We Sin Because We Are Under Grace?", "Paul asks if being under grace is a license to sin and answers no."],
    "Romans 6:16": ["Obedience to God", "You are slaves to the one you obey, either sin leading to death or obedience leading to righteousness."],
    "Romans 6:18": ["Freed from Sin", "Being set free from sin, you have become slaves of righteousness."],
    "Romans 6:23": ["Wages of Sin vs. Gift of God", "The wages of sin is death, but the gift of God is eternal life through Jesus Christ our Lord."],

    "Romans 7:1": ["Law and Marriage Analogy", "Paul explains that the law has authority over a person only as long as they live, using marriage as an example."],
    "Romans 7:2": ["Woman Bound to Husband", "A married woman is bound by law to her husband while he lives, but free if he dies."],
    "Romans 7:4": ["Dead to the Law Through Christ", "Paul says believers are dead to the law through the body of Christ, so they may belong to Him who was raised from the dead."],
    "Romans 7:5": ["Sin’s Power Through the Law", "Sin, alive in our passions, produces death through the law before we are united with Christ."],
    "Romans 7:7": ["The Law Reveals Sin", "Paul asks if the law is sin, and answers that it is not; it reveals what sin is."],
    "Romans 7:8": ["Sin Produces Death", "Sin seizes the opportunity through the commandment and produces death."],
    "Romans 7:14": ["The Law is Spiritual", "The law is spiritual, but Paul is unspiritual, sold as a slave to sin."],
    "Romans 7:15": ["Conflict Within", "Paul describes doing what he does not want, and not doing what he wants, showing inner struggle."],
    "Romans 7:18": ["Desire vs. Ability", "Paul desires to do good, but finds another law at work in his body waging war against his mind."],
    "Romans 7:22": ["Delight in God’s Law", "Paul rejoices in God’s law in the inner man."],
    "Romans 7:23": ["The Law of Sin", "However, another law in his members wages war, making him captive to the law of sin."],
    "Romans 7:24": ["Wretched Condition", "Paul cries out, 'Who will rescue me from this body of death?'"],
    "Romans 7:25": ["Thanks to God Through Jesus", "Thanks be to God through Jesus Christ, our Lord; Paul concludes that he serves the law of God with his mind, though with his flesh he serves the law of sin."],

    "Romans 8:1": ["No Condemnation in Christ", "There is now no condemnation for those who are in Christ Jesus."],
    "Romans 8:2": ["Law of the Spirit of Life", "The law of the Spirit of life in Christ Jesus has set you free from the law of sin and death."],
    "Romans 8:4": ["Living According to the Spirit", "The righteous requirement of the law is fulfilled in us, who walk according to the Spirit."],
    "Romans 8:5": ["Mindset of Flesh vs. Spirit", "Those who live according to the flesh focus on earthly things, but those who live according to the Spirit focus on spiritual things."],
    "Romans 8:6": ["Life and Peace", "The mind set on the flesh leads to death, but the mind set on the Spirit leads to life and peace."],
    "Romans 8:9": ["Indwelling of the Spirit", "Anyone who does not have the Spirit of Christ does not belong to Him."],
    "Romans 8:10": ["Spirit Gives Life", "Christ is in you; the Spirit gives life to your mortal bodies."],
    "Romans 8:12": ["Obligation to the Spirit", "Believers are not obligated to the flesh to live according to it."],
    "Romans 8:14": ["Led by the Spirit", "All who are led by the Spirit of God are children of God."],
    "Romans 8:16": ["Spirit Testifies with Our Spirit", "The Spirit Himself testifies with our spirit that we are God’s children."],
    "Romans 8:18": ["Future Glory", "Our present sufferings are not worth comparing with the glory that will be revealed in us."],
    "Romans 8:22": ["Creation Groans", "All creation waits in eager expectation for the children of God to be revealed."],
    "Romans 8:26": ["The Spirit Helps in Weakness", "The Spirit helps us in our weakness, interceding for us with groans that words cannot express."],
    "Romans 8:31": ["God is for Us", "If God is for us, who can be against us?"],
    "Romans 8:35": ["Nothing Can Separate Us", "Paul lists trials—tribulation, distress, persecution, famine, nakedness, danger, sword—and says nothing can separate us from God’s love in Christ."],
    "Romans 8:38": ["Certain of God’s Love", "For I am convinced that neither death nor life, angels nor demons, present nor future, powers, height nor depth, or anything else in creation can separate us from the love of God in Christ Jesus."],

    "Romans 9:1": ["Paul’s Sorrow for Israel", "Paul expresses deep sorrow and unceasing anguish in his heart for his fellow Israelites."],
    "Romans 9:3": ["Willing to Be Cursed", "Paul says he could wish himself accursed and cut off from Christ for the sake of his people."],
    "Romans 9:4": ["Privileges of Israel", "Israelites are privileged with adoption, glory, covenants, giving of the law, worship, and promises."],
    "Romans 9:5": ["Messiah From Israel", "From them, the Messiah came, who is God over all, blessed forever, amen."],
    "Romans 9:6": ["Not All Israel Believes", "God’s word has not failed, for not all who are descended from Israel belong to Israel."],
    "Romans 9:7": ["Children of Promise", "Not all children of Abraham are considered true children, but only those who are children of the promise."],
    "Romans 9:10": ["Jacob and Esau", "Paul gives the example of Isaac’s children, Jacob and Esau, showing God’s purpose according to election."],
    "Romans 9:14": ["God’s Justice", "Paul anticipates the question of God’s fairness, asserting there is no injustice with God."],
    "Romans 9:16": ["It Depends on God", "The promise depends not on human will or effort, but on God who shows mercy."],
    "Romans 9:19": ["God’s Sovereignty Questioned", "Paul addresses the objection, asking why God still finds fault if He has mercy and hardens whom He wills."],
    "Romans 9:22": ["Vessels of Wrath and Mercy", "God endures vessels of wrath prepared for destruction to make His power and glory known and to make vessels of mercy."],
    "Romans 9:25": ["God Calls All Peoples", "Paul quotes Hosea: God will call not only Israelites but also Gentiles, showing His mercy."],
    "Romans 9:30": ["Righteousness by Faith", "The Gentiles who did not pursue righteousness attain it by faith, while Israel, pursuing the law of righteousness, did not."],
    "Romans 9:33": ["Stumbling Over Christ", "As it is written, 'The stone the builders rejected has become the cornerstone,' and anyone who believes in Him will not be put to shame."],

    "Romans 10:1": ["Paul’s Desire for Israel", "Paul expresses his heart’s desire and prayer to God for the salvation of his fellow Israelites."],
    "Romans 10:2": ["Zeal Without Knowledge", "The Israelites have zeal for God, but not according to knowledge."],
    "Romans 10:3": ["Righteousness by Works", "They have tried to establish their own righteousness instead of submitting to God’s righteousness."],
    "Romans 10:4": ["Christ is the End of the Law", "Christ is the culmination of the law so that there may be righteousness for everyone who believes."],
    "Romans 10:5": ["Moses Writes of Righteousness", "Moses writes about the righteousness that comes by the law: the person who does these commands will live by them."],
    "Romans 10:6": ["Righteousness by Faith", "The righteousness we seek does not come by reaching heaven or descending into the abyss but through believing in Christ."],
    "Romans 10:9": ["Confess and Believe", "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised Him from the dead, you will be saved."],
    "Romans 10:13": ["Everyone Who Calls on the Lord", "For everyone who calls on the name of the Lord will be saved."],
    "Romans 10:14": ["Preaching is Necessary", "But how can they call on the one they have not believed in? How can they believe without hearing?"],
    "Romans 10:16": ["Not All Accept the Message", "Not all Israelites obeyed the gospel, as Isaiah says, 'Lord, who has believed our message?'"],
    "Romans 10:17": ["Faith Comes by Hearing", "Consequently, faith comes from hearing the message, and the message is heard through the word of Christ."],
    "Romans 10:18": ["Message Reaches All Nations", "Paul asks if Israel has not heard; yes, their voice has gone out into all the earth."],
    "Romans 10:20": ["God Chooses the Gentiles", "Paul quotes Hosea, showing that God has long called people who were not His people to mercy."],

    "Romans 11:1": ["God Has Not Rejected Israel", "Paul asks if God has rejected His people and answers that He has not, for he too is an Israelite."],
    "Romans 11:2": ["God Remembers His Choice", "God has not rejected His people whom He foreknew."],
    "Romans 11:4": ["Elijah’s Example", "God preserves a remnant chosen by grace, just as He did in Elijah’s time."],
    "Romans 11:5": ["Remnant by Grace", "In the present time, a remnant chosen by grace remains, showing God’s faithfulness."],
    "Romans 11:7": ["Israel Did Not Obtain Righteousness", "Israel did not attain what it sought, but the elect obtained it."],
    "Romans 11:11": ["Salvation for the Gentiles", "Paul explains that Israel’s stumbling leads to salvation for the Gentiles, making Israel jealous."],
    "Romans 11:13": ["Paul’s Ministry to the Gentiles", "Paul addresses the Gentiles, boasting in his service to provoke Israel to jealousy."],
    "Romans 11:17": ["Gentiles Grafted In", "Some Gentiles, though wild olive shoots, are grafted into the olive tree by faith."],
    "Romans 11:19": ["Do Not Boast Over the Branches", "Do not boast over the natural branches; remember God’s kindness to the original branches."],
    "Romans 11:22": ["God’s Kindness and Severity", "Consider the kindness and severity of God; those who fall, fall according to human unfaithfulness."],
    "Romans 11:25": ["Mystery of Israel", "A partial hardening has come upon Israel until the full number of Gentiles has come in."],
    "Romans 11:28": ["Israel’s Benefit from the Gospel", "Even though they are enemies for your sake, God’s gifts and calling of Israel are irrevocable."],
    "Romans 11:33": ["The Depths of God", "Paul exclaims about the depth of the riches, wisdom, and knowledge of God, beyond human understanding."],

    "Romans 12:1": ["Living Sacrifice", "Paul urges believers to offer their bodies as living sacrifices, holy and pleasing to God, as their spiritual act of worship."],
    "Romans 12:2": ["Do Not Conform to the World", "Do not conform to the pattern of this world, but be transformed by renewing your mind to discern God’s will."],
    "Romans 12:3": ["Humility and Unity", "Paul warns not to think of yourself more highly than you ought, but to think soberly according to the measure of faith God has given."],
    "Romans 12:4": ["Many Members, One Body", "Just as in one body we have many members with different functions, so in Christ we are many, one body."],
    "Romans 12:6": ["Use of Gifts", "We have different gifts according to the grace given; use them accordingly—prophecy, serving, teaching, encouragement, giving, leadership, mercy."],
    "Romans 12:9": ["Love Must Be Sincere", "Love must be sincere; hate what is evil, cling to what is good."],
    "Romans 12:10": ["Be Devoted to One Another", "Be devoted to one another in love. Honor one another above yourselves."],
    "Romans 12:14": ["Bless Those Who Persecute You", "Bless those who persecute you; bless and do not curse."],
    "Romans 12:17": ["Do Not Repay Evil", "Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone."],
    "Romans 12:19": ["Leave Vengeance to God", "Do not take revenge; leave room for God’s wrath, for it is written: 'It is mine to avenge; I will repay,' says the Lord."],
    "Romans 12:21": ["Overcome Evil with Good", "Do not be overcome by evil, but overcome evil with good."],

    "Romans 13:1": ["Submit to Authorities", "Every person should submit to governing authorities, for all authority comes from God, and those in authority are God’s servants."],
    "Romans 13:3": ["Rulers Are a Terror to Wrongdoers", "Rulers do not bear the sword for no reason; they are God’s servants, an avenger to bring punishment on the wrongdoer."],
    "Romans 13:5": ["Conscience and Submission", "It is necessary to submit, not only to avoid God’s wrath but also for conscience sake."],
    "Romans 13:6": ["Paying Taxes", "Rulers are God’s servants, and it is right to pay taxes as required."],
    "Romans 13:8": ["Owe No One Anything", "Do not owe anyone anything except to love one another, for love fulfills the law."],
    "Romans 13:9": ["Love Fulfills the Law", "The commandments—do not commit adultery, murder, steal, covet—are summed up in loving your neighbor as yourself."],
    "Romans 13:10": ["Love is the Fulfillment", "Love does no harm to a neighbor; therefore love fulfills the law."],
    "Romans 13:11": ["Wake Up from Sleep", "Knowing the time, it is already hour to wake from sleep, for salvation is nearer than when we first believed."],
    "Romans 13:12": ["Put on the Armor of Light", "Let us cast off deeds of darkness and put on the armor of light, behaving decently as in the daytime."],
    "Romans 13:14": ["Clothe Yourself with Christ", "Put on the Lord Jesus Christ, and make no provision for the flesh to gratify its desires."],

    "Romans 14:1": ["Accept the Weak in Faith", "Welcome those who are weak in faith, not arguing over disputable matters."],
    "Romans 14:2": ["Differences in Diet", "One person believes they may eat anything, while the weak eats only vegetables."],
    "Romans 14:3": ["Do Not Judge", "The one who eats everything must not treat with contempt the one who does not, and God has accepted them both."],
    "Romans 14:4": ["God Judges Each", "Who are you to judge someone else’s servant? Their own master will make them stand."],
    "Romans 14:5": ["Respect Personal Convictions", "Each should be fully convinced in their own mind about matters like observing special days."],
    "Romans 14:6": ["Do Everything for the Lord", "Whatever is done, do it for the Lord, giving thanks to God."],
    "Romans 14:7": ["None Lives for Self Alone", "No one lives for themselves, and no one dies for themselves."],
    "Romans 14:8": ["Live or Die for the Lord", "Whether we live or die, we belong to the Lord."],
    "Romans 14:13": ["Do Not Cause Others to Stumble", "Stop judging or putting a stumbling block in the way of a brother or sister."],
    "Romans 14:17": ["Kingdom Not About Food", "The kingdom of God is not about eating or drinking, but about righteousness, peace, and joy in the Holy Spirit."],
    "Romans 14:19": ["Pursue Peace and Edification", "Let us pursue what leads to peace and mutual edification."],
    "Romans 14:21": ["Avoid Causing Others to Sin", "It is better not to eat meat or drink wine, or do anything that might cause your brother or sister to stumble or be weak in faith."],

    "Romans 15:1": ["Bear With the Weak", "Those who are strong should bear with the failings of the weak and not please themselves."],
    "Romans 15:2": ["Build Up Others", "Each of us should please our neighbors for their good, to build them up."],
    "Romans 15:4": ["Scripture for Encouragement", "Everything written in Scripture was written for our instruction, so we may have hope through endurance and encouragement from the Scriptures."],
    "Romans 15:5": ["God Gives Endurance and Encouragement", "May the God who gives endurance and encouragement grant you to live in harmony with one another according to Christ Jesus."],
    "Romans 15:7": ["Accept One Another", "Accept one another, just as Christ accepted you, to bring praise to God."],
    "Romans 15:13": ["Prayer for Joy and Peace", "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you overflow with hope."],
    "Romans 15:14": ["Paul Encourages the Romans", "Paul is convinced of the goodness of the Romans and that they are filled with all knowledge, able to instruct one another."],
    "Romans 15:16": ["Paul’s Ministry to the Gentiles", "Paul is a servant of Christ Jesus to bring the Gentiles to the obedience of faith, declaring God’s gospel."],
    "Romans 15:18": ["Power of the Spirit", "Paul fully proclaims the gospel of Christ, using the power of the Spirit to confirm it with signs and wonders."],
    "Romans 15:20": ["Paul’s Ambition", "Paul aims to preach where Christ was not named, so he does not build on someone else’s foundation."],
    "Romans 15:23": ["Paul’s Plans", "Paul has no more place in these regions and feels compelled to go to Jerusalem in the service of the saints."],
    "Romans 15:28": ["Offering Delivered", "Paul delivers the offering for the saints in Jerusalem and rejoices in God’s willingness to use him for this service."],

    "Romans 16:1": ["Commendation of Phoebe", "Paul commends Phoebe, a servant of the church at Cenchreae, and asks the Romans to receive her in the Lord."],
    "Romans 16:3": ["Greet Priscilla and Aquila", "Paul greets his co-workers in Christ Jesus, who risked their necks for him."],
    "Romans 16:5": ["Greet the Church at Their House", "Greet the church that meets in their house."],
    "Romans 16:6": ["Greet Mary", "Greet Mary, who worked very hard for the believers."],
    "Romans 16:7": ["Greet Andronicus and Junia", "Greet Andronicus and Junia, prominent among the apostles, who were in Christ before Paul."],
    "Romans 16:8": ["Greet Amplias", "Greet Amplias, beloved in the Lord."],
    "Romans 16:9": ["Greet Urbanus and Stachys", "Greet Urbanus, our co-worker in Christ, and Stachys, beloved."],
    "Romans 16:10": ["Greet Apelles and Household", "Greet Apelles, approved in Christ, and those of the household of Aristobulus."],
    "Romans 16:11": ["Greet Herodion", "Greet Herodion, a member of the Lord’s family."],
    "Romans 16:12": ["Greet Tryphena, Tryphosa, and Persis", "Greet Tryphena and Tryphosa, who labor in the Lord, and Persis, beloved for her hard work in the Lord."],
    "Romans 16:13": ["Greet Rufus and His Mother", "Greet Rufus, chosen in the Lord, and his mother, who has been a mother to Paul as well."],
    "Romans 16:14": ["Greet Asyncritus, Phlegon, Hermes, Patrobas", "Greet Asyncritus, Phlegon, Hermes, Patrobas, and the brothers with them."],
    "Romans 16:15": ["Greet Hermas and Brothers", "Greet Hermas, the brothers with him, Philologus, Julia, Nereus and his sister, and Olympas, and all the saints with them."],
    "Romans 16:16": ["Holy Kiss", "Greet one another with a holy kiss; all the churches of Christ send greetings."],
    "Romans 16:17": ["Watch Out for Divisive People", "Paul warns them to watch out for those who cause divisions and put obstacles in the way, contrary to the teaching they have learned."],
    "Romans 16:20": ["God Will Crush Satan", "The God of peace will soon crush Satan under their feet. Paul prays for their grace and peace."],
    "Romans 16:21": ["Final Greetings from Co-Workers", "Timothy, Lucius, Jason, Sosipater, and Paul’s other co-workers send greetings."],
    "Romans 16:22": ["Written by Tertius", "Tertius, who wrote the letter, sends greetings in the Lord."],
    "Romans 16:23": ["Gaius and Erastus Greet You", "Gaius, host to Paul and the whole church, and Erastus, the city’s treasurer, greet you; Quartus, a brother, also sends greetings."],
    "Romans 16:25": ["Doxology", "Paul gives glory to God who is able to strengthen them according to the gospel and proclaim Jesus Christ to all nations."],
    "Romans 16:27": ["Amen", "To God alone be glory forever through Jesus Christ. Amen."],

    "1 Corinthians 1:1": ["Paul, Called to Be an Apostle", "Paul, called to be an apostle of Christ Jesus by God’s will, and Sosthenes our brother, write to the church in Corinth."],
    "1 Corinthians 1:2": ["Address to the Saints", "To those sanctified in Christ Jesus, called to be holy, together with all those everywhere who call on the name of our Lord Jesus Christ."],
    "1 Corinthians 1:4": ["Thanksgiving for the Corinthians", "Paul always thanks God for the grace given to them in Christ Jesus."],
    "1 Corinthians 1:5": ["Enriched in Every Way", "They have been enriched in every way, in all speech and all knowledge."],
    "1 Corinthians 1:7": ["Expecting Christ’s Revelation", "They do not lack any spiritual gift as they wait for the revelation of our Lord Jesus Christ."],
    "1 Corinthians 1:10": ["Unity in the Church", "Paul urges them to agree with one another and avoid divisions, encouraging unity in the Lord."],
    "1 Corinthians 1:12": ["Quarreling Over Leaders", "Some say 'I follow Paul,' others 'I follow Apollos,' others 'I follow Cephas,' and some 'I follow Christ.'"],
    "1 Corinthians 1:18": ["Message of the Cross", "The message of the cross is foolishness to those perishing, but to those being saved, it is the power of God."],
    "1 Corinthians 1:21": ["God’s Wisdom", "God, in His wisdom, was pleased to save those who believe through the foolishness of what is preached."],
    "1 Corinthians 1:25": ["God’s Strength and Weakness", "The foolishness of God is wiser than human wisdom, and the weakness of God is stronger than human strength."],
    "1 Corinthians 1:27": ["God Chooses the Weak", "God chose the foolish, weak, lowly, and despised to shame the wise and strong, so that no one may boast before Him."],
    "1 Corinthians 1:30": ["Christ Becomes Our Wisdom and Righteousness", "God made Christ our wisdom, righteousness, sanctification, and redemption."],

    "1 Corinthians 2:1": ["Paul’s Approach in Corinth", "Paul, when he came to the Corinthians, did not come with eloquence or human wisdom."],
    "1 Corinthians 2:2": ["Focus on Christ Crucified", "He decided to know nothing among them except Jesus Christ and Him crucified."],
    "1 Corinthians 2:4": ["Power of the Spirit", "Paul’s speech and preaching were not with persuasive words of human wisdom, but with a demonstration of the Spirit’s power."],
    "1 Corinthians 2:6": ["Wisdom Among the Mature", "We do speak wisdom, but it is God’s wisdom, mysterious and hidden, which God predestined before the ages for our glory."],
    "1 Corinthians 2:9": ["God’s Plan Beyond Human Sight", "What eye has not seen, ear has not heard, and what has not entered the human heart—these God has prepared for those who love Him."],
    "1 Corinthians 2:10": ["Spirit Reveals God’s Wisdom", "God revealed these things through the Spirit, for the Spirit searches everything, even the deep things of God."],
    "1 Corinthians 2:12": ["Spirit Gives Us Understanding", "We did not receive the spirit of the world, but the Spirit who is from God, so we may understand what God has freely given us."],
    "1 Corinthians 2:14": ["Natural Man Cannot Understand", "The natural person does not accept the things of the Spirit of God, for they are foolishness to him."],
    "1 Corinthians 2:16": ["We Have the Mind of Christ", "We have the mind of Christ, allowing us to discern God’s wisdom and purposes."],

    "1 Corinthians 3:1": ["Spiritual Infants", "Paul addresses the Corinthians as spiritual infants, not yet ready for solid spiritual food because of jealousy and quarreling among them."],
    "1 Corinthians 3:3": ["Living Like the World", "They are acting like mere humans, living according to the flesh, for their jealousy and quarreling show they are worldly."],
    "1 Corinthians 3:6": ["Paul and Apollos as Servants", "Paul planted, Apollos watered, but God gave the growth; neither is anything without God."],
    "1 Corinthians 3:7": ["God Gives Growth", "It is God who gives the increase, so the one who plants and the one who waters are equal in importance."],
    "1 Corinthians 3:9": ["God’s Co-Workers", "Paul calls the believers God’s co-workers and the field of God, and God’s building."],
    "1 Corinthians 3:10": ["Foundation and Building", "According to God’s grace, Paul laid a foundation, and others build on it; let each be careful how they build."],
    "1 Corinthians 3:12": ["Material for Building", "If anyone builds on the foundation with gold, silver, costly stones, wood, hay, or straw, the quality of the work will be tested."],
    "1 Corinthians 3:13": ["Day Will Declare It", "The Day of the Lord will reveal each person’s work; it will be tested by fire."],
    "1 Corinthians 3:16": ["Temple of God", "Do you not know that you are God’s temple, and God’s Spirit dwells in you?"],
    "1 Corinthians 3:17": ["Defilement Brings Judgment", "If anyone destroys God’s temple, God will destroy them, for God’s temple is holy, and you are that temple."],

    "1 Corinthians 4:1": ["Stewards of God’s Mysteries", "Paul calls the apostles servants of Christ and stewards of God’s mysteries, requiring faithfulness."],
    "1 Corinthians 4:2": ["Faithful Stewardship", "It is required that stewards be found faithful in their service."],
    "1 Corinthians 4:3": ["Judged by Others", "Paul considers it a small matter to be judged by humans or human court; his concern is God’s judgment."],
    "1 Corinthians 4:5": ["Wait for the Lord", "Judge nothing before the time, until the Lord comes, for He will bring to light what is hidden."],
    "1 Corinthians 4:6": ["Do Not Go Beyond What Is Written", "Paul reminds the Corinthians not to go beyond what is written and not to boast in one against another."],
    "1 Corinthians 4:9": ["Apostles as Spectacle", "Paul says God has displayed the apostles as last, sent to death, a spectacle to the world, angels, and humans."],
    "1 Corinthians 4:10": ["Fools for Christ", "We are fools for Christ, weak, despised, and unable by worldly standards."],
    "1 Corinthians 4:12": ["Paul’s Suffering", "We labor, are reviled, endure hardships, and are defamed, yet we bless; we are persecuted yet endure."],
    "1 Corinthians 4:15": ["Spiritual Fathers", "Paul became their spiritual father through the gospel of Christ, urging them to imitate his example."],
    "1 Corinthians 4:18": ["Some Become Arrogant", "Some Corinthians became arrogant, thinking Paul would not visit them, but he plans to confront them."],
    "1 Corinthians 4:20": ["Kingdom Not in Words", "The kingdom of God is not in words but in power."],
    "1 Corinthians 4:21": ["Paul Will Come with Power", "Will Paul come with a rod of discipline or in love and gentleness? The Corinthians are warned to consider this."],

    "1 Corinthians 5:1": ["Immorality in the Church", "Paul rebukes the Corinthian church for tolerating a man who has his father’s wife, a sin even among pagans."],
    "1 Corinthians 5:2": ["Church Should Be Grieved", "Instead of boasting, the church should have mourned and removed the man from among them."],
    "1 Corinthians 5:5": ["Deliver to Satan", "Paul instructs that the man be handed over to Satan for the destruction of the flesh, so that his spirit may be saved on the day of the Lord."],
    "1 Corinthians 5:6": ["A Little Yeast Leavens All", "Paul warns that a little sin can corrupt the whole church, just as yeast leavens dough."],
    "1 Corinthians 5:7": ["Christ Our Passover", "Christ, our Passover, has been sacrificed, so we should celebrate with sincerity and truth, putting away the old yeast of malice and evil."],
    "1 Corinthians 5:9": ["Do Not Associate with Sinful People?", "Paul clarifies that he wrote not to associate with sexually immoral people, not with all unbelievers."],
    "1 Corinthians 5:11": ["Do Not Keep Company With the Unrepentant", "Do not associate with anyone who claims to be a brother but is sexually immoral, greedy, an idolater, a reviler, a drunkard, or a swindler."],
    "1 Corinthians 5:13": ["Remove the Wicked Person", "God will judge the outside world, but the church must expel the wicked person from among them."],

    "1 Corinthians 6:1": ["Lawsuits Among Believers", "Paul criticizes the Corinthians for taking their disputes before secular courts instead of resolving them within the church."],
    "1 Corinthians 6:3": ["Judging the World", "Do you not know that the saints will judge the world? If the world will be judged by you, are you unworthy to judge trivial cases?"],
    "1 Corinthians 6:5": ["Disgrace of Unresolved Disputes", "It is already a shame that there is not one wise person among you who can settle disputes between brothers."],
    "1 Corinthians 6:9": ["Unrighteous Will Not Inherit", "Paul lists wrongdoers—sexually immoral, idolaters, adulterers, men who practice homosexuality, thieves, greedy, drunkards, revilers, swindlers—who will not inherit the kingdom of God."],
    "1 Corinthians 6:11": ["Washed, Sanctified, Justified", "Some of you were like this, but you were washed, sanctified, and justified in the name of the Lord Jesus and by the Spirit of our God."],
    "1 Corinthians 6:12": ["All Things Are Permitted?", "'Everything is lawful for me,' but not everything is beneficial; 'I will not be mastered by anything.'"],
    "1 Corinthians 6:15": ["Your Body Is a Member of Christ", "Do you not know that your bodies are members of Christ? Shall I then take members of Christ and make them members of a prostitute? Never!"],
    "1 Corinthians 6:19": ["Your Body Is God’s Temple", "Do you not know that your body is a temple of the Holy Spirit, who is in you, and you are not your own?"],
    "1 Corinthians 6:20": ["Glorify God in Your Body", "You were bought with a price; therefore glorify God in your body and in your spirit, which belong to God."],

    "1 Corinthians 7:1": ["Instructions on Marriage", "Paul responds to questions about marriage, advising that it is good for a man not to marry."],
    "1 Corinthians 7:2": ["Avoiding Sexual Immorality", "Each man should have his own wife and each woman her own husband to avoid sexual immorality."],
    "1 Corinthians 7:3": ["Mutual Duty", "Husband and wife should fulfill marital duties to one another, with mutual consent, avoiding depriving one another."],
    "1 Corinthians 7:5": ["Temporary Abstinence", "Couples may abstain for a time to devote themselves to prayer, but must come together again to avoid temptation."],
    "1 Corinthians 7:7": ["Gift of Celibacy", "Paul wishes all could remain as he is, but each has their own gift from God, one of marriage, another of celibacy."],
    "1 Corinthians 7:10": ["Commands for Married Couples", "To the married, Paul gives a command—not he, but the Lord—that a wife must not separate from her husband."],
    "1 Corinthians 7:12": ["Guidance for Unbelieving Spouses", "If a believer has an unbelieving spouse willing to live with them, they must not divorce."],
    "1 Corinthians 7:17": ["Each as Called", "Each should live as the Lord has assigned, maintaining the situation in which they were called."],
    "1 Corinthians 7:20": ["Remain in Your Calling", "Each person should remain in the condition in which they were called by God."],
    "1 Corinthians 7:25": ["Advice for the Unmarried", "Paul gives advice for virgins, emphasizing devotion to the Lord and undistracted concern for the Lord’s work."],
    "1 Corinthians 7:32": ["Undistracted in Service", "The unmarried man is concerned about pleasing the Lord, while the married man is concerned about worldly matters and pleasing his spouse."],
    "1 Corinthians 7:39": ["Widows and Marriage", "A woman is bound to her husband as long as he lives, but if her husband dies, she is free to marry anyone she wishes, only in the Lord."],

    "1 Corinthians 8:1": ["Knowledge vs. Love", "Paul begins by explaining that knowledge makes one arrogant, but love builds up."],
    "1 Corinthians 8:4": ["Food Offered to Idols", "An idol is nothing in the world and there is no God but one."],
    "1 Corinthians 8:6": ["One God, One Lord", "Yet for us there is one God, the Father, from whom all things come, and one Lord, Jesus Christ, through whom all things exist."],
    "1 Corinthians 8:7": ["Conscience of the Weak", "Not everyone possesses this knowledge, some eat food as offered to idols and their conscience is weak."],
    "1 Corinthians 8:9": ["Avoid Causing a Stumbling Block", "Be careful that your freedom does not become a stumbling block to the weak."],
    "1 Corinthians 8:10": ["Respect the Weak", "If someone sees you, who has knowledge, eating in an idol’s temple, their conscience may be defiled."],
    "1 Corinthians 8:12": ["Sin Against the Weak", "When you sin against your brother or sister by leading them astray, you sin against Christ."],
    "1 Corinthians 8:13": ["For the Sake of Others", "Therefore, if food causes my brother to stumble, I will never eat meat, so as not to cause him to stumble."],

    "1 Corinthians 9:1": ["Paul’s Apostleship", "Paul asks if he is not an apostle and if he has seen Jesus our Lord. If he is not an apostle to others, at least he is to the Corinthians."],
    "1 Corinthians 9:3": ["Defense of His Rights", "Paul asks whether he has not seen Jesus and whether the Corinthians are not his work in the Lord."],
    "1 Corinthians 9:4": ["Right to Material Support", "Do we not have the right to food and drink? Do we not have the right to be accompanied by a believing wife, like other apostles?"],
    "1 Corinthians 9:7": ["Soldiers and Farmers", "Paul compares to soldiers, farmers, and shepherds who expect to be supported by their work."],
    "1 Corinthians 9:12": ["Paul’s Example of Sacrifice", "If others share in spiritual things, is it too much for us to share in material things? Paul and Barnabas have not used this right, to avoid hindrance to the gospel."],
    "1 Corinthians 9:14": ["The Lord Commands Support", "The Lord commands that those who preach the gospel should receive their living from the gospel."],
    "1 Corinthians 9:16": ["Necessity to Preach", "Woe to Paul if he does not preach the gospel; it is a duty, not a choice."],
    "1 Corinthians 9:19": ["Paul Becomes All Things to All People", "Paul becomes a servant to all to win as many as possible to Christ."],
    "1 Corinthians 9:24": ["Running to Win", "Do you not know that in a race all run, but only one receives the prize? Run in such a way to win."],
    "1 Corinthians 9:25": ["Self-Discipline", "Every athlete exercises self-control in all things; they do it to receive a perishable crown, but we an imperishable."],
    "1 Corinthians 9:27": ["Discipline for Purpose", "Paul disciplines his body and keeps it under, lest after preaching to others he himself be disqualified."],

    "1 Corinthians 10:1": ["Warnings from Israel’s History", "Paul reminds that the Israelites were all under the cloud, passed through the sea, and were baptized into Moses."],
    "1 Corinthians 10:4": ["Spiritual Rock", "They all drank from the spiritual rock that followed them, and that rock was Christ."],
    "1 Corinthians 10:5": ["Examples for Warning", "Not all pleased God; some were destroyed in the wilderness as an example."],
    "1 Corinthians 10:6": ["Warning for Believers", "These things happened to them as examples, and they were written for our instruction."],
    "1 Corinthians 10:7": ["Do Not Idolize", "Do not be idolaters like some of them, as it is written, 'The people sat down to eat and drink and rose up to play.'"],
    "1 Corinthians 10:13": ["God Provides a Way Out", "No temptation has overtaken you except what is common to humanity. God provides a way of escape so you can endure it."],
    "1 Corinthians 10:14": ["Flee from Idolatry", "Paul urges believers to flee from idolatry."],
    "1 Corinthians 10:16": ["The Lord’s Supper", "The cup of blessing we bless is a participation in the blood of Christ; the bread we break is a participation in the body of Christ."],
    "1 Corinthians 10:19": ["Food Sacrificed to Idols", "Paul explains that food sacrificed to idols is nothing, but not all possess this knowledge."],
    "1 Corinthians 10:21": ["Cannot Drink and Eat Both", "You cannot drink the cup of the Lord and the cup of demons; you cannot partake of the table of the Lord and the table of demons."],
    "1 Corinthians 10:23": ["All Things Lawful but Not Beneficial", "All things are lawful, but not all are helpful; all things are lawful, but not all build up."],
    "1 Corinthians 10:31": ["Do All for God’s Glory", "Whether you eat or drink, or whatever you do, do all to the glory of God."],
    "1 Corinthians 10:33": ["Paul’s Example", "Paul tries to please everyone in all things, not seeking his own advantage but that of many, that they may be saved."],

    "1 Corinthians 11:1": ["Imitate Christ", "Paul urges the Corinthians to follow his example as he follows Christ."],
    "1 Corinthians 11:2": ["Hold to the Teachings", "Paul praises them for maintaining the traditions as delivered by him."],
    "1 Corinthians 11:3": ["Headship in Christ", "Paul explains that the head of every man is Christ, the head of woman is man, and the head of Christ is God."],
    "1 Corinthians 11:5": ["Women Praying or Prophesying", "Every woman praying or prophesying with her head uncovered dishonors her head."],
    "1 Corinthians 11:7": ["Man and Image of God", "A man should not cover his head because he is the image and glory of God, while woman is the glory of man."],
    "1 Corinthians 11:10": ["A Sign of Authority", "A woman ought to have a symbol of authority on her head because of the angels."],
    "1 Corinthians 11:17": ["Divisions at the Lord’s Supper", "Paul reprimands the Corinthians for divisions and factions when they come together."],
    "1 Corinthians 11:20": ["Improper Observance", "When they come together, it is not the Lord’s Supper they eat, for each goes ahead with his own meal."],
    "1 Corinthians 11:23": ["Institution of the Lord’s Supper", "Paul recounts the tradition of Jesus taking bread and wine, giving thanks, and saying it represents His body and blood."],
    "1 Corinthians 11:26": ["Proclaiming the Lord’s Death", "As often as you eat this bread and drink the cup, you proclaim the Lord’s death until He comes."],
    "1 Corinthians 11:28": ["Examine Yourself", "Everyone should examine themselves before eating the bread and drinking the cup."],
    "1 Corinthians 11:31": ["Discipline by the Lord", "If we discern the body rightly, we would not come under God’s judgment."],

    "1 Corinthians 12:1": ["Spiritual Gifts", "Paul speaks to the Corinthians about spiritual gifts and reminds them not to be ignorant about them."],
    "1 Corinthians 12:4": ["Variety of Gifts", "There are different kinds of gifts, but the same Spirit distributes them."],
    "1 Corinthians 12:6": ["Different Service, Same Lord", "There are different kinds of service, but the same Lord; there are different workings, but the same God who works all in everyone."],
    "1 Corinthians 12:7": ["Purpose of Gifts", "To each is given the manifestation of the Spirit for the common good."],
    "1 Corinthians 12:8": ["Specific Gifts Listed", "For example, the Spirit gives wisdom, knowledge, faith, healing, miraculous powers, prophecy, discernment, speaking in different kinds of tongues, and interpretation of tongues."],
    "1 Corinthians 12:12": ["Body Analogy", "Just as a body has many parts but is one, so it is with Christ."],
    "1 Corinthians 12:15": ["Every Part Matters", "If the foot says, 'I am not a hand,' is it therefore not part of the body?"],
    "1 Corinthians 12:18": ["God Arranges the Members", "God has arranged each member in the body as He chose."],
    "1 Corinthians 12:21": ["No Part Can Say 'I Do Not Need You'", "The eye cannot say to the hand, 'I have no need of you.'"],
    "1 Corinthians 12:27": ["You Are the Body of Christ", "Now you are the body of Christ, and individually members of it."],
    "1 Corinthians 12:31": ["Desire the Greater Gifts", "Paul encourages them to earnestly desire the greater gifts, and he will show a still more excellent way."],

    "1 Corinthians 13:1": ["The Supremacy of Love", "Paul explains that if he speaks in the tongues of men and angels but does not have love, he is a noisy gong or clanging cymbal."],
    "1 Corinthians 13:2": ["Faith and Knowledge Without Love", "If he has prophetic powers, understands all mysteries, and has all knowledge, yet does not have love, he is nothing."],
    "1 Corinthians 13:3": ["Acts Without Love Are Worthless", "If he gives all he has to the poor and surrenders his body to hardship without love, it profits him nothing."],
    "1 Corinthians 13:4": ["Characteristics of Love", "Love is patient, kind, not envious or boastful, not arrogant or rude."],
    "1 Corinthians 13:5": ["Love’s Humility", "It does not insist on its own way, is not irritable or resentful."],
    "1 Corinthians 13:6": ["Love Does Not Rejoice in Wrong", "It does not rejoice at wrongdoing but rejoices with the truth."],
    "1 Corinthians 13:7": ["Love Bears All Things", "Love bears, believes, hopes, and endures all things."],
    "1 Corinthians 13:8": ["Love Never Ends", "Prophecies, tongues, and knowledge will pass away, but love never fails."],
    "1 Corinthians 13:11": ["Maturity in Love", "When Paul was a child, he spoke and thought as a child; when he became an adult, he put away childish things."],
    "1 Corinthians 13:12": ["Seeing in Part", "Now we see in a mirror dimly, but then we shall see face to face; now we know in part, but then we will know fully."],
    "1 Corinthians 13:13": ["Faith, Hope, and Love", "The greatest of these is love."],

    "1 Corinthians 14:1": ["Pursue Love and Spiritual Gifts", "Paul urges believers to pursue love and desire spiritual gifts, especially prophecy."],
    "1 Corinthians 14:2": ["Speaking in Tongues", "Those who speak in tongues speak not to men but to God, as no one understands them."],
    "1 Corinthians 14:4": ["Edification of the Church", "One who prophesies speaks to people for their strengthening, encouragement, and comfort."],
    "1 Corinthians 14:5": ["Desire to Prophesy", "Paul wishes all could prophesy, but also that all could speak in tongues, with interpretation for the church’s edification."],
    "1 Corinthians 14:7": ["Analogy of Instruments", "Even lifeless instruments produce distinct sounds; if no discernible sound is made, it cannot instruct."],
    "1 Corinthians 14:12": ["Strive to Excel in Building Up", "Seek to excel in gifts that build up the church, rather than personal glory."],
    "1 Corinthians 14:13": ["Interpretation of Tongues", "If someone speaks in a tongue, pray for the ability to interpret to edify the church."],
    "1 Corinthians 14:19": ["Preference for Understanding", "Paul prefers to speak five intelligible words to instruct others than ten thousand words in a tongue."],
    "1 Corinthians 14:22": ["Tongues as a Sign", "Tongues are a sign for unbelievers, but prophecy is for believers."],
    "1 Corinthians 14:23": ["Orderly Worship", "If all speak in tongues in a congregation, outsiders may think you are out of your mind."],
    "1 Corinthians 14:26": ["Use Gifts for Edification", "When you gather, each should bring a hymn, lesson, revelation, tongue, or interpretation for the common good."],
    "1 Corinthians 14:33": ["God Is Not a God of Confusion", "For God is not a God of confusion but of peace, as in all the churches of the saints."],
    "1 Corinthians 14:40": ["Do Everything Decently and in Order", "All things in the church should be done properly and in an orderly manner."],

    "1 Corinthians 15:1": ["The Gospel Message", "Paul reminds the Corinthians of the gospel he preached, which they received and in which they stand."],
    "1 Corinthians 15:3": ["Christ Died for Our Sins", "Christ died for our sins according to the Scriptures, was buried, and was raised on the third day."],
    "1 Corinthians 15:6": ["Christ Appeared to Many", "He appeared to Cephas, the twelve, over 500 brothers at once, many of whom are still alive."],
    "1 Corinthians 15:10": ["Paul’s Labor in the Gospel", "Paul explains that by God’s grace he is what he is, and his labor in the gospel was not in vain."],
    "1 Corinthians 15:12": ["Resurrection Denied?", "Some say there is no resurrection of the dead; Paul counters that if there is no resurrection, Christ is not raised."],
    "1 Corinthians 15:17": ["Faith Is in Vain", "If Christ has not been raised, your faith is futile, and you are still in your sins."],
    "1 Corinthians 15:19": ["Hope in This Life Only", "If we have hoped in Christ in this life only, we are of all people most to be pitied."],
    "1 Corinthians 15:20": ["Christ the Firstfruits", "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep."],
    "1 Corinthians 15:22": ["Life in Christ", "For as in Adam all die, so in Christ all will be made alive."],
    "1 Corinthians 15:29": ["Baptism for the Dead", "Paul mentions those being baptized for the dead, as a practice to show faith in resurrection."],
    "1 Corinthians 15:33": ["Do Not Be Deceived", "Do not be misled: 'Bad company corrupts good character.'"],
    "1 Corinthians 15:51": ["Mystery of the Resurrection", "Paul reveals that not all will sleep, but all will be changed in a moment, in the twinkling of an eye, at the last trumpet."],
    "1 Corinthians 15:57": ["Thanks to God", "Thanks be to God, who gives us the victory through our Lord Jesus Christ."],

    "1 Corinthians 16:1": ["Instructions on Collection", "Paul instructs the Corinthians to set aside a sum of money on the first day of the week for the collection for the saints."],
    "1 Corinthians 16:3": ["Send with Trusted Brothers", "When Paul arrives, he will send those whom the Corinthians approve with letters to deliver the contribution."],
    "1 Corinthians 16:5": ["Paul’s Travel Plans", "Paul plans to visit them after passing through Macedonia, intending to stay with them for a time."],
    "1 Corinthians 16:8": ["Stay in Ephesus", "Paul will stay in Ephesus until Pentecost before continuing his journey."],
    "1 Corinthians 16:13": ["Exhortation to Be Strong", "Paul urges them to be watchful, stand firm in the faith, act like men, and be strong."],
    "1 Corinthians 16:14": ["Do Everything in Love", "Let all that you do be done in love."],
    "1 Corinthians 16:15": ["Greet the Household of Stephanas", "Paul asks the Corinthians to recognize the household of Stephanas, who have devoted themselves to the service of the saints."],
    "1 Corinthians 16:16": ["Submit to Devoted Leaders", "Submit to such people and to everyone who helps in the work and labors."],
    "1 Corinthians 16:19": ["Greetings from the Churches", "The churches of Asia send greetings, especially Aquila and Priscilla, and the church in their house."],
    "1 Corinthians 16:21": ["Paul Writes the Greeting", "Paul personally writes the greeting in his own hand."],
    "1 Corinthians 16:22": ["A Warning Against the Unfaithful", "If anyone does not love the Lord, let them be accursed. Maranatha!"],
    "1 Corinthians 16:23": ["Final Blessing", "Paul closes with the grace of the Lord Jesus Christ be with you."],

    "2 Corinthians 1:1": ["Paul and Timothy Greet the Church", "Paul and Timothy, servants of God, write to the church of God in Corinth with all the saints throughout Achaia."],
    "2 Corinthians 1:3": ["Blessed Be the God of Comfort", "Paul praises God, the Father of mercies and God of all comfort."],
    "2 Corinthians 1:4": ["God Comforts Us", "God comforts us in all our troubles so that we can comfort those in any trouble with the comfort we receive."],
    "2 Corinthians 1:6": ["Sufferings and Comfort", "Paul explains that if we share in suffering, we also share in comfort; suffering and comfort are experienced together."],
    "2 Corinthians 1:8": ["Despair in Asia", "Paul shares that he was burdened beyond ability to endure, even despaired of life."],
    "2 Corinthians 1:9": ["Reliance on God", "Paul acknowledges that he relies not on himself but on God, who raises the dead."],
    "2 Corinthians 1:10": ["God Delivers Us", "God has delivered Paul and continues to deliver, and He will deliver in the future."],
    "2 Corinthians 1:12": ["Integrity Before God", "Paul says he does not write with shame, aiming for God’s approval, and lives by simplicity and godly sincerity."],
    "2 Corinthians 1:14": ["Confidence in the Day of the Lord", "Paul writes that the Corinthians have confidence in him in the day of the Lord, as he has in them."],
    "2 Corinthians 1:15": ["Intent to Visit Again", "Paul explains his previous hesitation to visit Corinth a second time, not wanting to grieve them."],
    "2 Corinthians 1:21": ["God Establishes Us", "It is God who establishes, anoints, and seals us, giving us the Spirit as a guarantee."],

    "2 Corinthians 2:1": ["Paul Resolves Not to Grieve Again", "Paul decides not to grieve the Corinthians by coming a second time with sorrow."],
    "2 Corinthians 2:4": ["Sorrow for the Church", "Paul was deeply grieved, not to be burdened, but so that his love for them may abound even more."],
    "2 Corinthians 2:6": ["Forgive the Offender", "Sufficient punishment has been imposed on the one who caused grief, and the church should forgive and comfort him."],
    "2 Corinthians 2:8": ["Confirm Your Love", "Paul urges the Corinthians to reaffirm their love for the offender."],
    "2 Corinthians 2:9": ["Purpose of Forgiveness", "Paul emphasizes obedience and encouragement through love."],
    "2 Corinthians 2:10": ["Forgiveness in Christ", "Anyone whom Paul forgives, he does so in Christ, for the Lord’s sake."],
    "2 Corinthians 2:12": ["Opportunity in Troas", "Paul mentions being aware of an open door for effective ministry in Troas."],
    "2 Corinthians 2:14": ["God’s Triumph in Christ", "Thanks be to God who always leads us in triumph in Christ and manifests through us the fragrance of the knowledge of Him everywhere."],
    "2 Corinthians 2:17": ["Not Peddling the Word", "Paul contrasts himself with others who peddle the word of God for profit, whereas he speaks with sincerity, as from God."],

    "2 Corinthians 3:1": ["Paul Defends His Ministry", "Paul asks if we need letters of recommendation to you, or if you are our letter, written on our hearts by the Spirit."],
    "2 Corinthians 3:3": ["Living Letter of Christ", "You are a letter from Christ delivered by us, not written with ink, but with the Spirit of the living God; it is known and read by all men."],
    "2 Corinthians 3:6": ["Ministry of the Spirit", "God has made us competent as ministers of a new covenant, not of the letter but of the Spirit, for the letter kills, but the Spirit gives life."],
    "2 Corinthians 3:7": ["Ministry of Death vs. Life", "The ministry that brought death, carved in letters on stone, came with glory, yet the ministry of the Spirit surpasses it in glory."],
    "2 Corinthians 3:12": ["Boldness in Ministry", "Since we have such hope, we use great boldness in our ministry."],
    "2 Corinthians 3:14": ["Hardness of Heart", "Even when Moses’ face shone, the Israelites’ minds were hardened, and the veil remains unlifted in the reading of the old covenant."],
    "2 Corinthians 3:17": ["The Lord Is the Spirit", "Where the Spirit of the Lord is, there is freedom."],
    "2 Corinthians 3:18": ["Transformation into Christ’s Image", "We all, with unveiled faces, reflect the Lord’s glory, and are being transformed into the same image from one degree of glory to another, by the Spirit of the Lord."],

    "2 Corinthians 4:1": ["Ministry of Mercy", "Since we have this ministry by God’s mercy, we do not lose heart."],
    "2 Corinthians 4:2": ["Integrity in Ministry", "We renounce secret and shameful ways; we do not distort the word of God, but by the open statement commending ourselves to every conscience."],
    "2 Corinthians 4:4": ["God Blinds the Unbelieving", "The god of this age has blinded the minds of unbelievers, so they cannot see the light of the gospel of the glory of Christ, who is the image of God."],
    "2 Corinthians 4:6": ["Light Shines in Hearts", "For God, who said, 'Let light shine out of darkness,' has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ."],
    "2 Corinthians 4:7": ["Treasures in Jars of Clay", "We have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us."],
    "2 Corinthians 4:8": ["Perseverance Amid Trials", "We are hard-pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not forsaken; struck down, but not destroyed."],
    "2 Corinthians 4:11": ["Suffering and Life of Jesus", "We always carry around in our body the death of Jesus, so that the life of Jesus may also be revealed in our body."],
    "2 Corinthians 4:16": ["Renewed Inner Self", "Though our outer self is wasting away, our inner self is being renewed day by day."],
    "2 Corinthians 4:18": ["Focus on Eternal Things", "We fix our eyes not on what is seen, but on what is unseen, for what is seen is temporary, but what is unseen is eternal."],

    "2 Corinthians 5:1": ["Our Heavenly Dwelling", "Paul explains that we know if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven."],
    "2 Corinthians 5:3": ["Desiring to Be Clothed", "While we are in this tent, we groan, longing to be clothed with our heavenly dwelling, so that mortality may be swallowed up by life."],
    "2 Corinthians 5:6": ["Walking by Faith", "Therefore we are always confident, knowing that while we are at home in the body we are away from the Lord, yet we walk by faith and not by sight."],
    "2 Corinthians 5:9": ["Pleasing the Lord", "We aim to be pleasing to Him whether at home in the body or away from it."],
    "2 Corinthians 5:11": ["The Fear of the Lord", "Since we know the fear of the Lord, we persuade men, and our motives are made clear to God."],
    "2 Corinthians 5:14": ["Christ’s Love Compels Us", "For Christ’s love compels us, because we judge that one has died for all; therefore, all have died."],
    "2 Corinthians 5:17": ["New Creation in Christ", "If anyone is in Christ, they are a new creation; old things have passed away, and all things have become new."],
    "2 Corinthians 5:19": ["Reconciliation Through Christ", "God was reconciling the world to Himself in Christ, not counting men’s trespasses against them, and He entrusted the message of reconciliation to us."],
    "2 Corinthians 5:20": ["Ambassadors for Christ", "We are therefore ambassadors for Christ, as though God were making His appeal through us."],
    "2 Corinthians 5:21": ["Christ Made Sin for Us", "God made Him who had no sin to be sin for us, so that in Him we might become the righteousness of God."],

    "2 Corinthians 6:1": ["Working Together with God", "Paul urges believers not to receive God’s grace in vain but to work together with Him."],
    "2 Corinthians 6:4": ["Commendation Through Trials", "In every way, Paul commends himself as a servant of God, enduring hardships, calamities, beatings, imprisonments, riots, labors, sleepless nights, and hunger."],
    "2 Corinthians 6:6": ["Exemplary Conduct", "Paul and his companions are known for purity, knowledge, patience, kindness, the Holy Spirit, sincere love, truthful speech, and God’s power."],
    "2 Corinthians 6:8": ["Endurance Through Opposition", "Endured as unknown yet well-known, dying yet alive, punished yet not killed, sorrowful yet always rejoicing."],
    "2 Corinthians 6:10": ["Strength in Weakness", "Poor yet making many rich, having nothing yet possessing everything."],
    "2 Corinthians 6:14": ["Do Not Be Unequally Yoked", "Do not be unequally yoked with unbelievers; what fellowship has righteousness with lawlessness, or light with darkness?"],
    "2 Corinthians 6:16": ["Temple of the Living God", "Paul reminds them that God said, 'I will live with them and walk among them, and I will be their God, and they shall be My people.'"],
    "2 Corinthians 6:18": ["God Will Be a Father to You", "Paul concludes that God will be a Father to you, and you will be sons and daughters to Him, says the Lord Almighty."],

    "2 Corinthians 7:1": ["Purity and Holiness", "Since we have these promises, beloved, let us cleanse ourselves from all defilement of body and spirit, perfecting holiness in the fear of God."],
    "2 Corinthians 7:2": ["Paul Appeals for Open Hearts", "Paul asks the Corinthians to make room in their hearts for him."],
    "2 Corinthians 7:5": ["Affliction in Asia", "Paul reminds them of the trials he faced in Asia, being harassed beyond his ability to endure, so that he despaired of life."],
    "2 Corinthians 7:6": ["God’s Comfort", "But God, who comforts the downcast, comforted Paul by the coming of Titus."],
    "2 Corinthians 7:7": ["Joy in Titus’ Arrival", "Titus’ arrival brought joy, not only to Paul but also to the Corinthians, because his spirit was refreshed."],
    "2 Corinthians 7:9": ["Godly Sorrow vs. Worldly Sorrow", "Paul distinguishes between godly sorrow, which brings repentance leading to salvation, and worldly sorrow, which brings death."],
    "2 Corinthians 7:10": ["Repentance and Salvation", "Godly sorrow produces repentance that leads to salvation without regret; worldly sorrow produces death."],
    "2 Corinthians 7:11": ["Evidence of Repentance", "See what earnestness, eagerness to clear themselves, indignation, fear, longing, zeal, and punishment produced in them—proof of their repentance."],

    "2 Corinthians 8:1": ["The Macedonian Churches’ Generosity", "Paul describes the grace of God given to the churches of Macedonia, who, in their poverty, gave generously beyond their ability."],
    "2 Corinthians 8:3": ["Giving Beyond Ability", "They gave according to their ability, and even beyond their ability, begging earnestly for the privilege of sharing in the ministry to the saints."],
    "2 Corinthians 8:5": ["Giving as a Sacrifice to God", "They first gave themselves to the Lord and then to Paul, in keeping with God’s will."],
    "2 Corinthians 8:7": ["Excellence in Faith, Speech, Knowledge, and Love", "Paul urges the Corinthians to excel in faith, speech, knowledge, all earnestness, and love for one another."],
    "2 Corinthians 8:8": ["Tested Generosity", "Paul does not command but tests the sincerity of their love by comparison with others."],
    "2 Corinthians 8:9": ["Christ’s Example of Giving", "Jesus, though rich, became poor for our sake, so that we might become rich through His poverty."],
    "2 Corinthians 8:12": ["Willingness and Ability", "The gift is acceptable according to what one has, not according to what one does not have."],
    "2 Corinthians 8:14": ["Equality in Giving", "At the present time, your surplus may supply their need, so that their surplus may also supply your need, achieving equality."],
    "2 Corinthians 8:16": ["Commendation of Titus", "Paul praises Titus, who encouraged and completed this act of generosity."],
    "2 Corinthians 8:19": ["Messengers of Glory", "Titus and another brother are sent, glorifying Christ and the churches."],
    "2 Corinthians 8:24": ["Excellence in Giving Reflects God", "This service not only meets needs but also shows earnestness, proving love and integrity before God and all people."],

    "2 Corinthians 9:1": ["Encouragement to Give Generously", "Paul encourages the Corinthians that it is superfluous for him to write about the service for the saints."],
    "2 Corinthians 9:2": ["Readiness to Give", "He knows that the Corinthians were ready a year ago and eagerly prepared to give."],
    "2 Corinthians 9:5": ["Exhortation to Complete the Gift", "Paul urges them to send ahead their gift, so that it may be ready as a willing gift, not under compulsion."],
    "2 Corinthians 9:6": ["Sowing Generously", "The one who sows sparingly will also reap sparingly, and the one who sows generously will reap generously."],
    "2 Corinthians 9:7": ["Give Cheerfully", "Each should give what they have decided in their heart, not reluctantly or under compulsion, for God loves a cheerful giver."],
    "2 Corinthians 9:8": ["God Provides Abundantly", "God is able to make all grace abound toward you, so that having all sufficiency in all things, you may abound in every good work."],
    "2 Corinthians 9:9": ["Scripture on Giving", "Paul quotes Psalm 112, showing that the righteous give generously and their righteousness endures forever."],
    "2 Corinthians 9:10": ["God Provides Seed", "He who supplies seed to the sower and bread for food will supply and increase your store of seed for sowing and enlarge the harvest of your righteousness."],
    "2 Corinthians 9:12": ["Fruit of Generosity", "This service not only supplies the needs of the saints but also overflows in many thanksgivings to God."],
    "2 Corinthians 9:13": ["Proof of Obedience", "The generosity of the Corinthians will prove their obedience and glorify God through their giving."],
    "2 Corinthians 9:15": ["Thanks to God", "Thanks be to God for His indescribable gift!"],

    "2 Corinthians 10:1": ["Paul Appeals in Gentleness", "Paul, humble in person but bold when absent, appeals to the Corinthians by the meekness and gentleness of Christ."],
    "2 Corinthians 10:3": ["Spiritual Warfare", "Though we live in the world, we do not wage war as the world does."],
    "2 Corinthians 10:4": ["Weapons of Our Warfare", "The weapons of our warfare are not of the flesh but have divine power to destroy strongholds."],
    "2 Corinthians 10:5": ["Capturing Thoughts", "We take every thought captive to obey Christ and destroy arguments against the knowledge of God."],
    "2 Corinthians 10:7": ["Boasting in the Lord", "Paul warns the Corinthians not to boast beyond proper limits, but to boast in the Lord."],
    "2 Corinthians 10:10": ["Criticism of Paul", "Some say Paul is bold in letters but weak in person; he responds that his authority comes from God."],
    "2 Corinthians 10:12": ["Do Not Compare", "Paul explains that comparing themselves with others is unwise; we should measure ourselves by the standard God gives."],
    "2 Corinthians 10:17": ["Boast in the Lord", "The one who boasts should boast in the Lord, not in human comparison."],

    "2 Corinthians 11:1": ["Paul’s Concern for the Corinthians", "Paul expresses concern that the Corinthians might be led astray from sincere devotion to Christ by false apostles."],
    "2 Corinthians 11:3": ["Beware of Deception", "Paul fears that they might be deceived like Eve by cunning deception and depart from simplicity in Christ."],
    "2 Corinthians 11:4": ["Another Jesus", "Some preach another Jesus, different from the one Paul preached, and Paul warns against receiving a different spirit or gospel."],
    "2 Corinthians 11:5": ["Super Apostles", "Paul notes that he is not inferior to the so-called 'super apostles' who claim superiority over him."],
    "2 Corinthians 11:7": ["Paul’s Sacrifice", "Paul did not burden the Corinthians financially and endured hardships to serve them freely."],
    "2 Corinthians 11:16": ["Boasting in Hardships", "Paul reluctantly boasts about his sufferings, which prove his apostleship and dedication."],
    "2 Corinthians 11:23": ["Paul’s Hardships", "Paul lists persecutions, imprisonments, beatings, and dangers he has faced in his ministry."],
    "2 Corinthians 11:26": ["Frequent Dangers", "Paul details dangers from rivers, robbers, his own people, Gentiles, in the city, desert, sea, and false brothers."],
    "2 Corinthians 11:27": ["Exhaustion and Hard Work", "Paul describes his weariness, toil, sleepless nights, hunger, thirst, fasting, cold, and exposure."],
    "2 Corinthians 11:28": ["Daily Concern for the Churches", "Beyond external hardships, Paul carries the daily concern for all the churches."],
    "2 Corinthians 11:30": ["Boasting in Weakness", "Paul concludes that if he must boast, he will boast of his weaknesses to honor Christ."],

    "2 Corinthians 12:1": ["Paul’s Vision and Revelation", "Paul shares a vision of a man caught up to the third heaven, knowing Christ beyond words."],
    "2 Corinthians 12:2": ["Third Heaven Experience", "He speaks of the man whether in body or out of body he does not know, God knows."],
    "2 Corinthians 12:4": ["Inexpressible Words", "He was caught up into Paradise and heard inexpressible words, which it is not lawful for a man to utter."],
    "2 Corinthians 12:5": ["Boasting About Weakness", "Paul will boast, but not about himself; he will boast about his weaknesses."],
    "2 Corinthians 12:7": ["A Thorn in the Flesh", "Paul explains that a messenger of Satan was given to him to keep him from being conceited."],
    "2 Corinthians 12:8": ["Three Prayers for Relief", "Paul pleaded with the Lord three times to remove this thorn, but the Lord replied, 'My grace is sufficient for you, for my power is made perfect in weakness.'"],
    "2 Corinthians 12:10": ["Strength in Weakness", "Therefore Paul boasts all the more gladly of his weaknesses, so that the power of Christ may rest upon him."],
    "2 Corinthians 12:11": ["Defense of Apostleship", "Paul reluctantly boasts that he is not inferior to the 'super apostles,' even though he is foolish to do so."],
    "2 Corinthians 12:15": ["Paul’s Generosity", "Paul emphasizes his willingness to spend and be spent for the sake of the churches."],
    "2 Corinthians 12:19": ["Paul’s Care for the Corinthians", "He speaks boldly, out of love, to build them up, not to tear them down."],

    "2 Corinthians 13:1": ["Multiple Witnesses", "Paul reminds the Corinthians that every matter must be established by the testimony of two or three witnesses."],
    "2 Corinthians 13:2": ["Paul’s Previous Warnings", "He has warned the Corinthians twice already, and now he warns them a third time, as if present, he would discipline them."],
    "2 Corinthians 13:3": ["Power in God, Not Ourselves", "The power of Christ is demonstrated among them, though Paul is weak in person, but not in the power of God."],
    "2 Corinthians 13:4": ["Christ’s Weakness and Power", "Christ was crucified in weakness but lives by the power of God; likewise, Paul boasts in weakness."],
    "2 Corinthians 13:5": ["Examine Yourselves", "Paul urges the Corinthians to examine themselves to see whether they are in the faith, testing themselves."],
    "2 Corinthians 13:6": ["Self-Examination Confirms Faith", "Paul reminds them that he hopes they will recognize they are in the faith."],
    "2 Corinthians 13:7": ["Avoiding Sin", "Paul writes to ensure they do what is right, not to be found wanting in their obedience."],
    "2 Corinthians 13:8": ["Power Belongs to God", "Paul asserts that he cannot do anything against the truth, only for the truth."],
    "2 Corinthians 13:11": ["Final Encouragement", "Paul exhorts them to rejoice, be restored, encourage one another, be of one mind, live in peace, and the God of love and peace will be with them."],
    "2 Corinthians 13:13": ["Final Blessing", "Paul closes with a blessing of grace from Jesus Christ, love from God, and fellowship of the Holy Spirit."],

    "Galatians 1:1": ["Paul’s Apostolic Greeting", "Paul introduces himself as an apostle sent not by men but through Jesus Christ and God the Father who raised Him from the dead."],
    "Galatians 1:3": ["Grace and Peace", "Paul greets the churches of Galatia with grace and peace from God the Father and the Lord Jesus Christ."],
    "Galatians 1:4": ["Christ Gave Himself", "Jesus gave Himself for our sins to rescue us from the present evil age according to the will of God."],
    "Galatians 1:6": ["Turning to Another Gospel", "Paul expresses astonishment that the Galatians are quickly turning away to a different gospel."],
    "Galatians 1:7": ["Distortion of the Gospel", "Some people are troubling them and trying to distort the gospel of Christ."],
    "Galatians 1:8": ["Warning Against False Teaching", "Even if an angel from heaven preaches a different gospel, let him be accursed."],
    "Galatians 1:10": ["Seeking God’s Approval", "Paul clarifies that he seeks the approval of God, not people; otherwise he would not be a servant of Christ."],
    "Galatians 1:11": ["Gospel from Revelation", "Paul explains that the gospel he preached was not received from man but through revelation of Jesus Christ."],
    "Galatians 1:13": ["Paul’s Former Life", "He reminds them how he once persecuted the church of God and tried to destroy it."],
    "Galatians 1:15": ["Called by God’s Grace", "God set Paul apart from birth and called him by His grace to reveal His Son in him."],
    "Galatians 1:17": ["Paul’s Early Journey", "Paul did not immediately consult with others but went to Arabia and later returned to Damascus."],
    "Galatians 1:18": ["First Visit to Jerusalem", "After three years Paul went to Jerusalem to visit Peter and stayed with him fifteen days."],
    "Galatians 1:21": ["Ministry in Syria and Cilicia", "Paul later went into the regions of Syria and Cilicia."],
    "Galatians 1:23": ["Churches Hear About Paul", "The churches heard that the man who once persecuted them was now preaching the faith he once tried to destroy."],
    "Galatians 1:24": ["God Glorified", "Because of Paul’s transformation, the believers glorified God."],

    "Galatians 2:1": ["Paul Goes to Jerusalem", "After fourteen years, Paul goes again to Jerusalem with Barnabas and Titus."],
    "Galatians 2:2": ["Presenting the Gospel", "Paul explains that he went because of a revelation and presented the gospel he preached among the Gentiles."],
    "Galatians 2:3": ["Titus Not Compelled", "Titus, though a Greek, was not compelled to be circumcised."],
    "Galatians 2:4": ["False Brothers Oppose", "False brothers secretly infiltrate to spy on the freedom believers have in Christ."],
    "Galatians 2:5": ["Truth of the Gospel Preserved", "Paul refuses to yield to them so that the truth of the gospel might remain."],
    "Galatians 2:7": ["Different Missions", "Paul is entrusted with the gospel to the Gentiles, just as Peter is to the Jews."],
    "Galatians 2:9": ["Right Hand of Fellowship", "James, Cephas, and John recognize the grace given to Paul and extend fellowship to him and Barnabas."],
    "Galatians 2:11": ["Paul Confronts Peter", "Paul opposes Peter in Antioch because he withdraws from eating with Gentiles out of fear."],
    "Galatians 2:13": ["Hypocrisy Exposed", "Other Jews join Peter’s hypocrisy, even Barnabas is led astray."],
    "Galatians 2:14": ["Correction About the Gospel", "Paul publicly confronts Peter for not acting in line with the truth of the gospel."],
    "Galatians 2:16": ["Justified by Faith", "A person is not justified by works of the law but through faith in Jesus Christ."],
    "Galatians 2:19": ["Dead to the Law", "Through the law Paul dies to the law so that he might live for God."],
    "Galatians 2:20": ["Christ Lives in Me", "Paul declares he has been crucified with Christ and now lives by faith in the Son of God."],
    "Galatians 2:21": ["Grace Not Set Aside", "If righteousness comes through the law, then Christ died for nothing."],

    "Galatians 3:1": ["Foolish Galatians Rebuked", "Paul rebukes the Galatians for being misled after clearly hearing the message of Christ crucified."],
    "Galatians 3:2": ["Received the Spirit by Faith", "Paul asks whether they received the Spirit by works of the law or by hearing with faith."],
    "Galatians 3:3": ["Started by the Spirit", "They began their Christian life by the Spirit, so Paul questions why they now try to be perfected by the flesh."],
    "Galatians 3:6": ["Abraham Believed God", "Abraham believed God and it was credited to him as righteousness."],
    "Galatians 3:7": ["Children of Abraham", "Those who have faith are the true children of Abraham."],
    "Galatians 3:8": ["Gospel Foretold to Abraham", "Scripture foresaw that God would justify the Gentiles by faith and announced the gospel beforehand to Abraham."],
    "Galatians 3:10": ["Curse of the Law", "Those who rely on works of the law are under a curse because no one perfectly keeps the law."],
    "Galatians 3:11": ["Righteous Live by Faith", "Scripture declares that the righteous shall live by faith."],
    "Galatians 3:13": ["Christ Redeems from the Curse", "Christ redeemed us from the curse of the law by becoming a curse for us."],
    "Galatians 3:16": ["Promise to Abraham’s Seed", "The promise was spoken to Abraham and to his seed, referring ultimately to Christ."],
    "Galatians 3:19": ["Purpose of the Law", "The law was added because of transgressions until the promised seed should come."],
    "Galatians 3:24": ["Law as a Guardian", "The law served as a guardian to lead us to Christ so that we might be justified by faith."],
    "Galatians 3:26": ["Children of God Through Faith", "All who believe in Christ Jesus are children of God through faith."],
    "Galatians 3:28": ["Unity in Christ", "There is neither Jew nor Greek, slave nor free, male nor female, for all are one in Christ Jesus."],
    "Galatians 3:29": ["Heirs According to Promise", "If you belong to Christ, then you are Abraham’s offspring and heirs according to the promise."],

    "Galatians 4:1": ["Heirs as Children", "Paul explains that an heir, while still a child, is no different from a servant though he is owner of everything."],
    "Galatians 4:2": ["Under Guardians", "The child remains under guardians and managers until the time set by the father."],
    "Galatians 4:3": ["Bondage Under the World", "In the same way, before faith came, people were enslaved under the basic principles of the world."],
    "Galatians 4:4": ["God Sends His Son", "When the fullness of time came, God sent His Son, born of a woman and born under the law."],
    "Galatians 4:5": ["Adoption as Sons", "Christ came to redeem those under the law so that we might receive adoption as sons."],
    "Galatians 4:6": ["Spirit of the Son", "Because we are sons, God sent the Spirit of His Son into our hearts, crying 'Abba, Father.'"],
    "Galatians 4:7": ["No Longer a Slave", "Therefore you are no longer a slave but a son, and if a son then an heir through God."],
    "Galatians 4:8": ["Former Bondage", "Before knowing God, the Galatians were enslaved to those who by nature are not gods."],
    "Galatians 4:9": ["Turning Back", "Paul questions why they are turning back to weak and worthless principles."],
    "Galatians 4:10": ["Observing Special Days", "They observe days, months, seasons, and years, and Paul fears his labor for them may have been in vain."],
    "Galatians 4:12": ["Appeal to the Galatians", "Paul urges them to become like him, reminding them they once welcomed him warmly."],
    "Galatians 4:15": ["Former Love for Paul", "They were once so devoted that they would have given their own eyes to him."],
    "Galatians 4:17": ["False Teachers’ Motives", "False teachers eagerly seek the Galatians but for selfish motives, wanting to exclude them."],
    "Galatians 4:19": ["Christ Formed in You", "Paul expresses deep concern for them until Christ is formed in them."],
    "Galatians 4:21": ["Allegory of Hagar and Sarah", "Paul begins explaining the story of Hagar and Sarah as an illustration."],
    "Galatians 4:24": ["Two Covenants", "Hagar represents the covenant from Mount Sinai that leads to slavery, while Sarah represents freedom."],
    "Galatians 4:28": ["Children of Promise", "Believers, like Isaac, are children of promise."],
    "Galatians 4:31": ["Children of the Free Woman", "Therefore believers are not children of the slave woman but of the free woman."],

    "Galatians 5:1": ["Stand Firm in Freedom", "Christ has set us free for freedom; therefore stand firm and do not submit again to a yoke of slavery."],
    "Galatians 5:2": ["Circumcision and the Law", "If you accept circumcision as required for salvation, Christ will be of no benefit to you."],
    "Galatians 5:4": ["Fallen from Grace", "Those who seek justification by the law have been severed from Christ and fallen away from grace."],
    "Galatians 5:5": ["Hope Through the Spirit", "Through the Spirit, by faith, believers eagerly wait for the hope of righteousness."],
    "Galatians 5:6": ["Faith Working Through Love", "In Christ Jesus neither circumcision nor uncircumcision counts for anything, but only faith working through love."],
    "Galatians 5:7": ["Hindered in Obedience", "Paul asks who hindered them from obeying the truth."],
    "Galatians 5:9": ["Little Leaven Spreads", "A little leaven leavens the whole lump, warning about the influence of false teaching."],
    "Galatians 5:13": ["Freedom to Serve", "Believers are called to freedom, but not to use freedom as an opportunity for the flesh, rather to serve one another in love."],
    "Galatians 5:14": ["Law Fulfilled in Love", "The entire law is fulfilled in one command: love your neighbor as yourself."],
    "Galatians 5:16": ["Walk by the Spirit", "Walk by the Spirit and you will not gratify the desires of the flesh."],
    "Galatians 5:19": ["Works of the Flesh", "Paul lists the works of the flesh such as sexual immorality, idolatry, hatred, jealousy, drunkenness, and similar sins."],
    "Galatians 5:22": ["Fruit of the Spirit", "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."],
    "Galatians 5:24": ["Crucified the Flesh", "Those who belong to Christ Jesus have crucified the flesh with its passions and desires."],
    "Galatians 5:25": ["Keep in Step with the Spirit", "If we live by the Spirit, we should also keep in step with the Spirit."],
    "Galatians 5:26": ["Avoid Pride and Envy", "Let us not become conceited, provoking one another or envying one another."],

    "Galatians 6:1": ["Restore the One Who Falls", "If someone is caught in a sin, those who are spiritual should restore them gently while watching themselves."],
    "Galatians 6:2": ["Bear One Another’s Burdens", "Carry each other’s burdens, and in this way you fulfill the law of Christ."],
    "Galatians 6:3": ["Humility Required", "If anyone thinks they are something when they are nothing, they deceive themselves."],
    "Galatians 6:4": ["Examine Your Own Work", "Each person should test their own actions and not compare themselves with others."],
    "Galatians 6:5": ["Carry Your Own Load", "Everyone must carry their own responsibility before God."],
    "Galatians 6:6": ["Share with Teachers", "Those who receive instruction in the word should share all good things with their teacher."],
    "Galatians 6:7": ["Law of Sowing and Reaping", "Do not be deceived: God is not mocked; a person reaps what they sow."],
    "Galatians 6:8": ["Sowing to the Spirit", "Whoever sows to please the flesh will reap destruction, but whoever sows to the Spirit will reap eternal life."],
    "Galatians 6:9": ["Do Not Grow Weary", "Let us not grow weary in doing good, for at the proper time we will reap if we do not give up."],
    "Galatians 6:10": ["Do Good to Everyone", "As we have opportunity, let us do good to all people, especially to those who belong to the family of believers."],
    "Galatians 6:12": ["Boasting in the Flesh", "Some compel circumcision to avoid persecution and boast in the flesh."],
    "Galatians 6:14": ["Boast Only in the Cross", "Paul declares he will boast only in the cross of our Lord Jesus Christ."],
    "Galatians 6:15": ["New Creation", "Neither circumcision nor uncircumcision means anything; what counts is a new creation."],
    "Galatians 6:18": ["Final Blessing", "Paul closes by blessing the believers with the grace of the Lord Jesus Christ."],

    "Ephesians 1:1": ["Paul Greets the Saints", "Paul, an apostle of Christ Jesus by the will of God, writes to the saints in Ephesus who are faithful in Christ."],
    "Ephesians 1:3": ["Spiritual Blessings in Christ", "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ."],
    "Ephesians 1:4": ["Chosen Before Creation", "God chose believers in Christ before the foundation of the world to be holy and blameless before Him."],
    "Ephesians 1:5": ["Adopted as Children", "In love, God predestined us for adoption to Himself through Jesus Christ according to His will."],
    "Ephesians 1:7": ["Redemption Through Christ", "In Christ we have redemption through His blood and the forgiveness of sins according to the riches of His grace."],
    "Ephesians 1:9": ["Mystery of God’s Will", "God made known the mystery of His will to unite all things in Christ."],
    "Ephesians 1:11": ["Inheritance in Christ", "In Christ we have obtained an inheritance, having been predestined according to God’s purpose."],
    "Ephesians 1:13": ["Sealed with the Holy Spirit", "After hearing and believing the gospel, believers are sealed with the promised Holy Spirit."],
    "Ephesians 1:15": ["Paul’s Thanksgiving", "Paul thanks God for their faith in the Lord Jesus and love for all the saints."],
    "Ephesians 1:17": ["Prayer for Wisdom", "Paul prays that God will give them the Spirit of wisdom and revelation in the knowledge of Him."],
    "Ephesians 1:18": ["Eyes of the Heart Enlightened", "Paul prays that they may know the hope of God’s calling and the riches of His inheritance."],
    "Ephesians 1:20": ["Christ Raised and Exalted", "God raised Christ from the dead and seated Him at His right hand in the heavenly places."],
    "Ephesians 1:22": ["Christ Head of the Church", "God placed all things under Christ’s feet and made Him head over all things for the church."],
    "Ephesians 1:23": ["The Church as His Body", "The church is the body of Christ, the fullness of Him who fills everything in every way."],

    "Ephesians 2:1": ["Dead in Sin", "Paul reminds believers that they were once dead in their trespasses and sins."],
    "Ephesians 2:2": ["Following the World", "They once walked according to the ways of this world and the ruler of the power of the air."],
    "Ephesians 2:4": ["God’s Rich Mercy", "But God, being rich in mercy because of His great love, acted to save them."],
    "Ephesians 2:5": ["Made Alive with Christ", "Even when we were dead in sins, God made us alive together with Christ by grace."],
    "Ephesians 2:6": ["Raised and Seated with Christ", "God raised believers up with Christ and seated them with Him in the heavenly places."],
    "Ephesians 2:8": ["Saved by Grace Through Faith", "For by grace you have been saved through faith, and this is not from yourselves; it is the gift of God."],
    "Ephesians 2:10": ["Created for Good Works", "Believers are God’s workmanship, created in Christ Jesus for good works prepared beforehand."],
    "Ephesians 2:11": ["Gentiles Once Far Away", "Paul reminds Gentile believers that they were once separate from Christ and strangers to the covenants."],
    "Ephesians 2:13": ["Brought Near by Christ", "But now in Christ Jesus, those who were far away have been brought near by the blood of Christ."],
    "Ephesians 2:14": ["Christ Our Peace", "Christ is our peace, making both Jews and Gentiles one and breaking down the dividing wall."],
    "Ephesians 2:16": ["Reconciled to God", "Through the cross, Christ reconciled both groups to God in one body."],
    "Ephesians 2:19": ["Members of God’s Household", "Believers are no longer strangers but fellow citizens with God’s people and members of His household."],
    "Ephesians 2:20": ["Built on the Apostles and Prophets", "The church is built on the foundation of the apostles and prophets, with Christ as the cornerstone."],
    "Ephesians 2:22": ["A Dwelling for God", "In Christ the whole building grows into a holy temple where God dwells by His Spirit."],

    "Ephesians 3:1": ["Paul the Prisoner of Christ", "Paul describes himself as a prisoner of Christ Jesus for the sake of the Gentiles."],
    "Ephesians 3:2": ["Stewardship of God’s Grace", "Paul explains that the grace of God was given to him to serve the Gentiles."],
    "Ephesians 3:3": ["Mystery Revealed", "The mystery of Christ was made known to Paul by revelation."],
    "Ephesians 3:5": ["Revealed to Apostles and Prophets", "This mystery was not known in earlier generations but is now revealed by the Spirit."],
    "Ephesians 3:6": ["Gentiles Included", "The mystery is that Gentiles are fellow heirs, members of the same body, and sharers in the promise in Christ."],
    "Ephesians 3:7": ["Servant of the Gospel", "Paul became a servant of the gospel by the gift of God’s grace working through him."],
    "Ephesians 3:8": ["Preaching to the Gentiles", "Paul was given the grace to preach the unsearchable riches of Christ to the Gentiles."],
    "Ephesians 3:10": ["God’s Wisdom Displayed", "Through the church, the manifold wisdom of God is made known to rulers and authorities in heavenly places."],
    "Ephesians 3:12": ["Bold Access to God", "Through Christ we have boldness and confident access to God through faith."],
    "Ephesians 3:14": ["Paul’s Prayer", "Paul bows his knees before the Father and prays for the believers."],
    "Ephesians 3:16": ["Strengthened by the Spirit", "Paul prays that they may be strengthened with power through God’s Spirit in their inner being."],
    "Ephesians 3:17": ["Christ Dwelling in Hearts", "Christ may dwell in their hearts through faith as they are rooted and grounded in love."],
    "Ephesians 3:18": ["Understanding Christ’s Love", "Paul prays that they may comprehend the breadth, length, height, and depth of Christ’s love."],
    "Ephesians 3:19": ["Filled with God’s Fullness", "Believers may know Christ’s love and be filled with all the fullness of God."],
    "Ephesians 3:20": ["God Able to Do More", "God is able to do far more abundantly than all we ask or think according to His power at work in us."],
    "Ephesians 3:21": ["Glory to God", "To Him be glory in the church and in Christ Jesus throughout all generations forever."],

    "Ephesians 4:1": ["Walk Worthy of the Calling", "Paul urges believers to live a life worthy of the calling they have received."],
    "Ephesians 4:2": ["Unity in Humility and Love", "Believers should walk with humility, gentleness, patience, and bear with one another in love."],
    "Ephesians 4:3": ["Maintain Unity", "Make every effort to keep the unity of the Spirit through the bond of peace."],
    "Ephesians 4:4": ["One Body and One Spirit", "There is one body and one Spirit, just as believers are called to one hope."],
    "Ephesians 4:5": ["One Lord, One Faith", "There is one Lord, one faith, and one baptism."],
    "Ephesians 4:6": ["One God and Father", "There is one God and Father of all, who is over all, through all, and in all."],
    "Ephesians 4:7": ["Grace Given to Each", "Grace has been given to each believer according to the measure of Christ’s gift."],
    "Ephesians 4:11": ["Gifts for the Church", "Christ gave apostles, prophets, evangelists, pastors, and teachers to equip the saints."],
    "Ephesians 4:12": ["Equipping for Ministry", "These gifts prepare believers for works of service and for building up the body of Christ."],
    "Ephesians 4:13": ["Unity and Maturity", "The goal is unity in faith and maturity in Christ."],
    "Ephesians 4:14": ["Not Children in Faith", "Believers should no longer be like children tossed by every false teaching."],
    "Ephesians 4:15": ["Speaking Truth in Love", "Instead, believers should speak the truth in love and grow into Christ."],
    "Ephesians 4:17": ["Put Off the Old Life", "Believers should no longer live as the Gentiles do in the futility of their thinking."],
    "Ephesians 4:22": ["Put Off the Old Self", "Put off the old self, which is corrupted by deceitful desires."],
    "Ephesians 4:23": ["Renew the Mind", "Be renewed in the spirit of your mind."],
    "Ephesians 4:24": ["Put On the New Self", "Put on the new self, created to be like God in righteousness and holiness."],
    "Ephesians 4:25": ["Speak Truth", "Put away falsehood and speak truth with your neighbor."],
    "Ephesians 4:26": ["Do Not Sin in Anger", "Be angry but do not sin, and do not let the sun go down on your anger."],
    "Ephesians 4:28": ["Work Honestly", "Let the one who steals steal no more, but work honestly to share with others."],
    "Ephesians 4:29": ["Speak Words that Build Up", "Do not let corrupt talk come out of your mouth, but only what builds others up."],
    "Ephesians 4:31": ["Remove Bitterness", "Get rid of bitterness, rage, anger, slander, and malice."],
    "Ephesians 4:32": ["Be Kind and Forgiving", "Be kind and compassionate, forgiving one another as God forgave you in Christ."],

    "Ephesians 5:1": ["Imitate God", "Believers are called to imitate God as beloved children and walk in love just as Christ loved us."],
    "Ephesians 5:3": ["Avoid Impurity", "Sexual immorality, impurity, and greed should not even be named among believers."],
    "Ephesians 5:4": ["Speech that Honors God", "Filthiness, foolish talk, and crude joking should be replaced with thanksgiving."],
    "Ephesians 5:5": ["Warning About Sin", "Those who persist in sexual immorality, impurity, or greed have no inheritance in the kingdom of Christ and God."],
    "Ephesians 5:8": ["Children of Light", "Once believers were darkness, but now they are light in the Lord and must live as children of light."],
    "Ephesians 5:10": ["Discern What Pleases God", "Believers should seek to understand what is pleasing to the Lord."],
    "Ephesians 5:11": ["Expose Works of Darkness", "Have nothing to do with the fruitless deeds of darkness but rather expose them."],
    "Ephesians 5:15": ["Walk Wisely", "Believers must walk carefully, not as unwise but as wise."],
    "Ephesians 5:16": ["Make the Most of Time", "Redeem the time because the days are evil."],
    "Ephesians 5:18": ["Filled with the Spirit", "Do not be drunk with wine but be filled with the Spirit."],
    "Ephesians 5:19": ["Worship Together", "Speak to one another with psalms, hymns, and spiritual songs, singing to the Lord."],
    "Ephesians 5:21": ["Submit to One Another", "Submit to one another out of reverence for Christ."],
    "Ephesians 5:22": ["Wives and Husbands", "Wives are instructed to submit to their husbands as to the Lord."],
    "Ephesians 5:25": ["Husbands Love Their Wives", "Husbands are commanded to love their wives just as Christ loved the church and gave Himself for her."],
    "Ephesians 5:31": ["Marriage as One Flesh", "A man shall leave his father and mother and be united to his wife, and the two will become one flesh."],
    "Ephesians 5:32": ["Mystery of Christ and the Church", "Marriage reflects the mystery of Christ’s relationship with the church."],
    "Ephesians 5:33": ["Respect and Love", "Each husband must love his wife, and each wife must respect her husband."],

    "Ephesians 6:1": ["Children Obey Parents", "Children are instructed to obey their parents in the Lord, for this is right."],
    "Ephesians 6:2": ["Honor Father and Mother", "Paul reminds them of the commandment to honor father and mother, which carries a promise."],
    "Ephesians 6:4": ["Fathers Instruct Children", "Fathers are told not to provoke their children to anger but to raise them with discipline and instruction from the Lord."],
    "Ephesians 6:5": ["Servants Obey Masters", "Servants are instructed to obey their earthly masters with respect and sincerity as they would obey Christ."],
    "Ephesians 6:6": ["Serve as Serving Christ", "They should not serve only to please people but as servants of Christ, doing God’s will from the heart."],
    "Ephesians 6:7": ["Work Wholeheartedly", "Serve wholeheartedly as if serving the Lord rather than people."],
    "Ephesians 6:8": ["Reward from the Lord", "Whatever good anyone does, they will receive from the Lord whether they are slave or free."],
    "Ephesians 6:9": ["Masters Treat Servants Fairly", "Masters are instructed to treat their servants well and stop threatening them, remembering they have the same Master in heaven."],
    "Ephesians 6:10": ["Be Strong in the Lord", "Believers are encouraged to be strong in the Lord and in the strength of His power."],
    "Ephesians 6:11": ["Put On the Armor of God", "They are told to put on the full armor of God so they can stand against the schemes of the devil."],
    "Ephesians 6:12": ["Spiritual Battle", "The struggle is not against flesh and blood but against spiritual forces of evil."],
    "Ephesians 6:13": ["Stand Firm", "Believers must take up the full armor of God to stand firm in the day of evil."],
    "Ephesians 6:14": ["Belt of Truth", "Stand firm with the belt of truth fastened around your waist."],
    "Ephesians 6:15": ["Gospel of Peace", "Feet fitted with readiness that comes from the gospel of peace."],
    "Ephesians 6:16": ["Shield of Faith", "Take up the shield of faith to extinguish the flaming arrows of the evil one."],
    "Ephesians 6:17": ["Helmet and Sword", "Wear the helmet of salvation and take the sword of the Spirit, which is the word of God."],
    "Ephesians 6:18": ["Prayer in the Spirit", "Pray at all times in the Spirit with all kinds of prayers and requests."],
    "Ephesians 6:21": ["Tychicus Sent", "Paul sends Tychicus to inform the believers about his situation and encourage them."],
    "Ephesians 6:23": ["Final Blessing", "Paul closes with a blessing of peace, love with faith, and grace for all who love the Lord Jesus."],

    "Philippians 1:1": ["Greeting to the Church", "Paul and Timothy greet all the saints in Christ Jesus at Philippi, including the overseers and deacons."],
    "Philippians 1:3": ["Thanksgiving for the Philippians", "Paul thanks God every time he remembers them."],
    "Philippians 1:5": ["Partnership in the Gospel", "He rejoices because of their partnership in the gospel from the first day until now."],
    "Philippians 1:6": ["Confidence in God’s Work", "Paul is confident that God who began a good work in them will carry it to completion."],
    "Philippians 1:9": ["Prayer for Love and Discernment", "Paul prays that their love may abound more and more with knowledge and discernment."],
    "Philippians 1:12": ["Gospel Advances Through Trials", "Paul explains that his imprisonment has actually helped advance the gospel."],
    "Philippians 1:14": ["Believers Gain Courage", "Many believers become more confident in the Lord and preach the word more boldly."],
    "Philippians 1:15": ["Different Motives for Preaching", "Some preach Christ out of envy and rivalry, while others preach out of goodwill."],
    "Philippians 1:18": ["Christ Is Proclaimed", "Regardless of motives, Paul rejoices that Christ is being proclaimed."],
    "Philippians 1:21": ["To Live Is Christ", "Paul declares that for him to live is Christ and to die is gain."],
    "Philippians 1:23": ["Desire to Be with Christ", "Paul desires to depart and be with Christ, which is far better."],
    "Philippians 1:24": ["Remain for the Church", "Yet he recognizes it is more necessary for him to remain for their progress and joy in faith."],
    "Philippians 1:27": ["Live Worthy of the Gospel", "Paul urges them to conduct themselves in a manner worthy of the gospel of Christ."],
    "Philippians 1:29": ["Suffering for Christ", "Believers are granted not only to believe in Christ but also to suffer for His sake."],

    "Philippians 2:1": ["Unity in Christ", "Paul urges believers to be united in spirit, love, and purpose because of their encouragement in Christ."],
    "Philippians 2:3": ["Humility Toward Others", "Do nothing out of selfish ambition or vain conceit, but consider others more important than yourselves."],
    "Philippians 2:4": ["Care for Others", "Look not only to your own interests but also to the interests of others."],
    "Philippians 2:5": ["Mind of Christ", "Believers are called to have the same mindset as Christ Jesus."],
    "Philippians 2:6": ["Christ’s Humility", "Though He was in the form of God, Jesus did not cling to His equality with God."],
    "Philippians 2:7": ["Servant Form", "Christ emptied Himself, taking the form of a servant and being born in human likeness."],
    "Philippians 2:8": ["Obedience to Death", "Jesus humbled Himself by becoming obedient to death, even death on a cross."],
    "Philippians 2:9": ["God Exalts Christ", "Because of His obedience, God highly exalted Him and gave Him the name above every name."],
    "Philippians 2:10": ["Every Knee Shall Bow", "At the name of Jesus every knee should bow in heaven, on earth, and under the earth."],
    "Philippians 2:11": ["Jesus Is Lord", "Every tongue will confess that Jesus Christ is Lord, to the glory of God the Father."],
    "Philippians 2:12": ["Work Out Your Salvation", "Believers are encouraged to work out their salvation with fear and trembling."],
    "Philippians 2:13": ["God Works Within", "God works in believers to will and to act according to His good purpose."],
    "Philippians 2:14": ["Do Everything Without Complaining", "Believers should do everything without grumbling or arguing."],
    "Philippians 2:15": ["Shine as Lights", "By living blamelessly, believers shine like stars in a crooked generation."],
    "Philippians 2:19": ["Timothy’s Example", "Paul hopes to send Timothy soon, praising his genuine concern for others."],
    "Philippians 2:25": ["Epaphroditus Honored", "Paul also sends Epaphroditus, a faithful worker who nearly died for the work of Christ."],

    "Philippians 3:1": ["Rejoice in the Lord", "Paul tells the believers to rejoice in the Lord and reminds them that repeating these instructions keeps them safe."],
    "Philippians 3:2": ["Warning Against False Teachers", "Paul warns them to watch out for those who promote circumcision and rely on the flesh."],
    "Philippians 3:3": ["True Circumcision", "True believers worship by the Spirit of God, glory in Christ Jesus, and put no confidence in the flesh."],
    "Philippians 3:4": ["Paul’s Former Confidence", "Paul explains that if anyone could trust in the flesh, he had more reasons."],
    "Philippians 3:5": ["Paul’s Jewish Credentials", "He lists his background: circumcised on the eighth day, of Israel, of the tribe of Benjamin, a Hebrew of Hebrews."],
    "Philippians 3:7": ["Loss for Christ", "Whatever gains Paul had, he now considers loss for the sake of Christ."],
    "Philippians 3:8": ["Knowing Christ", "Paul considers everything a loss compared to the surpassing value of knowing Christ Jesus."],
    "Philippians 3:9": ["Righteousness Through Faith", "True righteousness comes through faith in Christ, not through the law."],
    "Philippians 3:10": ["Knowing Christ’s Power", "Paul desires to know Christ, the power of His resurrection, and share in His sufferings."],
    "Philippians 3:12": ["Pressing Toward the Goal", "Paul admits he has not yet attained perfection but presses on to take hold of what Christ has for him."],
    "Philippians 3:13": ["Forgetting the Past", "Paul forgets what lies behind and strains forward to what lies ahead."],
    "Philippians 3:14": ["Goal of the Heavenly Prize", "He presses on toward the goal to win the prize of God’s heavenly call in Christ Jesus."],
    "Philippians 3:17": ["Follow Godly Examples", "Believers are encouraged to follow Paul’s example and observe those who live according to the gospel."],
    "Philippians 3:18": ["Enemies of the Cross", "Some live as enemies of the cross, focusing on earthly things."],
    "Philippians 3:20": ["Citizens of Heaven", "Believers’ citizenship is in heaven, and they eagerly await the Savior from there."],
    "Philippians 3:21": ["Transformation of the Body", "Christ will transform our lowly body to be like His glorious body by His power."],

    "Philippians 4:1": ["Stand Firm in the Lord", "Paul urges the believers, whom he loves and longs for, to stand firm in the Lord."],
    "Philippians 4:2": ["Appeal for Unity", "Paul asks Euodia and Syntyche to agree with each other in the Lord."],
    "Philippians 4:3": ["Help These Women", "Paul asks a faithful companion to help these women who labored with him in the gospel."],
    "Philippians 4:4": ["Rejoice Always", "Believers are instructed to rejoice in the Lord always."],
    "Philippians 4:5": ["Gentleness to Everyone", "Let your gentleness be known to everyone; the Lord is near."],
    "Philippians 4:6": ["Do Not Be Anxious", "Do not worry about anything, but in everything present your requests to God through prayer and thanksgiving."],
    "Philippians 4:7": ["Peace of God", "The peace of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus."],
    "Philippians 4:8": ["Think on Good Things", "Focus your thoughts on whatever is true, noble, right, pure, lovely, admirable, excellent, and praiseworthy."],
    "Philippians 4:9": ["Practice What You Learned", "Practice what you have learned and received, and the God of peace will be with you."],
    "Philippians 4:10": ["Paul’s Joy in Their Support", "Paul rejoices that the Philippians renewed their concern and support for him."],
    "Philippians 4:11": ["Content in All Circumstances", "Paul has learned to be content in whatever situation he is in."],
    "Philippians 4:12": ["Secret of Contentment", "He knows how to live in abundance and in need."],
    "Philippians 4:13": ["Strength Through Christ", "Paul can do all things through Christ who strengthens him."],
    "Philippians 4:15": ["Philippians’ Generosity", "The Philippian church supported Paul financially even when others did not."],
    "Philippians 4:17": ["Fruit That Increases", "Their giving is credited to their account as spiritual fruit."],
    "Philippians 4:18": ["Pleasant Offering", "Their gifts are a fragrant offering, pleasing and acceptable to God."],
    "Philippians 4:19": ["God Will Provide", "God will supply all their needs according to His riches in glory in Christ Jesus."],
    "Philippians 4:21": ["Final Greetings", "Paul sends greetings to all the saints, especially those in Caesar’s household."],
    "Philippians 4:23": ["Final Blessing", "Paul closes with grace from the Lord Jesus Christ."],

    "Colossians 1:1": ["Greeting to the Church", "Paul and Timothy greet the believers in Colossae who are faithful in Christ."],
    "Colossians 1:3": ["Thanksgiving for the Believers", "Paul thanks God when he prays for the believers because of their faith in Christ and love for all the saints."],
    "Colossians 1:5": ["Hope in the Gospel", "Their faith and love spring from the hope stored up for them in heaven, which they heard through the gospel."],
    "Colossians 1:6": ["Gospel Bearing Fruit", "The gospel is bearing fruit and growing throughout the world just as it is among them."],
    "Colossians 1:9": ["Prayer for Spiritual Wisdom", "Paul prays that they may be filled with the knowledge of God’s will through wisdom and spiritual understanding."],
    "Colossians 1:10": ["Living Worthy of the Lord", "Believers should live in a way worthy of the Lord, pleasing Him in every good work."],
    "Colossians 1:12": ["Thankful for Redemption", "Give thanks to the Father who qualified believers to share in the inheritance of the saints."],
    "Colossians 1:13": ["Rescued from Darkness", "God rescued believers from the dominion of darkness and brought them into the kingdom of His Son."],
    "Colossians 1:14": ["Redemption in Christ", "In Christ we have redemption and the forgiveness of sins."],
    "Colossians 1:15": ["Christ the Image of God", "Christ is the image of the invisible God and the firstborn over all creation."],
    "Colossians 1:16": ["Creator of All Things", "All things in heaven and earth were created through Him and for Him."],
    "Colossians 1:17": ["Christ Sustains Creation", "Christ is before all things, and in Him all things hold together."],
    "Colossians 1:18": ["Head of the Church", "Christ is the head of the body, the church, and the beginning, the firstborn from the dead."],
    "Colossians 1:19": ["Fullness of God in Christ", "God was pleased to have all His fullness dwell in Christ."],
    "Colossians 1:20": ["Reconciliation Through the Cross", "Through Christ, God reconciles all things to Himself, making peace through His blood on the cross."],
    "Colossians 1:21": ["Formerly Alienated", "Believers were once alienated from God and enemies in their minds because of evil behavior."],
    "Colossians 1:22": ["Reconciled to God", "Christ reconciled them through His physical body to present them holy and blameless."],
    "Colossians 1:23": ["Continue in the Faith", "Believers must continue in the faith, firm and established in the gospel."],
    "Colossians 1:24": ["Paul’s Suffering for the Church", "Paul rejoices in his sufferings for the sake of Christ’s body, the church."],
    "Colossians 1:25": ["Servant of the Church", "Paul became a servant of the church according to God’s commission."],
    "Colossians 1:26": ["Mystery Now Revealed", "The mystery hidden for ages is now revealed to God’s people."],
    "Colossians 1:27": ["Christ in You", "This mystery is Christ in you, the hope of glory."],
    "Colossians 1:28": ["Proclaiming Christ", "Paul proclaims Christ, teaching and warning everyone to present them mature in Him."],
    "Colossians 1:29": ["Laboring with God’s Power", "Paul works and struggles with God’s power that works powerfully in him."],

    "Colossians 2:1": ["Paul’s Concern for the Churches", "Paul expresses his deep concern for the believers in Colossae and Laodicea and for others who have not met him."],
    "Colossians 2:2": ["Encouragement and Unity", "He desires that their hearts be encouraged and united in love so they may have full understanding of Christ."],
    "Colossians 2:3": ["Treasures in Christ", "In Christ are hidden all the treasures of wisdom and knowledge."],
    "Colossians 2:4": ["Warning Against Deception", "Paul warns them not to be deceived by persuasive arguments."],
    "Colossians 2:6": ["Continue in Christ", "As they received Christ Jesus as Lord, they should continue to live in Him."],
    "Colossians 2:7": ["Rooted and Built Up", "Believers should be rooted and built up in Christ, strengthened in faith, and overflowing with thankfulness."],
    "Colossians 2:8": ["Avoid Human Philosophy", "Be careful that no one takes you captive through hollow philosophy and human traditions instead of Christ."],
    "Colossians 2:9": ["Fullness of God in Christ", "In Christ the fullness of the Deity lives in bodily form."],
    "Colossians 2:10": ["Complete in Christ", "Believers have been brought to fullness in Christ, who is the head over every power and authority."],
    "Colossians 2:12": ["Buried and Raised with Christ", "Through baptism believers were buried with Christ and raised with Him through faith in God’s power."],
    "Colossians 2:13": ["Forgiveness of Sins", "God made believers alive with Christ and forgave all their sins."],
    "Colossians 2:14": ["Debt Cancelled", "Christ cancelled the written code with its charges and nailed it to the cross."],
    "Colossians 2:15": ["Victory Over Powers", "Through the cross Christ disarmed rulers and authorities and triumphed over them."],
    "Colossians 2:16": ["Do Not Be Judged", "Believers should not let anyone judge them regarding food, festivals, or Sabbath days."],
    "Colossians 2:18": ["Reject False Humility", "Do not let anyone disqualify you through false humility or the worship of angels."],
    "Colossians 2:20": ["Freedom from Human Rules", "Since believers died with Christ to worldly principles, they should not submit to human regulations."],
    "Colossians 2:23": ["Limits of Human Traditions", "Such rules appear wise but lack true power to restrain sinful desires."],

    "Colossians 3:1": ["Seek Things Above", "Since believers have been raised with Christ, they should seek the things above where Christ is seated."],
    "Colossians 3:2": ["Set Minds on Heavenly Things", "Set your minds on things above, not on earthly things."],
    "Colossians 3:3": ["Hidden Life in Christ", "Believers have died, and their life is now hidden with Christ in God."],
    "Colossians 3:4": ["Future Glory with Christ", "When Christ appears, believers will also appear with Him in glory."],
    "Colossians 3:5": ["Put Sin to Death", "Believers must put to death earthly sins such as immorality, impurity, passion, evil desire, and greed."],
    "Colossians 3:8": ["Remove Old Behaviors", "Anger, rage, malice, slander, and filthy language must be removed from believers’ lives."],
    "Colossians 3:9": ["Put Off the Old Self", "Believers should not lie to one another since they have taken off the old self."],
    "Colossians 3:10": ["Put On the New Self", "They have put on the new self which is being renewed in knowledge according to the image of its Creator."],
    "Colossians 3:11": ["Unity in Christ", "In Christ there is no Greek or Jew, slave or free, but Christ is all and in all."],
    "Colossians 3:12": ["Clothe Yourselves with Virtues", "Believers should clothe themselves with compassion, kindness, humility, gentleness, and patience."],
    "Colossians 3:13": ["Forgive One Another", "Bear with each other and forgive one another as the Lord forgave you."],
    "Colossians 3:14": ["Love Above All", "Above all virtues, believers must put on love which binds everything together in unity."],
    "Colossians 3:15": ["Peace of Christ Rule", "Let the peace of Christ rule in your hearts and be thankful."],
    "Colossians 3:16": ["Word of Christ Dwell Richly", "Let the message of Christ dwell among you richly as you teach and encourage one another."],
    "Colossians 3:17": ["Do Everything for the Lord", "Whatever you do in word or deed, do it all in the name of the Lord Jesus."],
    "Colossians 3:18": ["Wives and Husbands", "Wives should submit to their husbands, and husbands must love their wives."],
    "Colossians 3:20": ["Children and Parents", "Children should obey their parents, and fathers should not discourage their children."],
    "Colossians 3:22": ["Servants Serve Sincerely", "Servants should obey their masters sincerely as if serving the Lord."],
    "Colossians 3:23": ["Work for the Lord", "Whatever work you do, do it wholeheartedly as working for the Lord."],
    "Colossians 3:25": ["God Shows No Favoritism", "Anyone who does wrong will be repaid, for God shows no favoritism."],

    "Colossians 4:1": ["Masters Treat Servants Fairly", "Masters are instructed to provide what is right and fair, remembering they also have a Master in heaven."],
    "Colossians 4:2": ["Devote Yourselves to Prayer", "Believers are encouraged to continue steadfastly in prayer with watchfulness and thanksgiving."],
    "Colossians 4:3": ["Prayer for the Gospel", "Paul asks them to pray that God may open a door for the message so he can proclaim the mystery of Christ."],
    "Colossians 4:5": ["Wisdom Toward Outsiders", "Believers should act wisely toward outsiders, making the most of every opportunity."],
    "Colossians 4:6": ["Grace-Filled Speech", "Speech should always be gracious and seasoned with salt so they may know how to answer everyone."],
    "Colossians 4:7": ["Tychicus Sent", "Tychicus will tell them all the news about Paul and encourage their hearts."],
    "Colossians 4:9": ["Onesimus with Tychicus", "Onesimus, a faithful and beloved brother, accompanies Tychicus and will inform them of everything."],
    "Colossians 4:10": ["Greetings from Fellow Workers", "Aristarchus, Mark, and Justus send greetings and are fellow workers for the kingdom of God."],
    "Colossians 4:12": ["Epaphras Prays for Them", "Epaphras, one of them, always wrestles in prayer that they may stand mature and fully assured in God’s will."],
    "Colossians 4:14": ["Greetings from Luke and Demas", "Luke the beloved physician and Demas send greetings."],
    "Colossians 4:15": ["Greetings to Laodicea", "Paul sends greetings to the believers in Laodicea and to Nympha and the church in her house."],
    "Colossians 4:16": ["Share the Letters", "The letter should be read in the church of the Laodiceans, and they should read the letter from Laodicea."],
    "Colossians 4:17": ["Encouragement to Archippus", "Archippus is reminded to complete the ministry he received in the Lord."],
    "Colossians 4:18": ["Final Greeting", "Paul closes the letter with his own greeting and asks them to remember his chains."],

    // 1 Thessalonians Chapter 1
    "1 Thessalonians 1:1": ["Greeting to the Church", "Paul, Silas, and Timothy greet the church in God the Father and the Lord Jesus Christ."],
    "1 Thessalonians 1:2": ["Thanksgiving for Their Faith", "Paul thanks God for their faith, love, and hope in Jesus."],
    "1 Thessalonians 1:4": ["Chosen by God", "Paul reminds them that they are loved and chosen by God."],
    "1 Thessalonians 1:5": ["Gospel Came with Power", "The gospel came not only in words but also with power and the Holy Spirit."],
    "1 Thessalonians 1:6": ["Imitators of Christ", "They became imitators of the Lord and received the word with joy despite suffering."],
    "1 Thessalonians 1:7": ["Examples to Other Believers", "They became an example to believers in Macedonia and Achaia."],
    "1 Thessalonians 1:8": ["Faith Known Everywhere", "Their faith in God became known everywhere."],
    "1 Thessalonians 1:9": ["Turned from Idols to God", "They turned from idols to serve the living and true God."],
    "1 Thessalonians 1:10": ["Waiting for Jesus’ Return", "They wait for God’s Son from heaven, who rescues from coming wrath."],

    // 1 Thessalonians Chapter 2
    "1 Thessalonians 2:1": ["Paul’s Ministry Was Not in Vain", "Paul reminds them his visit was meaningful and effective."],
    "1 Thessalonians 2:2": ["Boldness Despite Opposition", "Paul preached the gospel boldly even after suffering."],
    "1 Thessalonians 2:4": ["Approved by God", "Paul speaks to please God, not people."],
    "1 Thessalonians 2:7": ["Gentle Like a Nursing Mother", "Paul cared for them with gentleness and love."],
    "1 Thessalonians 2:9": ["Hard Work and Sacrifice", "Paul worked day and night to avoid being a burden."],
    "1 Thessalonians 2:11": ["Like a Father Encouraging Children", "Paul encouraged and comforted them to live worthy of God."],
    "1 Thessalonians 2:13": ["They Received God’s Word", "They accepted the message as God’s word, not human words."],
    "1 Thessalonians 2:14": ["Suffered for Their Faith", "They suffered persecution like other churches."],
    "1 Thessalonians 2:17": ["Paul Longs to See Them", "Paul deeply desires to visit them again."],
    "1 Thessalonians 2:19": ["Their Joy and Crown", "They are Paul’s hope, joy, and crown before Jesus."],

    // 1 Thessalonians Chapter 3
    "1 Thessalonians 3:1": ["Timothy Sent to Strengthen Them", "Paul sends Timothy to strengthen their faith."],
    "1 Thessalonians 3:3": ["Encouragement During Trials", "Believers are reminded that suffering is expected."],
    "1 Thessalonians 3:5": ["Concern for Their Faith", "Paul fears temptation may weaken them."],
    "1 Thessalonians 3:6": ["Timothy’s Good Report", "Timothy brings good news of their faith and love."],
    "1 Thessalonians 3:7": ["Comfort in Their Faith", "Paul is comforted by their strong faith."],
    "1 Thessalonians 3:9": ["Thankfulness to God", "Paul gives thanks for the joy they bring."],
    "1 Thessalonians 3:10": ["Prayer to See Them Again", "Paul prays to visit and strengthen them."],
    "1 Thessalonians 3:12": ["Prayer for Increasing Love", "Paul prays that their love will grow."],
    "1 Thessalonians 3:13": ["Blameless at Christ’s Coming", "Paul prays they will be holy when Jesus returns."],

    // 1 Thessalonians Chapter 4
    "1 Thessalonians 4:1": ["Living to Please God", "Paul urges them to live holy lives."],
    "1 Thessalonians 4:3": ["God’s Will Is Sanctification", "Believers must avoid sexual immorality."],
    "1 Thessalonians 4:9": ["Love One Another", "They are taught by God to love each other."],
    "1 Thessalonians 4:11": ["Live Quiet and Responsible Lives", "Work faithfully and live respectfully."],
    "1 Thessalonians 4:13": ["Hope for Believers Who Have Died", "Do not grieve without hope."],
    "1 Thessalonians 4:16": ["The Lord Will Return", "Jesus will descend from heaven with power."],
    "1 Thessalonians 4:17": ["Believers Will Meet the Lord", "Believers will be caught up to be with Jesus forever."],
    "1 Thessalonians 4:18": ["Encourage One Another", "Comfort each other with this hope."],

    // 1 Thessalonians Chapter 5
    "1 Thessalonians 5:1": ["The Day of the Lord Will Come Suddenly", "It will come unexpectedly like a thief."],
    "1 Thessalonians 5:4": ["Children of Light", "Believers must stay alert and sober."],
    "1 Thessalonians 5:8": ["Armor of Faith and Salvation", "Wear faith, love, and hope as protection."],
    "1 Thessalonians 5:9": ["Saved from Wrath", "God appointed believers for salvation through Jesus."],
    "1 Thessalonians 5:11": ["Encourage and Build Each Other", "Strengthen and support one another."],
    "1 Thessalonians 5:12": ["Respect Church Leaders", "Honor those who guide you."],
    "1 Thessalonians 5:16": ["Final Instructions for Christian Living", "Rejoice always, pray continually, give thanks."],
    "1 Thessalonians 5:19": ["Do Not Quench the Spirit", "Do not reject the work of the Holy Spirit."],
    "1 Thessalonians 5:23": ["Prayer for Sanctification", "May God sanctify you completely."],
    "1 Thessalonians 5:25": ["Final Greetings", "Paul asks for prayer and blesses them."],

    // 2 Thessalonians Chapter 1
    "2 Thessalonians 1:1": ["Greeting to the Church", "Paul, Silas, and Timothy greet the church."],
    "2 Thessalonians 1:3": ["Thanksgiving for Their Growing Faith", "Paul thanks God for their growing faith and love."],
    "2 Thessalonians 1:5": ["God’s Righteous Judgment", "Their suffering shows God’s righteous judgment."],
    "2 Thessalonians 1:6": ["God Will Repay Trouble", "God will bring justice to those who trouble believers."],
    "2 Thessalonians 1:7": ["Relief When Jesus Is Revealed", "Believers will receive relief when Jesus returns."],
    "2 Thessalonians 1:8": ["Judgment on Those Who Reject God", "Jesus will punish those who do not obey the gospel."],
    "2 Thessalonians 1:10": ["Jesus Will Be Glorified", "Jesus will be glorified among His people."],
    "2 Thessalonians 1:11": ["Prayer for Worthy Living", "Paul prays they will live worthy of God’s calling."],

    // 2 Thessalonians Chapter 2
    "2 Thessalonians 2:1": ["The Coming of the Lord Explained", "Paul explains events before Jesus’ return."],
    "2 Thessalonians 2:3": ["The Man of Lawlessness Revealed", "The rebellion and man of lawlessness must appear first."],
    "2 Thessalonians 2:6": ["Restraining Power", "Something is restraining him until the proper time."],
    "2 Thessalonians 2:8": ["Destruction of the Lawless One", "Jesus will destroy him at His coming."],
    "2 Thessalonians 2:9": ["Satan’s Deception", "The lawless one will use false signs and wonders."],
    "2 Thessalonians 2:13": ["Chosen for Salvation", "God chose believers for salvation through the Spirit."],
    "2 Thessalonians 2:15": ["Stand Firm in the Truth", "Hold firmly to the teachings given."],
    "2 Thessalonians 2:16": ["Prayer for Encouragement", "May Jesus encourage and strengthen you."],

    // 2 Thessalonians Chapter 3
    "2 Thessalonians 3:1": ["Request for Prayer", "Paul asks for prayer for the spread of the gospel."],
    "2 Thessalonians 3:3": ["God’s Faithfulness", "God will strengthen and protect believers."],
    "2 Thessalonians 3:6": ["Warning Against Idleness", "Believers must avoid lazy and undisciplined living."],
    "2 Thessalonians 3:7": ["Paul’s Example of Hard Work", "Paul worked hard to set an example."],
    "2 Thessalonians 3:10": ["Rule About Work", "Anyone unwilling to work should not eat."],
    "2 Thessalonians 3:13": ["Do Not Grow Weary", "Continue doing good."],
    "2 Thessalonians 3:14": ["Discipline for Disobedience", "Warn those who do not obey."],
    "2 Thessalonians 3:16": ["Final Blessing", "May the Lord of peace give peace always."],
    "2 Thessalonians 3:18": ["Closing Greeting", "Paul closes with grace from the Lord Jesus Christ."],

    // 1 Timothy Chapter 1
    "1 Timothy 1:1": ["Greeting to Timothy", "Paul greets Timothy as his true son in the faith."],
    "1 Timothy 1:3": ["Warning Against False Teachers", "Timothy is urged to stop those teaching false doctrines."],
    "1 Timothy 1:5": ["Purpose of the Command", "The goal is love from a pure heart, good conscience, and sincere faith."],
    "1 Timothy 1:8": ["Proper Use of the Law", "The law is good when used correctly."],
    "1 Timothy 1:12": ["Paul’s Gratitude for Mercy", "Paul thanks Christ for showing him mercy despite his past."],
    "1 Timothy 1:15": ["Christ Came to Save Sinners", "Jesus came into the world to save sinners."],
    "1 Timothy 1:18": ["Charge to Timothy", "Timothy is encouraged to fight the good fight of faith."],


    // 1 Timothy Chapter 2
    "1 Timothy 2:1": ["Instruction to Pray for Everyone", "Prayers should be made for all people, including leaders."],
    "1 Timothy 2:3": ["God Desires All to Be Saved", "God wants everyone to come to the knowledge of truth."],
    "1 Timothy 2:5": ["One Mediator Between God and Man", "Jesus Christ is the only mediator."],
    "1 Timothy 2:8": ["Instructions for Men", "Men should pray with holy hands without anger."],
    "1 Timothy 2:9": ["Instructions for Women", "Women should dress modestly and live with good works."],
    "1 Timothy 2:11": ["Quiet Learning and Submission", "Women are encouraged to learn quietly and faithfully."],


    // 1 Timothy Chapter 3
    "1 Timothy 3:1": ["Qualifications for Overseers", "Requirements for those who desire to be church leaders."],
    "1 Timothy 3:8": ["Qualifications for Deacons", "Requirements for those serving as deacons."],
    "1 Timothy 3:14": ["Purpose of Paul’s Instructions", "Paul writes so they will know how to behave in God’s house."],
    "1 Timothy 3:16": ["Mystery of Godliness", "Christ was revealed in flesh and glorified."],


    // 1 Timothy Chapter 4
    "1 Timothy 4:1": ["Warning About Apostasy", "Some will abandon the faith and follow false teachings."],
    "1 Timothy 4:6": ["Be a Good Minister of Christ", "Timothy is encouraged to teach truth faithfully."],
    "1 Timothy 4:8": ["Value of Godliness", "Godliness has value for this life and the life to come."],
    "1 Timothy 4:12": ["Be an Example", "Timothy should be an example in speech, conduct, love, faith, and purity."],
    "1 Timothy 4:13": ["Devotion to Scripture and Teaching", "Focus on reading Scripture and teaching."],
    "1 Timothy 4:16": ["Watch Your Life and Doctrine", "Persevere in faith and teaching."],


    // 1 Timothy Chapter 5
    "1 Timothy 5:1": ["Respect Within the Church", "Treat others with respect as family."],
    "1 Timothy 5:3": ["Care for Widows", "The church should honor and support true widows."],
    "1 Timothy 5:8": ["Responsibility for Family", "Those who do not care for family deny the faith."],
    "1 Timothy 5:17": ["Honor Church Leaders", "Leaders who serve well deserve honor."],
    "1 Timothy 5:19": ["Dealing with Accusations", "Do not accept accusations without witnesses."],
    "1 Timothy 5:22": ["Be Careful in Leadership Appointments", "Do not appoint leaders hastily."],
    "1 Timothy 5:23": ["Personal Advice to Timothy", "Paul gives advice for Timothy’s health."],
    "1 Timothy 5:24": ["Sins and Good Deeds Revealed", "Actions will eventually be revealed."],


    // 1 Timothy Chapter 6
    "1 Timothy 6:1": ["Honor Masters", "Servants should respect their masters."],
    "1 Timothy 6:3": ["Warning Against False Teaching and Pride", "False teachers are proud and cause conflict."],
    "1 Timothy 6:6": ["Godliness with Contentment", "Contentment with godliness is great gain."],
    "1 Timothy 6:9": ["Danger of Loving Money", "Love of money leads to destruction."],
    "1 Timothy 6:11": ["Pursue Righteousness", "Timothy should pursue godly qualities."],
    "1 Timothy 6:12": ["Fight the Good Fight of Faith", "Hold firmly to eternal life."],
    "1 Timothy 6:17": ["Instructions to the Rich", "The rich should trust God and do good."],
    "1 Timothy 6:20": ["Guard What Is Entrusted", "Protect the truth given to you."],


    // 2 Timothy Chapter 1
    "2 Timothy 1:1": ["Greeting to Timothy", "Paul greets Timothy with grace and peace."],
    "2 Timothy 1:3": ["Thanksgiving and Remembrance", "Paul remembers Timothy in prayer."],
    "2 Timothy 1:5": ["Reminder of Timothy’s Faith", "Timothy’s sincere faith is recognized."],
    "2 Timothy 1:6": ["Fan Into Flame God’s Gift", "Timothy is encouraged to use his spiritual gift."],
    "2 Timothy 1:7": ["Spirit of Power, Love, and Self-Control", "God gives courage, not fear."],
    "2 Timothy 1:8": ["Do Not Be Ashamed of the Gospel", "Be willing to suffer for the gospel."],
    "2 Timothy 1:13": ["Hold to Sound Teaching", "Follow correct teaching faithfully."],


    // 2 Timothy Chapter 2
    "2 Timothy 2:1": ["Be Strong in Grace", "Timothy is encouraged to be strong in Christ."],
    "2 Timothy 2:2": ["Teach Faithful People", "Entrust teaching to reliable people."],
    "2 Timothy 2:3": ["Endure Hardship Like a Soldier", "Endure suffering faithfully."],
    "2 Timothy 2:8": ["Remember Jesus Christ", "Keep focus on Christ’s resurrection."],
    "2 Timothy 2:14": ["Avoid Useless Arguments", "Do not engage in pointless debates."],
    "2 Timothy 2:15": ["Approved Worker of God", "Correctly handle the word of truth."],
    "2 Timothy 2:20": ["Vessels for Honor", "Be useful and pure for God’s service."],
    "2 Timothy 2:22": ["Flee Youthful Desires", "Pursue righteousness and peace."],


    // 2 Timothy Chapter 3
    "2 Timothy 3:1": ["Difficult Times in the Last Days", "People will become lovers of self and evil."],
    "2 Timothy 3:10": ["Paul’s Example", "Timothy followed Paul’s teaching and conduct."],
    "2 Timothy 3:12": ["Persecution for Believers", "All who live godly lives will face persecution."],
    "2 Timothy 3:14": ["Continue in the Scriptures", "Remain faithful to what you have learned."],
    "2 Timothy 3:16": ["All Scripture Is God-Breathed", "Scripture is useful for teaching and training."],


    // 2 Timothy Chapter 4
    "2 Timothy 4:1": ["Preach the Word", "Timothy is commanded to preach faithfully."],
    "2 Timothy 4:3": ["People Will Reject Sound Doctrine", "People will follow their own desires."],
    "2 Timothy 4:5": ["Endure Hardship and Fulfill Ministry", "Remain faithful in ministry."],
    "2 Timothy 4:6": ["Paul’s Life Near Completion", "Paul knows his death is near."],
    "2 Timothy 4:7": ["Paul’s Faithful Finish", "He fought the good fight and kept the faith."],
    "2 Timothy 4:8": ["Crown of Righteousness", "A reward awaits faithful believers."],
    "2 Timothy 4:9": ["Personal Requests", "Paul asks Timothy to come soon."],
    "2 Timothy 4:16": ["God’s Faithfulness to Paul", "God stood with Paul and strengthened him."],
    "2 Timothy 4:19": ["Final Greetings", "Paul sends greetings to fellow believers."],
    "2 Timothy 4:22": ["Final Blessing", "Grace be with you."],

    // Titus Chapter 1
    "Titus 1:1": ["Greeting to Titus", "Paul greets Titus, his true son in the faith."],
    "Titus 1:5": ["Purpose of Titus in Crete", "Titus is left in Crete to appoint elders in every town."],
    "Titus 1:6": ["Qualifications for Elders", "Elders must be blameless, faithful, and disciplined."],
    "Titus 1:10": ["Rebuke False Teachers", "Many rebellious people must be silenced."],
    "Titus 1:13": ["Correct Them Sharply", "They must be corrected to remain sound in faith."],
    "Titus 1:15": ["Pure and Corrupt Minds", "The pure see purity, but the corrupt are defiled."],
    "Titus 1:16": ["False Professors of Faith", "They claim to know God but deny Him by actions."],


    // Titus Chapter 2
    "Titus 2:1": ["Teach Sound Doctrine", "Teach what agrees with sound teaching."],
    "Titus 2:2": ["Instructions for Older Men", "They must be self-controlled and strong in faith."],
    "Titus 2:3": ["Instructions for Older Women", "They must live holy lives and teach what is good."],
    "Titus 2:4": ["Instructions for Younger Women", "They should love family and live pure lives."],
    "Titus 2:6": ["Instructions for Young Men", "Young men should be self-controlled."],
    "Titus 2:7": ["Be an Example of Good Works", "Show integrity and seriousness in teaching."],
    "Titus 2:9": ["Instructions for Servants", "Servants must be faithful and trustworthy."],
    "Titus 2:11": ["Grace Teaches Godly Living", "God’s grace teaches believers to live righteously."],
    "Titus 2:13": ["Hope of Christ’s Return", "Believers await the glorious return of Jesus."],
    "Titus 2:14": ["Christ Redeemed and Purified Us", "Jesus gave Himself to make us His people."],
    "Titus 2:15": ["Teach with Authority", "Encourage and correct with authority."],


    // Titus Chapter 3
    "Titus 3:1": ["Be Ready for Good Works", "Believers should obey authorities and do good."],
    "Titus 3:3": ["Reminder of Past Sinfulness", "Believers were once sinful and deceived."],
    "Titus 3:4": ["Salvation Through God’s Mercy", "God saved us through His mercy and grace."],
    "Titus 3:7": ["Heirs of Eternal Life", "Believers are justified and heirs of eternal life."],
    "Titus 3:8": ["Devote to Good Works", "Believers should focus on doing good."],
    "Titus 3:9": ["Avoid Foolish Arguments", "Stay away from useless controversies."],
    "Titus 3:10": ["Warn Divisive People", "Avoid those who cause division."],
    "Titus 3:12": ["Final Instructions", "Paul gives travel and ministry instructions."],
    "Titus 3:15": ["Final Greetings", "Paul closes with greetings and grace."],


    // Philemon Chapter 1
    "Philemon 1:1": ["Greeting to Philemon", "Paul greets Philemon and the church in his house."],
    "Philemon 1:4": ["Thanksgiving for Philemon’s Faith", "Paul thanks God for Philemon’s love and faith."],
    "Philemon 1:8": ["Paul’s Appeal Based on Love", "Paul appeals gently instead of commanding."],
    "Philemon 1:10": ["Appeal for Onesimus", "Paul pleads for Onesimus, his spiritual son."],
    "Philemon 1:12": ["Onesimus Sent Back", "Paul sends Onesimus back to Philemon."],
    "Philemon 1:15": ["From Slave to Brother", "Onesimus is now more than a slave, a beloved brother."],
    "Philemon 1:17": ["Receive Him as You Would Paul", "Philemon is asked to welcome Onesimus."],
    "Philemon 1:18": ["Paul Offers to Repay", "Paul promises to repay any debt."],
    "Philemon 1:20": ["Confidence in Philemon’s Obedience", "Paul trusts Philemon will do even more."],
    "Philemon 1:22": ["Hope to Visit Soon", "Paul hopes to visit after release."],
    "Philemon 1:25": ["Final Blessing", "Grace of the Lord Jesus Christ be with you."],

    // Hebrews Chapter 1
    "Hebrews 1:1": ["God Speaks Through His Son", "God now speaks through His Son, the final revelation."],
    "Hebrews 1:3": ["The Supremacy of the Son", "Jesus reflects God’s glory and sustains all things."],
    "Hebrews 1:4": ["Superior to Angels", "Jesus is greater than the angels."],
    "Hebrews 1:5": ["The Son Is Unique", "God declares Jesus as His Son."],
    "Hebrews 1:6": ["Angels Worship the Son", "All angels must worship Him."],
    "Hebrews 1:8": ["The Son’s Eternal Throne", "Jesus reigns forever with righteousness."],
    "Hebrews 1:10": ["The Son as Creator", "Jesus created heaven and earth."],
    "Hebrews 1:13": ["The Son Exalted at God’s Right Hand", "Jesus sits at God’s right hand."],


    // Hebrews Chapter 2
    "Hebrews 2:1": ["Warning Against Neglecting Salvation", "Believers must not ignore God’s salvation."],
    "Hebrews 2:5": ["Jesus Made Lower Than Angels", "Jesus became human temporarily."],
    "Hebrews 2:9": ["Jesus Suffered for Everyone", "Jesus suffered death for all people."],
    "Hebrews 2:10": ["Jesus the Pioneer of Salvation", "Jesus brings many to glory."],
    "Hebrews 2:14": ["Jesus Defeats Death and the Devil", "Jesus destroyed the devil’s power."],
    "Hebrews 2:17": ["Jesus the Merciful High Priest", "Jesus became human to help humanity."],


    // Hebrews Chapter 3
    "Hebrews 3:1": ["Jesus Greater Than Moses", "Jesus is worthy of greater honor than Moses."],
    "Hebrews 3:6": ["Christ Over God’s House", "Believers are God’s house."],
    "Hebrews 3:7": ["Warning from Israel’s Unbelief", "Do not harden your hearts."],
    "Hebrews 3:12": ["Warning Against Unbelief", "Encourage each other to remain faithful."],
    "Hebrews 3:16": ["Israel’s Failure in the Wilderness", "Unbelief kept them from entering rest."],


    // Hebrews Chapter 4
    "Hebrews 4:1": ["Promise of God’s Rest", "God’s rest is still available."],
    "Hebrews 4:3": ["Entering God’s Rest Through Faith", "Faith allows believers to enter rest."],
    "Hebrews 4:12": ["Power of God’s Word", "God’s word is living and powerful."],
    "Hebrews 4:14": ["Jesus the Great High Priest", "Jesus intercedes for believers."],
    "Hebrews 4:16": ["Approach God with Confidence", "Believers can come boldly to God."],


    // Hebrews Chapter 5
    "Hebrews 5:1": ["Role of High Priests", "High priests represent people before God."],
    "Hebrews 5:5": ["Christ Appointed by God", "Jesus was chosen as High Priest."],
    "Hebrews 5:7": ["Jesus Learned Obedience", "Jesus obeyed through suffering."],
    "Hebrews 5:9": ["Source of Eternal Salvation", "Jesus became the source of salvation."],
    "Hebrews 5:11": ["Warning Against Spiritual Immaturity", "Believers must grow in faith."],


    // Hebrews Chapter 6
    "Hebrews 6:1": ["Call to Spiritual Maturity", "Believers must grow beyond basics."],
    "Hebrews 6:4": ["Warning Against Falling Away", "Falling away brings serious danger."],
    "Hebrews 6:10": ["God Remembers Faithfulness", "God rewards faithful service."],
    "Hebrews 6:13": ["God’s Promise to Abraham", "God’s promise is unchangeable."],
    "Hebrews 6:19": ["Hope as an Anchor", "Hope in Christ is secure."],


    // Hebrews Chapter 7
    "Hebrews 7:1": ["Melchizedek the Priest-King", "Melchizedek represents eternal priesthood."],
    "Hebrews 7:11": ["Need for a New Priesthood", "Jesus brings a better priesthood."],
    "Hebrews 7:15": ["Jesus Like Melchizedek", "Jesus is eternal priest."],
    "Hebrews 7:22": ["Jesus the Guarantee of Better Covenant", "Jesus guarantees a better covenant."],
    "Hebrews 7:25": ["Jesus Intercedes Forever", "Jesus saves completely."],


    // Hebrews Chapter 8
    "Hebrews 8:1": ["Jesus Our High Priest in Heaven", "Jesus serves in the heavenly sanctuary."],
    "Hebrews 8:6": ["Mediator of Better Covenant", "Jesus mediates a better covenant."],
    "Hebrews 8:8": ["Promise of New Covenant", "God promises a new covenant."],
    "Hebrews 8:12": ["Forgiveness in New Covenant", "God forgives and remembers sins no more."],


    // Hebrews Chapter 9
    "Hebrews 9:1": ["Earthly Sanctuary Explained", "Description of tabernacle."],
    "Hebrews 9:11": ["Christ the Perfect High Priest", "Jesus entered heavenly sanctuary."],
    "Hebrews 9:12": ["Christ’s Perfect Sacrifice", "Jesus’ blood brings eternal redemption."],
    "Hebrews 9:15": ["Mediator of New Covenant", "Jesus secures eternal inheritance."],
    "Hebrews 9:27": ["Judgment After Death", "People die once and face judgment."],
    "Hebrews 9:28": ["Christ Will Return Again", "Jesus will return to save believers."],


    // Hebrews Chapter 10
    "Hebrews 10:1": ["Law Cannot Perfect", "Law was only a shadow."],
    "Hebrews 10:10": ["Christ’s Sacrifice Once for All", "Jesus’ sacrifice sanctifies believers."],
    "Hebrews 10:14": ["Perfected Forever", "Jesus perfects believers."],
    "Hebrews 10:19": ["Confidence to Enter God’s Presence", "Believers can approach God freely."],
    "Hebrews 10:23": ["Hold Firm to Hope", "Remain faithful."],
    "Hebrews 10:26": ["Warning Against Willful Sin", "Deliberate sin brings judgment."],
    "Hebrews 10:35": ["Do Not Lose Confidence", "Endurance brings reward."],


    // Hebrews Chapter 11
    "Hebrews 11:1": ["Definition of Faith", "Faith is confidence in unseen things."],
    "Hebrews 11:4": ["Faith of Abel", "Abel offered better sacrifice."],
    "Hebrews 11:5": ["Faith of Enoch", "Enoch pleased God."],
    "Hebrews 11:7": ["Faith of Noah", "Noah obeyed God."],
    "Hebrews 11:8": ["Faith of Abraham", "Abraham trusted God."],
    "Hebrews 11:11": ["Faith of Sarah", "Sarah believed God’s promise."],
    "Hebrews 11:23": ["Faith of Moses", "Moses chose God over Egypt."],
    "Hebrews 11:32": ["Faith of Other Heroes", "Many others lived by faith."],
    "Hebrews 11:39": ["Faith Awaiting Fulfillment", "They awaited God’s promise."],


    // Hebrews Chapter 12
    "Hebrews 12:1": ["Run the Race with Endurance", "Fix eyes on Jesus."],
    "Hebrews 12:3": ["Endure Hardship", "Do not lose heart."],
    "Hebrews 12:5": ["God Disciplines His Children", "Discipline shows God’s love."],
    "Hebrews 12:14": ["Pursue Holiness", "Live in peace and holiness."],
    "Hebrews 12:18": ["Mount Sinai and Mount Zion", "Believers belong to heavenly Zion."],
    "Hebrews 12:25": ["Do Not Reject God", "God’s voice must be obeyed."],
    "Hebrews 12:28": ["Serve God with Reverence", "Worship God acceptably."],


    // Hebrews Chapter 13
    "Hebrews 13:1": ["Continue in Brotherly Love", "Love one another."],
    "Hebrews 13:4": ["Honor Marriage", "Marriage must be respected."],
    "Hebrews 13:5": ["Trust God, Not Money", "God will never leave you."],
    "Hebrews 13:7": ["Remember Leaders", "Follow faithful leaders."],
    "Hebrews 13:8": ["Jesus Never Changes", "Jesus is the same forever."],
    "Hebrews 13:15": ["Offer Praise to God", "Continually praise God."],
    "Hebrews 13:17": ["Obey Leaders", "Submit to spiritual leaders."],
    "Hebrews 13:20": ["Final Blessing", "May God equip you."],
    "Hebrews 13:25": ["Final Grace", "Grace be with all believers."],

    // James Chapter 1
    "James 1:1": ["Greeting to the Twelve Tribes", "James greets the believers scattered among the nations."],
    "James 1:2": ["Joy in Trials", "Trials test faith and produce perseverance."],
    "James 1:5": ["Ask God for Wisdom", "God gives wisdom generously to those who ask in faith."],
    "James 1:9": ["Humility in Rich and Poor", "Both rich and poor should find their identity in God."],
    "James 1:12": ["Blessing for Enduring Trials", "Those who persevere will receive the crown of life."],
    "James 1:13": ["God Does Not Tempt", "Temptation comes from human desires, not God."],
    "James 1:16": ["Every Good Gift from God", "All good and perfect gifts come from God."],
    "James 1:19": ["Listening and Obeying", "Be quick to listen, slow to speak, and slow to anger."],
    "James 1:22": ["Doers of the Word", "Do not only listen, but obey God’s word."],
    "James 1:26": ["True Religion", "True religion includes controlling the tongue and caring for others."],


    // James Chapter 2
    "James 2:1": ["Warning Against Favoritism", "Do not show favoritism based on wealth or status."],
    "James 2:5": ["God Honors the Poor in Faith", "God chooses the poor to be rich in faith."],
    "James 2:8": ["The Royal Law", "Love your neighbor as yourself."],
    "James 2:10": ["Breaking One Law Breaks All", "Failing in one point makes a person guilty of all."],
    "James 2:14": ["Faith Without Works Is Dead", "Faith must be demonstrated by actions."],
    "James 2:18": ["Show Faith by Actions", "Faith and works go together."],
    "James 2:21": ["Example of Abraham", "Abraham’s faith was shown by his actions."],
    "James 2:25": ["Example of Rahab", "Rahab was justified by her actions."],
    "James 2:26": ["Faith Without Works Is Dead", "Faith without works is lifeless."],


    // James Chapter 3
    "James 3:1": ["Warning to Teachers", "Teachers will be judged more strictly."],
    "James 3:3": ["Power of the Tongue", "The tongue is small but powerful."],
    "James 3:5": ["Danger of the Tongue", "The tongue can cause great destruction."],
    "James 3:9": ["Blessing and Cursing", "The tongue should not bless and curse."],
    "James 3:13": ["Wisdom Shown by Good Conduct", "True wisdom is shown through humility."],
    "James 3:17": ["Wisdom from Above", "God’s wisdom is pure, peaceful, and merciful."],


    // James Chapter 4
    "James 4:1": ["Cause of Conflicts", "Conflicts come from selfish desires."],
    "James 4:4": ["Friendship with the World", "Friendship with the world opposes God."],
    "James 4:6": ["God Gives Grace to the Humble", "God resists the proud but gives grace to the humble."],
    "James 4:7": ["Submit to God", "Resist the devil and draw near to God."],
    "James 4:11": ["Do Not Judge Others", "Do not speak against fellow believers."],
    "James 4:13": ["Warning Against Boasting", "Do not boast about future plans."],
    "James 4:17": ["Sin of Ignoring Good", "Knowing good and not doing it is sin."],


    // James Chapter 5
    "James 5:1": ["Warning to the Rich", "Rich oppressors will face judgment."],
    "James 5:7": ["Patience Until the Lord’s Return", "Be patient like a farmer waiting for harvest."],
    "James 5:9": ["Do Not Grumble", "Avoid complaining against one another."],
    "James 5:10": ["Example of the Prophets", "Follow the example of faithful prophets."],
    "James 5:12": ["Warning About Oaths", "Speak truthfully without unnecessary oaths."],
    "James 5:13": ["Power of Prayer", "Pray in trouble and praise in joy."],
    "James 5:14": ["Prayer for the Sick", "Pray and anoint the sick."],
    "James 5:16": ["Confession and Prayer", "Confess sins and pray for healing."],
    "James 5:17": ["Example of Elijah’s Prayer", "Elijah’s prayer had powerful results."],
    "James 5:19": ["Restore Those Who Wander", "Help bring back those who stray from truth."],

    // 1 Peter Chapter 1
    "1 Peter 1:1": ["Greeting to the Chosen Believers", "Peter greets believers chosen by God and scattered."],
    "1 Peter 1:3": ["New Birth into Living Hope", "God gives new birth through Jesus’ resurrection."],
    "1 Peter 1:6": ["Joy Despite Trials", "Trials test faith and refine believers."],
    "1 Peter 1:10": ["Prophets Spoke of This Salvation", "Prophets foretold the grace now revealed."],
    "1 Peter 1:13": ["Call to Holy Living", "Prepare minds and live holy lives."],
    "1 Peter 1:17": ["Live in Reverent Fear", "Live carefully knowing God judges fairly."],
    "1 Peter 1:22": ["Love One Another Deeply", "Love sincerely from a pure heart."],
    "1 Peter 1:23": ["Born Again Through God’s Word", "Believers are born again through eternal word."],


    // 1 Peter Chapter 2
    "1 Peter 2:1": ["Desire Spiritual Growth", "Put away evil and grow spiritually."],
    "1 Peter 2:4": ["The Living Stone", "Jesus is the chosen and precious cornerstone."],
    "1 Peter 2:9": ["Chosen People and Royal Priesthood", "Believers are chosen to declare God’s praises."],
    "1 Peter 2:11": ["Live as God’s Servants", "Avoid sinful desires and live honorably."],
    "1 Peter 2:13": ["Submit to Authorities", "Submit to human authorities for God’s sake."],
    "1 Peter 2:18": ["Submission in Suffering", "Servants should endure suffering patiently."],
    "1 Peter 2:21": ["Christ’s Example of Suffering", "Jesus suffered as an example."],
    "1 Peter 2:24": ["Christ Bore Our Sins", "Jesus died to bring healing and righteousness."],


    // 1 Peter Chapter 3
    "1 Peter 3:1": ["Instructions for Wives", "Wives should live respectfully."],
    "1 Peter 3:7": ["Instructions for Husbands", "Husbands should treat wives with honor."],
    "1 Peter 3:8": ["Call to Unity and Love", "Live in harmony and compassion."],
    "1 Peter 3:13": ["Suffering for Righteousness", "Do not fear suffering for doing good."],
    "1 Peter 3:15": ["Always Be Ready to Answer", "Be prepared to explain your hope."],
    "1 Peter 3:18": ["Christ’s Suffering and Victory", "Christ suffered once for sins."],
    "1 Peter 3:21": ["Meaning of Baptism", "Baptism symbolizes salvation through Christ."],


    // 1 Peter Chapter 4
    "1 Peter 4:1": ["Living for God’s Will", "Believers should live for God, not sinful desires."],
    "1 Peter 4:7": ["Be Alert and Prayerful", "Stay alert and love deeply."],
    "1 Peter 4:9": ["Serve One Another", "Use gifts to serve faithfully."],
    "1 Peter 4:12": ["Rejoice in Suffering", "Do not be surprised by trials."],
    "1 Peter 4:16": ["Suffering as a Christian", "Honor God even in suffering."],
    "1 Peter 4:17": ["Judgment Begins with God’s House", "God judges His people first."],
    "1 Peter 4:19": ["Trust God in Suffering", "Commit yourself to faithful Creator."],


    // 1 Peter Chapter 5
    "1 Peter 5:1": ["Instructions to Elders", "Shepherd God’s people faithfully."],
    "1 Peter 5:5": ["Humility and Submission", "Clothe yourselves with humility."],
    "1 Peter 5:6": ["Humble Yourself Before God", "God will lift you up."],
    "1 Peter 5:7": ["Cast Your Cares on God", "God cares for you."],
    "1 Peter 5:8": ["Be Alert Against the Devil", "The devil seeks to devour believers."],
    "1 Peter 5:10": ["God Will Restore You", "God will strengthen after suffering."],
    "1 Peter 5:12": ["Final Encouragement", "Stand firm in God’s grace."],
    "1 Peter 5:13": ["Final Greetings", "Greetings from fellow believers."],
    "1 Peter 5:14": ["Peace to All Believers", "Peace to all in Christ."],


    // 2 Peter Chapter 1
    "2 Peter 1:1": ["Greeting to Believers", "Peter greets those who share precious faith."],
    "2 Peter 1:3": ["God’s Power Gives Everything Needed", "God provides everything for godly life."],
    "2 Peter 1:5": ["Grow in Christian Character", "Add virtue, knowledge, self-control, and love."],
    "2 Peter 1:10": ["Make Your Calling Sure", "Confirm your calling and election."],
    "2 Peter 1:12": ["Reminder of Truth", "Peter reminds believers of truth."],
    "2 Peter 1:16": ["Eyewitness of Christ’s Glory", "Peter witnessed Jesus’ majesty."],
    "2 Peter 1:19": ["Trustworthy Prophetic Word", "Scripture comes from God."],


    // 2 Peter Chapter 2
    "2 Peter 2:1": ["Warning About False Teachers", "False teachers will secretly introduce heresies."],
    "2 Peter 2:4": ["God Judges the Wicked", "God judged fallen angels and sinners."],
    "2 Peter 2:9": ["God Rescues the Righteous", "God rescues godly people from trials."],
    "2 Peter 2:10": ["Description of False Teachers", "False teachers are arrogant and corrupt."],
    "2 Peter 2:17": ["Empty Promises", "They promise freedom but bring slavery."],
    "2 Peter 2:20": ["Danger of Falling Away", "Returning to sin is worse than before."],
    "2 Peter 2:22": ["Proverbs About Apostasy", "They return to sin like animals."],


    // 2 Peter Chapter 3
    "2 Peter 3:1": ["Reminder of God’s Word", "Peter reminds believers of prophets and apostles."],
    "2 Peter 3:3": ["Scoffers in the Last Days", "People will mock Christ’s return."],
    "2 Peter 3:5": ["God’s Past Judgment by Flood", "God judged the world before."],
    "2 Peter 3:8": ["God’s Timing Is Different", "One day is like a thousand years."],
    "2 Peter 3:9": ["God’s Patience", "God delays to allow repentance."],
    "2 Peter 3:10": ["Day of the Lord Will Come", "The Lord will return suddenly."],
    "2 Peter 3:11": ["Call to Holy Living", "Live holy and godly lives."],
    "2 Peter 3:14": ["Be Found Blameless", "Live in peace and purity."],
    "2 Peter 3:17": ["Guard Against Error", "Be careful not to fall."],
    "2 Peter 3:18": ["Grow in Grace", "Grow in grace and knowledge of Christ."],

    // 1 John Chapter 1
    "1 John 1:1": ["The Word of Life Revealed", "John proclaims Jesus, the eternal life revealed."],
    "1 John 1:3": ["Fellowship with God and Believers", "Believers have fellowship with God and one another."],
    "1 John 1:5": ["God Is Light", "God is light and has no darkness."],
    "1 John 1:6": ["Walk in the Light", "Walking in light brings fellowship and truth."],
    "1 John 1:8": ["Confession of Sin", "Those who confess sins receive forgiveness."],

    // 1 John Chapter 2
    "1 John 2:1": ["Christ Our Advocate", "Jesus is our advocate and atoning sacrifice."],
    "1 John 2:3": ["Obedience Shows We Know God", "Knowing God is shown by obedience."],
    "1 John 2:7": ["Command to Love", "Love one another as God commanded."],
    "1 John 2:12": ["Encouragement to Believers", "John encourages believers at different stages."],
    "1 John 2:15": ["Do Not Love the World", "Do not love worldly things."],
    "1 John 2:18": ["Warning About Antichrists", "Many antichrists have come."],
    "1 John 2:24": ["Remain in Christ", "Continue in Christ’s teaching."],
    "1 John 2:28": ["Be Ready for Christ’s Return", "Remain in Him with confidence."],

    // 1 John Chapter 3
    "1 John 3:1": ["Children of God", "Believers are called children of God."],
    "1 John 3:4": ["Sin and Lawlessness", "Sin is rebellion against God."],
    "1 John 3:7": ["Practice Righteousness", "Those who live righteously belong to God."],
    "1 John 3:11": ["Love One Another", "Love one another as commanded."],
    "1 John 3:16": ["Love Like Christ", "Jesus showed love by laying down His life."],
    "1 John 3:19": ["Assurance Before God", "Believers can have confidence before God."],
    "1 John 3:23": ["God’s Command", "Believe in Jesus and love one another."],

    // 1 John Chapter 4
    "1 John 4:1": ["Test the Spirits", "Test teachings to see if they come from God."],
    "1 John 4:4": ["God Is Greater", "God in believers is greater than the world."],
    "1 John 4:7": ["God Is Love", "Love comes from God."],
    "1 John 4:9": ["God Showed Love Through Christ", "God sent His Son to give life."],
    "1 John 4:13": ["Assurance Through the Spirit", "God gives His Spirit as proof."],
    "1 John 4:16": ["Living in God’s Love", "Those who live in love live in God."],
    "1 John 4:18": ["Perfect Love Casts Out Fear", "God’s love removes fear."],

    // 1 John Chapter 5
    "1 John 5:1": ["Faith in Jesus as the Christ", "Those who believe are born of God."],
    "1 John 5:6": ["Testimony About Jesus", "The Spirit testifies about Jesus."],
    "1 John 5:11": ["Gift of Eternal Life", "God gives eternal life through His Son."],
    "1 John 5:13": ["Assurance of Eternal Life", "Believers can know they have eternal life."],
    "1 John 5:14": ["Confidence in Prayer", "God hears prayers according to His will."],
    "1 John 5:18": ["Protection from Sin", "Believers are protected by God."],
    "1 John 5:20": ["Jesus Is the True God", "Jesus gives understanding and eternal life."],
    "1 John 5:21": ["Final Warning", "Keep away from idols."],

    // 2 John Chapter 1
    "2 John 1:1": ["Greeting to the Chosen Lady", "John greets the chosen lady and her children."],
    "2 John 1:4": ["Walking in Truth", "John rejoices that believers walk in truth."],
    "2 John 1:5": ["Command to Love One Another", "Love one another as commanded."],
    "2 John 1:7": ["Warning Against Deceivers", "Deceivers deny Jesus Christ."],
    "2 John 1:9": ["Remain in Christ’s Teaching", "Those who remain have God."],
    "2 John 1:10": ["Do Not Support False Teachers", "Do not welcome false teachers."],
    "2 John 1:12": ["Hope to Visit", "John hopes to speak face to face."],
    "2 John 1:13": ["Final Greetings", "Greetings from fellow believers."],

    // 3 John Chapter 1
    "3 John 1:1": ["Greeting to Gaius", "John greets beloved Gaius."],
    "3 John 1:2": ["Prayer for Health and Prosperity", "John prays for Gaius’ well-being."],
    "3 John 1:3": ["Joy in Walking in Truth", "John rejoices in Gaius’ faithfulness."],
    "3 John 1:5": ["Faithfulness in Service", "Gaius shows hospitality to believers."],
    "3 John 1:9": ["Warning About Diotrephes", "Diotrephes loves power and rejects authority."],
    "3 John 1:11": ["Encouragement to Do Good", "Follow good, not evil."],
    "3 John 1:12": ["Example of Demetrius", "Demetrius has a good reputation."],
    "3 John 1:13": ["Hope to Visit", "John hopes to see them soon."],
    "3 John 1:15": ["Final Greetings", "Peace and greetings to friends."],

    "Jude 1:1": ["Greeting from Jude", "Jude, a servant of Jesus Christ and brother of James, writes to those who are called, loved by God the Father, and kept for Jesus Christ."],
    "Jude 1:2": ["Blessing of Mercy", "Jude blesses the believers with mercy, peace, and love in abundance."],
    "Jude 1:3": ["Contend for the Faith", "Jude urges believers to contend for the faith that was once for all delivered to the saints."],
    "Jude 1:4": ["False Teachers Among Them", "Certain ungodly people have secretly slipped in, perverting the grace of God and denying Jesus Christ."],
    "Jude 1:5": ["Example of Israel’s Unbelief", "Jude reminds them that the Lord saved people out of Egypt but later destroyed those who did not believe."],
    "Jude 1:6": ["Judgment of Fallen Angels", "Angels who did not keep their proper place are kept in eternal chains under darkness for judgment."],
    "Jude 1:7": ["Example of Sodom and Gomorrah", "Sodom and Gomorrah serve as an example of judgment because of their immoral conduct."],
    "Jude 1:8": ["Corrupt Behavior of False Teachers", "These people defile the body, reject authority, and slander heavenly beings."],
    "Jude 1:9": ["Michael and the Devil", "Even the archangel Michael did not bring a slanderous accusation against the devil but said, 'The Lord rebuke you.'"],
    "Jude 1:10": ["Ignorant Blasphemy", "False teachers speak abusively about things they do not understand."],
    "Jude 1:11": ["Examples of Rebellion", "They follow the way of Cain, rush for profit like Balaam, and perish in Korah’s rebellion."],
    "Jude 1:12": ["Dangerous Influence", "They are hidden reefs at love feasts, shepherds feeding themselves, clouds without rain, and trees without fruit."],
    "Jude 1:14": ["Prophecy of Enoch", "Enoch prophesied that the Lord will come with thousands of His holy ones to execute judgment."],
    "Jude 1:16": ["Complaining and Boasting", "These people grumble, follow their own desires, and flatter others for advantage."],
    "Jude 1:17": ["Remember the Apostles’ Words", "Believers should remember the warnings spoken earlier by the apostles of Jesus Christ."],
    "Jude 1:19": ["Divisive People", "These individuals cause divisions, follow natural instincts, and do not have the Spirit."],
    "Jude 1:20": ["Build Yourselves Up", "Believers should build themselves up in their most holy faith and pray in the Holy Spirit."],
    "Jude 1:21": ["Keep Yourselves in God’s Love", "They should keep themselves in the love of God while waiting for the mercy of Jesus Christ."],
    "Jude 1:22": ["Show Mercy to Others", "Believers should show mercy to those who doubt."],
    "Jude 1:23": ["Save Others with Caution", "Rescue others from danger while being careful not to be influenced by sin."],
    "Jude 1:24": ["God Able to Keep You", "God is able to keep believers from stumbling and present them blameless with great joy."],
    "Jude 1:25": ["Final Praise to God", "Glory, majesty, power, and authority belong to the only God our Savior through Jesus Christ."],

    "Revelation 1:1": ["The Revelation of Jesus Christ", "This book reveals what God gave Jesus Christ to show His servants about the things that must soon take place."],
    "Revelation 1:3": ["Blessing for Reading the Prophecy", "A blessing is promised to those who read, hear, and keep the words of this prophecy."],
    "Revelation 1:4": ["Greeting to the Seven Churches", "John writes to the seven churches in Asia, offering grace and peace from God."],
    "Revelation 1:7": ["The Coming of Christ", "Jesus will come with the clouds, and every eye will see Him."],
    "Revelation 1:8": ["God the Alpha and Omega", "The Lord declares that He is the Alpha and the Omega, the Almighty."],
    "Revelation 1:9": ["John on the Island of Patmos", "John explains that he was on the island of Patmos because of the word of God and the testimony of Jesus."],
    "Revelation 1:10": ["The Voice Like a Trumpet", "On the Lord’s Day John hears a loud voice behind him like a trumpet."],
    "Revelation 1:12": ["Vision of the Son of Man", "John turns and sees seven golden lampstands and the Son of Man standing among them."],
    "Revelation 1:17": ["Fear Not, the Living One", "Jesus tells John not to fear and declares that He is the First and the Last who lives forever."],
    "Revelation 1:19": ["Command to Write the Vision", "John is instructed to write what he has seen and what will happen later."],
    "Revelation 1:20": ["The Mystery of the Lampstands", "The seven stars represent the angels of the churches and the seven lampstands represent the seven churches."],

    "Revelation 2:1": ["Message to the Church in Ephesus", "Jesus praises their hard work and perseverance but warns that they have left their first love."],
    "Revelation 2:5": ["Call to Repent", "The church is told to remember where they have fallen and return to their first works."],
    "Revelation 2:7": ["Promise to the Overcomers", "Those who overcome will be given the right to eat from the tree of life in the paradise of God."],
    "Revelation 2:8": ["Message to the Church in Smyrna", "Jesus encourages believers who suffer persecution and reminds them that He knows their affliction."],
    "Revelation 2:10": ["Faithfulness in Persecution", "Believers are told to remain faithful even to death and they will receive the crown of life."],
    "Revelation 2:12": ["Message to the Church in Pergamum", "Jesus addresses the church living where Satan’s throne is and warns against false teachings."],
    "Revelation 2:14": ["Warning Against Compromise", "Some follow the teachings of Balaam and the Nicolaitans, leading people into sin."],
    "Revelation 2:16": ["Call to Repent in Pergamum", "The church is warned to repent or face judgment from the Lord."],
    "Revelation 2:18": ["Message to the Church in Thyatira", "Jesus praises their love, faith, and service but warns against the influence of false prophecy."],
    "Revelation 2:20": ["Warning About Jezebel", "A woman symbolically called Jezebel leads some believers into immorality and idolatry."],
    "Revelation 2:24": ["Encouragement to the Faithful", "Those who remain faithful are told to hold firmly to what they have until Christ returns."],
    "Revelation 2:26": ["Authority Promised to Overcomers", "Those who overcome will receive authority over the nations."],
    "Revelation 2:28": ["Gift of the Morning Star", "Christ promises the morning star to those who overcome."],
    "Revelation 2:29": ["Call to Listen to the Spirit", "Everyone who has ears must listen to what the Spirit says to the churches."],

    "Revelation 3:1": ["Message to the Church in Sardis", "Jesus tells the church in Sardis that they have a reputation of being alive but are spiritually dead."],
    "Revelation 3:2": ["Call to Wake Up", "They are urged to strengthen what remains and complete their unfinished works before God."],
    "Revelation 3:3": ["Warning to Repent", "If they do not wake up, the Lord will come like a thief and they will not know the hour."],
    "Revelation 3:4": ["Faithful Remnant in Sardis", "A few believers have remained pure and will walk with Christ in white garments."],
    "Revelation 3:7": ["Message to the Church in Philadelphia", "Jesus speaks to the faithful church that has little strength but has kept His word."],
    "Revelation 3:8": ["An Open Door Given", "Christ sets before them an open door that no one can shut because they remained faithful."],
    "Revelation 3:10": ["Promise of Protection", "Because they kept His command to endure, Christ promises to keep them during the time of trial."],
    "Revelation 3:11": ["Hold Fast to What You Have", "Believers are urged to hold firmly to their faith so that no one takes their crown."],
    "Revelation 3:12": ["Reward for the Overcomer", "Those who overcome will become pillars in God's temple and bear the name of God."],
    "Revelation 3:14": ["Message to the Church in Laodicea", "Jesus addresses the church that is neither hot nor cold but spiritually lukewarm."],
    "Revelation 3:16": ["Warning Against Lukewarm Faith", "Because they are lukewarm, Christ warns that He will reject them unless they change."],
    "Revelation 3:17": ["True Spiritual Condition", "Though they think they are rich, they are actually poor, blind, and spiritually naked."],
    "Revelation 3:19": ["Call to Repent", "Christ rebukes and disciplines those He loves and calls them to be zealous and repent."],
    "Revelation 3:20": ["Jesus Stands at the Door", "Christ stands at the door and knocks, promising fellowship with anyone who opens to Him."],
    "Revelation 3:21": ["Promise to the Overcomer", "Those who overcome will sit with Christ on His throne just as He overcame and sat with His Father."],
    "Revelation 3:22": ["Listen to the Spirit", "Everyone who has ears must hear what the Spirit says to the churches."],

    "Revelation 4:1": ["The Door Opened in Heaven", "John sees an open door in heaven and hears a voice inviting him to come up and see what must take place."],
    "Revelation 4:2": ["The Throne in Heaven", "John is taken in the Spirit and sees a throne in heaven with One seated upon it."],
    "Revelation 4:4": ["The Twenty-Four Elders", "Around the throne are twenty-four elders seated on thrones, dressed in white with golden crowns."],
    "Revelation 4:6": ["The Four Living Creatures", "Before the throne are four living creatures full of eyes, continually worshiping God."],
    "Revelation 4:8": ["Holy, Holy, Holy", "The living creatures never stop declaring the holiness of the Lord God Almighty who was, is, and is to come."],
    "Revelation 4:9": ["Worship Around the Throne", "Whenever the living creatures give glory to God, the elders fall down and worship Him."],
    "Revelation 4:10": ["The Elders Cast Their Crowns", "The twenty-four elders lay their crowns before the throne, honoring God's authority."],
    "Revelation 4:11": ["God Worthy of All Glory", "They proclaim that the Lord is worthy to receive glory, honor, and power because He created all things."],

    "Revelation 5:1": ["The Scroll in God's Hand", "John sees a scroll in the right hand of the One on the throne, sealed with seven seals."],
    "Revelation 5:2": ["The Search for One Worthy", "A mighty angel asks who is worthy to open the scroll and break its seals."],
    "Revelation 5:4": ["John Weeps for the Sealed Scroll", "John weeps because no one in heaven or earth is found worthy to open the scroll."],
    "Revelation 5:5": ["The Lion of Judah Is Worthy", "An elder tells John that the Lion of the tribe of Judah, the Root of David, has overcome and can open the scroll."],
    "Revelation 5:6": ["The Lamb Appears", "John sees a Lamb standing as though slain in the center of the throne."],
    "Revelation 5:7": ["The Lamb Takes the Scroll", "The Lamb comes and takes the scroll from the right hand of the One seated on the throne."],
    "Revelation 5:8": ["Worship of the Lamb", "The living creatures and the elders fall down before the Lamb with harps and bowls of incense."],
    "Revelation 5:9": ["A New Song of Redemption", "They sing that the Lamb is worthy because He was slain and redeemed people for God."],
    "Revelation 5:11": ["Myriads of Angels Praise", "Thousands upon thousands of angels surround the throne and praise the Lamb."],
    "Revelation 5:12": ["Worthy Is the Lamb", "The angels proclaim that the Lamb is worthy to receive power, riches, wisdom, strength, honor, glory, and blessing."],
    "Revelation 5:13": ["All Creation Worships God and the Lamb", "Every creature in heaven and earth praises the One on the throne and the Lamb."],
    "Revelation 5:14": ["The Eternal Worship", "The living creatures say Amen and the elders fall down and worship."],

    "Revelation 6:1": ["The First Seal: The White Horse", "The Lamb opens the first seal and a rider on a white horse goes out conquering and to conquer."],
    "Revelation 6:3": ["The Second Seal: The Red Horse", "When the second seal is opened, a rider on a red horse takes peace from the earth, causing people to fight one another."],
    "Revelation 6:5": ["The Third Seal: The Black Horse", "The third seal reveals a rider on a black horse holding scales, symbolizing famine and scarcity."],
    "Revelation 6:7": ["The Fourth Seal: The Pale Horse", "A pale horse appears, and its rider named Death brings widespread destruction over the earth."],
    "Revelation 6:9": ["The Fifth Seal: The Cry of the Martyrs", "The souls of those who were killed for the word of God cry out for justice from beneath the altar."],
    "Revelation 6:12": ["The Sixth Seal: Cosmic Disturbances", "A great earthquake occurs, the sun becomes dark, the moon turns like blood, and the stars fall from the sky."],
    "Revelation 6:15": ["People Hide from God's Wrath", "Kings, leaders, and people of the earth hide in fear from the wrath of the One on the throne and from the Lamb."],
    "Revelation 6:17": ["The Great Day of Wrath", "The great day of God's wrath has come, and no one is able to stand."],

    "Revelation 7:1": ["Four Angels Hold Back the Winds", "Four angels stand at the corners of the earth holding back the winds so that no harm comes to the land, sea, or trees."],
    "Revelation 7:2": ["The Seal of the Living God", "Another angel comes with the seal of the living God and commands that the servants of God must be sealed on their foreheads."],
    "Revelation 7:4": ["The 144,000 Sealed", "John hears the number of those sealed from the tribes of Israel, totaling one hundred forty-four thousand."],
    "Revelation 7:9": ["The Great Multitude in White Robes", "John sees a great multitude from every nation standing before the throne and before the Lamb, wearing white robes and holding palm branches."],
    "Revelation 7:13": ["Who Are These in White Robes", "One of the elders asks John about the people in white robes and explains that they came out of the great tribulation."],
    "Revelation 7:15": ["They Serve God Before His Throne", "The redeemed stand before God's throne and serve Him continually in His temple."],
    "Revelation 7:16": ["No More Hunger or Thirst", "They will no longer hunger or thirst, and the sun will not harm them."],
    "Revelation 7:17": ["The Lamb Shepherds His People", "The Lamb will shepherd them and lead them to living waters, and God will wipe away every tear from their eyes."],

    "Revelation 8:1": ["The Seventh Seal Opened", "When the Lamb opens the seventh seal, there is silence in heaven for about half an hour."],
    "Revelation 8:2": ["Seven Angels with Seven Trumpets", "Seven angels stand before God, and they are given seven trumpets."],
    "Revelation 8:3": ["The Prayers of the Saints", "Another angel offers incense with the prayers of all the saints on the golden altar before the throne."],
    "Revelation 8:5": ["Fire Thrown to the Earth", "The angel fills the censer with fire from the altar and throws it to the earth, causing thunder, lightning, and an earthquake."],
    "Revelation 8:6": ["The Trumpets Prepared", "The seven angels prepare to sound their trumpets."],
    "Revelation 8:7": ["The First Trumpet", "Hail and fire mixed with blood are thrown to the earth, burning a third of the trees and all green grass."],
    "Revelation 8:8": ["The Second Trumpet", "Something like a great burning mountain is thrown into the sea, turning a third of the sea into blood."],
    "Revelation 8:10": ["The Third Trumpet", "A great star called Wormwood falls from heaven and poisons a third of the rivers and springs."],
    "Revelation 8:12": ["The Fourth Trumpet", "A third of the sun, moon, and stars are struck so that their light is darkened."],
    "Revelation 8:13": ["The Three Woes Announced", "An eagle cries out loudly, warning of the three coming woes for those who live on the earth."],

    "Revelation 9:1": ["The Fifth Trumpet: The Bottomless Pit", "A star falls from heaven and is given the key to open the bottomless pit."],
    "Revelation 9:2": ["Smoke from the Abyss", "When the pit is opened, thick smoke rises and darkens the sun and sky."],
    "Revelation 9:3": ["Locusts from the Pit", "Strange locusts come out of the smoke and are given power like scorpions to torment people."],
    "Revelation 9:4": ["Torment but Not Death", "The locusts are told not to harm vegetation but only people who do not have God's seal."],
    "Revelation 9:7": ["Description of the Locust Army", "The locusts look like horses prepared for battle with terrifying features."],
    "Revelation 9:11": ["King of the Locusts", "They have a king over them called Abaddon in Hebrew and Apollyon in Greek."],
    "Revelation 9:12": ["The First Woe Is Past", "The first woe ends, but two more woes are still to come."],
    "Revelation 9:13": ["The Sixth Trumpet Sounds", "A voice commands the release of four angels bound at the Euphrates River."],
    "Revelation 9:15": ["Release of the Four Angels", "The angels are released to kill a third of humanity."],
    "Revelation 9:16": ["The Great Army", "An enormous army of two hundred million horsemen is prepared for destruction."],
    "Revelation 9:20": ["Humanity Refuses to Repent", "Despite the plagues, many people still refuse to repent of idolatry and evil deeds."],

    "Revelation 10:1": ["The Mighty Angel and the Little Scroll", "John sees a mighty angel coming down from heaven holding a small scroll that is open in his hand."],
    "Revelation 10:3": ["The Seven Thunders Speak", "The angel cries out with a loud voice like a lion, and seven thunders respond."],
    "Revelation 10:4": ["The Mystery Sealed", "John prepares to write what the thunders said but is told to seal it and not record it."],
    "Revelation 10:5": ["The Angel's Oath", "The angel raises his hand to heaven and swears by the eternal Creator."],
    "Revelation 10:6": ["No More Delay", "The angel declares that there will be no more delay in the fulfillment of God's plan."],
    "Revelation 10:7": ["God's Mystery Revealed", "The mystery of God will be completed when the seventh angel begins to sound his trumpet."],
    "Revelation 10:8": ["John Told to Take the Scroll", "A voice from heaven instructs John to take the little scroll from the angel."],
    "Revelation 10:9": ["Eating the Little Scroll", "John eats the scroll; it tastes sweet like honey in his mouth but becomes bitter in his stomach."],
    "Revelation 10:11": ["Command to Prophesy Again", "John is told that he must prophesy again about many peoples, nations, languages, and kings."],

    "Revelation 11:1": ["Measuring the Temple of God", "John is given a measuring rod and told to measure the temple, the altar, and the worshipers inside."],
    "Revelation 11:2": ["The Outer Court Given to the Nations", "The outer court is left unmeasured because it will be trampled by the nations for forty-two months."],
    "Revelation 11:3": ["The Two Witnesses", "God appoints two witnesses who will prophesy for 1,260 days clothed in sackcloth."],
    "Revelation 11:5": ["Power of the Witnesses", "Anyone who tries to harm them is destroyed, and they have power to shut the sky and strike the earth with plagues."],
    "Revelation 11:7": ["The Beast Kills the Witnesses", "When their testimony is finished, the beast from the abyss attacks and kills them."],
    "Revelation 11:8": ["Their Bodies in the Great City", "Their bodies lie in the street of the great city where their Lord was crucified."],
    "Revelation 11:11": ["The Witnesses Raised to Life", "After three and a half days, the breath of life from God enters them and they stand up again."],
    "Revelation 11:12": ["They Ascend to Heaven", "A loud voice calls them to heaven, and they rise in a cloud while their enemies watch."],
    "Revelation 11:13": ["A Great Earthquake", "A powerful earthquake strikes the city, destroying a tenth of it and causing many to fear God."],
    "Revelation 11:15": ["The Seventh Trumpet", "The seventh angel sounds his trumpet, and loud voices in heaven declare that the kingdom of the world has become the kingdom of our Lord and His Christ."],
    "Revelation 11:17": ["Praise to the Almighty", "The elders worship God, praising Him for taking His great power and beginning His reign."],
    "Revelation 11:19": ["The Temple Opened in Heaven", "God's temple in heaven is opened, revealing the ark of His covenant with flashes of lightning, thunder, and earthquake."],

    "Revelation 12:1": ["The Woman and the Dragon", "A great sign appears in heaven: a woman clothed with the sun, with the moon under her feet and a crown of twelve stars."],
    "Revelation 12:3": ["The Great Red Dragon", "Another sign appears: a great red dragon with seven heads and ten horns ready to devour the woman's child."],
    "Revelation 12:5": ["The Male Child", "The woman gives birth to a male child who will rule all nations, and the child is taken up to God and His throne."],
    "Revelation 12:6": ["The Woman Flees to the Wilderness", "The woman escapes into the wilderness where God prepares a place for her protection."],
    "Revelation 12:7": ["War in Heaven", "Michael and his angels fight against the dragon and his angels."],
    "Revelation 12:9": ["Satan Cast Out of Heaven", "The great dragon, called the devil and Satan, is thrown down to the earth."],
    "Revelation 12:10": ["Victory Through the Lamb", "A loud voice in heaven declares that salvation and power belong to God because the accuser has been cast down."],
    "Revelation 12:13": ["The Dragon Persecutes the Woman", "After being thrown to the earth, the dragon pursues the woman who gave birth to the child."],
    "Revelation 12:14": ["Protection in the Wilderness", "The woman is given wings of a great eagle to escape and be nourished in the wilderness."],
    "Revelation 12:17": ["War Against the Saints", "The dragon becomes enraged and makes war against the rest of the woman's offspring who keep God's commandments."],

    "Revelation 13:1": ["The Beast from the Sea", "John sees a beast rising out of the sea with ten horns and seven heads, receiving power and authority from the dragon."],
    "Revelation 13:3": ["The Beast Amazes the World", "One of the beast’s heads appears fatally wounded but is healed, causing the whole world to marvel and follow the beast."],
    "Revelation 13:4": ["Worship of the Beast", "People worship the dragon who gave authority to the beast and also worship the beast itself."],
    "Revelation 13:5": ["The Beast Speaks Blasphemies", "The beast is given authority to speak arrogant and blasphemous words for forty-two months."],
    "Revelation 13:7": ["War Against the Saints", "The beast is allowed to make war against the saints and overcome them."],
    "Revelation 13:8": ["Those Who Worship the Beast", "All whose names are not written in the Lamb’s book of life worship the beast."],
    "Revelation 13:11": ["The Beast from the Earth", "Another beast rises from the earth with two horns like a lamb but speaks like a dragon."],
    "Revelation 13:13": ["False Signs and Wonders", "The second beast performs great signs, even making fire come down from heaven."],
    "Revelation 13:14": ["The Image of the Beast", "The people are deceived into making an image of the first beast and worshiping it."],
    "Revelation 13:16": ["The Mark of the Beast", "All people are forced to receive a mark on their right hand or forehead."],
    "Revelation 13:17": ["Control of Buying and Selling", "No one can buy or sell unless they have the mark or the number of the beast."],
    "Revelation 13:18": ["The Number of the Beast", "Wisdom is needed to calculate the number of the beast, which is six hundred sixty-six."],

    "Revelation 14:1": ["The Lamb and the 144,000", "John sees the Lamb standing on Mount Zion with 144,000 who have His name and His Father’s name written on their foreheads."],
    "Revelation 14:2": ["The Song from Heaven", "A voice like rushing waters and loud thunder is heard, and the redeemed sing a new song before the throne."],
    "Revelation 14:6": ["The First Angel’s Message", "An angel flies in midair proclaiming the eternal gospel to every nation, tribe, language, and people."],
    "Revelation 14:8": ["The Fall of Babylon Announced", "Another angel declares that Babylon the great has fallen because it led the nations into corruption."],
    "Revelation 14:9": ["Warning Against Worshiping the Beast", "A third angel warns that anyone who worships the beast and receives its mark will face God's judgment."],
    "Revelation 14:12": ["Call for the Perseverance of the Saints", "God’s people are called to remain faithful and keep His commandments and their faith in Jesus."],
    "Revelation 14:13": ["Blessed Are the Dead in the Lord", "Those who die in the Lord are blessed because they will rest from their labor and their deeds will follow them."],
    "Revelation 14:14": ["The Harvest of the Earth", "John sees one like the Son of Man seated on a cloud with a sharp sickle ready to reap the earth."],
    "Revelation 14:17": ["The Gathering of the Grapes", "Another angel with a sharp sickle gathers the grapes of the earth for the winepress of God's wrath."],
    "Revelation 14:19": ["The Winepress of God's Wrath", "The grapes are thrown into the great winepress of God’s wrath outside the city."],

    "Revelation 15:1": ["Seven Angels with the Last Plagues", "John sees another great and marvelous sign in heaven: seven angels with the seven last plagues, which complete God's wrath."],
    "Revelation 15:2": ["The Victors by the Sea of Glass", "Those who overcame the beast stand by the sea of glass holding harps of God."],
    "Revelation 15:3": ["The Song of Moses and the Lamb", "They sing a song praising God's mighty works and righteous ways."],
    "Revelation 15:5": ["The Temple in Heaven Opened", "The sanctuary of the tabernacle in heaven is opened."],
    "Revelation 15:6": ["The Seven Angels Come Out", "Seven angels come out of the temple wearing pure linen and golden sashes."],
    "Revelation 15:7": ["Bowls of God's Wrath Given", "One of the living creatures gives the seven angels seven golden bowls filled with the wrath of God."],
    "Revelation 15:8": ["The Temple Filled with Glory", "The temple fills with smoke from God's glory and power, and no one can enter until the plagues are completed."],

    "Revelation 16:1": ["The Seven Bowls of Wrath", "A loud voice from the temple commands the seven angels to pour out the bowls of God's wrath upon the earth."],
    "Revelation 16:2": ["The First Bowl: Painful Sores", "The first angel pours his bowl on the earth, and painful sores afflict those who have the mark of the beast."],
    "Revelation 16:3": ["The Second Bowl: Sea Turns to Blood", "The second angel pours his bowl into the sea, turning it into blood and killing every living thing in it."],
    "Revelation 16:4": ["The Third Bowl: Rivers Turn to Blood", "The third angel pours his bowl into the rivers and springs, and they become blood."],
    "Revelation 16:8": ["The Fourth Bowl: Scorching Sun", "The fourth angel pours his bowl on the sun, which scorches people with intense heat."],
    "Revelation 16:10": ["The Fifth Bowl: Darkness on the Beast's Kingdom", "The fifth angel pours his bowl on the throne of the beast, plunging its kingdom into darkness."],
    "Revelation 16:12": ["The Sixth Bowl: Euphrates Dried Up", "The sixth angel pours his bowl on the Euphrates River, preparing the way for the kings from the east."],
    "Revelation 16:13": ["Unclean Spirits Like Frogs", "Three unclean spirits come from the dragon, the beast, and the false prophet to gather the kings for battle."],
    "Revelation 16:16": ["Armageddon", "The kings of the earth are gathered at the place called Armageddon."],
    "Revelation 16:17": ["The Seventh Bowl: It Is Done", "The seventh angel pours his bowl into the air, and a loud voice from the throne declares that it is finished."],
    "Revelation 16:18": ["Great Earthquake and Judgment", "A massive earthquake and severe upheaval strike the earth unlike anything before."],
    "Revelation 16:19": ["Babylon Remembered for Judgment", "God remembers Babylon the great and gives her the cup filled with the wine of His wrath."],
    "Revelation 16:21": ["Great Hail from Heaven", "Huge hailstones fall from heaven upon people, yet they continue to curse God."],

    "Revelation 17:1": ["The Judgment of the Great Prostitute", "An angel invites John to see the judgment of the great prostitute who sits on many waters."],
    "Revelation 17:3": ["The Woman on the Scarlet Beast", "John sees a woman sitting on a scarlet beast covered with blasphemous names and having seven heads and ten horns."],
    "Revelation 17:4": ["The Woman's Luxury and Corruption", "The woman is dressed in purple and scarlet, adorned with gold and jewels, holding a golden cup filled with abominations."],
    "Revelation 17:5": ["Mystery Babylon the Great", "On her forehead is written the name: Babylon the Great, the mother of prostitutes and of the abominations of the earth."],
    "Revelation 17:6": ["Drunk with the Blood of the Saints", "The woman is drunk with the blood of God's holy people and the witnesses of Jesus."],
    "Revelation 17:7": ["Explanation of the Mystery", "The angel begins to explain the mystery of the woman and the beast she rides."],
    "Revelation 17:9": ["Meaning of the Seven Heads", "The seven heads represent seven mountains and also seven kings."],
    "Revelation 17:12": ["The Ten Kings", "The ten horns represent ten kings who will receive authority with the beast for a short time."],
    "Revelation 17:14": ["The Lamb Will Overcome", "They will wage war against the Lamb, but the Lamb will triumph because He is Lord of lords and King of kings."],
    "Revelation 17:16": ["The Destruction of the Woman", "The beast and the ten horns will turn against the woman and destroy her."],
    "Revelation 17:18": ["The Woman Represents the Great City", "The woman represents the great city that rules over the kings of the earth."],

    "Revelation 18:1": ["The Fall of Babylon Announced", "Another mighty angel comes down from heaven announcing that Babylon the great has fallen."],
    "Revelation 18:2": ["Babylon Becomes a Dwelling for Demons", "The once-great city becomes a place for demons and every unclean spirit."],
    "Revelation 18:4": ["Call to Come Out of Babylon", "God's people are warned to come out of Babylon so they will not share in her sins or receive her plagues."],
    "Revelation 18:6": ["Babylon's Judgment", "Babylon is to be repaid for what she has done, receiving double for her sins."],
    "Revelation 18:9": ["Kings Lament Babylon", "The kings of the earth who shared in her luxury mourn when they see the smoke of her burning."],
    "Revelation 18:11": ["Merchants Mourn Babylon", "The merchants of the earth weep because no one buys their cargo anymore."],
    "Revelation 18:17": ["Sudden Destruction of Babylon", "In one hour such great wealth is destroyed, and sailors and traders mourn her fall."],
    "Revelation 18:20": ["Heaven Rejoices Over Babylon", "Heaven and the saints rejoice because God has judged Babylon for what she did to them."],
    "Revelation 18:21": ["Babylon Thrown Down", "A mighty angel throws a great millstone into the sea, symbolizing the complete destruction of Babylon."],
    "Revelation 18:23": ["Babylon's Influence Ended", "The light of a lamp will never shine in her again because she deceived the nations with her sorcery."],
    "Revelation 18:24": ["Babylon Guilty of Bloodshed", "The city is found guilty of the blood of prophets, saints, and all who were slain on the earth."],

    "Revelation 19:1": ["Praise in Heaven", "A great multitude in heaven praises God for His salvation, glory, and power because His judgments are true and just."],
    "Revelation 19:3": ["Babylon's Smoke Rises", "Heaven rejoices as the smoke from Babylon’s destruction rises forever."],
    "Revelation 19:4": ["The Elders Worship God", "The twenty-four elders and the four living creatures fall down and worship God on the throne."],
    "Revelation 19:6": ["The Reign of the Lord", "A mighty voice declares that the Lord God Almighty reigns."],
    "Revelation 19:7": ["The Marriage of the Lamb", "Heaven celebrates the marriage of the Lamb, and His bride has prepared herself."],
    "Revelation 19:9": ["Blessed Are the Invited", "Those invited to the wedding supper of the Lamb are called blessed."],
    "Revelation 19:11": ["The Rider on the White Horse", "John sees heaven opened and Christ riding a white horse called Faithful and True."],
    "Revelation 19:13": ["The Word of God", "The rider is clothed with a robe dipped in blood, and His name is the Word of God."],
    "Revelation 19:15": ["The King of Kings", "From His mouth comes a sharp sword, and He rules the nations with authority."],
    "Revelation 19:17": ["The Great Supper of God", "An angel calls the birds to gather for the great supper of God."],
    "Revelation 19:19": ["The Beast Makes War", "The beast and the kings of the earth gather to fight against Christ and His army."],
    "Revelation 19:20": ["The Beast and False Prophet Defeated", "The beast and the false prophet are captured and thrown alive into the lake of fire."],
    "Revelation 19:21": ["The Enemies Destroyed", "The remaining enemies are slain by the sword that comes from the mouth of Christ."],

    "Revelation 20:1": ["Satan Bound for a Thousand Years", "An angel comes down from heaven with the key to the abyss and chains Satan for a thousand years."],
    "Revelation 20:4": ["The Reign of the Saints", "Those who were faithful to Christ come to life and reign with Him for a thousand years."],
    "Revelation 20:5": ["The First Resurrection", "This is called the first resurrection, and the rest of the dead do not live again until the thousand years are finished."],
    "Revelation 20:7": ["Satan Released from Prison", "After the thousand years Satan is released from his prison and goes out to deceive the nations."],
    "Revelation 20:8": ["The Final Rebellion", "Satan gathers the nations for battle against God's people."],
    "Revelation 20:9": ["Fire from Heaven", "Fire comes down from heaven and destroys the enemies surrounding the saints."],
    "Revelation 20:10": ["Satan Thrown into the Lake of Fire", "The devil is thrown into the lake of fire where the beast and false prophet already are."],
    "Revelation 20:11": ["The Great White Throne", "John sees a great white throne where the final judgment takes place."],
    "Revelation 20:12": ["The Dead Judged", "The dead stand before God and are judged according to what is written in the books."],
    "Revelation 20:14": ["Death and Hades Destroyed", "Death and Hades are thrown into the lake of fire, which is the second death."],
    "Revelation 20:15": ["The Book of Life", "Anyone whose name is not found written in the book of life is thrown into the lake of fire."],

    "Revelation 21:1": ["A New Heaven and New Earth", "John sees a new heaven and a new earth because the first heaven and earth have passed away."],
    "Revelation 21:2": ["The New Jerusalem", "The holy city, New Jerusalem, comes down from heaven prepared like a bride for her husband."],
    "Revelation 21:3": ["God Dwells with His People", "A loud voice declares that God's dwelling place is now among His people."],
    "Revelation 21:4": ["No More Death or Sorrow", "God wipes away every tear, and death, mourning, and pain are gone forever."],
    "Revelation 21:5": ["All Things Made New", "The One seated on the throne declares that He is making everything new."],
    "Revelation 21:6": ["The Alpha and the Omega", "God declares that He is the beginning and the end and gives living water freely to the thirsty."],
    "Revelation 21:8": ["Judgment of the Wicked", "Those who practice evil will have their part in the lake of fire."],
    "Revelation 21:9": ["The Bride, the New Jerusalem", "An angel shows John the holy city coming down from heaven as the bride of the Lamb."],
    "Revelation 21:11": ["The Glory of the City", "The city shines with the glory of God like a precious jewel."],
    "Revelation 21:15": ["Measuring the Holy City", "The angel measures the city, its gates, and its walls."],
    "Revelation 21:18": ["The City's Precious Foundations", "The walls and foundations of the city are decorated with precious stones."],
    "Revelation 21:22": ["No Temple in the City", "The Lord God Almighty and the Lamb are the temple of the city."],
    "Revelation 21:23": ["The Glory of God Is Its Light", "The city has no need of sun or moon because God's glory gives it light."],
    "Revelation 21:27": ["Only the Redeemed Enter", "Nothing impure will enter the city, only those written in the Lamb's book of life."],

    "Revelation 22:1": ["The River of Life", "John sees the river of the water of life flowing from the throne of God and of the Lamb."],
    "Revelation 22:2": ["The Tree of Life Restored", "On both sides of the river stands the tree of life bearing fruit every month and bringing healing to the nations."],
    "Revelation 22:3": ["God's Servants See His Face", "There will be no more curse, and God's servants will serve Him and see His face."],
    "Revelation 22:5": ["The Eternal Light", "There will be no night there because the Lord God will give them light, and they will reign forever."],
    "Revelation 22:6": ["The Words Are Trustworthy", "The angel assures John that the words of this prophecy are faithful and true."],
    "Revelation 22:7": ["Jesus Is Coming Soon", "Christ promises that He is coming soon and blesses those who keep the words of this prophecy."],
    "Revelation 22:10": ["The Time Is Near", "John is told not to seal the prophecy because the time of fulfillment is near."],
    "Revelation 22:12": ["Christ Brings His Reward", "Jesus declares that He is coming soon and will reward each person according to their deeds."],
    "Revelation 22:13": ["The Alpha and the Omega", "Christ proclaims that He is the Alpha and the Omega, the First and the Last."],
    "Revelation 22:16": ["Jesus the Bright Morning Star", "Jesus identifies Himself as the root and descendant of David and the bright morning star."],
    "Revelation 22:17": ["The Invitation to Come", "The Spirit and the bride invite everyone who is thirsty to come and receive the water of life freely."],
    "Revelation 22:18": ["Warning About the Prophecy", "A warning is given not to add to or take away from the words of this prophecy."],
    "Revelation 22:20": ["Final Promise of Christ", "Jesus declares again that He is coming soon."],
    "Revelation 22:21": ["The Closing Blessing", "The grace of the Lord Jesus be with God's people."]
};

// Helper function to get header for a specific verse with language support
function getVerseHeader(bookName, chapter, verse) {
    // Normalize book name: Convert "I Samuel" → "1 Samuel", "II Kings" → "2 Kings", etc.
    const normalizedBookName = bookName
        .replace(/^I\s+/, '1 ')
        .replace(/^II\s+/, '2 ')
        .replace(/^III\s+/, '3 ');

    const key = `${normalizedBookName} ${chapter}:${verse}`;

    // Get verse heading language preference from settings (not the main Bible language)
    // This allows verse headings to be in a different language than the main text
    const verseHeadingLang = typeof localStorage !== 'undefined'
        ? localStorage.getItem('settingsVerseHeadingLanguage') || 'ta'
        : 'ta';
    const lang = verseHeadingLang === 'ta' ? 'tamil' : verseHeadingLang === 'en' ? 'english' : 'tamil';

    // Try to get header in the requested language, fall back to English if not found
    if (lang === 'tamil' && typeof verseHeadersTamil !== 'undefined') {
        const tamilHeader = verseHeadersTamil[key];
        if (tamilHeader) return tamilHeader;
    }

    // Fall back to English headers
    return verseHeaders[key] || null;
}
