import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = (props) => {
  return <Fragment>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        {props.children}
      </main>
      <Footer />
    </Fragment>;
}

export default Layout
