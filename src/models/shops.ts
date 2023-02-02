import { IState } from "./shared";

export interface IShopType {
  value: string[];
  label: string;
}

export interface IShop {
  name: string;
  subway: string;
  street: string;
  time: string;
  phone: string;
  type: IShopType;
  city: string;
}

export interface IShopsState extends IState {
  shops: IShop[] | null;
}
