import React, { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCollection } from "../../store/collection/collection.slice";

import "./collection.scss";

const Collection = () => {
  const { collection, isLoading } = useAppSelector((state) => state.collection);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading &&
        collection.map((item) => <span key={item.slug}>{item.name}</span>)}
    </div>
  );
};

export default Collection;
