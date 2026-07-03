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
  - Standalone contact page using Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü contact details.
  - Includes `tkk@ahievran.edu.tr`, `0386 271 12 12`, official Toplumsal Katkı Koordinatörlüğü contact link, and Kırşehir Ahi Evran Üniversitesi address/contact link.

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
- Toplumsal Katkı Koordinatörlüğü email: `tkk@ahievran.edu.tr`
- Toplumsal Katkı Koordinatörlüğü phone: `0386 271 12 12`
- Toplumsal Katkı Koordinatörlüğü contact: `https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365`
- Kırşehir Ahi Evran Üniversitesi address/contact: `https://www.ahievran.edu.tr/index.php/iletisim`

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
- The participation page currently uses the temporary placeholder URL `https://forms.gle/AbC123KirsehirHamilik`; replace it with the real external application form URL before accepting applications.
- Participation dates are temporary: application deadline 15 September 2026, interviews 22–24 September 2026, program start 3 October 2026.

## Latest Hamilik Okulu Explainer Redesign (2026-06-20)
- Replaced the previous multi-section `hamilik-okulu-nedir.html` explainer copy with the user-provided institutional history and purpose.
- Retained a visual hero using `assets/visual-hamilik-kesif.jpeg`; revised its caption and lead to match the new narrative.
- New page flow: visual hero, 2012 foundation-purpose story, modernizing ancient values, founders/Ekotek history, independent individual-contribution statement, and official-site CTA.
- Added a dedicated light-theme `Daha fazla bilgi için` card linking to `https://hamilikokulu.org` in a new tab with safe `noopener noreferrer` attributes.
- Removed the previous `Resmi kaynaklar`, `Hamilik yaklaşımının özü`, `Vakıf neden kurulmuş?`, and `Kırşehir programındaki karşılığı` content from this page.
- Added responsive story, founder, independence, and CTA component styles to `assets/info.css`; buttons remain light, with no dark button treatment.
- Verification: new content/link checks pass, removed-heading checks pass, opening/closing section counts match, and `git diff --check` reports no whitespace errors (only expected Windows line-ending notices).
- Local HTTP verification: `http://127.0.0.1:8000/hamilik-okulu-nedir.html` returns HTTP 200. A local Python static server was started on port 8000 for this check.
- In-app browser visual QA was attempted using the required Browser skill, but the browser runtime could not initialize because the session did not provide the required sandbox metadata. Source-level responsive checks remain complete.
- Immediate next step: visually review the page in a browser when the in-app browser runtime is available; no implementation work remains for this request.

## Initial Participation Page Redesign Request (2026-06-20)
- Requested scope: strengthen the `Kırşehir Hamilik Okulu` emphasis in the participation hero, replace the hero lead with copy directing visitors to an external form, remove the embedded frontend form, and replace the current three form-completion steps with `Başvuru`, `Mülakat`, and `Program Başlangıcı` milestones with dates.
- Repository and full git history were searched for `forms.gle` and `docs.google.com/forms`; no external application form URL is present.
- No application, interview, or program-start dates are present in the repository.
- GitHub CLI is installed and authenticated for `dalitamer`; remote `origin` is `https://github.com/dalitamer/hamilik.git`.
- Current worktree also contains the completed, uncommitted Hamilik explainer redesign (`hamilik-okulu-nedir.html`, `assets/info.css`, and this wiki) plus an unrelated untracked `.claude/` directory. The `.claude/` directory must remain excluded from staging.
- Initial blocker was resolved when the user explicitly authorized temporary random link and date values.

## Participation Page Redesign Completed (2026-06-20)
- User authorized temporary random values for the missing link and dates.
- Replaced the small hero eyebrow with a larger, high-emphasis `Kırşehir Hamilik Okulu` program badge and changed the main heading to `Katılım Başvurusu`.
- Replaced the hero lead with: `Kırşehir Hamilik Okulu'na katılmak için aşağıdaki bağlantıda yer alan başvuru formunu doldurabilirsin.`
- Removed the embedded application form, success state, old `Başvuru kısa, süreç derinlikli` journey, and the `assets/form.js` validation script.
- Added two external application CTAs using temporary placeholder `https://forms.gle/AbC123KirsehirHamilik`; links open in a new tab with `noopener noreferrer`.
- Added a three-step timeline: `Başvuru — 15 Eylül 2026`, `Mülakat — 22–24 Eylül 2026`, `Program Başlangıcı — 3 Ekim 2026`.
- Added a visible note that both the dates and form link are temporary and must be updated.
- Rebuilt `assets/form.css` for the new light-theme external-application landing page, responsive timeline, emphasized badge, and visual CTA using `assets/visual-hamilik-basvuru.jpg`.
- Updated all page-local `#form` header/mobile CTA anchors to `#basvuru` so no broken internal anchor remains.
- Verification completed: no `<form>` or `assets/form.js` reference remains, two external links are present, all three milestones/dates are present, HTML section tags and CSS braces are balanced, active JavaScript files pass `node --check`, `git diff --check` passes apart from Windows line-ending notices, and local HTTP returns 200 with the new page content.
- In-app visual QA was attempted with the required Browser skill but could not initialize because this session did not provide the required sandbox metadata.
- Publish scope: include `katilim-formu.html`, `assets/form.css`, deleted `assets/form.js`, completed Hamilik explainer files (`hamilik-okulu-nedir.html`, `assets/info.css`), and this wiki. Exclude unrelated untracked `.claude/`.
- Publish result: created branch `codex/update-participation-page`, committed implementation as `62d0790` (`Update participation and foundation pages`), and pushed the branch to `origin`.
- Draft pull request opened against `main`: `https://github.com/dalitamer/hamilik/pull/1`.
- GitHub app PR creation returned 404 for this repository, so the authenticated GitHub CLI fallback was used successfully as specified by the publish workflow.

## Contact Page Simplification (2026-06-20)
- Removed the large `Program ve vakıf iletişim bilgileri` hero, its visual, email/application buttons, and official-source strip from `iletisim.html`.
- The page now begins directly with `İletişim kanalları` and the copy `Daha fazla bilgi için iletişim bilgileri aşağıdadır.`
- Added `.contact-intro` spacing and a subtle light background so the remaining contact section clears the fixed navigation cleanly.
- Existing email, phone, address, application, and official contact cards below the heading remain unchanged.
- User clarified that delivery must be a direct push to `main`, not a pull-request workflow. The existing draft PR will be closed after `main` is updated.
- Direct-push result: `main` was fast-forwarded and pushed to `origin/main` at commit `a7c0854` (`Simplify contact page`). Draft PR #1 was closed without merging. Untracked `.claude/` remained excluded.

## Participation Hero Duplicate Badge Fix (2026-06-20)
- Removed `.fhero .wrap::before` from the shared generated-eyebrow selectors in `assets/experience.css`.
- The participation hero now shows only the larger `.program-badge`; home and program-detail generated labels remain unchanged.

## Homepage And Contact Update (2026-07-03)
- Updated `iletisim.html` from Hamilik Okulu contact details to Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü details:
  - email `tkk@ahievran.edu.tr`,
  - phone `0386 271 12 12`,
  - coordination contact URL `https://idari.ahievran.edu.tr/toplumsalkatki/sayfa/Iletisim/tr/2365`,
  - university address/contact URL `https://www.ahievran.edu.tr/index.php/iletisim`.
- Updated footer contact columns across all active HTML pages to use the same TKK email, phone, and university address/contact link.
- Removed the homepage `2 Yıllık Yolculuk` timeline section from `index.html`.
- Removed the homepage `Kurumsal güven, ortak yol.` institution panel from `index.html`.
- Simplified the first homepage hero visual from a layered multi-image composition to a single `campus-photo` image slot; current fallback source is `assets/visual-ahievran-tanitim.jpg` because the user-attached replacement image was not available as a local file in the workspace.
- Added responsive `.single-cover` and `.campus-photo` CSS in `assets/home.css` so the hero image remains stable on desktop and mobile.
- Verification:
  - old Hamilik contact email/phones/address are absent from active HTML files,
  - removed homepage headings are absent from active HTML files,
  - `node --check` passes for active JS files,
  - `git diff --check` passes with only expected CRLF warnings,
  - local static HTTP check returned 200 for `index.html` and `iletisim.html`.
- Publish result:
  - committed changes on `main` as `903f06b` (`Update homepage and contact details`),
  - pushed `main` to `origin/main`,
  - added and pushed this follow-up context update so the wiki reflects the published state,
  - untracked `.claude/` remained excluded.

## Contact Page TKK-Only Cleanup (2026-07-03)
- User clarified that the contact page must not show Hamilik Okulu content.
- Removed the Hamilik header logo, `Hamilik Okulu Nedir?` nav/mobile-menu link, Hamilik footer logo, Hamilik footer institutional link, and Hamilik footer copyright/partnership wording from `iletisim.html`.
- `iletisim.html` now contains no `Hamilik`/`hamilik` text and presents only Kırşehir Ahi Evran Üniversitesi / Toplumsal Katkı Koordinatörlüğü contact context.
- Verification:
  - `rg -n "Hamilik|hamilik" iletisim.html` returns no matches,
  - required TKK email, phone, coordination URL, and university address/contact URL are present,
  - `git diff --check` passes with only expected CRLF warning,
  - local HTTP check for `iletisim.html` returned 200.

