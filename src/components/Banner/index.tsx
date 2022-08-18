import React from 'react';
import './style.scss';

const Banner = ({ scrollToRecall }: any) => {
  return (
    <div className="banner">
      <div className="banner__inner container">
        <div className="banner__top">
          <h1 className="banner__title">
            Открой свои Блинбери, получай прибыль <br /> и стань частью большой
            истории
          </h1>
          <button
            type="button"
            className="banner__button"
            onClick={scrollToRecall}
          >
            <span>Оставить заявку</span>
          </button>
        </div>
        <img
          className="banner__image"
          src="./banner/bannerDesktop.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
