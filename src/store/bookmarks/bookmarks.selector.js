import { createSelector } from 'reselect';

const selectBookmarksReducer = (state) => state.bookmarks;

export const selectBookmarksId = createSelector(
  [selectBookmarksReducer],
  (bookmarks) => bookmarks.bookmarksId
);

export const selectBookmarksQty = createSelector(
  [selectBookmarksReducer],
  (bookmarks) => bookmarks.bookmarksId.length
);
