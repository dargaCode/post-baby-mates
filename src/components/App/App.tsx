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
      <Header />
      <div className={styles.outerFlexRow}>
        <div>
          <About />
          <div className={styles.innerFlexRow}>
            <Navigation />
            <Menu />
          </div>
        </div>
        <Cart />
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
