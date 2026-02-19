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

Deploy the built app to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any host that supports Next.js. Run `npm run build` and use the output (or connect your Git repo for automatic deploys).
