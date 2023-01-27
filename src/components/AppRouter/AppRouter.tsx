import React from "react";
import { Route, Routes } from "react-router-dom";
import { DEFAULT_ROUTE } from "../../constants";

import Collection from "../../routes/Collection/Collection";
import AppLayout from "../AppLayout/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<AppLayout />}>
        <Route index element={<Collection />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
