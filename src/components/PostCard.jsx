import { Link } from 'react-router'
import Cover from './Cover.jsx'
import PostMeta from './PostMeta.jsx'

export default function PostCard({ post }) {
  return (
    <article className="card">
      <Cover post={post} />
      <PostMeta post={post} />
      <h3 className="card__title">
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      {post.excerpt && <p className="card__excerpt">{post.excerpt}</p>}
    </article>
  )
}
