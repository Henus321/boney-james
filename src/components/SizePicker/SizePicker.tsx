import React, { useEffect } from "react";

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
  className,
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

  const isActive = (currentSize: string) =>
    currentSize === activeSize ? "size-picker__size--active" : "";

  return (
    <div className={`size-picker ${className}`}>
      {sizes.map((size) => (
        <span
          className={`size-picker__size ${isActive(size)}`}
          key={size}
          onClick={() => setActiveSize(size)}
        >
          {size}
        </span>
      ))}
    </div>
  );
};

export default SizePicker;
