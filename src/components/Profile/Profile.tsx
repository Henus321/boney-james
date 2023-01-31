import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";

import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <SidebarHeader title={SIDE_MENU_TITLE.profile} />
    </div>
  );
};

export default Profile;
