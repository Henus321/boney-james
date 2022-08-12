import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartTotal,
  selectCartQuantity,
} from '../../store/cart/cart.selectors';
import { cartToInitialState } from '../../store/cart/cart.actions';

import { FaTrash } from 'react-icons/fa';
import Button from '../button/button.component';
import './checkout-total.styles.scss';

const CheckoutTotal = () => {
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

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

  const cartToInitialStateHandler = () => {
    dispatch(cartToInitialState());
  };

  return (
    <div className="checkout-total">
      <span className="checkout-total__title">Итого</span>
      <span className="checkout-total__price">{cartTotal}&#8381;</span>
      <span className="checkout-total__item">
        {cartQuantity} {itemsQuantityName(cartQuantity)}
      </span>
      <Button
        buttonType="wide-black checkout-total__button"
        buttonText="Оплатить покупку"
      />
      <FaTrash
        className="checkout-total__trash-btn"
        onClick={cartToInitialStateHandler}
      />
    </div>
  );
};

export default CheckoutTotal;
