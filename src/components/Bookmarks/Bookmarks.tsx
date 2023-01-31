import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";

import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className="bookmarks">
      <SidebarHeader title={SIDE_MENU_TITLE.bookmarks} />
    </div>
  );
};

export default Bookmarks;
