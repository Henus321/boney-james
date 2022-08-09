import { USER_ACTION_TYPES } from './user.types';

export const toggleProfileMenu = (isProfileMenuActive) => ({
  type: USER_ACTION_TYPES.TOGGLE_PROFILE_MENU,
  payload: isProfileMenuActive,
});
