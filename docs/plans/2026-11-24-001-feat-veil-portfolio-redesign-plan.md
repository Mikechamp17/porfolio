---
title: Veil Portfolio Redesign - Plan
type: feat
date: 2026-11-24
topic: veil-portfolio-redesign
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
product_contract_source: ce-brainstorm
execution: code
---

# Veil Portfolio Redesign - Plan

## Goal Capsule

- **Objective:** Recreate the portfolio homepage as Veil — a dark, minimalist, mysterious single page showing only name, title, and one line, with the chat as the main door.
- **Product authority:** This plan owns the homepage's visible shape and information hiding. Content truth stays in the RAG notes.
- **Open blockers:** None.

## Product Contract

### Summary

Recreate the homepage in the Veil direction: near-black, spacious, and quiet, showing only the name, "Full-stack Developer", "I build AI tools.", tiny footer contact links, and a prominent ask-line that opens into the existing chat.

### Problem Frame

The current homepage reads as a conventional portfolio: hero, about, skills, project cards, and contact in a single light column. It explains more than the owner wants explained. The desired feel is restraint — a visitor should sense the work exists without being walked through it, and should ask if they want more.

### Key Decisions

- Veil over Paper and Index directions — darkness and emptiness carry the mystery, not an archive metaphor. Governs R1, R2.
- Almost nothing on the page — detail lives in the chat, not in sections. Governs R3, R4, R5.
- Chat as the main door — the ask-line is the focal interaction, not a widget below a complete page. Governs R7.

### Requirements

**Visible page**

- R1. The homepage is a single dark page with generous empty space and no card-based layout.
- R2. The name "Mike Schaerer" appears small and understated, not as a large hero headline.
- R3. Under the name, the page shows only "Full-stack Developer" and "I build AI tools." — no about, skills, or positioning copy beyond that.
- R4. No projects are listed on the page at all — no names, descriptions, stacks, or detail pages.
- R5. Contact appears only as tiny footer links to GitHub and LinkedIn.
- R6. Nothing on the page signals freelance availability, hiring, rates, or the employer's name.

**Chat as the door**

- R7. A single ask-line is the page's focal element and expands into the existing conversation view when used.
- R8. Project detail, background, stack, working style, and other work types — including websites customers can edit themselves — are answered only through the chat, from the existing notes.
- R9. Suggestion prompts, if shown, invite questions about the work — never about availability.

### Key Flows

- F1. Visitor lands and reads
  - **Trigger:** Visitor opens the homepage.
  - **Steps:** The visitor sees the name, title, one line, and the ask-line, with footer links below.
  - **Outcome:** The visitor either leaves with an impression or asks a question.
  - **Covers R1, R2, R3, R4, R5, R6.**
- F2. Visitor asks
  - **Trigger:** Visitor submits a question in the ask-line.
  - **Steps:** The ask-line expands into the conversation; the assistant answers from the notes or says it does not know.
  - **Outcome:** Detail is revealed only in answer to a question.
  - **Covers R7, R8.**

### Acceptance Examples

- AE1. **Covers R4, R8.** Given a visitor who wants to know what Mike has built, when they look at the page, then they find no project list and must ask the chat for the answer.
- AE2. **Covers R6.** Given a coworker browsing the page, when they read every visible word, then nothing suggests freelance work or names an employer.
- AE3. **Covers R9.** Given a new visitor, when suggestions are shown, then none of them ask about availability or hiring.

### Scope Boundaries

- No project list, detail pages, about section, or skills list on the page.
- No freelance, rate, or availability copy anywhere visible.
- No Supabase, ingest, or chat-backend changes — this is front-end shape only; a working chat remains a separate concern.

### Dependencies / Assumptions

- The existing RAG notes remain the only source the chat answers from.
- The existing chat interaction (ask, stream, suggestions) is reused; only its place and prominence on the page change.

### Outstanding Questions

- None blocking. Exact type, spacing, and motion are left to planning.

---

## Planning Contract

Product Contract preservation: unchanged. Front-end only; chat backend, ingest, and RAG contract stay as-is.

### Key Technical Decisions

- KTD1. Recreate in place — rewrite the homepage composition and theme tokens rather than adding a new route. The URL and chat endpoint do not change.
- KTD2. Dark theme via the existing CSS-variable tokens in `src/app/globals.css`, flipped to a near-black palette. No new styling dependency.
- KTD3. Delete now-unused homepage components (`site-header`, `section-heading`, `project-card`) and trim `src/lib/data.ts` to footer socials only, so no hidden project/skills data ships in the page bundle. `typewriter` is dropped from the hero (static small name per R2) and deleted if unused.
- KTD4. Keep `AskMe`'s fetch/stream logic untouched; restyle only its presentation into a single hairline ask-line that expands above the input when messages exist.

### Implementation Units

### U1. Veil theme and shell

- **Goal:** The app shell renders near-black with quiet hairlines and no dotted light background.
- **Requirements:** R1.
- **Dependencies:** None.
- **Files:** `src/app/globals.css`, `src/app/layout.tsx`
- **Approach:** Flip the `--paper/--ink/--line/--accent` tokens to a dark palette (near-black background, off-white ink, muted hairlines, restrained accent), remove the radial dot background, keep Tailwind v4 `@theme inline` mapping unchanged so existing utility names keep working.
- **Patterns to follow:** Existing token names in `src/app/globals.css`; no hardcoded colors in components.
- **Test scenarios:** Test expectation: none -- styling tokens only; verified visually in U3's browser check.
- **Verification:** Pages render dark with no light surfaces; selection/caret still visible.

### U2. Homepage recreation

- **Goal:** The homepage shows only the small name, "Full-stack Developer", "I build AI tools.", the ask-line, and tiny footer links.
- **Requirements:** R2, R3, R4, R5, R6.
- **Dependencies:** U1.
- **Files:** `src/app/page.tsx`, `src/lib/data.ts`, `src/components/site-header.tsx` (delete), `src/components/section-heading.tsx` (delete), `src/components/project-card.tsx` (delete), `src/components/typewriter.tsx` (delete if unused)
- **Approach:** Single full-height column with generous empty space; small name, mono uppercase title, one line; `AskMe` near the bottom as the focal element; footer with © and GitHub/LinkedIn from `socials`. Remove all sections, cards, and links to `#projects`/`#about`.
- **Patterns to follow:** Existing `socials` shape in `src/lib/data.ts`; semantic landmarks (`main`, `footer`, `h1` for the name).
- **Test scenarios:**
  - Covers AE2. Render the homepage and read all visible text: no freelance, hiring, rate, or employer wording appears.
  - Covers AE1. Render the homepage: no project names or descriptions are visible anywhere.
  - Footer contains exactly the GitHub and LinkedIn links from `socials`.
- **Verification:** `npm run lint` and `npm run build` pass; rendered page matches the three checks above.

### U3. Ask-line restyle

- **Goal:** The chat reads as one quiet hairline prompt that expands into the conversation in place.
- **Requirements:** R7, R8, R9.
- **Dependencies:** U1.
- **Files:** `src/components/ask-me.tsx`
- **Approach:** Keep state, streaming, rate-limit error handling, and suggestions logic. Restyle the form to a top-hairline mono ask-line, conversation as plain stacked text (no card), suggestions as quiet text buttons. Suggestions stay work-only.
- **Patterns to follow:** Existing `AskMe` behavior; token utilities only.
- **Test scenarios:**
  - Covers AE3. With no messages, suggestions shown are work-only (build/stack/AI), none about availability.
  - Submitting a question appends user + streaming assistant messages above the ask-line (manual/browser check; backend may be unavailable locally, error state must render quietly).
  - Empty submit and disabled-while-busy behavior unchanged.
- **Verification:** Browser check on desktop and mobile widths; error state visible when chat backend is down.

### Risks

- Dark flip via shared tokens also darkens any residual utility usage — mitigated by deleting unused components in U2.
- Chat backend (Supabase) is currently unreachable from Vercel env; the page must still look complete and fail quietly. Out of scope to fix here.

---

## Verification Contract

- `npm run lint` passes.
- `npm run build` passes (ingest soft-fail on unreachable Supabase is acceptable; see PR #2).
- Browser check: desktop + mobile render only name/title/one line/ask-line/footer; no project list; no freelance or employer wording.
- Chat error state renders when the backend is unavailable; no layout breakage.

## Definition of Done

- R1–R9 hold on the rendered homepage.
- Unused homepage components and data are removed.
- Lint and build pass; browser check recorded in the PR.
