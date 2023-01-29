import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeAll } from "../../store/sidebar/sidebar.slice";

import Bookmarks from "../Bookmarks/Bookmarks";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";

import "./sidebar.scss";

const Sidebar = () => {
  const { bookmarks, cart, profile } = useAppSelector((state) => state.sidebar);
  const isActive = bookmarks || cart || profile ? "sidebar--active" : "";

  const firstRender = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    firstRender.current = true;
  }, [firstRender]);

  const onClose = () => {
    dispatch(closeAll());
  };

  return (
    <>
      {firstRender.current && (
        <div className={`sidebar ${isActive}`}>
          <div className="sidebar__background" onClick={() => onClose()} />
          <div className="sidebar__content">
            <div className="sidebar__header">
              <button onClick={() => onClose()}>close</button>
            </div>
            {bookmarks && <Bookmarks />}
            {cart && <Cart />}
            {profile && <Profile />}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
