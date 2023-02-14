import React, { useEffect } from "react";
import { IOptions } from "../../models";
import ColorItem from "../ColorItem/ColorItem";

import "./colorPicker.scss";

interface Props {
  options: IOptions[];
  activeColor: string;
  setActiveColor: (arg: string) => void;
  className?: string;
}

const ColorPicker: React.FC<Props> = ({
  options,
  activeColor,
  setActiveColor,
  className = "",
}) => {
  useEffect(() => {
    if (activeColor) {
      setActiveColor(activeColor);
      return;
    }

    if (!activeColor) {
      const firstColor = options[0].color;
      setActiveColor(firstColor);
    }
    // eslint-disable-next-line
  }, []);

  const isActive = (currentColor: string) =>
    currentColor === activeColor
      ? "color-picker__color-background--active"
      : "";

  return (
    <div className={`color-picker ${className}`}>
      {options.map(({ color, id }) => (
        <div
          key={id}
          data-testid="color-picker"
          className={`color-picker__color-background ${isActive(color)}`}
          onClick={() => setActiveColor(color)}
        >
          <ColorItem color={color} />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
