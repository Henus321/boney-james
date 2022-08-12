import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentCollection } from '../../store/collection/collection.selector';
import { loadCurrentCollection } from '../../store/collection/collection.actions';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Card from '../../components/card/card.component';
import './collection.styles.scss';

const Collection = () => {
  const currentCollection = useSelector(selectCurrentCollection);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(loadCurrentCollection(params.season));
  }, [params.season, dispatch]);

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
        {currentCollection.length > 0 &&
          currentCollection.map((collectionItem) => (
            <Card collectionItem={collectionItem} key={uuidv4()} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
