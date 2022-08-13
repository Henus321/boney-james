import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCollection } from '../../store/collection/collection.selector';
import { loadCurrentCollection } from '../../store/collection/collection.actions';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const Collection = () => {
  const currentCollection = useSelector(selectCurrentCollection);

  const params = useParams();

  const seasonCollection = currentCollection.filter(
    (item) => item.season === params.season
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentCollection());
  }, [dispatch]);

  const seasonFromParams = (season) => {
    switch (season) {
      case 'spring':
        return 'Весна';
      case 'autumn':
        return 'Осень';
      default:
        return false;
    }
  };

  return (
    <div className="collection">
      <span className="collection__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>{seasonFromParams(params.season)}</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - 2022</h2>

      <div className="collection__body">
        {seasonCollection.length > 0 &&
          seasonCollection.map((collectionItem) => (
            <CollectionItem collectionItem={collectionItem} key={uuidv4()} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
