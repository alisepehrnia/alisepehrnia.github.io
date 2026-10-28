import profile from '../data/profile.json'
import { linkProps } from '../lib/asset'

export default function Contact() {
  return (
    <div id="contact" className="container px-2 py-5 animate__animated animate__fadeIn">
      <h1 className="py-4 text-center">{profile.contact.title}</h1>

      <div className="row g-4 py-4 row-cols-1">
        <div className="col">
          <div className="d-flex flex-wrap navbar-expand navbar-light align-items-center justify-content-center">
            <ul className="nav navbar-nav">
              {profile.socials.map(s => (
                <li className="nav-item px-2" key={s.href}>
                  <a href={s.href} {...linkProps(s.href)} className="nav-link fs-3" aria-label={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
