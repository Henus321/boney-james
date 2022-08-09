import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsProfileMenuActive } from '../../store/user/user.selector';
import { toggleProfileMenu } from '../../store/user/user.actions';
import './profile.styles.scss';

const Profile = () => {
  const [menuType, setMenuType] = useState(true);
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const dispatch = useDispatch();

  return (
    <div
      className={isProfileMenuActive ? 'profile profile--active' : 'profile'}
    >
      <div className="profile__heading">
        <h2
          className={
            menuType
              ? 'profile__title profile__title--active'
              : 'profile__title'
          }
          onClick={() => setMenuType(true)}
        >
          Войти
        </h2>
        <h2
          className={
            menuType
              ? 'profile__title'
              : 'profile__title profile__title--active'
          }
          onClick={() => setMenuType(false)}
        >
          Регистрация
        </h2>
        <span
          className="profile__close-btn"
          onClick={() => dispatch(toggleProfileMenu(!isProfileMenuActive))}
        >
          x
        </span>
      </div>
      {menuType ? (
        <>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signin-email">
              Введите ваш e-mail
            </label>
            <input className="profile__input" type="email" id="signin-email" />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signin-password">
              Введите пароль
            </label>
            <input
              className="profile__input"
              type="password"
              id="signin-password"
            />
          </div>
        </>
      ) : (
        <>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signup-email">
              Введите ваш e-mail
            </label>
            <input className="profile__input" type="email" id="signup-email" />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signup-name">
              Введите ваше имя
            </label>
            <input className="profile__input" type="text" id="signup-name" />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signup-password">
              Введите пароль
            </label>
            <input
              className="profile__input"
              type="password"
              id="signup-password"
            />
          </div>
          <div className="profile__input-container">
            <label className="profile__label" htmlFor="signup-password-repeat">
              Повторите пароль
            </label>
            <input
              className="profile__input"
              type="password"
              id="signup-password-repeat"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
