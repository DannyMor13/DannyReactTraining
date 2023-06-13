import { configureStore, Store } from "@reduxjs/toolkit";
import sumSlice from "./sumSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    sum: sumSlice,
    products: productsSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
