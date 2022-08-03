import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleRecipeCartInclusion, selectCart} from "./Cart.slice";

import styles from './Cart.module.scss';

import {RECIPES} from "../../utils/recipeData";

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  function renderCart() {
    const cartRecipes = RECIPES.filter((recipe) => cart[recipe.id]);

    console.log(cartRecipes);
    console.log(cart);

    return cartRecipes.map(({id}, index) => <div key={id}>{id}</div>);

  }

  return (
    <div className={styles.cart}>
      {renderCart()}
    </div>
  );
}
