import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { PASSWORD_MISMATCH_MESSAGE } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { signUp } from "../../store/user/user.slice";

import Button from "../Button/Button";

import "./signUp.scss";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password, passwordConfirm } = formData;

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error(PASSWORD_MISMATCH_MESSAGE);
      return;
    }

    dispatch(signUp(formData));
  };

  return (
    <div className="sign-up">
      <form className="sign-up__form" id="sign-up" onSubmit={onSubmit}>
        <div className="sign-up__form-item">
          <label htmlFor="name">Введите ваше имя</label>
          <input
            required
            autoComplete="off"
            type="text"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="sign-up__form-item">
          <label htmlFor="email">Введите ваш e-mail</label>
          <input
            required
            autoComplete="off"
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="sign-up__form-item">
          <label htmlFor="password">Введите пароль</label>
          <div>
            <input
              required
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
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
        <div className="sign-up__form-item">
          <label htmlFor="password">Повторите пароль</label>
          <div>
            <input
              required
              autoComplete="off"
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={onChange}
            />
            {showPasswordConfirm ? (
              <FaEye
                onClick={() =>
                  setShowPasswordConfirm((prevState) => !prevState)
                }
              />
            ) : (
              <FaEyeSlash
                onClick={() =>
                  setShowPasswordConfirm((prevState) => !prevState)
                }
              />
            )}
          </div>
        </div>
      </form>
      <Button
        className="sign-up__button"
        form="sign-up"
        onClick={() => ({})}
        reverse
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default SignUp;
