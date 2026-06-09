# Project Context Wiki

## Current Project
- Workspace: `c:\Users\Durmu\Desktop\AhiEvran`
- Static 3-page HTML/CSS/JS website for **Hamilik Okulu Kırşehir Programı**.
- Partnership: Hamilik Okulu Vakfı x Kırşehir Ahi Evran Üniversitesi.
- Theme: polished minimalist light theme, Hamilik/Ahi Evran blue-green-gold palette, corporate but fluid UI, smooth purposeful animations.
- Rule: keep this file updated after each development/check step and use it as project memory.
- GitHub target remote: `https://github.com/dalitamer/hamilik.git`

## Active Architecture
```txt
AhiEvran/
├─ index.html
├─ program-detayi.html
├─ katilim-formu.html
├─ Assets/
│  ├─ styles.css
│  ├─ home.css
│  ├─ detail.css
│  ├─ form.css
│  ├─ experience.css
│  ├─ site.js
│  ├─ home.js
│  ├─ detail.js
│  ├─ form.js
│  ├─ experience.js
│  ├─ hamilik-logo.png
│  ├─ ahievran-logo.png
│  ├─ hamilik-logo-header.png
│  ├─ ahievran-logo-header.png
│  ├─ visual-hamilik-kesif.jpeg
│  ├─ visual-hamilik-basvuru.jpg
│  ├─ visual-ahievran-photo-contest.jpg
│  └─ visual-ahievran-tanitim.jpg
├─ Docs/
│  └─ Yolda Birlik Rapor.pdf
└─ project_context_wiki.md
```

## Page Coverage
- `index.html`
  - Navbar with larger cropped institution logos and `Hamilik Okulu Kırşehir Programı` brand title.
  - 2 hero poster slides.
  - First hero now uses a real visual cover composition with Ahi Evran University and Hamilik Okulu visuals.
  - Real visual story/gallery section.
  - Partnership band.
  - Journey/experience narrative section.
  - Program introduction and value map.
  - Animated program info slider.
  - Animated horizontal module carousel.
  - Outcomes mosaic.
  - 1.5-year journey timeline.
  - CTA, institution cards, footer, mobile sticky CTA.
- `program-detayi.html`
  - Navbar with larger cropped institution logos and `Hamilik Okulu Kırşehir Programı` brand title.
  - Program detail hero.
  - Summary cards.
  - Detail journey section.
  - Report-integrated "Yolda Birlik Kurgusu" section.
  - Sticky/fixed module navigation with active module scrollspy.
  - 8 rendered module detail cards from `Assets/detail.js`.
  - Program structure accordion.
  - Report-derived application flow section.
  - Application model.
  - Impact/evaluation section.
  - Real institutional visuals section.
  - CTA, footer, mobile sticky CTA.
- `katilim-formu.html`
  - Navbar with larger cropped institution logos and `Hamilik Okulu Kırşehir Programı` brand title.
  - Application hero.
  - Participation conditions.
  - Application journey section.
  - Info panel.
  - Frontend validation form.
  - Success state.
  - Footer and mobile sticky CTA.

## Report Integration Decision
- There is **no separate report page** and no active site link to `Docs/Yolda Birlik Rapor.pdf`.
- The PDF remains in `Docs/` only as an internal content/source document.
- Report content is now integrated into `program-detayi.html`:
  - project definition and rationale,
  - inner meaning search,
  - historical/social awareness,
  - belief/aesthetics,
  - digital awareness,
  - stance/values,
  - communication/expression,
  - experience-based learning through seminar, workshop, trip, reading, mentoring, and reflection.
- The report's broader 2-year study frame is presented as adapted into the current 1.5-year first-implementation program.

## Module Model
- The site presents 8 program headings consistently:
  - Modül 0: Mesleğin İzinde
  - Modül 1: Mesleki Bilinç
  - Modül 2: İçimizdeki Anlam Arayışı
  - Modül 3: Dünden Bugüne Dünyayı Anlamak
  - Modül 4: Mana ve Mecra
  - Modül 5: Dijital Perde
  - Modül 6: Duruş ve Değerler
  - Modül 7: Kapanış, Mezuniyet ve Etki Takibi
- `Assets/home.js` drives the home module carousel.
- `Assets/detail.js` renders the detailed module cards.

## Active Assets
- Required CSS: `styles.css`, `home.css`, `detail.css`, `form.css`, `experience.css`.
- Required JS: `site.js`, `home.js`, `detail.js`, `form.js`, `experience.js`.
- Required images:
  - `Assets/hamilik-logo.png`
  - `Assets/ahievran-logo.png`
  - `Assets/hamilik-logo-header.png`
  - `Assets/ahievran-logo-header.png`
  - `Assets/visual-hamilik-kesif.jpeg`
  - `Assets/visual-hamilik-basvuru.jpg`
  - `Assets/visual-ahievran-tanitim.jpg`
  - `Assets/visual-ahievran-photo-contest.jpg`
- Internal source document:
  - `Docs/Yolda Birlik Rapor.pdf`

## Official Links And Contact
- Hamilik Okulu: `https://hamilikokulu.org/`
- Hamilik program page: `https://hamilikokulu.org/program/`
- Kırşehir Ahi Evran Üniversitesi: `https://www.ahievran.edu.tr/`
- Ahi Evran tanıtım site: `https://tanitim.ahievran.edu.tr/`
- Instagram: `https://www.instagram.com/hamilikokulu/`
- YouTube: `https://www.youtube.com/channel/UCqxZhrKy-96dTs86fPvtr-g?view_as=subscriber`
- LinkedIn: `https://www.linkedin.com/company/hamilikokulu`
- Email: `info@hamilikokulu.org`
- Phones: `0212 217 05 17`, `0212 217 05 16`
- Address summary: Premier Kampus Ofis, Kağıthane / İstanbul

## Removed As Unnecessary
- `uploads/`: duplicate logos, duplicate PDFs, and pasted image artifacts.
- `dist/`: generated static export duplicating the source tree.
- `Assets/image-slot.js`: unused external scaffold not imported by any active page.

## Current Verification State
- `node --check` passes for all active JS files.
- Dev server responds at `http://127.0.0.1:8000/`.
- HTTP 200 returned for `index.html`, `program-detayi.html`, `katilim-formu.html`, `Assets/detail.css`, and new real visual assets.
- Static scan found no active `href="Docs/Yolda...` report links in the three HTML pages.
- Chrome CDP QA:
  - mobile `390px`: `scrollWidth = 390`, `bodyScrollWidth = 390`.
  - desktop `1440px`: `scrollWidth = 1425`, `bodyScrollWidth = 1425`.
  - `pdfLinks = 0`.
  - all real visual images load with natural widths.
- Temporary QA screenshots and Chrome profile folders were removed.
- Latest dev run check: `http://127.0.0.1:8000/` is already running and returns HTTP 200. Port `8000` is owned by process `36112`.
- Latest header/home/detail update:
  - Cropped header logo assets were generated for stronger visible logo sizing.
  - Header brand title now reads `Hamilik Okulu Kırşehir Programı`.
  - Home hero uses `visual-ahievran-tanitim.jpg` and `visual-hamilik-kesif.jpeg` as a real cover composition.
  - Home visual gallery uses `visual-ahievran-tanitim.jpg`, `visual-hamilik-kesif.jpeg`, and `visual-ahievran-photo-contest.jpg`.
  - Program detail module nav now switches to fixed mode inside module scope; CDP check while scrolled to `#m3` returned `modnavPosition = fixed`, `modnavTop = 74`, `modnavVisible = true`, active button `Modül 3`.
  - Latest CDP mobile home check returned `scrollWidth = 390`.
- GitHub publish prep:
  - `AhiEvran` was not its own git repository; it was only an untracked folder inside parent repo `C:\Users\Durmu`.
  - Target repository `dalitamer/hamilik` is empty and accessible.
  - Publish plan: initialize independent git repo in `AhiEvran`, commit project files on `main`, push to `origin`.

## Known Constraint
- The application form is frontend-only. It validates locally and shows a success state, but there is no backend submission endpoint yet.
