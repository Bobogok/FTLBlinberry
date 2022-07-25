import React from 'react';
import logo from '../assets/img/svg/Logo.svg';
import './layout.scss';

const Layout = ({ children }: any) => {
  return (
    <>
      <header className="header">
        <div className="header__inner container">
          {/* лого */}
          <div className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="Logo" />
          </div>

          {/* меню дексктоп */}
          <nav className="header__menu">
            <ul className="header__menu-elems">
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  этапы открытия
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  форматы
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link active" href="#">
                  достижения
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  новости
                </a>
              </li>
            </ul>
          </nav>

          {/* кнопка хедера */}
          <button className="header__button">контакты и поддержка</button>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
