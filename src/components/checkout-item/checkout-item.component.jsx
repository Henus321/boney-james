import { useDispatch } from 'react-redux';
import { changeQuantity, deleteFromCart } from '../../store/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, mainPhotoUrl, price, size, quantity, color } = cartItem;

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
    <div className="checkout-item">
      <img className="checkout-item__photo" src={mainPhotoUrl} alt={name} />
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__price">{price}&#8381;</span>
      <span className="checkout-item__size">Размер: {size}</span>
      <span className="checkout-item__quantity">Количество: </span>
      <div className="checkout-item__quantity-buttons">
        <button
          className="checkout-item__quantity-button"
          onClick={decreaseQuantityHandler}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="checkout-item__quantity-button"
          onClick={increaseQuantityHandler}
        >
          +
        </button>
      </div>
      <div className="checkout-item__color-container">
        <span>Цвет: </span>
        <span
          className={`checkout-item__color checkout-item__color--${color}`}
        ></span>
      </div>
      <button
        className="checkout-item__delete-btn"
        onClick={deleteFromCartHandler}
      >
        x
      </button>
    </div>
  );
};

export default CheckoutItem;
