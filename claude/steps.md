# Recreation Steps

How to recreate this project from scratch.

## Step 1: Initialize the Repo
1. Create a new GitHub repo (e.g., `Vanilla_Claude`)
2. Clone it locally
3. Ensure you have Node.js and npm installed. Install the current **LTS** (Node 20 reached end-of-life on 2026-04-30 and no longer gets security updates; Vite 8 requires Node 20.19+ or 22.12+ regardless). The [nodejs.org](https://nodejs.org) LTS download always satisfies this.

## Step 2: Create Folder Structure

These commands are for **PowerShell** (the default terminal on Windows). Note: the Unix `mkdir -p` flag does *not* work in PowerShell — `-p` is ambiguous between `-Path` and `-PipelineVariable` and every line errors. PowerShell's `New-Item` creates parent folders automatically:

```powershell
New-Item -ItemType Directory -Force -Path .github/workflows, claude/reference, docs, src/css, src/js, src/assets/images
```

On macOS/Linux (bash/zsh) use `mkdir -p .github/workflows claude/reference docs src/css src/js src/assets/images` instead.

> **Note on empty folders:** Git does not track empty directories, so `claude/reference/` and `src/assets/images/` will not survive a commit until they contain a file. If you want them to persist as empty placeholders, drop a `.gitkeep` file in each:
> ```powershell
> New-Item -ItemType File -Force -Path claude/reference/.gitkeep, src/assets/images/.gitkeep
> ```
> (This repo omitted that step, which is why those two folders are documented but absent — a small, real example of the "Did I verify?" gap.)

## Step 3: Initialize Vite
```bash
npm init -y
npm install --save-dev vite
```

Update `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Step 4: Create vite.config.js
```js
import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths so the built site works under ANY repo name on GitHub Pages.
  base: './',
});
```
**Note:** `base: './'` makes Vite emit relative asset URLs (`./assets/…`), so the site resolves correctly at `username.github.io/<any-repo-name>/` with no edits — even if the repo is renamed or created from a template under a different name. (The older approach, `base: '/Repo-Name/'`, works too but must be kept in sync with the exact repo name or Pages serves a blank page.)

## Step 5: Create index.html (at project root — Vite convention)
Minimal HTML file that links to `src/css/styles.css` and `src/js/main.js`.

## Step 6: Create .gitignore
```
node_modules
dist
.DS_Store
```

## Step 7: Create GitHub Actions Workflow
File: `.github/workflows/deploy.yml`. It triggers on push to `main`, builds with Vite, and deploys `dist/` to Pages. Action versions below are current as of July 2026 — check each action's releases page if you're recreating this later.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v5
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v5
```

The `permissions` and `concurrency` blocks are required — the deploy fails without the `pages`/`id-token` permissions.

## Step 8: Enable GitHub Pages
1. Repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

(If you forked this repo rather than pushing your own, also open the **Actions** tab first and click the button to enable workflows — forks start with them disabled.)

## Step 9: Push and Verify

First-time-only: tell Git who you are, or the first commit is refused with `Author identity unknown`:
```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then push (use the same commands on any OS):
```powershell
git add .
git commit -m "Scaffold Vite app with GitHub Actions deploy workflow"
git push origin main
```
On the first push, Git Credential Manager opens a browser sign-in window — GitHub no longer accepts a password over HTTPS. Sign in through the browser once and it's saved.

Check the Actions tab for a successful deploy, then visit `https://<username>.github.io/<repo-name>/` — and confirm it in an incognito window, since your normal browser may show a cached copy.
