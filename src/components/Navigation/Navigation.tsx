import React, { useState } from "react";

import styles from "./Navigation.module.scss";

import throttle from "../../utils/throttle";

import { Category } from "../../utils/categoryUtils";

/* compensate for header height */
const SCROLL_TO_SECTION_OFFSET = -87;
const ACTIVE_SECTION_THRESHOLD_OFFSET = 62;
const THROTTLE_DELAY_MS = 200;

interface Props {
  categories: Category[];
  menuDiv?: HTMLDivElement;
}

export default function Navigation({
  categories,
  menuDiv
}: Props): JSX.Element | null {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>();

  function handleWindowScroll() {
    const menuSectionDivs = categories.map(({ id }) => {
      if (!menuDiv) {
        return null;
      }

      return menuDiv.querySelector(`#${id}`) as HTMLDivElement;
    });

    // TODO refactor to reduce
    let scrolledSectionCount = 0;

    menuSectionDivs.forEach(menuSectionDiv => {
      if (!menuSectionDiv) {
        return null;
      }

      if (menuSectionDiv) {
        const { bottom } = menuSectionDiv.getBoundingClientRect();

        if (bottom <= ACTIVE_SECTION_THRESHOLD_OFFSET) {
          scrolledSectionCount += 1;
        }
      }

      setActiveSectionIndex(scrolledSectionCount);
    });
  }

  window.onscroll = () => {
    throttle(handleWindowScroll, THROTTLE_DELAY_MS);
  };

  function handleScrollToMenuSection(menuSectionDiv: HTMLDivElement | null) {
    if (menuSectionDiv) {
      window.scrollTo({
        top: menuSectionDiv.offsetTop + SCROLL_TO_SECTION_OFFSET,
        behavior: "smooth"
      });
    }
  }

  function renderListItems() {
    return categories.map(({ name, id }, index) => {
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
          className={activeSectionIndex === index ? styles.active : ""}
          onClick={() => {
            handleScrollToMenuSection(menuSectionDiv as HTMLDivElement);
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
