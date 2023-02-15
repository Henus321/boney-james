import React from "react";
import { useAppDispatch } from "../../hooks";
import { ICartItem } from "../../models";
import {
  addOrIncreaseItem,
  decreaseItem,
  deleteItem,
} from "../../store/cart/cart.slice";
import { beautifyCost, getBookmarksItem, getTitlePhoto } from "../../utils";
import { FaTrash } from "react-icons/fa";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ITEM_ROUTE } from "../../constants";

import ColorItem from "../ColorItem/ColorItem";
import Button from "../Button/Button";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

import "./cartItem.scss";

interface Props {
  cartItem: ICartItem;
}

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const decreaseDisabled = cartItem.quantity <= 1;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onIncrease = (cartItem: ICartItem) =>
    dispatch(addOrIncreaseItem(cartItem));

  const onDecrease = (cartItem: ICartItem) => dispatch(decreaseItem(cartItem));

  const onDelete = (cartItem: ICartItem) => dispatch(deleteItem(cartItem));

  const onPhotoClick = (cartItem: ICartItem) => {
    dispatch(closeAll());

    const params = `?color=${cartItem.color}`;
    navigate({
      pathname: `${ITEM_ROUTE}/${cartItem.slug}`,
      search: `${createSearchParams(params)}`,
    });
  };

  return (
    <div data-testid="cart-item" className="cart-item">
      <img
        onClick={() => onPhotoClick(cartItem)}
        src={getTitlePhoto(cartItem.options, cartItem.color)}
        alt="Photo"
      />
      <div className="cart-item__information">
        <h3 className="title-tertiary">{cartItem.name}</h3>
        <span className="cart-item__element">
          Цена: {beautifyCost(cartItem.cost)}
        </span>
        <span className="cart-item__element">Размер: {cartItem.size}</span>
        <span className="cart-item__element cart-item__color-container">
          Цвет:
          <ColorItem className="cart-item__color" color={cartItem.color} />
        </span>
        <div className="cart-item__element cart-item__actions">
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
            >
              +
            </Button>
          </div>
          <div className="cart-item__action">
            <Button
              dataTestid="cart-item-delete-btn"
              className="cart-item__button"
              onClick={() => onDelete(cartItem)}
            >
              <FaTrash />
            </Button>
            <BookmarkButton
              item={getBookmarksItem(cartItem, cartItem.color)}
              className="cart-item__bookmark-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
