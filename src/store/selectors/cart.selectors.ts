import { createSelector } from 'reselect';
import { RootState } from '../reducers';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCart = createSelector(
  [selectCartReducer],
  (cart) => cart.cart
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart) => cart.cartTotal
);

export const selectIsCartActive = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartActive
);

export const selectCartStatus = createSelector(
  [selectCartReducer],
  (cart) => cart.cartStatus
);

export const selectCartQuantity = createSelector([selectCartReducer], (cart) =>
  cart.cart.reduce((acc: number, item: any) => {
    return acc + item.quantity;
  }, 0)
);
