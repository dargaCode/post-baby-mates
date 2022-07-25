import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../components/Cart/Cart.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// ^ why isn't this used anywhere?

export default store;
