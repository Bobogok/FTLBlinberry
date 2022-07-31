import React from 'react';
import ArrowRight from '../../assets/img/svg/arrowRight.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

const News = () => {
  return (
    <div className="news">
      <div className="news__inner container">
        <div className="news__top">
          <h2 className="news__title">Новости о компании</h2>
          <button className="news__button">
            <span>Подписаться на новости</span>
          </button>
        </div>
        <div className="news__subtitle">
          Каждый день в жизни компании происходит что то новое
        </div>
        <div className="news__elems">
          <Swiper slidesPerView={'auto'} spaceBetween={24} className="mySwiper">
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img src="./news/RBK.jpg" alt="" className="news__elem-img" />
                <div className="news__elem-right">
                  <div className="news__elem-title">РБК Новости</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">Подробнее на РБК:</div>
              <p className="news__elem-content">
                В Санкт-Петербург вышла волгоградская сеть блинных «БлинБери».
                Компания уже открыла в городе три точки и собственное
                производство. В планах «БлинБери» - <br /> увеличить сеть в
                десять раз...
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img src="./news/SPB.jpg" alt="" className="news__elem-img" />
                <div className="news__elem-right">
                  <div className="news__elem-title">Деловой Петербург</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">Подробнее на ДП:</div>
              <p className="news__elem-content">
                В Петербурге у "Теремка" появился конкурент. В Петербурге
                заработала волгоградская сеть блинных "БлинБери". Компания уже
                открыла три точки и собственное производ...
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img
                  src="./news/BuyBrand.jpg"
                  alt=""
                  className="news__elem-img"
                />
                <div className="news__elem-right">
                  <div className="news__elem-title">buybrand.ru</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">
                Подробнее на buybrand:
              </div>
              <p className="news__elem-content">
                В«Блинбери» открывает по франшизе вдвое больше точек, чем
                собственных. Собственник сети рассказал о возможностях развития.
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img src="./news/Kupko.jpg" alt="" className="news__elem-img" />
                <div className="news__elem-right">
                  <div className="news__elem-title">Евгений Купко</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">
                Подробнее в telegram:
              </div>
              <p className="news__elem-content">
                Недавно мы открыли новую блинную на Тверской. Все в режиме
                нон-стоп, чтобы попасть под грант...
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img
                  src="./news/Maslov.jpg"
                  alt=""
                  className="news__elem-img"
                />
                <div className="news__elem-right">
                  <div className="news__elem-title">Ростислав Маслов</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">
                Подробнее в telegram:
              </div>
              <p className="news__elem-content">
                😒 Столько хайпа во круг Макдональдса «Вкусно и точка»… А вот
                что я думаю на этот счет...
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
            <SwiperSlide className="news__elem">
              <div className="news__elem-top">
                <img
                  src="./news/ProductMedia.jpg"
                  alt=""
                  className="news__elem-img"
                />
                <div className="news__elem-right">
                  <div className="news__elem-title">Продукт медиа</div>
                  <div className="news__elem-date">15.07.2022</div>
                </div>
              </div>
              <div className="news__elem-content-title">
                Подробнее на ПРОДУКТ медиа:
              </div>
              <p className="news__elem-content">
                Волгоградская сеть блинных «БлинБери» планирует открыть в
                Петербурге до 30 кафе. Компания считает петербургский рынок
                интересным и, несмотря на высокую конкуренцию...
              </p>
              <button className="news__elem-button">
                <span>Читать</span>
                <ArrowRight className="news__elem-icon" />
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
