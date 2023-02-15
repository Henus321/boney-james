import React from "react";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IBookmarksItem } from "../../models";
import { toggleBookmark } from "../../store/bookmarks/bookmarks.slice";
import { isBookmarked } from "../../utils";

import "./bookmarkButton.scss";

interface Props {
  className?: string;
  item: IBookmarksItem;
}

const BookmarkButton: React.FC<Props> = ({ className = "", item }) => {
  const { bookmarks } = useAppSelector((state) => state.bookmarks);

  const dispatch = useAppDispatch();

  const onClick = (item: IBookmarksItem) => {
    dispatch(toggleBookmark(item));
  };

  return (
    <button
      data-testid="bookmark-button"
      onClick={() => onClick(item)}
      className={`bookmark-button ${className} ${
        isBookmarked(bookmarks, item) ? "bookmark-button--active" : ""
      }`}
    >
      <FaHeart />
    </button>
  );
};

export default BookmarkButton;
