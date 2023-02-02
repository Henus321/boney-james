import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DEFAULT_ROUTE,
  NOT_FOUND_OPTIONS,
  WIP_ROUTE,
  ITEM_ROUTE,
  SHOPS_ROUTE,
} from "../../constants";

import Collection from "../../routes/Collection/Collection";
import Item from "../../routes/Item/Item";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";
import Shops from "../../routes/Shops/Shops";
import AppLayout from "../AppLayout/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<AppLayout />}>
        <Route index element={<Collection />} />
        <Route path={`${ITEM_ROUTE}/:slug`} element={<Item />} />
        <Route path={`${SHOPS_ROUTE}/:city?`} element={<Shops />} />
        <Route
          path={WIP_ROUTE}
          element={
            <PageNotFound options={NOT_FOUND_OPTIONS.WORK_IN_PROGRESS} />
          }
        />
        <Route
          path="*"
          element={<PageNotFound options={NOT_FOUND_OPTIONS.PAGE_NOT_FOUND} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
