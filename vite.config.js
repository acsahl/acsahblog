import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypeHighlight from 'rehype-highlight'

// Posts are .mdx files: Markdown that can also use React components.
// This wraps the MDX plugin so each post also carries its own text, which the
// site uses for the reading time and for search.
function posts() {
  const plugin = mdx({ rehypePlugins: [rehypeHighlight] })
  return {
    ...plugin,
    enforce: 'pre',
    async transform(value, id) {
      const result = await plugin.transform.call(this, value, id)
      if (!result) return result
      return { ...result, code: `${result.code}\nexport const source = ${JSON.stringify(value)};\n` }
    },
  }
}

export default defineConfig({
  plugins: [posts(), react()],
})
