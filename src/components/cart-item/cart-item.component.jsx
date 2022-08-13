import { deleteFromCart, changeQuantity } from '../../store/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../store/bookmarks/bookmarks.actions';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';
import PropTypes from 'prop-types';

import { FaHeart } from 'react-icons/fa';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, id, price, size, quantity, color, mainPhotoUrl } = cartItem;
  const bookmarksId = useSelector(selectBookmarksId);
  const bookmarked = bookmarksId.includes(id);

  const dispatch = useDispatch();

  const decreaseQuantityHandler = () => {
    dispatch(changeQuantity(cartItem, -1));
  };

  const increaseQuantityHandler = () => {
    dispatch(changeQuantity(cartItem, +1));
  };

  const deleteFromCartHandler = () => {
    dispatch(deleteFromCart(cartItem));
  };

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(id));
  };

  return (
    <div className="cart-item">
      <img src={mainPhotoUrl} alt={name} className="cart-item__photo" />
      <div className="cart-item__description">
        <span className="cart-item__item-name">{name}</span>

        <span className="cart-item__text">{price}&#8381;</span>
        <span className="cart-item__text">Размер: {size}</span>

        <div>
          <span className="cart-item__text">Количество: </span>
          <button className="cart-item__btn" onClick={decreaseQuantityHandler}>
            -
          </button>
          <span className="cart-item__text">{quantity}</span>
          <button className="cart-item__btn" onClick={increaseQuantityHandler}>
            +
          </button>
        </div>
        <div className="cart-item__color-container">
          <span className="cart-item__text">Цвет:</span>
          <span
            className={`cart-item__color cart-item__color--${color}`}
          ></span>
        </div>

        <button
          className="cart-item__delete-btn"
          onClick={deleteFromCartHandler}
        >
          x
        </button>
        <FaHeart
          onClick={toggleBookmarkHandler}
          className={
            bookmarked
              ? 'cart-item__icon cart-item__icon--active'
              : 'cart-item__icon'
          }
        />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
