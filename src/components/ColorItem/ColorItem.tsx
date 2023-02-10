import React from "react";

import "./colorItem.scss";

interface Props {
  color: string;
  className?: string;
}

const ColorItem: React.FC<Props> = ({ color, className = "" }) => {
  return <div className={`color-item color-item--${color} ${className}`} />;
};

export default ColorItem;
