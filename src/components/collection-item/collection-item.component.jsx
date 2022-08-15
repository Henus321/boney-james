import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';
import { toggleBookmark } from '../../store/bookmarks/bookmarks.actions';
import PropTypes from 'prop-types';

import { FaHeart } from 'react-icons/fa';
import './collection-item.styles.scss';

const CollectionItem = ({ collectionItem }) => {
  const bookmarksId = useSelector(selectBookmarksId);
  const {
    id,
    mainPhotoUrl,
    name,
    article,
    price,
    possibleColors,
    color,
    season,
  } = collectionItem;

  const bookmarked = bookmarksId.includes(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(id));
  };

  const navigateToItemHandler = () => {
    navigate(`/collection/${season}/item/${id}`);
  };

  return (
    <div className="collection-item" key={id}>
      <div className="collection-item__image-container">
        <img
          className="collection-item__image"
          src={mainPhotoUrl}
          alt={name}
          onClick={navigateToItemHandler}
        />
      </div>
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__article">Арт.: {article}</span>
      <span className="collection-item__cost">{price}&#8381;</span>
      <div className="collection-item__color-circles">
        {possibleColors.map((posColor) => (
          <div
            key={uuidv4()}
            className={
              posColor === color
                ? `collection-item__color collection-item__color--${posColor} collection-item__color--active`
                : `collection-item__color collection-item__color--${posColor}`
            }
          ></div>
        ))}
      </div>
      <FaHeart
        onClick={toggleBookmarkHandler}
        className={
          bookmarked
            ? 'collection-item__icon collection-item__icon--active'
            : 'collection-item__icon'
        }
      />
    </div>
  );
};

CollectionItem.propTypes = {
  collectionItem: PropTypes.object.isRequired,
};

export default CollectionItem;
