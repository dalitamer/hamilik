# Project Context

Project: AhiEvran — Kırşehir Hamilik Okulu Website
Location: C:\Users\Durmu\Desktop\AhiEvran
Type: Static 5-page HTML/CSS/JS promotional website
Goal: Public website for the Kırşehir Hamilik Okulu program — a partnership between Hamilik Okulu Vakfı and Kırşehir Ahi Evran Üniversitesi (with Toplumsal Katkı Koordinatörlüğü) — covering program introduction, detail, application form, and contact.
Architecture Principle: Least token consumption, highest output quality, reversible changes, and safe implementation.

# Core Modules

- `index.html` — Home: hero poster slides, partnership band, program intro, module carousel, 2-year journey timeline, CTA
- `hamilik-okulu-nedir.html` — Informational page on Hamilik Okulu, ahilik/futuvvet roots, and official sources
- `program-detayi.html` — Program detail: module cards, structure accordion, application flow, impact/evaluation
- `katilim-formu.html` — Application form with frontend validation
- `iletisim.html` — Contact page
- `assets/` — Per-page CSS/JS, institution logos, and visuals
- `render.yaml` — Render static hosting configuration
- `project_context_wiki.md` — Living project memory; keep updated after each development/check step

# Product & Design Direction

- Polished minimalist light theme
- Hamilik/Ahi Evran blue-green-gold palette
- Corporate but fluid UI
- Smooth, purposeful animations
- Institution logos in navbar (Hamilik Okulu, Ahi Evran) with Toplumsal Katkı Koordinatörlüğü text label; no brand title
- Mobile sticky CTA on all main pages

# Tech Stack

Frontend Framework: None — vanilla HTML5, CSS3, JavaScript
Backend Framework: None — static site
Database: None
Auth: None
State Management: None — plain DOM scripting per page
Styling: Hand-written CSS per page under `assets/`
Package Manager: None
Deployment: Render static hosting (`render.yaml`), deployed via git push to `https://github.com/dalitamer/hamilik.git`
Production URL: https://hamilik.onrender.com/

# Global Rules & Guardrails

- **Token Optimization:** Do not read whole repositories or unrelated files. Start by inspecting directory structures, config files, and relevant modules only. Keep prompts and responses concise.
- **Reversibility:** Keep all code changes minimal, incremental, and strictly reversible.
- **No Blind Coding:** Before implementation, inspect relevant files and present a concise plan (impacted files, rollback strategy). Wait for user approval before modifying code.
- **Security & Secrets:** Never edit `.env` files directly. Never expose secrets, API keys, or credentials.
- **Dependencies:** Do not add new external packages, CDNs, or dependencies without explicit approval.
- **Refactoring Boundaries:** Do not rewrite large existing modules without explicit instruction and approval.
- **Sensitive Operations:** Any changes to forms, data collection, external links, or deployment configuration require a mandatory review by the `security-reviewer` profile.
- **Quality Assurance:** No feature is considered complete until verified by `qa-tester` or verified via clear testing steps.
- **Project Memory:** Update `project_context_wiki.md` after each development/check step.

# Agent Routing & Responsibilities

- **repo-researcher:** Initial codebase inspection, structure discovery, and existing-pattern mapping before any change.
- **sonnet-writer:** Product Requirement Documents (PRD), functional analysis, user documentation, and UX copywriting.
- **opus-backend:** Integrations, deployment configuration, complex technical bugs, and any future server-side logic.
- **codex-ui:** Frontend layout, UI component creation, CSS/styling systems, responsive behaviors, and UI animations.
- **mobile-engineer:** Responsive web UX, mobile-specific layouts, touch interactions, client storage, and navigation.
- **security-reviewer:** Defensive security auditing, form/data-collection checks, external link and dependency risk checks.
- **qa-tester:** Smoke testing, regression checklists, acceptance criteria verification, and release confidence scoring.
- **codex-handoff:** Prepares exact, Codex-ready task prompts when external OpenAI Codex execution is requested.

# Standard Handoff Format

Every agent must close its response strictly using the following structure:
- **What was done:** [Short summary of actions taken]
- **Files inspected:** [List of read files]
- **Files changed:** [List of modified files, or "None"]
- **Commands run:** [List of executed terminal commands, or "None"]
- **Tests performed:** [Summary of verification steps]
- **Risks:** [Identified technical or product risks]
- **Rollback plan:** [How to undo the changes if needed]
- **Next recommended action:** [Clear next step or profile to route to]
