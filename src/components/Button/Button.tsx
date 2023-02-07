import React from "react";

import "./button.scss";

interface Props {
  children: React.ReactNode;
  onClick: (arg?: any) => void;
  value?: any;
  disabled?: boolean;
  className?: string;
  reverse?: boolean;
  form?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  value,
  disabled = false,
  className,
  reverse = false,
  form,
}) => {
  const isReverseColor = reverse ? "button__reverse" : "";

  return (
    <button
      className={`button ${className} ${isReverseColor}`}
      onClick={() => onClick(value)}
      disabled={disabled}
      form={form}
    >
      {children}
    </button>
  );
};

export default Button;
