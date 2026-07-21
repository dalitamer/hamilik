import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MobileCta from '../components/MobileCta.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import useReveal from '../hooks/useReveal.js';
import { HOME_MODULES, HOME_MODULE_ICONS } from '../data/homeModules.js';

const HERO_COUNT = 3;

const VALUE_NODES = [
  { a: -90, color: '#009FE3', label: 'Manevi Derinlik' },
  { a: -30, color: '#58B832', label: 'Mesleki Bilinç' },
  { a: 30, color: '#F6B400', label: 'İletişim' },
  { a: 90, color: '#009FE3', label: 'Duruş' },
  { a: 150, color: '#58B832', label: 'Dijital Bilinç' },
  { a: 210, color: '#F6B400', label: 'Tarihsel Bilinç' },
];

const INFO_PANELS = [
  { kicker: 'Program Süresi', title: '2 Yıllık Gelişim Süreci', text: 'Seminer, atölye ve rehberlik oturumlarıyla örülmüş, sürekliliği olan 2 yıllık bir gelişim ve rehberlik yolculuğu.' },
  { kicker: 'Hedef Kitle', title: 'Hazırlık, 1. ve 2. Sınıf Öğrencileri', text: 'Üniversite hayatının başındaki gençlere; erken dönemde kimlik, yön ve değer kazandırmaya odaklanır.' },
  { kicker: 'Katılım Yapısı', title: 'Sınırlı Kontenjan', text: 'Program, derinlikli rehberlik için sınırlı ve özenle seçilmiş bir grupla yürütülecektir.' },
  { kicker: 'Uygulama Modeli', title: 'Seminer · Atölye · Gezi · Tahlil', text: 'Seminer, atölye, saha gezisi, kitap tahlili ve rehberlik oturumlarını bir araya getiren çok katmanlı bir model.' },
  { kicker: 'Program Yaklaşımı', title: 'Aktarım Değil, Deneyim', text: 'Bilgi aktarımı yerine; deneyim, gözlem ve içsel farkındalık temelli, kalıcı bir öğrenme anlayışı esas alınır.' },
];

/* home.js modül kartının birebir JSX karşılığı */
function ModCard({ module: m, index: i }) {
  return (
    <Link className={`mod-card ${m.c || ''}`} to={`/program-detayi#m${i}`}>
      <div className="mtop"><span className="mnum">{m.n}</span></div>
      <span
        className={`icon-badge ${m.c === 'spine' ? 'gold' : i % 2 ? 'green' : ''}`}
        style={{ marginTop: 14 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: HOME_MODULE_ICONS[i] || HOME_MODULE_ICONS[1] }} />
      </span>
      <h3>{m.t}</h3>
      <p>{m.d}</p>
      <span className="mlink">
        Detayları Gör{' '}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
    </Link>
  );
}

export default function Home() {
  usePageSetup({
    title: 'Hamilik Okulu Kırşehir',
    description: 'Ahi Evran Üniversitesi iş birliğiyle; kimlik, duruş, meslek bilinci ve değer merkezli 2 yıllık gelişim yolculuğu.',
    css: 'home',
  });
  useReveal();

  /* ---------- HERO SLIDER (home.js portu) ---------- */
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const timerRef = useRef(null);
  const curtainRef = useRef(null);

  const goHero = (n) => {
    if (n === curRef.current) return;
    n = ((n % HERO_COUNT) + HERO_COUNT) % HERO_COUNT;
    const curtain = curtainRef.current;
    if (curtain) {
      curtain.classList.remove('sweep');
      void curtain.offsetWidth;
      curtain.classList.add('sweep');
    }
    setTimeout(() => {
      curRef.current = n;
      setCur(n);
    }, 220);
  };
  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => goHero(curRef.current + 1), 10000);
  };
  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  /* ---------- INFO SLIDES ---------- */
  const [infoIdx, setInfoIdx] = useState(0);
  const goInfo = (n) => setInfoIdx(((n % INFO_PANELS.length) + INFO_PANELS.length) % INFO_PANELS.length);

  return (
    <>
      <Navbar />

      {/* ============ HERO SLIDER ============ */}
      <section className="hero" id="top">
        {/* Slide 1 */}
        <div className={`hero-slide${cur === 0 ? ' active' : ''}`} data-slide="0">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><span className="dot"></span> Hamilik Okulu × Ahi Evran Üniversitesi</span>
              <h1 className="wreveal">
                <span style={{ animationDelay: '.05s' }}>Hamilik</span>{' '}
                <span style={{ animationDelay: '.15s' }}>Okulu</span>{' '}
                <span style={{ animationDelay: '.25s' }}>Kırşehir</span>{' '}
                <span style={{ animationDelay: '.35s' }} className="grad">Programı</span>
              </h1>
              <p className="lead">Ahi Evran Üniversitesi iş birliğiyle; kimlik, duruş, meslek bilinci ve değer merkezli bir gelişim yolculuğu.</p>
              <div className="hero-tags">
                <span className="tag">2 Yıllık Program</span>
                <span className="tag">Sınırlı Kontenjan</span>
                <span className="tag">Seminer + Atölye + Gezi</span>
                <span className="tag">Üniversite Öğrencileri</span>
              </div>
              <div className="hero-actions">
                <Link to="/katilim-formu" className="btn btn-primary btn-lg">Programa Katıl <span className="arr">→</span></Link>
                <Link to="/program-detayi" className="btn btn-ghost btn-lg">Programı İncele</Link>
              </div>
            </div>
            <div className="hero-visual single-cover" aria-label="Kırşehir Ahi Evran Üniversitesi kampüs görseli">
              <figure className="hero-photo campus-photo">
                <img src="/assets/visual-ahievran-campus-hero.jpg" alt="Kırşehir Ahi Evran Üniversitesi kampüs girişi" />
                <figcaption>Kırşehir Ahi Evran Üniversitesi</figcaption>
              </figure>
              <div className="float-chip c1"><span className="ic" style={{ background: '#EAF8FF', color: '#009FE3' }}>★</span> Ahilik Mirası</div>
              <div className="float-chip c2"><span className="ic" style={{ background: '#F3FAEF', color: '#3F9220' }}>↗</span> Mesleki Bilinç</div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className={`hero-slide${cur === 1 ? ' active' : ''}`} data-slide="1">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><span className="dot"></span> Bütüncül Gelişim Modeli</span>
              <h1>Birlik, Anlam ve <span className="grad">Mesleki Duruş</span> İçin Yeni Bir Yolculuk</h1>
              <p className="lead">Kendini tanıma, manevi farkındalık, iletişim, tarihsel bilinç ve dijital farkındalık ekseninde tasarlanmış bütüncül bir gelişim programı.</p>
              <div className="hero-tags">
                <span className="tag">8 Program Başlığı</span>
                <span className="tag">6 Ana Modül + Omurga</span>
                <span className="tag">Saha Uygulamaları</span>
                <span className="tag">Rehberlik Temelli Model</span>
              </div>
              <div className="hero-actions">
                <Link to="/program-detayi" className="btn btn-primary btn-lg">Modülleri Gör <span className="arr">→</span></Link>
                <Link to="/katilim-formu" className="btn btn-ghost btn-lg">Katılım Şartlarına Git</Link>
              </div>
            </div>
            <div className="route" id="route">
              <div className="route-step" style={{ '--rl': '0px', animationDelay: '.1s' }}><span className="num">1</span><span className="lbl">Mesleki Bilinç</span></div>
              <div className="route-connector"></div>
              <div className="route-step" style={{ '--rl': '24px', animationDelay: '.22s' }}><span className="num">2</span><span className="lbl">Anlam Arayışı</span></div>
              <div className="route-connector" style={{ marginLeft: 57 }}></div>
              <div className="route-step" style={{ '--rl': '48px', animationDelay: '.34s' }}><span className="num">3</span><span className="lbl">Dünyayı Anlamak</span></div>
              <div className="route-connector" style={{ marginLeft: 81 }}></div>
              <div className="route-step" style={{ '--rl': '48px', animationDelay: '.46s' }}><span className="num">4</span><span className="lbl">Mana ve Mecra</span></div>
              <div className="route-connector" style={{ marginLeft: 81 }}></div>
              <div className="route-step" style={{ '--rl': '24px', animationDelay: '.58s' }}><span className="num">5</span><span className="lbl">Dijital Perde</span></div>
              <div className="route-connector" style={{ marginLeft: 57 }}></div>
              <div className="route-step" style={{ '--rl': '0px', animationDelay: '.70s' }}><span className="num">6</span><span className="lbl">Duruş ve Değerler</span></div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className={`hero-slide${cur === 2 ? ' active' : ''}`} data-slide="2">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><span className="dot"></span> Hamilik Okulu Nedir?</span>
              <h1>Mesleğe, İnsana ve <span className="grad">Değerlere</span> Birlikte Bakmak</h1>
              <p className="lead">Hamilik Okulu; ahilik ve fütüvvet geleneğinden beslenen, öğrencinin mesleki yönünü karakter, sorumluluk ve rehberlik bilinciyle güçlendiren tamamlayıcı bir eğitim yaklaşımıdır.</p>
              <div className="hero-tags">
                <span className="tag">Ahilik ve Fütüvvet</span>
                <span className="tag">Mesleki Rehberlik</span>
                <span className="tag">İnsan Yetiştirme</span>
                <span className="tag">Değer Merkezli Eğitim</span>
              </div>
              <div className="hero-actions">
                <Link to="/hamilik-okulu-nedir" className="btn btn-primary btn-lg">Hamilik Okulu Nedir? <span className="arr">→</span></Link>
                <Link to="/program-detayi" className="btn btn-ghost btn-lg">Programla Bağını Gör</Link>
              </div>
            </div>
            <div className="hamilik-brief" aria-label="Hamilik Okulu yaklaşımı">
              <article className="brief-card b1">
                <span>01</span>
                <h3>Hamilik</h3>
                <p>Tecrübe, rehberlik ve koruyucu yol arkadaşlığı.</p>
              </article>
              <article className="brief-card b2">
                <span>02</span>
                <h3>Ahilik Mirası</h3>
                <p>Meslek ahlakı, dayanışma ve sorumluluk bilinci.</p>
              </article>
              <article className="brief-card b3">
                <span>03</span>
                <h3>Gelişim Modeli</h3>
                <p>Seminer, atölye, gezi ve rehberlik akışı.</p>
              </article>
            </div>
          </div>
        </div>

        <div className="hero-curtain" id="curtain" ref={curtainRef}></div>
        <button className="hero-arrow prev" id="heroPrev" aria-label="Önceki" onClick={() => { goHero(curRef.current - 1); startTimer(); }}>‹</button>
        <button className="hero-arrow next" id="heroNext" aria-label="Sonraki" onClick={() => { goHero(curRef.current + 1); startTimer(); }}>›</button>
        <div className="hero-dots" id="heroDots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={cur === i ? 'on' : undefined}
              data-go={i}
              aria-label={`Afiş ${i + 1}`}
              onClick={() => { goHero(i); startTimer(); }}
            ></button>
          ))}
        </div>
      </section>

      {/* ============ PARTNER BAND ============ */}
      <section className="partner">
        <div className="wrap">
          <div className="partner-inner reveal">
            <div className="partner-logos">
              <img className="ham" src="/assets/hamilik-logo.png" alt="Hamilik Okulu Vakfı" />
              <span className="cross"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
              <img className="ahi" src="/assets/ahievran-logo.png" alt="Kırşehir Ahi Evran Üniversitesi" />
            </div>
            <span className="partner-line"></span>
            <div className="partner-text">
              <strong>Ortak Eğitim ve Gelişim Programı</strong>
              <p>Hamilik Okulu Vakfı ve Kırşehir Ahi Evran Üniversitesi ortaklığında yürütülen program; üniversite öğrencilerinin kişisel, manevi, mesleki ve toplumsal farkındalıklarını geliştirmeyi hedefler.</p>
            </div>
          </div>
          <figure className="partner-visual reveal">
            <img src="/assets/visual-kampus-hero-light-2.jpg" alt="Hamilik Okulu Kırşehir'de — Kendini keşfet, farkını geliştir, geleceğe değer kat: Kırşehir Ahi Evran Üniversitesi kampüsü" loading="lazy" width="1711" height="919" />
          </figure>
        </div>
      </section>

      {/* ============ PROGRAM INTRO ============ */}
      <section className="intro grid-bg">
        <div className="wrap">
          <div className="intro-grid">
            <div className="intro-copy reveal">
              <span className="eyebrow"><span className="dot"></span> Program Nedir?</span>
              <h2>Hamilik Okulu Kırşehir Nedir?</h2>
              <p className="lead">Üniversite öğrencilerinin kendini tanımasını, mesleki bilinç kazanmasını, manevi ve ahlaki derinlik geliştirmesini, iletişim becerilerini güçlendirmesini ve tarihsel-toplumsal farkındalık edinmesini amaçlayan kapsamlı bir gelişim programıdır.</p>
              <Link to="/program-detayi" className="btn btn-primary">Programı Detaylı İncele <span className="arr">→</span></Link>
            </div>
            <div className="valuemap reveal d2" id="valuemap">
              <div className="vm-orbit-line" style={{ width: '100%', height: '100%' }}></div>
              <div className="vm-orbit-line" style={{ width: '62%', height: '62%' }}></div>
              <div className="vm-core"><div><span>Hamilik</span><small>DEĞER MERKEZİ</small></div></div>
              {VALUE_NODES.map((node, i) => {
                const ang = (node.a * Math.PI) / 180;
                return (
                  <div
                    key={node.label}
                    className="vm-node"
                    data-a={node.a}
                    style={{
                      left: `${50 + 40 * Math.cos(ang)}%`,
                      top: `${50 + 40 * Math.sin(ang)}%`,
                      transitionDelay: `${0.15 + i * 0.1}s`,
                      transform: 'translate(-50%,-50%)',
                    }}
                  >
                    <span className="d" style={{ background: node.color }}></span> {node.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INFO SLIDES ============ */}
      <section className="infoslides">
        <div className="aura" style={{ width: 380, height: 380, background: '#bfe9ff', top: -80, left: -60, animation: 'auraFloat 16s ease-in-out infinite' }}></div>
        <div className="aura" style={{ width: 360, height: 360, background: '#d6f3c4', bottom: -90, right: -40, animation: 'auraFloat 19s ease-in-out infinite reverse' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="dot"></span> Genel Bakış</span>
            <h2>Program Genel Bilgileri</h2>
            <p>Programın süresini, hedef kitlesini ve uygulama modelini birkaç temel başlıkta özetledik.</p>
          </div>
          <div className="info-stage reveal d2">
            <div className="info-card">
              <div className="info-numside"><span className="big" id="infoNum">{String(infoIdx + 1).padStart(2, '0')}</span></div>
              <div className="info-body" style={{ position: 'relative' }}>
                {INFO_PANELS.map((panel, i) => (
                  <div key={panel.kicker} className={`panel${infoIdx === i ? ' on' : ''}`} data-info={i}>
                    <span className="kicker">{panel.kicker}</span>
                    <h3>{panel.title}</h3>
                    <p>{panel.text}</p>
                  </div>
                ))}
                <div className="info-controls">
                  <div className="info-progress" id="infoProgress">
                    {INFO_PANELS.map((panel, i) => (
                      <button key={panel.kicker} className={infoIdx === i ? 'on' : undefined} data-go={i} onClick={() => goInfo(i)}></button>
                    ))}
                  </div>
                  <div className="info-nav">
                    <button id="infoPrev" aria-label="Önceki" onClick={() => goInfo(infoIdx - 1)}>‹</button>
                    <button id="infoNext" aria-label="Sonraki" onClick={() => goInfo(infoIdx + 1)}>›</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MODULE CAROUSEL ============ */}
      <section className="modules" id="modules">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow"><span className="dot"></span> Program Yolculuğu</span>
            <h2>Yolculuğun Sekiz Durağı</h2>
            <p>Meslekî bilinçten anlam arayışına, tarihten estetiğe uzanan; iki yıla yayılmış sekiz tematik durak.</p>
          </div>
        </div>
        <div className="mod-track-wrap reveal d2">
          {/* Orijinaldeki gibi kartlar kesintisiz kayan şerit için iki kez basılır */}
          <div className="mod-track" id="modTrack">
            {HOME_MODULES.map((m, i) => (
              <ModCard key={`a-${i}`} module={m} index={i} />
            ))}
            {HOME_MODULES.map((m, i) => (
              <ModCard key={`b-${i}`} module={m} index={i} />
            ))}
          </div>
        </div>
        <div className="wrap" style={{ textAlign: 'center', marginTop: 38 }}>
          <Link to="/program-detayi" className="btn btn-ghost btn-lg reveal">Tüm Modülleri İncele <span className="arr">→</span></Link>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-inner reveal">
            <div className="cta-birds">
              <svg className="b" style={{ top: '24%', animationDelay: '0s' }} width="40" height="22" viewBox="0 0 40 22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M2 14C8 6 14 6 20 12M20 12C26 6 32 6 38 14" /></svg>
              <svg className="b" style={{ top: '54%', animationDelay: '6s' }} width="30" height="16" viewBox="0 0 40 22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M2 14C8 6 14 6 20 12M20 12C26 6 32 6 38 14" /></svg>
              <svg className="b" style={{ top: '72%', animationDelay: '11s' }} width="34" height="18" viewBox="0 0 40 22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M2 14C8 6 14 6 20 12M20 12C26 6 32 6 38 14" /></svg>
            </div>
            <h2>Bu Yolculuğun Bir Parçası Ol</h2>
            <p>Hamilik Okulu Kırşehir'e katılmak için başvuru formunu doldurabilir, program detaylarını inceleyerek sürecin sana uygun olup olmadığını değerlendirebilirsin.</p>
            <div className="cta-actions">
              <Link to="/katilim-formu" className="btn btn-white btn-lg">Katılım Şartlarını İncele <span className="arr">→</span></Link>
              <Link to="/program-detayi" className="btn btn-outline btn-lg">Program Detaylarını İncele</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </>
  );
}
