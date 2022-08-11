import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  toggleCart,
  setCartTotal,
  toggleCartStatus,
} from '../../store/cart/cart.actions';
import {
  selectCart,
  selectCartQuantity,
  selectCartTotal,
  selectIsCartActive,
} from '../../store/cart/cart.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart.styles.scss';

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);
  const isCartActive = useSelector(selectIsCartActive);

  const navigate = useNavigate();
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

  const toggleCartMenu = () => {
    dispatch(toggleCart(!isCartActive));
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
    dispatch(toggleCart(!isCartActive));
  };

  return (
    <>
      <div
        className={
          isCartActive
            ? 'header__background-blur--active'
            : 'header__background-blur'
        }
        onClick={toggleCartMenu}
      ></div>
      <div className={isCartActive ? 'cart cart--active' : 'cart'}>
        <div className="cart__heading">
          <h2 className="cart__title">
            Корзина&nbsp;
            <span className="cart__items-quantity">
              -&nbsp;{cart.length > 0 ? cartQuantity : '0'}&nbsp;
              {itemsQuantityName(cartQuantity)}
            </span>
          </h2>
          <Button buttonType="close" handler={toggleCartMenu} buttonText="x" />
        </div>
        <div className="cart__items-container">
          {cart.length > 0 ? (
            cart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={uuidv4()} />
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
            <Button
              handler={navigateToCheckout}
              buttonText="Оформить заказ"
              buttonType="wide-black"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
