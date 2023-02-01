import { combineReducers } from "@reduxjs/toolkit";
import collectionReducer from "./collection/collection.slice";
import itemReducer from "./item/item.slice";
import sidebarReducer from "./sidebar/sidebar.slice";
import cartReducer from "./cart/cart.slice";
import bookmarksReducer from "./bookmarks/bookmarks.slice";

export const rootReducer = combineReducers({
  collection: collectionReducer,
  item: itemReducer,
  sidebar: sidebarReducer,
  cart: cartReducer,
  bookmarks: bookmarksReducer,
});
