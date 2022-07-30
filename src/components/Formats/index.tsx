import React from 'react';
import LabelSIcon from '../../assets/img/svg/formats/labelS.svg';
import LabelMIcon from '../../assets/img/svg/formats/labelM.svg';
import LabelLIcon from '../../assets/img/svg/formats/labelL.svg';
import './style.scss';

const Formats = () => {
  return (
    <div className="formats container">
      <div className="formats__top">
        <h2 className="formats__title">
          Для разных <br /> помещений и форматов
        </h2>
        <button className="formats__button">
          <span>Узнать инвестиции</span>
        </button>
      </div>
      <div className="formats__subtitle">Выбери вариант для своего города</div>
      <div className="formats__items">
        <div className="formats__item">
          <img src="./formatS.jpg" alt="" className="formats__image" />
          <LabelSIcon className="formats__icon" />
          <div className="formats__item-title">Малый</div>
        </div>
        <div className="formats__item">
          <img src="./formatM.jpg" alt="" className="formats__image" />
          <LabelMIcon className="formats__icon" />
          <div className="formats__item-title">Средний</div>
        </div>
        <div className="formats__item">
          <img src="./formatL.jpg" alt="" className="formats__image" />
          <LabelLIcon className="formats__icon" />
          <div className="formats__item-title">Большой</div>
        </div>
      </div>
    </div>
  );
};

export default Formats;
