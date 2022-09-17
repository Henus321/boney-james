import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentCollection,
  selectIsCollectionLoading,
} from '../../store/selectors/collection.selector';
import { fetchCollectionStartAsync } from '../../store/action-creators/collection';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '../../types/item';

import Loader from '../../components/loader/loader.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useActions } from '../../hooks/useActions';
import './collection.styles.scss';

const Collection: React.FC = () => {
  const currentCollection = useSelector(selectCurrentCollection);
  const isLoading = useSelector(selectIsCollectionLoading);
  const { fetchCollectionStartAsync } = useActions();

  const params = useParams();

  const season = params.season;
  const year = params.year;

  const seasonCollection = currentCollection.filter(
    (item: Item) => item.season === season
  );

  useEffect(() => {
    fetchCollectionStartAsync();
  }, []);

  const seasonFromParams = (season: string) => {
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
        <span>{seasonFromParams(season as string)}</span>
      </span>
      <h2 className="collection__title">Коллекция женских пальто - {year}</h2>
      <div className="collection__body">
        {isLoading ? (
          <Loader />
        ) : (
          seasonCollection.length > 0 &&
          seasonCollection.map((collectionItem: Item) => (
            <CollectionItem collectionItem={collectionItem} key={uuidv4()} />
          ))
        )}
      </div>
    </div>
  );
};

export default Collection;
