import { createSlice } from "@reduxjs/toolkit";
import { ISidebarState } from "../../models";

const initialState: ISidebarState = {
  bookmarks: false,
  cart: false,
  profile: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeAll: () => initialState,
    openBookmarks: (state) => {
      state.bookmarks = true;
    },
    openCart: (state) => {
      state.cart = true;
    },
    openProfile: (state) => {
      state.profile = true;
    },
  },
});

export const { closeAll, openBookmarks, openCart, openProfile } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
