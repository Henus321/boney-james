import React from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ICartItem } from "../../models";
import {
  openBookmarks,
  openCart,
  openProfile,
} from "../../store/sidebar/sidebar.slice";

import "./headerSidebarMenu.scss";

const HeaderSidebarMenu = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const onBookmarksOpen = () => dispatch(openBookmarks());

  const onCartOpen = () => dispatch(openCart());

  const onProfileOpen = () => dispatch(openProfile());

  const isCartEmpty = (cart: ICartItem[]) =>
    cart.length < 1 ? "" : "header-sidebar-menu__item--not-empty";

  return (
    <ul className="header-sidebar-menu">
      <li onClick={() => onBookmarksOpen()}>
        <FaHeart className="header-sidebar-menu__bookmark-icon" />
      </li>
      <li className={isCartEmpty(cart)} onClick={() => onCartOpen()}>
        <FaShoppingBag />
      </li>
      <li onClick={() => onProfileOpen()}>
        <FaUser />
      </li>
    </ul>
  );
};

export default HeaderSidebarMenu;
