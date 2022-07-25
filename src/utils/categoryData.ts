import { CategoryNames, Category } from "./categoryUtils";

// eslint-disable-next-line import/prefer-default-export
export const CATEGORIES : Category[] = [
  {
    name: "Soups",
    id: CategoryNames.Soup,
    description: "Soups come frozen in Quart containers. 1 Quart equals 2 cups of soup or 1 big bowl of soup. Microwave with the lid OFF at 60% power for 8-10 minutes, stirring at the halfway mark.",
  },
  {
    name: "Stews",
    id: CategoryNames.Stew,
    description: "Stews come frozen in individually packaged portions. Microwave for 2m with the lid on, then remove lid and microwave for 4-5 more minutes to warm through.",
  },
  {
    name: "Bowls",
    id: CategoryNames.Bowl,
    description: "Bowls come frozen in individually packaged portions. Microwave for 90s with the lid on, then remove lid and microwave for 3-4 more minutes to warm through.",
  },
  {
    name: "Baked",
    id: CategoryNames.Baked,
    description: "These are delivered fresh, not frozen, however they can be frozen for later as well (we do this all the time!) All made with unenriched flour.",
  },
];
