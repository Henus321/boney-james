import { createSelector } from 'reselect';
import { RootState } from '../reducers';

const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
