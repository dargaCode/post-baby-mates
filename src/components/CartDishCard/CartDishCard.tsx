import React from "react";
import { useDispatch } from "react-redux";

import styles from "./CartDishCard.module.scss";

import { removeDishFromCart } from "../Cart/Cart.slice";
import { Dish } from "../../utils/dishUtils";

interface Props {
  dish: Dish;
}

export default function CartDishCard(props: Props): JSX.Element {
  const {
    dish: { id, name }
  } = props;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeDishFromCart(id));
  }

  return (
    <div className={styles.cartDishCard} onClick={handleClick}>
      <h4 className={styles.name}>{name}</h4>
    </div>
  );
}
