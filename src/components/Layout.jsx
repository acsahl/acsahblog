import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { site } from '../site.config.js'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Links like /#subscribe jump to that part of the page.
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const year = new Date().getFullYear()
  const signupsOpen = Boolean(site.newsletter.formAction)

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="wrap">
        <nav className="nav" aria-label="Main">
          <Link className="nav__logo" to="/">
            {site.logo}
          </Link>
          <div className="nav__links">
            <NavLink className="nav__link" to="/about">
              About
            </NavLink>
            <NavLink className="nav__link" to="/archive">
              All posts
            </NavLink>
            <NavLink className="nav__link" to="/terms">
              Terms
            </NavLink>
            <Link className="btn btn--plain" to="/archive#search">
              Search
            </Link>
            {signupsOpen && (
              <Link className="btn" to="/#subscribe">
                Subscribe
              </Link>
            )}
          </div>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="sheet">
        <div className="wrap footer">
          <Link className="footer__logo" to="/">
            {site.logo}
          </Link>
          <div className="footer__links">
            <Link className="nav__link" to="/about">
              About
            </Link>
            <Link className="nav__link" to="/archive">
              All posts
            </Link>
            <Link className="nav__link" to="/terms">
              Terms
            </Link>
            {site.links.map((link) => (
              <a className="nav__link" key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="footer__note">
            © {year} {site.author.name}
          </p>
        </div>
      </footer>
    </>
  )
}
