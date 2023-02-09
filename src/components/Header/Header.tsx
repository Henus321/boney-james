import React from "react";
import { Link } from "react-router-dom";

import HeaderSidebarMenu from "../HeaderSidebarMenu/HeaderSidebarMenu";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <HeaderNavigation />
      <Link to="/">
        <h1 className="header__title title-primary">Boney James</h1>
        <h1 className="header__title-mobile title-primary">BJ</h1>
      </Link>
      <HeaderSidebarMenu />
    </header>
  );
};

export default Header;
