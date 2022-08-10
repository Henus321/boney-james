import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsProfileMenuActive } from '../../store/user/user.selector';
import { toggleProfileMenu } from '../../store/user/user.actions';
import { useAuthStatus } from '../../hooks/useAuthStatus';

import Button from '../button/button.component';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import './profile.styles.scss';

const Profile = () => {
  const { loggedIn } = useAuthStatus();
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const [menuType, setMenuType] = useState(true);

  const dispatch = useDispatch();

  const setMenuSignInHandler = () => {
    setMenuType(true);
  };

  const setMenuSignUpHandler = () => {
    setMenuType(false);
  };

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  return (
    <>
      <div
        className={
          isProfileMenuActive
            ? 'header__background-blur--active'
            : 'header__background-blur'
        }
        onClick={toggleProfileMenuHandler}
      ></div>
      <div
        className={isProfileMenuActive ? 'profile profile--active' : 'profile'}
      >
        {loggedIn ? (
          <div>I'm logged in</div>
        ) : (
          <>
            <div className="profile__heading">
              <h2
                className={
                  menuType
                    ? 'profile__title profile__title--active'
                    : 'profile__title'
                }
                onClick={setMenuSignInHandler}
              >
                Войти
              </h2>
              <h2
                className={
                  menuType
                    ? 'profile__title'
                    : 'profile__title profile__title--active'
                }
                onClick={setMenuSignUpHandler}
              >
                Регистрация
              </h2>
              <Button
                buttonType="close"
                handler={toggleProfileMenuHandler}
                buttonText="x"
              />
            </div>
            {menuType ? <SignIn /> : <SignUp />}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
