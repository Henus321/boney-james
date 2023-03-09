import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleBurger } from "../../store/burger/burger.slice";

import "./burgerMenuButton.scss";

const Burger = () => {
  const { burger } = useAppSelector((state) => state.burger);

  const dispatch = useAppDispatch();

  const onBurgerToggle = () => dispatch(toggleBurger());

  return (
    <div className="burger">
      <input
        className="burger__checkbox"
        type="checkbox"
        id="checkbox"
        checked={burger}
        onChange={() => onBurgerToggle()}
      />
      <label className="burger__label" htmlFor="checkbox">
        <span className="burger__icon" />
      </label>
    </div>
  );
};

export default Burger;
