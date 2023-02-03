import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { signUp } from "../../store/user/user.slice";

import "./signUp.scss";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password } = formData;

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signUp(formData));
  };

  return (
    <div className="sign-up">
      <h3>SIGN UP</h3>
      <form className="sign-up__form" id="sign-up" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={onChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
          value={password}
          onChange={onChange}
        />
        <span onClick={() => setShowPassword((prevState) => !prevState)}>
          show pass
        </span>
      </form>
      <button form="sign-up">submit</button>
    </div>
  );
};

export default SignUp;
