import React from 'react';
import './style.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner container">
        <div className="banner__top">
          <h1 className="banner__title">
            Открой свой Блинбери, получай прибыль <br /> и стань частью большой
            истории
          </h1>
          <button className="banner__button">
            <span>Оставить заявку</span>
          </button>
        </div>
        <img className="banner__image" src="./Banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
