import { Link } from 'react-router'
import { thoughts } from '../thinkbox.js'
import { useTitle } from '../useTitle.js'

export default function Thinkbox() {
  useTitle('Thinkbox')

  return (
    <>
      <header className="wrap wrap--narrow page-head">
        <h1 className="page-head__title">Thinkbox</h1>
        <p className="page-head__lede">Ideas I have that haven't borne fruit yet.</p>
      </header>

      <div className="wrap wrap--narrow thinkbox">
        {thoughts.map((thought) => (
          <article className={`thought tint-${thought.color}`} key={thought.idea}>
            <time className="thought__date" dateTime={thought.date.toISOString().slice(0, 10)}>
              {thought.dateLabel}
            </time>
            <h2 className="thought__idea">{thought.idea}</h2>
            {thought.notes?.length > 0 && (
              <div className="thought__notes">
                {thought.notes.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {thought.sources?.length > 0 && (
              <p className="thought__sources">
                {thought.sources.map((source) =>
                  source.href.startsWith('/') ? (
                    <Link key={source.href} to={source.href}>
                      {source.label}
                    </Link>
                  ) : (
                    <a key={source.href} href={source.href}>
                      {source.label}
                    </a>
                  ),
                )}
              </p>
            )}
          </article>
        ))}
      </div>
    </>
  )
}
