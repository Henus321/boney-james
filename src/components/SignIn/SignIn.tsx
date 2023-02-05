import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { signIn } from "../../store/user/user.slice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Button from "../Button/Button";

import "./signIn.scss";

const initialFormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signIn(formData));
  };

  return (
    <div className="sign-in">
      <form className="sign-in__form" id="sign-in" onSubmit={onSubmit}>
        <div className="sign-in__form-item">
          <label htmlFor="email">Введите ваш e-mail</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="sign-in__form-item">
          <label htmlFor="password">Введите пароль</label>
          <div>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              autoComplete="off"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
      </form>
      <Button
        className="sign-in__button"
        form="sign-in"
        onClick={() => ({})}
        reverse
      >
        Войти
      </Button>
    </div>
  );
};

export default SignIn;
