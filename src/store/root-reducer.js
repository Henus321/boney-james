import { combineReducers } from 'redux';

import { collectionReducer } from './collection/collection.reducer';
import { cartReducer } from './cart/cart.reducer';
import { itemReducer } from './item/item.reducer';
import { userReducer } from './user/user.reducer';
import { profileReducer } from './profile/profile.reducer';
import { bookmarksReducer } from './bookmarks/bookmarks.reducer';

export const rootReducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
  item: itemReducer,
  user: userReducer,
  profile: profileReducer,
  bookmarks: bookmarksReducer,
});
