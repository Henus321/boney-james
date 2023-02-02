import React from "react";
import { CITIES_OPTIONS } from "../../constants";
import { IShop } from "../../models";

import "./shopsItem.scss";

interface Props {
  shop: IShop;
}

const ShopsItem: React.FC<Props> = ({ shop }) => {
  const localeCityName = CITIES_OPTIONS.find(
    (city) => city.value === shop.city
  )?.label;

  return (
    <div className="shops-item">
      <h3 className="shops-item__element title-tertiary">{shop.name}</h3>
      {localeCityName && (
        <span className="shops-item__element">{localeCityName}</span>
      )}
      <span className="shops-item__element">{shop.subway}</span>
      <span className="shops-item__element">{shop.street}</span>
      <span className="shops-item__element">{shop.time}</span>
      <span className="shops-item__element">{shop.phone}</span>
      <span className="shops-item__element">{shop.type.label}</span>
    </div>
  );
};

export default ShopsItem;
