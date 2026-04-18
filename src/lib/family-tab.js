/**
 * Family Tab — Render Module
 * Self-contained renderer for the Family dashboard view in bible-reading.html.
 *
 * Exposes: window.FamilyTab.render(state, theme, icons, stats, getUserStats)
 * Returns an HTML string consumed by the page's main render() template.
 *
 * Depends on globals provided by bible-reading.html: switchUser, render,
 * stopDashboardSync.
 */
(function (global) {
    'use strict';

    const DAY_MS = 24 * 60 * 60 * 1000;

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function dateKey(d) {
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    function progressColor(pct) {
        if (pct >= 80) return '#10b981';
        if (pct >= 60) return '#3b82f6';
        if (pct >= 30) return '#f59e0b';
        return '#94a3b8';
    }

    /* ========== Weekly Rhythm (7-day heatmap) ========== */
    function renderRhythm(state) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(today.getTime() - i * DAY_MS);
            days.push({ date: d, key: dateKey(d) });
        }
        const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

        const sortedUsers = state.users.slice().sort((a, b) => a.name.localeCompare(b.name));
        if (sortedUsers.length === 0) return '';

        const headerCells = days.map(d => {
            const isToday = d.key === dateKey(today);
            return `<div class="ft-rhythm-day${isToday ? ' is-today' : ''}">
                <span>${dayLabels[d.date.getDay()]}</span>
                <small>${d.date.getDate()}</small>
            </div>`;
        }).join('');

        const todayKey = dateKey(today);
        const rows = sortedUsers.map(user => {
            const cells = days.map(d => {
                const done = !!(user.completedDates && user.completedDates[d.key]);
                const isFuture = d.key > todayKey;
                const cls = done ? 'is-done' : (isFuture ? 'is-future' : 'is-missed');
                const status = done ? '✓ done' : (isFuture ? 'upcoming' : '✗ missed');
                return `<div class="ft-rhythm-cell ${cls}" title="${esc(user.name)} — ${d.key} (${status})"></div>`;
            }).join('');
            return `
                <div class="ft-rhythm-row">
                    <div class="ft-rhythm-name">
                        <img src="../resources/profiles/${esc(user.name.toLowerCase())}.png" alt="${esc(user.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                        <div class="ft-rhythm-name-fallback" style="display:none;">${esc(user.name.charAt(0).toUpperCase())}</div>
                        <span>${esc(user.name)}</span>
                    </div>
                    <div class="ft-rhythm-cells">${cells}</div>
                </div>
            `;
        }).join('');

        return `
            <section class="ft-card" aria-label="Weekly reading rhythm">
                <div class="ft-card-head">
                    <h3 class="ft-card-title"><span class="ft-emoji">�</span> This Week's Rhythm</h3>
                    <span class="ft-card-meta">Last 7 days</span>
                </div>
                <div class="ft-rhythm">
                    <div class="ft-rhythm-row ft-rhythm-header">
                        <div class="ft-rhythm-name ft-rhythm-name-spacer"></div>
                        <div class="ft-rhythm-cells">${headerCells}</div>
                    </div>
                    ${rows}
                </div>
            </section>
        `;
    }

    /* ========== Streaks ========== */
    function renderStreaks(state, getUserStats) {
        const currentYear = new Date().getFullYear();
        const items = state.users
            .map(user => {
                let streak = 0;
                if (user.completedDates) {
                    streak = Object.keys(user.completedDates).filter(dateStr => {
                        const [year] = dateStr.split('-').map(Number);
                        return year === currentYear;
                    }).length;
                }
                return { user, streak };
            })
            .filter(({ streak }) => streak >= 1)
            .sort((a, b) => b.streak - a.streak);

        const body = items.length === 0
            ? `<div class="ft-streak-empty">No streaks started this year yet — be the first 🔥</div>`
            : items.map(({ user, streak }) => `
                <div class="ft-streak-card">
                    <img src="../resources/profiles/${esc(user.name.toLowerCase())}.png" alt="${esc(user.name)}" class="ft-streak-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                    <div class="ft-streak-avatar-fallback" style="display:none; background:${progressColor(getUserStats(user).totalProgress || 0)};">${esc(user.name.charAt(0).toUpperCase())}</div>
                    <p class="ft-streak-name">${esc(user.name)}</p>
                    <p class="ft-streak-flame">🔥 ${streak}</p>
                </div>
            `).join('');

        return `
            <section class="ft-card" aria-label="Reading streaks">
                <div class="ft-card-head">
                    <h3 class="ft-card-title"><span class="ft-emoji">🏆</span> Streaks ${currentYear}</h3>
                </div>
                <div class="ft-streaks">${body}</div>
            </section>
        `;
    }

    /* ========== Pending Today ========== */
    function renderPending(state, stats, getUserStats) {
        if (!stats.pendingCount) {
            return `
                <section class="ft-caughtup" aria-label="All caught up">
                    <span class="ft-caughtup-emoji">🎉</span>
                    <h3 class="ft-caughtup-title">Everyone is up to date!</h3>
                    <p class="ft-caughtup-sub">All family members have completed today's reading.</p>
                </section>
            `;
        }

        const sorted = stats.pendingUsers.slice().sort((a, b) => {
            return getUserStats(b).daysPending - getUserStats(a).daysPending;
        });

        return `
            <section class="ft-pending" aria-label="Pending family members">
                <div class="ft-card-head">
                    <h3 class="ft-card-title"><span class="ft-emoji">⏳</span> Pending Today (${stats.pendingCount})</h3>
                </div>
                <div class="ft-pending-list">
                    ${sorted.map(user => {
                        const us = getUserStats(user);
                        const label = us.daysPending === 0 ? 'Not started yet'
                            : us.daysPending === 1 ? '1 day pending'
                            : `${us.daysPending} days pending`;
                        return `
                            <div class="ft-pending-row">
                                <img src="../resources/profiles/${esc(user.name.toLowerCase())}.png" alt="${esc(user.name)}" class="ft-pending-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                                <div class="ft-pending-avatar-fallback" style="display:none;">${esc(user.name.charAt(0).toUpperCase())}</div>
                                <div class="ft-pending-info">
                                    <p class="ft-pending-name">${esc(user.name)}</p>
                                    <span class="ft-pending-pill">${esc(label)}</span>
                                </div>
                                ${state.isAdmin ? `<button class="ft-pending-action" onclick="switchUser(${user.id}); state.showDashboard = false; stopDashboardSync(); render();" title="View ${esc(user.name)}'s progress" aria-label="View ${esc(user.name)}'s progress">→</button>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    }

    /* ========== Members Grid ========== */
    function renderMembers(state, getUserStats) {
        const sorted = state.users
            .map(user => ({ user, stats: getUserStats(user) }))
            .sort((a, b) => a.user.name.localeCompare(b.user.name));

        return `
            <section class="ft-card" aria-label="All family members">
                <div class="ft-card-head">
                    <h3 class="ft-card-title"><span class="ft-emoji">�</span> Family Members</h3>
                </div>
                <div class="ft-members">
                    ${sorted.map(({ user, stats }) => {
                        const pct = Math.max(0, Math.min(100, Math.round(stats.totalProgress || 0)));
                        const color = progressColor(pct);
                        return `
                            <div class="ft-member" title="${esc(user.name)} — ${pct}%">
                                <div class="ft-member-avatar-wrap" style="--pct:${pct}%; --ring-color:${color};">
                                    <div class="ft-member-avatar-inner">
                                        <img src="../resources/profiles/${esc(user.name.toLowerCase())}.png" alt="${esc(user.name)}" class="ft-member-avatar" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                                        <div class="ft-member-avatar-fallback" style="display:none; background:${color};">${esc(user.name.charAt(0).toUpperCase())}</div>
                                    </div>
                                </div>
                                <p class="ft-member-name">${esc(user.name)}</p>
                                <p class="ft-member-pct">${pct}%</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    }

    function render(state, theme, icons, stats, getUserStats) {
        return `
            <div class="ft-root">
                ${renderStreaks(state, getUserStats)}
                ${renderRhythm(state)}
                ${renderPending(state, stats, getUserStats)}
                ${renderMembers(state, getUserStats)}
            </div>
        `;
    }

    global.FamilyTab = { render: render };
})(window);
