import React from "react";
import { IShop } from "../../models";

import "./shopsItem.scss";

interface Props {
  shop: IShop;
}

const ShopsItem: React.FC<Props> = ({ shop }) => {
  return (
    <div className="shops-item">
      <h3 className="shops-item__element title-tertiary">{shop.name}</h3>
      <span className="shops-item__element">{shop.subway}</span>
      <span className="shops-item__element">{shop.street}</span>
      <span className="shops-item__element">{shop.time}</span>
      <span className="shops-item__element">{shop.phone}</span>
      <span className="shops-item__element">{shop.type}</span>
    </div>
  );
};

export default ShopsItem;
