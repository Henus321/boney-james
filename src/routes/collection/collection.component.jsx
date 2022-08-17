import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentCollection,
  selectIsCollectionLoading,
} from '../../store/collection/collection.selector';
import { fetchCollectionStartAsync } from '../../store/collection/collection.actions';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Loader from '../../components/loader/loader.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const Collection = () => {
  const currentCollection = useSelector(selectCurrentCollection);
  const isLoading = useSelector(selectIsCollectionLoading);

  const dispatch = useDispatch();
  const params = useParams();

  const season = params.season;
  const year = params.year;

  const seasonCollection = currentCollection.filter(
    (item) => item.season === season
  );

  useEffect(() => {
    dispatch(fetchCollectionStartAsync());
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
        <span>{seasonFromParams(season)}</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - {year}</h2>
      <div className="collection__body">
        {isLoading ? (
          <Loader />
        ) : (
          seasonCollection.length > 0 &&
          seasonCollection.map((collectionItem) => (
            <CollectionItem collectionItem={collectionItem} key={uuidv4()} />
          ))
        )}
      </div>
    </div>
  );
};

export default Collection;
