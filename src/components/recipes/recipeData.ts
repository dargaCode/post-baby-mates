import { Recipe } from "./recipeUtils";
import { Categories } from "./categoryUtils";

// eslint-disable-next-line import/prefer-default-export


export const RECIPES: Recipe[] = [
  {
    name: "Classic Chicken Noodle",
    category: Categories.Soup,
    description:
      "Chicken thighs, leeks, celery, carrot, spinach, and unenriched egg noodles",
    note: "",
  },
  {
    name: "Chicken Tortellini",
    category: Categories.Soup,
    description:
      "Chicken thighs, onion, carrot, celery, Buitoni brand tortellini, tomato, spinach, cream, and parmesan      ",
    note: "",
  },
  {
    name: "Bean Soup",
    category: Categories.Soup,
    description:
      "Bacon, smoked sausage, onions, celery, refried beans, pinto beans, black beans, cilantro",
    note: "",
  },
  {
    name: "Beef and Barley Soup",
    category: Categories.Soup,
    description:
      "Beef, pearl barley, onions, carrots, parsnips, celery, beer, garlic, peas",
    note: "",
  },
  {
    name: "Pickle Soup",
    category: Categories.Soup,
    description:
      "Bacon, onion, garlic, butter, celery, carrots, potatoes, dill pickles, pickle juice, chicken broth, sour cream",
    note: "   + Optional: Add regular or turkey meatballs",
  },
  {
    name: "Thicc Mushroom and Wild Rice",
    category: Categories.Soup,
    description:
      "Chicken thighs, onions, carrots, celery, mushrooms (pureed and chunky), butter, cream, wild rice",
    note: "",
  },
  {
    name: "Beef Chili",
    category: Categories.Stew,
    description:
      "Ground beef, onions, bell peppers, corn, kidney beans, black beans, pinto beans, tomatoes.\nServed over turmeric rice ",
    note: "",
  },
  {
    name: "White Chicken Chili",
    category: Categories.Stew,
    description:
      "Chicken thighs, onions, bell peppers, poblano peppers, canned green chilis, great northern beans, cannellini beans, corn.\nServed over turmeric rice",
    note: "",
  },
  {
    name: "Not Authentic Butter Chicken Tikka",
    category: Categories.Stew,
    description:
      "Chicken thighs, onion, tomatoes, chickpeas, cauliflower, spinach, peas, butter, cream. \nServed over saffron rice",
    note: "",
  },
  {
    name: "Teriyaki Bowl",
    category: "",
    description:
      "Beef or Chicken, edamame, shredded carrot, roasted mushrooms, teriyaki sauce.\nServed over seasoned and vinegared sushi rice",
    note: "  + Choose Protein: Beef, Chicken Thigh, Chicken Breast",
  },
  {
    name: "Roasted Meat and Veggie Bowl",
    category: Categories.Bowl,
    description:
      "Choice of Beef, Chicken, or Sausage.\nChoice of one or more roasted Veg (eg Broccoli, Broccolini, Asparagus, Cauliflower, Carrots, Mushrooms, Sweet Potato, whatever other veg you like)\nServed over turmeric rice with corn.",
    note: "  + Choose Seasoning style: Garlic & Herb, Lemon Pepper, Cajun, BBQ",
  },
  {
    name: "Poblano Chicken Casserole",
    category: Categories.Bowl,
    description:
      "Rice, chicken breast, onions, poblano peppers, corn, cream of mushroom soup",
    note: "Note: Campbells ready-to-eat soup has enriched flour in the ingredient list, but their concentrate does not. If this still doesn\'t feel safe, we can make our own mushroom base using roux thickened with unenriched flour at home! ",
  },
  {
    name: "Red Pasta and Meatballs",
    category: Categories.Bowl,
    description:
      "Turkey meatballs, unenriched small pasta (penne or rotini), canned crushed and whole tomatoes, onions, celery, carrots, spinach, mushrooms",
    note: "",
  },
  {
    name: "Garlicky \"Italian\" Pasta",
    category: Categories.Bowl,
    description:
      "Whole wheat unenriched fettuccine, Italian sausage, lots of garlic, broccolini, asparagus, peas, spinach, parmesan, broth-based sauce",
    note: "",
  },
  {
    name: "Homemade Sourdough Boule",
    category: Categories.SidesAndDesserts,
    description:
      "Made with unenriched white, wheat, and rye flours",
    note: "Note: The sourdough starter will have been fed with unenriched flour for the last couple cycles, however there may be trace amounts of regular flour still kicking around in the starter - would amount to no more than 1-2 tsp of enriched flour in the loaf at most. If this is still a risk factor then let\'s skip this one :) ",
  },
  {
    name: "Mini Cornbread Muffins",
    category: Categories.SidesAndDesserts,
    description:
      "1 Dozen northern style cornbread muffins",
    note: "Choose: Classic, Blueberry, or Cheddar Jalapeño",
  },
  {
    name: "Pumpkin Bread Muffins",
    category: Categories.SidesAndDesserts,
    description:
      "1 Dozen sweet, cakey pumpkin spice muffins",
    note: "",
  },
  {
    name: "Banana Bread Muffins",
    category: Categories.SidesAndDesserts,
    description:
      "1 Dozen sweet, spiced banana bread muffins. Contains no nuts unless you really want them in there",
    note: "",
  },
  {
    name: "Brownies",
    category: Categories.SidesAndDesserts,
    description:
      "Your choice of ultra dense, fudgy brownies (Claire Saffitz recipe) loaded with chocolate chips, or more cakelike soft brownies flavored with almond extract (Elyse\'s family recipe)",
    note: "",
  },
  {
    name: "Chocolate Chip Cookies",
    category: Categories.SidesAndDesserts,
    description:
      "Let us know what kind of chocolate chip cookie you like, we\'ve got like 7 recipes and they\'re all great",
    note: "",
    link: "https://docs.google.com/document/d/19jw3EU03KQgp8eJBNk8OwZcy67jKcuMH9ojMXMHmVQM/edit",
  },
];
