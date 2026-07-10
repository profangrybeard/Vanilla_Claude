# Learn This

A self-guided companion to AI 201 — *Creative Computing with AI*, built around this repo.

You don't need to be enrolled. You don't need to know how to code. You need a computer, a few hours spread over a few sittings, and a willingness to make something opinionated.

---

## Start here

By the end you'll have a live web page on the internet — one that transforms when someone hovers over it — and, more importantly, you'll have practiced the working method this class exists to teach.

**The method, in one sentence:** you write the creative plan; the AI writes the code; you judge the code against your plan.

Never the other way around. That inversion is the whole course. Sitting 1 shows you exactly what it looks like.

**How this is organized.** Six *sittings*. No dates, no grades, no deadline. Sitting 0 is one-time setup and is the longest — everything after it is short. Do one a day, or all in a weekend. Each sitting tells you what you'll learn, what you'll do, what "done" looks like, and gives you a checkpoint you can verify yourself.

Every command is written out for you. You never have to invent one.

---

## What you're actually building

The assignment calls it a **Hero Faction Screen** — the character-select screen from a video game. If that means nothing to you, good; the course anticipates that.

> Think of it this way. You are designing an interactive poster for a movie, a band, or a fashion collection. The poster has three to five options. When a viewer hovers on one option, the entire poster shifts to reflect that choice — different color palette, different type treatment, different mood. The unselected options fade or recede. The selected option dominates the space.
>
> — *Companion doc, "If You Are Not a Gamer"*

That's it. That's the artifact. Three to five options, one page, and hovering is the experience.

"Hero," in design, just means the dominant thing on a page. A hero *screen* is a page where the hero changes depending on what you touch.

The principle underneath:

> It is not a menu. It is a mood. […] The screen does not just list options — it performs them.

### Your role

You are the **Art Director**. The AI is your engineering team.

> This is not a metaphor. It is the actual workflow professional creative directors use when working with production teams. The difference is that your production team happens to be an AI. The skill is the same: you must know what you want, communicate it precisely, and evaluate what comes back.

The loop you'll repeat all workshop: **direct → evaluate → revise, reject, or redirect.**

### Why the project is technically easy on purpose

From the instructor's own memo:

> The Hero Faction Screen is designed to be visually dramatic but technically simple — a single page, CSS Grid, hover states, typography. That simplicity is the point. **When the technical ceiling is low, the only variable left is taste.** Students who write a strong Design Intent and hold to it will produce work that looks wildly different from each other. Students who skip the spec and let AI drive will all converge on the same generic output. That contrast is the lesson.

You are not here to learn CSS. You are here to learn to direct.

### The framework with a name

The four habits you'll practice — Design Intent, AI Direction Log, Records of Resistance, and the Five Questions — aren't loose tips. The course groups them under the **Epistemic Stewardship Framework (ESF)**: *a structured way to make sure you stay in the driver's seat when working with AI.*

Each sitting practices one. Keep the name in your head; it's the thing that binds them.

---

## Read this repo like a recording, not a finished product

This repo is a real work session, paused partway through. It is **not** a completed example of the assignment. Being straight with you about what's missing is itself part of the lesson.

If you run this project right now, you'll get a thirty-second self-playing ASCII-robot cartoon that ends by telling you to go write your Design Intent. That's an inside joke the author left in `src/js/main.js`, not the assignment.

Here's the honest inventory:

| Thing | Status |
|---|---|
| Working build + auto-deploy to the web | **Present.** This is why you'll fork it. |
| `claude/ai-direction-log.md` | Present — 3 real entries. |
| `claude/records-of-resistance.md` | Present, but **only 2 of the 3** records the assignment requires. |
| The hero screen itself | **Absent.** `main.js` is the cartoon. You're going to build the real one. |
| A Design Intent | **Absent** — deliberately. The human hadn't written it yet. |
| `README.md` | **Absent**, though `package.json` links to it. |
| `claude/reference/`, `src/assets/images/` | **Absent** — even though three separate files in this repo say they exist. |

That last row deserves a moment. `claude/records-of-resistance.md` states that the reference folder was created and *"Claude verified the folder existed."* It does not exist. Nobody lied — Git simply doesn't track empty folders, so a folder created and never filled never survives a commit.

That is exactly what the third of the Five Questions — **"Did I verify?"** — is built to catch. Documentation asserting something the filesystem contradicts. You can check it yourself in about four seconds, and in Sitting 5 you will.

Read `claude/records-of-resistance.md` and `claude/ai-direction-log.md` for the shape of the practice, not as flawless models. One of them is literally incomplete.

---

## The plumbing, in plain English

No commands in this section. Just the words you're about to meet, so that nothing later leans on a term you haven't been given.

**Terminal** — a window where you type commands instead of clicking. On Windows it's called PowerShell. You'll open one in Sitting 0 and it'll feel strange for about ten minutes.

**Repo** (short for repository) — a project folder that keeps a full history of every change ever made to it.

**Git** — the tool that records that history. It doesn't overwrite; it takes snapshots.

**GitHub** — a website that stores repos online. Git is the tool; GitHub is the place.

**Fork** — your own personal copy of somebody else's repo on GitHub. You get all their files and a fresh history you can't break.

**Clone** — downloading a repo from GitHub onto your actual computer so you can open the files.

**Node** and **npm** — Node runs JavaScript on your machine; npm installs the pieces a project needs. You'll type each maybe twice and never think about them again.

**Vite** — the tool that assembles your files into a website. When you run it, it watches your files and refreshes the browser as you edit.

**GitHub Pages** — the free service that turns a repo into a real, public website with a real URL.

That's the vocabulary you need to start. Three more words — *commit*, *push*, and *deploy* — get defined the moment you first need them, in Sitting 3.

---

## Sitting 0 — Setup

*You'll do this once. It's the longest sitting and the least fun. Everything after it is short.*

**What you'll learn:** what the four basic tools are and how to get a working copy of this project running on your own machine.

### A. Install four things

Do these in order.

1. **A GitHub account** — free, at [github.com](https://github.com). Skip if you have one.
2. **Git for Windows** — [git-scm.com](https://git-scm.com). Click through the installer accepting every default. One of those defaults quietly installs the sign-in helper you'll need in Sitting 3; don't uncheck anything.
3. **Node.js** — [nodejs.org](https://nodejs.org). Click the big green **LTS** button, whatever version number it happens to show. ("LTS" means long-term support — the boring, stable one.) If you find an older tutorial telling you Node 20 is fine, it's out of date; Node 20 stopped getting security updates in April 2026. Take whatever the LTS button gives you.
4. **Visual Studio Code** — [code.visualstudio.com](https://code.visualstudio.com). This is your text editor. Do not use Notepad; it silently adds `.txt` to filenames and will quietly break things.

### B. Close every terminal window, then open a fresh one

This step looks pointless and is not. Windows only notices newly installed commands in terminals opened *after* the install. Nearly everyone who gets `'git' is not recognized` later skipped this.

### C. Fork this repo

Go to the repo's page on GitHub and click **Fork**. You can name the fork anything you like, or just accept the default.

(You may see older notes in this repo warning you to keep the name *exactly* `Vanilla_Claude` or the live site breaks. That used to be true — the site's address was hardcoded to that name. It's since been fixed: `vite.config.js` now uses relative paths, so any repo name works. One less thing to worry about.)

### D. Get it onto your computer, and open a terminal *inside* it

This is where people get stuck, so go slowly. A terminal is always "pointed at" one folder, and commands only affect that folder.

**First, open a terminal where you want the project to live.** In File Explorer, go to your `Documents` folder. Right-click any empty space inside it and choose **Open in Terminal**. PowerShell opens, pointed at Documents.

**Now download your fork** — replace `YOUR-USERNAME` with your actual GitHub username:

```
git clone https://github.com/YOUR-USERNAME/Vanilla_Claude.git
```

That creates a folder in `Documents` named after your fork (`Vanilla_Claude` unless you renamed it). Now step *into* it — use your fork's name if it differs:

```
cd Vanilla_Claude
```

Look at your prompt before typing anything else. It should end in `Vanilla_Claude`. If it ends in your username, `Documents`, or `System32`, you're in the wrong place and every command below will fail confusingly.

> **Remember this move.** Right-click inside a folder → **Open in Terminal**. You'll use it every time you sit back down at this project.

### E. Tell Git who you are

Once, ever. Use the same email as your GitHub account.

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Without this, your first commit is refused with `Author identity unknown` — one command from the finish line.

### F. Run it

```
npm install
```

Takes a minute and prints a wall of text. That's normal.

```
npm run dev
```

It prints a `http://localhost:5173`-ish address. Open it in your browser.

**Done looks like:** the ASCII-robot cartoon plays. The plumbing works. That's the win.

> **The terminal is now busy.** `npm run dev` keeps running until you stop it. To get your prompt back, click the terminal and press **Ctrl+C**. To keep the site running *and* type other commands, open a second terminal the same way you opened the first. This trips people up in Sitting 3.

### G. Open the project in VS Code

You installed an editor. Let's actually use it — Sitting 1 needs it.

Open VS Code. Go to **File → Open Folder**, and choose your `Vanilla_Claude` folder. A file tree appears down the left side: `claude`, `docs`, `src`, `index.html`, and the rest. Click any file to read it. This is how you'll look at and change everything from here on.

**To make a new file:** hover over the top of that file tree, click the little **New File** icon, and type the filename *including its ending* — `DESIGN-INTENT.md`, not `DESIGN-INTENT`. Press Enter, click into the big empty pane, and type.

**To replace a file's contents entirely:** click into it, press **Ctrl+A** (selects everything), then paste over it, then **Ctrl+S** to save. You'll do this three times in Sitting 2.

Never use Notepad for these files. It silently appends `.txt` to names, giving you `styles.css.txt`, which nothing will ever load.

### Checkpoint

Stop the dev server (Ctrl+C) and run these three:

```
git --version
node -v
npm -v
```

Each should print a number. If any says *"not recognized,"* you skipped step B. Close every terminal, open a new one, try again.

### One honest note about your fork

You inherited a working build, a working deploy pipeline, and real files — which is why you get to skip roughly six pages of from-scratch setup that `claude/steps.md` documents. That recipe is fine; forking just means you never have to run it.

But you did *not* inherit everything the repo's own documentation claims. `claude/reference/` and `src/assets/images/` are described in `claude/context.md` and don't exist. The plumbing is real. The documented folder structure is partly fiction. You already knew that from the inventory above — now you've seen it with your own eyes.

---

> ### 📌 Every time you sit back down
>
> Sittings can be days apart. When you return, your computer has forgotten where you were. Before running *any* command in the sittings below:
>
> **Open your `Vanilla_Claude` folder in File Explorer → right-click inside it → Open in Terminal.** Confirm the prompt ends in `Vanilla_Claude`.
>
> If a Git command ever answers `fatal: not a git repository`, this is the only thing that went wrong. You're in the wrong folder. Nothing is broken.

---

## Sitting 1 — Write your Design Intent

*The human part. No AI. No terminal. Possibly no computer.*

**What you'll learn:** what a creative specification is, why it comes first, and what "specific" actually means.

This is the heart of the course. Everything else is downstream.

### Directing versus drifting

Without a spec, the AI produces something, it looks *fine*, and you accept it — because you never defined what *great* meant for your project. The course names this precisely:

> The Design Intent is the difference between directing and drifting.

### What "specific" means

Here is the instructor's own example. Read it twice.

> The Art Director never says "make it look cool." They say "the palette is desaturated teal with warm amber accents, the type is condensed sans-serif at 72pt for headers, and when the user hovers, the background shifts from 15% to 85% opacity over 300ms." That level of specificity is what makes the AI useful. Without it, you get generic.
>
> — *Professor Lindsey, "From the Trenches"*

That is **someone else's finished spec**, shown so you can feel how specific *specific* is. It is not a form to copy. Your palette is not desaturated teal. Your hover is not 300ms unless you decided it was.

### A good Design Intent has

- **Real color values.** Not "dark and moody" — `#1a1a2e` with a `#d4a843` accent. (Open `src/css/styles.css`; that first value is the cartoon's background. Real numbers, not vibes.)
- **Type choices with sizes.**
- **Hover behavior a stranger could build from your words alone.** When one option is hovered, what happens to *the other options*? To the background? Over how many milliseconds?
- **The mood, in one sentence.**
- **The one thing you will not compromise on.**

### Why this document will not give you a template

You may have noticed there's no fill-in-the-blanks form here. That's deliberate.

In this course, an AI-written Design Intent is treated as academic dishonesty — not because it's lazy, but because it's self-defeating. The Design Intent is *the standard you judge the AI's output against*. If the AI writes the standard, there is nothing left in the project that is yours. A template does a milder version of the same damage: it hands you the questions someone else thought were important.

This isn't hypothetical. Read `claude/records-of-resistance.md`, Record 1. When the AI on this project started asking about theme, mood, and color, the human shut it down:

> *"That is my work. I will do that and hand it to you when I am ready."*

You're about to hold the same line, on your own behalf.

### Do this

1. **Pick your subject.** Anything with three to five options that have genuinely different personalities. A band's albums. Three imaginary factions. Four cocktails. Your grandmother's recipes. It does not have to be a game.

2. **Sketch it on paper.** Boxes, arrows, labels. As the brief puts it: your wireframe *"does not need to be beautiful. It needs to be honest."* Mark what happens on hover with arrows.

3. **Answer these in your own words** — they're provocations to think against, not slots to fill:
   - What single feeling should someone have in the first three seconds? One sentence.
   - Go find colors you actually love. Write down their real hex values.
   - When someone hovers one option, describe *in sentences* what the other options do.
   - What is the one thing you refuse to let the AI change?

4. **Write it into a file** in your project called `DESIGN-INTENT.md`. Your words, your judgment.

**Done looks like:** a spec a stranger could build from.

### Checkpoint

Reread it and ask: *could someone who has never met me build my hover effect from these words alone?*

If any part is still a vibe — "clean," "modern," "cool" — rather than a value or a described behavior, it isn't finished. Go back.

---

## Sitting 2 — Direct the AI

*Now the roles flip. You stop writing prose and start directing.*

**What you'll learn:** the direct → evaluate → revise loop. This is the one skill the entire course exists to build. Take your time here.

### The setup

You're going to replace three files — the ones currently holding the cartoon:

- `index.html` — the structure
- `src/css/styles.css` — the look
- `src/js/main.js` — the behavior (you may barely need this)

**The reliable path** (no new software): open [claude.ai](https://claude.ai) in your browser. Paste your Design Intent in full. Ask it to build the hero screen to that spec — three to five options, CSS Grid, and the exact hover behavior you described. Ask for each file separately.

To replace a file's contents in VS Code: click into the file, press **Ctrl+A** (selects everything), **Ctrl+V** (pastes over it), **Ctrl+S** (saves). With `npm run dev` running in your terminal, the browser updates the instant you save.

**A more advanced path,** once you're comfortable: AI coding tools exist that read and edit files in your project folder directly, no copying and pasting. That's how this repo was built — the `claude/` folder is that session's paper trail. Worth exploring later; it is not worth adding an install-and-authenticate detour to today.

**One technical hint worth having in your pocket.** The assignment wants the *whole page* to react on hover, not just the box you're pointing at. The repo's own notes flag this as the tricky part. If the AI struggles, tell it: *"use CSS `:has()` on a parent element so hovering one card restyles the entire page."* Modern CSS does this without any JavaScript. Hand it that phrase and watch what happens.

### The actual work

Give the AI your spec. Look at what comes back. Compare it to your spec, line by line.

Then redirect with specifics. Not *"I don't love it"* — instead:

- *"The amber reads too orange. Use `#d4a843` exactly."*
- *"The hover fade is too fast. 300ms."*
- *"My spec says unselected options recede. They're not receding. Drop them to 30% opacity and desaturate them."*

Reject and re-ask rather than settling. Settling is drifting.

### Two habits to start now

**Your AI Direction Log.** After each meaningful exchange, write one line: what you asked, what it produced, what you kept or changed, and why. Three to five lines across the whole workshop is plenty — the course keeps this deliberately light. A real entry looks like:

> *"Reverted the AI's even 3-column grid — the equal spacing killed the tension I wanted."*

**Your Records of Resistance.** When the AI pulls your work toward the generic and you *stop it*, write that down separately. Three moments. Each answers three questions: what did the AI produce, why did you reject it, what did you do instead?

> Every time you catch the AI pulling your work toward something generic, predictable, or wrong and you redirect it, that decision is the skill your education is building.

These two are different things, and the course keeps them apart. The Log is a diary of the collaboration. A Record of Resistance is specifically a moment you refused — measured against your Design Intent. Resistance is a creative act, not a technical one.

*(`claude/records-of-resistance.md` in this repo has two records where the assignment asks for three. Now you know the bar better than the file does.)*

### A stewardship heuristic worth keeping

The course offers this test:

> If your deliverable references a technique not demonstrated in Sessions 2–5, that is a signal to check your scope.

Translated for you: **if your project now contains something you couldn't explain to a friend, that's a signal — not a victory.** It means the AI took you somewhere you didn't choose to go. Go read it, understand it, or cut it. This is what "staying in the driver's seat" means in practice.

**Done looks like:** `npm run dev` shows *your* poster. Your colors, your options. Hovering changes the page the way your spec promised. Rough is fine — the class motto at this stage is *"working, not perfect."*

### Checkpoint

Hover every option. Does each one do what your Design Intent promised?

That comparison — screen against spec, point by point — *is* the skill. Not the CSS.

---

## Sitting 3 — Go live

*From a page on your laptop to a public URL you can text to someone.*

**What you'll learn:** commit, push, and deploy. Three concepts, one sentence each.

A **commit** is a saved snapshot. A **push** sends your snapshots up to GitHub. **GitHub Pages** turns what you pushed into a real website.

### First: turn the website on. Before you push.

Order matters here, and getting it backwards produces a scary red X on a perfectly good project.

1. On your fork's GitHub page, click the **Actions** tab. Forks start with automation switched off — click the green button confirming you want to enable workflows.
2. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Then: save and send

If `npm run dev` is still running, press **Ctrl+C** first, or open a second terminal.

```
git add .
git commit -m "My hero screen"
git push
```

### About that first push

A window will pop up. **This is expected.** Click **"Sign in with your browser,"** log into GitHub in the browser tab that opens, and you're done. Nothing to copy, nothing to paste.

If you ever see *"Support for password authentication was removed"* — that just means it wanted the browser sign-in, not your GitHub password. Push again and choose the browser option.

### Watch it deploy

On GitHub, the **Actions** tab shows a job running. A green check means you're live at:

```
https://YOUR-USERNAME.github.io/Vanilla_Claude/
```

**Done looks like:** your poster loads at that address, and you can send the link to someone who will actually click it.

### Checkpoint — the incognito test

Open your live URL in a **private/incognito browser window.** The course insists on this, and it's right: your normal browser may be showing you a cached version that no one else can see.

If it loads and the hover works, you are genuinely live.

If you get a **blank page or a 404** the very first time, give it a minute or two — the first deploy lags — then hard-refresh (Ctrl/Cmd+Shift+R). If it persists, double-check you're visiting the exact URL `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (trailing slash included) and that the deploy showed a green check. See troubleshooting below.

---

## Sitting 4 — Break it on purpose, then undo it

*The safety net. Once you trust it, you'll experiment far more freely.*

**What you'll learn:** why professionals aren't afraid to try things.

Git does not delete your mistake when you undo it. It writes a *new* snapshot that reverses it. Both the mistake and the fix stay in the history, permanently. Nothing is ever actually lost. This is Session 5 of the class — *"intentionally breaking the layout, then using Git to revert."*

### Study the worked example already in your history

This repo contains a real one. Someone added a gaudy test button with confetti, looked at it, and undid it eight minutes later.

```
git log --oneline
```

You'll see these two, adjacent:

```
bd6b174 Revert "Add plumbing test button — confetti, shake, color toggle"
7f0df4b Add plumbing test button — confetti, shake, color toggle
```

Look at what went in, then what came out:

```
git show 7f0df4b
git show bd6b174
```

> These two open a scrollable viewer rather than printing and finishing. Use the arrow keys to scroll, and **press `q`** to get your prompt back. It hasn't frozen — it's waiting for you.

Watch how *clean* the undo is. The button, its CSS, the shake animation, **and** the entire `canvas-confetti` software dependency it dragged in — all went in together, all came back out together. Nothing was orphaned.

Prove it to yourself:

```
git diff 7f0df4b~1 bd6b174
```

Empty output. The project after the undo is byte-for-byte identical to the project before the mistake.

*(The cartoon knows. Its credits read "CONFETTI (reverted) — canvas-confetti (gone too soon).")*

### Now do it yourself

Make a genuinely bad change to your screen. Turn every color garish. Break your grid on purpose. Save it, look at it in the browser, confirm it's ugly, then commit it:

```
git add .
git commit -m "Deliberately hideous"
```

Now take it back:

```
git revert --no-edit HEAD
```

Your good version returns, untouched. And your history honestly records both that you broke it and that you fixed it.

*(That `--no-edit` matters. Without it, Git opens a text editor to ask you to approve the undo message — and the editor it opens by default is one you cannot type in, save, or quit without knowing a secret handshake. `--no-edit` accepts the message for you.)*

**Done looks like:** your screen is back, and `git log --oneline` shows both commits.

### Checkpoint

Can you explain, to yourself, why the revert didn't *erase* anything?

If yes, you have the concept — and you never need to be afraid of trying something in this project again.

---

## Sitting 5 — The crit with yourself

*The class ends by presenting your work to a room and defending it. You don't have a room. The skill underneath transfers anyway.*

**What you'll learn:** how to audit your own work honestly.

Answer these five, in a short paragraph. They take five minutes.

1. **Can I defend this?** Can I explain every major decision in this project?
2. **Is this mine?** Does this reflect my creative direction, or did I mostly follow AI's suggestions?
3. **Did I verify?** Did I check that things work the way I think they work?
4. **Would I teach this?** Do I understand it well enough to explain it to someone else?
5. **Is my documentation honest?** Does my AI Direction Log accurately describe what I asked and what I changed?

### On question 3, using this repo

Go on — verify a claim right now. `claude/records-of-resistance.md` says the `claude/reference/` folder was created and *"Claude verified the folder existed."*

```
ls claude/
```

It's not there. It never was, in any commit — Git doesn't track empty folders.

Nobody was dishonest. Someone simply wrote down a verification they hadn't actually performed. That is the *entire* reason question 3 exists, and you just caught it in a real project in under ten seconds. Now go point that same skepticism at your own work.

### On question 5

> Fabricated documentation is worse than missing documentation. If you forgot to log something, say so. Honest disclosure of a gap is always better than a fiction.

**Done looks like:** five honest answers written down.

If an answer is *"not really mine"* or *"I didn't actually check"* — that isn't failure. That's the audit doing its job. It just told you what to go fix.

### Checkpoint

Could you walk a friend through your live page and explain every color, every hover, and one specific thing you made the AI redo — without hesitating?

That's what the final crit is really testing.

---

## When something breaks

| What you see | What it means | Fix |
|---|---|---|
| `'git' / 'node' / 'npm' is not recognized` | Windows hasn't noticed the install yet | Close **every** terminal, open a fresh one (Sitting 0B) |
| Blank page or 404 on your live site | First deploy still propagating, or the URL is off | Wait 1–2 min and hard-refresh; confirm the URL is `…github.io/YOUR-REPO-NAME/` with the trailing slash and that the deploy went green |
| `Support for password authentication was removed` | It wants the browser sign-in, not a password | Push again, choose **"Sign in with your browser"** |
| `Author identity unknown` | Git doesn't know who you are | Run the two `git config --global` lines (Sitting 0E) |
| First deploy shows a red X | You pushed before enabling Actions/Pages | Enable both (Sitting 3), then re-run the job from the Actions tab |
| Your terminal won't accept commands | `npm run dev` is still running in it | **Ctrl+C**, or open a second terminal |
| `fatal: not a git repository` | Your terminal is pointed at the wrong folder | Right-click inside `Vanilla_Claude` → Open in Terminal |
| The screen fills with text you can't type into or close | A terminal editor (Vim) or a pager opened | Pager: press **q**. Vim: press **Esc**, type **:q!**, press Enter |
| `mkdir : the parameter name "p" is ambiguous` | You copied a Mac/Linux command from an old tutorial | You don't create folders by hand here — you forked a project that has them. (`-p` is a Unix flag PowerShell rejects.) |
| Your file is named `styles.css.txt` | You used Notepad | Create and edit files in VS Code, always |

None of these mean you broke something permanently. That's the entire point of Sitting 4.

---

## What this leaves out, and where to go next

**Deliberately skipped:** the 100-point rubric, due dates, Blackboard, the required Mermaid system diagram, and the in-class Studio Crit. Those are grading machinery for enrolled students. You came for the skill; you got the skill.

**The one sentence to keep:**

> Write the plan before the AI touches anything. Be specific enough that a stranger could build from your words. Then judge everything that comes back against that plan.

That move works for a website, a slide deck, a logo, a business memo, a wedding invitation — anything you will ever make with an AI in the room.

**Now make another one.** The game framing was only ever shared vocabulary. The real skill is designing atmospheric, interactive, single-page things — and it's universal. Do it again with a subject you actually care about.

**And read these again.** `claude/ai-direction-log.md` and `claude/records-of-resistance.md` are a genuine record of a human directing an AI on this exact project. Now that you've done it once yourself, they'll read completely differently.

---

*This companion doc was written with AI assistance, directed and verified against the AI 201 assignment brief and companion document by a human. The course materials it quotes are by Professor Tim Lindsey.*
