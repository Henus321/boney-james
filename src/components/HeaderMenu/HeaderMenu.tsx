import React from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useAppDispatch } from "../../hooks";
import {
  openBookmarks,
  openCart,
  openProfile,
} from "../../store/sidebar/sidebar.slice";

import "./headerMenu.scss";

const HeaderMenu = () => {
  const dispatch = useAppDispatch();

  const onBookmarksOpen = () => dispatch(openBookmarks());

  const onCartOpen = () => dispatch(openCart());

  const onProfileOpen = () => dispatch(openProfile());

  return (
    <div className="header-menu">
      <FaHeart onClick={() => onBookmarksOpen()} />
      <FaShoppingBag onClick={() => onCartOpen()} />
      <FaUser onClick={() => onProfileOpen()} />
    </div>
  );
};

export default HeaderMenu;
