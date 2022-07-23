export interface Recipe {
  name: string;
  category: string;
  description: string;
  note: string;
}

export enum Category {
  Soup,
  Stew,
  Bowl,
  SidesAndDesserts,
}
