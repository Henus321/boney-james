import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.actions';
import {
  selectIsCartActive,
  selectCartStatus,
} from '../../store/cart/cart.selectors';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { selectIsProfileMenuActive } from '../../store/profile/profile.selector';
import { selectBookmarksQty } from '../../store/bookmarks/bookmarks.selector';

import Plug from '../plug/plug.component';
import Cart from '../cart/cart.component';
import Profile from '../profile/profile.component';
import HeaderNavigation from '../header-navigation/header-navigation.component';
import './header.styles.scss';

const Header = () => {
  const cartStatus = useSelector(selectCartStatus);
  const bookmarksQty = useSelector(selectBookmarksQty);
  const isCartActive = useSelector(selectIsCartActive);
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookmarksNavigateHandler = () => {
    navigate('/bookmarks');
  };

  const toggleCartHandler = () => {
    dispatch(toggleCart(!isCartActive));
  };

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  return (
    <header className="header">
      <Plug />
      <Cart />
      <Profile />
      <HeaderNavigation />
      <h2 className="header__title">Boney James</h2>
      <div className="header__profile">
        <div className="header__icon-container">
          <FaHeart
            className="header__icon header__icon-heart"
            onClick={bookmarksNavigateHandler}
          />
          <span
            className={
              bookmarksQty > 0
                ? 'header__heart-span--active'
                : 'header__heart-span'
            }
          ></span>
        </div>
        <div className="header__icon-container">
          <FaShoppingBag className="header__icon" onClick={toggleCartHandler} />
          <span
            className={
              cartStatus ? 'header__bag-span--active' : 'header__bag-span'
            }
          ></span>
        </div>
        <div className="header__icon-container">
          <FaUser className="header__icon" onClick={toggleProfileMenuHandler} />
          <span className="header__user-span"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
