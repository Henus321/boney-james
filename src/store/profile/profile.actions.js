import { PROFILE_ACTION_TYPES } from './profile.types';

export const toggleProfileMenu = (isProfileMenuActive) => ({
  type: PROFILE_ACTION_TYPES.TOGGLE_PROFILE_MENU,
  payload: isProfileMenuActive,
});

export const setMenuType = (menuType) => ({
  type: PROFILE_ACTION_TYPES.SET_MENU_TYPE,
  payload: menuType,
});
