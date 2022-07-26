import { Dish } from "./dishUtils";
import { CategoryIds } from "./categoryUtils";
import { CATEGORIES } from "./categoryData";

export const DISHES: Dish[] = [
  {
    id: "chicken-soup",
    name: "Classic Chicken Noodle Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Chicken thighs, leeks, celery, carrot, spinach, and unenriched egg noodles",
    note: ""
  },
  {
    id: "tortellini-soup",
    name: "Chicken Tortellini Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Chicken thighs, onion, carrot, celery, Buitoni brand tortellini, tomato, spinach, cream, and parmesan",
    note: ""
  },
  {
    id: "bean-soup",
    name: "Bean Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Bacon, smoked sausage, onions, celery, refried beans, pinto beans, black beans, cilantro",
    note: ""
  },
  {
    id: "beef-soup",
    name: "Beef and Barley Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Beef, pearl barley, onions, carrots, parsnips, celery, beer, garlic, peas",
    note: ""
  },
  {
    id: "pickle-soup",
    name: "Pickle Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Bacon, onion, garlic, butter, celery, carrots, potatoes, dill pickles, pickle juice, chicken broth, sour cream",
    note: "   + Optional: Add regular or turkey meatballs"
  },
  {
    id: "mushroom-soup",
    name: "Mushroom and Wild Rice Soup",
    categoryId: CategoryIds.Soup,
    description:
      "Chicken thighs, onions, carrots, celery, mushrooms (pureed and chunky), butter, cream, wild rice",
    note: ""
  },
  {
    id: "beef-chili",
    name: "Beef Chili",
    categoryId: CategoryIds.Stew,
    description:
      "Ground beef, onions, bell peppers, corn, kidney beans, black beans, pinto beans, tomatoes.\nServed over turmeric rice ",
    note: ""
  },
  {
    id: "chicken-chili",
    name: "White Chicken Chili",
    categoryId: CategoryIds.Stew,
    description:
      "Chicken thighs, onions, bell peppers, poblano peppers, canned green chilis, great northern beans, cannellini beans, corn.\nServed over turmeric rice",
    note: ""
  },
  {
    id: "chicken-curry",
    name: "Not Authentic Butter Chicken Tikka",
    categoryId: CategoryIds.Stew,
    description:
      "Chicken thighs, onion, tomatoes, chickpeas, cauliflower, spinach, peas, butter, cream. \nServed over saffron rice",
    note: ""
  },
  {
    id: "teriyaki-bowl",
    name: "Teriyaki Bowl",
    categoryId: CategoryIds.Bowl,
    description:
      "Beef or Chicken, edamame, shredded carrot, roasted mushrooms, teriyaki sauce.\nServed over seasoned and vinegared sushi rice",
    note: "  + Choose Protein: Beef, Chicken Thigh, Chicken Breast"
  },
  {
    id: "roasted-bowl",
    name: "Roasted Meat and Veggie Bowl",
    categoryId: CategoryIds.Bowl,
    description:
      "Choice of Beef, Chicken, or Sausage.\nChoice of one or more roasted Veg (eg Broccoli, Broccolini, Asparagus, Cauliflower, Carrots, Mushrooms, Sweet Potato, whatever other veg you like)\nServed over turmeric rice with corn.",
    note: "  + Choose Seasoning style: Garlic & Herb, Lemon Pepper, Cajun, BBQ"
  },
  {
    id: "chicken-casserole",
    name: "Poblano Chicken Casserole",
    categoryId: CategoryIds.Bowl,
    description:
      "Rice, chicken breast, onions, poblano peppers, corn, cream of mushroom soup",
    note:
      "Note: Campbells ready-to-eat soup has enriched flour in the ingredient list, but their concentrate does not. If this still doesn't feel safe, we can make our own mushroom base using roux thickened with unenriched flour at home! "
  },
  {
    id: "meatball-pasta",
    name: "Red Pasta and Meatballs",
    categoryId: CategoryIds.Bowl,
    description:
      "Turkey meatballs, unenriched small pasta (penne or rotini), canned crushed and whole tomatoes, onions, celery, carrots, spinach, mushrooms",
    note: ""
  },
  {
    id: "garlic-pasta",
    name: 'Garlicky "Italian" Pasta',
    categoryId: CategoryIds.Bowl,
    description:
      "Whole wheat unenriched fettuccine, Italian sausage, lots of garlic, broccolini, asparagus, peas, spinach, parmesan, broth-based sauce",
    note: ""
  },
  {
    id: "sourdough",
    name: "Homemade Sourdough Boule",
    categoryId: CategoryIds.Baked,
    description: "Made with unenriched white, wheat, and rye flours",
    note:
      "Note: The sourdough starter will have been fed with unenriched flour for the last couple cycles, however there may be trace amounts of regular flour still kicking around in the starter - would amount to no more than 1-2 tsp of enriched flour in the loaf at most. If this is still a risk factor then let's skip this one :) "
  },
  {
    id: "italian-bread",
    name: "Herby Italian Bread",
    categoryId: CategoryIds.Baked,
    description:
      "Soft, fluffy bread with herbs baked into it, perfect for dipping into soup or into olive oil and vinegar",
    note: ""
  },
  {
    id: "cornbread",
    name: "Mini Cornbread Muffins",
    categoryId: CategoryIds.Baked,
    description: "1 Dozen northern style cornbread muffins",
    note: "Choose: Classic, Blueberry, or Cheddar Jalapeño"
  },
  {
    id: "pumpkin-muffins",
    name: "Pumpkin Bread Muffins",
    categoryId: CategoryIds.Baked,
    description: "1 Dozen sweet, cakey pumpkin spice muffins",
    note: ""
  },
  {
    id: "banana-muffins",
    name: "Banana Bread Muffins",
    categoryId: CategoryIds.Baked,
    description:
      "1 Dozen sweet, spiced banana bread muffins. Contains no nuts unless you really want them in there",
    note: ""
  },
  {
    id: "brownies",
    name: "Brownies",
    categoryId: CategoryIds.Baked,
    description:
      "Your choice of ultra dense, fudgy brownies (Claire Saffitz recipe) loaded with chocolate chips, or more cakelike soft brownies flavored with almond extract (Elyse's family recipe)",
    note: ""
  },
  {
    id: "cookies",
    name: "Chocolate Chip Cookies",
    categoryId: CategoryIds.Baked,
    description:
      "Let us know what kind of chocolate chip cookie you like, we've got like 7 recipes and they're all great",
    note: "",
    link:
      "https://docs.google.com/document/d/19jw3EU03KQgp8eJBNk8OwZcy67jKcuMH9ojMXMHmVQM/edit"
  }
];

const DISH_IDS = DISHES.map(({ id }) => id);
export type DishIds = typeof DISH_IDS[number];

export type BooleansByDishIdMap = { [key in DishIds]: boolean };
export type DishesByIdMap = { [key in DishIds]: Dish };
export type DishesByCategoryIdMap = { [key in DishIds]: Dish[] };
export type StringsByDishIdMap = { [key in DishIds]: string };

export const DISHES_BY_ID_MAP: DishesByIdMap = DISHES.reduce(
  (dictionary, dish) => {
    const { id } = dish;

    return { ...dictionary, [id]: dish };
  },
  {}
);

const DISHES_BY_CATEGORY_ID_MAP: DishesByCategoryIdMap = {};

CATEGORIES.forEach(({ id }) => {
  DISHES_BY_CATEGORY_ID_MAP[id] = DISHES.filter(
    ({ categoryId }) => categoryId === id
  );
});

export { DISHES_BY_CATEGORY_ID_MAP };
