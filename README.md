# alisepehrnia.github.io

My personal website — React + Vite, hosted on GitHub Pages.
All content lives in JSON files, so you can edit the site without touching any React code.

## Editing content

| What | File |
| --- | --- |
| Name, avatar, bio, hero buttons, nav, social links, footer, SEO tags, Google Analytics | `src/data/profile.json` |
| Skills (3 highlighted cards + detailed badge groups) | `src/data/skills.json` |
| Projects showcase | `src/data/projects.json` |

**Images** go in `public/img/` and are referenced in JSON without a leading slash, e.g. `"avatar": "img/avatar.jpg"`.
Full URLs (`https://...`) also work.

**Inline markup** in `hero.heading` / `hero.bio`: `**bold**` and `==highlighted==`.

### Add a project
Drop the screenshot in `public/img/portfolio/` and add an object to `items` in `src/data/projects.json`:

```jsonc
{
  "title": "Project name",
  "image": "img/portfolio/5.jpg",
  "description": "What it does...",
  "tags": ["C#", ".NET", "WPF"],
  "link": "https://github.com/...",      // optional – shows a button
  "linkLabel": "مشاهده",                  // optional – button text
  "imageBackground": "dark"              // optional – "dark" or default light gray
}
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Deploying to GitHub Pages

1. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and publishes the site automatically.

The custom domain is kept via `public/CNAME` (`sepehrnia.net`).
If you ever host it as a project site (`user.github.io/repo`), build with `VITE_BASE=/repo/`.
