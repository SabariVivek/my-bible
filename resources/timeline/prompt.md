I need character data for the book of [BOOK NAME] in the same exact style and rules as my Matthew and Mark character datasets.
Generate the output as:

window.[bookNameCharacters] = {
  chapterNumber: [
    { name: "Character Name", description: "Short description" },
    ...
  ],
  ...
};

Rules to follow:
1. Include ALL explicitly mentioned characters

Named people

Unnamed individuals

Miracle recipients

Parents/children involved

People who speak or are described

Parable characters

Demons (if described)

Angels

Messengers

Soldiers

Officials

ALL individuals acting or mentioned

2. Groups must NOT be written as collections.

Instead, represent each group as a single singular person:

"A Pharisee"

"A Scribe"

"A Soldier"

"A Lawyer"

"A Herodian"

"A Crowd Member" (if needed)

Never output plural group names like “Pharisees,” “Sadducees,” etc.

3. Genealogy chapters

If a chapter contains genealogy, include only key names
(Example for Jesus’ genealogy: Adam, Abraham, David, Joseph, Jesus)

4. Parables

Include each parable character as a separate entry
Examples:

"A Sower (Parable)"

"A Samaritan (Parable)"

"A Rich Man (Parable)"

5. Unnamed miracle characters

Each miracle person must be separate:

"A Blind Man"

"A Deaf Man"

"A Leper"

"A Paralytic"

"A Demon-Possessed Man"

"A Woman with an Issue of Blood"

"A Centurion's Servant"
etc.

6. Description Style

One short sentence

Clear, simple English

Avoid theological commentary

Just describe the role in the chapter narrative

7. Output Format

Must be valid JavaScript object

Use window.bookNameCharacters format

Use consistent indentation

No comments inside JS

No extra wording outside the object