import React from 'react';

import styles from "./MenuSection.module.scss";

import {Category} from "../../recipes/recipeUtils";
import RecipeList from "../../recipes/RecipeList/RecipeList";

interface Props {
  category: Category;
}

export default function MenuSection(props: Props): JSX.Element {
  const {category: {name, category, description}} = props;

  return (
    <div className={styles.menuSection}>
      <h2>{name}</h2>
      <p>{description}</p>

      <RecipeList/>
    </div>
  );
}
