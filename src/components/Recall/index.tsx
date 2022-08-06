import React, { useState } from 'react';
import CorrectIcon from '../../assets/img/svg/correct.svg';

import './style.scss';

const Recall = () => {
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  const sendForm = (e: any) => {
    e.preventDefault();

    setIsFormSend((prev) => !prev);
  };

  return (
    <div className="recall">
      <div className="container">
        <div className="recall__inner">
          <div className="recall__left">
            <h2 className="recall__title">Мы перезвоним</h2>
            <div className="recall__subtitle">
              Заполни форму заявки и мы свяжемся с тобой
              <br /> в ближайшее время, подберём для тебя самые выгодные условия
              сотрудничества
            </div>
          </div>
          <div className="recall__right">
            {!isFormSend ? (
              <form className="recall__form">
                <input
                  type="text"
                  placeholder="Город"
                  className="recall__input"
                />
                <input
                  type="text"
                  placeholder="Имя"
                  className="recall__input"
                />
                <input
                  type="text"
                  placeholder="Телефон"
                  className="recall__input"
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  className="recall__input"
                />
                <textarea
                  placeholder="Запрос (не обязательно)"
                  name=""
                  id=""
                  className="recall__textarea"
                ></textarea>
                <button onClick={sendForm} className="recall__button">
                  <span>Отправить заявку</span>
                </button>
              </form>
            ) : (
              <div className="recall__complete">
                <CorrectIcon className="recall__icon" />
                <div className="recall__complete-title">
                  Форма успешно отправлена
                </div>
                <button className="recall__button">
                  <span>Вернуться в начало</span>
                </button>
              </div>
            )}
            <div className="recall__terms">
              Заполняя форму, я принимаю условия&nbsp;
              <a href="" className="recall__link">
                политики обработки персональных данных
              </a>
              &nbsp;и даю согласие на обработку личных данных.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recall;
