import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MobileCta from '../components/MobileCta.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import useReveal from '../hooks/useReveal.js';
import { MODULES, MODULE_ICONS } from '../data/detailModules.js';

const MODNAV_ITEMS = ['all', 'm0', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'];

const CYCLE_NODES = [
  { a: -90, label: 'Başvuru' },
  { a: -38, label: 'Katılım' },
  { a: 13, label: 'Oturum' },
  { a: 64, label: 'Geri Bildirim' },
  { a: 115, label: 'Rehber Gözlemi' },
  { a: 166, label: 'Etki Takibi' },
  { a: 217, label: 'İyileştirme' },
];

/* detail.js centerChip'in birebir portu: aktif çip şeridin içinde yatay olarak
   görünür hale getirilir; sayfa dikey kaydırmasına asla dokunulmaz. */
function centerChip(nav, btn) {
  if (!nav || !btn) return;
  const navRect = nav.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  const fullyVisible = btnRect.left >= navRect.left && btnRect.right <= navRect.right;
  if (fullyVisible) return;
  const current = nav.scrollLeft;
  const offset = (btnRect.left - navRect.left) - (nav.clientWidth - btn.offsetWidth) / 2;
  let target = current + offset;
  const max = nav.scrollWidth - nav.clientWidth;
  if (target < 0) target = 0;
  if (target > max) target = max;
  if (Math.abs(target - current) < 1) return;
  if (typeof nav.scrollTo === 'function') {
    nav.scrollTo({ left: target, behavior: 'smooth' });
  } else {
    nav.scrollLeft = target;
  }
}

function TickIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" style={{ width: 11, height: 11 }}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

/* detail.js moduleHTML'in birebir JSX karşılığı */
function ModuleCard({ module: m }) {
  return (
    <article className={`mdcard reveal ${m.spine ? 'spine' : ''}`} id={m.id} data-mod={m.id}>
      <div className="md-side">
        <span className="mdnum">{m.num}</span>
        <span className="icon-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" dangerouslySetInnerHTML={{ __html: MODULE_ICONS[m.id] || MODULE_ICONS.m1 }} />
        </span>
        <h3>{m.name}</h3>
        <span className="theme">{m.theme}</span>
      </div>
      <div className="md-body">
        <div className="lab">Amaç</div>
        <p className="aim">{m.aim}</p>
        <div className="lab">Ders / Uygulama İçerikleri</div>
        <div className="md-lessons">
          {m.lessons.map((lesson) => (
            <div className="md-lesson" key={lesson}>
              <span className="tick"><TickIcon /></span>
              <span>{lesson}</span>
            </div>
          ))}
        </div>
        {m.leaders && (
          <>
            <div className="lab" style={{ marginTop: 24 }}>Liderlik Örnekleri</div>
            <div className="md-leaders">
              {m.leaders.map((leader) => (
                <span className="lchip" key={leader}>{leader}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

/* Yapı akordeonu: detail.js struct-item davranışının portu (max-height animasyonu) */
function StructItem({ extraClass = '', defaultOpen = false, year, desc, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    setMaxH(open ? body.scrollHeight : 0);
  }, [open]);

  return (
    <div className={`struct-item${extraClass ? ` ${extraClass}` : ''}${open ? ' open' : ''}`}>
      <span className="sdot"></span>
      <div className="struct-head" onClick={() => setOpen(!open)}>
        <div className="sh-l"><span className="yr">{year}</span><span className="pd">{desc}</span></div>
        <span className="chev">▾</span>
      </div>
      <div className="struct-body" ref={bodyRef} style={{ maxHeight: `${maxH}px` }}>
        <div className="struct-body-inner">{children}</div>
      </div>
    </div>
  );
}

export default function ProgramDetayi() {
  usePageSetup({
    title: 'Program Detayı · Hamilik Okulu Kırşehir',
    description: 'Seminer, atölye, gezi, kitap tahlili ve rehberlik süreçleriyle tasarlanmış bütüncül gelişim modeli; modüller, program yapısı ve etki ölçümü.',
    css: 'detail',
  });
  useReveal();

  const containerRef = useRef(null);
  const modnavRef = useRef(null);
  const navWrapRef = useRef(null);
  const modScopeRef = useRef(null);
  const moddetailRef = useRef(null);

  const [activeGo, setActiveGoState] = useState('all');
  const activeGoRef = useRef('all');
  const [floating, setFloating] = useState(false);
  const [modnavH, setModnavH] = useState(0);

  const setActive = useCallback((go) => {
    if (go === activeGoRef.current) return;
    activeGoRef.current = go;
    setActiveGoState(go);
    const nav = modnavRef.current;
    if (nav) centerChip(nav, nav.querySelector(`button[data-go="${go}"]`));
  }, []);

  /* ---- Sticky module nav (detail.js syncFloatingNav portu) ---- */
  useEffect(() => {
    const syncFloatingNav = () => {
      const navWrap = navWrapRef.current;
      const modScope = modScopeRef.current;
      if (!navWrap || !modScope) return;
      const navH = navWrap.offsetHeight || 0;
      const start = modScope.offsetTop;
      const end = modScope.offsetTop + modScope.offsetHeight - navH - 24;
      const probeY = window.scrollY + 76;
      const active = probeY > start && probeY < end;
      setModnavH(navH);
      setFloating(active);
    };
    window.addEventListener('scroll', syncFloatingNav, { passive: true });
    window.addEventListener('resize', syncFloatingNav);
    const t = setTimeout(syncFloatingNav, 200);
    return () => {
      window.removeEventListener('scroll', syncFloatingNav);
      window.removeEventListener('resize', syncFloatingNav);
      clearTimeout(t);
    };
  }, []);

  /* ---- Probe-line scrollspy (detail.js portu) ---- */
  useEffect(() => {
    const syncScrollspy = () => {
      const container = containerRef.current;
      if (!container) return;
      const cards = container.querySelectorAll('.mdcard');
      if (!cards.length) return;
      const probeY = window.innerHeight * 0.38;
      let chosen = null;
      let firstTop = null;
      for (let i = 0; i < cards.length; i++) {
        const r = cards[i].getBoundingClientRect();
        if (i === 0) firstTop = r.top;
        if (r.top <= probeY && r.bottom > probeY) { chosen = cards[i].id; break; }
        if (r.top <= probeY) chosen = cards[i].id;
      }
      if (firstTop !== null && firstTop > probeY) {
        setActive('all');
        return;
      }
      if (chosen) setActive(chosen);
    };
    let scheduled = false;
    const requestScrollspy = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        scheduled = false;
        syncScrollspy();
      });
    };
    window.addEventListener('scroll', requestScrollspy, { passive: true });
    window.addEventListener('resize', requestScrollspy);
    const t = setTimeout(syncScrollspy, 150);
    return () => {
      window.removeEventListener('scroll', requestScrollspy);
      window.removeEventListener('resize', requestScrollspy);
      clearTimeout(t);
    };
  }, [setActive]);

  /* ---- Gelen hash (#m5 gibi) ile modüle kaydırma ---- */
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && /^#m\d$/.test(hash)) {
      const t = setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 130;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActive(hash.slice(1));
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [setActive]);

  const onNavClick = (event, go) => {
    setActive(go);
    centerChip(modnavRef.current, event.currentTarget);
    if (go === 'all') {
      const cards = containerRef.current ? containerRef.current.querySelectorAll('.mdcard') : [];
      cards.forEach((c) => { c.style.display = ''; });
      const moddetail = moddetailRef.current;
      if (moddetail) window.scrollTo({ top: moddetail.offsetTop - 120, behavior: 'smooth' });
    } else {
      const target = document.getElementById(go);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="dhero grid-bg">
        <div className="wrap">
          <div className="dhero-grid">
            <div className="reveal">
              <span className="eyebrow"><span className="dot"></span> Program Detayı</span>
              <h1>Bütüncül Bir <span className="grad">Gelişim Modeli</span></h1>
              <p className="lead">Hamilik Okulu Kırşehir, öğrencilerin meslekle kurduğu ilişkiyi derinleştiren; farkındalık, ahlak, emek ve sorumluluk ekseninde ilerleyen iki yıllık bir gelişim programıdır. Ahi Evran'ın değer mirasını üniversite ortamında yeniden anlamlandırarak mesleğe bütüncül bir bakış kazandırmayı amaçlar.</p>
              <div className="dhero-stats">
                <div className="dstat"><b>8</b><span>Program Başlığı</span></div>
                <div className="dstat"><b>6</b><span>Ana Gelişim Modülü</span></div>
                <div className="dstat"><b>2</b><span>Yıllık Süreç</span></div>
                <div className="dstat"><b>Sınırlı</b><span>Kontenjan</span></div>
              </div>
            </div>
            <div className="dhero-route reveal d2">
              <div className="droute">
                <div className="droute-item spine"><span className="dn">0</span><div><div className="dt">Mesleğin İzinde</div><div className="ds">Destekleyici omurga modülü</div></div></div>
                <div className="droute-item"><span className="dn">1</span><div><div className="dt">Mesleki Bilinç</div><div className="ds">Tanışma · Ahilik</div></div></div>
                <div className="droute-item"><span className="dn">2</span><div><div className="dt">İçimizdeki Anlam Arayışı</div><div className="ds">Fıtrat · Yaratılış</div></div></div>
                <div className="droute-item"><span className="dn">3</span><div><div className="dt">Dünyayı Anlamak</div><div className="ds">Tarih · Liderlik</div></div></div>
                <div className="droute-item"><span className="dn">4</span><div><div className="dt">Mana ve Mecra</div><div className="ds">İnanç estetiği</div></div></div>
                <div className="droute-item"><span className="dn">5</span><div><div className="dt">Dijital Perde</div><div className="ds">Dijital bilinç</div></div></div>
                <div className="droute-item"><span className="dn">6</span><div><div className="dt">Duruş ve Değerler</div><div className="ds">Karakter · Sorumluluk</div></div></div>
                <div className="droute-item"><span className="dn">7</span><div><div className="dt">Kapanış ve Etki Takibi</div><div className="ds">Mezuniyet · Geri bildirim</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ÖZET ============ */}
      <section className="summary">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Program Özeti</span>
            <h2>Programın Dört Temel Ekseni</h2>
          </div>
          <div className="sum-grid">
            <div className="sum-card reveal d1">
              <span className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /></svg></span>
              <h3>Amaç</h3>
              <p>Öğrencilerin kendini tanıma, mesleki bilinç, manevi derinlik, tarihsel farkındalık, dijital bilinç ve iletişim alanlarında gelişimini desteklemek.</p>
            </div>
            <div className="sum-card reveal d2">
              <span className="icon-badge green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h18M3 12h18M3 17h12" /></svg></span>
              <h3>Yöntem</h3>
              <p>Seminer, atölye, uygulama, saha gezisi, kitap tahlili ve rehberlik modelini bir araya getiren çok katmanlı bir yaklaşım.</p>
            </div>
            <div className="sum-card reveal d3">
              <span className="icon-badge gold"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16l-5 2.2 1-5.5-4-3.9 5.5-.8z" /></svg></span>
              <h3>Yaklaşım</h3>
              <p>Bilgi aktarımından çok deneyim, gözlem, içsel farkındalık ve değer temelli duruş geliştirmeye odaklanır.</p>
            </div>
            <div className="sum-card reveal d4">
              <span className="icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5M15 20c0-2.4 1.4-4 3.5-4S22 17.6 22 20" /></svg></span>
              <h3>Hedef Kitle</h3>
              <p>Hazırlık, 1. ve 2. sınıf üniversite öğrencileri; üniversite hayatının başındaki gençler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DETAIL JOURNEY ============ */}
      <section className="experience-path detail-journey">
        <div className="wrap">
          <div className="path-grid">
            <div className="path-copy reveal">
              <h2>Modüller bilgi listesi değil, ilerleyen bir rota.</h2>
              <p>Her başlık öğrenciyi önce fark etmeye, sonra deneyimlemeye ve sonunda kendi mesleki duruşuna taşımaya göre kurgulanır.</p>
              <div className="path-metrics">
                <div className="path-metric"><b>01</b><span>Fark et ve adlandır</span></div>
                <div className="path-metric"><b>02</b><span>Deneyimle ve yorumla</span></div>
                <div className="path-metric"><b>03</b><span>Duruşa dönüştür</span></div>
              </div>
            </div>
            <div className="path-stage reveal d2" aria-label="Program detay yolculuğu">
              <article className="path-card">
                <span>1</span>
                <h3>Fark Et</h3>
                <p>Kişisel yönelim ve program zemini berraklaşır.</p>
              </article>
              <article className="path-card">
                <span>2</span>
                <h3>Deneyimle</h3>
                <p>Seminer, atölye ve saha pratikleri birbirine bağlanır.</p>
              </article>
              <article className="path-card">
                <span>3</span>
                <h3>Taşı</h3>
                <p>Kazanımlar meslek, iletişim ve sorumluluk alanına taşınır.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REPORT-INTEGRATED STORY ============ */}
      <section className="report-brief">
        <div className="wrap">
          <div className="report-grid">
            <div className="report-copy reveal">
              <span className="eyebrow"><span className="dot"></span> Programın Temeli</span>
              <h2>Saha raporundan ölçülebilir bir programa.</h2>
              <p>Birlik Meydanı çalışma raporundaki iki yıllık gelişim kapsamı; Kırşehir uygulaması için 2 yıllık, ölçülebilir ve sahaya taşınabilir bir programa uyarlandı.</p>
              <div className="report-facts">
                <span><b>8</b> başlık</span>
                <span><b>2</b> yıl</span>
                <span><b>Sınırlı</b> kontenjan</span>
                <span><b>6</b> kapsam ekseni</span>
              </div>
            </div>
            <figure className="report-media reveal d2">
              <img src="/assets/visual-ahievran-tanitim.jpg" alt="Kırşehir Ahi Evran Üniversitesi tanıtım görseli" />
              <figcaption>Kırşehir Ahi Evran Üniversitesi yerleşkesi.</figcaption>
            </figure>
          </div>

          <div className="report-principles">
            <article className="report-principle reveal d1">
              <span>01</span>
              <h3>Program Zemini</h3>
              <p>Ahilik ve fütüvvet mirası; mesleği sadece teknik beceri değil, kimlik, emanet, toplumsal fayda ve sorumluluk alanı olarak ele alan bir çerçeveye dönüştürülür.</p>
            </article>
            <article className="report-principle reveal d2">
              <span>02</span>
              <h3>Öğrenme Modeli</h3>
              <p>Seminer, atölye, doğa/kültür gezisi, kitap tahlili, rehberlik ve yansıtma çalışmaları tek bir gelişim ritmine bağlanır.</p>
            </article>
            <article className="report-principle reveal d3">
              <span>03</span>
              <h3>Öğrenci Yolculuğu</h3>
              <p>Öğrenci önce kendini ve mesleğini fark eder; ardından deneyim, gözlem ve geri bildirimle duruşunu görünür hale getirir.</p>
            </article>
            <article className="report-principle reveal d4">
              <span>04</span>
              <h3>İletişim ve İfade</h3>
              <p>Dinleme, sunum, araştırma ve analiz çalışmalarıyla düşünceyi açık, sağlam ve değer merkezli ifade etme becerisi güçlendirilir.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ STICKY MODULE NAV + DETAIL (shared scope) ============ */}
      <div
        className={`mod-scope${floating ? ' nav-floating' : ''}`}
        ref={modScopeRef}
        style={modnavH ? { '--modnav-h': `${modnavH}px` } : undefined}
      >
        <div className={`modnav-wrap${floating ? ' is-floating' : ''}`} ref={navWrapRef}>
          <div className="wrap">
            <div className="modnav" id="modnav" ref={modnavRef}>
              {MODNAV_ITEMS.map((go) => (
                <button
                  key={go}
                  className={activeGo === go ? 'on' : undefined}
                  data-go={go}
                  onClick={(e) => onNavClick(e, go)}
                >
                  {go === 'all' ? 'Tümü' : `Modül ${go.slice(1)}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============ MODULE DETAIL CARDS ============ */}
        <section className="moddetail" ref={moddetailRef}>
          <div className="wrap">
            <div id="mdContainer" ref={containerRef}>
              {MODULES.map((m) => (
                <ModuleCard key={m.id} module={m} />
              ))}
            </div>
          </div>
        </section>
      </div>{/* /mod-scope */}

      {/* ============ PROGRAM STRUCTURE ============ */}
      <section className="structure">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Program Yapısı</span>
            <h2>2 Yıl Boyunca Akış</h2>
            <p>Dönemlere tıklayarak her bölümde işlenen modülleri görebilirsiniz.</p>
          </div>
          <div className="struct-list reveal d2" id="structList">
            <StructItem defaultOpen year="Yıl 1 · Dönem 1" desc="Tanışma ve temel modüller">
              <span className="struct-tag">Modül 1 · Mesleki Bilinç</span>
              <span className="struct-tag">Modül 2 · İçimizdeki Anlam Arayışı</span>
              <span className="struct-tag spine">Mesleğin İzinde</span>
            </StructItem>
            <StructItem extraClass="summer" year="Yaz Tatili" desc="Saha deneyimi">
              <span className="struct-tag trip">İstanbul Gezisi</span>
            </StructItem>
            <StructItem year="Yıl 2 · Dönem 2" desc="Tarih ve estetik">
              <span className="struct-tag">Modül 3 · Dünyayı Anlamak</span>
              <span className="struct-tag">Modül 4 · Mana ve Mecra</span>
              <span className="struct-tag spine">Mesleğin İzinde</span>
            </StructItem>
            <StructItem year="Ara Tatil" desc="Dinlenme ve hazırlık">
              <span className="struct-tag trip">Yansıtma ve okuma dönemi</span>
            </StructItem>
            <StructItem year="Dönem 3" desc="Dijital bilinç ve duruş">
              <span className="struct-tag">Modül 5 · Dijital Perde</span>
              <span className="struct-tag">Modül 6 · Duruş ve Değerler</span>
              <span className="struct-tag spine">Mesleğin İzinde</span>
            </StructItem>
          </div>
        </div>
      </section>

      {/* ============ REPORT FLOW ============ */}
      <section className="report-flow">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Uygulama Akışı</span>
            <h2>Program Dönem Dönem Böyle İlerliyor</h2>
            <p>İçerik tek seferlik bir etkinlik gibi değil; dönemlere yayılan, ölçülen ve geliştirilen bir yolculuk gibi çalışır.</p>
          </div>
          <div className="flow-grid">
            <article className="flow-step reveal d1">
              <span>Hazırlık</span>
              <h3>Seçim ve Uyum</h3>
              <p>Başvuru, tanışma, beklenti okuması ve grup uyumu tamamlanır.</p>
            </article>
            <article className="flow-step reveal d2">
              <span>Dönem 1</span>
              <h3>Kimlik ve Meslek</h3>
              <p>Ahilik, mesleki bilinç, anlam arayışı ve rehberlik omurgası kurulur.</p>
            </article>
            <article className="flow-step reveal d3">
              <span>Yaz</span>
              <h3>Saha ve Gözlem</h3>
              <p>İstanbul gezisi ve saha temaslarıyla öğrenme sınıf dışına taşınır.</p>
            </article>
            <article className="flow-step reveal d4">
              <span>Dönem 2-3</span>
              <h3>Duruş ve Etki</h3>
              <p>Tarih, estetik, dijital bilinç, değerler ve mezuniyet sonrası takip tamamlanır.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ ETKİ ÖLÇÜM ============ */}
      <section className="impact grid-bg">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Etki Ölçüm ve Değerlendirme</span>
            <h2>Süreç Boyunca Ölçülen Gelişim</h2>
          </div>
          <div className="impact-grid">
            <div className="impact-list reveal d1">
              <div className="il"><span className="num">1</span><p><b>Dönemsel Değerlendirme</b>Giriş, ara ve son dönem değerlendirmeleri.</p></div>
              <div className="il"><span className="num">2</span><p><b>Yansıtma Kâğıtları</b>Her oturum sonunda kişisel yansıtma notları.</p></div>
              <div className="il"><span className="num">3</span><p><b>Rehber Gözlem Formları</b>Rehberin grup ve birey gözlemleri.</p></div>
              <div className="il"><span className="num">4</span><p><b>Etki Takibi</b>Mezuniyet sonrası 3 aylık etki takipleri.</p></div>
              <div className="il"><span className="num">5</span><p><b>İyileştirme</b>Geri bildirim odaklı sürekli program iyileştirmesi.</p></div>
            </div>
            <div className="reveal d2">
              <div className="cycle" id="cycle">
                <div className="ring-dash"></div>
                <div className="center"><span>Etki Döngüsü</span></div>
                {CYCLE_NODES.map((node) => {
                  const ang = (node.a * Math.PI) / 180;
                  return (
                    <div
                      key={node.label}
                      className="cnode"
                      data-a={node.a}
                      style={{ left: `${50 + 44 * Math.cos(ang)}%`, top: `${50 + 44 * Math.sin(ang)}%` }}
                    >
                      <span className="cd"></span> {node.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KURUMSAL BİRLİKTELİK ============ */}
      <section className="partnership-panels">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Kurumsal Zemin</span>
            <h2>İki Kurumun Ortak Emaneti</h2>
            <p>Hamilik Okulu Kırşehir; Hamilik Okulu Vakfı’nın değer merkezli rehberlik birikimini, Kırşehir Ahi Evran Üniversitesi’nin akademik zeminiyle buluşturur. Süreci Toplumsal Katkı Koordinatörlüğü koordine eder.</p>
          </div>
          <figure className="pp-visual reveal">
            <img src="/assets/visual-kampus-hero-light.jpg" alt="Hamilik Okulu Kırşehir'de — Kendini keşfet, farkını geliştir, geleceğe değer kat: Kırşehir Ahi Evran Üniversitesi kampüsü" loading="lazy" width="1717" height="916" />
          </figure>
          <div className="pp-grid">
            <article className="pp-panel pp-hamilik reveal d1">
              <div className="pp-logo"><img src="/assets/hamilik-logo.png" alt="Hamilik Okulu Vakfı" /></div>
              <h3>Hamilik Okulu Vakfı</h3>
              <p>Ahilik ve fütüvvet mirasından beslenen, değer merkezli bir rehberlik anlayışıyla gençlere mesleki bilinç, karakter ve anlam arayışında yol arkadaşlığı eder.</p>
            </article>
            <article className="pp-panel pp-ahievran reveal d2">
              <div className="pp-logo"><img src="/assets/ahievran-logo.png" alt="Kırşehir Ahi Evran Üniversitesi" /></div>
              <h3>Kırşehir Ahi Evran Üniversitesi</h3>
              <p>Programın akademik zeminini ve kampüs hayatını sağlar; öğrencinin üniversite yıllarını güçlü bir gelişim ortamına dönüştürecek imkânları sunar.</p>
            </article>
          </div>
          <div className="pp-coord reveal d3">
            <span className="pp-coord-badge">Koordinasyon</span>
            <p><strong>Toplumsal Katkı Koordinatörlüğü</strong>, iki kurum arasındaki iş birliğini yürütür; programın sahada düzenli, ölçülebilir ve öğrenci ihtiyacına duyarlı biçimde ilerlemesini koordine eder.</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </>
  );
}
