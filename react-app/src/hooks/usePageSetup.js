import { useLayoutEffect } from 'react';

const PAGE_CSS_IDS = ['css-home', 'css-detail', 'css-info', 'css-form'];

/* Orijinal sitede her sayfa kendi CSS'ini yükler (styles.css + <sayfa>.css + experience.css).
   Bu hook aynı modeli korur: route'a göre yalnızca ilgili sayfa CSS'i etkin olur.
   Ayrıca <title>, meta description ve (varsa) body class'ı orijinaldeki gibi ayarlanır. */
export default function usePageSetup({ title, description, css, bodyClass }) {
  useLayoutEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);

    PAGE_CSS_IDS.forEach((id) => {
      const link = document.getElementById(id);
      if (link) link.disabled = id !== `css-${css}`;
    });

    if (bodyClass) {
      document.body.classList.add(bodyClass);
      return () => document.body.classList.remove(bodyClass);
    }
  }, [title, description, css, bodyClass]);
}
