
/* ================= EXTRA : programme · fidélité · grand écran · chrono ================= */
Object.assign(T.fr, {
  regS: 'C’est rapide : votre prénom, et c’est parti !', regName: 'Prénom', regPhone2: 'Téléphone (facultatif)', cOk: 'J’accepte que LA BULL garde mon prénom (et mon numéro si je le donne) pour les jeux et me communique mes résultats. J’ai 15 ans ou plus.', regBad: 'Indiquez votre prénom, cochez la case (et vérifiez le numéro s’il y en a un).',
  pinNote: 'Notez bien ce code (ou faites une capture d’écran) !', pinKeep: 'Il vous sera demandé à chaque partie. En cas d’oubli, l’animateur peut le retrouver ou vous en donner un nouveau.', pinLost: 'Code oublié ? (animateur)', rescueAsk: 'Animateur : entrez votre code animateur pour donner un nouveau code à ce joueur.', noPhone: 'sans téléphone',
  progT: 'À venir à LA BULL', progScan: 'Scannez pour voir le programme', progLive: 'Montrer en direct', infoT: 'Infos pratiques', closedL: 'Fermé toute la journée', progS: 'Les prochaines soirées', progB: 'Programme', progAll: '📅 Tout le programme', progNext: 'Prochainement à LA BULL',
  progNone: 'Le programme arrive bientôt… suivez-nous sur Facebook !', resa: 'Sur réservation', fbFollow: 'Suivre LA BULL sur Facebook', callResa: 'Réserver : 07 68 11 79 87', open17: 'Ouvert dès 17h',
  fidT: 'Joueur du mois', fidS: 'Points fidélité', fidB: 'Joueur du mois', fidNone: 'Pas encore de points ce mois-ci. Jouez aux quiz, sondages et pronostics !',
  fidRule: 'Chaque quiz ou pronostic joué : 10 pts · sondage : 5 pts · 1er : +30 · 2e : +20 · 3e : +10 · pronostics : + vos points de prono. Les joueurs inscrits (avec leur code) cumulent tous leurs jeux.',
  fidPrize: '🎁 Une conso offerte au Joueur du mois !', fidGames: n => `${n} jeu${n > 1 ? 'x' : ''}`, fidWins: n => `${n} victoire${n > 1 ? 's' : ''}`, fidReveal: 'Révéler le Joueur du mois', fidLead: 'En tête ce mois-ci',
  tvB: 'Grand écran', tvScan: 'Scannez pour jouer !', tvRecv: 'fiches reçues', tvRecvP: 'pronos reçus', tvRecvS: 'participants', tvNew: n => `🎉 Nouvelle fiche : ${n}`, tvAuto: 'Auto', tvFull: 'Plein écran', tvQR: 'QR', tvRank: 'Classement', tvRes: 'Résultats', tvPod: 'Podium', tvWait: 'En attente des premières fiches…', tvHint: 'Astuce : branchez ou partagez l’écran de ce téléphone / cette tablette sur la télé du bar (câble HDMI, AirPlay ou Chromecast). Les fiches scannées sur cet appareil s’affichent en direct.',
  tmrL: '⏱ Chrono par question', tmrOff: 'Sans chrono', tmrUp: '⏱ Temps écoulé !', tmrLock: '⏱ Partie chronométrée : les réponses sont définitives.', imgL: '🖼️ Image de la question (facultatif)', imgPh: 'Lien de l’image : https://…', imgTip: 'Appui long sur une image d’internet → « Copier l’adresse de l’image », puis collez-la ici.'
});
Object.assign(T.en, {
  regS: 'Quick: your first name and off you go!', regName: 'First name', regPhone2: 'Phone (optional)', cOk: 'I agree that LA BULL keeps my first name (and my number if I give it) for the games and lets me know my results. I am 15 or older.', regBad: 'Enter your first name, tick the box (and check the number if you gave one).',
  pinNote: 'Write this code down (or take a screenshot)!', pinKeep: 'You’ll need it for every game. If you forget it, the quiz master can look it up or give you a new one.', pinLost: 'Forgot your code? (quiz master)', rescueAsk: 'Quiz master: enter your host code to give this player a new code.', noPhone: 'no phone',
  progT: 'Coming up at LA BULL', progScan: 'Scan to see what’s on', progLive: 'Show live', infoT: 'Practical info', closedL: 'Closed all day', progS: 'Our next nights', progB: 'What’s on', progAll: '📅 Full programme', progNext: 'Coming up at LA BULL',
  progNone: 'The programme is coming soon… follow us on Facebook!', resa: 'Booking required', fbFollow: 'Follow LA BULL on Facebook', callResa: 'Book: +33 7 68 11 79 87', open17: 'Open from 5 pm',
  fidT: 'Player of the month', fidS: 'Loyalty points', fidB: 'Player of the month', fidNone: 'No points yet this month. Play quizzes, polls and predictions!',
  fidRule: 'Each quiz or prediction played: 10 pts · poll: 5 pts · 1st: +30 · 2nd: +20 · 3rd: +10 · predictions: + your prediction points. Signed-up players (with their code) add up all their games.',
  fidPrize: '🎁 A free drink for the Player of the month!', fidGames: n => `${n} game${n > 1 ? 's' : ''}`, fidWins: n => `${n} win${n > 1 ? 's' : ''}`, fidReveal: 'Reveal the Player of the month', fidLead: 'Leading this month',
  tvB: 'Big screen', tvScan: 'Scan to play!', tvRecv: 'sheets received', tvRecvP: 'predictions received', tvRecvS: 'participants', tvNew: n => `🎉 New sheet: ${n}`, tvAuto: 'Auto', tvFull: 'Full screen', tvQR: 'QR', tvRank: 'Ranking', tvRes: 'Results', tvPod: 'Podium', tvWait: 'Waiting for the first sheets…', tvHint: 'Tip: plug or cast this phone / tablet to the bar TV (HDMI cable, AirPlay or Chromecast). Sheets scanned on this device show up live.',
  tmrL: '⏱ Timer per question', tmrOff: 'No timer', tmrUp: '⏱ Time’s up!', tmrLock: '⏱ Timed game: answers are final.', imgL: '🖼️ Question picture (optional)', imgPh: 'Picture link: https://…', imgTip: 'Long-press a picture on the internet → “Copy image address”, then paste it here.'
});
const FB_URL = 'https://www.facebook.com/labullmeetingpoint/';
const EVENTS = (() => { try { return JSON.parse($('#events-data').textContent); } catch (e) { return []; } })();
const upcomingEvents = () => EVENTS.filter(e => e.d >= todayISO()).sort((a, b) => a.d.localeCompare(b.d));
const MONTHS = { fr: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'], en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] };
const DAYS = { fr: ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'], en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] };
function dateTag(iso) { const d = new Date(iso + 'T12:00:00'); return `<span class="dtag"><small>${DAYS[lang][d.getDay()]}</small><b>${d.getDate()}</b><small>${MONTHS[lang][d.getMonth()]}</small></span>`; }
function evCard(e, mini) {
  return `<div class="evc${mini ? ' mini' : ''}" style="--c:${esc(e.c)}"><div class="evd">${dateTag(e.d)}</div><div class="evimg ${e.img ? 'evi-' + esc(e.img) : 'evi-none'}">${e.img ? '' : `<span>${(e.ch && e.ch[0] && e.ch[0][0]) || '🎉'}</span>`}</div>
   <div class="evt"><b>${esc(L(e.t))}</b><span>${esc(L(e.h))}</span>${mini ? '' : `<div class="chips">${(e.ch || []).map(c => `<em>${c[0]} ${esc(lang === 'fr' ? c[1] : c[2])}</em>`).join('')}</div>`}
   <p class="evm">${e.closed ? '🔒 ' + esc(t('closedL')) : (e.tm ? '🕔 ' + esc(L(e.tm)) : '🕔 ' + esc(t('open17'))) + (e.resa ? ` · <u>${esc(t('resa'))}</u>` : '')}</p></div></div>`;
}
function progQR() {
  const url = baseURL() + '#prog', f = document.createElement('div'); f.className = 'full';
  f.innerHTML = `<button class="btn small x">✕</button><img src="${LOGO}" style="width:90px;border-radius:50%"><h1 style="color:#8a4a12">📅 ${esc(t('progT'))}</h1>${qrSVG(url, 'M')}<p style="font-weight:700;font-size:20px;margin:0">${esc(T.fr.progScan)} · ${esc(T.en.progScan)}</p>`;
  f.querySelector('.x').onclick = () => f.remove(); document.body.appendChild(f);
}
function progHome() {
  const ev = upcomingEvents().slice(0, 3);
  return `<div class="ncard prh" style="--c:#f2b632"><div class="hc-h"><span class="hc-ic"><i class="ic-prog"></i></span><div class="hc-t"><small>${esc(t('progB'))}</small><b>${esc(t('progT'))}</b><span>${esc(t('progS'))}</span></div></div>
    <button class="prh-strip" id="prgo">${ev.length ? ev.map(e => `<span class="prh-ev" style="--c:${esc(e.c)}"><i class="${e.img ? 'evi-' + esc(e.img) : 'evi-none'}">${e.img ? '' : (e.ch && e.ch[0] && e.ch[0][0]) || '🎉'}</i>${dateTag(e.d)}</span>`).join('') : `<em>${esc(t('progNone'))}</em>`}</button>
    <div class="row nbtns"><button class="btn" id="prqr">▦ QR</button><button class="btn cbtn" id="prtv">📺 ${esc(t('progLive'))}</button></div></div>`;
}
function bindProgHome() {
  if (!$('#prgo')) return;
  $('#prgo').onclick = () => go('prog'); $('#prqr').onclick = progQR; $('#prtv').onclick = () => go('admin=tv::prog');
}
function programPage() {
  setAcc('#f2b632');
  const ev = upcomingEvents();
  app.innerHTML = topBar(t('progB')) + backBar() + band('prog', t('progT'), t('progS')) +
    (ev.length ? ev.map(e => evCard(e)).join('') : `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('progNone'))}</p></div>`) +
    (isHost() ? `<div class="row" style="margin-top:14px"><button class="btn" id="pq">▦ QR</button><button class="btn acc" id="pt">📺 ${esc(t('progLive'))}</button></div>` : '') + `<div class="info"><b>${esc(t('infoT'))}</b><p>📍 <a href="https://maps.google.com/?q=121+rue+des+Deux+C%C3%A8dres+24500+Serres-et-Montguyard" target="_blank" rel="noopener">121 rue des Deux Cèdres, 24500 Serres-et-Montguyard</a></p><p>🕔 ${esc(t('open17'))}</p><p>📞 <a href="tel:+33768117987">07 68 11 79 87</a></p></div><a class="btn fb" href="${FB_URL}" target="_blank" rel="noopener" style="margin-top:16px">👍 ${esc(t('fbFollow'))}</a><a class="btn ghost" href="tel:+33768117987" style="margin-top:10px">📞 ${esc(t('callResa'))}</a>`;
  if ($('#pq')) { $('#pq').onclick = progQR; $('#pt').onclick = () => go('admin=tv::prog'); }
}
function progTeaser() {
  const ev = upcomingEvents().slice(0, 2); if (!ev.length) return '';
  return `<div class="teaser"><p class="tz-t">📅 ${esc(t('progNext'))}</p>${ev.map(e => evCard(e, true)).join('')}<button class="btn ghost small" style="width:100%;margin-top:8px" onclick="location.hash='prog'">${esc(t('progAll'))}</button></div>`;
}

/* ---------- Fidélité ---------- */
const monthOf = (g, r) => (g.date || '').slice(0, 7) || new Date(r.ts || Date.now()).toISOString().slice(0, 7);
function loyalty(month) {
  const P = {};
  const add = (r, pts, win) => {
    const key = r.c && r.c.v ? 'c:' + normV(r.c) : 'n:' + String(r.t || '').trim().toLowerCase(); if (key === 'n:') return;
    const p = P[key] || (P[key] = { t: (r.c && r.c.n) || r.t, s: 0, g: 0, w: 0 }); p.s += pts; p.g++; if (win) p.w++;
  };
  allGames().forEach(g => {
    const all = Object.values(getRes(g.id)); if (!all.length) return;
    const k = kindOf(g);
    if (k === 'poll') return all.filter(r => r.t || r.c).forEach(r => { if (monthOf(g, r) === month) add(r, 5); });
    const rk = k === 'prono' ? pronoRanked(g) : ranked(g), sc = r => k === 'prono' ? r.pts : r.s, done = k !== 'prono' || !!getOut(g.id);
    const lv = [...new Set(rk.map(sc))];
    rk.forEach(r => { if (monthOf(g, r) !== month) return; const gi = done && sc(r) > 0 ? lv.indexOf(sc(r)) : 9; add(r, 10 + (k === 'prono' && done ? r.pts : 0) + ([30, 20, 10][gi] || 0), gi === 0); });
  });
  return Object.values(P).sort((a, b) => b.s - a.s || b.w - a.w || b.g - a.g);
}
const monthLabel = m => { const [y, mo] = m.split('-').map(Number); return new Date(y, mo - 1, 15).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { month: 'long', year: 'numeric' }); };
const shiftMonth = (m, d) => { const [y, mo] = m.split('-').map(Number); const x = new Date(y, mo - 1 + d, 15); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0'); };
function hostLoyalty(month) {
  setAcc('#f2b632');
  month = month || todayISO().slice(0, 7);
  const L1 = loyalty(month), top = L1[0];
  let pos = 0, prev = null;
  app.innerHTML = topBar(t('hostSpace')) + navBar() + band('fid', t('fidT'), monthLabel(month)) +
    `<div class="mnav"><button class="btn ghost small" id="mp">‹</button><b>${esc(monthLabel(month))}</b><button class="btn ghost small" id="mn">›</button></div>` +
    (top ? `<div class="crown"><i>👑</i><small>${esc(t('fidLead'))}</small><b>${esc(top.t)}</b><span>${top.s} pts · ${esc(t('fidGames')(top.g))}${top.w ? ' · ' + esc(t('fidWins')(top.w)) : ''}</span></div>
      <div class="row" style="margin:12px 0"><button class="btn" id="pod">🏆 ${esc(t('fidReveal'))}</button><button class="btn acc" id="tv">📺 ${esc(t('tvB'))}</button></div>
      <div class="card list" style="padding:4px 8px">${L1.map((p, i) => { if (p.s !== prev) { pos = i + 1; prev = p.s; } return `<div class="it"><span class="rank">${['🥇', '🥈', '🥉'][pos - 1] || pos}</span><span class="nm">${esc(p.t)}<small>${esc(t('fidGames')(p.g))}${p.w ? ' · ' + esc(t('fidWins')(p.w)) : ''}</small></span><span class="score">${p.s}<small style="font-size:14px;color:var(--muted)"> pts</small></span></div>`; }).join('')}</div>`
      : `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('fidNone'))}</p></div>`) +
    `<div class="card"><p class="chalk" style="font-size:24px;margin:0 0 6px;color:var(--gold)">${esc(t('fidPrize'))}</p><p class="muted" style="margin:0;font-size:14px">${esc(t('fidRule'))}</p></div>`;
  $('#mp').onclick = () => go('admin=fid:' + shiftMonth(month, -1)); $('#mn').onclick = () => go('admin=fid:' + shiftMonth(month, 1));
  if ($('#pod')) $('#pod').onclick = () => podiumShow(t('fidT') + ' · ' + monthLabel(month), L1.map(p => ({ t: p.t, s: p.s })), 'pts');
  if ($('#tv')) $('#tv').onclick = () => go('admin=tv::fid');
}

/* ---------- Grand écran ---------- */
function stopTimers() { window.onresize = null; clearInterval(window._tvT); clearInterval(window._qT); clearTimeout(window._tvA); document.body.classList.remove('tvmode'); }
function hostTV(g, first) {
  stopTimers(); document.body.classList.add('tvmode'); setAcc(g ? g.color : '#f2b632');
  const k = g ? kindOf(g) : 'hub';
  const views = g ? ['qr', 'rank', 'prog', 'fid'] : ['qr', 'fid', 'prog'];
  let view = views.includes(first) ? first : 'qr', auto = false, last = null, seen = null, url = '';
  const resOf = () => g ? Object.values(getRes(g.id)) : allGames().filter(x => isProno(x) && isActive(x)).flatMap(x => Object.values(getRes(x.id)));
  const title = g ? gTitle(g) : 'LA BULL';
  app.innerHTML = `<div class="tv"><div class="tv-stage"><i class="pod-spot"></i><header class="tv-h"><img src="${LOGO}" alt="LA BULL"><div><b>${esc(title)}</b><span>${g && g.date ? esc(fmtDate(g.date)) : 'LA BULL · Serres-et-Montguyard'}</span></div></header><main class="tv-m" id="tvm"></main>
    <footer class="tv-f">${views.map(v => `<button data-v="${v}">${{ qr: '▦ ' + t('tvQR'), rank: '🏆 ' + (k === 'poll' ? t('tvRes') : t('tvRank')), prog: '📅 ' + t('progB'), fid: '👑 ' + t('fidB') }[v]}</button>`).join('')}${g && k !== 'poll' ? `<button data-pod>🥇 ${esc(t('tvPod'))}</button>` : ''}<button data-auto>🔁 ${esc(t('tvAuto'))}</button><button data-fs>⛶</button><button data-x>✕</button></footer></div></div>`;
  const stage = app.querySelector('.tv-stage');
  const fit = () => { const por = innerHeight > innerWidth * 1.1, W = por ? 900 : 1600, H = por ? 1600 : 900, kk = Math.min(innerWidth / W, innerHeight / H); stage.classList.toggle('por', por); stage.style.width = W + 'px'; stage.style.height = H + 'px'; stage.style.transform = `translate(-50%,-50%) scale(${kk})`; };
  fit(); window.onresize = fit;
  const m = $('#tvm');
  const names = rs => rs.slice().sort((a, b) => b.ts - a.ts).map(r => r.t || (r.c && r.c.n)).filter(Boolean);
  const render = () => {
    const rs = resOf(); if (!g) app.querySelector('.tv-h b').textContent = view === 'qr' ? t('hubT') : view === 'prog' ? t('progT') : view === 'fid' ? t('fidT') : 'LA BULL';
    app.querySelectorAll('[data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === view));
    if (view === 'qr') {
      const nm = names(rs).slice(0, 10);
      m.innerHTML = `<div class="tv-qr"><div class="tv-code">${url ? qrSVG(url, 'M') : ''}<p>${esc(t('tvScan'))}</p></div><div class="tv-live"><b class="tv-n">${rs.length}</b><span>${esc(k === 'prono' || k === 'hub' ? t('tvRecvP') : k === 'poll' ? t('tvRecvS') : t('tvRecv'))}</span>
        <div class="tv-names">${nm.length ? nm.map((n, i) => `<em class="${i === 0 && seen !== null && rs.length > seen ? 'new' : ''}">${esc(n)}</em>`).join('') : `<p class="pod-tap">${esc(t('tvWait'))}</p>`}</div></div></div>`;
    } else if (view === 'rank') {
      if (k === 'poll') {
        const qs = g.questions.map((q, i) => [q, i]).filter(([q]) => ['single', 'multi', 'stars'].includes(qType(g, q))).slice(0, 2);
        m.innerHTML = `<div class="tv-poll">${qs.map(([q, i]) => { const ty = qType(g, q), vals = rs.map(r => (r.a || [])[i]).filter(v => answered(v) && okVal(ty, v)); return `<div class="tv-pq"><p>${esc(L(q.q))}</p>${ty === 'stars' ? [5, 4, 3, 2, 1].map(s => bar('★'.repeat(s), vals.filter(v => v === s).length, vals.length)).join('') : q.o.map((o, j) => bar(L(o), vals.filter(v => ty === 'multi' ? v.includes(j) : v === j).length, vals.length)).join('')}</div>`; }).join('')}</div>`;
      } else {
        const pr = k === 'prono', out = pr && getOut(g.id), rk = pr ? pronoRanked(g) : ranked(g), N = g.questions.length; let pos = 0, prev = null;
        m.innerHTML = rk.length ? `<div class="tv-rank" style="grid-template-rows:repeat(${Math.ceil(Math.min(10, rk.length) / 2)},auto)">${rk.slice(0, 10).map((r, i) => { const s = pr ? r.pts : r.s; if (s !== prev) { pos = i + 1; prev = s; } return `<div class="tv-row" style="animation-delay:${i * 90}ms"><span class="rank">${['🥇', '🥈', '🥉'][pos - 1] || pos}</span><b>${esc(r.t)}</b><span class="score">${pr && !out ? esc(scoreQs(g).length === 1 && answered(r.a[scoreQs(g)[0][1]]) ? r.a[scoreQs(g)[0][1]].join(' – ') : '✔') : s + (pr ? ' pts' : ' / ' + N)}</span></div>`; }).join('')}</div>` : `<p class="pod-tap">${esc(t('tvWait'))}</p>`;
      }
    } else if (view === 'prog') {
      const ev = upcomingEvents().slice(0, stage.classList.contains('por') ? 4 : 4);
      m.innerHTML = `${g ? `<p class="tv-st">${esc(t('progT'))}</p>` : ''}<div class="tv-prog">${ev.map(e => evCard(e)).join('')}</div><div class="tv-pqr">${qrSVG(baseURL() + '#prog', 'L')}<span>${esc(t('progScan'))}</span></div>`;
    } else if (view === 'fid') {
      const mo = g && g.date ? g.date.slice(0, 7) : todayISO().slice(0, 7), L1 = loyalty(mo).slice(0, 6);
      m.innerHTML = `<p class="tv-st">👑 ${esc(t('fidT'))} · ${esc(monthLabel(mo))}</p>${L1.length ? `<div class="tv-rank" style="grid-template-rows:repeat(${Math.ceil(L1.length / 2)},auto)">${L1.map((p, i) => { const ps = L1.findIndex(x => x.s === p.s) + 1; return `<div class="tv-row" style="animation-delay:${i * 90}ms"><span class="rank">${['🥇', '🥈', '🥉'][ps - 1] || ps}</span><b>${esc(p.t)}</b><span class="score">${p.s} pts</span></div>`; }).join('')}</div>` : `<p class="pod-tap">${esc(t('fidNone'))}</p>`}<p class="tv-prize">${esc(t('fidPrize'))}</p>`;
    }
    if (seen !== null && rs.length > seen) { const n = names(rs)[0]; if (n) { const b = document.createElement('div'); b.className = 'tv-toast'; b.textContent = t('tvNew')(n); stage.appendChild(b); setTimeout(() => b.remove(), 3500); confetti(); } }
    seen = rs.length;
  };
  const sig = () => JSON.stringify(resOf().map(r => [r.t, r.ts, r.a]));
  (async () => { url = g ? (await joinURL(g)).url : baseURL() + '#p'; last = sig(); render(); })();
  window._tvT = setInterval(() => { if (!document.body.classList.contains('tvmode')) return clearInterval(window._tvT); const s = sig(); if (s !== last) { last = s; render(); } }, 2000);
  const rotate = () => { clearTimeout(window._tvA); if (!auto) return; window._tvA = setTimeout(() => { view = views[(views.indexOf(view) + 1) % views.length]; render(); rotate(); }, view === 'qr' ? 25000 : 15000); };
  app.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { view = b.dataset.v; render(); rotate(); });
  app.querySelector('[data-auto]').onclick = e => { auto = !auto; e.currentTarget.classList.toggle('on', auto); rotate(); };
  app.querySelector('[data-fs]').onclick = () => { const d = document.documentElement; try { document.fullscreenElement ? document.exitFullscreen() : (d.requestFullscreen || d.webkitRequestFullscreen).call(d); } catch (e) {} };
  app.querySelector('[data-x]').onclick = () => { stopTimers(); try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {} history.length > 1 ? history.back() : go(''); };
  const pb = app.querySelector('[data-pod]');
  if (pb) pb.onclick = () => { const pr = k === 'prono', rk = pr ? pronoRanked(g) : ranked(g); podiumShow(title, rk.map(r => ({ t: r.t, s: pr ? r.pts : r.s })), pr ? 'pts' : '/ ' + g.questions.length); };
}
function tvIntro(g) {
  modal(`<h3 class="center">📺 ${esc(t('tvB'))}</h3><p class="muted" style="font-size:14px">${esc(t('tvHint'))}</p><button class="btn" id="tvgo">📺 ${esc(t('tvB'))}</button><button class="btn ghost small" data-c style="margin-top:10px;width:100%">${esc(t('close'))}</button>`,
    md => { md.querySelector('#tvgo').onclick = () => { md.remove(); go('admin=tv:' + (g ? g.id : '')); }; md.querySelector('[data-c]').onclick = () => md.remove(); });
}

/* ---------- Chrono ---------- */
const timed = g => kindOf(g) === 'quiz' && +g.timer > 0;
function startQTimer(g, st, i, save) {
  st.tm = st.tm || {}; if (!st.tm[i]) { st.tm[i] = Date.now() + g.timer * 1000; save(); }
  const el = $('#tmr'); if (!el) return;
  const tick = () => {
    const left = Math.max(0, st.tm[i] - Date.now()), s = Math.ceil(left / 1000);
    el.querySelector('b').textContent = s; el.querySelector('i').style.width = (left / (g.timer * 1000) * 100) + '%'; el.classList.toggle('hot', s <= 5);
    if (left <= 0) {
      clearInterval(window._qT); app.querySelectorAll('[data-o]').forEach(b => b.disabled = true);
      if (st.i === i) { toast(t('tmrUp'), false); setTimeout(() => { if (st.i === i) { st.i = i + 1; save(); playerQ(g, st); } }, 900); }
    }
  };
  clearInterval(window._qT); tick(); window._qT = setInterval(tick, 200);
}

/* ================= QUIZ LIST (plus récent → plus ancien) ================= */
const QX = {
  fr: { sub: 'Du plus récent au plus ancien', week: '⭐ Le quiz de la semaine', weekNone: 'Pas encore de quiz prévu cette semaine.', next: '🔮 La semaine prochaine', nextQ: 'Quiz du jeudi', nextSoon: 'Le thème sera dévoilé bientôt !', nextT: 'Thème de la soirée', prep: '💡 Le quiz arrive bientôt sur ce thème', closedQ: '🔒 Pas de quiz : LA BULL est fermée ce jeudi-là', later: '📆 Aussi au programme', prev: '📚 Quiz précédents', free: '🎁 Quiz à thème · sans date', sheets: n => `${n} fiche${n > 1 ? 's' : ''}`, open: 'Ouvrir' },
  en: { sub: 'Newest to oldest', week: '⭐ This week’s quiz', weekNone: 'No quiz planned this week yet.', next: '🔮 Next week', nextQ: 'Thursday Quiz', nextSoon: 'Theme revealed soon!', nextT: 'Theme of the night', prep: '💡 Quiz on this theme coming soon', closedQ: '🔒 No quiz: LA BULL is closed that Thursday', later: '📆 Also coming up', prev: '📚 Previous quizzes', free: '🎁 Themed quizzes · any time', sheets: n => `${n} sheet${n > 1 ? 's' : ''}`, open: 'Open' }
};
const qx = k => QX[lang][k] || QX.fr[k];
const isoAdd = (iso, n) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const nextThursdayAfter = iso => { let d = isoAdd(iso, 1); while (new Date(d + 'T12:00:00Z').getUTCDay() !== 4) d = isoAdd(d, 1); return d; };
function quizRow(g) {
  const n = Object.keys(getRes(g.id)).length, id = esc(g.id);
  return `<div class="qrow" style="--c:${esc(g.color || '#f6b81e')}"><button class="qrow-h" data-qx="${id}">${g.date ? dateTag(g.date) : '<span class="dtag"><b>🎁</b></span>'}<span class="qrow-t"><b>${esc(gTitle(g))}</b><small>${esc(t('qCount')(g.questions.length))}${n ? ' · ' + esc(qx('sheets')(n)) : ''}</small></span><i>›</i></button><div class="qrow-b" hidden>${hostCard(g)}</div></div>`;
}
function quizList() {
  setAcc();
  const today = todayISO(), asc = (a, b) => a.date.localeCompare(b.date);
  const gs = allGames().filter(g => kindOf(g) === 'quiz');
  const dated = gs.filter(g => g.date), free = gs.filter(g => !g.date);
  const up = dated.filter(g => (g.until || g.date) >= today).sort(asc);
  const past = dated.filter(g => (g.until || g.date) < today).sort((a, b) => b.date.localeCompare(a.date));
  const feat = up[0] || null;
  const nThu = nextThursdayAfter(feat ? feat.date : today);
  let later = up.slice(1);
  const nextGame = later.find(g => g.date <= nThu);
  later = later.filter(g => g !== nextGame);
  let teaser;
  if (nextGame) teaser = hostCard(nextGame);
  else {
    const ev = EVENTS.find(e => e.d === nThu);
    const e = ev || { d: nThu, c: '#8e24aa', img: '', t: { fr: QX.fr.nextQ, en: QX.en.nextQ }, h: { fr: QX.fr.nextSoon, en: QX.en.nextSoon }, ch: [['💡', 'Quiz du jeudi', 'Thursday quiz']] };
    teaser = evCard(e, true) + `<p class="qnote">${esc(ev && ev.closed ? qx('closedQ') : ev ? qx('prep') : qx('nextSoon'))}</p>`;
  }
  app.innerHTML = topBar(t('hostSpace')) + navBar() + band('quiz', t('quizzes'), qx('sub')) + `
   ${quizHubCard()}<p class="sec">${esc(qx('week'))}</p>${feat ? hostCard(feat) : `<div class="card center"><p class="chalk" style="font-size:22px;margin:0">${esc(qx('weekNone'))}</p></div>`}
   <p class="sec">${esc(qx('next'))}</p><div class="qnext">${teaser}</div>
   ${later.length ? `<p class="sec">${esc(qx('later'))}</p>` + later.map(quizRow).join('') : ''}
   ${past.length ? `<p class="sec">${esc(qx('prev'))}</p>` + past.map(quizRow).join('') : ''}
   ${free.length ? `<p class="sec">${esc(qx('free'))}</p>` + free.map(quizRow).join('') : ''}
   <button class="btn ghost small" id="cr2" style="width:100%;margin-top:16px">➕ ${esc(t('create'))} · ${esc(t('quizzes'))}</button>`;
  app.querySelectorAll('[data-qx]').forEach(b => b.onclick = () => { const body = b.nextElementSibling; body.hidden = !body.hidden; b.classList.toggle('on', !body.hidden); });
  bindCards();
  $('#qhqr').onclick = quizHubQR; $('#qhgo').onclick = async () => { const u = await weekQuizURL(); location.hash = u.split('#')[1]; };
  $('#cr2').onclick = () => go('admin=edit::quiz');
}

/* ================= QUIZ DU JEUDI : page joueurs (#q) ================= */
Object.assign(QX.fr, { hubT: 'Quiz du jeudi', hubS: 'Le quiz de ce soir et celui de la semaine prochaine', play: '▶ Jouer au quiz', played: '✅ Déjà joué · voir mon QR', soon: d => `Rendez-vous ${d} pour jouer !`, noneNow: 'Pas de quiz ce soir… mais restez dans le coin !', nextAnn: '🔮 Jeudi prochain', prog: '📅 Tout le programme de LA BULL', qrCard: 'QR à flasher', qrCardS: 'Les joueurs arrivent sur le quiz du soir + l’annonce de jeudi prochain', scanQ: 'Scannez pour jouer !' });
Object.assign(QX.en, { hubT: 'Thursday Quiz', hubS: 'Tonight’s quiz and next week’s', play: '▶ Play the quiz', played: '✅ Already played · see my QR', soon: d => `See you ${d} to play!`, noneNow: 'No quiz tonight… but stick around!', nextAnn: '🔮 Next Thursday', prog: '📅 Everything on at LA BULL', qrCard: 'QR to show', qrCardS: 'Players land on tonight’s quiz + next Thursday’s teaser', scanQ: 'Scan to play!' });
function weekQuiz() {
  const h = new Date().getHours(), from = h < 6 ? isoAdd(todayISO(), -1) : todayISO();
  return allGames().filter(g => kindOf(g) === 'quiz' && g.date && (g.until || g.date) >= from).sort((a, b) => a.date.localeCompare(b.date))[0] || null;
}
function nextTeaser(g, nThu) {
  const ng = allGames().find(x => x !== g && kindOf(x) === 'quiz' && x.date && x.date > (g ? g.date : todayISO()) && x.date <= nThu);
  const ev = EVENTS.find(e => e.d === nThu);
  if (ng) return { game: ng, html: evCard({ d: ng.date, c: ng.color || '#8e24aa', img: ev && !ev.closed ? ev.img : '', t: ng.title, h: ng.sub, ch: [['💡', 'Quiz du jeudi', 'Thursday quiz']] }, true) };
  const e = ev || { d: nThu, c: '#8e24aa', img: '', t: { fr: QX.fr.nextQ, en: QX.en.nextQ }, h: { fr: QX.fr.nextSoon, en: QX.en.nextSoon }, ch: [['💡', 'Quiz du jeudi', 'Thursday quiz']] };
  return { game: null, html: evCard(e, true) + `<p class="qnote">${esc(ev && ev.closed ? qx('closedQ') : ev ? qx('prep') : qx('nextSoon'))}</p>` };
}
async function weekQuizURL() { const g = weekQuiz(); if (!g) return baseURL() + '#q'; const j = await joinURL(g); return j.embedded ? baseURL() + '#q' : baseURL() + '#q=' + j.url.split('#j=')[1]; }
function quizHub(v) {
  setAcc('#8e24aa');
  const g = weekQuiz(), today = todayISO(), nThu = nextThursdayAfter(g ? g.date : today);
  const open = g && (g.date <= today || isHost());
  const st = g && LS.get('lb_play_' + g.id, null), done = st && st.done;
  const tz = nextTeaser(g, nThu);
  app.innerHTML = topBar(qx('hubT')) + backBar() + band('quiz', qx('hubT'), qx('hubS')) +
    (g ? `<div class="ncard" style="--c:${esc(g.color || '#8e24aa')}"><div class="hc-h"><span class="hc-ic"><i class="ic-quiz"></i></span><div class="hc-t"><small>${esc(fmtDate(g.date))}</small><b>${esc(gTitle(g))}</b><span>${esc(L(g.sub))}</span></div></div>
      ${open ? `<button class="btn ${done ? 'ghost' : 'acc'}" id="qplay" style="margin-top:14px;font-size:20px">${esc(done ? qx('played') : qx('play'))}</button>` : `<p class="qnote center" style="font-size:17px">${esc(qx('soon')(fmtDate(g.date)))}</p>`}</div>`
      : `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(qx('noneNow'))}</p></div>`) +
    `<p class="sec">${esc(qx('nextAnn'))}</p><div class="qnext">${tz.html}</div>
     <button class="btn ghost" id="qprog" style="margin-top:18px">${esc(qx('prog'))}</button>`;
  if ($('#qplay')) $('#qplay').onclick = () => { const p = (v || '').split('*'); go('j=' + (v && decodeURIComponent(p[0]) === g.id ? v : encodeURIComponent(g.id))); };
  $('#qprog').onclick = () => go('prog');
}
async function quizHubQR() {
  const url = await weekQuizURL(), f = document.createElement('div'); f.className = 'full';
  f.innerHTML = `<button class="btn small x">✕</button><img src="${LOGO}" style="width:80px;border-radius:14px"><h1 style="color:#8e24aa">💡 ${esc(QX.fr.hubT)} · ${esc(QX.en.hubT)}</h1>${qrSVG(url, 'M')}<p style="font-weight:700;font-size:20px;margin:0">${esc(QX.fr.scanQ)} · ${esc(QX.en.scanQ)}</p><button class="btn ghost small" data-here style="width:min(88vw,420px)">▶ ${esc(t('openHere'))}</button>`;
  f.querySelector('.x').onclick = () => f.remove(); f.querySelector('[data-here]').onclick = () => { f.remove(); location.hash = url.split('#')[1]; };
  document.body.appendChild(f);
}
function quizHubCard() {
  return `<div class="ncard" style="--c:#8e24aa"><div class="hc-h"><span class="hc-ic"><i class="ic-quiz"></i></span><div class="hc-t"><small>${esc(qx('qrCard'))}</small><b>${esc(qx('hubT'))}</b><span>${esc(qx('qrCardS'))}</span></div></div>
     <div class="row nbtns"><button class="btn" id="qhqr">▦ QR</button><button class="btn cbtn" id="qhgo">▶ ${esc(t('openHere'))}</button></div></div>`;
}
