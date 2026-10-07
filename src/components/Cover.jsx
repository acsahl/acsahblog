import { categoryColor } from '../posts.js'

// One of four small shapes, chosen from the post's address so a post always
// gets the same one.
const shapes = [
  <path key="star" d="M50 6 C54 34 66 46 94 50 C66 54 54 66 50 94 C46 66 34 54 6 50 C34 46 46 34 50 6Z" />,
  <path key="heart" d="M50 88 C20 66 8 48 8 32 C8 18 19 8 32 8 C40 8 47 12 50 19 C53 12 60 8 68 8 C81 8 92 18 92 32 C92 48 80 66 50 88Z" />,
  <circle key="dot" cx="50" cy="50" r="40" />,
  <path key="burst" d="M50 4 L59 28 L84 16 L72 41 L96 50 L72 59 L84 84 L59 72 L50 96 L41 72 L16 84 L28 59 L4 50 L28 41 L16 16 L41 28Z" />,
]

function pick(slug) {
  let sum = 0
  for (const char of slug) sum += char.charCodeAt(0)
  return sum % shapes.length
}

// A post's picture. Posts with a cover photo show it; the rest get a block in
// their category's color.
export default function Cover({ post }) {
  if (post.cover) {
    return <img className="cover cover--photo" src={post.cover} alt={post.coverAlt} />
  }

  return (
    <div className={`cover tint-${categoryColor(post.category)}`} aria-hidden="true">
      <svg className="cover__shape" viewBox="0 0 100 100">
        {shapes[pick(post.slug)]}
      </svg>
      <span className="cover__word">{post.category.toLowerCase()}</span>
    </div>
  )
}
