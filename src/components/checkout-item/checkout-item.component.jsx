import { useDispatch } from 'react-redux';
import { changeQuantity, deleteFromCart } from '../../store/cart/cart.actions';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, mainPhotoUrl, price, size, quantity, color } = cartItem;

  const dispatch = useDispatch();

  const itemTotal = () => {
    return price * quantity;
  };

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
      <span className="checkout-item__item">{name}</span>

      <span className="checkout-item__item">{size}</span>
      <span
        className={`checkout-item__color checkout-item__color--${color}`}
      ></span>
      <span className="checkout-item__item">{price}&#8381;</span>
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
      <span>{itemTotal()}&#8381;</span>
      <button
        className="checkout-item__delete-btn"
        onClick={deleteFromCartHandler}
      >
        x
      </button>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CheckoutItem;
