import React, { useState } from "react";
import { SIDE_MENU_TITLE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logOut } from "../../store/user/user.slice";

import SidebarHeader from "../SidebarHeader/SidebarHeader";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import "./profile.scss";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);
  const [menuType, switchMenuType] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <div className="profile">
      <SidebarHeader>
        {user ? (
          <h3 className="title-tertiary">{SIDE_MENU_TITLE.profile}</h3>
        ) : (
          <ProfileMenu menuType={menuType} switchMenuType={switchMenuType} />
        )}
      </SidebarHeader>
      {user && <button onClick={() => dispatch(logOut())}>logout</button>}
      {!user && (menuType ? <SignUp /> : <SignIn />)}
    </div>
  );
};

export default Profile;
