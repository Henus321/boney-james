import { IItem } from "./item";

export interface IBookmarksItem extends IItem {
  color: string;
}

export interface IBookmarksState {
  bookmarks: IBookmarksItem[];
}
