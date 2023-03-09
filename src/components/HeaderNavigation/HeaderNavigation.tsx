import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { CUSTOMERS_ROUTE, DEFAULT_ROUTE, SHOPS_ROUTE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeBurger } from "../../store/burger/burger.slice";

import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton";

import "./headerNavigation.scss";

const HeaderNavigation = () => {
  const { burger } = useAppSelector((state) => state.burger);
  const [navClicked, setNavClicked] = useState(false);

  const isBurgerActive = burger ? "header-navigation--active" : "";

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (burger) dispatch(closeBurger());
    // eslint-disable-next-line
  }, [dispatch, pathname, navClicked]);

  const onNavClick = () => {
    if (burger) setNavClicked((prevState) => !prevState);
  };

  return (
    <>
      <BurgerMenuButton />
      <nav
        className={`header-navigation ${isBurgerActive}`}
        onClick={() => onNavClick()}
      >
        <ul className="header-navigation__list">
          <li>
            <NavLink to={DEFAULT_ROUTE}>
              <span>Коллекция</span> <FaCircle />
            </NavLink>
          </li>
          <li>
            <NavLink to={SHOPS_ROUTE}>
              <span>Магазины</span> <FaCircle />
            </NavLink>
          </li>
          <li>
            <NavLink to={CUSTOMERS_ROUTE}>
              <span>Покупателям</span> <FaCircle />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavigation;
