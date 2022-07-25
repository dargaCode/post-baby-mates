import {CategoryNames} from "./categoryUtils";

export interface Recipe {
  id: string;
  name: string;
  categoryId: CategoryNames;
  description: string;
  note: string;
  link?: string;
}
