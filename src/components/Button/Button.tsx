import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  reverse?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled = false,
  className,
  reverse = false,
}) => {
  const isReverseColor = reverse ? "button__reverse" : "";

  return (
    <button
      className={`button ${className} ${isReverseColor}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
