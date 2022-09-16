import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemStartAsync, clearItem } from '../../store/item/item.actions';
import {
  selectCurrentItem,
  selectColorId,
  selectIsItemLoading,
} from '../../store/item/item.selector';
import { toggleBookmark } from '../../store/bookmarks/bookmarks.actions';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';

import { FaHeart } from 'react-icons/fa';
import Loader from '../../components/loader/loader.component';
import Slider from '../../components/slider/slider.component';
import ItemButton from '../../components/item-button/item-button.component';
import ItemSizes from '../../components/item-sizes/item-sizes.component';
import './item.styles.scss';

const Item = () => {
  const bookmarksId = useSelector(selectBookmarksId);
  const item = useSelector(selectCurrentItem);
  const colorId = useSelector(selectColorId);
  const isLoading = useSelector(selectIsItemLoading);

  const params = useParams();
  const dispatch = useDispatch();

  const coatId = params.coatId;
  const season = params.season;
  const year = params.year;

  const bookmarked = bookmarksId.includes(coatId);

  useEffect(() => {
    dispatch(fetchItemStartAsync(coatId));

    return () => {
      dispatch(clearItem());
    };
  }, [dispatch, coatId]);

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(coatId));
  };

  return (
    <div className="item">
      {isLoading ? (
        <Loader />
      ) : (
        item && (
          <div className="item__container" key={uuidv4()}>
            <Slider photoUrls={item.photoUrls} />
            <div className="item__info">
              <p>
                <Link
                  className="item__back-link"
                  to={`/collection/${year}/${season}`}
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
                {colorId &&
                  colorId.map((colorId) => (
                    <Link
                      to={`/collection/${year}/${season}/item/${colorId.id}`}
                      className={
                        colorId.id === coatId
                          ? `item__color item__color--${colorId.color} item__color--active`
                          : `item__color item__color--${colorId.color}`
                      }
                      key={colorId.id}
                    />
                  ))}
              </div>
              <span className="item__item">Размеры:</span>
              <div className="item__sizes">
                <ItemSizes />
              </div>
              <span className="item__item">
                Страна-производитель: {item.country}
              </span>
              <span className="item__item">Описание:</span>
              <span className="item__item item__description">
                {item.description}
              </span>
              <div className="item__buttons-container">
                <ItemButton />
                <FaHeart
                  onClick={toggleBookmarkHandler}
                  className={
                    bookmarked ? 'item__icon item__icon--active' : 'item__icon'
                  }
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Item;
