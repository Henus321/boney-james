import React from "react";
import { IBookmarksItem } from "../../models";

import "./bookmarksItem.scss";

interface Props {
  bookmarksItem: IBookmarksItem;
}

const BookmarksItem: React.FC<Props> = ({ bookmarksItem }) => {
  return (
    <div>
      <span> {bookmarksItem.name}</span>
      <span> {bookmarksItem.color}</span>
    </div>
  );
};

export default BookmarksItem;
