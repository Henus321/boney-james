import { SIZE_ACTION_TYPES } from './size.types';

export const setCurrentSize = (size) => ({
  type: SIZE_ACTION_TYPES.SET_CURRENT_SIZE,
  payload: size,
});
