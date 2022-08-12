import { CART_ACTION_TYPES } from './cart.types';

export const addToCart = (clickedItem, size) => ({
  type: CART_ACTION_TYPES.ADD_TO_CART,
  payload: { clickedItem, size },
});

export const deleteFromCart = (clickedItem) => ({
  type: CART_ACTION_TYPES.DELETE_FROM_CART,
  payload: { clickedItem },
});

export const cartToInitialState = () => ({
  type: CART_ACTION_TYPES.CART_TO_INITIAL_STATE,
});

export const changeQuantity = (clickedItem, positiveOrNegativeOne) => ({
  type: CART_ACTION_TYPES.CHANGE_QUANTITY,
  payload: { clickedItem, positiveOrNegativeOne },
});

export const toggleCart = (isCartActive) => ({
  type: CART_ACTION_TYPES.TOGGLE_CART,
  payload: isCartActive,
});

export const setCartTotal = (cartTotal) => ({
  type: CART_ACTION_TYPES.SET_CART_TOTAL,
  payload: cartTotal,
});

export const toggleCartStatus = (cartStatus) => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_STATUS,
  payload: cartStatus,
});
