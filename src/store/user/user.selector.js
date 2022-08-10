import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectIsProfileMenuActive = createSelector(
  [selectUserReducer],
  (item) => item.isProfileMenuActive
);
