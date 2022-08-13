import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart.actions';
import {
  loadItem,
  setCurrentSize,
  clearItem,
} from '../../store/item/item.actions';
import {
  selectCurrentItem,
  selectColorId,
  selectCurrentSize,
} from '../../store/item/item.selector';
import { toggleBookmark } from '../../store/bookmarks/bookmarks.actions';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';

import { FaHeart } from 'react-icons/fa';
import Button from '../../components/button/button.component';
import Slider from '../../components/slider/slider.component';
import './item.styles.scss';

const Item = () => {
  const bookmarksId = useSelector(selectBookmarksId);
  const item = useSelector(selectCurrentItem);
  const colorId = useSelector(selectColorId);
  const currentSize = useSelector(selectCurrentSize);

  const params = useParams();
  const dispatch = useDispatch();

  const bookmarked = bookmarksId.includes(params.coatId);

  useEffect(() => {
    dispatch(loadItem(params.coatId));

    return () => {
      dispatch(clearItem());
    };
  }, [dispatch, params]);

  const addToCartHandler = () => {
    dispatch(addToCart(item, currentSize));
  };

  const setCurrentSizeHandler = (size) => {
    dispatch(setCurrentSize(size));
  };

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(params.coatId));
  };

  return (
    <>
      {item && (
        <div className="item" key={uuidv4()}>
          <Slider photoUrls={item.photoUrls} />
          <div className="item__info">
            <p>
              <Link
                className="item__back-link"
                to={`/collection/${params.season}`}
              >
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
                  to={`/collection/${params.season}/item/${id}`}
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
                    onClick={() => setCurrentSizeHandler(size)}
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
            <div className="item__buttons-container">
              <Button
                handler={addToCartHandler}
                buttonType="item"
                buttonText="Добавить в корзину"
              />
              <FaHeart
                onClick={toggleBookmarkHandler}
                className={
                  bookmarked ? 'item__icon item__icon--active' : 'item__icon'
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
