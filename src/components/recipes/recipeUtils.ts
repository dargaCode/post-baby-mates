export interface Recipe {
  name: string;
  category: string;
  description: string;
  note: string;
  link?: string;
}

export interface CategoryData{
  name: string;
  category: string;
  description: string;
}

export enum Category {
  Soup= 'SOUP',
  Stew= 'STEW',
  Bowl= 'BOWL',
  SidesAndDesserts= 'SIDES_AND_DESSERTS',
}
