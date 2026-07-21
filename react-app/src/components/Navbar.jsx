import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const APPLY_URL = 'https://forms.gle/AbC123KirsehirHamilik';

const NAV_ITEMS = [
  { to: '/', nav: 'index.html', label: 'Ana Sayfa', end: true },
  { to: '/hamilik-okulu-nedir', nav: 'hamilik-okulu-nedir.html', label: 'Hamilik Okulu Nedir?' },
  { to: '/program-detayi', nav: 'program-detayi.html', label: 'Program Detayı' },
  { to: '/iletisim', nav: 'iletisim.html', label: 'İletişim' },
  { to: '/katilim-formu', nav: 'katilim-formu.html', label: 'Katılım Şartları' },
];

/* site.js navbar davranışlarının portu: scroll'da .shrink, burger/mobil menü,
   aktif sayfa linki. variant="contact" iletisim.html'deki marka varyantıdır
   (yalnızca üniversite logosu). */
export default function Navbar({ variant = 'default' }) {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const activeClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <>
      {/* ============ NAVBAR ============ */}
      <header className={`nav${shrink ? ' shrink' : ''}`}>
        <div className="wrap">
          <Link className="brand" to="/" aria-label="Ana Sayfa">
            {variant !== 'contact' && (
              <img src="/assets/hamilik-logo-header.png" alt="Hamilik Okulu Vakfı" className="ham" />
            )}
            <img src="/assets/ahievran-logo-header.png" alt="Kırşehir Ahi Evran Üniversitesi" className="ahi" />
            <span className="katki-text">Toplumsal Katkı Koordinatörlüğü</span>
          </Link>
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.nav} to={item.to} end={item.end} data-nav={item.nav} className={activeClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a href={APPLY_URL} className="btn btn-primary desk" target="_blank" rel="noopener noreferrer">
            Başvur <span className="arr">↗</span>
          </a>
          <button className={`burger${open ? ' open' : ''}`} aria-label="Menü" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <nav className={`mobile-menu${open ? ' show' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.nav} to={item.to} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a href={APPLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Başvur ↗
        </a>
      </nav>
    </>
  );
}
