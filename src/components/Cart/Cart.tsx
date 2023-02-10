import React, { useEffect } from "react";
import { ORDER_CREATE_MESSAGE, SIDE_MENU_TITLE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTotal } from "../../utils";
import { ICartItem } from "../../models";
import { clearCart } from "../../store/cart/cart.slice";
import {
  createOrder,
  reset as resetOrders,
} from "../../store/orders/orders.slice";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import { toast } from "react-toastify";

import SidebarHeader from "../SidebarHeader/SidebarHeader";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./cart.scss";

const Cart = () => {
  const { cart: cartState, orders: ordersState } = useAppSelector(
    (state) => state
  );
  const { cart } = cartState;
  const { isSuccess, isError, message } = ordersState;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetOrders());
      dispatch(clearCart());
      dispatch(closeAll());
      toast.success(ORDER_CREATE_MESSAGE);
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(resetOrders());
    }
  }, [dispatch, isError, message]);

  const onFinish = (cart: ICartItem[]) => dispatch(createOrder(cart));

  return (
    <div className="cart">
      <SidebarHeader>
        <h3 className="cart__title title-tertiary">{SIDE_MENU_TITLE.cart}</h3>
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
              onClick={onFinish}
              value={cart}
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
