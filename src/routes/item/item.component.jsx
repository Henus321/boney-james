import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CollectionContext } from '../../contexts/collection.context';
import { v4 as uuidv4 } from 'uuid';

import './item.styles.scss';

const Item = () => {
  const { collections } = useContext(CollectionContext);
  const [item, setItem] = useState({});

  const params = useParams();
  useEffect(() => {
    if (collections.length > 0) {
      const [coat] = collections.filter((item) => item.id === params.coatId);

      setItem(coat);
    }
  }, [collections, params.coatId]);

  return (
    <>
      {Object.keys(item).length && (
        <div className="item" key={uuidv4()}>
          <div className="item__slider">
            <img
              className="item__photo"
              src={item.colors[0].photoUrls[0]}
              alt="One"
            />
          </div>
          <div className="item__slider">
            <img
              className="item__photo"
              src={item.colors[0].photoUrls[1]}
              alt="One"
            />
          </div>
          <div className="item__info">
            <p>
              <Link to="/collection">Back</Link>
              <span> - </span>
              <span>Весна</span>
              <span> - </span>
              <span>Пальто-Халат</span>
            </p>
            <h2 className="item__title">{item.name}</h2>
            <span className="item__item">{item.price}&#8381;</span>
            <span className="item__item">Артикул: {item.article}</span>
            <span className="item__item">Состав: {item.composition}</span>
            <span className="item__item">Подкладка: {item.lining}</span>
            <span className="item__item">Рост: {item.height}</span>
            <span className="item__item">Цвета:</span>
            <div className="item__colors">
              <div className="item__color item__color--1"></div>
              <div className="item__color item__color--2"></div>
              <div className="item__color item__color--3"></div>
            </div>
            <span className="item__item">Размеры:</span>
            <div className="item__sizes">
              {item.sizes.map((size) => (
                <div className="item__size" key={uuidv4()}>
                  {size}
                </div>
              ))}
            </div>
            <span className="item__item">
              Страна-производитель: {item.country}
            </span>
            <span className="item__item">Описание:</span>
            <span className="item__item item__description">
              {item.description}
            </span>
            <button className="item__button">Добавить в корзину</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
