/**
 * Mobile Quiz UI — Chat-bubble Conversational Style
 * Minimal clean design. Shows question history as a chat thread.
 * Does NOT modify any existing quiz logic.
 */

const MobileQuiz = (() => {
    let _currentIndex = 0;
    let _selectedAnswers = {};
    let _overlayEl = null;

    // Strip the blue badge span and any leading HTML tags from question text
    function _cleanQuestion(text) {
        return text.replace(/<span[^>]*style="[^"]*1a73e8[^"]*"[^>]*>\d+<\/span>/gi, '').trim();
    }

    // Strip A. B. C. D. prefix from option text
    function _cleanOption(text) {
        return text.replace(/^[A-D]\. /, '').trim();
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function launch(questions, bookName, chapter, dateKey, isDarkMode) {
        if (!questions || questions.length === 0) return false;
        _currentIndex = 0;
        _selectedAnswers = {};
        document.body.classList.add('mobile-quiz-active');
        _render(questions, bookName, chapter, dateKey, isDarkMode);
        return true;
    }

    function destroy() {
        document.body.classList.remove('mobile-quiz-active');
        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }
        _overlayEl = null;
        _currentIndex = 0;
        _selectedAnswers = {};
        _summaryActive = false;
        _gridActive = false;
    }

    function _render(questions, bookName, chapter, dateKey, isDarkMode) {
        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }

        const total = questions.length;
        const q = questions[_currentIndex];
        const progress = ((_currentIndex + 1) / total) * 100;
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        const selectedIdx = _selectedAnswers[q.id];
        const hasSelection = selectedIdx !== undefined && selectedIdx !== null;
        const hasPrev = _currentIndex > 0;

        const overlay = document.createElement('div');
        overlay.className = `mobile-quiz-overlay ${theme}`;
        overlay.id = 'mobileQuizOverlay';

        // Build chat history HTML
        let historyHtml = '';
        for (let i = 0; i < _currentIndex; i++) {
            const pq = questions[i];
            const aIdx = _selectedAnswers[pq.id];
            const ansText = aIdx !== undefined && aIdx !== null ? _cleanOption(pq.options[aIdx]) : '—';
            historyHtml += `
                <div class="mq-history-item">
                    <div class="mq-history-q">Q${i + 1}. ${_cleanQuestion(pq.question)}</div>
                    <div class="mq-history-a">${ansText}</div>
                </div>`;
        }

        overlay.innerHTML = `
            <div class="mq-header">
                <button class="mq-close-btn" id="mqExitBtn" aria-label="Close">✕</button>
                <div class="mq-header-info">
                    <div class="mq-header-title">${bookName} · Chapter ${chapter}</div>
                    <div class="mq-header-sub">Bible Quiz</div>
                </div>
                <span class="mq-header-counter">${_currentIndex + 1}/${total}</span>
            </div>
            <div class="mq-progress">
                <div class="mq-progress-fill" style="width:${progress}%"></div>
            </div>
            <div class="mq-chat-body" id="mqChatBody">
                ${historyHtml}
                <div class="mq-question-bubble">
                    <div class="mq-question-num">Q${_currentIndex + 1}</div>
                    ${_cleanQuestion(q.question)}
                </div>
                <div class="mq-options-wrap">
                    ${q.options.map((opt, idx) => {
                        const label = String.fromCharCode(65 + idx);
                        return `
                        <div class="mq-option ${selectedIdx === idx ? 'selected' : ''}"
                             data-idx="${idx}" role="button" tabindex="0">
                            <span class="mq-option-label">${label}</span>
                            <span class="mq-option-text">${_cleanOption(opt)}</span>
                            <span class="mq-check">✓</span>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
            <div class="mq-footer">
                <button class="mq-prev-btn ${hasPrev ? '' : 'hidden'}" id="mqPrevBtn" aria-label="Previous">←</button>
                <button class="mq-next-btn ${hasSelection ? 'active' : 'disabled'}"
                        id="mqNextBtn" ${!hasSelection ? 'disabled' : ''}>
                    ${_currentIndex < total - 1 ? 'Next →' : 'Submit Quiz'}
                </button>
            </div>
        `;

        document.body.appendChild(overlay);
        _overlayEl = overlay;

        // Auto-scroll to bottom of chat
        requestAnimationFrame(() => {
            const chatBody = overlay.querySelector('#mqChatBody');
            if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
        });

        _bindEvents(questions, bookName, chapter, dateKey, isDarkMode);
    }

    function _bindEvents(questions, bookName, chapter, dateKey, isDarkMode) {
        const q = questions[_currentIndex];

        _overlayEl.querySelectorAll('.mq-option').forEach(el => {
            el.addEventListener('click', function () {
                _selectedAnswers[q.id] = parseInt(this.dataset.idx);
                _render(questions, bookName, chapter, dateKey, isDarkMode);
            });
        });

        const nextBtn = _overlayEl.querySelector('#mqNextBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                if (this.disabled) return;
                if (_currentIndex < questions.length - 1) {
                    _currentIndex++;
                    _render(questions, bookName, chapter, dateKey, isDarkMode);
                } else {
                    _showScorePage(questions, bookName, chapter, dateKey, isDarkMode);
                }
            });
        }

        const prevBtn = _overlayEl.querySelector('#mqPrevBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                if (_currentIndex > 0) {
                    _currentIndex--;
                    _render(questions, bookName, chapter, dateKey, isDarkMode);
                }
            });
        }

        const exitBtn = _overlayEl.querySelector('#mqExitBtn');
        if (exitBtn) {
            exitBtn.addEventListener('click', function () {
                _showExitModal(questions, bookName, chapter, dateKey, isDarkMode);
            });
        }
    }

    function _showExitModal(questions, bookName, chapter, dateKey, isDarkMode) {
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        const modal = document.createElement('div');
        modal.className = `mq-modal-backdrop ${theme}`;
        modal.id = 'mqExitModal';
        modal.innerHTML = `
            <div class="mq-modal ${theme}">
                <h3>Leave Quiz?</h3>
                <p>Your answers won't be saved. You can retake this chapter anytime.</p>
                <div class="mq-modal-actions">
                    <button class="mq-modal-leave" id="mqLeaveBtn">Leave</button>
                    <button class="mq-modal-stay" id="mqStayBtn">Continue</button>
                </div>
            </div>
        `;
        _overlayEl.appendChild(modal);

        modal.querySelector('#mqLeaveBtn').addEventListener('click', () => {
            // Remove overlay but keep body class to prevent flash when grid re-appears
            if (_overlayEl && _overlayEl.parentNode) {
                _overlayEl.parentNode.removeChild(_overlayEl);
            }
            _overlayEl = null;
            _summaryActive = false;
            _gridActive = false;
            _currentIndex = 0;
            _selectedAnswers = {};
            if (typeof state !== 'undefined') {
                state.selectedQuizChapter = null;
                state.selectedQuizBook = null;
                state.quizSummaryData = null;
                state.quizTestamentTab = 'NT';
                state.showQuizBackConfirmation = false;
            }
            if (typeof render === 'function') render();
        });

        modal.querySelector('#mqStayBtn').addEventListener('click', () => {
            modal.parentNode.removeChild(modal);
        });
    }

    function _showScorePage(questions, bookName, chapter, dateKey, isDarkMode) {
        // Calculate score locally
        let score = 0;
        questions.forEach(q => {
            const ans = _selectedAnswers[q.id];
            if (ans !== undefined && ans !== null && ans === q.correctAnswer) {
                score++;
            }
        });
        const total = questions.length;
        const pct = Math.round((score / total) * 100);
        const emoji = '🎉';
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';

        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }

        const overlay = document.createElement('div');
        overlay.className = `mobile-quiz-overlay ${theme}`;
        overlay.id = 'mobileQuizOverlay';

        overlay.innerHTML = `
            <div class="mq-header">
                <div style="width:32px"></div>
                <div class="mq-header-info" style="text-align:center">
                    <div class="mq-header-title">${bookName} · Chapter ${chapter}</div>
                    <div class="mq-header-sub">Quiz Complete</div>
                </div>
                <div style="width:32px"></div>
            </div>
            <div class="mq-score-page">
                <div class="mq-score-emoji">${emoji}</div>
                <div class="mq-score-big">${score}/${total}</div>
                <div class="mq-score-pct">${pct}% correct</div>
                <div class="mq-score-msg">Quiz Complete!</div>
            </div>
            <div class="mq-footer" style="flex-direction:column;gap:8px;">
                <button class="mq-next-btn active" id="mqScoreReview" style="width:100%">View Summary</button>
                <button class="mq-score-back-btn" id="mqScoreBack" style="width:100%">← Back to Books</button>
            </div>
        `;

        document.body.appendChild(overlay);
        _overlayEl = overlay;

        // Fire confetti
        requestAnimationFrame(() => {
            const emojiEl = overlay.querySelector('.mq-score-emoji');
            if (typeof createConfetti === 'function') {
                createConfetti(emojiEl);
            }
        });

        // View Summary — submit + go to summary
        overlay.querySelector('#mqScoreReview').addEventListener('click', () => {
            _submitFromMobile(questions, dateKey, chapter);
        });

        // Back to Books — submit + go to grid
        overlay.querySelector('#mqScoreBack').addEventListener('click', () => {
            _submitFromMobile(questions, dateKey, chapter, true);
        });
    }

    function _submitFromMobile(questions, dateKey, chapter, skipSummary) {
        let existingForm = document.getElementById('quizForm');
        const createdForm = !existingForm;

        if (!existingForm) {
            existingForm = document.createElement('form');
            existingForm.id = 'quizForm';
            existingForm.style.display = 'none';
            document.body.appendChild(existingForm);
        }

        existingForm.innerHTML = '';

        questions.forEach(q => {
            const val = _selectedAnswers[q.id];
            if (val !== undefined && val !== null) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = `q${q.id}`;
                input.value = val;
                existingForm.appendChild(input);
            }
        });

        // Show loader on the overlay instead of destroying immediately
        if (_overlayEl) {
            const body = _overlayEl.querySelector('.mq-score-page');
            const footer = _overlayEl.querySelector('.mq-footer');
            if (body) {
                body.innerHTML = '<div class="mq-loader"><div class="mq-spinner"></div></div>';
            }
            if (footer) footer.style.display = 'none';
        }

        if (skipSummary && typeof state !== 'undefined') {
            const origRender = window.render;
            window.render = function() {
                if (state.quizSummaryData) {
                    state.quizSummaryData = null;
                    state.quizStarted = true;
                }
                window.render = origRender;
                origRender();
            };
        }

        // Small delay so the loader is visible, then submit
        setTimeout(() => {
            destroy();
            if (typeof submitQuiz === 'function') {
                submitQuiz(questions, dateKey, chapter);
            }
            if (createdForm && existingForm.parentNode) {
                existingForm.parentNode.removeChild(existingForm);
            }
        }, 400);
    }

    /* ------------------------------------------------
       Summary View — same chat-bubble layout as quiz
       ------------------------------------------------ */
    let _summaryActive = false;

    function launchSummary(summaryData, isDarkMode) {
        if (!summaryData) return false;
        if (_summaryActive && _overlayEl) return true; // already showing
        destroy(); // clean up any quiz overlay
        _summaryActive = true;

        const { chapter, book, questions, userAnswers, score, totalQuestions } = summaryData;
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';

        document.body.classList.add('mobile-quiz-active');

        const overlay = document.createElement('div');
        overlay.className = `mobile-quiz-overlay ${theme}`;
        overlay.id = 'mobileQuizOverlay';

        // Build all questions as chat thread (same as quiz history + active)
        let chatHtml = '';
        questions.forEach((q, i) => {
            const userAns = userAnswers[q.id];
            const correctIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer : q.options.indexOf(q.correctAnswer);
            const isCorrect = parseInt(userAns) === correctIdx;

            // Question bubble (left-aligned, same as quiz)
            chatHtml += `
                <div class="mq-question-bubble">
                    <div class="mq-question-num">Q${i + 1}</div>
                    ${_cleanQuestion(q.question)}
                </div>`;

            // Options (right-aligned, same layout as quiz but color-coded)
            chatHtml += `<div class="mq-options-wrap">`;
            q.options.forEach((opt, idx) => {
                let cls = 'summary-default';
                if (idx === correctIdx) {
                    cls = 'summary-correct';
                } else if (idx === parseInt(userAns) && !isCorrect) {
                    cls = 'summary-wrong';
                }
                const label = String.fromCharCode(65 + idx);
                chatHtml += `
                    <div class="mq-option ${cls}">
                        <span class="mq-option-label">${label}</span>
                        <span class="mq-option-text">${_cleanOption(opt)}</span>
                    </div>`;
            });
            chatHtml += `</div>`;

            // Verse reference
            if (q.verse) {
                chatHtml += `<div class="mq-verse-ref">🔖 Verse : ${q.verse}</div>`;
            }
        });

        overlay.innerHTML = `
            <div class="mq-header">
                <button class="mq-close-btn" id="mqSummaryExit" aria-label="Close">✕</button>
                <div class="mq-header-info">
                    <div class="mq-header-title">${book} · Chapter ${chapter}</div>
                    <div class="mq-header-sub">Quiz Review</div>
                </div>
                <span class="mq-header-score">${score}/${totalQuestions}</span>
            </div>
            <div class="mq-progress">
                <div class="mq-progress-fill" style="width:100%"></div>
            </div>
            <div class="mq-chat-body" id="mqChatBody">
                ${chatHtml}
            </div>
            <div class="mq-footer">
                <button class="mq-next-btn active" id="mqSummaryBack" style="flex:1">← Back to Books</button>
            </div>
        `;

        document.body.appendChild(overlay);
        _overlayEl = overlay;

        // Bind events
        overlay.querySelector('#mqSummaryExit').addEventListener('click', _closeSummary);
        overlay.querySelector('#mqSummaryBack').addEventListener('click', _closeSummary);

        return true;
    }

    function _closeSummary() {
        // Remove overlay but keep body class to prevent flash when grid re-appears
        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }
        _overlayEl = null;
        _summaryActive = false;
        _gridActive = false;
        if (typeof state !== 'undefined') {
            state.selectedQuizChapter = null;
            state.selectedQuizBook = null;
            state.quizSummaryData = null;
            state.quizTestamentTab = 'NT';
            state.showQuizBackConfirmation = false;
        }
        if (typeof render === 'function') render();
    }

    /* ------------------------------------------------
       Chapter Grid — book / chapter selection
       ------------------------------------------------ */
    let _gridActive = false;

    function launchGrid(gridData, isDarkMode) {
        if (!gridData) return false;
        if (_gridActive && _overlayEl) return true; // already showing
        // Remove existing overlay without resetting body class to avoid flash
        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }
        _overlayEl = null;
        _summaryActive = false;
        _gridActive = true;

        const { books, tamilNames, chapterCounts, completedChapters, chapterScores, currentUserId, quizQuestions, testamentTab } = gridData;
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';

        document.body.classList.add('mobile-quiz-active');

        const overlay = document.createElement('div');
        overlay.className = `mobile-quiz-overlay ${theme}`;
        overlay.id = 'mobileQuizOverlay';

        // Build book cards
        let booksHtml = '';
        books.forEach(book => {
            const bookKey = book.toLowerCase().replace(/\s+/g, '-');
            const chapterCount = chapterCounts[book] || 1;
            const chapters = Array.from({ length: chapterCount }, (_, i) => i + 1);
            const hasAnyData = chapters.some(ch =>
                quizQuestions && quizQuestions[bookKey] && quizQuestions[bookKey][String(ch)] && quizQuestions[bookKey][String(ch)].questions
            );

            let chaptersHtml = '';
            chapters.forEach(ch => {
                const hasData = quizQuestions && quizQuestions[bookKey] && quizQuestions[bookKey][String(ch)] && quizQuestions[bookKey][String(ch)].questions;
                const totalQ = hasData ? quizQuestions[bookKey][String(ch)].questions.length : 0;

                // Check completion across all dates
                let isCompleted = false;
                let score;
                if (completedChapters) {
                    Object.keys(completedChapters).forEach(date => {
                        if (completedChapters[date]?.[currentUserId]?.[book]?.[ch]) {
                            isCompleted = true;
                            const s = chapterScores?.[date]?.[currentUserId]?.[book]?.[ch];
                            if (s !== undefined) score = s;
                        }
                    });
                }

                const btnCls = isCompleted ? 'completed' : (hasData ? 'available' : 'disabled');

                chaptersHtml += `
                    <div class="mq-ch-cell">
                        <button class="mq-ch-btn ${btnCls}"
                            data-book="${book}" data-ch="${ch}"
                            data-completed="${isCompleted}" data-enabled="${!!hasData}"
                            ${!hasData && !isCompleted ? 'disabled' : ''}>
                            ${ch}
                        </button>
                        ${score !== undefined ? `<span class="mq-ch-score">${score}/${totalQ}</span>` : ''}
                    </div>`;
            });

            booksHtml += `
                <div class="mq-book-card ${!hasAnyData ? 'disabled' : ''}">
                    ${!hasAnyData ? '<img class="mq-coming-soon" src="../resources/images/coming-soon.png" alt="Coming Soon">' : ''}
                    <div class="mq-book-name">${book}</div>
                    <div class="mq-book-tamil">${tamilNames[book] || ''}</div>
                    <div class="mq-chapter-grid">
                        ${chaptersHtml}
                    </div>
                </div>`;
        });

        overlay.innerHTML = `
            <div class="mq-header">
                <button class="mq-close-btn" id="mqGridExit" aria-label="Back">✕</button>
                <div class="mq-header-info">
                    <div class="mq-header-title">Bible Quiz</div>
                    <div class="mq-header-sub">${testamentTab === 'OT' ? 'Old Testament' : 'New Testament'}</div>
                </div>
            </div>
            <div class="mq-books-body" id="mqBooksBody">
                ${booksHtml}
            </div>
            <div class="mq-testament-footer">
                <button class="mq-tab-btn ${testamentTab === 'OT' ? 'active' : ''}" id="mqTabOT">பழைய ஏற்பாடு</button>
                <button class="mq-tab-btn ${testamentTab === 'NT' ? 'active' : ''}" id="mqTabNT">புதிய ஏற்பாடு</button>
            </div>
        `;

        document.body.appendChild(overlay);
        _overlayEl = overlay;

        // Bind chapter button clicks
        overlay.querySelectorAll('.mq-ch-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const book = this.dataset.book;
                const ch = this.dataset.ch;
                const completed = this.dataset.completed === 'true';
                const enabled = this.dataset.enabled === 'true';
                if (completed) {
                    if (typeof loadQuizSummary === 'function') loadQuizSummary(ch, book);
                } else if (enabled) {
                    if (typeof state !== 'undefined') {
                        state.selectedQuizBook = book;
                        state.selectedQuizChapter = ch;
                        window.history.pushState({ page: 'quiz', level: 'chapter' }, '', window.location.href);
                    }
                    if (typeof render === 'function') render();
                }
            });
        });

        // Testament tab clicks
        overlay.querySelector('#mqTabOT').addEventListener('click', () => {
            if (typeof state !== 'undefined') state.quizTestamentTab = 'OT';
            _gridActive = false;
            if (typeof render === 'function') render();
        });
        overlay.querySelector('#mqTabNT').addEventListener('click', () => {
            if (typeof state !== 'undefined') state.quizTestamentTab = 'NT';
            _gridActive = false;
            if (typeof render === 'function') render();
        });

        // Exit button
        overlay.querySelector('#mqGridExit').addEventListener('click', () => {
            destroy();
            if (typeof state !== 'undefined') {
                state.quizStarted = false;
            }
            if (typeof render === 'function') render();
        });

        return true;
    }

    return { isMobile, launch, destroy, launchSummary, launchGrid };
})();
