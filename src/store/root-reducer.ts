import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import collectionReducer from "./collection/collection.slice";
import itemReducer from "./item/item.slice";
import sidebarReducer from "./sidebar/sidebar.slice";
import cartReducer from "./cart/cart.slice";
import bookmarksReducer from "./bookmarks/bookmarks.slice";
import shopsReducer from "./shops/shops.slice";
import userReducer from "./user/user.slice";
import ordersReducer from "./orders/orders.slice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const bookmarksPersistConfig = {
  key: "bookmarks",
  storage,
  whitelist: ["bookmarks"],
};

export const rootReducer = combineReducers({
  collection: collectionReducer,
  item: itemReducer,
  sidebar: sidebarReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  bookmarks: persistReducer(bookmarksPersistConfig, bookmarksReducer),
  shops: shopsReducer,
  user: userReducer,
  orders: ordersReducer,
});
