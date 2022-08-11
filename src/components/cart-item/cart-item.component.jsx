import { deleteFromCart, changeQuantity } from '../../store/cart/cart.actions';
import { useDispatch } from 'react-redux';

import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, price, size, quantity, color, mainPhotoUrl } = cartItem;

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
      </div>
    </div>
  );
};

export default CartItem;
