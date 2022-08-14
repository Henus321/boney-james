import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentCollection,
  selectIsCollectionLoading,
} from '../../store/collection/collection.selector';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchCollectionStartAsync } from '../../store/collection/collection.actions';
import { useEffect } from 'react';

import Loader from '../../components/loader/loader.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './bookmarks.styles.scss';

const Bookmarks = () => {
  const bookmarksId = useSelector(selectBookmarksId);
  const currentCollection = useSelector(selectCurrentCollection);
  const isLoading = useSelector(selectIsCollectionLoading);

  const bookmarks = currentCollection.filter((item) =>
    bookmarksId.includes(item.id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStartAsync());
  }, [dispatch]);

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
          bookmarks.map((bookmarkedItem) => (
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
