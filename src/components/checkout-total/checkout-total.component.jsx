import { useSelector } from 'react-redux';
import {
  selectCartTotal,
  selectCartQuantity,
} from '../../store/cart/cart.selectors';

import Button from '../button/button.component';
import './checkout-total.styles.scss';

const CheckoutTotal = () => {
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);

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
    <div className="checkout-total">
      <h3 className="checkout-total__title">Итого:</h3>
      <span className="checkout-total__item">{cartTotal} Рублей</span>
      <span className="checkout-total__item">
        {cartQuantity} {itemsQuantityName(cartQuantity)}
      </span>
      <Button buttonType="wide-black" buttonText="Оплатить покупку" />
    </div>
  );
};

export default CheckoutTotal;
