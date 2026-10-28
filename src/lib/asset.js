// Resolves an image/file path written in the JSON files.
//  - "img/avatar.jpg"          -> file inside /public/img (respects Vite `base`)
//  - "https://example.com/a.png" -> used as-is
export function asset(path = '') {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

// Opens http(s) links in a new tab; keeps #anchors and mailto: in the same tab.
export function linkProps(href = '') {
  return /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
