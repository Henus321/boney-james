import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selectors';
import { v4 as uuidv4 } from 'uuid';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutTotal from '../../components/checkout-total/checkout-total.component';
import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import './checkout.styles.scss';

const Checkout = () => {
  const cart = useSelector(selectCart);

  return (
    <div className="checkout">
      <span className="checkout__menu">
        <Link to="/collection">Коллекция</Link>
        <span> - </span>
        <span>Оформление</span>
      </span>
      <h2 className="checkout__title">Оформление заказа</h2>
      <CheckoutHeader />
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={uuidv4()} />
        ))
      ) : (
        <div className="checkout__plug">В Корзине нет товаров</div>
      )}
      <CheckoutTotal />
    </div>
  );
};

export default Checkout;
