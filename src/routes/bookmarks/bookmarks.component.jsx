import { useSelector } from 'react-redux';
import { selectCurrentCollection } from '../../store/collection/collection.selector';
import { Link } from 'react-router-dom';
import Card from '../../components/card/card.component';

import './bookmarks.styles.scss';

const Bookmarks = () => {
  const currentCollection = useSelector(selectCurrentCollection);

  const bookmarks = currentCollection.filter((item) => {
    return item.bookmarked;
  });

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
          <Card collection={bookmarks} />
        ) : (
          <span className="bookmarks__no-items">В закладках нет товаров</span>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
