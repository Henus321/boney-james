import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
