---
title: Veil Portfolio Redesign - Plan
type: feat
date: 2026-11-24
topic: veil-portfolio-redesign
artifact_contract: ce-unified-plan/v1
artifact_readiness: requirements-only
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
