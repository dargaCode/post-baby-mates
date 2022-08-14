import React, { useMemo } from "react";

import styles from "./Navigation.module.scss";

import { CATEGORIES } from "../../utils/categoryData";

/* compensate for header height */
const SCROLL_TO_SECTION_OFFSET = -87;

interface Props {
  menuDiv?: HTMLDivElement;
}

export default function Navigation({ menuDiv }: Props): JSX.Element | null {
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

  const listItems = useMemo(() => {
    return CATEGORIES.map(({ name, id }) => {
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
  }, []);

  return (
    <nav className={styles.navigation}>
      <h2 className="invisible-but-outline-readable">Navigation</h2>
      <ul>{listItems}</ul>
    </nav>
  );
}
