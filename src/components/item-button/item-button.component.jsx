import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/action-creators/cart';
import { selectCurrentItem } from '../../store/selectors/item.selector';
import { selectSize } from '../../store/selectors/size.selector';
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
