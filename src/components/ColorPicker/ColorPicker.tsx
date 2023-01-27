import React from "react";
import { IColor } from "../../models";

import "./colorPicker.scss";

interface Props {
  activeColor: IColor;
  currentColor: IColor;
  setActiveColor: React.Dispatch<React.SetStateAction<IColor>>;
}

const ColorCircle: React.FC<Props> = ({
  currentColor,
  activeColor,
  setActiveColor,
}) => {
  const isActive =
    currentColor.color === activeColor.color ? "color-picker--active" : "";
  return (
    <div
      className={`color-picker ${isActive}`}
      onClick={() => setActiveColor(currentColor)}
    >
      <span className="color-picker__circle" color={currentColor.color} />
    </div>
  );
};

export default ColorCircle;
