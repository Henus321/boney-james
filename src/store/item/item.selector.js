import { createSelector } from 'reselect';

const selectItemReducer = (state) => state.item;

export const selectCurrentItem = createSelector(
  [selectItemReducer],
  (item) => item.currentItem
);

export const selectColorId = createSelector(
  [selectItemReducer],
  (item) => item.colorId
);

export const selectIsItemLoading = createSelector(
  [selectItemReducer],
  (item) => item.isLoading
);
