/* ============ Ana Sayfa interactions ============ */
(function () {
  'use strict';

  /* ---------- HERO SLIDER ---------- */
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('#heroDots button');
  var curtain = document.getElementById('curtain');
  var cur = 0, timer;

  function goHero(n) {
    if (n === cur) return;
    n = (n + slides.length) % slides.length;
    if (curtain) { curtain.classList.remove('sweep'); void curtain.offsetWidth; curtain.classList.add('sweep'); }
    setTimeout(function () {
      slides[cur].classList.remove('active');
      slides[n].classList.add('active');
      dots.forEach(function (d, i) { d.classList.toggle('on', i === n); });
      cur = n;
    }, 220);
  }
  function nextHero() { goHero(cur + 1); }
  function startTimer() { stopTimer(); timer = setInterval(nextHero, 10000); }
  function stopTimer() { if (timer) clearInterval(timer); }

  dots.forEach(function (d) { d.addEventListener('click', function () { goHero(+d.dataset.go); startTimer(); }); });
  var hp = document.getElementById('heroPrev'), hn = document.getElementById('heroNext');
  if (hp) hp.addEventListener('click', function () { goHero(cur - 1); startTimer(); });
  if (hn) hn.addEventListener('click', function () { goHero(cur + 1); startTimer(); });
  if (slides.length > 1) startTimer();

  /* ---------- VALUE MAP positioning ---------- */
  function layoutValueMap() {
    var map = document.getElementById('valuemap');
    if (!map) return;
    var nodes = map.querySelectorAll('.vm-node');
    nodes.forEach(function (node, i) {
      var ang = (+node.dataset.a) * Math.PI / 180;
      node.style.left = (50 + 40 * Math.cos(ang)) + '%';
      node.style.top = (50 + 40 * Math.sin(ang)) + '%';
      node.style.transitionDelay = (0.15 + i * 0.1) + 's';
      node.style.transform = 'translate(-50%,-50%)';
    });
  }
  layoutValueMap();
  window.addEventListener('resize', layoutValueMap);

  /* ---------- INFO SLIDES ---------- */
  var panels = document.querySelectorAll('.info-card .panel');
  var infoNum = document.getElementById('infoNum');
  var infoProg = document.querySelectorAll('#infoProgress button');
  var ic = 0;
  function goInfo(n) {
    n = (n + panels.length) % panels.length;
    panels.forEach(function (p, i) { p.classList.toggle('on', i === n); });
    infoProg.forEach(function (b, i) { b.classList.toggle('on', i === n); });
    if (infoNum) infoNum.textContent = ('0' + (n + 1)).slice(-2);
    ic = n;
  }
  infoProg.forEach(function (b) { b.addEventListener('click', function () { goInfo(+b.dataset.go); }); });
  var ipv = document.getElementById('infoPrev'), inx = document.getElementById('infoNext');
  if (ipv) ipv.addEventListener('click', function () { goInfo(ic - 1); });
  if (inx) inx.addEventListener('click', function () { goInfo(ic + 1); });

  /* ---------- MODULE CAROUSEL ---------- */
  var modules = [
    { n: '0. Durak', t: 'Mesleğin İzinde', d: 'Farklı meslek ustalarının tecrübeleriyle mesleğe, sorumluluğa ve insana dair farkındalık kazandıran destekleyici omurga modülü.', c: 'spine' },
    { n: '1. Durak', t: 'Mesleki Bilinç', d: 'Tanışma, mesleki farkındalık ve Ahilik ekseninde insan-toplum-meslek ilişkisini kavrama.' },
    { n: '2. Durak', t: 'İçimizdeki Anlam Arayışı', d: 'Varlık, yaratılış ve gaye üzerine düşünmeyi açan, fıtrat merkezli içsel bir yolculuk.' },
    { n: '3. Durak', t: 'Dünden Bugüne Dünyayı Anlamak', d: 'Tarihsel krizler ve liderlik örnekleriyle dünyayı kavramsal düzeyde okuyabilme.' },
    { n: '4. Durak', t: 'Mana ve Mecra', d: 'İnanç, estetik, sanat ve mimari arasındaki anlam ilişkisini keşfetme.' },
    { n: '5. Durak', t: 'Dijital Perde', d: 'Dijital dünyanın kimlik, zaman, dikkat ve anlam üzerindeki etkilerini fark ettiren bilinç modülü.' },
    { n: '6. Durak', t: 'Duruş ve Değerler', d: 'Karakter, söz ve sorumlulukla inşa edilen dayanıklı bir duruş geliştirme.' },
    { n: '7. Durak', t: 'Kapanış ve Etki Takibi', d: 'Mezuniyet, değerlendirme, geri bildirim ve uzun vadeli etki takibiyle yolculuğu tamamlayan kapanış modülü.' }
  ];
  var icons = {
    0: '<path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6"/>',
    1: '<path d="M8 11l3 3 5-6"/><circle cx="12" cy="12" r="9"/>',
    2: '<circle cx="12" cy="12" r="9"/><path d="M12 7l2 5-2 5-2-5z" fill="currentColor"/>',
    3: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/>',
    4: '<path d="M4 20V11a8 8 0 0116 0v9M4 20h16M9 20v-5h6v5"/>',
    5: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
    6: '<path d="M12 3v6M7 9h10M5 21c0-4 3-7 7-7s7 3 7 7"/>',
    7: '<path d="M5 13l4 4L19 7"/>'
  };
  function cardHTML(m, i) {
    var icon = icons[i] || icons[1];
    var pill = '';
    return '<a class="mod-card ' + (m.c || '') + '" href="program-detayi.html#m' + i + '">' +
      '<div class="mtop"><span class="mnum">' + m.n + '</span>' + pill + '</div>' +
      '<span class="icon-badge ' + (m.c === 'spine' ? 'gold' : (i % 2 ? 'green' : '')) + '" style="margin-top:14px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' + icon + '</svg></span>' +
      '<h3>' + m.t + '</h3><p>' + m.d + '</p>' +
      '<span class="mlink">Detayları Gör <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>';
  }
  var track = document.getElementById('modTrack');
  if (track) {
    var html = modules.map(cardHTML).join('');
    track.innerHTML = html + html; // duplicate for seamless marquee
  }

  /* ---------- TIMELINE fill + active dots ---------- */
  var tlWrap = document.getElementById('tlWrap');
  var tlFill = document.getElementById('tlFill');
  var stops = document.querySelectorAll('.tl-stop');
  var tlDone = false;
  var tlObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !tlDone) {
        tlDone = true;
        if (tlFill) tlFill.style.width = '100%';
        stops.forEach(function (s, i) {
          setTimeout(function () { s.classList.add('act'); }, 220 * i);
        });
      }
    });
  }, { threshold: 0.3 });
  if (tlWrap) tlObs.observe(tlWrap);
})();
