import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { slug } = useParams();

  return <div>Item: {slug}</div>;
};

export default Item;
