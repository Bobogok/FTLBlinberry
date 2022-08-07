import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CorrectIcon from '../../assets/img/svg/correct.svg';

import './style.scss';

const Recall = ({ refProp }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    setIsFormSend((prev) => !prev);

    // куда отправлять?
  };

  return (
    <div className="recall" ref={refProp}>
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
              <form onSubmit={handleSubmit(onSubmit)} className="recall__form">
                <input
                  type="text"
                  placeholder="Город"
                  className="recall__input"
                  {...register('city', { required: true, maxLength: 80 })}
                  style={errors.city && { border: '1px solid #ff0056' }}
                />
                <input
                  type="text"
                  placeholder="Имя"
                  className="recall__input"
                  {...register('name', { required: true, maxLength: 50 })}
                  style={errors.name && { border: '1px solid #ff0056' }}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="recall__input"
                  {...register('phone', {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    pattern:
                      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gim,
                  })}
                  style={errors.phone && { border: '1px solid #ff0056' }}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  className="recall__input"
                  {...register('email', {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  })}
                  style={errors.email && { border: '1px solid #ff0056' }}
                />
                <textarea
                  placeholder="Запрос (не обязательно)"
                  className="recall__textarea"
                  {...register('comment', { required: false, maxLength: 1000 })}
                ></textarea>
                <button type="submit" className="recall__button">
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
