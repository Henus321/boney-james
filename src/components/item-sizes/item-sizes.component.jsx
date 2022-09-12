import { useDispatch, useSelector } from 'react-redux';
import { selectSize } from '../../store/size/size.selector';
import { setCurrentSize } from '../../store/size/size.actions';
import { v4 as uuidv4 } from 'uuid';

import './item-sizes.styles.scss';

const ItemSizes = () => {
  const { currentSize, sizes } = useSelector(selectSize);

  const dispatch = useDispatch();

  const setCurrentSizeHandler = (size) => {
    dispatch(setCurrentSize(size));
  };

  return (
    <>
      {sizes.map((size) => (
        <div
          onClick={() => setCurrentSizeHandler(size)}
          className={currentSize === size ? 'item-size--active' : 'item-size'}
          key={uuidv4()}
        >
          {size}
        </div>
      ))}
    </>
  );
};

export default ItemSizes;
