import React from "react";

import styles from "./Navigation.module.scss";

import { CATEGORIES } from "../../utils/categoryData";

export default function Navigation(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul>
        {CATEGORIES.map(({ name, id }, index) => {
          const key = `${index}-${id}`;

          return (
            <a href={`#${id}`} key={key}>
              <li key={key}>{name}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
