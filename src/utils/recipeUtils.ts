import {CategoryNames} from "./categoryUtils";

export interface Recipe {
  name: string;
  categoryId: CategoryNames;
  description: string;
  note: string;
  link?: string;
}
