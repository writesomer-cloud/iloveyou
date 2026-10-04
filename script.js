/* ============ CONFIGURATION (the only place you need to edit) ============ */
const CONFIG = {
  // 1) Free access key from https://web3forms.com (enter writesomer@gmail.com there, they email you the key).
  //    This key is designed to be public, so it is safe in frontend code.
  web3formsKey: "1639433b-5907-417a-a3b9-5962afc52a10",
  // 2) Optional music: put your own file in /assets and write its path, e.g. "assets/music.mp3". Leave "" for no music button.
  musicFile: ""
};

/* ============ EDITABLE CONTENT ============ */
// Timeline: edit title/text whenever you like. Leave text "" to show nothing under a title.
const STORY = [
  { title: "The day we met", text: "" },
  { title: "Our first proper conversation", text: "" },
  { title: "The moment I realized…", text: "" },
  { title: "One of my favorite memories", text: "" },
  { title: "The moment you became home", text: "" },
  { title: "Today", text: "" },
  { title: "Someday…", text: "There’s still so much of our story left to write.", last: true }
];

const NICKS = ["Bubu","Gugu","Kuku","Hayati","Zindagi","Love","Guddu","Cheeku","Baby","My Home","My Peace","My Heartu","My Eternal Happiness","My Everything"];

const REMEMBER = [
  "You are allowed to have bad days.",
  "You don’t have to be strong every second.",
  "One bad day doesn’t define your whole story.",
  "You don’t have to earn my care.",
  "You can tell me what’s wrong, or you can just sit with me. Both are okay.",
  "I may not always know exactly what to say, but I will always want to understand.",
  "And if today feels heavy, let me carry a little of it with you."
];

const SURE = [
  { q: "Are you sure about me?", no: "No worries, I’m still yours." },
  { q: "Are you sure you want me?", no: "No worries. I’m still here." },
  { q: "Are you sure you want to spend your life with me?", no: "No pressure. I’m still choosing you." },
  { q: "Are you sure I’m your person?", no: "I’ll let you think about it. Take your time." },
  { q: "One last thing…<br><br>Are you ready to see what I’ve been trying to tell you?", yes: ["Yes","Absolutely"] }
];

// ORIGINAL LETTER: exact words, untouched. Paragraph breaks are only for the slow reveal.
const LETTER_A = [
  "I have come so far and went beyond everything to have you and i am not stepping back now baba ever since i met you i knew you were the one the one i wanna live with the one i wanna know everything about the one i wanna spend the rest of my life with and the one i wanna keep safe cared for loved and i wanna be affectionate to",
  "i know hayati i may not be the best i may not be the one you fell for i may not be the one but what i do know is i wanna do everything right for you i wanna love you in every love language create new ones for you and do more i wanna make you smile laugh heal you in ways you forget everything and love you so much that i dont even know what i am but your lover",
  "ups and downs are a part of life but i do know for a fact that through everything and through it all im gonna love you right im gonna care for you in ways no one else ever will i will be affectionate for you in ways no one will ever do because i dont even wanna compete for you i wanna be in a different league then everyone else the one you’d proudly think is yours and the one that will love you through it all",
  "hayati these words arent just words this man will go through anything i will and have gone through hell to have you and will do it again because im a thousand percent sure a million a billion a gazillion a quadrillion in numbers that cant be calculated i love you so so much my"
];
const KEY_1 = "Its you or nothing";
const KEY_2 = "and ill make sure to keep you and your heart safe";

const QUESTIONS = [
  "What is something you wish I understood about you without you having to explain it?",
  "When do you feel most loved by me?",
  "What is one fear you don’t usually tell people about?",
  "What kind of life do you secretly dream about building with the person you love?",
  "What is something from your past that shaped the way you love today?",
  "When you’re having the worst day, what do you actually need from me?",
  "What is something you want us to experience together at least once?",
  "What does ‘home’ mean to you?",
  "What is something you hope never changes between us?",
  "What is one thing you want me to promise you—not because you need it, but because it would mean something to you?",
  "What part of yourself do you wish people understood better?",
  "What do you think makes two people stay together through difficult times?",
  "What is something you want us to build together that has nothing to do with money?",
  "What is one memory you want us to create together?",
  "Years from now, what do you hope we look back on and say we did right?"
];

const COMFORT = [
  "Hey. Breathe. You don’t have to figure everything out right now.",
  "Come sit with me for a minute. Everything else can wait.",
  "I know today isn’t being kind to you. That doesn’t mean tomorrow won’t be.",
  "You don’t have to smile for me. Just be here.",
  "Whatever happened, you are still you. And I still choose you.",
  "Talk to me when you’re ready. Until then, I’m not going anywhere.",
  "Bad days are allowed. You are allowed.",
  "Come back to this whenever you need reminding that somebody is ridiculously sure about you.",
  "You don’t have to be strong right now. Lean on me a little.",
  "I’m not asking you to be fine. I’m just asking you to let me be here."
];

const MARRY = [
  ["I want to marry you.", "hero"],
  ["Not because I think life will always be perfect.", ""],
  ["But because I want you beside me through the imperfect parts too.", ""],
  ["Through the good days.", "gap"], ["Through the terrible days.", ""], ["Through the stupid arguments.", ""],
  ["Through the laughter.", ""], ["Through the silence.", ""], ["Through every version of us.", ""],
  ["I don’t want a perfect life.", "gap"], ["I want our life.", "fin"]
];

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = ms => new Promise(r => setTimeout(r, ms));
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

/* ============ BUILD CONTENT ============ */
REMEMBER.forEach(t => $('#cards').appendChild(el('div', 'card rv', t)));

const letter = $('#letter');
LETTER_A.forEach(t => { const p = el('p', 'rv'); p.textContent = t; letter.appendChild(p); });
const nickA = el('div', 'nick rv'); NICKS.forEach((n, i) => { const s = el('span', '', ''); s.textContent = n; s.style.transitionDelay = (i * .12) + 's'; nickA.appendChild(s); });
letter.appendChild(nickA);
const k1 = el('p', 'key rv'); k1.textContent = KEY_1; letter.appendChild(k1);
const k2 = el('p', 'key2 rv'); k2.textContent = KEY_2; letter.appendChild(k2);

const nickF = $('#nick-final'); NICKS.forEach((n, i) => { const s = el('span'); s.textContent = n; s.style.transitionDelay = (i * .14) + 's'; nickF.appendChild(s); });

STORY.forEach(s => {
  const d = el('div', 'it rv' + (s.last ? ' last' : ''));
  d.appendChild(el('h3', '', '')).textContent = s.title;
  if (s.text) d.appendChild(el('p', '', '')).textContent = s.text;
  $('#tl').appendChild(d);
});

/* ============ SCROLL REVEAL ============ */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .35, rootMargin: '0px 0px -8% 0px' });
const observe = root => $$('.rv:not(.in)', root).forEach(n => io.observe(n));

/* ============ NAVIGATION ============ */
const ORDER = ['s-open','s-now','s-remember','s-sure','s-letter','s-story','s-q','s-future','s-marry','s-final'];
function go(id) {
  const cur = $('.screen.on'), nxt = $('#' + id);
  if (cur) cur.classList.remove('on');
  nxt.classList.add('on');
  window.scrollTo({ top: 0, behavior: 'auto' });
  $('#bar i').style.width = (ORDER.indexOf(id) / (ORDER.length - 1) * 100) + '%';
  requestAnimationFrame(() => observe(nxt));
  if (id === 's-sure') showSure();
  if (id === 's-q') renderQ();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-go]'); if (b) go(b.dataset.go);
});
observe($('#s-open'));

/* ============ SECTION 2: STAY ============ */
$$('[data-stay]').forEach(b => b.addEventListener('click', () => {
  const m = $('#stay-msg'); m.textContent = b.dataset.stay; m.classList.add('show');
  $('#stay-next').classList.remove('hide');
  $('#stay-next').scrollIntoView({ behavior: 'smooth', block: 'center' });
}));

/* ============ SECTION 4: ARE YOU SURE ============ */
let si = 0, busy = false;
function showSure() {
  const q = $('#sure-q'), btns = $('#sure-btns'), msg = $('#sure-msg');
  const s = SURE[si]; busy = false;
  q.classList.add('out');
  setTimeout(() => {
    q.innerHTML = s.q; q.classList.remove('out');
    btns.innerHTML = ''; msg.classList.remove('show'); msg.textContent = '';
    (s.yes || ['Yes', 'No']).forEach(label => {
      const b = el('button', 'btn' + (label === 'No' ? ' ghost' : ''), label);
      b.addEventListener('click', () => answerSure(label === 'No'));
      btns.appendChild(b);
    });
  }, si === 0 ? 0 : 450);
}
async function answerSure(isNo) {
  if (busy) return; busy = true;
  const s = SURE[si];
  if (isNo) { const m = $('#sure-msg'); m.textContent = s.no; m.classList.add('show'); await wait(2300); }
  else await wait(250);
  si++;
  if (si >= SURE.length) { si = 0; go('s-letter'); } else showSure();
}

/* ============ SECTION 7+8: QUESTIONS + EMAIL ============ */
const KEY = 'hayati_answers_v1';
const saved = store.get(KEY) || {};
const answers = Array.isArray(saved.a) && saved.a.length === QUESTIONS.length ? saved.a : QUESTIONS.map(() => '');
let qi = Math.min(saved.i || 0, QUESTIONS.length), nameVal = saved.name || '';
const area = $('#q-area'), nameIn = $('#q-name');
nameIn.value = nameVal;
const persist = () => store.set(KEY, { a: answers, i: qi, name: nameVal });

function renderQ(animate) {
  const last = qi === QUESTIONS.length, t = $('#q-text');
  const apply = () => {
    $('#q-err').textContent = '';
    $('#name-box').classList.toggle('hide', !last);
    $('#q-back').style.visibility = qi === 0 ? 'hidden' : 'visible';
    if (last) {
      $('#q-count').textContent = 'Almost done';
      t.textContent = 'Last thing. Look over your answers if you want, then send them to me.';
      area.classList.add('hide');
      $('#q-next').textContent = 'Send my answers';
    } else {
      $('#q-count').textContent = `Question ${qi + 1} of ${QUESTIONS.length}`;
      t.textContent = QUESTIONS[qi];
      area.classList.remove('hide'); area.value = answers[qi];
      $('#q-next').textContent = qi === QUESTIONS.length - 1 ? 'Finish' : 'Next';
    }
    t.classList.remove('out');
  };
  if (animate) { t.classList.add('out'); setTimeout(apply, 350); } else apply();
}
area.addEventListener('input', () => { answers[qi] = area.value; persist(); });
nameIn.addEventListener('input', () => { nameVal = nameIn.value; persist(); });
$('#q-back').addEventListener('click', () => { if (qi > 0) { qi--; persist(); renderQ(true); } });
$('#q-next').addEventListener('click', () => {
  if (qi < QUESTIONS.length) { qi++; persist(); renderQ(true); } else submit();
});

function buildEmail() {
  const when = new Date().toLocaleString();
  let m = `Submitted: ${when}\nFrom: ${nameVal || '(no name given)'}\n\n`;
  QUESTIONS.forEach((q, i) => { m += `${i + 1}. ${q}\n${(answers[i] || '').trim() || '(left blank)'}\n\n--------------------\n\n`; });
  return m;
}
async function submit() {
  const err = $('#q-err'), btn = $('#q-next');
  if (!CONFIG.web3formsKey || CONFIG.web3formsKey.startsWith('YOUR_')) {
    err.textContent = 'Email isn’t set up yet. Add the Web3Forms key in script.js. Your answers are still saved here.'; return;
  }
  btn.disabled = true; btn.textContent = 'Sending…'; err.textContent = '';
  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: CONFIG.web3formsKey, subject: `${nameVal || 'Hayati'} answered your questions`, from_name: nameVal || 'Hayati', message: buildEmail() })
    });
    const d = await r.json();
    if (!r.ok || !d.success) throw new Error(d.message || 'failed');
    try { localStorage.removeItem(KEY); } catch (e) {}
    $('.qwrap').classList.add('hide'); $('#s-q h2').classList.add('hide'); $('#s-q > .small').classList.add('hide');
    $('#thanks').classList.remove('hide');
  } catch (e) {
    err.textContent = 'Something went wrong sending that. Please try again. Nothing is lost.';
    btn.disabled = false; btn.textContent = 'Send my answers';
  }
}

/* ============ SECTION 10: MARRIAGE ============ */
$('#m-open').addEventListener('click', async function () {
  this.classList.add('hide');
  const box = $('#m-lines');
  for (const [t, c] of MARRY) {
    const p = el('p', c); p.textContent = t; box.appendChild(p);
    await wait(30); p.classList.add('in');
    await wait(c === 'hero' ? 3200 : 1800);
  }
  $('#m-next').classList.remove('hide');
});

/* ============ SECTION 11+12: FINAL ============ */
$('#f-open').addEventListener('click', async function () {
  this.classList.add('hide'); $('#f-body').classList.remove('hide');
  await wait(60); nickF.classList.add('in');
  const fl = $$('.fl');
  for (const n of fl) { await wait(n === fl[0] ? 3000 : 1800); n.classList.add('in'); }
});
let lastC = -1;
$('#again').addEventListener('click', () => {
  let i; do { i = Math.floor(Math.random() * COMFORT.length); } while (i === lastC);
  lastC = i; const m = $('#again-msg');
  m.classList.remove('show');
  setTimeout(() => { m.textContent = COMFORT[i]; m.classList.add('show'); }, 250);
  $('#again').textContent = 'Open this again';
});

/* ============ MUSIC (off by default) ============ */
if (CONFIG.musicFile) {
  const mb = $('#music'), au = $('#aud'); mb.classList.remove('hide');
  mb.addEventListener('click', () => {
    if (!au.src) au.src = CONFIG.musicFile;
    if (au.paused) au.play().then(() => { mb.classList.add('playing'); mb.setAttribute('aria-pressed', 'true'); }).catch(() => {});
    else { au.pause(); mb.classList.remove('playing'); mb.setAttribute('aria-pressed', 'false'); }
  });
}

/* ============ PARTICLES + SOFT LIGHT ============ */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  const c = $('#fx'), x = c.getContext('2d'); let W, H, P = [];
  const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = c.width = innerWidth * d; H = c.height = innerHeight * d; };
  size(); addEventListener('resize', size);
  const n = innerWidth < 600 ? 28 : 50;
  for (let i = 0; i < n; i++) P.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + .4, s: Math.random() * .00015 + .00004, a: Math.random() * .5 + .15, p: Math.random() * 6 });
  (function tick(t) {
    x.clearRect(0, 0, W, H);
    for (const p of P) {
      p.y -= p.s; if (p.y < -.02) { p.y = 1.02; p.x = Math.random(); }
      const a = p.a * (.6 + .4 * Math.sin(t / 1800 + p.p));
      x.beginPath(); x.arc((p.x + Math.sin(t / 5000 + p.p) * .01) * W, p.y * H, p.r * (W / innerWidth), 0, 7);
      x.fillStyle = `rgba(233,196,160,${a})`; x.shadowColor = 'rgba(201,163,107,.8)'; x.shadowBlur = 8; x.fill();
    }
    requestAnimationFrame(tick);
  })(0);
  const g = $('#glow');
  const mv = e => { const t = e.touches ? e.touches[0] : e; g.style.opacity = 1; g.style.transform = `translate(${t.clientX}px,${t.clientY}px)`; };
  addEventListener('pointermove', mv, { passive: true });
  addEventListener('touchstart', mv, { passive: true });
  addEventListener('touchend', () => setTimeout(() => g.style.opacity = 0, 600));
}
