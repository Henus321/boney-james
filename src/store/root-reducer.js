import { combineReducers } from 'redux';

import { collectionReducer } from './collection/collection.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
});
