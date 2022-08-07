import React from "react";
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

function App(): JSX.Element {
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
              <Navigation />
            </div>
            <div className={styles.menuWrapper}>
              <Menu />
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
