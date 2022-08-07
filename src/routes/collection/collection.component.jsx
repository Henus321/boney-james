import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCollections } from '../../store/collection/collection.selector';
import { loadCollection } from '../../store/collection/collection.actions';
import { Link } from 'react-router-dom';
import Card from '../../components/card/card.component';

import './collection.styles.scss';

const Collection = () => {
  const dispatch = useDispatch();

  const { currentCollection, qty: collectionQty } =
    useSelector(selectCollections);
  useEffect(() => {
    if (!collectionQty) {
      dispatch(loadCollection());
    }
  }, [collectionQty, dispatch]);

  return (
    <div className="collection">
      <span className="collection__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Весна</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - 2022</h2>

      <div className="collection__body">
        <Card collection={currentCollection} />
      </div>
    </div>
  );
};

export default Collection;
