export interface Category{
  name: string;
  id: CategoryNames;
  description: string;
}

export enum CategoryNames {
  Soup= 'SOUP',
  Stew= 'STEW',
  Bowl= 'BOWL',
  SidesAndDesserts= 'SIDES_AND_DESSERTS',
}
