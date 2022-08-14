import React, { useEffect, useState } from "react";

import styles from "./Navigation.module.scss";

import throttle from "../../utils/throttle";

import { Category } from "../../utils/categoryUtils";

/* compensate for header height */
const SCROLL_TO_SECTION_OFFSET = -87;
const ACTIVE_SECTION_THRESHOLD_OFFSET = 60;
const THROTTLE_DELAY_MS = 200;

interface Props {
  categories: Category[];
  menuDiv?: HTMLDivElement;
}

export default function Navigation({
  categories,
  menuDiv
}: Props): JSX.Element | null {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(-1);

  function handleWindowScroll() {
    const menuSectionDivs = categories.map(({ id }) => {
      if (!menuDiv) {
        return null;
      }

      return menuDiv.querySelector(`#${id}`) as HTMLDivElement;
    });

    const nextActiveSectionIndex = menuSectionDivs.reduce(
      (scrolledSectionCount: number, menuSectionDiv) => {
        if (!menuSectionDiv) {
          return -1;
        }

        const { bottom } = menuSectionDiv.getBoundingClientRect();

        if (bottom <= ACTIVE_SECTION_THRESHOLD_OFFSET) {
          return scrolledSectionCount + 1;
        }
        return scrolledSectionCount;
      },
      0
    );

    setActiveSectionIndex(nextActiveSectionIndex);
  }

  /* make sure the function runs on mount */
  useEffect(() => {
    handleWindowScroll();
  }, [menuDiv]);

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
