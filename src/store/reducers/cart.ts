import { CartAction, CartState, CART_ACTION_TYPES } from '../../types/cart';

const initialState: CartState = {
  cart: [],
  cartTotal: 0,
  isCartActive: false,
  cartStatus: false,
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case CART_ACTION_TYPES.CHANGE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((prevItem) => {
          if (
            prevItem.id === action.payload.clickedItem.id &&
            prevItem.size === action.payload.clickedItem.size &&
            prevItem.quantity + action.payload.positiveOrNegativeOne > 0
          ) {
            return {
              ...prevItem,
              quantity:
                prevItem.quantity + action.payload.positiveOrNegativeOne,
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
            curItem.id !== action.payload.id ||
            curItem.size !== action.payload.size
        ),
      };

    case CART_ACTION_TYPES.ADD_TO_CART:
      let sameIdAndSize = false;
      const allItems = state.cart.map((prevItem) => {
        if (
          prevItem.id === action.payload.clickedItem.id &&
          prevItem.size === action.payload.clickedItem.size
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
        cart: [
          ...state.cart,
          {
            ...action.payload.clickedItem,
            size: action.payload.clickedItem.size,
          },
        ],
      };
    case CART_ACTION_TYPES.CART_TO_INITIAL_STATE:
      return initialState;
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartActive: action.payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_STATUS:
      return {
        ...state,
        cartStatus: action.payload,
      };
    default:
      return state;
  }
};
