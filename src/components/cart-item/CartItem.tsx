import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Item } from '../../types/item';

import { FaHeart } from 'react-icons/fa';
import './cartItem.scss';

interface CartItemProps {
  cartItem: Item;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { changeQuantity, deleteFromCart, toggleBookmark } = useActions();
  const { bookmarksId } = useTypedSelector((state) => state.bookmarks);
  const { name, id, price, size, quantity, color, mainPhotoUrl } = cartItem;
  const bookmarked = bookmarksId.includes(id);

  const decreaseQuantityHandler = () => {
    changeQuantity(cartItem, -1);
  };

  const increaseQuantityHandler = () => {
    changeQuantity(cartItem, +1);
  };

  const deleteFromCartHandler = () => {
    deleteFromCart(cartItem);
  };

  const toggleBookmarkHandler = () => {
    toggleBookmark(id);
  };

  return (
    <div className="cart-item">
      <img src={mainPhotoUrl} alt={name} className="cart-item__photo" />
      <div className="cart-item__description">
        <span className="cart-item__item-name">{name}</span>

        <span className="cart-item__text">{price}&#8381;</span>
        <span className="cart-item__text">Размер: {size}</span>

        <div>
          <span className="cart-item__text">Кол-во: </span>
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

export default CartItem;
