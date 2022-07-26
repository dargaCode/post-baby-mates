import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Provider, useSelector } from "react-redux";
import store from "../../app/store";

import styles from "./App.module.scss";
import "../../config/_general.scss";

import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import About from "../About/About";

import {
  DISHES_BY_ID_MAP,
  DISHES_BY_CATEGORY_ID_MAP,
  DISHES
} from "../../utils/dishData";
import { CATEGORIES } from "../../utils/categoryData";
import { selectCart } from "../Cart/Cart.slice";

const COPY_NOTIFICATION_TIMEOUT_MS = 2500;

function App(): JSX.Element {
  const { isCartVisible, selectedDishIdsMap, dishNotesMap } = useSelector(
    selectCart
  );

  const menuRef = useRef<HTMLDivElement>(null);
  const [menuDiv, setMenuDiv] = useState<HTMLDivElement>();

  const [wasCartRecentlyCopied, setWasCartRecentlyCopied] = useState(false);

  useEffect(() => {
    if (menuRef.current) {
      setMenuDiv(menuRef.current);
    }
  }, [menuRef.current]);

  const handleCopyCartText = () => {
    const cartDishes = DISHES.filter(dish => selectedDishIdsMap[dish.id]);

    const cartDishesText = cartDishes
      .map(({ name, id }, index) => {
        const notes = dishNotesMap[id];
        const notesText = notes ? `\n    Notes: "${notes}"` : "";

        return `${index + 1}: ${name}${notesText}`;
      })
      .join("\n");

    // TODO send email instead of copy?
    navigator.clipboard
      .writeText(cartDishesText)
      // eslint-disable-next-line promise/always-return
      .then(() => {
        console.log("Copy success", cartDishesText);
        setWasCartRecentlyCopied(true);

        setTimeout(() => {
          setWasCartRecentlyCopied(false);
        }, COPY_NOTIFICATION_TIMEOUT_MS);
      })
      .catch(error => {
        console.log("Copy failure", error);
      });
  };

  return (
    <div className={styles.app}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.aboutAndCartRow}>
        <div className={styles.aboutColumn}>
          <div className={styles.aboutWrapper}>
            <About />
          </div>
          <div className={styles.navAndMenuRow}>
            <div className={styles.navWrapper}>
              <Navigation categories={CATEGORIES} menuDiv={menuDiv} />
            </div>
            <div className={styles.menuWrapper}>
              <Menu
                ref={menuRef}
                categories={CATEGORIES}
                dishesByIdMap={DISHES_BY_ID_MAP}
                dishesByCategoryIdMap={DISHES_BY_CATEGORY_ID_MAP}
              />
            </div>
          </div>
        </div>
        {isCartVisible && (
          <div className={styles.cartWrapper}>
            <Cart
              onCopyText={handleCopyCartText}
              shouldShowCopiedNotification={wasCartRecentlyCopied}
            />
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
