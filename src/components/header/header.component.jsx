import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, changeQuantity } from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

import './header.styles.scss';

const Header = () => {
  const [cartActive, setCartActive] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [heartSpanActive, setHeartSpanActive] = useState(false);

  const { cart } = useSelector(selectCart);

  const dispatch = useDispatch();

  const toggleCart = () => {
    setCartActive(!cartActive);
  };

  useEffect(() => {
    cart.length > 0 ? setHeartSpanActive(true) : setHeartSpanActive(false);
    if (cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const curValue = item.price * item.quantity;
        return acc + curValue;
      }, 0);
      setCartTotal(total);
    }
  }, [cart]);

  return (
    <header className="header">
      <div
        className={
          cartActive
            ? 'header__background-blur--active'
            : 'header__background-blur'
        }
        onClick={() => toggleCart()}
      ></div>
      <div className={cartActive ? 'header__cart--active' : 'header__cart'}>
        <div className="header__cart-heading">
          <h2 className="header__cart-title">Корзина</h2>
          {/* Добавить количество предметов */}
          {/* <span>{cart.length} Товар</span> */}
          <span className="header__cart-close-btn" onClick={() => toggleCart()}>
            x
          </span>
        </div>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <div className="header__cart-item" key={uuidv4()}>
              <img
                src={cartItem.mainPhotoUrl}
                alt={cartItem.name}
                className="header__cart-photo"
              />
              <div className="header__cart-description">
                <span className="header__cart-item-name">{cartItem.name}</span>
                <span className="header__cart-text">
                  {cartItem.price}&#8381;
                </span>
                <span className="header__cart-text">
                  Цвет: {cartItem.color}
                </span>
                <span className="header__cart-text">
                  Размер: {cartItem.size}
                </span>
                <div>
                  <span className="header__cart-text">Количество: </span>
                  <button
                    className="header__cart-btn"
                    onClick={() => dispatch(changeQuantity(cartItem, -1))}
                  >
                    -
                  </button>
                  <span className="header__cart-text">{cartItem.quantity}</span>
                  <button
                    className="header__cart-btn"
                    onClick={() => dispatch(changeQuantity(cartItem, +1))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="header__cart-delete-btn"
                  onClick={() => dispatch(deleteFromCart(cartItem))}
                >
                  x
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="header__cart-warning">В корзине нет товаров</h2>
        )}
        {cart.length > 0 && (
          <div className="header__cart-order">
            <div className="header__cart-order-price">
              <span>Итого</span>
              <span>{cartTotal}&#8381;</span>
            </div>
            <button className="header__cart-order-accept">
              Оформить заказ
            </button>
          </div>
        )}
      </div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/collection">Collections</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <h2 className="header__title">Boney James</h2>
      <div className="header__profile">
        <div className="header__icon-container">
          <FaHeart className="header__icon" />
          <span className="header__heart-span"></span>
        </div>
        <div className="header__icon-container">
          <FaShoppingBag
            className="header__icon"
            onClick={() => toggleCart()}
          />
          <span
            className={
              heartSpanActive ? 'header__bag-span--active' : 'header__bag-span'
            }
          ></span>
        </div>
        <div className="header__icon-container">
          <FaUser className="header__icon" />
          <span className="header__user-span"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
