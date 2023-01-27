import React from "react";
import { Route, Routes } from "react-router-dom";

import Collection from "../../routes/collection";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Collection />} />
    </Routes>
  );
};

export default AppRouter;
