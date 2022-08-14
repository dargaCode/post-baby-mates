import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
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
  DISHES_BY_CATEGORY_ID_MAP
} from "../../utils/dishData";
import { CATEGORIES } from "../../utils/categoryData";

function App(): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuDiv, setMenuDiv] = useState<HTMLDivElement>();

  useEffect(() => {
    if (menuRef.current) {
      setMenuDiv(menuRef.current);
    }
  }, [menuRef.current]);

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
              <Navigation menuDiv={menuDiv} />
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
        <div className={styles.cartWrapper}>
          <Cart />
        </div>
      </div>
      {/* TODO FOOTER? */}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
