import React from 'react';

import styles from "./RecipeCard.module.scss";

import {Recipe} from "../recipeUtils";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard(props: Props): JSX.Element {
  const {recipe: {name, description}} = props;

  return (
    <div className={styles.recipeCard}>
      <h4 className={styles.recipeName}>{name}</h4>
      <p className={styles.recipeDescription}>{description}</p>
    </div>
  );
}
