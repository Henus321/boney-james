import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import './header.styles.scss';
import { useState, useContext } from 'react';
import { CollectionContext } from '../../contexts/collection.context';

const Header = () => {
  const { cart, deleteFromCart, changeQuantity } =
    useContext(CollectionContext);
  const [cartActive, setCartActive] = useState(false);

  const toggleProfileItem = () => {
    setCartActive(!cartActive);
  };

  console.log(cart);

  return (
    <header className="header">
      {cartActive && (
        <div className="header__cart">
          {cart.length > 0 ? (
            cart.map((cartItem) => (
              <div className="header__cart-item" key={uuidv4()}>
                <img
                  src={cartItem.mainPhotoUrl}
                  alt={cartItem.name}
                  className="header__cart-photo"
                />
                <span>{cartItem.name}</span>
                <span>{cartItem.price}&#8381;</span>
                <span>Цвет: {cartItem.color}</span>
                <span>Размер: {cartItem.size}</span>
                <div>
                  <span>Количество: </span>
                  <button onClick={() => changeQuantity(cartItem, -1)}>
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => changeQuantity(cartItem, +1)}>
                    +
                  </button>
                </div>
                <button onClick={() => deleteFromCart(cartItem)}>x</button>
              </div>
            ))
          ) : (
            <div>No Items Found</div>
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
        <FaHeart className="header__icon" />
        <FaShoppingBag
          className="header__icon"
          onClick={() => toggleProfileItem()}
        />
        <FaUser className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
