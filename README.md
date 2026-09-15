# Vocab Quiz

A simple multiple-choice quiz app (React + Vite), built to be opened on an
iPhone in Safari. All questions live in `src/App.jsx` — just copy the shape
of an existing question object to add more.

## Run locally (optional, to preview before deploying)

```
npm install
npm run dev
```

## Deploy to GitHub Pages (free, live link)

1. Create a new **public** repo on GitHub named `vocab-quiz`
   (Settings → repo name). If you name it something else, edit
   `vite.config.js` and change `base: '/vocab-quiz/'` to match.

2. From this project folder, push it up:

   ```
   git init
   git add .
   git commit -m "Initial quiz app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vocab-quiz.git
   git push -u origin main
   ```

3. On GitHub, go to your repo → **Settings → Pages**.
   Under "Build and deployment", set **Source** to **GitHub Actions**.

4. That's it — the included workflow (`.github/workflows/deploy.yml`)
   automatically builds and deploys the site every time you push to `main`.
   After the first push, check the **Actions** tab for the deploy to finish
   (takes ~1 minute), then your site will be live at:

   ```
   https://YOUR_USERNAME.github.io/vocab-quiz/
   ```

5. Send that link to your girlfriend — she can open it directly in Safari
   on her iPhone.

## Adding more questions later

Open `src/App.jsx`, find the `QUESTIONS` array near the top, and copy-paste
one question object as a template. Fill in:

- `term`: the question / word as it appears in the book
- `choices`: the A–D options
- `correct`: the correct letter
- `explanations`: a short note per letter (shown when she answers, so she
  sees what her pick means vs. what the right answer means)

Save, commit, and push — the site redeploys automatically.
