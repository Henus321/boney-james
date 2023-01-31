import { ICartItem } from "../models";

export const addOrIncItem = (array: ICartItem[], payload: ICartItem) => {
  const check = (item: ICartItem) =>
    item.slug === payload.slug &&
    item.size === payload.size &&
    item.color === payload.color;
  const sameItem = array.some(check);

  if (sameItem)
    return array.map((item) =>
      item.slug === payload.slug &&
      item.size === payload.size &&
      item.color === payload.color
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

  return array.concat(payload);
};
