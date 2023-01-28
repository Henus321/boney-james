import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IItem, IColor } from "../../models";
import { beautifyCost, getTitlePhoto } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { ITEM_ROUTE } from "../../constants";

import ColorPicker from "../ColorPicker/ColorPicker";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

import "./collectionItem.scss";

interface Props {
  item: IItem;
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const { colors, sizes, cost, name, slug } = item;
  const [activeColor, setActiveColor] = useState<IColor>(colors[0]);

  const titlePhoto = getTitlePhoto(colors, activeColor);

  const navigate = useNavigate();

  const onClick = (slug: string) => {
    navigate(`${ITEM_ROUTE}/${slug}`);
  };

  return (
    <div className="collection-item">
      <div className="collection-item__image-container">
        <img src={titlePhoto} alt="Coat" onClick={() => onClick(slug)} />
        <div className="collection-item__image-popup">
          <h3>Добавить в корзину</h3>
          <div>
            {sizes.map((size) => (
              <span key={uuidv4()}>{size}</span>
            ))}
          </div>
        </div>
      </div>
      <span>{name}</span>
      <span>{beautifyCost(cost)}</span>
      <div className="collection-item__actions-container">
        <div className="collection-item__colors-container">
          {colors.map((colorItem) => (
            <ColorPicker
              key={uuidv4()}
              currentColor={colorItem}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />
          ))}
        </div>
        <BookmarkButton />
      </div>
    </div>
  );
};

export default CollectionItem;
