import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";
import { useAppSelector } from "../../hooks";
import { getTotal } from "../../utils";

import SidebarHeader from "../SidebarHeader/SidebarHeader";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./cart.scss";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const onFinish = () => console.log("Оформить заказ");

  return (
    <div className="cart">
      <SidebarHeader>
        <h3 className="title-tertiary">{SIDE_MENU_TITLE.cart}</h3>
      </SidebarHeader>
      {cart.length === 0 && <span className="cart__empty">Нет предметов</span>}
      {cart.length > 0 && (
        <>
          <div className="cart__content">
            {cart.map((cartItem) => (
              <CartItem
                key={`${cartItem.slug}${cartItem.color}${cartItem.size}`}
                cartItem={cartItem}
              />
            ))}
          </div>
          <div className="cart__checkout">
            <div className="cart__total">
              <span>Итого:</span>
              <span>{getTotal(cart)}</span>
            </div>
            <Button
              className="cart__checkout-button"
              onClick={() => onFinish()}
              reverse
            >
              Оформить
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
