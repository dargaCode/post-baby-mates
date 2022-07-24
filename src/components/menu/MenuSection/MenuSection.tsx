import React from 'react';

import styles from "./MenuSection.module.scss";

import {Category} from "../../recipes/categoryUtils";
import RecipeList from "../../recipes/RecipeList/RecipeList";

interface Props {
  category: Category;
}

export default function MenuSection(props: Props): JSX.Element {
  const {category} = props;
  const {name, description} = category;

  return (
    <div className={styles.menuSection} id={category.id}>
      <h3 className = {styles.menuSectionName}>{name}</h3>
      <p className = {styles.menuSectionDescription}>{description}</p>

      <RecipeList category={category}/>
    </div>
  );
}
