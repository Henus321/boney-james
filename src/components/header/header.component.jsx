import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

import Cart from '../cart/cart.component';

import './header.styles.scss';

const Header = () => {
  const { isCartActive, cartStatus } = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div
        className={
          isCartActive
            ? 'header__background-blur--active'
            : 'header__background-blur'
        }
        onClick={() => dispatch(toggleCart(!isCartActive))}
      ></div>
      <Cart />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/collection">Каталог</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about">Покупателям</NavLink>
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
            onClick={() => dispatch(toggleCart(!isCartActive))}
          />
          <span
            className={
              cartStatus ? 'header__bag-span--active' : 'header__bag-span'
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
