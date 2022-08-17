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
import PropTypes from 'prop-types';

import './header-icons-menu.styles.scss';

const HeaderIconsMenu = ({ setBurgerActive }) => {
  const cartStatus = useSelector(selectCartStatus);
  const bookmarksQty = useSelector(selectBookmarksQty);
  const isCartActive = useSelector(selectIsCartActive);
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookmarksNavigateHandler = () => {
    navigate('/bookmarks');
    setBurgerActive(false);
  };

  const toggleCartHandler = () => {
    dispatch(toggleCart(!isCartActive));
  };

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  return (
    <div className="header-icons-menu">
      <div className="header-icons-menu__icon-container">
        <FaHeart
          className="header-icons-menu__icon header-icons-menu__icon-heart"
          onClick={bookmarksNavigateHandler}
        />
        <span
          className={
            bookmarksQty > 0
              ? 'header-icons-menu__heart-span--active'
              : 'header-icons-menu__heart-span'
          }
        ></span>
      </div>
      <div className="header-icons-menu__icon-container">
        <FaShoppingBag
          className="header-icons-menu__icon"
          onClick={toggleCartHandler}
        />
        <span
          className={
            cartStatus
              ? 'header-icons-menu__bag-span--active'
              : 'header-icons-menu__bag-span'
          }
        ></span>
      </div>
      <div className="header-icons-menu__icon-container">
        <FaUser
          className="header-icons-menu__icon"
          onClick={toggleProfileMenuHandler}
        />
        <span className="header-icons-menu__user-span"></span>
      </div>
    </div>
  );
};

HeaderIconsMenu.propTypes = {
  setBurgerActive: PropTypes.func,
};

export default HeaderIconsMenu;
