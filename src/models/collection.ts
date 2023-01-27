import { IItem } from "./item";

export interface ICollectionState {
  collection: IItem[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
