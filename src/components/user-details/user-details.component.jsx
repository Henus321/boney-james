import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserToDefault } from '../../store/action-creators/user';
import { toggleProfileMenu } from '../../store/action-creators/profile';
import { selectCurrentUser } from '../../store/selectors/user.selector';

import Button from '../button/button.component';
import './user-details.styles.scss';

const UserDetails = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { name, email } = currentUser;

  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      const curUser = {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      };
      dispatch(setUser(curUser));
    }
  }, [dispatch, auth.currentUser]);

  const closeProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(false));
  };

  const signOutHandler = async () => {
    await auth.signOut();
    dispatch(setUserToDefault());
    closeProfileMenuHandler();
  };

  return (
    <div className="user-details">
      <div className="user-details__header">
        <Button
          buttonType="close"
          handler={closeProfileMenuHandler}
          buttonText="x"
        />
      </div>
      <div className="user-details__info">
        <span className="user-details__text">Приветствуем вас, {name}!</span>
        <span className="user-details__text">Ваша почта: {email}</span>
      </div>
      <Button
        buttonText="Выйти"
        buttonType="wide-black"
        form="sign-in__form"
        handler={signOutHandler}
        type="submit"
      />
    </div>
  );
};

export default UserDetails;
