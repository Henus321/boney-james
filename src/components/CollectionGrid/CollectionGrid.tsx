import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IItem } from "../../models";
import { fetchCollection } from "../../store/collection/collection.slice";
import { DEFAULT_PAGE, PAGE_SIZE } from "../../constants";

import CollectionItem from "../CollectionItem/CollectionItem";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";

import "./collectionGrid.scss";

const CollectionGrid = () => {
  const { collection, isLoading } = useAppSelector((state) => state.collection);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const collectionItems = collection.filter((_, i) => i < PAGE_SIZE * page);
  const disabled = collection.length <= PAGE_SIZE * page;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  const onShowMore = () => setPage((prevState) => prevState + PAGE_SIZE);

  return (
    <div className="collection-grid">
      {isLoading && <Loading />}
      {!isLoading && collection.length > 0 && (
        <>
          {collectionItems.map((item: IItem) => (
            <CollectionItem key={item.slug} item={item} />
          ))}
          <Button onClick={onShowMore} disabled={disabled}>
            Показать еще
          </Button>
        </>
      )}
    </div>
  );
};

export default CollectionGrid;
