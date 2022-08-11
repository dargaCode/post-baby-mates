import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/Cart/Cart.slice";
import addEditDishModalReducer from "../components/AddEditDishModal/AddEditDishModal.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    addEditDishModal: addEditDishModalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// ^ why isn't this used anywhere?

export default store;
