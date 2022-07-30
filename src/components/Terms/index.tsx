import React from 'react';
import Stage1Icon from '../../assets/img/svg/terms/stage1.svg';
import Stage2Icon from '../../assets/img/svg/terms/stage2.svg';
import Stage3Icon from '../../assets/img/svg/terms/stage3.svg';
import './style.scss';

const Terms = () => {
  return (
    <div className="terms">
      <div className="terms__inner container">
        <div className="terms__left">
          <h2 className="terms__left-title">
            Получи реальные сроки открытия блинной
          </h2>
          <div className="terms__left-subtitle">
            Мы помогаем и сопровождаем партнёра <br /> на каждом этапе стройки и
            открытия блинной
          </div>
          <button className="terms__button">
            <span>Подробнее этапы</span>
          </button>
        </div>
        <div className="terms__right">
          <ul className="terms__elems">
            <li className="terms__elem">
              <Stage1Icon className="terms__icon" />
              <h3 className="terms__title">Обучаешься и ищешь помещение</h3>
              <p className="terms__subtitle">
                Под контролем опытного наставника, который передаст свой знания
                и поможет с выбором самой лучшей локации
              </p>
            </li>
            <li className="terms__elem">
              <Stage2Icon className="terms__icon" />
              <h3 className="terms__title">
                Строишь блинную <br /> и нанимаешь сотрудников
              </h3>
              <p className="terms__subtitle">
                Конечно, строит подрядчик под твоим контролем, а мы помогаем
                закупить оборудование и остальное оснащение блинной
              </p>
            </li>
            <li className="terms__elem">
              <Stage3Icon className="terms__icon" />
              <h3 className="terms__title">
                Открываешь блинную <br /> и получаешь прибыль
              </h3>
              <p className="terms__subtitle">
                От нас StartUp team и стартовый промо-план
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
