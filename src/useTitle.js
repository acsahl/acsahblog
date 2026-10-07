import { useEffect } from 'react'
import { site } from './site.config.js'

// Sets the text in the browser tab for the current page.
export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name
  }, [title])
}
