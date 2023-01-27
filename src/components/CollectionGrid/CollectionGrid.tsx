import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IItem } from "../../models";
import { fetchCollection } from "../../store/collection/collection.slice";

import CollectionItem from "../CollectionItem/CollectionItem";
import Loading from "../Loading/Loading";

import "./collectionGrid.scss";

const CollectionGrid = () => {
  const { collection, isLoading } = useAppSelector((state) => state.collection);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  return (
    <div className="collection-grid">
      {isLoading && <Loading />}
      {!isLoading && collection.length > 0 && (
        <>
          {collection.map((item: IItem) => (
            <CollectionItem key={item.name} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default CollectionGrid;
