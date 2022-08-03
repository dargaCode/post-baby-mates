import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../Cart/Cart.slice";

import styles from "./MenuSection.module.scss";

import RecipeCard from "../RecipeCard/RecipeCard";

import {Category} from "../../utils/categoryUtils";
import {RECIPES} from "../../utils/recipeData";

interface Props {
  category: Category;
}

export default function MenuSection(props: Props): JSX.Element {
  const {category} = props;
  const {name, description} = category;

  const cart = useSelector(selectCart);

  function renderRecipes() {
    const {category: {id}} = props;
    const categoryRecipes = RECIPES.filter(recipe => recipe.categoryId === id);

    return (
      <div className={styles.recipes}>
        {categoryRecipes.map((recipe, index) => {
          const isSelected = !!cart[recipe.id];

          const key = `${index}-${recipe.name}`
          return <RecipeCard key={key} recipe={recipe} isSelected={isSelected} />})}
      </div>
    );
  }




  return (
    <div className={styles.menuSection} id={category.id}>
      <h3 className = {styles.name}>{name}</h3>
      <p className = {styles.description}>{description}</p>
      {renderRecipes()}
    </div>
  );
}
