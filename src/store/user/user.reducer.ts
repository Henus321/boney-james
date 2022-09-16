import { USER_ACTION_TYPES, UserAction, UserState } from './user.types';

export const initialState: UserState = {
  currentUser: {
    name: '',
    email: '',
  },
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTION_TYPES.SET_USER_TO_DEFAULT:
      return initialState;
    default:
      return state;
  }
};
