import { NavLink, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.actions';
import {
  selectIsCartActive,
  selectCartStatus,
} from '../../store/cart/cart.selectors';
import { selectCurrentCollection } from '../../store/collection/collection.selector';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { selectIsProfileMenuActive } from '../../store/profile/profile.selector';

import Cart from '../cart/cart.component';
import Profile from '../profile/profile.component';

import './header.styles.scss';

const Header = () => {
  const cartStatus = useSelector(selectCartStatus);
  const isCartActive = useSelector(selectIsCartActive);
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);

  const currentCollection = useSelector(selectCurrentCollection);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let isBookmarks = false;
  currentCollection.forEach((item) => {
    if (item.bookmarked === true) isBookmarks = true;
  });

  return (
    <header className="header">
      <Cart />
      <Profile />
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
          <FaHeart
            className="header__icon header__icon-heart"
            onClick={() => navigate('/bookmarks')}
          />
          <span
            className={
              isBookmarks ? 'header__heart-span--active' : 'header__heart-span'
            }
          ></span>
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
          <FaUser
            className="header__icon"
            onClick={() => dispatch(toggleProfileMenu(!isProfileMenuActive))}
          />
          <span className="header__user-span"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
