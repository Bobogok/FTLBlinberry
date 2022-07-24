import React from 'react';
import './layout.scss';

const Layout = ({ children }: any) => {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
