import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCollection } from "../../store/collection/collection.slice";

import "./collection.scss";

const Collection = () => {
  const { collection } = useAppSelector((state) => state.collection);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  return (
    <div>
      {collection.map((item) => (
        <span key={item.slug}>{item.name}</span>
      ))}
    </div>
  );
};

export default Collection;
