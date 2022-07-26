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

      <main className="container">{children}</main>

      <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__top">
            <div className="footer__logo">
              <img
                width="auto"
                height="auto"
                src={require('../assets/img/LogoSecond.png')}
                alt=""
              />
            </div>
            <div className="footer__apps">
              <button className="footer__apps-button">Приложение</button>
              <div className="footer__apps-apple"></div>
              <div className="footer__apps-google"></div>
              <div className="footer__apps-huawei"></div>
            </div>
          </div>

          <div className="footer__navigation">
            <ul className="footer__navigation-elems">
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Этапы открытия
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Форматы
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Достижения
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Новости
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Сайт
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Партнёры
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Условия
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="" className="footer__navigation-link">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contacts">
            <div className="footer__phone-number">8 (937) 533-38-17</div>
            <div className="footer__mails">
              <div className="footer__mails-email">
                franchising@blinbery.team
              </div>
              <div className="footer__mails-telegram">@blinberry</div>
            </div>
            <div className="footer__buttons">
              <button className="footer__button-vk"></button>
              <button className="footer__button-telegram"></button>
              <button className="footer__button-youtube"></button>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              2022 ® БлинБери, Волгоград, ул.Чуйкова 37
            </div>
            <div className="footer__contract">
              <a href="" className="footer__contract-link">
                Правовые договоры и соглашения
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
