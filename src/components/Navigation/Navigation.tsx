import React from "react";

import styles from "./Navigation.module.scss";

import { Category } from "../../utils/categoryUtils";

/* compensate for header height */
const SCROLL_TO_SECTION_OFFSET = -87;

interface Props {
  categories: Category[];
  menuDiv?: HTMLDivElement;
}

export default function Navigation({
  categories,
  menuDiv
}: Props): JSX.Element | null {
  if (!menuDiv) {
    return null;
  }

  function scrollToMenuSection(menuSectionDiv: HTMLDivElement | null) {
    if (menuSectionDiv) {
      window.scrollTo({
        top: menuSectionDiv.offsetTop + SCROLL_TO_SECTION_OFFSET,
        behavior: "smooth"
      });
    }
  }

  function renderListItems() {
    return categories.map(({ name, id }) => {
      if (!menuDiv) {
        return null;
      }

      const menuSectionDiv = menuDiv.querySelector(`#${id}`);

      if (!menuSectionDiv) {
        return null;
      }

      return (
        <li
          key={id}
          onClick={() => {
            scrollToMenuSection(menuSectionDiv as HTMLDivElement);
          }}
        >
          <h3>{name}</h3>
        </li>
      );
    });
  }

  return (
    <nav className={styles.navigation}>
      <h2 className="invisible-but-outline-readable">Navigation</h2>
      <ul>{renderListItems()}</ul>
    </nav>
  );
}
