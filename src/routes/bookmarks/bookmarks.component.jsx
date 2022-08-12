import { useSelector, useDispatch } from 'react-redux';
import {
  selectBookmarksId,
  selectCurrentCollection,
} from '../../store/collection/collection.selector';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { loadCurrentCollection } from '../../store/collection/collection.actions';
import { useEffect } from 'react';

import Card from '../../components/card/card.component';
import './bookmarks.styles.scss';

const Bookmarks = () => {
  const bookmarksId = useSelector(selectBookmarksId);
  const currentCollection = useSelector(selectCurrentCollection);

  const bookmarks = currentCollection.filter((item) =>
    bookmarksId.includes(item.id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentCollection());
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
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmarkedItem) => (
            <Card collectionItem={bookmarkedItem} key={uuidv4()} />
          ))
        ) : (
          <span className="bookmarks__no-items">В закладках нет товаров</span>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
