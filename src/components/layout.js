import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

export default function Layout({ children }) {
  return (
    <IdentityContextProvider url="https://jamstack-intro-auth.netlify.com">
      <header>
        <Link to="/">JAMstack App</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
}
