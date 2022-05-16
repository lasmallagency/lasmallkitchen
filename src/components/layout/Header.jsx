import * as React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-light">
      <nav className="container-fluid">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link" activeClassName="active">Home</Link></li>
            <li className="nav-item"><Link to="/about/" className="nav-link" activeClassName="active">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header