import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

const Grow = () => {
  return (
    <div className="grow">
      <div className="grow__inner container">
        <h2 className="grow__title">Давай расти вместе</h2>
        <div className="grow__elems">
          <div className="grow__elem">
            <h4 className="grow__elem-title">80 блинных</h4>
            <div className="grow__elem-subtitle">в 15 городах</div>
            <div className="grow__elem-tag">
              <span>выросли в 2,5 раза за год</span>
            </div>
          </div>
          <div className="grow__elem">
            <h4 className="grow__elem-title">&#62;210 тысяч гостей</h4>
            <div className="grow__elem-subtitle">
              воспользовались нашим мобильным приложением
            </div>
            <div className="grow__elem-tag">
              <span>x1,4 год к году</span>
            </div>
          </div>
          <div className="grow__elem">
            <h4 className="grow__elem-title">1 млрд рублей</h4>
            <div className="grow__elem-subtitle">стоит “БлинБери” сейчас</div>
            <div className="grow__elem-tag">
              <span>x2 год к году</span>
            </div>
          </div>
          <div className="grow__elem">
            <h4 className="grow__elem-title">1,7 млн рублей</h4>
            <div className="grow__elem-subtitle">
              средняя выручка <br /> 1 блинной в месяц
            </div>
            <div className="grow__elem-tag">
              <span>x1,5 за год</span>
            </div>
          </div>
        </div>

        {/* мобилка */}
        <div className="grow__elems-mobile">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={12}
            breakpoints={{
              768: {
                spaceBetween: 24,
              },
            }}
            className="growSwiper"
          >
            <SwiperSlide className="grow__elem">
              <h4 className="grow__elem-title">80 блинных</h4>
              <div className="grow__elem-subtitle">в 15 городах</div>
              <div className="grow__elem-tag">
                <span>выросли в 2,5 раза за год</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="grow__elem">
              <h4 className="grow__elem-title">&#62;210 тысяч гостей</h4>
              <div className="grow__elem-subtitle">
                воспользовались нашим мобильным приложением
              </div>
              <div className="grow__elem-tag">
                <span>x1,4 год к году</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="grow__elem">
              <h4 className="grow__elem-title">1 млрд рублей</h4>
              <div className="grow__elem-subtitle">стоит “БлинБери” сейчас</div>
              <div className="grow__elem-tag">
                <span>x2 год к году</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="grow__elem">
              <h4 className="grow__elem-title">1,7 млн рублей</h4>
              <div className="grow__elem-subtitle">
                средняя выручка <br /> 1 блинной в месяц
              </div>
              <div className="grow__elem-tag">
                <span>x1,5 за год</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Grow;
