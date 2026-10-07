import { Link } from 'react-router'
import { site } from '../site.config.js'
import { useTitle } from '../useTitle.js'
import Avatar from '../components/Avatar.jsx'

export default function About() {
  useTitle('About')

  return (
    <>
      <header className="wrap wrap--narrow page-head page-head--about">
        <Avatar />
        <div>
          <h1 className="page-head__title">Hi, I'm {site.author.name}</h1>
          <p className="page-head__lede">{site.tagline}</p>
        </div>
      </header>

      <div className="sheet">
        <div className="wrap wrap--narrow section">
          <div className="prose">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {site.links.length > 0 && (
              <>
                <h2>Find me elsewhere</h2>
                <ul>
                  {site.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <p className="after-prose">
            <Link className="btn" to="/archive">
              Read the posts
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
