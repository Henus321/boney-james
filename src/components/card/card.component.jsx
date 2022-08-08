import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../../store/collection/collection.actions';
import { v4 as uuidv4 } from 'uuid';

import { FaHeart } from 'react-icons/fa';
import './card.styles.scss';
import Cart from '../cart/cart.component';

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
            <span className="card__name">{card.name}</span>
            <span className="card__article">Арт.: {card.article}</span>
            <span className="card__cost">{card.price}&#8381;</span>
            <div className="card__color-circles">
              {card.possibleColors.map((color) => (
                <div
                  key={uuidv4()}
                  className={`card__color card__color--${color}`}
                ></div>
              ))}
            </div>
            <FaHeart
              onClick={() => dispatch(toggleBookmark(card))}
              className={
                card.bookmarked ? 'card__icon card__icon--active' : 'card__icon'
              }
            />
          </div>
        ))}
    </>
  );
};

export default Card;
