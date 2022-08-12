import { COLLECTION_ACTION_TYPES } from './collection.types';

export const COLLECTIONS_INITIAL_STATE = {
  currentCollection: [],
  fullCollection: [],
  bookmarksId: [],
  // loading: false,
};

export const collectionReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case COLLECTION_ACTION_TYPES.SET_CURRENT_COLLECTION:
      return {
        ...state,
        currentCollection: payload,
      };
    case COLLECTION_ACTION_TYPES.SET_FULL_COLLECTION:
      return {
        ...state,
        fullCollection: payload,
      };
    case COLLECTION_ACTION_TYPES.TOGGLE_BOOKMARK:
      console.log(payload);
      return {
        ...state,
        bookmarksId: [
          ...state.bookmarksId.filter((id) => id !== payload),
          payload,
        ],
      };
    default:
      return state;
  }
};
