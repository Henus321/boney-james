import { ITEM_ACTION_TYPES } from './item.types';

export const ITEM_INITIAL_STATE = {
  item: {},
};

export const itemReducer = (state = ITEM_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ITEM_ACTION_TYPES.SET_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    case ITEM_ACTION_TYPES.SET_COLOR_AND_ID:
      return {
        ...state,
        colorId: payload,
      };
    case ITEM_ACTION_TYPES.SET_CURRENT_SIZE:
      return {
        ...state,
        currentSize: payload,
      };
    case ITEM_ACTION_TYPES.CLEAR_ITEM:
      return ITEM_INITIAL_STATE;
    default:
      return state;
  }
};
