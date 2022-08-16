import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsProfileMenuActive,
  selectMenuType,
} from '../../store/profile/profile.selector';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { getAuth } from 'firebase/auth';

import BackgroundBlur from '../background-blur/background-blur.component';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import UserDetails from '../user-details/user-details.component';
import ProfileHeading from '../profile-heading/profile-heading.component';
import './profile.styles.scss';

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
      <BackgroundBlur
        isActive={isProfileMenuActive}
        handler={toggleProfileMenuHandler}
      />
      <div
        className={isProfileMenuActive ? 'profile profile--active' : 'profile'}
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
