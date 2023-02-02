import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, useDebounce } from "../../hooks";
import { fetchShops } from "../../store/shops/shops.slice";
import { useParams, useSearchParams } from "react-router-dom";
import { getFilteredShops, getShopsTitle } from "../../utils";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShopsActions from "../../components/ShopsActions/ShopsActions";
import ShopsItem from "../../components/ShopsItem/ShopsItem";
import Loading from "../../components/Loading/Loading";

import "./shops.scss";

const Shops = () => {
  const { shops, isLoading } = useAppSelector((state) => state.shops);

  const [searchParams] = useSearchParams();
  const typeParams = searchParams.get("type");
  const type = typeParams ? typeParams : "";

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce<string>(search, 500);

  const filteredShops = getFilteredShops(shops, type, debouncedSearch);

  const { city } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShops(city));
  }, [dispatch, city]);

  return (
    <>
      <Breadcrumb />
      <div className="shops">
        <h2 className="shops__title title-secondary">{`${getShopsTitle(
          city
        )}`}</h2>
        <ShopsActions setSearch={setSearch} />
        <div className="shops__grid">
          {isLoading && <Loading />}
          {!isLoading &&
            filteredShops &&
            filteredShops.length > 0 &&
            filteredShops.map((shop) => (
              <ShopsItem key={shop.name} shop={shop} />
            ))}
          {!isLoading && filteredShops && filteredShops.length === 0 && (
            <div className="shops__message">
              <h2 className="title-secondary">Нет подходящих магазинов</h2>
              <span>Попробуйте изменить параметры поиска...</span>
            </div>
          )}
          {!isLoading && !filteredShops && (
            <div className="shops__message">
              <h2 className="title-secondary">Магазины не найдены</h2>
              <span>Попробуйте зайти позднее...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shops;
