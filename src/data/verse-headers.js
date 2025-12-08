// Verse headers/section titles that appear before specific verses
// Format: "Book Chapter:Verse": "Header Title"
const verseHeaders = {
    // Matthew Chapter 1
    "Matthew 1:1": "The Record of Jesus Christ's Genealogy",
    "Matthew 1:2": "The Line from Abraham to David",
    "Matthew 1:7": "The Line from David to the Babylonian Exile",
    "Matthew 1:12": "The Line from the Exile to Jesus Christ",
    "Matthew 1:17": "Summary of the Three Generations",
    "Matthew 1:18": "The Birth of Jesus Christ Begins",
    "Matthew 1:19": "Joseph's Dilemma and His Character",
    "Matthew 1:20": "The Angel's Message: The Child Will Save His People",
    "Matthew 1:22": "Isaiah's Prophecy Fulfilled: Emmanuel",
    "Matthew 1:24": "Joseph Obeys and Names the Child Jesus",
    
    // Matthew Chapter 2
    "Matthew 2:1": "Wise Men Search for the Newborn King",
    "Matthew 2:3": "Herod Troubled & Prophecy of Bethlehem",
    "Matthew 2:7": "Herod's Secret Meeting with the Wise Men",
    "Matthew 2:9": "The Star Leads Them to Jesus — Worship & Gifts",
    "Matthew 2:12": "Warning in a Dream",
    "Matthew 2:13": "Flight to Egypt & Prophecy Fulfilled",
    "Matthew 2:16": "Herod's Massacre of the Children",
    "Matthew 2:19": "Return from Egypt & Settlement in Nazareth",
    
    // Matthew Chapter 3
    "Matthew 3:1": "John the Baptist Begins His Ministry",
    "Matthew 3:3": "Isaiah's Prophecy About John",
    "Matthew 3:4": "John's Appearance & Baptizing Ministry",
    "Matthew 3:7": "John Confronts Religious Leaders",
    "Matthew 3:11": "The Mighty One Who Will Come",
    "Matthew 3:13": "Jesus Comes to Be Baptized",
    "Matthew 3:16": "The Father's Voice & Jesus' Anointing",
    
    // Matthew Chapter 4
    "Matthew 4:1": "Jesus Led into the Wilderness",
    "Matthew 4:3": "First Temptation — Stones to Bread",
    "Matthew 4:5": "Second Temptation — Jump from the Temple",
    "Matthew 4:8": "Third Temptation — Worship for Kingdoms",
    "Matthew 4:12": "Jesus Begins His Ministry",
    "Matthew 4:18": "Calling of the First Disciples",
    "Matthew 4:23": "Teaching, Healing, and Growing Crowds",
    
    // Matthew Chapter 5
    "Matthew 5:1": "Jesus Begins to Teach",
    "Matthew 5:3": "The Beatitudes",
    "Matthew 5:13": "Salt of the Earth",
    "Matthew 5:14": "Light of the World",
    "Matthew 5:17": "Jesus Fulfills the Law",
    "Matthew 5:21": "Teaching on Anger",
    "Matthew 5:27": "Teaching on Adultery",
    "Matthew 5:31": "Teaching on Divorce",
    "Matthew 5:33": "Teaching on Oaths",
    "Matthew 5:38": "Teaching on Retaliation",
    "Matthew 5:43": "Teaching on Loving Enemies",
    
    // Matthew Chapter 6
    "Matthew 6:1": "Giving in Secret",
    "Matthew 6:5": "True Prayer and Sincerity",
    "Matthew 6:9": "The Lord's Prayer",
    "Matthew 6:14": "Forgiveness",
    "Matthew 6:16": "Fasting in Secret",
    "Matthew 6:19": "Treasure in Heaven",
    "Matthew 6:22": "The Lamp of the Body",
    "Matthew 6:24": "No One Can Serve Two Masters",
    "Matthew 6:25": "Do Not Worry — God Provides",
    
    // Matthew Chapter 7
    "Matthew 7:1": "Do Not Judge Hypocritically",
    "Matthew 7:6": "Do Not Give What Is Holy to Dogs",
    "Matthew 7:7": "Ask, Seek, Knock",
    "Matthew 7:12": "The Golden Rule",
    "Matthew 7:13": "Narrow and Wide Gates",
    "Matthew 7:15": "False Prophets Known by Fruit",
    "Matthew 7:21": "Not Everyone Who Says 'Lord'",
    "Matthew 7:24": "Wise and Foolish Builders",
    "Matthew 7:28": "Crowds Amazed at His Authority",
    
    // Matthew Chapter 8
    "Matthew 8:1": "Healing a Leper",
    "Matthew 8:5": "Healing the Centurion's Servant",
    "Matthew 8:14": "Healing Peter's Mother-in-Law",
    "Matthew 8:18": "The Cost of Discipleship",
    "Matthew 8:23": "Jesus Calms the Storm",
    "Matthew 8:28": "Demons Driven into Pigs",
    
    // Matthew Chapter 9
    "Matthew 9:1": "Healing the Paralytic",
    "Matthew 9:9": "Calling of Matthew",
    "Matthew 9:14": "Question About Fasting",
    "Matthew 9:18": "Healing the Woman & Raising the Girl",
    "Matthew 9:27": "Two Blind Men Healed",
    "Matthew 9:32": "Mute Demon Cast Out",
    "Matthew 9:35": "The Harvest Is Plentiful",
    
    // Matthew Chapter 10
    "Matthew 10:1": "The Twelve Apostles Listed",
    "Matthew 10:5": "Instructions for Their Mission",
    "Matthew 10:16": "Warnings of Persecution",
    "Matthew 10:24": "Fear God, Not Men",
    "Matthew 10:32": "Confessing Christ & Taking the Cross",
    "Matthew 10:40": "Rewards for Receiving Disciples",
    
    // Matthew Chapter 11
    "Matthew 11:1": "Jesus Answers John's Question",
    "Matthew 11:7": "Jesus' Testimony About John",
    "Matthew 11:16": "This Generation's Unbelief",
    "Matthew 11:20": "Woes on Unrepentant Cities",
    "Matthew 11:25": "Jesus Reveals the Father",
    "Matthew 11:28": "Come to Me — My Yoke Is Easy",
    
    // Matthew Chapter 12
    "Matthew 12:1": "Lord of the Sabbath",
    "Matthew 12:9": "Healing the Withered Hand",
    "Matthew 12:15": "Gentleness of God's Servant",
    "Matthew 12:22": "Blasphemy Against the Spirit",
    "Matthew 12:33": "Tree and Its Fruit",
    "Matthew 12:38": "The Sign of Jonah",
    "Matthew 12:43": "Return of an Unclean Spirit",
    "Matthew 12:46": "Jesus' True Family",
    
    // Matthew Chapter 13
    "Matthew 13:1": "Parable of the Sower",
    "Matthew 13:10": "Purpose of Parables",
    "Matthew 13:18": "Explanation of the Sower",
    "Matthew 13:24": "Parable of the Tares",
    "Matthew 13:31": "Mustard Seed & Leaven",
    "Matthew 13:34": "Prophecy About Parables",
    "Matthew 13:36": "Explanation of the Tares",
    "Matthew 13:44": "Hidden Treasure",
    "Matthew 13:45": "Pearl of Great Price",
    "Matthew 13:47": "Parable of the Net",
    "Matthew 13:51": "Scribes Trained for the Kingdom",
    "Matthew 13:53": "Rejection at Nazareth",
    
    // Matthew Chapter 14
    "Matthew 14:1": "Death of John the Baptist",
    "Matthew 14:13": "Feeding the Five Thousand",
    "Matthew 14:22": "Jesus Walks on Water",
    "Matthew 14:34": "Healings at Gennesaret",
    
    // Matthew Chapter 15
    "Matthew 15:1": "Tradition vs God's Commandments",
    "Matthew 15:10": "What Defiles a Person",
    "Matthew 15:21": "Faith of the Canaanite Woman",
    "Matthew 15:29": "Healing Many",
    "Matthew 15:32": "Feeding the Four Thousand",
    
    // Matthew Chapter 16
    "Matthew 16:1": "Demand for a Sign",
    "Matthew 16:5": "Leaven of the Pharisees",
    "Matthew 16:13": "Peter's Confession",
    "Matthew 16:21": "Jesus Predicts His Death",
    "Matthew 16:24": "Take Up Your Cross",
    
    // Matthew Chapter 17
    "Matthew 17:1": "The Transfiguration",
    "Matthew 17:14": "Healing the Demon-Possessed Boy",
    "Matthew 17:22": "Second Prediction of His Death",
    "Matthew 17:24": "The Temple Tax",
    
    // Matthew Chapter 18
    "Matthew 18:1": "Greatest in the Kingdom",
    "Matthew 18:6": "Woes Against Stumbling",
    "Matthew 18:10": "The Lost Sheep",
    "Matthew 18:15": "Correcting a Brother",
    "Matthew 18:21": "Parable of the Unforgiving Servant",
    
    // Matthew Chapter 19
    "Matthew 19:1": "Teaching on Marriage and Divorce",
    "Matthew 19:13": "Jesus Blesses Children",
    "Matthew 19:16": "The Rich Young Ruler",
    "Matthew 19:23": "The Difficulty of Riches",
    
    // Matthew Chapter 20
    "Matthew 20:1": "Workers in the Vineyard",
    "Matthew 20:17": "Prediction of His Death",
    "Matthew 20:20": "Request of James and John's Mother",
    "Matthew 20:29": "Two Blind Men Healed",
    
    // Matthew Chapter 21
    "Matthew 21:1": "Triumphal Entry",
    "Matthew 21:12": "Cleansing the Temple",
    "Matthew 21:18": "Cursing the Fig Tree",
    "Matthew 21:23": "Jesus' Authority Questioned",
    "Matthew 21:28": "Parable of the Two Sons",
    "Matthew 21:33": "Parable of the Tenants",
    
    // Matthew Chapter 22
    "Matthew 22:1": "Parable of the Wedding Feast",
    "Matthew 22:15": "Taxes to Caesar",
    "Matthew 22:23": "Question About Resurrection",
    "Matthew 22:34": "Greatest Commandments",
    "Matthew 22:41": "Jesus Questions the Pharisees",
    
    // Matthew Chapter 23
    "Matthew 23:1": "Warning Against the Scribes and Pharisees",
    "Matthew 23:4": "Heavy Burdens They Lay on People",
    "Matthew 23:5": "Their Love for Recognition",
    "Matthew 23:8": "True Greatness Is Humility",
    "Matthew 23:13": "Woes: Misleading Converts",
    "Matthew 23:16": "Woe: Blind Guides",
    "Matthew 23:23": "Woe: Neglecting Justice, Mercy, Faith",
    "Matthew 23:25": "Woe: Cleaning Outside but Not Inside",
    "Matthew 23:27": "Woe: Whitewashed Tombs",
    "Matthew 23:29": "Woe: Sons of Murderers of Prophets",
    "Matthew 23:33": "Judgment for the Righteous Blood",
    "Matthew 23:37": "Jesus' Lament Over Jerusalem",
    
    // Matthew Chapter 24
    "Matthew 24:1": "Prediction of the Temple's Destruction",
    "Matthew 24:3": "Signs of the End",
    "Matthew 24:15": "The Great Tribulation",
    "Matthew 24:29": "The Coming of the Son of Man",
    "Matthew 24:32": "Parable of the Fig Tree",
    "Matthew 24:36": "Stay Alert — No One Knows the Hour",
    
    // Matthew Chapter 25
    "Matthew 25:1": "Parable of the Ten Virgins",
    "Matthew 25:14": "Parable of the Talents",
    "Matthew 25:31": "The Final Judgment (Sheep & Goats)",
    
    // Matthew Chapter 26
    "Matthew 26:1": "Plot to Kill Jesus",
    "Matthew 26:6": "Anointing at Bethany",
    "Matthew 26:14": "Judas Agrees to Betray",
    "Matthew 26:17": "The Last Supper Begins",
    "Matthew 26:26": "Institution of the Lord's Supper",
    "Matthew 26:31": "Prediction of Peter's Denial",
    "Matthew 26:36": "Gethsemane Prayer",
    "Matthew 26:47": "Arrest of Jesus",
    "Matthew 26:57": "Jesus Before the Sanhedrin",
    "Matthew 26:69": "Peter Denies Jesus",
    
    // Matthew Chapter 27
    "Matthew 27:1": "Jesus Sent to Pilate – Judas' Remorse",
    "Matthew 27:11": "Jesus Before Pilate",
    "Matthew 27:27": "Mocked by Soldiers",
    "Matthew 27:32": "Crucifixion",
    "Matthew 27:45": "Death of Jesus",
    "Matthew 27:57": "Burial of Jesus",
    "Matthew 27:62": "Tomb Secured",
    
    // Matthew Chapter 28
    "Matthew 28:1": "The Resurrection",
    "Matthew 28:11": "Guards Spread False Report",
    "Matthew 28:16": "The Great Commission",
    
    // Mark Chapter 1
    "Mark 1:1": "The Beginning of the Gospel of Jesus Christ",
    "Mark 1:2": "John the Baptist Prepares the Way",
    "Mark 1:9": "Baptism of Jesus",
    "Mark 1:12": "Temptation in the Wilderness",
    "Mark 1:14": "Calling of the First Disciples",
    "Mark 1:21": "Jesus Casts Out an Unclean Spirit",
    "Mark 1:29": "Healing Peter's Mother-in-Law and Many Others",
    "Mark 1:35": "Jesus Prays and Preaches in Galilee",
    "Mark 1:40": "Healing a Leper",
    
    // Mark Chapter 2
    "Mark 2:1": "Healing the Paralytic Through the Roof",
    "Mark 2:13": "Calling of Levi and Question About Eating with Sinners",
    "Mark 2:18": "Question About Fasting",
    "Mark 2:23": "Lord of the Sabbath",
    
    // Mark Chapter 3
    "Mark 3:1": "Healing the Man with the Withered Hand",
    "Mark 3:7": "Great Crowds Follow Jesus",
    "Mark 3:13": "Appointment of the Twelve Apostles",
    "Mark 3:20": "Accusation of Working by Beelzebul",
    "Mark 3:31": "Jesus' True Family",
    
    // Mark Chapter 4
    "Mark 4:1": "Parable of the Sower",
    "Mark 4:10": "Purpose of Parables and Explanation of the Sower",
    "Mark 4:21": "Lamp on a Stand",
    "Mark 4:26": "Parable of the Growing Seed",
    "Mark 4:30": "Parable of the Mustard Seed",
    "Mark 4:33": "Jesus Teaches with Parables",
    "Mark 4:35": "Jesus Calms the Storm",
    
    // Mark Chapter 5
    "Mark 5:1": "Healing the Demon-Possessed Man (Legion)",
    "Mark 5:21": "Healing the Woman with the Issue of Blood",
    "Mark 5:35": "Raising Jairus' Daughter",
    
    // Mark Chapter 6
    "Mark 6:1": "Rejection at Nazareth",
    "Mark 6:7": "The Twelve Sent Out",
    "Mark 6:14": "Death of John the Baptist",
    "Mark 6:30": "Feeding the Five Thousand",
    "Mark 6:45": "Jesus Walks on Water",
    "Mark 6:53": "Healings at Gennesaret",
    
    // Mark Chapter 7
    "Mark 7:1": "Traditions of Men vs God's Commandments",
    "Mark 7:14": "What Defiles a Person",
    "Mark 7:24": "Faith of the Syrophoenician Woman",
    "Mark 7:31": "Healing a Deaf and Mute Man",
    
    // Mark Chapter 8
    "Mark 8:1": "Feeding the Four Thousand",
    "Mark 8:11": "Pharisees Demand a Sign",
    "Mark 8:14": "Warning About the Leaven of Pharisees and Herod",
    "Mark 8:22": "Healing the Blind Man at Bethsaida",
    "Mark 8:27": "Peter's Confession of Christ",
    "Mark 8:31": "Jesus Predicts His Death",
    "Mark 8:34": "Take Up Your Cross",
    
    // Mark Chapter 9
    "Mark 9:1": "Some Will Not Taste Death Until They See the Kingdom",
    "Mark 9:2": "The Transfiguration",
    "Mark 9:14": "Healing the Demon-Possessed Boy",
    "Mark 9:30": "Jesus Predicts His Death Again",
    "Mark 9:33": "Who Is Greatest?",
    "Mark 9:38": "Whoever Is Not Against Us Is for Us",
    "Mark 9:42": "Warnings Against Causing Others to Stumble",
    
    // Mark Chapter 10
    "Mark 10:1": "Teaching on Divorce",
    "Mark 10:13": "Jesus Blesses Little Children",
    "Mark 10:17": "Rich Young Ruler",
    "Mark 10:32": "Jesus Predicts His Death a Third Time",
    "Mark 10:35": "Request of James and John",
    "Mark 10:46": "Healing Blind Bartimaeus",
    
    // Mark Chapter 11
    "Mark 11:1": "Triumphal Entry into Jerusalem",
    "Mark 11:12": "Cursing the Fig Tree",
    "Mark 11:15": "Cleansing the Temple",
    "Mark 11:20": "Lesson from the Withered Fig Tree",
    "Mark 11:27": "Question About Jesus' Authority",
    
    // Mark Chapter 12
    "Mark 12:1": "Parable of the Wicked Tenants",
    "Mark 12:13": "Taxes to Caesar",
    "Mark 12:18": "Question About the Resurrection",
    "Mark 12:28": "The Greatest Commandment",
    "Mark 12:35": "David Calls the Messiah Lord",
    "Mark 12:38": "Warning About the Scribes",
    "Mark 12:41": "The Widow's Offering",
    
    // Mark Chapter 13
    "Mark 13:1": "Prediction of the Temple's Destruction",
    "Mark 13:3": "Signs of the End",
    "Mark 13:14": "The Great Tribulation",
    "Mark 13:24": "The Coming of the Son of Man",
    "Mark 13:28": "The Lesson of the Fig Tree",
    "Mark 13:32": "Stay Awake — No One Knows the Hour",
    
    // Mark Chapter 14
    "Mark 14:1": "Plot to Kill Jesus",
    "Mark 14:3": "Anointing at Bethany",
    "Mark 14:10": "Judas Agrees to Betray Jesus",
    "Mark 14:12": "The Last Supper",
    "Mark 14:22": "Institution of the Lord's Supper",
    "Mark 14:27": "Prediction of Peter's Denial",
    "Mark 14:32": "Gethsemane Prayer",
    "Mark 14:43": "Arrest of Jesus",
    "Mark 14:53": "Jesus Before the Sanhedrin",
    "Mark 14:66": "Peter Denies Jesus",
    
    // Mark Chapter 15
    "Mark 15:1": "Jesus Before Pilate",
    "Mark 15:16": "Mocked by the Soldiers",
    "Mark 15:21": "Crucifixion",
    "Mark 15:33": "Death of Jesus",
    "Mark 15:42": "Burial of Jesus",
    
    // Mark Chapter 16
    "Mark 16:1": "The Resurrection",
    "Mark 16:9": "Appearance to Mary Magdalene",
    "Mark 16:12": "Appearance to Two on the Road",
    "Mark 16:14": "Jesus Appears to the Eleven",
    "Mark 16:15": "The Great Commission in Mark",
    "Mark 16:19": "Ascension of Jesus",
    
    // John Chapter 1
    "John 1:1": "The Word in the Beginning",
    "John 1:6": "John the Baptist's Witness",
    "John 1:14": "The Word Became Flesh",
    "John 1:19": "John Denies Being the Messiah",
    "John 1:29": "Behold the Lamb of God",
    "John 1:35": "First Disciples Follow Jesus",
    "John 1:43": "Calling of Philip and Nathanael",
    
    // John Chapter 2
    "John 2:1": "Wedding at Cana — Water to Wine",
    "John 2:13": "Cleansing of the Temple",
    "John 2:23": "Jesus Knows What Is in Man",
    
    // John Chapter 3
    "John 3:1": "Jesus and Nicodemus",
    "John 3:16": "God's Love for the World",
    "John 3:22": "John the Baptist Exalts Christ",
    "John 3:31": "He Who Comes from Above",
    
    // John Chapter 4
    "John 4:1": "Jesus Travels Through Samaria",
    "John 4:7": "Conversation with the Samaritan Woman",
    "John 4:27": "The Disciples Return — Fields Are White",
    "John 4:39": "Samaritans Believe",
    "John 4:43": "Return to Galilee",
    "John 4:46": "Healing the Official's Son",
    
    // John Chapter 5
    "John 5:1": "Healing at the Pool of Bethesda",
    "John 5:16": "Authority of the Son",
    "John 5:24": "The Son Gives Life",
    "John 5:31": "Witnesses to Jesus",
    
    // John Chapter 6
    "John 6:1": "Feeding the Five Thousand",
    "John 6:16": "Jesus Walks on Water",
    "John 6:22": "The Bread of Life",
    "John 6:41": "Jews Complain About Him",
    "John 6:60": "Many Disciples Turn Back",
    
    // John Chapter 7
    "John 7:1": "Jesus Goes Secretly to the Feast",
    "John 7:14": "Teaching in the Temple",
    "John 7:25": "Is This the Christ?",
    "John 7:32": "Officers Sent to Arrest Jesus",
    "John 7:37": "Rivers of Living Water",
    "John 7:40": "Division Among the People",
    "John 7:53": "Everyone Goes Home",
    
    // John Chapter 8
    "John 8:1": "Woman Caught in Adultery",
    "John 8:12": "I Am the Light of the World",
    "John 8:21": "Where I Go You Cannot Come",
    "John 8:31": "Truth Will Set You Free",
    "John 8:48": "Before Abraham Was, I AM",
    
    // John Chapter 9
    "John 9:1": "Healing of the Man Born Blind",
    "John 9:13": "Investigation by the Pharisees",
    "John 9:35": "Spiritual Blindness",
    
    // John Chapter 10
    "John 10:1": "The Sheep and the Shepherd",
    "John 10:7": "I Am the Good Shepherd",
    "John 10:22": "At the Feast of Dedication",
    "John 10:31": "They Try to Stone Jesus Again",
    
    // John Chapter 11
    "John 11:1": "Death of Lazarus",
    "John 11:17": "Jesus Arrives in Bethany",
    "John 11:38": "Lazarus Raised from the Dead",
    "John 11:45": "Plot to Kill Jesus",
    
    // John Chapter 12
    "John 12:1": "Mary Anoints Jesus",
    "John 12:12": "Triumphal Entry",
    "John 12:20": "Jesus Predicts His Death",
    "John 12:37": "Unbelief of the People",
    "John 12:44": "Jesus' Final Public Appeal",
    
    // John Chapter 13
    "John 13:1": "Jesus Washes the Disciples' Feet",
    "John 13:18": "Prediction of Judas' Betrayal",
    "John 13:31": "A New Commandment",
    "John 13:36": "Prediction of Peter's Denial",
    
    // John Chapter 14
    "John 14:1": "I Am the Way, the Truth, and the Life",
    "John 14:8": "He Who Has Seen Me Has Seen the Father",
    "John 14:15": "Promise of the Holy Spirit",
    "John 14:19": "Because I Live, You Will Live",
    "John 14:25": "Peace I Leave with You",
    
    // John Chapter 15
    "John 15:1": "I Am the True Vine",
    "John 15:18": "World's Hatred of Disciples",
    "John 15:26": "The Spirit Will Testify",
    
    // John Chapter 16
    "John 16:1": "Work of the Holy Spirit",
    "John 16:16": "Your Grief Will Turn to Joy",
    "John 16:25": "Take Heart — I Have Overcome the World",
    
    // John Chapter 17
    "John 17:1": "Glorify Your Son",
    "John 17:6": "Jesus Prays for His Disciples",
    "John 17:20": "Jesus Prays for All Believers",
    
    // John Chapter 18
    "John 18:1": "Betrayal and Arrest",
    "John 18:13": "Jesus Before Annas",
    "John 18:25": "Peter Denies Jesus",
    "John 18:28": "Jesus Before Pilate",
    
    // John Chapter 19
    "John 19:1": "Jesus Presented to the People",
    "John 19:17": "Crucifixion",
    "John 19:28": "It Is Finished",
    "John 19:31": "Side Pierced",
    "John 19:38": "Burial",
    
    // John Chapter 20
    "John 20:1": "The Empty Tomb",
    "John 20:11": "Jesus Appears to Mary Magdalene",
    "John 20:19": "Jesus Appears to the Disciples",
    "John 20:24": "Thomas Believes",
    "John 20:30": "Purpose of This Gospel",
    
    // John Chapter 21
    "John 21:1": "Jesus Appears at the Sea of Galilee",
    "John 21:15": "Jesus Restores Peter",
    "John 21:20": "Final Testimony and Conclusion",
    
    // Luke Chapter 1
    "Luke 1:1": "Purpose of Luke's Gospel",
    "Luke 1:5": "Announcement of John the Baptist's Birth",
    "Luke 1:26": "Announcement of Jesus' Birth",
    "Luke 1:39": "Mary Visits Elizabeth",
    "Luke 1:46": "Mary's Song (The Magnificat)",
    "Luke 1:57": "Birth of John the Baptist",
    "Luke 1:67": "Zechariah's Prophecy (Benedictus)",
    "Luke 1:80": "John Grows and Becomes Strong",
    
    // Luke Chapter 2
    "Luke 2:1": "Birth of Jesus",
    "Luke 2:8": "Angels Announce to the Shepherds",
    "Luke 2:21": "Jesus Circumcised and Named",
    "Luke 2:22": "Presentation at the Temple",
    "Luke 2:25": "Simeon's Prophecy",
    "Luke 2:36": "Anna the Prophetess",
    "Luke 2:39": "Return to Nazareth",
    "Luke 2:41": "Boy Jesus in the Temple",
    "Luke 2:51": "Jesus Grows in Wisdom and Favor",
    
    // Luke Chapter 3
    "Luke 3:1": "John the Baptist's Ministry Begins",
    "Luke 3:7": "John's Call to Repentance",
    "Luke 3:15": "People Wonder About the Messiah",
    "Luke 3:19": "John Imprisoned",
    "Luke 3:21": "Baptism of Jesus",
    "Luke 3:23": "Genealogy of Jesus",
    
    // Luke Chapter 4
    "Luke 4:1": "Temptation of Jesus",
    "Luke 4:14": "Jesus Begins His Galilean Ministry",
    "Luke 4:16": "Rejected at Nazareth",
    "Luke 4:31": "Jesus Casts Out an Unclean Spirit",
    "Luke 4:38": "Healings at Simon's House",
    "Luke 4:42": "Jesus Preaches in Synagogues",
    
    // Luke Chapter 5
    "Luke 5:1": "Calling of Peter, James, and John",
    "Luke 5:12": "Healing a Leper",
    "Luke 5:17": "Healing the Paralytic",
    "Luke 5:27": "Calling of Levi and Teaching on Repentance",
    "Luke 5:33": "Question About Fasting",
    
    // Luke Chapter 6
    "Luke 6:1": "Lord of the Sabbath",
    "Luke 6:6": "Healing the Withered Hand",
    "Luke 6:12": "Choosing of the Twelve Apostles",
    "Luke 6:17": "Crowds Seek Jesus",
    "Luke 6:20": "Beatitudes and Woes",
    "Luke 6:27": "Love Your Enemies",
    "Luke 6:37": "Do Not Judge; Remove the Beam",
    "Luke 6:43": "Tree and Its Fruit",
    "Luke 6:46": "Wise and Foolish Builders",
    
    // Luke Chapter 7
    "Luke 7:1": "Healing the Centurion's Servant",
    "Luke 7:11": "Raising the Widow's Son",
    "Luke 7:18": "John the Baptist's Question",
    "Luke 7:24": "Jesus' Testimony About John",
    "Luke 7:36": "A Sinful Woman Anoints Jesus",
    
    // Luke Chapter 8
    "Luke 8:1": "Women Who Followed and Supported Jesus",
    "Luke 8:4": "Parable of the Sower",
    "Luke 8:9": "Explanation of the Sower",
    "Luke 8:16": "Lamp on a Stand",
    "Luke 8:19": "Jesus' True Family",
    "Luke 8:22": "Jesus Calms the Storm",
    "Luke 8:26": "Healing the Demon-Possessed Man",
    "Luke 8:40": "Healing the Woman & Raising Jairus' Daughter",
    
    // Luke Chapter 9
    "Luke 9:1": "The Twelve Sent Out",
    "Luke 9:7": "Herod's Perplexity",
    "Luke 9:10": "Feeding the Five Thousand",
    "Luke 9:18": "Peter's Confession of Christ",
    "Luke 9:21": "Jesus Predicts His Death",
    "Luke 9:23": "Take Up Your Cross",
    "Luke 9:28": "The Transfiguration",
    "Luke 9:37": "Healing the Demon-Possessed Boy",
    "Luke 9:44": "Second Prediction of His Death",
    "Luke 9:46": "Who Is Greatest?",
    "Luke 9:49": "Whoever Is Not Against You Is for You",
    "Luke 9:51": "A Samaritan Village Rejects Jesus",
    "Luke 9:57": "The Cost of Following Jesus",
    
    // Luke Chapter 10
    "Luke 10:1": "Sending of the Seventy-Two",
    "Luke 10:13": "Woes to the Unrepentant Towns",
    "Luke 10:17": "Return of the Seventy-Two & Jesus' Joy",
    "Luke 10:25": "Parable of the Good Samaritan",
    "Luke 10:38": "Mary and Martha",
    
    // Luke Chapter 11
    "Luke 11:1": "The Lord's Prayer",
    "Luke 11:5": "Ask, Seek, Knock",
    "Luke 11:14": "Divided Kingdom — Unclean Spirits",
    "Luke 11:27": "True Blessedness",
    "Luke 11:29": "The Sign of Jonah",
    "Luke 11:33": "Lamp of the Body",
    "Luke 11:37": "Woes to the Pharisees",
    "Luke 11:45": "Woes to the Lawyers",
    
    // Luke Chapter 12
    "Luke 12:1": "Beware of Hypocrisy and Fear God",
    "Luke 12:13": "Parable of the Rich Fool",
    "Luke 12:22": "Do Not Be Anxious",
    "Luke 12:35": "Watchful Servants",
    "Luke 12:49": "Jesus Brings Division",
    "Luke 12:54": "Discern the Times",
    
    // Luke Chapter 13
    "Luke 13:1": "Repent or Perish — Parable of the Barren Fig Tree",
    "Luke 13:10": "Healing a Crippled Woman",
    "Luke 13:18": "Mustard Seed & Leaven",
    "Luke 13:22": "The Narrow Door",
    "Luke 13:31": "Lament Over Jerusalem",
    
    // Luke Chapter 14
    "Luke 14:1": "Healing on the Sabbath",
    "Luke 14:7": "Teaching on Humility & Hospitality",
    "Luke 14:15": "Parable of the Great Banquet",
    "Luke 14:25": "Cost of Discipleship",
    "Luke 14:34": "Salt Without Flavor",
    
    // Luke Chapter 15
    "Luke 15:1": "Parable of the Lost Sheep",
    "Luke 15:8": "Parable of the Lost Coin",
    "Luke 15:11": "Parable of the Prodigal Son",
    
    // Luke Chapter 16
    "Luke 16:1": "Parable of the Unjust Steward",
    "Luke 16:14": "Warnings to the Pharisees",
    "Luke 16:19": "Rich Man and Lazarus",
    
    // Luke Chapter 17
    "Luke 17:1": "Forgiveness, Faith, and Duty",
    "Luke 17:11": "Healing of the Ten Lepers",
    "Luke 17:20": "The Coming of the Kingdom of God",
    
    // Luke Chapter 18
    "Luke 18:1": "Parable of the Persistent Widow",
    "Luke 18:9": "Parable of the Pharisee and the Tax Collector",
    "Luke 18:15": "Jesus Blesses Little Children",
    "Luke 18:18": "Rich Young Ruler",
    "Luke 18:31": "Jesus Predicts His Death",
    "Luke 18:35": "Healing Blind Bartimaeus",
    
    // Luke Chapter 19
    "Luke 19:1": "Zacchaeus",
    "Luke 19:11": "Parable of the Ten Minas",
    "Luke 19:28": "Triumphal Entry",
    "Luke 19:41": "Jesus Weeps Over Jerusalem",
    "Luke 19:45": "Cleansing the Temple",
    
    // Luke Chapter 20
    "Luke 20:1": "Authority of Jesus Questioned",
    "Luke 20:9": "Parable of the Wicked Tenants",
    "Luke 20:20": "Taxes to Caesar",
    "Luke 20:27": "Question About the Resurrection",
    "Luke 20:41": "David Calls the Messiah Lord",
    "Luke 20:45": "Warning About the Scribes",
    
    // Luke Chapter 21
    "Luke 21:1": "The Widow's Offering",
    "Luke 21:5": "Prediction of the Temple's Destruction",
    "Luke 21:10": "Persecution and Endurance",
    "Luke 21:20": "Destruction of Jerusalem",
    "Luke 21:25": "The Coming of the Son of Man",
    "Luke 21:29": "Lesson of the Fig Tree",
    "Luke 21:34": "Be Watchful",
    
    // Luke Chapter 22
    "Luke 22:1": "Plot to Kill Jesus — Judas Agrees to Betray",
    "Luke 22:7": "Preparation for Passover",
    "Luke 22:14": "The Last Supper",
    "Luke 22:24": "Who Is the Greatest?",
    "Luke 22:31": "Prediction of Peter's Denial",
    "Luke 22:35": "Teaching About the Future",
    "Luke 22:39": "Gethsemane Prayer",
    "Luke 22:47": "Arrest of Jesus",
    "Luke 22:54": "Peter Denies Jesus",
    "Luke 22:63": "Jesus Mocked",
    "Luke 22:66": "Jesus Before the Council",
    
    // Luke Chapter 23
    "Luke 23:1": "Jesus Before Pilate",
    "Luke 23:6": "Jesus Before Herod",
    "Luke 23:13": "Pilate Hands Jesus Over",
    "Luke 23:26": "On the Way to the Cross",
    "Luke 23:32": "Crucifixion",
    "Luke 23:44": "Death of Jesus",
    "Luke 23:50": "Burial of Jesus",
    
    // Luke Chapter 24
    "Luke 24:1": "The Empty Tomb — Resurrection",
    "Luke 24:13": "The Road to Emmaus",
    "Luke 24:36": "Jesus Appears to His Disciples",
    "Luke 24:44": "Jesus Opens Their Understanding",
    "Luke 24:50": "The Ascension of Jesus",
    
    // Acts Chapter 1
    "Acts 1:1": "Introduction — The Risen Christ",
    "Acts 1:4": "Promise of the Holy Spirit & Ascension",
    "Acts 1:12": "Return to Jerusalem",
    "Acts 1:15": "Matthias Chosen to Replace Judas",
    
    // Acts Chapter 2
    "Acts 2:1": "Pentecost — The Holy Spirit Comes",
    "Acts 2:14": "Peter Explains the Event",
    "Acts 2:22": "Peter Declares Jesus as Lord and Messiah",
    "Acts 2:37": "Three Thousand Added",
    "Acts 2:42": "Life of the Early Church",
    
    // Acts Chapter 3
    "Acts 3:1": "Healing the Lame Beggar",
    "Acts 3:11": "Peter Attributes the Miracle to Jesus",
    "Acts 3:17": "Call to Repentance",
    
    // Acts Chapter 4
    "Acts 4:1": "Peter and John Arrested — Jesus the Cornerstone",
    "Acts 4:13": "Commanded Not to Speak in Jesus' Name",
    "Acts 4:23": "Prayer for Boldness",
    "Acts 4:32": "Believers Share All Things",
    
    // Acts Chapter 5
    "Acts 5:1": "Ananias and Sapphira",
    "Acts 5:12": "Signs and Wonders",
    "Acts 5:17": "Apostles Arrested and Freed",
    "Acts 5:33": "Gamaliel's Advice and Release",
    
    // Acts Chapter 6
    "Acts 6:1": "Seven Chosen to Serve",
    "Acts 6:8": "Stephen Seized",
    
    // Acts Chapter 7
    "Acts 7:1": "Stephen's Sermon — Israel's History",
    "Acts 7:54": "The Stoning of Stephen",
    
    // Acts Chapter 8
    "Acts 8:1": "Saul Persecutes the Church",
    "Acts 8:4": "Philip in Samaria",
    "Acts 8:26": "Philip and the Ethiopian Eunuch",
    
    // Acts Chapter 9
    "Acts 9:1": "Saul's Encounter with Jesus",
    "Acts 9:10": "Saul's Conversion and Baptism",
    "Acts 9:20": "Saul Preaches in Damascus and Jerusalem",
    "Acts 9:32": "Peter Heals Aeneas",
    "Acts 9:36": "Peter Raises Tabitha (Dorcas)",
    
    // Acts Chapter 10
    "Acts 10:1": "Cornelius Receives a Vision",
    "Acts 10:9": "Peter's Vision",
    "Acts 10:24": "Peter Meets Cornelius",
    "Acts 10:34": "Peter's Gospel Message",
    "Acts 10:44": "Gentiles Receive the Holy Spirit",
    
    // Acts Chapter 11
    "Acts 11:1": "Peter Reports to Jerusalem",
    "Acts 11:19": "The Church in Antioch",
    "Acts 11:27": "Prophecy of Famine",
    
    // Acts Chapter 12
    "Acts 12:1": "James Killed and Peter Imprisoned",
    "Acts 12:6": "Peter Rescued from Prison",
    "Acts 12:20": "Herod's Death",
    "Acts 12:24": "The Word Continues to Spread",
    
    // Acts Chapter 13
    "Acts 13:1": "Barnabas and Saul Sent Out",
    "Acts 13:4": "Preaching in Cyprus",
    "Acts 13:13": "Paul's Sermon in Pisidian Antioch",
    "Acts 13:42": "Gentiles Believe; Jews Oppose",
    
    // Acts Chapter 14
    "Acts 14:1": "Ministry in Iconium",
    "Acts 14:8": "Healing in Lystra and Persecution",
    "Acts 14:21": "Strengthening Churches and Returning to Antioch",
    
    // Acts Chapter 15
    "Acts 15:1": "The Jerusalem Council",
    "Acts 15:22": "Letter to Gentile Believers",
    "Acts 15:36": "Paul and Barnabas Part Ways",
    
    // Acts Chapter 16
    "Acts 16:1": "Timothy Joins Paul",
    "Acts 16:6": "The Macedonian Call",
    "Acts 16:11": "Conversion of Lydia",
    "Acts 16:16": "Paul and Silas Imprisoned — Earthquake",
    "Acts 16:35": "Release from Prison",
    
    // Acts Chapter 17
    "Acts 17:1": "Thessalonica — Message Rejected",
    "Acts 17:10": "Berea — Message Examined",
    "Acts 17:16": "Paul in Athens",
    "Acts 17:22": "Paul's Sermon at the Areopagus",
    
    // Acts Chapter 18
    "Acts 18:1": "Paul Meets Aquila and Priscilla",
    "Acts 18:5": "Opposition and Encouragement in Corinth",
    "Acts 18:12": "Trial Before Gallio",
    "Acts 18:18": "Return to Antioch",
    "Acts 18:24": "Apollos Preaches Boldly",
    
    // Acts Chapter 19
    "Acts 19:1": "Disciples Receive the Holy Spirit",
    "Acts 19:8": "Ministry in Ephesus",
    "Acts 19:21": "Riot in Ephesus",
    
    // Acts Chapter 20
    "Acts 20:1": "Journey Through Macedonia and Greece",
    "Acts 20:7": "Eutychus Raised from Death",
    "Acts 20:13": "Travel to Miletus",
    "Acts 20:17": "Farewell to Ephesian Elders",
    
    // Acts Chapter 21
    "Acts 21:1": "Journey to Jerusalem",
    "Acts 21:17": "Paul Visits James in Jerusalem",
    "Acts 21:27": "Paul Seized in the Temple",
    "Acts 21:37": "Paul Speaks to the Crowd",
    
    // Acts Chapter 22
    "Acts 22:1": "Paul's Defense — His Testimony",
    "Acts 22:22": "Paul's Roman Citizenship Revealed",
    "Acts 22:30": "Before the Sanhedrin",
    
    // Acts Chapter 23
    "Acts 23:1": "Paul Before the Council",
    "Acts 23:11": "The Lord Encourages Paul",
    "Acts 23:12": "Plot to Kill Paul",
    "Acts 23:23": "Paul Taken to Felix",
    
    // Acts Chapter 24
    "Acts 24:1": "Accusations Before Felix",
    "Acts 24:10": "Paul's Defense Before Felix",
    "Acts 24:24": "Paul Kept in Custody",
    
    // Acts Chapter 25
    "Acts 25:1": "Paul Appeals to Caesar",
    "Acts 25:13": "King Agrippa Hears the Case",
    "Acts 25:23": "Paul Brought Before Agrippa",
    
    // Acts Chapter 26
    "Acts 26:1": "Paul's Early Life and Persecution",
    "Acts 26:12": "Paul's Encounter with Christ",
    "Acts 26:19": "Paul Obeys the Vision",
    "Acts 26:24": "Agrippa Almost Persuaded",
    
    // Acts Chapter 27
    "Acts 27:1": "Setting Sail for Rome",
    "Acts 27:13": "Storm at Sea",
    "Acts 27:21": "Paul's Encouragement",
    "Acts 27:27": "Shipwreck",
    
    // Acts Chapter 28
    "Acts 28:1": "Paul Survives a Snakebite",
    "Acts 28:7": "Healing on Malta",
    "Acts 28:11": "Arrival in Rome",
    "Acts 28:17": "Paul Preaches to Jews in Rome",
    "Acts 28:30": "Paul's Ministry While Under Guard",
    
    // Romans Chapter 1
    "Romans 1:1": "Greeting — Called to Belong to Jesus Christ",
    "Romans 1:8": "Paul's Desire to Visit Rome",
    "Romans 1:16": "The Righteous Shall Live by Faith",
    "Romans 1:18": "God's Wrath Against Ungodliness",
    "Romans 1:24": "Consequences of Rejecting God",
    
    // Romans Chapter 2
    "Romans 2:1": "God's Righteous Judgment",
    "Romans 2:12": "Judgment According to the Gospel",
    "Romans 2:17": "Jews and the Law",
    "Romans 2:25": "True Circumcision Is of the Heart",
    
    // Romans Chapter 3
    "Romans 3:1": "God's Faithfulness Despite Human Unbelief",
    "Romans 3:9": "No One Is Righteous",
    "Romans 3:21": "Righteousness Through Faith",
    "Romans 3:27": "Justified by Faith, Not Works",
    
    // Romans Chapter 4
    "Romans 4:1": "Abraham Justified by Faith",
    "Romans 4:13": "Promise Comes by Faith",
    "Romans 4:18": "Abraham's Example for Believers",
    
    // Romans Chapter 5
    "Romans 5:1": "Peace and Hope Through Faith",
    "Romans 5:6": "Christ Died for the Ungodly",
    "Romans 5:12": "Adam and Christ Contrasted",
    
    // Romans Chapter 6
    "Romans 6:1": "Dead to Sin, Alive to God",
    "Romans 6:15": "Slaves to Righteousness, Not Sin",
    
    // Romans Chapter 7
    "Romans 7:1": "Released from the Law",
    "Romans 7:7": "The Law Reveals Sin",
    "Romans 7:13": "The Struggle with Sin Nature",
    
    // Romans Chapter 8
    "Romans 8:1": "Life in the Spirit",
    "Romans 8:18": "Future Glory and Spirit's Help",
    "Romans 8:28": "God Works All Things for Good",
    "Romans 8:31": "Nothing Can Separate Us from Christ",
    
    // Romans Chapter 9
    "Romans 9:1": "Paul's Sorrow for Israel",
    "Romans 9:6": "Children of the Promise",
    "Romans 9:14": "God's Sovereign Choice",
    "Romans 9:30": "Israel's Unbelief",
    
    // Romans Chapter 10
    "Romans 10:1": "Israel's Misplaced Zeal",
    "Romans 10:5": "Righteousness by Faith",
    "Romans 10:14": "Israel Hears but Rejects",
    
    // Romans Chapter 11
    "Romans 11:1": "God Has Not Rejected Israel",
    "Romans 11:11": "Gentiles Grafted In",
    "Romans 11:25": "All Israel Will Be Saved",
    "Romans 11:33": "Doxology — Depth of God's Wisdom",
    
    // Romans Chapter 12
    "Romans 12:1": "Living Sacrifice",
    "Romans 12:3": "Gifts of Grace",
    "Romans 12:9": "Marks of a True Christian",
    
    // Romans Chapter 13
    "Romans 13:1": "Submission to Authorities",
    "Romans 13:8": "Love Fulfills the Law",
    "Romans 13:11": "Put On Christ",
    
    // Romans Chapter 14
    "Romans 14:1": "Do Not Judge One Another",
    "Romans 14:13": "Do Not Cause Others to Stumble",
    
    // Romans Chapter 15
    "Romans 15:1": "Bear with the Weak",
    "Romans 15:8": "Christ the Hope of Jews and Gentiles",
    "Romans 15:14": "Paul's Ministry to the Gentiles",
    "Romans 15:22": "Paul's Travel Plans and Prayer Request",
    
    // Romans Chapter 16
    "Romans 16:1": "Greetings to Many Workers",
    "Romans 16:17": "Warning Against Divisive People",
    "Romans 16:21": "Greetings from Paul's Companions",
    "Romans 16:25": "Doxology — Glory to God",
    
    // 1 Corinthians Chapter 1
    "1 Corinthians 1:1": "Greeting",
    "1 Corinthians 1:4": "Thanksgiving for the Grace of God",
    "1 Corinthians 1:10": "Appeal Against Divisions",
    "1 Corinthians 1:18": "Christ the Power and Wisdom of God",
    "1 Corinthians 1:26": "God Chooses the Lowly",
    
    // 1 Corinthians Chapter 2
    "1 Corinthians 2:1": "Paul's Message: Christ Crucified",
    "1 Corinthians 2:6": "Revealed by the Spirit",
    "1 Corinthians 2:14": "The Spiritual Person",
    
    // 1 Corinthians Chapter 3
    "1 Corinthians 3:1": "Servants Working Together",
    "1 Corinthians 3:10": "Building on the Foundation",
    "1 Corinthians 3:16": "You Are God's Temple",
    
    // 1 Corinthians Chapter 4
    "1 Corinthians 4:1": "Servants of Christ",
    "1 Corinthians 4:6": "Apostles Suffer for Christ",
    "1 Corinthians 4:14": "Paul's Fatherly Appeal",
    
    // 1 Corinthians Chapter 5
    "1 Corinthians 5:1": "Immorality in the Church",
    "1 Corinthians 5:9": "Do Not Associate with Immorality",
    
    // 1 Corinthians Chapter 6
    "1 Corinthians 6:1": "Lawsuits Among Believers",
    "1 Corinthians 6:12": "Flee Sexual Immorality — Body Is God's Temple",
    
    // 1 Corinthians Chapter 7
    "1 Corinthians 7:1": "Principles for Marriage",
    "1 Corinthians 7:8": "Marriage to Unbelievers",
    "1 Corinthians 7:17": "Remain in the Calling",
    "1 Corinthians 7:25": "Advice to the Unmarried and Widows",
    
    // 1 Corinthians Chapter 8
    "1 Corinthians 8:1": "Food Offered to Idols — Knowledge and Love",
    
    // 1 Corinthians Chapter 9
    "1 Corinthians 9:1": "Paul's Rights as an Apostle",
    "1 Corinthians 9:19": "Becoming All Things to All People",
    "1 Corinthians 9:24": "Run to Win the Prize",
    
    // 1 Corinthians Chapter 10
    "1 Corinthians 10:1": "Warnings from Israel's History",
    "1 Corinthians 10:14": "Flee Idolatry",
    "1 Corinthians 10:23": "Do All to the Glory of God",
    
    // 1 Corinthians Chapter 11
    "1 Corinthians 11:1": "Head Coverings and Order",
    "1 Corinthians 11:17": "The Lord's Supper — Correction",
    
    // 1 Corinthians Chapter 12
    "1 Corinthians 12:1": "Varieties of Spiritual Gifts",
    "1 Corinthians 12:12": "One Body, Many Members",
    
    // 1 Corinthians Chapter 13
    "1 Corinthians 13:1": "The Way of Love (Love Chapter)",
    
    // 1 Corinthians Chapter 14
    "1 Corinthians 14:1": "Prophecy and Tongues — Edifying the Church",
    "1 Corinthians 14:20": "Order in Worship",
    "1 Corinthians 14:34": "Instructions for Conduct in Church",
    
    // 1 Corinthians Chapter 15
    "1 Corinthians 15:1": "The Gospel and the Resurrection of Christ",
    "1 Corinthians 15:12": "Implications of the Resurrection",
    "1 Corinthians 15:35": "The Resurrection Body",
    "1 Corinthians 15:50": "Victory Through Christ",
    
    // 1 Corinthians Chapter 16
    "1 Corinthians 16:1": "Collection for the Saints",
    "1 Corinthians 16:5": "Paul's Travel Plans",
    "1 Corinthians 16:13": "Final Exhortations",
    "1 Corinthians 16:19": "Greetings and Benediction",
    
    // 2 Corinthians Chapter 1
    "2 Corinthians 1:1": "Greeting",
    "2 Corinthians 1:3": "The God of All Comfort",
    "2 Corinthians 1:8": "Sharing in Suffering",
    "2 Corinthians 1:12": "Paul's Change of Travel Plans",
    
    // 2 Corinthians Chapter 2
    "2 Corinthians 2:1": "Paul's Painful Visit and Letter",
    "2 Corinthians 2:5": "Forgive the Offender",
    "2 Corinthians 2:12": "Triumph in Christ — Aroma of Life",
    
    // 2 Corinthians Chapter 3
    "2 Corinthians 3:1": "Ministers of the New Covenant",
    "2 Corinthians 3:7": "Glory of the New Covenant",
    "2 Corinthians 3:12": "Unveiled Faces — Transformed by the Spirit",
    
    // 2 Corinthians Chapter 4
    "2 Corinthians 4:1": "Light of the Gospel in Earthen Vessels",
    "2 Corinthians 4:7": "Treasure in Jars of Clay",
    "2 Corinthians 4:13": "Eternal Weight of Glory",
    
    // 2 Corinthians Chapter 5
    "2 Corinthians 5:1": "Our Heavenly Dwelling",
    "2 Corinthians 5:11": "The Ministry of Reconciliation Begins",
    "2 Corinthians 5:16": "New Creation — Ambassadors for Christ",
    
    // 2 Corinthians Chapter 6
    "2 Corinthians 6:1": "Paul's Suffering and Appeal",
    "2 Corinthians 6:14": "Do Not Be Unequally Yoked",
    
    // 2 Corinthians Chapter 7
    "2 Corinthians 7:1": "Call to Holiness",
    "2 Corinthians 7:5": "Godly Sorrow Produces Repentance",
    
    // 2 Corinthians Chapter 8
    "2 Corinthians 8:1": "Example of Macedonian Generosity",
    "2 Corinthians 8:8": "Excel in the Grace of Giving",
    "2 Corinthians 8:16": "Titus and the Collection",
    
    // 2 Corinthians Chapter 9
    "2 Corinthians 9:1": "Preparing the Gift",
    "2 Corinthians 9:6": "God Loves a Cheerful Giver",
    
    // 2 Corinthians Chapter 10
    "2 Corinthians 10:1": "Paul Defends His Authority",
    "2 Corinthians 10:7": "Criticism of Paul's Weak Appearance",
    "2 Corinthians 10:12": "Boasting Only in the Lord",
    
    // 2 Corinthians Chapter 11
    "2 Corinthians 11:1": "Warning Against False Apostles",
    "2 Corinthians 11:7": "Deceptive Workers",
    "2 Corinthians 11:16": "Paul's 'Foolish' Boasting",
    "2 Corinthians 11:22": "Paul's Sufferings",
    
    // 2 Corinthians Chapter 12
    "2 Corinthians 12:1": "Paul's Thorn in the Flesh",
    "2 Corinthians 12:11": "Defending His Ministry",
    "2 Corinthians 12:19": "Concerns About the Corinthians",
    
    // 2 Corinthians Chapter 13
    "2 Corinthians 13:1": "Final Warning",
    "2 Corinthians 13:5": "Examine Yourselves",
    "2 Corinthians 13:11": "Final Greetings and Benediction",
    
    // Galatians Chapter 1
    "Galatians 1:1": "Greeting",
    "Galatians 1:6": "No Other Gospel",
    "Galatians 1:11": "Paul's Calling and Conversion",
    
    // Galatians Chapter 2
    "Galatians 2:1": "Paul Accepted by the Apostles",
    "Galatians 2:11": "Paul Confronts Peter",
    "Galatians 2:15": "Justified by Faith, Not Works",
    
    // Galatians Chapter 3
    "Galatians 3:1": "Faith, Not Law",
    "Galatians 3:10": "Christ Redeems from the Curse",
    "Galatians 3:15": "The Promise Comes Before the Law",
    "Galatians 3:23": "Children of God Through Faith",
    
    // Galatians Chapter 4
    "Galatians 4:1": "Sons and Heirs Through Christ",
    "Galatians 4:8": "Paul's Concern for the Galatians",
    "Galatians 4:21": "Hagar and Sarah — Two Covenants",
    
    // Galatians Chapter 5
    "Galatians 5:1": "Freedom in Christ",
    "Galatians 5:13": "Walk by the Spirit",
    
    // Galatians Chapter 6
    "Galatians 6:1": "Bear One Another's Burdens",
    "Galatians 6:11": "Boast Only in the Cross",
    
    // Ephesians Chapter 1
    "Ephesians 1:1": "Greeting",
    "Ephesians 1:3": "Spiritual Blessings in Christ",
    "Ephesians 1:15": "Prayer for Wisdom and Revelation",
    
    // Ephesians Chapter 2
    "Ephesians 2:1": "Saved by Grace Through Faith",
    "Ephesians 2:11": "One New Man in Christ",
    
    // Ephesians Chapter 3
    "Ephesians 3:1": "Paul's Ministry to the Gentiles",
    "Ephesians 3:14": "Prayer for Spiritual Strength",
    
    // Ephesians Chapter 4
    "Ephesians 4:1": "Unity and Gifts in the Body",
    "Ephesians 4:17": "The New Life in Christ",
    
    // Ephesians Chapter 5
    "Ephesians 5:1": "Walk in Love and Wisdom",
    "Ephesians 5:22": "Marriage — Christ and the Church",
    
    // Ephesians Chapter 6
    "Ephesians 6:1": "Instructions for Families",
    "Ephesians 6:10": "Armor of God",
    "Ephesians 6:21": "Final Greetings",
    
    // Philippians Chapter 1
    "Philippians 1:1": "Greeting",
    "Philippians 1:3": "Thanksgiving and Prayer",
    "Philippians 1:12": "The Gospel Advances",
    "Philippians 1:19": "To Live Is Christ",
    
    // Philippians Chapter 2
    "Philippians 2:1": "Christ's Humility",
    "Philippians 2:12": "Shine as Lights",
    "Philippians 2:19": "Timothy and Epaphroditus",
    
    // Philippians Chapter 3
    "Philippians 3:1": "Righteousness Through Faith",
    "Philippians 3:12": "Press Toward the Goal",
    
    // Philippians Chapter 4
    "Philippians 4:1": "Encouragement to Stand Firm",
    "Philippians 4:10": "Contentment in Christ",
    "Philippians 4:21": "Final Greetings",
    
    // Colossians Chapter 1
    "Colossians 1:1": "Thanksgiving and Prayer",
    "Colossians 1:15": "Christ the Supreme Creator and Redeemer",
    "Colossians 1:24": "Paul's Ministry",
    
    // Colossians Chapter 2
    "Colossians 2:1": "Christ, the Mystery of God",
    "Colossians 2:6": "Alive in Christ",
    "Colossians 2:16": "Let No One Disqualify You",
    
    // Colossians Chapter 3
    "Colossians 3:1": "Put On the New Self",
    "Colossians 3:18": "Rules for Christian Households",
    
    // Colossians Chapter 4
    "Colossians 4:1": "Prayer and Conduct",
    "Colossians 4:7": "Final Greetings",
    
    // 1 Thessalonians Chapter 1
    "1 Thessalonians 1:1": "Greeting and Thanksgiving",
    
    // 1 Thessalonians Chapter 2
    "1 Thessalonians 2:1": "Paul's Ministry in Thessalonica",
    "1 Thessalonians 2:13": "Reception of the Word",
    "1 Thessalonians 2:17": "Paul's Longing to Visit",
    
    // 1 Thessalonians Chapter 3
    "1 Thessalonians 3:1": "Encouragement Amid Trial",
    
    // 1 Thessalonians Chapter 4
    "1 Thessalonians 4:1": "A Life Pleasing to God",
    "1 Thessalonians 4:13": "The Coming of the Lord",
    
    // 1 Thessalonians Chapter 5
    "1 Thessalonians 5:1": "The Day of the Lord",
    "1 Thessalonians 5:12": "Final Instructions and Blessing",
    
    // 2 Thessalonians Chapter 1
    "2 Thessalonians 1:1": "Thanksgiving",
    "2 Thessalonians 1:5": "God's Judgment and Glory",
    
    // 2 Thessalonians Chapter 2
    "2 Thessalonians 2:1": "Man of Lawlessness",
    "2 Thessalonians 2:13": "Stand Firm",
    
    // 2 Thessalonians Chapter 3
    "2 Thessalonians 3:1": "Request for Prayer",
    "2 Thessalonians 3:6": "Warning Against Idleness",
    "2 Thessalonians 3:16": "Final Blessing",
    
    // 1 Timothy Chapter 1
    "1 Timothy 1:1": "Greeting",
    "1 Timothy 1:3": "Charge Against False Teachers",
    "1 Timothy 1:12": "Christ's Mercy to Paul",
    
    // 1 Timothy Chapter 2
    "1 Timothy 2:1": "Pray for All People",
    "1 Timothy 2:8": "Order in Worship",
    
    // 1 Timothy Chapter 3
    "1 Timothy 3:1": "Qualifications for Overseers",
    "1 Timothy 3:8": "Qualifications for Deacons",
    
    // 1 Timothy Chapter 4
    "1 Timothy 4:1": "Warnings Against False Teaching",
    "1 Timothy 4:6": "Be a Good Servant of Christ",
    
    // 1 Timothy Chapter 5
    "1 Timothy 5:1": "Instructions for Widows",
    "1 Timothy 5:17": "Instructions for Elders",
    
    // 1 Timothy Chapter 6
    "1 Timothy 6:1": "Warning Against Greed",
    "1 Timothy 6:11": "Fight the Good Fight",
    
    // 2 Timothy Chapter 1
    "2 Timothy 1:1": "Encouragement to Boldness",
    "2 Timothy 1:8": "Do Not Be Ashamed",
    
    // 2 Timothy Chapter 2
    "2 Timothy 2:1": "Be Strong in Grace",
    "2 Timothy 2:14": "Rightly Handling the Word",
    
    // 2 Timothy Chapter 3
    "2 Timothy 3:1": "Godlessness in the Last Days",
    "2 Timothy 3:10": "All Scripture Is God-Breathed",
    
    // 2 Timothy Chapter 4
    "2 Timothy 4:1": "Preach the Word",
    "2 Timothy 4:9": "Final Instructions",
    
    // Titus Chapter 1
    "Titus 1:1": "Greeting",
    "Titus 1:5": "Qualifications for Elders",
    
    // Titus Chapter 2
    "Titus 2:1": "Teaching Sound Doctrine",
    
    // Titus Chapter 3
    "Titus 3:1": "Live Rightly",
    "Titus 3:12": "Final Instructions",
    
    // Philemon Chapter 1
    "Philemon 1:1": "Greeting and Thanksgiving",
    "Philemon 1:8": "Appeal for Onesimus",
    "Philemon 1:17": "Paul's Promise and Closing",
    
    // Hebrews Chapter 1
    "Hebrews 1:1": "God Speaks Through His Son",
    "Hebrews 1:5": "The Son Superior to Angels",
    
    // Hebrews Chapter 2
    "Hebrews 2:1": "Warning Against Drifting",
    "Hebrews 2:5": "Jesus Made Like His Brothers",
    
    // Hebrews Chapter 3
    "Hebrews 3:1": "Jesus Superior to Moses",
    "Hebrews 3:7": "Warning Against Unbelief",
    
    // Hebrews Chapter 4
    "Hebrews 4:1": "Rest for God's People",
    "Hebrews 4:14": "Jesus the Great High Priest",
    
    // Hebrews Chapter 5
    "Hebrews 5:1": "High Priest Like Melchizedek",
    "Hebrews 5:11": "Spiritual Immaturity",
    
    // Hebrews Chapter 6
    "Hebrews 6:1": "Warning and Encouragement",
    "Hebrews 6:13": "God's Unchanging Promise",
    
    // Hebrews Chapter 7
    "Hebrews 7:1": "Melchizedek and Christ",
    
    // Hebrews Chapter 8
    "Hebrews 8:1": "Christ Mediates a Better Covenant",
    
    // Hebrews Chapter 9
    "Hebrews 9:1": "Earthly vs Heavenly Sanctuary",
    
    // Hebrews Chapter 10
    "Hebrews 10:1": "Christ's Once-for-All Sacrifice",
    "Hebrews 10:19": "Draw Near, Hold Fast",
    
    // Hebrews Chapter 11
    "Hebrews 11:1": "Faith of the Ancients (Faith Chapter)",
    
    // Hebrews Chapter 12
    "Hebrews 12:1": "Run the Race with Endurance",
    "Hebrews 12:14": "Warning Against Refusing God",
    
    // Hebrews Chapter 13
    "Hebrews 13:1": "Sacrifices Pleasing to God",
    "Hebrews 13:20": "Benediction and Closing",
    
    // James Chapter 1
    "James 1:1": "Greeting",
    "James 1:2": "Steadfastness in Trials",
    "James 1:19": "Be Doers of the Word",
    
    // James Chapter 2
    "James 2:1": "Warning Against Partiality",
    "James 2:14": "Faith Without Works Is Dead",
    
    // James Chapter 3
    "James 3:1": "Taming the Tongue",
    "James 3:13": "Two Types of Wisdom",
    
    // James Chapter 4
    "James 4:1": "Warning Against Worldliness",
    "James 4:11": "Boasting About Tomorrow",
    
    // James Chapter 5
    "James 5:1": "Warning to the Rich",
    "James 5:7": "Patience in Suffering",
    "James 5:13": "Prayer and Restoration",
    
    // 1 Peter Chapter 1
    "1 Peter 1:1": "Living Hope Through Christ",
    "1 Peter 1:13": "Called to Be Holy",
    
    // 1 Peter Chapter 2
    "1 Peter 2:1": "Chosen People",
    "1 Peter 2:11": "Submission to Authority",
    
    // 1 Peter Chapter 3
    "1 Peter 3:1": "Instructions for Families",
    "1 Peter 3:8": "Suffering for Righteousness",
    
    // 1 Peter Chapter 4
    "1 Peter 4:1": "Living for God",
    "1 Peter 4:12": "Sharing Christ's Sufferings",
    
    // 1 Peter Chapter 5
    "1 Peter 5:1": "Shepherd the Flock",
    "1 Peter 5:12": "Final Greetings",
    
    // 2 Peter Chapter 1
    "2 Peter 1:1": "Confirm Your Calling",
    "2 Peter 1:12": "The Prophetic Word Confirmed",
    
    // 2 Peter Chapter 2
    "2 Peter 2:1": "Warning Against False Teachers",
    
    // 2 Peter Chapter 3
    "2 Peter 3:1": "The Day of the Lord",
    "2 Peter 3:14": "Final Exhortations",
    
    // 1 John Chapter 1
    "1 John 1:1": "The Word of Life",
    "1 John 1:5": "Walking in the Light",
    
    // 1 John Chapter 2
    "1 John 2:1": "Christ Our Advocate",
    "1 John 2:15": "Do Not Love the World",
    "1 John 2:18": "Warning About Antichrists",
    "1 John 2:28": "Children of God",
    
    // 1 John Chapter 3
    "1 John 3:1": "Children of God vs Children of the Devil",
    "1 John 3:11": "Love One Another",
    
    // 1 John Chapter 4
    "1 John 4:1": "Test the Spirits",
    "1 John 4:7": "God Is Love",
    
    // 1 John Chapter 5
    "1 John 5:1": "Faith in the Son of God",
    "1 John 5:13": "Confidence in Prayer",
    
    // 2 John Chapter 1
    "2 John 1:1": "Greeting",
    "2 John 1:4": "Walk in the Truth",
    "2 John 1:7": "Warning Against Deceivers",
    "2 John 1:12": "Final Greetings",
    
    // 3 John Chapter 1
    "3 John 1:1": "Gaius Commended",
    "3 John 1:9": "Diotrephes and Demetrius",
    "3 John 1:13": "Final Greetings",
    
    // Jude Chapter 1
    "Jude 1:1": "Greeting and Warning",
    "Jude 1:5": "Judgment on False Teachers",
    "Jude 1:17": "Persevere in the Faith",
    "Jude 1:24": "Doxology",
    
    // Revelation Chapter 1
    "Revelation 1:1": "Prologue — Vision of Christ",
    "Revelation 1:9": "The Son of Man Appears",
    
    // Revelation Chapter 2
    "Revelation 2:1": "Message to Ephesus",
    "Revelation 2:8": "Message to Smyrna",
    "Revelation 2:12": "Message to Pergamum",
    "Revelation 2:18": "Message to Thyatira",
    
    // Revelation Chapter 3
    "Revelation 3:1": "Message to Sardis",
    "Revelation 3:7": "Message to Philadelphia",
    "Revelation 3:14": "Message to Laodicea",
    
    // Revelation Chapter 4
    "Revelation 4:1": "Vision of God's Throne",
    
    // Revelation Chapter 5
    "Revelation 5:1": "The Lamb and the Scroll",
    
    // Revelation Chapter 6
    "Revelation 6:1": "The Six Seals",
    
    // Revelation Chapter 7
    "Revelation 7:1": "144,000 Sealed",
    "Revelation 7:9": "Great Multitude in White Robes",
    
    // Revelation Chapter 8
    "Revelation 8:1": "Seventh Seal and Silence",
    "Revelation 8:6": "Four Trumpets",
    
    // Revelation Chapter 9
    "Revelation 9:1": "Fifth Trumpet — Locusts",
    "Revelation 9:13": "Sixth Trumpet — Angels Released",
    
    // Revelation Chapter 10
    "Revelation 10:1": "The Mighty Angel and the Little Scroll",
    
    // Revelation Chapter 11
    "Revelation 11:1": "Two Witnesses",
    "Revelation 11:15": "Seventh Trumpet",
    
    // Revelation Chapter 12
    "Revelation 12:1": "Woman, Child, and Dragon",
    
    // Revelation Chapter 13
    "Revelation 13:1": "Beast from the Sea",
    "Revelation 13:11": "Beast from the Earth",
    
    // Revelation Chapter 14
    "Revelation 14:1": "The Lamb and 144,000",
    "Revelation 14:6": "Three Angels' Messages",
    "Revelation 14:14": "Harvest of the Earth",
    
    // Revelation Chapter 15
    "Revelation 15:1": "Seven Angels with Seven Plagues",
    
    // Revelation Chapter 16
    "Revelation 16:1": "Seven Bowls of Wrath",
    
    // Revelation Chapter 17
    "Revelation 17:1": "The Woman on the Scarlet Beast",
    
    // Revelation Chapter 18
    "Revelation 18:1": "Fall of Babylon",
    
    // Revelation Chapter 19
    "Revelation 19:1": "Marriage of the Lamb",
    "Revelation 19:11": "Christ the Warrior King",
    
    // Revelation Chapter 20
    "Revelation 20:1": "The Thousand Years",
    "Revelation 20:11": "Final Judgment",
    
    // Revelation Chapter 21
    "Revelation 21:1": "New Heaven and New Earth",
    "Revelation 21:9": "New Jerusalem",
    
    // Revelation Chapter 22
    "Revelation 22:1": "River of Life",
    "Revelation 22:10": "Final Warnings and Benediction",
    
    // Add more headers as needed
};

// Helper function to get header for a specific verse
function getVerseHeader(bookName, chapter, verse) {
    const key = `${bookName} ${chapter}:${verse}`;
    return verseHeaders[key] || null;
}
