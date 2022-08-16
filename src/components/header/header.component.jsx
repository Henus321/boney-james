import Plug from '../plug/plug.component';
import Cart from '../cart/cart.component';
import Profile from '../profile/profile.component';
import HeaderIconsMenu from '../header-icons-menu/header-icons-menu.component';
import HeaderNavigation from '../header-navigation/header-navigation.component';
import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Plug />
      <Cart />
      <Profile />
      <HeaderNavigation />
      <h2 className="header__title">Boney James</h2>
      <h2 className="header__title--small">BJ</h2>
      <HeaderIconsMenu />
    </header>
  );
};

export default Header;
