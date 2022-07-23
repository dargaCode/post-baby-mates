import React from 'react';

import styles from "./Menu.module.scss";

import {CATEGORIES} from "../../recipes/categoryData";
import {Category} from "../../recipes/categoryUtils";

export default function Menu(): JSX.Element {
  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
    </div>
  );
}
