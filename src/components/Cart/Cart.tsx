import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllDishesFromCart, selectCart } from "./Cart.slice";

import styles from "./Cart.module.scss";

import { DISHES } from "../../utils/dishData";
import CartDishCard from "../CartDishCard/CartDishCard";

export default function Cart() {
  const { selectedDishIdsMap } = useSelector(selectCart);
  const dispatch = useDispatch();

  const cartDishes = DISHES.filter(dish => selectedDishIdsMap[dish.id]);

  function handleClearCart() {
    dispatch(removeAllDishesFromCart());
  }

  function renderDishes() {
    return cartDishes.map(cartDish => (
      <CartDishCard key={cartDish.id} dish={cartDish} />
    ));
  }

  return (
    <div className={styles.cart}>
      <div>
        <div className={styles.cartTitle}>Your Items</div>
        <div className={styles.dishes}>{renderDishes()}</div>
      </div>
      {!!cartDishes.length && (
        <button
          type="button"
          className={styles.clearCart}
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
