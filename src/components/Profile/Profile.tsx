import React, { useState, useEffect } from "react";
import { SIDE_MENU_TITLE, USER_SUCCESS_MESSAGE } from "../../constants";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logOut, reset } from "../../store/user/user.slice";

import SidebarHeader from "../SidebarHeader/SidebarHeader";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import ProfileInformation from "../ProfileInformation/ProfileInformation";
import ProfilePassword from "../ProfilePassword/ProfilePassword";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import Button from "../Button/Button";

import "./profile.scss";

const Profile = () => {
  const { user, isSuccess, isError, message } = useAppSelector(
    (state) => state.user
  );
  const [menuType, switchMenuType] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      toast.error(USER_SUCCESS_MESSAGE);
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [dispatch, isError, message]);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="profile">
      <SidebarHeader>
        {!user && (
          <ProfileMenu menuType={menuType} switchMenuType={switchMenuType} />
        )}
        {user && (
          <h3 className="profile__title title-tertiary">
            {SIDE_MENU_TITLE.profile}
          </h3>
        )}
      </SidebarHeader>
      {!user && (menuType ? <SignUp /> : <SignIn />)}
      {user && (
        <>
          <div className="profile__content">
            <ProfileInformation />
            <ProfilePassword />
            <ProfileOrders />
          </div>
          <Button reverse className="profile__logout-button" onClick={onLogout}>
            Выйти
          </Button>
        </>
      )}
    </div>
  );
};

export default Profile;
