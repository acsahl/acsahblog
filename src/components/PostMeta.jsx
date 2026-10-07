import { categoryColor } from '../posts.js'

export default function PostMeta({ post, tilt = false }) {
  return (
    <div className="meta">
      <span className={`sticker tint-${categoryColor(post.category)}${tilt ? ' sticker--tilt' : ''}`}>
        {post.category}
      </span>
      <time dateTime={post.date.toISOString().slice(0, 10)}>{post.dateLabel}</time>
      <span>{post.minutes} min read</span>
    </div>
  )
}
