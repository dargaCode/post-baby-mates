import React from "react";

import styles from "./Menu.module.scss";

import MenuSection from "../MenuSection/MenuSection";

import { CATEGORIES } from "../../utils/categoryData";

export default function Menu(): JSX.Element {
  return (
    <div className={styles.menu}>
      <h2 className="invisible-but-outline-readable">Menu</h2>
      {CATEGORIES.map((category, index) => {
        const { name } = category;
        const key = `${index}-${name}`;

        return <MenuSection key={key} category={category} />;
      })}
    </div>
  );
}
