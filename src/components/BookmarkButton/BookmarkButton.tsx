import React from "react";
import { FaHeart } from "react-icons/fa";

import "./bookmarkButton.scss";

interface Props {
  className?: string;
}

const BookmarkButton: React.FC<Props> = ({ className }) => {
  return (
    <button className={`bookmark-button ${className}`}>
      <FaHeart />
    </button>
  );
};

export default BookmarkButton;
