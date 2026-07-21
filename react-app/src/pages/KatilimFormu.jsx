import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MobileCta from '../components/MobileCta.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import useReveal from '../hooks/useReveal.js';

export default function KatilimFormu() {
  usePageSetup({
    title: 'Katılım Şartları · Hamilik Okulu Kırşehir',
    description: 'Hamilik Okulu Kırşehir katılım şartları ve başvuru takvimi.',
    css: 'form',
    bodyClass: 'page-katilim',
  });
  useReveal();

  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="fhero">
        <div className="wrap">
          <span className="program-badge reveal"><span className="dot"></span> Hamilik Okulu Kırşehir</span>
          <h1 className="reveal d1">Katılım <span className="grad">Şartları</span></h1>
          <p className="lead reveal d2">Hamilik Okulu Kırşehir'e katılım sürecini ve başvuru takvimini buradan inceleyebilirsin.</p>
          <div className="fhero-mini reveal d3">
            <div className="m"><b>15 Eylül 2026</b><span>Son başvuru</span></div>
            <div className="m"><b>Üniversite Öğrencileri</b><span>Hedef kitle</span></div>
            <div className="m"><b>Sınırlı</b><span>Kontenjan</span></div>
          </div>
        </div>
      </section>

      {/* ============ APPLICATION TIMELINE ============ */}
      <section className="application-timeline">
        <div className="wrap">
          <div className="timeline-heading reveal">
            <span className="eyebrow"><span className="dot"></span> Başvuru Takvimi</span>
            <h2>Üç adımda programa katılım</h2>
            <p>Başvurudan programın ilk gününe uzanan süreci aşağıdaki takvimden takip edebilirsin.</p>
          </div>
          <div className="timeline-grid">
            <article className="timeline-step reveal d1">
              <span className="step-number">01</span>
              <time dateTime="2026-09-15">15 Eylül 2026</time>
              <h3>Başvuru</h3>
              <p>Çevrim içi form üzerinden bilgilerini ve programa katılma motivasyonunu paylaş.</p>
            </article>
            <article className="timeline-step reveal d2">
              <span className="step-number">02</span>
              <time dateTime="2026-09-22">22–24 Eylül 2026</time>
              <h3>Mülakat</h3>
              <p>Başvurusu değerlendirilen adaylarla kısa tanışma görüşmeleri gerçekleştirilir.</p>
            </article>
            <article className="timeline-step reveal d3">
              <span className="step-number">03</span>
              <time dateTime="2026-10-03">3 Ekim 2026</time>
              <h3>Program Başlangıcı</h3>
              <p>Kabul edilen katılımcılarla tanışma ve ilk program buluşması yapılır.</p>
            </article>
          </div>
          <p className="draft-note reveal">Tarihler geçici takvimdir; kesin program duyurusuyla güncellenecektir.</p>
        </div>
      </section>

      {/* ============ KATILIM ŞARTLARI ============ */}
      <section className="participation-conditions" id="sartlar">
        <div className="wrap">
          <div className="timeline-heading reveal">
            <span className="eyebrow"><span className="dot"></span> Katılım Şartları</span>
            <h2>Programa kimler katılabilir?</h2>
            <p>Hamilik Okulu Kırşehir'e katılım için aradığımız temel şartlar aşağıda yer alıyor.</p>
          </div>
          <div className="conditions-grid">
            <article className="condition-item reveal d1">
              <span className="condition-num">01</span>
              <h3>Üniversite Kaydı</h3>
              <p>Kırşehir Ahi Evran Üniversitesi'nde hazırlık, 1. veya 2. sınıf öğrencisi olmak.</p>
            </article>
            <article className="condition-item reveal d2">
              <span className="condition-num">02</span>
              <h3>Sürece Katılım Niyeti</h3>
              <p>2 yıla yayılan program boyunca seminer, atölye ve rehberlik oturumlarına düzenli katılım göstermeye niyetli olmak.</p>
            </article>
            <article className="condition-item reveal d3">
              <span className="condition-num">03</span>
              <h3>Gelişime Açıklık</h3>
              <p>Kişisel gelişim ve anlam arayışına istekli olmak; deneyim temelli öğrenmeye motivasyonla yaklaşmak.</p>
            </article>
            <article className="condition-item reveal d4">
              <span className="condition-num">04</span>
              <h3>Tanışma Mülakatı</h3>
              <p>Başvurusu değerlendirilen adaylar, kısa bir tanışma mülakatına katılır.</p>
            </article>
            <article className="condition-item reveal d1">
              <span className="condition-num">05</span>
              <h3>Sınırlı Kontenjan</h3>
              <p>Program, derinlikli rehberlik için sınırlı ve özenle seçilmiş bir grupla yürütülür; başvurular değerlendirmeye tabidir.</p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </>
  );
}
