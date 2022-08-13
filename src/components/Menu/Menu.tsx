import React, { ForwardedRef } from "react";

import { useSelector } from "react-redux";
import styles from "./Menu.module.scss";

import MenuSection from "../MenuSection/MenuSection";
import AddEditDishModal from "../AddEditDishModal/AddEditDishModal";

import { selectAddEditDishModal } from "../AddEditDishModal/AddEditDishModal.slice";
import { selectCart } from "../Cart/Cart.slice";

import { DishesByCategoryIdMap, DishesByIdMap } from "../../utils/dishData";
import { Category } from "../../utils/categoryUtils";

interface Props {
  categories: Category[];
  dishesByIdMap: DishesByIdMap;
  dishesByCategoryIdMap: DishesByCategoryIdMap;
}

const Menu = React.forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { categories, dishesByIdMap, dishesByCategoryIdMap } = props;

    const { isModalOpen, modalEditingDishId } = useSelector(
      selectAddEditDishModal
    );
    const { dishNotesMap } = useSelector(selectCart);

    function renderAddEditDishModal(): JSX.Element | null {
      if (!isModalOpen || !modalEditingDishId) {
        return null;
      }

      const dish = dishesByIdMap[modalEditingDishId];
      const notes = dishNotesMap[modalEditingDishId];

      return <AddEditDishModal dish={dish} notes={notes} />;
    }

    return (
      <div ref={ref} className={styles.menu}>
        <h2 className="invisible-but-outline-readable">Menu</h2>
        {renderAddEditDishModal()}
        {categories.map((category, index) => {
          const { name, id } = category;
          const key = `${index}-${name}`;
          const categoryDishes = dishesByCategoryIdMap[id];

          return (
            <MenuSection
              key={key}
              category={category}
              dishes={categoryDishes}
            />
          );
        })}
      </div>
    );
  }
);

Menu.displayName = "Menu";

export default Menu;
