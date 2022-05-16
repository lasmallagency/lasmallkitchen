import * as React from 'react';

// Theme
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout