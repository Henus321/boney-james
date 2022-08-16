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

import './header-profile.styles.scss';

const HeaderProfile = () => {
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
    <div className="header-profile">
      <div className="header-profile__icon-container">
        <FaHeart
          className="header-profile__icon header-profile__icon-heart"
          onClick={bookmarksNavigateHandler}
        />
        <span
          className={
            bookmarksQty > 0
              ? 'header-profile__heart-span--active'
              : 'header-profile__heart-span'
          }
        ></span>
      </div>
      <div className="header-profile__icon-container">
        <FaShoppingBag
          className="header-profile__icon"
          onClick={toggleCartHandler}
        />
        <span
          className={
            cartStatus
              ? 'header-profile__bag-span--active'
              : 'header-profile__bag-span'
          }
        ></span>
      </div>
      <div className="header-profile__icon-container">
        <FaUser
          className="header-profile__icon"
          onClick={toggleProfileMenuHandler}
        />
        <span className="header-profile__user-span"></span>
      </div>
    </div>
  );
};

export default HeaderProfile;
