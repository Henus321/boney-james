import {
  DEFAULT_ROUTE,
  WIP_ROUTE,
  SHOPS_ROUTE,
  ABOUT_ROUTE,
  BOOKMARKS_ROUTE,
  CHECKOUT_ROUTE,
  PROFILE_ROUTE,
} from "../constants";
import { ICartItem, IItem, IOptions } from "../models";
import { beautifyCost } from "./typography";

export const getLocaleName = (name: string, payload: string | undefined) => {
  const route = `/${name.split("/")[1]}`;

  if (payload) return payload;

  switch (route) {
    case DEFAULT_ROUTE:
      return "Коллекция";
    case WIP_ROUTE:
      return "Страница на реконструкции";
    case SHOPS_ROUTE:
      return "Магазины";
    case ABOUT_ROUTE:
      return "Покупателям";
    case BOOKMARKS_ROUTE:
      return "Избранное";
    case CHECKOUT_ROUTE:
      return "Оформление";
    case PROFILE_ROUTE:
      return "Профиль";
    default:
      return "Страница не найдена";
  }
};

export const getTitlePhoto = (options: IOptions[], activeColor: string) =>
  options.find((option) => option.color === activeColor)?.photos[0];

export const getColor = (colorParams: string | null, item: IItem | null) => {
  if (colorParams) return colorParams;

  const firstColor = item?.options[0].color;
  if (firstColor) return firstColor;

  return "";
};

export const getTotal = (cart: ICartItem[]) => {
  const total = cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);
  return beautifyCost(total);
};
