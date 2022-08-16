import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsProfileMenuActive,
  selectMenuType,
} from '../../store/profile/profile.selector';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { getAuth } from 'firebase/auth';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import UserDetails from '../user-details/user-details.component';
import ProfileHeading from '../profile-heading/profile-heading.component';
import './profile-details.styles.scss';

const Profile = () => {
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const menuType = useSelector(selectMenuType);

  const auth = getAuth();
  const dispatch = useDispatch();

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
        className={
          isProfileMenuActive
            ? 'profile-details profile-details--active'
            : 'profile-details'
        }
      >
        {auth.currentUser ? (
          <UserDetails />
        ) : (
          <>
            <ProfileHeading />
            {menuType === 'sign-in' ? <SignIn /> : false}
            {menuType === 'sign-up' ? <SignUp /> : false}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
