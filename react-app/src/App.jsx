import { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import ScrollEffects from './components/ScrollEffects.jsx';
import Home from './pages/Home.jsx';
import HamilikOkuluNedir from './pages/HamilikOkuluNedir.jsx';
import ProgramDetayi from './pages/ProgramDetayi.jsx';
import Iletisim from './pages/Iletisim.jsx';
import KatilimFormu from './pages/KatilimFormu.jsx';

/* MPA davranışı: her sayfa geçişi en üstten başlar (geri/ileri tuşunda tarayıcı
   kendi kaydırma konumunu geri yükler). */
function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();
  useLayoutEffect(() => {
    if (navType !== 'POP') window.scrollTo(0, 0);
  }, [location.key, navType]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamilik-okulu-nedir" element={<HamilikOkuluNedir />} />
        <Route path="/program-detayi" element={<ProgramDetayi />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/katilim-formu" element={<KatilimFormu />} />
        {/* Eski statik URL'ler için yönlendirmeler */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/hamilik-okulu-nedir.html" element={<Navigate to="/hamilik-okulu-nedir" replace />} />
        <Route path="/program-detayi.html" element={<Navigate to="/program-detayi" replace />} />
        <Route path="/iletisim.html" element={<Navigate to="/iletisim" replace />} />
        <Route path="/katilim-formu.html" element={<Navigate to="/katilim-formu" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
