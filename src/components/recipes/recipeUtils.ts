export interface Recipe {
  name: string;
  category: string;
  description: string;
  note: string;
}

export enum Category {
  Soup= 'SOUP',
  Stew= 'STEW',
  Bowl= 'BOWL',
  SidesAndDesserts= 'SIDES_AND_DESSERTS',
}
