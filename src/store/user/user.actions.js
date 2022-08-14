import { USER_ACTION_TYPES } from './user.types';

export const fetchUserStart = () => ({
  type: USER_ACTION_TYPES.FETCH_USER_START,
});

export const fetchUserFailure = (error) => ({
  type: USER_ACTION_TYPES.FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserSuccess = (currentUser) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: currentUser,
});

export const setUserToDefault = () => ({
  type: USER_ACTION_TYPES.SET_USER_TO_DEFAULT,
});
