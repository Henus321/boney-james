import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useWindowDimensions,
} from "../../hooks";
import { IItem } from "../../models";
import { fetchCollection } from "../../store/collection/collection.slice";
import { getPageSize } from "../../utils";

import CollectionItem from "../CollectionItem/CollectionItem";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";

import "./collectionGrid.scss";

const CollectionGrid = () => {
  const { collection, isLoading } = useAppSelector((state) => state.collection);
  const [page, setPage] = useState(1);

  const { width } = useWindowDimensions();

  const pageSize = getPageSize(width);
  const collectionItems = collection.filter((_, i) => i < pageSize * page);
  const disabled = collection.length <= pageSize * page;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  const onShowMore = () => setPage((prevState) => prevState + pageSize);

  return (
    <div className="collection-grid">
      {isLoading && <Loading />}
      {!isLoading && collection.length > 0 && (
        <>
          {collectionItems.map((item: IItem) => (
            <CollectionItem key={item.slug} item={item} />
          ))}
          <Button
            onClick={onShowMore}
            disabled={disabled}
            className="collection-grid__button"
          >
            Показать еще
          </Button>
        </>
      )}
    </div>
  );
};

export default CollectionGrid;
