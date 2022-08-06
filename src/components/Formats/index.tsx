import React from 'react';
import LabelSIcon from '../../assets/img/svg/formats/labelS.svg';
import LabelMIcon from '../../assets/img/svg/formats/labelM.svg';
import LabelLIcon from '../../assets/img/svg/formats/labelL.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

const Formats = () => {
  return (
    <div className="formats container">
      <div className="formats__inner">
        <div className="formats__top">
          <h2 className="formats__title">
            Для разных <br /> помещений и форматов
          </h2>
          <button className="formats__button">
            <span>Узнать инвестиции</span>
          </button>
        </div>
        <div className="formats__subtitle">
          Выбери вариант для своего города
        </div>
        <button className="formats__button-mobile">
          <span>Оставить заявку</span>
        </button>
        <div className="formats__items">
          <div className="formats__item">
            <div className="formats__image-wrapper">
              <img src="./formatS.jpg" alt="" className="formats__image" />
              <LabelSIcon className="formats__icon" />
            </div>
            <div className="formats__item-title">Малый</div>
          </div>
          <div className="formats__item">
            <div className="formats__image-wrapper">
              <img src="./formatM.jpg" alt="" className="formats__image" />
              <LabelMIcon className="formats__icon" />
            </div>
            <div className="formats__item-title">Средний</div>
          </div>
          <div className="formats__item">
            <div className="formats__image-wrapper">
              <img src="./formatL.jpg" alt="" className="formats__image" />
              <LabelLIcon className="formats__icon" />
            </div>
            <div className="formats__item-title">Большой</div>
          </div>
        </div>

        {/* мобилка */}
        <div className="formats__carousel">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={12}
            className="formatsSwiper"
          >
            <SwiperSlide className="formats__elem">
              <div className="formats__image-wrapper">
                <img src="./formatS.jpg" alt="" className="formats__image" />
                <div className="formats__bottom">
                  <LabelSIcon className="formats__icon" />
                  <div className="formats__item-title">Малый</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="formats__elem">
              <div className="formats__image-wrapper">
                <img src="./formatM.jpg" alt="" className="formats__image" />
                <div className="formats__bottom">
                  <LabelMIcon className="formats__icon" />
                  <div className="formats__item-title">Средний</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="formats__elem">
              <div className="formats__image-wrapper">
                <img src="./formatL.jpg" alt="" className="formats__image" />
                <div className="formats__bottom">
                  <LabelLIcon className="formats__icon" />
                  <div className="formats__item-title">Большой</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Formats;
