import { useEffect } from 'react';
import {
  deleteFromCart,
  changeQuantity,
  toggleCart,
  setCartTotal,
  toggleCartStatus,
} from '../../store/cart/cart.actions';
import {
  selectCart,
  selectCartTotal,
  selectIsCartActive,
} from '../../store/cart/cart.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './cart.styles.scss';

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const isCartActive = useSelector(selectIsCartActive);

  const dispatch = useDispatch();

  useEffect(() => {
    const defaultCartTotal = 0;
    cart.length > 0
      ? dispatch(toggleCartStatus(true))
      : dispatch(toggleCartStatus(false));
    if (cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const curValue = item.price * item.quantity;
        return acc + curValue;
      }, 0);
      dispatch(setCartTotal(total));
    }
    if (cart.length === 0) dispatch(setCartTotal(defaultCartTotal));
  }, [dispatch, cart]);

  const itemsQuantityName = (cartLength) => {
    switch (cartLength) {
      case 1:
        return 'Товар';
      case 2:
      case 3:
      case 4:
        return 'Товара';
      default:
        return 'Товаров';
    }
  };

  return (
    <div className={isCartActive ? 'cart--active' : 'cart'}>
      <div className="cart__heading">
        <h2 className="cart__title">
          Корзина&nbsp;
          <span className="cart__items-quantity">
            -&nbsp;{cart.length > 0 ? cart.length : '0'}&nbsp;
            {itemsQuantityName(cart.length)}
          </span>
        </h2>
        {/* Добавить количество предметов */}
        {/* <span>{cart.length} Товар</span> */}
        <span
          className="cart__close-btn"
          onClick={() => dispatch(toggleCart(!isCartActive))}
        >
          x
        </span>
      </div>
      <div className="cart__items-container">
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <div className="cart__item" key={uuidv4()}>
              <img
                src={cartItem.mainPhotoUrl}
                alt={cartItem.name}
                className="cart__photo"
              />
              <div className="cart__description">
                <span className="cart__item-name">{cartItem.name}</span>

                <span className="cart__text">{cartItem.price}&#8381;</span>
                <span className="cart__text">Размер: {cartItem.size}</span>

                <div>
                  <span className="cart__text">Количество: </span>
                  <button
                    className="cart__btn"
                    onClick={() => dispatch(changeQuantity(cartItem, -1))}
                  >
                    -
                  </button>
                  <span className="cart__text">{cartItem.quantity}</span>
                  <button
                    className="cart__btn"
                    onClick={() => dispatch(changeQuantity(cartItem, +1))}
                  >
                    +
                  </button>
                </div>
                <div className="cart__color-container">
                  <span className="cart__text">Цвет:</span>
                  <span className={`cart__color--${cartItem.color}`}></span>
                </div>
                <button
                  className="cart__delete-btn"
                  onClick={() => dispatch(deleteFromCart(cartItem))}
                >
                  x
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="cart__warning">В корзине нет товаров</h2>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart__order">
          <div className="cart__order-price">
            <span>Итого</span>
            <span>{cartTotal}&#8381;</span>
          </div>
          <button className="cart__order-accept">Оформить заказ</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
