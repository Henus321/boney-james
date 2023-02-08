import React from "react";
import { NavLink } from "react-router-dom";
import { CUSTOMERS_ROUTE, DEFAULT_ROUTE, SHOPS_ROUTE } from "../../constants";

import "./headerNavigation.scss";

const HeaderNavigation = () => {
  return (
    <nav className="header-navigation">
      <ul>
        <li>
          <NavLink to={DEFAULT_ROUTE}>Коллекция</NavLink>
        </li>
        <li>
          <NavLink to={SHOPS_ROUTE}>Магазины</NavLink>
        </li>
        <li>
          <NavLink to={CUSTOMERS_ROUTE}>Покупателям</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
