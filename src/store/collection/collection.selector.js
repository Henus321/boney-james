import { createSelector } from 'reselect';

const selectCollectionsReducer = (state) => state.collections;

export const selectCurrentCollection = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.currentCollection
);

export const selectCollectionQty = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.currentCollection.length
);

export const selectBookmarksId = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.bookmarksId
);
