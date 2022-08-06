import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.actions';

import './item.styles.scss';

const Item = () => {
  const [item, setItem] = useState({});
  const [colorId, setColorId] = useState([]);
  const [curSize, setCurSize] = useState('42');

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const collectionRef = collection(db, 'collections');
        const q = query(collectionRef);

        const querySnapshop = await getDocs(q);
        const data = querySnapshop.docs.map((docSnapshot) =>
          docSnapshot.data()
        );
        const [coat] = data.filter((item) => item.id === params.coatId);
        setItem(coat);

        const colorAndId = data.map((item) => [item.color, item.id]);
        setColorId(colorAndId);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItem();
  }, [params.coatId]);

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
            <div className="item__item item__colors">
              {colorId.map(([color, id]) => (
                <Link
                  to={`/collection/item/${id}`}
                  className={
                    id === params.coatId
                      ? `item__color--${color} item__color--active`
                      : `item__color--${color}`
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
                    onClick={() => setCurSize(size)}
                    className={
                      curSize === size ? 'item__size--active' : 'item__size'
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
                dispatch(addToCart(item, curSize));
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
