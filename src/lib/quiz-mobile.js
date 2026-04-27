/**
 * Mobile Quiz UI — Chat-bubble Conversational Style
 * Minimal clean design. Shows question history as a chat thread.
 * Does NOT modify any existing quiz logic.
 */

const MobileQuiz = (() => {
    let _currentIndex = 0;
    let _selectedAnswers = {};
    let _overlayEl = null;
    let _gridScrollTop = 0;

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

    function _showLoaderThen(isDarkMode, label, cb) {
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        if (_overlayEl && _overlayEl.parentNode) {
            _overlayEl.parentNode.removeChild(_overlayEl);
        }
        const loader = document.createElement('div');
        loader.className = `mobile-quiz-overlay ${theme}`;
        loader.innerHTML = `<div class="mq-loader"><div class="mq-spinner"></div>${label ? `<div class="mq-loader-label">${label}</div>` : ''}</div>`;
        document.body.appendChild(loader);
        _overlayEl = loader;
        setTimeout(() => {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
            _overlayEl = null;
            cb();
        }, 800);
    }

    function launch(questions, bookName, chapter, dateKey, isDarkMode, tamilBookName) {
        if (!questions || questions.length === 0) return false;
        _currentIndex = 0;
        _selectedAnswers = {};
        document.body.classList.add('mobile-quiz-active');
        const label = `${tamilBookName || bookName} - ${chapter} திறக்கிறது...`;
        _showLoaderThen(isDarkMode, label, () => {
            _render(questions, bookName, chapter, dateKey, isDarkMode);
        });
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
                <button class="mq-prev-btn ${hasPrev ? '' : 'hidden'}" id="mqPrevBtn">← Previous</button>
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
                state.quizTestamentTab = state.quizTestamentTab || 'NT';
                state.showQuizBackConfirmation = false;
                // Stay in quiz grid (chapter selection) instead of exiting entirely
                state.quizStarted = true;
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
                <button class="mq-next-btn active mq-score-summary-btn" id="mqScoreReview">View Summary</button>
            </div>
            <div class="mq-footer" style="justify-content:center;">
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

        // Keep a reference to the loader overlay so we can remove it after render
        const loaderOverlay = _overlayEl;
        // Detach from module state so destroy() won't try to remove it
        _overlayEl = null;

        if (skipSummary && typeof state !== 'undefined') {
            const origRender = window.render;
            window.render = function() {
                if (state.quizSummaryData) {
                    state.quizSummaryData = null;
                    state.quizStarted = true;
                }
                window.render = origRender;
                // Remove loader right before the real render paints
                if (loaderOverlay && loaderOverlay.parentNode) {
                    loaderOverlay.parentNode.removeChild(loaderOverlay);
                }
                origRender();
            };
        } else {
            // Intercept render to remove loader at the right moment
            const origRender = window.render;
            window.render = function() {
                window.render = origRender;
                if (loaderOverlay && loaderOverlay.parentNode) {
                    loaderOverlay.parentNode.removeChild(loaderOverlay);
                }
                origRender();
            };
        }

        // Small delay so the loader is visible, then submit
        setTimeout(() => {
            if (typeof submitQuiz === 'function') {
                submitQuiz(questions, dateKey, chapter);
            }
            if (createdForm && existingForm.parentNode) {
                existingForm.parentNode.removeChild(existingForm);
            }
            // Fallback: if render wasn't called within 2s, clean up loader
            setTimeout(() => {
                if (loaderOverlay && loaderOverlay.parentNode) {
                    loaderOverlay.parentNode.removeChild(loaderOverlay);
                }
            }, 2000);
        }, 400);
    }

    /* ------------------------------------------------
       Summary View — same chat-bubble layout as quiz
       ------------------------------------------------ */
    let _summaryActive = false;

    function launchSummary(summaryData, isDarkMode, tamilBookName) {
        if (!summaryData) return false;
        if (_summaryActive && _overlayEl) return true; // already showing
        destroy(); // clean up any quiz overlay
        _summaryActive = true;

        document.body.classList.add('mobile-quiz-active');
        const label = `${tamilBookName || summaryData.book} - ${summaryData.chapter} சுருக்கம்...`;
        _showLoaderThen(isDarkMode, label, () => {
            _renderSummary(summaryData, isDarkMode);
        });

        return true;
    }

    function _renderSummary(summaryData, isDarkMode) {
        _summaryActive = true;
        const { chapter, book, questions, userAnswers, score, totalQuestions } = summaryData;
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        const pct = Math.round((score / totalQuestions) * 100);
        const wrongCount = totalQuestions - score;
        const dk = isDarkMode;

        const overlay = document.createElement('div');
        overlay.className = `mobile-quiz-overlay ${theme}`;
        overlay.id = 'mobileQuizOverlay';

        // Build the scroll container
        const scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px;';

        // Score hero
        const hero = document.createElement('div');
        hero.style.cssText = `display:flex;align-items:center;gap:16px;padding:20px;border-radius:16px;margin-bottom:16px;${dk ? 'background:linear-gradient(135deg,#14532d33,#16533033);border:1px solid #16a34a33;' : 'background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;'}`;
        hero.innerHTML = `
            <div style="position:relative;width:64px;height:64px;flex-shrink:0;">
                <svg viewBox="0 0 36 36" style="width:100%;height:100%;transform:rotate(-90deg);">
                    <path d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" fill="none" stroke="${dk ? '#363c44' : '#e2e8f0'}" stroke-width="4"/>
                    <path d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-dasharray="${pct}, 100"/>
                </svg>
                <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:${dk ? '#4ade80' : '#059669'};">${pct}%</span>
            </div>
            <div>
                <div style="font-size:18px;font-weight:700;color:${dk ? '#f1f5f9' : '#111827'};">${score}/${totalQuestions} Correct</div>
                <div style="font-size:13px;display:flex;gap:12px;margin-top:4px;">
                    <span style="color:#10b981;font-weight:600;">✓ ${score}</span>
                    <span style="color:#ef4444;font-weight:600;">✗ ${wrongCount}</span>
                </div>
            </div>`;
        scrollDiv.appendChild(hero);

        // Question cards — built via DOM to avoid innerHTML nesting issues
        questions.forEach((q, i) => {
            const userAns = userAnswers[q.id];
            const correctIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer : q.options.indexOf(q.correctAnswer);
            const isCorrect = parseInt(userAns) === correctIdx;

            const card = document.createElement('div');
            card.style.cssText = `border-radius:14px;margin-bottom:16px;${dk ? 'background:#282e36;border:1px solid #363c44;' : 'background:#fff;border:1px solid #e5e7eb;box-shadow:0 1px 4px rgba(0,0,0,0.06);'}`;

            // Header
            const headBg = isCorrect
                ? (dk ? 'background:#14532d66;color:#4ade80;' : 'background:#ecfdf5;color:#059669;')
                : (dk ? 'background:#7f1d1d44;color:#f87171;' : 'background:#fef2f2;color:#dc2626;');
            const head = document.createElement('div');
            head.style.cssText = `display:flex;align-items:center;justify-content:space-between;padding:10px 14px;font-size:12px;font-weight:700;${headBg}`;
            head.textContent = '';
            const headLeft = document.createElement('span');
            headLeft.textContent = 'Question ' + (i + 1);
            const headRight = document.createElement('span');
            headRight.style.cssText = 'display:flex;align-items:center;gap:4px;';
            headRight.textContent = isCorrect ? '✓ Correct' : '✗ Wrong';
            head.appendChild(headLeft);
            head.appendChild(headRight);
            card.appendChild(head);

            // Question text
            const qDiv = document.createElement('div');
            qDiv.style.cssText = `padding:14px 14px 10px;font-size:15px;font-weight:600;line-height:1.55;color:${dk ? '#f1f5f9' : '#111827'};`;
            // Strip the blue number badge span, show just the text
            const cleanText = q.question.replace(/<span[^>]*style="[^"]*1a73e8[^"]*"[^>]*>\d+<\/span>/gi, '').trim();
            qDiv.textContent = cleanText;
            card.appendChild(qDiv);

            // Options
            const optsDiv = document.createElement('div');
            optsDiv.style.cssText = 'padding:0 14px 10px;display:flex;flex-direction:column;gap:6px;';
            q.options.forEach((opt, idx) => {
                const optEl = document.createElement('div');
                const letter = String.fromCharCode(65 + idx);
                const optText = opt.replace(/^[A-D]\.\s*/, '').trim();
                let optBg, letterStyle, iconText = '';

                if (idx === correctIdx) {
                    optBg = dk
                        ? 'background:#14532d55;color:#6ee7b7;border:1px solid #16a34a66;font-weight:600;'
                        : 'background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;font-weight:600;';
                    letterStyle = 'background:#10b981;color:#fff;';
                    iconText = '✓';
                } else if (idx === parseInt(userAns) && !isCorrect) {
                    optBg = dk
                        ? 'background:#7f1d1d33;color:#fca5a5;border:1px solid #dc262666;font-weight:600;'
                        : 'background:#fef2f2;color:#991b1b;border:1px solid #fecaca;font-weight:600;';
                    letterStyle = 'background:#ef4444;color:#fff;';
                    iconText = '✗';
                } else {
                    optBg = dk
                        ? 'background:#21252b;color:#94a3b8;border:1px solid #363c44;'
                        : 'background:#f9fafb;color:#6b7280;border:1px solid #f3f4f6;';
                    letterStyle = dk ? 'background:#363c44;color:#94a3b8;' : 'background:#e5e7eb;color:#6b7280;';
                }

                optEl.style.cssText = `display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;font-size:13.5px;${optBg}`;

                const letterEl = document.createElement('span');
                letterEl.style.cssText = `width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;${letterStyle}`;
                letterEl.textContent = letter;

                const textEl = document.createElement('span');
                textEl.style.cssText = 'flex:1;line-height:1.4;';
                textEl.textContent = optText;

                optEl.appendChild(letterEl);
                optEl.appendChild(textEl);

                if (iconText) {
                    const iconEl = document.createElement('span');
                    iconEl.style.cssText = `flex-shrink:0;font-weight:700;font-size:13px;color:${idx === correctIdx ? '#10b981' : '#ef4444'};`;
                    iconEl.textContent = iconText;
                    optEl.appendChild(iconEl);
                }

                optsDiv.appendChild(optEl);
            });
            card.appendChild(optsDiv);

            // Verse reference
            if (q.verse) {
                const verseDiv = document.createElement('div');
                verseDiv.style.cssText = `padding:0 14px 14px;font-size:12px;font-weight:600;color:${dk ? '#fbbf24' : '#d97706'};text-align:right;`;
                verseDiv.textContent = 'Read - ' + q.verse;
                card.appendChild(verseDiv);
            }

            scrollDiv.appendChild(card);
        });

        // Assemble overlay
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
        `;

        overlay.appendChild(scrollDiv);

        // Footer
        const footer = document.createElement('div');
        footer.className = 'mq-footer';
        const backBtn = document.createElement('button');
        backBtn.className = 'mq-next-btn active';
        backBtn.id = 'mqSummaryBack';
        backBtn.style.cssText = 'flex:1';
        backBtn.textContent = '← Back to Books';
        footer.appendChild(backBtn);
        overlay.appendChild(footer);

        document.body.appendChild(overlay);
        _overlayEl = overlay;

        // Bind events
        overlay.querySelector('#mqSummaryExit').addEventListener('click', _closeSummary);
        backBtn.addEventListener('click', _closeSummary);

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
            state.quizTestamentTab = state.quizTestamentTab || 'NT';
            state.showQuizBackConfirmation = false;
            // Stay in quiz grid (chapter selection) instead of exiting entirely
            state.quizStarted = true;
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
            // Use normalized book name (if available) to match cache keys
            const bookKey = typeof normalizeQuizBookName === 'function'
                ? normalizeQuizBookName(book)
                : book.toLowerCase().replace(/\s+/g, '-');
            const chapterCount = chapterCounts[book] || 1;
            const chapters = Array.from({ length: chapterCount }, (_, i) => i + 1);
            // With lazy loading, all chapters are available by default
            const hasAnyData = true;

            let chaptersHtml = '';
            chapters.forEach(ch => {
                // Check completion across all dates
                let isCompleted = false;
                let score;
                let totalQ = 0;
                if (completedChapters) {
                    Object.keys(completedChapters).forEach(date => {
                        if (completedChapters[date]?.[currentUserId]?.[book]?.[ch]) {
                            isCompleted = true;
                            const s = chapterScores?.[date]?.[currentUserId]?.[book]?.[ch];
                            if (s !== undefined) score = s;
                        }
                    });
                }

                // For lazy loading, show all chapters as available (not disabled)
                const btnCls = isCompleted ? 'completed' : 'available';

                chaptersHtml += `
                    <div class="mq-ch-cell">
                        <button class="mq-ch-btn ${btnCls}"
                            data-book="${book}" data-ch="${ch}"
                            data-completed="${isCompleted}" data-enabled="true">
                            ${ch}
                        </button>
                        ${score !== undefined ? `<span class="mq-ch-score">${score}/${totalQ}</span>` : ''}
                    </div>`;
            });

            booksHtml += `
                <div class="mq-book-card">
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

        // Restore scroll position
        const booksBody = overlay.querySelector('#mqBooksBody');
        if (booksBody && _gridScrollTop > 0) {
            requestAnimationFrame(() => { booksBody.scrollTop = _gridScrollTop; });
        }

        // Bind chapter button clicks
        overlay.querySelectorAll('.mq-ch-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                const book = this.dataset.book;
                const ch = this.dataset.ch;
                const completed = this.dataset.completed === 'true';
                const enabled = this.dataset.enabled === 'true';
                
                // Save scroll position before navigating away
                const booksBody = document.getElementById('mqBooksBody');
                if (booksBody) _gridScrollTop = booksBody.scrollTop;

                if (completed) {
                    if (typeof loadQuizSummary === 'function') loadQuizSummary(ch, book);
                } else if (enabled || true) { // Always allow, will load on-demand
                    // Load questions for this chapter on-demand
                    if (typeof loadChapterQuestionsLazy === 'function') {
                        try {
                            const questions = await loadChapterQuestionsLazy(book, ch);
                            
                            if (questions && questions.length > 0) {
                                if (typeof state !== 'undefined') {
                                    state.selectedQuizBook = book;
                                    state.selectedQuizChapter = ch;
                                    window.history.pushState({ page: 'quiz', level: 'chapter' }, '', window.location.href);
                                }
                                if (typeof render === 'function') render();
                            } else {
                                alert(`No quiz questions available for ${book} Chapter ${ch} yet. Questions may be coming soon!`);
                            }
                        } catch (error) {
                            console.error('Error loading chapter questions:', error);
                            alert('Error loading quiz questions. Please try again.');
                        }
                    }
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
