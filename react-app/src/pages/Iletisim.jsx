import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MobileCta from '../components/MobileCta.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import useReveal from '../hooks/useReveal.js';

export default function Iletisim() {
  usePageSetup({
    title: 'İletişim · Toplumsal Katkı Koordinatörlüğü',
    description: 'Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü iletişim bilgileri, e-posta, telefon ve adres bağlantıları.',
    css: 'info',
  });
  useReveal();

  return (
    <>
      <Navbar variant="contact" />

      <section className="info-band contact-intro">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>İletişim kanalları</h2>
            <p>Daha fazla bilgi için iletişim bilgileri aşağıdadır.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-list reveal d1">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5C4 6.9 7 4 10.5 4h3C17 4 20 6.9 20 10.5S17 17 13.5 17H12l-4 3v-3.4a6.4 6.4 0 0 1-4-6.1z" /></svg>
                <div>
                  <b>E-posta</b>
                  <a href="mailto:tkk@ahievran.edu.tr">tkk@ahievran.edu.tr</a>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9z" /></svg>
                <div>
                  <b>Telefon</b>
                  <a href="tel:+903862711212">0386 271 12 12</a>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-4.7 7-11a7 7 0 0 0-14 0c0 6.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                <div>
                  <b>Adres</b>
                  <span>Kırşehir Ahi Evran Üniversitesi</span>
                  <a href="https://www.ahievran.edu.tr/index.php/iletisim" target="_blank" rel="noopener">Üniversite iletişim ve adres bilgileri</a>
                </div>
              </div>
            </div>
            <aside className="contact-panel reveal d2">
              <h2>Kırşehir Ahi Evran Üniversitesi</h2>
              <p>Toplumsal Katkı Koordinatörlüğü ile ilgili bilgi ve yönlendirmeler için üniversitenin resmi iletişim kanallarını kullanabilirsiniz.</p>
              <div className="contact-actions">
                <a href="mailto:tkk@ahievran.edu.tr" className="btn btn-primary">E-posta Gönder <span className="arr">→</span></a>
                <a href="https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365" target="_blank" rel="noopener" className="btn btn-ghost">Koordinatörlük İletişimi</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="info-band alt">
        <div className="wrap">
          <div className="split-info">
            <div className="quiet-panel reveal">
              <h2>Kurumsal bağlantılar</h2>
              <p>Güncel iletişim ve kurumsal bilgilere kurumların resmi sayfaları üzerinden ulaşabilirsiniz.</p>
            </div>
            <div className="text-stack">
              <article className="text-block reveal d1">
                <h3>Hamilik Okulu Vakfı</h3>
                <p><a href="https://hamilikokulu.org/" target="_blank" rel="noopener">hamilikokulu.org</a></p>
              </article>
              <article className="text-block reveal d2">
                <h3>Toplumsal Katkı Koordinatörlüğü</h3>
                <p><a href="https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365" target="_blank" rel="noopener">Koordinatörlük iletişim sayfası</a></p>
              </article>
              <article className="text-block reveal d3">
                <h3>Kırşehir Ahi Evran Üniversitesi</h3>
                <p><a href="https://www.ahievran.edu.tr/" target="_blank" rel="noopener">ahievran.edu.tr</a></p>
              </article>
              <article className="text-block reveal d4">
                <h3>Adres bilgileri</h3>
                <p><a href="https://www.ahievran.edu.tr/index.php/iletisim" target="_blank" rel="noopener">Üniversite iletişim sayfası</a></p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="contact" />
      <MobileCta />
    </>
  );
}
