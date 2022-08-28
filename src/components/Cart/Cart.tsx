import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllDishesFromCart, selectCart } from "./Cart.slice";

import styles from "./Cart.module.scss";

import { DISHES } from "../../utils/dishData";
import CartDishCard from "../CartDishCard/CartDishCard";

interface Props {
  onCopyText: React.MouseEventHandler;
}

export default function Cart({ onCopyText }: Props) {
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
        <p className={styles.cartDescription}> Select up to 6 items</p>
        <p className={styles.deliverBy}>Delivery in 2 weeks to your doorstep</p>

        {/* TODO delete id */}
        <div className={styles.dishes} id="copy-target">
          {renderDishes()}
        </div>
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
      {!!cartDishes.length && (
        <button type="button" className={styles.checkout} onClick={onCopyText}>
          <div className={styles.checkoutCta}>Place Order</div>
          <div className={styles.checkoutNote}>(Copy to clipboard)</div>
        </button>
      )}
    </div>
  );
}
