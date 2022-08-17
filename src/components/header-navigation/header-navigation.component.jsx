import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DropMenu from '../drop-menu/drop-menu.component';
import './header-navigation.styles.scss';

const HeaderNavigation = () => {
  const [checked, setChecked] = useState(false);

  const onToggleCheckbox = () => {
    setChecked(!checked);
    window.scrollTo(0, 0);
  };

  return (
    <div className="header-navigation">
      <input
        className="header-navigation__checkbox"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="header-navigation__label" htmlFor="checkbox"></label>

      <nav className="header-navigation__nav">
        <ul className="header-navigation__list">
          <li className="header-navigation__item">
            <NavLink to="/" onClick={onToggleCheckbox}>
              Главная
            </NavLink>
          </li>
          <li className="header-navigation__item-mobile">
            <NavLink to="/collection/2021/autumn" onClick={onToggleCheckbox}>
              Каталог Осень 2021
            </NavLink>
          </li>
          <li className="header-navigation__item-mobile">
            <NavLink to="/collection/2022/spring" onClick={onToggleCheckbox}>
              Каталог Весна 2022
            </NavLink>
          </li>
          <DropMenu parentClassName="header-navigation__item" />
          <li className="header-navigation__item">
            <NavLink to="/about" onClick={onToggleCheckbox}>
              Покупателям
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
