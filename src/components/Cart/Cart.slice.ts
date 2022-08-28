/* eslint no-param-reassign: 0 */
/* ^Redux Toolkit allows us to write "mutating" logic in reducers. It
doesn't actually mutate the state because it uses the Immer library,
which detects changes to a "draft state" and produces a brand new
immutable state based off those changes. */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {StoreState} from '../../app/store';

import {BooleansByDishIdMap, StringsByDishIdMap} from "../../utils/dishData";

export interface CartState {
  selectedDishIdsMap: BooleansByDishIdMap;
  dishNotesMap: StringsByDishIdMap;
}

interface SetDishNotesPayload {
  id: string;
  notes: string;
}

const initialState: CartState = {
  selectedDishIdsMap: {},
  dishNotesMap: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // the `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addDishToCart: (state, action: PayloadAction<string>) => {
      state.selectedDishIdsMap[action.payload] = true;
    },
    removeDishFromCart: (state, action: PayloadAction<string>) => {
      state.selectedDishIdsMap[action.payload] = false;
    },
    removeAllDishesFromCart:     (state) => {
      state.selectedDishIdsMap = {};
    },
    setDishNotes: (state, action: PayloadAction<SetDishNotesPayload>) => {
      const {id, notes} = action.payload;

      state.dishNotesMap[id] = notes;
    },
  }
});

export const { addDishToCart, removeDishFromCart, removeAllDishesFromCart, setDishNotes } = cartSlice.actions;

export const selectCart = (state: StoreState) => state.cart;

export default cartSlice.reducer;
