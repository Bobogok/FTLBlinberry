import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

const Circs = () => {
  return (
    <div className="circs">
      <div className="circs__inner container">
        <h2 className="circs__title">Самые лояльные условия </h2>
        <div className="circs__elems">
          <Swiper slidesPerView={3} spaceBetween={19} className="circsSwiper">
            <SwiperSlide className="circs__elem">
              <div className="circs__elem-title">5%</div>
              <div className="circs__elem-subtitle">роялти</div>
              <div className="circs__elem-tag">
                <span>из расчета от выручки за месяц</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="circs__elem">
              <div className="circs__elem-title">600 000 р.</div>
              <div className="circs__elem-subtitle">паушальный взнос</div>
              <div className="circs__elem-tag">
                <span>дисконт для следующих открытий</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="circs__elem">
              <div className="circs__elem-title">от 10 мес.</div>
              <div className="circs__elem-subtitle">возврат инвестиций</div>
              <div className="circs__elem-tag">
                <span>в среднем 16-17 мес.</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Circs;
