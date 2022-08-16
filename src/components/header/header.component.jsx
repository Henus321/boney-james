import Plug from '../plug/plug.component';
import Cart from '../cart/cart.component';
import ProfileDetails from '../profile-details/profile-details.component';
import HeaderProfile from '../header-profile/header-profile.component';
import HeaderNavigation from '../header-navigation/header-navigation.component';
import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Plug />
      <Cart />
      <ProfileDetails />
      <HeaderNavigation />
      <h2 className="header__title">Boney James</h2>
      <h2 className="header__title--small">BJ</h2>
      <HeaderProfile />
    </header>
  );
};

export default Header;
