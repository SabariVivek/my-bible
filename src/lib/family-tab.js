/**
 * Family Tab — Render Module v6
 *
 * Sections:
 *  1. Streaks (year total days read)
 *  2. This Week (Mon→Sun day dots per member)
 *  3. Monthly Leaderboard (ranked by days read this month)
 *  4. Pending Today
 *  5. Family Members (progress rings)
 */
(function (global) {
    'use strict';

    var DAY_MS = 24 * 60 * 60 * 1000;
    var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var DAYS_SHORT = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function dateKey(d) {
        return d.getFullYear() + '-' +
            String(d.getMonth() + 1).padStart(2, '0') + '-' +
            String(d.getDate()).padStart(2, '0');
    }

    function progressColor(pct) {
        if (pct >= 80) return '#10b981';
        if (pct >= 60) return '#3b82f6';
        if (pct >= 30) return '#f59e0b';
        return '#94a3b8';
    }

    /** Get Monday of the week containing `date` */
    function getMonday(date) {
        var d = new Date(date);
        d.setHours(0,0,0,0);
        var day = d.getDay(); // 0=Sun
        var diff = day === 0 ? -6 : 1 - day;
        d.setDate(d.getDate() + diff);
        return d;
    }

    function avatarHTML(user, cls, fbCls, extraStyle) {
        return '<img src="' + PROFILE_IMAGE_BASE_URL + '/' + esc(user.name.toLowerCase()) + '.png" alt="' + esc(user.name) + '" class="' + cls + '"' + (extraStyle ? ' style="' + extraStyle + '"' : '') + ' onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';">' +
            '<div class="' + fbCls + '" style="display:none;">' + esc(user.name.charAt(0).toUpperCase()) + '</div>';
    }

    /* ========== This Week (Mon → Sun dot grid per user) ========== */
    function renderThisWeek(state) {
        var today = new Date();
        today.setHours(0,0,0,0);
        var todayKey = dateKey(today);
        var monday = getMonday(today);

        // Build 7 days
        var weekDays = [];
        for (var i = 0; i < 7; i++) {
            var d = new Date(monday);
            d.setDate(monday.getDate() + i);
            weekDays.push({ date: d, key: dateKey(d), label: DAYS_SHORT[i] });
        }

        var sortedUsers = state.users.slice().sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        if (sortedUsers.length === 0) return '';

        var rows = sortedUsers.map(function (user) {
            var weekDone = 0;
            var dots = weekDays.map(function (wd) {
                var done = !!(user.completedDates && user.completedDates[wd.key]);
                var isToday = wd.key === todayKey;
                var isFuture = wd.date > today;
                var cls = 'ft-tw-dot';
                if (done) { cls += ' is-done'; weekDone++; }
                else if (isToday) { cls += ' is-today'; }
                else if (isFuture) { cls += ' is-future'; }
                else { cls += ' is-missed'; }
                return '<div class="' + cls + '"></div>';
            }).join('');

            var pct = Math.round((weekDone / 7) * 100);

            return '<div class="ft-tw-row">' +
                '<div class="ft-tw-user">' +
                    avatarHTML(user, 'ft-tw-avatar', 'ft-tw-avatar-fb') +
                    '<span class="ft-tw-name">' + esc(user.name) + '</span>' +
                '</div>' +
                '<div class="ft-tw-dots">' + dots + '</div>' +
                '<div class="ft-tw-bar-wrap">' +
                    '<div class="ft-tw-bar" style="width:' + pct + '%;background:' + progressColor(pct) + ';"></div>' +
                '</div>' +
                '<span class="ft-tw-pct">' + pct + '%</span>' +
            '</div>';
        }).join('');

        // Day labels header
        var dayLabels = weekDays.map(function (wd) {
            var isToday = wd.key === todayKey;
            return '<span class="ft-tw-day-label' + (isToday ? ' is-today' : '') + '">' + wd.label + '</span>';
        }).join('');

        return '<section class="ft-card" aria-label="This week">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\uD83D\uDCC5</span> This Week</h3>' +
                '<span class="ft-card-meta">' + MONTHS_SHORT[monday.getMonth()] + ' ' + monday.getDate() + ' \u2013 ' + MONTHS_SHORT[weekDays[6].date.getMonth()] + ' ' + weekDays[6].date.getDate() + '</span>' +
            '</div>' +
            '<div class="ft-tw-header">' +
                '<div class="ft-tw-user-spacer"></div>' +
                '<div class="ft-tw-day-labels">' + dayLabels + '</div>' +
                '<div class="ft-tw-bar-spacer"></div>' +
                '<div class="ft-tw-pct-spacer"></div>' +
            '</div>' +
            '<div class="ft-tw-body">' + rows + '</div>' +
        '</section>';
    }

    /* ========== Monthly Leaderboard ========== */
    function renderLeaderboard(state) {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var monthLabel = MONTHS_SHORT[month] + ' ' + year;

        // Count days read this month per user
        var prefix = year + '-' + String(month + 1).padStart(2, '0') + '-';
        var ranked = state.users
            .map(function (user) {
                var count = 0;
                if (user.completedDates) {
                    Object.keys(user.completedDates).forEach(function (k) {
                        if (k.indexOf(prefix) === 0) count++;
                    });
                }
                return { user: user, count: count };
            })
            .sort(function (a, b) { return b.count - a.count; });

        // max days in month so far
        var daysInMonthSoFar = today.getDate();
        var medals = ['\uD83E\uDD47', '\uD83E\uDD48', '\uD83E\uDD49']; // 🥇🥈🥉

        var rows = ranked.map(function (x, idx) {
            var user = x.user, count = x.count;
            var pct = daysInMonthSoFar > 0 ? Math.round((count / daysInMonthSoFar) * 100) : 0;
            var medal = idx < 3 ? '<span class="ft-lb-medal">' + medals[idx] + '</span>' : '<span class="ft-lb-rank">' + (idx + 1) + '</span>';
            var barColor = idx === 0 ? '#10b981' : idx === 1 ? '#3b82f6' : idx === 2 ? '#f59e0b' : '#94a3b8';

            return '<div class="ft-lb-row">' +
                medal +
                avatarHTML(user, 'ft-lb-avatar', 'ft-lb-avatar-fb') +
                '<div class="ft-lb-info">' +
                    '<p class="ft-lb-name">' + esc(user.name) + '</p>' +
                    '<div class="ft-lb-bar-wrap">' +
                        '<div class="ft-lb-bar" style="width:' + pct + '%;background:' + barColor + ';"></div>' +
                    '</div>' +
                '</div>' +
                '<span class="ft-lb-count">' + count + '<small>/' + daysInMonthSoFar + '</small></span>' +
            '</div>';
        }).join('');

        return '<section class="ft-card" aria-label="Monthly leaderboard">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\uD83C\uDFC5</span> Monthly Leaderboard</h3>' +
                '<span class="ft-card-meta">' + monthLabel + '</span>' +
            '</div>' +
            '<div class="ft-lb-body">' + rows + '</div>' +
        '</section>';
    }

    /* ========== Streaks ========== */
    function renderStreaks(state, getUserStats) {
        var currentYear = new Date().getFullYear();
        var items = state.users
            .map(function (user) {
                var streak = 0;
                if (user.completedDates) {
                    streak = Object.keys(user.completedDates).filter(function (ds) {
                        return parseInt(ds.split('-')[0], 10) === currentYear;
                    }).length;
                }
                return { user: user, streak: streak };
            })
            .filter(function (x) { return x.streak >= 1; })
            .sort(function (a, b) { return b.streak - a.streak; });

        var body = items.length === 0
            ? '<div class="ft-streak-empty">No streaks yet \u2014 be the first \uD83D\uDD25</div>'
            : items.map(function (x) {
                var user = x.user, streak = x.streak;
                var color = progressColor(getUserStats(user).totalProgress || 0);
                return '<div class="ft-streak-card">' +
                    '<img src="' + PROFILE_IMAGE_BASE_URL + '/' + esc(user.name.toLowerCase()) + '.png" alt="' + esc(user.name) + '" class="ft-streak-avatar" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';">' +
                    '<div class="ft-streak-avatar-fb" style="display:none; background:' + color + ';">' + esc(user.name.charAt(0).toUpperCase()) + '</div>' +
                    '<p class="ft-streak-name">' + esc(user.name) + '</p>' +
                    '<p class="ft-streak-flame">\uD83D\uDD25 ' + streak + '</p>' +
                '</div>';
            }).join('');

        return '<section class="ft-card" aria-label="Reading streaks">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\uD83C\uDFC6</span> Streaks ' + currentYear + '</h3>' +
            '</div>' +
            '<div class="ft-streaks">' + body + '</div>' +
        '</section>';
    }

    /* ========== Pending Today ========== */
    function renderPending(state, stats, getUserStats) {
        if (!stats.pendingCount) {
            return '<section class="ft-caughtup">' +
                '<span class="ft-caughtup-emoji">\uD83C\uDF89</span>' +
                '<h3 class="ft-caughtup-title">Everyone is up to date!</h3>' +
                '<p class="ft-caughtup-sub">All family members have completed today\'s reading.</p>' +
            '</section>';
        }

        var sorted = stats.pendingUsers.slice().sort(function (a, b) {
            return getUserStats(b).daysPending - getUserStats(a).daysPending;
        });

        var rows = sorted.map(function (user) {
            var us = getUserStats(user);
            var label = us.daysPending === 0 ? 'Not started yet'
                : us.daysPending === 1 ? '1 day pending'
                : us.daysPending + ' days pending';
            var adminBtn = state.isAdmin
                ? '<button class="ft-pending-action" onclick="switchUser(' + user.id + '); state.showDashboard = false; stopDashboardSync(); render();">\u2192</button>'
                : '';
            return '<div class="ft-pending-row">' +
                '<img src="' + PROFILE_IMAGE_BASE_URL + '/' + esc(user.name.toLowerCase()) + '.png" alt="' + esc(user.name) + '" class="ft-pending-avatar" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';">' +
                '<div class="ft-pending-avatar-fb" style="display:none;">' + esc(user.name.charAt(0).toUpperCase()) + '</div>' +
                '<div class="ft-pending-info">' +
                    '<p class="ft-pending-name">' + esc(user.name) + '</p>' +
                    '<span class="ft-pending-pill">' + esc(label) + '</span>' +
                '</div>' + adminBtn +
            '</div>';
        }).join('');

        return '<section class="ft-pending">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\u23F3</span> Pending Today (' + stats.pendingCount + ')</h3>' +
            '</div>' +
            '<div class="ft-pending-list">' + rows + '</div>' +
        '</section>';
    }

    /* ========== Members Grid ========== */
    function renderMembers(state, getUserStats) {
        var sorted = state.users
            .map(function (u) { return { user: u, stats: getUserStats(u) }; })
            .sort(function (a, b) { return a.user.name.localeCompare(b.user.name); });

        var items = sorted.map(function (x) {
            var user = x.user, stats = x.stats;
            var pct = Math.max(0, Math.min(100, Math.round(stats.totalProgress || 0)));
            var color = progressColor(pct);
            return '<div class="ft-member">' +
                '<div class="ft-member-avatar-wrap" style="--pct:' + pct + '%;--ring-color:' + color + ';">' +
                    '<div class="ft-member-avatar-inner">' +
                        '<img src="' + PROFILE_IMAGE_BASE_URL + '/' + esc(user.name.toLowerCase()) + '.png" class="ft-member-avatar" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';">' +
                        '<div class="ft-member-avatar-fb" style="display:none;background:' + color + ';">' + esc(user.name.charAt(0).toUpperCase()) + '</div>' +
                    '</div>' +
                '</div>' +
                '<p class="ft-member-name">' + esc(user.name) + '</p>' +
                '<p class="ft-member-pct">' + pct + '%</p>' +
            '</div>';
        }).join('');

        return '<section class="ft-card">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\uD83D\uDE4C</span> Family Members</h3>' +
            '</div>' +
            '<div class="ft-members">' + items + '</div>' +
        '</section>';
    }

    /* ========== Main ========== */
    function render(state, theme, icons, stats, getUserStats) {
        return '<div class="ft-root">' +
            renderStreaks(state, getUserStats) +
            renderPending(state, stats, getUserStats) +
            renderMembers(state, getUserStats) +
        '</div>';
    }

    function afterRender() {
        // No scroll sync needed anymore
    }

    global.FamilyTab = { render: render, afterRender: afterRender };
})(window);
