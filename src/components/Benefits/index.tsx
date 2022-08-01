import React from 'react';
import CorrectIcon from '../../assets/img/svg/correct.svg';
import './style.scss';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__inner container">
        <div className="benefits__elems">
          <div className="benefits__elem">
            <CorrectIcon className="benefits__icon" />
            <h3 className="benefits__title">Не берём допплатежей</h3>
            <p className="benefits__subtitle">
              У нас нет скрытых и сомнительных платежей - ты делишься с нами
              только процентом от оборота. Взамен мы даем платформу, обучение и
              поддержку
            </p>
          </div>
          <div className="benefits__elem">
            <CorrectIcon className="benefits__icon" />
            <h3 className="benefits__title">Всему научим</h3>
            <p className="benefits__subtitle">
              За 3 недели научим управлять блинной и расскажем как обучать
              сотрудников через Блинбери Академию
            </p>
          </div>
          <div className="benefits__elem">
            <CorrectIcon className="benefits__icon" />
            <h3 className="benefits__title">Поделимся опытом</h3>
            <p className="benefits__subtitle">
              Предоставим контакты наших федеральных поставщиков и наработанную
              базу маркетинговых инструментов
            </p>
          </div>
          <div className="benefits__elem">
            <CorrectIcon className="benefits__icon" />
            <h3 className="benefits__title">Всегда будем рядом</h3>
            <p className="benefits__subtitle">
              Business developer поможет открыть блинную по стандартам компании
              и будет сопровождать после
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
