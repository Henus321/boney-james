import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/cart.actions';
import { selectCurrentItem } from '../../store/item/item.selector';
import { selectSize } from '../../store/size/size.selector';
import { toast } from 'react-toastify';

import './item-button.styles.scss';

const ItemButton = () => {
  const item = useSelector(selectCurrentItem);
  const { currentSize } = useSelector(selectSize);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(item, currentSize));
    toast.success('Товар добавлен');
  };

  return (
    <button className="button-item" onClick={addToCartHandler}>
      Добавить в корзину
    </button>
  );
};

export default ItemButton;
