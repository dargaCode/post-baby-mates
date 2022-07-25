export interface Category{
  name: string;
  id: CategoryNames;
  description: string;
}

export enum CategoryNames {
  Soup= 'soup',
  Stew= 'stew',
  Bowl= 'bowl',
  Baked= 'baked',
}
