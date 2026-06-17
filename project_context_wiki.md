# Project Context Wiki

## Current Project
- Workspace: `c:\Users\Durmu\Desktop\AhiEvran`
- Static 5-page HTML/CSS/JS website for **Kırşehir Hamilik Okulu**.
- Partnership: Hamilik Okulu Vakfı x Kırşehir Ahi Evran Üniversitesi.
- Header institutions: Hamilik Okulu Vakfı, Kırşehir Ahi Evran Üniversitesi, and Toplumsal Katkı Koordinatörlüğü.
- Theme: polished minimalist light theme, Hamilik/Ahi Evran blue-green-gold palette, corporate but fluid UI, smooth purposeful animations.
- Rule: keep this file updated after each development/check step and use it as project memory.
- GitHub target remote: `https://github.com/dalitamer/hamilik.git`
- Production URL: `https://hamilik.onrender.com/`

## Active Architecture
```txt
AhiEvran/
├─ index.html
├─ hamilik-okulu-nedir.html
├─ program-detayi.html
├─ katilim-formu.html
├─ iletisim.html
├─ assets/
│  ├─ styles.css
│  ├─ home.css
│  ├─ detail.css
│  ├─ form.css
│  ├─ info.css
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
│  ├─ toplumsal-katki-logo.png
│  ├─ visual-hamilik-kesif.jpeg
│  ├─ visual-hamilik-basvuru.jpg
│  ├─ visual-ahievran-photo-contest.jpg
│  └─ visual-ahievran-tanitim.jpg
├─ render.yaml
└─ project_context_wiki.md
```

## Page Coverage
- `index.html`
  - Navbar: page links on the left, institution logos (Hamilik Okulu, Ahi Evran) plus a `Toplumsal Katkı Koordinatörlüğü` text label on the right; no brand title.
  - 3 hero poster slides.
  - First hero now uses a real visual cover composition with Ahi Evran University and Hamilik Okulu visuals.
  - Partnership band.
  - Program introduction and value map.
  - Animated program info slider.
  - Animated horizontal module carousel.
  - 2-year journey timeline.
  - CTA, institution cards, footer, mobile sticky CTA.
- `hamilik-okulu-nedir.html`
  - New informational page explaining Hamilik Okulu using official Hamilik Okulu sources.
  - Covers hamilik meaning, ahilik/futuvvet roots, vakif founding purpose, program model, and Kirsehir program connection.
  - Includes official source links to Hamilik Nedir, Tarihcemiz, and Hamilik Okulu Programi pages.
- `program-detayi.html`
  - Navbar: page links on the left, institution logos (Hamilik Okulu, Ahi Evran) plus a `Toplumsal Katkı Koordinatörlüğü` text label on the right; no brand title.
  - Program detail hero.
  - Summary cards.
  - Detail journey section.
  - Report-integrated program framework section.
  - Sticky/fixed module navigation with active module scrollspy.
  - 8 rendered module detail cards from `assets/detail.js`.
  - Program structure accordion.
  - Report-derived application flow section.
  - Application model.
  - Impact/evaluation section.
  - Real institutional visuals section.
  - CTA, footer, mobile sticky CTA.
- `katilim-formu.html`
  - Navbar: page links on the left, institution logos (Hamilik Okulu, Ahi Evran) plus a `Toplumsal Katkı Koordinatörlüğü` text label on the right; no brand title.
  - Application hero.
  - Application journey section.
  - Info panel.
  - Frontend validation form.
  - Success state.
  - Footer and mobile sticky CTA.
- `iletisim.html`
  - New standalone contact page using official Hamilik Okulu contact details.
  - Includes email, phone numbers, full Istanbul address, official contact page link, institutional links, and social links.

## Report Integration Decision
- There is **no separate report page** and no active site link to the internal report PDF.
- The old internal report PDF was removed because its filename/metadata contained disallowed wording.
- Report content is now integrated into `program-detayi.html`:
  - project definition and rationale,
  - inner meaning search,
  - historical/social awareness,
  - belief/aesthetics,
  - digital awareness,
  - stance/values,
  - communication/expression,
  - experience-based learning through seminar, workshop, trip, reading, mentoring, and reflection.
- The program is presented as a 2-year process with limited capacity language instead of fixed participant-count copy.

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
- `assets/home.js` drives the home module carousel.
- `assets/detail.js` renders the detailed module cards.

## Active assets
- Required CSS: `styles.css`, `home.css`, `detail.css`, `form.css`, `info.css`, `experience.css`.
- Required JS: `site.js`, `home.js`, `detail.js`, `form.js`, `experience.js`.
- Required images:
  - `assets/hamilik-logo.png`
  - `assets/ahievran-logo.png`
  - `assets/hamilik-logo-header.png`
  - `assets/ahievran-logo-header.png`
  - `assets/toplumsal-katki-logo.png` (temporary placeholder logo)
  - `assets/visual-hamilik-kesif.jpeg`
  - `assets/visual-hamilik-basvuru.jpg`
  - `assets/visual-ahievran-tanitim.jpg`
  - `assets/visual-ahievran-photo-contest.jpg`
- No report PDF is kept in the active project tree.

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
- `assets/image-slot.js`: unused external scaffold not imported by any active page.

## Current Verification State
- `node --check` passes for all active JS files.
- Dev server responds at `http://127.0.0.1:8000/`.
- HTTP 200 returned for `index.html`, `program-detayi.html`, `katilim-formu.html`, `assets/detail.css`, and new real visual assets.
- Static scan found no active report PDF links in the three HTML pages.
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
- Production fix after Render issue:
  - Asset directory was renamed from `Assets/` to lowercase `assets/` and all HTML references were updated to avoid Linux/static-host case sensitivity issues.
  - Render config added in `render.yaml` with static publish path `.`.
  - Home copy was revised:
    - Removed `Bir web sayfası değil, sakin bir gelişim yolculuğu.`
    - Removed `Gerçek kurumsal görsellerle yaşayan bir program dili.`
    - Replaced with program-specific institutional language.
  - Mojibake introduced during bulk path rewrite was repaired across HTML/JS/CSS/wiki files.
  - Pushed fix commit: `f0fc43c Fix Render static asset paths`.
  - Live verification after Render deploy:
    - `https://hamilik.onrender.com/assets/site.js` returns HTTP 200 with `application/javascript`.
    - `https://hamilik.onrender.com/assets/styles.css` returns HTTP 200 with `text/css`.
    - `program-detayi.html` and `katilim-formu.html` return HTTP 200.
    - Removed copy is absent from live homepage; replacement program-specific headings are present.
- GitHub publish prep:
  - `AhiEvran` was not its own git repository; it was only an untracked folder inside parent repo `C:\Users\Durmu`.
  - Target repository `dalitamer/hamilik` is empty and accessible.
  - Publish plan: initialize independent git repo in `AhiEvran`, commit project files on `main`, push to `origin`.
- GitHub publish result:
  - Independent git repo initialized in `AhiEvran`.
  - Remote `origin` set to `https://github.com/dalitamer/hamilik.git`.
  - Initial commit pushed to `main`: `50cf558 Initial Hamilik Okulu website`.
  - Branch `main` tracks `origin/main`.
- Latest copy cleanup:
  - Removed the disallowed phrase from header/logo pseudo text in `assets/styles.css`.
  - Replaced hero eyebrow pseudo text in `assets/experience.css` with `Kırşehir Programı`.
  - Removed the internal source PDF because its embedded metadata still contained the disallowed phrase after filename cleanup.
  - Updated this context wiki so the disallowed phrase is not present in project text.
- Latest participation form/program copy cleanup:
  - Removed the full participation conditions section from `katilim-formu.html`.
  - Removed application-after-evaluation contact copy, including matching meta/hero/success-panel text.
  - Changed visible fixed-capacity copy from 30-person/30-student language to limited-capacity language across active pages.
  - Changed visible program duration copy to 2 years across active pages and this wiki.
  - Removed now-unused participation-conditions CSS from `assets/form.css`.
  - Verification scan found no remaining old participation-conditions, old-duration, fixed-capacity, or evaluation-contact phrases in active project copy.
- Latest header cleanup:
  - Removed the small generated header eyebrow above the brand title in `assets/styles.css`, so the logo/header area no longer shows an extra `Hamilik Okulu` label.
- Latest page additions:
  - Added `hamilik-okulu-nedir.html` as a dedicated Hamilik Okulu explainer page with official-source links.
  - Added `iletisim.html` as a standalone contact page with official address, phone, email, and social/website links.
  - Added `assets/info.css` for shared informational/contact page layouts.
  - Updated nav and mobile menus on all active pages to include the new explainer and contact pages.
  - Updated footer page/kurumsal link lists on all active pages.
  - Changed the shared desktop-to-mobile nav breakpoint to `1080px` so the expanded navigation stays clean.
  - Local static server check returned HTTP 200 for all five HTML pages plus `assets/styles.css` and `assets/info.css`.
  - Local link/asset scan found no missing relative `href` or `src` targets.
  - `node --check` and `git diff --check` passed; in-app browser visual QA could not run because the Browser plugin did not expose an `iab` browser in this session.
- Latest header logo update:
  - Added a third header logo for `Toplumsal Katkı Koordinatörlüğü` across all active HTML pages.
  - Generated temporary transparent PNG asset at `assets/toplumsal-katki-logo.png`.
  - Added responsive sizing for the new `.katki` logo in `assets/styles.css`.
  - Updated shared nav breakpoint to `1240px` so the expanded logo/header area does not crowd desktop navigation.
- Latest home hero update:
  - Added a third homepage hero slide for `Hamilik Okulu Nedir?` linking to `hamilik-okulu-nedir.html`.
  - Changed homepage hero auto-rotation interval from 7 seconds to 10 seconds in `assets/home.js`.
  - Increased desktop hero minimum height and adjusted hero spacing in `assets/home.css` so CTA buttons are not clipped vertically.
  - Added responsive `hamilik-brief` card styling for the third hero slide.

- Latest brand/header restructure:
  - Renamed the program brand from `Hamilik Okulu Kırşehir Programı` to `Kırşehir Hamilik Okulu` across all page titles, meta, headings, body copy, and footers.
  - Updated the hero eyebrow pseudo text in `assets/experience.css` to `Kırşehir Hamilik Okulu` and the `hamilik-okulu-nedir.html` CTA to `Kırşehir Hamilik Okulu'nu İncele`.
  - Replaced the `Toplumsal Katkı Koordinatörlüğü` header logo image with a `.katki-text` text label across all active pages; `assets/toplumsal-katki-logo.png` is now unused.
  - Removed the `Hamilik Okulu Kırşehir Programı` brand title from the header on all pages (the name still appears in page copy).
  - Reordered the navbar via CSS `order`/`margin` so page links sit on the left and the institution logos sit on the right (burger stays left on mobile).

- Latest homepage trim and hero fix:
  - Removed the `home-visual-story` section (visual story/gallery), the `experience-path` journey section, and the `outcomes` mosaic section (`Program Katılımcıya Ne Kazandırır?`) from `index.html`; the partner band and program intro remain.
  - Fixed clipped descenders on the home hero gradient heading in `assets/home.css` (loosened `line-height` and added bottom padding/negative margin on `.hero h1 .grad`).
  - The home hero `<h1>` still reads `Hamilik Okulu Kırşehir Programı` (per-word reveal markup); short brand `Kırşehir Hamilik Okulu` is used in the eyebrow, nav, page titles, and copy.

## Known Constraint
- The application form is frontend-only. It validates locally and shows a success state, but there is no backend submission endpoint yet.

