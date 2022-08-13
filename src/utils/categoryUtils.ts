export interface Category {
  name: string;
  id: CategoryIds;
  description: string;
}

export enum CategoryIds {
  Soup = "soup",
  Stew = "stew",
  Bowl = "bowl",
  Baked = "baked"
}
