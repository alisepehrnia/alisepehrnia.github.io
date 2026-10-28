import profile from '../data/profile.json'
import { asset, linkProps } from '../lib/asset'
import RichText from './RichText'

export default function Hero() {
  const { hero } = profile
  return (
    <div id="about" className="container-lg px-2 py-4 animate__animated animate__fadeIn">
      <div className="row align-items-center py-4">
        <div className="d-flex justify-content-center col-12 col-sm-6 col-md-5 col-lg-4">
          <img
            src={asset(profile.avatar)}
            className="d-block circle mx-lg-auto img-fluid"
            alt={profile.name}
            width="300"
            height="300"
            loading="lazy"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-7 col-lg-8">
          <h1 className="p-2">
            <RichText text={hero.heading} />
          </h1>

          <p className="p-2 lh-lg text-muted">
            <RichText text={hero.bio} />
          </p>

          <div className="d-flex flex-wrap gap-2 p-2">
            {hero.buttons.map(b => (
              <a
                key={b.label}
                href={b.href}
                {...(b.external ? { target: '_blank', rel: 'noopener noreferrer' } : linkProps(b.href))}
                className={`btn px-3 py-2 ${b.style === 'solid' ? 'btn-secondary' : 'btn-outline-secondary'}`}
              >
                {b.label}
                {b.icon && <i className={`bi ${b.icon} mx-1`}></i>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
