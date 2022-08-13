import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './drop-menu.styles.scss';

const DropMenu = ({ parentClassName }) => {
  return (
    <li className={`${parentClassName} drop-menu`}>
      Каталог
      <div className="drop-menu__list">
        <NavLink className="drop-menu__item" to="/collection/autumn">
          Осень 2021
        </NavLink>
        <NavLink className="drop-menu__item" to="/collection/spring">
          Весна 2022
        </NavLink>
      </div>
    </li>
  );
};

DropMenu.propTypes = {
  parentClassName: PropTypes.string.isRequired,
};

export default DropMenu;
