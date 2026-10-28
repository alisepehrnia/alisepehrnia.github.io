import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Reads src/data/profile.json so SEO tags, <title>, language/direction and
// Google Analytics are editable from the same JSON file as the page content.
function injectProfileMeta() {
  return {
    name: 'inject-profile-meta',
    transformIndexHtml(html) {
      const profile = JSON.parse(
        fs.readFileSync(new URL('./src/data/profile.json', import.meta.url), 'utf-8')
      )
      const m = profile.meta
      const ga = profile.analytics?.googleAnalyticsId
      const gaSnippet = ga
        ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(ga)}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${esc(ga)}');
    </script>`
        : ''
      return html
        .replace(/{{LANG}}/g, esc(m.lang))
        .replace(/{{DIR}}/g, esc(m.dir))
        .replace(/{{TITLE}}/g, esc(m.title))
        .replace(/{{DESCRIPTION}}/g, esc(m.description))
        .replace(/{{KEYWORDS}}/g, esc(m.keywords))
        .replace(/{{URL}}/g, esc(m.url))
        .replace(/{{APP_TITLE}}/g, esc(profile.name))
        .replace(/{{ANALYTICS}}/g, gaSnippet)
    }
  }
}

// base '/' is correct for a user site (<user>.github.io) and for a custom domain (CNAME).
// For a project site (<user>.github.io/<repo>) build with: VITE_BASE=/<repo>/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), injectProfileMeta()]
})
