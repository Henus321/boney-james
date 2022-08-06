import { CART_ACTION_TYPES } from './cart.types';

export const CART_INITIAL_STATE = {
  cart: [],
  // loading: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.CHANGE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((prevItem) => {
          if (
            prevItem.id === payload.clickedItem.id &&
            prevItem.size === payload.clickedItem.size &&
            prevItem.quantity + payload.positiveOrNegativeOne > 0
          ) {
            return {
              ...prevItem,
              quantity: prevItem.quantity + payload.positiveOrNegativeOne,
            };
          }
          return { ...prevItem };
        }),
      };

    case CART_ACTION_TYPES.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (curItem) =>
            curItem.id !== payload.clickedItem.id ||
            curItem.size !== payload.clickedItem.size
        ),
      };

    case CART_ACTION_TYPES.ADD_TO_CART:
      let sameIdAndSize = false;
      const allItems = state.cart.map((prevItem) => {
        if (
          prevItem.id === payload.clickedItem.id &&
          prevItem.size === payload.size
        ) {
          sameIdAndSize = true;
          return { ...prevItem, quantity: prevItem.quantity + 1 };
        }
        return { ...prevItem };
      });

      if (sameIdAndSize) {
        return {
          ...state,
          cart: allItems,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...payload.clickedItem, size: payload.size }],
      };
    default:
      return state;
  }
};
