import React from 'react';

import styles from "./Menu.module.scss";

import {CATEGORIES} from "../../recipes/categoryData";
import {Category} from "../../recipes/categoryUtils";
import MenuSection from "../MenuSection/MenuSection";

export default function Menu(): JSX.Element {
  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      {CATEGORIES.map((category, index) => {
        const {name} = category;
        const key = `${index}-${name}`;

        return <MenuSection key={key} category={category} />
      })}
    </div>
  );
}
