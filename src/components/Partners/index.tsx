import React from 'react';
import './style.scss';

const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__inner">
          <h2 className="partners__title">Партнёры о работе с нами</h2>
          <div className="partners__elems">
            <div className="partners__elem">
              <div className="partners__elem-text">
                При возникновении вопросов, сотрудники УК открыто, быстро и
                четко находят на них ответы. Всегда готовы дать советы, исходя
                из накопленного за 10 лет опыта работы компании.
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Артем</div>
                  <div className="partners__elem-city">
                    партнер в Йошкар-Оле
                  </div>
                </div>
                <img className="partners__elem-avatar" src="./rew/Alexey.jpg" />
              </div>
            </div>
            <div className="partners__elem">
              <div className="partners__elem-text">
                Открыл уже 3 блинных в топовых ТРЦ и на подходе четвертая. Не за
                горами Тольятти)
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Дмитрий</div>
                  <div className="partners__elem-city">партнёр в Самаре</div>
                </div>
                <img className="partners__elem-avatar" src="./rew/Dmitry.jpg" />
              </div>
            </div>
            <div className="partners__elem">
              <div className="partners__elem-text">
                Мы первые партнеры по франшизе Блинбери. Довольны
                сопровождением: ребята помогают в открытии и советуют, что
                улучшить в операционной работе.
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Алексей</div>
                  <div className="partners__elem-city">партнёр в Пензе</div>
                </div>
                <img className="partners__elem-avatar" src="./rew/Alexey.jpg" />
              </div>
            </div>
            <div className="partners__elem">
              <div className="partners__elem-text">
                Наставники обучают быстро, понятно, с вниманием. Аттестацию
                сдала с первого раза. Блинбери Академия - отличная возможность
                обучать сотрудников, не отправляя их в длительные командировки.
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Елена</div>
                  <div className="partners__elem-city">
                    партнер в Нижнем Новгороде{' '}
                  </div>
                </div>
                <img className="partners__elem-avatar" src="./rew/Elena.jpg" />
              </div>
            </div>
            <div className="partners__elem">
              <div className="partners__elem-text">
                С помощью брокеров из УК забрал место в одном из лучших ТРЦ
                Московской области по выгодной цене
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Дмитрий</div>
                  <div className="partners__elem-city">партнёр в Москве</div>
                </div>
                <img
                  className="partners__elem-avatar"
                  src="./rew/Dmitry2.jpg"
                />
              </div>
            </div>
            <div className="partners__elem">
              <div className="partners__elem-text">
                В этом году прошел повышение квалификации в Волгограде. Передаем
                новые фишки своим сотрудникам.
              </div>
              <div className="partners__elem-bottom">
                <div className="partners__elem-left">
                  <div className="partners__elem-author">Никита</div>
                  <div className="partners__elem-city">партнёр в Пензе</div>
                </div>
                <img className="partners__elem-avatar" src="./rew/Nikita.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
