import React from "react";

import "./sizeItem.scss";

interface Props {
  size: string;
  className?: string;
  activeSize?: string;
  onClick?: (arg: string) => void;
}

const SizeItem: React.FC<Props> = ({
  size,
  className,
  activeSize,
  onClick = () => ({}),
}) => {
  const isActive = (size: string, activeSize: string | undefined) =>
    size === activeSize ? "size-item--active" : "";

  return (
    <span
      className={`size-item ${className} ${isActive(size, activeSize)}`}
      onClick={() => onClick(size)}
    >
      {size}
    </span>
  );
};

export default SizeItem;
