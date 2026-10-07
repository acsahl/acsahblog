import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { posts, categoryColor } from '../posts.js'
import { useTitle } from '../useTitle.js'
import CategoryChips from '../components/CategoryChips.jsx'

export default function Archive() {
  useTitle('All posts')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const { hash } = useLocation()

  // The Search button in the top bar links to /archive#search.
  useEffect(() => {
    if (hash === '#search') searchRef.current?.focus()
  }, [hash])

  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  const shown = posts.filter(
    (post) =>
      (category === 'All' || post.category === category) &&
      words.every((word) => post.searchText.includes(word)),
  )

  return (
    <>
      <header className="wrap wrap--narrow page-head">
        <h1 className="page-head__title">All posts</h1>
        <div className="field">
          <label htmlFor="search">Search posts</label>
          <input
            className="input"
            id="search"
            ref={searchRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try a topic or a title"
          />
        </div>
      </header>

      <div className="sheet">
        <div className="wrap wrap--narrow section">
          <CategoryChips active={category} onChange={setCategory} />
          <p className="result-count" role="status">
            {shown.length} {shown.length === 1 ? 'post' : 'posts'}
          </p>
          {shown.length > 0 ? (
            <ul className="post-list">
              {shown.map((post) => (
                <li key={post.slug} className="post-list__row">
                  <time className="post-list__date" dateTime={post.date.toISOString().slice(0, 10)}>
                    {post.dateLabel}
                  </time>
                  <Link className="post-list__title" to={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                  <span className={`sticker tint-${categoryColor(post.category)}`}>{post.category}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty">
              No posts match. Try a different word, or{' '}
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setQuery('')
                  setCategory('All')
                }}
              >
                clear the filters
              </button>
              .
            </p>
          )}
        </div>
      </div>
    </>
  )
}
