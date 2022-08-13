import { createSelector } from 'reselect';

const selectBookmarksReducer = (state) => state.bookmarks;

export const selectBookmarksId = createSelector(
  [selectBookmarksReducer],
  (bookmarks) => bookmarks.bookmarksId
);
