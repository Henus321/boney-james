import { Timestamp } from "firebase/firestore";
import { ICartItem } from "./cart";
import { IState } from "./shared";

export interface IOrder {
  items: ICartItem[];
  userRef: string;
  timestamp: Timestamp;
  id?: string;
}

export interface IOrdersState extends IState {
  orders: IOrder[];
}
