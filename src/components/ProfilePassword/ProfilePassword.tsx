import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { PASSWORD_MISMATCH_MESSAGE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateUserPassword } from "../../store/user/user.slice";

import Button from "../Button/Button";

import "./profilePassword.scss";

const initialFormData = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ProfilePassword = () => {
  const { isSuccess, isError } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState(initialFormData);
  const { currentPassword, newPassword, confirmPassword } = formData;

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess || isError) setFormData(initialFormData);
    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error(PASSWORD_MISMATCH_MESSAGE);
      return;
    }

    dispatch(updateUserPassword(formData));
  };

  return (
    <div className="profile-password">
      <h3 className="profile-password__title title-quaternary">
        Изменить пароль:
      </h3>
      <form
        className="profile-password__form"
        id="change-password"
        onSubmit={onSubmit}
      >
        <div className="profile-password__form-item">
          <label htmlFor="currentPassword">Текущий Пароль</label>
          <div>
            <input
              required
              autoComplete="off"
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              value={currentPassword}
              onChange={onChange}
            />
            {showCurrentPassword ? (
              <FaEye
                onClick={() =>
                  setShowCurrentPassword((prevState) => !prevState)
                }
              />
            ) : (
              <FaEyeSlash
                onClick={() =>
                  setShowCurrentPassword((prevState) => !prevState)
                }
              />
            )}
          </div>
        </div>
        <div className="profile-password__form-item">
          <label htmlFor="newPassword">Новый Пароль</label>
          <div>
            <input
              required
              autoComplete="off"
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={onChange}
            />
            {showNewPassword ? (
              <FaEye
                onClick={() => setShowNewPassword((prevState) => !prevState)}
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowNewPassword((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
        <div className="profile-password__form-item">
          <label htmlFor="confirmPassword">Подтвердите Пароль</label>
          <div>
            <input
              required
              autoComplete="off"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
            />
            {showConfirmPassword ? (
              <FaEye
                onClick={() =>
                  setShowConfirmPassword((prevState) => !prevState)
                }
              />
            ) : (
              <FaEyeSlash
                onClick={() =>
                  setShowConfirmPassword((prevState) => !prevState)
                }
              />
            )}
          </div>
        </div>
        <Button
          className="profile-password__submit-button"
          form="change-password"
          onClick={() => ({})}
        >
          Подтвердить
        </Button>
      </form>
    </div>
  );
};

export default ProfilePassword;
