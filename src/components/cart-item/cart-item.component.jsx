import { deleteFromCart, changeQuantity } from '../../store/cart/cart.actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
  const { name, price, size, quantity, color } = cartItem;

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
    <div className="cart__item">
      <img
        src={cartItem.mainPhotoUrl}
        alt={cartItem.name}
        className="cart__photo"
      />
      <div className="cart__description">
        <span className="cart__item-name">{name}</span>

        <span className="cart__text">{price}&#8381;</span>
        <span className="cart__text">Размер: {size}</span>

        <div>
          <span className="cart__text">Количество: </span>
          <button className="cart__btn" onClick={decreaseQuantityHandler}>
            -
          </button>
          <span className="cart__text">{quantity}</span>
          <button className="cart__btn" onClick={increaseQuantityHandler}>
            +
          </button>
        </div>
        <div className="cart__color-container">
          <span className="cart__text">Цвет:</span>
          <span className={`cart__color--${color}`}></span>
        </div>

        <button className="cart__delete-btn" onClick={deleteFromCartHandler}>
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
