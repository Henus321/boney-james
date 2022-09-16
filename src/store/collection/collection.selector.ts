import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectCollectionsReducer = (state: RootState) => state.collections;

export const selectCurrentCollection = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.currentCollection
);

export const selectCollectionQty = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.currentCollection.length
);

export const selectIsCollectionLoading = createSelector(
  [selectCollectionsReducer],
  (collections) => collections.isLoading
);
