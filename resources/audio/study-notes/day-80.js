// ─────────────────────────────────────────────────────────────────────────────
// Day 80 Study Note: Biblical Time Reckoning (Day Hours and Night Watches)
// வேத கால நேரக் கணக்கீடு: பகல் மணி வேளைகளும் இரவு ஜாமங்களும் (பாடச் சுருக்கம்)
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  window.BIBLE_STUDY_NOTES = window.BIBLE_STUDY_NOTES || [];

  const DAY_80_SUMMARY = {
    day: 80,
    title: "வேத கால நேரக் கணக்கீடு: பகல் மணி வேளைகளும் இரவு ஜாமங்களும் (பாடச் சுருக்கம்)",
    trackTitle: "Bible Timings",
    aliases: [
      "Bible Timings",
      "Bible Timing",
      "வேத கால நேரக் கணக்கீடு: பகல் மணி வேளைகளும் இரவு ஜாமங்களும்",
      "வேத கால நேரக் கணக்கீடு",
      "Biblical Time Reckoning"
    ],
    tags: ["Day 80", "Bible Timings", "வேத கால நேரக் கணக்கீடு", "பகல் மணி வேளைகள்", "இரவு ஜாமங்கள்"],
    summary:
      "இப்பாடத்தின் மையக்கருத்து, விவிலியத்தில் குறிப்பிடப்படும் யூதர்களின் நாள் தொடக்கம், பகலின் 12 மணி வேளைகள் மற்றும் இரவின் 4 ஜாமங்கள் (காவல்கள்) குறித்த காலக் கணக்கீட்டை வரலாற்று மற்றும் வேத வசனங்களின் அடிப்படையில் விளக்குவதாகும்.",

    scripturePassages: [
      {
        reference: "யோவான் 11:9",
        summary: "பகலுக்குப் பன்னிரண்டு மணி நேரமில்லையா? ஒருவன் பகலிலே நடந்தால் அவன் இடறமாட்டான்."
      },
      {
        reference: "மாற்கு 15:25",
        summary: "அவரைச் சிலுவையில் அறைந்தபோது, மூன்றாம் மணி வேளையாயிருந்தது."
      },
      {
        reference: "மத்தேயு 20:3, 6",
        summary: "திராட்சைத் தோட்ட எஜமான் மூன்றாம் மணி வேளையிலும், பதினொன்றாம் மணி வேளையிலும் வேலையாட்களை அழைத்தார்."
      },
      {
        reference: "மாற்கு 15:33",
        summary: "ஆறாம் மணி வேளையானபோது, ஒன்பதாம் மணி வேளைவரைக்கும் பூமiyெங்கும் அந்தகாரம் (இருள்) உண்டாயிற்று."
      },
      {
        reference: "மாற்கு 15:34",
        summary: "ஒன்பதாம் மணி வேளையிலே இயேசு: ஏலோயீ! ஏலோயீ! லாமா சபக்தானி என்று மகா சத்தமிட்டுக் கூப்பிட்டு ஜீவனை விட்டார்."
      },
      {
        reference: "அப்போஸ்தலர் 3:1; 10:3",
        summary: "ஒன்பதாம் மணி வேளையாகிய ஜெப வேளையிலே பேதுருவும் யோவானும் தேவாலயத்திற்குப் போனார்கள்; கொர்நேலியு தரிசனம் கண்டான்."
      },
      {
        reference: "மாற்கு 13:35",
        summary: "வீட்டு எஜமான் சாயங்காலத்திலோ, நடுராத்திரியிலோ, சேவல் கூவும் நேரத்திலோ, காலையிலோ, எப்போது வருவான் என்று நீங்கள் அறியாதிருக்கிறபடியால் விழித்திருங்கள்."
      },
      {
        reference: "மத்தேயு 14:23, 25",
        summary: "சாயங்காலமானபோது இயேசு தனித்து ஜெபம் பண்ண மலையின்மேல் ஏறினார்; இரவின் நான்காம் ஜாமத்திலே கடலின்மேல் நடந்துவந்தார்."
      },
      {
        reference: "மத்தேயு 25:6",
        summary: "நடுராத்திரியிலே: இதோ, மணவாளன் வருகிறார், அவருக்கு எதிர்கொண்டுபோகப் புறப்படுங்கள் என்கிற சத்தம் உண்டாயிற்று."
      },
      {
        reference: "லூக்கா 12:38",
        summary: "அவன் இரண்டாம் ஜாமத்திலாவது, மூன்றாம் ஜாமத்திலாவது வந்து, அவர்கள் விழித்திருக்கிறவர்களாகக் கண்டால், அந்த ஊழியக்காரர் பாக்கியவான்கள்."
      },
      {
        reference: "நீதிமொழிகள் 8:17",
        summary: "என்னைச் சிநேகிக்கிறவர்களை நான் சிநேகிக்கிறேன்; அதிகாலையில் என்னைத் தேடுகிறவர்கள் என்னைக் கண்டடைவார்கள்."
      },
      {
        reference: "நெகேமியா 9:3",
        summary: "அன்றையதினத்தின் நாலில் ஒரு பங்கிலே (ஒரு ஜாமம்) நியாயப்பிரமாணப் புஸ்தகத்தை வாசித்தார்கள்; மற்ற நாலில் ஒரு பங்கிலே பாவ அறிக்கைபண்ணித் தொழுதுகொண்டார்கள்."
      }
    ],

    sermonSections: [
      {
        title: "1. யூதர்களின் நாள் கணக்கீடு (Day Reckoning)",
        points: [
          "நாளின் தொடக்கம்: நவீன முறைப்படி நள்ளிரவு 12 மணிக்கு நாள் தொடங்குவதில்லை; யூத முறைப்படி சாயங்காலம் 6 மணிக்குத் தொடங்கி மறுநாள் சாயங்காலம் 6 மணி வரை ஒரு நாளாகக் கணக்கிடப்படுகிறது.",
          "பகல் மற்றும் இரவுப் பிரிப்பு: யோவான் 11:9-ன் படி பகலுக்கு 12 மணி நேரம் உண்டு (காலை 6:00 மணி முதல் மாலை 6:00 மணி வரை). அதேபோல், இரவுப் பொழுது (மாலை 6:00 மணி முதல் காலை 6:00 மணி வரை) 4 சம ஜாமங்களாகப் (காவல்களாகப்) பிரிக்கப்படுகிறது."
        ]
      },
      {
        title: "2. பகலின் 12 மணி வேளைகள் (Twelve Hours of the Day)",
        points: [
          "விவிலியத்தில் பகல் நேரத்தைக் குறிக்க 'மணி வேளை' (Hour) என்ற சொல் பயன்படுத்தப்படுகிறது.",
          "விடியற்காலை 6:00 மணி முதல் தொடங்கும் ஒவ்வொரு மணி நேரமும் ஒரு வேளையாகக் கணக்கிடப்படுகிறது.",
          "சூத்திரம்: வேத கால மணி வேளையுடன் 6 மணி நேரத்தைக் கூட்டினால் நமது நவீன நேரம் கிடைக்கும்.",
          "முதலாம் மணி வேளை (காலை 07:00): அதிகாலை விழிப்பு மற்றும் வேலை துவக்கம்.",
          "மூன்றாம் மணி வேளை (காலை 09:00): இயேசு சிலுவையில் அறையப்பட்ட நேரம் (மாற்கு 15:25); திராட்சைத் தோட்ட எஜமான் வேலையாட்களை அழைத்த நேரம் (மத்தேயு 20:3).",
          "ஆறாம் மணி வேளை (நண்பகல் 12:00): பூமி முழுவதும் அந்தகாரம் (இருள்) பரவிய தொடக்க நேரம் (மாற்கு 15:33).",
          "ஒன்பதாம் மணி வேளை (பிற்பகல் 03:00): இயேசு சிலுவையில் ஜீவனை விட்ட நேரம் (மாற்கு 15:34); பஸ்கா ஆட்டுக்குட்டி அடிக்கப்படும் வேளை; யூதர்களின் மாலை ஜெப வேளை (அப்போஸ்தலர் 3:1; கொர்நேலியுவின் தரிசனம் - அப் 10:3).",
          "பதினொன்றாம் மணி வேளை (மாலை 05:00): வேலை முடிவதற்கு 1 மணி நேரத்திற்கு முன் வேலையாட்கள் கடைசியாக அழைக்கப்பட்ட நேரம் (மத்தேயு 20:6).",
          "பன்னிரண்டாம் மணி வேளை (மாலை 06:00): பகல் முடிந்து கூலி வழங்கும் நேரம்; நாளின் முடிவு."
        ]
      },
      {
        title: "3. இரவின் 4 ஜாமங்கள் (காவல்கள் - Four Night Watches)",
        points: [
          "மாற்கு 13:35-ல் இயேசு குறிப்பிடும் நான்கு இரவுக் காவல்களின் அடிப்படையில், இரவுப் பொழுது 3 மணி நேர இடைவெளிகளில் நான்கு ஜாமங்களாகப் பிரிக்கப்பட்டுள்ளது.",
          "முதலாம் ஜாமம் (சாயங்காலம் - Evening | மாலை 06:00 – இரவு 09:00): இயேசு தனித்து ஜெபம் பண்ண மலையின் மேல் ஏறிய நேரம் (மத்தேயு 14:23).",
          "இரண்டாம் ஜாமம் (நடுராத்திரி - Midnight | இரவு 09:00 – நள்ளிரவு 12:00): மணவாளன் வரத் தாமதித்த போது கன்னிகைகள் விழித்திருந்த நேரம்; 'நடுராத்திரியிலே இதோ மணவாளன் வருகிறார்' என்ற சத்தம் (மத்தேயு 25:6).",
          "மூன்றாம் ஜாமம் (சேவல் கூவும் நேரம் - Cockcrowing | நள்ளிரவு 12:00 – அதிகாலை 03:00): பேதுரு இயேசுவை மூன்று முறை மறுதலித்த காலப்பகுதி; எஜமான் எப்போது வந்தாலும் விழித்திருக்க வேண்டிய காவல் (லூக்கா 12:38).",
          "நான்காம் ஜாமம் (அதிகாலை / காலை - Morning | அதிகாலை 03:00 – காலை 06:00): இயேசு கடலின் மேல் நடந்து சீஷர்களிடம் வந்த நேரம் (மத்தேயு 14:25); 'அதிகாலையில் என்னை தேடுகிறவன் கண்டடைவான்' (நீதிமொழிகள் 8:17) என்பதற்கேற்ற ஜெப வேளை."
        ]
      },
      {
        title: "4. நடைமுறை ஆவிக்குரிய படிப்பினைகள் (Practical Spiritual Lessons)",
        points: [
          "ஆயத்தமும் விழிப்புணர்வும்: திருடன் எந்த ஜாமத்தில் வருவான் என்று வீட்டு எஜமானுக்குத் தெரியாது; அதேபோல மணவாளனாகிய கிறிஸ்துவின் வருகை எந்த ஜாமத்திலும் சம்பவிக்கலாம் என்பதால், விசுவாசிகள் எப்போதும் விழித்திருந்து ஜெபிக்க வேண்டும்.",
          "அர்ப்பணிப்பின் கால அளவு (நெகேமியா 9:3): இஸ்ரவேல் ஜனங்கள் ஒரு ஜாமம் (3 மணி நேரம்) முழுவதும் தேவனுடைய வேதத்தை வாசித்துத் தியானித்தார்கள்; அடுத்த ஒரு ஜாமம் (3 மணி நேரம்) முழுவதும் பாவ அறிக்கை செய்து தொழுதுகொண்டார்கள். வேத வாசிப்பிற்கும் தனிப்பட்ட ஜெபத்திற்கும் நாம் போதுமான நேரத்தை ஒதுக்க வேண்டும் என்பதை இது நினைவூட்டுகிறது."
        ]
      }
    ],

    corePrinciples: [
      "யூதர்களின் ஒரு நாள் சாயங்காலம் 6:00 மணிக்குத் தொடங்கி மறுநாள் சாயங்காலம் 6:00 மணி வரை நீடிக்கிறது.",
      "பகல் 12 மணி வேளைகளாகவும் (காலை 6 - மாலை 6), இரவு 4 சம ஜாமங்களாகவும் (3 மணி நேரக் காவல்களாகவும்) பிரிக்கப்பட்டுள்ளன.",
      "வேத மணி வேளையுடன் 6 மணி நேரத்தைக் கூட்டினால் நமது நவீன கடிகார நேரம் கிடைக்கிறது.",
      "கிறிஸ்துவின் வருகை எந்த ஜாமத்திலும் சம்பவிக்கலாம் என்பதால் விசுவாசிகள் எப்போதும் விழித்திருந்து ஜெபிக்க வேண்டும்.",
      "நெகேமியா 9:3-ன் படி வேத தியானத்திற்கும் தனிப்பட்ட ஜெபத்திற்கும் போதிய கால அவகாசம் (ஜாமங்கள்) ஒதுக்கப்பட வேண்டும்."
    ],

    // Rich neo-brutalist markup for the bottom sheet
    customHtml: `
      <div class="reckoning-container">
        <!-- மையக்கருத்து Theme Banner -->
        <div class="reckoning-banner">
          <div class="reckoning-banner-badge">மையக்கருத்து • CORE THEME</div>
          <p class="reckoning-banner-text">
            இப்பாடத்தின் மையக்கருத்து, விவிலியத்தில் குறிப்பிடப்படும் யூதர்களின் நாள் தொடக்கம், பகலின் 12 மணி வேளைகள் மற்றும் இரவின் 4 ஜாமங்கள் (காவல்கள்) குறித்த காலக் கணக்கீட்டை வரலாற்று மற்றும் வேத வசனங்களின் அடிப்படையில் விளக்குவதாகும்.
          </p>
        </div>

        <!-- SECTION 1: யூதர்களின் நாள் கணக்கீடு -->
        <div class="reckoning-card">
          <div class="reckoning-card-header">
            <span class="reckoning-step-num">01</span>
            <div class="reckoning-card-title">யூதர்களின் நாள் கணக்கீடு (Day Reckoning)</div>
          </div>
          <div class="reckoning-card-body">
            <div class="reckoning-sub-block">
              <div class="reckoning-block-title">
                <span class="reckoning-pill-tag">நாளின் தொடக்கம்</span>
                மாலை முதல் மாலை வரை
              </div>
              <p class="reckoning-desc">
                நவீன முறைப்படி நள்ளிரவு 12 மணிக்கு நாள் தொடங்குவதில்லை; யூத முறைப்படி <strong>சாயங்காலம் 6 மணிக்குத் தொடங்கி</strong> மறுநாள் சாயங்காலம் 6 மணி வரை ஒரு நாளாகக் கணக்கிடப்படுகிறது.
              </p>
            </div>

            <div class="reckoning-sub-block">
              <div class="reckoning-block-title">
                <span class="reckoning-pill-tag">பகல் & இரவுப் பிரிப்பு</span>
                யோவான் 11:9
              </div>
              <p class="reckoning-desc">
                <strong>யோவான் 11:9</strong>-ன் படி பகலுக்கு <strong>12 மணி நேரம்</strong> உண்டு (காலை 6:00 மணி முதல் மாலை 6:00 மணி வரை). அதேபோல், இரவுப் பொழுது (மாலை 6:00 மணி முதல் காலை 6:00 மணி வரை) <strong>4 சம ஜாமங்களாகப் (காவல்களாகப்)</strong> பிரிக்கப்படுகிறது.
              </p>
              <div class="day-night-split-bar">
                <div class="split-segment day-seg">
                  <span class="seg-icon">☀️</span>
                  <span class="seg-title">பகல்: 12 மணி வேளைகள்</span>
                  <span class="seg-time">காலை 06:00 – மாலை 06:00</span>
                </div>
                <div class="split-segment night-seg">
                  <span class="seg-icon">🌙</span>
                  <span class="seg-title">இரவு: 4 ஜாமங்கள்</span>
                  <span class="seg-time">மாலை 06:00 – காலை 06:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2: பகலின் 12 மணி வேளைகள் -->
        <div class="reckoning-card">
          <div class="reckoning-card-header">
            <span class="reckoning-step-num">02</span>
            <div class="reckoning-card-title">பகலின் 12 மணி வேளைகள் (Twelve Hours of the Day)</div>
          </div>
          <div class="reckoning-card-body">
            <p class="reckoning-desc">
              விவிலியத்தில் பகல் நேரத்தைக் குறிக்க <strong>"மணி வேளை" (Hour)</strong> என்ற சொல் பயன்படுத்தப்படுகிறது. விடியற்காலை 6:00 மணி முதல் தொடங்கும் ஒவ்வொரு மணி நேரமும் ஒரு வேளையாகக் கணக்கிடப்படுகிறது.
            </p>

            <div class="formula-box">
              <span class="formula-badge">💡 கணக்கீட்டு சூத்திரம்</span>
              <div class="formula-eq">வேத கால மணி வேளை + 6 மணி நேரம் = நமது நவீன நேரம்</div>
            </div>

            <!-- Table of 12 Hours -->
            <div class="reckoning-table-wrapper">
              <table class="reckoning-table">
                <thead>
                  <tr>
                    <th style="width: 28%;">வேத மணி வேளை</th>
                    <th style="width: 27%;">நமது தற்போதைய நேரம்</th>
                    <th style="width: 45%;">விவிலிய முக்கியத்துவமும் நிகழ்வுகளும்</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="hour-tag">முதலாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge">காலை 07:00</span>
                    </td>
                    <td>அதிகாலை விழிப்பு மற்றும் வேலை துவக்கம்.</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="hour-tag">மூன்றாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge">காலை 09:00</span>
                    </td>
                    <td>
                      <ul class="event-bullet-list">
                        <li>இயேசு சிலுவையில் அறையப்பட்ட நேரம் <span class="ref-chip">மாற்கு 15:25</span></li>
                        <li>திராட்சைத் தோட்ட எஜமான் வேலையாட்களை அழைத்த நேரம் <span class="ref-chip">மத்தேயு 20:3</span></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="hour-tag">ஆறாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge">நண்பகல் 12:00</span>
                    </td>
                    <td>பூமி முழுவதும் அந்தகாரம் (இருள்) பரவிய தொடக்க நேரம் <span class="ref-chip">மாற்கு 15:33</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="hour-tag">ஒன்பதாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge highlight-red">பிற்பகல் 03:00</span>
                    </td>
                    <td>
                      <ul class="event-bullet-list">
                        <li>இயேசு சிலுவையில் ஜீவனை விட்ட நேரம் <span class="ref-chip">மாற்கு 15:34</span></li>
                        <li>பஸ்கா ஆட்டுக்குட்டி அடிக்கப்படும் வேளை</li>
                        <li>யூதர்களின் மாலை ஜெப வேளை <span class="ref-chip">அப்போஸ்தலர் 3:1</span>; கொர்நேலியுவின் தரிசனம் <span class="ref-chip">அப் 10:3</span></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="hour-tag">பதினொன்றாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge">மாலை 05:00</span>
                    </td>
                    <td>வேலை முடிவதற்கு 1 மணி நேரத்திற்கு முன் வேலையாட்கள் கடைசியாக அழைக்கப்பட்ட நேரம் <span class="ref-chip">மத்தேயு 20:6</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="hour-tag">பன்னிரண்டாம் மணி வேளை</span>
                    </td>
                    <td>
                      <span class="time-badge">மாலை 06:00</span>
                    </td>
                    <td>பகல் முடிந்து கூலி வழங்கும் நேரம்; நாளின் முடிவு.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- SECTION 3: இரவின் 4 ஜாமங்கள் -->
        <div class="reckoning-card">
          <div class="reckoning-card-header dark-header">
            <span class="reckoning-step-num dark-step">03</span>
            <div class="reckoning-card-title dark-title">இரவின் 4 ஜாமங்கள் (காவல்கள் - Four Night Watches)</div>
          </div>
          <div class="reckoning-card-body">
            <p class="reckoning-desc">
              <strong>மாற்கு 13:35</strong>-ல் இயேசு குறிப்பிடும் நான்கு இரவுக் காவல்களின் அடிப்படையில், இரவுப் பொழுது <strong>3 மணி நேர இடைவெளிகளில்</strong> நான்கு ஜாமங்களாகப் பிரிக்கப்பட்டுள்ளது:
            </p>

            <div class="watches-grid">
              <!-- 1st Watch -->
              <div class="watch-item">
                <div class="watch-header">
                  <div class="watch-num-badge">முதலாம் ஜாமம்</div>
                  <div class="watch-name-tag">சாயங்காலம் (Evening)</div>
                </div>
                <div class="watch-time-row">
                  <span class="watch-clock-icon">⏰</span>
                  <span class="watch-time-span">மாலை 06:00 – இரவு 09:00</span>
                </div>
                <div class="watch-body">
                  <p>இயேசு தனித்து ஜெபம் பண்ண மலையின் மேல் ஏறிய நேரம் <span class="ref-chip">மத்தேயு 14:23</span></p>
                </div>
              </div>

              <!-- 2nd Watch -->
              <div class="watch-item">
                <div class="watch-header">
                  <div class="watch-num-badge">இரண்டாம் ஜாமம்</div>
                  <div class="watch-name-tag">நடுராத்திரி (Midnight)</div>
                </div>
                <div class="watch-time-row">
                  <span class="watch-clock-icon">⏰</span>
                  <span class="watch-time-span">இரவு 09:00 – நள்ளிரவு 12:00</span>
                </div>
                <div class="watch-body">
                  <ul class="event-bullet-list">
                    <li>மணவாளன் வரத் தாமதித்த போது கன்னிகைகள் விழித்திருந்த நேரம்</li>
                    <li>"நடுராத்திரியிலே இதோ மணவாளன் வருகிறார்" என்ற சத்தம் <span class="ref-chip">மத்தேயு 25:6</span></li>
                  </ul>
                </div>
              </div>

              <!-- 3rd Watch -->
              <div class="watch-item">
                <div class="watch-header">
                  <div class="watch-num-badge">மூன்றாம் ஜாமம்</div>
                  <div class="watch-name-tag">சேவல் கூவும் நேரம் (Cockcrowing)</div>
                </div>
                <div class="watch-time-row">
                  <span class="watch-clock-icon">⏰</span>
                  <span class="watch-time-span">நள்ளிரவு 12:00 – அதிகாலை 03:00</span>
                </div>
                <div class="watch-body">
                  <ul class="event-bullet-list">
                    <li>பேதுரு இயேசுவை மூன்று முறை மறுதலித்த காலப்பகுதி</li>
                    <li>எஜமான் எப்போது வந்தாலும் விழித்திருக்க வேண்டிய காவல் <span class="ref-chip">லூக்கா 12:38</span></li>
                  </ul>
                </div>
              </div>

              <!-- 4th Watch -->
              <div class="watch-item">
                <div class="watch-header">
                  <div class="watch-num-badge highlight-watch">நான்காம் ஜாமம்</div>
                  <div class="watch-name-tag">அதிகாலை / காலை (Morning)</div>
                </div>
                <div class="watch-time-row">
                  <span class="watch-clock-icon">⏰</span>
                  <span class="watch-time-span">அதிகாலை 03:00 – காலை 06:00</span>
                </div>
                <div class="watch-body">
                  <ul class="event-bullet-list">
                    <li>இயேசு கடலின் மேல் நடந்து சீஷர்களிடம் வந்த நேரம் <span class="ref-chip">மத்தேயு 14:25</span></li>
                    <li>"அதிகாலையில் என்னை தேடுகிறவன் கண்டடைவான்" <span class="ref-chip">நீதிமொழிகள் 8:17</span> என்பதற்கேற்ற ஜெப வேளை</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: நடைமுறை ஆவிக்குரிய படிப்பினைகள் -->
        <div class="reckoning-card">
          <div class="reckoning-card-header accent-header">
            <span class="reckoning-step-num accent-step">04</span>
            <div class="reckoning-card-title">நடைமுறை ஆவிக்குரிய படிப்பினைகள்</div>
          </div>
          <div class="reckoning-card-body">
            <div class="lesson-box">
              <div class="lesson-header">
                <span class="lesson-dot"></span>
                <span class="lesson-title">ஆயத்தமும் விழிப்புணர்வும்</span>
              </div>
              <p class="lesson-text">
                திருடன் எந்த ஜாமத்தில் வருவான் என்று வீட்டு எஜமானுக்குத் தெரியாது; அதேபோல மணவாளனாகிய கிறிஸ்துவின் வருகை எந்த ஜாமத்திலும் சம்பவிக்கலாம் என்பதால், விசுவாசிகள் எப்போதும் விழித்திருந்து ஜெபிக்க வேண்டும்.
              </p>
            </div>

            <div class="lesson-box">
              <div class="lesson-header">
                <span class="lesson-dot"></span>
                <span class="lesson-title">அர்ப்பணிப்பின் கால அளவு (நெகேமியா 9:3)</span>
              </div>
              <p class="lesson-text">
                இஸ்ரவேல் ஜனங்கள் ஒரு ஜாமம் (3 மணி நேரம்) முழுவதும் தேவனுடைய வேதத்தை வாசித்துத் தியானித்தார்கள்; அடுத்த ஒரு ஜாமம் (3 மணி நேரம்) முழுவதும் பாவ அறிக்கை செய்து தொழுதுகொண்டார்கள். வேத வாசிப்பிற்கும் தனிப்பட்ட ஜெபத்திற்கும் நாம் போதுமான நேரத்தை ஒதுக்க வேண்டும் என்பதை இது நினைவூட்டுகிறது.
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  };

  // Register into BIBLE_STUDY_NOTES
  const existingIdx = window.BIBLE_STUDY_NOTES.findIndex(
    n => n.day === 80 || (n.title && n.title.includes("வேத கால நேரக் கணக்கீடு"))
  );
  if (existingIdx >= 0) {
    window.BIBLE_STUDY_NOTES[existingIdx] = DAY_80_SUMMARY;
  } else {
    window.BIBLE_STUDY_NOTES.push(DAY_80_SUMMARY);
  }

  window.DAY_80_SUMMARY = DAY_80_SUMMARY;
})();
