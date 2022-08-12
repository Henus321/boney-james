import './checkout-header.styles.scss';

const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
      <span className="checkout-header__item">Товар</span>
      <span className="checkout-header__item">Название</span>
      <span className="checkout-header__item">Размер</span>
      <span className="checkout-header__item">Цвет</span>
      <span className="checkout-header__item">Цена</span>
      <span className="checkout-header__item">Кол-во</span>
      <span className="checkout-header__item">Сумма</span>
      <span className="checkout-header__item"></span>
    </div>
  );
};

export default CheckoutHeader;
