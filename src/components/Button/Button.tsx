import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, disabled = false }) => {
  return (
    <button className="button" onClick={() => onClick()} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
