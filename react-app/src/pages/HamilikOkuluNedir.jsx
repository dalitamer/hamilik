import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MobileCta from '../components/MobileCta.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import useReveal from '../hooks/useReveal.js';

export default function HamilikOkuluNedir() {
  usePageSetup({
    title: 'Hamilik Okulu Nedir? · Hamilik Okulu Kırşehir',
    description: "Hamilik Okulu'nun ahilik, fütüvvet, mesleki rehberlik ve insan yetiştirme yaklaşımını anlatan bilgilendirme sayfası.",
    css: 'info',
  });
  useReveal();

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero-grid">
            <div className="reveal">
              <span className="eyebrow show-pill"><span className="dot"></span> Hamilik Okulu Vakfı</span>
              <h1>Hamilik Okulu nedir?</h1>
              <p className="lead">Kadim ahilik değerlerini modern meslek hayatıyla buluşturan, gençlerin mesleklerine maddi kazanımların ötesinde ahlaki, insani ve manevi değerlerle bakmasını amaçlayan bir vakıf hareketi.</p>
              <div className="hero-actions">
                <a href="#vakif-hakkinda" className="btn btn-primary">Vakfı Tanıyın <span className="arr">→</span></a>
              </div>
            </div>
            <figure className="page-visual reveal d2">
              <img src="/assets/visual-hamilik-kesif.jpeg" alt="Hamilik Okulu etkinliğinden bir buluşma" />
              <figcaption className="visual-note">
                <b>Meslek, ahlak ve insan</b>
                <span>Geçmişin birikiminden geleceğin meslek hayatına uzanan değer yolculuğu.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="info-band foundation-story" id="vakif-hakkinda">
        <div className="wrap">
          <div className="story-intro reveal">
            <span className="story-year" aria-label="Kuruluş yılı 2012">2012</span>
            <div>
              <span className="eyebrow">Kuruluş gayesi</span>
              <h2>Kadim değerlerden modern meslek hayatına</h2>
              <p>Hamilik Okulu Vakfı, Selçuklu ve Osmanlı medeniyetlerindeki “Ahilik ve Esnaf/Meslek Teşkilatları”nın “ahlaki” ve “insani” değerlerini üniversitede öğrenim görmekte olan gençlere tanıtmak, farkındalıklarını arttırmak ve meslek hayatına sadece maddi değil, aynı zamanda manevi ve moral “değerler” ile de bakmalarını sağlayacak bir idraki kazandırmak gayesiyle, 2012 yılında kurulmuştur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-band alt">
        <div className="wrap">
          <div className="story-grid">
            <article className="story-card values reveal">
              <span className="story-index">01</span>
              <h2>Değerleri bugünün dilinde yeniden düşünmek</h2>
              <p>Çalışma aynı zamanda, sözü edilen “kadim değerler”in modern “meslek hayatı” içinde “güncellenmesi” arayışını da kapsamaktadır.</p>
            </article>
            <article className="story-card founders reveal d2">
              <span className="story-index">02</span>
              <h2>Tecrübeyle şekillenen bir birliktelik</h2>
              <p>Vakfın ve programın kurucuları, girişimci, yatırımcı ve profesyonel olarak hâlâ iş hayatında aktif olarak çalışan; her biri de işlerinde uzman, tecrübeli ve başarılı meslek insanlarıdır.</p>
              <p>Daha ziyade İTÜ İşletme Fakültesi mezunu olan kurucuların bu gaye üzerine olan çaba ve birliktelikleri, 1995 yılında ilk olarak kurmuş oldukları Ekotek Vakfı’ndan beri devam etmektedir.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="info-band independence-band">
        <div className="wrap">
          <div className="independence-panel reveal">
            <div className="independence-mark" aria-hidden="true">V</div>
            <div>
              <span className="eyebrow">Bağımsız ve gönüllü katkı</span>
              <h2>Vakıf insanlarının emeğiyle</h2>
              <p>Program herhangi bir kamu ya da özel kuruluşun değil, sözü edilen kurucu “vakıf insan”ların bireysel katkılarıyla sürdürülmektedir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="more-info-band">
        <div className="wrap">
          <div className="more-info-card reveal">
            <div>
              <span className="eyebrow">Daha fazla bilgi için</span>
              <h2>Hamilik Okulu Vakfı'nı yakından tanıyın</h2>
              <p>Vakfın çalışmaları, yaklaşımı ve güncel faaliyetleri için resmi internet sitesini ziyaret edin.</p>
            </div>
            <a href="https://hamilikokulu.org" className="btn btn-light" target="_blank" rel="noopener noreferrer">hamilikokulu.org <span className="arr">↗</span></a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </>
  );
}
