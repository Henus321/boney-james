import { BOOKMARKS_ACTION_TYPES } from './bookmarks.types';

export const toggleBookmark = (id) => ({
  type: BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: id,
});
