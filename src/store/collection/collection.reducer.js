import { COLLECTION_ACTION_TYPES } from './collection.types';

export const COLLECTIONS_INITIAL_STATE = {
  currentCollection: [],
  isLoading: false,
  error: null,
};

export const collectionReducer = (
  state = COLLECTIONS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentCollection: payload,
      };
    default:
      return state;
  }
};
