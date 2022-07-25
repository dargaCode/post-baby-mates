import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from "../../app/store";

import styles from "./App.module.scss";
import "../../config/_general.scss";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import {Counter} from "../Counter/Counter";

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Header/>
      <div className={styles.about} >
        <p>Hello Rachel and Aric!</p>
        <p>We’d love to offer you our meal prep services to help take a bit of
          stress off your shoulders. These recipes are all staples in our home,
          are generally healthy and packed with veggies, and most importantly,
          they arrive frozen and reheat well.</p>
        <p>You are invited to place an order for 4-6 items, at 4-6 servings each (let us know),
          to be delivered to your door a couple weeks after you make your request.</p>
        <p>Please feel free to request ingredient substitutions or removals or
          any other customizations!All grains and grain-containing products will be carefully scrutinized
          for folic acid.</p>
      </div>
      <div className={styles.mainWrapper}>
        <Navigation />
        <Menu />
      </div>
      {/* TODO CART */}
      {/* TODO FOOTER? */}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
