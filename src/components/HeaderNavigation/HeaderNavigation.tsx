import React from "react";
import { NavLink } from "react-router-dom";
import { CUSTOMERS_ROUTE, DEFAULT_ROUTE, SHOPS_ROUTE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeBurger } from "../../store/burger/burger.slice";

import Burger from "../Burger/Burger";

import "./headerNavigation.scss";

const HeaderNavigation = () => {
  const { burger } = useAppSelector((state) => state.burger);

  const isBurgerActive = burger ? "header-navigation--active" : "";

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(closeBurger());
  };

  return (
    <>
      <Burger />
      <nav className={`header-navigation ${isBurgerActive}`}>
        <ul className="header-navigation__list">
          <li>
            <NavLink onClick={() => onClick()} to={DEFAULT_ROUTE}>
              Коллекция
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => onClick()} to={SHOPS_ROUTE}>
              Магазины
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => onClick()} to={CUSTOMERS_ROUTE}>
              Покупателям
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavigation;
