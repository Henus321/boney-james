type ISize = "XS 42" | "S 44" | "M 46" | "L 48";

export interface IColor {
  color: string;
  photos: string[];
}

export interface IItem {
  colors: IColor[];
  cost: number;
  description: string;
  name: string;
  article: string;
  sizes: ISize[];
  slug: string;
}
