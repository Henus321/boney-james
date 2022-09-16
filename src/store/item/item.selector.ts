import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectItemReducer = (state: RootState) => state.item;

export const selectCurrentItem = createSelector(
  [selectItemReducer],
  (item) => item.item
);

export const selectColorId = createSelector(
  [selectItemReducer],
  (item) => item.colorId
);

export const selectIsItemLoading = createSelector(
  [selectItemReducer],
  (item) => item.isLoading
);
