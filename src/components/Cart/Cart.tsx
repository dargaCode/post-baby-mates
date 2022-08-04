import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "./Cart.slice";

import styles from "./Cart.module.scss";

import { DISHES } from "../../utils/dishData";
import CartDishCard from "../CartDishCard/CartDishCard";

export default function Cart() {
  const cart = useSelector(selectCart);

  function renderCart() {
    const cartDishes = DISHES.filter(dish => cart[dish.id]);

    return cartDishes.map(cartDish => (
      <CartDishCard key={cartDish.id} dish={cartDish} />
    ));
  }

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      {renderCart()}
    </div>
  );
}
