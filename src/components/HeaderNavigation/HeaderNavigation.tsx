import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CUSTOMERS_ROUTE, DEFAULT_ROUTE, SHOPS_ROUTE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeBurger } from "../../store/burger/burger.slice";

import Burger from "../Burger/Burger";

import "./headerNavigation.scss";

const HeaderNavigation = () => {
  const { burger } = useAppSelector((state) => state.burger);

  const isBurgerActive = burger ? "header-navigation--active" : "";

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (burger) dispatch(closeBurger());
    // eslint-disable-next-line
  }, [dispatch, pathname]);

  return (
    <>
      <Burger />
      <nav className={`header-navigation ${isBurgerActive}`}>
        <ul className="header-navigation__list">
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
    </>
  );
};

export default HeaderNavigation;
