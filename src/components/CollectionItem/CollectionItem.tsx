import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { IItem, ICartItem } from "../../models";
import { beautifyCost, getTitlePhoto } from "../../utils";
import { ITEM_ROUTE } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { addOrIncreaseItem } from "../../store/cart/cart.slice";

import ColorPicker from "../ColorPicker/ColorPicker";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

import "./collectionItem.scss";

interface Props {
  item: IItem;
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const { options, sizes, cost, name, slug } = item;
  const [activeColor, setActiveColor] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = (slug: string) => {
    const params = `?color=${activeColor}`;

    navigate({
      pathname: `${ITEM_ROUTE}/${slug}`,
      search: `${createSearchParams(params)}`,
    });
  };

  const onSizeClick = (item: IItem, color: string, size: string) => {
    const cartItem: ICartItem = {
      ...item,
      color,
      size,
      quantity: 1,
    };

    dispatch(addOrIncreaseItem(cartItem));
  };

  return (
    <div className="collection-item">
      <div className="collection-item__image-container">
        <img
          src={getTitlePhoto(options, activeColor)}
          alt="Coat"
          onClick={() => onClick(slug)}
        />
        <div className="collection-item__image-popup">
          <h3>Добавить в корзину</h3>
          <div>
            {sizes.map((size) => (
              <span
                onClick={() => onSizeClick(item, activeColor, size)}
                key={`${name}${size}`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span>{name}</span>
      <span>{beautifyCost(cost)}</span>
      <div className="collection-item__actions-container">
        <ColorPicker
          options={options}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <BookmarkButton />
      </div>
    </div>
  );
};

export default CollectionItem;
