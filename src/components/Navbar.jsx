import { useState } from 'react'
import profile from '../data/profile.json'
import { asset, linkProps } from '../lib/asset'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="top" className="animate__animated animate__fadeIn">
      <nav className="navbar navbar-light navbar-expand-sm p-4">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand mx-2" href="#top">
            <img src={asset(profile.logo)} width="50" alt="logo" className="d-inline-block align-text-center" />
            <span className="fs-4 fw-bold px-2">{profile.name}</span>
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(o => !o)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Pages */}
          <div
            className={`collapse navbar-collapse justify-content-sm-end justify-content-lg-start${open ? ' show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav nav-animated gap-2">
              {profile.nav.map(item => (
                <li className="nav-item" key={item.href}>
                  <a href={item.href} className="nav-link" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav nav-animated gap-1">
              {profile.socials.map(s => (
                <li className="nav-item" key={s.href}>
                  <a href={s.href} {...linkProps(s.href)} className="nav-link fs-5" aria-label={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
