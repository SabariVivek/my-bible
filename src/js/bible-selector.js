/**
 * Bible Selector – New Design
 * Integrates with the existing app by calling loadBook() when user selects a book+chapter.
 * Only active on mobile (≤768px) when the "new" selector style is chosen in settings.
 */
(function () {
  'use strict';

  // Book group classification
  const BOOK_GROUPS = {
    'Genesis': 'Law', 'Exodus': 'Law', 'Leviticus': 'Law', 'Numbers': 'Law', 'Deuteronomy': 'Law',
    'Joshua': 'History', 'Judges': 'History', 'Ruth': 'History',
    'I Samuel': 'History', 'II Samuel': 'History', 'I Kings': 'History', 'II Kings': 'History',
    'I Chronicles': 'History', 'II Chronicles': 'History', 'Ezra': 'History', 'Nehemiah': 'History', 'Esther': 'History',
    'Job': 'Poetry', 'Psalms': 'Poetry', 'Proverbs': 'Poetry', 'Ecclesiastes': 'Poetry', 'Song of Solomon': 'Poetry',
    'Isaiah': 'Prophecy', 'Jeremiah': 'Prophecy', 'Lamentations': 'Prophecy', 'Ezekiel': 'Prophecy', 'Daniel': 'Prophecy',
    'Hosea': 'Prophecy', 'Joel': 'Prophecy', 'Amos': 'Prophecy', 'Obadiah': 'Prophecy', 'Jonah': 'Prophecy',
    'Micah': 'Prophecy', 'Nahum': 'Prophecy', 'Habakkuk': 'Prophecy', 'Zephaniah': 'Prophecy',
    'Haggai': 'Prophecy', 'Zechariah': 'Prophecy', 'Malachi': 'Prophecy',
    'Matthew': 'Gospel', 'Mark': 'Gospel', 'Luke': 'Gospel', 'John': 'Gospel',
    'Acts': 'History',
    'Romans': 'Epistle', 'I Corinthians': 'Epistle', 'II Corinthians': 'Epistle',
    'Galatians': 'Epistle', 'Ephesians': 'Epistle', 'Philippians': 'Epistle', 'Colossians': 'Epistle',
    'I Thessalonians': 'Epistle', 'II Thessalonians': 'Epistle',
    'I Timothy': 'Epistle', 'II Timothy': 'Epistle', 'Titus': 'Epistle', 'Philemon': 'Epistle',
    'Hebrews': 'Epistle', 'James': 'Epistle',
    'I Peter': 'Epistle', 'II Peter': 'Epistle',
    'I John': 'Epistle', 'II John': 'Epistle', 'III John': 'Epistle', 'Jude': 'Epistle',
    'Revelation': 'Prophecy'
  };

  // Category CSS class map
  const CAT_CLASS = {
    'All': 'bs-cat-style-all',
    'Law': 'bs-cat-style-law',
    'History': 'bs-cat-style-history',
    'Poetry': 'bs-cat-style-poetry',
    'Prophecy': 'bs-cat-style-prophecy',
    'Gospel': 'bs-cat-style-gospel',
    'Epistle': 'bs-cat-style-epistle'
  };

  // Internal state
  const state = {
    OT: { cat: 'All', bi: 0, ch: 1, vs: 1 },
    NT: { cat: 'All', bi: 0, ch: 1, vs: 1 }
  };
  let bsCurrentTab = 0; // 0 = OT, 1 = NT
  const tabs = ['OT', 'NT'];
  let otBooks = [];
  let ntBooks = [];

  // Build book arrays from global bibleBooks
  function buildBookArrays() {
    if (typeof bibleBooks === 'undefined') return;
    otBooks = [];
    ntBooks = [];
    bibleBooks.forEach(function (b, i) {
      var entry = {
        name: b.name,
        tamil: b.tamilName,
        chapters: b.chapters,
        group: BOOK_GROUPS[b.name] || 'History',
        globalIndex: i
      };
      if (b.testament === 'old') otBooks.push(entry);
      else ntBooks.push(entry);
    });
  }

  function getBooks(key) {
    return key === 'OT' ? otBooks : ntBooks;
  }

  // ── Tab switching ──
  function switchBsTab(idx, animate) {
    bsCurrentTab = idx;
    var track = document.getElementById('bs-swipe-track');
    if (!track) return;
    if (animate === false) track.classList.add('no-transition');
    track.style.transform = 'translateX(-' + (idx * 50) + '%)';
    if (animate === false) requestAnimationFrame(function () { track.classList.remove('no-transition'); });

    var tabOt = document.getElementById('bs-tab-ot');
    var tabNt = document.getElementById('bs-tab-nt');
    if (tabOt) tabOt.classList.toggle('active', idx === 0);
    if (tabNt) tabNt.classList.toggle('active', idx === 1);

    renderBsCats();
  }

  // ── Category pills ──
  function renderBsCats() {
    var key = tabs[bsCurrentTab];
    var s = state[key];
    var books = getBooks(key);
    var cats = ['All'];
    books.forEach(function (b) { if (cats.indexOf(b.group) === -1) cats.push(b.group); });

    var row = document.getElementById('bs-cat-row');
    if (!row) return;
    row.innerHTML = '';
    cats.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'bs-cat-btn' + (s.cat === cat ? ' active' : '');
      btn.textContent = cat;
      if (s.cat === cat) {
        var cls = CAT_CLASS[cat] || CAT_CLASS['All'];
        btn.classList.add(cls);
      }
      btn.addEventListener('click', function () {
        s.cat = cat;
        s.bi = 0;
        s.ch = 1;
        s.vs = 1;
        renderBsBooks(key);
        renderBsRight(key);
        renderBsCats();
      });
      row.appendChild(btn);
    });
  }

  // ── Book list ──
  function renderBsBooks(key) {
    var s = state[key];
    var books = getBooks(key);
    var suffix = key.toLowerCase();
    var list = document.getElementById('bs-books-' + suffix);
    if (!list) return;
    list.innerHTML = '';

    var filtered = books.filter(function (b) { return s.cat === 'All' || b.group === s.cat; });
    var lastGroup = null;

    filtered.forEach(function (b) {
      var realIdx = books.indexOf(b);
      var cls = CAT_CLASS[b.group] || CAT_CLASS['All'];

      if (b.group !== lastGroup) {
        lastGroup = b.group;
        var gh = document.createElement('div');
        gh.className = 'bs-group-header';
        gh.innerHTML =
          '<div class="bs-group-label ' + cls + '">' + b.group + '</div>' +
          '<div class="bs-group-line" style="background:linear-gradient(90deg, currentColor, transparent); opacity:0.2;"></div>';
        list.appendChild(gh);
      }

      var d = document.createElement('div');
      d.className = 'bs-book-item' + (realIdx === s.bi ? ' selected' : '');
      d.innerHTML = '<div class="bs-book-tamil">' + b.tamil + '</div><div class="bs-book-english">' + b.name + '</div>';
      d.addEventListener('click', function () {
        s.bi = realIdx;
        s.ch = 1;
        s.vs = 1;
        renderBsBooks(key);
        renderBsRight(key);
        var rightPanel = document.getElementById('bs-right-' + suffix);
        if (rightPanel) rightPanel.scrollTop = 0;
      });
      list.appendChild(d);
    });
  }

  // ── Get verse count for a book+chapter from bibleMeta ──
  function getVerseCount(bookName, chapter) {
    // Map I/II/III to 1/2/3 for bibleMeta lookup
    var metaName = bookName;
    if (metaName.indexOf('I ') === 0) metaName = metaName.replace('I ', '1 ');
    if (metaName.indexOf('II ') === 0) metaName = metaName.replace('II ', '2 ');
    if (metaName.indexOf('III ') === 0) metaName = metaName.replace('III ', '3 ');

    if (typeof bibleMeta !== 'undefined') {
      for (var i = 0; i < bibleMeta.length; i++) {
        if (bibleMeta[i].book === metaName && bibleMeta[i].chapters[chapter - 1]) {
          return bibleMeta[i].chapters[chapter - 1];
        }
      }
    }
    return 30; // fallback
  }

  // ── Chapter + Verse grids (right panel) ──
  function renderBsRight(key) {
    var s = state[key];
    var books = getBooks(key);
    var suffix = key.toLowerCase();
    var book = books[s.bi];
    if (!book) return;

    // Chapter grid
    var cg = document.getElementById('bs-ch-' + suffix);
    if (cg) {
      cg.innerHTML = '';
      for (var i = 1; i <= book.chapters; i++) {
        var btn = document.createElement('button');
        btn.className = 'bs-num-btn' + (s.ch === i ? ' sel' : '');
        btn.textContent = i;
        (function (ch) {
          btn.addEventListener('click', function () {
            s.ch = ch;
            s.vs = 1;
            renderBsRight(key);
          });
        })(i);
        cg.appendChild(btn);
      }
    }

    // Verse grid
    var vg = document.getElementById('bs-vs-' + suffix);
    if (vg) {
      vg.innerHTML = '';
      var verseCount = getVerseCount(book.name, s.ch);
      for (var j = 1; j <= verseCount; j++) {
        var vbtn = document.createElement('button');
        vbtn.className = 'bs-num-btn' + (s.vs === j ? ' sel' : '');
        vbtn.textContent = j;
        (function (vs) {
          vbtn.addEventListener('click', function () {
            s.vs = vs;
            renderBsRight(key);
            // Trigger book loading in the main app with verse
            triggerBookLoad(book.globalIndex, s.ch, vs);
          });
        })(j);
        vg.appendChild(vbtn);
      }
    }
  }

  // ── Trigger main app load and close drawer ──
  function triggerBookLoad(bookIndex, chapter, verse) {
    // Call the main app's loadBook function
    if (typeof loadBook === 'function') {
      var p = loadBook(bookIndex, chapter);
      // After loadBook completes (async), scroll to verse and highlight
      if (verse && p && typeof p.then === 'function') {
        p.then(function () {
          setTimeout(function () {
            scrollAndHighlightVerse(verse);
          }, 300);
        });
      } else if (verse) {
        setTimeout(function () {
          scrollAndHighlightVerse(verse);
        }, 500);
      }
    }
    // Close the new selector and the drawer
    closeBibleSelector();
  }

  // ── Scroll to verse and highlight it (matches old pane behavior) ──
  function scrollAndHighlightVerse(verseNum) {
    var contentArea = document.querySelector('.scripture-text');
    if (!contentArea) return;

    // Remove any previous left-pane-selected highlights
    contentArea.querySelectorAll('.verse-line').forEach(function (v) {
      v.classList.remove('left-pane-selected');
      v.style.backgroundColor = '';
    });
    contentArea.querySelectorAll('.verse-container').forEach(function (v) {
      v.classList.remove('left-pane-selected');
      v.style.backgroundColor = '';
    });

    // Highlight and scroll to the selected verse
    var verseLine = contentArea.querySelector('.verse-line[data-verse="' + verseNum + '"]');
    var verseContainer = contentArea.querySelector('.verse-container[data-verse="' + verseNum + '"]');
    if (verseLine) {
      verseLine.classList.add('left-pane-selected');
      verseLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (verseContainer) {
      verseContainer.classList.add('left-pane-selected');
    }

    // Also update the old verse column active state
    var versesColumn = document.querySelector('.verses-column');
    if (versesColumn) {
      versesColumn.querySelectorAll('.number-item').forEach(function (v) { v.classList.remove('active'); });
      var verseItem = versesColumn.querySelector('.number-item[data-verse="' + verseNum + '"]');
      if (verseItem) verseItem.classList.add('active');
    }
  }

  // Smooth animated close (slide out to the left)
  function closeBibleSelectorSmooth() {
    var selector = document.getElementById('bible-selector-new');
    if (!selector) return;
    selector.style.transition = 'transform 0.3s ease';
    selector.style.transform = 'translateX(-100%)';
    var overlay = document.querySelector('.drawer-overlay');
    if (overlay) {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
    }
    setTimeout(function () {
      selector.style.transition = '';
      selector.style.transform = '';
      selector.style.display = '';
      if (overlay) {
        overlay.style.transition = '';
        overlay.style.opacity = '';
      }
      closeBibleSelector();
    }, 300);
  }

  function closeBibleSelector() {
    var selector = document.getElementById('bible-selector-new');
    if (selector) {
      selector.classList.remove('active');
      selector.style.transform = '';
      selector.style.display = '';
      selector.style.transition = '';
    }

    // Also close the mobile drawer
    var drawerOverlay = document.querySelector('.drawer-overlay');
    var booksSidebar = document.querySelector('.books-sidebar');
    var chaptersColumn = document.querySelector('.chapters-column');
    var versesColumn = document.querySelector('.verses-column');
    var menuBtn = document.querySelector('.mobile-only');

    if (drawerOverlay) drawerOverlay.classList.remove('active');
    if (booksSidebar) booksSidebar.classList.remove('drawer-open');
    if (chaptersColumn) chaptersColumn.classList.remove('drawer-open');
    if (versesColumn) versesColumn.classList.remove('drawer-open');
    if (menuBtn) {
      var hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
      var closeIcon = menuBtn.querySelector('.close-icon');
      if (hamburgerIcon) hamburgerIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
    document.body.style.overflow = '';
  }

  // ── Swipe gesture ──
  function initBsSwipe() {
    var outer = document.getElementById('bs-swipe-outer');
    var track = document.getElementById('bs-swipe-track');
    if (!outer || !track) return;

    var startX = 0, startY = 0, dx = 0;
    var swiping = false, lockAxis = null;
    var closeDragging = false; // true when dragging past boundary to close
    function W() { return outer.offsetWidth; }

    outer.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      dx = 0; lockAxis = null; swiping = false; closeDragging = false;
      track.classList.add('no-transition');
    }, { passive: true });

    outer.addEventListener('touchmove', function (e) {
      var cx = e.touches[0].clientX;
      var cy = e.touches[0].clientY;
      var adx = Math.abs(cx - startX);
      var ady = Math.abs(cy - startY);
      if (!lockAxis) { if (adx < 6 && ady < 6) return; lockAxis = adx >= ady ? 'x' : 'y'; }
      if (lockAxis === 'y') return;
      e.preventDefault();
      swiping = true;
      dx = cx - startX;

      // Calculate track position
      var base = bsCurrentTab * W();
      var raw = base - dx;
      // Excess past the last tab boundary (only when on NT swiping left)
      var excess = raw - W();
      var CLOSE_ENGAGE = 30; // px past boundary before whole-panel drag starts

      if (excess > CLOSE_ENGAGE && bsCurrentTab === 1) {
        // Swipe went well past the last tab — move entire panel to close
        closeDragging = true;
        var shift = -(excess - CLOSE_ENGAGE) * 0.5; // only the excess beyond threshold, dampened
        var selector = document.getElementById('bible-selector-new');
        var overlay = document.querySelector('.drawer-overlay');
        if (selector) {
          selector.style.transform = 'translateX(' + shift + 'px)';
        }
        if (overlay) {
          var progress = Math.max(0, 1 + shift / W());
          overlay.style.opacity = progress;
        }
        // Lock track at last tab position
        track.style.transform = 'translateX(-' + (bsCurrentTab * 50) + '%)';
      } else {
        // Normal tab-to-tab swipe (or within-boundary rubber-band)
        if (closeDragging) {
          // Was close-dragging, snap panel back
          var selector = document.getElementById('bible-selector-new');
          if (selector) selector.style.transform = '';
          var overlay = document.querySelector('.drawer-overlay');
          if (overlay) overlay.style.opacity = '';
          closeDragging = false;
        }
        var clamped = raw < 0 ? raw * 0.25 : raw > W() ? W() + (raw - W()) * 0.25 : raw;
        track.style.transform = 'translateX(' + (-clamped / (W() * 2) * 100) + '%)';
      }
    }, { passive: false });

    outer.addEventListener('touchend', function () {
      track.classList.remove('no-transition');
      if (!swiping) return;
      var threshold = W() * 0.25;

      if (closeDragging) {
        // Was dragging the whole panel to close
        var selector = document.getElementById('bible-selector-new');
        if (selector) { selector.style.transform = ''; }
        var overlay = document.querySelector('.drawer-overlay');
        if (overlay) { overlay.style.opacity = ''; }
        if (Math.abs(dx) > threshold) {
          closeBibleSelectorSmooth();
        }
        // else: snap back (styles already cleared above)
        closeDragging = false;
        return;
      }

      if (dx < -threshold && bsCurrentTab === 0) switchBsTab(1);       // OT → NT
      else if (dx > threshold && bsCurrentTab === 1) switchBsTab(0);   // NT → OT
      else switchBsTab(bsCurrentTab);
    });
  }

  // ── Sync current book selection from main app state ──
  function syncFromAppState() {
    if (typeof currentBook === 'undefined' || typeof currentChapter === 'undefined') return;
    var book = bibleBooks[currentBook];
    if (!book) return;

    var isOT = book.testament === 'old';
    var key = isOT ? 'OT' : 'NT';
    var books = getBooks(key);
    var localIdx = -1;
    for (var i = 0; i < books.length; i++) {
      if (books[i].globalIndex === currentBook) { localIdx = i; break; }
    }
    if (localIdx >= 0) {
      state[key].bi = localIdx;
      state[key].ch = currentChapter;
      bsCurrentTab = isOT ? 0 : 1;
    }
  }

  // ── Public: Open the new selector ──
  // prepareOnly=true: build content but don't add .active (used during swipe-open animation)
  window.openBibleSelectorNew = function (prepareOnly) {
    if (window.innerWidth > 768) return; // mobile only
    buildBookArrays();
    syncFromAppState();

    var selector = document.getElementById('bible-selector-new');
    if (!selector) return;

    if (!prepareOnly) {
      selector.classList.add('active');
    }

    switchBsTab(bsCurrentTab, false);
    renderBsBooks('OT');
    renderBsRight('OT');
    renderBsBooks('NT');
    renderBsRight('NT');
    renderBsCats();

    // Scroll selected book into view
    var key = tabs[bsCurrentTab];
    var suffix = key.toLowerCase();
    var list = document.getElementById('bs-books-' + suffix);
    if (list) {
      var selected = list.querySelector('.bs-book-item.selected');
      if (selected) {
        setTimeout(function () { selected.scrollIntoView({ block: 'center' }); }, 50);
      }
    }
  };

  // ── Public: Check if new selector is active ──
  window.isBibleSelectorNewActive = function () {
    return localStorage.getItem('selectorStyle') === 'new';
  };

  // ── Public: Apply selector style setting ──
  window.applySelectorStyle = function (style) {
    localStorage.setItem('selectorStyle', style);
  };

  // ── Initialize ──
  function initBibleSelector() {
    buildBookArrays();

    // Tab buttons
    var tabOt = document.getElementById('bs-tab-ot');
    var tabNt = document.getElementById('bs-tab-nt');
    if (tabOt) tabOt.addEventListener('click', function () { switchBsTab(0); });
    if (tabNt) tabNt.addEventListener('click', function () { switchBsTab(1); });

    // Swipe
    initBsSwipe();

    // Initial render
    renderBsBooks('OT');
    renderBsRight('OT');
    renderBsBooks('NT');
    renderBsRight('NT');
    renderBsCats();
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBibleSelector);
  } else {
    initBibleSelector();
  }
})();
