import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/collection">Collection</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
