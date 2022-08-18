import React, { useState } from 'react';
import MainLogoIcon from '../assets/img/svg/Logo.svg';
import FooterLogo from '../assets/img/svg/footerLogo.svg';
import TelegramHeaderIcon from '../assets/img/svg/social/TelegramHeader.svg';
import ArrowRightIcon from '../assets/img/svg/arrowRight.svg';
import AppStoreIcon from '../assets/img/svg/social/appStore.svg';
import GooglePlayIcon from '../assets/img/svg/social/googlePlay.svg';
import HuaweiStoreIcon from '../assets/img/svg/social/huaweiStore.svg';
import MailIcon from '../assets/img/svg/social/mailIcon.svg';
import TelegramWhiteIcon from '../assets/img/svg/social/telegramWhite.svg';
import BurgerMenuIcon from '../assets/img/svg/menuBurger.svg';
import CloseMenuIcon from '../assets/img/svg/menuClose.svg';
import MenuArrowRight from '../assets/img/svg/menuArrowRight.svg';
import PhoneForwarded from '../assets/img/svg/phoneForwarded.svg';

import VkBlackIcon from '../assets/img/svg/social/vkBlack.svg';
import TelegramBlackIcon from '../assets/img/svg/social/telegramBlack.svg';
import YoutubeBlackIcon from '../assets/img/svg/social/youtubeBlack.svg';
import './layout.scss';

const Layout = ({
  children,
  scrollToRecall,
  scrollToTerms,
  scrollToFormats,
  scrollToAchivments,
  scrollToPartners,
  scrollToNews,
  scrollToCircs,
}: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          {/* лого */}
          <div className="header__logo-wrapper">
            <MainLogoIcon className="header__logo" />
          </div>

          {/* меню дексктоп */}
          <nav className="header__nav">
            <ul className="header__nav-elems">
              <li className="header__nav-elem">
                <span onClick={scrollToTerms} className="header__nav-link">
                  <span>этапы открытия</span>
                </span>
              </li>
              <li className="header__nav-elem">
                <span onClick={scrollToFormats} className="header__nav-link">
                  <span>форматы</span>
                </span>
              </li>
              <li className="header__nav-elem">
                <span
                  onClick={scrollToAchivments}
                  className="header__nav-link active"
                >
                  <span>достижения</span>
                </span>
              </li>
              <li className="header__nav-elem">
                <span onClick={scrollToNews} className="header__nav-link">
                  <span>новости</span>
                </span>
              </li>
            </ul>
          </nav>

          {/* кнопка хедера */}
          <button className="header__button">
            <span>контакты и поддержка</span>
            <TelegramHeaderIcon className="header__button-icon" />
          </button>

          {/* кнопка меню мобилки */}
          <button
            className="header__button-menu"
            onClick={handleMobileMenuOpen}
          >
            <span>меню</span>
            <BurgerMenuIcon className="header__button-menu-icon" />
          </button>

          {/* мобильное меню */}
          {isMobileMenuOpen && (
            <div className="header__menu">
              <div className="header__menu-inner container">
                <div className="header__menu-top">
                  {/* лого */}
                  <div className="header__menu-logo-wrapper">
                    <MainLogoIcon className="header__menu-logo" />
                  </div>

                  <button
                    className="header__menu-button-mobile"
                    onClick={handleMobileMenuOpen}
                  >
                    <span>меню</span>
                    <CloseMenuIcon className="header__button-mobile-icon" />
                  </button>
                </div>

                <ul className="header__content-elems">
                  <li className="header__content-elem">
                    <span
                      onClick={() => {
                        scrollToTerms();
                        handleMobileMenuOpen();
                      }}
                      className="header__content-link"
                    >
                      Этапы открытия
                    </span>
                    <MenuArrowRight className="header__content-icon" />
                  </li>
                  <li className="header__content-elem">
                    <span
                      onClick={() => {
                        scrollToFormats();
                        handleMobileMenuOpen();
                      }}
                      className="header__content-link"
                    >
                      Форматы
                    </span>
                    <MenuArrowRight className="header__content-icon" />
                  </li>
                  <li className="header__content-elem">
                    <span
                      onClick={() => {
                        scrollToAchivments();
                        handleMobileMenuOpen();
                      }}
                      className="header__content-link"
                    >
                      Достижения
                    </span>
                    <MenuArrowRight className="header__content-icon" />
                  </li>
                  <li className="header__content-elem">
                    <span
                      onClick={() => {
                        scrollToNews();
                        handleMobileMenuOpen();
                      }}
                      className="header__content-link"
                    >
                      Новости
                    </span>
                    <MenuArrowRight className="header__content-icon" />
                  </li>
                  <li className="header__content-elem">
                    <span
                      onClick={() => {
                        scrollToPartners();
                        handleMobileMenuOpen();
                      }}
                      className="header__content-link"
                    >
                      Отзывы
                    </span>
                    <MenuArrowRight className="header__content-icon" />
                  </li>
                </ul>

                <div className="header__content-phones">
                  <a href="" className="header__content-number">
                    <PhoneForwarded className="header__content-number-icon" />8
                    (937) 533-38-17
                  </a>

                  <a href="" className="header__content-telegram">
                    Telegram
                    <ArrowRightIcon className="header__content-telegram-icon" />
                  </a>
                </div>

                <button className="header__content-button">
                  <span>Оставить заявку</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer__inner container">
          <div className="footer__top">
            <div className="footer__logo">
              <FooterLogo className="footer__logo-icon" />
            </div>
            <div className="footer__apps">
              <button className="footer__apps-button">
                <span>Приложение</span>
                <ArrowRightIcon className="footer__apps-button-icon" />
              </button>
              <a
                className="footer__apps-link"
                href="https://apps.apple.com/ru/app/%D0%B1%D0%BB%D0%B8%D0%BD%D0%B1%D0%B5%D1%80%D0%B8/id1508294248"
              >
                <AppStoreIcon className="footer__apps-icon" />
              </a>
              <a
                className="footer__apps-link"
                href="https://play.google.com/store/apps/details?id=com.blinbery.client&hl=ru"
              >
                <GooglePlayIcon className="footer__apps-icon" />
              </a>
              <a
                className="footer__apps-link"
                href="https://appgallery.huawei.com/app/C105779333"
              >
                <HuaweiStoreIcon className="footer__apps-icon" />
              </a>
            </div>
          </div>

          <div className="footer__navigation">
            <ul className="footer__navigation-elems">
              <li className="footer__navigation-elem">
                <span
                  onClick={scrollToTerms}
                  className="footer__navigation-link"
                >
                  Этапы открытия
                </span>
              </li>
              <li className="footer__navigation-elem">
                <span
                  onClick={scrollToFormats}
                  className="footer__navigation-link"
                >
                  Форматы
                </span>
              </li>
              <li className="footer__navigation-elem">
                <span
                  onClick={scrollToAchivments}
                  className="footer__navigation-link"
                >
                  Достижения
                </span>
              </li>
              <li className="footer__navigation-elem">
                <span
                  onClick={scrollToNews}
                  className="footer__navigation-link"
                >
                  Новости
                </span>
              </li>
              <li className="footer__navigation-elem">
                <a
                  target="_blank"
                  href="https://xn--90aamkcop0a.xn--p1ai/"
                  className="footer__navigation-link"
                >
                  Сайт
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a
                  onClick={scrollToPartners}
                  className="footer__navigation-link"
                >
                  Партнёры
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a onClick={scrollToCircs} className="footer__navigation-link">
                  Условия
                </a>
              </li>
              <li className="footer__navigation-elem">
                <a href="#" className="footer__navigation-link">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contacts">
            <div className="footer__contacts-left">
              <div className="footer__phone-number">8 (937) 533-38-17</div>
              <div className="footer__mails">
                <a href="" className="footer__mails-link">
                  <MailIcon className="footer__mails-link-icon" />
                  <span>franchising@blinbery.team</span>
                </a>
                <a href="" className="footer__mails-link">
                  <TelegramWhiteIcon className="footer__mails-link-icon" />
                  <span>@blinberry</span>
                </a>
              </div>
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
