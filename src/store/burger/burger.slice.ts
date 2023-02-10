import { createSlice } from "@reduxjs/toolkit";

const initialState: { burger: boolean } = {
  burger: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    closeBurger: () => initialState,
    toggleBurger: (state) => {
      state.burger = !state.burger;
    },
  },
});

export const { toggleBurger, closeBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
