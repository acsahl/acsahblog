import { Link } from 'react-router'
import { useTitle } from '../useTitle.js'

export default function NotFound() {
  useTitle('Page not found')

  return (
    <div className="wrap wrap--narrow page-head">
      <span className="sticker sticker--tilt tint-butter">404</span>
      <h1 className="page-head__title">This page doesn't exist</h1>
      <p className="page-head__lede">The link may be old, or the post may have moved.</p>
      <p>
        <Link className="btn" to="/archive">
          See all posts
        </Link>
      </p>
    </div>
  )
}
