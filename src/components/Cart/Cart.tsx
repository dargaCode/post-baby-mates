import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDishCartInclusion, selectCart } from "./Cart.slice";

import styles from "./Cart.module.scss";

import { DISHES } from "../../utils/dishData";

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  function renderCart() {
    const cartDishes = DISHES.filter(dish => cart[dish.id]);

    console.log(cartDishes);
    console.log(cart);

    return cartDishes.map(({ id }, index) => <div key={id}>{id}</div>);
  }

  return <div className={styles.cart}>{renderCart()}</div>;
}
