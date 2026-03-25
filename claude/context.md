# Project Context

## Assignment
- **Course:** AI 201 — Creative Computing with AI (SCAD, Professor Tim Lindsey)
- **Project:** "The Hero Faction Screen" — a single-page interactive experience
- **Due:** Wed, April 8, 2026 (20% of final grade)
- **Hosting:** GitHub Pages via GitHub Actions

## Tech Stack
- **Bundler:** Vite 8.x (vanilla — no framework)
- **Languages:** HTML, CSS (Grid), JavaScript
- **Deployment:** GitHub Actions → GitHub Pages
- **Repo:** https://github.com/profangrybeard/Vanilla_Claude
- **Live URL:** https://profangrybeard.github.io/Vanilla_Claude/

## Project Structure
```
Vanilla_Claude/
├── .github/workflows/deploy.yml   # GitHub Actions deploy pipeline
├── claude/                         # AI process documentation
│   ├── reference/                  # Reference material from the user
│   ├── context.md                  # This file
│   ├── ai-direction-log.md        # AI interaction log
│   ├── records-of-resistance.md   # Rejected/revised AI output
│   └── steps.md                   # Step-by-step recreation guide
├── docs/                           # Assignment documents
│   ├── Assignment1.pdf
│   └── Assignment1_part2.pdf
├── src/
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/images/
├── index.html                      # Root page (Vite convention)
├── vite.config.js                  # Vite config (base path set for GH Pages)
├── package.json
└── Vanilla_Claude.code-workspace   # VS Code workspace
```

## Key Rules
- **Design before build.** No code until the design is agreed upon.
- **User is the Art Director.** AI proposes, user decides.
- Design Intent must be human-written before AI engagement (academic integrity).

## Milestones
| Session | Date      | Milestone |
|---------|-----------|-----------|
| 2       | Wed 3/25  | Design Intent due |
| 3       | Mon 3/30  | Vibe Coding begins |
| 4       | Wed 4/1   | First Playable — live on GitHub Pages |
| 5       | Mon 4/6   | Director's Cut — polish & stress-test |
| 6       | Wed 4/8   | Studio Crit + final deliverable due |

## Current Status (2026-03-25)
- Folder structure created
- Vite scaffolded with minimal plumbing test page
- GitHub Actions workflow deployed and Pages confirmed working
- **Next:** User writes Design Intent, then we begin building
