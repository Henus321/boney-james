import { IItem } from "./item";
import { IState } from "./shared";

export interface ICollectionState extends IState {
  collection: IItem[];
}
