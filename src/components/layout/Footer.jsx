import * as React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-light py-3 my-4">
      <div className="container">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted" activeClassName="active">Home</Link></li>
        <li className="nav-item"><Link to="/about/" className="nav-link px-2 text-muted" activeClassName="active">About</Link></li>
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
      </div>
    </footer>
  )
}

export default Footer