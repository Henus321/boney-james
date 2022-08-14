import { USER_ACTION_TYPES } from './user.types';

export const USER_INITIAL_STATE = {
  currentUser: {},
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.FETCH_USER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_ACTION_TYPES.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case USER_ACTION_TYPES.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_USER_TO_DEFAULT:
      return USER_INITIAL_STATE;
    default:
      return state;
  }
};
