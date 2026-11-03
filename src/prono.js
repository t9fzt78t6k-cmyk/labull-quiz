/* ================= PRONOSTICS ================= */
const isProno = g => kindOf(g) === 'prono';
const teamA = g => L(g.teams?.a) || 'A', teamB = g => L(g.teams?.b) || 'B';
const qA = (g, q) => q && q.teams ? L(q.teams.a) : teamA(g), qB = (g, q) => q && q.teams ? L(q.teams.b) : teamB(g);
const scoreQs = g => g.questions.map((q, i) => [q, i]).filter(([q]) => q.type === 'score');
const gTitle = g => g.teams ? `${teamA(g)} – ${teamB(g)}` : L(g.title);
const outKey = id => 'lb_out_' + id;
const getOut = id => {
  const loc = LS.get(outKey(id), null), g = BUILTIN.find(x => x.id === id), b = g && g.out;
  if (!b) return loc; if (!loc) return b.slice();
  return b.map((v, i) => answered(loc[i]) ? loc[i] : v);
};
const outCount = g => { const o = getOut(g.id); return o ? scoreQs(g).filter(([, i]) => answered(o[i])).length : 0; };
async function fetchResults(g) {
  toast('🔄 ' + t('fetching'));
  try {
    const txt = await (await fetch(location.pathname + '?r=' + Date.now(), { cache: 'no-store' })).text();
    const mm = txt.match(/<script id="games-data" type="application\/json">([\s\S]*?)<\/script>/);
    const fresh = JSON.parse(mm[1]); const fg = g && fresh.find(x => x.id === g.id);
    const before = g ? outCount(g) : 0;
    const after = fg && fg.out ? scoreQs(fg).filter(([, i]) => answered(fg.out[i])).length : 0;
    const total = fresh.filter(x => x.kind === 'prono' && x.out).length;
    if (g ? after > before : total) { toast('✔ ' + t('fetchedOk')); setTimeout(() => location.replace(location.pathname + '?v=' + Date.now() + location.hash), 700); }
    else toast(t('fetchedNone'), false);
  } catch (e) { toast(t('fetchErr'), false); }
}
const sgn = x => x > 0 ? 1 : x < 0 ? -1 : 0;
function pronoPoints(g, a, out) {
  let pts = 0, d1 = 0, d2 = 0; const per = [];
  g.questions.forEach((q, i) => {
    const ty = q.type || 'single', r = out ? out[i] : null, p = a[i]; let got = 0;
    if (!answered(r)) { per.push(null); return; }
    if (ty === 'score') {
      if (answered(p)) {
        if (sgn(p[0] - p[1]) === sgn(r[0] - r[1])) { got += 3; if (p[0] - p[1] === r[0] - r[1]) got += 2; if (p[0] === r[0] && p[1] === r[1]) got += 5; }
        d1 += Math.abs(p[0] - r[0]) + Math.abs(p[1] - r[1]);
      } else d1 += 99;
    } else if (ty === 'number') { if (answered(p)) { if (+p === +r) got = 1; d2 += Math.abs(+p - +r); } else d2 += 999; }
    else if (ty === 'multi') { if (answered(p) && [...p].sort().join() === [...r].sort().join()) got = 1; }
    else if (p === r) got = 1;
    pts += got; per.push(got);
  });
  return { pts, d1, d2, per };
}
function pronoRanked(g) {
  const out = getOut(g.id);
  return Object.values(getRes(g.id)).map(r => ({ ...r, ...pronoPoints(g, r.a, out) })).sort((x, y) => y.pts - x.pts || x.d1 - y.d1 || x.d2 - y.d2 || x.ts - y.ts);
}
function presets(sport, A, B) {
  const P = (fr, en) => ({ fr, en }), yes = [P('Oui', 'Yes'), P('Non', 'No')], teams = [P(A, A), P(B, B)];
  const S = (fr, en, o) => ({ type: 'single', q: P(fr, en), o }), N = (fr, en) => ({ type: 'number', q: P(fr, en), o: [] });
  if (sport === 'rugby') return [
    S('Qui marquera le premier essai ?', 'Who will score the first try?', [...teams, P('Aucun essai', 'No try')]),
    N('Combien d’essais au total dans le match ?', 'How many tries in total?'),
    S('Qui mène à la mi-temps ?', 'Who leads at half-time?', [...teams, P('Égalité', 'Draw')]),
    S('Y aura-t-il un carton jaune ?', 'Will there be a yellow card?', yes),
    S('Un drop sera-t-il réussi ?', 'Will a drop goal be scored?', yes),
    S('Plus de 50 points au total dans le match ?', 'More than 50 points in total?', yes),
    N('À quelle minute le premier essai ?', 'In which minute will the first try be scored?'),
    S('Le cri de la soirée au bar sera…', 'The shout of the night at the bar will be…', [P('« Arbitre !!! »', '“Ref!!!”'), P('« Essaiiii ! »', '“Tryyyy!”'), P('« Mais il est où le ballon ?! »', '“Where’s the ball?!”')])];
  if (sport === 'foot') return [
    S('Qui marquera le premier but ?', 'Who will score the first goal?', [...teams, P('Pas de but', 'No goal')]),
    N('Combien de buts au total ?', 'How many goals in total?'),
    S('Qui mène à la mi-temps ?', 'Who leads at half-time?', [...teams, P('Égalité', 'Draw')]),
    S('Y aura-t-il un penalty ?', 'Will there be a penalty?', yes),
    S('Y aura-t-il un carton rouge ?', 'Will there be a red card?', yes),
    N('À quelle minute le premier but ?', 'In which minute will the first goal be scored?'),
    S('Le cri de la soirée au bar sera…', 'The shout of the night at the bar will be…', [P('« Arbitre !!! »', '“Ref!!!”'), P('« Buuuut ! »', '“Goooal!”'), P('« Hors-jeu ! »', '“Offside!”')])];
  return [S('Qui gagne ?', 'Who wins?', [...teams, P('Égalité', 'Draw')])];
}
const SPORT_ICON = { rugby: '🏉', foot: '⚽', other: '🏆' };
function scoreQ(g) { return { type: 'score', q: { fr: `Score final : ${teamA(g)} – ${teamB(g)} ?`, en: `Final score: ${teamA(g)} – ${teamB(g)}?` }, o: [] }; }
function stepper(id, v, label) {
  return `<div style="flex:1;text-align:center"><p class="chalk" style="font-size:24px;margin:0 0 6px;line-height:1.1;min-height:2.2em;display:flex;align-items:flex-end;justify-content:center">${esc(label)}</p>
   <div style="display:flex;align-items:center;justify-content:center;gap:4px"><button class="btn small" data-st="${id}" data-d="-1" style="width:42px;padding:8px 0;font-size:24px">−</button>
   <input class="in" data-sv="${id}" inputmode="numeric" value="${v == null ? '' : v}" placeholder="–" style="width:62px;text-align:center;font-family:var(--title);font-size:30px;padding:6px 2px">
   <button class="btn small" data-st="${id}" data-d="1" style="width:42px;padding:8px 0;font-size:24px">+</button></div></div>`;
}

function hostProno(g) {
  setAcc(g.color);
  const out = getOut(g.id), rk = pronoRanked(g), N = rk.length, sq = scoreQs(g), multi = sq.length > 1, si = sq.length ? sq[0][1] : -1;
  const predTxt = r => multi ? `${sq.filter(([, i]) => answered(r.a[i])).length}/${sq.length} ${t('matches')}` : (si >= 0 && answered(r.a[si]) ? r.a[si].join(' – ') : '–');
  const trend = sq.map(([q, i]) => { const sc = rk.map(r => r.a[i]).filter(answered); return sc.length ? `<p style="font-weight:700;margin:10px 0 2px">${esc(qA(g, q))} – ${esc(qB(g, q))}</p>` + bar(qA(g, q), sc.filter(s => s[0] > s[1]).length, sc.length) + bar(t('draw0'), sc.filter(s => s[0] === s[1]).length, sc.length) + bar(qB(g, q), sc.filter(s => s[0] < s[1]).length, sc.length) : ''; }).join('');
  const results = out ? sq.filter(([, i]) => answered(out[i])).map(([q, i]) => `<p class="score" style="font-size:${multi ? 22 : 40}px;margin:2px 0">${esc(qA(g, q))} ${out[i][0]} – ${out[i][1]} ${esc(qB(g, q))}</p>`).join('') : '';
  let pos = 0, prev = null;
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 style="font-size:28px">${SPORT_ICON[g.sport] || '🏆'} ${esc(gTitle(g))}</h1>
   <p class="muted">${esc(fmtDate(g.date))}${g.time ? ' · ' + esc(g.time) : ''} · <b style="color:var(--gold2)">${esc(t('pronos')(N))}</b></p>
   ${results ? `<div class="card center"><p class="muted" style="margin:0">${esc(t('finalScore'))}</p>${results}</div>` : ''}
   <button class="btn" id="out">📝 ${esc(out ? t('editOut') : t('enterOut'))}</button>
   <div class="row" style="margin:10px 0 0"><button class="btn ghost small" id="rcv">📥 ${esc(t('recvS'))}</button><button class="btn ghost small" id="qr2">📲 QR</button><button class="btn ghost small" id="fr">🔄 ${esc(t('fetchBtn'))}</button><button class="btn ghost small" id="tvb">📺 ${esc(t('tvB'))}</button><button class="btn ghost small" id="csv">📇 ${esc(t('csv'))}</button></div>
   ${!N ? `<div class="card center"><p class="muted">${esc(t('noRes'))}</p></div>` : out ? `<div class="row" style="margin:12px 0"><button class="btn" id="pod">🏆 ${esc(t('podB'))}</button><button class="btn acc" id="dr">🎁 ${esc(t('draw'))}</button></div><div class="card list" style="padding:4px 8px">` + rk.map((r, i) => { if (r.pts !== prev) { pos = i + 1; prev = r.pts; } const medal = ['🥇', '🥈', '🥉'][pos - 1] || pos; return `<div class="it" data-i="${i}"><span class="rank">${medal}</span><span class="nm">${esc(r.t)}<small>${esc(predTxt(r))} · ${esc(t('details'))} ›</small></span><span class="score">${r.pts}<small style="font-size:15px;color:var(--muted)"> pts</small></span></div>`; }).join('') + `</div><p class="muted" style="font-size:13px">${esc(t('tieRule'))}</p>`
     : `${trend ? `<div class="card"><p style="font-weight:700;margin-top:0">${esc(t('trend'))}</p>${trend}</div>` : ''}<div class="card list" style="padding:4px 8px">` + [...rk].sort((x, y) => x.ts - y.ts).map(r => `<div class="it" data-k="${esc(r.k || r.t.trim().toLowerCase())}"><span class="nm">${esc(r.t)}<small>${fmtTime(r.ts)}</small></span><span class="score" style="font-size:${multi ? 18 : 26}px">${esc(predTxt(r))}</span></div>`).join('') + `</div>`}
   <div class="card"><p style="font-weight:700;margin-top:0">📏 ${esc(t('ptsTitle'))}</p><p class="muted" style="margin:0;font-size:14px">${esc(multi ? t('ptsRuleM') : t('ptsRule'))}</p></div>` + resetBox();
  $('#out').onclick = () => go('admin=out:' + g.id);
  app.querySelectorAll('.it').forEach(el => el.onclick = () => go('admin=team:' + g.id + ':' + encodeURIComponent(el.dataset.k || rk[+el.dataset.i].k || rk[+el.dataset.i].t.trim().toLowerCase())));
  if ($('#dr')) $('#dr').onclick = () => drawModal([{ label: t('drawTop'), names: rk.filter(r => r.pts === rk[0].pts).map(r => r.t) }, { label: t('drawAll'), names: rk.map(r => r.t) }]);
  if ($('#pod')) $('#pod').onclick = () => podiumShow(gTitle(g), rk.map(r => ({ t: r.t, s: r.pts })), t('pts'));
  if ($('#tvb')) $('#tvb').onclick = () => tvIntro(g);
  $('#rcv').onclick = () => receiveHelp(g); $('#qr2').onclick = () => showQR(g); $('#csv').onclick = () => contactsCSV(g); $('#fr').onclick = () => fetchResults(g);
  bindReset(g, () => hostProno(g));
}
function hostOutcome(g) {
  setAcc(g.color);
  const out = getOut(g.id) || Array(g.questions.length).fill(null);
  const draw = () => {
    app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 style="font-size:28px">📝 ${esc(t('enterOut'))}</h1><p class="muted">${esc(gTitle(g))} · ${esc(t('outHint'))}</p>` +
      g.questions.map((q, i) => { const ty = q.type || 'single';
        let body = '';
        if (ty === 'score') body = `<div style="display:flex;gap:8px">${stepper(i + 'a', out[i] ? out[i][0] : null, qA(g, q))}${stepper(i + 'b', out[i] ? out[i][1] : null, qB(g, q))}</div>`;
        else if (ty === 'number') body = `<div style="display:flex">${stepper(i + 'n', out[i], '')}</div>`;
        else body = q.o.map((o, j) => `<button class="opt ${out[i] === j ? 'sel' : ''}" data-oi="${i}" data-oj="${j}" style="padding:8px 12px;font-size:16px"><span class="L" style="width:36px;height:36px;font-size:18px">${LETTERS[j]}</span><span>${esc(L(o))}</span></button>`).join('');
        return `<div class="card qe"><p style="font-weight:700;margin:0 0 8px">${i + 1}. ${esc(L(q.q))}</p>${body}</div>`; }).join('') +
      `<div class="row"><button class="btn ghost" id="cx">✕ ${esc(t('cancelS'))}</button><button class="btn" id="sv">💾 ${esc(t('saveOut'))}</button></div>`;
    $('#cx').onclick = () => go('admin=rank:' + g.id);
    app.querySelectorAll('[data-oi]').forEach(b => b.onclick = () => { const i = +b.dataset.oi, j = +b.dataset.oj; out[i] = out[i] === j ? null : j; draw(); });
    const val = id => { const el = app.querySelector(`[data-sv="${id}"]`); return el.value === '' ? null : Math.max(0, parseInt(el.value, 10) || 0); };
    const sync = () => g.questions.forEach((q, i) => { const ty = q.type || 'single'; if (ty === 'score') { const a = val(i + 'a'), b = val(i + 'b'); out[i] = a == null || b == null ? null : [a, b]; } if (ty === 'number') out[i] = val(i + 'n'); });
    app.querySelectorAll('[data-st]').forEach(b => b.onclick = () => { const id = b.dataset.st, el = app.querySelector(`[data-sv="${id}"]`); el.value = Math.max(0, (parseInt(el.value, 10) || 0) + +b.dataset.d); if (/[ab]$/.test(id)) { const o = app.querySelector(`[data-sv="${id.slice(0, -1) + (id.endsWith('a') ? 'b' : 'a')}"]`); if (o && o.value === '') o.value = 0; } sync(); });
    app.querySelectorAll('[data-sv]').forEach(el => el.oninput = sync);
    $('#sv').onclick = () => { sync(); LS.set(outKey(g.id), out); toast('✔ ' + t('saveOut')); go('admin=rank:' + g.id); };
  };
  draw();
}
function hostPronoTeam(g, key) {
  setAcc(g.color);
  const r = getRes(g.id)[key]; if (!r) return go('admin=rank:' + g.id);
  const out = getOut(g.id), res = pronoPoints(g, r.a, out);
  const rk = pronoRanked(g), pos = rk.findIndex(x => (x.k || x.t.trim().toLowerCase()) === key) + 1;
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<div class="card center"><p style="font-size:24px;font-weight:700;margin:0">${esc(r.t)}</p><p class="score" style="font-size:48px;margin:0">${out ? res.pts + ' pts' : '…'}</p><p class="muted" style="margin:0;font-size:13px">${out ? esc(t('rankNow')(pos)) + ' · ' : ''}${esc(t('receivedAt'))} ${fmtTime(r.ts)}</p></div>` + contactBlock(g, r, pos, rk.length, out ? res.pts : null) +
    g.questions.map((q, i) => { const got = res.per[i], col = got == null ? 'var(--line)' : got > 0 ? 'var(--ok)' : 'var(--bad)';
      return `<div class="card" style="border-left:10px solid ${col};padding:12px 14px"><p style="margin:0 0 6px;font-weight:700">${i + 1}. ${esc(L(q.q))}</p>
      <p style="margin:0">${esc(t('given'))} : <b>${esc(ansLabel(g, q, r.a[i]))}</b></p>${out && answered(out[i]) ? `<p style="margin:4px 0 0;color:var(--gold2)">${esc(t('real'))} : <b>${esc(ansLabel(g, q, out[i]))}</b>${got != null ? ` · +${got} pt${got > 1 ? 's' : ''}` : ''}</p>` : ''}</div>`; }).join('');
}

/* ---- participant registration & hub ---- */
const genPin = () => String(1000 + crypto.getRandomValues(new Uint32Array(1))[0] % 9000);
const normV = p => p.m === 'sms' ? String(p.v).replace(/\D/g, '') : String(p.v).trim().toLowerCase();
const getPlayers = () => LS.get('lb_players', {});
function upsertPlayer(p) {
  if (!p || !p.v || !p.name) return null;
  const all = getPlayers(), k = normV(p), old = all[k] || {};
  all[k] = { name: p.name, m: p.m, v: p.v, mk: p.mk ?? old.mk, at: p.at || old.at, pin: old.pin || p.pin || genPin(), seen: Date.now() };
  LS.set('lb_players', all); return all[k];
}
function getMe() {
  const me = LS.get('lb_me', null);
  if (me && isHost() && Date.now() - (me.ts || 0) > 20 * 60e3) { LS.del('lb_me'); return null; }
  return me;
}
function setMe(p) { const me = { ...p, ts: Date.now() }; LS.set('lb_me', me); return me; }
function identifyScreen(next, optional) {
  setAcc('#1c5fd1');
  const ps = Object.values(getPlayers()).sort((a, b) => (b.seen || 0) - (a.seen || 0));
  if (!ps.length && !optional) return registerScreen(next);
  let q = '';
  const draw = () => {
    const list = ps.filter(p => !q || p.name.toLowerCase().includes(q.toLowerCase()));
    app.innerHTML = topBar(t('whoT')) + backBar() + `<h1 class="chalkh">👋 ${esc(t('whoT'))}</h1><p class="muted" style="margin-top:0">${esc(t('whoS'))}</p>
     <button class="btn" id="nw">➕ ${esc(t('newP'))}</button>
     ${ps.length ? `${ps.length > 6 ? `<input class="in" id="sq" placeholder="🔍 ${esc(t('search'))}" value="${esc(q)}" style="margin-top:14px">` : ''}
     <div class="card list" style="padding:4px 8px">${list.map(p => `<div class="it" data-v="${esc(normV(p))}" style="cursor:pointer"><span class="rank" style="font-size:24px">👤</span><span class="nm">${esc(p.name)}<small>${esc(maskV(p))}</small></span><span style="font-size:20px">🔒</span></div>`).join('') || `<p class="muted center">–</p>`}</div>` : ''}
     ${optional ? `<button class="btn ghost small" id="skip" style="width:100%">${esc(t('skipId'))}</button>` : ''}`;
    $('#nw').onclick = () => registerScreen(next);
    if ($('#skip')) $('#skip').onclick = () => { LS.set('lb_skipid', true); next(); };
    if ($('#sq')) { $('#sq').oninput = e => { q = e.target.value; const pos = e.target.selectionStart; draw(); const el = $('#sq'); el.focus(); el.setSelectionRange(pos, pos); }; }
    app.querySelectorAll('[data-v]').forEach(el => el.onclick = () => { const p = getPlayers()[el.dataset.v]; askPin(p, next); });
  };
  draw();
}
const maskV = p => p.m === 'sms' ? String(p.v).replace(/\D/g, '').replace(/^(\d{2})\d+(\d{2})$/, '$1 •• •• •• $2') : String(p.v).replace(/^(.).*(@.*)$/, '$1•••$2');
function askPin(p, next) {
  modal(`<h3 class="center">👤 ${esc(p.name)}</h3><p class="muted center" style="margin:0 0 10px">${esc(t('pinAsk'))}</p><input class="in big-in" id="pp" type="password" inputmode="numeric" maxlength="4" placeholder="••••" autocomplete="off">
   <div class="row" style="margin-top:12px"><button class="btn ghost small" data-x>${esc(t('no'))}</button><button class="btn small" data-y>${esc(t('enter'))}</button></div>
   <p class="muted center" style="font-size:13px;margin:12px 0 0">${esc(t('pinForgot'))}</p>`, mm => {
    const inp = mm.querySelector('#pp'); inp.focus();
    const ok = () => { const cur = getPlayers()[normV(p)]; if (cur && inp.value === cur.pin) { mm.remove(); setMe(cur); upsertPlayer(cur); next(); } else { inp.value = ''; toast(t('pinBad'), false); } };
    mm.querySelector('[data-x]').onclick = () => mm.remove(); mm.querySelector('[data-y]').onclick = ok; inp.oninput = () => { if (inp.value.length === 4) ok(); };
  });
}
function showPinCard(me, next) {
  app.innerHTML = topBar(t('regT')) + `<div class="card center" style="margin-top:20px"><p style="font-size:44px;margin:0">🔑</p><p class="chalk" style="font-size:30px;margin:6px 0">${esc(t('hello')(me.name))}</p>
   <p style="margin:0">${esc(t('yourPin'))}</p><p style="font-family:var(--title);font-size:64px;letter-spacing:12px;color:var(--gold2);margin:6px 0;text-shadow:var(--tshadow)">${esc(me.pin)}</p>
   <p class="muted" style="font-size:14px">${esc(t('pinKeep'))}</p><button class="btn" id="okp" style="margin-top:10px">${esc(t('pinOk'))}</button></div>`;
  $('#okp').onclick = next;
}
function registerScreen(next) {
  setAcc('#1c5fd1');
  let how = 'sms';
  const draw = () => {
    app.innerHTML = topBar(t('regT')) + backBar() + `<div class="hero"><img src="${LOGO}" alt="LA BULL" style="width:110px"><h1 style="font-size:32px">${esc(t('regT'))}</h1><p class="muted">${esc(t('regS'))}</p></div>
     <div class="card"><label class="f">${esc(t('regName'))}</label><input class="in" id="rn" maxlength="30" autocomplete="given-name">
     <label class="f">${esc(t('regHow'))}</label><div class="tabs" style="justify-content:flex-start"><button data-h="sms" class="${how === 'sms' ? 'on' : ''}">📱 ${esc(t('sms'))}</button><button data-h="email" class="${how === 'email' ? 'on' : ''}">✉️ ${esc(t('email'))}</button></div>
     ${how === 'sms' ? `<label class="f">${esc(t('regPhone'))}</label><input class="in" id="rv" type="tel" inputmode="tel" autocomplete="tel" placeholder="06 12 34 56 78">` : `<label class="f">${esc(t('regMail'))}</label><input class="in" id="rv" type="email" inputmode="email" autocomplete="email" placeholder="prenom@exemple.fr">`}
     ${['c1', 'c2', 'c3'].map(c => `<label style="display:flex;gap:10px;align-items:flex-start;margin-top:12px;font-size:14px;line-height:1.35"><input type="checkbox" id="${c}" style="width:24px;height:24px;flex:none;margin:0;accent-color:#f6b81e"><span>${esc(t(c))}</span></label>`).join('')}
     <button class="btn" id="rg" style="margin-top:16px">${esc(t('regGo'))}</button></div>
     <details class="card"><summary style="font-weight:700;cursor:pointer">${esc(t('privT'))}</summary><p style="font-size:13px;line-height:1.45;margin-top:10px">${esc(t('priv'))}</p></details>`;
    app.querySelectorAll('[data-h]').forEach(b => b.onclick = () => { const n = $('#rn').value; how = b.dataset.h; draw(); $('#rn').value = n; });
    $('#rg').onclick = () => {
      const name = $('#rn').value.trim(), v = $('#rv').value.trim();
      const okV = how === 'sms' ? /^\+?[0-9 .\-]{9,18}$/.test(v) && v.replace(/\D/g, '').length >= 9 : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      if (!name || !okV || !$('#c1').checked || !$('#c3').checked) return toast(t('regBad'), false);
      const old = getPlayers()[normV({ m: how, v })];
      const p = upsertPlayer({ name, m: how, v, mk: $('#c2').checked, at: new Date().toISOString().slice(0, 10), pin: old ? old.pin : genPin() });
      setMe(p); showPinCard(p, next);
    };
  };
  draw();
}
function pronoHub() {
  setAcc('#1c5fd1');
  const me = getMe(); if (!me) return identifyScreen(() => pronoHub());
  const today = new Date().toISOString().slice(0, 10);
  const list = allGames().filter(g => isProno(g) && (!g.date || (g.until || g.date) >= today)).sort((a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')));
  app.innerHTML = topBar(t('hubT')) + backBar() + `<h1 style="font-size:32px;margin-top:4px">${SPORT_ICON.foot}${SPORT_ICON.rugby} ${esc(t('hubT'))}</h1><p class="muted" style="margin-top:0">${esc(t('hello')(me.name))} ${esc(t('hubS'))}</p>` +
    (list.length ? list.map(g => { const st = LS.get(pkey(g), null), done = st && st.done, sq = scoreQs(g);
      return `<div class="card hc" style="border-left:10px solid ${esc(g.color)}"><div class="hc-h"><span class="hc-ic" style="background:${esc(g.color)}">${SPORT_ICON[g.sport] || '🏆'}</span><div class="hc-t"><b>${esc(gTitle(g))}</b><span>${esc(fmtDate(g.date))}${g.time ? ' · ' + esc(g.time) : ''}</span></div></div>
       ${sq.length > 1 ? `<p class="muted" style="font-size:13px;margin:8px 0 0">${sq.map(([q]) => esc(qA(g, q) + ' – ' + qB(g, q))).join(' · ')}</p>` : ''}
       <button class="btn ${done ? 'ghost' : ''}" data-g="${esc(g.id)}" style="margin-top:12px">${esc(done ? t('hubDone') : t('hubGo'))}</button></div>`; }).join('') : `<div class="card center muted">${esc(t('hubNone'))}</div>`) +
    `<button class="btn ghost small" id="chg3" style="width:100%;margin-top:10px">👤 ${esc(t('notYou'))}</button>` + (isHost() && false ? `<button class="btn ghost small" id="chg" style="width:100%;margin-top:10px">👤 ${esc(t('changePl'))}</button>` : '') + `<details class="card"><summary style="font-weight:700;cursor:pointer">👤 ${esc(t('editMe'))}</summary><p style="margin:10px 0 4px">${esc(me.name)} · ${esc(me.v)}</p><p class="muted" style="font-size:13px;margin:0 0 10px">${esc(me.mk ? t('mkYes') : t('mkNo'))}</p>
     <button class="btn danger small" id="del" style="width:100%">${esc(t('delMe'))}</button><p style="font-size:12px;line-height:1.4;margin-top:10px" class="muted">${esc(t('priv'))}</p></details>`;
  app.querySelectorAll('[data-g]').forEach(b => b.onclick = () => go('j=' + encodeURIComponent(b.dataset.g)));
  $('#del').onclick = () => { const all = getPlayers(); delete all[normV(me)]; LS.set('lb_players', all); LS.del('lb_me'); toast(t('delDone')); pronoHub(); };
  if ($('#chg')) $('#chg').onclick = () => { newPlayer(); pronoHub(); };
  if ($('#chg3')) $('#chg3').onclick = () => { newPlayer(); pronoHub(); };
}
function contactBlock(g, r, pos, N, pts) {
  if (!r.c) return '';
  const body = t('msgRes')(r.t, gTitle(g), pts, pos, N) + (r.c.m === 'sms' ? ' ' + t('msgStop') : '');
  const href = r.c.m === 'sms' ? `sms:${r.c.v.replace(/[^\d+]/g, '')}${/iPhone|iPad/.test(navigator.userAgent) ? '&' : '?'}body=${encodeURIComponent(body)}` : `mailto:${r.c.v}?subject=${encodeURIComponent('LA BULL · ' + gTitle(g))}&body=${encodeURIComponent(body)}`;
  return `<div class="card"><p style="margin:0;font-weight:700">📇 ${esc(t('contactL'))} : ${esc(r.c.v)}</p><p class="muted" style="margin:2px 0 10px;font-size:13px">${r.c.m === 'sms' ? '📱' : '✉️'} ${esc(r.c.mk ? t('mkYes') : t('mkNo'))}${r.c.at ? ' · ' + esc(r.c.at) : ''}</p>${pts != null ? `<a class="btn" href="${esc(href)}">📩 ${esc(t('sendRes'))}</a>` : ''}</div>`;
}
function contactsCSV(g) {
  const rk = pronoRanked(g), out = getOut(g.id);
  const rows = [['prenom', 'canal', 'contact', 'accord_resultats', 'accord_infos_labull', 'date_accord', 'points', 'rang']].concat(rk.map((r, i) => [r.t, r.c?.m || '', r.c?.v || '', r.c ? 'oui' : '', r.c?.mk ? 'oui' : 'non', r.c?.at || '', out ? r.pts : '', out ? i + 1 : '']));
  download(`contacts-${g.id}.csv`, '﻿' + rows.map(r => r.map(x => `"${String(x).replace(/"/g, '""')}"`).join(';')).join('\n'), 'text/csv');
}

/* ---- summary of all predictions ---- */
function hostPronoSummary(sel) {
  setAcc('#2fbf6b');
  const gs = allGames().filter(g => isProno(g) && Object.keys(getRes(g.id)).length).sort((a, b) => ((b.date || '') + (b.time || '')).localeCompare((a.date || '') + (a.time || '')));
  // overall ranking by person (name + contact)
  const tot = {};
  gs.forEach(g => { const out = getOut(g.id); pronoRanked(g).forEach(r => { const k = r.k || r.t.toLowerCase(); const o = tot[k] || (tot[k] = { t: r.t, pts: 0, n: 0, ex: 0 }); o.n++; if (out) { o.pts += r.pts; scoreQs(g).forEach(([q, i]) => { if (answered(out[i]) && answered(r.a[i]) && r.a[i][0] === out[i][0] && r.a[i][1] === out[i][1]) o.ex++; }); } }); });
  const overall = Object.values(tot).sort((a, b) => b.pts - a.pts || b.ex - a.ex || b.n - a.n);
  const cell = (p, r) => {
    if (!answered(p)) return '<td class="pm">–</td>';
    const txt = `${p[0]}-${p[1]}`;
    if (!answered(r)) return `<td>${txt}</td>`;
    const cls = p[0] === r[0] && p[1] === r[1] ? 'px' : sgn(p[0] - p[1]) === sgn(r[0] - r[1]) ? 'pw' : 'pl';
    return `<td class="${cls}">${txt}</td>`;
  };
  const table = g => {
    const sq = scoreQs(g), out = getOut(g.id), rk = pronoRanked(g);
    const head = sq.map(([q]) => `<th>${esc(qA(g, q).slice(0, 12))}<br><small>${esc(qB(g, q).slice(0, 12))}</small></th>`).join('');
    const resRow = `<tr class="rr"><td>🏁 ${esc(t('real'))}</td>${sq.map(([q, i]) => `<td>${out && answered(out[i]) ? out[i].join('-') : '…'}</td>`).join('')}<td></td></tr>`;
    let pos = 0, prev = null;
    const rows = rk.map((r, j) => { if (r.pts !== prev) { pos = j + 1; prev = r.pts; } return `<tr data-k="${esc(r.k || r.t.toLowerCase())}" data-g="${esc(g.id)}"><td class="nm">${out ? (['🥇', '🥈', '🥉'][pos - 1] || pos) + ' ' : ''}${esc(r.t)}</td>${sq.map(([q, i]) => cell(r.a[i], out && out[i])).join('')}<td class="pt">${out ? r.pts : '·'}</td></tr>`; }).join('');
    return `<div class="card" style="padding:12px"><p class="chalk" style="font-size:26px;margin:0 0 2px">${SPORT_ICON[g.sport] || '🏆'} ${esc(gTitle(g))}</p><p class="muted" style="margin:0 0 8px;font-size:13px">${esc(fmtDate(g.date))} · ${esc(t('pronos')(rk.length))}</p>
      <div class="tw"><table class="pt-t"><thead><tr><th>${esc(t('playerL'))}</th>${head}<th>Pts</th></tr></thead><tbody>${resRow}${rows}</tbody></table></div>
      <div class="row" style="margin-top:10px"><button class="btn ghost small" data-open="${esc(g.id)}">🏆 ${esc(t('ranking'))}</button><button class="btn ghost small" data-fr="${esc(g.id)}">🔄 ${esc(t('fetchBtn'))}</button></div></div>`;
  };
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 class="chalkh">📋 ${esc(t('sumT'))}</h1>
    ${!gs.length ? `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('noRes'))}</p></div>` : `
    <p class="sec">🏆 ${esc(t('bestT'))}</p><div class="card list" style="padding:4px 8px">${overall.map((o, i) => `<div class="it"><span class="rank">${['🥇', '🥈', '🥉'][i] || i + 1}</span><span class="nm">${esc(o.t)}<small>${esc(t('pronos')(o.n))} · ${o.ex} ${esc(t('exactL'))}</small></span><span class="score">${o.pts}<small style="font-size:15px;color:var(--muted)"> pts</small></span></div>`).join('')}</div>
    <p class="muted" style="font-size:13px">${esc(t('legend'))}</p>
    <p class="sec">⚽🏉 ${esc(t('byMatch'))}</p>` + gs.map(table).join('')}`;
  app.querySelectorAll('tr[data-k]').forEach(tr => tr.onclick = () => go('admin=team:' + tr.dataset.g + ':' + encodeURIComponent(tr.dataset.k)));
  app.querySelectorAll('[data-open]').forEach(b => b.onclick = () => go('admin=rank:' + b.dataset.open));
  app.querySelectorAll('[data-fr]').forEach(b => b.onclick = () => fetchResults(findGame(b.dataset.fr)));
}

function hostPlayers() {
  setAcc();
  // fill directory from all received sheets
  allGames().forEach(g => Object.values(getRes(g.id)).forEach(r => { if (r.c && r.c.v) upsertPlayer({ name: r.c.n || r.t, m: r.c.m, v: r.c.v, mk: r.c.mk, at: r.c.at, pin: r.c.p }); }));
  const ps = Object.values(getPlayers()).sort((a, b) => a.name.localeCompare(b.name));
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 class="chalkh">👥 ${esc(t('playersT'))}</h1><p class="muted" style="margin-top:0">${esc(t('playersS'))}</p>` +
    (ps.length ? `<div class="card list" style="padding:4px 8px">` + ps.map(p => `<div class="it" style="flex-wrap:wrap"><span class="nm">${esc(p.name)}<small>${p.m === 'sms' ? '📱' : '✉️'} ${esc(p.v)} · ${esc(p.mk ? t('mkYes') : t('mkNo'))}</small></span>
      <span class="score" data-pin="${esc(normV(p))}" style="cursor:pointer;font-size:26px">••••</span>
      <div class="row" style="width:100%;margin-top:6px"><button class="btn ghost small" data-rs="${esc(normV(p))}">🔄 ${esc(t('resetPin'))}</button><button class="btn danger small" data-dp="${esc(normV(p))}">🗑</button></div></div>`).join('') + `</div>`
     : `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('noRes'))}</p></div>`);
  app.querySelectorAll('[data-pin]').forEach(el => el.onclick = () => { const p = getPlayers()[el.dataset.pin]; el.textContent = el.textContent === '••••' ? p.pin : '••••'; });
  app.querySelectorAll('[data-rs]').forEach(b => b.onclick = () => { const all = getPlayers(), p = all[b.dataset.rs]; p.pin = genPin(); LS.set('lb_players', all);
    modal(`<p style="font-size:40px;margin:0;text-align:center">🔑</p><h3 class="center">${esc(p.name)}</h3><p class="center" style="margin:0">${esc(t('newPinIs'))}</p><p class="center" style="font-family:var(--title);font-size:56px;letter-spacing:10px;color:var(--gold2);margin:6px 0">${esc(p.pin)}</p><button class="btn small" data-c style="width:100%">${esc(t('close'))}</button>`, mm => mm.querySelector('[data-c]').onclick = () => { mm.remove(); hostPlayers(); }); });
  app.querySelectorAll('[data-dp]').forEach(b => b.onclick = () => confirmBox(t('delQ'), getPlayers()[b.dataset.dp].name, t('del'), () => { const all = getPlayers(); delete all[b.dataset.dp]; LS.set('lb_players', all); hostPlayers(); }, true));
}
