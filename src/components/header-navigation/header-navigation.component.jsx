import { NavLink } from 'react-router-dom';

import DropMenu from '../drop-menu/drop-menu.component';
import './header-navigation.styles.scss';

const HeaderNavigation = () => {
  return (
    <nav className="header-navigation">
      <ul className="header-navigation__list">
        <li className="header-navigation__item">
          <NavLink to="/">Главная</NavLink>
        </li>
        <DropMenu parentClassName="header-navigation__item" />
        <li className="header-navigation__item">
          <NavLink to="/about">Покупателям</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
