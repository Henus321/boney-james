import { IState } from "./shared";

export interface IOptions {
  color: string;
  id: string;
  photos: string[];
}

export interface IItem {
  options: IOptions[];
  cost: number;
  description: string;
  name: string;
  sizes: string[];
  slug: string;
}

export interface IItemState extends IState {
  item: IItem | null;
  color: string;
  size: string;
}
