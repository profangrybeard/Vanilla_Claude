# Records of Resistance

## Record 1 — AI Overstepped into Design Territory
**Date:** 2026-03-25
**What AI produced:** After reading the assignment docs, Claude immediately began asking design questions (theme, mood, color, number of factions) and tried to guide the creative direction.
**Why it was rejected:** The Design Intent is the student's work — it must be human-written before AI engagement. This is both a hard personal rule and an academic integrity requirement per the assignment.
**What happened instead:** User set a firm boundary: "That is my work. I will do that and hand it to you when I am ready." Claude was redirected to focus on infrastructure/plumbing only.

## Record 2 — AI Missed the Reference Folder
**Date:** 2026-03-25
**What AI produced:** When asked to add a reference folder and "just dump these in," Claude created the folder but the user perceived it was missed — the folder wasn't prominently communicated and the response didn't acknowledge the request clearly enough.
**Why it was flagged:** Poor communication. When a user gives a direct instruction, the response needs to clearly confirm it was done, not bury it in a tree diagram.
**What happened instead:** User called it out. Claude verified the folder existed and acknowledged the communication gap.

---

## Future Concerns
- **Vite base path:** If the repo is ever renamed, `base` in `vite.config.js` must be updated or Pages will break.
- **Asset paths:** When real images/fonts are added, they need to go through Vite's asset pipeline (import or place in `public/`) — raw `/src/assets/` paths won't work in production.
- **Hover states scope:** The assignment calls for the *entire page* to react on hover, not just the hovered element. This will need careful CSS/JS architecture when we get to building.
- **No framework:** We're vanilla. If hover state complexity grows, we should consider whether a small state management approach in JS is needed, or if CSS-only can handle it.
