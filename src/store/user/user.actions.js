import { USER_ACTION_TYPES } from './user.types';

export const setUser = (currentUser) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: currentUser,
});

export const setUserToDefault = () => ({
  type: USER_ACTION_TYPES.SET_USER_TO_DEFAULT,
});
