import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentCollection,
  selectIsCollectionLoading,
} from '../../store/selectors/collection.selector';
import { selectBookmarksId } from '../../store/selectors/bookmarks.selector';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchCollectionStartAsync } from '../../store/action-creators/collection';
import { useEffect } from 'react';

import Loader from '../../components/loader/loader.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './bookmarks.styles.scss';
import { Item } from '../../types/item';
import { useActions } from '../../hooks/useActions';

const Bookmarks: React.FC = () => {
  const bookmarksId = useSelector(selectBookmarksId);
  const currentCollection = useSelector(selectCurrentCollection);
  const isLoading = useSelector(selectIsCollectionLoading);
  const { fetchCollectionStartAsync } = useActions();

  const bookmarks = currentCollection.filter((item: Item) =>
    bookmarksId.includes(item.id)
  );

  useEffect(() => {
    fetchCollectionStartAsync();
  }, []);

  return (
    <div className="bookmarks">
      <span className="bookmarks__menu">
        <Link to="/">На главную</Link>
        <span> - </span>
        <span>Закладки</span>
      </span>
      <h2 className="bookmarks__title">Ваши закладки</h2>
      <div className="bookmarks__body">
        {isLoading ? (
          <Loader />
        ) : bookmarks.length > 0 ? (
          bookmarks.map((bookmarkedItem: Item) => (
            <CollectionItem collectionItem={bookmarkedItem} key={uuidv4()} />
          ))
        ) : (
          <span className="bookmarks__no-items">В закладках нет товаров</span>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
