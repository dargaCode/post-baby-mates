import React from 'react';

import styles from "./RecipeList.module.scss";

import RecipeCard from "../RecipeCard/RecipeCard";

import {RECIPES} from "../recipeData";

export default function RecipeList(): JSX.Element {
  return (
    <div className={styles.recipeList}>
      <h2>Recipes</h2>
      {RECIPES.map((recipe) => <RecipeCard recipe={recipe}/>)}
    </div>
  );
}
