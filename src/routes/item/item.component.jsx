import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart.actions';
import {
  loadItem,
  setCurrentSize,
  clearDetails,
} from '../../store/item/item.actions';
import { selectItem } from '../../store/item/item.selector';

import './item.styles.scss';

const Item = () => {
  const { item, colorId, currentSize } = useSelector(selectItem);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItem(params));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, params]);

  return (
    <>
      {item && (
        <div className="item" key={uuidv4()}>
          <div className="item__slider">
            <img className="item__photo" src={item.mainPhotoUrl} alt="One" />
          </div>
          <div className="item__slider">
            <img className="item__photo" src={item.mainPhotoUrl} alt="One" />
          </div>
          <div className="item__info">
            <p>
              <Link className="item__back-link" to="/collection">
                Коллекция
              </Link>
              <span className="item__span-text"> - </span>
              <span className="item__span-text">Весна</span>
              <span className="item__span-text"> - </span>
              <span className="item__span-text">Пальто-Халат</span>
            </p>
            <h2 className="item__title">{item.name}</h2>
            <span className="item__item">{item.price}&#8381;</span>
            <span className="item__item">Артикул: {item.article}</span>
            <span className="item__item">Состав: {item.composition}</span>
            <span className="item__item">Подкладка: {item.lining}</span>
            <span className="item__item">Рост: {item.height}</span>
            <span className="item__item">Цвета:</span>
            <div className="item__item item__colors">
              {colorId.map(([color, id]) => (
                <Link
                  to={`/collection/item/${id}`}
                  className={
                    id === params.coatId
                      ? `item__color item__color--${color} item__color--active`
                      : `item__color item__color--${color}`
                  }
                  key={id}
                />
              ))}
            </div>
            <span className="item__item">Размеры:</span>
            <form className="item__sizes">
              {item.sizes &&
                item.sizes.map((size) => (
                  <div
                    onClick={() => dispatch(setCurrentSize(size))}
                    className={
                      currentSize === size ? 'item__size--active' : 'item__size'
                    }
                    key={uuidv4()}
                  >
                    {size}
                  </div>
                ))}
            </form>
            <span className="item__item">
              Страна-производитель: {item.country}
            </span>
            <span className="item__item">Описание:</span>
            <span className="item__item item__description">
              {item.description}
            </span>
            <button
              className="item__button"
              onClick={() => {
                dispatch(addToCart(item, currentSize));
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
