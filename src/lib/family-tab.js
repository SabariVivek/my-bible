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

    /* ========== Solar Orbit ========== */
    var _orbitData = null; // stashed for afterRender

    function orbitColor(pct) {
        if (pct >= 100) return '#ffe060';
        if (pct >= 25)  return '#00e676';
        if (pct >= 10)  return '#f0c060';
        return '#ff6060';
    }

    function renderSolarOrbit(state, getUserStats) {
        // Build data for the SVG draw pass
        _orbitData = state.users.map(function (u) {
            var s = getUserStats(u);
            var pct = Math.max(0, Math.round(s.totalProgress || 0));
            return { name: u.name, pct: pct };
        });

        var completed = _orbitData.filter(function (m) { return m.pct >= 100; }).length;

        return '<section class="ft-card ft-orbit-section" aria-label="Solar orbit">' +
            '<div class="ft-card-head">' +
                '<h3 class="ft-card-title"><span class="ft-emoji">\u2600\uFE0F</span> Solar Orbit</h3>' +
                '<span class="ft-card-meta">' + completed + '/' + _orbitData.length + ' done</span>' +
            '</div>' +
            '<div class="ft-orbit-wrap">' +
                '<svg id="ftOrbitSvg" viewBox="0 0 360 380" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;"></svg>' +
            '</div>' +
            '<div class="ft-orbit-key">' +
                '<span class="ft-ok"><span class="ft-ok-dot" style="background:#00e676"></span>25-99 %</span>' +
                '<span class="ft-ok"><span class="ft-ok-dot" style="background:#f0c060"></span>10-24 %</span>' +
                '<span class="ft-ok"><span class="ft-ok-dot" style="background:#ff6060"></span>&lt; 10 %</span>' +
                '<span class="ft-ok"><span class="ft-ok-dot" style="background:#ffe060"></span>100 % \u2713</span>' +
            '</div>' +
        '</section>';
    }

    function drawOrbitSVG() {
        if (!_orbitData) return;
        var svg = document.getElementById('ftOrbitSvg');
        if (!svg) return;

        var NS = 'http://www.w3.org/2000/svg';
        function cel(tag, attrs) {
            var e = document.createElementNS(NS, tag);
            if (attrs) { for (var k in attrs) { if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]); } }
            return e;
        }
        function rng(seed) { var x = Math.sin(seed * 9301 + 49297) * 233280; return x - Math.floor(x); }

        var isDark = document.documentElement.classList.contains('dark-theme');
        var W = 360, H = 380, cx = W / 2, cy = 185;
        svg.innerHTML = '';

        var RINGS = { inner: { r: 56 }, middle: { r: 92 }, outer: { r: 130 } };

        var members = _orbitData.slice();

        // Assign positions
        var sorted = members.slice().sort(function (a, b) { return b.pct - a.pct; });
        var complete = sorted.filter(function (m) { return m.pct >= 100; });
        var inner    = sorted.filter(function (m) { return m.pct >= 25  && m.pct < 100; });
        var middle   = sorted.filter(function (m) { return m.pct >= 10  && m.pct < 25; });
        var outer    = sorted.filter(function (m) { return m.pct < 10; });

        function spreadBand(group, r, angleOff) {
            var n = group.length;
            group.forEach(function (m, i) {
                m._r = r;
                m._angle = angleOff + (i / Math.max(n, 1)) * 2 * Math.PI;
                m._col = orbitColor(m.pct);
                m._pr = 4 + (Math.min(m.pct, 100) / 100) * 8;
            });
        }
        complete.forEach(function (m, i) {
            var n = complete.length;
            m._r = 28; m._angle = -Math.PI * 0.5 + (i / Math.max(n, 1)) * 2 * Math.PI;
            m._col = '#ffe060'; m._pr = 11;
        });
        spreadBand(inner,  RINGS.inner.r,  -Math.PI * 0.5);
        spreadBand(middle, RINGS.middle.r, -Math.PI * 0.15);
        spreadBand(outer,  RINGS.outer.r,  -Math.PI * 0.75);

        var planets = [].concat(complete, inner, middle, outer);

        // Compute screen positions
        planets.forEach(function (m) {
            m._px = cx + m._r * Math.cos(m._angle);
            m._py = cy + m._r * Math.sin(m._angle);
            var push = m._pr + 14;
            m._lx = m._px + push * Math.cos(m._angle);
            m._ly = m._py + push * Math.sin(m._angle);
            m._anchor = Math.cos(m._angle) >= 0 ? 'start' : 'end';
        });

        // Label collision avoidance
        for (var iter = 0; iter < 40; iter++) {
            for (var a = 0; a < planets.length; a++) {
                for (var b = a + 1; b < planets.length; b++) {
                    var ma = planets[a], mb = planets[b];
                    var dx = mb._lx - ma._lx, dy = mb._ly - ma._ly;
                    var oX = 58 + 6 - Math.abs(dx), oY = 20 + 6 - Math.abs(dy);
                    if (oX > 0 && oY > 0) {
                        if (oX < oY) {
                            var p = oX / 2 + 1, s = dx >= 0 ? 1 : -1;
                            mb._lx += p * s; ma._lx -= p * s;
                        } else {
                            var p2 = oY / 2 + 1, s2 = dy >= 0 ? 1 : -1;
                            mb._ly += p2 * s2; ma._ly -= p2 * s2;
                        }
                    }
                }
            }
        }
        planets.forEach(function (m) {
            m._lx = Math.max(34, Math.min(W - 34, m._lx));
            m._ly = Math.max(14, Math.min(H - 6, m._ly));
            m._anchor = m._lx >= m._px ? 'start' : 'end';
        });

        // Defs
        var defs = cel('defs');
        var bgG = cel('radialGradient', { id: 'ftBgG', cx: '50%', cy: '48%', r: '60%' });
        var bgDark = isDark ? '#0c1828' : '#e8ecf4';
        var bgEdge = isDark ? '#03060d' : '#d0d8e8';
        var s1 = cel('stop', { offset: '0%', 'stop-color': bgDark, 'stop-opacity': '1' });
        var s2 = cel('stop', { offset: '100%', 'stop-color': bgEdge, 'stop-opacity': '1' });
        bgG.appendChild(s1); bgG.appendChild(s2); defs.appendChild(bgG);

        var sg = cel('radialGradient', { id: 'ftSunG', cx: '38%', cy: '35%', r: '60%' });
        [['0%','#fffbe0','1'],['35%','#ffe060','0.95'],['70%','#f0a020','0.7'],['100%','#f09000','0']].forEach(function (x) {
            sg.appendChild(cel('stop', { offset: x[0], 'stop-color': x[1], 'stop-opacity': x[2] }));
        });
        defs.appendChild(sg);
        svg.appendChild(defs);

        // BG
        svg.appendChild(cel('rect', { x: 0, y: 0, width: W, height: H, fill: 'url(#ftBgG)', rx: '14' }));

        // Stars (dark only)
        if (isDark) {
            for (var i = 0; i < 100; i++) {
                var sx = rng(i * 7.3 + 1) * W, sy = rng(i * 3.7 + 2) * H;
                var sr = rng(i * 11 + 3) * 0.7 + 0.1, so = rng(i * 5.9 + 4) * 0.3 + 0.05;
                svg.appendChild(cel('circle', { cx: sx.toFixed(1), cy: sy.toFixed(1), r: sr.toFixed(2), fill: '#fff', 'fill-opacity': so.toFixed(2) }));
            }
        }

        // Orbit rings
        var ringOpDark = isDark ? 0.18 : 0.25;
        if (complete.length > 0) {
            svg.appendChild(cel('circle', { cx: cx, cy: cy, r: 28, fill: 'none', stroke: isDark ? 'rgba(255,224,96,0.3)' : 'rgba(202,138,4,0.25)', 'stroke-width': '1.2', 'stroke-dasharray': '3,3' }));
        }
        [
            { r: RINGS.inner.r,  col: isDark ? 'rgba(0,230,118,0.18)' : 'rgba(22,163,74,0.2)' },
            { r: RINGS.middle.r, col: isDark ? 'rgba(240,192,96,0.14)' : 'rgba(202,138,4,0.18)' },
            { r: RINGS.outer.r,  col: isDark ? 'rgba(255,96,96,0.14)' : 'rgba(220,38,38,0.15)' },
        ].forEach(function (rd) {
            svg.appendChild(cel('circle', { cx: cx, cy: cy, r: rd.r, fill: 'none', stroke: rd.col, 'stroke-width': '1.2', 'stroke-dasharray': '4,5' }));
        });

        // Sun
        svg.appendChild(cel('circle', { cx: cx, cy: cy, r: 60, fill: 'url(#ftSunG)', 'fill-opacity': '0.14' }));
        svg.appendChild(cel('circle', { cx: cx, cy: cy, r: 20, fill: 'url(#ftSunG)', 'fill-opacity': '0.95' }));
        svg.appendChild(cel('circle', { cx: cx, cy: cy, r: 14, fill: '#fff8c0', 'fill-opacity': '0.98' }));
        var sunTxt = cel('text', { x: cx, y: cy + 1, 'text-anchor': 'middle', 'dominant-baseline': 'middle', fill: '#996010', 'font-size': '6.5', 'font-weight': '700', 'font-family': 'system-ui,sans-serif', 'letter-spacing': '0.5' });
        sunTxt.textContent = 'GOD';
        svg.appendChild(sunTxt);

        // Connector lines
        var lineColor = isDark ? 0.35 : 0.25;
        planets.forEach(function (m) {
            var dist = Math.sqrt((m._lx - m._px) * (m._lx - m._px) + (m._ly - m._py) * (m._ly - m._py));
            if (dist > m._pr + 16) {
                var dx = m._lx - m._px, dy = m._ly - m._py;
                var len = Math.sqrt(dx * dx + dy * dy);
                var ex = m._px + (dx / len) * (m._pr + 3);
                var ey = m._py + (dy / len) * (m._pr + 3);
                var lEndX = m._anchor === 'start' ? m._lx - 2 : m._lx + 2;
                svg.appendChild(cel('line', {
                    x1: ex.toFixed(1), y1: ey.toFixed(1),
                    x2: lEndX.toFixed(1), y2: m._ly.toFixed(1),
                    stroke: m._col, 'stroke-width': '0.7', 'stroke-opacity': String(lineColor), 'stroke-dasharray': '2,2'
                }));
            }
        });

        // Planets
        planets.forEach(function (m, i) {
            var gid = 'ftpg' + i;
            var pG = cel('radialGradient', { id: gid, cx: '36%', cy: '32%', r: '62%' });
            pG.appendChild(cel('stop', { offset: '0%', 'stop-color': '#ffffff', 'stop-opacity': '0.5' }));
            pG.appendChild(cel('stop', { offset: '100%', 'stop-color': m._col, 'stop-opacity': '1' }));
            defs.appendChild(pG);

            svg.appendChild(cel('circle', { cx: m._px.toFixed(1), cy: m._py.toFixed(1), r: (m._pr + 5).toFixed(1), fill: m._col, 'fill-opacity': '0.09' }));
            svg.appendChild(cel('circle', { cx: m._px.toFixed(1), cy: m._py.toFixed(1), r: (m._pr + 2).toFixed(1), fill: 'none', stroke: m._col, 'stroke-width': '0.8', 'stroke-opacity': '0.28' }));
            svg.appendChild(cel('circle', { cx: m._px.toFixed(1), cy: m._py.toFixed(1), r: m._pr.toFixed(1), fill: 'url(#' + gid + ')' }));

            if (m.pct >= 100) {
                var tick = cel('text', { x: m._px.toFixed(1), y: (m._py - m._pr - 2).toFixed(1), 'text-anchor': 'middle', 'font-size': '8' });
                tick.textContent = '\u2713';
                svg.appendChild(tick);
            }
        });

        // Labels
        var labelFill = isDark ? 'rgba(220,232,248,0.92)' : 'rgba(15,23,42,0.85)';
        planets.forEach(function (m) {
            var nameEl = cel('text', {
                x: m._lx.toFixed(1), y: m._ly.toFixed(1),
                'text-anchor': m._anchor, fill: labelFill,
                'font-size': '9', 'font-weight': '700', 'font-family': 'system-ui,sans-serif',
                'dominant-baseline': 'auto'
            });
            nameEl.textContent = m.name;
            svg.appendChild(nameEl);

            var pctEl = cel('text', {
                x: m._lx.toFixed(1), y: (m._ly + 11).toFixed(1),
                'text-anchor': m._anchor, fill: m._col,
                'font-size': '8.5', 'font-weight': '700', 'font-family': 'system-ui,sans-serif',
                'dominant-baseline': 'auto'
            });
            pctEl.textContent = m.pct >= 100 ? '100%\u2713' : m.pct + '%';
            svg.appendChild(pctEl);
        });
    }

    /* ========== Main ========== */
    function render(state, theme, icons, stats, getUserStats) {
        return '<div class="ft-root">' +
            renderStreaks(state, getUserStats) +
            renderSolarOrbit(state, getUserStats) +
            renderPending(state, stats, getUserStats) +
            renderMembers(state, getUserStats) +
        '</div>';
    }

    function afterRender() {
        drawOrbitSVG();
    }

    global.FamilyTab = { render: render, afterRender: afterRender };
})(window);
