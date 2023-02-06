import React, { useState } from "react";
import { useAppSelector } from "../../hooks";

import Button from "../Button/Button";

import "./profileInformation.scss";

const ProfileInformation = () => {
  const { user } = useAppSelector((state) => state.user);
  const initialFormData = {
    name: user?.displayName === null ? undefined : user?.displayName,
    email: user?.email === null ? undefined : user?.email,
  };

  const [formData, setFormData] = useState(initialFormData);
  const { name, email } = formData;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return null;
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
      {user && (
        <>
          <form
            className="profile-information__form"
            id="profile-information"
            onSubmit={onSubmit}
          >
            <div className="profile-information__form-item">
              <label htmlFor="name">Ваше имя</label>
              <input
                required
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
                type="email"
                id="email"
                value={email}
                onChange={onChange}
              />
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
        </>
      )}
    </div>
  );
};

export default ProfileInformation;
