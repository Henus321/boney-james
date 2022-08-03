import { NavLink } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import './header.styles.scss';
import { useState } from 'react';

const Header = () => {
  const [cartActive, setCartActive] = useState(false);

  const toggleProfileItem = () => {
    setCartActive(!cartActive);
  };

  return (
    <header className="header">
      {cartActive && <div className="header__cart"></div>}
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/collection">Collections</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <h2 className="header__title">Boney James</h2>
      <div className="header__profile">
        <FaHeart className="header__icon" />
        <FaShoppingBag
          className="header__icon"
          onClick={() => toggleProfileItem()}
        />
        <FaUser className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
