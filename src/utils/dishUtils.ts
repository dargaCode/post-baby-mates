import { CategoryNames } from "./categoryUtils";

export interface Dish {
  id: string;
  name: string;
  categoryId: CategoryNames;
  description: string;
  note: string;
  link?: string;
}
