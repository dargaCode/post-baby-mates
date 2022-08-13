import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MenuDishCard.module.scss";
import add from "../../img/icons/add.svg";
import edit from "../../img/icons/edit.svg";

import { removeDishFromCart, selectCart } from "../Cart/Cart.slice";
import { Dish } from "../../utils/dishUtils";
import { openModalForDish } from "../AddEditDishModal/AddEditDishModal.slice";

interface Props {
  dish: Dish;
}

export default function MenuDishCard(props: Props): JSX.Element {
  const {
    dish: { id, name, description, note, link }
  } = props;

  const dispatch = useDispatch();
  const { selectedDishIdsMap } = useSelector(selectCart);

  const isSelected = !!selectedDishIdsMap[id];

  function handleClickCard() {
    dispatch(openModalForDish(id));
  }

  function handleClickEdit() {
    if (isSelected) {
      dispatch(removeDishFromCart(id));
    } else {
      handleClickCard();
    }
  }

  return (
    <div
      className={`${styles.menuDishCard} ${isSelected ? styles.selected : ""}`}
      onClick={handleClickCard}
    >
      <div className={styles.leftColumn}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.note}>{note}</p>
        {link && <a href={link}>Click for more info</a>}
      </div>
      <div className={styles.rightColumn}>
        <button
          type="button"
          className={styles.addEdit}
          onClick={handleClickEdit}
        >
          {isSelected ? (
            <img src={edit} className={styles.editButton} alt="Edit" />
          ) : (
            <img src={add} className={styles.addButton} alt="Add" />
          )}
        </button>
      </div>
    </div>
  );
}
