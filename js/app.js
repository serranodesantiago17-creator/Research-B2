/* Research Pathways B2 · Interactive Workbook
   Exercise engine: gap fill, multiple choice, rewriting, open tasks, audio slots,
   learning diary, portfolio, article tracker, CEFR self-assessment and results download.
   Everything is saved in the student's browser. */
(function () {
  "use strict";
  const UNITS = window.UNITS || [];
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const LS = "rpb2:";

  /* ---------- storage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = s => String(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  const words = s => (s.trim().match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length;

  function norm(s) {
    s = String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/ /g, " ");
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not")
      .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ll\b/g, " will")
      .replace(/'ve\b/g, " have").replace(/'d\b/g, " would").replace(/\b(it|he|she|that|there|what|where|who)'s\b/g, "$1 is");
    s = s.replace(/analys/g, "analyz").replace(/generalis/g, "generaliz").replace(/randomis/g, "randomiz").replace(/anonymis/g, "anonymiz")
      .replace(/synthesis(e|ed|ing)\b/g, "synthesiz$1").replace(/organis/g, "organiz").replace(/µg/g, "micrograms");
    s = s.replace(/["]/g, "").replace(/[,;:]/g, " ").replace(/[.!?]+(\s|$)/g, " ").replace(/\s+/g, " ").trim();
    return s;
  }
  const matches = (val, answers) => { const n = norm(val); return n.length > 0 && answers.some(a => norm(a) === n); };

  /* ---------- icons (fallback illustrations) ---------- */
  const ICONS = {
    flask: '<path d="M38 10h24M44 10v26L24 78a8 8 0 0 0 7 12h38a8 8 0 0 0 7-12L56 36V10"/><path d="M32 62h36"/><circle cx="45" cy="72" r="3"/><circle cx="56" cy="78" r="2"/>',
    question: '<circle cx="50" cy="50" r="38"/><path d="M38 40a12 12 0 1 1 18 10c-4 3-6 5-6 10"/><circle cx="50" cy="72" r="2.5"/>',
    book: '<path d="M14 22h28a8 8 0 0 1 8 8v52a6 6 0 0 0-6-6H14zM86 22H58a8 8 0 0 0-8 8v52a6 6 0 0 1 6-6h30z"/>',
    ruler: '<rect x="12" y="34" width="76" height="32" rx="4"/><path d="M24 34v12M36 34v8M48 34v12M60 34v8M72 34v12"/>',
    voice: '<path d="M20 24h60a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H44L28 80V66h-8a6 6 0 0 1-6-6V30a6 6 0 0 1 6-6z"/><path d="M32 40h36M32 50h24"/>',
    shield: '<path d="M50 12l32 12v22c0 22-14 36-32 42-18-6-32-20-32-42V24z"/><path d="M36 50l10 10 18-20"/>',
    chart: '<path d="M14 84h74M14 84V16"/><path d="M22 70l16-14 14 6 14-22 16-12"/><circle cx="38" cy="56" r="3"/><circle cx="52" cy="62" r="3"/><circle cx="66" cy="40" r="3"/>',
    bulb: '<path d="M50 14a24 24 0 0 0-14 43c3 3 5 7 5 11h18c0-4 2-8 5-11a24 24 0 0 0-14-43z"/><path d="M41 76h18M44 84h12"/>',
    doc: '<path d="M26 12h34l16 16v60H26z"/><path d="M60 12v16h16M36 44h30M36 54h30M36 64h20"/>',
    stage: '<rect x="16" y="18" width="68" height="44" rx="4"/><path d="M50 62v14M34 86h32M28 50l14-12 10 8 16-16"/>',
    team: '<circle cx="36" cy="36" r="10"/><circle cx="64" cy="36" r="10"/><path d="M18 78c0-12 8-20 18-20s18 8 18 20M46 78c0-12 8-20 18-20s18 8 18 20"/>',
    globe: '<circle cx="50" cy="50" r="36"/><path d="M14 50h72M50 14c12 12 12 60 0 72M50 14c-12 12-12 60 0 72"/>',
    mic: '<rect x="40" y="14" width="20" height="40" rx="10"/><path d="M28 46a22 22 0 0 0 44 0M50 68v14M38 84h24"/>'
  };
  const icon = (k, stroke) => `<svg viewBox="0 0 100 100" fill="none" stroke="${stroke || "#fff"}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.flask}</svg>`;
  const headphones = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/></svg>';
  const commons = f => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=1200`;
  const commonsPage = f => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
  window.__imgFail = function (img) { const p = img.parentNode; img.remove(); const fb = p.querySelector(".fb-hidden"); if (fb) { fb.classList.remove("fb-hidden"); fb.style.display = ""; } };

  /* ---------- progress ---------- */
  function unitGraded(u) { let n = 0; u.sections.forEach(s => s.ex.forEach(e => { if (isGraded(e)) n++; })); return n; }
  function isGraded(e) { return ["gaps", "choice", "rewrite"].includes(e.type); }
  function unitPct(u) {
    const total = unitGraded(u); if (!total) return 0;
    const done = store.get("done:" + u.n, {});
    let sum = 0; Object.values(done).forEach(v => sum += v); return Math.round(100 * sum / total);
  }
  function setExScore(u, exId, frac) {
    const done = store.get("done:" + u, {}); done[exId] = Math.max(done[exId] || 0, frac); store.set("done:" + u, done);
    refreshProgress(u);
  }
  function refreshProgress(n) {
    const u = UNITS.find(x => x.n === n); if (!u) return;
    const p = unitPct(u);
    const b = document.querySelector(".progress .bar span"); if (b) b.style.width = p + "%";
    const t = document.querySelector(".progress .pv"); if (t) t.textContent = p + "%";
    const s = sidebar.querySelector(`a[data-u="${n}"] .pct`); if (s) s.textContent = p ? p + "%" : "";
  }

  /* ---------- sidebar ---------- */
  function renderSidebar() {
    let h = `<div class="group">Workbook</div>
      <a href="#/home" data-r="home"><span class="num">★</span>Home and how to use it</a>
      <a href="#/portfolio" data-r="portfolio"><span class="num">✓</span>My portfolio</a>
      <a href="#/audio" data-r="audio"><span class="num">♪</span>Student's Book audio</a>
      <div class="group">Semester 1</div>`;
    UNITS.forEach(u => {
      if (u.n === 7) h += `<div class="group">Semester 2</div>`;
      const p = unitPct(u);
      h += `<a href="#/unit/${u.n}" data-u="${u.n}"><span class="num">${u.n}</span><span>${esc(u.title)}</span><span class="pct">${p ? p + "%" : ""}</span></a>`;
    });
    sidebar.innerHTML = h;
  }
  function markActive(key) {
    sidebar.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.dataset.u === key || a.dataset.r === key));
  }

  /* ---------- hero ---------- */
  function hero(u, kicker, title, sub) {
    const img = u && u.img;
    const fb = `<div class="hero-fallback ${img ? "fb-hidden" : ""}" ${img ? 'style="display:none"' : ""}>${icon(u ? u.icon : "flask")}</div>`;
    const im = img ? `<img src="${commons(img.file)}" alt="${esc(img.alt)}" loading="eager" onerror="__imgFail(this)">` : "";
    return `<section class="hero">${im}${fb}<div class="hero-text"><div class="kicker">${kicker}</div><h1>${esc(title)}</h1>${sub ? `<p>${sub}</p>` : ""}</div></section>` +
      (img ? `<div class="credit">Photo: <a href="${commonsPage(img.file)}" target="_blank" rel="noopener">${esc(img.credit)}</a> · Wikimedia Commons</div>` : "");
  }

  /* ---------- audio slot ---------- */
  function audioSlot(track, label) {
    const id = track.replace(".", "-");
    const conf = (window.AUDIO_TRACKS || {})[track] || "";
    const local = `audio/track-${id}.mp3`;
    let player;
    const drive = conf.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (drive) player = `<iframe src="https://drive.google.com/file/d/${drive[1]}/preview" allow="autoplay" title="Audio Track ${track}"></iframe>`;
    else player = `<audio controls preload="metadata" src="${esc(conf || local)}" data-file="${local}"></audio>`;
    return `<div class="audio-slot"><div class="ic">${headphones}</div>
      <div class="meta"><b>Student's Book · Track ${track}</b><small>${esc(label || "")}</small></div>
      ${player}
      <div class="audio-missing" hidden>Audio coming soon. Until then, use the recording played in class.</div></div>`;
  }
  function wireAudio(root) {
    root.querySelectorAll(".audio-slot audio").forEach(a => {
      const miss = a.parentNode.querySelector(".audio-missing");
      a.addEventListener("error", () => { a.hidden = true; miss.hidden = false; });
      a.addEventListener("loadedmetadata", () => { miss.hidden = true; a.hidden = false; });
    });
  }

  /* ---------- exercise renderers ---------- */
  const KINDS = { gaps: "Self-check", choice: "Self-check", rewrite: "Self-check", open: "Free writing" };
  function exHeader(e, num) {
    return `<div class="ex-head"><div class="ex-num">${esc(num)}</div><div><div class="ex-prompt">${md(e.prompt)}</div>${e.note ? `<div class="ex-note">${md(e.note)}</div>` : ""}</div><div class="ex-kind">${KINDS[e.type] || ""}</div></div>`;
  }
  function extras(e) {
    let h = "";
    if (e.track) h += audioSlot(e.track, e.trackLabel);
    if (e.box) h += `<div class="box-words">${e.box.map(w => `<span>${esc(w)}</span>`).join("")}</div>`;
    if (e.figure) h += `<figure class="inline-figure"><img src="${commons(e.figure.file)}" alt="${esc(e.figure.alt)}" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${esc(e.figure.alt)} · Photo: <a href="${commonsPage(e.figure.file)}" target="_blank" rel="noopener">${esc(e.figure.credit)}</a>, Wikimedia Commons</figcaption></figure>`;
    if (e.html) h += e.html;
    if (e.passage) h += `<blockquote class="passage">${e.passage}</blockquote>`;
    return h;
  }

  function renderGaps(e, u, key) {
    let n = 0;
    const items = e.items.map((it, i) => {
      const parts = it.t.split("___");
      let line = "";
      parts.forEach((p, j) => {
        line += md(esc(p).replace(/&lt;br&gt;/g, "<br>"));
        if (j < parts.length - 1) {
          const g = it.g[j]; const gid = n++;
          if (g.o) line += `<select class="gap" data-g="${gid}"><option value="">—</option>${g.o.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
          else line += `<input class="gap" data-g="${gid}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(7, (g.w || (g.a[0] || "").length + 3))}ch">`;
        }
      });
      return `<div class="item" data-i="${i}"><div class="line">${e.numbered === false ? "" : `<span class="qn">${i + 1}</span>`}${line}</div><div class="fb"></div></div>`;
    }).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div>
      <div class="actions"><button class="btn chk">Check</button><button class="btn ghost rst">Clear</button><span class="score"></span></div></div>`);
    const saved = store.get("ans:" + key, {});
    node.querySelectorAll(".gap").forEach(inp => { if (saved[inp.dataset.g]) inp.value = saved[inp.dataset.g]; inp.addEventListener("input", save); inp.addEventListener("change", save); });
    function save() { const o = {}; node.querySelectorAll(".gap").forEach(x => o[x.dataset.g] = x.value); store.set("ans:" + key, o); }
    node.querySelector(".chk").onclick = () => {
      let ok = 0, tot = 0, idx = 0;
      e.items.forEach((it, i) => {
        const itemEl = node.querySelector(`.item[data-i="${i}"]`); const fbEl = itemEl.querySelector(".fb");
        let allOk = true; const msgs = [];
        it.g.forEach((g, j) => {
          const inp = node.querySelector(`.gap[data-g="${idx++}"]`); tot++;
          const ans = Array.isArray(g.a) ? g.a : [g.a];
          const good = g.o ? ans.includes(inp.value) : matches(inp.value, ans);
          inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good);
          if (good) ok++; else { allOk = false; msgs.push({ g, empty: !inp.value.trim(), multi: it.g.length > 1, pos: j + 1 }); }
        });
        itemEl.classList.toggle("ok", allOk); itemEl.classList.toggle("bad", !allOk);
        if (allOk) fbEl.innerHTML = `<span class="yes">✓ Correct.</span>${it.good ? " " + md(it.good) : ""}`;
        else fbEl.innerHTML = msgs.map(m => `<span class="no">✗ ${m.multi ? "Gap " + m.pos + ": " : ""}${m.empty ? "No answer yet." : "Not quite."}</span> ${m.empty ? "" : `<span class="why">${md(m.g.why || "Check the rule in the unit.")}</span>`}<button class="reveal" data-a="${esc((Array.isArray(m.g.a) ? m.g.a[0] : m.g.a))}">Show answer</button>`).join("<br>");
      });
      node.querySelectorAll(".reveal").forEach(b => b.onclick = () => { b.outerHTML = `<span class="ans">→ ${esc(b.dataset.a)}</span>`; });
      node.querySelector(".score").innerHTML = `<b>${ok}</b> / ${tot} correct`;
      setExScore(u.n, key, ok / tot);
    };
    node.querySelector(".rst").onclick = () => { node.querySelectorAll(".gap").forEach(x => { x.value = ""; x.classList.remove("ok", "bad"); }); node.querySelectorAll(".item").forEach(x => { x.classList.remove("ok", "bad"); x.querySelector(".fb").innerHTML = ""; }); node.querySelector(".score").innerHTML = ""; save(); };
    return node;
  }

  function renderChoice(e, u, key) {
    const L = "abcdefgh";
    const items = e.items.map((it, i) => `<div class="item mc" data-i="${i}"><div class="q"><span class="qn">${i + 1}</span>${md(it.q)}</div>
      <div class="opts">${it.o.map((o, j) => `<button class="opt" data-j="${j}"><span class="l">${L[j]}</span><span>${md(esc(o))}</span></button>`).join("")}</div><div class="fb"></div></div>`).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div><div class="actions"><button class="btn ghost rst">Restart</button><span class="score"></span></div></div>`);
    const state = {};
    function score() {
      const firstTry = Object.values(state).filter(v => v === "first").length; const answered = Object.keys(state).length;
      node.querySelector(".score").innerHTML = `<b>${firstTry}</b> / ${e.items.length} correct at the first attempt` + (answered < e.items.length ? ` · ${e.items.length - answered} to go` : "");
      if (answered === e.items.length) setExScore(u.n, key, firstTry / e.items.length);
    }
    node.querySelectorAll(".item").forEach(itEl => {
      const i = +itEl.dataset.i, it = e.items[i]; let tries = 0;
      itEl.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        const j = +b.dataset.j; tries++;
        const fb = it.f ? it.f[j] : "";
        if (j === it.a) {
          b.classList.add("ok"); itEl.classList.remove("bad"); itEl.classList.add("ok");
          itEl.querySelectorAll(".opt").forEach(x => x.disabled = true);
          itEl.querySelector(".fb").innerHTML = `<span class="yes">✓ Correct.</span> ${md(fb || "")}`;
          state[i] = tries === 1 ? "first" : "later"; score();
        } else {
          b.classList.add("bad"); b.disabled = true; itEl.classList.add("bad");
          itEl.querySelector(".fb").innerHTML = `<span class="no">✗ Not quite.</span> <span class="why">${md(fb || "Read the text again.")}</span> Try again.`;
        }
      });
    });
    node.querySelector(".rst").onclick = () => { node.replaceWith(renderChoice(e, u, key)); };
    return node;
  }

  function renderRewrite(e, u, key) {
    const items = e.items.map((it, i) => `<div class="item" data-i="${i}"><div><span class="qn">${i + 1}</span>${md(esc(it.q))}${it.start ? ` <em style="color:var(--ink-3)">→ ${esc(it.start)}</em>` : ""}</div>
      <input class="full" data-i="${i}" autocomplete="off" spellcheck="false" placeholder="${esc(it.start ? it.start + " …" : "Write the complete sentence")}"><div class="fb"></div></div>`).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div><div class="actions"><button class="btn chk">Check</button><button class="btn ghost rst">Clear</button><span class="score"></span></div></div>`);
    const saved = store.get("ans:" + key, {});
    node.querySelectorAll("input.full").forEach(inp => { if (saved[inp.dataset.i]) inp.value = saved[inp.dataset.i]; inp.addEventListener("input", save); });
    function save() { const o = {}; node.querySelectorAll("input.full").forEach(x => o[x.dataset.i] = x.value); store.set("ans:" + key, o); }
    node.querySelector(".chk").onclick = () => {
      let ok = 0;
      e.items.forEach((it, i) => {
        const inp = node.querySelector(`input.full[data-i="${i}"]`), itEl = inp.parentNode, fb = itEl.querySelector(".fb");
        const good = matches(inp.value, it.a);
        inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good); itEl.classList.toggle("ok", good); itEl.classList.toggle("bad", !good);
        if (good) { ok++; fb.innerHTML = `<span class="yes">✓ Correct.</span>${it.good ? " " + md(it.good) : ""}`; }
        else if (!inp.value.trim()) fb.innerHTML = `<span class="no">✗ No answer yet.</span>`;
        else fb.innerHTML = `<span class="no">✗ This does not match the expected answer.</span> <span class="why">${md(it.why)}</span><button class="reveal" data-a="${esc(it.a[0])}">Show answer</button>${e.flexible ? `<br><small style="color:var(--ink-3)">Other correct versions are possible: compare yours with the answer.</small>` : ""}`;
      });
      node.querySelectorAll(".reveal").forEach(b => b.onclick = () => { b.outerHTML = `<span class="ans">→ ${esc(b.dataset.a)}</span>`; });
      node.querySelector(".score").innerHTML = `<b>${ok}</b> / ${e.items.length} correct`;
      setExScore(u.n, key, ok / e.items.length);
    };
    node.querySelector(".rst").onclick = () => { node.querySelectorAll("input.full").forEach(x => { x.value = ""; x.classList.remove("ok", "bad"); }); node.querySelectorAll(".item").forEach(x => { x.classList.remove("ok", "bad"); x.querySelector(".fb").innerHTML = ""; }); node.querySelector(".score").innerHTML = ""; save(); };
    return node;
  }

  function renderOpen(e, u, key) {
    const fields = e.fields || [{ label: "", rows: "" }];
    const saved = store.get("open:" + key, {});
    let h = fields.map((f, i) => `${f.label ? `<div class="field-label">${md(esc(f.label))}</div>` : ""}<textarea class="${f.short ? "short" : ""}" data-i="${i}" placeholder="${esc(f.ph || "Write your answer in English…")}">${esc(saved[i] || "")}</textarea>`).join("");
    if (e.words) h += `<div class="wc">0 words · target: ${e.words[0]}–${e.words[1]}</div>`;
    if (e.check) h += `<ul class="checklist">${e.check.map((c, i) => `<li><input type="checkbox" id="${key}-c${i}" ${saved["c" + i] ? "checked" : ""} data-c="${i}"><label for="${key}-c${i}">${md(esc(c))}</label></li>`).join("")}</ul>`;
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}${h}<div class="actions">${e.model ? `<button class="btn ghost mdl">Show model answer</button>` : ""}<span class="saved">Your text is saved automatically in this browser.</span></div><div class="model-slot"></div></div>`);
    const tas = node.querySelectorAll("textarea"), wc = node.querySelector(".wc");
    function save() {
      const o = {}; tas.forEach(t => o[t.dataset.i] = t.value); node.querySelectorAll("[data-c]").forEach(c => o["c" + c.dataset.c] = c.checked); store.set("open:" + key, o);
      if (wc) { let n = 0; tas.forEach(t => n += words(t.value)); wc.textContent = `${n} words · target: ${e.words[0]}–${e.words[1]}`; wc.classList.toggle("okc", n >= e.words[0] && n <= e.words[1]); }
    }
    tas.forEach(t => t.addEventListener("input", save)); node.querySelectorAll("[data-c]").forEach(c => c.addEventListener("change", save)); save();
    const mb = node.querySelector(".mdl");
    if (mb) mb.onclick = () => {
      let n = 0; tas.forEach(t => n += words(t.value));
      const slot = node.querySelector(".model-slot");
      if (slot.innerHTML) { slot.innerHTML = ""; mb.textContent = "Show model answer"; return; }
      if (n < (e.minBeforeModel != null ? e.minBeforeModel : 3)) { slot.innerHTML = `<div class="model" style="background:var(--accent-soft);border-color:#efd3a8"><p>Write your own version first, then compare it with the model. You will learn more that way.</p></div>`; return; }
      slot.innerHTML = `<div class="model"><h4>${esc(e.modelTitle || "Model answer")}</h4>${e.model}</div>`; mb.textContent = "Hide model";
    };
    return node;
  }

  function renderEx(e, u, key) {
    if (e.type === "gaps") return renderGaps(e, u, key);
    if (e.type === "choice") return renderChoice(e, u, key);
    if (e.type === "rewrite") return renderRewrite(e, u, key);
    return renderOpen(e, u, key);
  }

  /* ---------- diary ---------- */
  const DIARY = ["The most useful thing I learned in this unit", "Three words or phrases I will use in my article", "One error I keep making, and the correct form", "Did I use AI tools in this unit? For what? Did I check and disclose it?", "What I want to ask my teacher"];
  function diary(u) {
    const saved = store.get("diary:" + u.n, {});
    const node = el(`<div class="ex diary"><div class="ex-head"><div class="ex-num">✎</div><div><div class="ex-prompt">Learning diary · Unit ${u.n}</div><div class="ex-note">Spend 10 minutes reflecting on what you learned.</div></div></div>
      ${DIARY.map((q, i) => `<div class="field-label">${i + 1}. ${q}</div><textarea class="short" data-i="${i}">${esc(saved[i] || "")}</textarea>`).join("")}
      <div class="actions"><span class="saved">Saved automatically.</span></div></div>`);
    node.querySelectorAll("textarea").forEach(t => t.addEventListener("input", () => { const o = {}; node.querySelectorAll("textarea").forEach(x => o[x.dataset.i] = x.value); store.set("diary:" + u.n, o); }));
    return node;
  }

  /* ---------- pages ---------- */
  function renderUnit(n) {
    const u = UNITS.find(x => x.n === n); if (!u) return renderHome();
    markActive(String(n));
    app.innerHTML = hero(u, `Unit ${u.n} · Semester ${u.n <= 6 ? 1 : 2}`, u.title, u.sub) +
      `<div class="progress"><span>Unit progress</span><div class="bar"><span></span></div><span class="pv">0%</span></div>
       <div class="chips">${u.sections.map((s, i) => `<a href="#/unit/${u.n}/s${i}">${esc(s.h.split(":")[0])}</a>`).join("")}<a href="#/unit/${u.n}/diary">Learning diary</a></div>`;
    u.sections.forEach((s, si) => {
      app.appendChild(el(`<div class="section-title" id="u${u.n}-s${si}"><span class="tag">${esc(s.tag || s.h.split(":")[0])}</span><h2>${md(esc(s.h))}</h2></div>`));
      s.ex.forEach((e, ei) => app.appendChild(renderEx(e, u, `${u.n}-${si}-${ei}`)));
    });
    app.appendChild(el(`<div class="section-title" id="u${u.n}-diary"><span class="tag">Reflect</span><h2>Learning diary</h2></div>`));
    app.appendChild(diary(u));
    const prev = UNITS.find(x => x.n === n - 1), next = UNITS.find(x => x.n === n + 1);
    app.appendChild(el(`<div class="pager">${prev ? `<a href="#/unit/${prev.n}"><small>← Previous unit</small>Unit ${prev.n} · ${esc(prev.title)}</a>` : `<a href="#/home"><small>←</small>Home</a>`}${next ? `<a class="next" href="#/unit/${next.n}"><small>Next unit →</small>Unit ${next.n} · ${esc(next.title)}</a>` : `<a class="next" href="#/portfolio"><small>→</small>My portfolio</a>`}</div>`));
    app.appendChild(el(footer()));
    wireAudio(app); refreshProgress(n);
  }

  function renderHome() {
    markActive("home");
    const homeImg = { img: { file: "Scientist looking thorugh microscope.jpg", credit: "National Cancer Institute (NIH), public domain", alt: "A scientist looking through a microscope" }, icon: "flask" };
    app.innerHTML = hero(homeImg, "UAZ Graduate Programmes · B2 English for research", "Research Pathways B2 — Workbook", "Independent practice for the Student's Book, from project to publication, organised by units and with instant feedback.") +
      `<div class="callout"><strong>How does it work?</strong><ul>
        <li>Do each unit <strong>after</strong> you finish the same unit in class (about 5 hours per unit, including extensive reading and work on your own article).</li>
        <li>In self-check exercises, click <strong>Check</strong>. If an answer is wrong, you will see <strong>why</strong>; then you can correct it or click <em>Show answer</em>.</li>
        <li>In multiple-choice exercises, the explanation appears when you choose. You can try again.</li>
        <li>In writing tasks and <em>My article</em>, write your own version first; then you can open the <strong>model answer</strong> to compare.</li>
        <li>The <em>Listen again</em> exercises have a player for the Student's Book track. The audio files will be added soon; until then, use the recordings from class.</li>
        <li>Everything you write is saved in this browser only (nothing is sent to a server). To submit your progress, go to <a href="#/portfolio">My portfolio</a> and download your results to send them to your teacher.</li></ul></div>
      <h2>Units</h2><div class="grid">${UNITS.map(u => `<a class="ucard" href="#/unit/${u.n}"><div class="thumb"><div class="fallback">${icon(u.icon)}</div><img src="${commons(u.img.file).replace("width=1200", "width=500")}" alt="" loading="lazy" onerror="this.remove()"></div><div class="body"><small>Unit ${u.n}</small><strong>${esc(u.title)}</strong><div class="mini"><span style="width:${unitPct(u)}%"></span></div></div></a>`).join("")}</div>
      <h2>Why this workbook works</h2>
      <p>The workbook follows clear principles from research on language learning and curriculum design.</p>
      <table class="t"><tr><th>Principle</th><th>Source</th><th>What you see here</th></tr>
      <tr><td>Autonomy: you direct your own learning</td><td>Holec (1981)</td><td>Instant feedback, model answers, a learning diary and a portfolio</td></tr>
      <tr><td>Four strands, including fluency</td><td>Nation and Macalister (2010)</td><td>A weekly article from your field, with a reading log</td></tr>
      <tr><td>Spiral learning</td><td>Bruner (1960); Taba (1962)</td><td>Each B1 genre returns in a longer, more complex form</td></tr>
      <tr><td>Writing as a process</td><td>Swales and Feak (2012)</td><td>Your class draft becomes a second draft here, after peer and teacher feedback</td></tr>
      <tr><td>Anticipation, action and reflection</td><td>OECD Learning Compass 2030 (OECD, 2019)</td><td>You plan, apply each unit to your own article and reflect in your diary</td></tr>
      <tr><td>Self-assessment against the CEFR</td><td>Council of Europe (2020)</td><td>You rate your B2 abilities at the start and at the end of the course</td></tr></table>
      <h2>What is in each unit</h2>
      <table class="t"><tr><th>Section</th><th>Time</th><th>What you do</th></tr>
      <tr><td>Vocabulary</td><td>30 min</td><td>New contexts, word families and collocations</td></tr>
      <tr><td>Grammar for writing</td><td>45 min</td><td>Controlled practice and correction of typical errors</td></tr>
      <tr><td>Reading</td><td>40 min</td><td>A new text from a different field, with analysis questions</td></tr>
      <tr><td>Listen again</td><td>20 min</td><td>New tasks with the Student's Book tracks</td></tr>
      <tr><td>Writing</td><td>45 min</td><td>A focused task that prepares your second draft</td></tr>
      <tr><td>My article</td><td>60 min</td><td>The section of your own article that matches the unit</td></tr>
      <tr><td>Extensive reading</td><td>50 min</td><td>One article from your field, with the reading log</td></tr>
      <tr><td>Learning diary</td><td>10 min</td><td>Reflection, including how you used AI tools</td></tr></table>
      <h2>Study tips for B2</h2><ul>
      <li><strong>Read like a writer.</strong> Notice how authors build the gap, report statistics and hedge their claims, and copy useful phrases into your phrase bank.</li>
      <li><strong>Write in English from the start.</strong> Translating a finished Spanish text sentence by sentence produces long, unclear English.</li>
      <li><strong>Use AI tools honestly.</strong> Record what you used them for, check every output and never use them to invent references, data or quotations.</li>
      <li><strong>Read aloud.</strong> If you need to breathe in the middle of a sentence, the sentence is too long.</li>
      <li><strong>Keep your article alive.</strong> Work on it a little every week, not only before the deadline.</li></ul>
      <p class="ex-note">Studies, people and texts marked as <em>written for this workbook</em> are fictional and are used for practice.</p>` + footer();
  }

  const BOOK_TRACKS = [
    { id: "1.1", title: "Panel: life after the PhD", who: "Fiona MacLeod (Scottish), Luis Navarro (Mexican), Amara Okafor (Nigerian), Ana Lucía Robles (Mexican)" },
    { id: "1.2", title: "Research Voices: Dr Wanjiru Kamau", who: "Wanjiru Kamau (Kenyan)" },
    { id: "2.1", title: "Lecture: types of literature review", who: "Amara Okafor (Nigerian)" },
    { id: "2.2", title: "Research Voices: Dr Mateo Rivas", who: "Mateo Rivas (Chilean)" },
    { id: "3.1", title: "Talk: why introductions fail", who: "Hannah Becker (German)" },
    { id: "3.2", title: "Research Voices: Dr Siobhán Kelly", who: "Siobhán Kelly (Irish)" },
    { id: "4.1", title: "Lecture: four threats to validity", who: "Fiona MacLeod (Scottish)" },
    { id: "4.2", title: "Research Voices: Dr Lucas Ferreira", who: "Lucas Ferreira (Brazilian)" },
    { id: "5.1", title: "Methods seminar", who: "Sofía Medina (Mexican), Aroha Ngata (Māori, New Zealand), Fiona MacLeod (Scottish)" },
    { id: "5.2", title: "Research Voices: Dr Citlali Hernández", who: "Citlali Hernández (Mexican)" },
    { id: "6.1", title: "Integrity committee meeting", who: "Omar Haddad (Jordanian), Fiona MacLeod (Scottish), Tomás Herrera (Mexican)" },
    { id: "6.2", title: "Research Voices: Dr Ji-woo Park", who: "Ji-woo Park (Korean)" },
    { id: "7.1", title: "Statistics consultation", who: "Daniela Ortiz (Mexican), Elena Petrova (Bulgarian)" },
    { id: "7.2", title: "Research Voices: Dr Priya Nair", who: "Priya Nair (Indian)" },
    { id: "8.1", title: "A claim under challenge", who: "Sofía Medina (Mexican), Fiona MacLeod (Scottish), Amara Okafor (Nigerian)" },
    { id: "8.2", title: "Research Voices: Dr Ben Carter", who: "Ben Carter (Australian)" },
    { id: "9.1", title: "Podcast: inside peer review", who: "Host (US), Hannah Becker (German)" },
    { id: "9.2", title: "Research Voices: Dr Gabriela Soto", who: "Gabriela Soto (Colombian)" },
    { id: "10.1", title: "A conference talk and its questions", who: "Ji-woo Park (Korean, chair), Luis Navarro (Mexican), three audience members" },
    { id: "10.2", title: "Research Voices: Dr Emily Tremblay", who: "Emily Tremblay (Canadian)" },
    { id: "11.1", title: "Consortium video call", who: "Daniela Ortiz (Mexican), Lucas Ferreira (Brazilian), Carlos Quispe (Peruvian), Rachel Moore (US)" },
    { id: "11.2", title: "Research Voices: Dr Thabo Nkosi", who: "Thabo Nkosi (South African)" },
    { id: "12.1", title: "Radio roundtable", who: "Host, Daniela Ortiz, Roberto Saldívar and Leticia Rangel (Mexican)" },
    { id: "12.2", title: "Research Voices: Dr Isabel García", who: "Isabel García (Spanish, Spain)" }
  ];
  const PORTFOLIO = ["Research statement", "Literature synthesis", "Introduction", "Methods section", "Qualitative methods and positionality", "Data management plan and AI statement", "Results section", "Discussion section", "Cover letter and response to reviewers", "Conference abstract", "Project summary", "Policy brief"];
  const ARTICLE = ["Working title and three-sentence summary (Unit 1)", "Literature synthesis (Unit 2)", "Introduction (Unit 3)", "Methods (Units 4 and 5)", "Data management and AI statement (Unit 6)", "Results with one table (Unit 7)", "Discussion (Unit 8)", "Peer review received, response letter and revised article (Unit 9)", "Conference abstract and 10-minute talk (Unit 10)"];
  const CEFR = ["read several articles on one topic and explain how they agree and disagree", "follow a lecture or seminar in my field and take useful notes", "write an introduction that shows a clear research gap", "describe and justify my methods so that others could repeat them", "report statistical results with effect sizes and confidence intervals", "write a balanced discussion with alternative explanations and limitations", "respond politely and convincingly to reviewers' comments", "give a ten-minute talk and answer unexpected questions", "negotiate tasks and resources in an international project meeting", "explain my research to decision-makers without jargon"];
  const SCALE = ["", "1 · not yet", "2 · with a lot of help", "3 · with a little help", "4 · well, on my own"];

  function renderPortfolio() {
    markActive("portfolio");
    const s = store.get("portfolio", {}), art = store.get("article", {}), cf = store.get("cefr", {}), st = store.get("student", {});
    const sel = (k, v) => `<select class="gap" data-cefr="${k}">${SCALE.map((o, i) => `<option value="${i || ""}" ${String(v || "") === String(i || "") ? "selected" : ""}>${o || "—"}</option>`).join("")}</select>`;
    app.innerHTML = hero({ img: { file: "Microscope (inverted).jpg", credit: "National Cancer Institute (NIH), public domain", alt: "A scientist observing cell cultures with an inverted microscope" }, icon: "doc" }, "Research portfolio", "My portfolio", "Track your documents, your integrated article and your B2 self-assessment, and download your results for your teacher.") +
      `<h2>Research portfolio</h2><p>Tick each document when the final version is ready.</p>
      <div class="ex"><ul class="checklist" style="font-size:1rem">${PORTFOLIO.map((p, i) => `<li><input type="checkbox" id="pf${i}" data-pf="${i}" ${s[i] ? "checked" : ""}><label for="pf${i}"><a href="#/unit/${i + 1}">Unit ${i + 1}</a> · ${p}</label></li>`).join("")}</ul></div>
      <h2>My integrated article tracker</h2><p>Your article grows unit by unit. Tick each section when the second draft is ready.</p>
      <div class="ex"><ul class="checklist" style="font-size:1rem">${ARTICLE.map((p, i) => `<li><input type="checkbox" id="ar${i}" data-ar="${i}" ${art[i] ? "checked" : ""}><label for="ar${i}">${p}</label></li>`).join("")}</ul></div>
      <h2>My CEFR B2 self-assessment</h2><p>Rate yourself in the first week (<strong>Start</strong>) and again in the last week (<strong>End</strong>). There are no right answers.</p>
      <div class="ex" style="overflow-x:auto"><table class="t"><tr><th>In English, I can…</th><th>Start</th><th>End</th></tr>${CEFR.map((c, i) => `<tr><td>${c}</td><td>${sel("s" + i, cf["s" + i])}</td><td>${sel("e" + i, cf["e" + i])}</td></tr>`).join("")}</table></div>
      <div class="callout">At the end of the course, compare your Unit 1 research statement with your policy brief and your integrated article (Unit 12, exercise 7).</div>
      <h2>Progress by unit</h2><table class="t"><tr><th>Unit</th><th>Self-check</th></tr>${UNITS.map(u => `<tr><td><a href="#/unit/${u.n}">Unit ${u.n} · ${esc(u.title)}</a></td><td>${unitPct(u)}%</td></tr>`).join("")}</table>
      <h2 id="send">Send my results to my teacher</h2>
      <div class="ex"><p style="margin-top:0">Download a spreadsheet file (CSV, opens in Excel) with your self-check scores by exercise and by unit, your writing and <em>My article</em> texts, your reading logs, your learning diary, your portfolio, your article tracker and your self-assessment. Then send it to your teacher by email or through the course platform.</p>
        <div class="field-label">Full name</div><input class="full" id="stName" autocomplete="name" value="${esc(st.name || "")}">
        <div class="field-label">Student ID or university email</div><input class="full" id="stId" value="${esc(st.id || "")}">
        <div class="field-label">Group (optional)</div><input class="full" id="stGroup" value="${esc(st.group || "")}">
        <div class="actions"><button class="btn" id="dlRes">Download my results (Excel)</button><span class="saved" id="dlMsg">The file is created on your computer; nothing is sent automatically.</span></div></div>
      <div class="actions"><button class="btn ghost" id="wipe">Delete all my saved answers</button></div>` + footer();
    app.querySelectorAll("[data-pf]").forEach(c => c.onchange = () => { const o = store.get("portfolio", {}); o[c.dataset.pf] = c.checked; store.set("portfolio", o); });
    app.querySelectorAll("[data-ar]").forEach(c => c.onchange = () => { const o = store.get("article", {}); o[c.dataset.ar] = c.checked; store.set("article", o); });
    app.querySelectorAll("[data-cefr]").forEach(c => c.onchange = () => { const o = store.get("cefr", {}); o[c.dataset.cefr] = c.value; store.set("cefr", o); });
    ["stName", "stId", "stGroup"].forEach(id => document.getElementById(id).addEventListener("input", () => store.set("student", { name: document.getElementById("stName").value, id: document.getElementById("stId").value, group: document.getElementById("stGroup").value })));
    document.getElementById("dlRes").onclick = downloadResults;
    document.getElementById("wipe").onclick = () => { if (confirmWipe()) { Object.keys(localStorage).filter(k => k.startsWith(LS)).forEach(k => localStorage.removeItem(k)); renderSidebar(); renderPortfolio(); } };
  }

  function renderAudio() {
    markActive("audio");
    app.innerHTML = hero({ img: { file: "GD09 Poster Session.jpg", credit: "David Eppstein", alt: "A poster session at an academic conference" }, icon: "mic" }, "Student's Book · 24 tracks", "Student's Book audio", "Every track in the Student's Book, unit by unit: a lecture, seminar or meeting (X.1) and a <em>Research Voices</em> monologue (X.2).") +
      `<div class="callout">The audio files will be added soon. Each track below already has its place; until the files are available, use the recordings played in class.</div>`;
    let u = 0;
    BOOK_TRACKS.forEach(tr => {
      const n = +tr.id.split(".")[0];
      if (n !== u) { u = n; const un = UNITS.find(x => x.n === n); app.appendChild(el(`<div class="section-title"><span class="tag">Unit ${n}</span><h2>${esc(un ? un.title : "")}</h2></div>`)); }
      app.appendChild(el(`<div class="ex"><div class="ex-head"><div class="ex-num">${esc(tr.id)}</div><div><div class="ex-prompt">${esc(tr.title)}</div><div class="ex-note">${esc(tr.who)}</div></div></div>${audioSlot(tr.id, "")}</div>`));
    });
    app.appendChild(el(footer()));
    wireAudio(app);
  }

  function downloadResults() {
    const st = store.get("student", {}), msg = document.getElementById("dlMsg");
    if (!(st.name || "").trim()) { msg.textContent = "Please type your name before downloading."; msg.style.color = "var(--bad)"; document.getElementById("stName").focus(); return; }
    const date = new Date().toISOString().slice(0, 10);
    const rows = [["Name", "Student ID / email", "Group", "Date", "Unit", "Section", "Exercise", "Type", "Score (%)", "Student's answer"]];
    const add = (u, sec, ex, type, score, resp) => rows.push([st.name, st.id || "", st.group || "", date, u, sec, ex, type, score, resp]);
    UNITS.forEach(u => {
      const done = store.get("done:" + u.n, {});
      add(`Unit ${u.n} · ${u.title}`, "SUMMARY", "", "Self-check average", unitPct(u), "");
      u.sections.forEach((sct, si) => sct.ex.forEach((e, ei) => {
        const key = `${u.n}-${si}-${ei}`;
        if (isGraded(e)) add(`Unit ${u.n}`, sct.h, e.num, KINDS[e.type], key in done ? Math.round(done[key] * 100) : "not done", "");
        else {
          const o = store.get("open:" + key, {}), fields = e.fields || [{ label: "" }];
          const txt = fields.map((f, i) => (o[i] || "").trim() ? (f.label ? f.label + ": " : "") + o[i].trim() : "").filter(Boolean).join(" | ");
          add(`Unit ${u.n}`, sct.h, e.num, KINDS.open, "", txt || "not done");
        }
      }));
      const d = store.get("diary:" + u.n, {});
      DIARY.forEach((q, i) => add(`Unit ${u.n}`, "Learning diary", String(i + 1), q, "", (d[i] || "").trim() || "not done"));
    });
    const pf = store.get("portfolio", {}), art = store.get("article", {}), cf = store.get("cefr", {});
    PORTFOLIO.forEach((p, i) => add(`Unit ${i + 1}`, "Portfolio", p, "Final version ready", "", pf[i] ? "Yes" : "No"));
    ARTICLE.forEach((p, i) => add("Integrated article", "Article tracker", String(i + 1), p, "", art[i] ? "Yes" : "No"));
    CEFR.forEach((c, i) => add("CEFR B2 self-assessment", "I can " + c, String(i + 1), "Start / End (1–4)", "", `Start: ${cf["s" + i] || "-"} · End: ${cf["e" + i] || "-"}`));
    const csv = "﻿" + rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""').replace(/\r?\n/g, " ")}"`).join(",")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = `results-RPB2-${st.name.trim().replace(/\s+/g, "_").replace(/[^\w\-áéíóúñÁÉÍÓÚÑ]/g, "")}-${date}.csv`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    msg.style.color = ""; msg.textContent = "Done: check your Downloads folder and send the file to your teacher.";
  }
  function confirmWipe() { const b = document.getElementById("wipe"); if (b.dataset.armed) return true; b.dataset.armed = "1"; b.textContent = "Click again to confirm"; return false; }
  const footer = () => `<footer class="site">Research Pathways B2 · Workbook · UAZ Graduate Programmes. Photographs from Wikimedia Commons (public domain or free licences; see the credits on each page).</footer>`;

  /* ---------- router ---------- */
  function route() {
    const h = location.hash || "#/home";
    const m = h.match(/^#\/unit\/(\d+)(?:\/(s\d+|diary))?/);
    sidebar.classList.remove("open");
    if (m) {
      const n = +m[1];
      if (app.dataset.page !== "u" + n) { renderUnit(n); app.dataset.page = "u" + n; window.scrollTo(0, 0); }
      if (m[2]) { const t = document.getElementById(`u${n}-${m[2]}`); if (t) t.scrollIntoView({ behavior: "smooth" }); }
    } else if (h.startsWith("#/audio")) { renderAudio(); app.dataset.page = "a"; window.scrollTo(0, 0);
    } else if (h.startsWith("#/portfolio")) { renderPortfolio(); app.dataset.page = "p"; window.scrollTo(0, 0); }
    else { renderHome(); app.dataset.page = "h"; window.scrollTo(0, 0); }
  }
  document.getElementById("menuBtn").onclick = () => sidebar.classList.toggle("open");
  renderSidebar();
  window.addEventListener("hashchange", route);
  route();
})();
