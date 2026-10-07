import { Link, useParams } from 'react-router'
import { posts, findPost } from '../posts.js'
import { useTitle } from '../useTitle.js'
import Cover from '../components/Cover.jsx'
import PostMeta from '../components/PostMeta.jsx'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = findPost(slug)
  useTitle(post ? post.title : 'Page not found')

  if (!post) return <NotFound />

  const index = posts.indexOf(post)
  const newer = posts[index - 1]
  const older = posts[index + 1]
  const { Content } = post

  return (
    <article>
      <header className="wrap wrap--narrow post-head">
        <Link className="text-link" to="/archive">
          All posts
        </Link>
        <PostMeta post={post} tilt />
        <h1 className="post-head__title">{post.title}</h1>
        {post.excerpt && <p className="post-head__excerpt">{post.excerpt}</p>}
        <div className="post-head__cover">
          <Cover post={post} />
        </div>
      </header>

      <div className="sheet">
        <div className="wrap wrap--narrow section">
          <div className="prose">
            <Content />
          </div>

          {(newer || older) && (
            <nav className="post-nav" aria-label="More posts">
              {older ? (
                <Link className="post-nav__link" to={`/posts/${older.slug}`}>
                  <span className="post-nav__label">Older post</span>
                  <span className="post-nav__title">{older.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link className="post-nav__link post-nav__link--next" to={`/posts/${newer.slug}`}>
                  <span className="post-nav__label">Newer post</span>
                  <span className="post-nav__title">{newer.title}</span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </article>
  )
}
