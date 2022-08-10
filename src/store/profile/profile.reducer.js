import { PROFILE_ACTION_TYPES } from './profile.types';

export const USER_INITIAL_STATE = {
  isProfileMenuActive: false,
  menuType: 'sign-in',
};

export const profileReducer = (
  state = USER_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case PROFILE_ACTION_TYPES.TOGGLE_PROFILE_MENU:
      return {
        ...state,
        isProfileMenuActive: payload,
      };
    case PROFILE_ACTION_TYPES.SET_MENU_TYPE:
      return {
        ...state,
        menuType: payload,
      };
    default:
      return state;
  }
};
