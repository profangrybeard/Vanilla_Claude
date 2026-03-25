# AI Direction Log

## Entry 1 — Project Setup & Folder Structure
**Date:** 2026-03-25
**What was asked:** Create a professional folder structure for a GitHub Pages app, organized for the AI 201 Hero Faction Screen assignment.
**What AI produced:** Initial structure with `docs/`, `src/` (css, js, assets/images), `.github/workflows/`, and `claude/` (context, direction log, resistance records, steps). Also proposed `index.html` inside `src/`.
**Decision:** Kept the structure. User added the requirement for a `claude/reference/` folder. AI caught that Vite convention places `index.html` at the root, not in `src/` — user approved the correction.

## Entry 2 — Vite Scaffolding & GitHub Actions
**Date:** 2026-03-25
**What was asked:** Build the most basic Vite app to test the plumbing — GitHub Actions, Pages deployment, and push workflow.
**What AI produced:** Minimal Vite setup (vanilla, no framework), a deploy workflow using `actions/deploy-pages@v4`, a test `index.html` with placeholder content, and basic CSS/JS files.
**Decision:** Kept as-is. Build succeeded locally. Pushed to `main`. Deployment initially failed with a 404 because GitHub Pages source wasn't set to "GitHub Actions" — resolved by changing the setting in repo > Settings > Pages.

## Entry 3 — AI Redirected Away from Design Work
**Date:** 2026-03-25
**What was asked:** (Implicit) AI read the assignment docs and began prompting for design decisions.
**What AI produced:** A list of design questions about theme, mood, number of factions, and visual references.
**Decision:** Rejected. User established the hard rule that Design Intent is their work. AI was told to stay in the infrastructure lane until the user delivers the design spec.
