import React, { useEffect } from "react";

import SizeItem from "../SizeItem/SizeItem";

import "./sizePicker.scss";

interface Props {
  sizes: string[];
  activeSize: string;
  setActiveSize: (arg: string) => void;
  className?: string;
}

const SizePicker: React.FC<Props> = ({
  sizes,
  activeSize,
  setActiveSize,
  className = "",
}) => {
  useEffect(() => {
    if (activeSize) {
      setActiveSize(activeSize);
      return;
    }

    if (!activeSize) {
      const firstSize = sizes[0];
      setActiveSize(firstSize);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`size-picker ${className}`}>
      {sizes.map((size) => (
        <SizeItem
          key={`${size}-size-picker`}
          size={size}
          activeSize={activeSize}
          onClick={setActiveSize}
        />
      ))}
    </div>
  );
};

export default SizePicker;
