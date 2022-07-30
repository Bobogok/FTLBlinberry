import React from 'react';
import MainLogoIcon from '../assets/img/svg/Logo.svg';
import TelegramHeaderIcon from '../assets/img/svg/social/TelegramHeader.svg';
import ArrowRightIcon from '../assets/img/svg/arrowRight.svg';
import AppStoreIcon from '../assets/img/svg/social/appStore.svg';
import GooglePlayIcon from '../assets/img/svg/social/googlePlay.svg';
import HuaweiStoreIcon from '../assets/img/svg/social/huaweiStore.svg';
import MailIcon from '../assets/img/svg/social/mailIcon.svg';
import TelegramWhiteIcon from '../assets/img/svg/social/telegramWhite.svg';

import VkBlackIcon from '../assets/img/svg/social/vkBlack.svg';
import TelegramBlackIcon from '../assets/img/svg/social/telegramBlack.svg';
import YoutubeBlackIcon from '../assets/img/svg/social/youtubeBlack.svg';
import './layout.scss';

const Layout = ({ children }: any) => {
  return (
    <>
      <header className="header">
        <div className="header__inner container">
          {/* лого */}
          <div className="header__logo-wrapper">
            <MainLogoIcon />
          </div>

          {/* меню дексктоп */}
          <nav className="header__menu">
            <ul className="header__menu-elems">
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  <span>этапы открытия</span>
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  <span>форматы</span>
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link active" href="#">
                  <span>достижения</span>
                </a>
              </li>
              <li className="header__menu-elem">
                <a className="header__menu-link" href="#">
                  <span>новости</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* кнопка хедера */}
          <button className="header__button">
            <span>контакты и поддержка</span>
            <TelegramHeaderIcon className="header__button-icon" />
          </button>
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
              <button className="footer__apps-button">
                <span>Приложение</span>
                <ArrowRightIcon className="footer__apps-button-icon" />
              </button>
              <AppStoreIcon className="footer__apps-icon" />
              <GooglePlayIcon className="footer__apps-icon" />
              <HuaweiStoreIcon className="footer__apps-icon" />
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
              <a href="" className="footer__mails-link">
                <MailIcon />
                <span>franchising@blinbery.team</span>
              </a>
              <a href="" className="footer__mails-link">
                <TelegramWhiteIcon />
                <span>@blinberry</span>
              </a>
            </div>
            <div className="footer__buttons">
              <button className="footer__button">
                <VkBlackIcon />
              </button>
              <button className="footer__button">
                <TelegramBlackIcon />
              </button>
              <button className="footer__button">
                <YoutubeBlackIcon />
              </button>
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
