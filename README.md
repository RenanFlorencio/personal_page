# Personal Page

A single-page personal portfolio built with Next.js and Tailwind CSS. Light theme, responsive, and easy to edit via a single content file.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later). Install on Mac or Windows, then open a terminal.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Edit content**  
   Update `app/data/content.js` to change your name, experience, projects, skills, and links. No other code changes needed for content updates.

## Build for production

```bash
npm run build
npm run start
```

## Hero images

- **Profile photo:** Set `hero.imageUrl` to `'/profile.jpg'` in `app/data/content.js` and add your image as `public/profile.jpg`. It appears on the left, overlapping the cover. Set to `null` to hide.
- **Cover/banner:** Set `hero.coverImageUrl` to `'/cover.jpg'` and add `public/cover.jpg` for a custom hero banner. If `null`, a gradient (using your accent color) is shown.

## Download Resume button

Place your resume PDF in the `public` folder as `resume.pdf`. The navbar “Download Resume” button will link to it. If the file is missing, the button still appears but the link will 404 until you add the file.

## Deployment

### GitHub Pages (project site)

Your site will be at `https://<username>.github.io/<repo-name>/`. For images and links to work, the app must know this path.

1. **Build with your repo name** (use your actual repo name, e.g. `personal_page`):
   ```bash
   NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
   ```
2. The static site is in the **`out`** folder. Deploy that to GitHub Pages:
   - Either push the contents of `out/` to a branch named `gh-pages`, or  
   - In the repo: **Settings → Pages → Source**: deploy from that branch (or from GitHub Actions if you use a workflow).
3. Your page URL will be `https://<username>.github.io/<repo-name>/`.

If you skip `NEXT_PUBLIC_BASE_PATH`, images and the resume link will break on GitHub Pages because they’d point to the root of the domain instead of `/<repo-name>/`.

### Other hosts (Vercel, Netlify, etc.)

Run `npm run build` and deploy. You don’t need `NEXT_PUBLIC_BASE_PATH` if the site is served from the root (e.g. `yourname.vercel.app`).
