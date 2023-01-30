import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ICartItem } from "../../models";
import {
  addOrIncreaseItem,
  clearCart,
  decreaseItem,
  deleteItem,
} from "../../store/cart/cart.slice";
import { FaTrash } from "react-icons/fa";

import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./cart.scss";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const onIncrease = (cartItem: ICartItem) =>
    dispatch(addOrIncreaseItem(cartItem));

  const onDecrease = (cartItem: ICartItem) => dispatch(decreaseItem(cartItem));

  const onDelete = (cartItem: ICartItem) => dispatch(deleteItem(cartItem));

  const onClear = () => dispatch(clearCart());

  return (
    <div className="cart">
      <SidebarHeader title={SIDE_MENU_TITLE.cart} />
      {cart.map((cartItem) => (
        <div key={`${cartItem.slug}${cartItem.color}${cartItem.size}`}>
          <span>{cartItem.name}</span>
          <span>{cartItem.color}</span>
          <span>{cartItem.size}</span>
          <span> {cartItem.quantity}</span>
          <button onClick={() => onIncrease(cartItem)}>+</button>
          <button onClick={() => onDecrease(cartItem)}>-</button>
          <button onClick={() => onDelete(cartItem)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <button onClick={() => onClear()}>clear cart</button>
    </div>
  );
};

export default Cart;
