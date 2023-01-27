import React from "react";
import { Link } from "react-router-dom";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <HeaderNavigation />
      <Link to="/">
        <h1 className="title-primary">Boney James</h1>
      </Link>
      <HeaderMenu />
    </header>
  );
};

export default Header;
