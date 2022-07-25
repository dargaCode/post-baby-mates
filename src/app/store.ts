import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/Counter.slice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// ^ why isn't this used anywhere?

export default store;
