import { IState } from "./shared";

type ISize = "XS 42" | "S 44" | "M 46" | "L 48";

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
  sizes: ISize[];
  slug: string;
}

export interface IItemState extends IState {
  item: IItem | null;
  color: string;
}
