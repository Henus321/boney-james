import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../../store/collection/collection.actions';
import { v4 as uuidv4 } from 'uuid';

import { FaHeart } from 'react-icons/fa';
import './card.styles.scss';

const Card = ({ collectionItem }) => {
  const {
    id,
    mainPhotoUrl,
    name,
    article,
    price,
    possibleColors,
    color,
    bookmarked,
  } = collectionItem;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const toggleBookmarkHandler = () => {
    dispatch(toggleBookmark(id));
  };

  return (
    <div className="card__item" key={id}>
      <img
        className="card__image"
        src={mainPhotoUrl}
        alt={name}
        onClick={() => {
          navigate(`/collection/${params.season}/item/${id}`);
        }}
      />
      <span className="card__name">{name}</span>
      <span className="card__article">Арт.: {article}</span>
      <span className="card__cost">{price}&#8381;</span>
      <div className="card__color-circles">
        {possibleColors.map((posColor) => (
          <div
            key={uuidv4()}
            className={
              posColor === color
                ? `card__color card__color--${posColor} card__color--active`
                : `card__color card__color--${posColor}`
            }
          ></div>
        ))}
      </div>
      <FaHeart
        onClick={toggleBookmarkHandler}
        className={bookmarked ? 'card__icon card__icon--active' : 'card__icon'}
      />
    </div>
  );
};

export default Card;
