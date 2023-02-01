import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookmarksState, IBookmarksItem } from "../../models";
import { isBookmarked } from "../../utils";

const initialState: IBookmarksState = {
  bookmarks: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<IBookmarksItem>) => {
      state.bookmarks = isBookmarked(state.bookmarks, action.payload)
        ? state.bookmarks.filter(
            (bookmark) =>
              bookmark.slug !== action.payload.slug ||
              bookmark.color !== action.payload.color
          )
        : [...state.bookmarks, action.payload];
    },
    clearBookmarks: () => initialState,
  },
});

export const { toggleBookmark, clearBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
