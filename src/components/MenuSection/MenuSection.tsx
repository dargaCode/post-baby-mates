import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../Cart/Cart.slice";

import styles from "./MenuSection.module.scss";

import MenuDishCard from "../MenuDishCard/MenuDishCard";

import { Category } from "../../utils/categoryUtils";
import { DISHES } from "../../utils/dishData";

interface Props {
  category: Category;
}

export default function MenuSection(props: Props): JSX.Element {
  const { category } = props;
  const { name, description } = category;

  const cart = useSelector(selectCart);

  function renderDishes() {
    const {
      category: { id }
    } = props;
    const categoryDishes = DISHES.filter(dish => dish.categoryId === id);

    return (
      <div className={styles.dishes}>
        {categoryDishes.map((dish, index) => {
          const isSelected = !!cart[dish.id];
          const key = `${index}-${dish.name}`;

          return <MenuDishCard key={key} dish={dish} isSelected={isSelected} />;
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
