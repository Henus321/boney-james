import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartTotal,
  selectCartQuantity,
} from '../../store/cart/cart.selectors';
import { cartToInitialState } from '../../store/cart/cart.actions';
import { getAuth } from 'firebase/auth';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { selectIsProfileMenuActive } from '../../store/profile/profile.selector';

import { FaTrash } from 'react-icons/fa';
import Button from '../button/button.component';
import './checkout-total.styles.scss';

const CheckoutTotal = () => {
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);

  const auth = getAuth();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  const payForItems = () => {
    // TEMPORARY, NAVIGATION TO PAYMENT?
    return auth.currentUser
      ? console.log('Redirection to payment')
      : toggleProfileMenuHandler();
  };

  return (
    <div className="checkout-total">
      <span className="checkout-total__title">Итого</span>
      <span className="checkout-total__price">{cartTotal}&#8381;</span>
      <span className="checkout-total__item">
        {cartQuantity} {itemsQuantityName(cartQuantity)}
      </span>
      <FaTrash
        className="checkout-total__trash-btn"
        onClick={cartToInitialStateHandler}
      />
      <Button
        buttonType="wide-black checkout-total__button"
        buttonText="Оплатить покупку"
        handler={payForItems}
      />
    </div>
  );
};

export default CheckoutTotal;
