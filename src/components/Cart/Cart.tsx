import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addRecipeId, selectCart} from "./Cart.slice";
import {RECIPES} from "../../utils/recipeData";

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const {id} = RECIPES[6];

  return (
    <div>
        <button
          type="button"
          onClick={() => dispatch(addRecipeId(id))}
        >
          add to cart
        </button>
      {cart.map((recipeId, index) => <div key={`${index}-${recipeId}`}>{recipeId}</div>)}
    </div>
  );
}
