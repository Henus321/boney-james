import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateUser } from "../../store/user/user.slice";

import Button from "../Button/Button";

import "./profileInformation.scss";

const ProfileInformation = () => {
  const { user, isSuccess, isError } = useAppSelector((state) => state.user);
  const initialFormData = {
    name: user?.displayName === null ? undefined : user?.displayName,
    email: user?.email === null ? undefined : user?.email,
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password } = formData;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess || isError) setFormData(initialFormData);
    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && password)
      dispatch(updateUser({ name, email, password }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="profile-information">
      <h3 className="profile-information__title title-quaternary">
        Данные пользователя:
      </h3>
      <form
        className="profile-information__form"
        id="profile-information"
        onSubmit={onSubmit}
      >
        <div className="profile-information__form-item">
          <label htmlFor="name">Ваше имя</label>
          <input
            required
            autoComplete="off"
            type="text"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="profile-information__form-item">
          <label htmlFor="email">Ваш e-mail</label>
          <input
            required
            autoComplete="off"
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="profile-information__form-item">
          <label htmlFor="password">Текущий Пароль</label>
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
      </form>
      <div className="profile-information__actions">
        <Button className="profile-information__button" onClick={onCancel}>
          Отмена
        </Button>
        <Button
          className="profile-information__button"
          form="profile-information"
          onClick={() => ({})}
        >
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export default ProfileInformation;
