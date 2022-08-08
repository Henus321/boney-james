import { createSelector } from 'reselect';

const DEFAULT_SIZE = '42';

const selectItemReducer = (state) => state.item;

export const selectCurrentItem = createSelector(
  [selectItemReducer],
  (item) => item.currentItem
);

export const selectColorId = createSelector(
  [selectItemReducer],
  (item) => item.colorId
);

export const selectCurrentSize = createSelector(
  [selectItemReducer],
  (item) => item.currentSize || DEFAULT_SIZE
);
