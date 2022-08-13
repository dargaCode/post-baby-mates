import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AddEditDishModal.module.scss";
import close from "../../img/icons/close.svg";

import { Dish } from "../../utils/dishUtils";
import { closeModal } from "./AddEditDishModal.slice";
import {
  addDishToCart,
  removeDishFromCart,
  selectCart,
  setDishNotes
} from "../Cart/Cart.slice";

interface Props {
  dish: Dish;
  notes: string;
}

export default function AddEditDishModal(props: Props): JSX.Element {
  const {
    dish: { id, name, description, note, link },
    notes
  } = props;

  const dispatch = useDispatch();
  const [currentNotes, setCurrentNotes] = useState(notes ?? "");

  const { selectedDishIdsMap } = useSelector(selectCart);

  const isSelected = !!selectedDishIdsMap[id];

  function handleChangeNotes(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const {
      target: { value }
    } = event;

    setCurrentNotes(value);
  }

  function handleCancel() {
    dispatch(closeModal());
  }

  function handleCardClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  function handleRemove() {
    dispatch(removeDishFromCart(id));
    dispatch(closeModal());
  }

  function handleSubmit() {
    dispatch(addDishToCart(id));
    dispatch(setDishNotes({ id, notes: currentNotes }));
    dispatch(closeModal());
  }

  function renderDishDetails() {
    return (
      <div className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.note}>{note}</p>
        {link && <a href={link}>Click for more info</a>}
      </div>
    );
  }

  function renderInput() {
    return (
      <div className={styles.inputWrapper}>
        <div className={styles.notesHeader}><label  htmlFor="notes-input">Special Instructions</label></div>
        <textarea
          id="notes-input"
          className={styles.notes}
          placeholder="Please don't hesitate to add any special requests!"
          value={currentNotes}
          onChange={handleChangeNotes}
        />
      </div>
    );
  }

  function renderFooter() {
    return (
      <footer className={styles.footer}>
        {isSelected && (
          <button type="button" className={styles.removeButton} onClick={handleRemove}>
            REMOVE ITEM
          </button>
        )}

        <button type="button" className={styles.saveButton}  onClick={handleSubmit}>
          SAVE
        </button>
      </footer>
    );
  }

  return (
    <div className={styles.addEditDishModal} onClick={handleCancel}>
      <div className={styles.modalCard} onClick={handleCardClick}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCancel}
          >
            <img src={close} className={styles.closeIcon} alt="Close" /> 
          </button>
        </header>
        <main>
          {renderDishDetails()}
          {renderInput()}
        </main>
        {renderFooter()}
      </div>
    </div>
  );
}
