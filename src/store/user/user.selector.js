import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (item) => item.user
);

export const selectIsProfileMenuActive = createSelector(
  [selectUserReducer],
  (item) => item.isProfileMenuActive
);
