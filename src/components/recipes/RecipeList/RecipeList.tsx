import React from 'react';

import styles from "./RecipeList.module.scss";

import RecipeCard from "../RecipeCard/RecipeCard";

import {RECIPES} from "../recipeData";
import {Category} from "../categoryUtils";

interface Props {
  category: Category;
}

export default function RecipeList(props: Props): JSX.Element {
  const {category: {id}} = props;
  const categoryRecipes = RECIPES.filter(recipe => recipe.categoryId === id);

  return (
    <div className={styles.recipeList}>
      {categoryRecipes.map((recipe, index) => {
        const key = `${index}-${recipe.name}`
        return <RecipeCard key={key} recipe={recipe}/>})}
    </div>
  );
}
