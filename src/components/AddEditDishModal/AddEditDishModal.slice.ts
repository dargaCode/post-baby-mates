/* eslint no-param-reassign: 0 */
/* ^Redux Toolkit allows us to write "mutating" logic in reducers. It
doesn't actually mutate the state because it uses the Immer library,
which detects changes to a "draft state" and produces a brand new
immutable state based off those changes. */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import {DishIds} from "../../utils/dishData";

interface AddEditDishModalState {
  isModalOpen: boolean;
  modalEditingDishId?: DishIds | null;
}

const initialState: AddEditDishModalState = {
  isModalOpen: false,
  modalEditingDishId: undefined,
};

export const addEditDishModalSlice = createSlice({
  name: 'addEditDishModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // the `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openModalForDish: (state, action: PayloadAction<string>) => {
      state.isModalOpen = true;
      state.modalEditingDishId = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalEditingDishId = null;
    },
  }
});

export const { openModalForDish, closeModal } = addEditDishModalSlice.actions;

export const selectAddEditDishModal = (state: RootState):AddEditDishModalState => state.addEditDishModal;

export default addEditDishModalSlice.reducer;
