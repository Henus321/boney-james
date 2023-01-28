import React, { useEffect } from "react";
import { IOptions } from "../../models";

import "./colorPicker.scss";

interface Props {
  options: IOptions[];
  activeColor: string;
  setActiveColor: (arg: string) => void;
}

const ColorPicker: React.FC<Props> = ({
  options,
  activeColor,
  setActiveColor,
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
    <div className="color-picker">
      {options.map(({ color, id }) => (
        <div
          key={id}
          className={`color-picker__color-background ${isActive(color)}`}
          onClick={() => setActiveColor(color)}
        >
          <span
            className={`color-picker__color color-picker__color--${color}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
