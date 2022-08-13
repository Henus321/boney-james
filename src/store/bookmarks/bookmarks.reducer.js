import { BOOKMARKS_ACTION_TYPES } from './bookmarks.types';

export const BOOKMARKS_INITIAL_STATE = {
  bookmarksId: [],
};

export const bookmarksReducer = (
  state = BOOKMARKS_INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK:
      if (state.bookmarksId.includes(payload)) {
        return {
          ...state,
          bookmarksId: [...state.bookmarksId.filter((id) => id !== payload)],
        };
      }
      return {
        ...state,
        bookmarksId: [...state.bookmarksId, payload],
      };
    default:
      return state;
  }
};
