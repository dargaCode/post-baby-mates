/* eslint no-param-reassign: 0 */
/* ^Redux Toolkit allows us to write "mutating" logic in reducers. It
doesn't actually mutate the state because it uses the Immer library,
which detects changes to a "draft state" and produces a brand new
immutable state based off those changes. */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface CartState {
  selectedRecipeIds: string[];
}

const initialState: CartState = {
  selectedRecipeIds: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // the `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addRecipeId: (state, action: PayloadAction<string>) => {
      state.selectedRecipeIds.push(action.payload);
    },
  }
});

export const { addRecipeId } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.selectedRecipeIds;

export default cartSlice.reducer;
