import { site } from './site.config.js'

// Every .mdx file in src/posts becomes a post. The file name is its address:
// src/posts/hello.mdx is served at /posts/hello.
const modules = import.meta.glob('./posts/*.mdx', { eager: true })

function parseDate(value) {
  const [year, month, day] = String(value).split('-').map(Number)
  return new Date(year, (month || 1) - 1, day || 1)
}

function plainText(source) {
  return source
    .replace(/^export const meta = \{[\s\S]*?^\}\s*$/m, '')
    .replace(/^import .*$/gm, '')
    .replace(/[#*_`>\[\]()]/g, ' ')
}

export const posts = Object.entries(modules)
  .map(([path, module]) => {
    const slug = path.replace('./posts/', '').replace('.mdx', '')
    const meta = module.meta ?? {}
    const text = plainText(module.source ?? '')
    const words = text.split(/\s+/).filter(Boolean).length
    const date = parseDate(meta.date)
    return {
      slug,
      title: meta.title ?? slug,
      excerpt: meta.excerpt ?? '',
      category: meta.category ?? 'Notes',
      featured: Boolean(meta.featured),
      cover: meta.cover ?? null,
      coverAlt: meta.coverAlt ?? '',
      date,
      dateLabel: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      minutes: Math.max(1, Math.round(words / 220)),
      searchText: `${meta.title ?? ''} ${meta.excerpt ?? ''} ${text}`.toLowerCase(),
      Content: module.default,
    }
  })
  .sort((a, b) => b.date - a.date || a.title.localeCompare(b.title))

// The post marked featured: true, or the newest one if none is marked.
export const featuredPost = posts.find((post) => post.featured) ?? posts[0] ?? null

// Categories that have at least one post, in the order set in site.config.js.
export const categories = Object.keys(site.categories).filter((name) =>
  posts.some((post) => post.category === name),
)

export function categoryColor(name) {
  return site.categories[name] ?? 'butter'
}

export function findPost(slug) {
  return posts.find((post) => post.slug === slug) ?? null
}
