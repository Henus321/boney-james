import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './drop-menu.styles.scss';

const DropMenu = ({ parentClassName }) => {
  return (
    <li className={`${parentClassName} drop-menu`}>
      Каталог
      <div className="drop-menu__list">
        <NavLink className="drop-menu__item" to="/collection/2021/autumn">
          Осень
        </NavLink>
        <NavLink className="drop-menu__item" to="/collection/2022/spring">
          Весна
        </NavLink>
      </div>
    </li>
  );
};

DropMenu.propTypes = {
  parentClassName: PropTypes.string.isRequired,
};

export default DropMenu;
