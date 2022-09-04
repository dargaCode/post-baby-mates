import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CartDishCard.module.scss";
import edit from "../../img/icons/edit.svg";

import { selectCart } from "../Cart/Cart.slice";
import { openModalForDish } from "../AddEditDishModal/AddEditDishModal.slice";
import { Dish } from "../../utils/dishUtils";

interface Props {
  dish: Dish;
}

export default function CartDishCard(props: Props): JSX.Element {
  const {
    dish: { id, name }
  } = props;

  const dispatch = useDispatch();
  const { dishNotesMap } = useSelector(selectCart);

  function handleClick() {
    dispatch(openModalForDish(id));
  }

  function renderNotes(): JSX.Element | null {
    const notes = dishNotesMap[id];

    const buttonNode = (
      <button type="button" className={styles.edit} onClick={handleClick}>
        {notes ? "Notes" : "Add Notes"}

        <img src={edit} className={styles.editIcon} alt="Edit" />
      </button>
    );

    return (
      <div className={styles.notes}>
        {notes && (
          <div>
            <div className={styles.notesHeader}>
              <span>{buttonNode}</span>
            </div>
            <p id="notes" className={styles.notes}>
              {notes}
            </p>
          </div>
        )}
        {!notes && buttonNode}
      </div>
    );
  }

  return (
    <div className={styles.cartDishCard} onClick={handleClick}>
      <h4 className={styles.name}>{name}</h4>
      {renderNotes()}
    </div>
  );
}
