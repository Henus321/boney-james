import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../../store/collection/collection.actions';

import { FaHeart } from 'react-icons/fa';
import './card.styles.scss';

const Card = ({ collection }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {collection.length > 0 &&
        collection.map((card) => (
          <div className="card__item" key={card.id}>
            <img
              className="card__image"
              src={card.mainPhotoUrl}
              alt={card.name}
              onClick={() => {
                navigate(`/collection/item/${card.id}`);
              }}
            />
            <span className="card__span">{card.name}</span>
            <span className="card__span">{card.price}&#8381;</span>
            <div className="card__color-circles">
              <div className="card__color card__color--1"></div>
              <div className="card__color card__color--2"></div>
              <div className="card__color card__color--3"></div>
            </div>
            <FaHeart
              onClick={() => dispatch(toggleBookmark(card))}
              className={card.bookmarked ? 'card__icon--active' : 'card__icon'}
            />
          </div>
        ))}
    </>
  );
};

export default Card;
