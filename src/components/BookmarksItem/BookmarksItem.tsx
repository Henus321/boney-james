import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ITEM_ROUTE } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { IBookmarksItem } from "../../models";
import { closeAll } from "../../store/sidebar/sidebar.slice";
import { beautifyCost, getTitlePhoto } from "../../utils";

import BookmarkButton from "../BookmarkButton/BookmarkButton";
import ColorItem from "../ColorItem/ColorItem";

import "./bookmarksItem.scss";

interface Props {
  bookmark: IBookmarksItem;
}

const BookmarksItem: React.FC<Props> = ({ bookmark }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onPhotoClick = (bookmark: IBookmarksItem) => {
    dispatch(closeAll());

    const params = `?color=${bookmark.color}`;
    navigate({
      pathname: `${ITEM_ROUTE}/${bookmark.slug}`,
      search: `${createSearchParams(params)}`,
    });
  };
  return (
    <div data-testid="bookmark-item" className="bookmark-item">
      <img
        onClick={() => onPhotoClick(bookmark)}
        src={getTitlePhoto(bookmark.options, bookmark.color)}
        alt="Photo"
      />
      <div className="bookmark-item__information">
        <h3 className="title-tertiary">{bookmark.name}</h3>
        <span className="bookmark-item__element">
          Цена: {beautifyCost(bookmark.cost)}
        </span>
        <span className="bookmark-item__element bookmark-item__color-container">
          Цвет:
          <ColorItem className="bookmark-item__color" color={bookmark.color} />
        </span>
        <span className="bookmark-item__element">Размеры:</span>
        <div className="bookmark-item__element bookmark-item__size-container">
          {bookmark.sizes.map((size) => (
            <span key={`${size}-bookmark-item`} className="bookmark-item__size">
              {size}
            </span>
          ))}
        </div>
        <span className="bookmark-item__element">Описание:</span>
        <p className="bookmark-item__element">{bookmark.description}</p>
        <BookmarkButton
          className="bookmark-item__bookmark-button"
          item={bookmark}
        />
      </div>
    </div>
  );
};

export default BookmarksItem;
