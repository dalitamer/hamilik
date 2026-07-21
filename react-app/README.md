# Hamilik Okulu Kırşehir — React Uygulaması

Kök dizindeki statik HTML sitenin (index.html, program-detayi.html, hamilik-okulu-nedir.html,
iletisim.html, katilim-formu.html) **birebir React + Vite** dönüşümüdür. Arayüz, metinler,
animasyonlar ve davranışlar orijinalle aynıdır.

## Komutlar

```bash
npm install      # bağımlılıkları kur
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # production çıktısı (dist/)
npm run preview  # dist/ önizlemesi
```

## Mimari

- **CSS dosyaları değiştirilmedi** — `public/assets/` altında orijinalleriyle bayt bayt aynıdır.
  Orijinal sitedeki "her sayfa kendi CSS'ini yükler" modeli korunur: `styles.css` + `experience.css`
  her sayfada; sayfa CSS'i (`home/detail/info/form.css`) route'a göre `usePageSetup` hook'u ile
  etkinleştirilir (index.html'deki `disabled` link'ler). Bu sayede `home.css` ↔ `info.css` gibi
  dosyalar arasındaki `.info-card` sınıf çakışmaları asla yaşanmaz.
- **Davranış portları:** `site.js` → `Navbar` + `useReveal`; `experience.js` → `ScrollEffects`;
  `home.js` → `pages/Home.jsx`; `detail.js` → `pages/ProgramDetayi.jsx` + `data/detailModules.js`.
- **Route'lar:** `/`, `/hamilik-okulu-nedir`, `/program-detayi`, `/iletisim`, `/katilim-formu`.
  Eski `*.html` URL'leri ilgili route'a yönlendirilir (`App.jsx`).

## Yayınlama notu

SPA olduğu için sunucuda **tüm yolların `index.html`'e rewrite edilmesi** gerekir
(Netlify `_redirects`, Vercel `rewrites`, Nginx `try_files` vb.). `dist/` çıktısı bu ayarla
herhangi bir statik hosta konabilir.
