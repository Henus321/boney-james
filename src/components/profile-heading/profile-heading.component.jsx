import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsProfileMenuActive,
  selectMenuType,
} from '../../store/selectors/profile.selector';
import {
  setMenuType,
  toggleProfileMenu,
} from '../../store/action-creators/profile';

import Button from '../button/button.component';
import './profile-heading.styles.scss';

const ProfileHeading = () => {
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const menuType = useSelector(selectMenuType);

  const dispatch = useDispatch();

  const setMenuSignInHandler = () => {
    dispatch(setMenuType('sign-in'));
  };

  const setMenuSignUpHandler = () => {
    dispatch(setMenuType('sign-up'));
  };

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  return (
    <div className="profile-heading">
      <h2
        className={
          menuType === 'sign-in'
            ? 'profile-heading__title profile-heading__title--active'
            : 'profile-heading__title'
        }
        onClick={setMenuSignInHandler}
      >
        Войти
      </h2>
      <h2
        className={
          menuType === 'sign-up'
            ? 'profile-heading__title profile-heading__title--active'
            : 'profile-heading__title'
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
  );
};

export default ProfileHeading;
