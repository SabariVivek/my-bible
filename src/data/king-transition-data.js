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
 * @returns {object|null} King data object or null
 */
function getKingTransitionCard(bookName, chapter, verse) {
    const key = `${bookName} ${chapter}:${verse}`;
    const kingId = kingTransitionMap[key];
    if (!kingId) return null;
    return kingTransitionData.find(k => k.id === kingId) || null;
}
