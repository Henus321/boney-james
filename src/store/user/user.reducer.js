import { USER_ACTION_TYPES } from './user.types';

export const USER_INITIAL_STATE = {
  user: {},
  isProfileMenuActive: false,
};

export const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.TOGGLE_PROFILE_MENU:
      return {
        ...state,
        isProfileMenuActive: payload,
      };
    default:
      return state;
  }
};
