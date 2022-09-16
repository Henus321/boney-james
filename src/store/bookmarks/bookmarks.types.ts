export enum BOOKMARKS_ACTION_TYPES {
  TOGGLE_BOOKMARK = '@@bookmarks/TOGGLE_BOOKMARK',
}

export interface BookmarkState {
  bookmarksId: number[];
  isBookmarks: boolean;
}

interface toggleBookmark {
  type: BOOKMARKS_ACTION_TYPES.TOGGLE_BOOKMARK;
  payload: number;
}

export type BookmarksAction = toggleBookmark;
