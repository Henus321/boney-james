import React from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

import "./headerMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <FaHeart />
      <FaShoppingBag />
      <FaUser />
    </div>
  );
};

export default HeaderMenu;
