import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.profile;

export const selectIsProfileMenuActive = createSelector(
  [selectUserReducer],
  (profile) => profile.isProfileMenuActive
);

export const selectMenuType = createSelector(
  [selectUserReducer],
  (profile) => profile.menuType
);
