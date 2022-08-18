import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

const Achievements = ({ refProp }: any) => {
  return (
    <div className="achievements" ref={refProp}>
      <div className="container">
        <div className="achievements__inner">
          <div className="achievements__top">
            <h2 className="achievements__title">Посмотри наши достижения</h2>
            <div className="achievements__subtitle-mobile">
              Наша команда любит новшества
            </div>
            <button className="achievements__button">
              <span>Стать частью истории</span>
            </button>
          </div>
          <div className="achievements__subtitle">
            Наша команда любит новшества
          </div>
          <div className="achievements__elems">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={12}
              breakpoints={{
                768: {
                  spaceBetween: 24,
                },
              }}
              className="achievementsSwiper"
            >
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В апреле 2012 года открыли первую блинную Блинбери в
                  Волгограде
                </div>
                <div className="achievements__elem-date">12.04.2012</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В 2014 году вышли за пределы Волгоградской области и открыли
                  первую блинную в Краснодаре
                </div>
                <div className="achievements__elem-date">14.06.2014</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В августе 2019 года открылась первая блинная по франшизе в
                  Пензе
                </div>
                <div className="achievements__elem-date">25.08.2019</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  Запустили доставку и мобильное приложение в марте 2020 года
                </div>
                <div className="achievements__elem-date">04.03.2020</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  За 2020 год открыли блинные в регионах Астрахань и Саратов
                </div>
                <div className="achievements__elem-date">03.09.2020</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В октябре 2020 года мы определили “North star” стать блинной
                  №1 в мире и открыть 5 000 блинных к 2030 г.
                </div>
                <div className="achievements__elem-date">21.10.2020</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  Запустили приложение для курьера в 2021 году
                </div>
                <div className="achievements__elem-date">23.01.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В марте 2021 года открыли первую блинную по франшизе в Москве
                </div>
                <div className="achievements__elem-date">17.03.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В 2021 году число сотрудников компании превысило 1000 человек
                </div>
                <div className="achievements__elem-date">05.04.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В апреле 2021 открыли первую блинную в аэропорту Шереметьево
                </div>
                <div className="achievements__elem-date">18.04.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В мае 2021 года открыли первую блинную по франшизе в
                  Санкт-Петербурге
                </div>
                <div className="achievements__elem-date">19.05.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В августе 2021 открыли первую блинную на побережье Черного
                  моря в солнечном Сочи
                </div>
                <div className="achievements__elem-date">20.08.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В декабре 2021 года накормили блинами 1 000 000 человек
                </div>
                <div className="achievements__elem-date">12.12.2021</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  За первую половину 2022 года открыли 5 блинных в Казани
                </div>
                <div className="achievements__elem-date">04.05.2022</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  Продали 3 000 000 блинов с открытия по май 2022 года
                </div>
                <div className="achievements__elem-date">14.05.2022</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  С 2020 года партнер открыл 4 блинных в топовых ТРЦ Самары
                </div>
                <div className="achievements__elem-date">02.06.2022</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  В июне 2022 года открыли 3 топовых блинных в центре Москвы за
                  3 недели
                </div>
                <div className="achievements__elem-date">16.06.2022</div>
              </SwiperSlide>
              <SwiperSlide className="achievements__elem">
                <div className="achievements__elem-content">
                  Получили грант на развитие сети Блинбери от мэра Москвы летом
                  2022 года
                </div>
                <div className="achievements__elem-date">15.07.2022</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
