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
            spaceBetween={24}
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

{
  /* <Swiper
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination]}
          className="carouserSwiper"
        >
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">Мобильное приложение</div>
              <div className="carousel__elem-subtitle">
                Нашим гостям удобно
                <br /> заказывать любимые блины.
              </div>
              <button className="carousel__button">
                <span>Скачать мобильное приложение</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">SMM</div>
              <div className="carousel__elem-subtitle">
                Аккаунты в социальных сетях с общим количеством
                <br /> подписок более 200 тыс. человек.
              </div>
              <button className="carousel__button">
                <span>Подпишись на наши новости</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">Приложение курьера</div>
              <div className="carousel__elem-subtitle">
                Наши курьеры приедут без опозданий.
              </div>
              <button className="carousel__button">
                <span>Подпишись на наши новости</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">Блинбери Академия</div>
              <div className="carousel__elem-subtitle">
                Наши сотрудники точно знают
                <br /> и соблюдают стандарты.
              </div>
              <button className="carousel__button">
                <span>Подпишись на наши новости</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">
                Аналитика для ресторана
              </div>
              <div className="carousel__elem-subtitle">
                Наши партнеры знают все о своем бизнесе.
              </div>
              <button className="carousel__button">
                <span>Подпишись на наши новости</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">Видеоконтроль</div>
              <div className="carousel__elem-subtitle">
                У нас собственная служба видеонаблюдения.
                <br /> Все процессы всегда под контролем.
              </div>
              <button className="carousel__button">
                <span>Подпишись на наши новости</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
          <SwiperSlide className="carousel__elem">
            <div className="carousel__left">
              <div className="carousel__title">Мы - FoodTech компания</div>
              <div className="carousel__title-second">Сезонная смена меню</div>
              <div className="carousel__elem-subtitle">
                Следуем современным тенденциям
                <br /> и делаем модные продукты.
              </div>
              <button className="carousel__button">
                <span>Скачать мобильное приложение</span>
              </button>
            </div>
            <CustomNavigation>
              <img
                src="https://via.placeholder.com/552x1120.jpg"
                alt=""
                className="carousel__image"
              />
            </CustomNavigation>
          </SwiperSlide>
        </Swiper> */
}
