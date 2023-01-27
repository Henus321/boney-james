import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CollectionGrid from "../../components/CollectionGrid/CollectionGrid";

import "./collection.scss";

const Collection = () => {
  return (
    <>
      <Breadcrumb />
      <div className="collection">
        <h2 className="title-secondary">Коллекция женских пальто</h2>
        <CollectionGrid />
      </div>
    </>
  );
};

export default Collection;
