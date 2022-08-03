import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import styles from "./RecipeCard.module.scss";

import {toggleRecipeCartInclusion, selectCart} from "../Cart/Cart.slice";
import {Recipe} from "../../utils/recipeUtils";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard(props: Props): JSX.Element {
  const {recipe: {id, name, description, note}} = props;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleRecipeCartInclusion(id));
  }

  return (
    <div className={styles.recipeCard} onClick={handleClick} >
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.note}>{note}</p>
    </div>
  );
}
