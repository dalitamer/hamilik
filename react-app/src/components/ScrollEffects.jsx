import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/* experience.js'in birebir portu: scroll progress çubuğu, body.is-ready
   ve .path-stage / .hero-visual / .dhero-route tilt efekti. */
export default function ScrollEffects() {
  const barRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-ready');
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const bar = barRef.current;
      if (!bar) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      bar.style.width = `${clamp(progress, 0, 100)}%`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const bound = [];
    document.querySelectorAll('.path-stage, .hero-visual, .dhero-route').forEach((node) => {
      const onMove = (event) => {
        const rect = node.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        node.style.setProperty('--tilt-x', `${clamp(y * -3, -4, 4)}deg`);
        node.style.setProperty('--tilt-y', `${clamp(x * 4, -5, 5)}deg`);
        node.style.setProperty('--glow-x', `${clamp((x + 1) * 50, 0, 100)}%`);
        node.style.setProperty('--glow-y', `${clamp((y + 1) * 50, 0, 100)}%`);
      };
      const onLeave = () => {
        node.style.removeProperty('--tilt-x');
        node.style.removeProperty('--tilt-y');
        node.style.removeProperty('--glow-x');
        node.style.removeProperty('--glow-y');
      };
      node.addEventListener('pointermove', onMove);
      node.addEventListener('pointerleave', onLeave);
      bound.push([node, onMove, onLeave]);
    });
    return () => {
      bound.forEach(([node, onMove, onLeave]) => {
        node.removeEventListener('pointermove', onMove);
        node.removeEventListener('pointerleave', onLeave);
      });
    };
  }, [location.pathname]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={barRef}></span>
    </div>
  );
}
