import React from "react";
import { useAppDispatch } from "../../hooks";
import { ICartItem } from "../../models";
import {
  addOrIncreaseItem,
  decreaseItem,
  deleteItem,
} from "../../store/cart/cart.slice";
import { beautifyCost, getTitlePhoto } from "../../utils";
import { FaTrash } from "react-icons/fa";

import ColorItem from "../ColorItem/ColorItem";
import Button from "../Button/Button";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

import "./cartItem.scss";
import { MAX_QUANTITY } from "../../constants";

interface Props {
  cartItem: ICartItem;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const increaseDisabled = cartItem.quantity >= MAX_QUANTITY;
  const decreaseDisabled = cartItem.quantity <= 1;

  const onIncrease = (cartItem: ICartItem) =>
    dispatch(addOrIncreaseItem(cartItem));

  const onDecrease = (cartItem: ICartItem) => dispatch(decreaseItem(cartItem));

  const onDelete = (cartItem: ICartItem) => dispatch(deleteItem(cartItem));

  return (
    <div className="cart-item">
      <img src={getTitlePhoto(cartItem.options, cartItem.color)} alt="Photo" />
      <div className="cart-item__info">
        <h3 className="title-tertiary">{cartItem.name}</h3>
        <span className="cart-item__item">
          Цена: {beautifyCost(cartItem.cost)}
        </span>
        <span className="cart-item__item">Размер: {cartItem.size}</span>
        <span className="cart-item__item cart-item__color-container">
          Цвет:
          <ColorItem className="cart-item__color" color={cartItem.color} />
        </span>
        <div className="cart-item__item cart-item__actions">
          <div className="cart-item__action">
            <Button
              className="cart-item__button"
              onClick={() => onDecrease(cartItem)}
              disabled={decreaseDisabled}
            >
              -
            </Button>
            <span className="cart-item__quantity">{cartItem.quantity}</span>
            <Button
              className="cart-item__button"
              onClick={() => onIncrease(cartItem)}
              disabled={increaseDisabled}
            >
              +
            </Button>
          </div>
          <div className="cart-item__action">
            <Button
              className="cart-item__button"
              onClick={() => onDelete(cartItem)}
            >
              <FaTrash />
            </Button>
            <BookmarkButton className="cart-item__bookmark-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
