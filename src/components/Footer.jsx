import profile from '../data/profile.json'
import { asset } from '../lib/asset'

export default function Footer() {
  return (
    <footer className="navbar-light navbar-expand p-4 animate__animated animate__fadeIn">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand mx-2" href="#top">
          <img src={asset(profile.logo)} width="50" alt="logo" className="d-inline-block align-text-center" />
        </a>
        <p className="text-muted fs-6 mx-2 my-0">{profile.footer.text}</p>
      </div>
    </footer>
  )
}
