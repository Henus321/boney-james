import React from "react";
import { SIDE_MENU_TITLE } from "../../constants";
import { useAppSelector } from "../../hooks";

import Button from "../Button/Button";
import BookmarksItem from "../BookmarksItem/BookmarksItem";
import SidebarHeader from "../SidebarHeader/SidebarHeader";

import "./bookmarks.scss";

const Bookmarks = () => {
  const { bookmarks } = useAppSelector((state) => state.bookmarks);

  const onClear = () => console.log("clear");

  return (
    <div className="bookmarks">
      <SidebarHeader title={SIDE_MENU_TITLE.bookmarks} />
      {bookmarks.length === 0 && (
        <span className="bookmarks__empty">Нет закладок</span>
      )}
      {bookmarks.length > 0 && (
        <>
          <div className="bookmarks__content">
            {bookmarks.map((bookmarksItem) => (
              <BookmarksItem
                key={`${bookmarksItem.slug}${bookmarksItem.color}`}
                bookmarksItem={bookmarksItem}
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
