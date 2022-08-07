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
    case COLLECTION_ACTION_TYPES.TOGGLE_BOOKMARK:
      return {
        ...state,
        currentCollection: [
          ...state.currentCollection.map((item) => {
            if (item.id === payload.id && item.bookmarked === true)
              return { ...payload, bookmarked: false };
            if (item.id === payload.id) return { ...payload, bookmarked: true };
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};
