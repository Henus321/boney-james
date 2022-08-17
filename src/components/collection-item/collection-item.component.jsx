import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { selectBookmarksId } from '../../store/bookmarks/bookmarks.selector';
import { toggleBookmark } from '../../store/bookmarks/bookmarks.actions';
import { addToCart } from '../../store/cart/cart.actions';
import PropTypes from 'prop-types';

import Notification from '../notification/notification.component';
import { FaHeart } from 'react-icons/fa';
import './collection-item.styles.scss';

const CollectionItem = ({ collectionItem }) => {
  const [notification, setNotification] = useState(false);
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
    sizes,
  } = collectionItem;

  const bookmarked = bookmarksId.includes(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const year = params.year;

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(id));
  };

  const navigateToItemHandler = () => {
    navigate(`/collection/${year}/${season}/item/${id}`);
  };

  const toggleNotificationHandler = () => {
    setNotification(true);
  };

  const AddToCartHandler = (item, currentSize) => {
    dispatch(addToCart(item, currentSize));
    toggleNotificationHandler();
  };

  return (
    <div className="collection-item" key={id}>
      <Notification
        notification={notification}
        setNotification={setNotification}
        notificationMessage={'Товар добавлен'}
      />
      <div className="collection-item__image-container">
        <img
          className="collection-item__image"
          src={mainPhotoUrl}
          alt={name}
          onClick={navigateToItemHandler}
        />
        <div className="collection-item__hover-container">
          <h3 className="collection-item__hover-title">Добавить в корзину</h3>
          {sizes &&
            sizes.map((size) => (
              <div
                onClick={() => AddToCartHandler(collectionItem, size)}
                className="collection-item__hover-size"
                key={uuidv4()}
              >
                {size}
              </div>
            ))}
        </div>
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
