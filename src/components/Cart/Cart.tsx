import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";

import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <SidebarHeader title={SIDE_MENU_TITLE.cart} />
    </div>
  );
};

export default Cart;
