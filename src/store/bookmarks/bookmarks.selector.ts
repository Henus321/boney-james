import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectBookmarksReducer = (state: RootState) => state.bookmarks;

export const selectBookmarksId = createSelector(
  [selectBookmarksReducer],
  (bookmarks) => bookmarks.bookmarksId
);

export const selectBookmarksQty = createSelector(
  [selectBookmarksReducer],
  (bookmarks) => bookmarks.bookmarksId.length
);
