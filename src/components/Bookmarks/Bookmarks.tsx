import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearBookmarks } from "../../store/bookmarks/bookmarks.slice";

import Button from "../Button/Button";
import BookmarksItem from "../BookmarksItem/BookmarksItem";
import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./bookmarks.scss";

const Bookmarks = () => {
  const { bookmarks } = useAppSelector((state) => state.bookmarks);

  const dispatch = useAppDispatch();

  const onClear = () => dispatch(clearBookmarks());

  return (
    <div className="bookmarks">
      <SidebarHeader title={SIDE_MENU_TITLE.bookmarks} />
      {bookmarks.length === 0 && (
        <span className="bookmarks__empty">Нет закладок</span>
      )}
      {bookmarks.length > 0 && (
        <>
          <div className="bookmarks__content">
            {bookmarks.map((bookmark) => (
              <BookmarksItem
                key={`${bookmark.slug}${bookmark.color}`}
                bookmark={bookmark}
              />
            ))}
          </div>
          <Button
            className="bookmarks__clear-button"
            onClick={() => onClear()}
            reverse
          >
            Очистить закладки
          </Button>
        </>
      )}
    </div>
  );
};

export default Bookmarks;
