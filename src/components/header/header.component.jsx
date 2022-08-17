import { useState } from 'react';
import { Link } from 'react-router-dom';

import Plug from '../plug/plug.component';
import Cart from '../cart/cart.component';
import Profile from '../profile/profile.component';
import HeaderIconsMenu from '../header-icons-menu/header-icons-menu.component';
import HeaderNavigation from '../header-navigation/header-navigation.component';
import './header.styles.scss';

const Header = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  return (
    <header className="header">
      <Plug />
      <Cart />
      <Profile />
      <HeaderNavigation
        isBurgerActive={isBurgerActive}
        setBurgerActive={setBurgerActive}
      />
      <Link to="/" className="header__title">
        Boney James
      </Link>
      <Link to="/" className="header__title--small">
        BJ
      </Link>
      <HeaderIconsMenu
        isBurgerActive={isBurgerActive}
        setBurgerActive={setBurgerActive}
      />
    </header>
  );
};

export default Header;
