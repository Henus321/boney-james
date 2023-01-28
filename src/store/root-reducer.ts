import { combineReducers } from "@reduxjs/toolkit";
import collectionReducer from "./collection/collection.slice";
import itemReducer from "./item/item.slice";

export const rootReducer = combineReducers({
  collection: collectionReducer,
  item: itemReducer,
});
