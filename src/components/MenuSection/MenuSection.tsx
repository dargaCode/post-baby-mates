import React from "react";

import styles from "./MenuSection.module.scss";

import MenuDishCard from "../MenuDishCard/MenuDishCard";

import { Category } from "../../utils/categoryUtils";
import { Dish } from "../../utils/dishUtils";

interface Props {
  category: Category;
  dishes: Dish[];
}

export default function MenuSection({ category, dishes }: Props): JSX.Element {
  const { name, description } = category;

  function renderDishes() {
    return (
      <div className={styles.dishes}>
        {dishes.map((dish, index) => {
          const key = `${index}-${dish.name}`;

          return <MenuDishCard key={key} dish={dish} />;
        })}
      </div>
    );
  }

  return (
    <div className={styles.menuSection} id={category.id}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      {renderDishes()}
    </div>
  );
}
