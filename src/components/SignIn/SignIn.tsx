import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { signIn } from "../../store/user/user.slice";

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
      <h3>SIGN IN</h3>
      <form className="sign-in__form" id="sign-in" onSubmit={onSubmit}>
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
      <button form="sign-in">submit</button>
    </div>
  );
};

export default SignIn;
