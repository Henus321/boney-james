import { BOOKMARKS_ACTION_TYPES } from '../../types/bookmarks';

export const toggleBookmark = (id: number) => ({
  type: BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK,
  payload: id,
});
