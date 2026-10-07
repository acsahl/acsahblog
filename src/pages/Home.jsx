import { useState } from 'react'
import { Link } from 'react-router'
import { site } from '../site.config.js'
import { posts, featuredPost } from '../posts.js'
import { useTitle } from '../useTitle.js'
import Cover from '../components/Cover.jsx'
import PostMeta from '../components/PostMeta.jsx'
import PostCard from '../components/PostCard.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Avatar from '../components/Avatar.jsx'

const GRID_SIZE = 6

export default function Home() {
  useTitle('')
  const [category, setCategory] = useState('All')

  const others = posts.filter((post) => post !== featuredPost)
  const matching = category === 'All' ? others : others.filter((post) => post.category === category)
  const shown = matching.slice(0, GRID_SIZE)

  return (
    <>
      {featuredPost && (
        <section className="wrap hero" aria-label="Featured post">
          <Link className="hero__cover" to={`/posts/${featuredPost.slug}`} tabIndex={-1} aria-hidden="true">
            <Cover post={featuredPost} />
          </Link>
          <div className="hero__text">
            <span className="sticker sticker--tilt tint-pink">Featured post</span>
            <h1 className="hero__title">
              <Link to={`/posts/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h1>
            {featuredPost.excerpt && <p className="hero__excerpt">{featuredPost.excerpt}</p>}
            <PostMeta post={featuredPost} />
            <Link className="btn" to={`/posts/${featuredPost.slug}`}>
              Read post
            </Link>
          </div>
        </section>
      )}

      <section className="sheet" aria-labelledby="latest-title">
        <div className="wrap section">
          <div className="section__head">
            <h2 className="section__title" id="latest-title">
              Latest posts
            </h2>
            <Link className="text-link" to="/archive">
              View all posts
            </Link>
          </div>
          <CategoryChips active={category} onChange={setCategory} />
          {shown.length > 0 ? (
            <div className="post-grid">
              {shown.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="empty">
              {posts.length === 0
                ? 'No posts yet. Add your first one to src/posts.'
                : category === 'All'
                  ? 'No other posts yet.'
                  : `No other posts in ${category} yet.`}
            </p>
          )}
        </div>
      </section>

      <Newsletter />

      <section className="sheet" aria-labelledby="about-title">
        <div className="wrap section about-strip">
          <Avatar />
          <div className="about-strip__text">
            <h2 className="section__title" id="about-title">
              Hi, I'm {site.author.name}
            </h2>
            <p>{site.author.bio}</p>
            <Link className="text-link" to="/about">
              More about me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
