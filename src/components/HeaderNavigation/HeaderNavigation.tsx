import React from "react";
import { NavLink } from "react-router-dom";

import "./headerNavigation.scss";

const HeaderNavigation = () => {
  return (
    <nav className="header-navigation">
      <ul>
        <li>
          <NavLink to="/">Коллекция</NavLink>
        </li>
        <li>
          <NavLink to="/shops">Магазины</NavLink>
        </li>
        <li>
          <NavLink to="/about">Покупателям</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
