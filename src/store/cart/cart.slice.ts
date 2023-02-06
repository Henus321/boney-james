import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "../../models";
import { addOrIncItem } from "../../utils";

const initialState: ICartState = {
  cart: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrIncreaseItem: (state, action: PayloadAction<ICartItem>) => {
      state.cart = addOrIncItem(state.cart, action.payload);
    },
    decreaseItem: (state, action: PayloadAction<ICartItem>) => {
      state.cart = state.cart.map((item) =>
        item.slug === action.payload.slug &&
        item.size === action.payload.size &&
        item.color === action.payload.color &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    deleteItem: (state, action: PayloadAction<ICartItem>) => {
      state.cart = state.cart.filter(
        (item) =>
          item.slug !== action.payload.slug ||
          item.size !== action.payload.size ||
          item.color !== action.payload.color
      );
    },
    clearCart: () => initialState,
  },
});

export const { addOrIncreaseItem, decreaseItem, deleteItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
