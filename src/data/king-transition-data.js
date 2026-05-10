// King Transition Cards Data
// Shows reign transition information for kings of Israel & Judah inline with Bible verses

const kingTransitionData = [
    // ═══════════════════════════════════════════
    // JUDAH (Southern Kingdom)
    // ═══════════════════════════════════════════
    {
        id: "rehoboam", name: "Rehoboam", kingdom: "Judah", year: "931 BC",
        reignYears: "17 years", prevKing: "Solomon",
        context: "Son of Solomon. The kingdom split under his rule when he refused to lighten the people's burden.",
        note: "His harsh response to the people's plea caused the 10 northern tribes to break away and form the kingdom of Israel under Jeroboam.",
    },
    {
        id: "abijam", name: "Abijam", kingdom: "Judah", year: "913 BC",
        reignYears: "3 years", prevKing: "Rehoboam",
        context: "Son of Rehoboam. Continued the sins of his father but God kept David's line for the sake of his promise.",
        note: "He went to war against Jeroboam of Israel and won a decisive battle, trusting that God was with Judah.",
    },
    {
        id: "asa", name: "Asa", kingdom: "Judah", year: "910 BC",
        reignYears: "41 years", prevKing: "Abijam",
        context: "A good king who removed idols, tore down pagan altars, and called the people back to God.",
        note: "He even removed his own grandmother from her position as queen mother because she made an idol. In his old age he relied on a foreign king instead of God, which cost him peace.",
    },
    {
        id: "jehoshaphat", name: "Jehoshaphat", kingdom: "Judah", year: "869 BC",
        reignYears: "25 years", prevKing: "Asa",
        context: "One of Judah's best kings. He sent teachers throughout the land to teach God's law to the people.",
        note: "He made the mistake of forming a close alliance with the wicked king Ahab of Israel. When enemies came, he prayed and God fought the battle for Judah without them lifting a sword.",
    },
    {
        id: "jehoram-j", name: "Jehoram", kingdom: "Judah", year: "848 BC",
        reignYears: "8 years", prevKing: "Jehoshaphat",
        context: "Married Ahab's daughter Athaliah and brought the idol worship of Israel into Judah.",
        note: "He killed all his brothers to secure his throne. The prophet Elijah sent him a letter warning of God's judgment. He died of a painful illness.",
    },
    {
        id: "ahaziah-j", name: "Ahaziah", kingdom: "Judah", year: "841 BC",
        reignYears: "1 year", prevKing: "Jehoram",
        context: "Son of Jehoram and Athaliah. Heavily influenced by his mother's wicked family from Israel.",
        note: "He was killed by Jehu during Jehu's purge of Ahab's family, since Ahaziah was related to them through his mother.",
    },
    {
        id: "athaliah", name: "Athaliah", kingdom: "Judah", year: "841 BC",
        reignYears: "6 years", prevKing: "Ahaziah",
        context: "The only queen to rule Judah. When her son died, she killed the royal family and seized the throne.",
        note: "She was Ahab and Jezebel's daughter. One infant prince, Joash, was secretly hidden by the priest Jehoiada. After 6 years Athaliah was overthrown and executed.",
    },
    {
        id: "joash-j", name: "Joash", kingdom: "Judah", year: "835 BC",
        reignYears: "40 years", prevKing: "Athaliah",
        context: "Hidden as a baby in the temple, he was crowned king at age 7. He repaired the temple and followed God while his mentor Jehoiada the priest was alive.",
        note: "After Jehoiada died, Joash turned away from God and even had Jehoiada's son killed for speaking the truth. He was later assassinated by his own officials.",
    },
    {
        id: "amaziah", name: "Amaziah", kingdom: "Judah", year: "796 BC",
        reignYears: "29 years", prevKing: "Joash",
        context: "He followed God but not wholeheartedly. He defeated Edom but then began worshiping the gods of Edom.",
        note: "In his pride he challenged Israel to war and was badly defeated. He was captured and the walls of Jerusalem were broken down. He was later killed in a conspiracy.",
    },
    {
        id: "uzziah", name: "Uzziah", kingdom: "Judah", year: "792 BC",
        reignYears: "52 years", prevKing: "Amaziah",
        context: "Also called Azariah. A strong and successful king who built towers, dug cisterns, and had a powerful army.",
        note: "He became proud and tried to burn incense in the temple — something only priests were allowed to do. God struck him with leprosy and he lived in isolation until he died.",
    },
    {
        id: "jotham", name: "Jotham", kingdom: "Judah", year: "750 BC",
        reignYears: "16 years", prevKing: "Uzziah",
        context: "A good king who built up Judah's defenses and the upper gate of the temple. He ruled first as co-regent while his father was leprous.",
        note: "Unlike his father he did not enter the temple unlawfully. The people however still practiced idol worship.",
    },
    {
        id: "ahaz", name: "Ahaz", kingdom: "Judah", year: "735 BC",
        reignYears: "16 years", prevKing: "Jotham",
        context: "One of Judah's worst kings. He sacrificed his own son and set up idol altars all over Jerusalem.",
        note: "When attacked by Israel and Syria, he begged the Assyrian king for help instead of trusting God. He even replaced the temple altar with an Assyrian design.",
    },
    {
        id: "hezekiah", name: "Hezekiah", kingdom: "Judah", year: "715 BC",
        reignYears: "29 years", prevKing: "Ahaz",
        context: "One of the greatest kings of Judah. He smashed idols, reopened the temple, and brought the people back to God.",
        note: "When the mighty Assyrian army surrounded Jerusalem, he prayed and God sent an angel that struck down 185,000 soldiers overnight. He was also healed from a deadly illness and given 15 more years.",
    },
    {
        id: "manasseh", name: "Manasseh", kingdom: "Judah", year: "697 BC",
        reignYears: "55 years", prevKing: "Hezekiah",
        context: "The longest-reigning king of Judah and the most wicked. He undid all his father Hezekiah's reforms and filled Jerusalem with idol worship.",
        note: "He even placed a carved idol inside the temple. He was captured by Assyria, but in prison he genuinely repented and God restored him. He tried to reverse his wickedness but the damage was deep.",
    },
    {
        id: "amon", name: "Amon", kingdom: "Judah", year: "643 BC",
        reignYears: "2 years", prevKing: "Manasseh",
        context: "Son of Manasseh. He repeated his father's early wickedness without any of the later repentance.",
        note: "He was assassinated by his own servants after only 2 years. The people then killed the conspirators and made his son Josiah king.",
    },
    {
        id: "josiah", name: "Josiah", kingdom: "Judah", year: "641 BC",
        reignYears: "31 years", prevKing: "Amon",
        context: "One of the best kings ever. Crowned at age 8, he passionately sought God and led the greatest religious reform in Judah's history.",
        note: "A lost copy of God's law was found in the temple. When it was read to him, he wept and tore his clothes. He then destroyed every idol and high place in the land. He was killed in a battle at Megiddo.",
    },
    {
        id: "jehoahaz-j", name: "Jehoahaz", kingdom: "Judah", year: "609 BC",
        reignYears: "3 months", prevKing: "Josiah",
        context: "Son of Josiah. The people made him king, but Pharaoh Necho of Egypt removed him after only 3 months and took him captive to Egypt.",
        note: "He never returned. Pharaoh placed his brother Jehoiakim on the throne instead and taxed Judah heavily.",
    },
    {
        id: "jehoiakim", name: "Jehoiakim", kingdom: "Judah", year: "609 BC",
        reignYears: "11 years", prevKing: "Jehoahaz",
        context: "Put on the throne by Egypt. He was selfish and oppressive, using forced labor to build himself a fine palace.",
        note: "When the prophet Jeremiah's scroll of warnings was read to him, he cut it up and burned it in the fire. Babylon then invaded and he submitted to Nebuchadnezzar.",
    },
    {
        id: "jehoiachin", name: "Jehoiachin", kingdom: "Judah", year: "598 BC",
        reignYears: "3 months", prevKing: "Jehoiakim",
        context: "Reigned only 3 months before Babylon besieged Jerusalem. He surrendered to Nebuchadnezzar to spare the city.",
        note: "He was taken captive to Babylon along with the royal family, officials, and skilled workers. Thousands were exiled. He later lived out his days in Babylon with a regular allowance from the king's table.",
    },
    {
        id: "zedekiah", name: "Zedekiah", kingdom: "Judah", year: "597 BC",
        reignYears: "11 years", prevKing: "Jehoiachin",
        context: "Babylon's appointed king and Judah's last. He was weak and ignored the prophet Jeremiah's warnings.",
        note: "He eventually rebelled against Babylon. Nebuchadnezzar destroyed Jerusalem and burned the temple. Zedekiah was forced to watch his sons be killed, then his eyes were put out, and he was taken in chains to Babylon.",
    },

    // ═══════════════════════════════════════════
    // ISRAEL (Northern Kingdom)
    // ═══════════════════════════════════════════
    {
        id: "jeroboam1", name: "Jeroboam I", kingdom: "Israel", year: "931 BC",
        reignYears: "22 years", prevKing: "Solomon",
        context: "First king of the northern kingdom after the split. Feared the people would return to Jerusalem to worship and turn against him.",
        note: "He set up two golden calves and told the people 'Here are your gods.' This became the defining sin that almost every king of Israel after him repeated.",
    },
    {
        id: "nadab", name: "Nadab", kingdom: "Israel", year: "910 BC",
        reignYears: "2 years", prevKing: "Jeroboam I",
        context: "Son of Jeroboam. He continued his father's idol worship and was killed in a conspiracy.",
        note: "Baasha killed him and wiped out Jeroboam's entire family, fulfilling the prophecy against Jeroboam's house.",
    },
    {
        id: "baasha", name: "Baasha", kingdom: "Israel", year: "909 BC",
        reignYears: "24 years", prevKing: "Nadab",
        context: "He came to power through violence and ruled for 24 years, but never turned away from the idol worship Jeroboam started.",
        note: "A prophet warned him that his own family would face the same fate as Jeroboam's.",
    },
    {
        id: "elah", name: "Elah", kingdom: "Israel", year: "886 BC",
        reignYears: "2 years", prevKing: "Baasha",
        context: "Son of Baasha. He was killed by Zimri, one of his military commanders, while drunk at a party.",
        note: "Zimri then wiped out all of Baasha's family, fulfilling the prophecy against his house.",
    },
    {
        id: "zimri", name: "Zimri", kingdom: "Israel", year: "885 BC",
        reignYears: "7 days", prevKing: "Elah",
        context: "Reigned for only 7 days — the shortest reign of any king in the Bible.",
        note: "When the army heard what he had done, they made their commander Omri king. Zimri retreated into the palace and burned it down around himself.",
    },
    {
        id: "omri", name: "Omri", kingdom: "Israel", year: "885 BC",
        reignYears: "12 years", prevKing: "Zimri",
        context: "A militarily powerful king who built the city of Samaria as Israel's new capital.",
        note: "He was so influential that Assyrian records still referred to Israel as 'the house of Omri' long after his dynasty ended. But spiritually he was worse than all the kings before him.",
    },
    {
        id: "ahab", name: "Ahab", kingdom: "Israel", year: "874 BC",
        reignYears: "22 years", prevKing: "Omri",
        context: "One of Israel's most wicked kings. He married Jezebel, a Phoenician princess who brought Baal worship aggressively into Israel.",
        note: "He had the prophet Elijah as his constant adversary. He and Jezebel had a man named Naboth killed just to take his vineyard. He showed moments of repentance but never truly changed.",
    },
    {
        id: "ahaziah-i", name: "Ahaziah", kingdom: "Israel", year: "853 BC",
        reignYears: "2 years", prevKing: "Ahab",
        context: "Son of Ahab and Jezebel. He fell through a lattice window and was injured, then sent to ask a pagan god if he would recover.",
        note: "Elijah intercepted his messengers and told them he would die. He sent soldiers to arrest Elijah, but God sent fire from heaven on two separate groups of fifty. He died as Elijah said.",
    },
    {
        id: "joram-i", name: "Joram", kingdom: "Israel", year: "852 BC",
        reignYears: "12 years", prevKing: "Ahaziah",
        context: "Son of Ahab. He removed the Baal pillar his father set up but still followed Jeroboam's golden calves.",
        note: "He served during the time of the prophet Elisha. He was killed by Jehu, who shot him with an arrow as he fled in his chariot. His body was thrown on Naboth's land — the same land Ahab had stolen.",
    },
    {
        id: "jehu", name: "Jehu", kingdom: "Israel", year: "841 BC",
        reignYears: "28 years", prevKing: "Joram",
        context: "Anointed by one of Elisha's servants to wipe out Ahab's family. He was famous for his furious chariot driving.",
        note: "He killed Joram, Ahaziah of Judah, and Jezebel. He wiped out all of Ahab's descendants and killed all the prophets of Baal. But he still kept the golden calves of Jeroboam.",
    },
    {
        id: "jehoahaz-i", name: "Jehoahaz", kingdom: "Israel", year: "814 BC",
        reignYears: "17 years", prevKing: "Jehu",
        context: "Son of Jehu. Israel was oppressed by Syria during his reign until he finally cried out to God for help.",
        note: "God gave them a deliverer, but the people still did not turn from their idol worship. Israel's army was reduced to just 50 horsemen and 10 chariots.",
    },
    {
        id: "jehoash-i", name: "Jehoash", kingdom: "Israel", year: "798 BC",
        reignYears: "16 years", prevKing: "Jehoahaz",
        context: "Son of Jehoahaz. He visited the dying prophet Elisha and wept over him.",
        note: "Elisha told him to strike the ground with arrows — he only struck three times, showing half-hearted commitment. Elisha said he would beat Syria only three times as a result. He recaptured cities Syria had taken.",
    },
    {
        id: "jeroboam2", name: "Jeroboam II", kingdom: "Israel", year: "793 BC",
        reignYears: "41 years", prevKing: "Jehoash",
        context: "The most prosperous king of Israel. He restored Israel's borders to their largest extent since Solomon.",
        note: "Despite great success, the prophet Amos condemned the widespread injustice and luxury of this era. The poor were oppressed while the rich lived in lavish houses.",
    },
    {
        id: "zechariah-i", name: "Zechariah", kingdom: "Israel", year: "753 BC",
        reignYears: "6 months", prevKing: "Jeroboam II",
        context: "Son of Jeroboam II and the last king of Jehu's dynasty. Assassinated publicly after only 6 months.",
        note: "His assassination fulfilled God's word that Jehu's sons would rule only to the fourth generation. A man named Shallum struck him down before the people and took his place.",
    },
    {
        id: "shallum", name: "Shallum", kingdom: "Israel", year: "752 BC",
        reignYears: "1 month", prevKing: "Zechariah",
        context: "He seized the throne by killing Zechariah but was himself killed within one month by Menahem.",
        note: "A rapid succession of violent coups marked the final decades of the northern kingdom — a sign of its deep spiritual and political decay.",
    },
    {
        id: "menahem", name: "Menahem", kingdom: "Israel", year: "752 BC",
        reignYears: "10 years", prevKing: "Shallum",
        context: "Came to power through extreme violence. When a city refused to accept him as king, he attacked and killed everyone in it.",
        note: "He paid the Assyrian king Tiglath-Pileser a huge tribute of silver to keep his throne. He taxed every wealthy man 50 shekels of silver to raise the money.",
    },
    {
        id: "pekahiah", name: "Pekahiah", kingdom: "Israel", year: "742 BC",
        reignYears: "2 years", prevKing: "Menahem",
        context: "Son of Menahem. He continued idol worship and was killed by his own military officer Pekah in the palace.",
        note: "Pekah conspired with 50 men from Gilead and assassinated Pekahiah. Israel was rapidly unraveling.",
    },
    {
        id: "pekah", name: "Pekah", kingdom: "Israel", year: "740 BC",
        reignYears: "20 years", prevKing: "Pekahiah",
        context: "He allied with Syria to attack Judah, but the Assyrian king Tiglath-Pileser invaded and took large parts of Israel's land.",
        note: "Many Israelites were deported to Assyria during his reign. He was eventually assassinated by Hoshea, who then took the throne.",
    },
    {
        id: "hoshea", name: "Hoshea", kingdom: "Israel", year: "732 BC",
        reignYears: "9 years", prevKing: "Pekah",
        context: "Israel's last king. He secretly made a deal with Egypt hoping to break free from Assyria.",
        note: "The Assyrian king found out and imprisoned him. Assyria then besieged Samaria for 3 years and in 722 BC completely destroyed the northern kingdom. The people were scattered across the Assyrian empire, ending Israel forever.",
    },
];

const kingTransitionDataTamil = [
    // ═══════════════════════════════════════════
    // யூதா (தென் ராஜ்யம் - JUDAH)
    // ═══════════════════════════════════════════
    {
        id: "rehoboam", name: "ரெகொபெயாம்", kingdom: "யூதா", year: "கி.மு. 931",
        reignYears: "17 வருஷம்", prevKing: "சாலொமோன்",
        context: "சாலொமோனின் குமாரன். ஜனங்களின் பாரத்தை லகுவாக்க மறுத்தபோது, இவருடைய ஆட்சியில் ராஜ்யம் இரண்டாகப் பிரிந்தது.",
        note: "ஜனங்களின் விண்ணப்பத்திற்கு அவர் அளித்த கடினமான பதிலால், 10 வடகோத்திரங்கள் பிரிந்துபோய், யெரொபெயாமின் கீழ் இஸ்ரவேல் ராஜ்யத்தை உருவாக்கின.",
    },
    {
        id: "abijam", name: "அபியாம்", kingdom: "யூதா", year: "கி.மு. 913",
        reignYears: "3 வருஷம்", prevKing: "ரெகொபெயாம்",
        context: "ரெகொபெயாமின் குமாரன். தன் தகப்பனுடைய பாவங்களில் நடந்தார், ஆனால் தேவன் தமது வாக்குத்தத்தினிமித்தம் தாவீதின் வம்சத்தை நிலைநிறுத்தினார்.",
        note: "அவர் இஸ்ரவேலின் யெரொபெயாமுக்கு எதிராகப் போர் செய்து, தேவன் யூதாவோடு இருக்கிறார் என்று நம்பி ஒரு தீர்க்கமான வெற்றியைப் பெற்றார்.",
    },
    {
        id: "asa", name: "ஆசா", kingdom: "யூதா", year: "கி.மு. 910",
        reignYears: "41 வருஷம்", prevKing: "அபியாம்",
        context: "விக்கிரகங்களை அகற்றி, அந்நிய தேவர்களின் பீடங்களைத் தகர்த்து, ஜனங்களைத் தேவனிடம் திரும்ப அழைத்த ஒரு நல்ல ராஜா.",
        note: "விக்கிரகத்தை உண்டாக்கிய தன் பாட்டியையே ராஜஸ்திரீ பதவியிலிருந்து நீக்கினார். முதுமையில் அவர் தேவனை நம்பாமல் அந்நிய ராஜாவை நம்பினார், இது அவருடைய சமாதானத்தைக் கெடுத்தது.",
    },
    {
        id: "jehoshaphat", name: "யோசபாத்", kingdom: "யூதா", year: "கி.மு. 869",
        reignYears: "25 வருஷம்", prevKing: "ஆசா",
        context: "யூதாவின் மிகச்சிறந்த ராஜாக்களில் ஒருவர். அவர் தேசமெங்கும் போதகர்களை அனுப்பி, ஜனங்களுக்குத் தேவனுடைய நியாயப்பிரமாணத்தைக் கற்றுக்கொடுத்தார்.",
        note: "இஸ்ரவேலின் பொல்லாத ராஜாவாகிய ஆகாப்புடன் நெருங்கிய கூட்டணி வைத்த தவறைச் செய்தார். எதிரிகள் வந்தபோது, அவர் ஜெபித்தார், அவர்கள் பட்டயம் எடுக்காமலேயே தேவன் அவர்களுக்காகப் போர் செய்தார்.",
    },
    {
        id: "jehoram-j", name: "யெகோராம்", kingdom: "யூதா", year: "கி.மு. 848",
        reignYears: "8 வருஷம்", prevKing: "யோசபாத்",
        context: "ஆகாப்பின் குமாரத்தியாகிய அத்தாலியாளை விவாகம் செய்து, இஸ்ரவேலின் விக்கிரக ஆராதனையை யூதாவிற்குள் கொண்டுவந்தார்.",
        note: "தன் அரியணையைப் பாதுகாத்துக் கொள்ள தன் சகோதரர்கள் அனைவரையும் கொன்றார். தீர்க்கதரிசியாகிய எலியா அவருக்குத் தேவனுடைய நியாயத்தீர்ப்பை எச்சரித்து ஒரு கடிதம் அனுப்பினார். அவர் கொடிய வியாதியால் மரித்தார்.",
    },
    {
        id: "ahaziah-j", name: "அகசியா", kingdom: "யூதா", year: "கி.மு. 841",
        reignYears: "1 வருஷம்", prevKing: "யெகோராம்",
        context: "யெகோராம் மற்றும் அத்தாலியாளின் குமாரன். தன் தாயின் பொல்லாத இஸ்ரவேல் குடும்பத்தாரால் பெரிதும் ஆதிக்கம் செலுத்தப்பட்டார்.",
        note: "யேகூ ஆகாப்பின் குடும்பத்தை அழித்தபோது, அகசியாவும் தன் தாயின் வழியாக அவர்களுக்கு உறவினராக இருந்ததால், யேகூவினால் கொல்லப்பட்டார்.",
    },
    {
        id: "athaliah", name: "அத்தாலியா", kingdom: "யூதா", year: "கி.மு. 841",
        reignYears: "6 வருஷம்", prevKing: "அகசியா",
        context: "யூதாவை ஆண்ட ஒரே ராணி. தன் குமாரன் மரித்தபோது, ராஜவம்சம் அனைத்தையும் அழித்துவிட்டு சிங்காசனத்தைக் கைப்பற்றினாள்.",
        note: "அவள் ஆகாப் மற்றும் யேசபேலின் குமாரதி. யோவாஸ் என்னும் ஒரு குழந்தை மட்டும் ஆசாரியனாகிய யோய்தாவால் ரகசியமாக ஒளித்து வைக்கப்பட்டது. 6 ஆண்டுகளுக்குப் பிறகு அத்தாலியா பதவியிறக்கப்பட்டு கொல்லப்பட்டாள்.",
    },
    {
        id: "joash-j", name: "யோவாஸ்", kingdom: "யூதா", year: "கி.மு. 835",
        reignYears: "40 வருஷம்", prevKing: "அத்தாலியா",
        context: "ஆலயத்தில் குழந்தையாக மறைத்து வைக்கப்பட்ட இவர், 7 வயதில் ராஜாவாக முடிசூட்டப்பட்டார். ஆசாரியனாகிய யோய்தா உயிரோடிருந்த வரை ஆலயத்தைப் பழுதுபார்த்து, தேவனைப் பின்பற்றினார்.",
        note: "யோய்தா மரித்த பிறகு, யோவாஸ் தேவனை விட்டு விலகினார், உண்மையைச் சொன்னதற்காக யோய்தாவின் குமாரனையே கொன்றார். பின்னர் அவர் தன் ஊழியக்காரராலேயே கொல்லப்பட்டார்.",
    },
    {
        id: "amaziah", name: "அமத்சியா", kingdom: "யூதா", year: "கி.மு. 796",
        reignYears: "29 வருஷம்", prevKing: "யோவாஸ்",
        context: "தேவனைப் பின்பற்றினார், ஆனால் முழு இருதயத்தோடும் அல்ல. ஏதோமியரை வென்றார், ஆனால் பின்பு ஏதோமிய தெய்வங்களை வழிபடத் தொடங்கினார்.",
        note: "பெருமையினால் இஸ்ரவேலை போருக்கு அழைத்தார், ஆனால் மோசமாகத் தோற்கடிக்கப்பட்டார். அவர் சிறைபிடிக்கப்பட்டார், எருசலேமின் மதில்கள் இடிக்கப்பட்டன. பின்னர் ஒரு சதியினால் கொல்லப்பட்டார்.",
    },
    {
        id: "uzziah", name: "உசியா", kingdom: "யூதா", year: "கி.மு. 792",
        reignYears: "52 வருஷம்", prevKing: "அமத்சியா",
        context: "அசரியா என்றும் அழைக்கப்படுகிறார். கோபுரங்களைக் கட்டி, கிணறுகளை வெட்டி, பலமான இராணுவத்தைக் கொண்டிருந்த ஒரு வெற்றிகரமான ராஜா.",
        note: "அவர் பெருமை கொண்டு, ஆசாரியர்கள் மட்டுமே செய்ய வேண்டிய தூபம் காட்டும் பணியை ஆலயத்தில் செய்ய முயன்றார். தேவன் அவரை குஷ்டரோகத்தால் அடித்தார், அவர் மரிக்கும் வரை தனிமையில் வாழ்ந்தார்.",
    },
    {
        id: "jotham", name: "யோதாம்", kingdom: "யூதா", year: "கி.மு. 750",
        reignYears: "16 வருஷம்", prevKing: "உசியா",
        context: "யூதாவின் அரண்களையும் ஆலயத்தின் மேல்வாசலையும் கட்டிய ஒரு நல்ல ராஜா. தன் தகப்பன் குஷ்டரோகியாய் இருந்தபோது அவர் பிரதிநிதியாக ஆட்சி செய்தார்.",
        note: "தன் தகப்பனைப் போலல்லாமல் அவர் தேவனுடைய ஆலயத்திற்குள் அக்கிரமமாக நுழையவில்லை. இருப்பினும் ஜனங்கள் இன்னும் விக்கிரக ஆராதனை செய்து வந்தனர்.",
    },
    {
        id: "ahaz", name: "ஆகாஸ்", kingdom: "யூதா", year: "கி.மு. 735",
        reignYears: "16 வருஷம்", prevKing: "யோதாம்",
        context: "யூதாவின் மிக மோசமான ராஜாக்களில் ஒருவர். தன் சொந்தக் குமாரனையே பலியிட்டு, எருசலேம் எங்கும் விக்கிரக பீடங்களை அமைத்தார்.",
        note: "இஸ்ரவேலும் சீரியாவும் தாக்கியபோது, அவர் தேவனை நம்புவதற்குப் பதிலாக அசீரிய ராஜாவின் உதவியை நாடினார். ஆலயத்தின் பலிபீடத்தை அகற்றிவிட்டு, அசீரிய முறைப்படியான ஒரு பீடத்தை வைத்தார்.",
    },
    {
        id: "hezekiah", name: "எசேக்கியா", kingdom: "யூதா", year: "கி.மு. 715",
        reignYears: "29 வருஷம்", prevKing: "ஆகாஸ்",
        context: "யூதாவின் மகா ராஜாக்களில் ஒருவர். விக்கிரகங்களைத் தகர்த்து, ஆலயத்தைத் திறந்து, ஜனங்களை மீண்டும் தேவனிடம் அழைத்து வந்தார்.",
        note: "அசீரிய இராணுவம் எருசலேமைச் சூழ்ந்தபோது, அவர் ஜெபித்தார், தேவன் ஒரு தூதனை அனுப்பி ஒரே இரவில் 1,85,000 வீரர்களை அழித்தார். அவர் தீராத வியாதியிலிருந்து சுகமளிக்கப்பட்டு, 15 ஆண்டுகள் ஆயுசு கூட்டிக் கொடுக்கப்பட்டார்.",
    },
    {
        id: "manasseh", name: "மனாசே", kingdom: "யூதா", year: "கி.மு. 697",
        reignYears: "55 வருஷம்", prevKing: "எசேக்கியா",
        context: "யூதாவின் நீண்ட காலம் ஆட்சி செய்த ராஜா மற்றும் மிகவும் பொல்லாதவர். தன் தகப்பன் எசேக்கியா செய்த சீர்திருத்தங்களை அழித்து, எருசலேமை விக்கிரகங்களால் நிரப்பினார்.",
        note: "ஆலயத்திற்குள்ளேயே ஒரு விக்கிரகத்தை வைத்தார். அசீரியாவால் சிறைபிடிக்கப்பட்டார், ஆனால் சிறையில் அவர் உண்மையாக மனந்திரும்பினார், தேவன் அவரை மீண்டும் நிலைநிறுத்தினார். அவர் தன் தீமைகளை மாற்ற முயன்றார், ஆனால் பாதிப்பு ஆழமாக இருந்தது.",
    },
    {
        id: "amon", name: "ஆமோன்", kingdom: "யூதா", year: "கி.மு. 643",
        reignYears: "2 வருஷம்", prevKing: "மனாசே",
        context: "மனாசேயின் குமாரன். தன் தகப்பனுடைய ஆரம்பகால பொல்லாப்புகளைச் செய்தார், ஆனால் மனந்திரும்பவில்லை.",
        note: "2 ஆண்டுகளுக்குப் பிறகு தன் ஊழியக்காரராலேயே கொல்லப்பட்டார். ஜனங்கள் அந்தச் சதிகாரர்களைக் கொன்று, அவருடைய குமாரன் யோசியாவை ராஜாவாக்கினார்கள்.",
    },
    {
        id: "josiah", name: "யோசியா", kingdom: "யூதா", year: "கி.மு. 641",
        reignYears: "31 வருஷம்", prevKing: "ஆமோன்",
        context: "எக்காலத்திலும் சிறந்த ராஜாக்களில் ஒருவர். 8 வயதில் முடிசூட்டப்பட்ட இவர், தேவனை ஆர்வத்துடன் தேடி, யூதாவின் வரலாற்றிலேயே மிகப்பெரிய சமயச் சீர்திருத்தத்தை நடத்தினார்.",
        note: "ஆலயத்தில் தொலைந்து போன நியாயப்பிரமாண புஸ்தகம் கண்டெடுக்கப்பட்டது. அது வாசிக்கப்பட்டபோது, அவர் அழுது தன் வஸ்திரங்களைக் கிழித்துக்கொண்டார். தேசத்திலிருந்த விக்கிரகங்களைத் தகர்த்தார். மெகிதோ போரில் கொல்லப்பட்டார்.",
    },
    {
        id: "jehoahaz-j", name: "யோவாகாஸ்", kingdom: "யூதா", year: "கி.மு. 609",
        reignYears: "3 மாதம்", prevKing: "யோசியா",
        context: "யோசியாவின் குமாரன். ஜனங்கள் இவரை ராஜாவாக்கினார்கள், ஆனால் எகிப்தின் பார்வோன் நேகோ 3 மாதங்களுக்குப் பிறகு இவரை நீக்கி எகிப்திற்குச் சிறைபிடித்துச் சென்றான்.",
        note: "அவர் மீண்டும் திரும்பவே இல்லை. பார்வோன் அவருக்குப் பதிலாக அவருடைய சகோதரன் யோயாக்கீமை ராஜாவாக்கி, யூதாவின் மேல் அதிக வரியைச் சுமத்தினான்.",
    },
    {
        id: "jehoiakim", name: "யோயாக்கீம்", kingdom: "யூதா", year: "கி.மு. 609",
        reignYears: "11 வருஷம்", prevKing: "யோவாகாஸ்",
        context: "எகிப்தால் ராஜாவாக்கப்பட்டவர். சுயநலவாதியாகவும் ஒடுக்குமுறை செய்பவராகவும் இருந்தார், தனக்காக ஒரு மாளிகையைக் கட்ட ஜனங்களைக் கட்டாய வேலை வாங்கினார்.",
        note: "தீர்க்கதரிசியாகிய எரேமியாவின் எச்சரிக்கைச் சுருள் வாசிக்கப்பட்டபோது, அதை வெட்டி நெருப்பில் எரித்தார். பின்னர் பாபிலோன் படையெடுத்தது, அவர் நேபுகாத்நேசாருக்குப் பணிந்தார்.",
    },
    {
        id: "jehoiachin", name: "யோயாக்கீன்", kingdom: "யூதா", year: "கி.மு. 598",
        reignYears: "3 மாதம்", prevKing: "யோயாக்கீம்",
        context: "பாபிலோன் எருசலேமை முற்றுகையிடுவதற்கு முன்பு 3 மாதங்கள் மட்டுமே ஆட்சி செய்தார். நகரத்தைக் காக்க அவர் நேபுகாத்நேசாரிடம் சரணடைந்தார்.",
        note: "அவர் ராஜ குடும்பத்தினர் மற்றும் கைவினைஞர்களுடன் பாபிலோனுக்குச் சிறைபிடிக்கப்பட்டார். பல்லாயிரக்கணக்கானோர் நாடு கடத்தப்பட்டனர். பின்னர் அவர் பாபிலோன் ராஜாவின் தயவைப் பெற்று அங்கேயே வாழ்ந்தார்.",
    },
    {
        id: "zedekiah", name: "சிதேக்கியா", kingdom: "யூதா", year: "கி.மு. 597",
        reignYears: "11 வருஷம்", prevKing: "யோயாக்கீன்",
        context: "பாபிலோனால் நியமிக்கப்பட்ட ராஜா மற்றும் யூதாவின் கடைசி ராஜா. பலவீனமான இவர் எரேமியா தீர்க்கதரிசியின் எச்சரிக்கைகளைப் புறக்கணித்தார்.",
        note: "பாபிலோனுக்கு எதிராகக் கலகம் செய்தார். நேபுகாத்நேசா எருசலேமை அழித்து ஆலயத்தை எரித்தார். சிதேக்கியாவின் கண்கள் பிடுங்கப்பட்டு, சங்கிலிகளால் கட்டப்பட்டு பாபிலோனுக்குக் கொண்டு செல்லப்பட்டார்.",
    },

    // ═══════════════════════════════════════════
    // இஸ்ரவேல் (வட ராஜ்யம் - ISRAEL)
    // ═══════════════════════════════════════════
    {
        id: "jeroboam1", name: "யெரொபெயாம் I", kingdom: "இஸ்ரவேல்", year: "கி.மு. 931",
        reignYears: "22 வருஷம்", prevKing: "சாலொமோன்",
        context: "பிரிவினைக்குப் பின் வட ராஜ்யத்தின் முதல் ராஜா. ஜனங்கள் எருசலேமுக்கு வழிபடச் சென்றால் தமக்கு எதிராகத் திரும்புவார்கள் என்று பயந்தார்.",
        note: "இரண்டு பொற்கன்றுக்குட்டிகளை உண்டாக்கி, 'இவைகளே உங்கள் தெய்வங்கள்' என்று ஜனங்களிடம் சொன்னார். இதுவே அவருக்குப் பின் வந்த அனைத்து இஸ்ரவேல் ராஜாக்களும் செய்த பெரும் பாவமானது.",
    },
    {
        id: "nadab", name: "நாதாப்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 910",
        reignYears: "2 வருஷம்", prevKing: "யெரொபெயாம் I",
        context: "யெரொபெயாமின் குமாரன். தன் தகப்பனின் விக்கிரக ஆராதனையைத் தொடர்ந்தார், ஒரு சதியில் கொல்லப்பட்டார்.",
        note: "பாஷா இவரைக் கொன்று, யெரொபெயாமின் குடும்பம் முழுவதையும் அழித்தார், இது யெரொபெயாமின் குடும்பத்திற்கு எதிரான தீர்க்கதரிசனத்தை நிறைவேற்றியது.",
    },
    {
        id: "baasha", name: "பாஷா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 909",
        reignYears: "24 வருஷம்", prevKing: "நாதாப்",
        context: "வன்முறை மூலம் ஆட்சிக்கு வந்து 24 ஆண்டுகள் ஆண்டார், ஆனால் யெரொபெயாம் தொடங்கிய விக்கிரக ஆராதனையை விட்டு விலகவில்லை.",
        note: "யெரொபெயாமின் குடும்பத்திற்கு நேர்ந்த அதே கதி இவருடைய குடும்பத்திற்கும் ஏற்படும் என்று ஒரு தீர்க்கதரிசி எச்சரித்தார்.",
    },
    {
        id: "elah", name: "ஏலா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 886",
        reignYears: "2 வருஷம்", prevKing: "பாஷா",
        context: "பாஷாவின் குமாரன். மது அருந்தி வெறித்திருந்தபோது, தன் இராணுவத் தளபதிகளில் ஒருவனான சிம்ரியால் கொல்லப்பட்டார்.",
        note: "சிம்ரி பாஷாவின் குடும்பம் முழுவதையும் அழித்தார், இது அக்குடும்பத்திற்கு எதிரான தீர்க்கதரிசனத்தை நிறைவேற்றியது.",
    },
    {
        id: "zimri", name: "சிம்ரி", kingdom: "இஸ்ரவேல்", year: "கி.மு. 885",
        reignYears: "7 நாள்", prevKing: "ஏலா",
        context: "7 நாட்கள் மட்டுமே ஆட்சி செய்தார் - வேதாகமத்தில் மிகக் குறுகிய காலம் ஆட்சி செய்த ராஜா இவரே.",
        note: "அவர் செய்ததை இராணுவம் கேட்டபோது, தங்கள் தளபதி ஒம்ரியை ராஜாவாக்கினார்கள். சிம்ரி அரண்மனைக்குள் சென்று அதற்குத் தீவைத்து தற்கொலை செய்துகொண்டார்.",
    },
    {
        id: "omri", name: "உம்ரி", kingdom: "இஸ்ரவேல்", year: "கி.மு. 885",
        reignYears: "12 வருஷம்", prevKing: "சிம்ரி",
        context: "இராணுவ பலம் மிக்க ராஜா, சமாரியா பட்டணத்தைக் கட்டி அதை இஸ்ரவேலின் புதிய தலைநகராக்கினார்.",
        note: "அவர் மிகவும் செல்வாக்கு பெற்றிருந்ததால், அசீரிய ஆவணங்கள் இஸ்ரவேலை 'உம்ரியின் வம்சம்' என்றே குறிப்பிட்டன. ஆனால் ஆன்மீக ரீதியில் அவருக்கு முன் இருந்தவர்களை விட மோசமானவராக இருந்தார்.",
    },
    {
        id: "ahab", name: "ஆகாப்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 874",
        reignYears: "22 வருஷம்", prevKing: "உம்ரி",
        context: "இஸ்ரவேலின் மிகப்பொல்லாத ராஜாக்களில் ஒருவர். பாகால் வழிபாட்டைத் தீவிரமாகக் கொண்டுவந்த யேசபேல் என்னும் போனீசிய இளவரசியை மணந்தார்.",
        note: "எலியா தீர்க்கதரிசி இவருக்கு எதிரானவராக இருந்தார். நாபோத்தின் திராட்சத்தோட்டத்தைப் பறிக்க அவனைக் கொலை செய்தார். சில நேரங்களில் மனஸ்தாபப்பட்டார், ஆனால் உண்மையாக மாறவில்லை.",
    },
    {
        id: "ahaziah-i", name: "அகசியா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 853",
        reignYears: "2 வருஷம்", prevKing: "ஆகாப்",
        context: "ஆகாப் மற்றும் யேசபேலின் குமாரன். மேல்வீட்டு ஜன்னல் வழியாய் விழுந்து காயமடைந்தபோது, தான் பிழைப்பேனா என்று அந்நிய தெய்வத்திடம் கேட்க ஆட்களை அனுப்பினார்.",
        note: "எலியா அந்த ஆட்களை வழிமறித்து, ராஜா மரிப்பார் என்று கூறினார். அவரைக் கைது செய்ய அனுப்பப்பட்ட இரண்டு ஐம்பது பேர் கொண்ட குழுக்களைத் தேவன் வானத்திலிருந்து அக்கினி அனுப்பி அழித்தார். எலியா சொன்னபடியே அவர் மரித்தார்.",
    },
    {
        id: "joram-i", name: "யோராம்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 852",
        reignYears: "12 வருஷம்", prevKing: "அகசியா",
        context: "ஆகாப்பின் குமாரன். தன் தகப்பன் வைத்த பாகால் சிலையை அகற்றினார், ஆனால் யெரொபெயாமின் கன்றுக்குட்டி வழிபாட்டைத் தொடர்ந்தார்.",
        note: "எலிசா தீர்க்கதரிசியின் காலத்தில் ஆட்சி செய்தார். யேகூவினால் எய்யப்பட்ட அம்பால் கொல்லப்பட்டார். அவருடைய உடல் நாபோத்தின் நிலத்தில் வீசப்பட்டது.",
    },
    {
        id: "jehu", name: "யெகூ", kingdom: "இஸ்ரவேல்", year: "கி.மு. 841",
        reignYears: "28 வருஷம்", prevKing: "யோராம்",
        context: "ஆகாப்பின் குடும்பத்தை அழிக்க எலிசாவின் சீஷனால் அபிஷேகம் செய்யப்பட்டார். அவர் வேகமாக இரதம் ஓட்டுவதில் பெயர் பெற்றவர்.",
        note: "யோராம், யூதாவின் அகசியா மற்றும் யேசபேலைக் கொன்றார். ஆகாப்பின் வம்சத்தாரையும் பாகால் தீர்க்கதரிசிகளையும் அழித்தார். ஆனால் யெரொபெயாமின் பொற்கன்றுக்குட்டிகளை விடவில்லை.",
    },
    {
        id: "jehoahaz-i", name: "யோவாகாஸ்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 814",
        reignYears: "17 வருஷம்", prevKing: "யெகூ",
        context: "யேகூவின் குமாரன். சீரியாவினால் இஸ்ரவேல் ஒடுக்கப்பட்டபோது, இவர் தேவனை நோக்கி கூப்பிட்டார்.",
        note: "தேவன் அவர்களுக்கு ஒரு இரட்சகரைத் தந்தார், ஆனால் ஜனங்கள் விக்கிரக ஆராதனையை விடவில்லை. இஸ்ரவேலின் இராணுவம் வெறும் 50 குதிரைவீரர்களும் 10 இரதங்களுமாகச் சுருங்கியது.",
    },
    {
        id: "jehoash-i", name: "யோவாஸ்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 798",
        reignYears: "16 வருஷம்", prevKing: "யோவாகாஸ்",
        context: "யோவாகாஸின் குமாரன். மரண அவஸ்தையிலிருந்த எலிசா தீர்க்கதரிசியைச் சந்தித்து அழுதார்.",
        note: "எலிசா அவரை அம்புகளால் தரையில் அடிக்கச் சொன்னார் - அவர் மூன்று முறை மட்டுமே அடித்தார். இதனால் அவர் சீரியாவை மூன்று முறை மட்டுமே வெல்வார் என்று எலிசா கூறினார். சீரியாவிடம் இழந்த பட்டணங்களை மீட்டெடுத்தார்.",
    },
    {
        id: "jeroboam2", name: "யெரொபெயாம் II", kingdom: "இஸ்ரவேல்", year: "கி.மு. 793",
        reignYears: "41 வருஷம்", prevKing: "யோவாஸ்",
        context: "இஸ்ரவேலின் மிகவும் செழிப்பான ராஜா. சாலொமோனுக்குப் பிறகு இஸ்ரவேலின் எல்லைகளை மிகப்பெரிய அளவில் விரிவுபடுத்தினார்.",
        note: "பெரிய வெற்றி கிடைத்தாலும், அக்காலத்தின் அநீதியையும் ஆடம்பரத்தையும் ஆமோஸ் தீர்க்கதரிசி கண்டித்தார். ஏழைகள் ஒடுக்கப்பட்டனர், செல்வந்தர்கள் மாளிகைகளில் வாழ்ந்தனர்.",
    },
    {
        id: "zechariah-i", name: "சகரியா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 753",
        reignYears: "6 மாதம்", prevKing: "யெரொபெயாம் II",
        context: "யெரொபெயாம் II-ன் குமாரன் மற்றும் யேகூ வம்சத்தின் கடைசி ராஜா. 6 மாதங்களுக்குப் பிறகு பகிரங்கமாகக் கொல்லப்பட்டார்.",
        note: "யேகூவின் வம்சம் 4-ம் தலைமுறை வரை மட்டுமே ஆளும் என்ற தேவனுடைய வார்த்தை இவருடன் நிறைவேறியது. ஷல்லூம் என்பவர் ஜனங்களுக்கு முன்பாக இவரைக் கொன்று சிங்காசனத்தில் அமர்ந்தார்.",
    },
    {
        id: "shallum", name: "சல்லூம்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 752",
        reignYears: "1 மாதம்", prevKing: "சகரியா",
        context: "சகரியாவைக் கொன்று சிங்காசனத்தைக் கைப்பற்றினார், ஆனால் ஒரு மாதத்திற்குள் மெனாகேமினால் கொல்லப்பட்டார்.",
        note: "இஸ்ரவேலின் கடைசி காலங்களில் ஏற்பட்ட தொடர்ச்சியான வன்முறை ஆட்சிக் மாற்றங்கள் அதன் ஆன்மீக மற்றும் அரசியல் வீழ்ச்சியின் அறிகுறியாகும்.",
    },
    {
        id: "menahem", name: "மெனாகேம்", kingdom: "இஸ்ரவேல்", year: "கி.மு. 752",
        reignYears: "10 வருஷம்", prevKing: "சல்லூம்",
        context: "கடுமையான வன்முறை மூலம் ஆட்சிக்கு வந்தார். ஒரு பட்டணம் இவரை ஏற்க மறுத்தபோது, அங்கிருந்த அனைவரையும் கொன்றார்.",
        note: "தன் சிங்காசனத்தைத் தக்கவைக்க அசீரிய ராஜாவிற்குப் பெருந்தொகையைத் திறையாகக் கொடுத்தார். இதற்காகச் செல்வந்தர்களிடம் தலா 50 சேக்கல் வெள்ளி வசூலித்தார்.",
    },
    {
        id: "pekahiah", name: "பெக்காகியா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 742",
        reignYears: "2 வருஷம்", prevKing: "மெனாகேம்",
        context: "மெனாகேமின் குமாரன். விக்கிரக ஆராதனையைத் தொடர்ந்த இவர், தன் தளபதியாகிய பேக்காவினால் அரண்மனையிலேயே கொல்லப்பட்டார்.",
        note: "பேக்கா 50 பேரோடு சேர்ந்து இவரைக் கொலை செய்தான். இஸ்ரவேல் வேகமாக அழிவை நோக்கிச் சென்றது.",
    },
    {
        id: "pekah", name: "பேக்கா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 740",
        reignYears: "20 வருஷம்", prevKing: "பெக்காகியா",
        context: "யூதாவைத் தாக்கச் சீரியாவுடன் கூட்டணி வைத்தார், ஆனால் அசீரிய ராஜா திக்லாத் பிலேசர் இஸ்ரவேலின் பெரும்பகுதியைக் கைப்பற்றினார்.",
        note: "இவரது காலத்தில் இஸ்ரவேலர்களில் பலர் அசீரியாவுக்குச் சிறைபிடித்துச் செல்லப்பட்டனர். பின்னர் ஓசெயா இவரைக் கொன்று சிங்காசனத்தில் அமர்ந்தார்.",
    },
    {
        id: "hoshea", name: "ஓசெயா", kingdom: "இஸ்ரவேல்", year: "கி.மு. 732",
        reignYears: "9 வருஷம்", prevKing: "பேக்கா",
        context: "இஸ்ரவேலின் கடைசி ராஜா. அசீரியாவிலிருந்து விடுபட எகிப்துடன் ரகசிய ஒப்பந்தம் செய்ய முயன்றார்.",
        note: "அசீரிய ராஜா இதைக் கண்டுபிடித்து இவரைச் சிறையிலடைத்தான். அசீரியா சமாரியாவை 3 ஆண்டுகள் முற்றுகையிட்டு, கி.மு. 722-ல் வட ராஜ்யத்தை முழுமையாக அழித்தது. ஜனங்கள் அசீரியா எங்கும் சிதறடிக்கப்பட்டனர்.",
    },
];

// ═══════════════════════════════════════════════════════════════
// Verse-to-King mapping
// Format: "BookName Chapter:Verse" → king id
// Card appears BEFORE the mapped verse
// ═══════════════════════════════════════════════════════════════
const kingTransitionMap = {
    // 1 Kings (I Kings in app)
    "I Kings 12:1": "rehoboam",
    "I Kings 12:20": "jeroboam1",
    "I Kings 15:1": "abijam",
    "I Kings 15:9": "asa",
    "I Kings 15:25": "nadab",
    "I Kings 15:33": "baasha",
    "I Kings 16:8": "elah",
    "I Kings 16:15": "zimri",
    "I Kings 16:23": "omri",
    "I Kings 16:29": "ahab",
    "I Kings 22:41": "jehoshaphat",
    "I Kings 22:51": "ahaziah-i",

    // 2 Kings (II Kings in app)
    "II Kings 1:17": "joram-i",
    "II Kings 8:16": "jehoram-j",
    "II Kings 8:25": "ahaziah-j",
    "II Kings 11:1": "athaliah",
    "II Kings 11:21": "joash-j",
    "II Kings 9:1": "jehu",
    "II Kings 13:1": "jehoahaz-i",
    "II Kings 13:10": "jehoash-i",
    "II Kings 14:1": "amaziah",
    "II Kings 14:23": "jeroboam2",
    "II Kings 15:1": "uzziah",
    "II Kings 15:8": "zechariah-i",
    "II Kings 15:13": "shallum",
    "II Kings 15:17": "menahem",
    "II Kings 15:23": "pekahiah",
    "II Kings 15:27": "pekah",
    "II Kings 15:32": "jotham",
    "II Kings 16:1": "ahaz",
    "II Kings 17:1": "hoshea",
    "II Kings 18:1": "hezekiah",
    "II Kings 21:1": "manasseh",
    "II Kings 21:19": "amon",
    "II Kings 22:1": "josiah",
    "II Kings 23:31": "jehoahaz-j",
    "II Kings 23:36": "jehoiakim",
    "II Kings 24:8": "jehoiachin",
    "II Kings 24:18": "zedekiah",
};

/**
 * Get king transition card data for a specific verse
 * @param {string} bookName - Book name (e.g., "I Kings", "II Kings")
 * @param {number} chapter - Chapter number
 * @param {number|string} verse - Verse number
 * @param {string} language - Language code ('english', 'tamil', or 'both'). If not provided, uses current language.
 * @returns {object|null} King data object or null
 */
function getKingTransitionCard(bookName, chapter, verse, language) {
    const key = `${bookName} ${chapter}:${verse}`;
    const kingId = kingTransitionMap[key];
    if (!kingId) return null;
    
    // Determine which dataset to use based on language
    let dataSet = kingTransitionData; // Default to English
    
    // Use currentLanguage if no language parameter is provided (for backward compatibility)
    const lang = language || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'english');
    
    if (lang === 'tamil') {
        dataSet = kingTransitionDataTamil;
    } else if (lang === 'both') {
        // For 'both', we'll return the Tamil version on odd verses and English on even
        // Or you could return English by default. Adjust as needed.
        dataSet = kingTransitionData; // Default to English for 'both'
    }
    
    return dataSet.find(k => k.id === kingId) || null;
}
