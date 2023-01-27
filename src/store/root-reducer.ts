import { combineReducers } from "@reduxjs/toolkit";
import collectionReducer from "./collection/collection.slice";

export const rootReducer = combineReducers({
  collection: collectionReducer,
});
