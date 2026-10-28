import { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import projects from '../data/projects.json'
import { asset, linkProps } from '../lib/asset'

export default function Portfolio() {
  // Lightbox for project screenshots
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {})
    return () => Fancybox.destroy()
  }, [])

  return (
    <div className="album px-2 py-5 animate__animated animate__fadeIn" id="portfolio">
      <h1 className="pb-4 text-center fw-bold">{projects.title}</h1>
      <div className="container">
        <div className="row g-4 py-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {projects.items.map(p => (
            <div className="col px-4" key={p.title}>
              <div className="card h-100">
                <div className={`card-img ${p.imageBackground === 'dark' ? 'bg-secondary' : 'bg-lgray'}`}>
                  <a href={asset(p.image)} data-caption={p.title} data-fancybox="gallery">
                    <img src={asset(p.image)} alt={p.title} className="card-img-top keep-aspect" loading="lazy" />
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title my-3">{p.title}</h4>
                  <p className="card-text text-break text-muted">{p.description}</p>

                  {p.link && (
                    <a href={p.link} {...linkProps(p.link)} className="btn btn-sm btn-outline-secondary mb-3 px-3">
                      {p.linkLabel || 'مشاهده'}
                      <i className="bi bi-box-arrow-up-right mx-1"></i>
                    </a>
                  )}

                  <div className="d-flex flex-wrap gap-1 ltr">
                    {p.tags?.map(tag => (
                      <span className="badge rounded-pill bg-secondary" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
