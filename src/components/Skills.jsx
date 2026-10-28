import { useState } from 'react'
import skills from '../data/skills.json'

export default function Skills() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div id="skills" className="container px-2 py-5 animate__animated animate__fadeIn">
      <h1 className="py-4 text-center">{skills.title}</h1>

      <div className="row g-4 py-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {skills.highlights.map(item => (
          <div className="col d-flex align-items-start" key={item.title}>
            <div className="circle w-60 bg-special-l me-4 d-block p-3">
              <i className={`bi ${item.icon} mx-1 opacity-75`}></i>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="p-2 text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center p-2">
        <button
          type="button"
          className="btn btn-outline-secondary m-1 px-3 py-2"
          aria-expanded={showDetails}
          aria-controls="skillDetails"
          onClick={() => setShowDetails(v => !v)}
        >
          {showDetails ? skills.buttons.hideDetails : skills.buttons.showDetails}
        </button>

        <a href="#portfolio" className="btn btn-outline-secondary m-1 px-3 py-2">
          {skills.buttons.portfolio}
        </a>
      </div>

      <div className={`row g-4 py-4 row-cols-1 row-cols-sm-2 ltr collapse${showDetails ? ' show' : ''}`} id="skillDetails">
        {skills.details.map(group => (
          <div className="col" key={group.label}>
            <div className="d-flex flex-wrap gap-1 justify-content-start p-1 my-2 ltr">
              {group.label}:
              {group.items.map(tag => (
                <span className="badge rounded-pill bg-secondary" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
