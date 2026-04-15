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
        if (!isMobile() || !questions || questions.length === 0) return false;
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
                    ${q.options.map((opt, idx) => `
                        <div class="mq-option ${selectedIdx === idx ? 'selected' : ''}"
                             data-idx="${idx}" role="button" tabindex="0">
                            <span class="mq-option-text">${_cleanOption(opt)}</span>
                            <span class="mq-check">✓</span>
                        </div>
                    `).join('')}
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
                    _submitFromMobile(questions, dateKey, chapter);
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
                <div class="mq-modal-icon">📖</div>
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
            destroy();
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

    function _submitFromMobile(questions, dateKey, chapter) {
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

        destroy();

        if (typeof submitQuiz === 'function') {
            submitQuiz(questions, dateKey, chapter);
        }

        if (createdForm && existingForm.parentNode) {
            existingForm.parentNode.removeChild(existingForm);
        }
    }

    return { isMobile, launch, destroy, launchSummary };
})();
