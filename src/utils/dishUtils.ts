import { CategoryIds } from "./categoryUtils";

export interface Dish {
  id: string;
  name: string;
  categoryId: CategoryIds;
  description: string;
  note: string;
  link?: string;
}
