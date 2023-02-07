import { IItem } from "./item";

export interface ICartItem extends IItem {
  size: string;
  color: string;
  quantity: number;
}

export interface ICartState {
  cart: ICartItem[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
