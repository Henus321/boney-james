import { useState } from 'react';
import { db } from '../../firebase.config.ts';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { selectIsProfileMenuActive } from '../../store/profile/profile.selector';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../button/button.component';
import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredetial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredetial.user;

      updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      const formDataCopy = { ...formFields };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      resetFormFields();
      toggleProfileMenuHandler();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <form
        id="sign-up__form"
        onSubmit={signUpHandler}
        className="sign-up__form"
      >
        <label className="sign-up__label" htmlFor="signup-name">
          Введите ваше имя
        </label>
        <input
          className="sign-up__input"
          type="text"
          required
          id="signup-name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-email">
          Введите ваш e-mail
        </label>
        <input
          className="sign-up__input"
          type="email"
          required
          id="signup-email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-password">
          Введите пароль
        </label>
        <input
          className="sign-up__input"
          type="password"
          required
          id="signup-password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label className="sign-up__label" htmlFor="signup-password-repeat">
          Повторите пароль
        </label>
        <input
          className="sign-up__input"
          type="password"
          required
          id="signup-password-repeat"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </form>
      <Button
        buttonText="Создать Аккаунт"
        buttonType="wide-black"
        type="submit"
        form="sign-up__form"
      />
    </>
  );
};

export default SignUp;
