import { site } from '../site.config.js'

export default function Newsletter() {
  const { pitch, formAction, emailField } = site.newsletter
  const open = Boolean(formAction)

  return (
    <section className="band" id="subscribe" aria-labelledby="subscribe-title">
      <div className="wrap">
        <h2 className="band__title" id="subscribe-title">
          {pitch}
        </h2>
        <form className="signup" action={formAction || undefined} method="post" target="_blank">
          <div className="field">
            <label htmlFor="signup-email">Email</label>
            <input
              className="input"
              id="signup-email"
              type="email"
              name={emailField}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={!open}
            />
          </div>
          <button className="btn btn--dark" type="submit" disabled={!open}>
            Sign up
          </button>
        </form>
        {!open && <p className="band__note">Sign-ups aren't open yet.</p>}
      </div>
    </section>
  )
}
