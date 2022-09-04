import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.scss";

import logo from "../../img/post-baby-mates-logo.png";
import cart from "../../img/icons/cart.svg";
import { selectCart, toggleCartVisibility } from "../Cart/Cart.slice";

export default function Header(): JSX.Element {
  const { selectedDishIdsMap } = useSelector(selectCart);
  const dispatch = useDispatch();

  // TODO the cart dish count doesn't update when items are deleted
  const cartDishCount = Object.keys(selectedDishIdsMap).length;
  const pluralizedItemText = `item${cartDishCount > 1 ? "s" : ""}`;
  const cartText =
    cartDishCount > 0 ? `${cartDishCount} ${pluralizedItemText}` : "Cart";

  const handleToggleCartVisibility = () => {
    dispatch(toggleCartVisibility());
  };

  return (
    <header className={styles.header}>
      <h1 className="invisible-but-outline-readable">Post-Baby-Mates</h1>
      <img src={logo} className={styles.logo} alt="Post-baby-mates logo" />
      <button
        type="button"
        className={styles.cartButton}
        onClick={handleToggleCartVisibility}
      >
        <img src={cart} className={styles.cartIcon} alt="Cart" />
        {cartText}
      </button>
    </header>
  );
}
