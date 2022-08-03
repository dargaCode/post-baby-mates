import React from "react";
import { useDispatch } from "react-redux";

import styles from "./MenuDishCard.module.scss";

import { toggleDishCartInclusion } from "../Cart/Cart.slice";
import { Dish } from "../../utils/dishUtils";

interface Props {
  dish: Dish;
  isSelected: boolean;
}

export default function MenuDishCard(props: Props): JSX.Element {
  const {
    dish: { id, name, description, note, link },
    isSelected
  } = props;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleDishCartInclusion(id));
  }

  return (
    <div
      className={`${styles.menuDishCard} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <div className={styles.leftColumn}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.note}>{note}</p>
        {link && <a href={link}>Click for more info</a>}
      </div>
      <div className={styles.rightColumn}>
        <span className={styles.icon}>{isSelected ? "Remove" : "Add"}</span>
      </div>
    </div>
  );
}
