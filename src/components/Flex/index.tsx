import React from 'react';

import './style.scss';

const Flex = () => {
  return (
    <div className="flex">
      <div className="flex__inner container">
        <h2 className="flex__title">Работаем гибко</h2>
        <div className="flex__subtitle">Подходим каждому</div>
        <p className="flex__text">
          <b>Москва и Санкт-Петербург:</b> Выбирай район, открывай блинную и
          управляй бизнесом - мы поможем. С нас - поставка сырья для блинной с
          нашего производства, узнаваемость бренда от блинных в центральных
          районах городов и аэропортов.
          <a href="" className="flex__link">
            от 5 000 000 руб. -&#62;
          </a>
        </p>
        <p className="flex__text">
          <b>Россия:</b> Открывай сеть блинных и производство с эксклюзивными
          правами на город. С нас отлаженные бизнес-процессы, IT-сопровождение,
          маркетинговое сопровождение.
          <a href="" className="flex__link">
            Список свободных городов -&#62;
          </a>
        </p>
        <p className="flex__text">
          <b>Вне России:</b> Выбирай отдельный город <br /> с эксклюзивными
          правами или стань мастером-франчайзи в своей стране.
          <a href="" className="flex__link">
            Узнать подробнее -&#62;
          </a>
        </p>
      </div>
    </div>
  );
};

export default Flex;
