import React from "react";

import { useSelector } from "react-redux";
import styles from "./Menu.module.scss";

import MenuSection from "../MenuSection/MenuSection";
import AddEditDishModal from "../AddEditDishModal/AddEditDishModal";

import { CATEGORIES } from "../../utils/categoryData";
import { selectAddEditDishModal } from "../AddEditDishModal/AddEditDishModal.slice";
import { DISHES_BY_ID } from "../../utils/dishData";
import { selectCart } from "../Cart/Cart.slice";

export default function Menu(): JSX.Element {
  const { isModalOpen, modalEditingDishId } = useSelector(
    selectAddEditDishModal
  );
  const { dishNotesMap } = useSelector(selectCart);

  function renderAddEditDishModal(): JSX.Element | null {
    if (!isModalOpen || !modalEditingDishId) {
      return null;
    }

    const dish = DISHES_BY_ID[modalEditingDishId];
    const notes = dishNotesMap[modalEditingDishId];

    return <AddEditDishModal dish={dish} notes={notes} />;
  }

  return (
    <div className={styles.menu}>
      <h2 className="invisible-but-outline-readable">Menu</h2>
      {renderAddEditDishModal()}
      {CATEGORIES.map((category, index) => {
        const { name } = category;
        const key = `${index}-${name}`;

        return <MenuSection key={key} category={category} />;
      })}
    </div>
  );
}
