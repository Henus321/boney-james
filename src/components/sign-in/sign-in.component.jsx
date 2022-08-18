import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfileMenu } from '../../store/profile/profile.actions';
import { selectIsProfileMenuActive } from '../../store/profile/profile.selector';
import { toast } from 'react-toastify';

import Button from '../button/button.component';
import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const isProfileMenuActive = useSelector(selectIsProfileMenuActive);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const toggleProfileMenuHandler = () => {
    dispatch(toggleProfileMenu(!isProfileMenuActive));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        resetFormFields();
        toggleProfileMenuHandler();
      }
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
        id="sign-in__form"
        onSubmit={signInHandler}
        className="sign-in__form"
      >
        <label className="sign-in__label" htmlFor="signin-email">
          Введите ваш e-mail
        </label>
        <input
          className="sign-in__input"
          type="email"
          id="signin-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label className="sign-in__label" htmlFor="signin-password">
          Введите пароль
        </label>
        <input
          className="sign-in__input"
          type="password"
          id="signin-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </form>
      <Button
        buttonText="Войти"
        buttonType="wide-black"
        type="submit"
        form="sign-in__form"
      />
    </>
  );
};

export default SignIn;
