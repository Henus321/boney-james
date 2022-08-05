import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import './header.styles.scss';
import { useState, useContext, useEffect } from 'react';
import { CollectionContext } from '../../contexts/collection.context';

const Header = () => {
  const { deleteFromCart, changeQuantity, cart } =
    useContext(CollectionContext);
  const [cartActive, setCartActive] = useState(false);
  const [heartSpanActive, setHeartSpanActive] = useState(false);

  const toggleCart = () => {
    setCartActive(!cartActive);
  };

  useEffect(() => {
    cart.length > 0 ? setHeartSpanActive(true) : setHeartSpanActive(false);
  }, [cart.length]);

  console.log(cart);
  return (
    <header className="header">
      {cartActive && (
        <div className="header__cart">
          <div className="header__cart-filter"></div>
          <div className="header__cart-heading">
            <h2 className="header__cart-title">Корзина</h2>
            {/* <span>{cart.length} Товар</span> */}
            <span
              className="header__cart-close-btn"
              onClick={() => toggleCart()}
            >
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
                  <span className="header__cart-item-name">
                    {cartItem.name}
                  </span>
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
                      onClick={() => changeQuantity(cartItem, -1)}
                    >
                      -
                    </button>
                    <span className="header__cart-text">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="header__cart-btn"
                      onClick={() => changeQuantity(cartItem, +1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="header__cart-delete-btn"
                    onClick={() => deleteFromCart(cartItem)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="header__cart-warning">В корзине нет товаров</h2>
          )}
        </div>
      )}
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
        <div className="header__icon">
          <FaHeart />
          <span className="header__heart-span"></span>
        </div>
        <div className="header__icon">
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
        <div className="header__icon">
          <FaUser className="header__icon" />
          <span className="header__user-span"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
