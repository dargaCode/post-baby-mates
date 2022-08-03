import React from 'react';
import {useDispatch} from "react-redux";

import styles from "./RecipeCard.module.scss";

import {toggleRecipeCartInclusion} from "../Cart/Cart.slice";
import {Recipe} from "../../utils/recipeUtils";

interface Props {
  recipe: Recipe;
  isSelected: boolean;
}

export default function RecipeCard(props: Props): JSX.Element {
  const {recipe: {id, name, description, note, link}, isSelected} = props;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleRecipeCartInclusion(id));
  }

  return (
    <div className={`${styles.recipeCard} ${isSelected ? styles.selected : ''}`} onClick={handleClick} >
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.note}>{note}</p>
      {link && <a href={link}>Click for more info</a>}
    </div>
  );
}
