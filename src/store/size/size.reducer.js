import { SIZE_ACTION_TYPES } from './size.types';

export const ITEM_INITIAL_STATE = {
  currentSize: '42',
  sizes: ['42', '44', '46', '48'],
};

export const sizeReducer = (state = ITEM_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIZE_ACTION_TYPES.SET_CURRENT_SIZE:
      return {
        ...state,
        currentSize: payload,
      };
    default:
      return state;
  }
};
