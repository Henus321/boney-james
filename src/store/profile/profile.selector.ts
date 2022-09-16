import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';

const selectUserReducer = (state: RootState) => state.profile;

export const selectIsProfileMenuActive = createSelector(
  [selectUserReducer],
  (profile) => profile.isProfileMenuActive
);

export const selectMenuType = createSelector(
  [selectUserReducer],
  (profile) => profile.menuType
);
