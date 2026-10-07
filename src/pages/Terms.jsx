import { Link } from 'react-router'
import { terms } from '../terms.js'
import { useTitle } from '../useTitle.js'

export default function Terms() {
  useTitle('Terms & definitions')

  return (
    <>
      <header className="wrap wrap--narrow page-head">
        <h1 className="page-head__title">Terms &amp; definitions</h1>
        <p className="page-head__lede">Ideas I keep running into, explained in plain words.</p>
      </header>

      <div className="sheet">
        <div className="wrap wrap--narrow section">
          <p className="result-count">
            {terms.length} {terms.length === 1 ? 'term' : 'terms'}, A to Z
          </p>
          <div className="terms">
            {terms.map((entry) => (
              <article className="term" id={entry.slug} key={entry.slug}>
                {entry.tag && (
                  <span className={`sticker tint-${entry.color ?? 'butter'}`}>{entry.tag}</span>
                )}
                <h2 className="term__name">
                  <Link to={`#${entry.slug}`}>{entry.term}</Link>
                </h2>
                <p className="term__short">{entry.short}</p>
                {entry.details?.length > 0 && (
                  <div className="prose">
                    {entry.details.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
