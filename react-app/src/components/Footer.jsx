import { Link } from 'react-router-dom';

/* Orijinal sitedeki iki footer varyantı: default (index, program-detayi,
   hamilik-okulu-nedir, katilim-formu) ve contact (iletisim.html). */
export default function Footer({ variant = 'default' }) {
  const isContact = variant === 'contact';

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand footer-col">
            <div className="footer-logos">
              {!isContact && (
                <span className="chip"><img src="/assets/hamilik-logo.png" alt="Hamilik Okulu Vakfı" /></span>
              )}
              <span className="chip round"><img src="/assets/ahievran-logo.png" alt="Ahi Evran Üniversitesi" /></span>
            </div>
            {isContact ? (
              <p>Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü iletişim kanalları.</p>
            ) : (
              <p>Kendini tanıyan, değerleriyle duran, mesleğini anlamla taşıyan gençler için 2 yıllık gelişim yolculuğu.</p>
            )}
            <div className="footer-social">
              {isContact ? (
                <>
                  <a href="https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365" target="_blank" rel="noopener" aria-label="Toplumsal Katkı Koordinatörlüğü"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5C4 6.9 7 4 10.5 4h3C17 4 20 6.9 20 10.5S17 17 13.5 17H12l-4 3v-3.4a6.4 6.4 0 0 1-4-6.1z"/></svg></a>
                  <a href="https://www.ahievran.edu.tr/index.php/iletisim" target="_blank" rel="noopener" aria-label="Kırşehir Ahi Evran Üniversitesi İletişim"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-4.7 7-11a7 7 0 0 0-14 0c0 6.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></a>
                </>
              ) : (
                <>
                  <a href="https://www.instagram.com/hamilikokulu/" target="_blank" rel="noopener" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                  <a href="https://www.youtube.com/channel/UCqxZhrKy-96dTs86fPvtr-g?view_as=subscriber" target="_blank" rel="noopener" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg></a>
                  <a href="https://www.linkedin.com/company/hamilikokulu" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 110 4 2 2 0 010-4zM3 9h2v12H3zM9 9h2v2c.5-1 2-2 4-2 3 0 4 2 4 5v8h-2v-7c0-2-1-3-3-3s-3 1-3 3v7H9z"/></svg></a>
                </>
              )}
            </div>
          </div>
          <div className="footer-col">
            <h4>Kurumsal</h4>
            {isContact ? (
              <>
                <a href="https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365" target="_blank" rel="noopener">Toplumsal Katkı Koordinatörlüğü</a>
                <a href="https://www.ahievran.edu.tr/" target="_blank" rel="noopener">Kırşehir Ahi Evran Üniversitesi</a>
                <Link to="/program-detayi">Program Hakkında</Link>
              </>
            ) : (
              <>
                <Link to="/hamilik-okulu-nedir">Hamilik Okulu Nedir?</Link>
                <a href="https://hamilikokulu.org/" target="_blank" rel="noopener">Hamilik Okulu Vakfı</a>
                <a href="https://www.ahievran.edu.tr/" target="_blank" rel="noopener">Kırşehir Ahi Evran Üniversitesi</a>
                <Link to="/program-detayi">Program Hakkında</Link>
              </>
            )}
          </div>
          <div className="footer-col">
            <h4>Sayfalar</h4>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/program-detayi">Program Detayı</Link>
            <Link to="/katilim-formu">Katılım Şartları</Link>
            <Link to="/iletisim">İletişim</Link>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <a href="mailto:tkk@ahievran.edu.tr">tkk@ahievran.edu.tr</a>
            <a href="tel:+903862711212">0386 271 12 12</a>
            <a href="https://www.ahievran.edu.tr/index.php/iletisim" target="_blank" rel="noopener">Üniversite adres bilgileri</a>
          </div>
        </div>
        <div className="footer-bottom">
          {isContact ? (
            <>
              <span>© 2026 Kırşehir Ahi Evran Üniversitesi. Tüm hakları saklıdır.</span>
              <span><strong>Toplumsal Katkı Koordinatörlüğü</strong></span>
            </>
          ) : (
            <>
              <span>© 2026 Hamilik Okulu Kırşehir. Tüm hakları saklıdır.</span>
              <span><strong>Hamilik Okulu Vakfı</strong> × <strong>Kırşehir Ahi Evran Üniversitesi</strong></span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
