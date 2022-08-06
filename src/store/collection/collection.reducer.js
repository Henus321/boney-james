import { COLLECTION_ACTION_TYPES } from './collection.types';

export const COLLECTIONS_INITIAL_STATE = {
  currentCollection: [],
  // loading: false,
};

export const collectionReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case COLLECTION_ACTION_TYPES.SET_ITEMS:
      return {
        ...state,
        currentCollection: payload,
      };
    default:
      return state;
  }
};
