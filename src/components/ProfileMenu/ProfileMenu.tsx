import React from "react";

import "./profileMenu.scss";

interface Props {
  menuType: boolean;
  switchMenuType: (arg: boolean) => void;
}

const ProfileMenu: React.FC<Props> = ({ menuType, switchMenuType }) => {
  const isActive = (menuType: boolean) => {
    return menuType ? "profile-menu__button--active" : "";
  };

  return (
    <div className="profile-menu">
      <button
        className={`profile-menu__button ${isActive(!menuType)} title-tertiary`}
        onClick={() => switchMenuType(false)}
      >
        Авторизация
      </button>
      <button
        className={`profile-menu__button ${isActive(menuType)} title-tertiary`}
        onClick={() => switchMenuType(true)}
      >
        Регистрация
      </button>
    </div>
  );
};

export default ProfileMenu;
