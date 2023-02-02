import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShopsActions from "../../components/ShopsActions/ShopsActions";
import ShopsItem from "../../components/ShopsItem/ShopsItem";

import "./shops.scss";

const Shops = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const shop = {
    name: "ТРЦ МЕГА Дыбенко",
    subway: "Улица Дыбенко",
    street: "12-й км Мурманского шоссе",
    time: "10:00-22:00",
    phone: "8 (812) 383-57-36",
    type: "Магазин женской, мужской и детской одежды",
  };

  return (
    <>
      <Breadcrumb />
      <div className="shops">
        <h2 className="title-secondary">Магазины в России</h2>
        <div className="shops__grid">
          <ShopsActions />
          {arr.map((_, i) => (
            <ShopsItem key={`${i}-shop-item`} shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shops;
