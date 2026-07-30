-- Quiz Questions Table
CREATE TABLE IF NOT EXISTS quiz_questions (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    book VARCHAR(50) NOT NULL,
    chapter INT NOT NULL,
    question_number INT NOT NULL,
    question_text TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_answer INT NOT NULL CHECK (correct_answer IN (0, 1, 2, 3)),
    verse_reference VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(book, chapter, question_number)
);

-- Create index for faster queries
CREATE INDEX idx_quiz_questions_book_chapter ON quiz_questions(book, chapter);

-- Sample data insert for Matthew Chapter 1
INSERT INTO quiz_questions (book, chapter, question_number, question_text, option_a, option_b, option_c, option_d, correct_answer, verse_reference)
VALUES
    ('matthew', 1, 1, 'மத்தேயு அதிகாரம் 1-ல் யாருடைய வம்சாவளி எழுதப்பட்டுள்ளது?', 'ஆபிரகாம்', 'தாவீது', 'யோசேப்பு', 'இயேசு கிறிஸ்து', 3, 'மத்தேயு 1:1'),
    ('matthew', 1, 2, 'இயேசு கிறிஸ்து யாருடைய குமாரன் என்று குறிப்பிடப்படுகிறார்?', 'ஆபிரகாம் மட்டும்', 'தாவீது மட்டும்', 'ஆபிரகாம் மற்றும் தாவீது', 'மோசே மற்றும் தாவீது', 2, 'மத்தேயு 1:1'),
    ('matthew', 1, 3, 'ஆபிரகாமிலிருந்து தாவீது வரை எத்தனை தலைமுறைகள் உள்ளன?', '10', '12', '14', '20', 2, 'மத்தேயு 1:17'),
    ('matthew', 1, 4, 'தாவீதிலிருந்து பாபிலோன் சிறைவாசம் வரை எத்தனை தலைமுறைகள்?', '12', '14', '16', '20', 1, 'மத்தேயு 1:17'),
    ('matthew', 1, 5, 'பாபிலோன் சிறைவாசத்திலிருந்து கிறிஸ்து வரை எத்தனை தலைமுறைகள்?', '10', '12', '14', '18', 2, 'மத்தேயு 1:17'),
    ('matthew', 1, 6, 'மரியாள் கர்ப்பவதியானது யாரினால்?', 'யோசேப்பு', 'மனிதன்', 'பரிசுத்த ஆவி', 'தேவதூதன்', 2, 'மத்தேயு 1:18'),
    ('matthew', 1, 7, 'மரியாளை இரகசியமாக விட்டுவிட யோசேப்பு நினைத்த காரணம் என்ன?', 'அவர் பயந்ததால்', 'அவர் நீதிமானாக இருந்ததால்', 'அவர் கோபமடைந்ததால்', 'சட்ட கட்டாயம் காரணமாக', 1, 'மத்தேயு 1:19'),
    ('matthew', 1, 8, 'யோசேப்பிற்கு கனவில் தோன்றியவர் யார்?', 'இயேசு', 'பரிசுத்த ஆவி', 'தேவதூதன்', 'மோசே', 2, 'மத்தேயு 1:20'),
    ('matthew', 1, 9, 'குழந்தைக்கு "இயேசு" என்று பெயர் வைக்கும்படி ஏன் சொல்லப்பட்டது?', 'அவர் ராஜாவாக இருப்பதால்', 'அவர் தீர்க்கதரிசி என்பதால்', 'அவர் ஜனங்களை பாவங்களில் இருந்து இரட்சிப்பதால்', 'அவர் தேவதூதன் என்பதால்', 2, 'மத்தேயு 1:21'),
    ('matthew', 1, 10, '"இம்மானுவேல்" என்ற பெயரின் அர்த்தம் என்ன?', 'தேவன் வல்லவர்', 'தேவன் ராஜா', 'தேவன் நம்மோடு இருக்கிறார்', 'தேவன் நீதிபதி', 2, 'மத்தேயு 1:23')
ON CONFLICT DO NOTHING;
