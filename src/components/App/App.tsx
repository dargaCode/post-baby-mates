import React from "react";
import ReactDOM from "react-dom";

import styles from "./App.module.scss";
import "../../config/_general.scss";

import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Menu from "../menu/Menu/Menu";


function App(): JSX.Element {
  return (
    <div>
      <Header/>
      {/* TODO ABOUT */}
      <div className={styles.mainWrapper}>
        <Navigation />
        <Menu />
      </div>
      {/* TODO CART */}
      {/* TODO FOOTER? */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
