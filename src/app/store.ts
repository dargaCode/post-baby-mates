import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "../components/Cart/Cart.slice";
import addEditDishModalReducer, {
  AddEditDishModalState
} from "../components/AddEditDishModal/AddEditDishModal.slice";

export interface StoreState {
  cart: CartState;
  addEditDishModal: AddEditDishModalState;
}

function saveStateToLocalStorage(state: StoreState) {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("state", stringifiedState);
  } catch {
    // ignore write errors
  }
}

export function loadStateFromLocalStorage(): StoreState | void {
  try {
    const stringifiedState = localStorage.getItem("state");
    if (stringifiedState === null) {
      return undefined;
    }

    return JSON.parse(stringifiedState) as StoreState;
  } catch (err) {
    return undefined;
  }
}

const storeConfig: ConfigureStoreOptions = {
  reducer: {
    cart: cartReducer,
    addEditDishModal: addEditDishModalReducer
  }
};

const loadedState = loadStateFromLocalStorage();

if (loadedState) {
  storeConfig.preloadedState = loadedState;
}

const store = configureStore(storeConfig);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState() as StoreState);
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
