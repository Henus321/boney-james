import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.selectors';
import { v4 as uuidv4 } from 'uuid';

import './checkout.styles.scss';

const Checkout = () => {
const cart = useSelector(selectCart);

  return (
    <div className='checkout'>
      <span className="checkout__menu">
        <Link to="/collection">Коллекция</Link>
        <span> - </span>
        <span>Оформление</span>
      </span>
      <h2 className="checkout__title">Оформление заказа</h2>
      <div className='checkout__total'>Total: </div>
        {cart.length > 0 && 
        ( cart.map((item) => (
        <div className='checkout__item' key={uuidv4()}>
            <img className='checkout__photo' src={item.mainPhotoUrl} alt={item.name} />
            <span className="checkout__name">{item.name}</span>
            <span className="checkout__price">{item.price}&#8381;</span>
            <span  className="checkout__size">Размер: {item.size}</span>
            <span className="checkout__quantity">Количество: </span>
            <div className='checkout__quantity-buttons'>
                <button className='checkout__quantity-button'>-</button>
                <span>{item.quantity}</span>
                <button className='checkout__quantity-button'>+</button>
            </div>    
            <div className='checkout__color-container'>
              <span>Цвет: </span>
              <span className={`checkout__color checkout__color--${item.color}`}></span>
            </div>
            <button className='checkout__delete-btn'>x</button>
        </div>)
        ))
        }
       
    </div>
  )
}

export default Checkout