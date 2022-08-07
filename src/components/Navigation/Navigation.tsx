import React from "react";

import styles from "./Navigation.module.scss";

import { CATEGORIES } from "../../utils/categoryData";

export default function Navigation(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <h2 className="invisible-but-outline-readable">Navigation</h2>
      <ul>
        {CATEGORIES.map(({ name, id }, index) => {
          const key = `${index}-${id}`;

          return (
            <a href={`#${id}`} key={key}>
              <li key={key}>
                <h3>{name}</h3>
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
