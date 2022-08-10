import { USER_ACTION_TYPES } from './user.types';

export const USER_INITIAL_STATE = {
  currentUser: {},
};

export const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_USER_TO_DEFAULT:
      return USER_INITIAL_STATE;
    default:
      return state;
  }
};
