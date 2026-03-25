# Recreation Steps

How to recreate this project from scratch.

## Step 1: Initialize the Repo
1. Create a new GitHub repo (e.g., `Vanilla_Claude`)
2. Clone it locally
3. Ensure you have Node.js (v20+) and npm installed

## Step 2: Create Folder Structure
```bash
mkdir -p .github/workflows
mkdir -p claude/reference
mkdir -p docs
mkdir -p src/css
mkdir -p src/js
mkdir -p src/assets/images
```

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
  base: '/Vanilla_Claude/',
});
```
**Note:** `base` must match your GitHub repo name for Pages to resolve paths correctly.

## Step 5: Create index.html (at project root — Vite convention)
Minimal HTML file that links to `src/css/styles.css` and `src/js/main.js`.

## Step 6: Create .gitignore
```
node_modules
dist
.DS_Store
```

## Step 7: Create GitHub Actions Workflow
File: `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Runs `npm ci` then `npm run build`
- Uploads `dist/` as a Pages artifact
- Deploys via `actions/deploy-pages@v4`

## Step 8: Enable GitHub Pages
1. Repo → Settings → Pages
2. Source → change to **GitHub Actions**

## Step 9: Push and Verify
```bash
git add .
git commit -m "Scaffold Vite app with GitHub Actions deploy workflow"
git push origin main
```
Check the Actions tab for a successful deploy, then visit:
`https://<username>.github.io/<repo-name>/`
