import React from "react";
import { FaHeart } from "react-icons/fa";

import "./bookmarkButton.scss";

const BookmarkButton = () => {
  return (
    <button className="bookmark-button">
      <FaHeart />
    </button>
  );
};

export default BookmarkButton;
